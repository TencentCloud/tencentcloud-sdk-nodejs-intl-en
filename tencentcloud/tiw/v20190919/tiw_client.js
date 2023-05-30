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
const DescribeOfflineRecordCallbackRequest = models.DescribeOfflineRecordCallbackRequest;
const Canvas = models.Canvas;
const StopOnlineRecordResponse = models.StopOnlineRecordResponse;
const SetVideoGenerationTaskCallbackKeyRequest = models.SetVideoGenerationTaskCallbackKeyRequest;
const DescribeTIWRoomDailyUsageRequest = models.DescribeTIWRoomDailyUsageRequest;
const DescribeWhiteboardPushRequest = models.DescribeWhiteboardPushRequest;
const DescribeWhiteboardPushSearchResponse = models.DescribeWhiteboardPushSearchResponse;
const ResumeOnlineRecordResponse = models.ResumeOnlineRecordResponse;
const UsageDataItem = models.UsageDataItem;
const DescribeWhiteboardApplicationConfigResponse = models.DescribeWhiteboardApplicationConfigResponse;
const WhiteboardPushResult = models.WhiteboardPushResult;
const CreateSnapshotTaskResponse = models.CreateSnapshotTaskResponse;
const DescribeOfflineRecordResponse = models.DescribeOfflineRecordResponse;
const ModifyApplicationResponse = models.ModifyApplicationResponse;
const CreateTranscodeResponse = models.CreateTranscodeResponse;
const DescribeUserResourcesResponse = models.DescribeUserResourcesResponse;
const VideoInfo = models.VideoInfo;
const CustomLayout = models.CustomLayout;
const Interrupt = models.Interrupt;
const DescribeOnlineRecordRequest = models.DescribeOnlineRecordRequest;
const RoomListItem = models.RoomListItem;
const ModifyWhiteboardBucketConfigRequest = models.ModifyWhiteboardBucketConfigRequest;
const SetOnlineRecordCallbackKeyResponse = models.SetOnlineRecordCallbackKeyResponse;
const DescribeRecordSearchResponse = models.DescribeRecordSearchResponse;
const DescribeAPIServiceRequest = models.DescribeAPIServiceRequest;
const DescribeQualityMetricsRequest = models.DescribeQualityMetricsRequest;
const CreateVideoGenerationTaskRequest = models.CreateVideoGenerationTaskRequest;
const DescribeTranscodeCallbackRequest = models.DescribeTranscodeCallbackRequest;
const DescribeTranscodeSearchResponse = models.DescribeTranscodeSearchResponse;
const ResumeOnlineRecordRequest = models.ResumeOnlineRecordRequest;
const SetWhiteboardPushCallbackKeyResponse = models.SetWhiteboardPushCallbackKeyResponse;
const DescribeRoomListRequest = models.DescribeRoomListRequest;
const SetWhiteboardPushCallbackResponse = models.SetWhiteboardPushCallbackResponse;
const ApplyTiwTrialResponse = models.ApplyTiwTrialResponse;
const OmittedDuration = models.OmittedDuration;
const PauseOnlineRecordRequest = models.PauseOnlineRecordRequest;
const DescribeApplicationInfosResponse = models.DescribeApplicationInfosResponse;
const DescribeApplicationUsageResponse = models.DescribeApplicationUsageResponse;
const DescribeAPIServiceResponse = models.DescribeAPIServiceResponse;
const TimeValue = models.TimeValue;
const RecordTaskResult = models.RecordTaskResult;
const DescribeWhiteboardBucketConfigRequest = models.DescribeWhiteboardBucketConfigRequest;
const DescribeUsageSummaryResponse = models.DescribeUsageSummaryResponse;
const DescribeApplicationInfosRequest = models.DescribeApplicationInfosRequest;
const DescribeApplicationUsageRequest = models.DescribeApplicationUsageRequest;
const SnapshotResult = models.SnapshotResult;
const DescribeOfflineRecordCallbackResponse = models.DescribeOfflineRecordCallbackResponse;
const CreateOfflineRecordResponse = models.CreateOfflineRecordResponse;
const SetVideoGenerationTaskCallbackKeyResponse = models.SetVideoGenerationTaskCallbackKeyResponse;
const DescribeVideoGenerationTaskResponse = models.DescribeVideoGenerationTaskResponse;
const DataItem = models.DataItem;
const DescribeVideoGenerationTaskRequest = models.DescribeVideoGenerationTaskRequest;
const DescribeWhiteboardPushCallbackRequest = models.DescribeWhiteboardPushCallbackRequest;
const DescribeOnlineRecordResponse = models.DescribeOnlineRecordResponse;
const DescribeTranscodeRequest = models.DescribeTranscodeRequest;
const DescribeBoardSDKLogResponse = models.DescribeBoardSDKLogResponse;
const SetOnlineRecordCallbackResponse = models.SetOnlineRecordCallbackResponse;
const ApplyTiwTrialRequest = models.ApplyTiwTrialRequest;
const DescribeTranscodeCallbackResponse = models.DescribeTranscodeCallbackResponse;
const DescribeUserListResponse = models.DescribeUserListResponse;
const ModifyAutoRenewFlagResponse = models.ModifyAutoRenewFlagResponse;
const DescribeTIWDailyUsageRequest = models.DescribeTIWDailyUsageRequest;
const DescribeWhiteboardBucketConfigResponse = models.DescribeWhiteboardBucketConfigResponse;
const MixStream = models.MixStream;
const DescribeBoardSDKLogRequest = models.DescribeBoardSDKLogRequest;
const DescribeVideoGenerationTaskCallbackRequest = models.DescribeVideoGenerationTaskCallbackRequest;
const SetWhiteboardPushCallbackKeyRequest = models.SetWhiteboardPushCallbackKeyRequest;
const DescribeTranscodeSearchRequest = models.DescribeTranscodeSearchRequest;
const AuthParam = models.AuthParam;
const Detail = models.Detail;
const StartWhiteboardPushRequest = models.StartWhiteboardPushRequest;
const CreateOfflineRecordRequest = models.CreateOfflineRecordRequest;
const UserListItem = models.UserListItem;
const DescribeVideoGenerationTaskCallbackResponse = models.DescribeVideoGenerationTaskCallbackResponse;
const WhiteboardPushTaskSearchResult = models.WhiteboardPushTaskSearchResult;
const ModifyWhiteboardApplicationConfigRequest = models.ModifyWhiteboardApplicationConfigRequest;
const WhiteboardPushBackupParam = models.WhiteboardPushBackupParam;
const DescribeSnapshotTaskRequest = models.DescribeSnapshotTaskRequest;
const StartOnlineRecordRequest = models.StartOnlineRecordRequest;
const DescribeUserStatusRequest = models.DescribeUserStatusRequest;
const DescribeOnlineRecordCallbackRequest = models.DescribeOnlineRecordCallbackRequest;
const RecordTaskSearchResult = models.RecordTaskSearchResult;
const SetTranscodeCallbackResponse = models.SetTranscodeCallbackResponse;
const StopOnlineRecordRequest = models.StopOnlineRecordRequest;
const SetOfflineRecordCallbackRequest = models.SetOfflineRecordCallbackRequest;
const SetVideoGenerationTaskCallbackResponse = models.SetVideoGenerationTaskCallbackResponse;
const ApplicationItem = models.ApplicationItem;
const ModifyWhiteboardApplicationConfigResponse = models.ModifyWhiteboardApplicationConfigResponse;
const SetVideoGenerationTaskCallbackRequest = models.SetVideoGenerationTaskCallbackRequest;
const SetWhiteboardPushCallbackRequest = models.SetWhiteboardPushCallbackRequest;
const DescribeTIWDailyUsageResponse = models.DescribeTIWDailyUsageResponse;
const Concat = models.Concat;
const DescribeWhiteboardApplicationConfigRequest = models.DescribeWhiteboardApplicationConfigRequest;
const RoomUsageDataItem = models.RoomUsageDataItem;
const SnapshotCOS = models.SnapshotCOS;
const CreateVideoGenerationTaskResponse = models.CreateVideoGenerationTaskResponse;
const Whiteboard = models.Whiteboard;
const PauseOnlineRecordResponse = models.PauseOnlineRecordResponse;
const ModifyWhiteboardBucketConfigResponse = models.ModifyWhiteboardBucketConfigResponse;
const CreateSnapshotTaskRequest = models.CreateSnapshotTaskRequest;
const DescribeTranscodeResponse = models.DescribeTranscodeResponse;
const SetOnlineRecordCallbackKeyRequest = models.SetOnlineRecordCallbackKeyRequest;
const ModifyApplicationRequest = models.ModifyApplicationRequest;
const DescribeOnlineRecordCallbackResponse = models.DescribeOnlineRecordCallbackResponse;
const SetOfflineRecordCallbackResponse = models.SetOfflineRecordCallbackResponse;
const RecordControl = models.RecordControl;
const DescribeQualityMetricsResponse = models.DescribeQualityMetricsResponse;
const TranscodeTaskResult = models.TranscodeTaskResult;
const DescribeIMApplicationsResponse = models.DescribeIMApplicationsResponse;
const SetOnlineRecordCallbackRequest = models.SetOnlineRecordCallbackRequest;
const DescribeUserListRequest = models.DescribeUserListRequest;
const DescribeUserResourcesRequest = models.DescribeUserResourcesRequest;
const StopWhiteboardPushResponse = models.StopWhiteboardPushResponse;
const DescribePostpaidUsageRequest = models.DescribePostpaidUsageRequest;
const LayoutParams = models.LayoutParams;
const StreamControl = models.StreamControl;
const DescribeRoomListResponse = models.DescribeRoomListResponse;
const DescribeIMApplicationsRequest = models.DescribeIMApplicationsRequest;
const ModifyAutoRenewFlagRequest = models.ModifyAutoRenewFlagRequest;
const DescribeSnapshotTaskResponse = models.DescribeSnapshotTaskResponse;
const DescribeUserStatusResponse = models.DescribeUserStatusResponse;
const StreamLayout = models.StreamLayout;
const DescribeTIWRoomDailyUsageResponse = models.DescribeTIWRoomDailyUsageResponse;
const DescribeWhiteboardPushCallbackResponse = models.DescribeWhiteboardPushCallbackResponse;
const CreateApplicationRequest = models.CreateApplicationRequest;
const DescribeWhiteboardPushSearchRequest = models.DescribeWhiteboardPushSearchRequest;
const SetTranscodeCallbackKeyResponse = models.SetTranscodeCallbackKeyResponse;
const DescribeWhiteboardPushResponse = models.DescribeWhiteboardPushResponse;
const StartOnlineRecordResponse = models.StartOnlineRecordResponse;
const Tag = models.Tag;
const DescribeUsageSummaryRequest = models.DescribeUsageSummaryRequest;
const SnapshotWhiteboard = models.SnapshotWhiteboard;
const CreateTranscodeRequest = models.CreateTranscodeRequest;
const SetTranscodeCallbackKeyRequest = models.SetTranscodeCallbackKeyRequest;
const SetTranscodeCallbackRequest = models.SetTranscodeCallbackRequest;
const DescribePostpaidUsageResponse = models.DescribePostpaidUsageResponse;
const StartWhiteboardPushResponse = models.StartWhiteboardPushResponse;
const WhiteboardApplicationConfig = models.WhiteboardApplicationConfig;
const TranscodeTaskSearchResult = models.TranscodeTaskSearchResult;
const CreateApplicationResponse = models.CreateApplicationResponse;
const StopWhiteboardPushRequest = models.StopWhiteboardPushRequest;
const DescribeOfflineRecordRequest = models.DescribeOfflineRecordRequest;
const DescribeRecordSearchRequest = models.DescribeRecordSearchRequest;


