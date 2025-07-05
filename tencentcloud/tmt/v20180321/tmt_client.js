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
const TextTranslateResponse = models.TextTranslateResponse;
const TextTranslateRequest = models.TextTranslateRequest;


/**
 * tmt client
 * @class
 */
class TmtClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tmt.intl.tencentcloudapi.com", "2018-03-21", credential, region, profile);
    }
    
    /**
     * This API is used to translate text in multiple language pairs, such as Chinese-English.<br />
Note: We recommend that you simplify your development with the SDK integration mode. For how to use the SDK, see Section 5 "Developer Resources".
     * @param {TextTranslateRequest} req
     * @param {function(string, TextTranslateResponse):void} cb
     * @public
     */
    TextTranslate(req, cb) {
        let resp = new TextTranslateResponse();
        this.request("TextTranslate", req, resp, cb);
    }


}
module.exports = TmtClient;
