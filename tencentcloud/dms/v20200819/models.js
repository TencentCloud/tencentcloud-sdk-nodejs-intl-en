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
 * SendTemplatedEmail request structure.
 * @class
 */
class SendTemplatedEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender address.
         * @type {string || null}
         */
        this.FromAddress = null;

        /**
         * Recipient address. Up to 100 recipient addresses are supported. Multiple addresses should be separated by semicolons (;).
         * @type {string || null}
         */
        this.ToAddress = null;

        /**
         * The name of the template created in advance.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Template variable value, which is a JSON string.
         * @type {string || null}
         */
        this.TemplateValue = null;

        /**
         * Sender name.
         * @type {string || null}
         */
        this.FromName = null;

        /**
         * Reply-to address.
         * @type {string || null}
         */
        this.ReplyAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromAddress = 'FromAddress' in params ? params.FromAddress : null;
        this.ToAddress = 'ToAddress' in params ? params.ToAddress : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateValue = 'TemplateValue' in params ? params.TemplateValue : null;
        this.FromName = 'FromName' in params ? params.FromName : null;
        this.ReplyAddress = 'ReplyAddress' in params ? params.ReplyAddress : null;

    }
}

/**
 * SendTemplatedEmail response structure.
 * @class
 */
class SendTemplatedEmailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The result of creating a template email task
         * @type {boolean || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendEmail request structure.
 * @class
 */
class SendEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender
         * @type {string || null}
         */
        this.FromAddress = null;

        /**
         * Recipient
         * @type {string || null}
         */
        this.ToAddress = null;

        /**
         * Email summary
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * Sender name
         * @type {string || null}
         */
        this.FromName = null;

        /**
         * Reply-to address
         * @type {string || null}
         */
        this.ReplyAddress = null;

        /**
         * The body of an HTML email
         * @type {string || null}
         */
        this.HtmlContent = null;

        /**
         * The body of a plain-text email
         * @type {string || null}
         */
        this.TextContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromAddress = 'FromAddress' in params ? params.FromAddress : null;
        this.ToAddress = 'ToAddress' in params ? params.ToAddress : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
        this.FromName = 'FromName' in params ? params.FromName : null;
        this.ReplyAddress = 'ReplyAddress' in params ? params.ReplyAddress : null;
        this.HtmlContent = 'HtmlContent' in params ? params.HtmlContent : null;
        this.TextContent = 'TextContent' in params ? params.TextContent : null;

    }
}

/**
 * SendEmail response structure.
 * @class
 */
class SendEmailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The result of creating an email task
         * @type {boolean || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SendTemplatedEmailRequest: SendTemplatedEmailRequest,
    SendTemplatedEmailResponse: SendTemplatedEmailResponse,
    SendEmailRequest: SendEmailRequest,
    SendEmailResponse: SendEmailResponse,

}
