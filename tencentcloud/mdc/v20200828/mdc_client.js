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
const DescribeOutputRTMPSettings = models.DescribeOutputRTMPSettings;
const DescribeStreamLinkFlowLogsResponse = models.DescribeStreamLinkFlowLogsResponse;
const OutputAddress = models.OutputAddress;
const OutputSRTSourceAddressResp = models.OutputSRTSourceAddressResp;
const InputAddress = models.InputAddress;
const DescribeInputRTPSettings = models.DescribeInputRTPSettings;
const FlowRealtimeStatusRTP = models.FlowRealtimeStatusRTP;
const DescribeStreamLinkRegionsRequest = models.DescribeStreamLinkRegionsRequest;
const ModifyStreamLinkFlowRequest = models.ModifyStreamLinkFlowRequest;
const DeleteStreamLinkFlowRequest = models.DeleteStreamLinkFlowRequest;
const DescribeStreamLinkFlowMediaStatisticsResponse = models.DescribeStreamLinkFlowMediaStatisticsResponse;
const ModifyStreamLinkInputResponse = models.ModifyStreamLinkInputResponse;
const CreateOutputInfoRTPSettings = models.CreateOutputInfoRTPSettings;
const CreateStreamLinkFlowRequest = models.CreateStreamLinkFlowRequest;
const StartStreamLinkFlowRequest = models.StartStreamLinkFlowRequest;
const CreateOutputSrtSettingsDestinations = models.CreateOutputSrtSettingsDestinations;
const SRTAddressDestination = models.SRTAddressDestination;
const DescribeStreamLinkFlowStatisticsRequest = models.DescribeStreamLinkFlowStatisticsRequest;
const SRTSourceAddressReq = models.SRTSourceAddressReq;
const DescribeOutput = models.DescribeOutput;
const DescribeFlow = models.DescribeFlow;
const DeleteStreamLinkOutputRequest = models.DeleteStreamLinkOutputRequest;
const FlowStatisticsArray = models.FlowStatisticsArray;
const CreateInputSRTSettings = models.CreateInputSRTSettings;
const FlowMediaAudio = models.FlowMediaAudio;
const DescribeInputRTMPSettings = models.DescribeInputRTMPSettings;
const ModifyStreamLinkFlowResponse = models.ModifyStreamLinkFlowResponse;
const DescribeStreamLinkFlowRequest = models.DescribeStreamLinkFlowRequest;
const RegionInfo = models.RegionInfo;
const DescribeStreamLinkFlowMediaStatisticsRequest = models.DescribeStreamLinkFlowMediaStatisticsRequest;
const DescribeStreamLinkFlowRealtimeStatusRequest = models.DescribeStreamLinkFlowRealtimeStatusRequest;
const ModifyStreamLinkOutputInfoResponse = models.ModifyStreamLinkOutputInfoResponse;
const DescribeStreamLinkFlowResponse = models.DescribeStreamLinkFlowResponse;
const StopStreamLinkFlowResponse = models.StopStreamLinkFlowResponse;
const FlowSRTInfo = models.FlowSRTInfo;
const FlowStatistics = models.FlowStatistics;
const DescribeStreamLinkFlowSRTStatisticsRequest = models.DescribeStreamLinkFlowSRTStatisticsRequest;
const DescribeStreamLinkFlowRealtimeStatusResponse = models.DescribeStreamLinkFlowRealtimeStatusResponse;
const FlowAudio = models.FlowAudio;
const CreateOutputRTPSettingsDestinations = models.CreateOutputRTPSettingsDestinations;
const FlowVideo = models.FlowVideo;
const StopStreamLinkFlowRequest = models.StopStreamLinkFlowRequest;
const CreateInput = models.CreateInput;
const CreateOutputRTMPSettings = models.CreateOutputRTMPSettings;
const DescribeOutputRTMPPullServerUrl = models.DescribeOutputRTMPPullServerUrl;
const DescribeInput = models.DescribeInput;
const CreateOutputRtmpSettingsDestinations = models.CreateOutputRtmpSettingsDestinations;
const CreateOutputInfo = models.CreateOutputInfo;
const FlowLogInfo = models.FlowLogInfo;
const FlowMediaInfo = models.FlowMediaInfo;
const DescribeOutputSRTSettings = models.DescribeOutputSRTSettings;
const DeleteStreamLinkOutputResponse = models.DeleteStreamLinkOutputResponse;
const StartStreamLinkFlowResponse = models.StartStreamLinkFlowResponse;
const DescribeOutputRTMPPullSettings = models.DescribeOutputRTMPPullSettings;
const DescribeStreamLinkFlowsResponse = models.DescribeStreamLinkFlowsResponse;
const FlowMediaVideo = models.FlowMediaVideo;
const CreateStreamLinkOutputInfoRequest = models.CreateStreamLinkOutputInfoRequest;
const DeleteStreamLinkFlowResponse = models.DeleteStreamLinkFlowResponse;
const DescribeStreamLinkRegionsResponse = models.DescribeStreamLinkRegionsResponse;
const DescribeStreamLinkFlowSRTStatisticsResponse = models.DescribeStreamLinkFlowSRTStatisticsResponse;
const ModifyOutputInfo = models.ModifyOutputInfo;
const ModifyStreamLinkInputRequest = models.ModifyStreamLinkInputRequest;
const DescribeOutputRTPSettings = models.DescribeOutputRTPSettings;
const DescribeInputSRTSettings = models.DescribeInputSRTSettings;
const SRTSourceAddressResp = models.SRTSourceAddressResp;
const DescribeStreamLinkFlowStatisticsResponse = models.DescribeStreamLinkFlowStatisticsResponse;
const StreamLinkRegionInfo = models.StreamLinkRegionInfo;
const ModifyInput = models.ModifyInput;
const FlowRealtimeStatusSRT = models.FlowRealtimeStatusSRT;
const CreateStreamLinkFlowResponse = models.CreateStreamLinkFlowResponse;
const RTPAddressDestination = models.RTPAddressDestination;
const CreateOutputSrtSettings = models.CreateOutputSrtSettings;
const RTMPAddressDestination = models.RTMPAddressDestination;
const CreateInputRTPSettings = models.CreateInputRTPSettings;
const CreateStreamLinkOutputInfoResponse = models.CreateStreamLinkOutputInfoResponse;
const DescribeStreamLinkFlowLogsRequest = models.DescribeStreamLinkFlowLogsRequest;
const DescribeStreamLinkFlowsRequest = models.DescribeStreamLinkFlowsRequest;
const FlowRealtimeStatusRTMP = models.FlowRealtimeStatusRTMP;
const FlowRealtimeStatusCommon = models.FlowRealtimeStatusCommon;
const FlowRealtimeStatusItem = models.FlowRealtimeStatusItem;
const ModifyStreamLinkOutputInfoRequest = models.ModifyStreamLinkOutputInfoRequest;


