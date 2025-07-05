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
const CreateDefaultAlarmThresholdRequest = models.CreateDefaultAlarmThresholdRequest;
const DescribeListBGPIPInstancesResponse = models.DescribeListBGPIPInstancesResponse;
const ModifyNewDomainRulesRequest = models.ModifyNewDomainRulesRequest;
const DeleteCCLevelPolicyRequest = models.DeleteCCLevelPolicyRequest;
const ProxyTypeInfo = models.ProxyTypeInfo;
const CreateBoundIPRequest = models.CreateBoundIPRequest;
const CCReqLimitPolicyRecord = models.CCReqLimitPolicyRecord;
const DescribeListSchedulingDomainRequest = models.DescribeListSchedulingDomainRequest;
const CreateWaterPrintConfigRequest = models.CreateWaterPrintConfigRequest;
const DDoSGeoIPBlockConfig = models.DDoSGeoIPBlockConfig;
const CreateBlackWhiteIpListResponse = models.CreateBlackWhiteIpListResponse;
const IPAlarmThresholdRelation = models.IPAlarmThresholdRelation;
const ModifyDDoSGeoIPBlockConfigRequest = models.ModifyDDoSGeoIPBlockConfigRequest;
const DescribeL7RulesBySSLCertIdResponse = models.DescribeL7RulesBySSLCertIdResponse;
const DescribeListDDoSSpeedLimitConfigRequest = models.DescribeListDDoSSpeedLimitConfigRequest;
const InstanceRelation = models.InstanceRelation;
const RegionInfo = models.RegionInfo;
const DescribeListProtocolBlockConfigResponse = models.DescribeListProtocolBlockConfigResponse;
const DescribeListBGPInstancesRequest = models.DescribeListBGPInstancesRequest;
const KeyValue = models.KeyValue;
const ModifyCcBlackWhiteIpListRequest = models.ModifyCcBlackWhiteIpListRequest;
const DeleteDDoSSpeedLimitConfigRequest = models.DeleteDDoSSpeedLimitConfigRequest;
const CreatePacketFilterConfigResponse = models.CreatePacketFilterConfigResponse;
const CreateCCReqLimitPolicyResponse = models.CreateCCReqLimitPolicyResponse;
const DescribeListWaterPrintConfigRequest = models.DescribeListWaterPrintConfigRequest;
const CreateL7RuleCertsRequest = models.CreateL7RuleCertsRequest;
const CreateCCPrecisionPolicyResponse = models.CreateCCPrecisionPolicyResponse;
const DeleteDDoSGeoIPBlockConfigRequest = models.DeleteDDoSGeoIPBlockConfigRequest;
const DescribeCcBlackWhiteIpListResponse = models.DescribeCcBlackWhiteIpListResponse;
const CreateIPAlarmThresholdConfigRequest = models.CreateIPAlarmThresholdConfigRequest;
const CreateCcBlackWhiteIpListResponse = models.CreateCcBlackWhiteIpListResponse;
const DescribeDefaultAlarmThresholdResponse = models.DescribeDefaultAlarmThresholdResponse;
const CreateNewL7RulesResponse = models.CreateNewL7RulesResponse;
const CreateDDoSAIRequest = models.CreateDDoSAIRequest;
const ModifyNewDomainRulesResponse = models.ModifyNewDomainRulesResponse;
const CcBlackWhiteIpPolicy = models.CcBlackWhiteIpPolicy;
const L7RuleHealth = models.L7RuleHealth;
const DescribeCCLevelPolicyRequest = models.DescribeCCLevelPolicyRequest;
const CreateWaterPrintConfigResponse = models.CreateWaterPrintConfigResponse;
const IpBlockData = models.IpBlockData;
const DescribeListBGPIPInstancesRequest = models.DescribeListBGPIPInstancesRequest;
const DescribeNewL7RulesResponse = models.DescribeNewL7RulesResponse;
const OverviewDDoSEvent = models.OverviewDDoSEvent;
const StaticPackRelation = models.StaticPackRelation;
const DescribeCCThresholdListResponse = models.DescribeCCThresholdListResponse;
const DescribeL7RulesBySSLCertIdRequest = models.DescribeL7RulesBySSLCertIdRequest;
const DescribeListPacketFilterConfigResponse = models.DescribeListPacketFilterConfigResponse;
const CreateSchedulingDomainRequest = models.CreateSchedulingDomainRequest;
const BoundIpInfo = models.BoundIpInfo;
const DisassociateDDoSEipAddressResponse = models.DisassociateDDoSEipAddressResponse;
const DescribeBgpBizTrendRequest = models.DescribeBgpBizTrendRequest;
const DeleteCCThresholdPolicyResponse = models.DeleteCCThresholdPolicyResponse;
const DescribeBizHttpStatusRequest = models.DescribeBizHttpStatusRequest;
const SourceServer = models.SourceServer;
const ModifyDomainUsrNameResponse = models.ModifyDomainUsrNameResponse;
const ModifyCcBlackWhiteIpListResponse = models.ModifyCcBlackWhiteIpListResponse;
const DisassociateDDoSEipAddressRequest = models.DisassociateDDoSEipAddressRequest;
const SwitchWaterPrintConfigResponse = models.SwitchWaterPrintConfigResponse;
const BlackWhiteIpRelation = models.BlackWhiteIpRelation;
const DeleteWaterPrintKeyResponse = models.DeleteWaterPrintKeyResponse;
const EipAddressPackRelation = models.EipAddressPackRelation;
const DescribeNewL7RulesRequest = models.DescribeNewL7RulesRequest;
const ProtocolBlockRelation = models.ProtocolBlockRelation;
const DescribeListPacketFilterConfigRequest = models.DescribeListPacketFilterConfigRequest;
const BGPIPInstanceUsages = models.BGPIPInstanceUsages;
const ModifyPacketFilterConfigResponse = models.ModifyPacketFilterConfigResponse;
const DescribeListDDoSGeoIPBlockConfigRequest = models.DescribeListDDoSGeoIPBlockConfigRequest;
const DescribeOverviewDDoSEventListResponse = models.DescribeOverviewDDoSEventListResponse;
const CreateCcGeoIPBlockConfigResponse = models.CreateCcGeoIPBlockConfigResponse;
const HttpStatusMap = models.HttpStatusMap;
const Layer7Rule = models.Layer7Rule;
const L4RuleSource = models.L4RuleSource;
const DeleteCcGeoIPBlockConfigRequest = models.DeleteCcGeoIPBlockConfigRequest;
const DescribeCCLevelListResponse = models.DescribeCCLevelListResponse;
const CreateDDoSSpeedLimitConfigRequest = models.CreateDDoSSpeedLimitConfigRequest;
const CreateDDoSGeoIPBlockConfigRequest = models.CreateDDoSGeoIPBlockConfigRequest;
const CreateProtocolBlockConfigRequest = models.CreateProtocolBlockConfigRequest;
const DeleteWaterPrintKeyRequest = models.DeleteWaterPrintKeyRequest;
const AssociateDDoSEipAddressResponse = models.AssociateDDoSEipAddressResponse;
const DDoSSpeedLimitConfigRelation = models.DDoSSpeedLimitConfigRelation;
const DeleteCCLevelPolicyResponse = models.DeleteCCLevelPolicyResponse;
const ModifyPacketFilterConfigRequest = models.ModifyPacketFilterConfigRequest;
const CreateCcGeoIPBlockConfigRequest = models.CreateCcGeoIPBlockConfigRequest;
const DescribeBizHttpStatusResponse = models.DescribeBizHttpStatusResponse;
const CreateDDoSSpeedLimitConfigResponse = models.CreateDDoSSpeedLimitConfigResponse;
const DescribeNewL7RulesErrHealthResponse = models.DescribeNewL7RulesErrHealthResponse;
const DeletePacketFilterConfigRequest = models.DeletePacketFilterConfigRequest;
const DescribeListDDoSGeoIPBlockConfigResponse = models.DescribeListDDoSGeoIPBlockConfigResponse;
const DescribeBasicDeviceStatusResponse = models.DescribeBasicDeviceStatusResponse;
const DescribeBgpBizTrendResponse = models.DescribeBgpBizTrendResponse;
const DescribePendingRiskInfoResponse = models.DescribePendingRiskInfoResponse;
const ProtocolBlockConfig = models.ProtocolBlockConfig;
const DeleteCCPrecisionPolicyRequest = models.DeleteCCPrecisionPolicyRequest;
const BGPIPInstance = models.BGPIPInstance;
const DeleteWaterPrintConfigResponse = models.DeleteWaterPrintConfigResponse;
const Layer4Rule = models.Layer4Rule;
const DeletePacketFilterConfigResponse = models.DeletePacketFilterConfigResponse;
const CreateProtocolBlockConfigResponse = models.CreateProtocolBlockConfigResponse;
const BGPIPInstanceSpecification = models.BGPIPInstanceSpecification;
const CreateIPAlarmThresholdConfigResponse = models.CreateIPAlarmThresholdConfigResponse;
const DeleteCcGeoIPBlockConfigResponse = models.DeleteCcGeoIPBlockConfigResponse;
const DeleteWaterPrintConfigRequest = models.DeleteWaterPrintConfigRequest;
const DescribeCCThresholdListRequest = models.DescribeCCThresholdListRequest;
const DescribeListBlackWhiteIpListResponse = models.DescribeListBlackWhiteIpListResponse;
const DDoSAIRelation = models.DDoSAIRelation;
const DescribeListDDoSSpeedLimitConfigResponse = models.DescribeListDDoSSpeedLimitConfigResponse;
const CreateDDoSGeoIPBlockConfigResponse = models.CreateDDoSGeoIPBlockConfigResponse;
const CCPrecisionPolicy = models.CCPrecisionPolicy;
const DescribeOverviewDDoSEventListRequest = models.DescribeOverviewDDoSEventListRequest;
const EipAddressRelation = models.EipAddressRelation;
const DescribeBasicDeviceStatusRequest = models.DescribeBasicDeviceStatusRequest;
const PackInfo = models.PackInfo;
const IPLineInfo = models.IPLineInfo;
const DescribeCcBlackWhiteIpListRequest = models.DescribeCcBlackWhiteIpListRequest;
const DescribeListListenerResponse = models.DescribeListListenerResponse;
const DescribeIpBlockListRequest = models.DescribeIpBlockListRequest;
const DescribePendingRiskInfoRequest = models.DescribePendingRiskInfoRequest;
const IpSegment = models.IpSegment;
const CreateL7RuleCertsResponse = models.CreateL7RuleCertsResponse;
const CreateCCPrecisionPolicyRequest = models.CreateCCPrecisionPolicyRequest;
const DDoSSpeedLimitConfig = models.DDoSSpeedLimitConfig;
const AnycastOutPackRelation = models.AnycastOutPackRelation;
const CertIdInsL7Rules = models.CertIdInsL7Rules;
const CreateDefaultAlarmThresholdResponse = models.CreateDefaultAlarmThresholdResponse;
const DescribeListSchedulingDomainResponse = models.DescribeListSchedulingDomainResponse;
const DescribeListIPAlarmConfigResponse = models.DescribeListIPAlarmConfigResponse;
const CcGeoIpPolicyNew = models.CcGeoIpPolicyNew;
const SuccessCode = models.SuccessCode;
const DescribeCCPrecisionPlyListRequest = models.DescribeCCPrecisionPlyListRequest;
const ProtocolPort = models.ProtocolPort;
const DescribeCCLevelListRequest = models.DescribeCCLevelListRequest;
const DeleteCCPrecisionPolicyResponse = models.DeleteCCPrecisionPolicyResponse;
const DescribeListDDoSAIRequest = models.DescribeListDDoSAIRequest;
const DescribeListIPAlarmConfigRequest = models.DescribeListIPAlarmConfigRequest;
const PortSegment = models.PortSegment;
const CreateNewL7RulesRequest = models.CreateNewL7RulesRequest;
const PacketFilterConfig = models.PacketFilterConfig;
const DefaultAlarmThreshold = models.DefaultAlarmThreshold;
const ForwardListener = models.ForwardListener;
const BGPInstanceSpecification = models.BGPInstanceSpecification;
const ModifyDomainUsrNameRequest = models.ModifyDomainUsrNameRequest;
const CCLevelPolicy = models.CCLevelPolicy;
const CreateWaterPrintKeyRequest = models.CreateWaterPrintKeyRequest;
const WaterPrintRelation = models.WaterPrintRelation;
const InsL7Rules = models.InsL7Rules;
const DescribeListDDoSAIResponse = models.DescribeListDDoSAIResponse;
const DescribeNewL7RulesErrHealthRequest = models.DescribeNewL7RulesErrHealthRequest;
const ModifyCCPrecisionPolicyResponse = models.ModifyCCPrecisionPolicyResponse;
const CcGeoIPBlockConfig = models.CcGeoIPBlockConfig;
const ModifyDDoSSpeedLimitConfigRequest = models.ModifyDDoSSpeedLimitConfigRequest;
const AssociateDDoSEipAddressRequest = models.AssociateDDoSEipAddressRequest;
const AssociateDDoSEipLoadBalancerResponse = models.AssociateDDoSEipLoadBalancerResponse;
const CreateBlackWhiteIpListRequest = models.CreateBlackWhiteIpListRequest;
const DescribeBizTrendResponse = models.DescribeBizTrendResponse;
const NewL7RuleEntry = models.NewL7RuleEntry;
const DeleteCcBlackWhiteIpListResponse = models.DeleteCcBlackWhiteIpListResponse;
const CreateBoundIPResponse = models.CreateBoundIPResponse;
const SpeedValue = models.SpeedValue;
const SwitchWaterPrintConfigRequest = models.SwitchWaterPrintConfigRequest;
const AssociateDDoSEipLoadBalancerRequest = models.AssociateDDoSEipLoadBalancerRequest;
const ModifyCCPrecisionPolicyRequest = models.ModifyCCPrecisionPolicyRequest;
const CCThresholdPolicy = models.CCThresholdPolicy;
const WaterPrintConfig = models.WaterPrintConfig;
const DescribeCCTrendResponse = models.DescribeCCTrendResponse;
const CreateSchedulingDomainResponse = models.CreateSchedulingDomainResponse;
const EipProductInfo = models.EipProductInfo;
const DeleteCcBlackWhiteIpListRequest = models.DeleteCcBlackWhiteIpListRequest;
const DescribeCcGeoIPBlockConfigListResponse = models.DescribeCcGeoIPBlockConfigListResponse;
const CreateDDoSAIResponse = models.CreateDDoSAIResponse;
const DDoSGeoIPBlockConfigRelation = models.DDoSGeoIPBlockConfigRelation;
const DescribeListProtocolBlockConfigRequest = models.DescribeListProtocolBlockConfigRequest;
const DescribeListBGPInstancesResponse = models.DescribeListBGPInstancesResponse;
const TagInfo = models.TagInfo;
const DescribeDDoSTrendRequest = models.DescribeDDoSTrendRequest;
const ModifyDDoSGeoIPBlockConfigResponse = models.ModifyDDoSGeoIPBlockConfigResponse;
const CreateCcBlackWhiteIpListRequest = models.CreateCcBlackWhiteIpListRequest;
const BGPInstance = models.BGPInstance;
const CCPrecisionPlyRecord = models.CCPrecisionPlyRecord;
const DescribeCCPrecisionPlyListResponse = models.DescribeCCPrecisionPlyListResponse;
const DescribeBizTrendRequest = models.DescribeBizTrendRequest;
const DescribeIpBlockListResponse = models.DescribeIpBlockListResponse;
const DescribeCCLevelPolicyResponse = models.DescribeCCLevelPolicyResponse;
const DescribeListWaterPrintConfigResponse = models.DescribeListWaterPrintConfigResponse;
const TagFilter = models.TagFilter;
const BGPInstanceUsages = models.BGPInstanceUsages;
const DeleteDDoSSpeedLimitConfigResponse = models.DeleteDDoSSpeedLimitConfigResponse;
const DeleteCCThresholdPolicyRequest = models.DeleteCCThresholdPolicyRequest;
const DescribeListListenerRequest = models.DescribeListListenerRequest;
const L7RuleEntry = models.L7RuleEntry;
const CreateWaterPrintKeyResponse = models.CreateWaterPrintKeyResponse;
const DeleteDDoSGeoIPBlockConfigResponse = models.DeleteDDoSGeoIPBlockConfigResponse;
const DescribeDDoSTrendResponse = models.DescribeDDoSTrendResponse;
const DescribeListBlackWhiteIpListRequest = models.DescribeListBlackWhiteIpListRequest;
const CreateCCReqLimitPolicyRequest = models.CreateCCReqLimitPolicyRequest;
const ModifyDDoSSpeedLimitConfigResponse = models.ModifyDDoSSpeedLimitConfigResponse;
const SchedulingDomainInfo = models.SchedulingDomainInfo;
const DescribeDefaultAlarmThresholdRequest = models.DescribeDefaultAlarmThresholdRequest;
const WaterPrintKey = models.WaterPrintKey;
const DescribeCcGeoIPBlockConfigListRequest = models.DescribeCcGeoIPBlockConfigListRequest;
const PacketFilterRelation = models.PacketFilterRelation;
const RuleInstanceRelation = models.RuleInstanceRelation;
const CreatePacketFilterConfigRequest = models.CreatePacketFilterConfigRequest;
const DescribeCCTrendRequest = models.DescribeCCTrendRequest;


