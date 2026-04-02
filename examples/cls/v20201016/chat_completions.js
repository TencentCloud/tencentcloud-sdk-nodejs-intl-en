const { cls } = require("tencentcloud-sdk-nodejs-cls")

// Import the client models for the corresponding product module
const ClsClient = cls.v20201016.Client

// 1. Instantiate the client object for the product to be requested
// Obtain the secret ID and secret key from environment variables, which are required credentials for accessing the Cloud API.
const client = new ClsClient({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-guangzhou",
  profile: {
    httpProfile: {
      reqTimeout: 300, // Streaming APIs may take a long time, so set the request timeout to 300 seconds.
      endpoint: 'cls.ai.tencentcloudapi.com' // When calling this API via SSE streaming, make sure to set the request endpoint to cls.ai.tencentcloudapi.com.
    },
  },
})

// 2. Construct request parameters
const params = {
  // Specify the feature to use, e.g. "text2sql".
  Model: 'text2sql',
  // Set the conversation messages, with role "user" and the user's question as content.
  Messages: [{
    Role: 'user',
    Content: 'Status code 200, count the number of logs'
  }],
  // Set metadata, passing the log topic region and log topic ID
  Metadata: [
    {
      Key: "topic_region",
      Value: "ap-guangzhou"
    },
    {
      Key: "topic_id",
      Value: "xxxxxxxx-xxxx"
    }
  ]
}

// 3. Streaming call
// CLS ChatCompletions supports both streaming and non-streaming modes.
// Set the Stream parameter to true to get the response in streaming mode.
async function main() {
  await client.ChatCompletions({
    ...params,
    Stream: true, // Streaming switch, defaults to false
  }).then(
    (res) => new Promise((resolve, reject) => {
      // Method 1: Use event listeners to process returned events one by one
      res.on('message', (message) => {
        // Skip events with empty data such as heartbeats (e.g. :heartbeat comments sent by the server periodically)
        if (!message.data) return
        // The server returns application-level errors via event: error
        if (message.event === 'error') {
          const err = JSON.parse(message.data)
          console.error('\n[Streaming] error', err.Response.Error)
          return
        }
        const data = JSON.parse(message.data)
        for (const choice of (data.Choices || [])) {
          // Output reasoning process (ReasoningContent) in real time
          if (choice.Delta.ReasoningContent) {
            process.stdout.write(choice.Delta.ReasoningContent)
          }
          // Output reply content (Content) in real time
          if (choice.Delta.Content) {
            process.stdout.write(choice.Delta.Content)
          }
        }
      })
      res.on('close', () => {
        process.stdout.write('\n')
        console.log('[Streaming] Done, starting non-streaming call...')
        resolve()
      })
      res.on('error', reject)

      // // Method 2: Use async iterator (choose either Method 1 or Method 2, do not use both)
      // for await (const message of res) {
      //   if (!message.data) continue
      //   if (message.event === 'error') {
      //     const err = JSON.parse(message.data)
      //     console.error('\n[Streaming] error', err.Response.Error)
      //     break
      //   }
      //   const data = JSON.parse(message.data)
      //   for (const choice of (data.Choices || [])) {
      //     if (choice.Delta.ReasoningContent) {
      //       process.stdout.write(choice.Delta.ReasoningContent)
      //     }
      //     if (choice.Delta.Content) {
      //       process.stdout.write(choice.Delta.Content)
      //     }
      //   }
      // }
      // process.stdout.write('\n')
      // console.log('[Streaming] Output complete')
    }),
    (err) => {
      console.error('[Streaming] error', err)
    }
  )

  // 4. Non-streaming call
  // Use Stream=false to specify non-streaming mode and get the result all at once.
  await client.ChatCompletions({
    ...params,
    Stream: false,
  }).then(
    (res) => {
      if (res.Choices[0].Message.ReasoningContent) {
        console.log("Reasoning process: ", res.Choices[0].Message.ReasoningContent)
      }
      console.log("[Non-streaming] Reply content:\n" + res.Choices[0].Message.Content)
    },
    (err) => {
      console.error('[Non-streaming] error', err)
    }
  )
}

main()
