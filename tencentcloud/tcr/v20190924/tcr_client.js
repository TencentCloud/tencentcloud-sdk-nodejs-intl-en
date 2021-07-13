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
const CreateMultipleSecurityPolicyRequest = models.CreateMultipleSecurityPolicyRequest;
const CreateMultipleSecurityPolicyResponse = models.CreateMultipleSecurityPolicyResponse;
const DeleteMultipleSecurityPolicyResponse = models.DeleteMultipleSecurityPolicyResponse;
const SecurityPolicy = models.SecurityPolicy;
const DeleteMultipleSecurityPolicyRequest = models.DeleteMultipleSecurityPolicyRequest;


/**
 * tcr client
 * @class
 */
class TcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcr.tencentcloudapi.com", "2019-09-24", credential, region, profile);
    }
    
    /**
     * This API is used to create multiple public network access allowlist policies of the TCR instance.
     * @param {CreateMultipleSecurityPolicyRequest} req
     * @param {function(string, CreateMultipleSecurityPolicyResponse):void} cb
     * @public
     */
    CreateMultipleSecurityPolicy(req, cb) {
        let resp = new CreateMultipleSecurityPolicyResponse();
        this.request("CreateMultipleSecurityPolicy", req, resp, cb);
    }

    /**
     * This API is used to delete multiple public network access allowlist policies of the instance.
     * @param {DeleteMultipleSecurityPolicyRequest} req
     * @param {function(string, DeleteMultipleSecurityPolicyResponse):void} cb
     * @public
     */
    DeleteMultipleSecurityPolicy(req, cb) {
        let resp = new DeleteMultipleSecurityPolicyResponse();
        this.request("DeleteMultipleSecurityPolicy", req, resp, cb);
    }


}
module.exports = TcrClient;
