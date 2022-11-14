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
const DescribeNatFwInstanceRequest = models.DescribeNatFwInstanceRequest;
const ModifyNatFwVpcDnsSwitchResponse = models.ModifyNatFwVpcDnsSwitchResponse;
const DescribeNatFwInstanceWithRegionRequest = models.DescribeNatFwInstanceWithRegionRequest;
const DescribeRuleOverviewResponse = models.DescribeRuleOverviewResponse;
const CfwNatDnatRule = models.CfwNatDnatRule;
const StaticInfo = models.StaticInfo;
const ModifyPublicIPSwitchStatusResponse = models.ModifyPublicIPSwitchStatusResponse;
const ModifyAcRuleResponse = models.ModifyAcRuleResponse;
const DescribeTableStatusResponse = models.DescribeTableStatusResponse;
const AddAcRuleRequest = models.AddAcRuleRequest;
const DescribeTLogInfoRequest = models.DescribeTLogInfoRequest;
const SecurityGroupRule = models.SecurityGroupRule;
const ModifyNatFwVpcDnsSwitchRequest = models.ModifyNatFwVpcDnsSwitchRequest;
const UnHandleEvent = models.UnHandleEvent;
const DeleteAllAccessControlRuleRequest = models.DeleteAllAccessControlRuleRequest;
const ModifyAllVPCSwitchStatusResponse = models.ModifyAllVPCSwitchStatusResponse;
const CreateSecurityGroupRulesResponse = models.CreateSecurityGroupRulesResponse;
const DescribeNatFwVpcDnsLstRequest = models.DescribeNatFwVpcDnsLstRequest;
const DescribeTLogInfoResponse = models.DescribeTLogInfoResponse;
const DescribeUnHandleEventTabListRequest = models.DescribeUnHandleEventTabListRequest;
const DescribeAssociatedInstanceListResponse = models.DescribeAssociatedInstanceListResponse;
const AssociatedInstanceInfo = models.AssociatedInstanceInfo;
const RemoveAcRuleResponse = models.RemoveAcRuleResponse;
const NatFwInstance = models.NatFwInstance;
const ExpandCfwVerticalRequest = models.ExpandCfwVerticalRequest;
const ModifyAllPublicIPSwitchStatusResponse = models.ModifyAllPublicIPSwitchStatusResponse;
const DeleteVpcInstanceResponse = models.DeleteVpcInstanceResponse;
const ModifyAssetScanRequest = models.ModifyAssetScanRequest;
const ModifyBlockIgnoreListRequest = models.ModifyBlockIgnoreListRequest;
const AddEnterpriseSecurityGroupRulesRequest = models.AddEnterpriseSecurityGroupRulesRequest;
const DeleteSecurityGroupRuleResponse = models.DeleteSecurityGroupRuleResponse;
const ModifySequenceRulesRequest = models.ModifySequenceRulesRequest;
const CreateNatFwInstanceRequest = models.CreateNatFwInstanceRequest;
const ModifySecurityGroupItemRuleStatusResponse = models.ModifySecurityGroupItemRuleStatusResponse;
const DescribeEnterpriseSecurityGroupRuleResponse = models.DescribeEnterpriseSecurityGroupRuleResponse;
const VpcDnsInfo = models.VpcDnsInfo;
const DescribeEnterpriseSecurityGroupRuleRequest = models.DescribeEnterpriseSecurityGroupRuleRequest;
const ModifyNatFwReSelectResponse = models.ModifyNatFwReSelectResponse;
const DescribeSwitchListsRequest = models.DescribeSwitchListsRequest;
const SetNatFwEipRequest = models.SetNatFwEipRequest;
const SetNatFwEipResponse = models.SetNatFwEipResponse;
const AcListsData = models.AcListsData;
const ModifyPublicIPSwitchStatusRequest = models.ModifyPublicIPSwitchStatusRequest;
const SequenceData = models.SequenceData;
const DescribeSourceAssetRequest = models.DescribeSourceAssetRequest;
const SecurityGroupOrderIndexData = models.SecurityGroupOrderIndexData;
const DescribeSourceAssetResponse = models.DescribeSourceAssetResponse;
const IPDefendStatus = models.IPDefendStatus;
const DescribeSecurityGroupListResponse = models.DescribeSecurityGroupListResponse;
const AssetZone = models.AssetZone;
const DescribeTLogIpListRequest = models.DescribeTLogIpListRequest;
const DescribeNatFwInstancesInfoRequest = models.DescribeNatFwInstancesInfoRequest;
const DescribeTableStatusRequest = models.DescribeTableStatusRequest;
const DescribeSecurityGroupListRequest = models.DescribeSecurityGroupListRequest;
const ModifyResourceGroupRequest = models.ModifyResourceGroupRequest;
const CreateNatFwInstanceResponse = models.CreateNatFwInstanceResponse;
const NewModeItems = models.NewModeItems;
const DescribeNatFwInfoCountResponse = models.DescribeNatFwInfoCountResponse;
const DescribeDefenseSwitchRequest = models.DescribeDefenseSwitchRequest;
const SecurityGroupListData = models.SecurityGroupListData;
const CreateNatFwInstanceWithDomainResponse = models.CreateNatFwInstanceWithDomainResponse;
const RemoveAcRuleRequest = models.RemoveAcRuleRequest;
const ModifyAllRuleStatusRequest = models.ModifyAllRuleStatusRequest;
const RuleInfoData = models.RuleInfoData;
const DescribeAcListsResponse = models.DescribeAcListsResponse;
const ModifyAcRuleRequest = models.ModifyAcRuleRequest;
const DescribeBlockStaticListResponse = models.DescribeBlockStaticListResponse;
const ModifySecurityGroupSequenceRulesRequest = models.ModifySecurityGroupSequenceRulesRequest;
const ScanResultInfo = models.ScanResultInfo;
const ScanInfo = models.ScanInfo;
const DescribeUnHandleEventTabListResponse = models.DescribeUnHandleEventTabListResponse;
const NatFwFilter = models.NatFwFilter;
const ModifyRunSyncAssetResponse = models.ModifyRunSyncAssetResponse;
const ModifySecurityGroupSequenceRulesResponse = models.ModifySecurityGroupSequenceRulesResponse;
const IpStatic = models.IpStatic;
const AddEnterpriseSecurityGroupRulesResponse = models.AddEnterpriseSecurityGroupRulesResponse;
const UnHandleEventDetail = models.UnHandleEventDetail;
const RemoveEnterpriseSecurityGroupRuleRequest = models.RemoveEnterpriseSecurityGroupRuleRequest;
const DeleteResourceGroupRequest = models.DeleteResourceGroupRequest;
const DescribeBlockByIpTimesListRequest = models.DescribeBlockByIpTimesListRequest;
const RemoveEnterpriseSecurityGroupRuleResponse = models.RemoveEnterpriseSecurityGroupRuleResponse;
const ModifySequenceRulesResponse = models.ModifySequenceRulesResponse;
const DescribeResourceGroupNewResponse = models.DescribeResourceGroupNewResponse;
const DescribeNatFwInstanceWithRegionResponse = models.DescribeNatFwInstanceWithRegionResponse;
const DescribeResourceGroupNewRequest = models.DescribeResourceGroupNewRequest;
const ModifyBlockTopRequest = models.ModifyBlockTopRequest;
const DeleteAcRuleResponse = models.DeleteAcRuleResponse;
const IocListData = models.IocListData;
const InstanceInfo = models.InstanceInfo;
const DescribeIPStatusListRequest = models.DescribeIPStatusListRequest;
const ModifyNatFwSwitchResponse = models.ModifyNatFwSwitchResponse;
const DescribeBlockByIpTimesListResponse = models.DescribeBlockByIpTimesListResponse;
const SetNatFwDnatRuleResponse = models.SetNatFwDnatRuleResponse;
const DescribeRuleOverviewRequest = models.DescribeRuleOverviewRequest;
const DescribeDefenseSwitchResponse = models.DescribeDefenseSwitchResponse;
const DescribeAcListsRequest = models.DescribeAcListsRequest;
const DescribeAssociatedInstanceListRequest = models.DescribeAssociatedInstanceListRequest;
const DeleteAcRuleRequest = models.DeleteAcRuleRequest;
const DeleteAllAccessControlRuleResponse = models.DeleteAllAccessControlRuleResponse;
const ModifyNatFwSwitchRequest = models.ModifyNatFwSwitchRequest;
const DescribeIPStatusListResponse = models.DescribeIPStatusListResponse;
const NatInstanceInfo = models.NatInstanceInfo;
const DescribeTLogIpListResponse = models.DescribeTLogIpListResponse;
const StopSecurityGroupRuleDispatchResponse = models.StopSecurityGroupRuleDispatchResponse;
const DescribeNatFwInfoCountRequest = models.DescribeNatFwInfoCountRequest;
const AddAcRuleResponse = models.AddAcRuleResponse;
const ModifyNatFwReSelectRequest = models.ModifyNatFwReSelectRequest;
const SetNatFwDnatRuleRequest = models.SetNatFwDnatRuleRequest;
const ModifyAllVPCSwitchStatusRequest = models.ModifyAllVPCSwitchStatusRequest;
const SecurityGroupBothWayInfo = models.SecurityGroupBothWayInfo;
const ModifyAllRuleStatusResponse = models.ModifyAllRuleStatusResponse;
const StopSecurityGroupRuleDispatchRequest = models.StopSecurityGroupRuleDispatchRequest;
const DescribeGuideScanInfoRequest = models.DescribeGuideScanInfoRequest;
const ModifyBlockTopResponse = models.ModifyBlockTopResponse;
const DescribeNatFwVpcDnsLstResponse = models.DescribeNatFwVpcDnsLstResponse;
const ExpandCfwVerticalResponse = models.ExpandCfwVerticalResponse;
const DescribeBlockStaticListRequest = models.DescribeBlockStaticListRequest;
const TLogInfo = models.TLogInfo;
const CreateSecurityGroupRulesRequest = models.CreateSecurityGroupRulesRequest;
const DeleteVpcInstanceRequest = models.DeleteVpcInstanceRequest;
const SwitchListsData = models.SwitchListsData;
const CreateNatFwInstanceWithDomainRequest = models.CreateNatFwInstanceWithDomainRequest;
const DescribeSwitchListsResponse = models.DescribeSwitchListsResponse;
const ModifyResourceGroupResponse = models.ModifyResourceGroupResponse;
const DeleteResourceGroupResponse = models.DeleteResourceGroupResponse;
const DeleteSecurityGroupRuleRequest = models.DeleteSecurityGroupRuleRequest;
const ModifySecurityGroupItemRuleStatusRequest = models.ModifySecurityGroupItemRuleStatusRequest;
const ModifyRunSyncAssetRequest = models.ModifyRunSyncAssetRequest;
const CreateAcRulesResponse = models.CreateAcRulesResponse;
const ModifyAssetScanResponse = models.ModifyAssetScanResponse;
const ModifyAllPublicIPSwitchStatusRequest = models.ModifyAllPublicIPSwitchStatusRequest;
const DescribeNatFwInstancesInfoResponse = models.DescribeNatFwInstancesInfoResponse;
const ModifyBlockIgnoreListResponse = models.ModifyBlockIgnoreListResponse;
const DescribeNatFwInstanceResponse = models.DescribeNatFwInstanceResponse;
const DnsVpcSwitch = models.DnsVpcSwitch;
const CreateAcRulesRequest = models.CreateAcRulesRequest;
const ModifyTableStatusRequest = models.ModifyTableStatusRequest;
const ModifyTableStatusResponse = models.ModifyTableStatusResponse;
const DescribeGuideScanInfoResponse = models.DescribeGuideScanInfoResponse;


