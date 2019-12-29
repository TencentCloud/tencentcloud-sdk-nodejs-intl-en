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
const DeleteLiveRecordRuleRequest = models.DeleteLiveRecordRuleRequest;
const ModifyLiveRecordTemplateRequest = models.ModifyLiveRecordTemplateRequest;
const DeleteLiveRecordResponse = models.DeleteLiveRecordResponse;
const DescribeLiveForbidStreamListResponse = models.DescribeLiveForbidStreamListResponse;
const AddDelayLiveStreamResponse = models.AddDelayLiveStreamResponse;
const DescribeLiveTranscodeTemplatesResponse = models.DescribeLiveTranscodeTemplatesResponse;
const TemplateInfo = models.TemplateInfo;
const PublishTime = models.PublishTime;
const PlayAuthKeyInfo = models.PlayAuthKeyInfo;
const DescribeLiveStreamOnlineListResponse = models.DescribeLiveStreamOnlineListResponse;
const CreateLiveRecordResponse = models.CreateLiveRecordResponse;
const StreamInfo = models.StreamInfo;
const RuleInfo = models.RuleInfo;
const StreamEventInfo = models.StreamEventInfo;
const ModifyLivePlayAuthKeyResponse = models.ModifyLivePlayAuthKeyResponse;
const DescribeLiveTranscodeTemplatesRequest = models.DescribeLiveTranscodeTemplatesRequest;
const CreateLiveTranscodeTemplateResponse = models.CreateLiveTranscodeTemplateResponse;
const DescribeLiveForbidStreamListRequest = models.DescribeLiveForbidStreamListRequest;
const CreateLiveTranscodeRuleResponse = models.CreateLiveTranscodeRuleResponse;
const DropLiveStreamResponse = models.DropLiveStreamResponse;
const ResumeDelayLiveStreamResponse = models.ResumeDelayLiveStreamResponse;
const DescribeLiveRecordTemplateResponse = models.DescribeLiveRecordTemplateResponse;
const PushAuthKeyInfo = models.PushAuthKeyInfo;
const DescribeLiveRecordTemplatesResponse = models.DescribeLiveRecordTemplatesResponse;
const DescribeLiveStreamOnlineInfoResponse = models.DescribeLiveStreamOnlineInfoResponse;
const DeleteLiveRecordTemplateRequest = models.DeleteLiveRecordTemplateRequest;
const DescribeLivePlayAuthKeyRequest = models.DescribeLivePlayAuthKeyRequest;
const HlsSpecialParam = models.HlsSpecialParam;
const DescribeLiveRecordRulesResponse = models.DescribeLiveRecordRulesResponse;
const ModifyLiveTranscodeTemplateResponse = models.ModifyLiveTranscodeTemplateResponse;
const ModifyLivePlayAuthKeyRequest = models.ModifyLivePlayAuthKeyRequest;
const DescribeLiveDelayInfoListRequest = models.DescribeLiveDelayInfoListRequest;
const ModifyLiveTranscodeTemplateRequest = models.ModifyLiveTranscodeTemplateRequest;
const DescribeLiveStreamOnlineListRequest = models.DescribeLiveStreamOnlineListRequest;
const ResumeLiveStreamResponse = models.ResumeLiveStreamResponse;
const DescribeLiveTranscodeTemplateRequest = models.DescribeLiveTranscodeTemplateRequest;
const DeleteLiveTranscodeRuleResponse = models.DeleteLiveTranscodeRuleResponse;
const CreateLiveRecordRequest = models.CreateLiveRecordRequest;
const DescribeLiveDelayInfoListResponse = models.DescribeLiveDelayInfoListResponse;
const DescribeLiveStreamStateResponse = models.DescribeLiveStreamStateResponse;
const DescribeLivePushAuthKeyRequest = models.DescribeLivePushAuthKeyRequest;
const ResumeDelayLiveStreamRequest = models.ResumeDelayLiveStreamRequest;
const ModifyLivePushAuthKeyRequest = models.ModifyLivePushAuthKeyRequest;
const DescribeLiveTranscodeRulesRequest = models.DescribeLiveTranscodeRulesRequest;
const CreateLiveRecordRuleResponse = models.CreateLiveRecordRuleResponse;
const DescribeLiveStreamEventListResponse = models.DescribeLiveStreamEventListResponse;
const DescribeLivePlayAuthKeyResponse = models.DescribeLivePlayAuthKeyResponse;
const CreateLiveTranscodeRuleRequest = models.CreateLiveTranscodeRuleRequest;
const DeleteLiveTranscodeTemplateRequest = models.DeleteLiveTranscodeTemplateRequest;
const DescribeLiveRecordTemplatesRequest = models.DescribeLiveRecordTemplatesRequest;
const DropLiveStreamRequest = models.DropLiveStreamRequest;
const DescribeLiveStreamStateRequest = models.DescribeLiveStreamStateRequest;
const DescribeLivePushAuthKeyResponse = models.DescribeLivePushAuthKeyResponse;
const DescribeLiveTranscodeTemplateResponse = models.DescribeLiveTranscodeTemplateResponse;
const RecordTemplateInfo = models.RecordTemplateInfo;
const StopLiveRecordRequest = models.StopLiveRecordRequest;
const ModifyLiveRecordTemplateResponse = models.ModifyLiveRecordTemplateResponse;
const DescribeLiveStreamPublishedListRequest = models.DescribeLiveStreamPublishedListRequest;
const DeleteLiveTranscodeRuleRequest = models.DeleteLiveTranscodeRuleRequest;
const CreateLiveRecordRuleRequest = models.CreateLiveRecordRuleRequest;
const ModifyLivePushAuthKeyResponse = models.ModifyLivePushAuthKeyResponse;
const DelayInfo = models.DelayInfo;
const DeleteLiveTranscodeTemplateResponse = models.DeleteLiveTranscodeTemplateResponse;
const StopLiveRecordResponse = models.StopLiveRecordResponse;
const DescribeLiveTranscodeRulesResponse = models.DescribeLiveTranscodeRulesResponse;
const DescribeLiveRecordTemplateRequest = models.DescribeLiveRecordTemplateRequest;
const CreateLiveRecordTemplateResponse = models.CreateLiveRecordTemplateResponse;
const StreamOnlineInfo = models.StreamOnlineInfo;
const DescribeLiveRecordRulesRequest = models.DescribeLiveRecordRulesRequest;
const StreamName = models.StreamName;
const ForbidLiveStreamRequest = models.ForbidLiveStreamRequest;
const RecordParam = models.RecordParam;
const ForbidStreamInfo = models.ForbidStreamInfo;
const ForbidLiveStreamResponse = models.ForbidLiveStreamResponse;
const DescribeLiveStreamOnlineInfoRequest = models.DescribeLiveStreamOnlineInfoRequest;
const ResumeLiveStreamRequest = models.ResumeLiveStreamRequest;
const DeleteLiveRecordRequest = models.DeleteLiveRecordRequest;
const CreateLiveRecordTemplateRequest = models.CreateLiveRecordTemplateRequest;
const DeleteLiveRecordTemplateResponse = models.DeleteLiveRecordTemplateResponse;
const AddDelayLiveStreamRequest = models.AddDelayLiveStreamRequest;
const DescribeLiveStreamPublishedListResponse = models.DescribeLiveStreamPublishedListResponse;
const DescribeLiveStreamEventListRequest = models.DescribeLiveStreamEventListRequest;
const CreateLiveTranscodeTemplateRequest = models.CreateLiveTranscodeTemplateRequest;
const DeleteLiveRecordRuleResponse = models.DeleteLiveRecordRuleResponse;


