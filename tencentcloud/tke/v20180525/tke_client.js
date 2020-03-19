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
const DeleteClusterRequest = models.DeleteClusterRequest;
const CreateClusterEndpointVipResponse = models.CreateClusterEndpointVipResponse;
const DescribeExistedInstancesResponse = models.DescribeExistedInstancesResponse;
const DescribeClusterRoutesResponse = models.DescribeClusterRoutesResponse;
const DescribeClusterSecurityRequest = models.DescribeClusterSecurityRequest;
const DescribeClusterEndpointVipStatusRequest = models.DescribeClusterEndpointVipStatusRequest;
const CreateClusterEndpointRequest = models.CreateClusterEndpointRequest;
const EnhancedService = models.EnhancedService;
const TagSpecification = models.TagSpecification;
const LoginSettings = models.LoginSettings;
const Label = models.Label;
const AddExistedInstancesRequest = models.AddExistedInstancesRequest;
const DescribeClusterEndpointStatusRequest = models.DescribeClusterEndpointStatusRequest;
const DescribeClusterEndpointVipStatusResponse = models.DescribeClusterEndpointVipStatusResponse;
const DescribeClusterSecurityResponse = models.DescribeClusterSecurityResponse;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const CreateClusterAsGroupRequest = models.CreateClusterAsGroupRequest;
const DescribeClusterRouteTablesRequest = models.DescribeClusterRouteTablesRequest;
const CreateClusterInstancesResponse = models.CreateClusterInstancesResponse;
const CreateClusterRouteTableResponse = models.CreateClusterRouteTableResponse;
const ExistedInstancesForNode = models.ExistedInstancesForNode;
const CreateClusterResponse = models.CreateClusterResponse;
const DescribeClusterRoutesRequest = models.DescribeClusterRoutesRequest;
const DeleteClusterRouteTableRequest = models.DeleteClusterRouteTableRequest;
const DeleteClusterRouteRequest = models.DeleteClusterRouteRequest;
const ClusterBasicSettings = models.ClusterBasicSettings;
const CreateClusterRequest = models.CreateClusterRequest;
const DeleteClusterInstancesRequest = models.DeleteClusterInstancesRequest;
const CreateClusterInstancesRequest = models.CreateClusterInstancesRequest;
const CreateClusterAsGroupResponse = models.CreateClusterAsGroupResponse;
const DeleteClusterInstancesResponse = models.DeleteClusterInstancesResponse;
const CreateClusterRouteTableRequest = models.CreateClusterRouteTableRequest;
const DeleteClusterEndpointResponse = models.DeleteClusterEndpointResponse;
const RouteTableConflict = models.RouteTableConflict;
const DeleteClusterAsGroupsResponse = models.DeleteClusterAsGroupsResponse;
const RouteTableInfo = models.RouteTableInfo;
const DeleteClusterEndpointVipResponse = models.DeleteClusterEndpointVipResponse;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const ClusterCIDRSettings = models.ClusterCIDRSettings;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const ModifyClusterEndpointSPResponse = models.ModifyClusterEndpointSPResponse;
const DescribeClusterRouteTablesResponse = models.DescribeClusterRouteTablesResponse;
const DescribeRouteTableConflictsRequest = models.DescribeRouteTableConflictsRequest;
const RunInstancesForNode = models.RunInstancesForNode;
const CreateClusterEndpointVipRequest = models.CreateClusterEndpointVipRequest;
const ExistedInstancesPara = models.ExistedInstancesPara;
const DeleteClusterAsGroupsRequest = models.DeleteClusterAsGroupsRequest;
const DescribeExistedInstancesRequest = models.DescribeExistedInstancesRequest;
const ExistedInstance = models.ExistedInstance;
const ModifyClusterEndpointSPRequest = models.ModifyClusterEndpointSPRequest;
const DescribeRouteTableConflictsResponse = models.DescribeRouteTableConflictsResponse;
const RouteInfo = models.RouteInfo;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const CreateClusterEndpointResponse = models.CreateClusterEndpointResponse;
const DeleteClusterEndpointRequest = models.DeleteClusterEndpointRequest;
const ClusterAdvancedSettings = models.ClusterAdvancedSettings;
const Filter = models.Filter;
const Instance = models.Instance;
const InstanceDataDiskMountSetting = models.InstanceDataDiskMountSetting;
const DeleteClusterEndpointVipRequest = models.DeleteClusterEndpointVipRequest;
const DescribeClustersRequest = models.DescribeClustersRequest;
const Cluster = models.Cluster;
const DescribeClusterEndpointStatusResponse = models.DescribeClusterEndpointStatusResponse;
const DescribeClustersResponse = models.DescribeClustersResponse;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const ClusterNetworkSettings = models.ClusterNetworkSettings;
const DeleteClusterRouteResponse = models.DeleteClusterRouteResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const AddExistedInstancesResponse = models.AddExistedInstancesResponse;
const DeleteClusterRouteTableResponse = models.DeleteClusterRouteTableResponse;
const DataDisk = models.DataDisk;


