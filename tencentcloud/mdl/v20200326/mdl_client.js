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
const InputStatistics = models.InputStatistics;
const ModifyMediaLiveInputRequest = models.ModifyMediaLiveInputRequest;
const DrmSettingsInfo = models.DrmSettingsInfo;
const PipelineOutputStatistics = models.PipelineOutputStatistics;
const AttachedInputInfo = models.AttachedInputInfo;
const OutputGroupsInfo = models.OutputGroupsInfo;
const DashRemuxSettingsInfo = models.DashRemuxSettingsInfo;
const MediaPackageSettingsInfo = models.MediaPackageSettingsInfo;
const StartMediaLiveChannelRequest = models.StartMediaLiveChannelRequest;
const VideoTemplateInfo = models.VideoTemplateInfo;
const DeleteMediaLiveInputSecurityGroupResponse = models.DeleteMediaLiveInputSecurityGroupResponse;
const DeleteMediaLiveInputRequest = models.DeleteMediaLiveInputRequest;
const ModifyMediaLiveInputSecurityGroupRequest = models.ModifyMediaLiveInputSecurityGroupRequest;
const OutputsStatistics = models.OutputsStatistics;
const DeleteMediaLiveInputResponse = models.DeleteMediaLiveInputResponse;
const ModifyMediaLiveInputResponse = models.ModifyMediaLiveInputResponse;
const VideoPipelineInputStatistics = models.VideoPipelineInputStatistics;
const CreateMediaLiveInputRequest = models.CreateMediaLiveInputRequest;
const Scte35SettingsInfo = models.Scte35SettingsInfo;
const DescribeMediaLiveInputsRequest = models.DescribeMediaLiveInputsRequest;
const PipelineInputStatistics = models.PipelineInputStatistics;
const DescribeMediaLiveInputRequest = models.DescribeMediaLiveInputRequest;
const AudioPidSelectionInfo = models.AudioPidSelectionInfo;
const DescribeMediaLiveChannelRequest = models.DescribeMediaLiveChannelRequest;
const StartMediaLiveChannelResponse = models.StartMediaLiveChannelResponse;
const DrmKey = models.DrmKey;
const AudioPipelineInputStatistics = models.AudioPipelineInputStatistics;
const DescribeMediaLiveInputSecurityGroupsResponse = models.DescribeMediaLiveInputSecurityGroupsResponse;
const InputSecurityGroupInfo = models.InputSecurityGroupInfo;
const StopMediaLiveChannelResponse = models.StopMediaLiveChannelResponse;
const CreateMediaLiveChannelRequest = models.CreateMediaLiveChannelRequest;
const DescribeMediaLiveInputSecurityGroupsRequest = models.DescribeMediaLiveInputSecurityGroupsRequest;
const DescribeMediaLiveChannelResponse = models.DescribeMediaLiveChannelResponse;
const ChannelAlertInfos = models.ChannelAlertInfos;
const DeleteMediaLiveChannelResponse = models.DeleteMediaLiveChannelResponse;
const ChannelInfo = models.ChannelInfo;
const ChannelPipelineAlerts = models.ChannelPipelineAlerts;
const InputInfo = models.InputInfo;
const DescribeMediaLiveInputSecurityGroupResponse = models.DescribeMediaLiveInputSecurityGroupResponse;
const DeleteMediaLiveChannelRequest = models.DeleteMediaLiveChannelRequest;
const CreateMediaLiveInputResponse = models.CreateMediaLiveInputResponse;
const DestinationInfo = models.DestinationInfo;
const CreateMediaLiveChannelResponse = models.CreateMediaLiveChannelResponse;
const DescribeMediaLiveInputResponse = models.DescribeMediaLiveInputResponse;
const DescribeMediaLiveChannelInputStatisticsRequest = models.DescribeMediaLiveChannelInputStatisticsRequest;
const InputSettingInfo = models.InputSettingInfo;
const OutputInfo = models.OutputInfo;
const DescribeMediaLiveChannelAlertsRequest = models.DescribeMediaLiveChannelAlertsRequest;
const CreateMediaLiveInputSecurityGroupResponse = models.CreateMediaLiveInputSecurityGroupResponse;
const DescribeMediaLiveInputsResponse = models.DescribeMediaLiveInputsResponse;
const DescribeMediaLiveChannelOutputStatisticsResponse = models.DescribeMediaLiveChannelOutputStatisticsResponse;
const DescribeMediaLiveInputSecurityGroupRequest = models.DescribeMediaLiveInputSecurityGroupRequest;
const DescribeMediaLiveChannelAlertsResponse = models.DescribeMediaLiveChannelAlertsResponse;
const DescribeMediaLiveChannelsResponse = models.DescribeMediaLiveChannelsResponse;
const ChannelInputStatistics = models.ChannelInputStatistics;
const HlsRemuxSettingsInfo = models.HlsRemuxSettingsInfo;
const ModifyMediaLiveChannelResponse = models.ModifyMediaLiveChannelResponse;
const CreateMediaLiveInputSecurityGroupRequest = models.CreateMediaLiveInputSecurityGroupRequest;
const DeleteMediaLiveInputSecurityGroupRequest = models.DeleteMediaLiveInputSecurityGroupRequest;
const AudioTemplateInfo = models.AudioTemplateInfo;
const DescribeMediaLiveChannelOutputStatisticsRequest = models.DescribeMediaLiveChannelOutputStatisticsRequest;
const DescribeMediaLiveChannelInputStatisticsResponse = models.DescribeMediaLiveChannelInputStatisticsResponse;
const AudioSelectorInfo = models.AudioSelectorInfo;
const StopMediaLiveChannelRequest = models.StopMediaLiveChannelRequest;
const ModifyMediaLiveInputSecurityGroupResponse = models.ModifyMediaLiveInputSecurityGroupResponse;
const ChannelOutputsStatistics = models.ChannelOutputsStatistics;
const ModifyMediaLiveChannelRequest = models.ModifyMediaLiveChannelRequest;
const DescribeMediaLiveChannelsRequest = models.DescribeMediaLiveChannelsRequest;


