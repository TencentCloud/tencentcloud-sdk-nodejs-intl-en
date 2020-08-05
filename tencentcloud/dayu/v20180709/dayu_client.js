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
const ModifyDDoSPolicyCaseRequest = models.ModifyDDoSPolicyCaseRequest;
const DescribeIpUnBlockListRequest = models.DescribeIpUnBlockListRequest;
const DeleteDDoSPolicyCaseRequest = models.DeleteDDoSPolicyCaseRequest;
const CreateDDoSPolicyResponse = models.CreateDDoSPolicyResponse;
const DeleteL7RulesRequest = models.DeleteL7RulesRequest;
const CreateBoundIPRequest = models.CreateBoundIPRequest;
const DescribeCCEvListRequest = models.DescribeCCEvListRequest;
const DescribeTransmitStatisResponse = models.DescribeTransmitStatisResponse;
const DDosPolicy = models.DDosPolicy;
const DescribeDDoSNetTrendRequest = models.DescribeDDoSNetTrendRequest;
const DescribeUnBlockStatisRequest = models.DescribeUnBlockStatisRequest;
const ModifyCCUrlAllowResponse = models.ModifyCCUrlAllowResponse;
const DescribeBasicDeviceThresholdResponse = models.DescribeBasicDeviceThresholdResponse;
const DescribeCCAlarmThresholdResponse = models.DescribeCCAlarmThresholdResponse;
const DescribeDDoSNetEvListRequest = models.DescribeDDoSNetEvListRequest;
const DeleteL4RulesResponse = models.DeleteL4RulesResponse;
const ModifyNewDomainRulesRequest = models.ModifyNewDomainRulesRequest;
const DDoSAlarmThreshold = models.DDoSAlarmThreshold;
const DescribePolicyCaseResponse = models.DescribePolicyCaseResponse;
const DescribeResIpListRequest = models.DescribeResIpListRequest;
const ModifyCCLevelRequest = models.ModifyCCLevelRequest;
const DeleteCCSelfDefinePolicyRequest = models.DeleteCCSelfDefinePolicyRequest;
const DescribeCCUrlAllowRequest = models.DescribeCCUrlAllowRequest;
const KeyValue = models.KeyValue;
const IpBlackWhite = models.IpBlackWhite;
const ModifyDDoSAlarmThresholdRequest = models.ModifyDDoSAlarmThresholdRequest;
const CreateDDoSPolicyRequest = models.CreateDDoSPolicyRequest;
const ModifyCCThresholdResponse = models.ModifyCCThresholdResponse;
const ModifyNetReturnSwitchResponse = models.ModifyNetReturnSwitchResponse;
const DescribeActionLogRequest = models.DescribeActionLogRequest;
const CreateL7RuleCertRequest = models.CreateL7RuleCertRequest;
const DescribeBGPIPL7RuleMaxCntResponse = models.DescribeBGPIPL7RuleMaxCntResponse;
const DescribePcapResponse = models.DescribePcapResponse;
const DescribePackIndexResponse = models.DescribePackIndexResponse;
const DescribeDDoSAttackSourceRequest = models.DescribeDDoSAttackSourceRequest;
const DescribeDDoSCountRequest = models.DescribeDDoSCountRequest;
const RegionInstanceCount = models.RegionInstanceCount;
const WaterPrintKey = models.WaterPrintKey;
const DescribeDDoSNetIpLogRequest = models.DescribeDDoSNetIpLogRequest;
const ModifyNewL4RuleResponse = models.ModifyNewL4RuleResponse;
const ModifyNewDomainRulesResponse = models.ModifyNewDomainRulesResponse;
const DescribeDDoSUsedStatisResponse = models.DescribeDDoSUsedStatisResponse;
const DescribeBasicCCThresholdRequest = models.DescribeBasicCCThresholdRequest;
const CreateDDoSPolicyCaseResponse = models.CreateDDoSPolicyCaseResponse;
const DescribeIPProductInfoResponse = models.DescribeIPProductInfoResponse;
const ModifyDDoSSwitchResponse = models.ModifyDDoSSwitchResponse;
const IpBlockData = models.IpBlockData;
const DescribeCCSelfDefinePolicyRequest = models.DescribeCCSelfDefinePolicyRequest;
const ModifyDDoSDefendStatusRequest = models.ModifyDDoSDefendStatusRequest;
const DescribeRuleSetsResponse = models.DescribeRuleSetsResponse;
const DescribeBaradDataResponse = models.DescribeBaradDataResponse;
const DescribeDDoSEvInfoRequest = models.DescribeDDoSEvInfoRequest;
const DescribeDDoSAttackIPRegionMapResponse = models.DescribeDDoSAttackIPRegionMapResponse;
const ModifyL4KeepTimeResponse = models.ModifyL4KeepTimeResponse;
const ModifyL7RulesResponse = models.ModifyL7RulesResponse;
const DescribeL7HealthConfigRequest = models.DescribeL7HealthConfigRequest;
const BoundIpInfo = models.BoundIpInfo;
const DescribePcapRequest = models.DescribePcapRequest;
const DescribeDDoSAlarmThresholdResponse = models.DescribeDDoSAlarmThresholdResponse;
const KeyValueRecord = models.KeyValueRecord;
const DescribeBasicDeviceThresholdRequest = models.DescribeBasicDeviceThresholdRequest;
const ModifyResBindDDoSPolicyResponse = models.ModifyResBindDDoSPolicyResponse;
const ModifyDDoSWaterKeyRequest = models.ModifyDDoSWaterKeyRequest;
const ModifyCCLevelResponse = models.ModifyCCLevelResponse;
const DescribeBaradDataRequest = models.DescribeBaradDataRequest;
const DescribeDDoSDefendStatusResponse = models.DescribeDDoSDefendStatusResponse;
const DescribeCCSelfDefinePolicyResponse = models.DescribeCCSelfDefinePolicyResponse;
const CCPolicy = models.CCPolicy;
const ModifyDDoSAIStatusResponse = models.ModifyDDoSAIStatusResponse;
const DescribeDDoSNetEvInfoRequest = models.DescribeDDoSNetEvInfoRequest;
const ModifyResourceRenewFlagRequest = models.ModifyResourceRenewFlagRequest;
const DescribeCCEvListResponse = models.DescribeCCEvListResponse;
const DescribeCCFrequencyRulesRequest = models.DescribeCCFrequencyRulesRequest;
const CreateL4HealthConfigRequest = models.CreateL4HealthConfigRequest;
const DescribeBGPIPL7RuleMaxCntRequest = models.DescribeBGPIPL7RuleMaxCntRequest;
const ModifyDDoSPolicyNameResponse = models.ModifyDDoSPolicyNameResponse;
const DescribeCCAlarmThresholdRequest = models.DescribeCCAlarmThresholdRequest;
const ModifyCCUrlAllowRequest = models.ModifyCCUrlAllowRequest;
const ModifyDDoSAlarmThresholdResponse = models.ModifyDDoSAlarmThresholdResponse;
const ModifyDDoSLevelResponse = models.ModifyDDoSLevelResponse;
const DescribeCCIpAllowDenyResponse = models.DescribeCCIpAllowDenyResponse;
const DescribeDDoSIpLogResponse = models.DescribeDDoSIpLogResponse;
const CCRule = models.CCRule;
const DescribeResIpListResponse = models.DescribeResIpListResponse;
const ModifyCCIpAllowDenyRequest = models.ModifyCCIpAllowDenyRequest;
const CreateInstanceNameResponse = models.CreateInstanceNameResponse;
const DescribeDDoSDefendStatusRequest = models.DescribeDDoSDefendStatusRequest;
const ModifyDDoSWaterKeyResponse = models.ModifyDDoSWaterKeyResponse;
const ModifyL4HealthRequest = models.ModifyL4HealthRequest;
const ModifyCCHostProtectionResponse = models.ModifyCCHostProtectionResponse;
const CreateL4RulesResponse = models.CreateL4RulesResponse;
const DescribeInsurePacksRequest = models.DescribeInsurePacksRequest;
const DescribeDDoSNetCountRequest = models.DescribeDDoSNetCountRequest;
const Paging = models.Paging;
const ModifyCCSelfDefinePolicyRequest = models.ModifyCCSelfDefinePolicyRequest;
const L4HealthConfig = models.L4HealthConfig;
const CreateCCSelfDefinePolicyRequest = models.CreateCCSelfDefinePolicyRequest;
const SuccessCode = models.SuccessCode;
const DescribleL4RulesRequest = models.DescribleL4RulesRequest;
const L4RuleEntry = models.L4RuleEntry;
const DescribeL4HealthConfigRequest = models.DescribeL4HealthConfigRequest;
const CreateL7CCRuleResponse = models.CreateL7CCRuleResponse;
const ModifyNetReturnSwitchRequest = models.ModifyNetReturnSwitchRequest;
const CreateL7CCRuleRequest = models.CreateL7CCRuleRequest;
const CreateL7RulesRequest = models.CreateL7RulesRequest;
const CreateL4RulesRequest = models.CreateL4RulesRequest;
const DescribeDDoSNetEvListResponse = models.DescribeDDoSNetEvListResponse;
const ModifyCCFrequencyRulesStatusResponse = models.ModifyCCFrequencyRulesStatusResponse;
const ModifyNewL4RuleRequest = models.ModifyNewL4RuleRequest;
const DescribeL4RulesErrHealthRequest = models.DescribeL4RulesErrHealthRequest;
const L4RuleSource = models.L4RuleSource;
const CreateBasicDDoSAlarmThresholdResponse = models.CreateBasicDDoSAlarmThresholdResponse;
const CreateNetReturnResponse = models.CreateNetReturnResponse;
const DeleteL4RulesRequest = models.DeleteL4RulesRequest;
const ModifyCCAlarmThresholdResponse = models.ModifyCCAlarmThresholdResponse;
const CreateL7HealthConfigRequest = models.CreateL7HealthConfigRequest;
const DescribeIPProductInfoRequest = models.DescribeIPProductInfoRequest;
const DescribeL4HealthConfigResponse = models.DescribeL4HealthConfigResponse;
const CreateL7RuleCertResponse = models.CreateL7RuleCertResponse;
const DescribeDDoSAttackIPRegionMapRequest = models.DescribeDDoSAttackIPRegionMapRequest;
const ModifyDDoSPolicyRequest = models.ModifyDDoSPolicyRequest;
const DescribeSourceIpSegmentRequest = models.DescribeSourceIpSegmentRequest;
const DescribeSourceIpSegmentResponse = models.DescribeSourceIpSegmentResponse;
const ModifyResBindDDoSPolicyRequest = models.ModifyResBindDDoSPolicyRequest;
const L7RuleHealth = models.L7RuleHealth;
const CreateL7RulesUploadRequest = models.CreateL7RulesUploadRequest;
const L4RuleHealth = models.L4RuleHealth;
const ModifyCCFrequencyRulesRequest = models.ModifyCCFrequencyRulesRequest;
const ModifyCCPolicySwitchResponse = models.ModifyCCPolicySwitchResponse;
const ModifyDDoSThresholdResponse = models.ModifyDDoSThresholdResponse;
const CreateDDoSPolicyCaseRequest = models.CreateDDoSPolicyCaseRequest;
const ModifyCCIpAllowDenyResponse = models.ModifyCCIpAllowDenyResponse;
const ModifyCCAlarmThresholdRequest = models.ModifyCCAlarmThresholdRequest;
const DescribeCCFrequencyRulesResponse = models.DescribeCCFrequencyRulesResponse;
const DescribeDDoSEvListRequest = models.DescribeDDoSEvListRequest;
const DescribeBasicCCThresholdResponse = models.DescribeBasicCCThresholdResponse;
const ModifyDDoSPolicyNameRequest = models.ModifyDDoSPolicyNameRequest;
const DescribeIpUnBlockListResponse = models.DescribeIpUnBlockListResponse;
const ModifyCCPolicySwitchRequest = models.ModifyCCPolicySwitchRequest;
const ModifyCCFrequencyRulesResponse = models.ModifyCCFrequencyRulesResponse;
const ModifyL4KeepTimeRequest = models.ModifyL4KeepTimeRequest;
const SchedulingDomain = models.SchedulingDomain;
const ModifyCCHostProtectionRequest = models.ModifyCCHostProtectionRequest;
const DescribeIpBlockListRequest = models.DescribeIpBlockListRequest;
const DescribeDDoSNetCountResponse = models.DescribeDDoSNetCountResponse;
const CreateL7RulesResponse = models.CreateL7RulesResponse;
const BaradData = models.BaradData;
const ModifyDDoSSwitchRequest = models.ModifyDDoSSwitchRequest;
const CreateNetReturnRequest = models.CreateNetReturnRequest;
const ModifyDDoSAIStatusRequest = models.ModifyDDoSAIStatusRequest;
const DescribeResourceListResponse = models.DescribeResourceListResponse;
const ModifyCCThresholdRequest = models.ModifyCCThresholdRequest;
const ModifyDDoSDefendStatusResponse = models.ModifyDDoSDefendStatusResponse;
const CreateBasicDDoSAlarmThresholdRequest = models.CreateBasicDDoSAlarmThresholdRequest;
const CCRuleConfig = models.CCRuleConfig;
const DescribeDDoSEvInfoResponse = models.DescribeDDoSEvInfoResponse;
const DescribleRegionCountRequest = models.DescribleRegionCountRequest;
const ModifyCCSelfDefinePolicyResponse = models.ModifyCCSelfDefinePolicyResponse;
const DescribeDDoSIpLogRequest = models.DescribeDDoSIpLogRequest;
const DescribeDDoSAlarmThresholdRequest = models.DescribeDDoSAlarmThresholdRequest;
const DescribePolicyCaseRequest = models.DescribePolicyCaseRequest;
const WaterPrintPolicy = models.WaterPrintPolicy;
const ProtocolPort = models.ProtocolPort;
const DeleteCCSelfDefinePolicyResponse = models.DeleteCCSelfDefinePolicyResponse;
const DescribeDDoSPolicyResponse = models.DescribeDDoSPolicyResponse;
const DeleteCCFrequencyRulesResponse = models.DeleteCCFrequencyRulesResponse;
const DeleteDDoSPolicyCaseResponse = models.DeleteDDoSPolicyCaseResponse;
const CreateL4HealthConfigResponse = models.CreateL4HealthConfigResponse;
const ModifyL7RulesRequest = models.ModifyL7RulesRequest;
const ModifyElasticLimitResponse = models.ModifyElasticLimitResponse;
const DDoSAttackSourceRecord = models.DDoSAttackSourceRecord;
const CreateUnblockIpResponse = models.CreateUnblockIpResponse;
const DescribePackIndexRequest = models.DescribePackIndexRequest;
const ModifyL4RulesRequest = models.ModifyL4RulesRequest;
const DescribeDDoSEvListResponse = models.DescribeDDoSEvListResponse;
const DescribeDDoSPolicyRequest = models.DescribeDDoSPolicyRequest;
const DescribeL7HealthConfigResponse = models.DescribeL7HealthConfigResponse;
const CCFrequencyRule = models.CCFrequencyRule;
const CreateCCSelfDefinePolicyResponse = models.CreateCCSelfDefinePolicyResponse;
const NewL7RuleEntry = models.NewL7RuleEntry;
const DescribeDDoSAttackSourceResponse = models.DescribeDDoSAttackSourceResponse;
const CreateBoundIPResponse = models.CreateBoundIPResponse;
const DescribeDDoSUsedStatisRequest = models.DescribeDDoSUsedStatisRequest;
const DDoSPolicyDropOption = models.DDoSPolicyDropOption;
const ModifyElasticLimitRequest = models.ModifyElasticLimitRequest;
const ModifyL4HealthResponse = models.ModifyL4HealthResponse;
const CCEventRecord = models.CCEventRecord;
const DescribeTransmitStatisRequest = models.DescribeTransmitStatisRequest;
const DescribeInsurePacksResponse = models.DescribeInsurePacksResponse;
const DescribeCCUrlAllowResponse = models.DescribeCCUrlAllowResponse;
const ModifyResourceRenewFlagResponse = models.ModifyResourceRenewFlagResponse;
const OrderBy = models.OrderBy;
const DescribeActionLogResponse = models.DescribeActionLogResponse;
const DescribeCCTrendResponse = models.DescribeCCTrendResponse;
const ModifyDDoSPolicyCaseResponse = models.ModifyDDoSPolicyCaseResponse;
const CreateUnblockIpRequest = models.CreateUnblockIpRequest;
const DescribeSecIndexRequest = models.DescribeSecIndexRequest;
const ModifyCCFrequencyRulesStatusRequest = models.ModifyCCFrequencyRulesStatusRequest;
const DescribeDDoSCountResponse = models.DescribeDDoSCountResponse;
const DescribeL4RulesErrHealthResponse = models.DescribeL4RulesErrHealthResponse;
const DeleteDDoSPolicyResponse = models.DeleteDDoSPolicyResponse;
const DescribeDDoSTrendRequest = models.DescribeDDoSTrendRequest;
const ModifyDDoSPolicyResponse = models.ModifyDDoSPolicyResponse;
const ResourceIp = models.ResourceIp;
const CCAlarmThreshold = models.CCAlarmThreshold;
const DescribeResourceListRequest = models.DescribeResourceListRequest;
const L7HealthConfig = models.L7HealthConfig;
const DescribeDDoSNetEvInfoResponse = models.DescribeDDoSNetEvInfoResponse;
const DescribeRuleSetsRequest = models.DescribeRuleSetsRequest;
const DescribeSchedulingDomainListRequest = models.DescribeSchedulingDomainListRequest;
const DescribleL7RulesResponse = models.DescribleL7RulesResponse;
const CreateCCFrequencyRulesResponse = models.CreateCCFrequencyRulesResponse;
const DescribeIpBlockListResponse = models.DescribeIpBlockListResponse;
const DDoSPolicyPortLimit = models.DDoSPolicyPortLimit;
const DescribeSchedulingDomainListResponse = models.DescribeSchedulingDomainListResponse;
const DescribeDDoSNetTrendResponse = models.DescribeDDoSNetTrendResponse;
const DescribeUnBlockStatisResponse = models.DescribeUnBlockStatisResponse;
const DescribleL7RulesRequest = models.DescribleL7RulesRequest;
const DescribeCCIpAllowDenyRequest = models.DescribeCCIpAllowDenyRequest;
const DescribeSecIndexResponse = models.DescribeSecIndexResponse;
const L7RuleEntry = models.L7RuleEntry;
const IpUnBlockData = models.IpUnBlockData;
const ModifyDDoSLevelRequest = models.ModifyDDoSLevelRequest;
const DDoSPolicyPacketFilter = models.DDoSPolicyPacketFilter;
const DeleteCCFrequencyRulesRequest = models.DeleteCCFrequencyRulesRequest;
const DescribeDDoSNetIpLogResponse = models.DescribeDDoSNetIpLogResponse;
const CreateCCFrequencyRulesRequest = models.CreateCCFrequencyRulesRequest;
const DeleteL7RulesResponse = models.DeleteL7RulesResponse;
const CreateL7HealthConfigResponse = models.CreateL7HealthConfigResponse;
const DescribeDDoSTrendResponse = models.DescribeDDoSTrendResponse;
const DescribleRegionCountResponse = models.DescribleRegionCountResponse;
const ModifyDDoSThresholdRequest = models.ModifyDDoSThresholdRequest;
const DDoSEventRecord = models.DDoSEventRecord;
const DescribleL4RulesResponse = models.DescribleL4RulesResponse;
const ModifyL4RulesResponse = models.ModifyL4RulesResponse;
const DeleteDDoSPolicyRequest = models.DeleteDDoSPolicyRequest;
const CreateL7RulesUploadResponse = models.CreateL7RulesUploadResponse;
const CreateInstanceNameRequest = models.CreateInstanceNameRequest;
const DescribeCCTrendRequest = models.DescribeCCTrendRequest;


