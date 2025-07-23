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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const SentimentAnalysis = models.SentimentAnalysis;
const RiskDetails = models.RiskDetails;
const TextModerationRequest = models.TextModerationRequest;
const DetailResults = models.DetailResults;
const Tag = models.Tag;
const User = models.User;
const Device = models.Device;
const SentimentDetail = models.SentimentDetail;
const TextModerationResponse = models.TextModerationResponse;


/**
 * tms client
 * @class
 */
class TmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tms.intl.tencentcloudapi.com", "2020-12-29", credential, region, profile);
    }
    
    /**
     * This API is used to submit text content for intelligent moderation. 

### Notes
- Before invoking this API, be sure you have activated Tencent Cloud Text Moderation System in the [Content Moderation - Text Moderation System](https://console.cloud.tencent.com/cms/text/package) console.
- This is a paid API. For the billing details, see [Text Moderation System Pricing](https://www.tencentcloud.com/document/product/1121/43752).

 
 
 
 
 
 

### Use limits
- The submitted texts can not be longer than 10,000 unicode characters.
- English letters, digits and Chinese characters are supported for moderation.
- The API request frequency limit: **1,000 times/second**.
     * @param {TextModerationRequest} req
     * @param {function(string, TextModerationResponse):void} cb
     * @public
     */
    TextModeration(req, cb) {
        let resp = new TextModerationResponse();
        this.request("TextModeration", req, resp, cb);
    }


}
module.exports = TmsClient;
