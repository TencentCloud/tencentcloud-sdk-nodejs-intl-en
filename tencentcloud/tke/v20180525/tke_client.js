/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
const DescribeClusterSecurityRequest = models.DescribeClusterSecurityRequest;
const DescribeEdgeCVMInstancesRequest = models.DescribeEdgeCVMInstancesRequest;
const DescribeClusterEndpointVipStatusResponse = models.DescribeClusterEndpointVipStatusResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const AutoscalingAdded = models.AutoscalingAdded;
const CreateClusterRouteTableResponse = models.CreateClusterRouteTableResponse;
const UpdateAddonResponse = models.UpdateAddonResponse;
const ModifyClusterImageResponse = models.ModifyClusterImageResponse;
const DescribeAddonResponse = models.DescribeAddonResponse;
const ServiceAccountAuthenticationOptions = models.ServiceAccountAuthenticationOptions;
const Step = models.Step;
const SwitchInfo = models.SwitchInfo;
const CreateClusterNodePoolRequest = models.CreateClusterNodePoolRequest;
const Addon = models.Addon;
const DescribeEdgeClusterUpgradeInfoRequest = models.DescribeEdgeClusterUpgradeInfoRequest;
const RunInstancesForNode = models.RunInstancesForNode;
const DescribeExistedInstancesRequest = models.DescribeExistedInstancesRequest;
const ClusterLevelChangeRecord = models.ClusterLevelChangeRecord;
const ModifyPrometheusAlertRuleResponse = models.ModifyPrometheusAlertRuleResponse;
const RouteTableInfo = models.RouteTableInfo;
const EnableClusterDeletionProtectionResponse = models.EnableClusterDeletionProtectionResponse;
const ClusterAsGroup = models.ClusterAsGroup;
const CreateBackupStorageLocationResponse = models.CreateBackupStorageLocationResponse;
const ManuallyAdded = models.ManuallyAdded;
const Tag = models.Tag;
const ModifyClusterAttributeRequest = models.ModifyClusterAttributeRequest;
const DescribeClusterRoutesResponse = models.DescribeClusterRoutesResponse;
const DescribeClustersRequest = models.DescribeClustersRequest;
const UpgradeClusterInstancesRequest = models.UpgradeClusterInstancesRequest;
const ExtensionAddon = models.ExtensionAddon;
const DescribeAddonValuesRequest = models.DescribeAddonValuesRequest;
const DescribeResourceUsageRequest = models.DescribeResourceUsageRequest;
const Label = models.Label;
const PodLimitsByType = models.PodLimitsByType;
const CreateEdgeLogConfigRequest = models.CreateEdgeLogConfigRequest;
const DescribeTKEEdgeClusterStatusResponse = models.DescribeTKEEdgeClusterStatusResponse;
const DescribeClusterStatusRequest = models.DescribeClusterStatusRequest;
const CreateBackupStorageLocationRequest = models.CreateBackupStorageLocationRequest;
const DeleteClusterNodePoolRequest = models.DeleteClusterNodePoolRequest;
const CheckInstancesUpgradeAbleRequest = models.CheckInstancesUpgradeAbleRequest;
const DescribeEncryptionStatusRequest = models.DescribeEncryptionStatusRequest;
const DeleteClusterVirtualNodePoolRequest = models.DeleteClusterVirtualNodePoolRequest;
const InstallEdgeLogAgentRequest = models.InstallEdgeLogAgentRequest;
const DeleteAddonRequest = models.DeleteAddonRequest;
const DescribeEdgeAvailableExtraArgsRequest = models.DescribeEdgeAvailableExtraArgsRequest;
const ExistedInstance = models.ExistedInstance;
const AddNodeToNodePoolResponse = models.AddNodeToNodePoolResponse;
const CUDNN = models.CUDNN;
const ModifyClusterTagsResponse = models.ModifyClusterTagsResponse;
const DescribeEdgeAvailableExtraArgsResponse = models.DescribeEdgeAvailableExtraArgsResponse;
const DescribeEnableVpcCniProgressRequest = models.DescribeEnableVpcCniProgressRequest;
const Instance = models.Instance;
const DisableControlPlaneLogsRequest = models.DisableControlPlaneLogsRequest;
const RunAutomationServiceEnabled = models.RunAutomationServiceEnabled;
const CreateEksLogConfigRequest = models.CreateEksLogConfigRequest;
const DescribeClusterRouteTablesResponse = models.DescribeClusterRouteTablesResponse;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DeletePrometheusAlertRuleResponse = models.DeletePrometheusAlertRuleResponse;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const PodLimitsInstance = models.PodLimitsInstance;
const VirtualNodePool = models.VirtualNodePool;
const DescribeTKEEdgeClusterStatusRequest = models.DescribeTKEEdgeClusterStatusRequest;
const AcquireClusterAdminRoleResponse = models.AcquireClusterAdminRoleResponse;
const DescribeEdgeClusterInstancesResponse = models.DescribeEdgeClusterInstancesResponse;
const UpdateEdgeClusterVersionRequest = models.UpdateEdgeClusterVersionRequest;
const GetTkeAppChartListResponse = models.GetTkeAppChartListResponse;
const DescribeExternalNodeSupportConfigRequest = models.DescribeExternalNodeSupportConfigRequest;
const DeleteTKEEdgeClusterResponse = models.DeleteTKEEdgeClusterResponse;
const UpgradeAbleInstancesItem = models.UpgradeAbleInstancesItem;
const ModifyClusterImageRequest = models.ModifyClusterImageRequest;
const UpgradeClusterInstancesResponse = models.UpgradeClusterInstancesResponse;
const CustomDriver = models.CustomDriver;
const DescribeClusterAsGroupOptionRequest = models.DescribeClusterAsGroupOptionRequest;
const ModifyClusterAttributeResponse = models.ModifyClusterAttributeResponse;
const AddExistedInstancesRequest = models.AddExistedInstancesRequest;
const ClusterAsGroupOption = models.ClusterAsGroupOption;
const DescribeClusterNodePoolsRequest = models.DescribeClusterNodePoolsRequest;
const DescribeClusterRouteTablesRequest = models.DescribeClusterRouteTablesRequest;
const DeleteClusterRouteRequest = models.DeleteClusterRouteRequest;
const CreateCLSLogConfigResponse = models.CreateCLSLogConfigResponse;
const DeleteClusterEndpointRequest = models.DeleteClusterEndpointRequest;
const DeleteClusterVirtualNodeRequest = models.DeleteClusterVirtualNodeRequest;
const DescribeClusterNodePoolDetailRequest = models.DescribeClusterNodePoolDetailRequest;
const DescribeImagesRequest = models.DescribeImagesRequest;
const UninstallEdgeLogAgentResponse = models.UninstallEdgeLogAgentResponse;
const AddVpcCniSubnetsRequest = models.AddVpcCniSubnetsRequest;
const ExistedInstancesPara = models.ExistedInstancesPara;
const DescribeClusterAsGroupOptionResponse = models.DescribeClusterAsGroupOptionResponse;
const CreateTKEEdgeClusterResponse = models.CreateTKEEdgeClusterResponse;
const DescribeEdgeClusterExtraArgsResponse = models.DescribeEdgeClusterExtraArgsResponse;
const ResourceDeleteOption = models.ResourceDeleteOption;
const NodePoolOption = models.NodePoolOption;
const UpdateClusterVersionRequest = models.UpdateClusterVersionRequest;
const NodeCountSummary = models.NodeCountSummary;
const RemoveNodeFromNodePoolRequest = models.RemoveNodeFromNodePoolRequest;
const DescribeClusterNodePoolDetailResponse = models.DescribeClusterNodePoolDetailResponse;
const DeleteEdgeCVMInstancesResponse = models.DeleteEdgeCVMInstancesResponse;
const DescribeIPAMDRequest = models.DescribeIPAMDRequest;
const DescribeClusterKubeconfigResponse = models.DescribeClusterKubeconfigResponse;
const DescribeClusterCommonNamesRequest = models.DescribeClusterCommonNamesRequest;
const DescribeBatchModifyTagsStatusResponse = models.DescribeBatchModifyTagsStatusResponse;
const PrometheusNotification = models.PrometheusNotification;
const ClusterCondition = models.ClusterCondition;
const BackupStorageLocation = models.BackupStorageLocation;
const DeleteClusterRequest = models.DeleteClusterRequest;
const DescribeTKEEdgeClustersResponse = models.DescribeTKEEdgeClustersResponse;
const DescribeAvailableTKEEdgeVersionRequest = models.DescribeAvailableTKEEdgeVersionRequest;
const DeleteClusterAsGroupsRequest = models.DeleteClusterAsGroupsRequest;
const EnableVpcCniNetworkTypeResponse = models.EnableVpcCniNetworkTypeResponse;
const DescribeEdgeClusterInstancesRequest = models.DescribeEdgeClusterInstancesRequest;
const DeleteBackupStorageLocationResponse = models.DeleteBackupStorageLocationResponse;
const DescribeBatchModifyTagsStatusRequest = models.DescribeBatchModifyTagsStatusRequest;
const ResourceUsage = models.ResourceUsage;
const CreateClusterVirtualNodeRequest = models.CreateClusterVirtualNodeRequest;
const DescribeTKEEdgeClustersRequest = models.DescribeTKEEdgeClustersRequest;
const SetNodePoolNodeProtectionResponse = models.SetNodePoolNodeProtectionResponse;
const RouteTableConflict = models.RouteTableConflict;
const DeleteClusterInstancesRequest = models.DeleteClusterInstancesRequest;
const UpgradeNodeResetParam = models.UpgradeNodeResetParam;
const DriverVersion = models.DriverVersion;
const CreateClusterInstancesRequest = models.CreateClusterInstancesRequest;
const DeleteBackupStorageLocationRequest = models.DeleteBackupStorageLocationRequest;
const ClusterCIDRSettings = models.ClusterCIDRSettings;
const Taint = models.Taint;
const ReservedInstanceUtilizationRate = models.ReservedInstanceUtilizationRate;
const ModifyNodePoolInstanceTypesRequest = models.ModifyNodePoolInstanceTypesRequest;
const CreateClusterRequest = models.CreateClusterRequest;
const CreateEdgeCVMInstancesRequest = models.CreateEdgeCVMInstancesRequest;
const DescribeEdgeClusterExtraArgsRequest = models.DescribeEdgeClusterExtraArgsRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const DeleteClusterVirtualNodeResponse = models.DeleteClusterVirtualNodeResponse;
const CreateEdgeCVMInstancesResponse = models.CreateEdgeCVMInstancesResponse;
const DescribeEdgeLogSwitchesResponse = models.DescribeEdgeLogSwitchesResponse;
const ModifyNodePoolInstanceTypesResponse = models.ModifyNodePoolInstanceTypesResponse;
const GetClusterLevelPriceResponse = models.GetClusterLevelPriceResponse;
const DescribeResourceUsageResponse = models.DescribeResourceUsageResponse;
const EdgeClusterInternalLB = models.EdgeClusterInternalLB;
const DescribeAvailableClusterVersionRequest = models.DescribeAvailableClusterVersionRequest;
const DisableControlPlaneLogsResponse = models.DisableControlPlaneLogsResponse;
const DeleteClusterAsGroupsResponse = models.DeleteClusterAsGroupsResponse;
const ModifyClusterRuntimeConfigRequest = models.ModifyClusterRuntimeConfigRequest;
const RegionInstance = models.RegionInstance;
const DescribeEdgeLogSwitchesRequest = models.DescribeEdgeLogSwitchesRequest;
const EdgeClusterAdvancedSettings = models.EdgeClusterAdvancedSettings;
const DescribeExternalNodeSupportConfigResponse = models.DescribeExternalNodeSupportConfigResponse;
const EnableEncryptionProtectionResponse = models.EnableEncryptionProtectionResponse;
const Cluster = models.Cluster;
const DescribeClusterEndpointStatusResponse = models.DescribeClusterEndpointStatusResponse;
const AddExistedInstancesResponse = models.AddExistedInstancesResponse;
const DisableClusterDeletionProtectionResponse = models.DisableClusterDeletionProtectionResponse;
const EnableVpcCniNetworkTypeRequest = models.EnableVpcCniNetworkTypeRequest;
const CreateClusterEndpointRequest = models.CreateClusterEndpointRequest;
const DescribePrometheusInstanceResponse = models.DescribePrometheusInstanceResponse;
const DescribeTKEEdgeExternalKubeconfigResponse = models.DescribeTKEEdgeExternalKubeconfigResponse;
const CreateClusterInstancesResponse = models.CreateClusterInstancesResponse;
const DescribeLogSwitchesResponse = models.DescribeLogSwitchesResponse;
const ModifyClusterVirtualNodePoolResponse = models.ModifyClusterVirtualNodePoolResponse;
const InstanceUpgradeClusterStatus = models.InstanceUpgradeClusterStatus;
const DescribeClusterRoutesRequest = models.DescribeClusterRoutesRequest;
const DeleteECMInstancesRequest = models.DeleteECMInstancesRequest;
const ClusterLevelAttribute = models.ClusterLevelAttribute;
const PodChargeInfo = models.PodChargeInfo;
const RemoveNodeFromNodePoolResponse = models.RemoveNodeFromNodePoolResponse;
const SetNodePoolNodeProtectionRequest = models.SetNodePoolNodeProtectionRequest;
const CreateClusterRouteTableRequest = models.CreateClusterRouteTableRequest;
const DescribeClusterEndpointsResponse = models.DescribeClusterEndpointsResponse;
const EdgeCluster = models.EdgeCluster;
const DescribeEncryptionStatusResponse = models.DescribeEncryptionStatusResponse;
const DescribeClusterLevelChangeRecordsRequest = models.DescribeClusterLevelChangeRecordsRequest;
const UpdateClusterVersionResponse = models.UpdateClusterVersionResponse;
const InstanceUpgradePreCheckResultItem = models.InstanceUpgradePreCheckResultItem;
const DeleteClusterNodePoolResponse = models.DeleteClusterNodePoolResponse;
const DeleteClusterRouteResponse = models.DeleteClusterRouteResponse;
const CreateClusterNodePoolResponse = models.CreateClusterNodePoolResponse;
const Filter = models.Filter;
const KMSConfiguration = models.KMSConfiguration;
const InstanceUpgradePreCheckResult = models.InstanceUpgradePreCheckResult;
const ModifyPrometheusAlertRuleRequest = models.ModifyPrometheusAlertRuleRequest;
const DescribeClusterSecurityResponse = models.DescribeClusterSecurityResponse;
const RouteInfo = models.RouteInfo;
const DescribeClusterAuthenticationOptionsRequest = models.DescribeClusterAuthenticationOptionsRequest;
const DescribeReservedInstanceUtilizationRateResponse = models.DescribeReservedInstanceUtilizationRateResponse;
const ModifyClusterEndpointSPRequest = models.ModifyClusterEndpointSPRequest;
const DeleteClusterEndpointResponse = models.DeleteClusterEndpointResponse;
const ClusterVersion = models.ClusterVersion;
const InstanceUpgradeProgressItem = models.InstanceUpgradeProgressItem;
const DescribeClusterVirtualNodePoolsRequest = models.DescribeClusterVirtualNodePoolsRequest;
const DescribeTKEEdgeExternalKubeconfigRequest = models.DescribeTKEEdgeExternalKubeconfigRequest;
const DescribeSupportedRuntimeRequest = models.DescribeSupportedRuntimeRequest;
const DescribeClusterVirtualNodeRequest = models.DescribeClusterVirtualNodeRequest;
const AddNodeToNodePoolRequest = models.AddNodeToNodePoolRequest;
const NodePool = models.NodePool;
const VirtualNode = models.VirtualNode;
const DescribePodChargeInfoRequest = models.DescribePodChargeInfoRequest;
const ForwardTKEEdgeApplicationRequestV3Response = models.ForwardTKEEdgeApplicationRequestV3Response;
const CreateClusterVirtualNodePoolRequest = models.CreateClusterVirtualNodePoolRequest;
const AutoScalingGroupRange = models.AutoScalingGroupRange;
const VirtualNodeSpec = models.VirtualNodeSpec;
const CreateEksLogConfigResponse = models.CreateEksLogConfigResponse;
const DescribeControlPlaneLogsRequest = models.DescribeControlPlaneLogsRequest;
const DescribeReservedInstanceUtilizationRateRequest = models.DescribeReservedInstanceUtilizationRateRequest;
const VersionInstance = models.VersionInstance;
const DescribeIPAMDResponse = models.DescribeIPAMDResponse;
const CreateCLSLogConfigRequest = models.CreateCLSLogConfigRequest;
const CreateClusterVirtualNodeResponse = models.CreateClusterVirtualNodeResponse;
const DescribeRouteTableConflictsResponse = models.DescribeRouteTableConflictsResponse;
const EnableClusterDeletionProtectionRequest = models.EnableClusterDeletionProtectionRequest;
const DrainClusterVirtualNodeRequest = models.DrainClusterVirtualNodeRequest;
const DescribeClusterLevelAttributeRequest = models.DescribeClusterLevelAttributeRequest;
const DisableClusterDeletionProtectionRequest = models.DisableClusterDeletionProtectionRequest;
const DescribeAvailableTKEEdgeVersionResponse = models.DescribeAvailableTKEEdgeVersionResponse;
const ClusterCredential = models.ClusterCredential;
const DataDisk = models.DataDisk;
const GetUpgradeInstanceProgressResponse = models.GetUpgradeInstanceProgressResponse;
const DescribeExistedInstancesResponse = models.DescribeExistedInstancesResponse;
const CreatePrometheusAlertRuleResponse = models.CreatePrometheusAlertRuleResponse;
const ECMEnhancedService = models.ECMEnhancedService;
const ModifyClusterAuthenticationOptionsResponse = models.ModifyClusterAuthenticationOptionsResponse;
const EdgeClusterPublicLB = models.EdgeClusterPublicLB;
const EnableEncryptionProtectionRequest = models.EnableEncryptionProtectionRequest;
const EnhancedService = models.EnhancedService;
const DescribeClusterNodePoolsResponse = models.DescribeClusterNodePoolsResponse;
const TagSpecification = models.TagSpecification;
const DeleteEdgeClusterInstancesResponse = models.DeleteEdgeClusterInstancesResponse;
const DeleteTKEEdgeClusterRequest = models.DeleteTKEEdgeClusterRequest;
const DescribeClusterAuthenticationOptionsResponse = models.DescribeClusterAuthenticationOptionsResponse;
const ComponentLogConfig = models.ComponentLogConfig;
const OIDCConfigAuthenticationOptions = models.OIDCConfigAuthenticationOptions;
const DescribeClusterLevelAttributeResponse = models.DescribeClusterLevelAttributeResponse;
const PrometheusGrafanaInfo = models.PrometheusGrafanaInfo;
const Switch = models.Switch;
const ImageInstance = models.ImageInstance;
const GetTkeAppChartListRequest = models.GetTkeAppChartListRequest;
const ResourceUsageDetail = models.ResourceUsageDetail;
const DescribeClusterVirtualNodePoolsResponse = models.DescribeClusterVirtualNodePoolsResponse;
const CheckEdgeClusterCIDRResponse = models.CheckEdgeClusterCIDRResponse;
const EdgeArgsFlag = models.EdgeArgsFlag;
const CheckInstancesUpgradeAbleResponse = models.CheckInstancesUpgradeAbleResponse;
const DeleteClusterRouteTableResponse = models.DeleteClusterRouteTableResponse;
const DescribeAddonValuesResponse = models.DescribeAddonValuesResponse;
const ModifyClusterAsGroupOptionAttributeResponse = models.ModifyClusterAsGroupOptionAttributeResponse;
const ModifyClusterAsGroupOptionAttributeRequest = models.ModifyClusterAsGroupOptionAttributeRequest;
const CheckEdgeClusterCIDRRequest = models.CheckEdgeClusterCIDRRequest;
const DescribeClusterAsGroupsRequest = models.DescribeClusterAsGroupsRequest;
const ECMRunMonitorServiceEnabled = models.ECMRunMonitorServiceEnabled;
const ModifyClusterEndpointSPResponse = models.ModifyClusterEndpointSPResponse;
const ECMRunSecurityServiceEnabled = models.ECMRunSecurityServiceEnabled;
const DescribeClusterExtraArgsResponse = models.DescribeClusterExtraArgsResponse;
const ClusterAsGroupAttribute = models.ClusterAsGroupAttribute;
const ForwardTKEEdgeApplicationRequestV3Request = models.ForwardTKEEdgeApplicationRequestV3Request;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const DescribeTKEEdgeClusterCredentialResponse = models.DescribeTKEEdgeClusterCredentialResponse;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const UpdateEdgeClusterVersionResponse = models.UpdateEdgeClusterVersionResponse;
const ModifyClusterAsGroupAttributeRequest = models.ModifyClusterAsGroupAttributeRequest;
const DescribeClusterExtraArgsRequest = models.DescribeClusterExtraArgsRequest;
const DisableEncryptionProtectionRequest = models.DisableEncryptionProtectionRequest;
const DescribeClusterAsGroupsResponse = models.DescribeClusterAsGroupsResponse;
const DescribeLogSwitchesRequest = models.DescribeLogSwitchesRequest;
const DeleteClusterInstancesResponse = models.DeleteClusterInstancesResponse;
const PrometheusAlertRuleDetail = models.PrometheusAlertRuleDetail;
const DescribeLogConfigsResponse = models.DescribeLogConfigsResponse;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const CreatePrometheusAlertRuleRequest = models.CreatePrometheusAlertRuleRequest;
const CreateTKEEdgeClusterRequest = models.CreateTKEEdgeClusterRequest;
const DescribeSupportedRuntimeResponse = models.DescribeSupportedRuntimeResponse;
const DescribePodChargeInfoResponse = models.DescribePodChargeInfoResponse;
const CreateClusterVirtualNodePoolResponse = models.CreateClusterVirtualNodePoolResponse;
const CreateEdgeLogConfigResponse = models.CreateEdgeLogConfigResponse;
const InstallEdgeLogAgentResponse = models.InstallEdgeLogAgentResponse;
const EdgeAvailableExtraArgs = models.EdgeAvailableExtraArgs;
const IPAddress = models.IPAddress;
const DescribeTKEEdgeClusterCredentialRequest = models.DescribeTKEEdgeClusterCredentialRequest;
const DescribeLogConfigsRequest = models.DescribeLogConfigsRequest;
const AutoUpgradeClusterLevel = models.AutoUpgradeClusterLevel;
const DisableEncryptionProtectionResponse = models.DisableEncryptionProtectionResponse;
const CommonName = models.CommonName;
const UpdateAddonRequest = models.UpdateAddonRequest;
const ModifyClusterVirtualNodePoolRequest = models.ModifyClusterVirtualNodePoolRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeECMInstancesRequest = models.DescribeECMInstancesRequest;
const DrainClusterVirtualNodeResponse = models.DrainClusterVirtualNodeResponse;
const DescribeVpcCniPodLimitsResponse = models.DescribeVpcCniPodLimitsResponse;
const DescribeVersionsResponse = models.DescribeVersionsResponse;
const DeleteEdgeClusterInstancesRequest = models.DeleteEdgeClusterInstancesRequest;
const OptionalRuntimes = models.OptionalRuntimes;
const ClusterNetworkSettings = models.ClusterNetworkSettings;
const DescribeImagesResponse = models.DescribeImagesResponse;
const UninstallEdgeLogAgentRequest = models.UninstallEdgeLogAgentRequest;
const ClusterExtraArgs = models.ClusterExtraArgs;
const AnnotationValue = models.AnnotationValue;
const CreateClusterEndpointVipResponse = models.CreateClusterEndpointVipResponse;
const TaskStepInfo = models.TaskStepInfo;
const ECMZoneInstanceCountISP = models.ECMZoneInstanceCountISP;
const NodePoolRuntime = models.NodePoolRuntime;
const DeleteClusterEndpointVipResponse = models.DeleteClusterEndpointVipResponse;
const ClusterBasicSettings = models.ClusterBasicSettings;
const InstanceDataDiskMountSetting = models.InstanceDataDiskMountSetting;
const ModifyClusterAsGroupAttributeResponse = models.ModifyClusterAsGroupAttributeResponse;
const DescribeTKEEdgeScriptResponse = models.DescribeTKEEdgeScriptResponse;
const CreateClusterResponse = models.CreateClusterResponse;
const DeleteLogConfigsRequest = models.DeleteLogConfigsRequest;
const ModifyClusterTagsRequest = models.ModifyClusterTagsRequest;
const DescribeClusterKubeconfigRequest = models.DescribeClusterKubeconfigRequest;
const CreateClusterEndpointVipRequest = models.CreateClusterEndpointVipRequest;
const UpdateClusterKubeconfigRequest = models.UpdateClusterKubeconfigRequest;
const CreateECMInstancesResponse = models.CreateECMInstancesResponse;
const FailedResource = models.FailedResource;
const UnavailableReason = models.UnavailableReason;
const GetUpgradeInstanceProgressRequest = models.GetUpgradeInstanceProgressRequest;
const DescribeControlPlaneLogsResponse = models.DescribeControlPlaneLogsResponse;
const DescribeEdgeCVMInstancesResponse = models.DescribeEdgeCVMInstancesResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const EnableControlPlaneLogsRequest = models.EnableControlPlaneLogsRequest;
const DeleteECMInstancesResponse = models.DeleteECMInstancesResponse;
const DescribeEdgeClusterUpgradeInfoResponse = models.DescribeEdgeClusterUpgradeInfoResponse;
const ModifyClusterNodePoolResponse = models.ModifyClusterNodePoolResponse;
const DeleteClusterVirtualNodePoolResponse = models.DeleteClusterVirtualNodePoolResponse;
const LoginSettings = models.LoginSettings;
const DescribeClusterEndpointStatusRequest = models.DescribeClusterEndpointStatusRequest;
const DescribeClusterStatusResponse = models.DescribeClusterStatusResponse;
const DescribeVersionsRequest = models.DescribeVersionsRequest;
const DeleteAddonResponse = models.DeleteAddonResponse;
const DeleteClusterRouteTableRequest = models.DeleteClusterRouteTableRequest;
const DescribeClusterEndpointsRequest = models.DescribeClusterEndpointsRequest;
const InstanceExtraArgs = models.InstanceExtraArgs;
const PrometheusAlertRule = models.PrometheusAlertRule;
const AcquireClusterAdminRoleRequest = models.AcquireClusterAdminRoleRequest;
const CreateECMInstancesRequest = models.CreateECMInstancesRequest;
const DescribeECMInstancesResponse = models.DescribeECMInstancesResponse;
const DescribePrometheusInstanceRequest = models.DescribePrometheusInstanceRequest;
const DeletePrometheusAlertRuleRequest = models.DeletePrometheusAlertRuleRequest;
const ClusterProperty = models.ClusterProperty;
const EdgeClusterExtraArgs = models.EdgeClusterExtraArgs;
const DescribeEnableVpcCniProgressResponse = models.DescribeEnableVpcCniProgressResponse;
const AppChart = models.AppChart;
const DeleteEdgeCVMInstancesRequest = models.DeleteEdgeCVMInstancesRequest;
const ModifyClusterNodePoolRequest = models.ModifyClusterNodePoolRequest;
const GetClusterLevelPriceRequest = models.GetClusterLevelPriceRequest;
const CreateClusterEndpointResponse = models.CreateClusterEndpointResponse;
const ClusterAdvancedSettings = models.ClusterAdvancedSettings;
const UpdateClusterKubeconfigResponse = models.UpdateClusterKubeconfigResponse;
const RuntimeConfig = models.RuntimeConfig;
const ModifyClusterAuthenticationOptionsRequest = models.ModifyClusterAuthenticationOptionsRequest;
const DeleteClusterEndpointVipRequest = models.DeleteClusterEndpointVipRequest;
const DescribeClusterLevelChangeRecordsResponse = models.DescribeClusterLevelChangeRecordsResponse;
const ClusterStatus = models.ClusterStatus;
const DescribeVpcCniPodLimitsRequest = models.DescribeVpcCniPodLimitsRequest;
const ModifyClusterRuntimeConfigResponse = models.ModifyClusterRuntimeConfigResponse;
const DescribeTKEEdgeScriptRequest = models.DescribeTKEEdgeScriptRequest;
const AddVpcCniSubnetsResponse = models.AddVpcCniSubnetsResponse;
const ExistedInstancesForNode = models.ExistedInstancesForNode;
const EnableControlPlaneLogsResponse = models.EnableControlPlaneLogsResponse;
const DescribeClusterVirtualNodeResponse = models.DescribeClusterVirtualNodeResponse;
const DescribeAvailableClusterVersionResponse = models.DescribeAvailableClusterVersionResponse;
const DescribeRouteTableConflictsRequest = models.DescribeRouteTableConflictsRequest;
const DescribeClusterCommonNamesResponse = models.DescribeClusterCommonNamesResponse;
const DescribeAddonRequest = models.DescribeAddonRequest;
const GPUArgs = models.GPUArgs;
const InstallAddonResponse = models.InstallAddonResponse;
const DeleteLogConfigsResponse = models.DeleteLogConfigsResponse;
const DescribeBackupStorageLocationsResponse = models.DescribeBackupStorageLocationsResponse;
const InstallAddonRequest = models.InstallAddonRequest;
const DescribeBackupStorageLocationsRequest = models.DescribeBackupStorageLocationsRequest;


