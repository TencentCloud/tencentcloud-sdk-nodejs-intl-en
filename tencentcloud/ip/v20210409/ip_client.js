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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const CreateAccountRequest = models.CreateAccountRequest;
const GetCountryCodesRequest = models.GetCountryCodesRequest;
const GetCountryCodesResponse = models.GetCountryCodesResponse;
const CreateAccountResponse = models.CreateAccountResponse;
const CountryCodeItem = models.CountryCodeItem;


/**
 * ip client
 * @class
 */
class IpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ip.tencentcloudapi.com", "2021-04-09", credential, region, profile);
    }
    
    /**
     * This API is used to create a Tencent Cloud account in the International Partner platform for a customer. After registration, the customer will be automatically bound to the partner account.

Notes:<br>
1. To create the Tencent Cloud account, the partner should enter and verify the customer’s email address and mobile number.<br>
2. The customer needs to complete personal information after the first login.
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }

    /**
     * This API is used to obtain country and region codes.
     * @param {GetCountryCodesRequest} req
     * @param {function(string, GetCountryCodesResponse):void} cb
     * @public
     */
    GetCountryCodes(req, cb) {
        let resp = new GetCountryCodesResponse();
        this.request("GetCountryCodes", req, resp, cb);
    }


}
module.exports = IpClient;
