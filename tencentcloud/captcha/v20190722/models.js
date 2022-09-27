/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
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
 * DescribeCaptchaResult response structure.
 * @class
 */
class DescribeCaptchaResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         *  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
  
 
 
 
 
 
  
 
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * Status description and verification error message
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * This parameter returns the result of imperceptible verification. This parameter is not available for Tencent Cloud International yet.
`0`: The request is trusted.
`100`: The request is malicious.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.EvilLevel = null;

        /**
         * The timestamp when the frontend obtains the CAPTCHA.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.GetCaptchaTime = null;

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
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.EvilLevel = 'EvilLevel' in params ? params.EvilLevel : null;
        this.GetCaptchaTime = 'GetCaptchaTime' in params ? params.GetCaptchaTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaResult request structure.
 * @class
 */
class DescribeCaptchaResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * It must be `9` here. You can configure the CAPTCHA types in the console.
         * @type {number || null}
         */
        this.CaptchaType = null;

        /**
         * The user verification ticket returned by the frontend callback function
         * @type {string || null}
         */
        this.Ticket = null;

        /**
         * The user public IP obtained from the customer backend server
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * A random string returned by the frontend callback function
         * @type {string || null}
         */
        this.Randstr = null;

        /**
         * CAPTCHA's app ID. Log in to the [Captcha console](https://console.cloud.tencent.com/captcha/graphical) and you can view the CaptchaAppId in the "Key" column of the CAPTCHA list.
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * CAPTCHA's app key. Log in to the [Captcha console](https://console.cloud.tencent.com/captcha/graphical) and you can view the AppSecretKey in the "Key" column of the CAPTCHA list. AppSecretKey is the key for CAPTCHA ticket verification performed by the server. Please keep it confidential and do not disclose it to any third parties.
         * @type {string || null}
         */
        this.AppSecretKey = null;

        /**
         * Business ID, which is used to differentiate statistical data when this service is used in multiple businesses of a website or an app.
         * @type {number || null}
         */
        this.BusinessId = null;

        /**
         * Scenario ID, which is used to differentiate statistical data when this service is used in multiple scenarios of a website or an app.
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * MAC address or unique identifier of a device
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * Mobile equipment identity number
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * Indicates whether to return the time when the frontend obtains the CAPTCHA. Valid values: 1 (return the time) and others.
         * @type {number || null}
         */
        this.NeedGetCaptchaTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaType = 'CaptchaType' in params ? params.CaptchaType : null;
        this.Ticket = 'Ticket' in params ? params.Ticket : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Randstr = 'Randstr' in params ? params.Randstr : null;
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppSecretKey = 'AppSecretKey' in params ? params.AppSecretKey : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.NeedGetCaptchaTime = 'NeedGetCaptchaTime' in params ? params.NeedGetCaptchaTime : null;

    }
}

module.exports = {
    DescribeCaptchaResultResponse: DescribeCaptchaResultResponse,
    DescribeCaptchaResultRequest: DescribeCaptchaResultRequest,

}
