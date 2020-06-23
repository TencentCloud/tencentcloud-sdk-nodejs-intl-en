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
const CreateNetworkAclResponse = models.CreateNetworkAclResponse;
const NetworkAcl = models.NetworkAcl;
const ModifyAddressTemplateAttributeResponse = models.ModifyAddressTemplateAttributeResponse;
const ServiceTemplateGroup = models.ServiceTemplateGroup;
const CreateRoutesRequest = models.CreateRoutesRequest;
const DescribeHaVipsResponse = models.DescribeHaVipsResponse;
const SecurityGroupAssociationStatistics = models.SecurityGroupAssociationStatistics;
const DeleteServiceTemplateResponse = models.DeleteServiceTemplateResponse;
const CreateServiceTemplateRequest = models.CreateServiceTemplateRequest;
const IKEOptionsSpecification = models.IKEOptionsSpecification;
const TransformAddressResponse = models.TransformAddressResponse;
const DescribeVpnConnectionsRequest = models.DescribeVpnConnectionsRequest;
const CreateAssistantCidrRequest = models.CreateAssistantCidrRequest;
const DescribeNetworkInterfacesRequest = models.DescribeNetworkInterfacesRequest;
const DescribeVpcIpv6AddressesRequest = models.DescribeVpcIpv6AddressesRequest;
const DescribeCustomerGatewaysRequest = models.DescribeCustomerGatewaysRequest;
const ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse = models.ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse;
const ModifyNetworkAclAttributeResponse = models.ModifyNetworkAclAttributeResponse;
const DescribeVpnGatewaysResponse = models.DescribeVpnGatewaysResponse;
const ModifyServiceTemplateAttributeRequest = models.ModifyServiceTemplateAttributeRequest;
const FlowLog = models.FlowLog;
const ResetAttachCcnInstancesResponse = models.ResetAttachCcnInstancesResponse;
const DescribeServiceTemplateGroupsResponse = models.DescribeServiceTemplateGroupsResponse;
const DetachClassicLinkVpcRequest = models.DetachClassicLinkVpcRequest;
const DeleteBandwidthPackageResponse = models.DeleteBandwidthPackageResponse;
const ModifyNatGatewayAttributeRequest = models.ModifyNatGatewayAttributeRequest;
const ModifyDirectConnectGatewayAttributeRequest = models.ModifyDirectConnectGatewayAttributeRequest;
const AddBandwidthPackageResourcesRequest = models.AddBandwidthPackageResourcesRequest;
const AssignIpv6SubnetCidrBlockRequest = models.AssignIpv6SubnetCidrBlockRequest;
const CreateVpcResponse = models.CreateVpcResponse;
const AssistantCidr = models.AssistantCidr;
const ModifyNetworkAclEntriesRequest = models.ModifyNetworkAclEntriesRequest;
const DescribeAddressQuotaRequest = models.DescribeAddressQuotaRequest;
const AddressTemplate = models.AddressTemplate;
const VpnGatewayQuota = models.VpnGatewayQuota;
const UnassignIpv6AddressesResponse = models.UnassignIpv6AddressesResponse;
const DescribeFlowLogsRequest = models.DescribeFlowLogsRequest;
const AssociateNatGatewayAddressRequest = models.AssociateNatGatewayAddressRequest;
const CreateDirectConnectGatewayRequest = models.CreateDirectConnectGatewayRequest;
const ModifyBandwidthPackageAttributeRequest = models.ModifyBandwidthPackageAttributeRequest;
const DisassociateNetworkInterfaceSecurityGroupsRequest = models.DisassociateNetworkInterfaceSecurityGroupsRequest;
const SecurityGroupPolicySet = models.SecurityGroupPolicySet;
const ModifyFlowLogAttributeRequest = models.ModifyFlowLogAttributeRequest;
const AssociateNetworkAclSubnetsResponse = models.AssociateNetworkAclSubnetsResponse;
const DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest = models.DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest;
const ResetRoutesRequest = models.ResetRoutesRequest;
const CheckNetDetectStateRequest = models.CheckNetDetectStateRequest;
const RouteTableAssociation = models.RouteTableAssociation;
const ModifyCustomerGatewayAttributeRequest = models.ModifyCustomerGatewayAttributeRequest;
const DescribeRouteTablesResponse = models.DescribeRouteTablesResponse;
const DeleteCcnResponse = models.DeleteCcnResponse;
const ServiceTemplate = models.ServiceTemplate;
const DescribeCcnAttachedInstancesRequest = models.DescribeCcnAttachedInstancesRequest;
const DescribeNatGatewaysRequest = models.DescribeNatGatewaysRequest;
const ModifyFlowLogAttributeResponse = models.ModifyFlowLogAttributeResponse;
const DescribeBandwidthPackagesResponse = models.DescribeBandwidthPackagesResponse;
const DescribeDirectConnectGatewaysRequest = models.DescribeDirectConnectGatewaysRequest;
const DescribeVpcPrivateIpAddressesResponse = models.DescribeVpcPrivateIpAddressesResponse;
const DescribeVpcsRequest = models.DescribeVpcsRequest;
const AcceptAttachCcnInstancesRequest = models.AcceptAttachCcnInstancesRequest;
const DescribeGatewayFlowMonitorDetailResponse = models.DescribeGatewayFlowMonitorDetailResponse;
const DeleteFlowLogRequest = models.DeleteFlowLogRequest;
const NetDetectState = models.NetDetectState;
const HaVipDisassociateAddressIpResponse = models.HaVipDisassociateAddressIpResponse;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const ModifyAddressInternetChargeTypeResponse = models.ModifyAddressInternetChargeTypeResponse;
const UnassignIpv6SubnetCidrBlockRequest = models.UnassignIpv6SubnetCidrBlockRequest;
const ModifyVpcAttributeRequest = models.ModifyVpcAttributeRequest;
const AssignIpv6CidrBlockRequest = models.AssignIpv6CidrBlockRequest;
const CreateSecurityGroupPoliciesResponse = models.CreateSecurityGroupPoliciesResponse;
const HaVipAssociateAddressIpRequest = models.HaVipAssociateAddressIpRequest;
const DisassociateNatGatewayAddressResponse = models.DisassociateNatGatewayAddressResponse;
const DeleteRoutesResponse = models.DeleteRoutesResponse;
const DescribeSecurityGroupAssociationStatisticsResponse = models.DescribeSecurityGroupAssociationStatisticsResponse;
const ModifyAssistantCidrResponse = models.ModifyAssistantCidrResponse;
const ModifyNetworkAclEntriesResponse = models.ModifyNetworkAclEntriesResponse;
const DescribeFlowLogRequest = models.DescribeFlowLogRequest;
const DescribeAccountAttributesResponse = models.DescribeAccountAttributesResponse;
const AssignPrivateIpAddressesResponse = models.AssignPrivateIpAddressesResponse;
const DescribeSecurityGroupsRequest = models.DescribeSecurityGroupsRequest;
const DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest = models.DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest;
const AddBandwidthPackageResourcesResponse = models.AddBandwidthPackageResourcesResponse;
const DisassociateNetworkAclSubnetsResponse = models.DisassociateNetworkAclSubnetsResponse;
const SetCcnRegionBandwidthLimitsRequest = models.SetCcnRegionBandwidthLimitsRequest;
const ModifyAddressInternetChargeTypeRequest = models.ModifyAddressInternetChargeTypeRequest;
const DescribeDirectConnectGatewaysResponse = models.DescribeDirectConnectGatewaysResponse;
const CreateSecurityGroupWithPoliciesResponse = models.CreateSecurityGroupWithPoliciesResponse;
const DeleteAddressTemplateResponse = models.DeleteAddressTemplateResponse;
const ModifySubnetAttributeResponse = models.ModifySubnetAttributeResponse;
const ResetNatGatewayConnectionRequest = models.ResetNatGatewayConnectionRequest;
const DeleteAddressTemplateRequest = models.DeleteAddressTemplateRequest;
const NetworkInterface = models.NetworkInterface;
const TransformAddressRequest = models.TransformAddressRequest;
const ReplaceDirectConnectGatewayCcnRoutesRequest = models.ReplaceDirectConnectGatewayCcnRoutesRequest;
const ReferredSecurityGroup = models.ReferredSecurityGroup;
const ModifyAddressTemplateAttributeRequest = models.ModifyAddressTemplateAttributeRequest;
const CreateNatGatewayResponse = models.CreateNatGatewayResponse;
const DescribeVpcsResponse = models.DescribeVpcsResponse;
const ModifySecurityGroupAttributeRequest = models.ModifySecurityGroupAttributeRequest;
const ModifyNetDetectRequest = models.ModifyNetDetectRequest;
const DescribeVpcResourceDashboardResponse = models.DescribeVpcResourceDashboardResponse;
const DescribeNetDetectStatesRequest = models.DescribeNetDetectStatesRequest;
const DescribeFlowLogResponse = models.DescribeFlowLogResponse;
const DownloadCustomerGatewayConfigurationResponse = models.DownloadCustomerGatewayConfigurationResponse;
const DescribeBandwidthPackagesRequest = models.DescribeBandwidthPackagesRequest;
const DeleteDirectConnectGatewayCcnRoutesResponse = models.DeleteDirectConnectGatewayCcnRoutesResponse;
const DescribeAssistantCidrResponse = models.DescribeAssistantCidrResponse;
const InstanceStatistic = models.InstanceStatistic;
const CreateVpnConnectionRequest = models.CreateVpnConnectionRequest;
const CcnRoute = models.CcnRoute;
const DeleteSecurityGroupPoliciesRequest = models.DeleteSecurityGroupPoliciesRequest;
const VpnConnection = models.VpnConnection;
const DescribeCcnsRequest = models.DescribeCcnsRequest;
const ModifyNatGatewayAttributeResponse = models.ModifyNatGatewayAttributeResponse;
const DescribeNetDetectsRequest = models.DescribeNetDetectsRequest;
const CreateAddressTemplateGroupRequest = models.CreateAddressTemplateGroupRequest;
const DescribeCustomerGatewayVendorsResponse = models.DescribeCustomerGatewayVendorsResponse;
const DeleteSubnetResponse = models.DeleteSubnetResponse;
const Vpc = models.Vpc;
const CreateVpnGatewayResponse = models.CreateVpnGatewayResponse;
const DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse = models.DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse;
const DescribeVpcIpv6AddressesResponse = models.DescribeVpcIpv6AddressesResponse;
const RejectAttachCcnInstancesRequest = models.RejectAttachCcnInstancesRequest;
const ModifyCcnRegionBandwidthLimitsTypeRequest = models.ModifyCcnRegionBandwidthLimitsTypeRequest;
const DescribeVpcResourceDashboardRequest = models.DescribeVpcResourceDashboardRequest;
const VpngwCcnRoutes = models.VpngwCcnRoutes;
const ReplaceRouteTableAssociationRequest = models.ReplaceRouteTableAssociationRequest;
const AssociateNetworkAclSubnetsRequest = models.AssociateNetworkAclSubnetsRequest;
const CheckAssistantCidrRequest = models.CheckAssistantCidrRequest;
const RenewVpnGatewayRequest = models.RenewVpnGatewayRequest;
const SecurityGroupPolicy = models.SecurityGroupPolicy;
const DeleteVpcRequest = models.DeleteVpcRequest;
const ModifyServiceTemplateAttributeResponse = models.ModifyServiceTemplateAttributeResponse;
const DescribeCcnsResponse = models.DescribeCcnsResponse;
const CreateSubnetResponse = models.CreateSubnetResponse;
const DescribeSecurityGroupPoliciesResponse = models.DescribeSecurityGroupPoliciesResponse;
const DescribeGatewayFlowQosResponse = models.DescribeGatewayFlowQosResponse;
const ModifySecurityGroupPoliciesRequest = models.ModifySecurityGroupPoliciesRequest;
const ReplaceRoutesRequest = models.ReplaceRoutesRequest;
const CreateCustomerGatewayResponse = models.CreateCustomerGatewayResponse;
const DeleteServiceTemplateGroupResponse = models.DeleteServiceTemplateGroupResponse;
const DisassociateAddressRequest = models.DisassociateAddressRequest;
const NetworkAclEntrySet = models.NetworkAclEntrySet;
const DeleteVpnConnectionResponse = models.DeleteVpnConnectionResponse;
const CreateCcnResponse = models.CreateCcnResponse;
const EnableCcnRoutesRequest = models.EnableCcnRoutesRequest;
const Tag = models.Tag;
const CreateFlowLogResponse = models.CreateFlowLogResponse;
const DefaultVpcSubnet = models.DefaultVpcSubnet;
const CreateSubnetsResponse = models.CreateSubnetsResponse;
const DescribeGatewayFlowMonitorDetailRequest = models.DescribeGatewayFlowMonitorDetailRequest;
const InquiryPriceCreateVpnGatewayResponse = models.InquiryPriceCreateVpnGatewayResponse;
const FilterObject = models.FilterObject;
const ModifyBandwidthPackageAttributeResponse = models.ModifyBandwidthPackageAttributeResponse;
const DetachNetworkInterfaceResponse = models.DetachNetworkInterfaceResponse;
const ResetRoutesResponse = models.ResetRoutesResponse;
const DeleteNetworkAclRequest = models.DeleteNetworkAclRequest;
const NatGatewayDestinationIpPortTranslationNatRule = models.NatGatewayDestinationIpPortTranslationNatRule;
const DescribeNetDetectStatesResponse = models.DescribeNetDetectStatesResponse;
const CreateVpnConnectionResponse = models.CreateVpnConnectionResponse;
const AddressTemplateSpecification = models.AddressTemplateSpecification;
const VpcIpv6Address = models.VpcIpv6Address;
const AssignIpv6AddressesRequest = models.AssignIpv6AddressesRequest;
const CreateServiceTemplateGroupResponse = models.CreateServiceTemplateGroupResponse;
const NetDetect = models.NetDetect;
const ModifyIpv6AddressesAttributeResponse = models.ModifyIpv6AddressesAttributeResponse;
const ReplaceSecurityGroupPolicyRequest = models.ReplaceSecurityGroupPolicyRequest;
const NatGateway = models.NatGateway;
const ResourceDashboard = models.ResourceDashboard;
const DescribeCcnAttachedInstancesResponse = models.DescribeCcnAttachedInstancesResponse;
const DeleteCustomerGatewayResponse = models.DeleteCustomerGatewayResponse;
const CreateNetDetectRequest = models.CreateNetDetectRequest;
const CreateAddressTemplateResponse = models.CreateAddressTemplateResponse;
const CreateNatGatewayDestinationIpPortTranslationNatRuleResponse = models.CreateNatGatewayDestinationIpPortTranslationNatRuleResponse;
const DeleteAddressTemplateGroupRequest = models.DeleteAddressTemplateGroupRequest;
const DescribeNetworkInterfaceLimitRequest = models.DescribeNetworkInterfaceLimitRequest;
const CreateBandwidthPackageRequest = models.CreateBandwidthPackageRequest;
const ModifyRouteTableAttributeRequest = models.ModifyRouteTableAttributeRequest;
const ModifyDirectConnectGatewayAttributeResponse = models.ModifyDirectConnectGatewayAttributeResponse;
const DescribeVpnGatewaysRequest = models.DescribeVpnGatewaysRequest;
const NetDetectIpState = models.NetDetectIpState;
const CreateSubnetsRequest = models.CreateSubnetsRequest;
const AssociateAddressResponse = models.AssociateAddressResponse;
const ResetVpnConnectionResponse = models.ResetVpnConnectionResponse;
const CreateNetworkAclRequest = models.CreateNetworkAclRequest;
const DescribeAddressesRequest = models.DescribeAddressesRequest;
const DescribeSecurityGroupPoliciesRequest = models.DescribeSecurityGroupPoliciesRequest;
const ModifyNetworkInterfaceAttributeResponse = models.ModifyNetworkInterfaceAttributeResponse;
const CreateSecurityGroupResponse = models.CreateSecurityGroupResponse;
const DisassociateNetworkInterfaceSecurityGroupsResponse = models.DisassociateNetworkInterfaceSecurityGroupsResponse;
const ModifyGatewayFlowQosRequest = models.ModifyGatewayFlowQosRequest;
const DescribeNetworkInterfaceLimitResponse = models.DescribeNetworkInterfaceLimitResponse;
const AssignIpv6CidrBlockResponse = models.AssignIpv6CidrBlockResponse;
const CreateCcnRequest = models.CreateCcnRequest;
const DeleteVpnConnectionRequest = models.DeleteVpnConnectionRequest;
const NetworkAclEntry = models.NetworkAclEntry;
const DescribeAssistantCidrRequest = models.DescribeAssistantCidrRequest;
const RenewVpnGatewayResponse = models.RenewVpnGatewayResponse;
const DeleteDirectConnectGatewayResponse = models.DeleteDirectConnectGatewayResponse;
const ModifyAddressesBandwidthRequest = models.ModifyAddressesBandwidthRequest;
const ResetVpnGatewayInternetMaxBandwidthRequest = models.ResetVpnGatewayInternetMaxBandwidthRequest;
const DirectConnectGateway = models.DirectConnectGateway;
const Price = models.Price;
const HaVipDisassociateAddressIpRequest = models.HaVipDisassociateAddressIpRequest;
const ModifyVpnGatewayAttributeResponse = models.ModifyVpnGatewayAttributeResponse;
const DescribeVpnGatewayCcnRoutesRequest = models.DescribeVpnGatewayCcnRoutesRequest;
const CreateServiceTemplateGroupRequest = models.CreateServiceTemplateGroupRequest;
const DescribeClassicLinkInstancesResponse = models.DescribeClassicLinkInstancesResponse;
const DescribeVpnGatewayCcnRoutesResponse = models.DescribeVpnGatewayCcnRoutesResponse;
const DetachCcnInstancesRequest = models.DetachCcnInstancesRequest;
const MigrateNetworkInterfaceResponse = models.MigrateNetworkInterfaceResponse;
const DeleteDirectConnectGatewayRequest = models.DeleteDirectConnectGatewayRequest;
const CcnAttachedInstance = models.CcnAttachedInstance;
const SecurityPolicyDatabase = models.SecurityPolicyDatabase;
const Ipv6Address = models.Ipv6Address;
const CreateNetworkInterfaceRequest = models.CreateNetworkInterfaceRequest;
const DeleteHaVipResponse = models.DeleteHaVipResponse;
const DescribeFlowLogsResponse = models.DescribeFlowLogsResponse;
const VpcPrivateIpAddress = models.VpcPrivateIpAddress;
const CvmInstance = models.CvmInstance;
const DescribeNetworkAclsRequest = models.DescribeNetworkAclsRequest;
const DescribeSubnetsRequest = models.DescribeSubnetsRequest;
const CreateSubnetRequest = models.CreateSubnetRequest;
const AddressTemplateGroup = models.AddressTemplateGroup;
const DownloadCustomerGatewayConfigurationRequest = models.DownloadCustomerGatewayConfigurationRequest;
const DeleteBandwidthPackageRequest = models.DeleteBandwidthPackageRequest;
const HaVip = models.HaVip;
const ModifyAddressesBandwidthResponse = models.ModifyAddressesBandwidthResponse;
const ModifyCcnRegionBandwidthLimitsTypeResponse = models.ModifyCcnRegionBandwidthLimitsTypeResponse;
const RejectAttachCcnInstancesResponse = models.RejectAttachCcnInstancesResponse;
const SetCcnRegionBandwidthLimitsResponse = models.SetCcnRegionBandwidthLimitsResponse;
const DescribeAccountAttributesRequest = models.DescribeAccountAttributesRequest;
const DescribeCcnRoutesRequest = models.DescribeCcnRoutesRequest;
const HaVipAssociateAddressIpResponse = models.HaVipAssociateAddressIpResponse;
const DeleteNetDetectResponse = models.DeleteNetDetectResponse;
const AllocateAddressesRequest = models.AllocateAddressesRequest;
const NatGatewayAddress = models.NatGatewayAddress;
const ModifyAssistantCidrRequest = models.ModifyAssistantCidrRequest;
const ModifyGatewayFlowQosResponse = models.ModifyGatewayFlowQosResponse;
const ModifySecurityGroupAttributeResponse = models.ModifySecurityGroupAttributeResponse;
const AddressTemplateItem = models.AddressTemplateItem;
const ModifyAddressAttributeResponse = models.ModifyAddressAttributeResponse;
const AttachClassicLinkVpcRequest = models.AttachClassicLinkVpcRequest;
const GatewayFlowMonitorDetail = models.GatewayFlowMonitorDetail;
const DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse = models.DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse;
const DeleteVpnGatewayRequest = models.DeleteVpnGatewayRequest;
const ReplaceRouteTableAssociationResponse = models.ReplaceRouteTableAssociationResponse;
const AttachCcnInstancesRequest = models.AttachCcnInstancesRequest;
const DescribeDirectConnectGatewayCcnRoutesRequest = models.DescribeDirectConnectGatewayCcnRoutesRequest;
const CcnInstance = models.CcnInstance;
const DeleteNatGatewayRequest = models.DeleteNatGatewayRequest;
const ModifyCustomerGatewayAttributeResponse = models.ModifyCustomerGatewayAttributeResponse;
const ConflictItem = models.ConflictItem;
const InquiryPriceRenewVpnGatewayResponse = models.InquiryPriceRenewVpnGatewayResponse;
const AssignIpv6SubnetCidrBlockResponse = models.AssignIpv6SubnetCidrBlockResponse;
const DeleteAssistantCidrResponse = models.DeleteAssistantCidrResponse;
const DescribeAddressesResponse = models.DescribeAddressesResponse;
const GatewayQos = models.GatewayQos;
const ModifyIpv6AddressesAttributeRequest = models.ModifyIpv6AddressesAttributeRequest;
const DescribeCustomerGatewayVendorsRequest = models.DescribeCustomerGatewayVendorsRequest;
const ResetVpnGatewayInternetMaxBandwidthResponse = models.ResetVpnGatewayInternetMaxBandwidthResponse;
const AddressChargePrepaid = models.AddressChargePrepaid;
const DescribeNetworkAclsResponse = models.DescribeNetworkAclsResponse;
const DeleteFlowLogResponse = models.DeleteFlowLogResponse;
const AttachCcnInstancesResponse = models.AttachCcnInstancesResponse;
const DisassociateNetworkAclSubnetsRequest = models.DisassociateNetworkAclSubnetsRequest;
const ModifyVpcAttributeResponse = models.ModifyVpcAttributeResponse;
const ModifyVpnConnectionAttributeResponse = models.ModifyVpnConnectionAttributeResponse;
const PrivateIpAddressSpecification = models.PrivateIpAddressSpecification;
const AlgType = models.AlgType;
const MigratePrivateIpAddressResponse = models.MigratePrivateIpAddressResponse;
const DeleteRouteTableResponse = models.DeleteRouteTableResponse;
const DescribeVpcInstancesResponse = models.DescribeVpcInstancesResponse;
const AccountAttribute = models.AccountAttribute;
const ModifyHaVipAttributeResponse = models.ModifyHaVipAttributeResponse;
const CreateNatGatewayDestinationIpPortTranslationNatRuleRequest = models.CreateNatGatewayDestinationIpPortTranslationNatRuleRequest;
const CreateFlowLogRequest = models.CreateFlowLogRequest;
const AttachNetworkInterfaceResponse = models.AttachNetworkInterfaceResponse;
const DisassociateNatGatewayAddressRequest = models.DisassociateNatGatewayAddressRequest;
const DescribeServiceTemplatesResponse = models.DescribeServiceTemplatesResponse;
const DescribeRouteTablesRequest = models.DescribeRouteTablesRequest;
const ResetAttachCcnInstancesRequest = models.ResetAttachCcnInstancesRequest;
const CreateHaVipResponse = models.CreateHaVipResponse;
const DescribeSecurityGroupReferencesRequest = models.DescribeSecurityGroupReferencesRequest;
const DescribeAddressTemplateGroupsResponse = models.DescribeAddressTemplateGroupsResponse;
const ReleaseAddressesRequest = models.ReleaseAddressesRequest;
const CreateDirectConnectGatewayCcnRoutesRequest = models.CreateDirectConnectGatewayCcnRoutesRequest;
const CreateDirectConnectGatewayCcnRoutesResponse = models.CreateDirectConnectGatewayCcnRoutesResponse;
const CreateRouteTableRequest = models.CreateRouteTableRequest;
const MigrateNetworkInterfaceRequest = models.MigrateNetworkInterfaceRequest;
const DisableCcnRoutesRequest = models.DisableCcnRoutesRequest;
const ModifyAddressAttributeRequest = models.ModifyAddressAttributeRequest;
const DeleteAssistantCidrRequest = models.DeleteAssistantCidrRequest;
const SubnetInput = models.SubnetInput;
const UnassignIpv6SubnetCidrBlockResponse = models.UnassignIpv6SubnetCidrBlockResponse;
const CreateNetDetectResponse = models.CreateNetDetectResponse;
const DeleteCcnRequest = models.DeleteCcnRequest;
const AssociateNetworkInterfaceSecurityGroupsResponse = models.AssociateNetworkInterfaceSecurityGroupsResponse;
const ModifyVpnGatewayAttributeRequest = models.ModifyVpnGatewayAttributeRequest;
const CreateNatGatewayRequest = models.CreateNatGatewayRequest;
const DeleteNetDetectRequest = models.DeleteNetDetectRequest;
const IPSECOptionsSpecification = models.IPSECOptionsSpecification;
const UnassignIpv6AddressesRequest = models.UnassignIpv6AddressesRequest;
const ModifyCcnAttributeRequest = models.ModifyCcnAttributeRequest;
const DeleteSecurityGroupPoliciesResponse = models.DeleteSecurityGroupPoliciesResponse;
const ConflictSource = models.ConflictSource;
const DeleteVpnGatewayResponse = models.DeleteVpnGatewayResponse;
const DescribeHaVipsRequest = models.DescribeHaVipsRequest;
const UnassignPrivateIpAddressesResponse = models.UnassignPrivateIpAddressesResponse;
const Address = models.Address;
const VpnGateway = models.VpnGateway;
const EnableGatewayFlowMonitorResponse = models.EnableGatewayFlowMonitorResponse;
const Resource = models.Resource;
const CustomerGateway = models.CustomerGateway;
const AllocateAddressesResponse = models.AllocateAddressesResponse;
const BandwidthPackage = models.BandwidthPackage;
const ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest = models.ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest;
const CreateSecurityGroupPoliciesRequest = models.CreateSecurityGroupPoliciesRequest;
const ModifyRouteTableAttributeResponse = models.ModifyRouteTableAttributeResponse;
const DescribeSecurityGroupReferencesResponse = models.DescribeSecurityGroupReferencesResponse;
const DisableGatewayFlowMonitorRequest = models.DisableGatewayFlowMonitorRequest;
const CreateAddressTemplateGroupResponse = models.CreateAddressTemplateGroupResponse;
const DescribeBandwidthPackageQuotaResponse = models.DescribeBandwidthPackageQuotaResponse;
const DeleteServiceTemplateGroupRequest = models.DeleteServiceTemplateGroupRequest;
const DeleteNatGatewayResponse = models.DeleteNatGatewayResponse;
const CreateDirectConnectGatewayResponse = models.CreateDirectConnectGatewayResponse;
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const CreateDefaultVpcResponse = models.CreateDefaultVpcResponse;
const ModifyAddressTemplateGroupAttributeRequest = models.ModifyAddressTemplateGroupAttributeRequest;
const ModifyServiceTemplateGroupAttributeRequest = models.ModifyServiceTemplateGroupAttributeRequest;
const UnassignIpv6CidrBlockRequest = models.UnassignIpv6CidrBlockRequest;
const CCN = models.CCN;
const DestinationIpPortTranslationNatRule = models.DestinationIpPortTranslationNatRule;
const CreateDefaultVpcRequest = models.CreateDefaultVpcRequest;
const DescribeSubnetsResponse = models.DescribeSubnetsResponse;
const DescribeCustomerGatewaysResponse = models.DescribeCustomerGatewaysResponse;
const CheckAssistantCidrResponse = models.CheckAssistantCidrResponse;
const InquiryPriceRenewVpnGatewayRequest = models.InquiryPriceRenewVpnGatewayRequest;
const EnableCcnRoutesResponse = models.EnableCcnRoutesResponse;
const ModifyVpnGatewayCcnRoutesResponse = models.ModifyVpnGatewayCcnRoutesResponse;
const DetachCcnInstancesResponse = models.DetachCcnInstancesResponse;
const ModifyServiceTemplateGroupAttributeResponse = models.ModifyServiceTemplateGroupAttributeResponse;
const DeleteSubnetRequest = models.DeleteSubnetRequest;
const DescribeAddressTemplateGroupsRequest = models.DescribeAddressTemplateGroupsRequest;
const CheckNetDetectStateResponse = models.CheckNetDetectStateResponse;
const AssociateNatGatewayAddressResponse = models.AssociateNatGatewayAddressResponse;
const RemoveBandwidthPackageResourcesRequest = models.RemoveBandwidthPackageResourcesRequest;
const RouteTable = models.RouteTable;
const DeleteNetworkInterfaceRequest = models.DeleteNetworkInterfaceRequest;
const InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse = models.InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse;
const DeleteAddressTemplateGroupResponse = models.DeleteAddressTemplateGroupResponse;
const ReplaceRoutesResponse = models.ReplaceRoutesResponse;
const DirectConnectGatewayCcnRoute = models.DirectConnectGatewayCcnRoute;
const DeleteHaVipRequest = models.DeleteHaVipRequest;
const MigratePrivateIpAddressRequest = models.MigratePrivateIpAddressRequest;
const DescribeServiceTemplatesRequest = models.DescribeServiceTemplatesRequest;
const DeleteRouteTableRequest = models.DeleteRouteTableRequest;
const CreateVpnGatewayRequest = models.CreateVpnGatewayRequest;
const DescribeVpcInstancesRequest = models.DescribeVpcInstancesRequest;
const UnassignIpv6CidrBlockResponse = models.UnassignIpv6CidrBlockResponse;
const CreateBandwidthPackageResponse = models.CreateBandwidthPackageResponse;
const ResetVpnConnectionRequest = models.ResetVpnConnectionRequest;
const ReleaseAddressesResponse = models.ReleaseAddressesResponse;
const InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest = models.InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest;
const ReplaceSecurityGroupPolicyResponse = models.ReplaceSecurityGroupPolicyResponse;
const EnableGatewayFlowMonitorRequest = models.EnableGatewayFlowMonitorRequest;
const ModifyPrivateIpAddressesAttributeResponse = models.ModifyPrivateIpAddressesAttributeResponse;
const DeleteDirectConnectGatewayCcnRoutesRequest = models.DeleteDirectConnectGatewayCcnRoutesRequest;
const DeleteSecurityGroupResponse = models.DeleteSecurityGroupResponse;
const CreateNetworkInterfaceResponse = models.CreateNetworkInterfaceResponse;
const DescribeVpcPrivateIpAddressesRequest = models.DescribeVpcPrivateIpAddressesRequest;
const RemoveBandwidthPackageResourcesResponse = models.RemoveBandwidthPackageResourcesResponse;
const AssignIpv6AddressesResponse = models.AssignIpv6AddressesResponse;
const CreateRoutesResponse = models.CreateRoutesResponse;
const DescribeSecurityGroupsResponse = models.DescribeSecurityGroupsResponse;
const ModifyVpnGatewayCcnRoutesRequest = models.ModifyVpnGatewayCcnRoutesRequest;
const DescribeGatewayFlowQosRequest = models.DescribeGatewayFlowQosRequest;
const ReplaceDirectConnectGatewayCcnRoutesResponse = models.ReplaceDirectConnectGatewayCcnRoutesResponse;
const ModifySecurityGroupPoliciesResponse = models.ModifySecurityGroupPoliciesResponse;
const ServiceTemplateSpecification = models.ServiceTemplateSpecification;
const DetachNetworkInterfaceRequest = models.DetachNetworkInterfaceRequest;
const AttachClassicLinkVpcResponse = models.AttachClassicLinkVpcResponse;
const CreateAddressTemplateRequest = models.CreateAddressTemplateRequest;
const DescribeNatGatewaysResponse = models.DescribeNatGatewaysResponse;
const Subnet = models.Subnet;
const AttachNetworkInterfaceRequest = models.AttachNetworkInterfaceRequest;
const DescribeCcnRoutesResponse = models.DescribeCcnRoutesResponse;
const SecurityGroup = models.SecurityGroup;
const DisableGatewayFlowMonitorResponse = models.DisableGatewayFlowMonitorResponse;
const DisassociateAddressResponse = models.DisassociateAddressResponse;
const DeleteRoutesRequest = models.DeleteRoutesRequest;
const AssociateAddressRequest = models.AssociateAddressRequest;
const CcnRegionBandwidthLimit = models.CcnRegionBandwidthLimit;
const ClassicLinkInstance = models.ClassicLinkInstance;
const NetworkInterfaceAttachment = models.NetworkInterfaceAttachment;
const ModifyNetworkInterfaceAttributeRequest = models.ModifyNetworkInterfaceAttributeRequest;
const ModifyHaVipAttributeRequest = models.ModifyHaVipAttributeRequest;
const ModifyAddressTemplateGroupAttributeResponse = models.ModifyAddressTemplateGroupAttributeResponse;
const DetachClassicLinkVpcResponse = models.DetachClassicLinkVpcResponse;
const UnassignPrivateIpAddressesRequest = models.UnassignPrivateIpAddressesRequest;
const Filter = models.Filter;
const ModifyNetDetectResponse = models.ModifyNetDetectResponse;
const CreateHaVipRequest = models.CreateHaVipRequest;
const Ipv6SubnetCidrBlock = models.Ipv6SubnetCidrBlock;
const DescribeAddressQuotaResponse = models.DescribeAddressQuotaResponse;
const CreateCustomerGatewayRequest = models.CreateCustomerGatewayRequest;
const DeleteSecurityGroupRequest = models.DeleteSecurityGroupRequest;
const ModifyVpnConnectionAttributeRequest = models.ModifyVpnConnectionAttributeRequest;
const CreateRouteTableResponse = models.CreateRouteTableResponse;
const ItemPrice = models.ItemPrice;
const DescribeDirectConnectGatewayCcnRoutesResponse = models.DescribeDirectConnectGatewayCcnRoutesResponse;
const ModifyPrivateIpAddressesAttributeRequest = models.ModifyPrivateIpAddressesAttributeRequest;
const ResetNatGatewayConnectionResponse = models.ResetNatGatewayConnectionResponse;
const AssociateNetworkInterfaceSecurityGroupsRequest = models.AssociateNetworkInterfaceSecurityGroupsRequest;
const CreateSecurityGroupRequest = models.CreateSecurityGroupRequest;
const ModifyCcnAttributeResponse = models.ModifyCcnAttributeResponse;
const DescribeClassicLinkInstancesRequest = models.DescribeClassicLinkInstancesRequest;
const CreateServiceTemplateResponse = models.CreateServiceTemplateResponse;
const DeleteNetworkInterfaceResponse = models.DeleteNetworkInterfaceResponse;
const DisableCcnRoutesResponse = models.DisableCcnRoutesResponse;
const InquiryPriceCreateVpnGatewayRequest = models.InquiryPriceCreateVpnGatewayRequest;
const CreateAssistantCidrResponse = models.CreateAssistantCidrResponse;
const CustomerGatewayVendor = models.CustomerGatewayVendor;
const DescribeAddressTemplatesRequest = models.DescribeAddressTemplatesRequest;
const ModifyNetworkAclAttributeRequest = models.ModifyNetworkAclAttributeRequest;
const DescribeVpnConnectionsResponse = models.DescribeVpnConnectionsResponse;
const DeleteCustomerGatewayRequest = models.DeleteCustomerGatewayRequest;
const DescribeAddressTemplatesResponse = models.DescribeAddressTemplatesResponse;
const Quota = models.Quota;
const DescribeNetworkInterfacesResponse = models.DescribeNetworkInterfacesResponse;
const DeleteNetworkAclResponse = models.DeleteNetworkAclResponse;
const AssignPrivateIpAddressesRequest = models.AssignPrivateIpAddressesRequest;
const DescribeServiceTemplateGroupsRequest = models.DescribeServiceTemplateGroupsRequest;
const CreateSecurityGroupWithPoliciesRequest = models.CreateSecurityGroupWithPoliciesRequest;
const CreateVpcRequest = models.CreateVpcRequest;
const DeleteServiceTemplateRequest = models.DeleteServiceTemplateRequest;
const DescribeSecurityGroupAssociationStatisticsRequest = models.DescribeSecurityGroupAssociationStatisticsRequest;
const Route = models.Route;
const ModifySubnetAttributeRequest = models.ModifySubnetAttributeRequest;
const DescribeBandwidthPackageQuotaRequest = models.DescribeBandwidthPackageQuotaRequest;
const DeleteVpcResponse = models.DeleteVpcResponse;
const AcceptAttachCcnInstancesResponse = models.AcceptAttachCcnInstancesResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
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
     * This API is used to query the VPC resource information.
     * @param {DescribeVpcResourceDashboardRequest} req
     * @param {function(string, DescribeVpcResourceDashboardResponse):void} cb
     * @public
     */
    DescribeVpcResourceDashboard(req, cb) {
        let resp = new DescribeVpcResourceDashboardResponse();
        this.request("DescribeVpcResourceDashboard", req, resp, cb);
    }

    /**
     * This API (DescribeCustomerGateways) is used to query the customer gateway list.
     * @param {DescribeCustomerGatewaysRequest} req
     * @param {function(string, DescribeCustomerGatewaysResponse):void} cb
     * @public
     */
    DescribeCustomerGateways(req, cb) {
        let resp = new DescribeCustomerGatewaysResponse();
        this.request("DescribeCustomerGateways", req, resp, cb);
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
     * This API (CreateFlowLog) is used to create flow logs.
     * @param {CreateFlowLogRequest} req
     * @param {function(string, CreateFlowLogResponse):void} cb
     * @public
     */
    CreateFlowLog(req, cb) {
        let resp = new CreateFlowLogResponse();
        this.request("CreateFlowLog", req, resp, cb);
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
     * This API is used to create a <a href="https://cloud.tencent.com/document/product/215/20088">network ACL</a>.
* The inbound and outbound rules for a new network ACL are "Deny All" by default. You need to call `ModifyNetworkAclEntries` after creation to set rules for the network ACL as needed.
     * @param {CreateNetworkAclRequest} req
     * @param {function(string, CreateNetworkAclResponse):void} cb
     * @public
     */
    CreateNetworkAcl(req, cb) {
        let resp = new CreateNetworkAclResponse();
        this.request("CreateNetworkAcl", req, resp, cb);
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
     *  This API (DescribeRouteTables) is used to query route tables.
     * @param {DescribeRouteTablesRequest} req
     * @param {function(string, DescribeRouteTablesResponse):void} cb
     * @public
     */
    DescribeRouteTables(req, cb) {
        let resp = new DescribeRouteTablesResponse();
        this.request("DescribeRouteTables", req, resp, cb);
    }

    /**
     * This API is used to support the creation of [Device bandwidth packages](https://cloud.tencent.com/document/product/684/15246#.E8.AE.BE.E5.A4.87.E5.B8.A6.E5.AE.BD.E5.8C.85) and [IP bandwidth packages](https://cloud.tencent.com/document/product/684/15246#ip-.E5.B8.A6.E5.AE.BD.E5.8C.85)
     * @param {CreateBandwidthPackageRequest} req
     * @param {function(string, CreateBandwidthPackageResponse):void} cb
     * @public
     */
    CreateBandwidthPackage(req, cb) {
        let resp = new CreateBandwidthPackageResponse();
        this.request("CreateBandwidthPackage", req, resp, cb);
    }

    /**
     * This API (DeleteFlowLog) is used to delete flow logs.
     * @param {DeleteFlowLogRequest} req
     * @param {function(string, DeleteFlowLogResponse):void} cb
     * @public
     */
    DeleteFlowLog(req, cb) {
        let resp = new DeleteFlowLogResponse();
        this.request("DeleteFlowLog", req, resp, cb);
    }

    /**
     * This API is used to create a route table.
* After the VPC instance has been created, the system creates a default route table with which all newly created subnets will be associated. By default, you can use this route table to manage your routing policies. If you have multiple routing policies, you can call the API for creating route tables to create more route tables to manage these routing policies.
* You can bind a tag when creating a route table. The tag list in the response indicates the tags that have been successfully added.
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
     * This API is used to delete a network ACL.
     * @param {DeleteNetworkAclRequest} req
     * @param {function(string, DeleteNetworkAclResponse):void} cb
     * @public
     */
    DeleteNetworkAcl(req, cb) {
        let resp = new DeleteNetworkAclResponse();
        this.request("DeleteNetworkAcl", req, resp, cb);
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
     * This API (ModifyFlowLogAttribute) is used to modify flow log attributes.
     * @param {ModifyFlowLogAttributeRequest} req
     * @param {function(string, ModifyFlowLogAttributeResponse):void} cb
     * @public
     */
    ModifyFlowLogAttribute(req, cb) {
        let resp = new ModifyFlowLogAttributeResponse();
        this.request("ModifyFlowLogAttribute", req, resp, cb);
    }

    /**
     * This API (DisassociateNetworkInterfaceSecurityGroups) is used to detach (or fully detach if possible) a security group from an ENI.
     * @param {DisassociateNetworkInterfaceSecurityGroupsRequest} req
     * @param {function(string, DisassociateNetworkInterfaceSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateNetworkInterfaceSecurityGroups(req, cb) {
        let resp = new DisassociateNetworkInterfaceSecurityGroupsResponse();
        this.request("DisassociateNetworkInterfaceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to adjust the network billing mode of an EIP. Please note that it's available to users whose network fees are billed on IPs but not CVMs.
* The network billing mode can be switched between `BANDWIDTH_PREPAID_BY_MONTH` and `TRAFFIC_POSTPAID_BY_HOUR`.
* The network billing mode for each EIP be changed for up to twice.
     * @param {ModifyAddressInternetChargeTypeRequest} req
     * @param {function(string, ModifyAddressInternetChargeTypeResponse):void} cb
     * @public
     */
    ModifyAddressInternetChargeType(req, cb) {
        let resp = new ModifyAddressInternetChargeTypeResponse();
        this.request("ModifyAddressInternetChargeType", req, resp, cb);
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
     * This API (DescribeNetworkInterfaceLimit) is used to query the ENI quota based on the ID of CVM instance or ENI. It returns the ENI quota to which the CVM instance can be bound and the IP address quota that can be allocated to the ENI.
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
     * This API is used to modify the bandwidth limit policy of a postpaid CCN instance.
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
     * This API (EnableGatewayFlowMonitor) is used to enable gateway flow monitor.
     * @param {EnableGatewayFlowMonitorRequest} req
     * @param {function(string, EnableGatewayFlowMonitorResponse):void} cb
     * @public
     */
    EnableGatewayFlowMonitor(req, cb) {
        let resp = new EnableGatewayFlowMonitorResponse();
        this.request("EnableGatewayFlowMonitor", req, resp, cb);
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
     * This API is used to query a list of network ACLs.
     * @param {DescribeNetworkAclsRequest} req
     * @param {function(string, DescribeNetworkAclsResponse):void} cb
     * @public
     */
    DescribeNetworkAcls(req, cb) {
        let resp = new DescribeNetworkAclsResponse();
        this.request("DescribeNetworkAcls", req, resp, cb);
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
     * This API (DescribeCustomerGatewayVendors) is used to query the information of supported customer gateway vendors.
     * @param {DescribeCustomerGatewayVendorsRequest} req
     * @param {function(string, DescribeCustomerGatewayVendorsResponse):void} cb
     * @public
     */
    DescribeCustomerGatewayVendors(req, cb) {
        let resp = new DescribeCustomerGatewayVendorsResponse();
        this.request("DescribeCustomerGatewayVendors", req, resp, cb);
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
     * This API (AssociateNatGatewayAddress) is used to bind a NAT gateway to an Elastic IP (EIP).
     * @param {AssociateNatGatewayAddressRequest} req
     * @param {function(string, AssociateNatGatewayAddressResponse):void} cb
     * @public
     */
    AssociateNatGatewayAddress(req, cb) {
        let resp = new AssociateNatGatewayAddressResponse();
        this.request("AssociateNatGatewayAddress", req, resp, cb);
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
     * This API is used to delete bandwidth package resources. This includes [Elastic IP](https://cloud.tencent.com/document/product/213/1941), [Cloud Load Balancer](https://cloud.tencent.com/document/product/214/517), and so on.
     * @param {RemoveBandwidthPackageResourcesRequest} req
     * @param {function(string, RemoveBandwidthPackageResourcesResponse):void} cb
     * @public
     */
    RemoveBandwidthPackageResources(req, cb) {
        let resp = new RemoveBandwidthPackageResourcesResponse();
        this.request("RemoveBandwidthPackageResources", req, resp, cb);
    }

    /**
     * This API (InquiryPriceRenewVpnGateway) is used to query the price for VPN gateway renewal. Currently, only querying prices for IPSEC-type gateways is supported.
     * @param {InquiryPriceRenewVpnGatewayRequest} req
     * @param {function(string, InquiryPriceRenewVpnGatewayResponse):void} cb
     * @public
     */
    InquiryPriceRenewVpnGateway(req, cb) {
        let resp = new InquiryPriceRenewVpnGatewayResponse();
        this.request("InquiryPriceRenewVpnGateway", req, resp, cb);
    }

    /**
     * This API (AssignPrivateIpAddresses) is used for the ENI to apply for private IPs.
* An ENI can only be bound with a limited number of IP addresses. For more information about resource limits, see <a href="/document/product/576/18527">ENI Use Limits</a>.
* You can specify the private IP you want to apply for. It cannot be the primary IP, which already exists and cannot be modified. The private IP must be in the same subnet as the ENI, and cannot be occupied.
* You can apply for more than one secondary private IP on the ENI. The API will return the specified number of secondary private IPs in the subnet IP range of the ENI.
     * @param {AssignPrivateIpAddressesRequest} req
     * @param {function(string, AssignPrivateIpAddressesResponse):void} cb
     * @public
     */
    AssignPrivateIpAddresses(req, cb) {
        let resp = new AssignPrivateIpAddressesResponse();
        this.request("AssignPrivateIpAddresses", req, resp, cb);
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
     * This API is used to create subnets in batches.
* You must create a VPC instance before creating a subnet.
* After the subnet is successfully created, its IP address range cannot be modified. The subnet IP address range must fall within the VPC IP address range. They can be the same if the VPC has only one subnet. We recommend that you keep the subnet IP address range within the VPC IP address range to reserve IP address ranges for other subnets.
* The subnet mask of the smallest IP address range that can be created is 28 (16 IP addresses), and that of the largest IP address range is 16 (65,536 IP addresses).
* IP address ranges of different subnets cannot overlap with each other within the same VPC instance.
* A subnet is automatically associated with the default route table once created.
* You can bind a tag when creating a subnet. The tag list in the response indicates the tags that have been successfully added.
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
     * This API (InquiryPriceResetVpnGatewayInternetMaxBandwidth) is used to query the price for adjusting the bandwidth cap of a VPN gateway.
     * @param {InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest} req
     * @param {function(string, InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse):void} cb
     * @public
     */
    InquiryPriceResetVpnGatewayInternetMaxBandwidth(req, cb) {
        let resp = new InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse();
        this.request("InquiryPriceResetVpnGatewayInternetMaxBandwidth", req, resp, cb);
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
     * This API is used to create a subnet.
* You must create a VPC instance before creating a subnet.
* After the subnet is successfully created, its IP address range cannot be modified. The subnet IP address range must fall within the VPC IP address range. They can be the same if the VPC instance has only one subnet. We recommend that you keep the subnet IP address range within the VPC IP address range to reserve IP address ranges for other subnets.
* The subnet mask of the smallest IP address range that can be created is 28 (16 IP addresses), and that of the largest IP address range is 16 (65,536 IP addresses).
* IP address ranges of different subnets cannot overlap with each other within the same VPC instance.
* A subnet is automatically associated with the default route table once created.
* You can bind a tag when creating a subnet. The tag list in the response indicates the tags that have been successfully added.
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
     * This API (DescribeGatewayFlowQos) is used to query the QoS bandwidth limit of inbound IP flow in a gateway.
     * @param {DescribeGatewayFlowQosRequest} req
     * @param {function(string, DescribeGatewayFlowQosResponse):void} cb
     * @public
     */
    DescribeGatewayFlowQos(req, cb) {
        let resp = new DescribeGatewayFlowQosResponse();
        this.request("DescribeGatewayFlowQos", req, resp, cb);
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
     * This API is used to create a VPC instance.
* The subnet mask of the smallest IP address range that can be created is 28 (16 IP addresses), and that of the largest IP address range is 16 (65,536 IP addresses). For more information, see the corresponding documents about VPC IP address ranges.
* The number of VPC instances that can be created in a region is limited. For more information, see <a href="https://intl.cloud.tencent.com/doc/product/215/537" title="VPC Use Limits">VPC Use Limits</a>. To request more resources, contact the online customer service.
* You can bind a tag when creating a VPC instance. The tag list in the response indicates the tags that have been successfully added.
     * @param {CreateVpcRequest} req
     * @param {function(string, CreateVpcResponse):void} cb
     * @public
     */
    CreateVpc(req, cb) {
        let resp = new CreateVpcResponse();
        this.request("CreateVpc", req, resp, cb);
    }

    /**
     * This API is used to add bandwidth package resources. This includes [Elastic IP](https://cloud.tencent.com/document/product/213/1941), [Cloud Load Balancer](https://cloud.tencent.com/document/product/214/517), and so on.
     * @param {AddBandwidthPackageResourcesRequest} req
     * @param {function(string, AddBandwidthPackageResourcesResponse):void} cb
     * @public
     */
    AddBandwidthPackageResources(req, cb) {
        let resp = new AddBandwidthPackageResourcesResponse();
        this.request("AddBandwidthPackageResources", req, resp, cb);
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
     * This API (DescribeVpnGatewayCcnRoutes) is used to query VPN gateway-based CCN routes.
     * @param {DescribeVpnGatewayCcnRoutesRequest} req
     * @param {function(string, DescribeVpnGatewayCcnRoutesResponse):void} cb
     * @public
     */
    DescribeVpnGatewayCcnRoutes(req, cb) {
        let resp = new DescribeVpnGatewayCcnRoutesResponse();
        this.request("DescribeVpnGatewayCcnRoutes", req, resp, cb);
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
     * This API (CheckAssistantCidr) is used to check overlapping of a secondary CIDR block with inventory routing, peering connection (opposite VPC CIDR block), and any other resources. If an overlap is present, the overlapped resources are returned. (To use this API that is in Beta, please submit a ticket.)
* Check whether the secondary CIDR block overlaps with a primary or secondary CIDR block of the current VPC.
* Check whether the secondary CIDR block overlaps with the routing destination of the current VPC.
* Check whether the secondary CIDR block is peer-connected to the current VPC, and whether it overlaps with a main or secondary CIDR block of the opposite VPC.
     * @param {CheckAssistantCidrRequest} req
     * @param {function(string, CheckAssistantCidrResponse):void} cb
     * @public
     */
    CheckAssistantCidr(req, cb) {
        let resp = new CheckAssistantCidrResponse();
        this.request("CheckAssistantCidr", req, resp, cb);
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
     * This API (RenewVpnGateway) is used to renew prepaid (monthly subscription) VPN gateways. Currently, only IPSEC gateways are supported.
     * @param {RenewVpnGatewayRequest} req
     * @param {function(string, RenewVpnGatewayResponse):void} cb
     * @public
     */
    RenewVpnGateway(req, cb) {
        let resp = new RenewVpnGatewayResponse();
        this.request("RenewVpnGateway", req, resp, cb);
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
     * This API (DeleteCustomerGateway) is used to delete customer gateways.
     * @param {DeleteCustomerGatewayRequest} req
     * @param {function(string, DeleteCustomerGatewayResponse):void} cb
     * @public
     */
    DeleteCustomerGateway(req, cb) {
        let resp = new DeleteCustomerGatewayResponse();
        this.request("DeleteCustomerGateway", req, resp, cb);
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
     * This API is used to create a Classiclink between a VPC instance and a basic network device.
* The VPC instance and the basic network device must be in the same region.
* For differences between VPC and basic networks, see <a href="https://cloud.tencent.com/document/product/215/30720">VPC and Basic Networks</a>.
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
     * This API (DescribeFlowLogs) is used to query and obtain the flow log set.
     * @param {DescribeFlowLogsRequest} req
     * @param {function(string, DescribeFlowLogsResponse):void} cb
     * @public
     */
    DescribeFlowLogs(req, cb) {
        let resp = new DescribeFlowLogsResponse();
        this.request("DescribeFlowLogs", req, resp, cb);
    }

    /**
     * This API (DeleteDirectConnectGateway) is used to delete Direct Connect gateways.
<li>For a NAT gateway, NAT and ACL rules will be cleaned upon the deletion of a Direct Connect gateway.
<li>After the deletion of a Direct Connect gateway, the routing policy associated with the gateway in the route table will also be deleted.
This API is completed asynchronously. If you need to query the async job execution results, please use the `RequestId` returned by this API to query the `QueryTask` API.
     * @param {DeleteDirectConnectGatewayRequest} req
     * @param {function(string, DeleteDirectConnectGatewayResponse):void} cb
     * @public
     */
    DeleteDirectConnectGateway(req, cb) {
        let resp = new DeleteDirectConnectGatewayResponse();
        this.request("DeleteDirectConnectGateway", req, resp, cb);
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
     * This API is used to support the deletion of shared bandwidth packages, including [Device bandwidth packages](https://cloud.tencent.com/document/product/684/15246#.E8.AE.BE.E5.A4.87.E5.B8.A6.E5.AE.BD.E5.8C.85) and [IP bandwidth packages](https://cloud.tencent.com/document/product/684/15246#ip-.E5.B8.A6.E5.AE.BD.E5.8C.85).
     * @param {DeleteBandwidthPackageRequest} req
     * @param {function(string, DeleteBandwidthPackageResponse):void} cb
     * @public
     */
    DeleteBandwidthPackage(req, cb) {
        let resp = new DeleteBandwidthPackageResponse();
        this.request("DeleteBandwidthPackage", req, resp, cb);
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
     * This API is used to modify (add or delete) the inbound and outbound rules of a network ACL.
     * @param {ModifyNetworkAclEntriesRequest} req
     * @param {function(string, ModifyNetworkAclEntriesResponse):void} cb
     * @public
     */
    ModifyNetworkAclEntries(req, cb) {
        let resp = new ModifyNetworkAclEntriesResponse();
        this.request("ModifyNetworkAclEntries", req, resp, cb);
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
     * This API (ModifyVpnGatewayCcnRoutes) is used to modify VPN gateway-based CCN routes.
     * @param {ModifyVpnGatewayCcnRoutesRequest} req
     * @param {function(string, ModifyVpnGatewayCcnRoutesResponse):void} cb
     * @public
     */
    ModifyVpnGatewayCcnRoutes(req, cb) {
        let resp = new ModifyVpnGatewayCcnRoutesResponse();
        this.request("ModifyVpnGatewayCcnRoutes", req, resp, cb);
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
     * This API (DeleteAssistantCidr) is used to delete secondary CIDR blocks. (To use this API that is in Beta, please submit a ticket.)
     * @param {DeleteAssistantCidrRequest} req
     * @param {function(string, DeleteAssistantCidrResponse):void} cb
     * @public
     */
    DeleteAssistantCidr(req, cb) {
        let resp = new DeleteAssistantCidrResponse();
        this.request("DeleteAssistantCidr", req, resp, cb);
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
     * This API (DescribeFlowLog) is used to query flow log instance information.
     * @param {DescribeFlowLogRequest} req
     * @param {function(string, DescribeFlowLogResponse):void} cb
     * @public
     */
    DescribeFlowLog(req, cb) {
        let resp = new DescribeFlowLogResponse();
        this.request("DescribeFlowLog", req, resp, cb);
    }

    /**
     * This API (ModifyGatewayFlowQos) is used to adjust the QoS bandwidth limit in a gateway.
     * @param {ModifyGatewayFlowQosRequest} req
     * @param {function(string, ModifyGatewayFlowQosResponse):void} cb
     * @public
     */
    ModifyGatewayFlowQos(req, cb) {
        let resp = new ModifyGatewayFlowQosResponse();
        this.request("ModifyGatewayFlowQos", req, resp, cb);
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
     * This API is used to reset the egress and ingress policies (SecurityGroupPolicy) of a security group.

</ul>
<li>This API deletes all the existing egress and ingress policies, and then adds `Egress` and `Ingress policies`. It does not support custom indexes `PolicyIndex`.</li>
<li>For parameters of SecurityGroupPolicySet,<ul>
	<li>If `SecurityGroupPolicySet.Version` is set to 0, all policies will be cleared, and `Egress` and `Ingress` will be ignored.</li>
	<li>If `SecurityGroupPolicySet.Version` is not set to 0, add `Egress` and `Ingress` policies:<ul>
		<li>`Protocol`: allows TCP, UDP, ICMP, ICMPV6, GRE, or ALL.</li>
		<li>`CidrBlock`: a CIDR block in the correct format. In a classic network, if a `CidrBlock` contains private IPs on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.</li>
		<li>`Ipv6CidrBlock`: an IPv6 CIDR block in the correct format. In a classic network, if an `Ipv6CidrBlock` contains private IPv6 addresses on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.</li>
		<li>`SecurityGroupId`: ID of the security group. It can be in the same project as the security group to be modified, including the ID of the security group itself, to represent private IPs of all CVMs under the security group. If this field is used, the policy will change without manual modification according to the CVM associated with the policy ID while being used to match network messages.</li>
		<li>`Port`: a single port number such as 80, or a port range in the format of “8000-8010”. You may use this field only if the `Protocol` field takes the value `TCP` or `UDP`.</li>
		<li>`Action`: only allows ACCEPT or DROP.</li>
		<li>`CidrBlock`, `Ipv6CidrBlock`, `SecurityGroupId`, and `AddressTemplate` are mutually exclusive. `Protocol` + `Port` and `ServiceTemplate` are mutually exclusive.</li>
</ul></li></ul></li>
</ul>
     * @param {ModifySecurityGroupPoliciesRequest} req
     * @param {function(string, ModifySecurityGroupPoliciesResponse):void} cb
     * @public
     */
    ModifySecurityGroupPolicies(req, cb) {
        let resp = new ModifySecurityGroupPoliciesResponse();
        this.request("ModifySecurityGroupPolicies", req, resp, cb);
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
     * This API (CreateAssistantCidr) is used to batch create secondary CIDR blocks. (To use this API that is in Beta, please submit a ticket.)
     * @param {CreateAssistantCidrRequest} req
     * @param {function(string, CreateAssistantCidrResponse):void} cb
     * @public
     */
    CreateAssistantCidr(req, cb) {
        let resp = new CreateAssistantCidrResponse();
        this.request("CreateAssistantCidr", req, resp, cb);
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
     * This API is used to bind an ENI to a CVM.
* One CVM can be bound to multiple ENIs, but only one primary ENI. For more information on the limits, see <a href="https://cloud.tencent.com/document/product/576/18527">ENI Use Limits</a>.
* An ENI can only be bound to one CVM at a time.
* Only CVMs in the running or shutdown state can be bound to an ENI. For more information on CVM states, see <a href="https://cloud.tencent.com/document/api/213/9452#InstanceStatus">Tencent CVM Information</a>.
* An ENI can only be bound to a CVM in a VPC instance, and the CVM must reside in the same availability zone as the subnet of the ENI.
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
     * This API (ModifyAssistantCidr) is used to batch modify (e.g. add and delete) secondary CIDR blocks. (To use this API that is in Beta, please submit a ticket.)
     * @param {ModifyAssistantCidrRequest} req
     * @param {function(string, ModifyAssistantCidrResponse):void} cb
     * @public
     */
    ModifyAssistantCidr(req, cb) {
        let resp = new ModifyAssistantCidrResponse();
        this.request("ModifyAssistantCidr", req, resp, cb);
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
     * This API (ModifyDirectConnectGatewayAttribute) is used to modify the Direct Connect gateway attributes.

     * @param {ModifyDirectConnectGatewayAttributeRequest} req
     * @param {function(string, ModifyDirectConnectGatewayAttributeResponse):void} cb
     * @public
     */
    ModifyDirectConnectGatewayAttribute(req, cb) {
        let resp = new ModifyDirectConnectGatewayAttributeResponse();
        this.request("ModifyDirectConnectGatewayAttribute", req, resp, cb);
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
     * This API (DescribeNetworkInterfaces) is used to query the ENI list.
     * @param {DescribeNetworkInterfacesRequest} req
     * @param {function(string, DescribeNetworkInterfacesResponse):void} cb
     * @public
     */
    DescribeNetworkInterfaces(req, cb) {
        let resp = new DescribeNetworkInterfacesResponse();
        this.request("DescribeNetworkInterfaces", req, resp, cb);
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
     * This API (CreateCustomerGateway) is used to create customer gateways.
     * @param {CreateCustomerGatewayRequest} req
     * @param {function(string, CreateCustomerGatewayResponse):void} cb
     * @public
     */
    CreateCustomerGateway(req, cb) {
        let resp = new CreateCustomerGatewayResponse();
        this.request("CreateCustomerGateway", req, resp, cb);
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
     * This API is used to create a security group (SecurityGroup).
* Note the <a href="https://cloud.tencent.com/document/product/213/12453">maximum number of security groups</a> per project in each region under each account.
* Both the inbound and outbound rules for a newly created security group are "Deny All" by default. You need to call CreateSecurityGroupPolicies to set security group rules based on your needs.
* You can bind a tag when creating a security group. The tag list in the response indicates the tags that have been successfully added.
     * @param {CreateSecurityGroupRequest} req
     * @param {function(string, CreateSecurityGroupResponse):void} cb
     * @public
     */
    CreateSecurityGroup(req, cb) {
        let resp = new CreateSecurityGroupResponse();
        this.request("CreateSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to associate a network ACL with subnets in a VPC instance.
     * @param {AssociateNetworkAclSubnetsRequest} req
     * @param {function(string, AssociateNetworkAclSubnetsResponse):void} cb
     * @public
     */
    AssociateNetworkAclSubnets(req, cb) {
        let resp = new AssociateNetworkAclSubnetsResponse();
        this.request("AssociateNetworkAclSubnets", req, resp, cb);
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
     *  This API (DescribeVpcInstances) is used to query a list of VCM instances on VPC.
     * @param {DescribeVpcInstancesRequest} req
     * @param {function(string, DescribeVpcInstancesResponse):void} cb
     * @public
     */
    DescribeVpcInstances(req, cb) {
        let resp = new DescribeVpcInstancesResponse();
        this.request("DescribeVpcInstances", req, resp, cb);
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
     * This API (DescribeDirectConnectGateways) is used to query Direct Connect gateways.
     * @param {DescribeDirectConnectGatewaysRequest} req
     * @param {function(string, DescribeDirectConnectGatewaysResponse):void} cb
     * @public
     */
    DescribeDirectConnectGateways(req, cb) {
        let resp = new DescribeDirectConnectGatewaysResponse();
        this.request("DescribeDirectConnectGateways", req, resp, cb);
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
     * This API (AssociateNetworkInterfaceSecurityGroups) is used to attach a security group to an ENI.
     * @param {AssociateNetworkInterfaceSecurityGroupsRequest} req
     * @param {function(string, AssociateNetworkInterfaceSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateNetworkInterfaceSecurityGroups(req, cb) {
        let resp = new AssociateNetworkInterfaceSecurityGroupsResponse();
        this.request("AssociateNetworkInterfaceSecurityGroups", req, resp, cb);
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
     * This API is used to modify bandwidth package attributes, including the bandwidth package name, and so on.
     * @param {ModifyBandwidthPackageAttributeRequest} req
     * @param {function(string, ModifyBandwidthPackageAttributeResponse):void} cb
     * @public
     */
    ModifyBandwidthPackageAttribute(req, cb) {
        let resp = new ModifyBandwidthPackageAttributeResponse();
        this.request("ModifyBandwidthPackageAttribute", req, resp, cb);
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
     * This API is used to create a Cloud Connect Network (CCN).<br />
* You can bind a tag when creating a CCN instance. The tag list in the response indicates the tags that have been successfully added.
Each account can only create a limited number of CCN instances. For more information, see product documentation. To create more instances, contact the online customer service.
     * @param {CreateCcnRequest} req
     * @param {function(string, CreateCcnResponse):void} cb
     * @public
     */
    CreateCcn(req, cb) {
        let resp = new CreateCcnResponse();
        this.request("CreateCcn", req, resp, cb);
    }

    /**
     * This API (ModifyCustomerGatewayAttribute) is used to modify the customer gateway information.
     * @param {ModifyCustomerGatewayAttributeRequest} req
     * @param {function(string, ModifyCustomerGatewayAttributeResponse):void} cb
     * @public
     */
    ModifyCustomerGatewayAttribute(req, cb) {
        let resp = new ModifyCustomerGatewayAttributeResponse();
        this.request("ModifyCustomerGatewayAttribute", req, resp, cb);
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
     * This API (DescribeAssistantCidr) is used to query a list of secondary CIDR blocks. (To use this API that is in Beta, please submit a ticket.)
     * @param {DescribeAssistantCidrRequest} req
     * @param {function(string, DescribeAssistantCidrResponse):void} cb
     * @public
     */
    DescribeAssistantCidr(req, cb) {
        let resp = new DescribeAssistantCidrResponse();
        this.request("DescribeAssistantCidr", req, resp, cb);
    }

    /**
     * This API (CreateDirectConnectGateway) is used to create a Direct Connect gateway.
     * @param {CreateDirectConnectGatewayRequest} req
     * @param {function(string, CreateDirectConnectGatewayResponse):void} cb
     * @public
     */
    CreateDirectConnectGateway(req, cb) {
        let resp = new CreateDirectConnectGatewayResponse();
        this.request("CreateDirectConnectGateway", req, resp, cb);
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
     * This API is used to disassociate a network ACL from subnets in a VPC instance.
     * @param {DisassociateNetworkAclSubnetsRequest} req
     * @param {function(string, DisassociateNetworkAclSubnetsResponse):void} cb
     * @public
     */
    DisassociateNetworkAclSubnets(req, cb) {
        let resp = new DisassociateNetworkAclSubnetsResponse();
        this.request("DisassociateNetworkAclSubnets", req, resp, cb);
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
     * This API (DisableGatewayFlowMonitor) is used to disable gateway flow monitor.
     * @param {DisableGatewayFlowMonitorRequest} req
     * @param {function(string, DisableGatewayFlowMonitorResponse):void} cb
     * @public
     */
    DisableGatewayFlowMonitor(req, cb) {
        let resp = new DisableGatewayFlowMonitorResponse();
        this.request("DisableGatewayFlowMonitor", req, resp, cb);
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
     * This API is used to query the account’s maximum number of bandwidth packages and their usage in the current region.
     * @param {DescribeBandwidthPackageQuotaRequest} req
     * @param {function(string, DescribeBandwidthPackageQuotaResponse):void} cb
     * @public
     */
    DescribeBandwidthPackageQuota(req, cb) {
        let resp = new DescribeBandwidthPackageQuotaResponse();
        this.request("DescribeBandwidthPackageQuota", req, resp, cb);
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
     * This API is used to query bandwidth package information, including the unique ID of the bandwidth package, the type, the billing mode, the name, and the resource information.
     * @param {DescribeBandwidthPackagesRequest} req
     * @param {function(string, DescribeBandwidthPackagesResponse):void} cb
     * @public
     */
    DescribeBandwidthPackages(req, cb) {
        let resp = new DescribeBandwidthPackagesResponse();
        this.request("DescribeBandwidthPackages", req, resp, cb);
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
     * This API (DescribeSecurityGroupReferences) is used to query referred security groups.
     * @param {DescribeSecurityGroupReferencesRequest} req
     * @param {function(string, DescribeSecurityGroupReferencesResponse):void} cb
     * @public
     */
    DescribeSecurityGroupReferences(req, cb) {
        let resp = new DescribeSecurityGroupReferencesResponse();
        this.request("DescribeSecurityGroupReferences", req, resp, cb);
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

For parameters of SecurityGroupPolicySet,
</ul>
<li>`Version`: the version number of a security group policy, which automatically increases by one each time you update the security policy, to prevent expiration of the updated routing policies. If it is left empty, any conflicts will be ignored.</li>
<li>When creating the `Egress` and `Ingress` polices,<ul>
<li>`Protocol`: allows TCP, UDP, ICMP, ICMPV6, GRE, or ALL.</li>
<li>*`CidrBlock`: a CIDR block in the correct format. In a classic network, if a `CidrBlock` contains private IPs on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.</li>
<li>`Ipv6CidrBlock`: an IPv6 CIDR block in the correct format. In a classic network, if an `Ipv6CidrBlock` contains private IPv6 addresses on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.</li>
<li>`SecurityGroupId`: ID of the security group. It can be in the same project as the security group to be modified, including the ID of the security group itself, to represent private IPs of all CVMs under the security group. If this field is used, the policy will change without manual modification according to the CVM associated with the group ID while being used to match network messages.</li>
<li>`Port`: a single port number such as 80, or a port range in the format of “8000-8010”. You may use this field only if the `Protocol` field takes the value `TCP` or `UDP`. Otherwise `Protocol` and `Port` are mutually exclusive.</li>
<li>`Action`: only allows `ACCEPT` or `DROP`.</li>
<li>`CidrBlock`, `Ipv6CidrBlock`, `SecurityGroupId`, and `AddressTemplate` are mutually exclusive. `Protocol` + `Port`and `ServiceTemplate` are mutually exclusive.</li>
<li>You can only create policies in one direction in each request. To specify the `PolicyIndex` parameter, use the same index number in policies.</li>
</ul></li></ul>
     * @param {CreateSecurityGroupPoliciesRequest} req
     * @param {function(string, CreateSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    CreateSecurityGroupPolicies(req, cb) {
        let resp = new CreateSecurityGroupPoliciesResponse();
        this.request("CreateSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a network ACL.
     * @param {ModifyNetworkAclAttributeRequest} req
     * @param {function(string, ModifyNetworkAclAttributeResponse):void} cb
     * @public
     */
    ModifyNetworkAclAttribute(req, cb) {
        let resp = new ModifyNetworkAclAttributeResponse();
        this.request("ModifyNetworkAclAttribute", req, resp, cb);
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

    /**
     * This API (CreateSecurityGroupWithPolicies) is used to create security groups, and add security group policies.
* Note the<a href="https://cloud.tencent.com/document/product/213/12453">maximum number of security groups</a>per project in each region under each account.
* Both the inbound and outbound policies for a newly created security group are Deny All by default. You need to call CreateSecurityGroupPolicies to set security group policies according to your needs.

Description:
* `Version`: Indicates the version number of a security group policy, which will automatically increment by 1 every time you update the security policy, to prevent the expiration of the updated policies. If this field is left empty, any conflicts will be ignored.
* `Protocol`: Values can be TCP, UDP, ICMP, ICMPV6, GRE, or ALL.
* `CidrBlock`:  A CIDR block in the correct format. In a basic network, if a CidrBlock contains private IPs on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.
* `Ipv6CidrBlock`: An IPv6 CIDR block in the correct format. In a basic network, if an Ipv6CidrBlock contains private IPv6 addresses on Tencent Cloud for devices under your account other than CVMs, it does not mean this policy allows you to access these devices. The network isolation policies between tenants take priority over the private network policies in security groups.
* `SecurityGroupId`: ID of the security group. It can be in the same project as the security group to be modified, including the ID of the security group itself, to represent private IP addresses of all CVMs under the security group. If this field is used, the policy will change without manual modification according to the CVM associated with the policy ID while being used to match network messages.
* `Port`: A single port number, or a port range in the format of “8000-8010”. The Port field is accepted only if the value of the `Protocol` field is `TCP` or `UDP`. Otherwise Protocol and Port are mutually exclusive. 
* `Action`: Values can be `ACCEPT` or `DROP`.
* CidrBlock, Ipv6CidrBlock, SecurityGroupId, and AddressTemplate are exclusive and cannot be entered at the same time. “Protocol + Port” and ServiceTemplate are mutually exclusive and cannot be entered at the same time.
* Only policies in one direction can be created in each request. If you need to specify the `PolicyIndex` parameter, the indexes of policies must be consistent.
     * @param {CreateSecurityGroupWithPoliciesRequest} req
     * @param {function(string, CreateSecurityGroupWithPoliciesResponse):void} cb
     * @public
     */
    CreateSecurityGroupWithPolicies(req, cb) {
        let resp = new CreateSecurityGroupWithPoliciesResponse();
        this.request("CreateSecurityGroupWithPolicies", req, resp, cb);
    }


}
module.exports = VpcClient;
