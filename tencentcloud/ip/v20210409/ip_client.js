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
const AllocateCustomerCreditRequest = models.AllocateCustomerCreditRequest;
const GetCountryCodesResponse = models.GetCountryCodesResponse;
const QueryCustomersCreditRequest = models.QueryCustomersCreditRequest;
const QueryCreditAllocationHistoryResponse = models.QueryCreditAllocationHistoryResponse;
const QueryCreditAllocationHistoryRequest = models.QueryCreditAllocationHistoryRequest;
const QueryCustomersCreditResponse = models.QueryCustomersCreditResponse;
const CreateAccountRequest = models.CreateAccountRequest;
const QueryPartnerCreditResponse = models.QueryPartnerCreditResponse;
const CreateAccountResponse = models.CreateAccountResponse;
const QueryCreditAllocationHistoryData = models.QueryCreditAllocationHistoryData;
const AllocateCustomerCreditResponse = models.AllocateCustomerCreditResponse;
const QueryCustomersCreditData = models.QueryCustomersCreditData;
const GetCountryCodesRequest = models.GetCountryCodesRequest;
const QueryPartnerCreditRequest = models.QueryPartnerCreditRequest;
const CountryCodeItem = models.CountryCodeItem;


/**
 * ip client
 * @class
 */
class IpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ip.intl.tencentcloudapi.com", "2021-04-09", credential, region, profile);
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
     * This API is used for a partner to query its own total credit, available credit, and used credit in USD.
     * @param {QueryPartnerCreditRequest} req
     * @param {function(string, QueryPartnerCreditResponse):void} cb
     * @public
     */
    QueryPartnerCredit(req, cb) {
        let resp = new QueryPartnerCreditResponse();
        this.request("QueryPartnerCredit", req, resp, cb);
    }

    /**
     * This API is used for a partner to set credit for a customer, such as increasing or lowering the credit and setting it to 0.
1. The credit is valid permanently and will not be zeroed regularly.
2. The customer's service will be suspended when its available credit sets to 0, so caution should be exercised with this operation.
3. To prevent the customer from making new purchases without affecting their use of previously purchased products, the partner can set their available credit to 0 after obtaining the non-stop feature privilege from the channel manager.
4. The set credit is an increase to the current available credit and cannot exceed the remaining allocable credit. Setting the credit to a negative value indicates to repossess it. The available credit can be set to 0 at the minimum.
     * @param {AllocateCustomerCreditRequest} req
     * @param {function(string, AllocateCustomerCreditResponse):void} cb
     * @public
     */
    AllocateCustomerCredit(req, cb) {
        let resp = new AllocateCustomerCreditResponse();
        this.request("AllocateCustomerCredit", req, resp, cb);
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

    /**
     * This API is used to query all the credit allocation records of a single customer.
     * @param {QueryCreditAllocationHistoryRequest} req
     * @param {function(string, QueryCreditAllocationHistoryResponse):void} cb
     * @public
     */
    QueryCreditAllocationHistory(req, cb) {
        let resp = new QueryCreditAllocationHistoryResponse();
        this.request("QueryCreditAllocationHistory", req, resp, cb);
    }

    /**
     * This API is used for a partner to query a customer's credit and basic information.
     * @param {QueryCustomersCreditRequest} req
     * @param {function(string, QueryCustomersCreditResponse):void} cb
     * @public
     */
    QueryCustomersCredit(req, cb) {
        let resp = new QueryCustomersCreditResponse();
        this.request("QueryCustomersCredit", req, resp, cb);
    }


}
module.exports = IpClient;
