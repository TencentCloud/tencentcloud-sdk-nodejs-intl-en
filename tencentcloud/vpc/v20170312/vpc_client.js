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
const DeleteDirectConnectGatewayCcnRoutesResponse = models.DeleteDirectConnectGatewayCcnRoutesResponse;
const HaVipDisassociateAddressIpRequest = models.HaVipDisassociateAddressIpRequest;
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const Ipv6Address = models.Ipv6Address;
const Subnet = models.Subnet;
const ModifyAddressTemplateGroupAttributeRequest = models.ModifyAddressTemplateGroupAttributeRequest;
const ModifyVpnGatewayAttributeRequest = models.ModifyVpnGatewayAttributeRequest;
const ModifyAddressTemplateAttributeResponse = models.ModifyAddressTemplateAttributeResponse;
const ServiceTemplateGroup = models.ServiceTemplateGroup;
const CreateNetworkInterfaceRequest = models.CreateNetworkInterfaceRequest;
const InstanceStatistic = models.InstanceStatistic;
const UnassignIpv6CidrBlockRequest = models.UnassignIpv6CidrBlockRequest;
const CreateRoutesRequest = models.CreateRoutesRequest;
const CCN = models.CCN;
const CreateVpnConnectionRequest = models.CreateVpnConnectionRequest;
const CcnRoute = models.CcnRoute;
const DeleteServiceTemplateResponse = models.DeleteServiceTemplateResponse;
const ServiceTemplate = models.ServiceTemplate;
const CreateServiceTemplateRequest = models.CreateServiceTemplateRequest;
const DeleteHaVipResponse = models.DeleteHaVipResponse;
const VpnConnection = models.VpnConnection;
const DescribeCcnAttachedInstancesRequest = models.DescribeCcnAttachedInstancesRequest;
const DescribeCcnsRequest = models.DescribeCcnsRequest;
const ModifyNatGatewayAttributeResponse = models.ModifyNatGatewayAttributeResponse;
const DescribeNetDetectsRequest = models.DescribeNetDetectsRequest;
const CreateAddressTemplateGroupRequest = models.CreateAddressTemplateGroupRequest;
const DescribeSubnetsRequest = models.DescribeSubnetsRequest;
const CreateSubnetRequest = models.CreateSubnetRequest;
const AddressTemplateGroup = models.AddressTemplateGroup;
const DownloadCustomerGatewayConfigurationRequest = models.DownloadCustomerGatewayConfigurationRequest;
const DestinationIpPortTranslationNatRule = models.DestinationIpPortTranslationNatRule;
const HaVip = models.HaVip;
const CreateDefaultVpcRequest = models.CreateDefaultVpcRequest;
const DeleteSubnetResponse = models.DeleteSubnetResponse;
const ModifyAddressesBandwidthResponse = models.ModifyAddressesBandwidthResponse;
const DescribeAddressQuotaResponse = models.DescribeAddressQuotaResponse;
const Vpc = models.Vpc;
const CreateVpnGatewayResponse = models.CreateVpnGatewayResponse;
const DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse = models.DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse;
const ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse = models.ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse;
const DescribeVpcIpv6AddressesResponse = models.DescribeVpcIpv6AddressesResponse;
const DescribeAccountAttributesRequest = models.DescribeAccountAttributesRequest;
const ModifyServiceTemplateGroupAttributeRequest = models.ModifyServiceTemplateGroupAttributeRequest;
const ModifyCcnRegionBandwidthLimitsTypeResponse = models.ModifyCcnRegionBandwidthLimitsTypeResponse;
const DescribeVpnGatewaysResponse = models.DescribeVpnGatewaysResponse;
const EnableCcnRoutesResponse = models.EnableCcnRoutesResponse;
const CcnRegionBandwidthLimit = models.CcnRegionBandwidthLimit;
const DescribeCcnRoutesRequest = models.DescribeCcnRoutesRequest;
const ModifyServiceTemplateAttributeRequest = models.ModifyServiceTemplateAttributeRequest;
const DescribeServiceTemplateGroupsResponse = models.DescribeServiceTemplateGroupsResponse;
const DetachCcnInstancesResponse = models.DetachCcnInstancesResponse;
const ReplaceSecurityGroupPolicyRequest = models.ReplaceSecurityGroupPolicyRequest;
const ModifyServiceTemplateGroupAttributeResponse = models.ModifyServiceTemplateGroupAttributeResponse;
const VpnGateway = models.VpnGateway;
const SecurityGroupPolicy = models.SecurityGroupPolicy;
const DownloadCustomerGatewayConfigurationResponse = models.DownloadCustomerGatewayConfigurationResponse;
const DeleteSubnetRequest = models.DeleteSubnetRequest;
const DescribeAddressTemplateGroupsRequest = models.DescribeAddressTemplateGroupsRequest;
const CheckNetDetectStateResponse = models.CheckNetDetectStateResponse;
const ResetAttachCcnInstancesResponse = models.ResetAttachCcnInstancesResponse;
const DeleteNetDetectResponse = models.DeleteNetDetectResponse;
const AllocateAddressesRequest = models.AllocateAddressesRequest;
const NatGatewayAddress = models.NatGatewayAddress;
const ModifyCcnRegionBandwidthLimitsTypeRequest = models.ModifyCcnRegionBandwidthLimitsTypeRequest;
const RouteTable = models.RouteTable;
const DeleteNetworkInterfaceRequest = models.DeleteNetworkInterfaceRequest;
const DetachClassicLinkVpcRequest = models.DetachClassicLinkVpcRequest;
const DeleteAddressTemplateGroupResponse = models.DeleteAddressTemplateGroupResponse;
const ReplaceRoutesResponse = models.ReplaceRoutesResponse;
const Tag = models.Tag;
const DirectConnectGatewayCcnRoute = models.DirectConnectGatewayCcnRoute;
const DeleteVpcRequest = models.DeleteVpcRequest;
const DisassociateNatGatewayAddressResponse = models.DisassociateNatGatewayAddressResponse;
const ModifyServiceTemplateAttributeResponse = models.ModifyServiceTemplateAttributeResponse;
const DescribeCcnsResponse = models.DescribeCcnsResponse;
const MigratePrivateIpAddressRequest = models.MigratePrivateIpAddressRequest;
const DescribeServiceTemplatesRequest = models.DescribeServiceTemplatesRequest;
const DescribeHaVipsResponse = models.DescribeHaVipsResponse;
const DeleteRouteTableRequest = models.DeleteRouteTableRequest;
const CreateSubnetResponse = models.CreateSubnetResponse;
const NetDetect = models.NetDetect;
const DescribeSecurityGroupPoliciesResponse = models.DescribeSecurityGroupPoliciesResponse;
const AssignIpv6SubnetCidrBlockRequest = models.AssignIpv6SubnetCidrBlockRequest;
const ModifySecurityGroupPoliciesRequest = models.ModifySecurityGroupPoliciesRequest;
const ModifyAddressAttributeResponse = models.ModifyAddressAttributeResponse;
const AttachClassicLinkVpcRequest = models.AttachClassicLinkVpcRequest;
const GatewayFlowMonitorDetail = models.GatewayFlowMonitorDetail;
const ResetVpnConnectionResponse = models.ResetVpnConnectionResponse;
const NatGateway = models.NatGateway;
const CreateVpcResponse = models.CreateVpcResponse;
const ModifyRouteTableAttributeResponse = models.ModifyRouteTableAttributeResponse;
const AssistantCidr = models.AssistantCidr;
const SetCcnRegionBandwidthLimitsResponse = models.SetCcnRegionBandwidthLimitsResponse;
const NetworkInterface = models.NetworkInterface;
const DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse = models.DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse;
const DeleteVpnGatewayRequest = models.DeleteVpnGatewayRequest;
const ReplaceRouteTableAssociationResponse = models.ReplaceRouteTableAssociationResponse;
const NetDetectState = models.NetDetectState;
const ModifyHaVipAttributeRequest = models.ModifyHaVipAttributeRequest;
const AttachCcnInstancesRequest = models.AttachCcnInstancesRequest;
const ReleaseAddressesResponse = models.ReleaseAddressesResponse;
const AddressTemplate = models.AddressTemplate;
const CcnInstance = models.CcnInstance;
const DeleteSecurityGroupPoliciesRequest = models.DeleteSecurityGroupPoliciesRequest;
const ResetVpnConnectionRequest = models.ResetVpnConnectionRequest;
const VpnGatewayQuota = models.VpnGatewayQuota;
const ItemPrice = models.ItemPrice;
const DeleteNatGatewayRequest = models.DeleteNatGatewayRequest;
const DeleteVpnConnectionResponse = models.DeleteVpnConnectionResponse;
const ReplaceSecurityGroupPolicyResponse = models.ReplaceSecurityGroupPolicyResponse;
const ModifyPrivateIpAddressesAttributeResponse = models.ModifyPrivateIpAddressesAttributeResponse;
const SubnetInput = models.SubnetInput;
const ModifyHaVipAttributeResponse = models.ModifyHaVipAttributeResponse;
const CreateCcnResponse = models.CreateCcnResponse;
const EnableCcnRoutesRequest = models.EnableCcnRoutesRequest;
const DisableCcnRoutesRequest = models.DisableCcnRoutesRequest;
const DescribeVpcPrivateIpAddressesResponse = models.DescribeVpcPrivateIpAddressesResponse;
const DefaultVpcSubnet = models.DefaultVpcSubnet;
const AssignIpv6SubnetCidrBlockResponse = models.AssignIpv6SubnetCidrBlockResponse;
const ModifyNatGatewayAttributeRequest = models.ModifyNatGatewayAttributeRequest;
const DeleteSecurityGroupResponse = models.DeleteSecurityGroupResponse;
const Route = models.Route;
const CreateSubnetsResponse = models.CreateSubnetsResponse;
const CreateNetworkInterfaceResponse = models.CreateNetworkInterfaceResponse;
const HaVipAssociateAddressIpRequest = models.HaVipAssociateAddressIpRequest;
const DescribeGatewayFlowMonitorDetailRequest = models.DescribeGatewayFlowMonitorDetailRequest;
const DescribeAddressQuotaRequest = models.DescribeAddressQuotaRequest;
const ModifyNetworkInterfaceAttributeResponse = models.ModifyNetworkInterfaceAttributeResponse;
const TransformAddressResponse = models.TransformAddressResponse;
const InquiryPriceCreateVpnGatewayResponse = models.InquiryPriceCreateVpnGatewayResponse;
const CreateNatGatewayDestinationIpPortTranslationNatRuleRequest = models.CreateNatGatewayDestinationIpPortTranslationNatRuleRequest;
const AssignIpv6AddressesResponse = models.AssignIpv6AddressesResponse;
const CreateRoutesResponse = models.CreateRoutesResponse;
const DescribeVpcIpv6AddressesRequest = models.DescribeVpcIpv6AddressesRequest;
const DescribeSecurityGroupsResponse = models.DescribeSecurityGroupsResponse;
const RouteTableAssociation = models.RouteTableAssociation;
const DetachNetworkInterfaceResponse = models.DetachNetworkInterfaceResponse;
const ModifyIpv6AddressesAttributeRequest = models.ModifyIpv6AddressesAttributeRequest;
const ResetRoutesResponse = models.ResetRoutesResponse;
const FilterObject = models.FilterObject;
const DescribeVpcsRequest = models.DescribeVpcsRequest;
const ModifySecurityGroupPoliciesResponse = models.ModifySecurityGroupPoliciesResponse;
const DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest = models.DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest;
const NatGatewayDestinationIpPortTranslationNatRule = models.NatGatewayDestinationIpPortTranslationNatRule;
const DescribeNetDetectStatesResponse = models.DescribeNetDetectStatesResponse;
const NetworkInterfaceAttachment = models.NetworkInterfaceAttachment;
const ModifyVpnConnectionAttributeResponse = models.ModifyVpnConnectionAttributeResponse;
const CreateVpnConnectionResponse = models.CreateVpnConnectionResponse;
const DetachNetworkInterfaceRequest = models.DetachNetworkInterfaceRequest;
const AddressTemplateSpecification = models.AddressTemplateSpecification;
const CheckNetDetectStateRequest = models.CheckNetDetectStateRequest;
const AssignIpv6AddressesRequest = models.AssignIpv6AddressesRequest;
const DescribeAddressesResponse = models.DescribeAddressesResponse;
const SecurityGroupAssociationStatistics = models.SecurityGroupAssociationStatistics;
const AttachClassicLinkVpcResponse = models.AttachClassicLinkVpcResponse;
const ModifyVpcAttributeRequest = models.ModifyVpcAttributeRequest;
const CreateServiceTemplateGroupResponse = models.CreateServiceTemplateGroupResponse;
const CreateAddressTemplateRequest = models.CreateAddressTemplateRequest;
const DescribeNatGatewaysResponse = models.DescribeNatGatewaysResponse;
const AttachCcnInstancesResponse = models.AttachCcnInstancesResponse;
const CreateDefaultVpcResponse = models.CreateDefaultVpcResponse;
const ModifyVpcAttributeResponse = models.ModifyVpcAttributeResponse;
const DeleteCcnResponse = models.DeleteCcnResponse;
const ModifyIpv6AddressesAttributeResponse = models.ModifyIpv6AddressesAttributeResponse;
const DeleteVpcResponse = models.DeleteVpcResponse;
const DescribeCcnRoutesResponse = models.DescribeCcnRoutesResponse;
const DisassociateNatGatewayAddressRequest = models.DisassociateNatGatewayAddressRequest;
const DescribeNatGatewaysRequest = models.DescribeNatGatewaysRequest;
const PrivateIpAddressSpecification = models.PrivateIpAddressSpecification;
const ModifySecurityGroupAttributeResponse = models.ModifySecurityGroupAttributeResponse;
const SecurityGroup = models.SecurityGroup;
const MigratePrivateIpAddressResponse = models.MigratePrivateIpAddressResponse;
const DeleteRouteTableResponse = models.DeleteRouteTableResponse;
const ResetNatGatewayConnectionRequest = models.ResetNatGatewayConnectionRequest;
const ModifyRouteTableAttributeRequest = models.ModifyRouteTableAttributeRequest;
const NetDetectIpState = models.NetDetectIpState;
const AccountAttribute = models.AccountAttribute;
const DisassociateAddressResponse = models.DisassociateAddressResponse;
const DeleteDirectConnectGatewayCcnRoutesRequest = models.DeleteDirectConnectGatewayCcnRoutesRequest;
const DescribeCcnAttachedInstancesResponse = models.DescribeCcnAttachedInstancesResponse;
const HaVipAssociateAddressIpResponse = models.HaVipAssociateAddressIpResponse;
const DeleteRoutesRequest = models.DeleteRoutesRequest;
const AssociateAddressRequest = models.AssociateAddressRequest;
const CreateNetDetectRequest = models.CreateNetDetectRequest;
const CreateAddressTemplateResponse = models.CreateAddressTemplateResponse;
const CreateNatGatewayDestinationIpPortTranslationNatRuleResponse = models.CreateNatGatewayDestinationIpPortTranslationNatRuleResponse;
const DeleteAddressTemplateGroupRequest = models.DeleteAddressTemplateGroupRequest;
const AttachNetworkInterfaceResponse = models.AttachNetworkInterfaceResponse;
const DescribeNetworkInterfaceLimitRequest = models.DescribeNetworkInterfaceLimitRequest;
const ServiceTemplateSpecification = models.ServiceTemplateSpecification;
const DescribeServiceTemplatesResponse = models.DescribeServiceTemplatesResponse;
const AcceptAttachCcnInstancesRequest = models.AcceptAttachCcnInstancesRequest;
const ResetAttachCcnInstancesRequest = models.ResetAttachCcnInstancesRequest;
const CreateHaVipResponse = models.CreateHaVipResponse;
const DescribeGatewayFlowMonitorDetailResponse = models.DescribeGatewayFlowMonitorDetailResponse;
const DescribeVpnGatewaysRequest = models.DescribeVpnGatewaysRequest;
const ClassicLinkInstance = models.ClassicLinkInstance;
const CreateVpnGatewayRequest = models.CreateVpnGatewayRequest;
const DescribeSubnetsResponse = models.DescribeSubnetsResponse;
const ModifyNetworkInterfaceAttributeRequest = models.ModifyNetworkInterfaceAttributeRequest;
const DisableCcnRoutesResponse = models.DisableCcnRoutesResponse;
const HaVipDisassociateAddressIpResponse = models.HaVipDisassociateAddressIpResponse;
const CreateSubnetsRequest = models.CreateSubnetsRequest;
const DescribeAddressTemplateGroupsResponse = models.DescribeAddressTemplateGroupsResponse;
const SetCcnRegionBandwidthLimitsRequest = models.SetCcnRegionBandwidthLimitsRequest;
const DetachClassicLinkVpcResponse = models.DetachClassicLinkVpcResponse;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const CreateDirectConnectGatewayCcnRoutesRequest = models.CreateDirectConnectGatewayCcnRoutesRequest;
const UnassignPrivateIpAddressesRequest = models.UnassignPrivateIpAddressesRequest;
const AssociateAddressResponse = models.AssociateAddressResponse;
const Filter = models.Filter;
const CreateDirectConnectGatewayCcnRoutesResponse = models.CreateDirectConnectGatewayCcnRoutesResponse;
const ModifySubnetAttributeRequest = models.ModifySubnetAttributeRequest;
const CreateRouteTableRequest = models.CreateRouteTableRequest;
const ModifyNetDetectResponse = models.ModifyNetDetectResponse;
const UnassignIpv6SubnetCidrBlockRequest = models.UnassignIpv6SubnetCidrBlockRequest;
const CreateHaVipRequest = models.CreateHaVipRequest;
const DescribeAddressesRequest = models.DescribeAddressesRequest;
const ResetRoutesRequest = models.ResetRoutesRequest;
const Ipv6SubnetCidrBlock = models.Ipv6SubnetCidrBlock;
const DescribeSecurityGroupPoliciesRequest = models.DescribeSecurityGroupPoliciesRequest;
const MigrateNetworkInterfaceRequest = models.MigrateNetworkInterfaceRequest;
const AssignIpv6CidrBlockRequest = models.AssignIpv6CidrBlockRequest;
const CreateSecurityGroupPoliciesResponse = models.CreateSecurityGroupPoliciesResponse;
const CreateSecurityGroupResponse = models.CreateSecurityGroupResponse;
const RejectAttachCcnInstancesResponse = models.RejectAttachCcnInstancesResponse;
const DeleteSecurityGroupRequest = models.DeleteSecurityGroupRequest;
const ModifyVpnConnectionAttributeRequest = models.ModifyVpnConnectionAttributeRequest;
const ReplaceRoutesRequest = models.ReplaceRoutesRequest;
const CreateRouteTableResponse = models.CreateRouteTableResponse;
const DescribeNetworkInterfaceLimitResponse = models.DescribeNetworkInterfaceLimitResponse;
const DeleteRoutesResponse = models.DeleteRoutesResponse;
const AssignIpv6CidrBlockResponse = models.AssignIpv6CidrBlockResponse;
const CreateCcnRequest = models.CreateCcnRequest;
const DescribeSecurityGroupAssociationStatisticsResponse = models.DescribeSecurityGroupAssociationStatisticsResponse;
const DescribeDirectConnectGatewayCcnRoutesResponse = models.DescribeDirectConnectGatewayCcnRoutesResponse;
const ModifyPrivateIpAddressesAttributeRequest = models.ModifyPrivateIpAddressesAttributeRequest;
const ResetNatGatewayConnectionResponse = models.ResetNatGatewayConnectionResponse;
const UnassignIpv6SubnetCidrBlockResponse = models.UnassignIpv6SubnetCidrBlockResponse;
const CreateNetDetectResponse = models.CreateNetDetectResponse;
const CreateSecurityGroupRequest = models.CreateSecurityGroupRequest;
const ModifyCcnAttributeResponse = models.ModifyCcnAttributeResponse;
const DeleteCcnRequest = models.DeleteCcnRequest;
const ResetVpnGatewayInternetMaxBandwidthResponse = models.ResetVpnGatewayInternetMaxBandwidthResponse;
const DescribeClassicLinkInstancesRequest = models.DescribeClassicLinkInstancesRequest;
const CreateServiceTemplateResponse = models.CreateServiceTemplateResponse;
const DeleteNetworkInterfaceResponse = models.DeleteNetworkInterfaceResponse;
const CreateNatGatewayRequest = models.CreateNatGatewayRequest;
const DeleteNetDetectRequest = models.DeleteNetDetectRequest;
const UnassignIpv6AddressesResponse = models.UnassignIpv6AddressesResponse;
const IPSECOptionsSpecification = models.IPSECOptionsSpecification;
const DescribeAccountAttributesResponse = models.DescribeAccountAttributesResponse;
const InquiryPriceCreateVpnGatewayRequest = models.InquiryPriceCreateVpnGatewayRequest;
const VpcIpv6Address = models.VpcIpv6Address;
const UnassignIpv6AddressesRequest = models.UnassignIpv6AddressesRequest;
const DeleteVpnConnectionRequest = models.DeleteVpnConnectionRequest;
const DescribeSecurityGroupsRequest = models.DescribeSecurityGroupsRequest;
const DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest = models.DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest;
const CustomerGatewayVendor = models.CustomerGatewayVendor;
const DescribeAddressTemplatesRequest = models.DescribeAddressTemplatesRequest;
const ModifyCcnAttributeRequest = models.ModifyCcnAttributeRequest;
const SecurityGroupPolicySet = models.SecurityGroupPolicySet;
const ModifyAddressTemplateGroupAttributeResponse = models.ModifyAddressTemplateGroupAttributeResponse;
const DeleteSecurityGroupPoliciesResponse = models.DeleteSecurityGroupPoliciesResponse;
const ModifyAddressAttributeRequest = models.ModifyAddressAttributeRequest;
const ResetVpnGatewayInternetMaxBandwidthRequest = models.ResetVpnGatewayInternetMaxBandwidthRequest;
const DescribeVpnConnectionsResponse = models.DescribeVpnConnectionsResponse;
const ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest = models.ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest;
const RejectAttachCcnInstancesRequest = models.RejectAttachCcnInstancesRequest;
const DeleteVpnGatewayResponse = models.DeleteVpnGatewayResponse;
const DescribeAddressTemplatesResponse = models.DescribeAddressTemplatesResponse;
const DescribeHaVipsRequest = models.DescribeHaVipsRequest;
const Quota = models.Quota;
const UnassignPrivateIpAddressesResponse = models.UnassignPrivateIpAddressesResponse;
const Address = models.Address;
const ModifyVpnGatewayAttributeResponse = models.ModifyVpnGatewayAttributeResponse;
const DeleteAddressTemplateResponse = models.DeleteAddressTemplateResponse;
const DescribeVpnConnectionsRequest = models.DescribeVpnConnectionsRequest;
const ModifyAddressesBandwidthRequest = models.ModifyAddressesBandwidthRequest;
const DeleteHaVipRequest = models.DeleteHaVipRequest;
const ModifySubnetAttributeResponse = models.ModifySubnetAttributeResponse;
const DescribeServiceTemplateGroupsRequest = models.DescribeServiceTemplateGroupsRequest;
const UnassignIpv6CidrBlockResponse = models.UnassignIpv6CidrBlockResponse;
const ReleaseAddressesRequest = models.ReleaseAddressesRequest;
const CreateVpcRequest = models.CreateVpcRequest;
const ReplaceDirectConnectGatewayCcnRoutesResponse = models.ReplaceDirectConnectGatewayCcnRoutesResponse;
const CreateServiceTemplateGroupRequest = models.CreateServiceTemplateGroupRequest;
const DeleteServiceTemplateRequest = models.DeleteServiceTemplateRequest;
const DescribeSecurityGroupAssociationStatisticsRequest = models.DescribeSecurityGroupAssociationStatisticsRequest;
const DescribeDirectConnectGatewayCcnRoutesRequest = models.DescribeDirectConnectGatewayCcnRoutesRequest;
const DescribeClassicLinkInstancesResponse = models.DescribeClassicLinkInstancesResponse;
const DeleteAddressTemplateRequest = models.DeleteAddressTemplateRequest;
const DeleteServiceTemplateGroupResponse = models.DeleteServiceTemplateGroupResponse;
const AllocateAddressesResponse = models.AllocateAddressesResponse;
const TransformAddressRequest = models.TransformAddressRequest;
const ReplaceDirectConnectGatewayCcnRoutesRequest = models.ReplaceDirectConnectGatewayCcnRoutesRequest;
const DescribeVpcPrivateIpAddressesRequest = models.DescribeVpcPrivateIpAddressesRequest;
const DisassociateAddressRequest = models.DisassociateAddressRequest;
const ReplaceRouteTableAssociationRequest = models.ReplaceRouteTableAssociationRequest;
const AttachNetworkInterfaceRequest = models.AttachNetworkInterfaceRequest;
const DetachCcnInstancesRequest = models.DetachCcnInstancesRequest;
const CreateSecurityGroupPoliciesRequest = models.CreateSecurityGroupPoliciesRequest;
const CreateNatGatewayResponse = models.CreateNatGatewayResponse;
const IKEOptionsSpecification = models.IKEOptionsSpecification;
const MigrateNetworkInterfaceResponse = models.MigrateNetworkInterfaceResponse;
const DescribeVpcsResponse = models.DescribeVpcsResponse;
const VpcPrivateIpAddress = models.VpcPrivateIpAddress;
const ModifyAddressTemplateAttributeRequest = models.ModifyAddressTemplateAttributeRequest;
const ModifySecurityGroupAttributeRequest = models.ModifySecurityGroupAttributeRequest;
const CreateAddressTemplateGroupResponse = models.CreateAddressTemplateGroupResponse;
const CcnAttachedInstance = models.CcnAttachedInstance;
const ModifyNetDetectRequest = models.ModifyNetDetectRequest;
const SecurityPolicyDatabase = models.SecurityPolicyDatabase;
const AcceptAttachCcnInstancesResponse = models.AcceptAttachCcnInstancesResponse;
const DeleteServiceTemplateGroupRequest = models.DeleteServiceTemplateGroupRequest;
const DescribeNetDetectStatesRequest = models.DescribeNetDetectStatesRequest;
const DeleteNatGatewayResponse = models.DeleteNatGatewayResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const Price = models.Price;
const DescribeNetDetectsResponse = models.DescribeNetDetectsResponse;


