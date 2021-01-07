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
const DescribeClusterEndpointVipStatusRequest = models.DescribeClusterEndpointVipStatusRequest;
const DescribeClusterSecurityResponse = models.DescribeClusterSecurityResponse;
const DescribeClusterSecurityRequest = models.DescribeClusterSecurityRequest;
const DeleteClusterInstancesResponse = models.DeleteClusterInstancesResponse;
const DescribeClusterKubeconfigResponse = models.DescribeClusterKubeconfigResponse;
const RemoveNodeFromNodePoolResponse = models.RemoveNodeFromNodePoolResponse;
const DescribeClusterEndpointVipStatusResponse = models.DescribeClusterEndpointVipStatusResponse;
const ModifyClusterEndpointSPRequest = models.ModifyClusterEndpointSPRequest;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const AutoscalingAdded = models.AutoscalingAdded;
const CreateClusterRouteTableResponse = models.CreateClusterRouteTableResponse;
const DeleteClusterEndpointResponse = models.DeleteClusterEndpointResponse;
const RouteInfo = models.RouteInfo;
const DeleteClusterRequest = models.DeleteClusterRequest;
const RunInstancesForNode = models.RunInstancesForNode;
const DeleteClusterAsGroupsRequest = models.DeleteClusterAsGroupsRequest;
const DescribeExistedInstancesRequest = models.DescribeExistedInstancesRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const AddNodeToNodePoolRequest = models.AddNodeToNodePoolRequest;
const NodePool = models.NodePool;
const RouteTableInfo = models.RouteTableInfo;
const ClusterAsGroup = models.ClusterAsGroup;
const Instance = models.Instance;
const CreateClusterNodePoolFromExistingAsgRequest = models.CreateClusterNodePoolFromExistingAsgRequest;
const Tag = models.Tag;
const ClusterNetworkSettings = models.ClusterNetworkSettings;
const DescribeImagesResponse = models.DescribeImagesResponse;
const AutoScalingGroupRange = models.AutoScalingGroupRange;
const ModifyClusterAttributeRequest = models.ModifyClusterAttributeRequest;
const DeleteClusterRouteResponse = models.DeleteClusterRouteResponse;
const CreateClusterEndpointVipResponse = models.CreateClusterEndpointVipResponse;
const DescribeClusterRoutesResponse = models.DescribeClusterRoutesResponse;
const DescribeClustersRequest = models.DescribeClustersRequest;
const UpgradeClusterInstancesRequest = models.UpgradeClusterInstancesRequest;
const ExtensionAddon = models.ExtensionAddon;
const RegionInstance = models.RegionInstance;
const Label = models.Label;
const DeleteClusterEndpointVipResponse = models.DeleteClusterEndpointVipResponse;
const ClusterBasicSettings = models.ClusterBasicSettings;
const RouteTableConflict = models.RouteTableConflict;
const DeleteClusterInstancesRequest = models.DeleteClusterInstancesRequest;
const UpgradeNodeResetParam = models.UpgradeNodeResetParam;
const ModifyClusterAsGroupAttributeResponse = models.ModifyClusterAsGroupAttributeResponse;
const CreateClusterInstancesRequest = models.CreateClusterInstancesRequest;
const ManuallyAdded = models.ManuallyAdded;
const DescribeClusterRouteTablesResponse = models.DescribeClusterRouteTablesResponse;
const DescribeClusterKubeconfigRequest = models.DescribeClusterKubeconfigRequest;
const ClusterCIDRSettings = models.ClusterCIDRSettings;
const CreateClusterEndpointVipRequest = models.CreateClusterEndpointVipRequest;
const Taint = models.Taint;
const CheckInstancesUpgradeAbleRequest = models.CheckInstancesUpgradeAbleRequest;
const ExistedInstance = models.ExistedInstance;
const DescribeClusterNodePoolsResponse = models.DescribeClusterNodePoolsResponse;
const UpgradeAbleInstancesItem = models.UpgradeAbleInstancesItem;
const AddNodeToNodePoolResponse = models.AddNodeToNodePoolResponse;
const TagSpecification = models.TagSpecification;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const ClusterExtraArgs = models.ClusterExtraArgs;
const DataDisk = models.DataDisk;
const ModifyClusterNodePoolResponse = models.ModifyClusterNodePoolResponse;
const DescribeExistedInstancesResponse = models.DescribeExistedInstancesResponse;
const ResourceDeleteOption = models.ResourceDeleteOption;
const LoginSettings = models.LoginSettings;
const CreateClusterNodePoolFromExistingAsgResponse = models.CreateClusterNodePoolFromExistingAsgResponse;
const DescribeClusterEndpointStatusRequest = models.DescribeClusterEndpointStatusRequest;
const EnhancedService = models.EnhancedService;
const CreateClusterAsGroupRequest = models.CreateClusterAsGroupRequest;
const DescribeRouteTableConflictsResponse = models.DescribeRouteTableConflictsResponse;
const CreateClusterResponse = models.CreateClusterResponse;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DeleteClusterRouteTableRequest = models.DeleteClusterRouteTableRequest;
const CreateClusterRequest = models.CreateClusterRequest;
const InstanceExtraArgs = models.InstanceExtraArgs;
const AcquireClusterAdminRoleRequest = models.AcquireClusterAdminRoleRequest;
const CreateClusterAsGroupResponse = models.CreateClusterAsGroupResponse;
const DeleteClusterAsGroupsResponse = models.DeleteClusterAsGroupsResponse;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const Filter = models.Filter;
const ModifyClusterNodePoolRequest = models.ModifyClusterNodePoolRequest;
const ImageInstance = models.ImageInstance;
const CreateClusterEndpointResponse = models.CreateClusterEndpointResponse;
const CreateClusterNodePoolRequest = models.CreateClusterNodePoolRequest;
const ClusterAdvancedSettings = models.ClusterAdvancedSettings;
const AcquireClusterAdminRoleResponse = models.AcquireClusterAdminRoleResponse;
const DeleteClusterNodePoolRequest = models.DeleteClusterNodePoolRequest;
const DeleteClusterEndpointVipRequest = models.DeleteClusterEndpointVipRequest;
const CheckInstancesUpgradeAbleResponse = models.CheckInstancesUpgradeAbleResponse;
const Cluster = models.Cluster;
const DescribeClusterEndpointStatusResponse = models.DescribeClusterEndpointStatusResponse;
const UpgradeClusterInstancesResponse = models.UpgradeClusterInstancesResponse;
const AddExistedInstancesResponse = models.AddExistedInstancesResponse;
const DeleteClusterRouteTableResponse = models.DeleteClusterRouteTableResponse;
const DescribeClusterAsGroupOptionRequest = models.DescribeClusterAsGroupOptionRequest;
const ModifyClusterAttributeResponse = models.ModifyClusterAttributeResponse;
const CreateClusterEndpointRequest = models.CreateClusterEndpointRequest;
const ModifyClusterAsGroupOptionAttributeResponse = models.ModifyClusterAsGroupOptionAttributeResponse;
const AddExistedInstancesRequest = models.AddExistedInstancesRequest;
const ClusterAsGroupOption = models.ClusterAsGroupOption;
const CreateClusterInstancesResponse = models.CreateClusterInstancesResponse;
const DescribeClusterNodePoolsRequest = models.DescribeClusterNodePoolsRequest;
const DescribeClusterRouteTablesRequest = models.DescribeClusterRouteTablesRequest;
const ModifyClusterAsGroupOptionAttributeRequest = models.ModifyClusterAsGroupOptionAttributeRequest;
const ExistedInstancesForNode = models.ExistedInstancesForNode;
const DescribeClusterRoutesRequest = models.DescribeClusterRoutesRequest;
const DeleteClusterRouteRequest = models.DeleteClusterRouteRequest;
const DeleteClusterEndpointRequest = models.DeleteClusterEndpointRequest;
const DescribeClusterNodePoolDetailRequest = models.DescribeClusterNodePoolDetailRequest;
const CreateClusterRouteTableRequest = models.CreateClusterRouteTableRequest;
const DescribeClusterAsGroupsRequest = models.DescribeClusterAsGroupsRequest;
const DescribeImagesRequest = models.DescribeImagesRequest;
const ModifyClusterEndpointSPResponse = models.ModifyClusterEndpointSPResponse;
const DescribeRouteTableConflictsRequest = models.DescribeRouteTableConflictsRequest;
const ExistedInstancesPara = models.ExistedInstancesPara;
const DescribeClusterAsGroupOptionResponse = models.DescribeClusterAsGroupOptionResponse;
const ClusterAsGroupAttribute = models.ClusterAsGroupAttribute;
const DeleteClusterNodePoolResponse = models.DeleteClusterNodePoolResponse;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const CreateClusterNodePoolResponse = models.CreateClusterNodePoolResponse;
const NodePoolOption = models.NodePoolOption;
const ModifyClusterAsGroupAttributeRequest = models.ModifyClusterAsGroupAttributeRequest;
const InstanceDataDiskMountSetting = models.InstanceDataDiskMountSetting;
const NodeCountSummary = models.NodeCountSummary;
const DescribeClusterAsGroupsResponse = models.DescribeClusterAsGroupsResponse;
const RemoveNodeFromNodePoolRequest = models.RemoveNodeFromNodePoolRequest;
const DescribeClusterNodePoolDetailResponse = models.DescribeClusterNodePoolDetailResponse;


