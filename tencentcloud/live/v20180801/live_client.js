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
const CreateLiveSnapshotRuleRequest = models.CreateLiveSnapshotRuleRequest;
const BillDataInfo = models.BillDataInfo;
const EnableLiveDomainResponse = models.EnableLiveDomainResponse;
const DescribeUploadStreamNumsResponse = models.DescribeUploadStreamNumsResponse;
const HlsSpecialParam = models.HlsSpecialParam;
const TranscodeTotalInfo = models.TranscodeTotalInfo;
const StopRecordTaskResponse = models.StopRecordTaskResponse;
const DescribeDeliverBandwidthListResponse = models.DescribeDeliverBandwidthListResponse;
const DeleteLiveRecordRuleRequest = models.DeleteLiveRecordRuleRequest;
const ResumeLiveStreamRequest = models.ResumeLiveStreamRequest;
const DeleteLiveTranscodeTemplateResponse = models.DeleteLiveTranscodeTemplateResponse;
const FlvSpecialParam = models.FlvSpecialParam;
const DescribeBillBandwidthAndFluxListResponse = models.DescribeBillBandwidthAndFluxListResponse;
const CreateScreenshotTaskResponse = models.CreateScreenshotTaskResponse;
const DeleteLiveCallbackRuleResponse = models.DeleteLiveCallbackRuleResponse;
const ResumeDelayLiveStreamRequest = models.ResumeDelayLiveStreamRequest;
const DescribeLiveStreamPublishedListRequest = models.DescribeLiveStreamPublishedListRequest;
const DescribeLiveCallbackTemplateResponse = models.DescribeLiveCallbackTemplateResponse;
const CreateLivePullStreamTaskRequest = models.CreateLivePullStreamTaskRequest;
const DeleteLiveSnapshotTemplateRequest = models.DeleteLiveSnapshotTemplateRequest;
const DescribeGroupProIspPlayInfoListResponse = models.DescribeGroupProIspPlayInfoListResponse;
const PushAuthKeyInfo = models.PushAuthKeyInfo;
const DeleteLiveRecordTemplateRequest = models.DeleteLiveRecordTemplateRequest;
const DeleteLiveCallbackTemplateResponse = models.DeleteLiveCallbackTemplateResponse;
const CreateScreenshotTaskRequest = models.CreateScreenshotTaskRequest;
const PushQualityData = models.PushQualityData;
const ModifyLivePlayAuthKeyRequest = models.ModifyLivePlayAuthKeyRequest;
const DescribeLiveDelayInfoListRequest = models.DescribeLiveDelayInfoListRequest;
const HttpCodeValue = models.HttpCodeValue;
const DomainCertInfo = models.DomainCertInfo;
const CreateLiveTimeShiftRuleResponse = models.CreateLiveTimeShiftRuleResponse;
const DeleteLiveTranscodeRuleResponse = models.DeleteLiveTranscodeRuleResponse;
const ConcurrentRecordStreamNum = models.ConcurrentRecordStreamNum;
const DescribeStreamPlayInfoListResponse = models.DescribeStreamPlayInfoListResponse;
const DescribeScreenShotSheetNumListResponse = models.DescribeScreenShotSheetNumListResponse;
const ModifyLiveSnapshotTemplateResponse = models.ModifyLiveSnapshotTemplateResponse;
const CreateLivePullStreamTaskResponse = models.CreateLivePullStreamTaskResponse;
const ModifyLivePushAuthKeyRequest = models.ModifyLivePushAuthKeyRequest;
const DeleteLiveSnapshotTemplateResponse = models.DeleteLiveSnapshotTemplateResponse;
const DescribeLiveStreamStateRequest = models.DescribeLiveStreamStateRequest;
const DescribeLivePlayAuthKeyResponse = models.DescribeLivePlayAuthKeyResponse;
const DescribeLiveCallbackTemplatesRequest = models.DescribeLiveCallbackTemplatesRequest;
const DomainInfo = models.DomainInfo;
const DescribeLiveTranscodeRulesRequest = models.DescribeLiveTranscodeRulesRequest;
const DeleteLiveSnapshotRuleRequest = models.DeleteLiveSnapshotRuleRequest;
const DescribePlayErrorCodeDetailInfoListRequest = models.DescribePlayErrorCodeDetailInfoListRequest;
const DeleteLivePullStreamTaskRequest = models.DeleteLivePullStreamTaskRequest;
const CreateLiveTimeShiftRuleRequest = models.CreateLiveTimeShiftRuleRequest;
const CommonMixOutputParams = models.CommonMixOutputParams;
const DescribeUploadStreamNumsRequest = models.DescribeUploadStreamNumsRequest;
const DescribeLiveSnapshotRulesResponse = models.DescribeLiveSnapshotRulesResponse;
const DescribeLiveTranscodeDetailInfoResponse = models.DescribeLiveTranscodeDetailInfoResponse;
const DescribeLiveDomainRequest = models.DescribeLiveDomainRequest;
const AuthenticateDomainOwnerResponse = models.AuthenticateDomainOwnerResponse;
const DeleteLiveTranscodeRuleRequest = models.DeleteLiveTranscodeRuleRequest;
const CreateLiveRecordRuleRequest = models.CreateLiveRecordRuleRequest;
const DescribeLiveSnapshotTemplatesRequest = models.DescribeLiveSnapshotTemplatesRequest;
const AddLiveWatermarkResponse = models.AddLiveWatermarkResponse;
const DescribeLiveStreamPushInfoListResponse = models.DescribeLiveStreamPushInfoListResponse;
const DescribeLiveDomainCertResponse = models.DescribeLiveDomainCertResponse;
const DescribeLiveRecordTemplateRequest = models.DescribeLiveRecordTemplateRequest;
const MonitorStreamPlayInfo = models.MonitorStreamPlayInfo;
const CreateLiveWatermarkRuleResponse = models.CreateLiveWatermarkRuleResponse;
const ForbidLiveStreamRequest = models.ForbidLiveStreamRequest;
const DescribeTimeShiftStreamListRequest = models.DescribeTimeShiftStreamListRequest;
const DescribeDeliverBandwidthListRequest = models.DescribeDeliverBandwidthListRequest;
const PlayCodeTotalInfo = models.PlayCodeTotalInfo;
const AddLiveWatermarkRequest = models.AddLiveWatermarkRequest;
const TranscodeTaskNum = models.TranscodeTaskNum;
const ModifyLivePlayDomainRequest = models.ModifyLivePlayDomainRequest;
const DeleteLiveRecordTemplateResponse = models.DeleteLiveRecordTemplateResponse;
const DescribeLiveWatermarkRequest = models.DescribeLiveWatermarkRequest;
const ProIspPlayCodeDataInfo = models.ProIspPlayCodeDataInfo;
const AddDelayLiveStreamRequest = models.AddDelayLiveStreamRequest;
const DescribeLiveDomainCertRequest = models.DescribeLiveDomainCertRequest;
const DescribeLiveStreamEventListRequest = models.DescribeLiveStreamEventListRequest;
const CallBackTemplateInfo = models.CallBackTemplateInfo;
const DescribePlayErrorCodeSumInfoListResponse = models.DescribePlayErrorCodeSumInfoListResponse;
const DescribeLiveTimeShiftTemplatesRequest = models.DescribeLiveTimeShiftTemplatesRequest;
const DeleteLiveRecordResponse = models.DeleteLiveRecordResponse;
const DescribeScreenShotSheetNumListRequest = models.DescribeScreenShotSheetNumListRequest;
const DescribeLiveDomainsResponse = models.DescribeLiveDomainsResponse;
const TimeValue = models.TimeValue;
const ModifyLiveTimeShiftTemplateRequest = models.ModifyLiveTimeShiftTemplateRequest;
const ModifyLiveDomainCertBindingsResponse = models.ModifyLiveDomainCertBindingsResponse;
const StreamOnlineInfo = models.StreamOnlineInfo;
const CreateLiveRecordResponse = models.CreateLiveRecordResponse;
const RuleInfo = models.RuleInfo;
const UpdateLiveWatermarkResponse = models.UpdateLiveWatermarkResponse;
const ModifyLiveDomainCertBindingsRequest = models.ModifyLiveDomainCertBindingsRequest;
const DescribeRecordTaskRequest = models.DescribeRecordTaskRequest;
const CreateLiveTranscodeTemplateResponse = models.CreateLiveTranscodeTemplateResponse;
const TimeShiftTemplate = models.TimeShiftTemplate;
const LiveCertDomainInfo = models.LiveCertDomainInfo;
const DescribeLiveTimeShiftRulesRequest = models.DescribeLiveTimeShiftRulesRequest;
const DescribeVisitTopSumInfoListRequest = models.DescribeVisitTopSumInfoListRequest;
const DayStreamPlayInfo = models.DayStreamPlayInfo;
const DeleteLiveTimeShiftRuleRequest = models.DeleteLiveTimeShiftRuleRequest;
const CancelCommonMixStreamResponse = models.CancelCommonMixStreamResponse;
const DescribeLiveDomainCertBindingsResponse = models.DescribeLiveDomainCertBindingsResponse;
const DescribeConcurrentRecordStreamNumResponse = models.DescribeConcurrentRecordStreamNumResponse;
const DescribeLiveTimeShiftBillInfoListRequest = models.DescribeLiveTimeShiftBillInfoListRequest;
const RecordTask = models.RecordTask;
const DescribeLiveCertsResponse = models.DescribeLiveCertsResponse;
const CommonMixInputParam = models.CommonMixInputParam;
const WatermarkInfo = models.WatermarkInfo;
const DescribeLiveWatermarkRulesResponse = models.DescribeLiveWatermarkRulesResponse;
const DescribeLiveRecordTemplatesResponse = models.DescribeLiveRecordTemplatesResponse;
const PlayDataInfoByStream = models.PlayDataInfoByStream;
const DescribeLiveCertRequest = models.DescribeLiveCertRequest;
const DescribeLiveCallbackTemplatesResponse = models.DescribeLiveCallbackTemplatesResponse;
const ModifyLivePlayAuthKeyResponse = models.ModifyLivePlayAuthKeyResponse;
const CreateLiveCallbackTemplateRequest = models.CreateLiveCallbackTemplateRequest;
const DescribeTopClientIpSumInfoListResponse = models.DescribeTopClientIpSumInfoListResponse;
const DropLiveStreamResponse = models.DropLiveStreamResponse;
const DescribeLiveStreamStateResponse = models.DescribeLiveStreamStateResponse;
const StopLiveRecordRequest = models.StopLiveRecordRequest;
const TranscodeDetailInfo = models.TranscodeDetailInfo;
const DeleteLiveWatermarkRuleRequest = models.DeleteLiveWatermarkRuleRequest;
const StreamEventInfo = models.StreamEventInfo;
const DeleteRecordTaskResponse = models.DeleteRecordTaskResponse;
const DescribeLiveWatermarksRequest = models.DescribeLiveWatermarksRequest;
const CreateLiveTranscodeRuleRequest = models.CreateLiveTranscodeRuleRequest;
const DescribeLiveWatermarkRulesRequest = models.DescribeLiveWatermarkRulesRequest;
const DropLiveStreamRequest = models.DropLiveStreamRequest;
const DeleteLiveTimeShiftRuleResponse = models.DeleteLiveTimeShiftRuleResponse;
const PullPushWatermarkInfo = models.PullPushWatermarkInfo;
const UnBindLiveDomainCertRequest = models.UnBindLiveDomainCertRequest;
const DescribeProvinceIspPlayInfoListResponse = models.DescribeProvinceIspPlayInfoListResponse;
const CreateCommonMixStreamRequest = models.CreateCommonMixStreamRequest;
const RefererAuthConfig = models.RefererAuthConfig;
const DescribeTimeShiftRecordDetailRequest = models.DescribeTimeShiftRecordDetailRequest;
const PushDataInfo = models.PushDataInfo;
const CommonMixLayoutParams = models.CommonMixLayoutParams;
const DescribeGroupProIspPlayInfoListRequest = models.DescribeGroupProIspPlayInfoListRequest;
const RestartLivePullStreamTaskResponse = models.RestartLivePullStreamTaskResponse;
const DescribeStreamDayPlayInfoListRequest = models.DescribeStreamDayPlayInfoListRequest;
const RestartLivePullStreamTaskRequest = models.RestartLivePullStreamTaskRequest;
const DescribeLiveSnapshotTemplateResponse = models.DescribeLiveSnapshotTemplateResponse;
const DescribeLiveTranscodeRulesResponse = models.DescribeLiveTranscodeRulesResponse;
const CreateLiveTimeShiftTemplateRequest = models.CreateLiveTimeShiftTemplateRequest;
const DescribeLiveDomainRefererResponse = models.DescribeLiveDomainRefererResponse;
const AddLiveDomainRequest = models.AddLiveDomainRequest;
const StreamName = models.StreamName;
const DescribeLiveCertsRequest = models.DescribeLiveCertsRequest;
const DeleteLiveTimeShiftTemplateRequest = models.DeleteLiveTimeShiftTemplateRequest;
const ModifyLivePlayDomainResponse = models.ModifyLivePlayDomainResponse;
const CdnPlayStatData = models.CdnPlayStatData;
const AddLiveDomainResponse = models.AddLiveDomainResponse;
const DescribeHttpStatusInfoListRequest = models.DescribeHttpStatusInfoListRequest;
const ModifyLiveCallbackTemplateRequest = models.ModifyLiveCallbackTemplateRequest;
const DescribeProvinceIspPlayInfoListRequest = models.DescribeProvinceIspPlayInfoListRequest;
const TimeShiftStreamInfo = models.TimeShiftStreamInfo;
const DescribeLivePlayAuthKeyRequest = models.DescribeLivePlayAuthKeyRequest;
const DeleteLivePullStreamTaskResponse = models.DeleteLivePullStreamTaskResponse;
const AuthenticateDomainOwnerRequest = models.AuthenticateDomainOwnerRequest;
const DescribeLiveForbidStreamListResponse = models.DescribeLiveForbidStreamListResponse;
const DescribeStreamPushInfoListRequest = models.DescribeStreamPushInfoListRequest;
const DeleteLiveTimeShiftTemplateResponse = models.DeleteLiveTimeShiftTemplateResponse;
const ModifyLivePushAuthKeyResponse = models.ModifyLivePushAuthKeyResponse;
const DescribeLiveWatermarkResponse = models.DescribeLiveWatermarkResponse;
const ResumeLiveStreamResponse = models.ResumeLiveStreamResponse;
const DescribeLiveStreamOnlineListResponse = models.DescribeLiveStreamOnlineListResponse;
const DescribeTimeShiftStreamListResponse = models.DescribeTimeShiftStreamListResponse;
const ModifyLiveTimeShiftTemplateResponse = models.ModifyLiveTimeShiftTemplateResponse;
const DescribeStreamPushInfoListResponse = models.DescribeStreamPushInfoListResponse;
const DescribeLiveStreamPushInfoListRequest = models.DescribeLiveStreamPushInfoListRequest;
const StopLiveRecordResponse = models.StopLiveRecordResponse;
const DescribeLiveWatermarksResponse = models.DescribeLiveWatermarksResponse;
const TimeShiftBillData = models.TimeShiftBillData;
const DescribeLiveForbidStreamListRequest = models.DescribeLiveForbidStreamListRequest;
const DescribeTopClientIpSumInfoListRequest = models.DescribeTopClientIpSumInfoListRequest;
const CreateLiveCallbackRuleRequest = models.CreateLiveCallbackRuleRequest;
const DeleteLiveWatermarkRuleResponse = models.DeleteLiveWatermarkRuleResponse;
const TimeShiftRecord = models.TimeShiftRecord;
const PublishTime = models.PublishTime;
const ModifyLiveTranscodeTemplateResponse = models.ModifyLiveTranscodeTemplateResponse;
const ModifyLivePullStreamTaskRequest = models.ModifyLivePullStreamTaskRequest;
const DescribeLiveTranscodeDetailInfoRequest = models.DescribeLiveTranscodeDetailInfoRequest;
const ModifyLiveDomainRefererResponse = models.ModifyLiveDomainRefererResponse;
const DeleteLiveWatermarkRequest = models.DeleteLiveWatermarkRequest;
const DescribeLiveDomainsRequest = models.DescribeLiveDomainsRequest;
const RecentPullInfo = models.RecentPullInfo;
const SnapshotTemplateInfo = models.SnapshotTemplateInfo;
const DeleteLiveSnapshotRuleResponse = models.DeleteLiveSnapshotRuleResponse;
const CreateLiveRecordRequest = models.CreateLiveRecordRequest;
const DescribeLiveTimeShiftBillInfoListResponse = models.DescribeLiveTimeShiftBillInfoListResponse;
const BandwidthInfo = models.BandwidthInfo;
const CancelCommonMixStreamRequest = models.CancelCommonMixStreamRequest;
const UpdateLiveWatermarkRequest = models.UpdateLiveWatermarkRequest;
const CertInfo = models.CertInfo;
const StartLivePadStreamRequest = models.StartLivePadStreamRequest;
const DescribeRecordTaskResponse = models.DescribeRecordTaskResponse;
const DescribeLiveDelayInfoListResponse = models.DescribeLiveDelayInfoListResponse;
const DeleteLiveTranscodeTemplateRequest = models.DeleteLiveTranscodeTemplateRequest;
const DescribeLiveCallbackRulesRequest = models.DescribeLiveCallbackRulesRequest;
const ClientIpPlaySumInfo = models.ClientIpPlaySumInfo;
const DescribeLiveTranscodeTemplateResponse = models.DescribeLiveTranscodeTemplateResponse;
const CreateLiveSnapshotTemplateResponse = models.CreateLiveSnapshotTemplateResponse;
const DescribeConcurrentRecordStreamNumRequest = models.DescribeConcurrentRecordStreamNumRequest;
const DescribePlayErrorCodeSumInfoListRequest = models.DescribePlayErrorCodeSumInfoListRequest;
const ModifyLiveRecordTemplateResponse = models.ModifyLiveRecordTemplateResponse;
const CommonMixControlParams = models.CommonMixControlParams;
const ModifyLiveRecordTemplateRequest = models.ModifyLiveRecordTemplateRequest;
const DescribeTranscodeTaskNumResponse = models.DescribeTranscodeTaskNumResponse;
const UnBindLiveDomainCertResponse = models.UnBindLiveDomainCertResponse;
const ForbidLiveDomainRequest = models.ForbidLiveDomainRequest;
const DescribeLiveRecordRulesRequest = models.DescribeLiveRecordRulesRequest;
const DescribePlayErrorCodeDetailInfoListResponse = models.DescribePlayErrorCodeDetailInfoListResponse;
const StartLivePadStreamResponse = models.StartLivePadStreamResponse;
const CreateLiveRecordTemplateResponse = models.CreateLiveRecordTemplateResponse;
const GroupProIspDataInfo = models.GroupProIspDataInfo;
const RecordParam = models.RecordParam;
const ForbidLiveStreamResponse = models.ForbidLiveStreamResponse;
const HttpStatusInfo = models.HttpStatusInfo;
const DeleteLiveRecordRequest = models.DeleteLiveRecordRequest;
const DescribeLiveSnapshotTemplatesResponse = models.DescribeLiveSnapshotTemplatesResponse;
const StopRecordTaskRequest = models.StopRecordTaskRequest;
const DescribeLiveDomainRefererRequest = models.DescribeLiveDomainRefererRequest;
const HttpStatusData = models.HttpStatusData;
const HttpCodeInfo = models.HttpCodeInfo;
const DescribeStreamPlayInfoListRequest = models.DescribeStreamPlayInfoListRequest;
const CreateLiveTranscodeTemplateRequest = models.CreateLiveTranscodeTemplateRequest;
const DescribeLiveStreamPublishedListResponse = models.DescribeLiveStreamPublishedListResponse;
const DescribeLiveTimeShiftRulesResponse = models.DescribeLiveTimeShiftRulesResponse;
const DeleteLiveDomainRequest = models.DeleteLiveDomainRequest;
const DescribeLiveTimeShiftTemplatesResponse = models.DescribeLiveTimeShiftTemplatesResponse;
const AddDelayLiveStreamResponse = models.AddDelayLiveStreamResponse;
const DescribeLiveTranscodeTemplatesResponse = models.DescribeLiveTranscodeTemplatesResponse;
const DeleteLiveCallbackRuleRequest = models.DeleteLiveCallbackRuleRequest;
const PlayAuthKeyInfo = models.PlayAuthKeyInfo;
const BatchDomainOperateErrors = models.BatchDomainOperateErrors;
const ModifyLiveTranscodeTemplateRequest = models.ModifyLiveTranscodeTemplateRequest;
const EnableLiveDomainRequest = models.EnableLiveDomainRequest;
const DescribeAllStreamPlayInfoListResponse = models.DescribeAllStreamPlayInfoListResponse;
const DescribeLiveTranscodeTotalInfoResponse = models.DescribeLiveTranscodeTotalInfoResponse;
const DescribeLiveSnapshotRulesRequest = models.DescribeLiveSnapshotRulesRequest;
const CreateRecordTaskRequest = models.CreateRecordTaskRequest;
const DescribeLivePullStreamTasksResponse = models.DescribeLivePullStreamTasksResponse;
const CreateLiveTranscodeRuleResponse = models.CreateLiveTranscodeRuleResponse;
const ResumeDelayLiveStreamResponse = models.ResumeDelayLiveStreamResponse;
const CreateLiveCallbackRuleResponse = models.CreateLiveCallbackRuleResponse;
const DescribeLiveRecordTemplateResponse = models.DescribeLiveRecordTemplateResponse;
const DescribeVisitTopSumInfoListResponse = models.DescribeVisitTopSumInfoListResponse;
const CallBackRuleInfo = models.CallBackRuleInfo;
const PlaySumStatInfo = models.PlaySumStatInfo;
const DescribeLiveTranscodeTemplatesRequest = models.DescribeLiveTranscodeTemplatesRequest;
const DescribeBillBandwidthAndFluxListRequest = models.DescribeBillBandwidthAndFluxListRequest;
const DescribeLiveRecordRulesResponse = models.DescribeLiveRecordRulesResponse;
const CreateLiveSnapshotTemplateRequest = models.CreateLiveSnapshotTemplateRequest;
const TemplateInfo = models.TemplateInfo;
const DescribeLivePullStreamTasksRequest = models.DescribeLivePullStreamTasksRequest;
const DescribeLiveStreamOnlineListRequest = models.DescribeLiveStreamOnlineListRequest;
const DeleteLiveCallbackTemplateRequest = models.DeleteLiveCallbackTemplateRequest;
const DescribeLiveSnapshotTemplateRequest = models.DescribeLiveSnapshotTemplateRequest;
const LiveDomainCertBindings = models.LiveDomainCertBindings;
const CreateCommonMixStreamResponse = models.CreateCommonMixStreamResponse;
const ModifyLiveDomainRefererRequest = models.ModifyLiveDomainRefererRequest;
const CreateLiveCallbackTemplateResponse = models.CreateLiveCallbackTemplateResponse;
const DescribeLivePushAuthKeyRequest = models.DescribeLivePushAuthKeyRequest;
const PlayStatInfo = models.PlayStatInfo;
const DescribeLiveCallbackTemplateRequest = models.DescribeLiveCallbackTemplateRequest;
const ModifyLiveSnapshotTemplateRequest = models.ModifyLiveSnapshotTemplateRequest;
const DescribeLiveCertResponse = models.DescribeLiveCertResponse;
const CreateLiveRecordRuleResponse = models.CreateLiveRecordRuleResponse;
const DescribeLiveTranscodeTemplateRequest = models.DescribeLiveTranscodeTemplateRequest;
const ModifyLiveCallbackTemplateResponse = models.ModifyLiveCallbackTemplateResponse;
const DeleteLiveWatermarkResponse = models.DeleteLiveWatermarkResponse;
const DescribeLivePushAuthKeyResponse = models.DescribeLivePushAuthKeyResponse;
const CreateLiveWatermarkRuleRequest = models.CreateLiveWatermarkRuleRequest;
const DescribeLiveRecordTemplatesRequest = models.DescribeLiveRecordTemplatesRequest;
const DescribeAllStreamPlayInfoListRequest = models.DescribeAllStreamPlayInfoListRequest;
const DescribeLiveDomainResponse = models.DescribeLiveDomainResponse;
const DeleteRecordTaskRequest = models.DeleteRecordTaskRequest;
const PullStreamTaskInfo = models.PullStreamTaskInfo;
const CreateLiveTimeShiftTemplateResponse = models.CreateLiveTimeShiftTemplateResponse;
const DescribeStreamDayPlayInfoListResponse = models.DescribeStreamDayPlayInfoListResponse;
const RecordTemplateInfo = models.RecordTemplateInfo;
const ModifyLivePullStreamTaskResponse = models.ModifyLivePullStreamTaskResponse;
const CreateLiveSnapshotRuleResponse = models.CreateLiveSnapshotRuleResponse;
const DelayInfo = models.DelayInfo;
const DescribeLiveStreamEventListResponse = models.DescribeLiveStreamEventListResponse;
const ForbidLiveDomainResponse = models.ForbidLiveDomainResponse;
const DescribeTranscodeTaskNumRequest = models.DescribeTranscodeTaskNumRequest;
const DescribeLiveCallbackRulesResponse = models.DescribeLiveCallbackRulesResponse;
const DescribeLiveTranscodeTotalInfoRequest = models.DescribeLiveTranscodeTotalInfoRequest;
const CreateRecordTaskResponse = models.CreateRecordTaskResponse;
const ForbidStreamInfo = models.ForbidStreamInfo;
const DescribeTimeShiftRecordDetailResponse = models.DescribeTimeShiftRecordDetailResponse;
const DescribeLiveDomainCertBindingsRequest = models.DescribeLiveDomainCertBindingsRequest;
const DeleteLiveDomainResponse = models.DeleteLiveDomainResponse;
const CommonMixCropParams = models.CommonMixCropParams;
const CreateLiveRecordTemplateRequest = models.CreateLiveRecordTemplateRequest;
const DescribeHttpStatusInfoListResponse = models.DescribeHttpStatusInfoListResponse;
const DeleteLiveRecordRuleResponse = models.DeleteLiveRecordRuleResponse;