/**
 * dayu client
 * @class
 */
class DayuClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dayu.tencentcloudapi.com", "2018-07-09", credential, region, profile);
    }
    
    /**
     * This API is used to add/remove a CC IP to/from the blocklist/allowlist.
     * @param {ModifyCCIpAllowDenyRequest} req
     * @param {function(string, ModifyCCIpAllowDenyResponse):void} cb
     * @public
     */
    ModifyCCIpAllowDeny(req, cb) {
        let resp = new ModifyCCIpAllowDenyResponse();
        this.request("ModifyCCIpAllowDeny", req, resp, cb);
    }

    /**
     * This API is used to get the DDoS attack proportion analysis.
     * @param {DescribeDDoSCountRequest} req
     * @param {function(string, DescribeDDoSCountResponse):void} cb
     * @public
     */
    DescribeDDoSCount(req, cb) {
        let resp = new DescribeDDoSCountResponse();
        this.request("DescribeDDoSCount", req, resp, cb);
    }

    /**
     * This API is used to get the number of rules of a resource.
     * @param {DescribeRuleSetsRequest} req
     * @param {function(string, DescribeRuleSetsResponse):void} cb
     * @public
     */
    DescribeRuleSets(req, cb) {
        let resp = new DescribeRuleSetsResponse();
        this.request("DescribeRuleSets", req, resp, cb);
    }

    /**
     * This API is used to add a custom frequency control rule for layer-7 CC access (it works in the IP + Host dimension and does not support specific URIs). As it has been disused, please call the new `CreateCCFrequencyRules` API, which supports both IP + Host and URI.
     * @param {CreateL7CCRuleRequest} req
     * @param {function(string, CreateL7CCRuleResponse):void} cb
     * @public
     */
    CreateL7CCRule(req, cb) {
        let resp = new CreateL7CCRuleResponse();
        this.request("CreateL7CCRule", req, resp, cb);
    }

    /**
     * This API is used to create a custom CC policy.
     * @param {CreateCCSelfDefinePolicyRequest} req
     * @param {function(string, CreateCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    CreateCCSelfDefinePolicy(req, cb) {
        let resp = new CreateCCSelfDefinePolicyResponse();
        this.request("CreateCCSelfDefinePolicy", req, resp, cb);
    }

    /**
     * This API is used to get a layer-7 forwarding rule.
     * @param {DescribleL7RulesRequest} req
     * @param {function(string, DescribleL7RulesResponse):void} cb
     * @public
     */
    DescribleL7Rules(req, cb) {
        let resp = new DescribleL7RulesResponse();
        this.request("DescribleL7Rules", req, resp, cb);
    }

    /**
     * This API is used to enable or disable a custom CC policy.
     * @param {ModifyCCPolicySwitchRequest} req
     * @param {function(string, ModifyCCPolicySwitchResponse):void} cb
     * @public
     */
    ModifyCCPolicySwitch(req, cb) {
        let resp = new ModifyCCPolicySwitchResponse();
        this.request("ModifyCCPolicySwitch", req, resp, cb);
    }

    /**
     * This API is used to add a policy scenario.
     * @param {CreateDDoSPolicyCaseRequest} req
     * @param {function(string, CreateDDoSPolicyCaseResponse):void} cb
     * @public
     */
    CreateDDoSPolicyCase(req, cb) {
        let resp = new CreateDDoSPolicyCaseResponse();
        this.request("CreateDDoSPolicyCase", req, resp, cb);
    }

    /**
     * This API is used to get the DDoS attack metric data of an Anti-DDoS Ultimate resource.
     * @param {DescribeDDoSNetTrendRequest} req
     * @param {function(string, DescribeDDoSNetTrendResponse):void} cb
     * @public
     */
    DescribeDDoSNetTrend(req, cb) {
        let resp = new DescribeDDoSNetTrendResponse();
        this.request("DescribeDDoSNetTrend", req, resp, cb);
    }

    /**
     * This API is used to rename an advanced DDoS policy.
     * @param {ModifyDDoSPolicyNameRequest} req
     * @param {function(string, ModifyDDoSPolicyNameResponse):void} cb
     * @public
     */
    ModifyDDoSPolicyName(req, cb) {
        let resp = new ModifyDDoSPolicyNameResponse();
        this.request("ModifyDDoSPolicyName", req, resp, cb);
    }

    /**
     * This API is used to modify the health check parameters of a layer-4 forwarding rule. It is supported for Anti-DDoS Advanced and Anti-DDoS Ultimate.
     * @param {ModifyL4HealthRequest} req
     * @param {function(string, ModifyL4HealthResponse):void} cb
     * @public
     */
    ModifyL4Health(req, cb) {
        let resp = new ModifyL4HealthResponse();
        this.request("ModifyL4Health", req, resp, cb);
    }

    /**
     * This API is used to count the number of days of Anti-DDoS resource use and number of DDoS attacks defended against.
     * @param {DescribeDDoSUsedStatisRequest} req
     * @param {function(string, DescribeDDoSUsedStatisResponse):void} cb
     * @public
     */
    DescribeDDoSUsedStatis(req, cb) {
        let resp = new DescribeDDoSUsedStatisResponse();
        this.request("DescribeDDoSUsedStatis", req, resp, cb);
    }

    /**
     * This API is used to get the DDoS protection status (temporarily disabled status). It is supported for Anti-DDoS Basic, single IP instance, multi-IP instance, Anti-DDoS Advanced, and Anti-DDoS Ultimate. It is used to query whether DDoS protection is temporarily disabled, and if yes, return parameters such as temporary disablement duration.
     * @param {DescribeDDoSDefendStatusRequest} req
     * @param {function(string, DescribeDDoSDefendStatusResponse):void} cb
     * @public
     */
    DescribeDDoSDefendStatus(req, cb) {
        let resp = new DescribeDDoSDefendStatusResponse();
        this.request("DescribeDDoSDefendStatus", req, resp, cb);
    }

    /**
     * This API is used to get the alarm notification threshold set for CC attacks in Anti-DDoS Pro, Anti-DDoS Advanced, Anti-DDoS Ultimate, and Chess Shield.
     * @param {DescribeCCAlarmThresholdRequest} req
     * @param {function(string, DescribeCCAlarmThresholdResponse):void} cb
     * @public
     */
    DescribeCCAlarmThreshold(req, cb) {
        let resp = new DescribeCCAlarmThresholdResponse();
        this.request("DescribeCCAlarmThreshold", req, resp, cb);
    }

    /**
     * This API is used to download the PCAP packet of an attack event.
     * @param {DescribePcapRequest} req
     * @param {function(string, DescribePcapResponse):void} cb
     * @public
     */
    DescribePcap(req, cb) {
        let resp = new DescribePcapResponse();
        this.request("DescribePcap", req, resp, cb);
    }

    /**
     * This API is used to modify the elastic protection threshold.
     * @param {ModifyElasticLimitRequest} req
     * @param {function(string, ModifyElasticLimitResponse):void} cb
     * @public
     */
    ModifyElasticLimit(req, cb) {
        let resp = new ModifyElasticLimitResponse();
        this.request("ModifyElasticLimit", req, resp, cb);
    }

    /**
     * This API is used to get the DDoS IP attack logs of an Anti-DDoS Ultimate resource.
     * @param {DescribeDDoSNetIpLogRequest} req
     * @param {function(string, DescribeDDoSNetIpLogResponse):void} cb
     * @public
     */
    DescribeDDoSNetIpLog(req, cb) {
        let resp = new DescribeDDoSNetIpLogResponse();
        this.request("DescribeDDoSNetIpLog", req, resp, cb);
    }

    /**
     * This API is used to set the alarm notification threshold for CC attacks in Anti-DDoS Pro, Anti-DDoS Advanced, Anti-DDoS Ultimate, and Chess Shield.
     * @param {ModifyCCAlarmThresholdRequest} req
     * @param {function(string, ModifyCCAlarmThresholdResponse):void} cb
     * @public
     */
    ModifyCCAlarmThreshold(req, cb) {
        let resp = new ModifyCCAlarmThresholdResponse();
        this.request("ModifyCCAlarmThreshold", req, resp, cb);
    }

    /**
     * This API is used to get the DDoS attack event list.
     * @param {DescribeDDoSEvListRequest} req
     * @param {function(string, DescribeDDoSEvListResponse):void} cb
     * @public
     */
    DescribeDDoSEvList(req, cb) {
        let resp = new DescribeDDoSEvListResponse();
        this.request("DescribeDDoSEvList", req, resp, cb);
    }

    /**
     * This API is used to get the blocked IP list.
     * @param {DescribeIpBlockListRequest} req
     * @param {function(string, DescribeIpBlockListResponse):void} cb
     * @public
     */
    DescribeIpBlockList(req, cb) {
        let resp = new DescribeIpBlockListResponse();
        this.request("DescribeIpBlockList", req, resp, cb);
    }

    /**
     * This API is used to export the layer-4 health check configuration.
     * @param {DescribeL4HealthConfigRequest} req
     * @param {function(string, DescribeL4HealthConfigResponse):void} cb
     * @public
     */
    DescribeL4HealthConfig(req, cb) {
        let resp = new DescribeL4HealthConfigResponse();
        this.request("DescribeL4HealthConfig", req, resp, cb);
    }

    /**
     * This API is used to get the security statistics of the current month.
     * @param {DescribeSecIndexRequest} req
     * @param {function(string, DescribeSecIndexResponse):void} cb
     * @public
     */
    DescribeSecIndex(req, cb) {
        let resp = new DescribeSecIndexResponse();
        this.request("DescribeSecIndex", req, resp, cb);
    }

    /**
     * Get scheduling domain name list
     * @param {DescribeSchedulingDomainListRequest} req
     * @param {function(string, DescribeSchedulingDomainListResponse):void} cb
     * @public
     */
    DescribeSchedulingDomainList(req, cb) {
        let resp = new DescribeSchedulingDomainListResponse();
        this.request("DescribeSchedulingDomainList", req, resp, cb);
    }

    /**
     * This API is used to get an access frequency control rule for CC protection.
     * @param {DescribeCCFrequencyRulesRequest} req
     * @param {function(string, DescribeCCFrequencyRulesResponse):void} cb
     * @public
     */
    DescribeCCFrequencyRules(req, cb) {
        let resp = new DescribeCCFrequencyRulesResponse();
        this.request("DescribeCCFrequencyRules", req, resp, cb);
    }

    /**
     * This API is used to delete a policy scenario.
     * @param {DeleteDDoSPolicyCaseRequest} req
     * @param {function(string, DeleteDDoSPolicyCaseResponse):void} cb
     * @public
     */
    DeleteDDoSPolicyCase(req, cb) {
        let resp = new DeleteDDoSPolicyCaseResponse();
        this.request("DeleteDDoSPolicyCase", req, resp, cb);
    }

    /**
     * This API is used to delete one or more layer-7 forwarding rules.
     * @param {DeleteL7RulesRequest} req
     * @param {function(string, DeleteL7RulesResponse):void} cb
     * @public
     */
    DeleteL7Rules(req, cb) {
        let resp = new DeleteL7RulesResponse();
        this.request("DeleteL7Rules", req, resp, cb);
    }

    /**
     * This API is used to add a layer-4 forwarding rule.
     * @param {CreateL4RulesRequest} req
     * @param {function(string, CreateL4RulesResponse):void} cb
     * @public
     */
    CreateL4Rules(req, cb) {
        let resp = new CreateL4RulesResponse();
        this.request("CreateL4Rules", req, resp, cb);
    }

    /**
     * This API is used to provide business forwarding metric data of Anti-DDoS services.
     * @param {DescribeBaradDataRequest} req
     * @param {function(string, DescribeBaradDataResponse):void} cb
     * @public
     */
    DescribeBaradData(req, cb) {
        let resp = new DescribeBaradDataResponse();
        this.request("DescribeBaradData", req, resp, cb);
    }

    /**
     * This API is used to modify an access frequency control rule for CC protection.
     * @param {ModifyCCFrequencyRulesRequest} req
     * @param {function(string, ModifyCCFrequencyRulesResponse):void} cb
     * @public
     */
    ModifyCCFrequencyRules(req, cb) {
        let resp = new ModifyCCFrequencyRulesResponse();
        this.request("ModifyCCFrequencyRules", req, resp, cb);
    }

    /**
     * This API is used to add an advanced DDoS policy.
     * @param {CreateDDoSPolicyRequest} req
     * @param {function(string, CreateDDoSPolicyResponse):void} cb
     * @public
     */
    CreateDDoSPolicy(req, cb) {
        let resp = new CreateDDoSPolicyResponse();
        this.request("CreateDDoSPolicy", req, resp, cb);
    }

    /**
     * This API is used to bind an advanced DDoS policy to an instance.
     * @param {ModifyResBindDDoSPolicyRequest} req
     * @param {function(string, ModifyResBindDDoSPolicyResponse):void} cb
     * @public
     */
    ModifyResBindDDoSPolicy(req, cb) {
        let resp = new ModifyResBindDDoSPolicyResponse();
        this.request("ModifyResBindDDoSPolicy", req, resp, cb);
    }

    /**
     * This API is used to switch a client to the real server and set the switch duration when the client is under attack or blocked.
     * @param {ModifyNetReturnSwitchRequest} req
     * @param {function(string, ModifyNetReturnSwitchResponse):void} cb
     * @public
     */
    ModifyNetReturnSwitch(req, cb) {
        let resp = new ModifyNetReturnSwitchResponse();
        this.request("ModifyNetReturnSwitch", req, resp, cb);
    }

    /**
     * This API is used to get the intermediate IP range. It is supported for Anti-DDoS Advanced and Anti-DDoS Ultimate.
     * @param {DescribeSourceIpSegmentRequest} req
     * @param {function(string, DescribeSourceIpSegmentResponse):void} cb
     * @public
     */
    DescribeSourceIpSegment(req, cb) {
        let resp = new DescribeSourceIpSegmentResponse();
        this.request("DescribeSourceIpSegment", req, resp, cb);
    }

    /**
     * This API is used to add/remove a CC URL to/from the allowlist.
     * @param {ModifyCCUrlAllowRequest} req
     * @param {function(string, ModifyCCUrlAllowResponse):void} cb
     * @public
     */
    ModifyCCUrlAllow(req, cb) {
        let resp = new ModifyCCUrlAllowResponse();
        this.request("ModifyCCUrlAllow", req, resp, cb);
    }

    /**
     * This API is used to get the blackhole threshold of Anti-DDoS Basic.
     * @param {DescribeBasicDeviceThresholdRequest} req
     * @param {function(string, DescribeBasicDeviceThresholdResponse):void} cb
     * @public
     */
    DescribeBasicDeviceThreshold(req, cb) {
        let resp = new DescribeBasicDeviceThresholdResponse();
        this.request("DescribeBasicDeviceThreshold", req, resp, cb);
    }

    /**
     * This API is used to unblock an IP.
     * @param {CreateUnblockIpRequest} req
     * @param {function(string, CreateUnblockIpResponse):void} cb
     * @public
     */
    CreateUnblockIp(req, cb) {
        let resp = new CreateUnblockIpResponse();
        this.request("CreateUnblockIp", req, resp, cb);
    }

    /**
     * This API is used to delete an advanced DDoS protection policy.
     * @param {DeleteDDoSPolicyRequest} req
     * @param {function(string, DeleteDDoSPolicyResponse):void} cb
     * @public
     */
    DeleteDDoSPolicy(req, cb) {
        let resp = new DeleteDDoSPolicyResponse();
        this.request("DeleteDDoSPolicy", req, resp, cb);
    }

    /**
     * This API is used to modify layer-4 forwarding rules.
     * @param {ModifyNewL4RuleRequest} req
     * @param {function(string, ModifyNewL4RuleResponse):void} cb
     * @public
     */
    ModifyNewL4Rule(req, cb) {
        let resp = new ModifyNewL4RuleResponse();
        this.request("ModifyNewL4Rule", req, resp, cb);
    }

    /**
     * This API is used to get the resource list.
     * @param {DescribeResourceListRequest} req
     * @param {function(string, DescribeResourceListResponse):void} cb
     * @public
     */
    DescribeResourceList(req, cb) {
        let resp = new DescribeResourceListResponse();
        this.request("DescribeResourceList", req, resp, cb);
    }

    /**
     * This API is used to delete a custom CC policy.
     * @param {DeleteCCSelfDefinePolicyRequest} req
     * @param {function(string, DeleteCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    DeleteCCSelfDefinePolicy(req, cb) {
        let resp = new DeleteCCSelfDefinePolicyResponse();
        this.request("DeleteCCSelfDefinePolicy", req, resp, cb);
    }

    /**
     * This API is used to get the policy scenario.
     * @param {DescribePolicyCaseRequest} req
     * @param {function(string, DescribePolicyCaseResponse):void} cb
     * @public
     */
    DescribePolicyCase(req, cb) {
        let resp = new DescribePolicyCaseResponse();
        this.request("DescribePolicyCase", req, resp, cb);
    }

    /**
     * This API is used to get operation logs.
     * @param {DescribeActionLogRequest} req
     * @param {function(string, DescribeActionLogResponse):void} cb
     * @public
     */
    DescribeActionLog(req, cb) {
        let resp = new DescribeActionLogResponse();
        this.request("DescribeActionLog", req, resp, cb);
    }

    /**
     * This API is used to modify a layer-4 forwarding rule.
     * @param {ModifyL4RulesRequest} req
     * @param {function(string, ModifyL4RulesResponse):void} cb
     * @public
     */
    ModifyL4Rules(req, cb) {
        let resp = new ModifyL4RulesResponse();
        this.request("ModifyL4Rules", req, resp, cb);
    }

    /**
     * This API is used to get a DDoS IP attack log.
     * @param {DescribeDDoSIpLogRequest} req
     * @param {function(string, DescribeDDoSIpLogResponse):void} cb
     * @public
     */
    DescribeDDoSIpLog(req, cb) {
        let resp = new DescribeDDoSIpLogResponse();
        this.request("DescribeDDoSIpLog", req, resp, cb);
    }

    /**
     * This API is used to get the alarm notification threshold set for DDoS attacks in Anti-DDoS Pro, Anti-DDoS Advanced, Anti-DDoS Ultimate, and Chess Shield.
     * @param {DescribeDDoSAlarmThresholdRequest} req
     * @param {function(string, DescribeDDoSAlarmThresholdResponse):void} cb
     * @public
     */
    DescribeDDoSAlarmThreshold(req, cb) {
        let resp = new DescribeDDoSAlarmThresholdResponse();
        this.request("DescribeDDoSAlarmThreshold", req, resp, cb);
    }

    /**
     * This API is used to get the product overview statistics. It is supported for Anti-DDoS Pro, Anti-DDoS Advanced, and Anti-DDoS Ultimate.
     * @param {DescribePackIndexRequest} req
     * @param {function(string, DescribePackIndexResponse):void} cb
     * @public
     */
    DescribePackIndex(req, cb) {
        let resp = new DescribePackIndexResponse();
        this.request("DescribePackIndex", req, resp, cb);
    }

    /**
     * This API is used to set the DDoS alarm threshold for Anti-DDoS Basic, which is only supported for Anti-DDoS Basic.
     * @param {CreateBasicDDoSAlarmThresholdRequest} req
     * @param {function(string, CreateBasicDDoSAlarmThresholdResponse):void} cb
     * @public
     */
    CreateBasicDDoSAlarmThreshold(req, cb) {
        let resp = new CreateBasicDDoSAlarmThresholdResponse();
        this.request("CreateBasicDDoSAlarmThreshold", req, resp, cb);
    }

    /**
     * This API is used to modify the DDoS cleansing threshold.
     * @param {ModifyDDoSThresholdRequest} req
     * @param {function(string, ModifyDDoSThresholdResponse):void} cb
     * @public
     */
    ModifyDDoSThreshold(req, cb) {
        let resp = new ModifyDDoSThresholdResponse();
        this.request("ModifyDDoSThreshold", req, resp, cb);
    }

    /**
     * This API is used to configure a certificate for a layer-7 forwarding rule.
     * @param {CreateL7RuleCertRequest} req
     * @param {function(string, CreateL7RuleCertResponse):void} cb
     * @public
     */
    CreateL7RuleCert(req, cb) {
        let resp = new CreateL7RuleCertResponse();
        this.request("CreateL7RuleCert", req, resp, cb);
    }

    /**
     * This API is used to read or modify DDoS AI protection status.
     * @param {ModifyDDoSAIStatusRequest} req
     * @param {function(string, ModifyDDoSAIStatusResponse):void} cb
     * @public
     */
    ModifyDDoSAIStatus(req, cb) {
        let resp = new ModifyDDoSAIStatusResponse();
        this.request("ModifyDDoSAIStatus", req, resp, cb);
    }

    /**
     * This API is used to get the CC IP blocklist/allowlist.
     * @param {DescribeCCIpAllowDenyRequest} req
     * @param {function(string, DescribeCCIpAllowDenyResponse):void} cb
     * @public
     */
    DescribeCCIpAllowDeny(req, cb) {
        let resp = new DescribeCCIpAllowDenyResponse();
        this.request("DescribeCCIpAllowDeny", req, resp, cb);
    }

    /**
     * This API is used to upload layer-4 health check configuration.
     * @param {CreateL4HealthConfigRequest} req
     * @param {function(string, CreateL4HealthConfigResponse):void} cb
     * @public
     */
    CreateL4HealthConfig(req, cb) {
        let resp = new CreateL4HealthConfigResponse();
        this.request("CreateL4HealthConfig", req, resp, cb);
    }

    /**
     * This API is used to get the DDoS attack proportion analysis for an Anti-DDoS Ultimate resource.
     * @param {DescribeDDoSNetCountRequest} req
     * @param {function(string, DescribeDDoSNetCountResponse):void} cb
     * @public
     */
    DescribeDDoSNetCount(req, cb) {
        let resp = new DescribeDDoSNetCountResponse();
        this.request("DescribeDDoSNetCount", req, resp, cb);
    }

    /**
     * This API is used to bind an IP to an Anti-DDoS Pro instance, which supports both single IP instances and multi-IP instances. It should be noted that this API is async; therefore, if a binding/unbinding operation is in progress, new binding/unbinding operations cannot be initiated.
     * @param {CreateBoundIPRequest} req
     * @param {function(string, CreateBoundIPResponse):void} cb
     * @public
     */
    CreateBoundIP(req, cb) {
        let resp = new CreateBoundIPResponse();
        this.request("CreateBoundIP", req, resp, cb);
    }

    /**
     * This API is used to modify an advanced DDoS policy.
     * @param {ModifyDDoSPolicyRequest} req
     * @param {function(string, ModifyDDoSPolicyResponse):void} cb
     * @public
     */
    ModifyDDoSPolicy(req, cb) {
        let resp = new ModifyDDoSPolicyResponse();
        this.request("ModifyDDoSPolicy", req, resp, cb);
    }

    /**
     * This API is used to modify a policy scenario.
     * @param {ModifyDDoSPolicyCaseRequest} req
     * @param {function(string, ModifyDDoSPolicyCaseResponse):void} cb
     * @public
     */
    ModifyDDoSPolicyCase(req, cb) {
        let resp = new ModifyDDoSPolicyCaseResponse();
        this.request("ModifyDDoSPolicyCase", req, resp, cb);
    }

    /**
     * This API is used to set the alarm notification threshold for DDoS attacks in Anti-DDoS Pro, Anti-DDoS Advanced, Anti-DDoS Ultimate, and Chess Shield.
     * @param {ModifyDDoSAlarmThresholdRequest} req
     * @param {function(string, ModifyDDoSAlarmThresholdResponse):void} cb
     * @public
     */
    ModifyDDoSAlarmThreshold(req, cb) {
        let resp = new ModifyDDoSAlarmThresholdResponse();
        this.request("ModifyDDoSAlarmThreshold", req, resp, cb);
    }

    /**
     * This API is used to get the DDoS attack event details of an Anti-DDoS Ultimate resource.
     * @param {DescribeDDoSNetEvInfoRequest} req
     * @param {function(string, DescribeDDoSNetEvInfoResponse):void} cb
     * @public
     */
    DescribeDDoSNetEvInfo(req, cb) {
        let resp = new DescribeDDoSNetEvInfoResponse();
        this.request("DescribeDDoSNetEvInfo", req, resp, cb);
    }

    /**
     * This API is used to delete an access frequency control rule for CC protection.
     * @param {DeleteCCFrequencyRulesRequest} req
     * @param {function(string, DeleteCCFrequencyRulesResponse):void} cb
     * @public
     */
    DeleteCCFrequencyRules(req, cb) {
        let resp = new DeleteCCFrequencyRulesResponse();
        this.request("DeleteCCFrequencyRules", req, resp, cb);
    }

    /**
     * This API is used to modify the session persistence of a layer-4 forwarding rule. It is supported for Anti-DDoS Advanced and Anti-DDoS Ultimate.
     * @param {ModifyL4KeepTimeRequest} req
     * @param {function(string, ModifyL4KeepTimeResponse):void} cb
     * @public
     */
    ModifyL4KeepTime(req, cb) {
        let resp = new ModifyL4KeepTimeResponse();
        this.request("ModifyL4KeepTime", req, resp, cb);
    }

    /**
     * This API is used to get the exception result of a layer-4 forwarding rule health check.
     * @param {DescribeL4RulesErrHealthRequest} req
     * @param {function(string, DescribeL4RulesErrHealthResponse):void} cb
     * @public
     */
    DescribeL4RulesErrHealth(req, cb) {
        let resp = new DescribeL4RulesErrHealthResponse();
        this.request("DescribeL4RulesErrHealth", req, resp, cb);
    }

    /**
     * This API is used to upload layer-7 forwarding rules in batches.
     * @param {CreateL7RulesUploadRequest} req
     * @param {function(string, CreateL7RulesUploadResponse):void} cb
     * @public
     */
    CreateL7RulesUpload(req, cb) {
        let resp = new CreateL7RulesUploadResponse();
        this.request("CreateL7RulesUpload", req, resp, cb);
    }

    /**
     * This API is used to get the geographical distribution map of DDoS attack source IPs. It supports display by global regions and Chinese provinces.
     * @param {DescribeDDoSAttackIPRegionMapRequest} req
     * @param {function(string, DescribeDDoSAttackIPRegionMapResponse):void} cb
     * @public
     */
    DescribeDDoSAttackIPRegionMap(req, cb) {
        let resp = new DescribeDDoSAttackIPRegionMapResponse();
        this.request("DescribeDDoSAttackIPRegionMap", req, resp, cb);
    }

    /**
     * This API is used to get the business forwarding statistics, including forwarded traffic and packet forwarding rate.
     * @param {DescribeTransmitStatisRequest} req
     * @param {function(string, DescribeTransmitStatisResponse):void} cb
     * @public
     */
    DescribeTransmitStatis(req, cb) {
        let resp = new DescribeTransmitStatisResponse();
        this.request("DescribeTransmitStatis", req, resp, cb);
    }

    /**
     * This API is used to modify CC protection level.
     * @param {ModifyCCLevelRequest} req
     * @param {function(string, ModifyCCLevelResponse):void} cb
     * @public
     */
    ModifyCCLevel(req, cb) {
        let resp = new ModifyCCLevelResponse();
        this.request("ModifyCCLevel", req, resp, cb);
    }

    /**
     * This API is used to enable or disable DDoS. It can disable DDoS protection for a period of time, which will be automatically enabled after the period of time elapses.
     * @param {ModifyDDoSDefendStatusRequest} req
     * @param {function(string, ModifyDDoSDefendStatusResponse):void} cb
     * @public
     */
    ModifyDDoSDefendStatus(req, cb) {
        let resp = new ModifyDDoSDefendStatusResponse();
        this.request("ModifyDDoSDefendStatus", req, resp, cb);
    }

    /**
     * This API is used to get the number of blackhole unblockings.
     * @param {DescribeUnBlockStatisRequest} req
     * @param {function(string, DescribeUnBlockStatisResponse):void} cb
     * @public
     */
    DescribeUnBlockStatis(req, cb) {
        let resp = new DescribeUnBlockStatisResponse();
        this.request("DescribeUnBlockStatis", req, resp, cb);
    }

    /**
     * This API is used to get the data of DDoS attack traffic bandwidth and attack packet rate.
     * @param {DescribeDDoSTrendRequest} req
     * @param {function(string, DescribeDDoSTrendResponse):void} cb
     * @public
     */
    DescribeDDoSTrend(req, cb) {
        let resp = new DescribeDDoSTrendResponse();
        this.request("DescribeDDoSTrend", req, resp, cb);
    }

    /**
     * This API is used to switch to the real server in Anti-DDoS Ultimate.
     * @param {CreateNetReturnRequest} req
     * @param {function(string, CreateNetReturnResponse):void} cb
     * @public
     */
    CreateNetReturn(req, cb) {
        let resp = new CreateNetReturnResponse();
        this.request("CreateNetReturn", req, resp, cb);
    }

    /**
     * This API is used to enable or disable DDoS protection, which is only supported for Anti-DDoS Basic.
     * @param {ModifyDDoSSwitchRequest} req
     * @param {function(string, ModifyDDoSSwitchResponse):void} cb
     * @public
     */
    ModifyDDoSSwitch(req, cb) {
        let resp = new ModifyDDoSSwitchResponse();
        this.request("ModifyDDoSSwitch", req, resp, cb);
    }

    /**
     * This API is used to read or modify DDoS protection level.
     * @param {ModifyDDoSLevelRequest} req
     * @param {function(string, ModifyDDoSLevelResponse):void} cb
     * @public
     */
    ModifyDDoSLevel(req, cb) {
        let resp = new ModifyDDoSLevelResponse();
        this.request("ModifyDDoSLevel", req, resp, cb);
    }

    /**
     * This API is used to get the DDoS attack source list.
     * @param {DescribeDDoSAttackSourceRequest} req
     * @param {function(string, DescribeDDoSAttackSourceResponse):void} cb
     * @public
     */
    DescribeDDoSAttackSource(req, cb) {
        let resp = new DescribeDDoSAttackSourceResponse();
        this.request("DescribeDDoSAttackSource", req, resp, cb);
    }

    /**
     * This API is used to get the CC attack event list.
     * @param {DescribeCCEvListRequest} req
     * @param {function(string, DescribeCCEvListResponse):void} cb
     * @public
     */
    DescribeCCEvList(req, cb) {
        let resp = new DescribeCCEvListResponse();
        this.request("DescribeCCEvList", req, resp, cb);
    }

    /**
     * This API is used to add, delete, enable, or disable a watermark key.
     * @param {ModifyDDoSWaterKeyRequest} req
     * @param {function(string, ModifyDDoSWaterKeyResponse):void} cb
     * @public
     */
    ModifyDDoSWaterKey(req, cb) {
        let resp = new ModifyDDoSWaterKeyResponse();
        this.request("ModifyDDoSWaterKey", req, resp, cb);
    }

    /**
     * This API is used to get the guarantee package list.
     * @param {DescribeInsurePacksRequest} req
     * @param {function(string, DescribeInsurePacksResponse):void} cb
     * @public
     */
    DescribeInsurePacks(req, cb) {
        let resp = new DescribeInsurePacksResponse();
        this.request("DescribeInsurePacks", req, resp, cb);
    }

    /**
     * This API is used to delete one or more layer-4 forwarding rules.
     * @param {DeleteL4RulesRequest} req
     * @param {function(string, DeleteL4RulesResponse):void} cb
     * @public
     */
    DeleteL4Rules(req, cb) {
        let resp = new DeleteL4RulesResponse();
        this.request("DeleteL4Rules", req, resp, cb);
    }

    /**
     * This API is used to get the DDoS attack event list of an Anti-DDoS Ultimate resource.
     * @param {DescribeDDoSNetEvListRequest} req
     * @param {function(string, DescribeDDoSNetEvListResponse):void} cb
     * @public
     */
    DescribeDDoSNetEvList(req, cb) {
        let resp = new DescribeDDoSNetEvListResponse();
        this.request("DescribeDDoSNetEvList", req, resp, cb);
    }

    /**
     * This API is used to enable or disable CC domain name protection.
     * @param {ModifyCCHostProtectionRequest} req
     * @param {function(string, ModifyCCHostProtectionResponse):void} cb
     * @public
     */
    ModifyCCHostProtection(req, cb) {
        let resp = new ModifyCCHostProtectionResponse();
        this.request("ModifyCCHostProtection", req, resp, cb);
    }

    /**
     * This API is used to get the number of resource instances in a region.
     * @param {DescribleRegionCountRequest} req
     * @param {function(string, DescribleRegionCountResponse):void} cb
     * @public
     */
    DescribleRegionCount(req, cb) {
        let resp = new DescribleRegionCountResponse();
        this.request("DescribleRegionCount", req, resp, cb);
    }

    /**
     * This API is used to add a layer-7 (website) forwarding rule.
     * @param {CreateL7RulesRequest} req
     * @param {function(string, CreateL7RulesResponse):void} cb
     * @public
     */
    CreateL7Rules(req, cb) {
        let resp = new CreateL7RulesResponse();
        this.request("CreateL7Rules", req, resp, cb);
    }

    /**
     * This API is used to get the IP unblocking records.
     * @param {DescribeIpUnBlockListRequest} req
     * @param {function(string, DescribeIpUnBlockListResponse):void} cb
     * @public
     */
    DescribeIpUnBlockList(req, cb) {
        let resp = new DescribeIpUnBlockListResponse();
        this.request("DescribeIpUnBlockList", req, resp, cb);
    }

    /**
     * This API is used to get the Tencent Cloud asset information corresponding to an IP of a single IP instance or multi-IP instance, which is supported only for IPs of single IP instances and multi-IP instances.
     * @param {DescribeIPProductInfoRequest} req
     * @param {function(string, DescribeIPProductInfoResponse):void} cb
     * @public
     */
    DescribeIPProductInfo(req, cb) {
        let resp = new DescribeIPProductInfoResponse();
        this.request("DescribeIPProductInfo", req, resp, cb);
    }

    /**
     * This API is used to get a custom CC policy.
     * @param {DescribeCCSelfDefinePolicyRequest} req
     * @param {function(string, DescribeCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    DescribeCCSelfDefinePolicy(req, cb) {
        let resp = new DescribeCCSelfDefinePolicyResponse();
        this.request("DescribeCCSelfDefinePolicy", req, resp, cb);
    }

    /**
     * This API is used to enable or disable an access frequency control rule for CC protection.
     * @param {ModifyCCFrequencyRulesStatusRequest} req
     * @param {function(string, ModifyCCFrequencyRulesStatusResponse):void} cb
     * @public
     */
    ModifyCCFrequencyRulesStatus(req, cb) {
        let resp = new ModifyCCFrequencyRulesStatusResponse();
        this.request("ModifyCCFrequencyRulesStatus", req, resp, cb);
    }

    /**
     * This API is used to modify the CC protection threshold.
     * @param {ModifyCCThresholdRequest} req
     * @param {function(string, ModifyCCThresholdResponse):void} cb
     * @public
     */
    ModifyCCThreshold(req, cb) {
        let resp = new ModifyCCThresholdResponse();
        this.request("ModifyCCThreshold", req, resp, cb);
    }

    /**
     * This API is used to get a layer-4 forwarding rule.
     * @param {DescribleL4RulesRequest} req
     * @param {function(string, DescribleL4RulesResponse):void} cb
     * @public
     */
    DescribleL4Rules(req, cb) {
        let resp = new DescribleL4RulesResponse();
        this.request("DescribleL4Rules", req, resp, cb);
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
     * This API is used to get the CC URL allowlist.
     * @param {DescribeCCUrlAllowRequest} req
     * @param {function(string, DescribeCCUrlAllowResponse):void} cb
     * @public
     */
    DescribeCCUrlAllow(req, cb) {
        let resp = new DescribeCCUrlAllowResponse();
        this.request("DescribeCCUrlAllow", req, resp, cb);
    }

    /**
     * This API is used to export the layer-7 health check configuration.
     * @param {DescribeL7HealthConfigRequest} req
     * @param {function(string, DescribeL7HealthConfigResponse):void} cb
     * @public
     */
    DescribeL7HealthConfig(req, cb) {
        let resp = new DescribeL7HealthConfigResponse();
        this.request("DescribeL7HealthConfig", req, resp, cb);
    }

    /**
     * This API is used to get CC attack metric data, including total requests peak (QPS) and attack requests (QPS).
     * @param {DescribeCCTrendRequest} req
     * @param {function(string, DescribeCCTrendResponse):void} cb
     * @public
     */
    DescribeCCTrend(req, cb) {
        let resp = new DescribeCCTrendResponse();
        this.request("DescribeCCTrend", req, resp, cb);
    }

    /**
     * This API is used to add an access frequency control rule for CC protection.
     * @param {CreateCCFrequencyRulesRequest} req
     * @param {function(string, CreateCCFrequencyRulesResponse):void} cb
     * @public
     */
    CreateCCFrequencyRules(req, cb) {
        let resp = new CreateCCFrequencyRulesResponse();
        this.request("CreateCCFrequencyRules", req, resp, cb);
    }

    /**
     * This API is used to modify the layer-7 forwarding rules.
     * @param {ModifyL7RulesRequest} req
     * @param {function(string, ModifyL7RulesResponse):void} cb
     * @public
     */
    ModifyL7Rules(req, cb) {
        let resp = new ModifyL7RulesResponse();
        this.request("ModifyL7Rules", req, resp, cb);
    }

    /**
     * This API is used to get the CC protection threshold of Anti-DDoS Basic.
     * @param {DescribeBasicCCThresholdRequest} req
     * @param {function(string, DescribeBasicCCThresholdResponse):void} cb
     * @public
     */
    DescribeBasicCCThreshold(req, cb) {
        let resp = new DescribeBasicCCThresholdResponse();
        this.request("DescribeBasicCCThreshold", req, resp, cb);
    }

    /**
     * This API is used to upload layer-7 health check configuration.
     * @param {CreateL7HealthConfigRequest} req
     * @param {function(string, CreateL7HealthConfigResponse):void} cb
     * @public
     */
    CreateL7HealthConfig(req, cb) {
        let resp = new CreateL7HealthConfigResponse();
        this.request("CreateL7HealthConfig", req, resp, cb);
    }

    /**
     * This API is used to get the IP list of a resource.
     * @param {DescribeResIpListRequest} req
     * @param {function(string, DescribeResIpListResponse):void} cb
     * @public
     */
    DescribeResIpList(req, cb) {
        let resp = new DescribeResIpListResponse();
        this.request("DescribeResIpList", req, resp, cb);
    }

    /**
     * This API is used to rename a resource instance, which supports single IP instances, multi-IP instances, Anti-DDoS Advanced, and Anti-DDoS Ultimate.
     * @param {CreateInstanceNameRequest} req
     * @param {function(string, CreateInstanceNameResponse):void} cb
     * @public
     */
    CreateInstanceName(req, cb) {
        let resp = new CreateInstanceNameResponse();
        this.request("CreateInstanceName", req, resp, cb);
    }

    /**
     * This API is used to get the maximum number of layer-7 rules that can be added for Anti-DDoS Advanced.

     * @param {DescribeBGPIPL7RuleMaxCntRequest} req
     * @param {function(string, DescribeBGPIPL7RuleMaxCntResponse):void} cb
     * @public
     */
    DescribeBGPIPL7RuleMaxCnt(req, cb) {
        let resp = new DescribeBGPIPL7RuleMaxCntResponse();
        this.request("DescribeBGPIPL7RuleMaxCnt", req, resp, cb);
    }

    /**
     * This API is used to enable or disable auto-renewal for a resource.
     * @param {ModifyResourceRenewFlagRequest} req
     * @param {function(string, ModifyResourceRenewFlagResponse):void} cb
     * @public
     */
    ModifyResourceRenewFlag(req, cb) {
        let resp = new ModifyResourceRenewFlagResponse();
        this.request("ModifyResourceRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to modify a custom CC policy.
     * @param {ModifyCCSelfDefinePolicyRequest} req
     * @param {function(string, ModifyCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    ModifyCCSelfDefinePolicy(req, cb) {
        let resp = new ModifyCCSelfDefinePolicyResponse();
        this.request("ModifyCCSelfDefinePolicy", req, resp, cb);
    }

    /**
     * This API is used to get details of a specific DDoS attack.
     * @param {DescribeDDoSEvInfoRequest} req
     * @param {function(string, DescribeDDoSEvInfoResponse):void} cb
     * @public
     */
    DescribeDDoSEvInfo(req, cb) {
        let resp = new DescribeDDoSEvInfoResponse();
        this.request("DescribeDDoSEvInfo", req, resp, cb);
    }

    /**
     * This API is used to get an advanced DDoS policy.
     * @param {DescribeDDoSPolicyRequest} req
     * @param {function(string, DescribeDDoSPolicyResponse):void} cb
     * @public
     */
    DescribeDDoSPolicy(req, cb) {
        let resp = new DescribeDDoSPolicyResponse();
        this.request("DescribeDDoSPolicy", req, resp, cb);
    }


}
module.exports = DayuClient;
