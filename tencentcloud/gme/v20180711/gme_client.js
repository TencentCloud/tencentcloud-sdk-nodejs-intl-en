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
const Tag = models.Tag;
const AppStatisticsItem = models.AppStatisticsItem;
const ModifyAppStatusRequest = models.ModifyAppStatusRequest;
const VoiceFilterStatisticsItem = models.VoiceFilterStatisticsItem;
const CreateAppRequest = models.CreateAppRequest;
const RealtimeSpeechConf = models.RealtimeSpeechConf;
const CreateAppResponse = models.CreateAppResponse;
const RealTimeSpeechStatisticsItem = models.RealTimeSpeechStatisticsItem;
const DescribeAppStatisticsRequest = models.DescribeAppStatisticsRequest;
const ModifyAppStatusResponse = models.ModifyAppStatusResponse;
const VoiceMessageStatisticsItem = models.VoiceMessageStatisticsItem;
const VoiceMessageConf = models.VoiceMessageConf;
const VoiceFilterConf = models.VoiceFilterConf;
const DescribeAppStatisticsResponse = models.DescribeAppStatisticsResponse;


/**
 * gme client
 * @class
 */
class GmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gme.tencentcloudapi.com", "2018-07-11", credential, region, profile);
    }
    
    /**
     * This API is used to get the usage statistics of a GME application, including those of voice chat, voice messaging and speech-to-text, phrase analysis, etc. The maximum query period is the past 30 days.
     * @param {DescribeAppStatisticsRequest} req
     * @param {function(string, DescribeAppStatisticsResponse):void} cb
     * @public
     */
    DescribeAppStatistics(req, cb) {
        let resp = new DescribeAppStatisticsResponse();
        this.request("DescribeAppStatistics", req, resp, cb);
    }

    /**
     * This API is used to change the status of an application's master switch.
     * @param {ModifyAppStatusRequest} req
     * @param {function(string, ModifyAppStatusResponse):void} cb
     * @public
     */
    ModifyAppStatus(req, cb) {
        let resp = new ModifyAppStatusResponse();
        this.request("ModifyAppStatus", req, resp, cb);
    }

    /**
     * This API is used to create a GME application.
     * @param {CreateAppRequest} req
     * @param {function(string, CreateAppResponse):void} cb
     * @public
     */
    CreateApp(req, cb) {
        let resp = new CreateAppResponse();
        this.request("CreateApp", req, resp, cb);
    }


}
module.exports = GmeClient;