/**
 * cfw client
 * @class
 */
class CfwClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cfw.tencentcloudapi.com", "2019-09-04", credential, region, profile);
    }
    
    /**
     * This API is used to get the number of a user's subnets connected to NAT firewall and the number of NAT firewall instances.
     * @param {DescribeNatFwInfoCountRequest} req
     * @param {function(string, DescribeNatFwInfoCountResponse):void} cb
     * @public
     */
    DescribeNatFwInfoCount(req, cb) {
        let resp = new DescribeNatFwInfoCountResponse();
        this.request("DescribeNatFwInfoCount", req, resp, cb);
    }

    /**
     * This API is used to stop publishing security group rules.
     * @param {StopSecurityGroupRuleDispatchRequest} req
     * @param {function(string, StopSecurityGroupRuleDispatchResponse):void} cb
     * @public
     */
    StopSecurityGroupRuleDispatch(req, cb) {
        let resp = new StopSecurityGroupRuleDispatchResponse();
        this.request("StopSecurityGroupRuleDispatch", req, resp, cb);
    }

    /**
     * This API is used to modify rule list status.
     * @param {ModifyTableStatusRequest} req
     * @param {function(string, ModifyTableStatusResponse):void} cb
     * @public
     */
    ModifyTableStatus(req, cb) {
        let resp = new ModifyTableStatusResponse();
        this.request("ModifyTableStatus", req, resp, cb);
    }

    /**
     * This API is used to get the VPC DNS status of NAT firewall instances.
     * @param {DescribeNatFwVpcDnsLstRequest} req
     * @param {function(string, DescribeNatFwVpcDnsLstResponse):void} cb
     * @public
     */
    DescribeNatFwVpcDnsLst(req, cb) {
        let resp = new DescribeNatFwVpcDnsLstResponse();
        this.request("DescribeNatFwVpcDnsLst", req, resp, cb);
    }

    /**
     * This API is used to enable or disable one or multiple edge firewalls.
     * @param {ModifyAllPublicIPSwitchStatusRequest} req
     * @param {function(string, ModifyAllPublicIPSwitchStatusResponse):void} cb
     * @public
     */
    ModifyAllPublicIPSwitchStatus(req, cb) {
        let resp = new ModifyAllPublicIPSwitchStatusResponse();
        this.request("ModifyAllPublicIPSwitchStatus", req, resp, cb);
    }

    /**
     * This API is used to get the list of instances associated with a security group.
     * @param {DescribeAssociatedInstanceListRequest} req
     * @param {function(string, DescribeAssociatedInstanceListResponse):void} cb
     * @public
     */
    DescribeAssociatedInstanceList(req, cb) {
        let resp = new DescribeAssociatedInstanceListResponse();
        this.request("DescribeAssociatedInstanceList", req, resp, cb);
    }

    /**
     * This API is used to delete a rule.
     * @param {DeleteAcRuleRequest} req
     * @param {function(string, DeleteAcRuleResponse):void} cb
     * @public
     */
    DeleteAcRule(req, cb) {
        let resp = new DeleteAcRuleResponse();
        this.request("DeleteAcRule", req, resp, cb);
    }

    /**
     * This API is used to modify the asset group information in Asset Management.


     * @param {ModifyResourceGroupRequest} req
     * @param {function(string, ModifyResourceGroupResponse):void} cb
     * @public
     */
    ModifyResourceGroup(req, cb) {
        let resp = new ModifyResourceGroupResponse();
        this.request("ModifyResourceGroup", req, resp, cb);
    }

    /**
     * This API is used to get the asset tree information in Asset Management.
     * @param {DescribeResourceGroupNewRequest} req
     * @param {function(string, DescribeResourceGroupNewResponse):void} cb
     * @public
     */
    DescribeResourceGroupNew(req, cb) {
        let resp = new DescribeResourceGroupNewResponse();
        this.request("DescribeResourceGroupNew", req, resp, cb);
    }

    /**
     * This API is used to delete all rules.
     * @param {DeleteAllAccessControlRuleRequest} req
     * @param {function(string, DeleteAllAccessControlRuleResponse):void} cb
     * @public
     */
    DeleteAllAccessControlRule(req, cb) {
        let resp = new DeleteAllAccessControlRuleResponse();
        this.request("DeleteAllAccessControlRule", req, resp, cb);
    }

    /**
     * This API is used to get the security group rule list.
     * @param {DescribeSecurityGroupListRequest} req
     * @param {function(string, DescribeSecurityGroupListResponse):void} cb
     * @public
     */
    DescribeSecurityGroupList(req, cb) {
        let resp = new DescribeSecurityGroupListResponse();
        this.request("DescribeSecurityGroupList", req, resp, cb);
    }

    /**
     * This API is used to get all NAT instances of a tenant.
     * @param {DescribeNatFwInstanceRequest} req
     * @param {function(string, DescribeNatFwInstanceResponse):void} cb
     * @public
     */
    DescribeNatFwInstance(req, cb) {
        let resp = new DescribeNatFwInstanceResponse();
        this.request("DescribeNatFwInstance", req, resp, cb);
    }

    /**
     * This API is used to modify asset scan settings.
     * @param {ModifyAssetScanRequest} req
     * @param {function(string, ModifyAssetScanResponse):void} cb
     * @public
     */
    ModifyAssetScan(req, cb) {
        let resp = new ModifyAssetScanResponse();
        this.request("ModifyAssetScan", req, resp, cb);
    }

    /**
     * This API is used to create a firewall instance with domain name (The Region parameter is required).
     * @param {CreateNatFwInstanceWithDomainRequest} req
     * @param {function(string, CreateNatFwInstanceWithDomainResponse):void} cb
     * @public
     */
    CreateNatFwInstanceWithDomain(req, cb) {
        let resp = new CreateNatFwInstanceWithDomainResponse();
        this.request("CreateNatFwInstanceWithDomain", req, resp, cb);
    }

    /**
     * This API is used to modify rule priority.
     * @param {ModifySequenceRulesRequest} req
     * @param {function(string, ModifySequenceRulesResponse):void} cb
     * @public
     */
    ModifySequenceRules(req, cb) {
        let resp = new ModifySequenceRulesResponse();
        this.request("ModifySequenceRules", req, resp, cb);
    }

    /**
     * This API is used to add edge firewall rules.
     * @param {AddAcRuleRequest} req
     * @param {function(string, AddAcRuleResponse):void} cb
     * @public
     */
    AddAcRule(req, cb) {
        let resp = new AddAcRuleResponse();
        this.request("AddAcRule", req, resp, cb);
    }

    /**
     * This API is used to create enterprise security group rules (new).
     * @param {AddEnterpriseSecurityGroupRulesRequest} req
     * @param {function(string, AddEnterpriseSecurityGroupRulesResponse):void} cb
     * @public
     */
    AddEnterpriseSecurityGroupRules(req, cb) {
        let resp = new AddEnterpriseSecurityGroupRulesResponse();
        this.request("AddEnterpriseSecurityGroupRules", req, resp, cb);
    }

    /**
     * This API is used to create rules.
     * @param {CreateAcRulesRequest} req
     * @param {function(string, CreateAcRulesResponse):void} cb
     * @public
     */
    CreateAcRules(req, cb) {
        let resp = new CreateAcRulesResponse();
        this.request("CreateAcRules", req, resp, cb);
    }

    /**
     * This API is used to get the firewall status list.
     * @param {DescribeSwitchListsRequest} req
     * @param {function(string, DescribeSwitchListsResponse):void} cb
     * @public
     */
    DescribeSwitchLists(req, cb) {
        let resp = new DescribeSwitchListsResponse();
        this.request("DescribeSwitchLists", req, resp, cb);
    }

    /**
     * This API is used to create enterprise security group rules.
     * @param {CreateSecurityGroupRulesRequest} req
     * @param {function(string, CreateSecurityGroupRulesResponse):void} cb
     * @public
     */
    CreateSecurityGroupRules(req, cb) {
        let resp = new CreateSecurityGroupRulesResponse();
        this.request("CreateSecurityGroupRules", req, resp, cb);
    }

    /**
     * This API is used to delete enterprise security group rules (new).
     * @param {RemoveEnterpriseSecurityGroupRuleRequest} req
     * @param {function(string, RemoveEnterpriseSecurityGroupRuleResponse):void} cb
     * @public
     */
    RemoveEnterpriseSecurityGroupRule(req, cb) {
        let resp = new RemoveEnterpriseSecurityGroupRuleResponse();
        this.request("RemoveEnterpriseSecurityGroupRule", req, resp, cb);
    }

    /**
     * This API is used to get the rule list overview.
     * @param {DescribeRuleOverviewRequest} req
     * @param {function(string, DescribeRuleOverviewResponse):void} cb
     * @public
     */
    DescribeRuleOverview(req, cb) {
        let resp = new DescribeRuleOverviewResponse();
        this.request("DescribeRuleOverview", req, resp, cb);
    }

    /**
     * This API is used to get the IP protection status.
     * @param {DescribeIPStatusListRequest} req
     * @param {function(string, DescribeIPStatusListResponse):void} cb
     * @public
     */
    DescribeIPStatusList(req, cb) {
        let resp = new DescribeIPStatusListResponse();
        this.request("DescribeIPStatusList", req, resp, cb);
    }

    /**
     * This API is used to query the list of firewall toggles with Intrusion Defense enabled.
     * @param {DescribeDefenseSwitchRequest} req
     * @param {function(string, DescribeDefenseSwitchResponse):void} cb
     * @public
     */
    DescribeDefenseSwitch(req, cb) {
        let resp = new DescribeDefenseSwitchResponse();
        this.request("DescribeDefenseSwitch", req, resp, cb);
    }

    /**
     * This API is used to get the current alert monitoring data.

     * @param {DescribeTLogInfoRequest} req
     * @param {function(string, DescribeTLogInfoResponse):void} cb
     * @public
     */
    DescribeTLogInfo(req, cb) {
        let resp = new DescribeTLogInfoResponse();
        this.request("DescribeTLogInfo", req, resp, cb);
    }

    /**
     * This API is used to sync assets - Internet & VPC (new).
     * @param {ModifyRunSyncAssetRequest} req
     * @param {function(string, ModifyRunSyncAssetResponse):void} cb
     * @public
     */
    ModifyRunSyncAsset(req, cb) {
        let resp = new ModifyRunSyncAssetResponse();
        this.request("ModifyRunSyncAsset", req, resp, cb);
    }

    /**
     * This API is used to modify the VPC DNS status of NAT firewall instances.
     * @param {ModifyNatFwVpcDnsSwitchRequest} req
     * @param {function(string, ModifyNatFwVpcDnsSwitchResponse):void} cb
     * @public
     */
    ModifyNatFwVpcDnsSwitch(req, cb) {
        let resp = new ModifyNatFwVpcDnsSwitchResponse();
        this.request("ModifyNatFwVpcDnsSwitch", req, resp, cb);
    }

    /**
     * This API is used to enable or disable one or multiple VPC firewalls.
     * @param {ModifyAllVPCSwitchStatusRequest} req
     * @param {function(string, ModifyAllVPCSwitchStatusResponse):void} cb
     * @public
     */
    ModifyAllVPCSwitchStatus(req, cb) {
        let resp = new ModifyAllVPCSwitchStatusResponse();
        this.request("ModifyAllVPCSwitchStatus", req, resp, cb);
    }

    /**
     * This API is used to get enterprise security group rules (new).
     * @param {DescribeEnterpriseSecurityGroupRuleRequest} req
     * @param {function(string, DescribeEnterpriseSecurityGroupRuleResponse):void} cb
     * @public
     */
    DescribeEnterpriseSecurityGroupRule(req, cb) {
        let resp = new DescribeEnterpriseSecurityGroupRuleResponse();
        this.request("DescribeEnterpriseSecurityGroupRule", req, resp, cb);
    }

    /**
     * This API is used to:
add IPs/domains in the blocklist or ignored list
delete IPs/domains in the blocklist or ignored list
modify IPs/domains in the blocklist or ignored list
     * @param {ModifyBlockIgnoreListRequest} req
     * @param {function(string, ModifyBlockIgnoreListResponse):void} cb
     * @public
     */
    ModifyBlockIgnoreList(req, cb) {
        let resp = new ModifyBlockIgnoreListResponse();
        this.request("ModifyBlockIgnoreList", req, resp, cb);
    }

    /**
     * This API is used to delete firewall instance.
     * @param {DeleteVpcInstanceRequest} req
     * @param {function(string, DeleteVpcInstanceResponse):void} cb
     * @public
     */
    DeleteVpcInstance(req, cb) {
        let resp = new DeleteVpcInstanceResponse();
        this.request("DeleteVpcInstance", req, resp, cb);
    }

    /**
     * This API is used to get the NAT instance with the region that is newly maintained by the tenant.
     * @param {DescribeNatFwInstanceWithRegionRequest} req
     * @param {function(string, DescribeNatFwInstanceWithRegionResponse):void} cb
     * @public
     */
    DescribeNatFwInstanceWithRegion(req, cb) {
        let resp = new DescribeNatFwInstanceWithRegionResponse();
        this.request("DescribeNatFwInstanceWithRegion", req, resp, cb);
    }

    /**
     * This API is used to get unhandled security events.

     * @param {DescribeUnHandleEventTabListRequest} req
     * @param {function(string, DescribeUnHandleEventTabListResponse):void} cb
     * @public
     */
    DescribeUnHandleEventTabList(req, cb) {
        let resp = new DescribeUnHandleEventTabListResponse();
        this.request("DescribeUnHandleEventTabList", req, resp, cb);
    }

    /**
     * This API is used to get the scan interface information in Get Started.
     * @param {DescribeGuideScanInfoRequest} req
     * @param {function(string, DescribeGuideScanInfoResponse):void} cb
     * @public
     */
    DescribeGuideScanInfo(req, cb) {
        let resp = new DescribeGuideScanInfoResponse();
        this.request("DescribeGuideScanInfo", req, resp, cb);
    }

    /**
     * This API is used to get all asset information of an asset group.

     * @param {DescribeSourceAssetRequest} req
     * @param {function(string, DescribeSourceAssetResponse):void} cb
     * @public
     */
    DescribeSourceAsset(req, cb) {
        let resp = new DescribeSourceAssetResponse();
        this.request("DescribeSourceAsset", req, resp, cb);
    }

    /**
     * This API is used to delete asset groups in Asset Management.
     * @param {DeleteResourceGroupRequest} req
     * @param {function(string, DeleteResourceGroupResponse):void} cb
     * @public
     */
    DeleteResourceGroup(req, cb) {
        let resp = new DeleteResourceGroupResponse();
        this.request("DeleteResourceGroup", req, resp, cb);
    }

    /**
     * This API is used to create a NAT firewall instance (The Region parameter is required).
     * @param {CreateNatFwInstanceRequest} req
     * @param {function(string, CreateNatFwInstanceResponse):void} cb
     * @public
     */
    CreateNatFwInstance(req, cb) {
        let resp = new CreateNatFwInstanceResponse();
        this.request("CreateNatFwInstance", req, resp, cb);
    }

    /**
     * This API is used to configure firewall DNAT rules.
     * @param {SetNatFwDnatRuleRequest} req
     * @param {function(string, SetNatFwDnatRuleResponse):void} cb
     * @public
     */
    SetNatFwDnatRule(req, cb) {
        let resp = new SetNatFwDnatRuleResponse();
        this.request("SetNatFwDnatRule", req, resp, cb);
    }

    /**
     * This API is used to enable or disable all rules.
     * @param {ModifyAllRuleStatusRequest} req
     * @param {function(string, ModifyAllRuleStatusResponse):void} cb
     * @public
     */
    ModifyAllRuleStatus(req, cb) {
        let resp = new ModifyAllRuleStatusResponse();
        this.request("ModifyAllRuleStatus", req, resp, cb);
    }

    /**
     * This API is used to delete edge firewall rules.
     * @param {RemoveAcRuleRequest} req
     * @param {function(string, RemoveAcRuleResponse):void} cb
     * @public
     */
    RemoveAcRule(req, cb) {
        let resp = new RemoveAcRuleResponse();
        this.request("RemoveAcRule", req, resp, cb);
    }

    /**
     * This API is used to set the firewall instance EIP. (Available for firewall instances in the "Create new" mode. only)
     * @param {SetNatFwEipRequest} req
     * @param {function(string, SetNatFwEipResponse):void} cb
     * @public
     */
    SetNatFwEip(req, cb) {
        let resp = new SetNatFwEipResponse();
        this.request("SetNatFwEip", req, resp, cb);
    }

    /**
     * This API is used to pin or unpin a blocking log.
     * @param {ModifyBlockTopRequest} req
     * @param {function(string, ModifyBlockTopResponse):void} cb
     * @public
     */
    ModifyBlockTop(req, cb) {
        let resp = new ModifyBlockTopResponse();
        this.request("ModifyBlockTop", req, resp, cb);
    }

    /**
     * This API is used to get the rule list status.
     * @param {DescribeTableStatusRequest} req
     * @param {function(string, DescribeTableStatusResponse):void} cb
     * @public
     */
    DescribeTableStatus(req, cb) {
        let resp = new DescribeTableStatusResponse();
        this.request("DescribeTableStatus", req, resp, cb);
    }

    /**
     * This API is used to get all NAT instances and instance card information of a tenant.
     * @param {DescribeNatFwInstancesInfoRequest} req
     * @param {function(string, DescribeNatFwInstancesInfoResponse):void} cb
     * @public
     */
    DescribeNatFwInstancesInfo(req, cb) {
        let resp = new DescribeNatFwInstancesInfoResponse();
        this.request("DescribeNatFwInstancesInfo", req, resp, cb);
    }

    /**
     * This API is used to get the VPC or NAT list for changing associated firewall instances.
     * @param {ModifyNatFwReSelectRequest} req
     * @param {function(string, ModifyNatFwReSelectResponse):void} cb
     * @public
     */
    ModifyNatFwReSelect(req, cb) {
        let resp = new ModifyNatFwReSelectResponse();
        this.request("ModifyNatFwReSelect", req, resp, cb);
    }

    /**
     * This API is used to modify rules.
     * @param {ModifyAcRuleRequest} req
     * @param {function(string, ModifyAcRuleResponse):void} cb
     * @public
     */
    ModifyAcRule(req, cb) {
        let resp = new ModifyAcRuleResponse();
        this.request("ModifyAcRule", req, resp, cb);
    }

    /**
     * This API is used to delete security group rules.
     * @param {DeleteSecurityGroupRuleRequest} req
     * @param {function(string, DeleteSecurityGroupRuleResponse):void} cb
     * @public
     */
    DeleteSecurityGroupRule(req, cb) {
        let resp = new DeleteSecurityGroupRuleResponse();
        this.request("DeleteSecurityGroupRule", req, resp, cb);
    }

    /**
     * This API is used to sort enterprise security group rules.
     * @param {ModifySecurityGroupSequenceRulesRequest} req
     * @param {function(string, ModifySecurityGroupSequenceRulesResponse):void} cb
     * @public
     */
    ModifySecurityGroupSequenceRules(req, cb) {
        let resp = new ModifySecurityGroupSequenceRulesResponse();
        this.request("ModifySecurityGroupSequenceRules", req, resp, cb);
    }

    /**
     * This API is used to enable or disable a NAT firewall.
     * @param {ModifyNatFwSwitchRequest} req
     * @param {function(string, ModifyNatFwSwitchResponse):void} cb
     * @public
     */
    ModifyNatFwSwitch(req, cb) {
        let resp = new ModifyNatFwSwitchResponse();
        this.request("ModifyNatFwSwitch", req, resp, cb);
    }

    /**
     * This API is used to get the most frequent attacker IP.

     * @param {DescribeTLogIpListRequest} req
     * @param {function(string, DescribeTLogIpListResponse):void} cb
     * @public
     */
    DescribeTLogIpList(req, cb) {
        let resp = new DescribeTLogIpListResponse();
        this.request("DescribeTLogIpList", req, resp, cb);
    }

    /**
     * This API is used to enable or disable an enterprise security group rule.
     * @param {ModifySecurityGroupItemRuleStatusRequest} req
     * @param {function(string, ModifySecurityGroupItemRuleStatusResponse):void} cb
     * @public
     */
    ModifySecurityGroupItemRuleStatus(req, cb) {
        let resp = new ModifySecurityGroupItemRuleStatusResponse();
        this.request("ModifySecurityGroupItemRuleStatus", req, resp, cb);
    }

    /**
     * This API is used to get the access control list.
     * @param {DescribeAcListsRequest} req
     * @param {function(string, DescribeAcListsResponse):void} cb
     * @public
     */
    DescribeAcLists(req, cb) {
        let resp = new DescribeAcListsResponse();
        this.request("DescribeAcLists", req, resp, cb);
    }

    /**
     * This API is used to enable or disable an edge firewall.
     * @param {ModifyPublicIPSwitchStatusRequest} req
     * @param {function(string, ModifyPublicIPSwitchStatusResponse):void} cb
     * @public
     */
    ModifyPublicIPSwitchStatus(req, cb) {
        let resp = new ModifyPublicIPSwitchStatusResponse();
        this.request("ModifyPublicIPSwitchStatus", req, resp, cb);
    }

    /**
     * This API is used to increase the firewall bandwidth.
     * @param {ExpandCfwVerticalRequest} req
     * @param {function(string, ExpandCfwVerticalResponse):void} cb
     * @public
     */
    ExpandCfwVertical(req, cb) {
        let resp = new ExpandCfwVerticalResponse();
        this.request("ExpandCfwVertical", req, resp, cb);
    }

    /**
     * This API is used to get blocked IP data.

     * @param {DescribeBlockByIpTimesListRequest} req
     * @param {function(string, DescribeBlockByIpTimesListResponse):void} cb
     * @public
     */
    DescribeBlockByIpTimesList(req, cb) {
        let resp = new DescribeBlockByIpTimesListResponse();
        this.request("DescribeBlockByIpTimesList", req, resp, cb);
    }

    /**
     * This API is used to get the most frequent attacker.

     * @param {DescribeBlockStaticListRequest} req
     * @param {function(string, DescribeBlockStaticListResponse):void} cb
     * @public
     */
    DescribeBlockStaticList(req, cb) {
        let resp = new DescribeBlockStaticListResponse();
        this.request("DescribeBlockStaticList", req, resp, cb);
    }


}
module.exports = CfwClient;
