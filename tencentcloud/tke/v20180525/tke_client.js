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
const EnableVpcCniNetworkTypeRequest = models.EnableVpcCniNetworkTypeRequest;
const DescribeClusterEndpointVipStatusRequest = models.DescribeClusterEndpointVipStatusRequest;
const DescribeClusterSecurityResponse = models.DescribeClusterSecurityResponse;
const DescribeClusterSecurityRequest = models.DescribeClusterSecurityRequest;
const ModifyPrometheusAlertRuleRequest = models.ModifyPrometheusAlertRuleRequest;
const DeleteClusterInstancesResponse = models.DeleteClusterInstancesResponse;
const InstallEdgeLogAgentRequest = models.InstallEdgeLogAgentRequest;
const DescribeEdgeCVMInstancesRequest = models.DescribeEdgeCVMInstancesRequest;
const DescribeClusterKubeconfigResponse = models.DescribeClusterKubeconfigResponse;
const DescribeClusterAuthenticationOptionsRequest = models.DescribeClusterAuthenticationOptionsRequest;
const DescribeClusterEndpointVipStatusResponse = models.DescribeClusterEndpointVipStatusResponse;
const ModifyClusterEndpointSPRequest = models.ModifyClusterEndpointSPRequest;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const AutoscalingAdded = models.AutoscalingAdded;
const CreatePrometheusAlertRuleRequest = models.CreatePrometheusAlertRuleRequest;
const CreateClusterRouteTableResponse = models.CreateClusterRouteTableResponse;
const DescribeClusterCommonNamesRequest = models.DescribeClusterCommonNamesRequest;
const RunAutomationServiceEnabled = models.RunAutomationServiceEnabled;
const EdgeClusterPublicLB = models.EdgeClusterPublicLB;
const DeleteClusterEndpointResponse = models.DeleteClusterEndpointResponse;
const PrometheusNotification = models.PrometheusNotification;
const ClusterVersion = models.ClusterVersion;
const RouteInfo = models.RouteInfo;
const CreateEdgeLogConfigResponse = models.CreateEdgeLogConfigResponse;
const ClusterCondition = models.ClusterCondition;
const DescribeAvailableTKEEdgeVersionResponse = models.DescribeAvailableTKEEdgeVersionResponse;
const InstanceUpgradeProgressItem = models.InstanceUpgradeProgressItem;
const ModifyClusterEndpointSPResponse = models.ModifyClusterEndpointSPResponse;
const NodePool = models.NodePool;
const InstallEdgeLogAgentResponse = models.InstallEdgeLogAgentResponse;
const DescribeEdgeClusterInstancesResponse = models.DescribeEdgeClusterInstancesResponse;
const IPAddress = models.IPAddress;
const DescribeTKEEdgeClusterCredentialRequest = models.DescribeTKEEdgeClusterCredentialRequest;
const AutoUpgradeClusterLevel = models.AutoUpgradeClusterLevel;
const CheckEdgeClusterCIDRResponse = models.CheckEdgeClusterCIDRResponse;
const RunInstancesForNode = models.RunInstancesForNode;
const DescribeTKEEdgeExternalKubeconfigRequest = models.DescribeTKEEdgeExternalKubeconfigRequest;
const DescribeAvailableTKEEdgeVersionRequest = models.DescribeAvailableTKEEdgeVersionRequest;
const DeleteClusterAsGroupsRequest = models.DeleteClusterAsGroupsRequest;
const DescribeExistedInstancesRequest = models.DescribeExistedInstancesRequest;
const InstanceExtraArgs = models.InstanceExtraArgs;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const ClusterLevelChangeRecord = models.ClusterLevelChangeRecord;
const ModifyPrometheusAlertRuleResponse = models.ModifyPrometheusAlertRuleResponse;
const AddNodeToNodePoolRequest = models.AddNodeToNodePoolRequest;
const EnableVpcCniNetworkTypeResponse = models.EnableVpcCniNetworkTypeResponse;
const RouteTableInfo = models.RouteTableInfo;
const DescribeECMInstancesRequest = models.DescribeECMInstancesRequest;
const EnableClusterDeletionProtectionResponse = models.EnableClusterDeletionProtectionResponse;
const ClusterAsGroup = models.ClusterAsGroup;
const Instance = models.Instance;
const DescribeVpcCniPodLimitsResponse = models.DescribeVpcCniPodLimitsResponse;
const DescribeVersionsResponse = models.DescribeVersionsResponse;
const DescribeEdgeClusterInstancesRequest = models.DescribeEdgeClusterInstancesRequest;
const ECMRunMonitorServiceEnabled = models.ECMRunMonitorServiceEnabled;
const DeleteEdgeClusterInstancesRequest = models.DeleteEdgeClusterInstancesRequest;
const Tag = models.Tag;
const NodePoolOption = models.NodePoolOption;
const ForwardTKEEdgeApplicationRequestV3Response = models.ForwardTKEEdgeApplicationRequestV3Response;
const ClusterNetworkSettings = models.ClusterNetworkSettings;
const DescribeImagesResponse = models.DescribeImagesResponse;
const AutoScalingGroupRange = models.AutoScalingGroupRange;
const ModifyClusterAttributeRequest = models.ModifyClusterAttributeRequest;
const DeleteClusterRouteResponse = models.DeleteClusterRouteResponse;
const EdgeClusterAdvancedSettings = models.EdgeClusterAdvancedSettings;
const ServiceAccountAuthenticationOptions = models.ServiceAccountAuthenticationOptions;
const CreateClusterEndpointVipResponse = models.CreateClusterEndpointVipResponse;
const ResourceUsage = models.ResourceUsage;
const DescribeClusterRoutesResponse = models.DescribeClusterRoutesResponse;
const DescribeClustersRequest = models.DescribeClustersRequest;
const UpgradeClusterInstancesRequest = models.UpgradeClusterInstancesRequest;
const ExtensionAddon = models.ExtensionAddon;
const DeletePrometheusAlertRuleRequest = models.DeletePrometheusAlertRuleRequest;
const DescribeResourceUsageRequest = models.DescribeResourceUsageRequest;
const DescribeTKEEdgeClustersRequest = models.DescribeTKEEdgeClustersRequest;
const ECMRunSecurityServiceEnabled = models.ECMRunSecurityServiceEnabled;
const Label = models.Label;
const PodLimitsByType = models.PodLimitsByType;
const DescribeClusterRouteTablesResponse = models.DescribeClusterRouteTablesResponse;
const SetNodePoolNodeProtectionResponse = models.SetNodePoolNodeProtectionResponse;
const ResourceUsageDetail = models.ResourceUsageDetail;
const CreateTKEEdgeClusterRequest = models.CreateTKEEdgeClusterRequest;
const DescribeRouteTableConflictsRequest = models.DescribeRouteTableConflictsRequest;
const DeleteClusterEndpointVipResponse = models.DeleteClusterEndpointVipResponse;
const CreateEdgeLogConfigRequest = models.CreateEdgeLogConfigRequest;
const ClusterBasicSettings = models.ClusterBasicSettings;
const RouteTableConflict = models.RouteTableConflict;
const DeleteClusterInstancesRequest = models.DeleteClusterInstancesRequest;
const UpgradeNodeResetParam = models.UpgradeNodeResetParam;
const DescribeTKEEdgeClusterStatusResponse = models.DescribeTKEEdgeClusterStatusResponse;
const CreateClusterInstancesRequest = models.CreateClusterInstancesRequest;
const CreateClusterNodePoolFromExistingAsgRequest = models.CreateClusterNodePoolFromExistingAsgRequest;
const DescribeTKEEdgeScriptResponse = models.DescribeTKEEdgeScriptResponse;
const DescribeClusterStatusRequest = models.DescribeClusterStatusRequest;
const VersionInstance = models.VersionInstance;
const DeleteClusterNodePoolRequest = models.DeleteClusterNodePoolRequest;
const DescribeClusterKubeconfigRequest = models.DescribeClusterKubeconfigRequest;
const ClusterCIDRSettings = models.ClusterCIDRSettings;
const CreateClusterEndpointVipRequest = models.CreateClusterEndpointVipRequest;
const Taint = models.Taint;
const CheckInstancesUpgradeAbleRequest = models.CheckInstancesUpgradeAbleRequest;
const CreateECMInstancesResponse = models.CreateECMInstancesResponse;
const ModifyClusterAsGroupOptionAttributeRequest = models.ModifyClusterAsGroupOptionAttributeRequest;
const ResourceDeleteOption = models.ResourceDeleteOption;
const DescribeClusterNodePoolsResponse = models.DescribeClusterNodePoolsResponse;
const UpgradeAbleInstancesItem = models.UpgradeAbleInstancesItem;
const GetUpgradeInstanceProgressRequest = models.GetUpgradeInstanceProgressRequest;
const DescribeClusterEndpointsRequest = models.DescribeClusterEndpointsRequest;
const DescribeEdgeAvailableExtraArgsRequest = models.DescribeEdgeAvailableExtraArgsRequest;
const ExistedInstance = models.ExistedInstance;
const CreateEdgeCVMInstancesRequest = models.CreateEdgeCVMInstancesRequest;
const AddNodeToNodePoolResponse = models.AddNodeToNodePoolResponse;
const ModifyNodePoolInstanceTypesRequest = models.ModifyNodePoolInstanceTypesRequest;
const DescribeClusterLevelAttributeRequest = models.DescribeClusterLevelAttributeRequest;
const DisableClusterDeletionProtectionRequest = models.DisableClusterDeletionProtectionRequest;
const DriverVersion = models.DriverVersion;
const DescribeEdgeCVMInstancesResponse = models.DescribeEdgeCVMInstancesResponse;
const CreateECMInstancesRequest = models.CreateECMInstancesRequest;
const CUDNN = models.CUDNN;
const DescribeClustersResponse = models.DescribeClustersResponse;
const ClusterCredential = models.ClusterCredential;
const DescribeVpcCniPodLimitsRequest = models.DescribeVpcCniPodLimitsRequest;
const DescribeTKEEdgeScriptRequest = models.DescribeTKEEdgeScriptRequest;
const CustomDriver = models.CustomDriver;
const CreateEdgeCVMInstancesResponse = models.CreateEdgeCVMInstancesResponse;
const DataDisk = models.DataDisk;
const DescribeEdgeLogSwitchesResponse = models.DescribeEdgeLogSwitchesResponse;
const DeleteEdgeCVMInstancesResponse = models.DeleteEdgeCVMInstancesResponse;
const ModifyClusterNodePoolResponse = models.ModifyClusterNodePoolResponse;
const GetUpgradeInstanceProgressResponse = models.GetUpgradeInstanceProgressResponse;
const DescribeExistedInstancesResponse = models.DescribeExistedInstancesResponse;
const DescribeClusterAsGroupOptionRequest = models.DescribeClusterAsGroupOptionRequest;
const CreatePrometheusAlertRuleResponse = models.CreatePrometheusAlertRuleResponse;
const ECMEnhancedService = models.ECMEnhancedService;
const LoginSettings = models.LoginSettings;
const ModifyNodePoolInstanceTypesResponse = models.ModifyNodePoolInstanceTypesResponse;
const CreateClusterNodePoolFromExistingAsgResponse = models.CreateClusterNodePoolFromExistingAsgResponse;
const DescribeEnableVpcCniProgressRequest = models.DescribeEnableVpcCniProgressRequest;
const DescribeClusterEndpointStatusRequest = models.DescribeClusterEndpointStatusRequest;
const GetClusterLevelPriceResponse = models.GetClusterLevelPriceResponse;
const PrometheusAlertRule = models.PrometheusAlertRule;
const DescribeResourceUsageResponse = models.DescribeResourceUsageResponse;
const DescribeClusterStatusResponse = models.DescribeClusterStatusResponse;
const DescribeRouteTableConflictsResponse = models.DescribeRouteTableConflictsResponse;
const EdgeClusterInternalLB = models.EdgeClusterInternalLB;
const DescribeVersionsRequest = models.DescribeVersionsRequest;
const CreateClusterResponse = models.CreateClusterResponse;
const TaskStepInfo = models.TaskStepInfo;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DeleteClusterRouteTableRequest = models.DeleteClusterRouteTableRequest;
const DescribeAvailableClusterVersionRequest = models.DescribeAvailableClusterVersionRequest;
const CreateClusterRequest = models.CreateClusterRequest;
const DeletePrometheusAlertRuleResponse = models.DeletePrometheusAlertRuleResponse;
const AcquireClusterAdminRoleRequest = models.AcquireClusterAdminRoleRequest;
const DeleteEdgeClusterInstancesResponse = models.DeleteEdgeClusterInstancesResponse;
const DeleteTKEEdgeClusterRequest = models.DeleteTKEEdgeClusterRequest;
const ModifyClusterAuthenticationOptionsResponse = models.ModifyClusterAuthenticationOptionsResponse;
const DescribeClusterAuthenticationOptionsResponse = models.DescribeClusterAuthenticationOptionsResponse;
const DeleteClusterAsGroupsResponse = models.DeleteClusterAsGroupsResponse;
const EnableClusterDeletionProtectionRequest = models.EnableClusterDeletionProtectionRequest;
const DescribePrometheusInstanceRequest = models.DescribePrometheusInstanceRequest;
const ECMZoneInstanceCountISP = models.ECMZoneInstanceCountISP;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const RegionInstance = models.RegionInstance;
const EdgeClusterExtraArgs = models.EdgeClusterExtraArgs;
const PodLimitsInstance = models.PodLimitsInstance;
const DescribeEnableVpcCniProgressResponse = models.DescribeEnableVpcCniProgressResponse;
const PrometheusAlertRuleDetail = models.PrometheusAlertRuleDetail;
const DescribePrometheusInstanceResponse = models.DescribePrometheusInstanceResponse;
const DeleteEdgeCVMInstancesRequest = models.DeleteEdgeCVMInstancesRequest;
const ModifyClusterNodePoolRequest = models.ModifyClusterNodePoolRequest;
const DescribeEdgeLogSwitchesRequest = models.DescribeEdgeLogSwitchesRequest;
const DescribeECMInstancesResponse = models.DescribeECMInstancesResponse;
const GetClusterLevelPriceRequest = models.GetClusterLevelPriceRequest;
const CreateClusterEndpointResponse = models.CreateClusterEndpointResponse;
const DescribeTKEEdgeClusterStatusRequest = models.DescribeTKEEdgeClusterStatusRequest;
const CreateClusterNodePoolRequest = models.CreateClusterNodePoolRequest;
const ClusterAdvancedSettings = models.ClusterAdvancedSettings;
const AcquireClusterAdminRoleResponse = models.AcquireClusterAdminRoleResponse;
const EdgeAvailableExtraArgs = models.EdgeAvailableExtraArgs;
const UpdateClusterVersionRequest = models.UpdateClusterVersionRequest;
const ModifyClusterAuthenticationOptionsRequest = models.ModifyClusterAuthenticationOptionsRequest;
const DeleteClusterEndpointVipRequest = models.DeleteClusterEndpointVipRequest;
const EdgeArgsFlag = models.EdgeArgsFlag;
const DescribeClusterLevelChangeRecordsResponse = models.DescribeClusterLevelChangeRecordsResponse;
const CheckInstancesUpgradeAbleResponse = models.CheckInstancesUpgradeAbleResponse;
const Cluster = models.Cluster;
const DescribeClusterEndpointStatusResponse = models.DescribeClusterEndpointStatusResponse;
const ClusterStatus = models.ClusterStatus;
const UpgradeClusterInstancesResponse = models.UpgradeClusterInstancesResponse;
const AddExistedInstancesResponse = models.AddExistedInstancesResponse;
const DeleteClusterRouteTableResponse = models.DeleteClusterRouteTableResponse;
const CreateClusterInstancesResponse = models.CreateClusterInstancesResponse;
const DisableClusterDeletionProtectionResponse = models.DisableClusterDeletionProtectionResponse;
const DeleteClusterRequest = models.DeleteClusterRequest;
const ModifyClusterAttributeResponse = models.ModifyClusterAttributeResponse;
const ModifyClusterAsGroupAttributeResponse = models.ModifyClusterAsGroupAttributeResponse;
const DescribeTKEEdgeClustersResponse = models.DescribeTKEEdgeClustersResponse;
const CreateClusterEndpointRequest = models.CreateClusterEndpointRequest;
const ModifyClusterAsGroupOptionAttributeResponse = models.ModifyClusterAsGroupOptionAttributeResponse;
const DescribeClusterLevelAttributeResponse = models.DescribeClusterLevelAttributeResponse;
const DescribeEdgeClusterExtraArgsRequest = models.DescribeEdgeClusterExtraArgsRequest;
const AddExistedInstancesRequest = models.AddExistedInstancesRequest;
const DescribeTKEEdgeExternalKubeconfigResponse = models.DescribeTKEEdgeExternalKubeconfigResponse;
const ClusterAsGroupOption = models.ClusterAsGroupOption;
const AddVpcCniSubnetsResponse = models.AddVpcCniSubnetsResponse;
const DescribeClusterNodePoolsRequest = models.DescribeClusterNodePoolsRequest;
const DescribeClusterRouteTablesRequest = models.DescribeClusterRouteTablesRequest;
const DeleteTKEEdgeClusterResponse = models.DeleteTKEEdgeClusterResponse;
const ExistedInstancesForNode = models.ExistedInstancesForNode;
const InstanceUpgradeClusterStatus = models.InstanceUpgradeClusterStatus;
const UninstallEdgeLogAgentResponse = models.UninstallEdgeLogAgentResponse;
const DescribeClusterRoutesRequest = models.DescribeClusterRoutesRequest;
const DeleteClusterRouteRequest = models.DeleteClusterRouteRequest;
const DeleteECMInstancesRequest = models.DeleteECMInstancesRequest;
const ClusterLevelAttribute = models.ClusterLevelAttribute;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const EnhancedService = models.EnhancedService;
const DescribeClusterNodePoolDetailRequest = models.DescribeClusterNodePoolDetailRequest;
const SetNodePoolNodeProtectionRequest = models.SetNodePoolNodeProtectionRequest;
const CreateClusterRouteTableRequest = models.CreateClusterRouteTableRequest;
const DescribeClusterEndpointsResponse = models.DescribeClusterEndpointsResponse;
const InstanceUpgradePreCheckResult = models.InstanceUpgradePreCheckResult;
const DescribeClusterAsGroupsRequest = models.DescribeClusterAsGroupsRequest;
const DescribeImagesRequest = models.DescribeImagesRequest;
const UninstallEdgeLogAgentRequest = models.UninstallEdgeLogAgentRequest;
const DescribeAvailableClusterVersionResponse = models.DescribeAvailableClusterVersionResponse;
const TagSpecification = models.TagSpecification;
const DescribeClusterLevelChangeRecordsRequest = models.DescribeClusterLevelChangeRecordsRequest;
const DescribeEdgeAvailableExtraArgsResponse = models.DescribeEdgeAvailableExtraArgsResponse;
const AddVpcCniSubnetsRequest = models.AddVpcCniSubnetsRequest;
const InstanceUpgradePreCheckResultItem = models.InstanceUpgradePreCheckResultItem;
const DescribeClusterCommonNamesResponse = models.DescribeClusterCommonNamesResponse;
const ExistedInstancesPara = models.ExistedInstancesPara;
const CommonName = models.CommonName;
const DescribeClusterAsGroupOptionResponse = models.DescribeClusterAsGroupOptionResponse;
const ClusterAsGroupAttribute = models.ClusterAsGroupAttribute;
const CreateTKEEdgeClusterResponse = models.CreateTKEEdgeClusterResponse;
const DeleteClusterNodePoolResponse = models.DeleteClusterNodePoolResponse;
const DeleteECMInstancesResponse = models.DeleteECMInstancesResponse;
const DescribeEdgeClusterExtraArgsResponse = models.DescribeEdgeClusterExtraArgsResponse;
const ForwardTKEEdgeApplicationRequestV3Request = models.ForwardTKEEdgeApplicationRequestV3Request;
const GPUArgs = models.GPUArgs;
const ClusterExtraArgs = models.ClusterExtraArgs;
const UpdateClusterVersionResponse = models.UpdateClusterVersionResponse;
const DescribeTKEEdgeClusterCredentialResponse = models.DescribeTKEEdgeClusterCredentialResponse;
const DeleteClusterEndpointRequest = models.DeleteClusterEndpointRequest;
const CreateClusterNodePoolResponse = models.CreateClusterNodePoolResponse;
const Filter = models.Filter;
const ManuallyAdded = models.ManuallyAdded;
const CheckEdgeClusterCIDRRequest = models.CheckEdgeClusterCIDRRequest;
const ModifyClusterAsGroupAttributeRequest = models.ModifyClusterAsGroupAttributeRequest;
const PrometheusGrafanaInfo = models.PrometheusGrafanaInfo;
const RemoveNodeFromNodePoolResponse = models.RemoveNodeFromNodePoolResponse;
const InstanceDataDiskMountSetting = models.InstanceDataDiskMountSetting;
const RemoveNodeFromNodePoolRequest = models.RemoveNodeFromNodePoolRequest;
const NodeCountSummary = models.NodeCountSummary;
const DescribeClusterAsGroupsResponse = models.DescribeClusterAsGroupsResponse;
const ImageInstance = models.ImageInstance;
const EdgeCluster = models.EdgeCluster;
const DescribeClusterNodePoolDetailResponse = models.DescribeClusterNodePoolDetailResponse;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;


