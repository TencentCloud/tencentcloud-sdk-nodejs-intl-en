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
     * On the partner platform, create a Tencent Cloud account. After the sub-customer is registered, it will be automatically bound to the partner account.

Notes: <br>
1. Create a Tencent Cloud account and enter the email address , Mobile phone number, the partner needs to verify the validity.<br>
2, the customer needs to add personal information for the first login
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }

    /**
     * Get country and region code
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
