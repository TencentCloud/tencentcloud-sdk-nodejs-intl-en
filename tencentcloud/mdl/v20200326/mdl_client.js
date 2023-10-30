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
const DeleteStreamLiveChannelResponse = models.DeleteStreamLiveChannelResponse;
const VideoPipelineInputStatistics = models.VideoPipelineInputStatistics;
const CreateStreamLiveInputSecurityGroupResponse = models.CreateStreamLiveInputSecurityGroupResponse;
const InputLossBehaviorInfo = models.InputLossBehaviorInfo;
const StreamVideoInfo = models.StreamVideoInfo;
const CreateStreamLivePlanRequest = models.CreateStreamLivePlanRequest;
const DescribeStreamLiveWatermarksResponse = models.DescribeStreamLiveWatermarksResponse;
const DescribeStreamLiveInputRequest = models.DescribeStreamLiveInputRequest;
const QueryDispatchInputInfo = models.QueryDispatchInputInfo;
const CreateStreamLiveInputRequest = models.CreateStreamLiveInputRequest;
const AudioPidSelectionInfo = models.AudioPidSelectionInfo;
const AudioPipelineInputStatistics = models.AudioPipelineInputStatistics;
const CreateStreamLivePlanResponse = models.CreateStreamLivePlanResponse;
const InputStreamInfo = models.InputStreamInfo;
const PipelineInputSettingsInfo = models.PipelineInputSettingsInfo;
const DescribeStreamLiveChannelOutputStatisticsRequest = models.DescribeStreamLiveChannelOutputStatisticsRequest;
const ChannelPipelineAlerts = models.ChannelPipelineAlerts;
const InputInfo = models.InputInfo;
const AVTemplate = models.AVTemplate;
const DestinationInfo = models.DestinationInfo;
const DeleteStreamLiveInputRequest = models.DeleteStreamLiveInputRequest;
const ModifyStreamLiveInputSecurityGroupResponse = models.ModifyStreamLiveInputSecurityGroupResponse;
const ModifyStreamLiveInputRequest = models.ModifyStreamLiveInputRequest;
const DescribeStreamLiveChannelResponse = models.DescribeStreamLiveChannelResponse;
const DescribeStreamLiveRegionsRequest = models.DescribeStreamLiveRegionsRequest;
const DescribeStreamLiveChannelAlertsRequest = models.DescribeStreamLiveChannelAlertsRequest;
const AudioSelectorInfo = models.AudioSelectorInfo;
const LogInfo = models.LogInfo;
const DescribeStreamLiveWatermarkRequest = models.DescribeStreamLiveWatermarkRequest;
const DrmSettingsInfo = models.DrmSettingsInfo;
const PipelineOutputStatistics = models.PipelineOutputStatistics;
const DeleteStreamLivePlanResponse = models.DeleteStreamLivePlanResponse;
const CreateTextSettings = models.CreateTextSettings;
const DashRemuxSettingsInfo = models.DashRemuxSettingsInfo;
const CreateStreamLiveWatermarkRequest = models.CreateStreamLiveWatermarkRequest;
const StreamInfo = models.StreamInfo;
const SDMCSettingsInfo = models.SDMCSettingsInfo;
const DeleteStreamLiveInputSecurityGroupRequest = models.DeleteStreamLiveInputSecurityGroupRequest;
const AttachedInput = models.AttachedInput;
const QueryInputStreamStateResponse = models.QueryInputStreamStateResponse;
const DescribeStreamLiveWatermarksRequest = models.DescribeStreamLiveWatermarksRequest;
const TimedMetadataInfo = models.TimedMetadataInfo;
const DescribeTranscodeDetailInfo = models.DescribeTranscodeDetailInfo;
const TimeShiftSettingsInfo = models.TimeShiftSettingsInfo;
const DeliveryRestrictionsInfo = models.DeliveryRestrictionsInfo;
const VideoTemplateInfo = models.VideoTemplateInfo;
const TimingSettingsReq = models.TimingSettingsReq;
const ModifyStreamLiveWatermarkRequest = models.ModifyStreamLiveWatermarkRequest;
const DescribeStreamLiveTranscodeDetailRequest = models.DescribeStreamLiveTranscodeDetailRequest;
const SegmentationDescriptorRespInfo = models.SegmentationDescriptorRespInfo;
const DescribeStreamLiveChannelLogsResponse = models.DescribeStreamLiveChannelLogsResponse;
const DescribeStreamLiveChannelInputStatisticsRequest = models.DescribeStreamLiveChannelInputStatisticsRequest;
const PipelineLogInfo = models.PipelineLogInfo;
const DeleteStreamLivePlanRequest = models.DeleteStreamLivePlanRequest;
const DescribeStreamLiveChannelsRequest = models.DescribeStreamLiveChannelsRequest;
const FailOverSettings = models.FailOverSettings;
const ChannelInputStatistics = models.ChannelInputStatistics;
const HlsRemuxSettingsInfo = models.HlsRemuxSettingsInfo;
const EventSettingsResp = models.EventSettingsResp;
const TimedMetadataSettingInfo = models.TimedMetadataSettingInfo;
const AudioTemplateInfo = models.AudioTemplateInfo;
const StreamPackageSettingsInfo = models.StreamPackageSettingsInfo;
const DescribeStreamLiveChannelsResponse = models.DescribeStreamLiveChannelsResponse;
const QueryInputStreamStateRequest = models.QueryInputStreamStateRequest;
const PlanReq = models.PlanReq;
const DeleteStreamLiveWatermarkRequest = models.DeleteStreamLiveWatermarkRequest;
const DescribeStreamLiveRegionsResponse = models.DescribeStreamLiveRegionsResponse;
const TimedRecordSettings = models.TimedRecordSettings;
const StreamLiveRegionInfo = models.StreamLiveRegionInfo;
const DescribeStreamLiveChannelRequest = models.DescribeStreamLiveChannelRequest;
const DescribeStreamLivePlansRequest = models.DescribeStreamLivePlansRequest;
const CreateStreamLiveChannelRequest = models.CreateStreamLiveChannelRequest;
const DescribeStreamLiveTranscodeDetailResponse = models.DescribeStreamLiveTranscodeDetailResponse;
const CreateStreamLiveWatermarkResponse = models.CreateStreamLiveWatermarkResponse;
const DescribeStreamLiveInputsResponse = models.DescribeStreamLiveInputsResponse;
const ModifyStreamLiveInputResponse = models.ModifyStreamLiveInputResponse;
const DescribeStreamLiveChannelAlertsResponse = models.DescribeStreamLiveChannelAlertsResponse;
const PlanResp = models.PlanResp;
const DescribeStreamLivePlansResponse = models.DescribeStreamLivePlansResponse;
const DescribeStreamLiveChannelLogsRequest = models.DescribeStreamLiveChannelLogsRequest;
const CreateStreamLiveInputSecurityGroupRequest = models.CreateStreamLiveInputSecurityGroupRequest;
const DescribeStreamLiveChannelOutputStatisticsResponse = models.DescribeStreamLiveChannelOutputStatisticsResponse;
const DescribeWatermarkInfo = models.DescribeWatermarkInfo;
const EventSettingsDestinationReq = models.EventSettingsDestinationReq;
const EventSettingsReq = models.EventSettingsReq;
const DrmKey = models.DrmKey;
const EventSettingsDestinationResp = models.EventSettingsDestinationResp;
const OutputInfo = models.OutputInfo;
const DescribeStreamLiveInputSecurityGroupRequest = models.DescribeStreamLiveInputSecurityGroupRequest;
const CreateStreamLiveChannelResponse = models.CreateStreamLiveChannelResponse;
const DescribeStreamLiveChannelInputStatisticsResponse = models.DescribeStreamLiveChannelInputStatisticsResponse;
const StopStreamLiveChannelResponse = models.StopStreamLiveChannelResponse;
const PushEventSetting = models.PushEventSetting;
const CreateImageSettings = models.CreateImageSettings;
const StartStreamLiveChannelResponse = models.StartStreamLiveChannelResponse;
const StreamLiveOutputGroupsInfo = models.StreamLiveOutputGroupsInfo;
const ChannelOutputsStatistics = models.ChannelOutputsStatistics;
const PlanSettings = models.PlanSettings;
const DescribeStreamLiveInputSecurityGroupsResponse = models.DescribeStreamLiveInputSecurityGroupsResponse;
const EventNotifySetting = models.EventNotifySetting;
const DeleteStreamLiveInputResponse = models.DeleteStreamLiveInputResponse;
const StartStreamLiveChannelRequest = models.StartStreamLiveChannelRequest;
const TimingSettingsResp = models.TimingSettingsResp;
const DescribeStreamLiveWatermarkResponse = models.DescribeStreamLiveWatermarkResponse;
const StreamScte35Info = models.StreamScte35Info;
const StreamAudioInfo = models.StreamAudioInfo;
const OutputsStatistics = models.OutputsStatistics;
const InputSecurityGroupInfo = models.InputSecurityGroupInfo;
const RegionInfo = models.RegionInfo;
const ModifyStreamLiveInputSecurityGroupRequest = models.ModifyStreamLiveInputSecurityGroupRequest;
const ChannelAlertInfos = models.ChannelAlertInfos;
const PipelineInputStatistics = models.PipelineInputStatistics;
const ModifyStreamLiveChannelResponse = models.ModifyStreamLiveChannelResponse;
const DeleteStreamLiveInputSecurityGroupResponse = models.DeleteStreamLiveInputSecurityGroupResponse;
const StopStreamLiveChannelRequest = models.StopStreamLiveChannelRequest;
const DescribeStreamLiveInputResponse = models.DescribeStreamLiveInputResponse;
const InputStatistics = models.InputStatistics;
const LogMessageInfo = models.LogMessageInfo;
const DescribeStreamLiveInputsRequest = models.DescribeStreamLiveInputsRequest;
const Scte35SettingsInfo = models.Scte35SettingsInfo;
const ModifyStreamLiveWatermarkResponse = models.ModifyStreamLiveWatermarkResponse;
const ModifyStreamLiveChannelRequest = models.ModifyStreamLiveChannelRequest;
const DescribeTextSettings = models.DescribeTextSettings;
const DescribeImageSettings = models.DescribeImageSettings;
const DeleteStreamLiveWatermarkResponse = models.DeleteStreamLiveWatermarkResponse;
const CreateStreamLiveInputResponse = models.CreateStreamLiveInputResponse;
const DescribeStreamLiveInputSecurityGroupResponse = models.DescribeStreamLiveInputSecurityGroupResponse;
const StreamLiveChannelInfo = models.StreamLiveChannelInfo;
const SegmentationDescriptorInfo = models.SegmentationDescriptorInfo;
const InputSettingInfo = models.InputSettingInfo;
const DescribeStreamLiveInputSecurityGroupsRequest = models.DescribeStreamLiveInputSecurityGroupsRequest;
const DeleteStreamLiveChannelRequest = models.DeleteStreamLiveChannelRequest;


