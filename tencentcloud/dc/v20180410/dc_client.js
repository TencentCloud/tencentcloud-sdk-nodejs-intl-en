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
const Filter = models.Filter;
const CreateDirectConnectTunnelResponse = models.CreateDirectConnectTunnelResponse;
const DescribeDirectConnectsRequest = models.DescribeDirectConnectsRequest;
const Tag = models.Tag;
const DeleteDirectConnectTunnelRequest = models.DeleteDirectConnectTunnelRequest;
const DeleteDirectConnectTunnelResponse = models.DeleteDirectConnectTunnelResponse;
const DescribeDirectConnectTunnelsRequest = models.DescribeDirectConnectTunnelsRequest;
const BgpPeer = models.BgpPeer;
const DescribeDirectConnectTunnelsResponse = models.DescribeDirectConnectTunnelsResponse;
const ModifyDirectConnectTunnelAttributeRequest = models.ModifyDirectConnectTunnelAttributeRequest;
const RouteFilterPrefix = models.RouteFilterPrefix;
const DescribeDirectConnectsResponse = models.DescribeDirectConnectsResponse;
const RejectDirectConnectTunnelRequest = models.RejectDirectConnectTunnelRequest;
const AcceptDirectConnectTunnelRequest = models.AcceptDirectConnectTunnelRequest;
const ModifyDirectConnectTunnelAttributeResponse = models.ModifyDirectConnectTunnelAttributeResponse;
const CreateDirectConnectTunnelRequest = models.CreateDirectConnectTunnelRequest;
const RejectDirectConnectTunnelResponse = models.RejectDirectConnectTunnelResponse;
const DirectConnect = models.DirectConnect;
const DirectConnectTunnel = models.DirectConnectTunnel;
const AcceptDirectConnectTunnelResponse = models.AcceptDirectConnectTunnelResponse;


/**
 * dc client
 * @class
 */
class DcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dc.tencentcloudapi.com", "2018-04-10", credential, region, profile);
    }
    
    /**
     * This API is used to create a dedicated tunnel.
     * @param {CreateDirectConnectTunnelRequest} req
     * @param {function(string, CreateDirectConnectTunnelResponse):void} cb
     * @public
     */
    CreateDirectConnectTunnel(req, cb) {
        let resp = new CreateDirectConnectTunnelResponse();
        this.request("CreateDirectConnectTunnel", req, resp, cb);
    }

    /**
     * This API is used to reject an application for a dedicated tunnel.
     * @param {RejectDirectConnectTunnelRequest} req
     * @param {function(string, RejectDirectConnectTunnelResponse):void} cb
     * @public
     */
    RejectDirectConnectTunnel(req, cb) {
        let resp = new RejectDirectConnectTunnelResponse();
        this.request("RejectDirectConnectTunnel", req, resp, cb);
    }

    /**
     * This API is used to accept an application for a dedicated tunnel.
     * @param {AcceptDirectConnectTunnelRequest} req
     * @param {function(string, AcceptDirectConnectTunnelResponse):void} cb
     * @public
     */
    AcceptDirectConnectTunnel(req, cb) {
        let resp = new AcceptDirectConnectTunnelResponse();
        this.request("AcceptDirectConnectTunnel", req, resp, cb);
    }

    /**
     * This API is used to delete a dedicated tunnel.
     * @param {DeleteDirectConnectTunnelRequest} req
     * @param {function(string, DeleteDirectConnectTunnelResponse):void} cb
     * @public
     */
    DeleteDirectConnectTunnel(req, cb) {
        let resp = new DeleteDirectConnectTunnelResponse();
        this.request("DeleteDirectConnectTunnel", req, resp, cb);
    }

    /**
     * This API is used to query the list of dedicated tunnels.
     * @param {DescribeDirectConnectTunnelsRequest} req
     * @param {function(string, DescribeDirectConnectTunnelsResponse):void} cb
     * @public
     */
    DescribeDirectConnectTunnels(req, cb) {
        let resp = new DescribeDirectConnectTunnelsResponse();
        this.request("DescribeDirectConnectTunnels", req, resp, cb);
    }

    /**
     * This API is used to query the list of connections.
     * @param {DescribeDirectConnectsRequest} req
     * @param {function(string, DescribeDirectConnectsResponse):void} cb
     * @public
     */
    DescribeDirectConnects(req, cb) {
        let resp = new DescribeDirectConnectsResponse();
        this.request("DescribeDirectConnects", req, resp, cb);
    }

    /**
     * This API is used to modify the dedicated tunnel attributes.
     * @param {ModifyDirectConnectTunnelAttributeRequest} req
     * @param {function(string, ModifyDirectConnectTunnelAttributeResponse):void} cb
     * @public
     */
    ModifyDirectConnectTunnelAttribute(req, cb) {
        let resp = new ModifyDirectConnectTunnelAttributeResponse();
        this.request("ModifyDirectConnectTunnelAttribute", req, resp, cb);
    }


}
module.exports = DcClient;
