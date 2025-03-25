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
const DescribeRiskAssessmentRequest = models.DescribeRiskAssessmentRequest;
const OutputRiskAssessmentExtraInfoPair = models.OutputRiskAssessmentExtraInfoPair;
const OutputRiskAssessment = models.OutputRiskAssessment;
const InputBizCryptoData = models.InputBizCryptoData;
const OutputRiskAssessmentInfo = models.OutputRiskAssessmentInfo;
const DescribeRiskAssessmentResponse = models.DescribeRiskAssessmentResponse;


/**
 * rce client
 * @class
 */
class RceClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("rce.intl.tencentcloudapi.com", "2020-11-03", credential, region, profile);
    }
    
    /**
     * This API is used to query risk assessment results.
     * @param {DescribeRiskAssessmentRequest} req
     * @param {function(string, DescribeRiskAssessmentResponse):void} cb
     * @public
     */
    DescribeRiskAssessment(req, cb) {
        let resp = new DescribeRiskAssessmentResponse();
        this.request("DescribeRiskAssessment", req, resp, cb);
    }


}
module.exports = RceClient;
