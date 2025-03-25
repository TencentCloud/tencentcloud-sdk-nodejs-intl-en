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
const SecurityGroupLimitSet = models.SecurityGroupLimitSet;
const CreateRoutesRequest = models.CreateRoutesRequest;
const DescribeHaVipsResponse = models.DescribeHaVipsResponse;
const ModifyModuleSecurityGroupsRequest = models.ModifyModuleSecurityGroupsRequest;
const TerminateInstancesResponse = models.TerminateInstancesResponse;
const DescribeMonthPeakNetworkResponse = models.DescribeMonthPeakNetworkResponse;
const DescribeNetworkInterfacesRequest = models.DescribeNetworkInterfacesRequest;
const CreateSecurityGroupPoliciesResponse = models.CreateSecurityGroupPoliciesResponse;
const InstancePricesPartDetail = models.InstancePricesPartDetail;
const DescribeMonthPeakNetworkRequest = models.DescribeMonthPeakNetworkRequest;
const SystemDisk = models.SystemDisk;
const DescribeNodeResponse = models.DescribeNodeResponse;
const DescribeModuleRequest = models.DescribeModuleRequest;
const RebootInstancesRequest = models.RebootInstancesRequest;
const DescribeSnapshotsRequest = models.DescribeSnapshotsRequest;
const RemovePrivateIpAddressesRequest = models.RemovePrivateIpAddressesRequest;
const Tag = models.Tag;
const DescribeImageRequest = models.DescribeImageRequest;
const OsVersion = models.OsVersion;
const DescribeListenersResponse = models.DescribeListenersResponse;
const StartInstancesResponse = models.StartInstancesResponse;
const CreateVpcResponse = models.CreateVpcResponse;
const AssistantCidr = models.AssistantCidr;
const ModifyModuleIpDirectRequest = models.ModifyModuleIpDirectRequest;
const InstanceNetworkInfo = models.InstanceNetworkInfo;
const ResetInstancesMaxBandwidthResponse = models.ResetInstancesMaxBandwidthResponse;
const NodeInstanceNum = models.NodeInstanceNum;
const DeleteListenerRequest = models.DeleteListenerRequest;
const StopInstancesResponse = models.StopInstancesResponse;
const LoadBalancerInternetAccessible = models.LoadBalancerInternetAccessible;
const ResetRoutesRequest = models.ResetRoutesRequest;
const RouteTableAssociation = models.RouteTableAssociation;
const ModifyDefaultSubnetResponse = models.ModifyDefaultSubnetResponse;
const DescribeRouteTablesResponse = models.DescribeRouteTablesResponse;
const StopInstancesRequest = models.StopInstancesRequest;
const DetachNetworkInterfaceResponse = models.DetachNetworkInterfaceResponse;
const ImageTask = models.ImageTask;
const ModifyListenerRequest = models.ModifyListenerRequest;
const CreateImageRequest = models.CreateImageRequest;
const Instance = models.Instance;
const Node = models.Node;
const DeleteLoadBalancerRequest = models.DeleteLoadBalancerRequest;
const DescribeVpcsRequest = models.DescribeVpcsRequest;
const DescribeRouteConflictsResponse = models.DescribeRouteConflictsResponse;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const BatchDeregisterTargetsRequest = models.BatchDeregisterTargetsRequest;
const ModifyListenerResponse = models.ModifyListenerResponse;
const DescribeTargetHealthResponse = models.DescribeTargetHealthResponse;
const ModifyDefaultSubnetRequest = models.ModifyDefaultSubnetRequest;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const Snapshot = models.Snapshot;
const DescribeLoadBalancersRequest = models.DescribeLoadBalancersRequest;
const DeleteRoutesResponse = models.DeleteRoutesResponse;
const DescribeCustomImageTaskRequest = models.DescribeCustomImageTaskRequest;
const DescribeSecurityGroupAssociationStatisticsResponse = models.DescribeSecurityGroupAssociationStatisticsResponse;
const AssignPrivateIpAddressesResponse = models.AssignPrivateIpAddressesResponse;
const PriceDetail = models.PriceDetail;
const ImportImageResponse = models.ImportImageResponse;
const DescribeSecurityGroupsRequest = models.DescribeSecurityGroupsRequest;
const DescribePriceRunInstanceResponse = models.DescribePriceRunInstanceResponse;
const DeleteImageResponse = models.DeleteImageResponse;
const ModifySubnetAttributeResponse = models.ModifySubnetAttributeResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const NetworkInterface = models.NetworkInterface;
const KeyPair = models.KeyPair;
const DescribeVpcsResponse = models.DescribeVpcsResponse;
const ModifySecurityGroupAttributeRequest = models.ModifySecurityGroupAttributeRequest;
const DescribePackingQuotaGroupResponse = models.DescribePackingQuotaGroupResponse;
const LoadBalancer = models.LoadBalancer;
const ModifyModuleNameResponse = models.ModifyModuleNameResponse;
const DescribePeakBaseOverviewRequest = models.DescribePeakBaseOverviewRequest;
const BatchModifyTargetWeightResponse = models.BatchModifyTargetWeightResponse;
const InstanceStatistic = models.InstanceStatistic;
const DeleteSecurityGroupPoliciesRequest = models.DeleteSecurityGroupPoliciesRequest;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const RouteConflict = models.RouteConflict;
const DeleteSubnetResponse = models.DeleteSubnetResponse;
const ISP = models.ISP;
const Address = models.Address;
const PeakBase = models.PeakBase;
const ReplaceRouteTableAssociationRequest = models.ReplaceRouteTableAssociationRequest;
const ModifyTargetWeightResponse = models.ModifyTargetWeightResponse;
const DescribeCustomImageTaskResponse = models.DescribeCustomImageTaskResponse;
const ISPCounter = models.ISPCounter;
const CreateModuleResponse = models.CreateModuleResponse;
const DescribePackingQuotaGroupRequest = models.DescribePackingQuotaGroupRequest;
const SecurityGroupPolicy = models.SecurityGroupPolicy;
const LoadBalancerHealth = models.LoadBalancerHealth;
const CreateListenerResponse = models.CreateListenerResponse;
const DeleteVpcRequest = models.DeleteVpcRequest;
const CreateSubnetResponse = models.CreateSubnetResponse;
const DescribeSecurityGroupPoliciesResponse = models.DescribeSecurityGroupPoliciesResponse;
const ModifySecurityGroupPoliciesRequest = models.ModifySecurityGroupPoliciesRequest;
const NetworkStorageRange = models.NetworkStorageRange;
const ReplaceRoutesRequest = models.ReplaceRoutesRequest;
const DescribeTargetHealthRequest = models.DescribeTargetHealthRequest;
const ModifyInstancesAttributeResponse = models.ModifyInstancesAttributeResponse;
const ModifySubnetAttributeRequest = models.ModifySubnetAttributeRequest;
const DisassociateAddressRequest = models.DisassociateAddressRequest;
const ModuleCounter = models.ModuleCounter;
const TaskInput = models.TaskInput;
const ModifyLoadBalancerAttributesResponse = models.ModifyLoadBalancerAttributesResponse;
const InstanceFamilyTypeConfig = models.InstanceFamilyTypeConfig;
const DescribeDefaultSubnetRequest = models.DescribeDefaultSubnetRequest;
const RunInstancesResponse = models.RunInstancesResponse;
const TargetHealth = models.TargetHealth;
const DescribeSecurityGroupLimitsResponse = models.DescribeSecurityGroupLimitsResponse;
const DisassociateInstancesKeyPairsRequest = models.DisassociateInstancesKeyPairsRequest;
const SecurityGroupAssociationStatistics = models.SecurityGroupAssociationStatistics;
const ModifyTargetPortResponse = models.ModifyTargetPortResponse;
const MonthNetwork = models.MonthNetwork;
const ResetRoutesResponse = models.ResetRoutesResponse;
const AllocateAddressesResponse = models.AllocateAddressesResponse;
const CreateImageResponse = models.CreateImageResponse;
const ModifyModuleNetworkRequest = models.ModifyModuleNetworkRequest;
const AddressTemplateSpecification = models.AddressTemplateSpecification;
const AssignIpv6AddressesRequest = models.AssignIpv6AddressesRequest;
const DescribeModuleDetailResponse = models.DescribeModuleDetailResponse;
const Backend = models.Backend;
const ModifyIpv6AddressesAttributeResponse = models.ModifyIpv6AddressesAttributeResponse;
const ModifyModuleSecurityGroupsResponse = models.ModifyModuleSecurityGroupsResponse;
const ReplaceSecurityGroupPolicyRequest = models.ReplaceSecurityGroupPolicyRequest;
const CreateKeyPairResponse = models.CreateKeyPairResponse;
const DeleteModuleResponse = models.DeleteModuleResponse;
const DescribeModuleDetailRequest = models.DescribeModuleDetailRequest;
const ModifyRouteTableAttributeRequest = models.ModifyRouteTableAttributeRequest;
const ModifyModuleNetworkResponse = models.ModifyModuleNetworkResponse;
const DescribeImportImageOsRequest = models.DescribeImportImageOsRequest;
const CreateKeyPairRequest = models.CreateKeyPairRequest;
const ModifyModuleIpDirectResponse = models.ModifyModuleIpDirectResponse;
const ResetInstancesPasswordRequest = models.ResetInstancesPasswordRequest;
const AssociateAddressResponse = models.AssociateAddressResponse;
const DescribeAddressesRequest = models.DescribeAddressesRequest;
const DescribeSecurityGroupPoliciesRequest = models.DescribeSecurityGroupPoliciesRequest;
const CreateSecurityGroupResponse = models.CreateSecurityGroupResponse;
const DeleteListenerResponse = models.DeleteListenerResponse;
const ResetInstancesRequest = models.ResetInstancesRequest;
const DeleteImageRequest = models.DeleteImageRequest;
const PeakNetworkRegionInfo = models.PeakNetworkRegionInfo;
const ModifyHaVipAttributeRequest = models.ModifyHaVipAttributeRequest;
const ModifyAddressesBandwidthRequest = models.ModifyAddressesBandwidthRequest;
const InstancesPrice = models.InstancesPrice;
const ModifyImageAttributeResponse = models.ModifyImageAttributeResponse;
const SimpleModule = models.SimpleModule;
const TagInfo = models.TagInfo;
const ModifyImageAttributeRequest = models.ModifyImageAttributeRequest;
const InstanceNetworkLimitConfig = models.InstanceNetworkLimitConfig;
const CreateModuleRequest = models.CreateModuleRequest;
const CreateLoadBalancerResponse = models.CreateLoadBalancerResponse;
const SetLoadBalancerSecurityGroupsRequest = models.SetLoadBalancerSecurityGroupsRequest;
const DescribeImportImageOsResponse = models.DescribeImportImageOsResponse;
const MigrateNetworkInterfaceResponse = models.MigrateNetworkInterfaceResponse;
const Module = models.Module;
const ListenerHealth = models.ListenerHealth;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const RunEIPDirectServiceEnabled = models.RunEIPDirectServiceEnabled;
const ModifyTargetPortRequest = models.ModifyTargetPortRequest;
const Ipv6Address = models.Ipv6Address;
const CreateNetworkInterfaceRequest = models.CreateNetworkInterfaceRequest;
const SetSecurityGroupForLoadbalancersRequest = models.SetSecurityGroupForLoadbalancersRequest;
const DescribeInstancesDeniedActionsRequest = models.DescribeInstancesDeniedActionsRequest;
const ModifyLoadBalancerAttributesRequest = models.ModifyLoadBalancerAttributesRequest;
const DeleteHaVipResponse = models.DeleteHaVipResponse;
const Province = models.Province;
const DescribeSubnetsRequest = models.DescribeSubnetsRequest;
const CreateSubnetRequest = models.CreateSubnetRequest;
const HaVip = models.HaVip;
const ModifyAddressesBandwidthResponse = models.ModifyAddressesBandwidthResponse;
const RunInstancesRequest = models.RunInstancesRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const InstanceTypeConfig = models.InstanceTypeConfig;
const AllocateAddressesRequest = models.AllocateAddressesRequest;
const ZoneInfo = models.ZoneInfo;
const ModifyInstancesAttributeRequest = models.ModifyInstancesAttributeRequest;
const ResetInstancesResponse = models.ResetInstancesResponse;
const DescribeNodeRequest = models.DescribeNodeRequest;
const ModifySecurityGroupAttributeResponse = models.ModifySecurityGroupAttributeResponse;
const ModifyModuleConfigRequest = models.ModifyModuleConfigRequest;
const Area = models.Area;
const ModifyAddressAttributeResponse = models.ModifyAddressAttributeResponse;
const DescribeInstanceVncUrlRequest = models.DescribeInstanceVncUrlRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const ReplaceRouteTableAssociationResponse = models.ReplaceRouteTableAssociationResponse;
const DescribeInstancesDeniedActionsResponse = models.DescribeInstancesDeniedActionsResponse;
const ReleaseIpv6AddressesRequest = models.ReleaseIpv6AddressesRequest;
const TaskOutput = models.TaskOutput;
const PhysicalPosition = models.PhysicalPosition;
const Listener = models.Listener;
const StartInstancesRequest = models.StartInstancesRequest;
const DeleteSnapshotsRequest = models.DeleteSnapshotsRequest;
const Placement = models.Placement;
const Target = models.Target;
const DeleteSnapshotsResponse = models.DeleteSnapshotsResponse;
const DescribeAddressesResponse = models.DescribeAddressesResponse;
const ModifyIpv6AddressesAttributeRequest = models.ModifyIpv6AddressesAttributeRequest;
const DeleteModuleRequest = models.DeleteModuleRequest;
const DisableRoutesResponse = models.DisableRoutesResponse;
const DescribeConfigResponse = models.DescribeConfigResponse;
const DataDisk = models.DataDisk;
const ModifyVpcAttributeResponse = models.ModifyVpcAttributeResponse;
const PrivateIpAddressSpecification = models.PrivateIpAddressSpecification;
const MigratePrivateIpAddressResponse = models.MigratePrivateIpAddressResponse;
const DeleteRouteTableResponse = models.DeleteRouteTableResponse;
const ModifyModuleDisableWanIpResponse = models.ModifyModuleDisableWanIpResponse;
const EnhancedService = models.EnhancedService;
const DescribeLoadBalanceTaskStatusRequest = models.DescribeLoadBalanceTaskStatusRequest;
const ModifyHaVipAttributeResponse = models.ModifyHaVipAttributeResponse;
const ModifyVpcAttributeRequest = models.ModifyVpcAttributeRequest;
const TagSpecification = models.TagSpecification;
const AttachNetworkInterfaceResponse = models.AttachNetworkInterfaceResponse;
const DescribeRouteTablesRequest = models.DescribeRouteTablesRequest;
const DescribeBaseOverviewRequest = models.DescribeBaseOverviewRequest;
const CreateHaVipResponse = models.CreateHaVipResponse;
const ImportImageRequest = models.ImportImageRequest;
const DisableRoutesRequest = models.DisableRoutesRequest;
const ResetInstancesMaxBandwidthRequest = models.ResetInstancesMaxBandwidthRequest;
const ModifyModuleNameRequest = models.ModifyModuleNameRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CreateListenerRequest = models.CreateListenerRequest;
const ReleaseAddressesRequest = models.ReleaseAddressesRequest;
const CreateRouteTableRequest = models.CreateRouteTableRequest;
const ModifyModuleConfigResponse = models.ModifyModuleConfigResponse;
const MigrateNetworkInterfaceRequest = models.MigrateNetworkInterfaceRequest;
const SrcImage = models.SrcImage;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const ModifyAddressAttributeRequest = models.ModifyAddressAttributeRequest;
const DescribePriceRunInstanceRequest = models.DescribePriceRunInstanceRequest;
const DescribeTargetsResponse = models.DescribeTargetsResponse;
const ImageOsList = models.ImageOsList;
const BatchModifyTargetWeightRequest = models.BatchModifyTargetWeightRequest;
const BatchTarget = models.BatchTarget;
const City = models.City;
const PeakNetwork = models.PeakNetwork;
const RebootInstancesResponse = models.RebootInstancesResponse;
const DeleteSecurityGroupPoliciesResponse = models.DeleteSecurityGroupPoliciesResponse;
const DescribeHaVipsRequest = models.DescribeHaVipsRequest;
const BatchRegisterTargetsRequest = models.BatchRegisterTargetsRequest;
const RemovePrivateIpAddressesResponse = models.RemovePrivateIpAddressesResponse;
const PublicIPAddressInfo = models.PublicIPAddressInfo;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const ModifyModuleImageResponse = models.ModifyModuleImageResponse;
const DeleteLoadBalancerListenersResponse = models.DeleteLoadBalancerListenersResponse;
const VpcInfo = models.VpcInfo;
const ModuleItem = models.ModuleItem;
const CreateSecurityGroupPoliciesRequest = models.CreateSecurityGroupPoliciesRequest;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const ModifyRouteTableAttributeResponse = models.ModifyRouteTableAttributeResponse;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const ReleaseIpv6AddressesResponse = models.ReleaseIpv6AddressesResponse;
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const BatchDeregisterTargetsResponse = models.BatchDeregisterTargetsResponse;
const SetLoadBalancerSecurityGroupsResponse = models.SetLoadBalancerSecurityGroupsResponse;
const CreateLoadBalancerRequest = models.CreateLoadBalancerRequest;
const Internet = models.Internet;
const DescribeModuleResponse = models.DescribeModuleResponse;
const ImageLimitConfig = models.ImageLimitConfig;
const EipQuota = models.EipQuota;
const DescribeSubnetsResponse = models.DescribeSubnetsResponse;
const SetSecurityGroupForLoadbalancersResponse = models.SetSecurityGroupForLoadbalancersResponse;
const DescribeDefaultSubnetResponse = models.DescribeDefaultSubnetResponse;
const DeleteSubnetRequest = models.DeleteSubnetRequest;
const Position = models.Position;
const RouteTable = models.RouteTable;
const DeleteNetworkInterfaceRequest = models.DeleteNetworkInterfaceRequest;
const DescribeTargetsRequest = models.DescribeTargetsRequest;
const ReplaceRoutesResponse = models.ReplaceRoutesResponse;
const DeleteHaVipRequest = models.DeleteHaVipRequest;
const DeleteLoadBalancerListenersRequest = models.DeleteLoadBalancerListenersRequest;
const MigratePrivateIpAddressRequest = models.MigratePrivateIpAddressRequest;
const DeleteRouteTableRequest = models.DeleteRouteTableRequest;
const DescribeConfigRequest = models.DescribeConfigRequest;
const NetworkInterfaceAttachment = models.NetworkInterfaceAttachment;
const BatchRegisterTargetsResponse = models.BatchRegisterTargetsResponse;
const ReleaseAddressesResponse = models.ReleaseAddressesResponse;
const ReplaceSecurityGroupPolicyResponse = models.ReplaceSecurityGroupPolicyResponse;
const ModifyPrivateIpAddressesAttributeResponse = models.ModifyPrivateIpAddressesAttributeResponse;
const RuleHealth = models.RuleHealth;
const DeleteSecurityGroupResponse = models.DeleteSecurityGroupResponse;
const CreateNetworkInterfaceResponse = models.CreateNetworkInterfaceResponse;
const TargetsWeightRule = models.TargetsWeightRule;
const ZoneInstanceCountISP = models.ZoneInstanceCountISP;
const DescribeAddressQuotaRequest = models.DescribeAddressQuotaRequest;
const DescribeInstanceTypeConfigResponse = models.DescribeInstanceTypeConfigResponse;
const HealthCheck = models.HealthCheck;
const SecurityGroupPolicySet = models.SecurityGroupPolicySet;
const AssignIpv6AddressesResponse = models.AssignIpv6AddressesResponse;
const CreateRoutesResponse = models.CreateRoutesResponse;
const DescribeSecurityGroupsResponse = models.DescribeSecurityGroupsResponse;
const InstanceFamilyConfig = models.InstanceFamilyConfig;
const ModifySecurityGroupPoliciesResponse = models.ModifySecurityGroupPoliciesResponse;
const ServiceTemplateSpecification = models.ServiceTemplateSpecification;
const PackingQuotaInfo = models.PackingQuotaInfo;
const Image = models.Image;
const DetachNetworkInterfaceRequest = models.DetachNetworkInterfaceRequest;
const ModifyTargetWeightRequest = models.ModifyTargetWeightRequest;
const DescribeRouteConflictsRequest = models.DescribeRouteConflictsRequest;
const Subnet = models.Subnet;
const AttachNetworkInterfaceRequest = models.AttachNetworkInterfaceRequest;
const ResetInstancesPasswordResponse = models.ResetInstancesPasswordResponse;
const SecurityGroup = models.SecurityGroup;
const ModifyModuleDisableWanIpRequest = models.ModifyModuleDisableWanIpRequest;
const DescribeInstanceVncUrlResponse = models.DescribeInstanceVncUrlResponse;
const DisassociateAddressResponse = models.DisassociateAddressResponse;
const DescribeInstanceTypeConfigRequest = models.DescribeInstanceTypeConfigRequest;
const DeleteRoutesRequest = models.DeleteRoutesRequest;
const AssociateAddressRequest = models.AssociateAddressRequest;
const DescribePeakNetworkOverviewResponse = models.DescribePeakNetworkOverviewResponse;
const DescribeLoadBalanceTaskStatusResponse = models.DescribeLoadBalanceTaskStatusResponse;
const DiskInfo = models.DiskInfo;
const Filter = models.Filter;
const DescribeSnapshotsResponse = models.DescribeSnapshotsResponse;
const CreateHaVipRequest = models.CreateHaVipRequest;
const DescribeAddressQuotaResponse = models.DescribeAddressQuotaResponse;
const ZoneInstanceInfo = models.ZoneInstanceInfo;
const DeleteLoadBalancerResponse = models.DeleteLoadBalancerResponse;
const DeleteSecurityGroupRequest = models.DeleteSecurityGroupRequest;
const CreateRouteTableResponse = models.CreateRouteTableResponse;
const ModifyPrivateIpAddressesAttributeRequest = models.ModifyPrivateIpAddressesAttributeRequest;
const CreateSecurityGroupRequest = models.CreateSecurityGroupRequest;
const DescribeSecurityGroupLimitsRequest = models.DescribeSecurityGroupLimitsRequest;
const PrivateIPAddressInfo = models.PrivateIPAddressInfo;
const DisassociateInstancesKeyPairsResponse = models.DisassociateInstancesKeyPairsResponse;
const TerminateInstancesRequest = models.TerminateInstancesRequest;
const DeleteNetworkInterfaceResponse = models.DeleteNetworkInterfaceResponse;
const DescribePeakNetworkOverviewRequest = models.DescribePeakNetworkOverviewRequest;
const EnableRoutesRequest = models.EnableRoutesRequest;
const OperatorAction = models.OperatorAction;
const PeakFamilyInfo = models.PeakFamilyInfo;
const DescribePeakBaseOverviewResponse = models.DescribePeakBaseOverviewResponse;
const DescribeImageResponse = models.DescribeImageResponse;
const ListenerBackend = models.ListenerBackend;
const RegionInfo = models.RegionInfo;
const PackingQuotaGroup = models.PackingQuotaGroup;
const DescribeNetworkInterfacesResponse = models.DescribeNetworkInterfacesResponse;
const EnableRoutesResponse = models.EnableRoutesResponse;
const AssignPrivateIpAddressesRequest = models.AssignPrivateIpAddressesRequest;
const CreateVpcRequest = models.CreateVpcRequest;
const DescribeSecurityGroupAssociationStatisticsRequest = models.DescribeSecurityGroupAssociationStatisticsRequest;
const Country = models.Country;
const Route = models.Route;
const DescribeListenersRequest = models.DescribeListenersRequest;
const DeleteVpcResponse = models.DeleteVpcResponse;
const ModifyModuleImageRequest = models.ModifyModuleImageRequest;
const DescribeLoadBalancersResponse = models.DescribeLoadBalancersResponse;
const InstanceOperator = models.InstanceOperator;
const DescribeBaseOverviewResponse = models.DescribeBaseOverviewResponse;
const AddressInfo = models.AddressInfo;


