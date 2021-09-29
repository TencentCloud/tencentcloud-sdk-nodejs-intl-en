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
const DeleteStreamPackageChannelsRequest = models.DeleteStreamPackageChannelsRequest;
const PointInfo = models.PointInfo;
const DeleteStreamPackageChannelsResponse = models.DeleteStreamPackageChannelsResponse;
const BindNewLVBDomainWithChannelResponse = models.BindNewLVBDomainWithChannelResponse;
const DescribeStreamPackageChannelsResponse = models.DescribeStreamPackageChannelsResponse;
const DescribeStreamPackageChannelsRequest = models.DescribeStreamPackageChannelsRequest;
const ModifyStreamPackageChannelEndpointResponse = models.ModifyStreamPackageChannelEndpointResponse;
const ModifyStreamPackageChannelInputAuthInfoResponse = models.ModifyStreamPackageChannelInputAuthInfoResponse;
const CreateStreamPackageChannelResponse = models.CreateStreamPackageChannelResponse;
const CreateStreamPackageChannelEndpointResponse = models.CreateStreamPackageChannelEndpointResponse;
const DeleteStreamPackageChannelEndpointsRequest = models.DeleteStreamPackageChannelEndpointsRequest;
const ChannelInfo = models.ChannelInfo;
const CacheInfo = models.CacheInfo;
const DeleteStreamPackageChannelEndpointsResponse = models.DeleteStreamPackageChannelEndpointsResponse;
const InputInfo = models.InputInfo;
const InputAuthInfo = models.InputAuthInfo;
const EndpointInfo = models.EndpointInfo;
const DescribeStreamPackageChannelRequest = models.DescribeStreamPackageChannelRequest;
const ModifyStreamPackageChannelRequest = models.ModifyStreamPackageChannelRequest;
const ModifyStreamPackageChannelEndpointRequest = models.ModifyStreamPackageChannelEndpointRequest;
const CacheInfoInfo = models.CacheInfoInfo;
const CreateStreamPackageChannelEndpointRequest = models.CreateStreamPackageChannelEndpointRequest;
const CreateStreamPackageChannelRequest = models.CreateStreamPackageChannelRequest;
const ModifyStreamPackageChannelInputAuthInfoRequest = models.ModifyStreamPackageChannelInputAuthInfoRequest;
const BindNewLVBDomainWithChannelRequest = models.BindNewLVBDomainWithChannelRequest;
const DescribeStreamPackageChannelResponse = models.DescribeStreamPackageChannelResponse;
const ModifyStreamPackageChannelResponse = models.ModifyStreamPackageChannelResponse;
const EndpointAuthInfo = models.EndpointAuthInfo;


/**
 * mdp client
 * @class
 */
class MdpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mdp.tencentcloudapi.com", "2020-05-27", credential, region, profile);
    }
    
    /**
     * This API is used to query the information of multiple StreamPackage channels.
     * @param {DescribeStreamPackageChannelsRequest} req
     * @param {function(string, DescribeStreamPackageChannelsResponse):void} cb
     * @public
     */
    DescribeStreamPackageChannels(req, cb) {
        let resp = new DescribeStreamPackageChannelsResponse();
        this.request("DescribeStreamPackageChannels", req, resp, cb);
    }

    /**
     * This API is used to modify an endpoint of a StreamPackage channel.
     * @param {ModifyStreamPackageChannelEndpointRequest} req
     * @param {function(string, ModifyStreamPackageChannelEndpointResponse):void} cb
     * @public
     */
    ModifyStreamPackageChannelEndpoint(req, cb) {
        let resp = new ModifyStreamPackageChannelEndpointResponse();
        this.request("ModifyStreamPackageChannelEndpoint", req, resp, cb);
    }

    /**
     * This API is used to create a StreamPackage channel.
     * @param {CreateStreamPackageChannelRequest} req
     * @param {function(string, CreateStreamPackageChannelResponse):void} cb
     * @public
     */
    CreateStreamPackageChannel(req, cb) {
        let resp = new CreateStreamPackageChannelResponse();
        this.request("CreateStreamPackageChannel", req, resp, cb);
    }

    /**
     * This API is used to delete endpoints from a StreamPackage channel in batches.
     * @param {DeleteStreamPackageChannelEndpointsRequest} req
     * @param {function(string, DeleteStreamPackageChannelEndpointsResponse):void} cb
     * @public
     */
    DeleteStreamPackageChannelEndpoints(req, cb) {
        let resp = new DeleteStreamPackageChannelEndpointsResponse();
        this.request("DeleteStreamPackageChannelEndpoints", req, resp, cb);
    }

    /**
     * This API is used to bind an LVB domain name to a channel.
     * @param {BindNewLVBDomainWithChannelRequest} req
     * @param {function(string, BindNewLVBDomainWithChannelResponse):void} cb
     * @public
     */
    BindNewLVBDomainWithChannel(req, cb) {
        let resp = new BindNewLVBDomainWithChannelResponse();
        this.request("BindNewLVBDomainWithChannel", req, resp, cb);
    }

    /**
     * This API is used to create an endpoint on a StreamPackage channel.
     * @param {CreateStreamPackageChannelEndpointRequest} req
     * @param {function(string, CreateStreamPackageChannelEndpointResponse):void} cb
     * @public
     */
    CreateStreamPackageChannelEndpoint(req, cb) {
        let resp = new CreateStreamPackageChannelEndpointResponse();
        this.request("CreateStreamPackageChannelEndpoint", req, resp, cb);
    }

    /**
     * This API is used to delete StreamPackage channels in batches.
     * @param {DeleteStreamPackageChannelsRequest} req
     * @param {function(string, DeleteStreamPackageChannelsResponse):void} cb
     * @public
     */
    DeleteStreamPackageChannels(req, cb) {
        let resp = new DeleteStreamPackageChannelsResponse();
        this.request("DeleteStreamPackageChannels", req, resp, cb);
    }

    /**
     * This API is used to query the information of a StreamPackage channel.
     * @param {DescribeStreamPackageChannelRequest} req
     * @param {function(string, DescribeStreamPackageChannelResponse):void} cb
     * @public
     */
    DescribeStreamPackageChannel(req, cb) {
        let resp = new DescribeStreamPackageChannelResponse();
        this.request("DescribeStreamPackageChannel", req, resp, cb);
    }

    /**
     * This API is used to modify a StreamPackage channel.
     * @param {ModifyStreamPackageChannelRequest} req
     * @param {function(string, ModifyStreamPackageChannelResponse):void} cb
     * @public
     */
    ModifyStreamPackageChannel(req, cb) {
        let resp = new ModifyStreamPackageChannelResponse();
        this.request("ModifyStreamPackageChannel", req, resp, cb);
    }

    /**
     * This API is used to modify the input authentication information of a StreamPackage channel.
     * @param {ModifyStreamPackageChannelInputAuthInfoRequest} req
     * @param {function(string, ModifyStreamPackageChannelInputAuthInfoResponse):void} cb
     * @public
     */
    ModifyStreamPackageChannelInputAuthInfo(req, cb) {
        let resp = new ModifyStreamPackageChannelInputAuthInfoResponse();
        this.request("ModifyStreamPackageChannelInputAuthInfo", req, resp, cb);
    }


}
module.exports = MdpClient;
