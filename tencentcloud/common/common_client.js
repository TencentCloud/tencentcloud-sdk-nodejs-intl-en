const AbstractClient = require('./abstract_client')
const SSEResponseModel = require("./sse_response_model");

class CommonClient extends AbstractClient {
  /**
   * @inner
   */
  succRequest(resp, cb, data) {
    cb(null, data);
  }

  /**
   * @inner
   */
  request(action, params, options, cb) {
    super.request(action, params, null, options, cb);
  }

  /**
   * @inner
   */
  requestOctetStream(action, params, options, cb) {
    super.requestOctetStream(action, params, null, options, cb);
  }
}

module.exports = CommonClient;
