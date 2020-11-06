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
const CreateMediaConnectFlowRequest = models.CreateMediaConnectFlowRequest;
const DeleteMediaConnectFlowResponse = models.DeleteMediaConnectFlowResponse;
const OutputAddress = models.OutputAddress;
const DescribeInputRTPSettings = models.DescribeInputRTPSettings;
const DeleteMediaConnectFlowRequest = models.DeleteMediaConnectFlowRequest;
const StopMediaConnectFlowRequest = models.StopMediaConnectFlowRequest;
const CreateOutputSrtSettingsDestinations = models.CreateOutputSrtSettingsDestinations;
const DescribeMediaConnectFlowsResponse = models.DescribeMediaConnectFlowsResponse;
const StartMediaConnectFlowRequest = models.StartMediaConnectFlowRequest;
const DeleteMediaConnectOutputRequest = models.DeleteMediaConnectOutputRequest;
const DeleteMediaConnectOutputResponse = models.DeleteMediaConnectOutputResponse;
const DescribeOutput = models.DescribeOutput;
const DescribeFlow = models.DescribeFlow;
const ModifyMediaConnectInputRequest = models.ModifyMediaConnectInputRequest;
const CreateMediaConnectOutputRequest = models.CreateMediaConnectOutputRequest;
const CreateInputSRTSettings = models.CreateInputSRTSettings;
const CreateMediaConnectOutputResponse = models.CreateMediaConnectOutputResponse;
const ModifyMediaConnectOutputRequest = models.ModifyMediaConnectOutputRequest;
const ModifyMediaConnectFlowResponse = models.ModifyMediaConnectFlowResponse;
const CreateMediaConnectFlowResponse = models.CreateMediaConnectFlowResponse;
const DescribeMediaConnectFlowRequest = models.DescribeMediaConnectFlowRequest;
const DescribeOutputRTMPSettings = models.DescribeOutputRTMPSettings;
const CreateOutputRTPSettingsDestinations = models.CreateOutputRTPSettingsDestinations;
const ModifyOutput = models.ModifyOutput;
const CreateInput = models.CreateInput;
const CreateOutputRTMPSettings = models.CreateOutputRTMPSettings;
const DescribeInput = models.DescribeInput;
const CreateOutputRtmpSettingsDestinations = models.CreateOutputRtmpSettingsDestinations;
const DescribeMediaConnectFlowResponse = models.DescribeMediaConnectFlowResponse;
const DescribeOutputSRTSettings = models.DescribeOutputSRTSettings;
const ModifyMediaConnectFlowRequest = models.ModifyMediaConnectFlowRequest;
const StopMediaConnectFlowResponse = models.StopMediaConnectFlowResponse;
const RTMPAddressDestination = models.RTMPAddressDestination;
const StartMediaConnectFlowResponse = models.StartMediaConnectFlowResponse;
const ModifyMediaConnectOutputResponse = models.ModifyMediaConnectOutputResponse;
const DescribeOutputRTPSettings = models.DescribeOutputRTPSettings;
const DescribeInputSRTSettings = models.DescribeInputSRTSettings;
const CreateOutputRTPSettings = models.CreateOutputRTPSettings;
const DescribeMediaConnectFlowsRequest = models.DescribeMediaConnectFlowsRequest;
const InputAddress = models.InputAddress;
const ModifyInput = models.ModifyInput;
const CreateOutputSrtSettings = models.CreateOutputSrtSettings;
const CreateInputRTPSettings = models.CreateInputRTPSettings;
const SRTAddressDestination = models.SRTAddressDestination;
const ModifyMediaConnectInputResponse = models.ModifyMediaConnectInputResponse;
const RTPAddressDestination = models.RTPAddressDestination;
const CreateOutput = models.CreateOutput;


/**
 * mdc client
 * @class
 */
class MdcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mdc.tencentcloudapi.com", "2020-08-28", credential, region, profile);
    }
    
    /**
     * This API is used to modify the output configuration of a MediaConnect flow.
     * @param {ModifyMediaConnectOutputRequest} req
     * @param {function(string, ModifyMediaConnectOutputResponse):void} cb
     * @public
     */
    ModifyMediaConnectOutput(req, cb) {
        let resp = new ModifyMediaConnectOutputResponse();
        this.request("ModifyMediaConnectOutput", req, resp, cb);
    }

    /**
     * This API is used to query the configuration information of a MediaConnect flow.
     * @param {DescribeMediaConnectFlowRequest} req
     * @param {function(string, DescribeMediaConnectFlowResponse):void} cb
     * @public
     */
    DescribeMediaConnectFlow(req, cb) {
        let resp = new DescribeMediaConnectFlowResponse();
        this.request("DescribeMediaConnectFlow", req, resp, cb);
    }

    /**
     * This API is used to modify the input information of a MediaConnect flow.
     * @param {ModifyMediaConnectInputRequest} req
     * @param {function(string, ModifyMediaConnectInputResponse):void} cb
     * @public
     */
    ModifyMediaConnectInput(req, cb) {
        let resp = new ModifyMediaConnectInputResponse();
        this.request("ModifyMediaConnectInput", req, resp, cb);
    }

    /**
     * This API is used to create the configuration of a MediaConnect flow.
     * @param {CreateMediaConnectFlowRequest} req
     * @param {function(string, CreateMediaConnectFlowResponse):void} cb
     * @public
     */
    CreateMediaConnectFlow(req, cb) {
        let resp = new CreateMediaConnectFlowResponse();
        this.request("CreateMediaConnectFlow", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration information of a MediaConnect flow.
     * @param {ModifyMediaConnectFlowRequest} req
     * @param {function(string, ModifyMediaConnectFlowResponse):void} cb
     * @public
     */
    ModifyMediaConnectFlow(req, cb) {
        let resp = new ModifyMediaConnectFlowResponse();
        this.request("ModifyMediaConnectFlow", req, resp, cb);
    }

    /**
     * This API is used to delete the configuration of a MediaConnect flow.
     * @param {DeleteMediaConnectFlowRequest} req
     * @param {function(string, DeleteMediaConnectFlowResponse):void} cb
     * @public
     */
    DeleteMediaConnectFlow(req, cb) {
        let resp = new DeleteMediaConnectFlowResponse();
        this.request("DeleteMediaConnectFlow", req, resp, cb);
    }

    /**
     * This API is used to stop a MediaConnect flow.
     * @param {StopMediaConnectFlowRequest} req
     * @param {function(string, StopMediaConnectFlowResponse):void} cb
     * @public
     */
    StopMediaConnectFlow(req, cb) {
        let resp = new StopMediaConnectFlowResponse();
        this.request("StopMediaConnectFlow", req, resp, cb);
    }

    /**
     * This API is used to delete the output configuration of a MediaConnect flow.
     * @param {DeleteMediaConnectOutputRequest} req
     * @param {function(string, DeleteMediaConnectOutputResponse):void} cb
     * @public
     */
    DeleteMediaConnectOutput(req, cb) {
        let resp = new DeleteMediaConnectOutputResponse();
        this.request("DeleteMediaConnectOutput", req, resp, cb);
    }

    /**
     * This API is used to start a MediaConnect flow.
     * @param {StartMediaConnectFlowRequest} req
     * @param {function(string, StartMediaConnectFlowResponse):void} cb
     * @public
     */
    StartMediaConnectFlow(req, cb) {
        let resp = new StartMediaConnectFlowResponse();
        this.request("StartMediaConnectFlow", req, resp, cb);
    }

    /**
     * This API is used to create the output information of a MediaConnect flow.
     * @param {CreateMediaConnectOutputRequest} req
     * @param {function(string, CreateMediaConnectOutputResponse):void} cb
     * @public
     */
    CreateMediaConnectOutput(req, cb) {
        let resp = new CreateMediaConnectOutputResponse();
        this.request("CreateMediaConnectOutput", req, resp, cb);
    }

    /**
     * This API is used to query the configuration information of multiple MediaConnect flows in batches.
     * @param {DescribeMediaConnectFlowsRequest} req
     * @param {function(string, DescribeMediaConnectFlowsResponse):void} cb
     * @public
     */
    DescribeMediaConnectFlows(req, cb) {
        let resp = new DescribeMediaConnectFlowsResponse();
        this.request("DescribeMediaConnectFlows", req, resp, cb);
    }


}
module.exports = MdcClient;