/**
 * vpc client
 * @class
 */
class VpcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vpc.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * This API (ReplaceSecurityGroupPolicy) is used to replace a single security group policy (SecurityGroupPolicy).
Only one policy in a single direction can be replaced in each request, and the PolicyIndex parameter must be specified.
     * @param {ReplaceSecurityGroupPolicyRequest} req
     * @param {function(string, ReplaceSecurityGroupPolicyResponse):void} cb
     * @public
     */
    ReplaceSecurityGroupPolicy(req, cb) {
        let resp = new ReplaceSecurityGroupPolicyResponse();
        this.request("ReplaceSecurityGroupPolicy", req, resp, cb);
    }

    /**
     * This API (ModifyNatGatewayAttribute) is used to modify the attributes of a NAT gateway.
     * @param {ModifyNatGatewayAttributeRequest} req
     * @param {function(string, ModifyNatGatewayAttributeResponse):void} cb
     * @public
     */
    ModifyNatGatewayAttribute(req, cb) {
        let resp = new ModifyNatGatewayAttributeResponse();
        this.request("ModifyNatGatewayAttribute", req, resp, cb);
    }

    /**
     * This API is used to query the EIP async job execution results.
     * @param {DescribeTaskResultRequest} req
     * @param {function(string, DescribeTaskResultResponse):void} cb
     * @public
     */
    DescribeTaskResult(req, cb) {
        let resp = new DescribeTaskResultResponse();
        this.request("DescribeTaskResult", req, resp, cb);
    }

    /**
     * This API (DescribeServiceTemplateGroups) is used to query a protocol port template group.
     * @param {DescribeServiceTemplateGroupsRequest} req
     * @param {function(string, DescribeServiceTemplateGroupsResponse):void} cb
     * @public
     */
    DescribeServiceTemplateGroups(req, cb) {
        let resp = new DescribeServiceTemplateGroupsResponse();
        this.request("DescribeServiceTemplateGroups", req, resp, cb);
    }

    /**
     * This API (CreateRouteTable) is used to create a route table.
* After the VPC has been created, the system will create a default route table with which all newly created subnets will be associated. By default, you can use this route table to manage your routing policies. If you have multiple routing policies, you can call the API for creating route table to create more route tables to manage your routing policies.
     * @param {CreateRouteTableRequest} req
     * @param {function(string, CreateRouteTableResponse):void} cb
     * @public
     */
    CreateRouteTable(req, cb) {
        let resp = new CreateRouteTableResponse();
        this.request("CreateRouteTable", req, resp, cb);
    }

    /**
     * This API is used to assign IPv6 ranges.
* To use this API, you must already have a VPC instance. If you do not have a VPC instance yet, use the <a href="https://cloud.tencent.com/document/api/215/15774" title="CreateVpc" target="_blank">CreateVpc</a> API to create one.
* Each VPC can apply for only one IPv6 range.
     * @param {AssignIpv6CidrBlockRequest} req
     * @param {function(string, AssignIpv6CidrBlockResponse):void} cb
     * @public
     */
    AssignIpv6CidrBlock(req, cb) {
        let resp = new AssignIpv6CidrBlockResponse();
        this.request("AssignIpv6CidrBlock", req, resp, cb);
    }

    /**
     * This API (DescribeNatGatewayDestinationIpPortTranslationNatRules) is used to query the array of objects of the port forwarding rules for a NAT gateway.
     * @param {DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest} req
     * @param {function(string, DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse):void} cb
     * @public
     */
    DescribeNatGatewayDestinationIpPortTranslationNatRules(req, cb) {
        let resp = new DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse();
        this.request("DescribeNatGatewayDestinationIpPortTranslationNatRules", req, resp, cb);
    }

    /**
     * This API (ModifyServiceTemplateGroupAttribute) is used to modify a protocol port template group.
     * @param {ModifyServiceTemplateGroupAttributeRequest} req
     * @param {function(string, ModifyServiceTemplateGroupAttributeResponse):void} cb
     * @public
     */
    ModifyServiceTemplateGroupAttribute(req, cb) {
        let resp = new ModifyServiceTemplateGroupAttributeResponse();
        this.request("ModifyServiceTemplateGroupAttribute", req, resp, cb);
    }

    /**
     * This API (DescribeCcnAttachedInstances) is used to query the network instances associated with the CCN instance.
     * @param {DescribeCcnAttachedInstancesRequest} req
     * @param {function(string, DescribeCcnAttachedInstancesResponse):void} cb
     * @public
     */
    DescribeCcnAttachedInstances(req, cb) {
        let resp = new DescribeCcnAttachedInstancesResponse();
        this.request("DescribeCcnAttachedInstances", req, resp, cb);
    }

    /**
     * This API (ResetRoutes) is used to reset the name of a route table and all its routing policies.<br />
Note: When this API is called, all routing policies in the current route table are deleted before new routing policies are saved, which may incur network interruption.
     * @param {ResetRoutesRequest} req
     * @param {function(string, ResetRoutesResponse):void} cb
     * @public
     */
    ResetRoutes(req, cb) {
        let resp = new ResetRoutesResponse();
        this.request("ResetRoutes", req, resp, cb);
    }

    /**
     * This API (DescribeNetworkInterfaceLimit) is used to query the ENI quota based on the CVM instance ID. It returns the ENI quota to which the CVM instance can be bound and the IP address quota that can be allocated to each ENI.
     * @param {DescribeNetworkInterfaceLimitRequest} req
     * @param {function(string, DescribeNetworkInterfaceLimitResponse):void} cb
     * @public
     */
    DescribeNetworkInterfaceLimit(req, cb) {
        let resp = new DescribeNetworkInterfaceLimitResponse();
        this.request("DescribeNetworkInterfaceLimit", req, resp, cb);
    }

    /**
     * This API (DescribeNetDetects) is used to query the list of network detection instances.
     * @param {DescribeNetDetectsRequest} req
     * @param {function(string, DescribeNetDetectsResponse):void} cb
     * @public
     */
    DescribeNetDetects(req, cb) {
        let resp = new DescribeNetDetectsResponse();
        this.request("DescribeNetDetects", req, resp, cb);
    }

    /**
     * This API (ModifyCcnRegionBandwidthlimitsType) is used to modify the bandwidth limits policy of the postpaid Ccn instances.
     * @param {ModifyCcnRegionBandwidthLimitsTypeRequest} req
     * @param {function(string, ModifyCcnRegionBandwidthLimitsTypeResponse):void} cb
     * @public
     */
    ModifyCcnRegionBandwidthLimitsType(req, cb) {
        let resp = new ModifyCcnRegionBandwidthLimitsTypeResponse();
        this.request("ModifyCcnRegionBandwidthLimitsType", req, resp, cb);
    }

    /**
     * This API (DescribeGatewayFlowMonitorDetail) is used to query the monitoring details of the gateway traffic.
* Only querying of a single gateway instance is supported. That is, only one of the `VpnId`, `DirectConnectGatewayId`, `PeeringConnectionId`, or `NatId` input parameters is supported, and one must be used.
* If the gateway has traffic, but no data is returned when this API is called, please check whether gateway traffic monitoring has been enabled in the corresponding gateway details page in the console.
     * @param {DescribeGatewayFlowMonitorDetailRequest} req
     * @param {function(string, DescribeGatewayFlowMonitorDetailResponse):void} cb
     * @public
     */
    DescribeGatewayFlowMonitorDetail(req, cb) {
        let resp = new DescribeGatewayFlowMonitorDetailResponse();
        this.request("DescribeGatewayFlowMonitorDetail", req, resp, cb);
    }

    /**
     * This API (UnassignIpv6Addresses) is used to release ENI `IPv6` addresses.<br />
This API is completed asynchronously. If you need to query the async execution results, use the `RequestId` returned by this API to query the `QueryTask` API.
     * @param {UnassignIpv6AddressesRequest} req
     * @param {function(string, UnassignIpv6AddressesResponse):void} cb
     * @public
     */
    UnassignIpv6Addresses(req, cb) {
        let resp = new UnassignIpv6AddressesResponse();
        this.request("UnassignIpv6Addresses", req, resp, cb);
    }

    /**
     * This API (DeleteVpnConnection) is used to delete VPN tunnels.
     * @param {DeleteVpnConnectionRequest} req
     * @param {function(string, DeleteVpnConnectionResponse):void} cb
     * @public
     */
    DeleteVpnConnection(req, cb) {
        let resp = new DeleteVpnConnectionResponse();
        this.request("DeleteVpnConnection", req, resp, cb);
    }

    /**
     * This API (ModifyAddressTemplateGroupAttribute) is used to modify an IP address template group.
     * @param {ModifyAddressTemplateGroupAttributeRequest} req
     * @param {function(string, ModifyAddressTemplateGroupAttributeResponse):void} cb
     * @public
     */
    ModifyAddressTemplateGroupAttribute(req, cb) {
        let resp = new ModifyAddressTemplateGroupAttributeResponse();
        this.request("ModifyAddressTemplateGroupAttribute", req, resp, cb);
    }

    /**
     * This API (DescribeAddresses) is used to query the information of one or multiple [Elastic IPs](https://cloud.tencent.com/document/product/213/1941).
* If the parameter is empty, a number (as specified by the `Limit`, the default value is 20) of EIPs will be returned.
     * @param {DescribeAddressesRequest} req
     * @param {function(string, DescribeAddressesResponse):void} cb
     * @public
     */
    DescribeAddresses(req, cb) {
        let resp = new DescribeAddressesResponse();
        this.request("DescribeAddresses", req, resp, cb);
    }

    /**
     * This API (ModifyServiceTemplateAttribute) is used to modify a protocol port template.
     * @param {ModifyServiceTemplateAttributeRequest} req
     * @param {function(string, ModifyServiceTemplateAttributeResponse):void} cb
     * @public
     */
    ModifyServiceTemplateAttribute(req, cb) {
        let resp = new ModifyServiceTemplateAttributeResponse();
        this.request("ModifyServiceTemplateAttribute", req, resp, cb);
    }

    /**
     * This API (DescribeClassicLinkInstances) is used to query the Classiclink instances list.
     * @param {DescribeClassicLinkInstancesRequest} req
     * @param {function(string, DescribeClassicLinkInstancesResponse):void} cb
     * @public
     */
    DescribeClassicLinkInstances(req, cb) {
        let resp = new DescribeClassicLinkInstancesResponse();
        this.request("DescribeClassicLinkInstances", req, resp, cb);
    }

    /**
     * This API (ModifyPrivateIpAddressesAttribute) is used to modify the private IP attributes of an ENI.
     * @param {ModifyPrivateIpAddressesAttributeRequest} req
     * @param {function(string, ModifyPrivateIpAddressesAttributeResponse):void} cb
     * @public
     */
    ModifyPrivateIpAddressesAttribute(req, cb) {
        let resp = new ModifyPrivateIpAddressesAttributeResponse();
        this.request("ModifyPrivateIpAddressesAttribute", req, resp, cb);
    }

    /**
     * This API (CreateDirectConnectGatewayCcnRoutes) is used to create the CCN route (IDC IP range) of a Direct Connect gateway.
     * @param {CreateDirectConnectGatewayCcnRoutesRequest} req
     * @param {function(string, CreateDirectConnectGatewayCcnRoutesResponse):void} cb
     * @public
     */
    CreateDirectConnectGatewayCcnRoutes(req, cb) {
        let resp = new CreateDirectConnectGatewayCcnRoutesResponse();
        this.request("CreateDirectConnectGatewayCcnRoutes", req, resp, cb);
    }

    /**
     * This API (DescribeNatGateways) is used to query NAT gateways.
     * @param {DescribeNatGatewaysRequest} req
     * @param {function(string, DescribeNatGatewaysResponse):void} cb
     * @public
     */
    DescribeNatGateways(req, cb) {
        let resp = new DescribeNatGatewaysResponse();
        this.request("DescribeNatGateways", req, resp, cb);
    }

    /**
     * This API (CreateSubnets) is used to create subnets in batches.
* You must create a VPC before creating a subnet.
* After the subnet is successfully created, its IP address range cannot be modified. The subnet IP address range must fall within the VPC IP address range. They can be the same if the VPC has only one subnet. We recommend that you keep the subnet IP address range within the VPC IP address range to reserve IP address ranges for other subnets.
* The subnet mask of the smallest IP address range that can be created is 28 (16 IP addresses), and that of the largest IP address range is 16 (65,536 IP addresses).
* IP address ranges of different subnets cannot overlap with each other within the same VPC.
* A subnet is automatically associated with the default route table once created.
     * @param {CreateSubnetsRequest} req
     * @param {function(string, CreateSubnetsResponse):void} cb
     * @public
     */
    CreateSubnets(req, cb) {
        let resp = new CreateSubnetsResponse();
        this.request("CreateSubnets", req, resp, cb);
    }

    /**
     * This API (ReplaceRouteTableAssociation) is used to modify the route table associated with a subnet.
* A subnet can only be associated with one route table.
     * @param {ReplaceRouteTableAssociationRequest} req
     * @param {function(string, ReplaceRouteTableAssociationResponse):void} cb
     * @public
     */
    ReplaceRouteTableAssociation(req, cb) {
        let resp = new ReplaceRouteTableAssociationResponse();
        this.request("ReplaceRouteTableAssociation", req, resp, cb);
    }

    /**
     * This API is used to verify the network detection status.
     * @param {CheckNetDetectStateRequest} req
     * @param {function(string, CheckNetDetectStateResponse):void} cb
     * @public
     */
    CheckNetDetectState(req, cb) {
        let resp = new CheckNetDetectStateResponse();
        this.request("CheckNetDetectState", req, resp, cb);
    }

    /**
     * This API (DescribeVpcs) is used to query the VPC list.
     * @param {DescribeVpcsRequest} req
     * @param {function(string, DescribeVpcsResponse):void} cb
     * @public
     */
    DescribeVpcs(req, cb) {
        let resp = new DescribeVpcsResponse();
        this.request("DescribeVpcs", req, resp, cb);
    }

    /**
     * This API (DeleteDirectConnectGatewayCcnRoutes) is used to delete the CCN routes (IDC IP range) of a Direct Connect gateway.
     * @param {DeleteDirectConnectGatewayCcnRoutesRequest} req
     * @param {function(string, DeleteDirectConnectGatewayCcnRoutesResponse):void} cb
     * @public
     */
    DeleteDirectConnectGatewayCcnRoutes(req, cb) {
        let resp = new DeleteDirectConnectGatewayCcnRoutesResponse();
        this.request("DeleteDirectConnectGatewayCcnRoutes", req, resp, cb);
    }

    /**
     * This API (RejectAttachCcnInstances) is used to reject association operations when instances are associated across accounts for the CCN owner.

     * @param {RejectAttachCcnInstancesRequest} req
     * @param {function(string, RejectAttachCcnInstancesResponse):void} cb
     * @public
     */
    RejectAttachCcnInstances(req, cb) {
        let resp = new RejectAttachCcnInstancesResponse();
        this.request("RejectAttachCcnInstances", req, resp, cb);
    }

    /**
     * This API (MigrateNetworkInterface) is used to migrate ENIs.
     * @param {MigrateNetworkInterfaceRequest} req
     * @param {function(string, MigrateNetworkInterfaceResponse):void} cb
     * @public
     */
    MigrateNetworkInterface(req, cb) {
        let resp = new MigrateNetworkInterfaceResponse();
        this.request("MigrateNetworkInterface", req, resp, cb);
    }

    /**
     * This API (ModifyAddressesBandwidth) is used to adjust [Elastic IP](https://cloud.tencent.com/document/product/213/1941) bandwidth, including the postpaid EIP, prepaid EIP and bandwidth package EIP.
     * @param {ModifyAddressesBandwidthRequest} req
     * @param {function(string, ModifyAddressesBandwidthResponse):void} cb
     * @public
     */
    ModifyAddressesBandwidth(req, cb) {
        let resp = new ModifyAddressesBandwidthResponse();
        this.request("ModifyAddressesBandwidth", req, resp, cb);
    }

    /**
     *  This API (DescribeVpnConnections) is used to query the VPN tunnel list.
     * @param {DescribeVpnConnectionsRequest} req
     * @param {function(string, DescribeVpnConnectionsResponse):void} cb
     * @public
     */
    DescribeVpnConnections(req, cb) {
        let resp = new DescribeVpnConnectionsResponse();
        this.request("DescribeVpnConnections", req, resp, cb);
    }

    /**
     * This API (CreateSubnet) is used to create subnets.
* You must create a VPC before creating a subnet.
* After the subnet is successfully created, its IP address range cannot be modified. The subnet IP address range must fall within the VPC IP address range. They can be the same if the VPC has only one subnet. We recommend that you keep the subnet IP address range within the VPC IP address range to reserve IP address ranges for other subnets.
* The subnet mask of the smallest IP address range that can be created is 28 (16 IP addresses), and that of the largest IP address range is 16 (65,536 IP addresses).
* IP address ranges of different subnets cannot overlap with each other within the same VPC.
* A subnet is automatically associated with the default route table once created.
     * @param {CreateSubnetRequest} req
     * @param {function(string, CreateSubnetResponse):void} cb
     * @public
     */
    CreateSubnet(req, cb) {
        let resp = new CreateSubnetResponse();
        this.request("CreateSubnet", req, resp, cb);
    }

    /**
     * This API (ModifyAddressTemplateAttribute) is used to modify an IP address template.
     * @param {ModifyAddressTemplateAttributeRequest} req
     * @param {function(string, ModifyAddressTemplateAttributeResponse):void} cb
     * @public
     */
    ModifyAddressTemplateAttribute(req, cb) {
        let resp = new ModifyAddressTemplateAttributeResponse();
        this.request("ModifyAddressTemplateAttribute", req, resp, cb);
    }

    /**
     * This API (AcceptAttachCcnInstances) is used to associate instances across accounts. Cloud Connect Network (CCN) owners accept and agree to the operations.
     * @param {AcceptAttachCcnInstancesRequest} req
     * @param {function(string, AcceptAttachCcnInstancesResponse):void} cb
     * @public
     */
    AcceptAttachCcnInstances(req, cb) {
        let resp = new AcceptAttachCcnInstancesResponse();
        this.request("AcceptAttachCcnInstances", req, resp, cb);
    }

    /**
     * This API (DeleteServiceTemplateGroup) is used to delete a protocol port template group.
     * @param {DeleteServiceTemplateGroupRequest} req
     * @param {function(string, DeleteServiceTemplateGroupResponse):void} cb
     * @public
     */
    DeleteServiceTemplateGroup(req, cb) {
        let resp = new DeleteServiceTemplateGroupResponse();
        this.request("DeleteServiceTemplateGroup", req, resp, cb);
    }

    /**
     * This API (DisassociateAddress) is used to unbind [Elastic IPs](https://cloud.tencent.com/document/product/213/1941).
* The unbinding of EIPs from CVM instances and ENIs is supported.
* The unbinding of EIPs from NATs is not supported. For information about how to unbind an EIP from a NAT, see [EipUnBindNatGateway](https://cloud.tencent.com/document/product/215/4092).
* You can only unbind EIPs in BIND or BIND_ENI status.
* Blocked EIPs cannot be unbound.
     * @param {DisassociateAddressRequest} req
     * @param {function(string, DisassociateAddressResponse):void} cb
     * @public
     */
    DisassociateAddress(req, cb) {
        let resp = new DisassociateAddressResponse();
        this.request("DisassociateAddress", req, resp, cb);
    }

    /**
     * This API (ResetAttachCcnInstances) is used to re-apply for the association operation when the application for cross-account instance association expires.
     * @param {ResetAttachCcnInstancesRequest} req
     * @param {function(string, ResetAttachCcnInstancesResponse):void} cb
     * @public
     */
    ResetAttachCcnInstances(req, cb) {
        let resp = new ResetAttachCcnInstancesResponse();
        this.request("ResetAttachCcnInstances", req, resp, cb);
    }

    /**
     * This API (CreateNatGateway) is used to create a NAT gateway.
     * @param {CreateNatGatewayRequest} req
     * @param {function(string, CreateNatGatewayResponse):void} cb
     * @public
     */
    CreateNatGateway(req, cb) {
        let resp = new CreateNatGatewayResponse();
        this.request("CreateNatGateway", req, resp, cb);
    }

    /**
     * This API (CreateVpc) is used to create a VPC.
* The subnet mask of the smallest IP address range that can be created is 28 (16 IP addresses), and that of the largest IP address range is 16 (65,536 IP addresses). For more information, please see corresponding documents about VPC IP address ranges.
* The number of VPCs that can be created in a region is limited. For more information, please see <a href="https://intl.cloud.tencent.com/doc/product/215/537" title="VPC use limits">VPC use limits</a>. To request more resources, please contact the online customer service.
     * @param {CreateVpcRequest} req
     * @param {function(string, CreateVpcResponse):void} cb
     * @public
     */
    CreateVpc(req, cb) {
        let resp = new CreateVpcResponse();
        this.request("CreateVpc", req, resp, cb);
    }

    /**
     * This API (AssignIpv6SubnetCidrBlock) is used to assign IPv6 subnet IP ranges.
* To assign an `IPv6` IP range to a subnet, the `VPC` that the subnet belongs to should have obtained the `IPv6` IP range. If this has not been assigned, use the `AssignIpv6CidrBlock` API to assign an `IPv6` IP range to the `VPC` to which the subnet belongs. Otherwise, the `IPv6` subnet IP range cannot be assigned.
* Each subnet can only be assigned one IPv6 IP range.
     * @param {AssignIpv6SubnetCidrBlockRequest} req
     * @param {function(string, AssignIpv6SubnetCidrBlockResponse):void} cb
     * @public
     */
    AssignIpv6SubnetCidrBlock(req, cb) {
        let resp = new AssignIpv6SubnetCidrBlockResponse();
        this.request("AssignIpv6SubnetCidrBlock", req, resp, cb);
    }

    /**
     * This API is used to apply for one or more [Elastic IP Addresses](https://cloud.tencent.com/document/product/213/1941) (EIPs for short).
* An EIP is a static IP address that is dedicated for dynamic cloud computing. You can quickly re-map an EIP to another instance under your account to protect against instance failures.
* Your EIP is associated with your Tencent Cloud account rather than an instance. It remains associated with your Tencent Cloud account until you choose to explicitly release it or your account is in arrears for more than 24 hours.
* The maximum number of EIPs that can be applied for a Tencent Cloud account in each region is restricted. For more information, see [EIP Product Introduction](https://cloud.tencent.com/document/product/213/5733). You can get the quota information through the DescribeAddressQuota API.
     * @param {AllocateAddressesRequest} req
     * @param {function(string, AllocateAddressesResponse):void} cb
     * @public
     */
    AllocateAddresses(req, cb) {
        let resp = new AllocateAddressesResponse();
        this.request("AllocateAddresses", req, resp, cb);
    }

    /**
     * This API (DescribeVpcIpv6Addresses) is used to query `VPC` `IPv6` information.
This API is used to query only the information of `IPv6` addresses that are already in use. When querying IPs that have not yet been used, this API will not report an error, but the IPs will not appear in the returned results.
     * @param {DescribeVpcIpv6AddressesRequest} req
     * @param {function(string, DescribeVpcIpv6AddressesResponse):void} cb
     * @public
     */
    DescribeVpcIpv6Addresses(req, cb) {
        let resp = new DescribeVpcIpv6AddressesResponse();
        this.request("DescribeVpcIpv6Addresses", req, resp, cb);
    }

    /**
     * This API (AttachCcnInstances) is used to load a network instance to a CCN instance. Network instances include VPCs and Direct Connect gateways.<br />
The number of network instances that each CCN can be associated with is limited. For more information, see the product documentation. If you need to associate more instances, please contact online customer service.
     * @param {AttachCcnInstancesRequest} req
     * @param {function(string, AttachCcnInstancesResponse):void} cb
     * @public
     */
    AttachCcnInstances(req, cb) {
        let resp = new AttachCcnInstancesResponse();
        this.request("AttachCcnInstances", req, resp, cb);
    }

    /**
     * This API (AssociateAddress) is used to bind an [Elastic IP](https://cloud.tencent.com/document/product/213/1941) (EIP for short) to the specified private IP of an instance or ENI.
* Essentially, binding an EIP to an instance (CVM) means binding an EIP to the primary private IP of the primary ENI on an instance.
* When you bind an EIP to the primary private IP of the primary ENI, the previously bound public IP is automatically unbound and released.
* To bind the EIP to the private IP of the specified ENI (not the primary private IP of the primary ENI), you must unbind the EIP before you can bind a new one.
* To bind the EIP to a NAT gateway, use the API [EipBindNatGateway](https://cloud.tencent.com/document/product/215/4093)
* EIP that is in arrears or blocked cannot be bound.
* Only EIP in the UNBIND status can be bound.
     * @param {AssociateAddressRequest} req
     * @param {function(string, AssociateAddressResponse):void} cb
     * @public
     */
    AssociateAddress(req, cb) {
        let resp = new AssociateAddressResponse();
        this.request("AssociateAddress", req, resp, cb);
    }

    /**
     * This API (DeleteSubnet) is used to delete subnets.
Before deleting a subnet, you need to remove all resources in the subnet, including CVMs, load balancers, cloud data, NoSQL databases, and ENIs.
     * @param {DeleteSubnetRequest} req
     * @param {function(string, DeleteSubnetResponse):void} cb
     * @public
     */
    DeleteSubnet(req, cb) {
        let resp = new DeleteSubnetResponse();
        this.request("DeleteSubnet", req, resp, cb);
    }

    /**
     * This API (AttachClassicLinkVpc) is used to create a Classiclink between a VPC and a basic network device.
* The VPC and the basic network device must be in the same region.
* For the difference between VPCs and basic networks, see VPC product documentation-<a href="https://cloud.tencent.com/document/product/215/535#2.-.E7.A7.81.E6.9C.89.E7.BD.91.E7.BB.9C.E4.B8.8E.E5.9F.BA.E7.A1.80.E7.BD.91.E7.BB.9C">VPCs and basic networks</a>.
     * @param {AttachClassicLinkVpcRequest} req
     * @param {function(string, AttachClassicLinkVpcResponse):void} cb
     * @public
     */
    AttachClassicLinkVpc(req, cb) {
        let resp = new AttachClassicLinkVpcResponse();
        this.request("AttachClassicLinkVpc", req, resp, cb);
    }

    /**
     * This API (DisassociateNatGatewayAddress) is used to unbind an EIP from a NAT gateway.
     * @param {DisassociateNatGatewayAddressRequest} req
     * @param {function(string, DisassociateNatGatewayAddressResponse):void} cb
     * @public
     */
    DisassociateNatGatewayAddress(req, cb) {
        let resp = new DisassociateNatGatewayAddressResponse();
        this.request("DisassociateNatGatewayAddress", req, resp, cb);
    }

    /**
     * This API (DescribeDirectConnectGatewayCcnRoutes) is used to query the CCN routes (IDC IP range) of the Direct Connect gateway.
     * @param {DescribeDirectConnectGatewayCcnRoutesRequest} req
     * @param {function(string, DescribeDirectConnectGatewayCcnRoutesResponse):void} cb
     * @public
     */
    DescribeDirectConnectGatewayCcnRoutes(req, cb) {
        let resp = new DescribeDirectConnectGatewayCcnRoutesResponse();
        this.request("DescribeDirectConnectGatewayCcnRoutes", req, resp, cb);
    }

    /**
     * This API is used to create one or more ENIs.
* You can specify private IP addresses and a primary IP when creating an ENI. The specified private IP must be in the same subnet as the ENI and is not occupied.
* When creating an ENI, you can specify the number of private IP addresses that you want to apply for. The system will randomly generate private IP addresses.
* An ENI can only be bound with a limited number of IP addresses. For more information about resource limits, see <a href="/document/product/576/18527">ENI Use Limits</a>.
* You can bind an existing security group when creating an ENI.
* You can bind a tag when creating an ENI. The tag list in the response indicates the tags that have been successfully added.
     * @param {CreateNetworkInterfaceRequest} req
     * @param {function(string, CreateNetworkInterfaceResponse):void} cb
     * @public
     */
    CreateNetworkInterface(req, cb) {
        let resp = new CreateNetworkInterfaceResponse();
        this.request("CreateNetworkInterface", req, resp, cb);
    }

    /**
     * This API (DescribeNetDetectStates) is used to query the list of network detection verification results.
     * @param {DescribeNetDetectStatesRequest} req
     * @param {function(string, DescribeNetDetectStatesResponse):void} cb
     * @public
     */
    DescribeNetDetectStates(req, cb) {
        let resp = new DescribeNetDetectStatesResponse();
        this.request("DescribeNetDetectStates", req, resp, cb);
    }

    /**
     * This API (DescribeCcns) is used to query the CCN list.
     * @param {DescribeCcnsRequest} req
     * @param {function(string, DescribeCcnsResponse):void} cb
     * @public
     */
    DescribeCcns(req, cb) {
        let resp = new DescribeCcnsResponse();
        this.request("DescribeCcns", req, resp, cb);
    }

    /**
     * This API (DeleteCcn) is used to delete CCNs.
* After deletion, the routes between all instances associated with the CCN will be deleted, and the network will be interrupted. Please confirm this operation in advance.
* CCN deletion is an irreversible operation. Please proceed with caution.

     * @param {DeleteCcnRequest} req
     * @param {function(string, DeleteCcnResponse):void} cb
     * @public
     */
    DeleteCcn(req, cb) {
        let resp = new DeleteCcnResponse();
        this.request("DeleteCcn", req, resp, cb);
    }

    /**
     * This API (HaVipDisassociateAddressIp) is used to unbind an EIP which has been bound to an HAVIP.<br />
This API is completed asynchronously. If you need to query the async job execution results, please use the `RequestId` returned by this API to query the `QueryTask` API.
     * @param {HaVipDisassociateAddressIpRequest} req
     * @param {function(string, HaVipDisassociateAddressIpResponse):void} cb
     * @public
     */
    HaVipDisassociateAddressIp(req, cb) {
        let resp = new HaVipDisassociateAddressIpResponse();
        this.request("HaVipDisassociateAddressIp", req, resp, cb);
    }

    /**
     * This API (DetachNetworkInterface) is used to unbind an ENI from a CVM.
     * @param {DetachNetworkInterfaceRequest} req
     * @param {function(string, DetachNetworkInterfaceResponse):void} cb
     * @public
     */
    DetachNetworkInterface(req, cb) {
        let resp = new DetachNetworkInterfaceResponse();
        this.request("DetachNetworkInterface", req, resp, cb);
    }

    /**
     * This API (DeleteNetworkInterface) is used to delete ENIs.
* An ENI that has been bound to a CVM cannot be deleted.
* An ENI can be deleted only after being unbound from the server. After the deletion, all private IP addresses associated with the ENI will be released.
     * @param {DeleteNetworkInterfaceRequest} req
     * @param {function(string, DeleteNetworkInterfaceResponse):void} cb
     * @public
     */
    DeleteNetworkInterface(req, cb) {
        let resp = new DeleteNetworkInterfaceResponse();
        this.request("DeleteNetworkInterface", req, resp, cb);
    }

    /**
     * This API (CreateNatGatewayDestinationIpPortTranslationNatRule) is used to create a port forwarding rule for a NAT gateway.
     * @param {CreateNatGatewayDestinationIpPortTranslationNatRuleRequest} req
     * @param {function(string, CreateNatGatewayDestinationIpPortTranslationNatRuleResponse):void} cb
     * @public
     */
    CreateNatGatewayDestinationIpPortTranslationNatRule(req, cb) {
        let resp = new CreateNatGatewayDestinationIpPortTranslationNatRuleResponse();
        this.request("CreateNatGatewayDestinationIpPortTranslationNatRule", req, resp, cb);
    }

    /**
     * This API (ReplaceRoutes) is used to modify a specified routing policy by its ID (RouteId). Batch modification is supported.
     * @param {ReplaceRoutesRequest} req
     * @param {function(string, ReplaceRoutesResponse):void} cb
     * @public
     */
    ReplaceRoutes(req, cb) {
        let resp = new ReplaceRoutesResponse();
        this.request("ReplaceRoutes", req, resp, cb);
    }

    /**
     * This API (DeleteNatGateway) is used to delete a NAT gateway.
After the deletion of a NAT gateway, the system will automatically delete the routing entry that contains the NAT gateway from the route table. It will also unbind the Elastic IP.
     * @param {DeleteNatGatewayRequest} req
     * @param {function(string, DeleteNatGatewayResponse):void} cb
     * @public
     */
    DeleteNatGateway(req, cb) {
        let resp = new DeleteNatGatewayResponse();
        this.request("DeleteNatGateway", req, resp, cb);
    }

    /**
     * This API (DownloadCustomerGatewayConfiguration) is used to download a VPN tunnel configuration.
     * @param {DownloadCustomerGatewayConfigurationRequest} req
     * @param {function(string, DownloadCustomerGatewayConfigurationResponse):void} cb
     * @public
     */
    DownloadCustomerGatewayConfiguration(req, cb) {
        let resp = new DownloadCustomerGatewayConfigurationResponse();
        this.request("DownloadCustomerGatewayConfiguration", req, resp, cb);
    }

    /**
     * This API (DeleteServiceTemplate) is used to delete a protocol port template.
     * @param {DeleteServiceTemplateRequest} req
     * @param {function(string, DeleteServiceTemplateResponse):void} cb
     * @public
     */
    DeleteServiceTemplate(req, cb) {
        let resp = new DeleteServiceTemplateResponse();
        this.request("DeleteServiceTemplate", req, resp, cb);
    }

    /**
     * This API (UnassignPrivateIpAddresses) is used to return the private IPs of ENI.
* To return the secondary private IPs of an ENI, the API will automatically unbind the IPs of an ENI. The primary private IP of the ENI cannot be returned.
     * @param {UnassignPrivateIpAddressesRequest} req
     * @param {function(string, UnassignPrivateIpAddressesResponse):void} cb
     * @public
     */
    UnassignPrivateIpAddresses(req, cb) {
        let resp = new UnassignPrivateIpAddressesResponse();
        this.request("UnassignPrivateIpAddresses", req, resp, cb);
    }

    /**
     * This API (DeleteAddressTemplateGroup) is used to delete an IP address template group.
     * @param {DeleteAddressTemplateGroupRequest} req
     * @param {function(string, DeleteAddressTemplateGroupResponse):void} cb
     * @public
     */
    DeleteAddressTemplateGroup(req, cb) {
        let resp = new DeleteAddressTemplateGroupResponse();
        this.request("DeleteAddressTemplateGroup", req, resp, cb);
    }

    /**
     * This API (DescribeCcnRoutes) is used to query routes that have been added to a CCN.
     * @param {DescribeCcnRoutesRequest} req
     * @param {function(string, DescribeCcnRoutesResponse):void} cb
     * @public
     */
    DescribeCcnRoutes(req, cb) {
        let resp = new DescribeCcnRoutesResponse();
        this.request("DescribeCcnRoutes", req, resp, cb);
    }

    /**
     * This API is used to create a default VPC.

The default VPC is suitable for getting started with and launching public instances, and it can be used like any other VPCs. To create a standard VPC, for which you need to specify a VPC name, VPC IP range, subnet IP range, and subnet availability zone, use the regular CreateVpc API.

Under normal circumstances, this API may not create a default VPC. It depends on the network attributes (DescribeAccountAttributes) of your account.
* If both basic network and VPC are supported, the returned VpcId is 0.
* If only VPC is supported, the default VPC information is returned.

You can also use the Force parameter to forcibly return a default VPC.
     * @param {CreateDefaultVpcRequest} req
     * @param {function(string, CreateDefaultVpcResponse):void} cb
     * @public
     */
    CreateDefaultVpc(req, cb) {
        let resp = new CreateDefaultVpcResponse();
        this.request("CreateDefaultVpc", req, resp, cb);
    }

    /**
     * This API (AttachNetworkInterface) is used to bind an ENI to a CVM.
* One CVM can be bound to multiple ENIs, but only one primary ENI. For more information on the limits, see <a href="https://cloud.tencent.com/document/product/215/6513">ENI use limits</a>.
* An ENI can only be bound to one CVM at a time.
* Only CVMs in running or shutdown status can be bound to an ENI. For more information about CVM status, see <a href="https://cloud.tencent.com/document/api/213/9452#instance_state">Tencent CVM information</a>.
* An ENI can only be bound to a CVM in VPC, and the CVM must reside in the same availability zone as the subnet of the ENI.
     * @param {AttachNetworkInterfaceRequest} req
     * @param {function(string, AttachNetworkInterfaceResponse):void} cb
     * @public
     */
    AttachNetworkInterface(req, cb) {
        let resp = new AttachNetworkInterfaceResponse();
        this.request("AttachNetworkInterface", req, resp, cb);
    }

    /**
     * This API (ReplaceDirectConnectGatewayCcnRoutes) is used to modify the specified route according to the route ID. Batch modification is supported.
     * @param {ReplaceDirectConnectGatewayCcnRoutesRequest} req
     * @param {function(string, ReplaceDirectConnectGatewayCcnRoutesResponse):void} cb
     * @public
     */
    ReplaceDirectConnectGatewayCcnRoutes(req, cb) {
        let resp = new ReplaceDirectConnectGatewayCcnRoutesResponse();
        this.request("ReplaceDirectConnectGatewayCcnRoutes", req, resp, cb);
    }

    /**
     * This API (DeleteSecurityGroupPolicies) is used to delete security group policies (SecurityGroupPolicy).
* SecurityGroupPolicySet.Version is used to specify the version of the security group you are operating. If the specified Version number differs from the latest version of the current security group, a failure will be returned. If Version is not specified, the policy of the specified PolicyIndex will be deleted directly.
     * @param {DeleteSecurityGroupPoliciesRequest} req
     * @param {function(string, DeleteSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    DeleteSecurityGroupPolicies(req, cb) {
        let resp = new DeleteSecurityGroupPoliciesResponse();
        this.request("DeleteSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * This API (DeleteNetDetect) is used to delete a network detection instance.
     * @param {DeleteNetDetectRequest} req
     * @param {function(string, DeleteNetDetectResponse):void} cb
     * @public
     */
    DeleteNetDetect(req, cb) {
        let resp = new DeleteNetDetectResponse();
        this.request("DeleteNetDetect", req, resp, cb);
    }

    /**
     * This API (ModifySecurityGroupAttribute) is used to modify the attributes of a security group (SecurityGroupPolicy).
     * @param {ModifySecurityGroupAttributeRequest} req
     * @param {function(string, ModifySecurityGroupAttributeResponse):void} cb
     * @public
     */
    ModifySecurityGroupAttribute(req, cb) {
        let resp = new ModifySecurityGroupAttributeResponse();
        this.request("ModifySecurityGroupAttribute", req, resp, cb);
    }

    /**
     * This API (DeleteAddressTemplate) is used to delete an IP address template.
     * @param {DeleteAddressTemplateRequest} req
     * @param {function(string, DeleteAddressTemplateResponse):void} cb
     * @public
     */
    DeleteAddressTemplate(req, cb) {
        let resp = new DeleteAddressTemplateResponse();
        this.request("DeleteAddressTemplate", req, resp, cb);
    }

    /**
     * This API (DeleteVpnGateway) is used to delete a VPN gateway. Currently, only deletion of pay-as-you-go IPSEC gateway instances in running status is supported.
     * @param {DeleteVpnGatewayRequest} req
     * @param {function(string, DeleteVpnGatewayResponse):void} cb
     * @public
     */
    DeleteVpnGateway(req, cb) {
        let resp = new DeleteVpnGatewayResponse();
        this.request("DeleteVpnGateway", req, resp, cb);
    }

    /**
     * This API (CreateServiceTemplate) is used to create a protocol port template.
     * @param {CreateServiceTemplateRequest} req
     * @param {function(string, CreateServiceTemplateResponse):void} cb
     * @public
     */
    CreateServiceTemplate(req, cb) {
        let resp = new CreateServiceTemplateResponse();
        this.request("CreateServiceTemplate", req, resp, cb);
    }

    /**
     * This API (DeleteRoutes) is used to delete routing policies in batches from a route table.
     * @param {DeleteRoutesRequest} req
     * @param {function(string, DeleteRoutesResponse):void} cb
     * @public
     */
    DeleteRoutes(req, cb) {
        let resp = new DeleteRoutesResponse();
        this.request("DeleteRoutes", req, resp, cb);
    }

    /**
     * This API (ModifySecurityGroupPolicies) is used to reset the egress and ingress policies (SecurityGroupPolicy) of a security group.

* This API deletes all the current egress and ingress policies, and then adds new Egress and Ingress policies. It does not support custom PolicyIndex indexes.
* If SecurityGroupPolicySet.Version is set to 0, all policies will be cleared, and Egress and Ingress will be ignored.
* The value of the Protocol field can be TCP, UDP, ICMP, ICMPV6, GRE, or ALL.
* The CidrBlock field allows you to enter any string that conforms to the CIDR format. (More details) In a basic network, if a CidrBlock contains private IP addresses on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.
* The Ipv6CidrBlock field allows you to enter any string that conforms to the IPv6 CIDR format. (More details) In a basic network, if an Ipv6CidrBlock contains private IPv6 addresses on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.
* The SecurityGroupId field allows you to enter the IDs of security groups that are in the same project as the security group to be modified, including the ID of the security group itself, to represent private IP addresses of all CVMs under the security group. If this field is used, this policy will change without manual modification according to the CVM associated with the policy ID while being used to match network messages.
* The Port field allows you to enter a single port number, or two port numbers separated by a minus sign to represent a port range, such as 80 or 8000-8010. The Port field can be used only when the value of the Protocol field is TCP or UDP.
* The Action field only allows you to enter ACCEPT or DROP.
* CidrBlock, Ipv6CidrBlock, SecurityGroupId, and AddressTemplate are exclusive and cannot be entered at the same time. Protocol + Port and ServiceTemplate are mutually exclusive and cannot be entered at the same time.
     * @param {ModifySecurityGroupPoliciesRequest} req
     * @param {function(string, ModifySecurityGroupPoliciesResponse):void} cb
     * @public
     */
    ModifySecurityGroupPolicies(req, cb) {
        let resp = new ModifySecurityGroupPoliciesResponse();
        this.request("ModifySecurityGroupPolicies", req, resp, cb);
    }

    /**
     * This API (ModifySubnetAttribute) is used to modify subnet attributes.
     * @param {ModifySubnetAttributeRequest} req
     * @param {function(string, ModifySubnetAttributeResponse):void} cb
     * @public
     */
    ModifySubnetAttribute(req, cb) {
        let resp = new ModifySubnetAttributeResponse();
        this.request("ModifySubnetAttribute", req, resp, cb);
    }

    /**
     * This API (DisableCcnRoutes) is used to disable CCN routes that are already enabled.
     * @param {DisableCcnRoutesRequest} req
     * @param {function(string, DisableCcnRoutesResponse):void} cb
     * @public
     */
    DisableCcnRoutes(req, cb) {
        let resp = new DisableCcnRoutesResponse();
        this.request("DisableCcnRoutes", req, resp, cb);
    }

    /**
     * This API (InquiryPriceCreateVpnGateway) is used to query the price for VPN gateway creation.
     * @param {InquiryPriceCreateVpnGatewayRequest} req
     * @param {function(string, InquiryPriceCreateVpnGatewayResponse):void} cb
     * @public
     */
    InquiryPriceCreateVpnGateway(req, cb) {
        let resp = new InquiryPriceCreateVpnGatewayResponse();
        this.request("InquiryPriceCreateVpnGateway", req, resp, cb);
    }

    /**
     * The API (ResetVpnConnection) is used to reset VPN tunnels.
     * @param {ResetVpnConnectionRequest} req
     * @param {function(string, ResetVpnConnectionResponse):void} cb
     * @public
     */
    ResetVpnConnection(req, cb) {
        let resp = new ResetVpnConnectionResponse();
        this.request("ResetVpnConnection", req, resp, cb);
    }

    /**
     * This API (CreateAddressTemplateGroup) is used to create an IP address template group.
     * @param {CreateAddressTemplateGroupRequest} req
     * @param {function(string, CreateAddressTemplateGroupResponse):void} cb
     * @public
     */
    CreateAddressTemplateGroup(req, cb) {
        let resp = new CreateAddressTemplateGroupResponse();
        this.request("CreateAddressTemplateGroup", req, resp, cb);
    }

    /**
     * This API (CreateAddressTemplate) is used to create an IP address template.
     * @param {CreateAddressTemplateRequest} req
     * @param {function(string, CreateAddressTemplateResponse):void} cb
     * @public
     */
    CreateAddressTemplate(req, cb) {
        let resp = new CreateAddressTemplateResponse();
        this.request("CreateAddressTemplate", req, resp, cb);
    }

    /**
     * This API (CreateSecurityGroup) is used to create security groups (SecurityGroup).
* <a href="https://cloud.tencent.com/document/product/213/500#2.-.E5.AE.89.E5.85.A8.E7.BB.84.E7.9A.84.E9.99.90.E5.88.B6">Security group limits</a> for each project in each region under each account.
* Both the inbound and outbound rules for a newly created security group are Deny All by default. You need to call CreateSecurityGroupPolicies to set the security group rules according to your needs.
     * @param {CreateSecurityGroupRequest} req
     * @param {function(string, CreateSecurityGroupResponse):void} cb
     * @public
     */
    CreateSecurityGroup(req, cb) {
        let resp = new CreateSecurityGroupResponse();
        this.request("CreateSecurityGroup", req, resp, cb);
    }

    /**
     * This API (ModifyNetworkInterfaceAttribute) is used to modify ENI attributes.
     * @param {ModifyNetworkInterfaceAttributeRequest} req
     * @param {function(string, ModifyNetworkInterfaceAttributeResponse):void} cb
     * @public
     */
    ModifyNetworkInterfaceAttribute(req, cb) {
        let resp = new ModifyNetworkInterfaceAttributeResponse();
        this.request("ModifyNetworkInterfaceAttribute", req, resp, cb);
    }

    /**
     * This API (DescribeVpnGateways) is used to query the VPN gateway list.
     * @param {DescribeVpnGatewaysRequest} req
     * @param {function(string, DescribeVpnGatewaysResponse):void} cb
     * @public
     */
    DescribeVpnGateways(req, cb) {
        let resp = new DescribeVpnGatewaysResponse();
        this.request("DescribeVpnGateways", req, resp, cb);
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
     * This API (ModifyIpv6AddressesAttribute) is used to modify the private IPv6 address attributes of an ENI.
     * @param {ModifyIpv6AddressesAttributeRequest} req
     * @param {function(string, ModifyIpv6AddressesAttributeResponse):void} cb
     * @public
     */
    ModifyIpv6AddressesAttribute(req, cb) {
        let resp = new ModifyIpv6AddressesAttributeResponse();
        this.request("ModifyIpv6AddressesAttribute", req, resp, cb);
    }

    /**
     * This API (DescribeAccountAttributes) is used to query your account attributes.
     * @param {DescribeAccountAttributesRequest} req
     * @param {function(string, DescribeAccountAttributesResponse):void} cb
     * @public
     */
    DescribeAccountAttributes(req, cb) {
        let resp = new DescribeAccountAttributesResponse();
        this.request("DescribeAccountAttributes", req, resp, cb);
    }

    /**
     * This API (AssignIpv6Addresses) is used to apply for an IPv6 address for the ENI.<br />
This API is completed asynchronously. If you need to query the async execution results, use the `RequestId` returned by this API to query the `QueryTask` API.
* An ENI can only be bound with a limited number of IPs. For more information about resource limits, see<a href="/document/product/576/18527">ENI use limits</a>.
* You can specify the `IPv6` address when applying. The address type cannot be the primary `IP`. Currently, `IPv6` can only be supported as the secondary `IP`.
* The address must be unoccupied and is in the subnet to which the ENI belongs.
* When applying for one to multiple secondary `IPv6` addresses on ENI, the API will return the specified number of secondary `IPv6` addresses in the subnet range where the ENI is located.
     * @param {AssignIpv6AddressesRequest} req
     * @param {function(string, AssignIpv6AddressesResponse):void} cb
     * @public
     */
    AssignIpv6Addresses(req, cb) {
        let resp = new AssignIpv6AddressesResponse();
        this.request("AssignIpv6Addresses", req, resp, cb);
    }

    /**
     *  This API (MigratePrivateIpAddress) is used to migrate the private IPs of ENIs.

* This API is used to migrate a private IP from one ENI to another. Primary IPs cannot be migrated.
* The ENIs before and after migration must belong to the same subnet.
     * @param {MigratePrivateIpAddressRequest} req
     * @param {function(string, MigratePrivateIpAddressResponse):void} cb
     * @public
     */
    MigratePrivateIpAddress(req, cb) {
        let resp = new MigratePrivateIpAddressResponse();
        this.request("MigratePrivateIpAddress", req, resp, cb);
    }

    /**
     * This API (DescribeServiceTemplates) is used to query protocol port templates.
     * @param {DescribeServiceTemplatesRequest} req
     * @param {function(string, DescribeServiceTemplatesResponse):void} cb
     * @public
     */
    DescribeServiceTemplates(req, cb) {
        let resp = new DescribeServiceTemplatesResponse();
        this.request("DescribeServiceTemplates", req, resp, cb);
    }

    /**
     * This API (UnassignIpv6CidrBlock) is used to release IPv6 IP ranges.
If the IP range still has occupied IPs that are not yet repossessed, the IP range cannot be released.
     * @param {UnassignIpv6CidrBlockRequest} req
     * @param {function(string, UnassignIpv6CidrBlockResponse):void} cb
     * @public
     */
    UnassignIpv6CidrBlock(req, cb) {
        let resp = new UnassignIpv6CidrBlockResponse();
        this.request("UnassignIpv6CidrBlock", req, resp, cb);
    }

    /**
     * This API (ModifyNatGatewayDestinationIpPortTranslationNatRule) is used to modify a port forwarding rule for a NAT gateway.
     * @param {ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest} req
     * @param {function(string, ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse):void} cb
     * @public
     */
    ModifyNatGatewayDestinationIpPortTranslationNatRule(req, cb) {
        let resp = new ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse();
        this.request("ModifyNatGatewayDestinationIpPortTranslationNatRule", req, resp, cb);
    }

    /**
     * This API (HaVipAssociateAddressIp) is used to bind an EIP to an HAVIP.<br />
This API is completed asynchronously. If you need to query the async job execution results, please use the `RequestId` returned by this API to query the `QueryTask` API.
     * @param {HaVipAssociateAddressIpRequest} req
     * @param {function(string, HaVipAssociateAddressIpResponse):void} cb
     * @public
     */
    HaVipAssociateAddressIp(req, cb) {
        let resp = new HaVipAssociateAddressIpResponse();
        this.request("HaVipAssociateAddressIp", req, resp, cb);
    }

    /**
     * This API (DescribeHaVips) is used to query the list of highly available virtual IPs (HAVIP).
     * @param {DescribeHaVipsRequest} req
     * @param {function(string, DescribeHaVipsResponse):void} cb
     * @public
     */
    DescribeHaVips(req, cb) {
        let resp = new DescribeHaVipsResponse();
        this.request("DescribeHaVips", req, resp, cb);
    }

    /**
     * This API (DeleteHaVip) is used to delete Highly Available Virtual IP (HAVIP)<br />
This API is completed asynchronously. If you need to query the async job execution results, please use the `RequestId` returned by this API to query the `QueryTask` API.
     * @param {DeleteHaVipRequest} req
     * @param {function(string, DeleteHaVipResponse):void} cb
     * @public
     */
    DeleteHaVip(req, cb) {
        let resp = new DeleteHaVipResponse();
        this.request("DeleteHaVip", req, resp, cb);
    }

    /**
     * This API (DescribeAddressQuota) is used to query the quota information of your [Elastic IP](https://cloud.tencent.com/document/product/213/1941) (EIP) in the current region. For more information, see [EIP product introduction](https://cloud.tencent.com/document/product/213/5733).
     * @param {DescribeAddressQuotaRequest} req
     * @param {function(string, DescribeAddressQuotaResponse):void} cb
     * @public
     */
    DescribeAddressQuota(req, cb) {
        let resp = new DescribeAddressQuotaResponse();
        this.request("DescribeAddressQuota", req, resp, cb);
    }

    /**
     * This API (ModifyVpnGatewayAttribute) is used to modify the attributes of VPN gateways.
     * @param {ModifyVpnGatewayAttributeRequest} req
     * @param {function(string, ModifyVpnGatewayAttributeResponse):void} cb
     * @public
     */
    ModifyVpnGatewayAttribute(req, cb) {
        let resp = new ModifyVpnGatewayAttributeResponse();
        this.request("ModifyVpnGatewayAttribute", req, resp, cb);
    }

    /**
     * This API (ResetVpnGatewayInternetMaxBandwidth) is used to adjust the bandwidth cap of VPN gateways. Currently, only configuration upgrade is supported. VPN gateways with monthly subscription must be within the validity period.
     * @param {ResetVpnGatewayInternetMaxBandwidthRequest} req
     * @param {function(string, ResetVpnGatewayInternetMaxBandwidthResponse):void} cb
     * @public
     */
    ResetVpnGatewayInternetMaxBandwidth(req, cb) {
        let resp = new ResetVpnGatewayInternetMaxBandwidthResponse();
        this.request("ResetVpnGatewayInternetMaxBandwidth", req, resp, cb);
    }

    /**
     * This API (DeleteVpc) is used to delete VPCs.
* Before deleting a VPC, ensure that the VPC contains no resources, including CVMs, cloud databases, NoSQL databases, VPN gateways, direct connect gateways, load balancers, peering connections, and basic network devices that are linked to the VPC.
* The deletion of VPCs is irreversible. Proceed with caution.
     * @param {DeleteVpcRequest} req
     * @param {function(string, DeleteVpcResponse):void} cb
     * @public
     */
    DeleteVpc(req, cb) {
        let resp = new DeleteVpcResponse();
        this.request("DeleteVpc", req, resp, cb);
    }

    /**
     * This API (DescribeSubnets) is used to query the list of subnets.
     * @param {DescribeSubnetsRequest} req
     * @param {function(string, DescribeSubnetsResponse):void} cb
     * @public
     */
    DescribeSubnets(req, cb) {
        let resp = new DescribeSubnetsResponse();
        this.request("DescribeSubnets", req, resp, cb);
    }

    /**
     * This API (CreateCcn) is used to create a Cloud Connect Network (CCN).<br />
Each account can only create a limited number of CCN instances. For more information, see the product documentation. If you need to create more instances, please contact the online customer service.
     * @param {CreateCcnRequest} req
     * @param {function(string, CreateCcnResponse):void} cb
     * @public
     */
    CreateCcn(req, cb) {
        let resp = new CreateCcnResponse();
        this.request("CreateCcn", req, resp, cb);
    }

    /**
     * This API (ModifyVpnConnectionAttribute) is used to modify VPN tunnels.
     * @param {ModifyVpnConnectionAttributeRequest} req
     * @param {function(string, ModifyVpnConnectionAttributeResponse):void} cb
     * @public
     */
    ModifyVpnConnectionAttribute(req, cb) {
        let resp = new ModifyVpnConnectionAttributeResponse();
        this.request("ModifyVpnConnectionAttribute", req, resp, cb);
    }

    /**
     * This API (DescribeSecurityGroups) is used to query security groups.
     * @param {DescribeSecurityGroupsRequest} req
     * @param {function(string, DescribeSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeSecurityGroups(req, cb) {
        let resp = new DescribeSecurityGroupsResponse();
        this.request("DescribeSecurityGroups", req, resp, cb);
    }

    /**
     * This API (CreateVpnGateway) is used to create a VPN gateway.
     * @param {CreateVpnGatewayRequest} req
     * @param {function(string, CreateVpnGatewayResponse):void} cb
     * @public
     */
    CreateVpnGateway(req, cb) {
        let resp = new CreateVpnGatewayResponse();
        this.request("CreateVpnGateway", req, resp, cb);
    }

    /**
     * This API (DescribeSecurityGroupPolicies) is used to query security group policies.
     * @param {DescribeSecurityGroupPoliciesRequest} req
     * @param {function(string, DescribeSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    DescribeSecurityGroupPolicies(req, cb) {
        let resp = new DescribeSecurityGroupPoliciesResponse();
        this.request("DescribeSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * This API (DetachCcnInstances) is used to unbind a specified network instance from a CCN instance.<br />
After unbinding the network instance, the corresponding routing policy will also be deleted.
     * @param {DetachCcnInstancesRequest} req
     * @param {function(string, DetachCcnInstancesResponse):void} cb
     * @public
     */
    DetachCcnInstances(req, cb) {
        let resp = new DetachCcnInstancesResponse();
        this.request("DetachCcnInstances", req, resp, cb);
    }

    /**
     * This API (TransformAddress) is used to switch common public IPs into [Elastic IPs](https://cloud.tencent.com/document/product/213/1941).
* The platform limits the number of times that a user can unbind an EIP and reassign public IPs in each region per day. For more information, see [EIP product introduction](/document/product/213/1941)). The preceding quota can be obtained through the [DescribeAddressQuota](https://cloud.tencent.com/document/api/213/1378) API.
     * @param {TransformAddressRequest} req
     * @param {function(string, TransformAddressResponse):void} cb
     * @public
     */
    TransformAddress(req, cb) {
        let resp = new TransformAddressResponse();
        this.request("TransformAddress", req, resp, cb);
    }

    /**
     * This API (SetCcnRegionBandwidthLimits) is used to set the outbound bandwidth cap for CCNs in each region. This API can only set the outbound bandwidth cap for regions in the network instances that have already been associated.
     * @param {SetCcnRegionBandwidthLimitsRequest} req
     * @param {function(string, SetCcnRegionBandwidthLimitsResponse):void} cb
     * @public
     */
    SetCcnRegionBandwidthLimits(req, cb) {
        let resp = new SetCcnRegionBandwidthLimitsResponse();
        this.request("SetCcnRegionBandwidthLimits", req, resp, cb);
    }

    /**
     * This API (CreateHaVip) is used to create a highly available virtual IP (HAVIP)
     * @param {CreateHaVipRequest} req
     * @param {function(string, CreateHaVipResponse):void} cb
     * @public
     */
    CreateHaVip(req, cb) {
        let resp = new CreateHaVipResponse();
        this.request("CreateHaVip", req, resp, cb);
    }

    /**
     * This API (DeleteSecurityGroup) is used to delete security groups (SecurityGroup).
* Only security groups under the current account can be deleted.
* A security group cannot be deleted directly if its instance ID is used in the policy of another security group. You need to modify the policy first and then delete the security group.
* A security group cannot be recovered after deletion, please proceed with caution.
     * @param {DeleteSecurityGroupRequest} req
     * @param {function(string, DeleteSecurityGroupResponse):void} cb
     * @public
     */
    DeleteSecurityGroup(req, cb) {
        let resp = new DeleteSecurityGroupResponse();
        this.request("DeleteSecurityGroup", req, resp, cb);
    }

    /**
     * This API (EnableCcnRoutes) is used to enable CCN routes that are already added.<br />
This API is used to verify whether there will be conflict with an existing route after a CCN route is enabled. If there is a conflict, the route will not be enabled, and the process will fail. When a conflict occurs, you must disable the conflicting route before you can enable the desired route.
     * @param {EnableCcnRoutesRequest} req
     * @param {function(string, EnableCcnRoutesResponse):void} cb
     * @public
     */
    EnableCcnRoutes(req, cb) {
        let resp = new EnableCcnRoutesResponse();
        this.request("EnableCcnRoutes", req, resp, cb);
    }

    /**
     * This API (ModifyRouteTableAttribute) is used to modify the attributes of a route table.
     * @param {ModifyRouteTableAttributeRequest} req
     * @param {function(string, ModifyRouteTableAttributeResponse):void} cb
     * @public
     */
    ModifyRouteTableAttribute(req, cb) {
        let resp = new ModifyRouteTableAttributeResponse();
        this.request("ModifyRouteTableAttribute", req, resp, cb);
    }

    /**
     * This API (ModifyNetDetect) is used to modify network detection parameters.
     * @param {ModifyNetDetectRequest} req
     * @param {function(string, ModifyNetDetectResponse):void} cb
     * @public
     */
    ModifyNetDetect(req, cb) {
        let resp = new ModifyNetDetectResponse();
        this.request("ModifyNetDetect", req, resp, cb);
    }

    /**
     * This API (DeleteNatGatewayDestinationIpPortTranslationNatRule) is used to delete a port forwarding rule for a NAT gateway.
     * @param {DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest} req
     * @param {function(string, DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse):void} cb
     * @public
     */
    DeleteNatGatewayDestinationIpPortTranslationNatRule(req, cb) {
        let resp = new DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse();
        this.request("DeleteNatGatewayDestinationIpPortTranslationNatRule", req, resp, cb);
    }

    /**
     * This API (CreateRoutes) is used to create a routing policy.
* You can create routing policies in batch for a specified route table.
     * @param {CreateRoutesRequest} req
     * @param {function(string, CreateRoutesResponse):void} cb
     * @public
     */
    CreateRoutes(req, cb) {
        let resp = new CreateRoutesResponse();
        this.request("CreateRoutes", req, resp, cb);
    }

    /**
     * This API is used to create a network detection instance.
     * @param {CreateNetDetectRequest} req
     * @param {function(string, CreateNetDetectResponse):void} cb
     * @public
     */
    CreateNetDetect(req, cb) {
        let resp = new CreateNetDetectResponse();
        this.request("CreateNetDetect", req, resp, cb);
    }

    /**
     * This API (ModifyHaVipAttribute) is used to modify HAVIP attributes.
     * @param {ModifyHaVipAttributeRequest} req
     * @param {function(string, ModifyHaVipAttributeResponse):void} cb
     * @public
     */
    ModifyHaVipAttribute(req, cb) {
        let resp = new ModifyHaVipAttributeResponse();
        this.request("ModifyHaVipAttribute", req, resp, cb);
    }

    /**
     * This API (ReleaseAddresses) is used to release one or multiple [Elastic IPs](https://cloud.tencent.com/document/product/213/1941).
* This operation is irreversible. Once you release an EIP, the IP address associated with the EIP no longer belongs to you.
* Only EIPs in UNBIND status can be released.
     * @param {ReleaseAddressesRequest} req
     * @param {function(string, ReleaseAddressesResponse):void} cb
     * @public
     */
    ReleaseAddresses(req, cb) {
        let resp = new ReleaseAddressesResponse();
        this.request("ReleaseAddresses", req, resp, cb);
    }

    /**
     * This API (CreateServiceTemplateGroup) is used to create a protocol port template group.
     * @param {CreateServiceTemplateGroupRequest} req
     * @param {function(string, CreateServiceTemplateGroupResponse):void} cb
     * @public
     */
    CreateServiceTemplateGroup(req, cb) {
        let resp = new CreateServiceTemplateGroupResponse();
        this.request("CreateServiceTemplateGroup", req, resp, cb);
    }

    /**
     * This API (ModifyCcnAttribute) is used to modify CCN attributes.
     * @param {ModifyCcnAttributeRequest} req
     * @param {function(string, ModifyCcnAttributeResponse):void} cb
     * @public
     */
    ModifyCcnAttribute(req, cb) {
        let resp = new ModifyCcnAttributeResponse();
        this.request("ModifyCcnAttribute", req, resp, cb);
    }

    /**
     * This API (DescribeVpcPrivateIpAddresses) is used to query the private IP information of a VPC.<br />
This API is used to query only the information of IP addresses that are already in use. When querying IPs that have not yet been used, this API will not report an error, but the IPs will not appear in the returned results.
     * @param {DescribeVpcPrivateIpAddressesRequest} req
     * @param {function(string, DescribeVpcPrivateIpAddressesResponse):void} cb
     * @public
     */
    DescribeVpcPrivateIpAddresses(req, cb) {
        let resp = new DescribeVpcPrivateIpAddressesResponse();
        this.request("DescribeVpcPrivateIpAddresses", req, resp, cb);
    }

    /**
     * This API (DescribeSecurityGroupAssociationStatistics) is used to query statistics on the instances associated with a security group.
     * @param {DescribeSecurityGroupAssociationStatisticsRequest} req
     * @param {function(string, DescribeSecurityGroupAssociationStatisticsResponse):void} cb
     * @public
     */
    DescribeSecurityGroupAssociationStatistics(req, cb) {
        let resp = new DescribeSecurityGroupAssociationStatisticsResponse();
        this.request("DescribeSecurityGroupAssociationStatistics", req, resp, cb);
    }

    /**
     * This API (UnassignIpv6SubnetCidrBlock) is used to release IPv6 subnet IP ranges.
If the subnet IP range still has occupied IPs that are not yet repossessed, the subnet IP range cannot be released.
     * @param {UnassignIpv6SubnetCidrBlockRequest} req
     * @param {function(string, UnassignIpv6SubnetCidrBlockResponse):void} cb
     * @public
     */
    UnassignIpv6SubnetCidrBlock(req, cb) {
        let resp = new UnassignIpv6SubnetCidrBlockResponse();
        this.request("UnassignIpv6SubnetCidrBlock", req, resp, cb);
    }

    /**
     * This API (DescribeAddressTemplates) is used to query an IP address template.
     * @param {DescribeAddressTemplatesRequest} req
     * @param {function(string, DescribeAddressTemplatesResponse):void} cb
     * @public
     */
    DescribeAddressTemplates(req, cb) {
        let resp = new DescribeAddressTemplatesResponse();
        this.request("DescribeAddressTemplates", req, resp, cb);
    }

    /**
     * This API (CreateVpnConnection) is used to create VPN tunnel.
     * @param {CreateVpnConnectionRequest} req
     * @param {function(string, CreateVpnConnectionResponse):void} cb
     * @public
     */
    CreateVpnConnection(req, cb) {
        let resp = new CreateVpnConnectionResponse();
        this.request("CreateVpnConnection", req, resp, cb);
    }

    /**
     * This API (ModifyAddressAttribute) is used to modify the name of an [Elastic IP](https://cloud.tencent.com/document/product/213/1941).
     * @param {ModifyAddressAttributeRequest} req
     * @param {function(string, ModifyAddressAttributeResponse):void} cb
     * @public
     */
    ModifyAddressAttribute(req, cb) {
        let resp = new ModifyAddressAttributeResponse();
        this.request("ModifyAddressAttribute", req, resp, cb);
    }

    /**
     * This API (DescribeAddressTemplateGroups) is used to query an IP address template group.
     * @param {DescribeAddressTemplateGroupsRequest} req
     * @param {function(string, DescribeAddressTemplateGroupsResponse):void} cb
     * @public
     */
    DescribeAddressTemplateGroups(req, cb) {
        let resp = new DescribeAddressTemplateGroupsResponse();
        this.request("DescribeAddressTemplateGroups", req, resp, cb);
    }

    /**
     * This API (DetachClassicLinkVpc) is used to delete a Classiclink.
     * @param {DetachClassicLinkVpcRequest} req
     * @param {function(string, DetachClassicLinkVpcResponse):void} cb
     * @public
     */
    DetachClassicLinkVpc(req, cb) {
        let resp = new DetachClassicLinkVpcResponse();
        this.request("DetachClassicLinkVpc", req, resp, cb);
    }

    /**
     * This API is used to create security group policies (SecurityGroupPolicy).

* The `Version` field indicates the version number of a security group policy, which will automatically increment by 1 every time you update the security policy, to prevent the expiration of the updated routing policies. If this field is left empty, any conflicts will be ignored.
* The value of the `Protocol` field can be TCP, UDP, ICMP, ICMPV6, GRE, or ALL.
* The `CidrBlock` field allows you to enter any string that conforms to the CIDR format. (More details) In a basic network, if a CidrBlock contains private IP addresses on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.
* The `Ipv6CidrBlock` field allows you to enter any string that conforms to the IPv6 CIDR format. (More details) In a basic network, if an Ipv6CidrBlock contains private IPv6 addresses on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.
* The SecurityGroupId field allows you to enter the IDs of security groups that are in the same project as the security group to be modified, including the ID of the security group itself, to represent private IP addresses of all CVMs under the security group. If this field is used, the policy will change without manual modification according to the CVM associated with the policy ID while being used to match network messages.
* The Port field allows you to enter a single port number, or two port numbers separated by a minus sign to represent a port range, such as 80 or 8000-8010. The Port field is accepted only if the value of the Protocol field is TCP or UDP. In other words, if the value of the Protocol field is not TCP or UDP, Protocol and Port are exclusive and cannot be entered at the same time, otherwise an error will occur with the API.
* The Action field only allows you to enter ACCEPT or DROP.
* CidrBlock, Ipv6CidrBlock, SecurityGroupId, and AddressTemplate are exclusive and cannot be entered at the same time. Protocol + Port and ServiceTemplate are mutually exclusive and cannot be entered at the same time.
* Only policies in one direction can be created in each request. If you need to specify the PolicyIndex parameter, the indexes of policies must be consistent.
     * @param {CreateSecurityGroupPoliciesRequest} req
     * @param {function(string, CreateSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    CreateSecurityGroupPolicies(req, cb) {
        let resp = new CreateSecurityGroupPoliciesResponse();
        this.request("CreateSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * This API (ResetNatGatewayConnection) is used to adjust concurrent connection cap for the NAT gateway.
     * @param {ResetNatGatewayConnectionRequest} req
     * @param {function(string, ResetNatGatewayConnectionResponse):void} cb
     * @public
     */
    ResetNatGatewayConnection(req, cb) {
        let resp = new ResetNatGatewayConnectionResponse();
        this.request("ResetNatGatewayConnection", req, resp, cb);
    }

    /**
     * This API (ModifyVpcAttribute) is used to modify VPC attributes.
     * @param {ModifyVpcAttributeRequest} req
     * @param {function(string, ModifyVpcAttributeResponse):void} cb
     * @public
     */
    ModifyVpcAttribute(req, cb) {
        let resp = new ModifyVpcAttributeResponse();
        this.request("ModifyVpcAttribute", req, resp, cb);
    }


}
module.exports = VpcClient;
