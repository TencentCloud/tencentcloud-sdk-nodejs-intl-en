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
const LogoParam = models.LogoParam;
const DescribeImageAnimateJobResponse = models.DescribeImageAnimateJobResponse;
const LogoRect = models.LogoRect;
const SubmitImageAnimateJobResponse = models.SubmitImageAnimateJobResponse;
const SubmitImageAnimateJobRequest = models.SubmitImageAnimateJobRequest;
const DescribeImageAnimateJobRequest = models.DescribeImageAnimateJobRequest;


/**
 * vclm client
 * @class
 */
class VclmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vclm.intl.tencentcloudapi.com", "2024-05-23", credential, region, profile);
    }
    
    /**
     * This API is used to query image animation tasks. The image animation feature supports generating videos based on dance movements and images to meet the needs of scenarios such as social entertainment and interactive marketing.
     * @param {DescribeImageAnimateJobRequest} req
     * @param {function(string, DescribeImageAnimateJobResponse):void} cb
     * @public
     */
    DescribeImageAnimateJob(req, cb) {
        let resp = new DescribeImageAnimateJobResponse();
        this.request("DescribeImageAnimateJob", req, resp, cb);
    }

    /**
     * This API is used to submit image animation tasks. The image animation feature supports generating videos based on dance movements and images to meet the needs of scenarios such as social entertainment and interactive marketing.
     * @param {SubmitImageAnimateJobRequest} req
     * @param {function(string, SubmitImageAnimateJobResponse):void} cb
     * @public
     */
    SubmitImageAnimateJob(req, cb) {
        let resp = new SubmitImageAnimateJobResponse();
        this.request("SubmitImageAnimateJob", req, resp, cb);
    }


}
module.exports = VclmClient;
