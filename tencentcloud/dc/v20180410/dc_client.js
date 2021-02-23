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
const DescribeInternetAddressQuotaRequest = models.DescribeInternetAddressQuotaRequest;
const BgpPeer = models.BgpPeer;
const RejectDirectConnectTunnelRequest = models.RejectDirectConnectTunnelRequest;
const Coordinate = models.Coordinate;
const DeleteDirectConnectTunnelRequest = models.DeleteDirectConnectTunnelRequest;
const CreateDirectConnectResponse = models.CreateDirectConnectResponse;
const DirectConnect = models.DirectConnect;
const InternetAddressDetail = models.InternetAddressDetail;
const DescribeAccessPointsResponse = models.DescribeAccessPointsResponse;
const AcceptDirectConnectTunnelResponse = models.AcceptDirectConnectTunnelResponse;
const DescribeDirectConnectTunnelsRequest = models.DescribeDirectConnectTunnelsRequest;
const ReleaseInternetAddressRequest = models.ReleaseInternetAddressRequest;
const ModifyDirectConnectTunnelAttributeResponse = models.ModifyDirectConnectTunnelAttributeResponse;
const RouteFilterPrefix = models.RouteFilterPrefix;
const ApplyInternetAddressResponse = models.ApplyInternetAddressResponse;
const AcceptDirectConnectTunnelRequest = models.AcceptDirectConnectTunnelRequest;
const CreateDirectConnectTunnelRequest = models.CreateDirectConnectTunnelRequest;
const DeleteDirectConnectResponse = models.DeleteDirectConnectResponse;
const EnableInternetAddressResponse = models.EnableInternetAddressResponse;
const ApplyInternetAddressRequest = models.ApplyInternetAddressRequest;
const DescribeDirectConnectsResponse = models.DescribeDirectConnectsResponse;
const DescribeAccessPointsRequest = models.DescribeAccessPointsRequest;
const DescribeDirectConnectsRequest = models.DescribeDirectConnectsRequest;
const ModifyDirectConnectTunnelAttributeRequest = models.ModifyDirectConnectTunnelAttributeRequest;
const ModifyDirectConnectAttributeRequest = models.ModifyDirectConnectAttributeRequest;
const DescribeInternetAddressResponse = models.DescribeInternetAddressResponse;
const Filter = models.Filter;
const DisableInternetAddressResponse = models.DisableInternetAddressResponse;
const DescribeInternetAddressStatisticsRequest = models.DescribeInternetAddressStatisticsRequest;
const InternetAddressStatistics = models.InternetAddressStatistics;
const CreateDirectConnectRequest = models.CreateDirectConnectRequest;
const EnableInternetAddressRequest = models.EnableInternetAddressRequest;
const ModifyDirectConnectAttributeResponse = models.ModifyDirectConnectAttributeResponse;
const RejectDirectConnectTunnelResponse = models.RejectDirectConnectTunnelResponse;
const CreateDirectConnectTunnelResponse = models.CreateDirectConnectTunnelResponse;
const DeleteDirectConnectTunnelResponse = models.DeleteDirectConnectTunnelResponse;
const AccessPoint = models.AccessPoint;
const DeleteDirectConnectRequest = models.DeleteDirectConnectRequest;
const DescribeDirectConnectTunnelsResponse = models.DescribeDirectConnectTunnelsResponse;
const DescribeInternetAddressStatisticsResponse = models.DescribeInternetAddressStatisticsResponse;
const Tag = models.Tag;
const DescribeInternetAddressRequest = models.DescribeInternetAddressRequest;
const DescribeInternetAddressQuotaResponse = models.DescribeInternetAddressQuotaResponse;
const ReleaseInternetAddressResponse = models.ReleaseInternetAddressResponse;
const DirectConnectTunnel = models.DirectConnectTunnel;
const DisableInternetAddressRequest = models.DisableInternetAddressRequest;


/**
 * dc client
 * @class
 */
class DcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dc.tencentcloudapi.com", "2018-04-10", credential, region, profile);
    }
    
    /**
     * This API is used to disable a public IP address of internet tunnels.
     * @param {DisableInternetAddressRequest} req
     * @param {function(string, DisableInternetAddressResponse):void} cb
     * @public
     */
    DisableInternetAddress(req, cb) {
        let resp = new DisableInternetAddressResponse();
        this.request("DisableInternetAddress", req, resp, cb);
    }

    /**
     * This API is used to query connection access points.

     * @param {DescribeAccessPointsRequest} req
     * @param {function(string, DescribeAccessPointsResponse):void} cb
     * @public
     */
    DescribeAccessPoints(req, cb) {
        let resp = new DescribeAccessPointsResponse();
        this.request("DescribeAccessPoints", req, resp, cb);
    }

    /**
     * This API is used to modify connection attributes.
     * @param {ModifyDirectConnectAttributeRequest} req
     * @param {function(string, ModifyDirectConnectAttributeResponse):void} cb
     * @public
     */
    ModifyDirectConnectAttribute(req, cb) {
        let resp = new ModifyDirectConnectAttributeResponse();
        this.request("ModifyDirectConnectAttribute", req, resp, cb);
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
     * This API is used to delete a connection.
Only connected connections can be deleted.
     * @param {DeleteDirectConnectRequest} req
     * @param {function(string, DeleteDirectConnectResponse):void} cb
     * @public
     */
    DeleteDirectConnect(req, cb) {
        let resp = new DeleteDirectConnectResponse();
        this.request("DeleteDirectConnect", req, resp, cb);
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
     * This API is used to obtain the public IP address assignment statistics of internet tunnels.
     * @param {DescribeInternetAddressStatisticsRequest} req
     * @param {function(string, DescribeInternetAddressStatisticsResponse):void} cb
     * @public
     */
    DescribeInternetAddressStatistics(req, cb) {
        let resp = new DescribeInternetAddressStatisticsResponse();
        this.request("DescribeInternetAddressStatistics", req, resp, cb);
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
     * This API is used to apply for an internet tunnel’s CIDR block.
     * @param {ApplyInternetAddressRequest} req
     * @param {function(string, ApplyInternetAddressResponse):void} cb
     * @public
     */
    ApplyInternetAddress(req, cb) {
        let resp = new ApplyInternetAddressResponse();
        this.request("ApplyInternetAddress", req, resp, cb);
    }

    /**
     * This API is used to enable a public IP address for internet tunnels.
     * @param {EnableInternetAddressRequest} req
     * @param {function(string, EnableInternetAddressResponse):void} cb
     * @public
     */
    EnableInternetAddress(req, cb) {
        let resp = new EnableInternetAddressResponse();
        this.request("EnableInternetAddress", req, resp, cb);
    }

    /**
     * This API is used to obtain the public IP quota of internet tunnels.
     * @param {DescribeInternetAddressQuotaRequest} req
     * @param {function(string, DescribeInternetAddressQuotaResponse):void} cb
     * @public
     */
    DescribeInternetAddressQuota(req, cb) {
        let resp = new DescribeInternetAddressQuotaResponse();
        this.request("DescribeInternetAddressQuota", req, resp, cb);
    }

    /**
     * This API is used to obtain the public IP address of an internet tunnel.
     * @param {DescribeInternetAddressRequest} req
     * @param {function(string, DescribeInternetAddressResponse):void} cb
     * @public
     */
    DescribeInternetAddress(req, cb) {
        let resp = new DescribeInternetAddressResponse();
        this.request("DescribeInternetAddress", req, resp, cb);
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
     * This API is used to apply for a connection.
When calling this API, please note that:
You need to complete identity verification for your account; otherwise, you cannot apply for a connection;
If there is any connection in arrears under your account, you cannot apply for more connections.
     * @param {CreateDirectConnectRequest} req
     * @param {function(string, CreateDirectConnectResponse):void} cb
     * @public
     */
    CreateDirectConnect(req, cb) {
        let resp = new CreateDirectConnectResponse();
        this.request("CreateDirectConnect", req, resp, cb);
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
     * This API is used to release an IP address of internet tunnels.
     * @param {ReleaseInternetAddressRequest} req
     * @param {function(string, ReleaseInternetAddressResponse):void} cb
     * @public
     */
    ReleaseInternetAddress(req, cb) {
        let resp = new ReleaseInternetAddressResponse();
        this.request("ReleaseInternetAddress", req, resp, cb);
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
