/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * SendMessage response structure.
 * @class
 */
class SendMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Message ID
         * @type {Array.<string> || null}
         */
        this.MessageId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * A batch of messages
 * @class
 */
class BatchContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Message body
         * @type {string || null}
         */
        this.Body = null;

        /**
         * Key of a message
         * @type {string || null}
         */
        this.Key = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Body = 'Body' in params ? params.Body : null;
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * SendMessage request structure.
 * @class
 */
class SendMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the integrated resource
         * @type {string || null}
         */
        this.DataHubId = null;

        /**
         * A batch of messages
         * @type {Array.<BatchContent> || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataHubId = 'DataHubId' in params ? params.DataHubId : null;

        if (params.Message) {
            this.Message = new Array();
            for (let z in params.Message) {
                let obj = new BatchContent();
                obj.deserialize(params.Message[z]);
                this.Message.push(obj);
            }
        }

    }
}

module.exports = {
    SendMessageResponse: SendMessageResponse,
    BatchContent: BatchContent,
    SendMessageRequest: SendMessageRequest,

}