/**
 * tiw client
 * @class
 */
class TiwClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tiw.tencentcloudapi.com", "2019-09-19", credential, region, profile);
    }
    
    /**
     * This API is used to query the bucket configurations for document transcoding and real-time recording.
     * @param {DescribeWhiteboardBucketConfigRequest} req
     * @param {function(string, DescribeWhiteboardBucketConfigResponse):void} cb
     * @public
     */
    DescribeWhiteboardBucketConfig(req, cb) {
        let resp = new DescribeWhiteboardBucketConfigResponse();
        this.request("DescribeWhiteboardBucketConfig", req, resp, cb);
    }

    /**
     * This API is used to set the real-time recording callback address. For the callback format, please [see here](https://intl.cloud.tencent.com/document/product/1137/40258?from_cn_redirect=1).
     * @param {SetOnlineRecordCallbackRequest} req
     * @param {function(string, SetOnlineRecordCallbackResponse):void} cb
     * @public
     */
    SetOnlineRecordCallback(req, cb) {
        let resp = new SetOnlineRecordCallbackResponse();
        this.request("SetOnlineRecordCallback", req, resp, cb);
    }

    /**
     * This API is used to stop real-time recording.
     * @param {StopOnlineRecordRequest} req
     * @param {function(string, StopOnlineRecordResponse):void} cb
     * @public
     */
    StopOnlineRecord(req, cb) {
        let resp = new StopOnlineRecordResponse();
        this.request("StopOnlineRecord", req, resp, cb);
    }

    /**
     * This API is used to query the logs of a whiteboard application on a client.
     * @param {DescribeBoardSDKLogRequest} req
     * @param {function(string, DescribeBoardSDKLogResponse):void} cb
     * @public
     */
    DescribeBoardSDKLog(req, cb) {
        let resp = new DescribeBoardSDKLogResponse();
        this.request("DescribeBoardSDKLog", req, resp, cb);
    }

    /**
     * This API is used to query the users of a whiteboard application.
     * @param {DescribeUserListRequest} req
     * @param {function(string, DescribeUserListResponse):void} cb
     * @public
     */
    DescribeUserList(req, cb) {
        let resp = new DescribeUserListResponse();
        this.request("DescribeUserList", req, resp, cb);
    }

    /**
     * This API is used to set the callback URL for recording video generation.
     * @param {SetVideoGenerationTaskCallbackRequest} req
     * @param {function(string, SetVideoGenerationTaskCallbackResponse):void} cb
     * @public
     */
    SetVideoGenerationTaskCallback(req, cb) {
        let resp = new SetVideoGenerationTaskCallbackResponse();
        this.request("SetVideoGenerationTaskCallback", req, resp, cb);
    }

    /**
     * This API is used to query real-time recording tasks by room ID.
     * @param {DescribeRecordSearchRequest} req
     * @param {function(string, DescribeRecordSearchResponse):void} cb
     * @public
     */
    DescribeRecordSearch(req, cb) {
        let resp = new DescribeRecordSearchResponse();
        this.request("DescribeRecordSearch", req, resp, cb);
    }

    /**
     * This API is used to create a recording video generation task.
     * @param {CreateVideoGenerationTaskRequest} req
     * @param {function(string, CreateVideoGenerationTaskResponse):void} cb
     * @public
     */
    CreateVideoGenerationTask(req, cb) {
        let resp = new CreateVideoGenerationTaskResponse();
        this.request("CreateVideoGenerationTask", req, resp, cb);
    }

    /**
     * This API is used to set the callback authentication key for real-time recording. For more information, see [Event Notification](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
     * @param {SetOnlineRecordCallbackKeyRequest} req
     * @param {function(string, SetOnlineRecordCallbackKeyResponse):void} cb
     * @public
     */
    SetOnlineRecordCallbackKey(req, cb) {
        let resp = new SetOnlineRecordCallbackKeyResponse();
        this.request("SetOnlineRecordCallbackKey", req, resp, cb);
    }

    /**
     * This API is used to query the task-related configurations of a whiteboard application, including the bucket and callback URL.
     * @param {DescribeWhiteboardApplicationConfigRequest} req
     * @param {function(string, DescribeWhiteboardApplicationConfigResponse):void} cb
     * @public
     */
    DescribeWhiteboardApplicationConfig(req, cb) {
        let resp = new DescribeWhiteboardApplicationConfigResponse();
        this.request("DescribeWhiteboardApplicationConfig", req, resp, cb);
    }

    /**
     * This API is used to set the callback address for document transcoding. For the callback format, please [see here](https://intl.cloud.tencent.com/document/product/1137/40260?from_cn_redirect=1).
     * @param {SetTranscodeCallbackRequest} req
     * @param {function(string, SetTranscodeCallbackResponse):void} cb
     * @public
     */
    SetTranscodeCallback(req, cb) {
        let resp = new SetTranscodeCallbackResponse();
        this.request("SetTranscodeCallback", req, resp, cb);
    }

    /**
     * This API is used to resume real-time recording.
     * @param {ResumeOnlineRecordRequest} req
     * @param {function(string, ResumeOnlineRecordResponse):void} cb
     * @public
     */
    ResumeOnlineRecord(req, cb) {
        let resp = new ResumeOnlineRecordResponse();
        this.request("ResumeOnlineRecord", req, resp, cb);
    }

    /**
     * This API is used to apply for a Tencent Interactive Whiteboard trial (15-day by default).
     * @param {ApplyTiwTrialRequest} req
     * @param {function(string, ApplyTiwTrialResponse):void} cb
     * @public
     */
    ApplyTiwTrial(req, cb) {
        let resp = new ApplyTiwTrialResponse();
        this.request("ApplyTiwTrial", req, resp, cb);
    }

    /**
     * This API is used to query the pay-as-you-go usage of a user.
     * @param {DescribePostpaidUsageRequest} req
     * @param {function(string, DescribePostpaidUsageResponse):void} cb
     * @public
     */
    DescribePostpaidUsage(req, cb) {
        let resp = new DescribePostpaidUsageResponse();
        this.request("DescribePostpaidUsage", req, resp, cb);
    }

    /**
     * This API is used to set the callback authentication key for document transcoding. For more information, see [Event Notification](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
     * @param {SetTranscodeCallbackKeyRequest} req
     * @param {function(string, SetTranscodeCallbackKeyResponse):void} cb
     * @public
     */
    SetTranscodeCallbackKey(req, cb) {
        let resp = new SetTranscodeCallbackKeyResponse();
        this.request("SetTranscodeCallbackKey", req, resp, cb);
    }

    /**
     * This API is used to set the offline recording callback URL.
     * @param {SetOfflineRecordCallbackRequest} req
     * @param {function(string, SetOfflineRecordCallbackResponse):void} cb
     * @public
     */
    SetOfflineRecordCallback(req, cb) {
        let resp = new SetOfflineRecordCallbackResponse();
        this.request("SetOfflineRecordCallback", req, resp, cb);
    }

    /**
     * This API is used to create a whiteboard snapshot task. If a callback URL is provided, the whiteboard snapshot result is sent to the callback URL after the task is complete.
     * @param {CreateSnapshotTaskRequest} req
     * @param {function(string, CreateSnapshotTaskResponse):void} cb
     * @public
     */
    CreateSnapshotTask(req, cb) {
        let resp = new CreateSnapshotTaskResponse();
        this.request("CreateSnapshotTask", req, resp, cb);
    }

    /**
     * This API is used to query the callback URL for recording video generation.
     * @param {DescribeVideoGenerationTaskCallbackRequest} req
     * @param {function(string, DescribeVideoGenerationTaskCallbackResponse):void} cb
     * @public
     */
    DescribeVideoGenerationTaskCallback(req, cb) {
        let resp = new DescribeVideoGenerationTaskCallbackResponse();
        this.request("DescribeVideoGenerationTaskCallback", req, resp, cb);
    }

    /**
     * This API is used to modify a whiteboard application.
     * @param {ModifyApplicationRequest} req
     * @param {function(string, ModifyApplicationResponse):void} cb
     * @public
     */
    ModifyApplication(req, cb) {
        let resp = new ModifyApplicationResponse();
        this.request("ModifyApplication", req, resp, cb);
    }

    /**
     * This API is used to modify the task-related configurations of a whiteboard application, including the bucket and callback URL.
     * @param {ModifyWhiteboardApplicationConfigRequest} req
     * @param {function(string, ModifyWhiteboardApplicationConfigResponse):void} cb
     * @public
     */
    ModifyWhiteboardApplicationConfig(req, cb) {
        let resp = new ModifyWhiteboardApplicationConfigResponse();
        this.request("ModifyWhiteboardApplicationConfig", req, resp, cb);
    }

    /**
     * This API is used to query the status and result of a real-time recording task.
     * @param {DescribeOnlineRecordRequest} req
     * @param {function(string, DescribeOnlineRecordResponse):void} cb
     * @public
     */
    DescribeOnlineRecord(req, cb) {
        let resp = new DescribeOnlineRecordResponse();
        this.request("DescribeOnlineRecord", req, resp, cb);
    }

    /**
     * This API is used to set auto-renewal for a Tencent Interactive Whiteboard monthly feature package.
     * @param {ModifyAutoRenewFlagRequest} req
     * @param {function(string, ModifyAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifyAutoRenewFlag(req, cb) {
        let resp = new ModifyAutoRenewFlagResponse();
        this.request("ModifyAutoRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to query the real-time recording callback address.
     * @param {DescribeOnlineRecordCallbackRequest} req
     * @param {function(string, DescribeOnlineRecordCallbackResponse):void} cb
     * @public
     */
    DescribeOnlineRecordCallback(req, cb) {
        let resp = new DescribeOnlineRecordCallbackResponse();
        this.request("DescribeOnlineRecordCallback", req, resp, cb);
    }

    /**
     * This API is used to query the document transcoding callback address.
     * @param {DescribeTranscodeCallbackRequest} req
     * @param {function(string, DescribeTranscodeCallbackResponse):void} cb
     * @public
     */
    DescribeTranscodeCallback(req, cb) {
        let resp = new DescribeTranscodeCallbackResponse();
        this.request("DescribeTranscodeCallback", req, resp, cb);
    }

    /**
     * This API is used to query the information about other cloud products by using the service role.
     * @param {DescribeAPIServiceRequest} req
     * @param {function(string, DescribeAPIServiceResponse):void} cb
     * @public
     */
    DescribeAPIService(req, cb) {
        let resp = new DescribeAPIServiceResponse();
        this.request("DescribeAPIService", req, resp, cb);
    }

    /**
     * This API is used to query the whiteboard push callback URL.
     * @param {DescribeWhiteboardPushCallbackRequest} req
     * @param {function(string, DescribeWhiteboardPushCallbackResponse):void} cb
     * @public
     */
    DescribeWhiteboardPushCallback(req, cb) {
        let resp = new DescribeWhiteboardPushCallbackResponse();
        this.request("DescribeWhiteboardPushCallback", req, resp, cb);
    }

    /**
     * This API is used to query the details of a whiteboard application.
     * @param {DescribeApplicationInfosRequest} req
     * @param {function(string, DescribeApplicationInfosResponse):void} cb
     * @public
     */
    DescribeApplicationInfos(req, cb) {
        let resp = new DescribeApplicationInfosResponse();
        this.request("DescribeApplicationInfos", req, resp, cb);
    }

    /**
     * This API is used to start a real-time recording task.
     * @param {StartOnlineRecordRequest} req
     * @param {function(string, StartOnlineRecordResponse):void} cb
     * @public
     */
    StartOnlineRecord(req, cb) {
        let resp = new StartOnlineRecordResponse();
        this.request("StartOnlineRecord", req, resp, cb);
    }

    /**
     * This API is used to query the daily billable usage by each room of a whiteboard application.
1. The period queried per request cannot be longer than 31 days.
2. Due to statistics delays and other reasons, you cannot query the usage data of the current day. You can query today's usage after 7:00 tomorrow.

     * @param {DescribeTIWRoomDailyUsageRequest} req
     * @param {function(string, DescribeTIWRoomDailyUsageResponse):void} cb
     * @public
     */
    DescribeTIWRoomDailyUsage(req, cb) {
        let resp = new DescribeTIWRoomDailyUsageResponse();
        this.request("DescribeTIWRoomDailyUsage", req, resp, cb);
    }

    /**
     * This API is used to create a document transcoding task.
     * @param {CreateTranscodeRequest} req
     * @param {function(string, CreateTranscodeResponse):void} cb
     * @public
     */
    CreateTranscode(req, cb) {
        let resp = new CreateTranscodeResponse();
        this.request("CreateTranscode", req, resp, cb);
    }

    /**
     * This API is used to query transcoding tasks by document name.
     * @param {DescribeTranscodeSearchRequest} req
     * @param {function(string, DescribeTranscodeSearchResponse):void} cb
     * @public
     */
    DescribeTranscodeSearch(req, cb) {
        let resp = new DescribeTranscodeSearchResponse();
        this.request("DescribeTranscodeSearch", req, resp, cb);
    }

    /**
     * This API is used to query user resources.
     * @param {DescribeUserResourcesRequest} req
     * @param {function(string, DescribeUserResourcesResponse):void} cb
     * @public
     */
    DescribeUserResources(req, cb) {
        let resp = new DescribeUserResourcesResponse();
        this.request("DescribeUserResources", req, resp, cb);
    }

    /**
     * This API is used to set the whiteboard push callback URL. For more information, see [Event Notification](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
     * @param {SetWhiteboardPushCallbackRequest} req
     * @param {function(string, SetWhiteboardPushCallbackResponse):void} cb
     * @public
     */
    SetWhiteboardPushCallback(req, cb) {
        let resp = new SetWhiteboardPushCallbackResponse();
        this.request("SetWhiteboardPushCallback", req, resp, cb);
    }

    /**
     * This API is used to query the offline recording callback URL.
     * @param {DescribeOfflineRecordCallbackRequest} req
     * @param {function(string, DescribeOfflineRecordCallbackResponse):void} cb
     * @public
     */
    DescribeOfflineRecordCallback(req, cb) {
        let resp = new DescribeOfflineRecordCallbackResponse();
        this.request("DescribeOfflineRecordCallback", req, resp, cb);
    }

    /**
     * This API is used to query the progress and result of a document transcoding task.
     * @param {DescribeTranscodeRequest} req
     * @param {function(string, DescribeTranscodeResponse):void} cb
     * @public
     */
    DescribeTranscode(req, cb) {
        let resp = new DescribeTranscodeResponse();
        this.request("DescribeTranscode", req, resp, cb);
    }

    /**
     * This API is used to create an offline recording task.
     * @param {CreateOfflineRecordRequest} req
     * @param {function(string, CreateOfflineRecordResponse):void} cb
     * @public
     */
    CreateOfflineRecord(req, cb) {
        let resp = new CreateOfflineRecordResponse();
        this.request("CreateOfflineRecord", req, resp, cb);
    }

    /**
     * This API is used to query the summary of subproduct usage within a specified period of time.
     * @param {DescribeUsageSummaryRequest} req
     * @param {function(string, DescribeUsageSummaryResponse):void} cb
     * @public
     */
    DescribeUsageSummary(req, cb) {
        let resp = new DescribeUsageSummaryResponse();
        this.request("DescribeUsageSummary", req, resp, cb);
    }

    /**
     * This API is used to set the callback authentication key for whiteboard push. For more information, see [Event Notification](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
     * @param {SetWhiteboardPushCallbackKeyRequest} req
     * @param {function(string, SetWhiteboardPushCallbackKeyResponse):void} cb
     * @public
     */
    SetWhiteboardPushCallbackKey(req, cb) {
        let resp = new SetWhiteboardPushCallbackKeyResponse();
        this.request("SetWhiteboardPushCallbackKey", req, resp, cb);
    }

    /**
     * This API is used to query whiteboard push tasks by room ID.
     * @param {DescribeWhiteboardPushSearchRequest} req
     * @param {function(string, DescribeWhiteboardPushSearchResponse):void} cb
     * @public
     */
    DescribeWhiteboardPushSearch(req, cb) {
        let resp = new DescribeWhiteboardPushSearchResponse();
        this.request("DescribeWhiteboardPushSearch", req, resp, cb);
    }

    /**
     * This API is used to query the status and result of a recording video generation task.
     * @param {DescribeVideoGenerationTaskRequest} req
     * @param {function(string, DescribeVideoGenerationTaskResponse):void} cb
     * @public
     */
    DescribeVideoGenerationTask(req, cb) {
        let resp = new DescribeVideoGenerationTaskResponse();
        this.request("DescribeVideoGenerationTask", req, resp, cb);
    }

    /**
     * This API is used to create a whiteboard application.
     * @param {CreateApplicationRequest} req
     * @param {function(string, CreateApplicationResponse):void} cb
     * @public
     */
    CreateApplication(req, cb) {
        let resp = new CreateApplicationResponse();
        this.request("CreateApplication", req, resp, cb);
    }

    /**
     * This API is used to query the daily billable usage of a whiteboard application.
1. The period queried per request cannot be longer than 31 days.
2. Due to statistics delays and other reasons, you cannot query the usage data of the current day. You can query today's usage after 7:00 tomorrow.

     * @param {DescribeTIWDailyUsageRequest} req
     * @param {function(string, DescribeTIWDailyUsageResponse):void} cb
     * @public
     */
    DescribeTIWDailyUsage(req, cb) {
        let resp = new DescribeTIWDailyUsageResponse();
        this.request("DescribeTIWDailyUsage", req, resp, cb);
    }

    /**
     * This API is used to stop a whiteboard push task.
     * @param {StopWhiteboardPushRequest} req
     * @param {function(string, StopWhiteboardPushResponse):void} cb
     * @public
     */
    StopWhiteboardPush(req, cb) {
        let resp = new StopWhiteboardPushResponse();
        this.request("StopWhiteboardPush", req, resp, cb);
    }

    /**
     * This API is used to query the instant messaging (IM) applications that are available for creating a whiteboard application.
     * @param {DescribeIMApplicationsRequest} req
     * @param {function(string, DescribeIMApplicationsResponse):void} cb
     * @public
     */
    DescribeIMApplications(req, cb) {
        let resp = new DescribeIMApplicationsResponse();
        this.request("DescribeIMApplications", req, resp, cb);
    }

    /**
     * This API is used to query the quality data of a whiteboard application.
     * @param {DescribeQualityMetricsRequest} req
     * @param {function(string, DescribeQualityMetricsResponse):void} cb
     * @public
     */
    DescribeQualityMetrics(req, cb) {
        let resp = new DescribeQualityMetricsResponse();
        this.request("DescribeQualityMetrics", req, resp, cb);
    }

    /**
     * This API is used to query the information about an offline recording task, including the recording progress and recording result.
     * @param {DescribeOfflineRecordRequest} req
     * @param {function(string, DescribeOfflineRecordResponse):void} cb
     * @public
     */
    DescribeOfflineRecord(req, cb) {
        let resp = new DescribeOfflineRecordResponse();
        this.request("DescribeOfflineRecord", req, resp, cb);
    }

    /**
     * This API is used to start a whiteboard push task.
     * @param {StartWhiteboardPushRequest} req
     * @param {function(string, StartWhiteboardPushResponse):void} cb
     * @public
     */
    StartWhiteboardPush(req, cb) {
        let resp = new StartWhiteboardPushResponse();
        this.request("StartWhiteboardPush", req, resp, cb);
    }

    /**
     * This API is used to pause real-time recording.
     * @param {PauseOnlineRecordRequest} req
     * @param {function(string, PauseOnlineRecordResponse):void} cb
     * @public
     */
    PauseOnlineRecord(req, cb) {
        let resp = new PauseOnlineRecordResponse();
        this.request("PauseOnlineRecord", req, resp, cb);
    }

    /**
     * This API is used to query the subproduct usage of Tencent Interactive Whiteboard.
     * @param {DescribeApplicationUsageRequest} req
     * @param {function(string, DescribeApplicationUsageResponse):void} cb
     * @public
     */
    DescribeApplicationUsage(req, cb) {
        let resp = new DescribeApplicationUsageResponse();
        this.request("DescribeApplicationUsage", req, resp, cb);
    }

    /**
     * This API is used to query the rooms of a whiteboard application.
     * @param {DescribeRoomListRequest} req
     * @param {function(string, DescribeRoomListResponse):void} cb
     * @public
     */
    DescribeRoomList(req, cb) {
        let resp = new DescribeRoomListResponse();
        this.request("DescribeRoomList", req, resp, cb);
    }

    /**
     * This API is used to set the callback authentication key for recording video generation.
     * @param {SetVideoGenerationTaskCallbackKeyRequest} req
     * @param {function(string, SetVideoGenerationTaskCallbackKeyResponse):void} cb
     * @public
     */
    SetVideoGenerationTaskCallbackKey(req, cb) {
        let resp = new SetVideoGenerationTaskCallbackKeyResponse();
        this.request("SetVideoGenerationTaskCallbackKey", req, resp, cb);
    }

    /**
     * This API is used to query the status and result of a whiteboard push task.
     * @param {DescribeWhiteboardPushRequest} req
     * @param {function(string, DescribeWhiteboardPushResponse):void} cb
     * @public
     */
    DescribeWhiteboardPush(req, cb) {
        let resp = new DescribeWhiteboardPushResponse();
        this.request("DescribeWhiteboardPush", req, resp, cb);
    }

    /**
     * This API is used to query the Tencent Interactive Whiteboard service status of a user, including the activation status and validity period.

     * @param {DescribeUserStatusRequest} req
     * @param {function(string, DescribeUserStatusResponse):void} cb
     * @public
     */
    DescribeUserStatus(req, cb) {
        let resp = new DescribeUserStatusResponse();
        this.request("DescribeUserStatus", req, resp, cb);
    }

    /**
     * This API is used to query the information about a whiteboard snapshot task.
     * @param {DescribeSnapshotTaskRequest} req
     * @param {function(string, DescribeSnapshotTaskResponse):void} cb
     * @public
     */
    DescribeSnapshotTask(req, cb) {
        let resp = new DescribeSnapshotTaskResponse();
        this.request("DescribeSnapshotTask", req, resp, cb);
    }

    /**
     * This API is used to modify the bucket configurations for document transcoding and real-time recording.
     * @param {ModifyWhiteboardBucketConfigRequest} req
     * @param {function(string, ModifyWhiteboardBucketConfigResponse):void} cb
     * @public
     */
    ModifyWhiteboardBucketConfig(req, cb) {
        let resp = new ModifyWhiteboardBucketConfigResponse();
        this.request("ModifyWhiteboardBucketConfig", req, resp, cb);
    }


}
module.exports = TiwClient;