/**
 * ecm client
 * @class
 */
class EcmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ecm.intl.tencentcloudapi.com", "2019-07-19", credential, region, profile);
    }
    
    /**
     * This API is used to replace a single routing rule of a security group. You can replace only one rule in a single direction in one request and must specify the index (PolicyIndex).
     * @param {ReplaceSecurityGroupPolicyRequest} req
     * @param {function(string, ReplaceSecurityGroupPolicyResponse):void} cb
     * @public
     */
    ReplaceSecurityGroupPolicy(req, cb) {
        let resp = new ReplaceSecurityGroupPolicyResponse();
        this.request("ReplaceSecurityGroupPolicy", req, resp, cb);
    }

    /**
     * This API is used to get the limits of data such as bandwidth and disk.
     * @param {DescribeConfigRequest} req
     * @param {function(string, DescribeConfigResponse):void} cb
     * @public
     */
    DescribeConfig(req, cb) {
        let resp = new DescribeConfigResponse();
        this.request("DescribeConfig", req, resp, cb);
    }

    /**
     * This API is used to query the execution result of an EIP async task.
     * @param {DescribeTaskResultRequest} req
     * @param {function(string, DescribeTaskResultResponse):void} cb
     * @public
     */
    DescribeTaskResult(req, cb) {
        let resp = new DescribeTaskResultResponse();
        this.request("DescribeTaskResult", req, resp, cb);
    }

    /**
     * This API is used to rename a module.
     * @param {ModifyModuleNameRequest} req
     * @param {function(string, ModifyModuleNameResponse):void} cb
     * @public
     */
    ModifyModuleName(req, cb) {
        let resp = new ModifyModuleNameResponse();
        this.request("ModifyModuleName", req, resp, cb);
    }

    /**
     * This API is used to query the list of the objects in a route table.
     * @param {DescribeRouteTablesRequest} req
     * @param {function(string, DescribeRouteTablesResponse):void} cb
     * @public
     */
    DescribeRouteTables(req, cb) {
        let resp = new DescribeRouteTablesResponse();
        this.request("DescribeRouteTables", req, resp, cb);
    }

    /**
     * After a VPC is created, the system will create a default route table, with which all new subnets will be associated. By default, you can use the default route table to manage your routing policies. If you have multiple routing policies, you can call the API for route table creation to create more route tables to manage your routing policies.
     * @param {CreateRouteTableRequest} req
     * @param {function(string, CreateRouteTableResponse):void} cb
     * @public
     */
    CreateRouteTable(req, cb) {
        let resp = new CreateRouteTableResponse();
        this.request("CreateRouteTable", req, resp, cb);
    }

    /**
     * This API is used to batch unbind real servers.
     * @param {BatchDeregisterTargetsRequest} req
     * @param {function(string, BatchDeregisterTargetsResponse):void} cb
     * @public
     */
    BatchDeregisterTargets(req, cb) {
        let resp = new BatchDeregisterTargetsResponse();
        this.request("BatchDeregisterTargets", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of an instance.
     * @param {ModifyInstancesAttributeRequest} req
     * @param {function(string, ModifyInstancesAttributeResponse):void} cb
     * @public
     */
    ModifyInstancesAttribute(req, cb) {
        let resp = new ModifyInstancesAttributeResponse();
        this.request("ModifyInstancesAttribute", req, resp, cb);
    }

    /**
     * This API is used to reset a route table name and all routing policies.
     * @param {ResetRoutesRequest} req
     * @param {function(string, ResetRoutesResponse):void} cb
     * @public
     */
    ResetRoutes(req, cb) {
        let resp = new ResetRoutesResponse();
        this.request("ResetRoutes", req, resp, cb);
    }

    /**
     * This API is used to modify the private IP attributes of an ENI.
     * @param {ModifyPrivateIpAddressesAttributeRequest} req
     * @param {function(string, ModifyPrivateIpAddressesAttributeResponse):void} cb
     * @public
     */
    ModifyPrivateIpAddressesAttribute(req, cb) {
        let resp = new ModifyPrivateIpAddressesAttributeResponse();
        this.request("ModifyPrivateIpAddressesAttribute", req, resp, cb);
    }

    /**
     * This API is used to create an ECM instance.
     * @param {RunInstancesRequest} req
     * @param {function(string, RunInstancesResponse):void} cb
     * @public
     */
    RunInstances(req, cb) {
        let resp = new RunInstancesResponse();
        this.request("RunInstances", req, resp, cb);
    }

    /**
     * This API is used to import an image from a CVM instance to an ECM instance.
     * @param {ImportImageRequest} req
     * @param {function(string, ImportImageResponse):void} cb
     * @public
     */
    ImportImage(req, cb) {
        let resp = new ImportImageResponse();
        this.request("ImportImage", req, resp, cb);
    }

    /**
     * This API is used to query the list of EIPs.
     * @param {DescribeAddressesRequest} req
     * @param {function(string, DescribeAddressesResponse):void} cb
     * @public
     */
    DescribeAddresses(req, cb) {
        let resp = new DescribeAddressesResponse();
        this.request("DescribeAddresses", req, resp, cb);
    }

    /**
     * This API is used to modify the default image of a module.
     * @param {ModifyModuleImageRequest} req
     * @param {function(string, ModifyModuleImageResponse):void} cb
     * @public
     */
    ModifyModuleImage(req, cb) {
        let resp = new ModifyModuleImageResponse();
        this.request("ModifyModuleImage", req, resp, cb);
    }

    /**
     * This API is used to query the list of CLB listeners.
     * @param {DescribeListenersRequest} req
     * @param {function(string, DescribeListenersResponse):void} cb
     * @public
     */
    DescribeListeners(req, cb) {
        let resp = new DescribeListenersResponse();
        this.request("DescribeListeners", req, resp, cb);
    }

    /**
     * This API is used to create an image with the system disk of an instance. The image can be used to create instances.
     * @param {CreateImageRequest} req
     * @param {function(string, CreateImageResponse):void} cb
     * @public
     */
    CreateImage(req, cb) {
        let resp = new CreateImageResponse();
        this.request("CreateImage", req, resp, cb);
    }

    /**
     * This API is used to get the list of nodes.
     * @param {DescribeNodeRequest} req
     * @param {function(string, DescribeNodeResponse):void} cb
     * @public
     */
    DescribeNode(req, cb) {
        let resp = new DescribeNodeResponse();
        this.request("DescribeNode", req, resp, cb);
    }

    /**
     * This API is used to query an image import task.
     * @param {DescribeCustomImageTaskRequest} req
     * @param {function(string, DescribeCustomImageTaskResponse):void} cb
     * @public
     */
    DescribeCustomImageTask(req, cb) {
        let resp = new DescribeCustomImageTaskResponse();
        this.request("DescribeCustomImageTask", req, resp, cb);
    }

    /**
     * This API is used to modify the route table associated with a subnet. A subnet can be associated with only one route table.
     * @param {ReplaceRouteTableAssociationRequest} req
     * @param {function(string, ReplaceRouteTableAssociationResponse):void} cb
     * @public
     */
    ReplaceRouteTableAssociation(req, cb) {
        let resp = new ReplaceRouteTableAssociationResponse();
        this.request("ReplaceRouteTableAssociation", req, resp, cb);
    }

    /**
     * This API is used to query the list of CLB instances.
     * @param {DescribeLoadBalancersRequest} req
     * @param {function(string, DescribeLoadBalancersResponse):void} cb
     * @public
     */
    DescribeLoadBalancers(req, cb) {
        let resp = new DescribeLoadBalancersResponse();
        this.request("DescribeLoadBalancers", req, resp, cb);
    }

    /**
     * This API is used to query the task status of a CLB instance.
     * @param {DescribeLoadBalanceTaskStatusRequest} req
     * @param {function(string, DescribeLoadBalanceTaskStatusResponse):void} cb
     * @public
     */
    DescribeLoadBalanceTaskStatus(req, cb) {
        let resp = new DescribeLoadBalanceTaskStatusResponse();
        this.request("DescribeLoadBalanceTaskStatus", req, resp, cb);
    }

    /**
     * This API is used to query the list of VPCs.
     * @param {DescribeVpcsRequest} req
     * @param {function(string, DescribeVpcsResponse):void} cb
     * @public
     */
    DescribeVpcs(req, cb) {
        let resp = new DescribeVpcsResponse();
        this.request("DescribeVpcs", req, resp, cb);
    }

    /**
     * This API is used to batch modify the forwarding weights of the real servers bound to a listener.
     * @param {BatchModifyTargetWeightRequest} req
     * @param {function(string, BatchModifyTargetWeightResponse):void} cb
     * @public
     */
    BatchModifyTargetWeight(req, cb) {
        let resp = new BatchModifyTargetWeightResponse();
        this.request("BatchModifyTargetWeight", req, resp, cb);
    }

    /**
     * This API is used to display the list of images.
     * @param {DescribeImageRequest} req
     * @param {function(string, DescribeImageResponse):void} cb
     * @public
     */
    DescribeImage(req, cb) {
        let resp = new DescribeImageResponse();
        this.request("DescribeImage", req, resp, cb);
    }

    /**
     * This API is used to unbind a security group.
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        let resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }

    /**
     * Only security groups under the current account can be deleted.
A security group cannot be deleted directly if its instance ID is used in the policy of another security group. In this case, you need to modify the policy first before deleting the security group.
Deleted security groups cannot be recovered. Therefore, call this API with caution.
     * @param {DeleteSecurityGroupRequest} req
     * @param {function(string, DeleteSecurityGroupResponse):void} cb
     * @public
     */
    DeleteSecurityGroup(req, cb) {
        let resp = new DeleteSecurityGroupResponse();
        this.request("DeleteSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the EIP bandwidth.

     * @param {ModifyAddressesBandwidthRequest} req
     * @param {function(string, ModifyAddressesBandwidthResponse):void} cb
     * @public
     */
    ModifyAddressesBandwidth(req, cb) {
        let resp = new ModifyAddressesBandwidthResponse();
        this.request("ModifyAddressesBandwidth", req, resp, cb);
    }

    /**
     * This API is used to create a subnet. After the subnet is created successfully, it will become the default subnet for the AZ.
     * @param {CreateSubnetRequest} req
     * @param {function(string, CreateSubnetResponse):void} cb
     * @public
     */
    CreateSubnet(req, cb) {
        let resp = new CreateSubnetResponse();
        this.request("CreateSubnet", req, resp, cb);
    }

    /**
     * This API is used to reset the bandwidth cap of an instance.
     * @param {ResetInstancesMaxBandwidthRequest} req
     * @param {function(string, ResetInstancesMaxBandwidthResponse):void} cb
     * @public
     */
    ResetInstancesMaxBandwidth(req, cb) {
        let resp = new ResetInstancesMaxBandwidthResponse();
        this.request("ResetInstancesMaxBandwidth", req, resp, cb);
    }

    /**
     * This API is used to get the list of modules.
     * @param {DescribeModuleRequest} req
     * @param {function(string, DescribeModuleResponse):void} cb
     * @public
     */
    DescribeModule(req, cb) {
        let resp = new DescribeModuleResponse();
        this.request("DescribeModule", req, resp, cb);
    }

    /**
     * This API is used to start an instance. Only instances in `STOPPED` status can be started. The instance status will become `STARTING` when this API is called successfully and will become `RUNNING` when the instance is started successfully.
     * @param {StartInstancesRequest} req
     * @param {function(string, StartInstancesResponse):void} cb
     * @public
     */
    StartInstances(req, cb) {
        let resp = new StartInstancesResponse();
        this.request("StartInstances", req, resp, cb);
    }

    /**
     * This API is used to delete a CLB listener.
     * @param {DeleteListenerRequest} req
     * @param {function(string, DeleteListenerResponse):void} cb
     * @public
     */
    DeleteListener(req, cb) {
        let resp = new DeleteListenerResponse();
        this.request("DeleteListener", req, resp, cb);
    }

    /**
     * This API is used to unbind an EIP.
Only EIPs in `BIND` or `BIND_ENI` status can be unbound.
Blocked EIPs cannot be unbound.
     * @param {DisassociateAddressRequest} req
     * @param {function(string, DisassociateAddressResponse):void} cb
     * @public
     */
    DisassociateAddress(req, cb) {
        let resp = new DisassociateAddressResponse();
        this.request("DisassociateAddress", req, resp, cb);
    }

    /**
     * This API is used to create a VPC.
     * @param {CreateVpcRequest} req
     * @param {function(string, CreateVpcResponse):void} cb
     * @public
     */
    CreateVpc(req, cb) {
        let resp = new CreateVpcResponse();
        this.request("CreateVpc", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a CLB instance.
     * @param {ModifyLoadBalancerAttributesRequest} req
     * @param {function(string, ModifyLoadBalancerAttributesResponse):void} cb
     * @public
     */
    ModifyLoadBalancerAttributes(req, cb) {
        let resp = new ModifyLoadBalancerAttributesResponse();
        this.request("ModifyLoadBalancerAttributes", req, resp, cb);
    }

    /**
     * This API is used to configure security groups for a CLB instance.
     * @param {SetLoadBalancerSecurityGroupsRequest} req
     * @param {function(string, SetLoadBalancerSecurityGroupsResponse):void} cb
     * @public
     */
    SetLoadBalancerSecurityGroups(req, cb) {
        let resp = new SetLoadBalancerSecurityGroupsResponse();
        this.request("SetLoadBalancerSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to apply for one or multiple EIPs.
     * @param {AllocateAddressesRequest} req
     * @param {function(string, AllocateAddressesResponse):void} cb
     * @public
     */
    AllocateAddresses(req, cb) {
        let resp = new AllocateAddressesResponse();
        this.request("AllocateAddresses", req, resp, cb);
    }

    /**
     * This API is used to specify whether to prohibit public IP assignment for a module.
     * @param {ModifyModuleDisableWanIpRequest} req
     * @param {function(string, ModifyModuleDisableWanIpResponse):void} cb
     * @public
     */
    ModifyModuleDisableWanIp(req, cb) {
        let resp = new ModifyModuleDisableWanIpResponse();
        this.request("ModifyModuleDisableWanIp", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a CLB listener.
     * @param {ModifyListenerRequest} req
     * @param {function(string, ModifyListenerResponse):void} cb
     * @public
     */
    ModifyListener(req, cb) {
        let resp = new ModifyListenerResponse();
        this.request("ModifyListener", req, resp, cb);
    }

    /**
     * This API is used to unbind a key pair from an instance.
     * @param {DisassociateInstancesKeyPairsRequest} req
     * @param {function(string, DisassociateInstancesKeyPairsResponse):void} cb
     * @public
     */
    DisassociateInstancesKeyPairs(req, cb) {
        let resp = new DisassociateInstancesKeyPairsResponse();
        this.request("DisassociateInstancesKeyPairs", req, resp, cb);
    }

    /**
     * This API is used to bind an EIP to an instance or the specified private IP of an ENI.
Binding an EIP to an instance (ECM) is essentially to bind it to the primary private IP of the primary ENI of the instance.
When you bind an EIP to the private IP of the specified ENI, if the private IP is already bound to an EIP or public IP, a failure will be reported, and you must unbind it first before you can bind it to a new EIP.
Only EIPs in `UNBIND` status can be bound to a private IP.
     * @param {AssociateAddressRequest} req
     * @param {function(string, AssociateAddressResponse):void} cb
     * @public
     */
    AssociateAddress(req, cb) {
        let resp = new AssociateAddressResponse();
        this.request("AssociateAddress", req, resp, cb);
    }

    /**
     * This API is used to delete a subnet. If the subnet is the current default subnet in the AZ, after it is deleted, the default subnet automatically created by the system rather than the last subnet created by you will be used as the new default subnet. If the new default subnet does not meet your needs, you can call the API for setting the default subnet to configure it.
     * @param {DeleteSubnetRequest} req
     * @param {function(string, DeleteSubnetResponse):void} cb
     * @public
     */
    DeleteSubnet(req, cb) {
        let resp = new DeleteSubnetResponse();
        this.request("DeleteSubnet", req, resp, cb);
    }

    /**
     * This API is used to batch bind backend targets.
     * @param {BatchRegisterTargetsRequest} req
     * @param {function(string, BatchRegisterTargetsResponse):void} cb
     * @public
     */
    BatchRegisterTargets(req, cb) {
        let resp = new BatchRegisterTargetsResponse();
        this.request("BatchRegisterTargets", req, resp, cb);
    }

    /**
     * This API is used to get the information of prohibited operations by instance ID.
     * @param {DescribeInstancesDeniedActionsRequest} req
     * @param {function(string, DescribeInstancesDeniedActionsResponse):void} cb
     * @public
     */
    DescribeInstancesDeniedActions(req, cb) {
        let resp = new DescribeInstancesDeniedActionsResponse();
        this.request("DescribeInstancesDeniedActions", req, resp, cb);
    }

    /**
     * This API is used to create an ENI.
     * @param {CreateNetworkInterfaceRequest} req
     * @param {function(string, CreateNetworkInterfaceResponse):void} cb
     * @public
     */
    CreateNetworkInterface(req, cb) {
        let resp = new CreateNetworkInterfaceResponse();
        this.request("CreateNetworkInterface", req, resp, cb);
    }

    /**
     * Only instances in `RUNNING` status can be shut down.
The instance status will become `STOPPING` when the API is called successfully and will become `STOPPED` when the instance is shut down successfully.
Forced shutdown is supported. Just like powering off a physical PC, a forced shutdown may cause data loss or file system corruption. Make sure that you use this API only when the server cannot be shut down normally.
     * @param {StopInstancesRequest} req
     * @param {function(string, StopInstancesResponse):void} cb
     * @public
     */
    StopInstances(req, cb) {
        let resp = new StopInstancesResponse();
        this.request("StopInstances", req, resp, cb);
    }

    /**
     * This API is used to query the list of operating systems supported by an image imported from an external resource.
     * @param {DescribeImportImageOsRequest} req
     * @param {function(string, DescribeImportImageOsResponse):void} cb
     * @public
     */
    DescribeImportImageOs(req, cb) {
        let resp = new DescribeImportImageOsResponse();
        this.request("DescribeImportImageOs", req, resp, cb);
    }

    /**
     * This API is used to get the monthly peak and billable inbound/outbound bandwidth values of your node.
     * @param {DescribeMonthPeakNetworkRequest} req
     * @param {function(string, DescribeMonthPeakNetworkResponse):void} cb
     * @public
     */
    DescribeMonthPeakNetwork(req, cb) {
        let resp = new DescribeMonthPeakNetworkResponse();
        this.request("DescribeMonthPeakNetwork", req, resp, cb);
    }

    /**
     * This API is used to unbind an ENI from a CVM instance.
     * @param {DetachNetworkInterfaceRequest} req
     * @param {function(string, DetachNetworkInterfaceResponse):void} cb
     * @public
     */
    DetachNetworkInterface(req, cb) {
        let resp = new DetachNetworkInterfaceResponse();
        this.request("DetachNetworkInterface", req, resp, cb);
    }

    /**
     * This API is used to reinstall an instance. If you specify the `ImageId` parameter, the specified image will be used; otherwise, the image used by the current instance will be used. If you don't specify the password, a password will be sent later in Message Center.
     * @param {ResetInstancesRequest} req
     * @param {function(string, ResetInstancesResponse):void} cb
     * @public
     */
    ResetInstances(req, cb) {
        let resp = new ResetInstancesResponse();
        this.request("ResetInstances", req, resp, cb);
    }

    /**
     * This API is used to modify the port of a real server bound to a listener.
     * @param {ModifyTargetPortRequest} req
     * @param {function(string, ModifyTargetPortResponse):void} cb
     * @public
     */
    ModifyTargetPort(req, cb) {
        let resp = new ModifyTargetPortResponse();
        this.request("ModifyTargetPort", req, resp, cb);
    }

    /**
     * This API is used to delete an ENI.
     * @param {DeleteNetworkInterfaceRequest} req
     * @param {function(string, DeleteNetworkInterfaceResponse):void} cb
     * @public
     */
    DeleteNetworkInterface(req, cb) {
        let resp = new DeleteNetworkInterfaceResponse();
        this.request("DeleteNetworkInterface", req, resp, cb);
    }

    /**
     * This API is used to delete a business module.
     * @param {DeleteModuleRequest} req
     * @param {function(string, DeleteModuleResponse):void} cb
     * @public
     */
    DeleteModule(req, cb) {
        let resp = new DeleteModuleResponse();
        this.request("DeleteModule", req, resp, cb);
    }

    /**
     * This API is used to release the IPv6 addresses of an ENI.
     * @param {ReleaseIpv6AddressesRequest} req
     * @param {function(string, ReleaseIpv6AddressesResponse):void} cb
     * @public
     */
    ReleaseIpv6Addresses(req, cb) {
        let resp = new ReleaseIpv6AddressesResponse();
        this.request("ReleaseIpv6Addresses", req, resp, cb);
    }

    /**
     * This API is used to get the health check status of a CLB real server.
     * @param {DescribeTargetHealthRequest} req
     * @param {function(string, DescribeTargetHealthResponse):void} cb
     * @public
     */
    DescribeTargetHealth(req, cb) {
        let resp = new DescribeTargetHealthResponse();
        this.request("DescribeTargetHealth", req, resp, cb);
    }

    /**
     * This API is used to replace a routing policy.
     * @param {ReplaceRoutesRequest} req
     * @param {function(string, ReplaceRoutesResponse):void} cb
     * @public
     */
    ReplaceRoutes(req, cb) {
        let resp = new ReplaceRoutesResponse();
        this.request("ReplaceRoutes", req, resp, cb);
    }

    /**
     * This API is used to query the list of conflicts between a custom routing policy and a CCN routing policy.
     * @param {DescribeRouteConflictsRequest} req
     * @param {function(string, DescribeRouteConflictsResponse):void} cb
     * @public
     */
    DescribeRouteConflicts(req, cb) {
        let resp = new DescribeRouteConflictsResponse();
        this.request("DescribeRouteConflicts", req, resp, cb);
    }

    /**
     * This API is used to return the private IPs of an ENI.
To return the secondary private IPs of an ENI, the API will automatically unbind them from the ENI. The primary private IP of the ENI cannot be returned.
     * @param {RemovePrivateIpAddressesRequest} req
     * @param {function(string, RemovePrivateIpAddressesResponse):void} cb
     * @public
     */
    RemovePrivateIpAddresses(req, cb) {
        let resp = new RemovePrivateIpAddressesResponse();
        this.request("RemovePrivateIpAddresses", req, resp, cb);
    }

    /**
     * This API is used to disable a subnet route.
     * @param {DisableRoutesRequest} req
     * @param {function(string, DisableRoutesResponse):void} cb
     * @public
     */
    DisableRoutes(req, cb) {
        let resp = new DisableRoutesResponse();
        this.request("DisableRoutes", req, resp, cb);
    }

    /**
     * This API is used to query the price of an instance.
     * @param {DescribePriceRunInstanceRequest} req
     * @param {function(string, DescribePriceRunInstanceResponse):void} cb
     * @public
     */
    DescribePriceRunInstance(req, cb) {
        let resp = new DescribePriceRunInstanceResponse();
        this.request("DescribePriceRunInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the IPv6 address attributes of an ENI.
     * @param {ModifyIpv6AddressesAttributeRequest} req
     * @param {function(string, ModifyIpv6AddressesAttributeResponse):void} cb
     * @public
     */
    ModifyIpv6AddressesAttribute(req, cb) {
        let resp = new ModifyIpv6AddressesAttributeResponse();
        this.request("ModifyIpv6AddressesAttribute", req, resp, cb);
    }

    /**
     * This API is used to get the basic data displayed on the overview page.
     * @param {DescribeBaseOverviewRequest} req
     * @param {function(string, DescribeBaseOverviewResponse):void} cb
     * @public
     */
    DescribeBaseOverview(req, cb) {
        let resp = new DescribeBaseOverviewResponse();
        this.request("DescribeBaseOverview", req, resp, cb);
    }

    /**
     * This API is used to bind an ENI to a CVM instance.
     * @param {AttachNetworkInterfaceRequest} req
     * @param {function(string, AttachNetworkInterfaceResponse):void} cb
     * @public
     */
    AttachNetworkInterface(req, cb) {
        let resp = new AttachNetworkInterfaceResponse();
        this.request("AttachNetworkInterface", req, resp, cb);
    }

    /**
     * `SecurityGroupPolicySet.Version` is used to specify the version of the security group to be manipulated. If the `Version` value passed in differs from the current latest version of the security group, a failure will be returned. If `Version` is not passed in, the policy of the specified `PolicyIndex` will be deleted directly.
     * @param {DeleteSecurityGroupPoliciesRequest} req
     * @param {function(string, DeleteSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    DeleteSecurityGroupPolicies(req, cb) {
        let resp = new DeleteSecurityGroupPoliciesResponse();
        this.request("DeleteSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * This API is used to create an `OpenSSH RSA` key pair, which can be used to log in to a Linux instance.
     * @param {CreateKeyPairRequest} req
     * @param {function(string, CreateKeyPairResponse):void} cb
     * @public
     */
    CreateKeyPair(req, cb) {
        let resp = new CreateKeyPairResponse();
        this.request("CreateKeyPair", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration of a module. You cannot modify the configuration of the module if it is associated with an instance.
     * @param {ModifyModuleConfigRequest} req
     * @param {function(string, ModifyModuleConfigResponse):void} cb
     * @public
     */
    ModifyModuleConfig(req, cb) {
        let resp = new ModifyModuleConfigResponse();
        this.request("ModifyModuleConfig", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a security group.
     * @param {ModifySecurityGroupAttributeRequest} req
     * @param {function(string, ModifySecurityGroupAttributeResponse):void} cb
     * @public
     */
    ModifySecurityGroupAttribute(req, cb) {
        let resp = new ModifySecurityGroupAttributeResponse();
        this.request("ModifySecurityGroupAttribute", req, resp, cb);
    }

    /**
     * This API is used to display the details of a module.
     * @param {DescribeModuleDetailRequest} req
     * @param {function(string, DescribeModuleDetailResponse):void} cb
     * @public
     */
    DescribeModuleDetail(req, cb) {
        let resp = new DescribeModuleDetailResponse();
        this.request("DescribeModuleDetail", req, resp, cb);
    }

    /**
     * This API is used to delete a CLB instance.
     * @param {DeleteLoadBalancerRequest} req
     * @param {function(string, DeleteLoadBalancerResponse):void} cb
     * @public
     */
    DeleteLoadBalancer(req, cb) {
        let resp = new DeleteLoadBalancerResponse();
        this.request("DeleteLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to get the list of model configurations.
     * @param {DescribeInstanceTypeConfigRequest} req
     * @param {function(string, DescribeInstanceTypeConfigResponse):void} cb
     * @public
     */
    DescribeInstanceTypeConfig(req, cb) {
        let resp = new DescribeInstanceTypeConfigResponse();
        this.request("DescribeInstanceTypeConfig", req, resp, cb);
    }

    /**
     * This API is used to batch delete routing policies from a route table.
     * @param {DeleteRoutesRequest} req
     * @param {function(string, DeleteRoutesResponse):void} cb
     * @public
     */
    DeleteRoutes(req, cb) {
        let resp = new DeleteRoutesResponse();
        this.request("DeleteRoutes", req, resp, cb);
    }

    /**
     * This API is used to modify the outbound and inbound rules of a security group.
     * @param {ModifySecurityGroupPoliciesRequest} req
     * @param {function(string, ModifySecurityGroupPoliciesResponse):void} cb
     * @public
     */
    ModifySecurityGroupPolicies(req, cb) {
        let resp = new ModifySecurityGroupPoliciesResponse();
        this.request("ModifySecurityGroupPolicies", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a subnet.
     * @param {ModifySubnetAttributeRequest} req
     * @param {function(string, ModifySubnetAttributeResponse):void} cb
     * @public
     */
    ModifySubnetAttribute(req, cb) {
        let resp = new ModifySubnetAttributeResponse();
        this.request("ModifySubnetAttribute", req, resp, cb);
    }

    /**
     * This API is used to get the packing quota of a model in a region (when a virtual model is used, a set of correlated packing quotas will be returned).
     * @param {DescribePackingQuotaGroupRequest} req
     * @param {function(string, DescribePackingQuotaGroupResponse):void} cb
     * @public
     */
    DescribePackingQuotaGroup(req, cb) {
        let resp = new DescribePackingQuotaGroupResponse();
        this.request("DescribePackingQuotaGroup", req, resp, cb);
    }

    /**
     * This API is used to query the list of ENIs.
     * @param {DescribeNetworkInterfacesRequest} req
     * @param {function(string, DescribeNetworkInterfacesResponse):void} cb
     * @public
     */
    DescribeNetworkInterfaces(req, cb) {
        let resp = new DescribeNetworkInterfacesResponse();
        this.request("DescribeNetworkInterfaces", req, resp, cb);
    }

    /**
     * This API is used to bind a security group.
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of an image.
     * @param {ModifyImageAttributeRequest} req
     * @param {function(string, ModifyImageAttributeResponse):void} cb
     * @public
     */
    ModifyImageAttribute(req, cb) {
        let resp = new ModifyImageAttributeResponse();
        this.request("ModifyImageAttribute", req, resp, cb);
    }

    /**
     * This API is used to get the status of an async task.
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }

    /**
     * This API is used to get the peak network data.
     * @param {DescribePeakNetworkOverviewRequest} req
     * @param {function(string, DescribePeakNetworkOverviewResponse):void} cb
     * @public
     */
    DescribePeakNetworkOverview(req, cb) {
        let resp = new DescribePeakNetworkOverviewResponse();
        this.request("DescribePeakNetworkOverview", req, resp, cb);
    }

    /**
     * This API is used to create a security group.
     * @param {CreateSecurityGroupRequest} req
     * @param {function(string, CreateSecurityGroupResponse):void} cb
     * @public
     */
    CreateSecurityGroup(req, cb) {
        let resp = new CreateSecurityGroupResponse();
        this.request("CreateSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to query the list of snapshots.

* You can filter results by snapshot ID and the ID and type of the cloud disk for which the snapshot is created. The relationship between different filters is `AND`. For more information on filters, see `Filter`.
* If no parameter is defined, the status of a certain number of snapshots under the current account will be returned. The number is specified by `Limit` and is 20 by default.
     * @param {DescribeSnapshotsRequest} req
     * @param {function(string, DescribeSnapshotsResponse):void} cb
     * @public
     */
    DescribeSnapshots(req, cb) {
        let resp = new DescribeSnapshotsResponse();
        this.request("DescribeSnapshots", req, resp, cb);
    }

    /**
     * This API is used to terminate an instance.
     * @param {TerminateInstancesRequest} req
     * @param {function(string, TerminateInstancesResponse):void} cb
     * @public
     */
    TerminateInstances(req, cb) {
        let resp = new TerminateInstancesResponse();
        this.request("TerminateInstances", req, resp, cb);
    }

    /**
     * This API is used to query the VNC URL of an instance.
     * @param {DescribeInstanceVncUrlRequest} req
     * @param {function(string, DescribeInstanceVncUrlResponse):void} cb
     * @public
     */
    DescribeInstanceVncUrl(req, cb) {
        let resp = new DescribeInstanceVncUrlResponse();
        this.request("DescribeInstanceVncUrl", req, resp, cb);
    }

    /**
     * This API is used to delete a route table.
     * @param {DeleteRouteTableRequest} req
     * @param {function(string, DeleteRouteTableResponse):void} cb
     * @public
     */
    DeleteRouteTable(req, cb) {
        let resp = new DeleteRouteTableResponse();
        this.request("DeleteRouteTable", req, resp, cb);
    }

    /**
     * This API is used to query the security group quota.
     * @param {DescribeSecurityGroupLimitsRequest} req
     * @param {function(string, DescribeSecurityGroupLimitsResponse):void} cb
     * @public
     */
    DescribeSecurityGroupLimits(req, cb) {
        let resp = new DescribeSecurityGroupLimitsResponse();
        this.request("DescribeSecurityGroupLimits", req, resp, cb);
    }

    /**
     * This API is used to bind or unbind a security group to or from multiple CLB instances.
     * @param {SetSecurityGroupForLoadbalancersRequest} req
     * @param {function(string, SetSecurityGroupForLoadbalancersResponse):void} cb
     * @public
     */
    SetSecurityGroupForLoadbalancers(req, cb) {
        let resp = new SetSecurityGroupForLoadbalancersResponse();
        this.request("SetSecurityGroupForLoadbalancers", req, resp, cb);
    }

    /**
     * This API is used to modify the default subnet used when you create an instance in an AZ (if you don't specify the VPC parameter when creating the instance, `sunbetId` will be used).
     * @param {ModifyDefaultSubnetRequest} req
     * @param {function(string, ModifyDefaultSubnetResponse):void} cb
     * @public
     */
    ModifyDefaultSubnet(req, cb) {
        let resp = new ModifyDefaultSubnetResponse();
        this.request("ModifyDefaultSubnet", req, resp, cb);
    }

    /**
     * This API is used to restart an instance. Only instances in `RUNNING` status can be restarted. The instance status will become `REBOOTING` when the API is called successfully and will become `RUNNING` when the instance is restarted successfully. Forced restart is supported. Just like powering off a physical PC and restarting it, a forced restart may cause data loss or file system corruption. Make sure that you use this API only when the server cannot be restarted normally.
     * @param {RebootInstancesRequest} req
     * @param {function(string, RebootInstancesResponse):void} cb
     * @public
     */
    RebootInstances(req, cb) {
        let resp = new RebootInstancesResponse();
        this.request("RebootInstances", req, resp, cb);
    }

    /**
     * This API is used to apply for an IPv6 address for an ENI.
     * @param {AssignIpv6AddressesRequest} req
     * @param {function(string, AssignIpv6AddressesResponse):void} cb
     * @public
     */
    AssignIpv6Addresses(req, cb) {
        let resp = new AssignIpv6AddressesResponse();
        this.request("AssignIpv6Addresses", req, resp, cb);
    }

    /**
     * This API is used to migrate a private IP from an ENI.
It migrates a private IP from one ENI to another. Primary IPs cannot be migrated.
The source and destination ENIs must be in the same subnet.
     * @param {MigratePrivateIpAddressRequest} req
     * @param {function(string, MigratePrivateIpAddressResponse):void} cb
     * @public
     */
    MigratePrivateIpAddress(req, cb) {
        let resp = new MigratePrivateIpAddressResponse();
        this.request("MigratePrivateIpAddress", req, resp, cb);
    }

    /**
     * This API is used to purchase a CLB instance.
     * @param {CreateLoadBalancerRequest} req
     * @param {function(string, CreateLoadBalancerResponse):void} cb
     * @public
     */
    CreateLoadBalancer(req, cb) {
        let resp = new CreateLoadBalancerResponse();
        this.request("CreateLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to modify the default bandwidth cap of a module.
     * @param {ModifyModuleNetworkRequest} req
     * @param {function(string, ModifyModuleNetworkResponse):void} cb
     * @public
     */
    ModifyModuleNetwork(req, cb) {
        let resp = new ModifyModuleNetworkResponse();
        this.request("ModifyModuleNetwork", req, resp, cb);
    }

    /**
     * This API is used to query the list of HAVIPs.
     * @param {DescribeHaVipsRequest} req
     * @param {function(string, DescribeHaVipsResponse):void} cb
     * @public
     */
    DescribeHaVips(req, cb) {
        let resp = new DescribeHaVipsResponse();
        this.request("DescribeHaVips", req, resp, cb);
    }

    /**
     * This API is used to apply for a private IP for an ENI.
     * @param {AssignPrivateIpAddressesRequest} req
     * @param {function(string, AssignPrivateIpAddressesResponse):void} cb
     * @public
     */
    AssignPrivateIpAddresses(req, cb) {
        let resp = new AssignPrivateIpAddressesResponse();
        this.request("AssignPrivateIpAddresses", req, resp, cb);
    }

    /**
     * This API is used to delete an HAVIP.
     * @param {DeleteHaVipRequest} req
     * @param {function(string, DeleteHaVipResponse):void} cb
     * @public
     */
    DeleteHaVip(req, cb) {
        let resp = new DeleteHaVipResponse();
        this.request("DeleteHaVip", req, resp, cb);
    }

    /**
     * This API is used to query the quota information of the EIP under your account in the current region.
     * @param {DescribeAddressQuotaRequest} req
     * @param {function(string, DescribeAddressQuotaResponse):void} cb
     * @public
     */
    DescribeAddressQuota(req, cb) {
        let resp = new DescribeAddressQuotaResponse();
        this.request("DescribeAddressQuota", req, resp, cb);
    }

    /**
     * This API is used to delete multiple CLB listeners.
     * @param {DeleteLoadBalancerListenersRequest} req
     * @param {function(string, DeleteLoadBalancerListenersResponse):void} cb
     * @public
     */
    DeleteLoadBalancerListeners(req, cb) {
        let resp = new DeleteLoadBalancerListenersResponse();
        this.request("DeleteLoadBalancerListeners", req, resp, cb);
    }

    /**
     * This API is used to delete a VPC.
     * @param {DeleteVpcRequest} req
     * @param {function(string, DeleteVpcResponse):void} cb
     * @public
     */
    DeleteVpc(req, cb) {
        let resp = new DeleteVpcResponse();
        this.request("DeleteVpc", req, resp, cb);
    }

    /**
     * This API is used to query the list of subnets.
     * @param {DescribeSubnetsRequest} req
     * @param {function(string, DescribeSubnetsResponse):void} cb
     * @public
     */
    DescribeSubnets(req, cb) {
        let resp = new DescribeSubnetsResponse();
        this.request("DescribeSubnets", req, resp, cb);
    }

    /**
     * This API is used to get the information of an instance.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to view a security group.
     * @param {DescribeSecurityGroupsRequest} req
     * @param {function(string, DescribeSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeSecurityGroups(req, cb) {
        let resp = new DescribeSecurityGroupsResponse();
        this.request("DescribeSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to query a security group rule.
     * @param {DescribeSecurityGroupPoliciesRequest} req
     * @param {function(string, DescribeSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    DescribeSecurityGroupPolicies(req, cb) {
        let resp = new DescribeSecurityGroupPoliciesResponse();
        this.request("DescribeSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * This API is used to query the default subnet in an AZ.
     * @param {DescribeDefaultSubnetRequest} req
     * @param {function(string, DescribeDefaultSubnetResponse):void} cb
     * @public
     */
    DescribeDefaultSubnet(req, cb) {
        let resp = new DescribeDefaultSubnetResponse();
        this.request("DescribeDefaultSubnet", req, resp, cb);
    }

    /**
     * This API is used to reset the password for a running status. You need to explicitly specify the `ForceStop` parameter; otherwise, you can reset the password only for instances that have been shut down.
     * @param {ResetInstancesPasswordRequest} req
     * @param {function(string, ResetInstancesPasswordResponse):void} cb
     * @public
     */
    ResetInstancesPassword(req, cb) {
        let resp = new ResetInstancesPasswordResponse();
        this.request("ResetInstancesPassword", req, resp, cb);
    }

    /**
     * This API is used to create a module.
     * @param {CreateModuleRequest} req
     * @param {function(string, CreateModuleResponse):void} cb
     * @public
     */
    CreateModule(req, cb) {
        let resp = new CreateModuleResponse();
        this.request("CreateModule", req, resp, cb);
    }

    /**
     * This API is used to enable a disabled subnet route.
This API verifies whether a CCN route will conflict with an existing route after it is enabled, and if so, you cannot enable it before you disable the conflicting route first.
     * @param {EnableRoutesRequest} req
     * @param {function(string, EnableRoutesResponse):void} cb
     * @public
     */
    EnableRoutes(req, cb) {
        let resp = new EnableRoutesResponse();
        this.request("EnableRoutes", req, resp, cb);
    }

    /**
     * This API is used to create an HAVIP.
     * @param {CreateHaVipRequest} req
     * @param {function(string, CreateHaVipResponse):void} cb
     * @public
     */
    CreateHaVip(req, cb) {
        let resp = new CreateHaVipResponse();
        this.request("CreateHaVip", req, resp, cb);
    }

    /**
     * This API is used to migrate an ENI.
     * @param {MigrateNetworkInterfaceRequest} req
     * @param {function(string, MigrateNetworkInterfaceResponse):void} cb
     * @public
     */
    MigrateNetworkInterface(req, cb) {
        let resp = new MigrateNetworkInterfaceResponse();
        this.request("MigrateNetworkInterface", req, resp, cb);
    }

    /**
     * This API is used to create a CLB listener.
     * @param {CreateListenerRequest} req
     * @param {function(string, CreateListenerResponse):void} cb
     * @public
     */
    CreateListener(req, cb) {
        let resp = new CreateListenerResponse();
        this.request("CreateListener", req, resp, cb);
    }

    /**
     * This API is used to delete a snapshot.

* Only snapshots in the `NORMAL` state can be deleted. To query the state of a snapshot, you can call the [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1) API and check the `SnapshotState` field in the response.
* Batch operations are supported. If there is any snapshot that cannot be deleted, the operation will not be performed and a specific error code will be returned.
     * @param {DeleteSnapshotsRequest} req
     * @param {function(string, DeleteSnapshotsResponse):void} cb
     * @public
     */
    DeleteSnapshots(req, cb) {
        let resp = new DeleteSnapshotsResponse();
        this.request("DeleteSnapshots", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a route table.
     * @param {ModifyRouteTableAttributeRequest} req
     * @param {function(string, ModifyRouteTableAttributeResponse):void} cb
     * @public
     */
    ModifyRouteTableAttribute(req, cb) {
        let resp = new ModifyRouteTableAttributeResponse();
        this.request("ModifyRouteTableAttribute", req, resp, cb);
    }

    /**
     * This API is used to modify the forwarding weight of a real server bound to a listener.
     * @param {ModifyTargetWeightRequest} req
     * @param {function(string, ModifyTargetWeightResponse):void} cb
     * @public
     */
    ModifyTargetWeight(req, cb) {
        let resp = new ModifyTargetWeightResponse();
        this.request("ModifyTargetWeight", req, resp, cb);
    }

    /**
     * This API is used to modify the default security group of a module.
     * @param {ModifyModuleSecurityGroupsRequest} req
     * @param {function(string, ModifyModuleSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyModuleSecurityGroups(req, cb) {
        let resp = new ModifyModuleSecurityGroupsResponse();
        this.request("ModifyModuleSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to create a routing policy.
     * @param {CreateRoutesRequest} req
     * @param {function(string, CreateRoutesResponse):void} cb
     * @public
     */
    CreateRoutes(req, cb) {
        let resp = new CreateRoutesResponse();
        this.request("CreateRoutes", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of an HAVIP.
     * @param {ModifyHaVipAttributeRequest} req
     * @param {function(string, ModifyHaVipAttributeResponse):void} cb
     * @public
     */
    ModifyHaVipAttribute(req, cb) {
        let resp = new ModifyHaVipAttributeResponse();
        this.request("ModifyHaVipAttribute", req, resp, cb);
    }

    /**
     * This API is used to release one or multiple EIPs.
This operation is irreversible. Once you release an EIP, the IP address associated with it will no longer belong to you.
Only EIPs in `UNBIND` status can be released.
     * @param {ReleaseAddressesRequest} req
     * @param {function(string, ReleaseAddressesResponse):void} cb
     * @public
     */
    ReleaseAddresses(req, cb) {
        let resp = new ReleaseAddressesResponse();
        this.request("ReleaseAddresses", req, resp, cb);
    }

    /**
     * This API is used to modify the IP direct access of a module.
     * @param {ModifyModuleIpDirectRequest} req
     * @param {function(string, ModifyModuleIpDirectResponse):void} cb
     * @public
     */
    ModifyModuleIpDirect(req, cb) {
        let resp = new ModifyModuleIpDirectResponse();
        this.request("ModifyModuleIpDirect", req, resp, cb);
    }

    /**
     * This API is used to query the list of the real servers bound to a CLB instance.
     * @param {DescribeTargetsRequest} req
     * @param {function(string, DescribeTargetsResponse):void} cb
     * @public
     */
    DescribeTargets(req, cb) {
        let resp = new DescribeTargetsResponse();
        this.request("DescribeTargets", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a VPC.
     * @param {ModifyVpcAttributeRequest} req
     * @param {function(string, ModifyVpcAttributeResponse):void} cb
     * @public
     */
    ModifyVpcAttribute(req, cb) {
        let resp = new ModifyVpcAttributeResponse();
        this.request("ModifyVpcAttribute", req, resp, cb);
    }

    /**
     * This API is used to query statistics on the instances associated with a security group.
     * @param {DescribeSecurityGroupAssociationStatisticsRequest} req
     * @param {function(string, DescribeSecurityGroupAssociationStatisticsResponse):void} cb
     * @public
     */
    DescribeSecurityGroupAssociationStatistics(req, cb) {
        let resp = new DescribeSecurityGroupAssociationStatisticsResponse();
        this.request("DescribeSecurityGroupAssociationStatistics", req, resp, cb);
    }

    /**
     * This API is used to get the peak data of basic information such as CPU, memory, and disk.
     * @param {DescribePeakBaseOverviewRequest} req
     * @param {function(string, DescribePeakBaseOverviewResponse):void} cb
     * @public
     */
    DescribePeakBaseOverview(req, cb) {
        let resp = new DescribePeakBaseOverviewResponse();
        this.request("DescribePeakBaseOverview", req, resp, cb);
    }

    /**
     * This API is used to modify EIP attributes.
     * @param {ModifyAddressAttributeRequest} req
     * @param {function(string, ModifyAddressAttributeResponse):void} cb
     * @public
     */
    ModifyAddressAttribute(req, cb) {
        let resp = new ModifyAddressAttributeResponse();
        this.request("ModifyAddressAttribute", req, resp, cb);
    }

    /**
     * <p>This API is used to create a security group policy.</p>
<p>In the `SecurityGroupPolicySet` parameter:</p>
<ul>
<li>`Version`: the version number of a security group policy, which automatically increases by one each time you update the security policy, to prevent expiration of the updated routing policies. If it is left empty, any conflicts will be ignored.</li>
<li>When creating the `Egress` and `Ingress` polices,<ul>
<li><code>Protocol</code>: <code>TCP</code>, <code>UDP</code>, <code>ICMP</code>, <code>GRE</code>, or <code>ALL</code>.</li>
<li>`CidrBlock`: a CIDR block in the correct format. In a classic network, if a `CidrBlock` contains private IPs on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.</li>
<li>`SecurityGroupId`: ID of the security group. It can be the ID of security group to be modified, or the ID of other security group in the same project. All private IPs of all CVMs under the security group will be covered. If this field is used, the policy will automatically change according to the CVM associated with the group ID while being used to match network messages. You don’t need to change it manually.</li>
<li>`Port`: a single port number such as 80, or a port range in the format of “8000-8010”. You may use this field only if the `Protocol` field takes the value `TCP` or `UDP`. Otherwise `Protocol` and `Port` are mutually exclusive.</li>
<li>`Action`: only allows `ACCEPT` or `DROP`.</li>
<li>`CidrBlock`, `SecurityGroupId`, and `AddressTemplate` are mutually exclusive. `Protocol` + `Port` and `ServiceTemplate` are mutually exclusive.</li>
<li>You can only create policies in one direction in each request. To specify the `PolicyIndex` parameter, use the same index number in policies.</li>
</ul></li></ul>
<p>Default API request rate limit: 20 requests/sec.</p>
     * @param {CreateSecurityGroupPoliciesRequest} req
     * @param {function(string, CreateSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    CreateSecurityGroupPolicies(req, cb) {
        let resp = new CreateSecurityGroupPoliciesResponse();
        this.request("CreateSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * This API is used to delete an image.
     * @param {DeleteImageRequest} req
     * @param {function(string, DeleteImageResponse):void} cb
     * @public
     */
    DeleteImage(req, cb) {
        let resp = new DeleteImageResponse();
        this.request("DeleteImage", req, resp, cb);
    }


}
module.exports = EcmClient;