/**
 * tke client
 * @class
 */
class TkeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tke.tencentcloudapi.com", "2018-05-25", credential, region, profile);
    }
    
    /**
     * This API is used to create a cluster.
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
    }

    /**
     * Delete the cluster access port (intranet / extranet access is enabled for independent clusters, and intranet access is supported for managed clusters)
     * @param {DeleteClusterEndpointRequest} req
     * @param {function(string, DeleteClusterEndpointResponse):void} cb
     * @public
     */
    DeleteClusterEndpoint(req, cb) {
        let resp = new DeleteClusterEndpointResponse();
        this.request("DeleteClusterEndpoint", req, resp, cb);
    }

    /**
     * This API is used to delete a cluster. (Cloud API v3).
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        let resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }

    /**
     * Delete a cluster scaling group
     * @param {DeleteClusterAsGroupsRequest} req
     * @param {function(string, DeleteClusterAsGroupsResponse):void} cb
     * @public
     */
    DeleteClusterAsGroups(req, cb) {
        let resp = new DeleteClusterAsGroupsResponse();
        this.request("DeleteClusterAsGroups", req, resp, cb);
    }

    /**
     * This API is used to delete a cluster route.
     * @param {DeleteClusterRouteRequest} req
     * @param {function(string, DeleteClusterRouteResponse):void} cb
     * @public
     */
    DeleteClusterRoute(req, cb) {
        let resp = new DeleteClusterRouteResponse();
        this.request("DeleteClusterRoute", req, resp, cb);
    }

    /**
     * Query cluster open port process status (only supports external ports of the managed cluster)
     * @param {DescribeClusterEndpointVipStatusRequest} req
     * @param {function(string, DescribeClusterEndpointVipStatusResponse):void} cb
     * @public
     */
    DescribeClusterEndpointVipStatus(req, cb) {
        let resp = new DescribeClusterEndpointVipStatusResponse();
        this.request("DescribeClusterEndpointVipStatus", req, resp, cb);
    }

    /**
     * This API is used to create one or more nodes in a cluster.
     * @param {CreateClusterInstancesRequest} req
     * @param {function(string, CreateClusterInstancesResponse):void} cb
     * @public
     */
    CreateClusterInstances(req, cb) {
        let resp = new CreateClusterInstancesResponse();
        this.request("CreateClusterInstances", req, resp, cb);
    }

    /**
     * Create a scaling group for an existing cluster
     * @param {CreateClusterAsGroupRequest} req
     * @param {function(string, CreateClusterAsGroupResponse):void} cb
     * @public
     */
    CreateClusterAsGroup(req, cb) {
        let resp = new CreateClusterAsGroupResponse();
        this.request("CreateClusterAsGroup", req, resp, cb);
    }

    /**
     * This API is used to query one or more existing node and determine whether they can be added to a cluster.
     * @param {DescribeExistedInstancesRequest} req
     * @param {function(string, DescribeExistedInstancesResponse):void} cb
     * @public
     */
    DescribeExistedInstances(req, cb) {
        let resp = new DescribeExistedInstancesResponse();
        this.request("DescribeExistedInstances", req, resp, cb);
    }

    /**
     * This API is used to create a cluster route table.
     * @param {CreateClusterRouteTableRequest} req
     * @param {function(string, CreateClusterRouteTableResponse):void} cb
     * @public
     */
    CreateClusterRouteTable(req, cb) {
        let resp = new CreateClusterRouteTableResponse();
        this.request("CreateClusterRouteTable", req, resp, cb);
    }

    /**
     * This API is used to query one or more cluster route tables.
     * @param {DescribeClusterRouteTablesRequest} req
     * @param {function(string, DescribeClusterRouteTablesResponse):void} cb
     * @public
     */
    DescribeClusterRouteTables(req, cb) {
        let resp = new DescribeClusterRouteTablesResponse();
        this.request("DescribeClusterRouteTables", req, resp, cb);
    }

    /**
     * This API is used to query clusters list.
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * Query cluster access port status (intranet / extranet access is enabled for independent clusters, and intranet access is supported for managed clusters)
     * @param {DescribeClusterEndpointStatusRequest} req
     * @param {function(string, DescribeClusterEndpointStatusResponse):void} cb
     * @public
     */
    DescribeClusterEndpointStatus(req, cb) {
        let resp = new DescribeClusterEndpointStatusResponse();
        this.request("DescribeClusterEndpointStatus", req, resp, cb);
    }

    /**
     * Create a cluster access port (intranet / extranet access is enabled for independent clusters, and intranet access is supported for managed clusters)
     * @param {CreateClusterEndpointRequest} req
     * @param {function(string, CreateClusterEndpointResponse):void} cb
     * @public
     */
    CreateClusterEndpoint(req, cb) {
        let resp = new CreateClusterEndpointResponse();
        this.request("CreateClusterEndpoint", req, resp, cb);
    }

    /**
     * This API is used to add one or more existing instances to a cluster.
     * @param {AddExistedInstancesRequest} req
     * @param {function(string, AddExistedInstancesResponse):void} cb
     * @public
     */
    AddExistedInstances(req, cb) {
        let resp = new AddExistedInstancesResponse();
        this.request("AddExistedInstances", req, resp, cb);
    }

    /**
     * This API is used to query the key information of a cluster.
     * @param {DescribeClusterSecurityRequest} req
     * @param {function(string, DescribeClusterSecurityResponse):void} cb
     * @public
     */
    DescribeClusterSecurity(req, cb) {
        let resp = new DescribeClusterSecurityResponse();
        this.request("DescribeClusterSecurity", req, resp, cb);
    }

    /**
     * This API is used to query the list of route table conflicts.
     * @param {DescribeRouteTableConflictsRequest} req
     * @param {function(string, DescribeRouteTableConflictsResponse):void} cb
     * @public
     */
    DescribeRouteTableConflicts(req, cb) {
        let resp = new DescribeRouteTableConflictsResponse();
        this.request("DescribeRouteTableConflicts", req, resp, cb);
    }

    /**
     *  This API is used to query information of one or more instances in a cluster. 
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        let resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
    }

    /**
     * Delete the external network access port of the managed cluster (the old way, only the external network port of the managed cluster is supported)
     * @param {DeleteClusterEndpointVipRequest} req
     * @param {function(string, DeleteClusterEndpointVipResponse):void} cb
     * @public
     */
    DeleteClusterEndpointVip(req, cb) {
        let resp = new DeleteClusterEndpointVipResponse();
        this.request("DeleteClusterEndpointVip", req, resp, cb);
    }

    /**
     * This API is used to delete one or more nodes from a cluster.
     * @param {DeleteClusterInstancesRequest} req
     * @param {function(string, DeleteClusterInstancesResponse):void} cb
     * @public
     */
    DeleteClusterInstances(req, cb) {
        let resp = new DeleteClusterInstancesResponse();
        this.request("DeleteClusterInstances", req, resp, cb);
    }

    /**
     * Modify the security policy of the external port of the managed cluster (the old way, only the external port of the managed cluster is supported)
     * @param {ModifyClusterEndpointSPRequest} req
     * @param {function(string, ModifyClusterEndpointSPResponse):void} cb
     * @public
     */
    ModifyClusterEndpointSP(req, cb) {
        let resp = new ModifyClusterEndpointSPResponse();
        this.request("ModifyClusterEndpointSP", req, resp, cb);
    }

    /**
     * Create an external network access port for the managed cluster (the old way, only the external network port for the managed cluster is supported)
     * @param {CreateClusterEndpointVipRequest} req
     * @param {function(string, CreateClusterEndpointVipResponse):void} cb
     * @public
     */
    CreateClusterEndpointVip(req, cb) {
        let resp = new CreateClusterEndpointVipResponse();
        this.request("CreateClusterEndpointVip", req, resp, cb);
    }

    /**
     * This API is used to delete cluster a route table.
     * @param {DeleteClusterRouteTableRequest} req
     * @param {function(string, DeleteClusterRouteTableResponse):void} cb
     * @public
     */
    DeleteClusterRouteTable(req, cb) {
        let resp = new DeleteClusterRouteTableResponse();
        this.request("DeleteClusterRouteTable", req, resp, cb);
    }

    /**
     * This API is used to query cluster routes.
     * @param {DescribeClusterRoutesRequest} req
     * @param {function(string, DescribeClusterRoutesResponse):void} cb
     * @public
     */
    DescribeClusterRoutes(req, cb) {
        let resp = new DescribeClusterRoutesResponse();
        this.request("DescribeClusterRoutes", req, resp, cb);
    }


}
module.exports = TkeClient;