/**
 * live client
 * @class
 */
class LiveClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("live.tencentcloudapi.com", "2018-08-01", credential, region, profile);
    }
    
    /**
     * This API is used to disconnect the push connection, which can be resumed.
     * @param {DropLiveStreamRequest} req
     * @param {function(string, DropLiveStreamResponse):void} cb
     * @public
     */
    DropLiveStream(req, cb) {
        let resp = new DropLiveStreamResponse();
        this.request("DropLiveStream", req, resp, cb);
    }

    /**
     * To create a transcoding rule, you need to first call the [CreateLiveTranscodeTemplate](/document/product/267/32646) API to create a transcoding template and bind the returned template ID to the stream.
<br>Transcoding-related document: [LVB Encapsulating and Transcoding](/document/product/267/32736).
     * @param {CreateLiveTranscodeRuleRequest} req
     * @param {function(string, CreateLiveTranscodeRuleResponse):void} cb
     * @public
     */
    CreateLiveTranscodeRule(req, cb) {
        let resp = new CreateLiveTranscodeRuleResponse();
        this.request("CreateLiveTranscodeRule", req, resp, cb);
    }

    /**
     * - Prerequisites
  1. Recording files are stored on the VOD platform, so if you need to use the recording feature, you must first activate the VOD service.
  2. After the recording files are stored, fees (including storage fees and downstream playback traffic fees) are charged according to the VOD billing method. For details, see the [corresponding document](https://cloud.tencent.com/document/product/266/2838).

- Mode description
  This API supports two recording modes:
  1. Scheduled recording mode **(default mode)**.
    The start time and end time need to be passed in, and the recording task automatically starts and ends based on the time parameters.
  2. Real-time video recording mode.
    The start time passed in is ignored, and recording is started immediately after the recording task is created. The recording duration can be up to 30 minutes. If the end time passed in is more than 30 minutes after the current time, it will be counted as 30 minutes. Real-time video recording is mainly used for recording highlight scenes, and it is recommended to keep the duration within 5 minutes.

- Precautions
  1. The API call timeout should be set to more than 3 seconds; otherwise, retries and frequent calls may result in repeated recording tasks.
  2. Subject to the audio and video file formats (FLV/MP4/HLS), the video encoding format of H.264 and audio encoding format of ACC are supported.
     * @param {CreateLiveRecordRequest} req
     * @param {function(string, CreateLiveRecordResponse):void} cb
     * @public
     */
    CreateLiveRecord(req, cb) {
        let resp = new CreateLiveRecordResponse();
        this.request("CreateLiveRecord", req, resp, cb);
    }

    /**
     * Note: Recording files are stored on the VOD platform. To use the recording feature, you need to activate a VOD account and ensure that it is available. After the recording files are stored, applicable fees (including storage fees and downstream playback traffic fees) will be charged according to the VOD billing method. For more information, see the corresponding document.
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
     * This API is used to query streaming events.<br>

Note: This API can filter by IsFilter and return the push history.
     * @param {DescribeLiveStreamEventListRequest} req
     * @param {function(string, DescribeLiveStreamEventListResponse):void} cb
     * @public
     */
    DescribeLiveStreamEventList(req, cb) {
        let resp = new DescribeLiveStreamEventListResponse();
        this.request("DescribeLiveStreamEventList", req, resp, cb);
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
     * This API is used to delete a recording task.
     * @param {DeleteLiveRecordRequest} req
     * @param {function(string, DeleteLiveRecordResponse):void} cb
     * @public
     */
    DeleteLiveRecord(req, cb) {
        let resp = new DeleteLiveRecordResponse();
        this.request("DeleteLiveRecord", req, resp, cb);
    }

    /**
     * This API is used to set the delay time for the stream.
Note: If you want to set delayed playback before pushing, you need to set 5 minutes in advance.
Currently, this API only supports stream granularity, and the feature supporting domain name and application granularities will be available in the future.

     * @param {AddDelayLiveStreamRequest} req
     * @param {function(string, AddDelayLiveStreamResponse):void} cb
     * @public
     */
    AddDelayLiveStream(req, cb) {
        let resp = new AddDelayLiveStreamResponse();
        this.request("AddDelayLiveStream", req, resp, cb);
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
     * @param {DeleteLiveTranscodeRuleRequest} req
     * @param {function(string, DeleteLiveTranscodeRuleResponse):void} cb
     * @public
     */
    DeleteLiveTranscodeRule(req, cb) {
        let resp = new DeleteLiveTranscodeRuleResponse();
        this.request("DeleteLiveTranscodeRule", req, resp, cb);
    }

    /**
     * This API is used to query the active push information list.
     * @param {DescribeLiveStreamOnlineInfoRequest} req
     * @param {function(string, DescribeLiveStreamOnlineInfoResponse):void} cb
     * @public
     */
    DescribeLiveStreamOnlineInfo(req, cb) {
        let resp = new DescribeLiveStreamOnlineInfoResponse();
        this.request("DescribeLiveStreamOnlineInfo", req, resp, cb);
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
     * This API is used to get the list of forbidden streams.
     * @param {DescribeLiveForbidStreamListRequest} req
     * @param {function(string, DescribeLiveForbidStreamListResponse):void} cb
     * @public
     */
    DescribeLiveForbidStreamList(req, cb) {
        let resp = new DescribeLiveForbidStreamListResponse();
        this.request("DescribeLiveForbidStreamList", req, resp, cb);
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
     * This API is used to return the stream status such as active, inactive, or forbidden.
     * @param {DescribeLiveStreamStateRequest} req
     * @param {function(string, DescribeLiveStreamStateResponse):void} cb
     * @public
     */
    DescribeLiveStreamState(req, cb) {
        let resp = new DescribeLiveStreamStateResponse();
        this.request("DescribeLiveStreamState", req, resp, cb);
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
     * This API is used to get the list of recording templates.
     * @param {DescribeLiveRecordTemplatesRequest} req
     * @param {function(string, DescribeLiveRecordTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveRecordTemplates(req, cb) {
        let resp = new DescribeLiveRecordTemplatesResponse();
        this.request("DescribeLiveRecordTemplates", req, resp, cb);
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
     * This API is used to resume a delayed playback.
     * @param {ResumeDelayLiveStreamRequest} req
     * @param {function(string, ResumeDelayLiveStreamResponse):void} cb
     * @public
     */
    ResumeDelayLiveStream(req, cb) {
        let resp = new ResumeDelayLiveStreamResponse();
        this.request("ResumeDelayLiveStream", req, resp, cb);
    }

    /**
     * After a transcoding template is created and a template ID is successfully returned, you need to call the [CreateLiveTranscodeRule](/document/product/267/32647) API and bind the returned template ID to the stream.
<br>Transcoding-related document: [LVB Encapsulating and Transcoding](/document/product/267/32736).
     * @param {CreateLiveTranscodeTemplateRequest} req
     * @param {function(string, CreateLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateLiveTranscodeTemplate(req, cb) {
        let resp = new CreateLiveTranscodeTemplateResponse();
        this.request("CreateLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to forbid the push of a specific stream. You can preset a time point to resume the stream.
     * @param {ForbidLiveStreamRequest} req
     * @param {function(string, ForbidLiveStreamResponse):void} cb
     * @public
     */
    ForbidLiveStream(req, cb) {
        let resp = new ForbidLiveStreamResponse();
        this.request("ForbidLiveStream", req, resp, cb);
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
     * This API is used to return the list of live streams.
     * @param {DescribeLiveStreamOnlineListRequest} req
     * @param {function(string, DescribeLiveStreamOnlineListResponse):void} cb
     * @public
     */
    DescribeLiveStreamOnlineList(req, cb) {
        let resp = new DescribeLiveStreamOnlineListResponse();
        this.request("DescribeLiveStreamOnlineList", req, resp, cb);
    }

    /**
     * To create a recording rule, you need to first call the [CreateLiveRecordTemplate](/document/product/267/32614) API to create a recording template and bind the returned template ID to the stream.
<br>Recording-related document: [LVB Recording](/document/product/267/32739).
     * @param {CreateLiveRecordRuleRequest} req
     * @param {function(string, CreateLiveRecordRuleResponse):void} cb
     * @public
     */
    CreateLiveRecordRule(req, cb) {
        let resp = new CreateLiveRecordRuleResponse();
        this.request("CreateLiveRecordRule", req, resp, cb);
    }

    /**
     * This API is used to get the list of transcoding templates.
     * @param {DescribeLiveTranscodeTemplatesRequest} req
     * @param {function(string, DescribeLiveTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTemplates(req, cb) {
        let resp = new DescribeLiveTranscodeTemplatesResponse();
        this.request("DescribeLiveTranscodeTemplates", req, resp, cb);
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
     * After a recording template is created and a template ID is successfully returned, you need to call the [CreateLiveRecordRule](/document/product/267/32615) API and bind the template ID to the stream.
<br>Recording-related document: [LVB Recording](/document/product/267/32739).
     * @param {CreateLiveRecordTemplateRequest} req
     * @param {function(string, CreateLiveRecordTemplateResponse):void} cb
     * @public
     */
    CreateLiveRecordTemplate(req, cb) {
        let resp = new CreateLiveRecordTemplateResponse();
        this.request("CreateLiveRecordTemplate", req, resp, cb);
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


}
module.exports = LiveClient;