/**
 * mdc client
 * @class
 */
class MdcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mdc.tencentcloudapi.com", "2020-08-28", credential, region, profile);
    }
    
    /**
     * This API is used to query the configuration information of a StreamLink flow.
     * @param {DescribeStreamLinkFlowRequest} req
     * @param {function(string, DescribeStreamLinkFlowResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlow(req, cb) {
        let resp = new DescribeStreamLinkFlowResponse();
        this.request("DescribeStreamLinkFlow", req, resp, cb);
    }

    /**
     * This API is used to stop a StreamLink flow.
     * @param {StopStreamLinkFlowRequest} req
     * @param {function(string, StopStreamLinkFlowResponse):void} cb
     * @public
     */
    StopStreamLinkFlow(req, cb) {
        let resp = new StopStreamLinkFlowResponse();
        this.request("StopStreamLinkFlow", req, resp, cb);
    }

    /**
     * This API is used to modify an output of a StreamLink flow.
     * @param {ModifyStreamLinkOutputInfoRequest} req
     * @param {function(string, ModifyStreamLinkOutputInfoResponse):void} cb
     * @public
     */
    ModifyStreamLinkOutputInfo(req, cb) {
        let resp = new ModifyStreamLinkOutputInfoResponse();
        this.request("ModifyStreamLinkOutputInfo", req, resp, cb);
    }

    /**
     * This API is used to delete a StreamLink flow.
     * @param {DeleteStreamLinkFlowRequest} req
     * @param {function(string, DeleteStreamLinkFlowResponse):void} cb
     * @public
     */
    DeleteStreamLinkFlow(req, cb) {
        let resp = new DeleteStreamLinkFlowResponse();
        this.request("DeleteStreamLinkFlow", req, resp, cb);
    }

    /**
     * This API is used to query the current status of a flow.
     * @param {DescribeStreamLinkFlowRealtimeStatusRequest} req
     * @param {function(string, DescribeStreamLinkFlowRealtimeStatusResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlowRealtimeStatus(req, cb) {
        let resp = new DescribeStreamLinkFlowRealtimeStatusResponse();
        this.request("DescribeStreamLinkFlowRealtimeStatus", req, resp, cb);
    }

    /**
     * This API is used to query the configuration information of multiple StreamLink flows in batches.
     * @param {DescribeStreamLinkFlowsRequest} req
     * @param {function(string, DescribeStreamLinkFlowsResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlows(req, cb) {
        let resp = new DescribeStreamLinkFlowsResponse();
        this.request("DescribeStreamLinkFlows", req, resp, cb);
    }

    /**
     * This API is used to create a StreamLink flow.
     * @param {CreateStreamLinkFlowRequest} req
     * @param {function(string, CreateStreamLinkFlowResponse):void} cb
     * @public
     */
    CreateStreamLinkFlow(req, cb) {
        let resp = new CreateStreamLinkFlowResponse();
        this.request("CreateStreamLinkFlow", req, resp, cb);
    }

    /**
     * This API is used to create a StreamLink output.
     * @param {CreateStreamLinkOutputInfoRequest} req
     * @param {function(string, CreateStreamLinkOutputInfoResponse):void} cb
     * @public
     */
    CreateStreamLinkOutputInfo(req, cb) {
        let resp = new CreateStreamLinkOutputInfoResponse();
        this.request("CreateStreamLinkOutputInfo", req, resp, cb);
    }

    /**
     * This API is used to modify an input of a StreamLink flow.
     * @param {ModifyStreamLinkInputRequest} req
     * @param {function(string, ModifyStreamLinkInputResponse):void} cb
     * @public
     */
    ModifyStreamLinkInput(req, cb) {
        let resp = new ModifyStreamLinkInputResponse();
        this.request("ModifyStreamLinkInput", req, resp, cb);
    }

    /**
     * This API is used to query the media quality of a StreamLink flow.

     * @param {DescribeStreamLinkFlowMediaStatisticsRequest} req
     * @param {function(string, DescribeStreamLinkFlowMediaStatisticsResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlowMediaStatistics(req, cb) {
        let resp = new DescribeStreamLinkFlowMediaStatisticsResponse();
        this.request("DescribeStreamLinkFlowMediaStatistics", req, resp, cb);
    }

    /**
     * This API is used to start a StreamLink flow.
     * @param {StartStreamLinkFlowRequest} req
     * @param {function(string, StartStreamLinkFlowResponse):void} cb
     * @public
     */
    StartStreamLinkFlow(req, cb) {
        let resp = new StartStreamLinkFlowResponse();
        this.request("StartStreamLinkFlow", req, resp, cb);
    }

    /**
     * This API is used to delete an output of a StreamLink flow.
     * @param {DeleteStreamLinkOutputRequest} req
     * @param {function(string, DeleteStreamLinkOutputResponse):void} cb
     * @public
     */
    DeleteStreamLinkOutput(req, cb) {
        let resp = new DeleteStreamLinkOutputResponse();
        this.request("DeleteStreamLinkOutput", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration information of a StreamLink flow.
     * @param {ModifyStreamLinkFlowRequest} req
     * @param {function(string, ModifyStreamLinkFlowResponse):void} cb
     * @public
     */
    ModifyStreamLinkFlow(req, cb) {
        let resp = new ModifyStreamLinkFlowResponse();
        this.request("ModifyStreamLinkFlow", req, resp, cb);
    }

    /**
     * This API is used to query the SRT streaming performance of a StreamLink flow.
     * @param {DescribeStreamLinkFlowSRTStatisticsRequest} req
     * @param {function(string, DescribeStreamLinkFlowSRTStatisticsResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlowSRTStatistics(req, cb) {
        let resp = new DescribeStreamLinkFlowSRTStatisticsResponse();
        this.request("DescribeStreamLinkFlowSRTStatistics", req, resp, cb);
    }

    /**
     * This API is used to query all StreamLink regions.
     * @param {DescribeStreamLinkRegionsRequest} req
     * @param {function(string, DescribeStreamLinkRegionsResponse):void} cb
     * @public
     */
    DescribeStreamLinkRegions(req, cb) {
        let resp = new DescribeStreamLinkRegionsResponse();
        this.request("DescribeStreamLinkRegions", req, resp, cb);
    }

    /**
     * This API is used to query the logs of a StreamLink flow.
     * @param {DescribeStreamLinkFlowLogsRequest} req
     * @param {function(string, DescribeStreamLinkFlowLogsResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlowLogs(req, cb) {
        let resp = new DescribeStreamLinkFlowLogsResponse();
        this.request("DescribeStreamLinkFlowLogs", req, resp, cb);
    }

    /**
     * This API is used to query the media quality of a StreamLink flow.

     * @param {DescribeStreamLinkFlowStatisticsRequest} req
     * @param {function(string, DescribeStreamLinkFlowStatisticsResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlowStatistics(req, cb) {
        let resp = new DescribeStreamLinkFlowStatisticsResponse();
        this.request("DescribeStreamLinkFlowStatistics", req, resp, cb);
    }


}
module.exports = MdcClient;