/**
 * antiddos client
 * @class
 */
class AntiddosClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("antiddos.intl.tencentcloudapi.com", "2020-03-09", credential, region, profile);
    }
    
    /**
     * This API is used to bind an EIP to an Anti-DDoS Advanced instance or a specified private IP of an ENI.
     * @param {AssociateDDoSEipAddressRequest} req
     * @param {function(string, AssociateDDoSEipAddressResponse):void} cb
     * @public
     */
    AssociateDDoSEipAddress(req, cb) {
        let resp = new AssociateDDoSEipAddressResponse();
        this.request("AssociateDDoSEipAddress", req, resp, cb);
    }

    /**
     * This API is used to getting the exception results of the health check on layer-7 forwarding rules.
     * @param {DescribeNewL7RulesErrHealthRequest} req
     * @param {function(string, DescribeNewL7RulesErrHealthResponse):void} cb
     * @public
     */
    DescribeNewL7RulesErrHealth(req, cb) {
        let resp = new DescribeNewL7RulesErrHealthResponse();
        this.request("DescribeNewL7RulesErrHealth", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS watermark configurations.
     * @param {DescribeListWaterPrintConfigRequest} req
     * @param {function(string, DescribeListWaterPrintConfigResponse):void} cb
     * @public
     */
    DescribeListWaterPrintConfig(req, cb) {
        let resp = new DescribeListWaterPrintConfigResponse();
        this.request("DescribeListWaterPrintConfig", req, resp, cb);
    }

    /**
     * This API is used to obtain layer-7 forwarding rules.
     * @param {DescribeNewL7RulesRequest} req
     * @param {function(string, DescribeNewL7RulesResponse):void} cb
     * @public
     */
    DescribeNewL7Rules(req, cb) {
        let resp = new DescribeNewL7RulesResponse();
        this.request("DescribeNewL7Rules", req, resp, cb);
    }

    /**
     * This API is used to create a layer 4 access control list to prevent CC attacks.
     * @param {CreateCcBlackWhiteIpListRequest} req
     * @param {function(string, CreateCcBlackWhiteIpListResponse):void} cb
     * @public
     */
    CreateCcBlackWhiteIpList(req, cb) {
        let resp = new CreateCcBlackWhiteIpListResponse();
        this.request("CreateCcBlackWhiteIpList", req, resp, cb);
    }

    /**
     * This API is used to modify Anti-DDoS feature filtering rules.
     * @param {ModifyPacketFilterConfigRequest} req
     * @param {function(string, ModifyPacketFilterConfigResponse):void} cb
     * @public
     */
    ModifyPacketFilterConfig(req, cb) {
        let resp = new ModifyPacketFilterConfigResponse();
        this.request("ModifyPacketFilterConfig", req, resp, cb);
    }

    /**
     * This API is used to delete Anti-DDoS access rate limit configurations.
     * @param {DeleteDDoSSpeedLimitConfigRequest} req
     * @param {function(string, DeleteDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    DeleteDDoSSpeedLimitConfig(req, cb) {
        let resp = new DeleteDDoSSpeedLimitConfigResponse();
        this.request("DeleteDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * This API is used to query the information of pending risks at the account level.
     * @param {DescribePendingRiskInfoRequest} req
     * @param {function(string, DescribePendingRiskInfoResponse):void} cb
     * @public
     */
    DescribePendingRiskInfo(req, cb) {
        let resp = new DescribePendingRiskInfoResponse();
        this.request("DescribePendingRiskInfo", req, resp, cb);
    }

    /**
     * This API is used to get the traffic flow data collected in the specified period.
     * @param {DescribeBizTrendRequest} req
     * @param {function(string, DescribeBizTrendResponse):void} cb
     * @public
     */
    DescribeBizTrend(req, cb) {
        let resp = new DescribeBizTrendResponse();
        this.request("DescribeBizTrend", req, resp, cb);
    }

    /**
     * This API is used to delete Anti-DDoS region blocking configurations.
     * @param {DeleteDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, DeleteDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    DeleteDDoSGeoIPBlockConfig(req, cb) {
        let resp = new DeleteDDoSGeoIPBlockConfigResponse();
        this.request("DeleteDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to modify intelligent scheduling domain names.
     * @param {ModifyDomainUsrNameRequest} req
     * @param {function(string, ModifyDomainUsrNameResponse):void} cb
     * @public
     */
    ModifyDomainUsrName(req, cb) {
        let resp = new ModifyDomainUsrNameResponse();
        this.request("ModifyDomainUsrName", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of CC precise protection policies.
     * @param {DescribeCCPrecisionPlyListRequest} req
     * @param {function(string, DescribeCCPrecisionPlyListResponse):void} cb
     * @public
     */
    DescribeCCPrecisionPlyList(req, cb) {
        let resp = new DescribeCCPrecisionPlyListResponse();
        this.request("DescribeCCPrecisionPlyList", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of DDoS attacks.
     * @param {DescribeOverviewDDoSEventListRequest} req
     * @param {function(string, DescribeOverviewDDoSEventListResponse):void} cb
     * @public
     */
    DescribeOverviewDDoSEventList(req, cb) {
        let resp = new DescribeOverviewDDoSEventListResponse();
        this.request("DescribeOverviewDDoSEventList", req, resp, cb);
    }

    /**
     * This API is used to add Anti-DDoS feature filtering rules.
     * @param {CreatePacketFilterConfigRequest} req
     * @param {function(string, CreatePacketFilterConfigResponse):void} cb
     * @public
     */
    CreatePacketFilterConfig(req, cb) {
        let resp = new CreatePacketFilterConfigResponse();
        this.request("CreatePacketFilterConfig", req, resp, cb);
    }

    /**
     * This API is used to delete a CC precise protection policy.
     * @param {DeleteCCPrecisionPolicyRequest} req
     * @param {function(string, DeleteCCPrecisionPolicyResponse):void} cb
     * @public
     */
    DeleteCCPrecisionPolicy(req, cb) {
        let resp = new DeleteCCPrecisionPolicyResponse();
        this.request("DeleteCCPrecisionPolicy", req, resp, cb);
    }

    /**
     * This API is used to get a list of IP alarm threshold configurations.
     * @param {DescribeListIPAlarmConfigRequest} req
     * @param {function(string, DescribeListIPAlarmConfigResponse):void} cb
     * @public
     */
    DescribeListIPAlarmConfig(req, cb) {
        let resp = new DescribeListIPAlarmConfigResponse();
        this.request("DescribeListIPAlarmConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS Advanced instances.

     * @param {DescribeListBGPIPInstancesRequest} req
     * @param {function(string, DescribeListBGPIPInstancesResponse):void} cb
     * @public
     */
    DescribeListBGPIPInstances(req, cb) {
        let resp = new DescribeListBGPIPInstancesResponse();
        this.request("DescribeListBGPIPInstances", req, resp, cb);
    }

    /**
     * This API is used to get the default alarm threshold of an IP.
     * @param {DescribeDefaultAlarmThresholdRequest} req
     * @param {function(string, DescribeDefaultAlarmThresholdResponse):void} cb
     * @public
     */
    DescribeDefaultAlarmThreshold(req, cb) {
        let resp = new DescribeDefaultAlarmThresholdResponse();
        this.request("DescribeDefaultAlarmThreshold", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS IP blocklists/allowlists.
     * @param {DescribeListBlackWhiteIpListRequest} req
     * @param {function(string, DescribeListBlackWhiteIpListResponse):void} cb
     * @public
     */
    DescribeListBlackWhiteIpList(req, cb) {
        let resp = new DescribeListBlackWhiteIpListResponse();
        this.request("DescribeListBlackWhiteIpList", req, resp, cb);
    }

    /**
     * This API is used to delete a CC cleansing threshold policy.
     * @param {DeleteCCThresholdPolicyRequest} req
     * @param {function(string, DeleteCCThresholdPolicyResponse):void} cb
     * @public
     */
    DeleteCCThresholdPolicy(req, cb) {
        let resp = new DeleteCCThresholdPolicyResponse();
        this.request("DeleteCCThresholdPolicy", req, resp, cb);
    }

    /**
     * This API is used to modify a layer-4 access control list.
     * @param {ModifyCcBlackWhiteIpListRequest} req
     * @param {function(string, ModifyCcBlackWhiteIpListResponse):void} cb
     * @public
     */
    ModifyCcBlackWhiteIpList(req, cb) {
        let resp = new ModifyCcBlackWhiteIpListResponse();
        this.request("ModifyCcBlackWhiteIpList", req, resp, cb);
    }

    /**
     * This API is used to obtain the layer-4 access control list.
     * @param {DescribeCcBlackWhiteIpListRequest} req
     * @param {function(string, DescribeCcBlackWhiteIpListResponse):void} cb
     * @public
     */
    DescribeCcBlackWhiteIpList(req, cb) {
        let resp = new DescribeCcBlackWhiteIpListResponse();
        this.request("DescribeCcBlackWhiteIpList", req, resp, cb);
    }

    /**
     * This API is used to unbind an Anti-DDoS EIP.
     * @param {DisassociateDDoSEipAddressRequest} req
     * @param {function(string, DisassociateDDoSEipAddressResponse):void} cb
     * @public
     */
    DisassociateDDoSEipAddress(req, cb) {
        let resp = new DisassociateDDoSEipAddressResponse();
        this.request("DisassociateDDoSEipAddress", req, resp, cb);
    }

    /**
     * This API is used the query a level-defining policy of CC attacks
     * @param {DescribeCCLevelPolicyRequest} req
     * @param {function(string, DescribeCCLevelPolicyResponse):void} cb
     * @public
     */
    DescribeCCLevelPolicy(req, cb) {
        let resp = new DescribeCCLevelPolicyResponse();
        this.request("DescribeCCLevelPolicy", req, resp, cb);
    }

    /**
     * This API is used to bind an IP to an Anti-DDoS Pro instance Both single IP instances and multi-IP instances are available. Note that you should wait until the current binding or unbinding completes before using this async API for new operations.
     * @param {CreateBoundIPRequest} req
     * @param {function(string, CreateBoundIPResponse):void} cb
     * @public
     */
    CreateBoundIP(req, cb) {
        let resp = new CreateBoundIPResponse();
        this.request("CreateBoundIP", req, resp, cb);
    }

    /**
     * This API is used to get a list of intelligent scheduling domain names.
     * @param {DescribeListSchedulingDomainRequest} req
     * @param {function(string, DescribeListSchedulingDomainResponse):void} cb
     * @public
     */
    DescribeListSchedulingDomain(req, cb) {
        let resp = new DescribeListSchedulingDomainResponse();
        this.request("DescribeListSchedulingDomain", req, resp, cb);
    }

    /**
     * This API is used to modify Anti-DDoS access rate limit configurations.
     * @param {ModifyDDoSSpeedLimitConfigRequest} req
     * @param {function(string, ModifyDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    ModifyDDoSSpeedLimitConfig(req, cb) {
        let resp = new ModifyDDoSSpeedLimitConfigResponse();
        this.request("ModifyDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * This API is used to delete Anti-DDoS watermark keys.
     * @param {DeleteWaterPrintKeyRequest} req
     * @param {function(string, DeleteWaterPrintKeyResponse):void} cb
     * @public
     */
    DeleteWaterPrintKey(req, cb) {
        let resp = new DeleteWaterPrintKeyResponse();
        this.request("DeleteWaterPrintKey", req, resp, cb);
    }

    /**
     * This API is used to set the default alarm threshold of an IP.
     * @param {CreateDefaultAlarmThresholdRequest} req
     * @param {function(string, CreateDefaultAlarmThresholdResponse):void} cb
     * @public
     */
    CreateDefaultAlarmThreshold(req, cb) {
        let resp = new CreateDefaultAlarmThresholdResponse();
        this.request("CreateDefaultAlarmThreshold", req, resp, cb);
    }

    /**
     * This API is used to add Anti-DDoS watermark configurations.
     * @param {CreateWaterPrintConfigRequest} req
     * @param {function(string, CreateWaterPrintConfigResponse):void} cb
     * @public
     */
    CreateWaterPrintConfig(req, cb) {
        let resp = new CreateWaterPrintConfigResponse();
        this.request("CreateWaterPrintConfig", req, resp, cb);
    }

    /**
     * Gets the list of CC protection levels
     * @param {DescribeCCLevelListRequest} req
     * @param {function(string, DescribeCCLevelListResponse):void} cb
     * @public
     */
    DescribeCCLevelList(req, cb) {
        let resp = new DescribeCCLevelListResponse();
        this.request("DescribeCCLevelList", req, resp, cb);
    }

    /**
     * This API is used to obtain Anti-DDoS Pro traffic data.
     * @param {DescribeBgpBizTrendRequest} req
     * @param {function(string, DescribeBgpBizTrendResponse):void} cb
     * @public
     */
    DescribeBgpBizTrend(req, cb) {
        let resp = new DescribeBgpBizTrendResponse();
        this.request("DescribeBgpBizTrend", req, resp, cb);
    }

    /**
     * This API is used to get DDoS attack traffic bandwidth and attack packet rate.
     * @param {DescribeDDoSTrendRequest} req
     * @param {function(string, DescribeDDoSTrendResponse):void} cb
     * @public
     */
    DescribeDDoSTrend(req, cb) {
        let resp = new DescribeDDoSTrendResponse();
        this.request("DescribeDDoSTrend", req, resp, cb);
    }

    /**
     * This API is used to query the list of CC cleansing thresholds.
     * @param {DescribeCCThresholdListRequest} req
     * @param {function(string, DescribeCCThresholdListResponse):void} cb
     * @public
     */
    DescribeCCThresholdList(req, cb) {
        let resp = new DescribeCCThresholdListResponse();
        this.request("DescribeCCThresholdList", req, resp, cb);
    }

    /**
     * This API is used to modify a CC precise protection policy.
     * @param {ModifyCCPrecisionPolicyRequest} req
     * @param {function(string, ModifyCCPrecisionPolicyResponse):void} cb
     * @public
     */
    ModifyCCPrecisionPolicy(req, cb) {
        let resp = new ModifyCCPrecisionPolicyResponse();
        this.request("ModifyCCPrecisionPolicy", req, resp, cb);
    }

    /**
     * This API is used to set the default alarm threshold of an IP.
     * @param {CreateIPAlarmThresholdConfigRequest} req
     * @param {function(string, CreateIPAlarmThresholdConfigResponse):void} cb
     * @public
     */
    CreateIPAlarmThresholdConfig(req, cb) {
        let resp = new CreateIPAlarmThresholdConfigResponse();
        this.request("CreateIPAlarmThresholdConfig", req, resp, cb);
    }

    /**
     * This API is used to delete a level-defining policy of CC attacks. 
     * @param {DeleteCCLevelPolicyRequest} req
     * @param {function(string, DeleteCCLevelPolicyResponse):void} cb
     * @public
     */
    DeleteCCLevelPolicy(req, cb) {
        let resp = new DeleteCCLevelPolicyResponse();
        this.request("DeleteCCLevelPolicy", req, resp, cb);
    }

    /**
     * This API is used to query layer-7 rules matched with certificate IDs.
     * @param {DescribeL7RulesBySSLCertIdRequest} req
     * @param {function(string, DescribeL7RulesBySSLCertIdResponse):void} cb
     * @public
     */
    DescribeL7RulesBySSLCertId(req, cb) {
        let resp = new DescribeL7RulesBySSLCertIdResponse();
        this.request("DescribeL7RulesBySSLCertId", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS feature filtering rules.
     * @param {DescribeListPacketFilterConfigRequest} req
     * @param {function(string, DescribeListPacketFilterConfigResponse):void} cb
     * @public
     */
    DescribeListPacketFilterConfig(req, cb) {
        let resp = new DescribeListPacketFilterConfigResponse();
        this.request("DescribeListPacketFilterConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS access rate limit configurations.
     * @param {DescribeListDDoSSpeedLimitConfigRequest} req
     * @param {function(string, DescribeListDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    DescribeListDDoSSpeedLimitConfig(req, cb) {
        let resp = new DescribeListDDoSSpeedLimitConfigResponse();
        this.request("DescribeListDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * 
     * @param {DescribeIpBlockListRequest} req
     * @param {function(string, DescribeIpBlockListResponse):void} cb
     * @public
     */
    DescribeIpBlockList(req, cb) {
        let resp = new DescribeIpBlockListResponse();
        this.request("DescribeIpBlockList", req, resp, cb);
    }

    /**
     * This API is used to delete a layer-4 access control list.
     * @param {DeleteCcBlackWhiteIpListRequest} req
     * @param {function(string, DeleteCcBlackWhiteIpListResponse):void} cb
     * @public
     */
    DeleteCcBlackWhiteIpList(req, cb) {
        let resp = new DeleteCcBlackWhiteIpListResponse();
        this.request("DeleteCcBlackWhiteIpList", req, resp, cb);
    }

    /**
     * This API is used to modify layer-7 forwarding rules.
     * @param {ModifyNewDomainRulesRequest} req
     * @param {function(string, ModifyNewDomainRulesResponse):void} cb
     * @public
     */
    ModifyNewDomainRules(req, cb) {
        let resp = new ModifyNewDomainRulesResponse();
        this.request("ModifyNewDomainRules", req, resp, cb);
    }

    /**
     * This API is used to add Anti-DDoS access rate limit configurations.
     * @param {CreateDDoSSpeedLimitConfigRequest} req
     * @param {function(string, CreateDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    CreateDDoSSpeedLimitConfig(req, cb) {
        let resp = new CreateDDoSSpeedLimitConfigResponse();
        this.request("CreateDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * This API is used to querying the status of Anti-DDoS IP.
     * @param {DescribeBasicDeviceStatusRequest} req
     * @param {function(string, DescribeBasicDeviceStatusResponse):void} cb
     * @public
     */
    DescribeBasicDeviceStatus(req, cb) {
        let resp = new DescribeBasicDeviceStatusResponse();
        this.request("DescribeBasicDeviceStatus", req, resp, cb);
    }

    /**
     * This API is used to get the statistics on the status codes of business traffic.
     * @param {DescribeBizHttpStatusRequest} req
     * @param {function(string, DescribeBizHttpStatusResponse):void} cb
     * @public
     */
    DescribeBizHttpStatus(req, cb) {
        let resp = new DescribeBizHttpStatusResponse();
        this.request("DescribeBizHttpStatus", req, resp, cb);
    }

    /**
     * This API is used to get the list of Anti-DDoS Pro instances.
     * @param {DescribeListBGPInstancesRequest} req
     * @param {function(string, DescribeListBGPInstancesResponse):void} cb
     * @public
     */
    DescribeListBGPInstances(req, cb) {
        let resp = new DescribeListBGPInstancesResponse();
        this.request("DescribeListBGPInstances", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS AI protection switches.
     * @param {DescribeListDDoSAIRequest} req
     * @param {function(string, DescribeListDDoSAIResponse):void} cb
     * @public
     */
    DescribeListDDoSAI(req, cb) {
        let resp = new DescribeListDDoSAIResponse();
        this.request("DescribeListDDoSAI", req, resp, cb);
    }

    /**
     * This API is used to bind an Anti-DDoS EIP to the specified private IP of a CLB instance.
     * @param {AssociateDDoSEipLoadBalancerRequest} req
     * @param {function(string, AssociateDDoSEipLoadBalancerResponse):void} cb
     * @public
     */
    AssociateDDoSEipLoadBalancer(req, cb) {
        let resp = new AssociateDDoSEipLoadBalancerResponse();
        this.request("AssociateDDoSEipLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to add an Anti-DDoS IP blocklist/allowlist.
     * @param {CreateBlackWhiteIpListRequest} req
     * @param {function(string, CreateBlackWhiteIpListResponse):void} cb
     * @public
     */
    CreateBlackWhiteIpList(req, cb) {
        let resp = new CreateBlackWhiteIpListResponse();
        this.request("CreateBlackWhiteIpList", req, resp, cb);
    }

    /**
     * This API is used to add layer-7 forwarding rules.
     * @param {CreateNewL7RulesRequest} req
     * @param {function(string, CreateNewL7RulesResponse):void} cb
     * @public
     */
    CreateNewL7Rules(req, cb) {
        let resp = new CreateNewL7RulesResponse();
        this.request("CreateNewL7Rules", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS region blocking configurations.
     * @param {DescribeListDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, DescribeListDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    DescribeListDDoSGeoIPBlockConfig(req, cb) {
        let resp = new DescribeListDDoSGeoIPBlockConfigResponse();
        this.request("DescribeListDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to create a CC precise protection policy.
     * @param {CreateCCPrecisionPolicyRequest} req
     * @param {function(string, CreateCCPrecisionPolicyResponse):void} cb
     * @public
     */
    CreateCCPrecisionPolicy(req, cb) {
        let resp = new CreateCCPrecisionPolicyResponse();
        this.request("CreateCCPrecisionPolicy", req, resp, cb);
    }

    /**
     * This API is used to add an Anti-DDoS region blocking configuration.
     * @param {CreateDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, CreateDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    CreateDDoSGeoIPBlockConfig(req, cb) {
        let resp = new CreateDDoSGeoIPBlockConfigResponse();
        this.request("CreateDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to delete Anti-DDoS watermark configurations.
     * @param {DeleteWaterPrintConfigRequest} req
     * @param {function(string, DeleteWaterPrintConfigResponse):void} cb
     * @public
     */
    DeleteWaterPrintConfig(req, cb) {
        let resp = new DeleteWaterPrintConfigResponse();
        this.request("DeleteWaterPrintConfig", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of regional blocking configurations.
     * @param {DescribeCcGeoIPBlockConfigListRequest} req
     * @param {function(string, DescribeCcGeoIPBlockConfigListResponse):void} cb
     * @public
     */
    DescribeCcGeoIPBlockConfigList(req, cb) {
        let resp = new DescribeCcGeoIPBlockConfigListResponse();
        this.request("DescribeCcGeoIPBlockConfigList", req, resp, cb);
    }

    /**
     * This API is used to create a CC frequency limit policy.
     * @param {CreateCCReqLimitPolicyRequest} req
     * @param {function(string, CreateCCReqLimitPolicyResponse):void} cb
     * @public
     */
    CreateCCReqLimitPolicy(req, cb) {
        let resp = new CreateCCReqLimitPolicyResponse();
        this.request("CreateCCReqLimitPolicy", req, resp, cb);
    }

    /**
     * This API is used to set Anti-DDoS AI protection switches.
     * @param {CreateDDoSAIRequest} req
     * @param {function(string, CreateDDoSAIResponse):void} cb
     * @public
     */
    CreateDDoSAI(req, cb) {
        let resp = new CreateDDoSAIResponse();
        this.request("CreateDDoSAI", req, resp, cb);
    }

    /**
     * This API is used to delete Anti-DDoS feature filtering rules.
     * @param {DeletePacketFilterConfigRequest} req
     * @param {function(string, DeletePacketFilterConfigResponse):void} cb
     * @public
     */
    DeletePacketFilterConfig(req, cb) {
        let resp = new DeletePacketFilterConfigResponse();
        this.request("DeletePacketFilterConfig", req, resp, cb);
    }

    /**
     * This API is used to enable or disable Anti-DDoS watermark configurations.
     * @param {SwitchWaterPrintConfigRequest} req
     * @param {function(string, SwitchWaterPrintConfigResponse):void} cb
     * @public
     */
    SwitchWaterPrintConfig(req, cb) {
        let resp = new SwitchWaterPrintConfigResponse();
        this.request("SwitchWaterPrintConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of Anti-DDoS protocol blocking configurations.
     * @param {DescribeListProtocolBlockConfigRequest} req
     * @param {function(string, DescribeListProtocolBlockConfigResponse):void} cb
     * @public
     */
    DescribeListProtocolBlockConfig(req, cb) {
        let resp = new DescribeListProtocolBlockConfigResponse();
        this.request("DescribeListProtocolBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to create a domain name for IP scheduling and switching.
     * @param {CreateSchedulingDomainRequest} req
     * @param {function(string, CreateSchedulingDomainResponse):void} cb
     * @public
     */
    CreateSchedulingDomain(req, cb) {
        let resp = new CreateSchedulingDomainResponse();
        this.request("CreateSchedulingDomain", req, resp, cb);
    }

    /**
     * This API is used to get CC attack data, including total QPS peaks, attack QPS, total number of requests and number of attack requests.
     * @param {DescribeCCTrendRequest} req
     * @param {function(string, DescribeCCTrendResponse):void} cb
     * @public
     */
    DescribeCCTrend(req, cb) {
        let resp = new DescribeCCTrendResponse();
        this.request("DescribeCCTrend", req, resp, cb);
    }

    /**
     * This API is used to add Anti-DDoS watermark keys.
     * @param {CreateWaterPrintKeyRequest} req
     * @param {function(string, CreateWaterPrintKeyResponse):void} cb
     * @public
     */
    CreateWaterPrintKey(req, cb) {
        let resp = new CreateWaterPrintKeyResponse();
        this.request("CreateWaterPrintKey", req, resp, cb);
    }

    /**
     * This API is used to set Anti-DDoS protocol blocking configurations.
     * @param {CreateProtocolBlockConfigRequest} req
     * @param {function(string, CreateProtocolBlockConfigResponse):void} cb
     * @public
     */
    CreateProtocolBlockConfig(req, cb) {
        let resp = new CreateProtocolBlockConfigResponse();
        this.request("CreateProtocolBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to delete a regional blocking configuration.
     * @param {DeleteCcGeoIPBlockConfigRequest} req
     * @param {function(string, DeleteCcGeoIPBlockConfigResponse):void} cb
     * @public
     */
    DeleteCcGeoIPBlockConfig(req, cb) {
        let resp = new DeleteCcGeoIPBlockConfigResponse();
        this.request("DeleteCcGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to configure certificates with layer-7 forwarding rules in a batch for SSL testing.
     * @param {CreateL7RuleCertsRequest} req
     * @param {function(string, CreateL7RuleCertsResponse):void} cb
     * @public
     */
    CreateL7RuleCerts(req, cb) {
        let resp = new CreateL7RuleCertsResponse();
        this.request("CreateL7RuleCerts", req, resp, cb);
    }

    /**
     * This API is used to create a regional blocking configuration.
     * @param {CreateCcGeoIPBlockConfigRequest} req
     * @param {function(string, CreateCcGeoIPBlockConfigResponse):void} cb
     * @public
     */
    CreateCcGeoIPBlockConfig(req, cb) {
        let resp = new CreateCcGeoIPBlockConfigResponse();
        this.request("CreateCcGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to modify Anti-DDoS region blocking configurations.
     * @param {ModifyDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, ModifyDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    ModifyDDoSGeoIPBlockConfig(req, cb) {
        let resp = new ModifyDDoSGeoIPBlockConfigResponse();
        this.request("ModifyDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * This API is used to get a list of forwarding listeners.
     * @param {DescribeListListenerRequest} req
     * @param {function(string, DescribeListListenerResponse):void} cb
     * @public
     */
    DescribeListListener(req, cb) {
        let resp = new DescribeListListenerResponse();
        this.request("DescribeListListener", req, resp, cb);
    }


}
module.exports = AntiddosClient;