/**
 * mdl client
 * @class
 */
class MdlClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mdl.tencentcloudapi.com", "2020-03-26", credential, region, profile);
    }
    
    /**
     * This API is used to query the alarm information of a StreamLive channel.
     * @param {DescribeStreamLiveChannelAlertsRequest} req
     * @param {function(string, DescribeStreamLiveChannelAlertsResponse):void} cb
     * @public
     */
    DescribeStreamLiveChannelAlerts(req, cb) {
        let resp = new DescribeStreamLiveChannelAlertsResponse();
        this.request("DescribeStreamLiveChannelAlerts", req, resp, cb);
    }

    /**
     * This API is used to query a StreamLive channel.
     * @param {DescribeStreamLiveChannelRequest} req
     * @param {function(string, DescribeStreamLiveChannelResponse):void} cb
     * @public
     */
    DescribeStreamLiveChannel(req, cb) {
        let resp = new DescribeStreamLiveChannelResponse();
        this.request("DescribeStreamLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to create a StreamLive input.
     * @param {CreateStreamLiveInputRequest} req
     * @param {function(string, CreateStreamLiveInputResponse):void} cb
     * @public
     */
    CreateStreamLiveInput(req, cb) {
        let resp = new CreateStreamLiveInputResponse();
        this.request("CreateStreamLiveInput", req, resp, cb);
    }

    /**
     * This API is used to query StreamLive channel logs, such as push event logs.
     * @param {DescribeStreamLiveChannelLogsRequest} req
     * @param {function(string, DescribeStreamLiveChannelLogsResponse):void} cb
     * @public
     */
    DescribeStreamLiveChannelLogs(req, cb) {
        let resp = new DescribeStreamLiveChannelLogsResponse();
        this.request("DescribeStreamLiveChannelLogs", req, resp, cb);
    }

    /**
     * This API is used to query input security groups in batches.
     * @param {DescribeStreamLiveInputSecurityGroupsRequest} req
     * @param {function(string, DescribeStreamLiveInputSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeStreamLiveInputSecurityGroups(req, cb) {
        let resp = new DescribeStreamLiveInputSecurityGroupsResponse();
        this.request("DescribeStreamLiveInputSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to start a StreamLive channel.
     * @param {StartStreamLiveChannelRequest} req
     * @param {function(string, StartStreamLiveChannelResponse):void} cb
     * @public
     */
    StartStreamLiveChannel(req, cb) {
        let resp = new StartStreamLiveChannelResponse();
        this.request("StartStreamLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to query input statistics.
     * @param {DescribeStreamLiveChannelInputStatisticsRequest} req
     * @param {function(string, DescribeStreamLiveChannelInputStatisticsResponse):void} cb
     * @public
     */
    DescribeStreamLiveChannelInputStatistics(req, cb) {
        let resp = new DescribeStreamLiveChannelInputStatisticsResponse();
        this.request("DescribeStreamLiveChannelInputStatistics", req, resp, cb);
    }

    /**
     * This API is used to delete a StreamLive channel.
     * @param {DeleteStreamLiveChannelRequest} req
     * @param {function(string, DeleteStreamLiveChannelResponse):void} cb
     * @public
     */
    DeleteStreamLiveChannel(req, cb) {
        let resp = new DeleteStreamLiveChannelResponse();
        this.request("DeleteStreamLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to query all StreamLive regions.
     * @param {DescribeStreamLiveRegionsRequest} req
     * @param {function(string, DescribeStreamLiveRegionsResponse):void} cb
     * @public
     */
    DescribeStreamLiveRegions(req, cb) {
        let resp = new DescribeStreamLiveRegionsResponse();
        this.request("DescribeStreamLiveRegions", req, resp, cb);
    }

    /**
     * This API is used to query the transcoding information of StreamLive streams.
     * @param {DescribeStreamLiveTranscodeDetailRequest} req
     * @param {function(string, DescribeStreamLiveTranscodeDetailResponse):void} cb
     * @public
     */
    DescribeStreamLiveTranscodeDetail(req, cb) {
        let resp = new DescribeStreamLiveTranscodeDetailResponse();
        this.request("DescribeStreamLiveTranscodeDetail", req, resp, cb);
    }

    /**
     * This API is used to create an event in the plan.
     * @param {CreateStreamLivePlanRequest} req
     * @param {function(string, CreateStreamLivePlanResponse):void} cb
     * @public
     */
    CreateStreamLivePlan(req, cb) {
        let resp = new CreateStreamLivePlanResponse();
        this.request("CreateStreamLivePlan", req, resp, cb);
    }

    /**
     * This API is used to create a StreamLive channel.
     * @param {CreateStreamLiveChannelRequest} req
     * @param {function(string, CreateStreamLiveChannelResponse):void} cb
     * @public
     */
    CreateStreamLiveChannel(req, cb) {
        let resp = new CreateStreamLiveChannelResponse();
        this.request("CreateStreamLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to modify an input security group.
     * @param {ModifyStreamLiveInputSecurityGroupRequest} req
     * @param {function(string, ModifyStreamLiveInputSecurityGroupResponse):void} cb
     * @public
     */
    ModifyStreamLiveInputSecurityGroup(req, cb) {
        let resp = new ModifyStreamLiveInputSecurityGroupResponse();
        this.request("ModifyStreamLiveInputSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to modify a StreamLive channel.
     * @param {ModifyStreamLiveChannelRequest} req
     * @param {function(string, ModifyStreamLiveChannelResponse):void} cb
     * @public
     */
    ModifyStreamLiveChannel(req, cb) {
        let resp = new ModifyStreamLiveChannelResponse();
        this.request("ModifyStreamLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to query StreamLive channels in batches.
     * @param {DescribeStreamLiveChannelsRequest} req
     * @param {function(string, DescribeStreamLiveChannelsResponse):void} cb
     * @public
     */
    DescribeStreamLiveChannels(req, cb) {
        let resp = new DescribeStreamLiveChannelsResponse();
        this.request("DescribeStreamLiveChannels", req, resp, cb);
    }

    /**
     * This API is used to query the events in the plan in batches.
     * @param {DescribeStreamLivePlansRequest} req
     * @param {function(string, DescribeStreamLivePlansResponse):void} cb
     * @public
     */
    DescribeStreamLivePlans(req, cb) {
        let resp = new DescribeStreamLivePlansResponse();
        this.request("DescribeStreamLivePlans", req, resp, cb);
    }

    /**
     * This API is used to modify a watermark.
     * @param {ModifyStreamLiveWatermarkRequest} req
     * @param {function(string, ModifyStreamLiveWatermarkResponse):void} cb
     * @public
     */
    ModifyStreamLiveWatermark(req, cb) {
        let resp = new ModifyStreamLiveWatermarkResponse();
        this.request("ModifyStreamLiveWatermark", req, resp, cb);
    }

    /**
     * This API is used to add a watermark.
     * @param {CreateStreamLiveWatermarkRequest} req
     * @param {function(string, CreateStreamLiveWatermarkResponse):void} cb
     * @public
     */
    CreateStreamLiveWatermark(req, cb) {
        let resp = new CreateStreamLiveWatermarkResponse();
        this.request("CreateStreamLiveWatermark", req, resp, cb);
    }

    /**
     * This API is used to query StreamLive inputs in batches.
     * @param {DescribeStreamLiveInputsRequest} req
     * @param {function(string, DescribeStreamLiveInputsResponse):void} cb
     * @public
     */
    DescribeStreamLiveInputs(req, cb) {
        let resp = new DescribeStreamLiveInputsResponse();
        this.request("DescribeStreamLiveInputs", req, resp, cb);
    }

    /**
     * This API is used to query a watermark.
     * @param {DescribeStreamLiveWatermarkRequest} req
     * @param {function(string, DescribeStreamLiveWatermarkResponse):void} cb
     * @public
     */
    DescribeStreamLiveWatermark(req, cb) {
        let resp = new DescribeStreamLiveWatermarkResponse();
        this.request("DescribeStreamLiveWatermark", req, resp, cb);
    }

    /**
     * This API is used to delete a StreamLive event.
     * @param {DeleteStreamLivePlanRequest} req
     * @param {function(string, DeleteStreamLivePlanResponse):void} cb
     * @public
     */
    DeleteStreamLivePlan(req, cb) {
        let resp = new DeleteStreamLivePlanResponse();
        this.request("DeleteStreamLivePlan", req, resp, cb);
    }

    /**
     * This API is used to query the stream status of a StreamLive input.
     * @param {QueryInputStreamStateRequest} req
     * @param {function(string, QueryInputStreamStateResponse):void} cb
     * @public
     */
    QueryInputStreamState(req, cb) {
        let resp = new QueryInputStreamStateResponse();
        this.request("QueryInputStreamState", req, resp, cb);
    }

    /**
     * This API is used to query a StreamLive input.
     * @param {DescribeStreamLiveInputRequest} req
     * @param {function(string, DescribeStreamLiveInputResponse):void} cb
     * @public
     */
    DescribeStreamLiveInput(req, cb) {
        let resp = new DescribeStreamLiveInputResponse();
        this.request("DescribeStreamLiveInput", req, resp, cb);
    }

    /**
     * This API is used to delete a watermark.
     * @param {DeleteStreamLiveWatermarkRequest} req
     * @param {function(string, DeleteStreamLiveWatermarkResponse):void} cb
     * @public
     */
    DeleteStreamLiveWatermark(req, cb) {
        let resp = new DeleteStreamLiveWatermarkResponse();
        this.request("DeleteStreamLiveWatermark", req, resp, cb);
    }

    /**
     * This API is used to modify a StreamLive input.
     * @param {ModifyStreamLiveInputRequest} req
     * @param {function(string, ModifyStreamLiveInputResponse):void} cb
     * @public
     */
    ModifyStreamLiveInput(req, cb) {
        let resp = new ModifyStreamLiveInputResponse();
        this.request("ModifyStreamLiveInput", req, resp, cb);
    }

    /**
     * This API is used to query an input security group.
     * @param {DescribeStreamLiveInputSecurityGroupRequest} req
     * @param {function(string, DescribeStreamLiveInputSecurityGroupResponse):void} cb
     * @public
     */
    DescribeStreamLiveInputSecurityGroup(req, cb) {
        let resp = new DescribeStreamLiveInputSecurityGroupResponse();
        this.request("DescribeStreamLiveInputSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to delete a StreamLive input.
     * @param {DeleteStreamLiveInputRequest} req
     * @param {function(string, DeleteStreamLiveInputResponse):void} cb
     * @public
     */
    DeleteStreamLiveInput(req, cb) {
        let resp = new DeleteStreamLiveInputResponse();
        this.request("DeleteStreamLiveInput", req, resp, cb);
    }

    /**
     * This API is used to query the output statistics of a StreamLive channel.
     * @param {DescribeStreamLiveChannelOutputStatisticsRequest} req
     * @param {function(string, DescribeStreamLiveChannelOutputStatisticsResponse):void} cb
     * @public
     */
    DescribeStreamLiveChannelOutputStatistics(req, cb) {
        let resp = new DescribeStreamLiveChannelOutputStatisticsResponse();
        this.request("DescribeStreamLiveChannelOutputStatistics", req, resp, cb);
    }

    /**
     * This API is used to stop a StreamLive channel.
     * @param {StopStreamLiveChannelRequest} req
     * @param {function(string, StopStreamLiveChannelResponse):void} cb
     * @public
     */
    StopStreamLiveChannel(req, cb) {
        let resp = new StopStreamLiveChannelResponse();
        this.request("StopStreamLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to query multiple watermarks at a time.
     * @param {DescribeStreamLiveWatermarksRequest} req
     * @param {function(string, DescribeStreamLiveWatermarksResponse):void} cb
     * @public
     */
    DescribeStreamLiveWatermarks(req, cb) {
        let resp = new DescribeStreamLiveWatermarksResponse();
        this.request("DescribeStreamLiveWatermarks", req, resp, cb);
    }

    /**
     * This API is used to delete an input security group.
     * @param {DeleteStreamLiveInputSecurityGroupRequest} req
     * @param {function(string, DeleteStreamLiveInputSecurityGroupResponse):void} cb
     * @public
     */
    DeleteStreamLiveInputSecurityGroup(req, cb) {
        let resp = new DeleteStreamLiveInputSecurityGroupResponse();
        this.request("DeleteStreamLiveInputSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to create an input security group. Up to 5 security groups are allowed.
     * @param {CreateStreamLiveInputSecurityGroupRequest} req
     * @param {function(string, CreateStreamLiveInputSecurityGroupResponse):void} cb
     * @public
     */
    CreateStreamLiveInputSecurityGroup(req, cb) {
        let resp = new CreateStreamLiveInputSecurityGroupResponse();
        this.request("CreateStreamLiveInputSecurityGroup", req, resp, cb);
    }


}
module.exports = MdlClient;
