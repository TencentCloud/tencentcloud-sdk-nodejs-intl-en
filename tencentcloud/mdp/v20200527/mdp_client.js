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
const ModifyMediaPackageChannelEndpointRequest = models.ModifyMediaPackageChannelEndpointRequest;
const DescribeMediaPackageChannelRequest = models.DescribeMediaPackageChannelRequest;
const DeleteMediaPackageChannelEndpointsResponse = models.DeleteMediaPackageChannelEndpointsResponse;
const ModifyMediaPackageChannelInputAuthInfoRequest = models.ModifyMediaPackageChannelInputAuthInfoRequest;
const CreateMediaPackageChannelEndpointRequest = models.CreateMediaPackageChannelEndpointRequest;
const CreateMediaPackageChannelResponse = models.CreateMediaPackageChannelResponse;
const ModifyMediaPackageChannelRequest = models.ModifyMediaPackageChannelRequest;
const ModifyMediaPackageChannelEndpointResponse = models.ModifyMediaPackageChannelEndpointResponse;
const ChannelInfo = models.ChannelInfo;
const ModifyMediaPackageChannelInputAuthInfoResponse = models.ModifyMediaPackageChannelInputAuthInfoResponse;
const InputInfo = models.InputInfo;
const InputAuthInfo = models.InputAuthInfo;
const CreateMediaPackageChannelRequest = models.CreateMediaPackageChannelRequest;
const DeleteMediaPackageChannelEndpointsRequest = models.DeleteMediaPackageChannelEndpointsRequest;
const DeleteMediaPackageChannelsRequest = models.DeleteMediaPackageChannelsRequest;
const EndpointInfo = models.EndpointInfo;
const DescribeMediaPackageChannelsResponse = models.DescribeMediaPackageChannelsResponse;
const ModifyMediaPackageChannelResponse = models.ModifyMediaPackageChannelResponse;
const DescribeMediaPackageChannelResponse = models.DescribeMediaPackageChannelResponse;
const PointInfo = models.PointInfo;
const DeleteMediaPackageChannelsResponse = models.DeleteMediaPackageChannelsResponse;
const DescribeMediaPackageChannelsRequest = models.DescribeMediaPackageChannelsRequest;
const EndpointAuthInfo = models.EndpointAuthInfo;
const CreateMediaPackageChannelEndpointResponse = models.CreateMediaPackageChannelEndpointResponse;


/**
 * mdp client
 * @class
 */
class MdpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mdp.tencentcloudapi.com", "2020-05-27", credential, region, profile);
    }
    
    /**
     * This API is used to modify an endpoint of a media package channel.
     * @param {ModifyMediaPackageChannelEndpointRequest} req
     * @param {function(string, ModifyMediaPackageChannelEndpointResponse):void} cb
     * @public
     */
    ModifyMediaPackageChannelEndpoint(req, cb) {
        let resp = new ModifyMediaPackageChannelEndpointResponse();
        this.request("ModifyMediaPackageChannelEndpoint", req, resp, cb);
    }

    /**
     * This API is used to delete media package channels in batches.
     * @param {DeleteMediaPackageChannelsRequest} req
     * @param {function(string, DeleteMediaPackageChannelsResponse):void} cb
     * @public
     */
    DeleteMediaPackageChannels(req, cb) {
        let resp = new DeleteMediaPackageChannelsResponse();
        this.request("DeleteMediaPackageChannels", req, resp, cb);
    }

    /**
     * This API is used to modify the information of a media package channel.
     * @param {ModifyMediaPackageChannelRequest} req
     * @param {function(string, ModifyMediaPackageChannelResponse):void} cb
     * @public
     */
    ModifyMediaPackageChannel(req, cb) {
        let resp = new ModifyMediaPackageChannelResponse();
        this.request("ModifyMediaPackageChannel", req, resp, cb);
    }

    /**
     * This API is used to modify the input authentication information of a media package channel.
     * @param {ModifyMediaPackageChannelInputAuthInfoRequest} req
     * @param {function(string, ModifyMediaPackageChannelInputAuthInfoResponse):void} cb
     * @public
     */
    ModifyMediaPackageChannelInputAuthInfo(req, cb) {
        let resp = new ModifyMediaPackageChannelInputAuthInfoResponse();
        this.request("ModifyMediaPackageChannelInputAuthInfo", req, resp, cb);
    }

    /**
     * This API is used to delete endpoints from a media package channel in batches.
     * @param {DeleteMediaPackageChannelEndpointsRequest} req
     * @param {function(string, DeleteMediaPackageChannelEndpointsResponse):void} cb
     * @public
     */
    DeleteMediaPackageChannelEndpoints(req, cb) {
        let resp = new DeleteMediaPackageChannelEndpointsResponse();
        this.request("DeleteMediaPackageChannelEndpoints", req, resp, cb);
    }

    /**
     * This API is used to query the information list of media package channels.
     * @param {DescribeMediaPackageChannelsRequest} req
     * @param {function(string, DescribeMediaPackageChannelsResponse):void} cb
     * @public
     */
    DescribeMediaPackageChannels(req, cb) {
        let resp = new DescribeMediaPackageChannelsResponse();
        this.request("DescribeMediaPackageChannels", req, resp, cb);
    }

    /**
     * This API is used to create an endpoint of a media package channel.
     * @param {CreateMediaPackageChannelEndpointRequest} req
     * @param {function(string, CreateMediaPackageChannelEndpointResponse):void} cb
     * @public
     */
    CreateMediaPackageChannelEndpoint(req, cb) {
        let resp = new CreateMediaPackageChannelEndpointResponse();
        this.request("CreateMediaPackageChannelEndpoint", req, resp, cb);
    }

    /**
     * This API is used to create a media package channel.
     * @param {CreateMediaPackageChannelRequest} req
     * @param {function(string, CreateMediaPackageChannelResponse):void} cb
     * @public
     */
    CreateMediaPackageChannel(req, cb) {
        let resp = new CreateMediaPackageChannelResponse();
        this.request("CreateMediaPackageChannel", req, resp, cb);
    }

    /**
     * This API is used to query the information of a media package channel.
     * @param {DescribeMediaPackageChannelRequest} req
     * @param {function(string, DescribeMediaPackageChannelResponse):void} cb
     * @public
     */
    DescribeMediaPackageChannel(req, cb) {
        let resp = new DescribeMediaPackageChannelResponse();
        this.request("DescribeMediaPackageChannel", req, resp, cb);
    }


}
module.exports = MdpClient;
