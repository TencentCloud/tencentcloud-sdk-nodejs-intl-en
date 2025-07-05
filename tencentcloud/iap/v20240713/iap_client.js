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
const ModifyIAPLoginSessionDurationRequest = models.ModifyIAPLoginSessionDurationRequest;
const DescribeIAPLoginSessionDurationRequest = models.DescribeIAPLoginSessionDurationRequest;
const CreateIAPUserOIDCConfigResponse = models.CreateIAPUserOIDCConfigResponse;
const CreateIAPUserOIDCConfigRequest = models.CreateIAPUserOIDCConfigRequest;
const DisableIAPUserSSOResponse = models.DisableIAPUserSSOResponse;
const DescribeIAPUserOIDCConfigRequest = models.DescribeIAPUserOIDCConfigRequest;
const ModifyIAPLoginSessionDurationResponse = models.ModifyIAPLoginSessionDurationResponse;
const DescribeIAPUserOIDCConfigResponse = models.DescribeIAPUserOIDCConfigResponse;
const UpdateIAPUserOIDCConfigResponse = models.UpdateIAPUserOIDCConfigResponse;
const UpdateIAPUserOIDCConfigRequest = models.UpdateIAPUserOIDCConfigRequest;
const DisableIAPUserSSORequest = models.DisableIAPUserSSORequest;
const DescribeIAPLoginSessionDurationResponse = models.DescribeIAPLoginSessionDurationResponse;


/**
 * iap client
 * @class
 */
class IapClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iap.intl.tencentcloudapi.com", "2024-07-13", credential, region, profile);
    }
    
    /**
     * This API is used to modify a user OIDC configuration.
     * @param {UpdateIAPUserOIDCConfigRequest} req
     * @param {function(string, UpdateIAPUserOIDCConfigResponse):void} cb
     * @public
     */
    UpdateIAPUserOIDCConfig(req, cb) {
        let resp = new UpdateIAPUserOIDCConfigResponse();
        this.request("UpdateIAPUserOIDCConfig", req, resp, cb);
    }

    /**
     * This API is used to query login session duration.
     * @param {DescribeIAPLoginSessionDurationRequest} req
     * @param {function(string, DescribeIAPLoginSessionDurationResponse):void} cb
     * @public
     */
    DescribeIAPLoginSessionDuration(req, cb) {
        let resp = new DescribeIAPLoginSessionDurationResponse();
        this.request("DescribeIAPLoginSessionDuration", req, resp, cb);
    }

    /**
     * This API is used to query a user OIDC configuration.
     * @param {DescribeIAPUserOIDCConfigRequest} req
     * @param {function(string, DescribeIAPUserOIDCConfigResponse):void} cb
     * @public
     */
    DescribeIAPUserOIDCConfig(req, cb) {
        let resp = new DescribeIAPUserOIDCConfigResponse();
        this.request("DescribeIAPUserOIDCConfig", req, resp, cb);
    }

    /**
     * This API is used to disable user SSO.
     * @param {DisableIAPUserSSORequest} req
     * @param {function(string, DisableIAPUserSSOResponse):void} cb
     * @public
     */
    DisableIAPUserSSO(req, cb) {
        let resp = new DisableIAPUserSSOResponse();
        this.request("DisableIAPUserSSO", req, resp, cb);
    }

    /**
     * This API is used to create a user OIDC configuration. Only one user OIDC IdP can be created, and the user SAML SSO IdP will be automatically disabled after it is created.
     * @param {CreateIAPUserOIDCConfigRequest} req
     * @param {function(string, CreateIAPUserOIDCConfigResponse):void} cb
     * @public
     */
    CreateIAPUserOIDCConfig(req, cb) {
        let resp = new CreateIAPUserOIDCConfigResponse();
        this.request("CreateIAPUserOIDCConfig", req, resp, cb);
    }

    /**
     * This API is used to modify login session duration.
     * @param {ModifyIAPLoginSessionDurationRequest} req
     * @param {function(string, ModifyIAPLoginSessionDurationResponse):void} cb
     * @public
     */
    ModifyIAPLoginSessionDuration(req, cb) {
        let resp = new ModifyIAPLoginSessionDurationResponse();
        this.request("ModifyIAPLoginSessionDuration", req, resp, cb);
    }


}
module.exports = IapClient;