/**
 * live client
 * @class
 */
class LiveClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("live.intl.tencentcloudapi.com", "2018-08-01", credential, region, profile);
    }
    
    /**
     * This API is used to pause a live stream. The stream can be resumed if it is paused.
Note: If you call this API to pause an inactive stream, the request will be considered successful.
     * @param {DropLiveStreamRequest} req
     * @param {function(string, DropLiveStreamResponse):void} cb
     * @public
     */
    DropLiveStream(req, cb) {
        let resp = new DropLiveStreamResponse();
        this.request("DropLiveStream", req, resp, cb);
    }

    /**
     * This API is used to query the watermark list.
     * @param {DescribeLiveWatermarksRequest} req
     * @param {function(string, DescribeLiveWatermarksResponse):void} cb
     * @public
     */
    DescribeLiveWatermarks(req, cb) {
        let resp = new DescribeLiveWatermarksResponse();
        this.request("DescribeLiveWatermarks", req, resp, cb);
    }

    /**
     * This API is used to query the number of concurrent recording channels, which is applicable to LCB and LVB.
     * @param {DescribeConcurrentRecordStreamNumRequest} req
     * @param {function(string, DescribeConcurrentRecordStreamNumResponse):void} cb
     * @public
     */
    DescribeConcurrentRecordStreamNum(req, cb) {
        let resp = new DescribeConcurrentRecordStreamNumResponse();
        this.request("DescribeConcurrentRecordStreamNum", req, resp, cb);
    }

    /**
     * - Prerequisites
  1. Recording files are stored on the VOD platform, so if you need to use the recording feature, you must first activate the VOD service.
  2. After the recording files are stored, applicable fees (including storage fees and downstream playback traffic fees) will be charged according to the VOD billing mode. For more information, please see the [corresponding document](https://intl.cloud.tencent.com/document/product/266/2838?from_cn_redirect=1).

- Mode description
  This API supports two recording modes:
  1. Scheduled recording mode **(default mode)**.
    The start time and end time need to be passed in, according to which the recording task will start and end automatically. Before the set end time expires (provided that `StopLiveRecord` is not called to terminate the task prematurely), the recording task is valid and will be started even after the push is interrupted and restarted multiple times.
  2. Real-time video recording mode.
    The start time passed in will be ignored, and recording will be started immediately after the recording task is created. The recording duration can be up to 30 minutes. If the end time passed in is more than 30 minutes after the current time, it will be counted as 30 minutes. Real-time video recording is mainly used for recording highlight scenes, and you are recommended to keep the duration within 5 minutes.

- Precautions
  1. The API call timeout period should be set to more than 3 seconds; otherwise, retries and calls by different start/end time values may result in repeated recording tasks and thus incur additional recording fees.
  2. Subject to the audio and video file formats (FLV/MP4/HLS), the video codec of H.264 and audio codec of AAC are supported.
  3. In order to avoid malicious or unintended frequent API requests, the maximum number of tasks that can be created in scheduled recording mode is limited: up to 4,000 tasks can be created per day (excluding deleted ones), and up to 400 ones can run concurrently. If you need a higher upper limit, please submit a ticket for application.
  4. This calling method does not support recording streams outside Mainland China for the time being.
     * @param {CreateLiveRecordRequest} req
     * @param {function(string, CreateLiveRecordResponse):void} cb
     * @public
     */
    CreateLiveRecord(req, cb) {
        let resp = new CreateLiveRecordResponse();
        this.request("CreateLiveRecord", req, resp, cb);
    }

    /**
     * This API is used to update a watermark.
     * @param {UpdateLiveWatermarkRequest} req
     * @param {function(string, UpdateLiveWatermarkResponse):void} cb
     * @public
     */
    UpdateLiveWatermark(req, cb) {
        let resp = new UpdateLiveWatermarkResponse();
        this.request("UpdateLiveWatermark", req, resp, cb);
    }

    /**
     * This API is used to modify the screencapturing template configuration.
     * @param {ModifyLiveSnapshotTemplateRequest} req
     * @param {function(string, ModifyLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    ModifyLiveSnapshotTemplate(req, cb) {
        let resp = new ModifyLiveSnapshotTemplateResponse();
        this.request("ModifyLiveSnapshotTemplate", req, resp, cb);
    }

    /**
     * This API is used to retrieve a list of recording tasks that were started and ended within a specified time range. 
- Prerequisites: 
1. This API is only used to query recording tasks created by the CreateRecordTask interface. 
2. It cannot retrieve recording tasks that have been deleted by the DeleteRecordTask interface or tasks that have expired (platform retains for 3 months).
     * @param {DescribeRecordTaskRequest} req
     * @param {function(string, DescribeRecordTaskResponse):void} cb
     * @public
     */
    DescribeRecordTask(req, cb) {
        let resp = new DescribeRecordTaskResponse();
        this.request("DescribeRecordTask", req, resp, cb);
    }

    /**
     * To create a watermarking rule, you need to first call the [AddLiveWatermark](https://intl.cloud.tencent.com/document/product/267/30154?from_cn_redirect=1) API to add a watermark and bind the returned watermark ID to the stream.
     * @param {CreateLiveWatermarkRuleRequest} req
     * @param {function(string, CreateLiveWatermarkRuleResponse):void} cb
     * @public
     */
    CreateLiveWatermarkRule(req, cb) {
        let resp = new CreateLiveWatermarkRuleResponse();
        this.request("CreateLiveWatermarkRule", req, resp, cb);
    }

    /**
     * This API is used to query stream push/interruption events.<br>

Notes:
1. This API is used to query stream push/interruption records, and should not be relied too much upon in important business scenarios.
2. You can use the `IsFilter` parameter of this API to filter and get required push records.
     * @param {DescribeLiveStreamEventListRequest} req
     * @param {function(string, DescribeLiveStreamEventListResponse):void} cb
     * @public
     */
    DescribeLiveStreamEventList(req, cb) {
        let resp = new DescribeLiveStreamEventListResponse();
        this.request("DescribeLiveStreamEventList", req, resp, cb);
    }

    /**
     * This API is used to create a general stream mix. It can be used basically in the same way as the legacy `mix_streamv2.start_mix_stream_advanced` API.
Note: currently, up to 16 streams can be mixed.
Best practice: https://intl.cloud.tencent.com/document/product/267/45566?from_cn_redirect=1
     * @param {CreateCommonMixStreamRequest} req
     * @param {function(string, CreateCommonMixStreamResponse):void} cb
     * @public
     */
    CreateCommonMixStream(req, cb) {
        let resp = new CreateCommonMixStreamResponse();
        this.request("CreateCommonMixStream", req, resp, cb);
    }

    /**
     * This API is used to query the number of each playback HTTP status code at a 5-minute granularity in a certain period of time.
Note: data can be queried one hour after it is generated. For example, data between 10:00 and 10:59 cannot be queried until 12:00.
     * @param {DescribeHttpStatusInfoListRequest} req
     * @param {function(string, DescribeHttpStatusInfoListResponse):void} cb
     * @public
     */
    DescribeHttpStatusInfoList(req, cb) {
        let resp = new DescribeHttpStatusInfoListResponse();
        this.request("DescribeHttpStatusInfoList", req, resp, cb);
    }

    /**
     * This API is used to query the downstream playback data of a specified ISP in a specified district, including bandwidth, traffic, number of requests, and number of concurrent connections.
     * @param {DescribeProvinceIspPlayInfoListRequest} req
     * @param {function(string, DescribeProvinceIspPlayInfoListResponse):void} cb
     * @public
     */
    DescribeProvinceIspPlayInfoList(req, cb) {
        let resp = new DescribeProvinceIspPlayInfoListResponse();
        this.request("DescribeProvinceIspPlayInfoList", req, resp, cb);
    }

    /**
     * This API is used to modify a playback domain name.
     * @param {ModifyLivePlayDomainRequest} req
     * @param {function(string, ModifyLivePlayDomainResponse):void} cb
     * @public
     */
    ModifyLivePlayDomain(req, cb) {
        let resp = new ModifyLivePlayDomainResponse();
        this.request("ModifyLivePlayDomain", req, resp, cb);
    }

    /**
     * This API is used to get the push data of a stream, including the audio/video frame rate, bitrate, elapsed time, and codec.
     * @param {DescribeStreamPushInfoListRequest} req
     * @param {function(string, DescribeStreamPushInfoListResponse):void} cb
     * @public
     */
    DescribeStreamPushInfoList(req, cb) {
        let resp = new DescribeStreamPushInfoListResponse();
        this.request("DescribeStreamPushInfoList", req, resp, cb);
    }

    /**
     * This API is used to get the screencapturing rule list.
     * @param {DescribeLiveSnapshotRulesRequest} req
     * @param {function(string, DescribeLiveSnapshotRulesResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotRules(req, cb) {
        let resp = new DescribeLiveSnapshotRulesResponse();
        this.request("DescribeLiveSnapshotRules", req, resp, cb);
    }

    /**
     * This API is used to query the time shifted streams in a specific time period (up to 24 hours).
     * @param {DescribeTimeShiftStreamListRequest} req
     * @param {function(string, DescribeTimeShiftStreamListResponse):void} cb
     * @public
     */
    DescribeTimeShiftStreamList(req, cb) {
        let resp = new DescribeTimeShiftStreamListResponse();
        this.request("DescribeTimeShiftStreamList", req, resp, cb);
    }

    /**
     * This API is used to delete a transcoding template.
     * @param {DeleteLiveTranscodeTemplateRequest} req
     * @param {function(string, DeleteLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    DeleteLiveTranscodeTemplate(req, cb) {
        let resp = new DeleteLiveTranscodeTemplateResponse();
        this.request("DeleteLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to query referer allowlist/blocklist configuration of a live streaming domain name.
Referer information is included in HTTP requests. After you enable referer configuration, live streams using RTMP or WebRTC for playback will not authenticate the referer and can be played back normally. To make the referer configuration effective, the HTTP-FLV or HLS protocol is recommended for playback.
     * @param {DescribeLiveDomainRefererRequest} req
     * @param {function(string, DescribeLiveDomainRefererResponse):void} cb
     * @public
     */
    DescribeLiveDomainReferer(req, cb) {
        let resp = new DescribeLiveDomainRefererResponse();
        this.request("DescribeLiveDomainReferer", req, resp, cb);
    }

    /**
     * This API is used to query the information of the top n client IPs in a certain period of time (top 1,000 is supported currently).
     * @param {DescribeTopClientIpSumInfoListRequest} req
     * @param {function(string, DescribeTopClientIpSumInfoListResponse):void} cb
     * @public
     */
    DescribeTopClientIpSumInfoList(req, cb) {
        let resp = new DescribeTopClientIpSumInfoListResponse();
        this.request("DescribeTopClientIpSumInfoList", req, resp, cb);
    }

    /**
     * This API is used to create a screencapturing task that has a specific start and end time and takes screenshots according to the template configured.
- Note
1. If the stream is interrupted, screencapturing will stop. However, the task will still be valid before the specified end time, and screencapturing will be performed as required after the stream is resumed.
2. Avoid creating screencapturing tasks with overlapping time periods. The system will execute at most three screencapturing tasks on the same stream at a time.
3. Task records are only kept for three months.
4. The new screencapturing APIs (CreateScreenshotTask/StopScreenshotTask/DeleteScreenshotTask) are not compatible with the legacy ones (CreateLiveInstantSnapshot/StopLiveInstantSnapshot). Do not mix them when you call APIs to manage screencapturing tasks.
5. If you create a screencapturing task and publish the stream at the same time, the task may fail to be executed at the specified time. After creating a screencapturing task, we recommend you wait at least three seconds before publishing the stream.
     * @param {CreateScreenshotTaskRequest} req
     * @param {function(string, CreateScreenshotTaskResponse):void} cb
     * @public
     */
    CreateScreenshotTask(req, cb) {
        let resp = new CreateScreenshotTaskResponse();
        this.request("CreateScreenshotTask", req, resp, cb);
    }

    /**
     * This API is used to get the recording template list.
     * @param {DescribeLiveRecordTemplatesRequest} req
     * @param {function(string, DescribeLiveRecordTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveRecordTemplates(req, cb) {
        let resp = new DescribeLiveRecordTemplatesResponse();
        this.request("DescribeLiveRecordTemplates", req, resp, cb);
    }

    /**
     * This API is used to verify the ownership of a domain.
     * @param {AuthenticateDomainOwnerRequest} req
     * @param {function(string, AuthenticateDomainOwnerResponse):void} cb
     * @public
     */
    AuthenticateDomainOwner(req, cb) {
        let resp = new AuthenticateDomainOwnerResponse();
        this.request("AuthenticateDomainOwner", req, resp, cb);
    }

    /**
     * This API is used to query the information of the top n domain names or stream IDs in a certain period of time (top 1,000 is supported currently).
     * @param {DescribeVisitTopSumInfoListRequest} req
     * @param {function(string, DescribeVisitTopSumInfoListResponse):void} cb
     * @public
     */
    DescribeVisitTopSumInfoList(req, cb) {
        let resp = new DescribeVisitTopSumInfoListResponse();
        this.request("DescribeVisitTopSumInfoList", req, resp, cb);
    }

    /**
     * This API is used to modify the recording template configuration.
     * @param {ModifyLiveRecordTemplateRequest} req
     * @param {function(string, ModifyLiveRecordTemplateResponse):void} cb
     * @public
     */
    ModifyLiveRecordTemplate(req, cb) {
        let resp = new ModifyLiveRecordTemplateResponse();
        this.request("ModifyLiveRecordTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the domain name certificate information.
     * @param {DescribeLiveDomainCertRequest} req
     * @param {function(string, DescribeLiveDomainCertResponse):void} cb
     * @public
     */
    DescribeLiveDomainCert(req, cb) {
        let resp = new DescribeLiveDomainCertResponse();
        this.request("DescribeLiveDomainCert", req, resp, cb);
    }

    /**
     * After a watermark is added and a watermark ID is successfully returned, you need to call the [CreateLiveWatermarkRule](https://intl.cloud.tencent.com/document/product/267/32629?from_cn_redirect=1) API to bind the watermark ID to a stream.
After the number of watermarks exceeds the upper limit of 100, to add a new watermark, you must delete an old one first.
     * @param {AddLiveWatermarkRequest} req
     * @param {function(string, AddLiveWatermarkResponse):void} cb
     * @public
     */
    AddLiveWatermark(req, cb) {
        let resp = new AddLiveWatermarkResponse();
        this.request("AddLiveWatermark", req, resp, cb);
    }

    /**
     * This API is used to delete a watermarking rule.
     * @param {DeleteLiveWatermarkRuleRequest} req
     * @param {function(string, DeleteLiveWatermarkRuleResponse):void} cb
     * @public
     */
    DeleteLiveWatermarkRule(req, cb) {
        let resp = new DeleteLiveWatermarkRuleResponse();
        this.request("DeleteLiveWatermarkRule", req, resp, cb);
    }

    /**
     * This API is used to delete a callback rule.
     * @param {DeleteLiveCallbackRuleRequest} req
     * @param {function(string, DeleteLiveCallbackRuleResponse):void} cb
     * @public
     */
    DeleteLiveCallbackRule(req, cb) {
        let resp = new DeleteLiveCallbackRuleResponse();
        this.request("DeleteLiveCallbackRule", req, resp, cb);
    }

    /**
     * This API is used to create a screencapture template. After a template ID is returned, you need to call the [CreateLiveSnapshotRule](https://intl.cloud.tencent.com/document/product/267/32625?from_cn_redirect=1) API to bind the template ID to a stream. You can create up to 50 screencapture templates.
<br>To learn more about the live screencapture feature, see [Live Screencapture](https://intl.cloud.tencent.com/document/product/267/32737?from_cn_redirect=1).
     * @param {CreateLiveSnapshotTemplateRequest} req
     * @param {function(string, CreateLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    CreateLiveSnapshotTemplate(req, cb) {
        let resp = new CreateLiveSnapshotTemplateResponse();
        this.request("CreateLiveSnapshotTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the list of ongoing live streams. It queries the information of live streams after they are pushed successfully. 

Notes:
1. This API is used to query the list of active live streams only, and should not be relied too much upon in important business scenarios.
2. This API can query up to 20,000 streams. To query more streams, please contact our after-sales service team.

     * @param {DescribeLiveStreamOnlineListRequest} req
     * @param {function(string, DescribeLiveStreamOnlineListResponse):void} cb
     * @public
     */
    DescribeLiveStreamOnlineList(req, cb) {
        let resp = new DescribeLiveStreamOnlineListResponse();
        this.request("DescribeLiveStreamOnlineList", req, resp, cb);
    }

    /**
     * This API deletes a callback template.
     * @param {DeleteLiveCallbackTemplateRequest} req
     * @param {function(string, DeleteLiveCallbackTemplateResponse):void} cb
     * @public
     */
    DeleteLiveCallbackTemplate(req, cb) {
        let resp = new DeleteLiveCallbackTemplateResponse();
        this.request("DeleteLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the LVB push authentication key.
     * @param {DescribeLivePushAuthKeyRequest} req
     * @param {function(string, DescribeLivePushAuthKeyResponse):void} cb
     * @public
     */
    DescribeLivePushAuthKey(req, cb) {
        let resp = new DescribeLivePushAuthKeyResponse();
        this.request("DescribeLivePushAuthKey", req, resp, cb);
    }

    /**
     * This API is used to query the time shifting details of a specific time period (up to 24 hours). You need to call `DescribeTimeShiftStreamList` first to get the request parameters of this API.
     * @param {DescribeTimeShiftRecordDetailRequest} req
     * @param {function(string, DescribeTimeShiftRecordDetailResponse):void} cb
     * @public
     */
    DescribeTimeShiftRecordDetail(req, cb) {
        let resp = new DescribeTimeShiftRecordDetailResponse();
        this.request("DescribeTimeShiftRecordDetail", req, resp, cb);
    }

    /**
     * This API is used to get a single recording template.
     * @param {DescribeLiveRecordTemplateRequest} req
     * @param {function(string, DescribeLiveRecordTemplateResponse):void} cb
     * @public
     */
    DescribeLiveRecordTemplate(req, cb) {
        let resp = new DescribeLiveRecordTemplateResponse();
        this.request("DescribeLiveRecordTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a watermark.
     * @param {DeleteLiveWatermarkRequest} req
     * @param {function(string, DeleteLiveWatermarkResponse):void} cb
     * @public
     */
    DeleteLiveWatermark(req, cb) {
        let resp = new DeleteLiveWatermarkResponse();
        this.request("DeleteLiveWatermark", req, resp, cb);
    }

    /**
     * This API is used to query domains bound with certificates.
     * @param {DescribeLiveDomainCertBindingsRequest} req
     * @param {function(string, DescribeLiveDomainCertBindingsResponse):void} cb
     * @public
     */
    DescribeLiveDomainCertBindings(req, cb) {
        let resp = new DescribeLiveDomainCertBindingsResponse();
        this.request("DescribeLiveDomainCertBindings", req, resp, cb);
    }

    /**
     * This API is used to query the information of downstream playback error codes.
     * @param {DescribePlayErrorCodeSumInfoListRequest} req
     * @param {function(string, DescribePlayErrorCodeSumInfoListResponse):void} cb
     * @public
     */
    DescribePlayErrorCodeSumInfoList(req, cb) {
        let resp = new DescribePlayErrorCodeSumInfoListResponse();
        this.request("DescribePlayErrorCodeSumInfoList", req, resp, cb);
    }

    /**
     * This API is used to set a delay in playing the images of large live streaming events, in case of emergencies.

Note: if you are to set the delay before stream push, set it at least 5 minutes before the push. This API supports configuration only by stream.
     * @param {AddDelayLiveStreamRequest} req
     * @param {function(string, AddDelayLiveStreamResponse):void} cb
     * @public
     */
    AddDelayLiveStream(req, cb) {
        let resp = new AddDelayLiveStreamResponse();
        this.request("AddDelayLiveStream", req, resp, cb);
    }

    /**
     * This API is used to query the number of LVB upstream channels.
     * @param {DescribeUploadStreamNumsRequest} req
     * @param {function(string, DescribeUploadStreamNumsResponse):void} cb
     * @public
     */
    DescribeUploadStreamNums(req, cb) {
        let resp = new DescribeUploadStreamNumsResponse();
        this.request("DescribeUploadStreamNums", req, resp, cb);
    }

    /**
     * This API is used to query the playback data of each stream at the day level, including the total traffic.
     * @param {DescribeStreamDayPlayInfoListRequest} req
     * @param {function(string, DescribeStreamDayPlayInfoListResponse):void} cb
     * @public
     */
    DescribeStreamDayPlayInfoList(req, cb) {
        let resp = new DescribeStreamDayPlayInfoListResponse();
        this.request("DescribeStreamDayPlayInfoList", req, resp, cb);
    }

    /**
     * This API is used to modify the LVB push authentication key.
     * @param {ModifyLivePushAuthKeyRequest} req
     * @param {function(string, ModifyLivePushAuthKeyResponse):void} cb
     * @public
     */
    ModifyLivePushAuthKey(req, cb) {
        let resp = new ModifyLivePushAuthKeyResponse();
        this.request("ModifyLivePushAuthKey", req, resp, cb);
    }

    /**
     * This API is used to modify the transcoding template configuration.
     * @param {ModifyLiveTranscodeTemplateRequest} req
     * @param {function(string, ModifyLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    ModifyLiveTranscodeTemplate(req, cb) {
        let resp = new ModifyLiveTranscodeTemplateResponse();
        this.request("ModifyLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a transcoding rule.
`DomainName+AppName+StreamName+TemplateId` uniquely identifies a single transcoding rule. If you need to delete it, strong match is required. `TemplateId` is required. Even if other parameters are empty, you still need to pass in an empty string to make a strong match.
     * @param {DeleteLiveTranscodeRuleRequest} req
     * @param {function(string, DeleteLiveTranscodeRuleResponse):void} cb
     * @public
     */
    DeleteLiveTranscodeRule(req, cb) {
        let resp = new DeleteLiveTranscodeRuleResponse();
        this.request("DeleteLiveTranscodeRule", req, resp, cb);
    }

    /**
     * This API is used to query transcoding usage. You can use it to query data in the past three months.
Notes:
If the start time and end time are on the same day, the data returned will be on a 5-minute basis.
If the start time and end time are not on the same day or if the data of specified domains is queried, the data returned will be on an hourly basis.
     * @param {DescribeLiveTranscodeTotalInfoRequest} req
     * @param {function(string, DescribeLiveTranscodeTotalInfoResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTotalInfo(req, cb) {
        let resp = new DescribeLiveTranscodeTotalInfoResponse();
        this.request("DescribeLiveTranscodeTotalInfo", req, resp, cb);
    }

    /**
     * This API is used to delete a screencapturing rule.
     * @param {DeleteLiveSnapshotRuleRequest} req
     * @param {function(string, DeleteLiveSnapshotRuleResponse):void} cb
     * @public
     */
    DeleteLiveSnapshotRule(req, cb) {
        let resp = new DeleteLiveSnapshotRuleResponse();
        this.request("DeleteLiveSnapshotRule", req, resp, cb);
    }

    /**
     * This API is used to delete a task created by `CreateLivePullStreamTask`.
Notes:
1. For the `TaskId` request parameter, pass in the task ID returned by the `CreateLivePullStreamTask` API.
2. You can query the ID of a task using the `DescribeLivePullStreamTasks` API.
     * @param {DeleteLivePullStreamTaskRequest} req
     * @param {function(string, DeleteLivePullStreamTaskResponse):void} cb
     * @public
     */
    DeleteLivePullStreamTask(req, cb) {
        let resp = new DeleteLivePullStreamTaskResponse();
        this.request("DeleteLivePullStreamTask", req, resp, cb);
    }

    /**
     * This API is used to get the list of disabled streams.

Note: this API is used for query only and should not be relied too much upon in important business scenarios.
     * @param {DescribeLiveForbidStreamListRequest} req
     * @param {function(string, DescribeLiveForbidStreamListResponse):void} cb
     * @public
     */
    DescribeLiveForbidStreamList(req, cb) {
        let resp = new DescribeLiveForbidStreamListResponse();
        this.request("DescribeLiveForbidStreamList", req, resp, cb);
    }

    /**
     * This API is used to create a task to pull streams from video files or an external live streaming source and publish them to a specified destination URL.
Notes:
1. By default, you can have at most 20 stream pulling tasks at a time. You can submit a ticket to raise the limit.
2. Only H.264 and H.265 are supported for video. If the source video is in a different format, please transcode it first.
3. Only AAC is supported for audio. If the source audio is in a different format, please transcode it first.
4. You can enable auto deletion in the console to delete expired tasks automatically.
5. The pull and relay feature is a paid feature. For its billing details, see [Relay](https://intl.cloud.tencent.com/document/product/267/53308?from_cn_redirect=1).
6. CSS is only responsible for pulling and relaying content. Please make sure that your content is authorized and complies with relevant laws and regulations. In case of copyright infringement or violation of laws or regulations, CSS will suspend its service for you and reserves the right to seek legal remedies.
     * @param {CreateLivePullStreamTaskRequest} req
     * @param {function(string, CreateLivePullStreamTaskResponse):void} cb
     * @public
     */
    CreateLivePullStreamTask(req, cb) {
        let resp = new CreateLivePullStreamTaskResponse();
        this.request("CreateLivePullStreamTask", req, resp, cb);
    }

    /**
     * This API is used to get certificate information.
     * @param {DescribeLiveCertRequest} req
     * @param {function(string, DescribeLiveCertResponse):void} cb
     * @public
     */
    DescribeLiveCert(req, cb) {
        let resp = new DescribeLiveCertResponse();
        this.request("DescribeLiveCert", req, resp, cb);
    }

    /**
     * This API is used to bind a certificate to multiple playback domains and update the HTTPS configuration of the domains.
If a self-owned certificate is used, it will be automatically uploaded to Tencent Cloud’s SSL Certificate Service.
     * @param {ModifyLiveDomainCertBindingsRequest} req
     * @param {function(string, ModifyLiveDomainCertBindingsResponse):void} cb
     * @public
     */
    ModifyLiveDomainCertBindings(req, cb) {
        let resp = new ModifyLiveDomainCertBindingsResponse();
        this.request("ModifyLiveDomainCertBindings", req, resp, cb);
    }

    /**
     * This API is used to query domain names by domain name status and type.
     * @param {DescribeLiveDomainsRequest} req
     * @param {function(string, DescribeLiveDomainsResponse):void} cb
     * @public
     */
    DescribeLiveDomains(req, cb) {
        let resp = new DescribeLiveDomainsResponse();
        this.request("DescribeLiveDomains", req, resp, cb);
    }

    /**
     * This API is used to modify a stream pulling task. 
1. You cannot modify the destination URL. To publish to a new destination, please create a new task.
2. You cannot modify the source type. To use a different source type, please create a new task.
     * @param {ModifyLivePullStreamTaskRequest} req
     * @param {function(string, ModifyLivePullStreamTaskResponse):void} cb
     * @public
     */
    ModifyLivePullStreamTask(req, cb) {
        let resp = new ModifyLivePullStreamTaskResponse();
        this.request("ModifyLivePullStreamTask", req, resp, cb);
    }

    /**
     * This API is used to create a callback template. Up to 50 templates can be created. After the template ID is returned, you need to call the [CreateLiveCallbackRule](https://intl.cloud.tencent.com/document/product/267/32638?from_cn_redirect=1) API to bind the template ID to a domain name/path.
<br>For information about callback protocols, see [How to Receive Event Notification](https://intl.cloud.tencent.com/document/product/267/32744?from_cn_redirect=1).
Note: You need to specify at least one callback URL.
     * @param {CreateLiveCallbackTemplateRequest} req
     * @param {function(string, CreateLiveCallbackTemplateResponse):void} cb
     * @public
     */
    CreateLiveCallbackTemplate(req, cb) {
        let resp = new CreateLiveCallbackTemplateResponse();
        this.request("CreateLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * This API is used to resume the push of a specific stream.
     * @param {ResumeLiveStreamRequest} req
     * @param {function(string, ResumeLiveStreamResponse):void} cb
     * @public
     */
    ResumeLiveStream(req, cb) {
        let resp = new ResumeLiveStreamResponse();
        this.request("ResumeLiveStream", req, resp, cb);
    }

    /**
     * This API is used to get a single callback template.
     * @param {DescribeLiveCallbackTemplateRequest} req
     * @param {function(string, DescribeLiveCallbackTemplateResponse):void} cb
     * @public
     */
    DescribeLiveCallbackTemplate(req, cb) {
        let resp = new DescribeLiveCallbackTemplateResponse();
        this.request("DescribeLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete an added LVB domain name.
     * @param {DeleteLiveDomainRequest} req
     * @param {function(string, DeleteLiveDomainResponse):void} cb
     * @public
     */
    DeleteLiveDomain(req, cb) {
        let resp = new DeleteLiveDomainResponse();
        this.request("DeleteLiveDomain", req, resp, cb);
    }

    /**
     * This API is used to modify a callback template.
     * @param {ModifyLiveCallbackTemplateRequest} req
     * @param {function(string, ModifyLiveCallbackTemplateResponse):void} cb
     * @public
     */
    ModifyLiveCallbackTemplate(req, cb) {
        let resp = new ModifyLiveCallbackTemplateResponse();
        this.request("ModifyLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the stream pulling tasks created by `CreateLivePullStreamTask`.
The tasks returned are sorted by last updated time in descending order.
     * @param {DescribeLivePullStreamTasksRequest} req
     * @param {function(string, DescribeLivePullStreamTasksResponse):void} cb
     * @public
     */
    DescribeLivePullStreamTasks(req, cb) {
        let resp = new DescribeLivePullStreamTasksResponse();
        this.request("DescribeLivePullStreamTasks", req, resp, cb);
    }

    /**
     * This API is used to query the downstream playback data by district and ISP.
     * @param {DescribeGroupProIspPlayInfoListRequest} req
     * @param {function(string, DescribeGroupProIspPlayInfoListResponse):void} cb
     * @public
     */
    DescribeGroupProIspPlayInfoList(req, cb) {
        let resp = new DescribeGroupProIspPlayInfoListResponse();
        this.request("DescribeGroupProIspPlayInfoList", req, resp, cb);
    }

    /**
     * This API is used to query the playback data. It supports querying the playback details by stream name and aggregated data by playback domain name. Data in the last 4 minutes or so cannot be queried due to delay.
Note: to query by `AppName`, you need to submit a ticket first. After your application succeeds, it will take about 5 business days (subject to the time in the reply) for the configuration to take effect.
     * @param {DescribeStreamPlayInfoListRequest} req
     * @param {function(string, DescribeStreamPlayInfoListResponse):void} cb
     * @public
     */
    DescribeStreamPlayInfoList(req, cb) {
        let resp = new DescribeStreamPlayInfoListResponse();
        this.request("DescribeStreamPlayInfoList", req, resp, cb);
    }

    /**
     * This API is used to get the list of transcoding rules.
     * @param {DescribeLiveTranscodeRulesRequest} req
     * @param {function(string, DescribeLiveTranscodeRulesResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeRules(req, cb) {
        let resp = new DescribeLiveTranscodeRulesResponse();
        this.request("DescribeLiveTranscodeRules", req, resp, cb);
    }

    /**
     * This API is used to get a single screencapturing template.
     * @param {DescribeLiveSnapshotTemplateRequest} req
     * @param {function(string, DescribeLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotTemplate(req, cb) {
        let resp = new DescribeLiveSnapshotTemplateResponse();
        this.request("DescribeLiveSnapshotTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the callback template list.
     * @param {DescribeLiveCallbackTemplatesRequest} req
     * @param {function(string, DescribeLiveCallbackTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveCallbackTemplates(req, cb) {
        let resp = new DescribeLiveCallbackTemplatesResponse();
        this.request("DescribeLiveCallbackTemplates", req, resp, cb);
    }

    /**
     * This API is used to terminate an ongoing recording task and generate a recording file.
     * @param {StopRecordTaskRequest} req
     * @param {function(string, StopRecordTaskResponse):void} cb
     * @public
     */
    StopRecordTask(req, cb) {
        let resp = new StopRecordTaskResponse();
        this.request("StopRecordTask", req, resp, cb);
    }

    /**
     * This API is used to modify a time shifting template.
     * @param {ModifyLiveTimeShiftTemplateRequest} req
     * @param {function(string, ModifyLiveTimeShiftTemplateResponse):void} cb
     * @public
     */
    ModifyLiveTimeShiftTemplate(req, cb) {
        let resp = new ModifyLiveTimeShiftTemplateResponse();
        this.request("ModifyLiveTimeShiftTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the screencapturing template list.
     * @param {DescribeLiveSnapshotTemplatesRequest} req
     * @param {function(string, DescribeLiveSnapshotTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotTemplates(req, cb) {
        let resp = new DescribeLiveSnapshotTemplatesResponse();
        this.request("DescribeLiveSnapshotTemplates", req, resp, cb);
    }

    /**
     * Note: Recording files are stored on the VOD platform. To use the recording feature, you need to activate a VOD account and ensure that it is available. After the recording files are stored, applicable fees (including storage fees and downstream playback traffic fees) will be charged according to the VOD billing method. For more information, please see the corresponding document.
     * @param {StopLiveRecordRequest} req
     * @param {function(string, StopLiveRecordResponse):void} cb
     * @public
     */
    StopLiveRecord(req, cb) {
        let resp = new StopLiveRecordResponse();
        this.request("StopLiveRecord", req, resp, cb);
    }

    /**
     * This API is used to modify the playback authentication key.
     * @param {ModifyLivePlayAuthKeyRequest} req
     * @param {function(string, ModifyLivePlayAuthKeyResponse):void} cb
     * @public
     */
    ModifyLivePlayAuthKey(req, cb) {
        let resp = new ModifyLivePlayAuthKeyResponse();
        this.request("ModifyLivePlayAuthKey", req, resp, cb);
    }

    /**
     * This API is used to get a single transcoding template.
     * @param {DescribeLiveTranscodeTemplateRequest} req
     * @param {function(string, DescribeLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTemplate(req, cb) {
        let resp = new DescribeLiveTranscodeTemplateResponse();
        this.request("DescribeLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * The API is used to query the number of screenshots as an LVB value-added service.
     * @param {DescribeScreenShotSheetNumListRequest} req
     * @param {function(string, DescribeScreenShotSheetNumListResponse):void} cb
     * @public
     */
    DescribeScreenShotSheetNumList(req, cb) {
        let resp = new DescribeScreenShotSheetNumListResponse();
        this.request("DescribeScreenShotSheetNumList", req, resp, cb);
    }

    /**
     * This API is used to unbind a domain name certificate.
     * @param {UnBindLiveDomainCertRequest} req
     * @param {function(string, UnBindLiveDomainCertResponse):void} cb
     * @public
     */
    UnBindLiveDomainCert(req, cb) {
        let resp = new UnBindLiveDomainCertResponse();
        this.request("UnBindLiveDomainCert", req, resp, cb);
    }

    /**
     * This API is used to delete a recording task configuration. The deletion does not affect running tasks and takes effect only for new pushes.
     * @param {DeleteRecordTaskRequest} req
     * @param {function(string, DeleteRecordTaskResponse):void} cb
     * @public
     */
    DeleteRecordTask(req, cb) {
        let resp = new DeleteRecordTaskResponse();
        this.request("DeleteRecordTask", req, resp, cb);
    }

    /**
     * This API is used to query the transcoding details of a particular day or a specific time period. Querying may fail if the amount of data queried is too large. In such cases, try shortening the time period.
     * @param {DescribeLiveTranscodeDetailInfoRequest} req
     * @param {function(string, DescribeLiveTranscodeDetailInfoResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeDetailInfo(req, cb) {
        let resp = new DescribeLiveTranscodeDetailInfoResponse();
        this.request("DescribeLiveTranscodeDetailInfo", req, resp, cb);
    }

    /**
     * This API is used to get the list of recording rules.
     * @param {DescribeLiveRecordRulesRequest} req
     * @param {function(string, DescribeLiveRecordRulesResponse):void} cb
     * @public
     */
    DescribeLiveRecordRules(req, cb) {
        let resp = new DescribeLiveRecordRulesResponse();
        this.request("DescribeLiveRecordRules", req, resp, cb);
    }

    /**
     * This API is used to query time shifting templates.
     * @param {DescribeLiveTimeShiftTemplatesRequest} req
     * @param {function(string, DescribeLiveTimeShiftTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveTimeShiftTemplates(req, cb) {
        let resp = new DescribeLiveTimeShiftTemplatesResponse();
        this.request("DescribeLiveTimeShiftTemplates", req, resp, cb);
    }

    /**
     * This API is used to get the list of delayed playbacks.
     * @param {DescribeLiveDelayInfoListRequest} req
     * @param {function(string, DescribeLiveDelayInfoListResponse):void} cb
     * @public
     */
    DescribeLiveDelayInfoList(req, cb) {
        let resp = new DescribeLiveDelayInfoListResponse();
        this.request("DescribeLiveDelayInfoList", req, resp, cb);
    }

    /**
     * This API is used to query time shifting rules.
     * @param {DescribeLiveTimeShiftRulesRequest} req
     * @param {function(string, DescribeLiveTimeShiftRulesResponse):void} cb
     * @public
     */
    DescribeLiveTimeShiftRules(req, cb) {
        let resp = new DescribeLiveTimeShiftRulesResponse();
        this.request("DescribeLiveTimeShiftRules", req, resp, cb);
    }

    /**
     * This API is used to delete a recording rule.
     * @param {DeleteLiveRecordRuleRequest} req
     * @param {function(string, DeleteLiveRecordRuleResponse):void} cb
     * @public
     */
    DeleteLiveRecordRule(req, cb) {
        let resp = new DeleteLiveRecordRuleResponse();
        this.request("DeleteLiveRecordRule", req, resp, cb);
    }

    /**
     * This API is used to query the LVB domain name information.
     * @param {DescribeLiveDomainRequest} req
     * @param {function(string, DescribeLiveDomainResponse):void} cb
     * @public
     */
    DescribeLiveDomain(req, cb) {
        let resp = new DescribeLiveDomainResponse();
        this.request("DescribeLiveDomain", req, resp, cb);
    }

    /**
     * To create a callback rule, you need to first call the [CreateLiveCallbackTemplate](https://intl.cloud.tencent.com/document/product/267/32637?from_cn_redirect=1) API to create a callback template and bind the returned template ID to the domain name/path.
<br>Callback protocol-related document: [Event Message Notification](https://intl.cloud.tencent.com/document/product/267/32744?from_cn_redirect=1).
     * @param {CreateLiveCallbackRuleRequest} req
     * @param {function(string, CreateLiveCallbackRuleResponse):void} cb
     * @public
     */
    CreateLiveCallbackRule(req, cb) {
        let resp = new CreateLiveCallbackRuleResponse();
        this.request("CreateLiveCallbackRule", req, resp, cb);
    }

    /**
     * This API is used to get the callback rule list.
     * @param {DescribeLiveCallbackRulesRequest} req
     * @param {function(string, DescribeLiveCallbackRulesResponse):void} cb
     * @public
     */
    DescribeLiveCallbackRules(req, cb) {
        let resp = new DescribeLiveCallbackRulesResponse();
        this.request("DescribeLiveCallbackRules", req, resp, cb);
    }

    /**
     * This API is used to query the information of downstream playback error codes, i.e., the occurrences of each HTTP error code (4xx and 5xx) at a 1-minute granularity in a certain period of time.
     * @param {DescribePlayErrorCodeDetailInfoListRequest} req
     * @param {function(string, DescribePlayErrorCodeDetailInfoListResponse):void} cb
     * @public
     */
    DescribePlayErrorCodeDetailInfoList(req, cb) {
        let resp = new DescribePlayErrorCodeDetailInfoListResponse();
        this.request("DescribePlayErrorCodeDetailInfoList", req, resp, cb);
    }

    /**
     * This API is used to query the time-shift video length, time-shift days, and total time-shift period of push domains. The data returned is on a five-minute basis. You can use it for reconciliation.
     * @param {DescribeLiveTimeShiftBillInfoListRequest} req
     * @param {function(string, DescribeLiveTimeShiftBillInfoListResponse):void} cb
     * @public
     */
    DescribeLiveTimeShiftBillInfoList(req, cb) {
        let resp = new DescribeLiveTimeShiftBillInfoListResponse();
        this.request("DescribeLiveTimeShiftBillInfoList", req, resp, cb);
    }

    /**
     * This API is used to return the list of pushed streams. <br>
Note: Up to 10,000 entries can be queried per page. More data can be obtained by adjusting the query time range.
     * @param {DescribeLiveStreamPublishedListRequest} req
     * @param {function(string, DescribeLiveStreamPublishedListResponse):void} cb
     * @public
     */
    DescribeLiveStreamPublishedList(req, cb) {
        let resp = new DescribeLiveStreamPublishedListResponse();
        this.request("DescribeLiveStreamPublishedList", req, resp, cb);
    }

    /**
     * This API is used to disable a stream. You can set a time to resume the stream.
Note:
1. As long as the correct stream name is passed in, the stream will be disabled successfully.
2. If you want a stream to be disabled only if the push domain, push path, and stream name match, please submit a ticket.
3. If you have configured domain groups, you must pass in the correct push domain in order to disable a stream.
     * @param {ForbidLiveStreamRequest} req
     * @param {function(string, ForbidLiveStreamResponse):void} cb
     * @public
     */
    ForbidLiveStream(req, cb) {
        let resp = new ForbidLiveStreamResponse();
        this.request("ForbidLiveStream", req, resp, cb);
    }

    /**
     * This API is used to add a domain name. Only one domain name can be submitted at a time, and it must have an ICP filing.
     * @param {AddLiveDomainRequest} req
     * @param {function(string, AddLiveDomainResponse):void} cb
     * @public
     */
    AddLiveDomain(req, cb) {
        let resp = new AddLiveDomainResponse();
        this.request("AddLiveDomain", req, resp, cb);
    }

    /**
     * This API is used to query the billable bandwidth of live stream relaying in the last 3 months. The query period is up to 31 days.
     * @param {DescribeDeliverBandwidthListRequest} req
     * @param {function(string, DescribeDeliverBandwidthListResponse):void} cb
     * @public
     */
    DescribeDeliverBandwidthList(req, cb) {
        let resp = new DescribeDeliverBandwidthListResponse();
        this.request("DescribeDeliverBandwidthList", req, resp, cb);
    }

    /**
     * This API is used to create a time shifting rule. You need to first call the [CreateLiveTranscodeTemplate](https://intl.cloud.tencent.com/document/product/267/86169?from_cn_redirect=1) API to create a time shifting template, and then call this API to bind the template ID returned to a stream.
<br>More about time shifting: [Time Shifting](https://intl.cloud.tencent.com/document/product/267/86134?from_cn_redirect=1).
     * @param {CreateLiveTimeShiftRuleRequest} req
     * @param {function(string, CreateLiveTimeShiftRuleResponse):void} cb
     * @public
     */
    CreateLiveTimeShiftRule(req, cb) {
        let resp = new CreateLiveTimeShiftRuleResponse();
        this.request("CreateLiveTimeShiftRule", req, resp, cb);
    }

    /**
     * To create a recording rule, you need to first call the [CreateLiveRecordTemplate](https://intl.cloud.tencent.com/document/product/267/32614?from_cn_redirect=1) API to create a recording template and bind the returned template ID to the stream.
<br>Recording-related document: [LVB Recording](https://intl.cloud.tencent.com/document/product/267/32739?from_cn_redirect=1).
     * @param {CreateLiveRecordRuleRequest} req
     * @param {function(string, CreateLiveRecordRuleResponse):void} cb
     * @public
     */
    CreateLiveRecordRule(req, cb) {
        let resp = new CreateLiveRecordRuleResponse();
        this.request("CreateLiveRecordRule", req, resp, cb);
    }

    /**
     * This API is used to get the information of a single watermark.
     * @param {DescribeLiveWatermarkRequest} req
     * @param {function(string, DescribeLiveWatermarkResponse):void} cb
     * @public
     */
    DescribeLiveWatermark(req, cb) {
        let resp = new DescribeLiveWatermarkResponse();
        this.request("DescribeLiveWatermark", req, resp, cb);
    }

    /**
     * This API is used to get the transcoding template list.
     * @param {DescribeLiveTranscodeTemplatesRequest} req
     * @param {function(string, DescribeLiveTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTemplates(req, cb) {
        let resp = new DescribeLiveTranscodeTemplatesResponse();
        this.request("DescribeLiveTranscodeTemplates", req, resp, cb);
    }

    /**
     * This API is used to create a recording template. You can create up to 50 templates. To use a template, you need to call the [CreateLiveRecordRule](https://intl.cloud.tencent.com/document/product/267/32615?from_cn_redirect=1) API to bind the template ID returned by this API to a stream.
<br>More on recording: [Live Recording](https://intl.cloud.tencent.com/document/product/267/32739?from_cn_redirect=1)
     * @param {CreateLiveRecordTemplateRequest} req
     * @param {function(string, CreateLiveRecordTemplateResponse):void} cb
     * @public
     */
    CreateLiveRecordTemplate(req, cb) {
        let resp = new CreateLiveRecordTemplateResponse();
        this.request("CreateLiveRecordTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the data of billable bandwidth and traffic.
     * @param {DescribeBillBandwidthAndFluxListRequest} req
     * @param {function(string, DescribeBillBandwidthAndFluxListResponse):void} cb
     * @public
     */
    DescribeBillBandwidthAndFluxList(req, cb) {
        let resp = new DescribeBillBandwidthAndFluxListResponse();
        this.request("DescribeBillBandwidthAndFluxList", req, resp, cb);
    }

    /**
     * This API is used to disable an LVB domain name.
     * @param {ForbidLiveDomainRequest} req
     * @param {function(string, ForbidLiveDomainResponse):void} cb
     * @public
     */
    ForbidLiveDomain(req, cb) {
        let resp = new ForbidLiveDomainResponse();
        this.request("ForbidLiveDomain", req, resp, cb);
    }

    /**
     * This API is used to create a transcoding rule that binds a template ID to a stream. Up to 50 transcoding rules can be created in total. Before you call this API, you need to first call [CreateLiveTranscodeTemplate](https://intl.cloud.tencent.com/document/product/267/32646?from_cn_redirect=1) to get the template ID.
<br>Related document: [Live Remuxing and Transcoding](https://intl.cloud.tencent.com/document/product/267/32736?from_cn_redirect=1).
     * @param {CreateLiveTranscodeRuleRequest} req
     * @param {function(string, CreateLiveTranscodeRuleResponse):void} cb
     * @public
     */
    CreateLiveTranscodeRule(req, cb) {
        let resp = new CreateLiveTranscodeRuleResponse();
        this.request("CreateLiveTranscodeRule", req, resp, cb);
    }

    /**
     * This API is used to delete a time shifting rule.
     * @param {DeleteLiveTimeShiftRuleRequest} req
     * @param {function(string, DeleteLiveTimeShiftRuleResponse):void} cb
     * @public
     */
    DeleteLiveTimeShiftRule(req, cb) {
        let resp = new DeleteLiveTimeShiftRuleResponse();
        this.request("DeleteLiveTimeShiftRule", req, resp, cb);
    }

    /**
     * Restart the running live streaming pull task.
     * @param {RestartLivePullStreamTaskRequest} req
     * @param {function(string, RestartLivePullStreamTaskResponse):void} cb
     * @public
     */
    RestartLivePullStreamTask(req, cb) {
        let resp = new RestartLivePullStreamTaskResponse();
        this.request("RestartLivePullStreamTask", req, resp, cb);
    }

    /**
     * This API is used to get the watermarking rule list.
     * @param {DescribeLiveWatermarkRulesRequest} req
     * @param {function(string, DescribeLiveWatermarkRulesResponse):void} cb
     * @public
     */
    DescribeLiveWatermarkRules(req, cb) {
        let resp = new DescribeLiveWatermarkRulesResponse();
        this.request("DescribeLiveWatermarkRules", req, resp, cb);
    }

    /**
     * Note: The `DeleteLiveRecord` API is only used to delete the record of recording tasks but not stop recording or deleting an ongoing recording task. If you need to stop a recording task, please use the [StopLiveRecord](https://intl.cloud.tencent.com/document/product/267/30146?from_cn_redirect=1) API.
     * @param {DeleteLiveRecordRequest} req
     * @param {function(string, DeleteLiveRecordResponse):void} cb
     * @public
     */
    DeleteLiveRecord(req, cb) {
        let resp = new DeleteLiveRecordResponse();
        this.request("DeleteLiveRecord", req, resp, cb);
    }

    /**
     * This API is used to create a screencapturing rule. You need to first call the [CreateLiveSnapshotTemplate](https://intl.cloud.tencent.com/document/product/267/32624?from_cn_redirect=1) API to create a screencapturing template to bind the returned template ID to the stream.
<br>Screencapturing document: [LVB Screencapturing](https://intl.cloud.tencent.com/document/product/267/32737?from_cn_redirect=1).
Note: only one screencapturing template can be associated with one domain name.
     * @param {CreateLiveSnapshotRuleRequest} req
     * @param {function(string, CreateLiveSnapshotRuleResponse):void} cb
     * @public
     */
    CreateLiveSnapshotRule(req, cb) {
        let resp = new CreateLiveSnapshotRuleResponse();
        this.request("CreateLiveSnapshotRule", req, resp, cb);
    }

    /**
     * This API is used to create a time shifting template.
     * @param {CreateLiveTimeShiftTemplateRequest} req
     * @param {function(string, CreateLiveTimeShiftTemplateResponse):void} cb
     * @public
     */
    CreateLiveTimeShiftTemplate(req, cb) {
        let resp = new CreateLiveTimeShiftTemplateResponse();
        this.request("CreateLiveTimeShiftTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a time shifting template.
     * @param {DeleteLiveTimeShiftTemplateRequest} req
     * @param {function(string, DeleteLiveTimeShiftTemplateResponse):void} cb
     * @public
     */
    DeleteLiveTimeShiftTemplate(req, cb) {
        let resp = new DeleteLiveTimeShiftTemplateResponse();
        this.request("DeleteLiveTimeShiftTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the playback data of all streams at a specified time point (accurate to the minute).
     * @param {DescribeAllStreamPlayInfoListRequest} req
     * @param {function(string, DescribeAllStreamPlayInfoListResponse):void} cb
     * @public
     */
    DescribeAllStreamPlayInfoList(req, cb) {
        let resp = new DescribeAllStreamPlayInfoListResponse();
        this.request("DescribeAllStreamPlayInfoList", req, resp, cb);
    }

    /**
     * This API is used to query the playback authentication key.
     * @param {DescribeLivePlayAuthKeyRequest} req
     * @param {function(string, DescribeLivePlayAuthKeyResponse):void} cb
     * @public
     */
    DescribeLivePlayAuthKey(req, cb) {
        let resp = new DescribeLivePlayAuthKeyResponse();
        this.request("DescribeLivePlayAuthKey", req, resp, cb);
    }

    /**
     * This API is used to get the stream status, which may be active, inactive, or disabled.

Notes:
This API allows you to query the status of a stream in real time. Given external factors such as network jitter, note the following when you determine whether a host is online:
1. If possible, use your own logic of stream starting/stopping in a room, such as streaming signaling on the client and the online heartbeat of a host, to determine whether the host is online.
2. If your application does not provide the room management feature, use the following methods to determine whether a host is online:
2.1 Use the [live stream callback](https://intl.cloud.tencent.com/document/product/267/20388?from_cn_redirect=1).
2.2 Call [DescribeLiveStreamOnlineList](https://intl.cloud.tencent.com/document/api/267/20472?from_cn_redirect=1) on a regular basis (interval > 1 min).
2.3 Call this API.
2.4 A host is considered to be online if the result returned by any of the above methods indicates so. If an API call times out or a parsing error occurs, to minimize the impact on your business, CSS will also consider the host online.
     * @param {DescribeLiveStreamStateRequest} req
     * @param {function(string, DescribeLiveStreamStateResponse):void} cb
     * @public
     */
    DescribeLiveStreamState(req, cb) {
        let resp = new DescribeLiveStreamStateResponse();
        this.request("DescribeLiveStreamState", req, resp, cb);
    }

    /**
     * This API is used to configure referer allowlist/blocklist of a live streaming domain name.
Referer information is included in HTTP requests. After you enable referer configuration, live streams using RTMP or WebRTC for playback will not authenticate the referer and can be played back normally. To make the referer configuration effective, the HTTP-FLV or HLS protocol is recommended for playback.
     * @param {ModifyLiveDomainRefererRequest} req
     * @param {function(string, ModifyLiveDomainRefererResponse):void} cb
     * @public
     */
    ModifyLiveDomainReferer(req, cb) {
        let resp = new ModifyLiveDomainRefererResponse();
        this.request("ModifyLiveDomainReferer", req, resp, cb);
    }

    /**
     * This API is used to delete a recording template.
     * @param {DeleteLiveRecordTemplateRequest} req
     * @param {function(string, DeleteLiveRecordTemplateResponse):void} cb
     * @public
     */
    DeleteLiveRecordTemplate(req, cb) {
        let resp = new DeleteLiveRecordTemplateResponse();
        this.request("DeleteLiveRecordTemplate", req, resp, cb);
    }

    /**
     * This API is used to cancel the delay setting and recover the real-time display of the live streaming image.
     * @param {ResumeDelayLiveStreamRequest} req
     * @param {function(string, ResumeDelayLiveStreamResponse):void} cb
     * @public
     */
    ResumeDelayLiveStream(req, cb) {
        let resp = new ResumeDelayLiveStreamResponse();
        this.request("ResumeDelayLiveStream", req, resp, cb);
    }

    /**
     * This API is used to create a recording task that starts and ends at specific times and records videos according to a specific recording template.
- Prerequisites
1. Because recording files are saved in VOD, you must first activate VOD.
2. Storage and playback traffic fees are charged for storing and playing the videos recorded. For details, see [Purchase Guide](https://intl.cloud.tencent.com/document/product/266/2837).
- Notes
1. If streaming is interrupted, the current recording will stop and a recording file will be generated. When streaming resumes, as long as it’s before the end time of the task, recording will start again.
2. Avoid creating recording tasks with overlapping time periods. If there are multiple tasks with overlapping time periods for the same stream, the system will start three recording tasks at most to avoid repeated recording.
3. Task records are kept for three months by the platform.
4. Do not use the new [CreateRecordTask](https://intl.cloud.tencent.com/document/product/267/45983?from_cn_redirect=1), [StopRecordTask](https://intl.cloud.tencent.com/document/product/267/45981?from_cn_redirect=1), and [DeleteRecordTask] APIs together with the old `CreateLiveRecord`, `StopLiveRecord`, and `DeleteLiveRecord` APIs.
5. Do not create recording tasks and push streams at the same time. After creating a recording task, we recommend you wait at least three seconds before pushing streams.
     * @param {CreateRecordTaskRequest} req
     * @param {function(string, CreateRecordTaskResponse):void} cb
     * @public
     */
    CreateRecordTask(req, cb) {
        let resp = new CreateRecordTaskResponse();
        this.request("CreateRecordTask", req, resp, cb);
    }

    /**
     * This API is used to create a transcoding template. Up to 50 transcoding templates can be created in total. To use a template, you need to call [CreateLiveTranscodeRule](https://intl.cloud.tencent.com/document/product/267/32647?from_cn_redirect=1) to bind the template ID returned by this API to a stream.
<br>For more information about transcoding, see [Live Remuxing and Transcoding](https://intl.cloud.tencent.com/document/product/267/32736?from_cn_redirect=1).
     * @param {CreateLiveTranscodeTemplateRequest} req
     * @param {function(string, CreateLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateLiveTranscodeTemplate(req, cb) {
        let resp = new CreateLiveTranscodeTemplateResponse();
        this.request("CreateLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the certificate information list.
     * @param {DescribeLiveCertsRequest} req
     * @param {function(string, DescribeLiveCertsResponse):void} cb
     * @public
     */
    DescribeLiveCerts(req, cb) {
        let resp = new DescribeLiveCertsResponse();
        this.request("DescribeLiveCerts", req, resp, cb);
    }

    /**
     * This API is used to enable a disabled LVB domain name.
     * @param {EnableLiveDomainRequest} req
     * @param {function(string, EnableLiveDomainResponse):void} cb
     * @public
     */
    EnableLiveDomain(req, cb) {
        let resp = new EnableLiveDomainResponse();
        this.request("EnableLiveDomain", req, resp, cb);
    }

    /**
     * This API is used to cancel a stream mix. It can be used basically in the same way as `mix_streamv2.cancel_mix_stream`.
     * @param {CancelCommonMixStreamRequest} req
     * @param {function(string, CancelCommonMixStreamResponse):void} cb
     * @public
     */
    CancelCommonMixStream(req, cb) {
        let resp = new CancelCommonMixStreamResponse();
        this.request("CancelCommonMixStream", req, resp, cb);
    }

    /**
     * This API is used to query the number of transcoding tasks.
     * @param {DescribeTranscodeTaskNumRequest} req
     * @param {function(string, DescribeTranscodeTaskNumResponse):void} cb
     * @public
     */
    DescribeTranscodeTaskNum(req, cb) {
        let resp = new DescribeTranscodeTaskNumResponse();
        this.request("DescribeTranscodeTaskNum", req, resp, cb);
    }

    /**
     * This API is used to query the push information of all real-time streams, including client IP, server IP, frame rate, bitrate, domain name, and push start time.
     * @param {DescribeLiveStreamPushInfoListRequest} req
     * @param {function(string, DescribeLiveStreamPushInfoListResponse):void} cb
     * @public
     */
    DescribeLiveStreamPushInfoList(req, cb) {
        let resp = new DescribeLiveStreamPushInfoListResponse();
        this.request("DescribeLiveStreamPushInfoList", req, resp, cb);
    }

    /**
     * Call this API to switch the live broadcast to standby footage.
     * @param {StartLivePadStreamRequest} req
     * @param {function(string, StartLivePadStreamResponse):void} cb
     * @public
     */
    StartLivePadStream(req, cb) {
        let resp = new StartLivePadStreamResponse();
        this.request("StartLivePadStream", req, resp, cb);
    }

    /**
     * This API is used to delete a screencapturing template.
     * @param {DeleteLiveSnapshotTemplateRequest} req
     * @param {function(string, DeleteLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    DeleteLiveSnapshotTemplate(req, cb) {
        let resp = new DeleteLiveSnapshotTemplateResponse();
        this.request("DeleteLiveSnapshotTemplate", req, resp, cb);
    }


}
module.exports = LiveClient;
