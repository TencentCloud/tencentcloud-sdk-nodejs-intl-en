const { EventEmitter } = require('events')
const { createInterface } = require('readline')

/**
 * @interface EventSourceMessage
 * @description Represents a type EventSourceMessage.
 * @property {string} id - The event ID to set the EventSource object's last event ID value.
 * @property {string} event - A string identifying the type of event described.
 * @property {string} data - The event data.
 * @property {string} retry - The reconnection interval (in milliseconds) to wait before retrying the connection (optional).
 */

class SSEEventEmitter extends EventEmitter {}

class SSEResponseModel {
  /**
   * Initialize the SSE response model.
   * @param {NodeJS.ReadableStream} stream
   */
  constructor(stream) {
    this.stream = stream
    this.readline = createInterface({
      input: stream,
      crlfDelay: Infinity
    })
    this.eventSource = new SSEEventEmitter()
    this.init()
  }

  /**
   * @inner
   */
  init() {
    const { stream, readline, eventSource } = this

    let lines = []
    readline.on("line", (line) => {
      if (line) {
        lines.push(line)
        return
      }

      eventSource.emit("message", this.parseSSEMessage(lines.splice(0)));
    })
    readline.on("close", () => {
      if (lines.length > 0) {
        eventSource.emit("message", this.parseSSEMessage(lines.splice(0)));
      }
    })

    stream.on("close", () => {
      eventSource.emit("close")
    })
    stream.on("error", (err) => {
      eventSource.emit("error", err)
    })
  }

  /**
   * @inner
   * @param {string[]} lines
   */
  parseSSEMessage(lines) {
    /**
     * @type {EventSourceMessage}
     */
    const message = {
      data: "",
      event: "",
      id: "",
      retry: undefined,
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      // line is of format "<field>:<value>" or "<field>: <value>"
      const colonIndex = line.indexOf(":")
      if (colonIndex <= 0) continue // exclude comments and lines with no values
      const field = line.slice(0, colonIndex)
      const value = line.slice(colonIndex + (line[colonIndex + 1] === " " ? 2 : 1))

      switch (field) {
        case "data":
          message.data = message.data ? message.data + "\n" + value : value
          break
        case "event":
          message.event = value
          break
        case "id":
          message.id = value
          break
        case "retry":
          const retry = parseInt(value, 10)
          if (!isNaN(retry)) {
            // per spec, ignore non-integers
            message.retry = retry
          }
          break
      }
    }

    return message
  }

  /**
   * add event listener.
   * @param {"message"} event - The event type.
   * @param {(message: EventSourceMessage) => void} listener - The event listener for "message" event.
   * @returns {this}
   * @param {"close"} event - The event type.
   * @param {() => void} listener - The event listener for "close" event.
   * @returns {this}
   * @param {"error"} event - The event type.
   * @param {(err: Error) => void} listener - The event listener for "error" event.
   * @returns {this}
   * @param {string} event - The event type.
   * @param {any} listener - The event listener for other events.
   * @returns {this}
   */
  on(event, listener) {
    this.eventSource.on(event, listener)
    return this
  }

  /**
   * @param {"message"} event - The event type.
   * @param {(message: EventSourceMessage) => void} listener - The event listener for "message" event.
   * @returns {this}
   * @param {"close"} event - The event type.
   * @param {() => void} listener - The event listener for "close" event.
   * @returns {this}
   * @param {"error"} event - The event type.
   * @param {(err: Error) => void} listener - The event listener for "error" event.
   * @returns {this}
   * @param {string} event - The event type.
   * @param {any} listener - The event listener for other events.
   * @returns {this}
   */
  removeListener(event, listener) {
    this.eventSource.removeListener(event, listener)
    return this
  }

  /**
   * @function
   * @name Symbol.asyncIterator
   * @description Async iterator function for Symbol.asyncIterator.
   * @returns {AsyncIterableIterator<EventSourceMessage>}
   */
  async *[Symbol.asyncIterator]() {
    let lines = []
    for await (const line of this.readline) {
      if (line) {
        lines.push(line)
        continue
      }

      yield this.parseSSEMessage(lines.splice(0))
    }

    if (lines.length > 0) {
      yield this.parseSSEMessage(lines.splice(0))
    }
  }
}

module.exports = SSEResponseModel;
