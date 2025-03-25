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
const StatisticsItem = models.StatisticsItem;
const DescribeRecordInfoResponse = models.DescribeRecordInfoResponse;
const AppStatisticsItem = models.AppStatisticsItem;
const DeleteRoomMemberRequest = models.DeleteRoomMemberRequest;
const ModifyAppStatusRequest = models.ModifyAppStatusRequest;
const ModifyRecordInfoRequest = models.ModifyRecordInfoRequest;
const DescribeApplicationDataRequest = models.DescribeApplicationDataRequest;
const VoiceMessageStatisticsItem = models.VoiceMessageStatisticsItem;
const DescribeRecordInfoRequest = models.DescribeRecordInfoRequest;
const StartRecordResponse = models.StartRecordResponse;
const StartRecordRequest = models.StartRecordRequest;
const RealTimeSpeechStatisticsItem = models.RealTimeSpeechStatisticsItem;
const DescribeAppStatisticsRequest = models.DescribeAppStatisticsRequest;
const StreamTextStatisticsItem = models.StreamTextStatisticsItem;
const Tag = models.Tag;
const VoiceMessageConf = models.VoiceMessageConf;
const AudioTextStatisticsItem = models.AudioTextStatisticsItem;
const DescribeTaskInfoResponse = models.DescribeTaskInfoResponse;
const ApplicationDataStatistics = models.ApplicationDataStatistics;
const ModifyAppStatusResp = models.ModifyAppStatusResp;
const DescribeAppStatisticsResponse = models.DescribeAppStatisticsResponse;
const DescribeApplicationDataResponse = models.DescribeApplicationDataResponse;
const DeleteRoomMemberResponse = models.DeleteRoomMemberResponse;
const VoiceFilterStatisticsItem = models.VoiceFilterStatisticsItem;
const CreateAppResp = models.CreateAppResp;
const RecordInfo = models.RecordInfo;
const SubscribeRecordUserIds = models.SubscribeRecordUserIds;
const RealtimeTextStatisticsItem = models.RealtimeTextStatisticsItem;
const SceneInfo = models.SceneInfo;
const DeleteResult = models.DeleteResult;
const OverseaTextStatisticsItem = models.OverseaTextStatisticsItem;
const DescribeTaskInfoRequest = models.DescribeTaskInfoRequest;
const RealtimeSpeechConf = models.RealtimeSpeechConf;
const DescribeAppStatisticsResp = models.DescribeAppStatisticsResp;
const AsrConf = models.AsrConf;
const CreateAppResponse = models.CreateAppResponse;
const StopRecordRequest = models.StopRecordRequest;
const StopRecordResponse = models.StopRecordResponse;
const CreateAppRequest = models.CreateAppRequest;
const ModifyAppStatusResponse = models.ModifyAppStatusResponse;
const VoiceFilterConf = models.VoiceFilterConf;
const ModifyRecordInfoResponse = models.ModifyRecordInfoResponse;


/**
 * gme client
 * @class
 */
class GmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gme.intl.tencentcloudapi.com", "2018-07-11", credential, region, profile);
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
     * This API is used to modify recording configurations.
     * @param {ModifyRecordInfoRequest} req
     * @param {function(string, ModifyRecordInfoResponse):void} cb
     * @public
     */
    ModifyRecordInfo(req, cb) {
        let resp = new ModifyRecordInfoResponse();
        this.request("ModifyRecordInfo", req, resp, cb);
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
     * This API is used to query data details for up to the past 90 days.
     * @param {DescribeApplicationDataRequest} req
     * @param {function(string, DescribeApplicationDataResponse):void} cb
     * @public
     */
    DescribeApplicationData(req, cb) {
        let resp = new DescribeApplicationDataResponse();
        this.request("DescribeApplicationData", req, resp, cb);
    }

    /**
     * This API is used to query a recording task.
     * @param {DescribeRecordInfoRequest} req
     * @param {function(string, DescribeRecordInfoResponse):void} cb
     * @public
     */
    DescribeRecordInfo(req, cb) {
        let resp = new DescribeRecordInfoResponse();
        this.request("DescribeRecordInfo", req, resp, cb);
    }

    /**
     * This API is used to start recording.
     * @param {StartRecordRequest} req
     * @param {function(string, StartRecordResponse):void} cb
     * @public
     */
    StartRecord(req, cb) {
        let resp = new StartRecordResponse();
        this.request("StartRecord", req, resp, cb);
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
     * This API is used to query the recording task in a room.
     * @param {DescribeTaskInfoRequest} req
     * @param {function(string, DescribeTaskInfoResponse):void} cb
     * @public
     */
    DescribeTaskInfo(req, cb) {
        let resp = new DescribeTaskInfoResponse();
        this.request("DescribeTaskInfo", req, resp, cb);
    }

    /**
     * This API is used to stop recording.

     * @param {StopRecordRequest} req
     * @param {function(string, StopRecordResponse):void} cb
     * @public
     */
    StopRecord(req, cb) {
        let resp = new StopRecordResponse();
        this.request("StopRecord", req, resp, cb);
    }


}
module.exports = GmeClient;
