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
const PermitOCRResponse = models.PermitOCRResponse;
const PermitOCRRequest = models.PermitOCRRequest;


/**
 * ocr client
 * @class
 */
class OcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ocr.intl.tencentcloudapi.com", "2018-11-19", credential, region, profile);
    }
    
    /**
     * This API is used to recognize the fields on an exit/entry permit (card) for traveling to and from Hong Kong, Macao, or Taiwan, including place of issuance, issuing authority, validity period, gender, date of birth, name in English, name in Chinese, and document number.

A maximum of 10 requests can be initiated per second for this API.
     * @param {PermitOCRRequest} req
     * @param {function(string, PermitOCRResponse):void} cb
     * @public
     */
    PermitOCR(req, cb) {
        let resp = new PermitOCRResponse();
        this.request("PermitOCR", req, resp, cb);
    }


}
module.exports = OcrClient;
