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
const OutputAddress = models.OutputAddress;
const DescribeInputRTPSettings = models.DescribeInputRTPSettings;
const ModifyStreamLinkFlowRequest = models.ModifyStreamLinkFlowRequest;
const DeleteStreamLinkFlowRequest = models.DeleteStreamLinkFlowRequest;
const CreateStreamLinkFlowRequest = models.CreateStreamLinkFlowRequest;
const DescribeOutput = models.DescribeOutput;
const DescribeFlow = models.DescribeFlow;
const DeleteStreamLinkOutputRequest = models.DeleteStreamLinkOutputRequest;
const CreateInputSRTSettings = models.CreateInputSRTSettings;
const DescribeInputRTMPSettings = models.DescribeInputRTMPSettings;
const ModifyStreamLinkFlowResponse = models.ModifyStreamLinkFlowResponse;
const StartStreamLinkFlowRequest = models.StartStreamLinkFlowRequest;
const StartStreamLinkFlowResponse = models.StartStreamLinkFlowResponse;
const DescribeStreamLinkFlowResponse = models.DescribeStreamLinkFlowResponse;
const StopStreamLinkFlowResponse = models.StopStreamLinkFlowResponse;
const InputAddress = models.InputAddress;
const StopStreamLinkFlowRequest = models.StopStreamLinkFlowRequest;
const CreateInput = models.CreateInput;
const DescribeOutputRTMPPullServerUrl = models.DescribeOutputRTMPPullServerUrl;
const DescribeInput = models.DescribeInput;
const DescribeStreamLinkFlowRequest = models.DescribeStreamLinkFlowRequest;
const DescribeOutputSRTSettings = models.DescribeOutputSRTSettings;
const DeleteStreamLinkOutputResponse = models.DeleteStreamLinkOutputResponse;
const DescribeOutputRTMPPullSettings = models.DescribeOutputRTMPPullSettings;
const DescribeStreamLinkFlowsResponse = models.DescribeStreamLinkFlowsResponse;
const RTMPAddressDestination = models.RTMPAddressDestination;
const DeleteStreamLinkFlowResponse = models.DeleteStreamLinkFlowResponse;
const DescribeOutputRTPSettings = models.DescribeOutputRTPSettings;
const DescribeInputSRTSettings = models.DescribeInputSRTSettings;
const CreateStreamLinkFlowResponse = models.CreateStreamLinkFlowResponse;
const CreateInputRTPSettings = models.CreateInputRTPSettings;
const SRTAddressDestination = models.SRTAddressDestination;
const DescribeStreamLinkFlowsRequest = models.DescribeStreamLinkFlowsRequest;
const RTPAddressDestination = models.RTPAddressDestination;


/**
 * mdc client
 * @class
 */
class MdcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mdc.tencentcloudapi.com", "2020-08-28", credential, region, profile);
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


}
module.exports = MdcClient;
