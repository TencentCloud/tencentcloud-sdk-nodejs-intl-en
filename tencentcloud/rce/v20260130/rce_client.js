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
const RiskLabel = models.RiskLabel;
const Environment = models.Environment;
const AssessEnvironmentRiskRsp = models.AssessEnvironmentRiskRsp;
const IPLocation = models.IPLocation;
const DataScore = models.DataScore;
const AssessDeviceRiskRsp = models.AssessDeviceRiskRsp;
const AssessEnvironmentRiskResponse = models.AssessEnvironmentRiskResponse;
const AssessDeviceRiskPremiumProResponse = models.AssessDeviceRiskPremiumProResponse;
const AssessDeviceRiskProRequest = models.AssessDeviceRiskProRequest;
const AssessDeviceRiskPremiumProRequest = models.AssessDeviceRiskPremiumProRequest;
const AssessDeviceRiskProResponse = models.AssessDeviceRiskProResponse;
const IPNetwork = models.IPNetwork;
const AssessDeviceRiskPremiumRsp = models.AssessDeviceRiskPremiumRsp;
const AssessEnvironmentRiskRequest = models.AssessEnvironmentRiskRequest;
const Device = models.Device;
const Decision = models.Decision;


/**
 * rce client
 * @class
 */
class RceClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("rce.intl.tencentcloudapi.com", "2026-01-30", credential, region, profile);
    }
    
    /**
     * Device Risk Assessment - Basic
     * @param {AssessDeviceRiskProRequest} req
     * @param {function(string, AssessDeviceRiskProResponse):void} cb
     * @public
     */
    AssessDeviceRiskPro(req, cb) {
        let resp = new AssessDeviceRiskProResponse();
        this.request("AssessDeviceRiskPro", req, resp, cb);
    }

    /**
     * Device Risk assessment - Premium
     * @param {AssessDeviceRiskPremiumProRequest} req
     * @param {function(string, AssessDeviceRiskPremiumProResponse):void} cb
     * @public
     */
    AssessDeviceRiskPremiumPro(req, cb) {
        let resp = new AssessDeviceRiskPremiumProResponse();
        this.request("AssessDeviceRiskPremiumPro", req, resp, cb);
    }

    /**
     * Environment Risk Assessment
     * @param {AssessEnvironmentRiskRequest} req
     * @param {function(string, AssessEnvironmentRiskResponse):void} cb
     * @public
     */
    AssessEnvironmentRisk(req, cb) {
        let resp = new AssessEnvironmentRiskResponse();
        this.request("AssessEnvironmentRisk", req, resp, cb);
    }


}
module.exports = RceClient;
