/**
 * HTTP settings.
 * @class
 */
/**
 * @typedef {Object.<string, string>} StringRecord
 * @property {string} key
 * @property {string} value
 */
class HttpProfile {

    /**
     * @param {string} protocol Only supports https://.
     * @param {string} endpoint Domain name, such as cvm.ap-shanghai.tencentcloud.com.
     * @param {string} reqMethod HTTP method, only supports GET and POST.
     * @param {number} reqTimeout Request timeout value, in seconds, default 60.
     * @param {StringRecord} headers HTTP headers, default {}.
     */
    constructor(protocol, endpoint, reqMethod, reqTimeout, headers) {
        /**
         * @type {string}
         */
        this.reqMethod = reqMethod || "POST";

        /**
         * @type {string || null}
         */
        this.endpoint = endpoint || null;

        /**
         * @type {string}
         */
        this.protocol = protocol || "https://";

        /**
         * @type {number}
         */
        this.reqTimeout = reqTimeout || 60;

        /**
         * @type {StringRecord}
         */
        this.headers = headers || {};
    }
}
module.exports = HttpProfile;