/**
 * mdl client
 * @class
 */
class MdlClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mdl.tencentcloudapi.com", "2020-03-26", credential, region, profile);
    }
    
    /**
     * This API is used to create an input security group. Up to 5 ones can be created.
     * @param {CreateMediaLiveInputSecurityGroupRequest} req
     * @param {function(string, CreateMediaLiveInputSecurityGroupResponse):void} cb
     * @public
     */
    CreateMediaLiveInputSecurityGroup(req, cb) {
        let resp = new CreateMediaLiveInputSecurityGroupResponse();
        this.request("CreateMediaLiveInputSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to query the output statistics of a channel.
     * @param {DescribeMediaLiveChannelOutputStatisticsRequest} req
     * @param {function(string, DescribeMediaLiveChannelOutputStatisticsResponse):void} cb
     * @public
     */
    DescribeMediaLiveChannelOutputStatistics(req, cb) {
        let resp = new DescribeMediaLiveChannelOutputStatisticsResponse();
        this.request("DescribeMediaLiveChannelOutputStatistics", req, resp, cb);
    }

    /**
     * This API is used to delete a media input.
     * @param {DeleteMediaLiveInputRequest} req
     * @param {function(string, DeleteMediaLiveInputResponse):void} cb
     * @public
     */
    DeleteMediaLiveInput(req, cb) {
        let resp = new DeleteMediaLiveInputResponse();
        this.request("DeleteMediaLiveInput", req, resp, cb);
    }

    /**
     * This API is used to update a media input.
     * @param {ModifyMediaLiveInputRequest} req
     * @param {function(string, ModifyMediaLiveInputResponse):void} cb
     * @public
     */
    ModifyMediaLiveInput(req, cb) {
        let resp = new ModifyMediaLiveInputResponse();
        this.request("ModifyMediaLiveInput", req, resp, cb);
    }

    /**
     * This API is used to query the information of media inputs in batches.
     * @param {DescribeMediaLiveInputsRequest} req
     * @param {function(string, DescribeMediaLiveInputsResponse):void} cb
     * @public
     */
    DescribeMediaLiveInputs(req, cb) {
        let resp = new DescribeMediaLiveInputsResponse();
        this.request("DescribeMediaLiveInputs", req, resp, cb);
    }

    /**
     * This API is used to query an input security group.
     * @param {DescribeMediaLiveInputSecurityGroupRequest} req
     * @param {function(string, DescribeMediaLiveInputSecurityGroupResponse):void} cb
     * @public
     */
    DescribeMediaLiveInputSecurityGroup(req, cb) {
        let resp = new DescribeMediaLiveInputSecurityGroupResponse();
        this.request("DescribeMediaLiveInputSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to create a media channel.
     * @param {CreateMediaLiveChannelRequest} req
     * @param {function(string, CreateMediaLiveChannelResponse):void} cb
     * @public
     */
    CreateMediaLiveChannel(req, cb) {
        let resp = new CreateMediaLiveChannelResponse();
        this.request("CreateMediaLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to query the channel alarm information.
     * @param {DescribeMediaLiveChannelAlertsRequest} req
     * @param {function(string, DescribeMediaLiveChannelAlertsResponse):void} cb
     * @public
     */
    DescribeMediaLiveChannelAlerts(req, cb) {
        let resp = new DescribeMediaLiveChannelAlertsResponse();
        this.request("DescribeMediaLiveChannelAlerts", req, resp, cb);
    }

    /**
     * This API is used to query the information of a MediaLive channel.
     * @param {DescribeMediaLiveChannelRequest} req
     * @param {function(string, DescribeMediaLiveChannelResponse):void} cb
     * @public
     */
    DescribeMediaLiveChannel(req, cb) {
        let resp = new DescribeMediaLiveChannelResponse();
        this.request("DescribeMediaLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to start a MediaLive channel.
     * @param {StartMediaLiveChannelRequest} req
     * @param {function(string, StartMediaLiveChannelResponse):void} cb
     * @public
     */
    StartMediaLiveChannel(req, cb) {
        let resp = new StartMediaLiveChannelResponse();
        this.request("StartMediaLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to create a media input.
     * @param {CreateMediaLiveInputRequest} req
     * @param {function(string, CreateMediaLiveInputResponse):void} cb
     * @public
     */
    CreateMediaLiveInput(req, cb) {
        let resp = new CreateMediaLiveInputResponse();
        this.request("CreateMediaLiveInput", req, resp, cb);
    }

    /**
     * This API is used to update an input security group.
     * @param {ModifyMediaLiveInputSecurityGroupRequest} req
     * @param {function(string, ModifyMediaLiveInputSecurityGroupResponse):void} cb
     * @public
     */
    ModifyMediaLiveInputSecurityGroup(req, cb) {
        let resp = new ModifyMediaLiveInputSecurityGroupResponse();
        this.request("ModifyMediaLiveInputSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the information of a MediaLive channel.
     * @param {ModifyMediaLiveChannelRequest} req
     * @param {function(string, ModifyMediaLiveChannelResponse):void} cb
     * @public
     */
    ModifyMediaLiveChannel(req, cb) {
        let resp = new ModifyMediaLiveChannelResponse();
        this.request("ModifyMediaLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to delete a MediaLive channel.
     * @param {DeleteMediaLiveChannelRequest} req
     * @param {function(string, DeleteMediaLiveChannelResponse):void} cb
     * @public
     */
    DeleteMediaLiveChannel(req, cb) {
        let resp = new DeleteMediaLiveChannelResponse();
        this.request("DeleteMediaLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to query the input statistics.
     * @param {DescribeMediaLiveChannelInputStatisticsRequest} req
     * @param {function(string, DescribeMediaLiveChannelInputStatisticsResponse):void} cb
     * @public
     */
    DescribeMediaLiveChannelInputStatistics(req, cb) {
        let resp = new DescribeMediaLiveChannelInputStatisticsResponse();
        this.request("DescribeMediaLiveChannelInputStatistics", req, resp, cb);
    }

    /**
     * This API is used to query the information of MediaLive channels in batches.
     * @param {DescribeMediaLiveChannelsRequest} req
     * @param {function(string, DescribeMediaLiveChannelsResponse):void} cb
     * @public
     */
    DescribeMediaLiveChannels(req, cb) {
        let resp = new DescribeMediaLiveChannelsResponse();
        this.request("DescribeMediaLiveChannels", req, resp, cb);
    }

    /**
     * This API is used to delete an input security group.
     * @param {DeleteMediaLiveInputSecurityGroupRequest} req
     * @param {function(string, DeleteMediaLiveInputSecurityGroupResponse):void} cb
     * @public
     */
    DeleteMediaLiveInputSecurityGroup(req, cb) {
        let resp = new DeleteMediaLiveInputSecurityGroupResponse();
        this.request("DeleteMediaLiveInputSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to stop a MediaLive channel.
     * @param {StopMediaLiveChannelRequest} req
     * @param {function(string, StopMediaLiveChannelResponse):void} cb
     * @public
     */
    StopMediaLiveChannel(req, cb) {
        let resp = new StopMediaLiveChannelResponse();
        this.request("StopMediaLiveChannel", req, resp, cb);
    }

    /**
     * This API is used to query a media input.
     * @param {DescribeMediaLiveInputRequest} req
     * @param {function(string, DescribeMediaLiveInputResponse):void} cb
     * @public
     */
    DescribeMediaLiveInput(req, cb) {
        let resp = new DescribeMediaLiveInputResponse();
        this.request("DescribeMediaLiveInput", req, resp, cb);
    }

    /**
     * This API is used to query the information of input security groups in batches.
     * @param {DescribeMediaLiveInputSecurityGroupsRequest} req
     * @param {function(string, DescribeMediaLiveInputSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeMediaLiveInputSecurityGroups(req, cb) {
        let resp = new DescribeMediaLiveInputSecurityGroupsResponse();
        this.request("DescribeMediaLiveInputSecurityGroups", req, resp, cb);
    }


}
module.exports = MdlClient;