/**
 * tke client
 * @class
 */
class TkeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tke.intl.tencentcloudapi.com", "2018-05-25", credential, region, profile);
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
     * This API is used to view the Super Node list.
     * @param {DescribeClusterVirtualNodeRequest} req
     * @param {function(string, DescribeClusterVirtualNodeResponse):void} cb
     * @public
     */
    DescribeClusterVirtualNode(req, cb) {
        let resp = new DescribeClusterVirtualNodeResponse();
        this.request("DescribeClusterVirtualNode", req, resp, cb);
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
     * This API is used to retrieve optional runtime versions based on K8S version.
     * @param {DescribeSupportedRuntimeRequest} req
     * @param {function(string, DescribeSupportedRuntimeResponse):void} cb
     * @public
     */
    DescribeSupportedRuntime(req, cb) {
        let resp = new DescribeSupportedRuntimeResponse();
        this.request("DescribeSupportedRuntime", req, resp, cb);
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
     * This API is used to create the Super Node Pool.
     * @param {CreateClusterVirtualNodePoolRequest} req
     * @param {function(string, CreateClusterVirtualNodePoolResponse):void} cb
     * @public
     */
    CreateClusterVirtualNodePool(req, cb) {
        let resp = new CreateClusterVirtualNodePoolResponse();
        this.request("CreateClusterVirtualNodePool", req, resp, cb);
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
     * This API is used to view third-party node pool configuration information.
     * @param {DescribeExternalNodeSupportConfigRequest} req
     * @param {function(string, DescribeExternalNodeSupportConfigResponse):void} cb
     * @public
     */
    DescribeExternalNodeSupportConfig(req, cb) {
        let resp = new DescribeExternalNodeSupportConfigResponse();
        this.request("DescribeExternalNodeSupportConfig", req, resp, cb);
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
     * This API is used to modify an alert rule.
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
     * This API is used to modify the latitude runtime configuration of clusters and node pools.
     * @param {ModifyClusterRuntimeConfigRequest} req
     * @param {function(string, ModifyClusterRuntimeConfigResponse):void} cb
     * @public
     */
    ModifyClusterRuntimeConfig(req, cb) {
        let resp = new ModifyClusterRuntimeConfigResponse();
        this.request("ModifyClusterRuntimeConfig", req, resp, cb);
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
     * This API is used to obtain eniipamd component information.
     * @param {DescribeIPAMDRequest} req
     * @param {function(string, DescribeIPAMDResponse):void} cb
     * @public
     */
    DescribeIPAMD(req, cb) {
        let resp = new DescribeIPAMDResponse();
        this.request("DescribeIPAMD", req, resp, cb);
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
     * This API is used to obtain the current progress of node upgrade. If the cluster is not in node upgrade status, the API will report an error: Task not found.
     * @param {GetUpgradeInstanceProgressRequest} req
     * @param {function(string, GetUpgradeInstanceProgressResponse):void} cb
     * @public
     */
    GetUpgradeInstanceProgress(req, cb) {
        let resp = new GetUpgradeInstanceProgressResponse();
        this.request("GetUpgradeInstanceProgress", req, resp, cb);
    }

    /**
     * This API is used to delete the super node.
     * @param {DeleteClusterVirtualNodeRequest} req
     * @param {function(string, DeleteClusterVirtualNodeResponse):void} cb
     * @public
     */
    DeleteClusterVirtualNode(req, cb) {
        let resp = new DeleteClusterVirtualNodeResponse();
        this.request("DeleteClusterVirtualNode", req, resp, cb);
    }

    /**
     * This API is used to delete a backup repository.
     * @param {DeleteBackupStorageLocationRequest} req
     * @param {function(string, DeleteBackupStorageLocationResponse):void} cb
     * @public
     */
    DeleteBackupStorageLocation(req, cb) {
        let resp = new DeleteBackupStorageLocationResponse();
        this.request("DeleteBackupStorageLocation", req, resp, cb);
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
     * This API is used to query the billing information of running Pods. You can query a specific Pod by Namespace and Name or batch query by Pod Uid.
     * @param {DescribePodChargeInfoRequest} req
     * @param {function(string, DescribePodChargeInfoResponse):void} cb
     * @public
     */
    DescribePodChargeInfo(req, cb) {
        let resp = new DescribePodChargeInfoResponse();
        this.request("DescribePodChargeInfo", req, resp, cb);
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
     * This API is used to create a backup repository. You can specify the storage type (such as COS), the bucket region and the name. Up to 100 repositories can be created. Note that the settings of this API apply globally. You only need to create one backup repository, and back up TKE clusters in different regions in it.
     * @param {CreateBackupStorageLocationRequest} req
     * @param {function(string, CreateBackupStorageLocationResponse):void} cb
     * @public
     */
    CreateBackupStorageLocation(req, cb) {
        let resp = new CreateBackupStorageLocationResponse();
        this.request("CreateBackupStorageLocation", req, resp, cb);
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
     * This API is used to upgrade an edge cluster component to a TKE Edge version.
     * @param {UpdateEdgeClusterVersionRequest} req
     * @param {function(string, UpdateEdgeClusterVersionResponse):void} cb
     * @public
     */
    UpdateEdgeClusterVersion(req, cb) {
        let resp = new UpdateEdgeClusterVersionResponse();
        this.request("UpdateEdgeClusterVersion", req, resp, cb);
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
     * This API is used to modify cluster tags.
     * @param {ModifyClusterTagsRequest} req
     * @param {function(string, ModifyClusterTagsResponse):void} cb
     * @public
     */
    ModifyClusterTags(req, cb) {
        let resp = new ModifyClusterTagsResponse();
        this.request("ModifyClusterTags", req, resp, cb);
    }

    /**
     * This API is used to create log collection configuration.
     * @param {CreateCLSLogConfigRequest} req
     * @param {function(string, CreateCLSLogConfigResponse):void} cb
     * @public
     */
    CreateCLSLogConfig(req, cb) {
        let resp = new CreateCLSLogConfigResponse();
        this.request("CreateCLSLogConfig", req, resp, cb);
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
     * This API is used to modify the Super Node Pool.
     * @param {ModifyClusterVirtualNodePoolRequest} req
     * @param {function(string, ModifyClusterVirtualNodePoolResponse):void} cb
     * @public
     */
    ModifyClusterVirtualNodePool(req, cb) {
        let resp = new ModifyClusterVirtualNodePoolResponse();
        this.request("ModifyClusterVirtualNodePool", req, resp, cb);
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
     * This API is used to update parameters and version of an add-on.
     * @param {UpdateAddonRequest} req
     * @param {function(string, UpdateAddonResponse):void} cb
     * @public
     */
    UpdateAddon(req, cb) {
        let resp = new UpdateAddonResponse();
        this.request("UpdateAddon", req, resp, cb);
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
     * This API is used to install an add-on on the target cluster.
     * @param {InstallAddonRequest} req
     * @param {function(string, InstallAddonResponse):void} cb
     * @public
     */
    InstallAddon(req, cb) {
        let resp = new InstallAddonResponse();
        this.request("InstallAddon", req, resp, cb);
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
     * This API is used to view the Super Node Pool list.
     * @param {DescribeClusterVirtualNodePoolsRequest} req
     * @param {function(string, DescribeClusterVirtualNodePoolsResponse):void} cb
     * @public
     */
    DescribeClusterVirtualNodePools(req, cb) {
        let resp = new DescribeClusterVirtualNodePoolsResponse();
        this.request("DescribeClusterVirtualNodePools", req, resp, cb);
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
     * This API is used to delete the log collection configuration of a plugin.
     * @param {DisableControlPlaneLogsRequest} req
     * @param {function(string, DisableControlPlaneLogsResponse):void} cb
     * @public
     */
    DisableControlPlaneLogs(req, cb) {
        let resp = new DisableControlPlaneLogsResponse();
        this.request("DisableControlPlaneLogs", req, resp, cb);
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
     * This API is used to upgrade work nodes in a cluster.
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
     * This API is used to query the status of event storage, cluster auditing and logging.
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
     * This API is used to query batch modification Tag status.
     * @param {DescribeBatchModifyTagsStatusRequest} req
     * @param {function(string, DescribeBatchModifyTagsStatusResponse):void} cb
     * @public
     */
    DescribeBatchModifyTagsStatus(req, cb) {
        let resp = new DescribeBatchModifyTagsStatusResponse();
        this.request("DescribeBatchModifyTagsStatus", req, resp, cb);
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
     * This API is used to query the usage rate of various types of Reserved Coupons.
     * @param {DescribeReservedInstanceUtilizationRateRequest} req
     * @param {function(string, DescribeReservedInstanceUtilizationRateResponse):void} cb
     * @public
     */
    DescribeReservedInstanceUtilizationRate(req, cb) {
        let resp = new DescribeReservedInstanceUtilizationRateResponse();
        this.request("DescribeReservedInstanceUtilizationRate", req, resp, cb);
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
     * This API is used to query Cluster Log (Auditing, Event, Common Log) Switch List.
     * @param {DescribeLogSwitchesRequest} req
     * @param {function(string, DescribeLogSwitchesResponse):void} cb
     * @public
     */
    DescribeLogSwitches(req, cb) {
        let resp = new DescribeLogSwitchesResponse();
        this.request("DescribeLogSwitches", req, resp, cb);
    }

    /**
     * This API is used to query information of node instances in a cluster.
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        let resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
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
     * This API is used to query parameters of an add-on.
     * @param {DescribeAddonValuesRequest} req
     * @param {function(string, DescribeAddonValuesResponse):void} cb
     * @public
     */
    DescribeAddonValues(req, cb) {
        let resp = new DescribeAddonValuesResponse();
        this.request("DescribeAddonValues", req, resp, cb);
    }

    /**
     * This API is used to delete the Super Node Pool.
     * @param {DeleteClusterVirtualNodePoolRequest} req
     * @param {function(string, DeleteClusterVirtualNodePoolResponse):void} cb
     * @public
     */
    DeleteClusterVirtualNodePool(req, cb) {
        let resp = new DeleteClusterVirtualNodePoolResponse();
        this.request("DeleteClusterVirtualNodePool", req, resp, cb);
    }

    /**
     * This API is used to disable encryption protection.
     * @param {DisableEncryptionProtectionRequest} req
     * @param {function(string, DisableEncryptionProtectionResponse):void} cb
     * @public
     */
    DisableEncryptionProtection(req, cb) {
        let resp = new DisableEncryptionProtectionResponse();
        this.request("DisableEncryptionProtection", req, resp, cb);
    }

    /**
     * This API is used to delete an add-on.
     * @param {DeleteAddonRequest} req
     * @param {function(string, DeleteAddonResponse):void} cb
     * @public
     */
    DeleteAddon(req, cb) {
        let resp = new DeleteAddonResponse();
        this.request("DeleteAddon", req, resp, cb);
    }

    /**
     * This API is used to create Log Collection Configuration for Elastic Cluster.
     * @param {CreateEksLogConfigRequest} req
     * @param {function(string, CreateEksLogConfigResponse):void} cb
     * @public
     */
    CreateEksLogConfig(req, cb) {
        let resp = new CreateEksLogConfigResponse();
        this.request("CreateEksLogConfig", req, resp, cb);
    }

    /**
     * This API is used to evict the Super Node.
     * @param {DrainClusterVirtualNodeRequest} req
     * @param {function(string, DrainClusterVirtualNodeResponse):void} cb
     * @public
     */
    DrainClusterVirtualNode(req, cb) {
        let resp = new DrainClusterVirtualNodeResponse();
        this.request("DrainClusterVirtualNode", req, resp, cb);
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
     * This API is used to query custom parameters of a cluster.
     * @param {DescribeClusterExtraArgsRequest} req
     * @param {function(string, DescribeClusterExtraArgsResponse):void} cb
     * @public
     */
    DescribeClusterExtraArgs(req, cb) {
        let resp = new DescribeClusterExtraArgsResponse();
        this.request("DescribeClusterExtraArgs", req, resp, cb);
    }

    /**
     * This API is used to update the Kubeconfig information of a cluster.
     * @param {UpdateClusterKubeconfigRequest} req
     * @param {function(string, UpdateClusterKubeconfigResponse):void} cb
     * @public
     */
    UpdateClusterKubeconfig(req, cb) {
        let resp = new UpdateClusterKubeconfigResponse();
        this.request("UpdateClusterKubeconfig", req, resp, cb);
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
     * This API is used to modify the cluster image.
     * @param {ModifyClusterImageRequest} req
     * @param {function(string, ModifyClusterImageResponse):void} cb
     * @public
     */
    ModifyClusterImage(req, cb) {
        let resp = new ModifyClusterImageResponse();
        this.request("ModifyClusterImage", req, resp, cb);
    }

    /**
     * This API is used to query the log collection rules.
     * @param {DescribeLogConfigsRequest} req
     * @param {function(string, DescribeLogConfigsResponse):void} cb
     * @public
     */
    DescribeLogConfigs(req, cb) {
        let resp = new DescribeLogConfigsResponse();
        this.request("DescribeLogConfigs", req, resp, cb);
    }

    /**
     * This API is used to enable Encrypted Data Protection, which requires enabling KMS capability and completing KMS authorization.
     * @param {EnableEncryptionProtectionRequest} req
     * @param {function(string, EnableEncryptionProtectionResponse):void} cb
     * @public
     */
    EnableEncryptionProtection(req, cb) {
        let resp = new EnableEncryptionProtectionResponse();
        this.request("EnableEncryptionProtection", req, resp, cb);
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
     * This API is used to query the encryption status of etcd data.
     * @param {DescribeEncryptionStatusRequest} req
     * @param {function(string, DescribeEncryptionStatusResponse):void} cb
     * @public
     */
    DescribeEncryptionStatus(req, cb) {
        let resp = new DescribeEncryptionStatusResponse();
        this.request("DescribeEncryptionStatus", req, resp, cb);
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
     * This API is used to query backup repositories.
     * @param {DescribeBackupStorageLocationsRequest} req
     * @param {function(string, DescribeBackupStorageLocationsResponse):void} cb
     * @public
     */
    DescribeBackupStorageLocations(req, cb) {
        let resp = new DescribeBackupStorageLocationsResponse();
        this.request("DescribeBackupStorageLocations", req, resp, cb);
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
     * This API is used to create log collection settings for plugins.
     * @param {EnableControlPlaneLogsRequest} req
     * @param {function(string, EnableControlPlaneLogsResponse):void} cb
     * @public
     */
    EnableControlPlaneLogs(req, cb) {
        let resp = new EnableControlPlaneLogsResponse();
        this.request("EnableControlPlaneLogs", req, resp, cb);
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
     * This API is used to query nodes eligible for an upgrade in the given node list.
     * @param {CheckInstancesUpgradeAbleRequest} req
     * @param {function(string, CheckInstancesUpgradeAbleResponse):void} cb
     * @public
     */
    CheckInstancesUpgradeAble(req, cb) {
        let resp = new CheckInstancesUpgradeAbleResponse();
        this.request("CheckInstancesUpgradeAble", req, resp, cb);
    }

    /**
     * This API is used to query plug-in log collection settings.
     * @param {DescribeControlPlaneLogsRequest} req
     * @param {function(string, DescribeControlPlaneLogsResponse):void} cb
     * @public
     */
    DescribeControlPlaneLogs(req, cb) {
        let resp = new DescribeControlPlaneLogsResponse();
        this.request("DescribeControlPlaneLogs", req, resp, cb);
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
     * This API is used to query the upgrade information of an edge cluster, including the upgradeable components, the current upgrade status, and errors occur during the upgrade.
     * @param {DescribeEdgeClusterUpgradeInfoRequest} req
     * @param {function(string, DescribeEdgeClusterUpgradeInfoResponse):void} cb
     * @public
     */
    DescribeEdgeClusterUpgradeInfo(req, cb) {
        let resp = new DescribeEdgeClusterUpgradeInfoResponse();
        this.request("DescribeEdgeClusterUpgradeInfo", req, resp, cb);
    }

    /**
     * This API is used to delete collection rules within the cluster.
     * @param {DeleteLogConfigsRequest} req
     * @param {function(string, DeleteLogConfigsResponse):void} cb
     * @public
     */
    DeleteLogConfigs(req, cb) {
        let resp = new DeleteLogConfigsResponse();
        this.request("DeleteLogConfigs", req, resp, cb);
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
     * This API is used to query the list of add-ons.
     * @param {DescribeAddonRequest} req
     * @param {function(string, DescribeAddonResponse):void} cb
     * @public
     */
    DescribeAddon(req, cb) {
        let resp = new DescribeAddonResponse();
        this.request("DescribeAddon", req, resp, cb);
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
     * This API is used to retrieve the App List supported by TKE.
     * @param {GetTkeAppChartListRequest} req
     * @param {function(string, GetTkeAppChartListResponse):void} cb
     * @public
     */
    GetTkeAppChartList(req, cb) {
        let resp = new GetTkeAppChartListResponse();
        this.request("GetTkeAppChartList", req, resp, cb);
    }

    /**
     * This API is used to create the Pay-as-you-go Super Node.
     * @param {CreateClusterVirtualNodeRequest} req
     * @param {function(string, CreateClusterVirtualNodeResponse):void} cb
     * @public
     */
    CreateClusterVirtualNode(req, cb) {
        let resp = new CreateClusterVirtualNodeResponse();
        this.request("CreateClusterVirtualNode", req, resp, cb);
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
     * This API is used to create a public network access port for a managed cluster. Note: This API will be disused soon. Please call `CreateClusterEndpoint` instead.
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
