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
const AssumeRoleWithSAMLResponse = models.AssumeRoleWithSAMLResponse;
const AssumeRoleWithSAMLRequest = models.AssumeRoleWithSAMLRequest;
const GetFederationTokenResponse = models.GetFederationTokenResponse;
const AssumeRoleResponse = models.AssumeRoleResponse;
const GetFederationTokenRequest = models.GetFederationTokenRequest;
const Credentials = models.Credentials;
const AssumeRoleRequest = models.AssumeRoleRequest;


/**
 * sts client
 * @class
 */
class StsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sts.tencentcloudapi.com", "2018-08-13", credential, region, profile);
    }
    
    /**
     * This API is used to get temporary credentials for a federated user.
     * @param {GetFederationTokenRequest} req
     * @param {function(string, GetFederationTokenResponse):void} cb
     * @public
     */
    GetFederationToken(req, cb) {
        let resp = new GetFederationTokenResponse();
        this.request("GetFederationToken", req, resp, cb);
    }

    /**
     * This API is used to request for the temporary credentials for a role that has been authenticated via a SAML assertion.
     * @param {AssumeRoleWithSAMLRequest} req
     * @param {function(string, AssumeRoleWithSAMLResponse):void} cb
     * @public
     */
    AssumeRoleWithSAML(req, cb) {
        let resp = new AssumeRoleWithSAMLResponse();
        this.request("AssumeRoleWithSAML", req, resp, cb);
    }

    /**
     * This API is used to request for the temporary security credentials of a role.
     * @param {AssumeRoleRequest} req
     * @param {function(string, AssumeRoleResponse):void} cb
     * @public
     */
    AssumeRole(req, cb) {
        let resp = new AssumeRoleResponse();
        this.request("AssumeRole", req, resp, cb);
    }


}
module.exports = StsClient;
