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
const AppStatisticsItem = models.AppStatisticsItem;
const ModifyAppStatusRequest = models.ModifyAppStatusRequest;
const DescribeApplicationDataRequest = models.DescribeApplicationDataRequest;
const VoiceMessageStatisticsItem = models.VoiceMessageStatisticsItem;
const DeleteRoomMemberRequest = models.DeleteRoomMemberRequest;
const RealTimeSpeechStatisticsItem = models.RealTimeSpeechStatisticsItem;
const StreamTextStatisticsItem = models.StreamTextStatisticsItem;
const Tag = models.Tag;
const VoiceMessageConf = models.VoiceMessageConf;
const AudioTextStatisticsItem = models.AudioTextStatisticsItem;
const ApplicationDataStatistics = models.ApplicationDataStatistics;
const ModifyAppStatusResp = models.ModifyAppStatusResp;
const CreateAppResp = models.CreateAppResp;
const DescribeApplicationDataResponse = models.DescribeApplicationDataResponse;
const DeleteRoomMemberResponse = models.DeleteRoomMemberResponse;
const VoiceFilterStatisticsItem = models.VoiceFilterStatisticsItem;
const StatisticsItem = models.StatisticsItem;
const RealtimeTextStatisticsItem = models.RealtimeTextStatisticsItem;
const DeleteResult = models.DeleteResult;
const OverseaTextStatisticsItem = models.OverseaTextStatisticsItem;
const CreateAppRequest = models.CreateAppRequest;
const RealtimeSpeechConf = models.RealtimeSpeechConf;
const DescribeAppStatisticsResp = models.DescribeAppStatisticsResp;
const CreateAppResponse = models.CreateAppResponse;
const DescribeAppStatisticsResponse = models.DescribeAppStatisticsResponse;
const DescribeAppStatisticsRequest = models.DescribeAppStatisticsRequest;
const ModifyAppStatusResponse = models.ModifyAppStatusResponse;
const VoiceFilterConf = models.VoiceFilterConf;


/**
 * gme client
 * @class
 */
class GmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gme.tencentcloudapi.com", "2018-07-11", credential, region, profile);
    }
    
    /**
     * This API is used to query the usage statistics of a GME application, including those of Voice Chat, Voice Message Service, Voice Analysis, etc. The maximum query period is the past 30 days.
     * @param {DescribeAppStatisticsRequest} req
     * @param {function(string, DescribeAppStatisticsResponse):void} cb
     * @public
     */
    DescribeAppStatistics(req, cb) {
        let resp = new DescribeAppStatisticsResponse();
        this.request("DescribeAppStatistics", req, resp, cb);
    }

    /**
     * This API is used to delete a room or remove members from the room.
     * @param {DeleteRoomMemberRequest} req
     * @param {function(string, DeleteRoomMemberResponse):void} cb
     * @public
     */
    DeleteRoomMember(req, cb) {
        let resp = new DeleteRoomMemberResponse();
        this.request("DeleteRoomMember", req, resp, cb);
    }

    /**
     * This API is used to change the status of an application.
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

    /**
     * This API is used to query data details for up to the past 90 days.
     * @param {DescribeApplicationDataRequest} req
     * @param {function(string, DescribeApplicationDataResponse):void} cb
     * @public
     */
    DescribeApplicationData(req, cb) {
        let resp = new DescribeApplicationDataResponse();
        this.request("DescribeApplicationData", req, resp, cb);
    }


}
module.exports = GmeClient;