/**
 * tke client
 * @class
 */
class TkeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tke.tencentcloudapi.com", "2018-05-25", credential, region, profile);
    }
    
    /**
     * This API is used to check which nodes can be upgraded in the given node list. 
     * @param {CheckInstancesUpgradeAbleRequest} req
     * @param {function(string, CheckInstancesUpgradeAbleResponse):void} cb
     * @public
     */
    CheckInstancesUpgradeAble(req, cb) {
        let resp = new CheckInstancesUpgradeAbleResponse();
        this.request("CheckInstancesUpgradeAble", req, resp, cb);
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
     * This API is used to query detailed information of a node pool.
     * @param {DescribeClusterNodePoolDetailRequest} req
     * @param {function(string, DescribeClusterNodePoolDetailResponse):void} cb
     * @public
     */
    DescribeClusterNodePoolDetail(req, cb) {
        let resp = new DescribeClusterNodePoolDetailResponse();
        this.request("DescribeClusterNodePoolDetail", req, resp, cb);
    }

    /**
     * This API is used to get image information.
     * @param {DescribeImagesRequest} req
     * @param {function(string, DescribeImagesResponse):void} cb
     * @public
     */
    DescribeImages(req, cb) {
        let resp = new DescribeImagesResponse();
        this.request("DescribeImages", req, resp, cb);
    }

    /**
     * This API is used to modify cluster auto scaling attributes.
     * @param {ModifyClusterAsGroupOptionAttributeRequest} req
     * @param {function(string, ModifyClusterAsGroupOptionAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAsGroupOptionAttribute(req, cb) {
        let resp = new ModifyClusterAsGroupOptionAttributeResponse();
        this.request("ModifyClusterAsGroupOptionAttribute", req, resp, cb);
    }

    /**
     * Modify cluster scaling group attributes
     * @param {ModifyClusterAsGroupAttributeRequest} req
     * @param {function(string, ModifyClusterAsGroupAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAsGroupAttribute(req, cb) {
        let resp = new ModifyClusterAsGroupAttributeResponse();
        this.request("ModifyClusterAsGroupAttribute", req, resp, cb);
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
     * This API is used to modify cluster attributes.
     * @param {ModifyClusterAttributeRequest} req
     * @param {function(string, ModifyClusterAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAttribute(req, cb) {
        let resp = new ModifyClusterAttributeResponse();
        this.request("ModifyClusterAttribute", req, resp, cb);
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
     * This API is used to remove a node from a node pool but retain it in the cluster.
     * @param {RemoveNodeFromNodePoolRequest} req
     * @param {function(string, RemoveNodeFromNodePoolResponse):void} cb
     * @public
     */
    RemoveNodeFromNodePool(req, cb) {
        let resp = new RemoveNodeFromNodePoolResponse();
        this.request("RemoveNodeFromNodePool", req, resp, cb);
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
     * This API can be called to acquire the ClusterRole tke:admin. By setting a CAM policy, you can grant permission of this API to a sub-account that has higher permission in CAM. In this way, this sub-account can call this API directly to acquire the admin role of a Kubernetes cluster.
     * @param {AcquireClusterAdminRoleRequest} req
     * @param {function(string, AcquireClusterAdminRoleResponse):void} cb
     * @public
     */
    AcquireClusterAdminRole(req, cb) {
        let resp = new AcquireClusterAdminRoleResponse();
        this.request("AcquireClusterAdminRole", req, resp, cb);
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
     * This API is used to edit a node pool.
     * @param {ModifyClusterNodePoolRequest} req
     * @param {function(string, ModifyClusterNodePoolResponse):void} cb
     * @public
     */
    ModifyClusterNodePool(req, cb) {
        let resp = new ModifyClusterNodePoolResponse();
        this.request("ModifyClusterNodePool", req, resp, cb);
    }

    /**
     * Cluster auto scaling configuration
     * @param {DescribeClusterAsGroupOptionRequest} req
     * @param {function(string, DescribeClusterAsGroupOptionResponse):void} cb
     * @public
     */
    DescribeClusterAsGroupOption(req, cb) {
        let resp = new DescribeClusterAsGroupOptionResponse();
        this.request("DescribeClusterAsGroupOption", req, resp, cb);
    }

    /**
     * This API is used to move nodes in a cluster to a node pool.
     * @param {AddNodeToNodePoolRequest} req
     * @param {function(string, AddNodeToNodePoolResponse):void} cb
     * @public
     */
    AddNodeToNodePool(req, cb) {
        let resp = new AddNodeToNodePoolResponse();
        this.request("AddNodeToNodePool", req, resp, cb);
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
     * Cluster-associated scaling group list
     * @param {DescribeClusterAsGroupsRequest} req
     * @param {function(string, DescribeClusterAsGroupsResponse):void} cb
     * @public
     */
    DescribeClusterAsGroups(req, cb) {
        let resp = new DescribeClusterAsGroupsResponse();
        this.request("DescribeClusterAsGroups", req, resp, cb);
    }

    /**
     * This API is used to create a node pool.
     * @param {CreateClusterNodePoolRequest} req
     * @param {function(string, CreateClusterNodePoolResponse):void} cb
     * @public
     */
    CreateClusterNodePool(req, cb) {
        let resp = new CreateClusterNodePoolResponse();
        this.request("CreateClusterNodePool", req, resp, cb);
    }

    /**
     * This API is used to upgrade one or more work nodes in the cluster. 
     * @param {UpgradeClusterInstancesRequest} req
     * @param {function(string, UpgradeClusterInstancesResponse):void} cb
     * @public
     */
    UpgradeClusterInstances(req, cb) {
        let resp = new UpgradeClusterInstancesResponse();
        this.request("UpgradeClusterInstances", req, resp, cb);
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
     * This API is used to upgrade a scaling group to a node pool.
     * @param {CreateClusterNodePoolFromExistingAsgRequest} req
     * @param {function(string, CreateClusterNodePoolFromExistingAsgResponse):void} cb
     * @public
     */
    CreateClusterNodePoolFromExistingAsg(req, cb) {
        let resp = new CreateClusterNodePoolFromExistingAsgResponse();
        this.request("CreateClusterNodePoolFromExistingAsg", req, resp, cb);
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
     * This API is used to obtain all regions supported by TKE.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
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
     * This API is used to delete a node pool.
     * @param {DeleteClusterNodePoolRequest} req
     * @param {function(string, DeleteClusterNodePoolResponse):void} cb
     * @public
     */
    DeleteClusterNodePool(req, cb) {
        let resp = new DeleteClusterNodePoolResponse();
        this.request("DeleteClusterNodePool", req, resp, cb);
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
     * This API is used to query the node pool list
     * @param {DescribeClusterNodePoolsRequest} req
     * @param {function(string, DescribeClusterNodePoolsResponse):void} cb
     * @public
     */
    DescribeClusterNodePools(req, cb) {
        let resp = new DescribeClusterNodePoolsResponse();
        this.request("DescribeClusterNodePools", req, resp, cb);
    }

    /**
     * This API is used to obtain the cluster kubeconfig file. Different sub-accounts have their own kubeconfig files. The kubeconfig file contains the kube-apiserver client certificate of the corresponding sub-account. By default, the client certificate is created when this API is called for the first time, and the certificate is valid for 20 years with no permissions granted. For the cluster owner or primary account, the cluster-admin permission is granted by default.
     * @param {DescribeClusterKubeconfigRequest} req
     * @param {function(string, DescribeClusterKubeconfigResponse):void} cb
     * @public
     */
    DescribeClusterKubeconfig(req, cb) {
        let resp = new DescribeClusterKubeconfigResponse();
        this.request("DescribeClusterKubeconfig", req, resp, cb);
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