/**
 * tke client
 * @class
 */
class TkeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tke.tencentcloudapi.com", "2018-05-25", credential, region, profile);
    }
    
    /**
     * This API is used to create an ECM instance.
     * @param {CreateECMInstancesRequest} req
     * @param {function(string, CreateECMInstancesResponse):void} cb
     * @public
     */
    CreateECMInstances(req, cb) {
        let resp = new CreateECMInstancesResponse();
        this.request("CreateECMInstances", req, resp, cb);
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
     * This API is used to enable the VPC-CNI network mode for GR clusters.
     * @param {EnableVpcCniNetworkTypeRequest} req
     * @param {function(string, EnableVpcCniNetworkTypeResponse):void} cb
     * @public
     */
    EnableVpcCniNetworkType(req, cb) {
        let resp = new EnableVpcCniNetworkTypeResponse();
        this.request("EnableVpcCniNetworkType", req, resp, cb);
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
     * This API is used to uninstall the log collection add-on from TKE Edge cluster nodes.
     * @param {UninstallEdgeLogAgentRequest} req
     * @param {function(string, UninstallEdgeLogAgentResponse):void} cb
     * @public
     */
    UninstallEdgeLogAgent(req, cb) {
        let resp = new UninstallEdgeLogAgentResponse();
        this.request("UninstallEdgeLogAgent", req, resp, cb);
    }

    /**
     * This API is used to delete one or more edge compute instances.
     * @param {DeleteEdgeClusterInstancesRequest} req
     * @param {function(string, DeleteEdgeClusterInstancesResponse):void} cb
     * @public
     */
    DeleteEdgeClusterInstances(req, cb) {
        let resp = new DeleteEdgeClusterInstancesResponse();
        this.request("DeleteEdgeClusterInstances", req, resp, cb);
    }

    /**
     * This API is used to modify an alarm rule. 
     * @param {ModifyPrometheusAlertRuleRequest} req
     * @param {function(string, ModifyPrometheusAlertRuleResponse):void} cb
     * @public
     */
    ModifyPrometheusAlertRule(req, cb) {
        let resp = new ModifyPrometheusAlertRuleResponse();
        this.request("ModifyPrometheusAlertRule", req, resp, cb);
    }

    /**
     * This API is used to enable removal protection for the nodes automatically created by the scaling group in a node pool.
     * @param {SetNodePoolNodeProtectionRequest} req
     * @param {function(string, SetNodePoolNodeProtectionResponse):void} cb
     * @public
     */
    SetNodePoolNodeProtection(req, cb) {
        let resp = new SetNodePoolNodeProtectionResponse();
        this.request("SetNodePoolNodeProtection", req, resp, cb);
    }

    /**
     * This API is used to query the custom parameters available for an edge cluster.
     * @param {DescribeEdgeAvailableExtraArgsRequest} req
     * @param {function(string, DescribeEdgeAvailableExtraArgsResponse):void} cb
     * @public
     */
    DescribeEdgeAvailableExtraArgs(req, cb) {
        let resp = new DescribeEdgeAvailableExtraArgsResponse();
        this.request("DescribeEdgeAvailableExtraArgs", req, resp, cb);
    }

    /**
     * This API is used to obtain the CommonName from the kube-apiserver client certificate that corresponding to the sub-account in RBAC authorization mode. 
     * @param {DescribeClusterCommonNamesRequest} req
     * @param {function(string, DescribeClusterCommonNamesResponse):void} cb
     * @public
     */
    DescribeClusterCommonNames(req, cb) {
        let resp = new DescribeClusterCommonNamesResponse();
        this.request("DescribeClusterCommonNames", req, resp, cb);
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
     * This API is used to obtain the current progress of the node upgrade. 
     * @param {GetUpgradeInstanceProgressRequest} req
     * @param {function(string, GetUpgradeInstanceProgressResponse):void} cb
     * @public
     */
    GetUpgradeInstanceProgress(req, cb) {
        let resp = new GetUpgradeInstanceProgressResponse();
        this.request("GetUpgradeInstanceProgress", req, resp, cb);
    }

    /**
     * This API is used to check the edge component versions and K8s versions supported by TKE Edge.
     * @param {DescribeAvailableTKEEdgeVersionRequest} req
     * @param {function(string, DescribeAvailableTKEEdgeVersionResponse):void} cb
     * @public
     */
    DescribeAvailableTKEEdgeVersion(req, cb) {
        let resp = new DescribeAvailableTKEEdgeVersionResponse();
        this.request("DescribeAvailableTKEEdgeVersion", req, resp, cb);
    }

    /**
     * This API is used to query the list of TKE Edge clusters.
     * @param {DescribeTKEEdgeClustersRequest} req
     * @param {function(string, DescribeTKEEdgeClustersResponse):void} cb
     * @public
     */
    DescribeTKEEdgeClusters(req, cb) {
        let resp = new DescribeTKEEdgeClustersResponse();
        this.request("DescribeTKEEdgeClusters", req, resp, cb);
    }

    /**
     * This API is used to query cluster version information.
     * @param {DescribeVersionsRequest} req
     * @param {function(string, DescribeVersionsResponse):void} cb
     * @public
     */
    DescribeVersions(req, cb) {
        let resp = new DescribeVersionsResponse();
        this.request("DescribeVersions", req, resp, cb);
    }

    /**
     * This API is used to query custom parameters of an edge cluster.
     * @param {DescribeEdgeClusterExtraArgsRequest} req
     * @param {function(string, DescribeEdgeClusterExtraArgsResponse):void} cb
     * @public
     */
    DescribeEdgeClusterExtraArgs(req, cb) {
        let resp = new DescribeEdgeClusterExtraArgsResponse();
        this.request("DescribeEdgeClusterExtraArgs", req, resp, cb);
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
     * This API is used to obtain the kubeconfig for access to a TKE Edge cluster through the public network.
     * @param {DescribeTKEEdgeExternalKubeconfigRequest} req
     * @param {function(string, DescribeTKEEdgeExternalKubeconfigResponse):void} cb
     * @public
     */
    DescribeTKEEdgeExternalKubeconfig(req, cb) {
        let resp = new DescribeTKEEdgeExternalKubeconfigResponse();
        this.request("DescribeTKEEdgeExternalKubeconfig", req, resp, cb);
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
     * This API is used to upgrade the master component of the cluster to the specified version.
     * @param {UpdateClusterVersionRequest} req
     * @param {function(string, UpdateClusterVersionResponse):void} cb
     * @public
     */
    UpdateClusterVersion(req, cb) {
        let resp = new UpdateClusterVersionResponse();
        this.request("UpdateClusterVersion", req, resp, cb);
    }

    /**
     * This API is used to obtain all versions that the cluster can upgrade to.
     * @param {DescribeAvailableClusterVersionRequest} req
     * @param {function(string, DescribeAvailableClusterVersionResponse):void} cb
     * @public
     */
    DescribeAvailableClusterVersion(req, cb) {
        let resp = new DescribeAvailableClusterVersionResponse();
        this.request("DescribeAvailableClusterVersion", req, resp, cb);
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
     * This API is used to query cluster authentication configuration.
     * @param {DescribeClusterAuthenticationOptionsRequest} req
     * @param {function(string, DescribeClusterAuthenticationOptionsResponse):void} cb
     * @public
     */
    DescribeClusterAuthenticationOptions(req, cb) {
        let resp = new DescribeClusterAuthenticationOptionsResponse();
        this.request("DescribeClusterAuthenticationOptions", req, resp, cb);
    }

    /**
     * This API is used to delete one or more ECM instances.
     * @param {DeleteECMInstancesRequest} req
     * @param {function(string, DeleteECMInstancesResponse):void} cb
     * @public
     */
    DeleteECMInstances(req, cb) {
        let resp = new DeleteECMInstancesResponse();
        this.request("DeleteECMInstances", req, resp, cb);
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
     * This API is used to add subnets in the container network for a VPC-CNI cluster.
     * @param {AddVpcCniSubnetsRequest} req
     * @param {function(string, AddVpcCniSubnetsResponse):void} cb
     * @public
     */
    AddVpcCniSubnets(req, cb) {
        let resp = new AddVpcCniSubnetsResponse();
        this.request("AddVpcCniSubnets", req, resp, cb);
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
     * This API is used to obtain the authentication information of a TKE Edge cluster.
     * @param {DescribeTKEEdgeClusterCredentialRequest} req
     * @param {function(string, DescribeTKEEdgeClusterCredentialResponse):void} cb
     * @public
     */
    DescribeTKEEdgeClusterCredential(req, cb) {
        let resp = new DescribeTKEEdgeClusterCredentialResponse();
        this.request("DescribeTKEEdgeClusterCredential", req, resp, cb);
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
     * This API is used to delete one or more edge CVM instances.
     * @param {DeleteEdgeCVMInstancesRequest} req
     * @param {function(string, DeleteEdgeCVMInstancesResponse):void} cb
     * @public
     */
    DeleteEdgeCVMInstances(req, cb) {
        let resp = new DeleteEdgeCVMInstancesResponse();
        this.request("DeleteEdgeCVMInstances", req, resp, cb);
    }

    /**
     * This API is used to query the status of events, audits and logs.
     * @param {DescribeEdgeLogSwitchesRequest} req
     * @param {function(string, DescribeEdgeLogSwitchesResponse):void} cb
     * @public
     */
    DescribeEdgeLogSwitches(req, cb) {
        let resp = new DescribeEdgeLogSwitchesResponse();
        this.request("DescribeEdgeLogSwitches", req, resp, cb);
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
     * This API is used to disable cluster deletion protection.
     * @param {DisableClusterDeletionProtectionRequest} req
     * @param {function(string, DisableClusterDeletionProtectionResponse):void} cb
     * @public
     */
    DisableClusterDeletionProtection(req, cb) {
        let resp = new DisableClusterDeletionProtectionResponse();
        this.request("DisableClusterDeletionProtection", req, resp, cb);
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
     * This API is used to enable cluster deletion protection.
     * @param {EnableClusterDeletionProtectionRequest} req
     * @param {function(string, EnableClusterDeletionProtectionResponse):void} cb
     * @public
     */
    EnableClusterDeletionProtection(req, cb) {
        let resp = new EnableClusterDeletionProtectionResponse();
        this.request("EnableClusterDeletionProtection", req, resp, cb);
    }

    /**
     * This API is used to obtain the edge CVM instance information.
     * @param {DescribeEdgeCVMInstancesRequest} req
     * @param {function(string, DescribeEdgeCVMInstancesResponse):void} cb
     * @public
     */
    DescribeEdgeCVMInstances(req, cb) {
        let resp = new DescribeEdgeCVMInstancesResponse();
        this.request("DescribeEdgeCVMInstances", req, resp, cb);
    }

    /**
     * This API is used to obtain the cluster model.
     * @param {DescribeClusterLevelAttributeRequest} req
     * @param {function(string, DescribeClusterLevelAttributeResponse):void} cb
     * @public
     */
    DescribeClusterLevelAttribute(req, cb) {
        let resp = new DescribeClusterLevelAttributeResponse();
        this.request("DescribeClusterLevelAttribute", req, resp, cb);
    }

    /**
     * This API is used to delete a TKE Edge cluster.
     * @param {DeleteTKEEdgeClusterRequest} req
     * @param {function(string, DeleteTKEEdgeClusterResponse):void} cb
     * @public
     */
    DeleteTKEEdgeCluster(req, cb) {
        let resp = new DeleteTKEEdgeClusterResponse();
        this.request("DeleteTKEEdgeCluster", req, resp, cb);
    }

    /**
     * This API is used to query the URL of TKE edge script. You can add external nodes to a TKE Edge cluster by downloading the URL.
     * @param {DescribeTKEEdgeScriptRequest} req
     * @param {function(string, DescribeTKEEdgeScriptResponse):void} cb
     * @public
     */
    DescribeTKEEdgeScript(req, cb) {
        let resp = new DescribeTKEEdgeScriptResponse();
        this.request("DescribeTKEEdgeScript", req, resp, cb);
    }

    /**
     * This API is used to query the maximum number of Pods in the VPC-CNI network mode supported by the models in the specified availability zone of the current user and region.
     * @param {DescribeVpcCniPodLimitsRequest} req
     * @param {function(string, DescribeVpcCniPodLimitsResponse):void} cb
     * @public
     */
    DescribeVpcCniPodLimits(req, cb) {
        let resp = new DescribeVpcCniPodLimitsResponse();
        this.request("DescribeVpcCniPodLimits", req, resp, cb);
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
     * This API is used to obtain the instance details.
     * @param {DescribePrometheusInstanceRequest} req
     * @param {function(string, DescribePrometheusInstanceResponse):void} cb
     * @public
     */
    DescribePrometheusInstance(req, cb) {
        let resp = new DescribePrometheusInstanceResponse();
        this.request("DescribePrometheusInstance", req, resp, cb);
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
     * This API is used to delete an alarm rule.
     * @param {DeletePrometheusAlertRuleRequest} req
     * @param {function(string, DeletePrometheusAlertRuleResponse):void} cb
     * @public
     */
    DeletePrometheusAlertRule(req, cb) {
        let resp = new DeletePrometheusAlertRuleResponse();
        this.request("DeletePrometheusAlertRule", req, resp, cb);
    }

    /**
     * This API is used to query the current status and process information of a TKE Edge cluster.
     * @param {DescribeTKEEdgeClusterStatusRequest} req
     * @param {function(string, DescribeTKEEdgeClusterStatusResponse):void} cb
     * @public
     */
    DescribeTKEEdgeClusterStatus(req, cb) {
        let resp = new DescribeTKEEdgeClusterStatusResponse();
        this.request("DescribeTKEEdgeClusterStatus", req, resp, cb);
    }

    /**
     * This API is used to create a cluster access endpoint.
     * @param {CreateClusterEndpointRequest} req
     * @param {function(string, CreateClusterEndpointResponse):void} cb
     * @public
     */
    CreateClusterEndpoint(req, cb) {
        let resp = new CreateClusterEndpointResponse();
        this.request("CreateClusterEndpoint", req, resp, cb);
    }

    /**
     * This API is used to query the information of clusters under the current account.
     * @param {DescribeClusterStatusRequest} req
     * @param {function(string, DescribeClusterStatusResponse):void} cb
     * @public
     */
    DescribeClusterStatus(req, cb) {
        let resp = new DescribeClusterStatusResponse();
        this.request("DescribeClusterStatus", req, resp, cb);
    }

    /**
     * This API is used to create an alarm rule.
     * @param {CreatePrometheusAlertRuleRequest} req
     * @param {function(string, CreatePrometheusAlertRuleResponse):void} cb
     * @public
     */
    CreatePrometheusAlertRule(req, cb) {
        let resp = new CreatePrometheusAlertRuleResponse();
        this.request("CreatePrometheusAlertRule", req, resp, cb);
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
     * This API is used to create a TKE Edge cluster.
     * @param {CreateTKEEdgeClusterRequest} req
     * @param {function(string, CreateTKEEdgeClusterResponse):void} cb
     * @public
     */
    CreateTKEEdgeCluster(req, cb) {
        let resp = new CreateTKEEdgeClusterResponse();
        this.request("CreateTKEEdgeCluster", req, resp, cb);
    }

    /**
     * This API is used to query the cluster resource usage.
     * @param {DescribeResourceUsageRequest} req
     * @param {function(string, DescribeResourceUsageResponse):void} cb
     * @public
     */
    DescribeResourceUsage(req, cb) {
        let resp = new DescribeResourceUsageResponse();
        this.request("DescribeResourceUsage", req, resp, cb);
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
     * This API is used to obtain the ECM instance information.
     * @param {DescribeECMInstancesRequest} req
     * @param {function(string, DescribeECMInstancesResponse):void} cb
     * @public
     */
    DescribeECMInstances(req, cb) {
        let resp = new DescribeECMInstancesResponse();
        this.request("DescribeECMInstances", req, resp, cb);
    }

    /**
     * This API is used to query cluster access addresses, including private network address, public network address, public network domain name, and security policy for public network access.
     * @param {DescribeClusterEndpointsRequest} req
     * @param {function(string, DescribeClusterEndpointsResponse):void} cb
     * @public
     */
    DescribeClusterEndpoints(req, cb) {
        let resp = new DescribeClusterEndpointsResponse();
        this.request("DescribeClusterEndpoints", req, resp, cb);
    }

    /**
     * This API is used to create CVM instances in the specified TKE edge cluster.
     * @param {CreateEdgeCVMInstancesRequest} req
     * @param {function(string, CreateEdgeCVMInstancesResponse):void} cb
     * @public
     */
    CreateEdgeCVMInstances(req, cb) {
        let resp = new CreateEdgeCVMInstancesResponse();
        this.request("CreateEdgeCVMInstances", req, resp, cb);
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

    /**
     * This API is used to modify the model of instances in a node pool.
     * @param {ModifyNodePoolInstanceTypesRequest} req
     * @param {function(string, ModifyNodePoolInstanceTypesResponse):void} cb
     * @public
     */
    ModifyNodePoolInstanceTypes(req, cb) {
        let resp = new ModifyNodePoolInstanceTypesResponse();
        this.request("ModifyNodePoolInstanceTypes", req, resp, cb);
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
     * This API is used to query the cluster model adjustment history.
     * @param {DescribeClusterLevelChangeRecordsRequest} req
     * @param {function(string, DescribeClusterLevelChangeRecordsResponse):void} cb
     * @public
     */
    DescribeClusterLevelChangeRecords(req, cb) {
        let resp = new DescribeClusterLevelChangeRecordsResponse();
        this.request("DescribeClusterLevelChangeRecords", req, resp, cb);
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
     * This API is used to modify cluster authentication configuration.
     * @param {ModifyClusterAuthenticationOptionsRequest} req
     * @param {function(string, ModifyClusterAuthenticationOptionsResponse):void} cb
     * @public
     */
    ModifyClusterAuthenticationOptions(req, cb) {
        let resp = new ModifyClusterAuthenticationOptionsResponse();
        this.request("ModifyClusterAuthenticationOptions", req, resp, cb);
    }

    /**
     * This API is used to delete a cluster access endpoint.
     * @param {DeleteClusterEndpointRequest} req
     * @param {function(string, DeleteClusterEndpointResponse):void} cb
     * @public
     */
    DeleteClusterEndpoint(req, cb) {
        let resp = new DeleteClusterEndpointResponse();
        this.request("DeleteClusterEndpoint", req, resp, cb);
    }

    /**
     * Obtaining the price of specified cluster model
     * @param {GetClusterLevelPriceRequest} req
     * @param {function(string, GetClusterLevelPriceResponse):void} cb
     * @public
     */
    GetClusterLevelPrice(req, cb) {
        let resp = new GetClusterLevelPriceResponse();
        this.request("GetClusterLevelPrice", req, resp, cb);
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
     * This API is used to query the TKE Edge cluster node information.
     * @param {DescribeEdgeClusterInstancesRequest} req
     * @param {function(string, DescribeEdgeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeEdgeClusterInstances(req, cb) {
        let resp = new DescribeEdgeClusterInstancesResponse();
        this.request("DescribeEdgeClusterInstances", req, resp, cb);
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
     * This API is used to install the log collection add-on on TKE Edge cluster nodes.
     * @param {InstallEdgeLogAgentRequest} req
     * @param {function(string, InstallEdgeLogAgentResponse):void} cb
     * @public
     */
    InstallEdgeLogAgent(req, cb) {
        let resp = new InstallEdgeLogAgentResponse();
        this.request("InstallEdgeLogAgent", req, resp, cb);
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
     * This API is used to create log collection configuration for a TKE Edge cluster.
     * @param {CreateEdgeLogConfigRequest} req
     * @param {function(string, CreateEdgeLogConfigResponse):void} cb
     * @public
     */
    CreateEdgeLogConfig(req, cb) {
        let resp = new CreateEdgeLogConfigResponse();
        this.request("CreateEdgeLogConfig", req, resp, cb);
    }

    /**
     * This API is used to query the task progress of enabling VPC-CNI mode.
     * @param {DescribeEnableVpcCniProgressRequest} req
     * @param {function(string, DescribeEnableVpcCniProgressResponse):void} cb
     * @public
     */
    DescribeEnableVpcCniProgress(req, cb) {
        let resp = new DescribeEnableVpcCniProgressResponse();
        this.request("DescribeEnableVpcCniProgress", req, resp, cb);
    }

    /**
     * This API is used to work with the add-ons of a TKE Edge cluster.
     * @param {ForwardTKEEdgeApplicationRequestV3Request} req
     * @param {function(string, ForwardTKEEdgeApplicationRequestV3Response):void} cb
     * @public
     */
    ForwardTKEEdgeApplicationRequestV3(req, cb) {
        let resp = new ForwardTKEEdgeApplicationRequestV3Response();
        this.request("ForwardTKEEdgeApplicationRequestV3", req, resp, cb);
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
     * This API is used to check if the CIDR block of a TKE Edge cluster conflicts with other CIDR blocks.
     * @param {CheckEdgeClusterCIDRRequest} req
     * @param {function(string, CheckEdgeClusterCIDRResponse):void} cb
     * @public
     */
    CheckEdgeClusterCIDR(req, cb) {
        let resp = new CheckEdgeClusterCIDRResponse();
        this.request("CheckEdgeClusterCIDR", req, resp, cb);
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


}
module.exports = TkeClient;
