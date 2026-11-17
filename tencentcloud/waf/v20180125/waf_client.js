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
const DescribeLLMWafDLPRulesResponse = models.DescribeLLMWafDLPRulesResponse;
const AddLLMSdkAccessResponse = models.AddLLMSdkAccessResponse;
const ModifyUserLevelResponse = models.ModifyUserLevelResponse;
const DescribeSkillSecScanResultResponse = models.DescribeSkillSecScanResultResponse;
const ModifyWebshellStatusRequest = models.ModifyWebshellStatusRequest;
const WafRuleLimit = models.WafRuleLimit;
const DescribeUserClbWafRegionsResponse = models.DescribeUserClbWafRegionsResponse;
const AddAntiFakeUrlRequest = models.AddAntiFakeUrlRequest;
const DeleteOwaspWhiteRuleRequest = models.DeleteOwaspWhiteRuleRequest;
const DescribeAntiLeakageItem = models.DescribeAntiLeakageItem;
const LoadBalancerPackageNew = models.LoadBalancerPackageNew;
const DescribeOwaspWhiteRulesRequest = models.DescribeOwaspWhiteRulesRequest;
const DescribeLLMWafProtectRulesResponse = models.DescribeLLMWafProtectRulesResponse;
const ModifyHostRequest = models.ModifyHostRequest;
const LLMDetectResult = models.LLMDetectResult;
const DeleteHostRequest = models.DeleteHostRequest;
const DescribeCertificateVerifyResultResponse = models.DescribeCertificateVerifyResultResponse;
const ModifyUserSignatureRuleResponse = models.ModifyUserSignatureRuleResponse;
const ModifyInstanceNameResponse = models.ModifyInstanceNameResponse;
const GenerateDealsAndPayNewRequest = models.GenerateDealsAndPayNewRequest;
const DeleteCustomWhiteRuleResponse = models.DeleteCustomWhiteRuleResponse;
const DeleteLLMSdkAccessRequest = models.DeleteLLMSdkAccessRequest;
const MajorEventsPkg = models.MajorEventsPkg;
const DescribeLLMContentRuleListResponse = models.DescribeLLMContentRuleListResponse;
const LLMSensitiveValueLevel = models.LLMSensitiveValueLevel;
const ModifyLLMWafProtectRuleResponse = models.ModifyLLMWafProtectRuleResponse;
const DescribeModuleStatusResponse = models.DescribeModuleStatusResponse;
const LLMOptionsItem = models.LLMOptionsItem;
const KVInt = models.KVInt;
const ModifyLLMWafProtectRuleRequest = models.ModifyLLMWafProtectRuleRequest;
const DescribeWebshellStatusRequest = models.DescribeWebshellStatusRequest;
const GetAttackHistogramResponse = models.GetAttackHistogramResponse;
const KeyWordInfo = models.KeyWordInfo;
const FiltersItemNew = models.FiltersItemNew;
const DeleteSpartaProtectionResponse = models.DeleteSpartaProtectionResponse;
const PiechartItem = models.PiechartItem;
const DeleteHostResponse = models.DeleteHostResponse;
const ModifyApiAnalyzeStatusResponse = models.ModifyApiAnalyzeStatusResponse;
const LLMHourBillTrendItem = models.LLMHourBillTrendItem;
const SessionData = models.SessionData;
const ModifyCustomRuleResponse = models.ModifyCustomRuleResponse;
const FreshAntiFakeUrlRequest = models.FreshAntiFakeUrlRequest;
const SpartaProtectionPort = models.SpartaProtectionPort;
const ModifyOwaspWhiteRuleRequest = models.ModifyOwaspWhiteRuleRequest;
const ClbObject = models.ClbObject;
const DescribeSessionRequest = models.DescribeSessionRequest;
const DescribePolicyStatusRequest = models.DescribePolicyStatusRequest;
const ModifyIpAccessControlRequest = models.ModifyIpAccessControlRequest;
const ModifyApiAnalyzeStatusRequest = models.ModifyApiAnalyzeStatusRequest;
const DescribeDomainCountInfoResponse = models.DescribeDomainCountInfoResponse;
const ModifyHostModeRequest = models.ModifyHostModeRequest;
const ModifyAntiInfoLeakRuleStatusRequest = models.ModifyAntiInfoLeakRuleStatusRequest;
const DescribeCiphersDetailResponse = models.DescribeCiphersDetailResponse;
const DescribeCustomRuleListRequest = models.DescribeCustomRuleListRequest;
const DeleteIpAccessControlV2Response = models.DeleteIpAccessControlV2Response;
const DescribeOwaspRulesResponse = models.DescribeOwaspRulesResponse;
const StrategyForAntiInfoLeak = models.StrategyForAntiInfoLeak;
const AddSpartaProtectionResponse = models.AddSpartaProtectionResponse;
const DescribeUserDomainInfoRequest = models.DescribeUserDomainInfoRequest;
const HybridPkg = models.HybridPkg;
const IpAccessControlData = models.IpAccessControlData;
const DescribeHostResponse = models.DescribeHostResponse;
const ModifyLLMKeywordLibraryResponse = models.ModifyLLMKeywordLibraryResponse;
const UpsertCCRuleResponse = models.UpsertCCRuleResponse;
const DescribeHostRequest = models.DescribeHostRequest;
const DeleteCustomRuleRequest = models.DeleteCustomRuleRequest;
const JobDateTime = models.JobDateTime;
const DescribeHostsRequest = models.DescribeHostsRequest;
const ModifyCustomWhiteRuleStatusRequest = models.ModifyCustomWhiteRuleStatusRequest;
const ModifyLLMStatusRequest = models.ModifyLLMStatusRequest;
const ClbWafRegionItem = models.ClbWafRegionItem;
const DescribeFindDomainListRequest = models.DescribeFindDomainListRequest;
const ModifyInstanceElasticModeResponse = models.ModifyInstanceElasticModeResponse;
const TargetEntity = models.TargetEntity;
const CCRuleItem = models.CCRuleItem;
const DescribeDomainCountInfoRequest = models.DescribeDomainCountInfoRequest;
const DescribeCustomWhiteRuleResponse = models.DescribeCustomWhiteRuleResponse;
const ModifySpartaProtectionRequest = models.ModifySpartaProtectionRequest;
const DescribeAntiFakeRulesRequest = models.DescribeAntiFakeRulesRequest;
const DescribeVipInfoRequest = models.DescribeVipInfoRequest;
const ModifyLLMContentRuleRequest = models.ModifyLLMContentRuleRequest;
const DescribeFindDomainListResponse = models.DescribeFindDomainListResponse;
const DeleteSessionResponse = models.DeleteSessionResponse;
const ModifyUserSignatureRuleRequest = models.ModifyUserSignatureRuleRequest;
const ModifyWebshellStatusResponse = models.ModifyWebshellStatusResponse;
const DescribeUserDomainInfoResponse = models.DescribeUserDomainInfoResponse;
const TLSVersion = models.TLSVersion;
const ModifyOwaspRuleTypeActionResponse = models.ModifyOwaspRuleTypeActionResponse;
const LoadBalancer = models.LoadBalancer;
const DescribeCustomRulesRspRuleListItem = models.DescribeCustomRulesRspRuleListItem;
const ModifyAntiInfoLeakRulesResponse = models.ModifyAntiInfoLeakRulesResponse;
const QpsData = models.QpsData;
const AddCustomWhiteRuleResponse = models.AddCustomWhiteRuleResponse;
const DescribeLLMWafProtectRulesRequest = models.DescribeLLMWafProtectRulesRequest;
const DescribeLLMContentRuleListRequest = models.DescribeLLMContentRuleListRequest;
const SwitchElasticModeRequest = models.SwitchElasticModeRequest;
const HostDel = models.HostDel;
const DescribeModuleStatusRequest = models.DescribeModuleStatusRequest;
const ModifyHostModeResponse = models.ModifyHostModeResponse;
const DeleteLLMContentRuleRequest = models.DeleteLLMContentRuleRequest;
const DescribeHostsResponse = models.DescribeHostsResponse;
const DomainInfo = models.DomainInfo;
const DescribeDomainsResponse = models.DescribeDomainsResponse;
const UploadSkillSecScanRequest = models.UploadSkillSecScanRequest;
const AddAntiFakeUrlResponse = models.AddAntiFakeUrlResponse;
const ModifyOwaspWhiteRuleResponse = models.ModifyOwaspWhiteRuleResponse;
const UrlDetectResult = models.UrlDetectResult;
const ModifySpartaProtectionResponse = models.ModifySpartaProtectionResponse;
const SwitchElasticModeResponse = models.SwitchElasticModeResponse;
const CCRuleLists = models.CCRuleLists;
const ModifyAntiFakeUrlStatusRequest = models.ModifyAntiFakeUrlStatusRequest;
const UploadSkillSecScanResponse = models.UploadSkillSecScanResponse;
const DeleteLLMKeywordLibraryResponse = models.DeleteLLMKeywordLibraryResponse;
const TLSCiphers = models.TLSCiphers;
const ResponseCode = models.ResponseCode;
const ModifyLLMContentRuleStatusResponse = models.ModifyLLMContentRuleStatusResponse;
const DescribeAntiInfoLeakageRulesRequest = models.DescribeAntiInfoLeakageRulesRequest;
const CreateHostResponse = models.CreateHostResponse;
const LLMHourBillDetailItem = models.LLMHourBillDetailItem;
const ModifyBotStatusRequest = models.ModifyBotStatusRequest;
const ModifyHostFlowModeRequest = models.ModifyHostFlowModeRequest;
const CreateHostRequest = models.CreateHostRequest;
const GetInstanceQpsLimitResponse = models.GetInstanceQpsLimitResponse;
const CreateDealsRequest = models.CreateDealsRequest;
const ModifyCustomWhiteRuleResponse = models.ModifyCustomWhiteRuleResponse;
const SearchItem = models.SearchItem;
const ApiPkg = models.ApiPkg;
const DescribePortsRequest = models.DescribePortsRequest;
const ModifyLLMWafDLPRuleResponse = models.ModifyLLMWafDLPRuleResponse;
const DescribeTlsVersionRequest = models.DescribeTlsVersionRequest;
const RuleItem = models.RuleItem;
const DealData = models.DealData;
const LLMBillItemFee = models.LLMBillItemFee;
const DescribeDomainDetailsSaasRequest = models.DescribeDomainDetailsSaasRequest;
const ValueLevel = models.ValueLevel;
const CreateDealsGoodsDetail = models.CreateDealsGoodsDetail;
const ModifyLLMWafToolCallRuleResponse = models.ModifyLLMWafToolCallRuleResponse;
const DescribePeakPointsResponse = models.DescribePeakPointsResponse;
const ModifyInstanceRenewFlagRequest = models.ModifyInstanceRenewFlagRequest;
const ModifyLLMSdkAccessRequest = models.ModifyLLMSdkAccessRequest;
const GoodsDetailNew = models.GoodsDetailNew;
const DescribeLLMKeywordLibraryRequest = models.DescribeLLMKeywordLibraryRequest;
const ToolCallResult = models.ToolCallResult;
const BatchIpAccessControlItem = models.BatchIpAccessControlItem;
const PortInfo = models.PortInfo;
const FraudPkg = models.FraudPkg;
const DescribeDomainDetailsClbResponse = models.DescribeDomainDetailsClbResponse;
const DescribeIpAccessControlRequest = models.DescribeIpAccessControlRequest;
const PromptDetectResult = models.PromptDetectResult;
const ModifyOwaspRuleTypeActionRequest = models.ModifyOwaspRuleTypeActionRequest;
const ModifyInstanceQpsLimitResponse = models.ModifyInstanceQpsLimitResponse;
const ReqUserRule = models.ReqUserRule;
const DescribeLLMHourBillDetailResponse = models.DescribeLLMHourBillDetailResponse;
const GoodNews = models.GoodNews;
const DeleteLLMSdkAccessResponse = models.DeleteLLMSdkAccessResponse;
const DeleteOwaspRuleStatusResponse = models.DeleteOwaspRuleStatusResponse;
const DescribeDomainsRequest = models.DescribeDomainsRequest;
const DescribeUserClbWafRegionsRequest = models.DescribeUserClbWafRegionsRequest;
const AddLLMSdkAccessRequest = models.AddLLMSdkAccessRequest;
const AddAntiInfoLeakRulesResponse = models.AddAntiInfoLeakRulesResponse;
const QPSPackageNew = models.QPSPackageNew;
const DeleteAntiInfoLeakRuleResponse = models.DeleteAntiInfoLeakRuleResponse;
const DescribeRuleLimitResponse = models.DescribeRuleLimitResponse;
const ModifyOwaspRuleTypeLevelRequest = models.ModifyOwaspRuleTypeLevelRequest;
const ModifyLLMKeywordLibraryRequest = models.ModifyLLMKeywordLibraryRequest;
const DescribeLLMWafToolCallRulesResponse = models.DescribeLLMWafToolCallRulesResponse;
const DescribeHistogramResponse = models.DescribeHistogramResponse;
const RefreshAccessCheckResultResponse = models.RefreshAccessCheckResultResponse;
const CreateOwaspWhiteRuleRequest = models.CreateOwaspWhiteRuleRequest;
const SkillScanRuleHit = models.SkillScanRuleHit;
const ModifyHostResponse = models.ModifyHostResponse;
const ModifyLLMWafDLPRuleRequest = models.ModifyLLMWafDLPRuleRequest;
const DescribeCertificateVerifyResultRequest = models.DescribeCertificateVerifyResultRequest;
const CreateIpAccessControlRequest = models.CreateIpAccessControlRequest;
const MiniPkg = models.MiniPkg;
const DescribeIpAccessControlResponse = models.DescribeIpAccessControlResponse;
const ModifyProtectionStatusRequest = models.ModifyProtectionStatusRequest;
const CCRuleData = models.CCRuleData;
const DescribeLLMSdkAccessResponse = models.DescribeLLMSdkAccessResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const IpAccessControlItem = models.IpAccessControlItem;
const SkillScanUploadData = models.SkillScanUploadData;
const ModifyOwaspRuleStatusResponse = models.ModifyOwaspRuleStatusResponse;
const UpsertSessionResponse = models.UpsertSessionResponse;
const DeleteSessionRequest = models.DeleteSessionRequest;
const LLMKeywordLibrary = models.LLMKeywordLibrary;
const SearchAttackLogRequest = models.SearchAttackLogRequest;
const DescribeLLMSdkAccessRequest = models.DescribeLLMSdkAccessRequest;
const CreateIpAccessControlResponse = models.CreateIpAccessControlResponse;
const SessionItem = models.SessionItem;
const ModifyObjectRequest = models.ModifyObjectRequest;
const DescribeCustomWhiteRuleRequest = models.DescribeCustomWhiteRuleRequest;
const DeleteAntiFakeUrlResponse = models.DeleteAntiFakeUrlResponse;
const Area = models.Area;
const DescribeUserLevelResponse = models.DescribeUserLevelResponse;
const IpAccessControlParam = models.IpAccessControlParam;
const IntentContent = models.IntentContent;
const DescribeCustomRuleListResponse = models.DescribeCustomRuleListResponse;
const GetInstanceQpsLimitRequest = models.GetInstanceQpsLimitRequest;
const HostRecord = models.HostRecord;
const ModifyUserLevelRequest = models.ModifyUserLevelRequest;
const ModifyLLMWafToolCallRuleRequest = models.ModifyLLMWafToolCallRuleRequest;
const ModifyInstanceQpsLimitRequest = models.ModifyInstanceQpsLimitRequest;
const FreshAntiFakeUrlResponse = models.FreshAntiFakeUrlResponse;
const DeleteSpartaProtectionRequest = models.DeleteSpartaProtectionRequest;
const UserDomainInfo = models.UserDomainInfo;
const DescribeAntiFakeRulesResponse = models.DescribeAntiFakeRulesResponse;
const ImportIpAccessControlRequest = models.ImportIpAccessControlRequest;
const GetAttackTotalCountRequest = models.GetAttackTotalCountRequest;
const DescribeAttackOverviewResponse = models.DescribeAttackOverviewResponse;
const DescribeCCRuleListResponse = models.DescribeCCRuleListResponse;
const PeakPointsItem = models.PeakPointsItem;
const ModifyAntiFakeUrlRequest = models.ModifyAntiFakeUrlRequest;
const DescribeDomainDetailsClbRequest = models.DescribeDomainDetailsClbRequest;
const TimedJob = models.TimedJob;
const DomainPackageNew = models.DomainPackageNew;
const ModifyDomainsCLSStatusResponse = models.ModifyDomainsCLSStatusResponse;
const ModifyBotStatusResponse = models.ModifyBotStatusResponse;
const ModifyCustomRuleStatusResponse = models.ModifyCustomRuleStatusResponse;
const DomainRuleId = models.DomainRuleId;
const PortItem = models.PortItem;
const DescribeOwaspRuleTypesRequest = models.DescribeOwaspRuleTypesRequest;
const ModifyHostStatusResponse = models.ModifyHostStatusResponse;
const ModifyCustomRuleStatusRequest = models.ModifyCustomRuleStatusRequest;
const AddCustomRuleResponse = models.AddCustomRuleResponse;
const OwaspRuleType = models.OwaspRuleType;
const ModifySpartaProtectionModeRequest = models.ModifySpartaProtectionModeRequest;
const DescribeAttackOverviewRequest = models.DescribeAttackOverviewRequest;
const DescribeUserLevelRequest = models.DescribeUserLevelRequest;
const InstanceInfo = models.InstanceInfo;
const HostStatus = models.HostStatus;
const ModifyAntiFakeUrlResponse = models.ModifyAntiFakeUrlResponse;
const DescribeBatchIpAccessControlRequest = models.DescribeBatchIpAccessControlRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const ModifyAntiInfoLeakRulesRequest = models.ModifyAntiInfoLeakRulesRequest;
const OwaspWhiteRule = models.OwaspWhiteRule;
const DescribeBatchIpAccessControlResponse = models.DescribeBatchIpAccessControlResponse;
const DescribeDomainDetailsSaasResponse = models.DescribeDomainDetailsSaasResponse;
const ExportLLMKeywordLibRequest = models.ExportLLMKeywordLibRequest;
const ModifyAntiInfoLeakRuleStatusResponse = models.ModifyAntiInfoLeakRuleStatusResponse;
const DeleteIpAccessControlV2Request = models.DeleteIpAccessControlV2Request;
const DescribeTopAttackDomainRequest = models.DescribeTopAttackDomainRequest;
const ModifyDomainIpv6StatusResponse = models.ModifyDomainIpv6StatusResponse;
const DescribeHostLimitResponse = models.DescribeHostLimitResponse;
const DeleteAntiFakeUrlRequest = models.DeleteAntiFakeUrlRequest;
const DescribeSpartaProtectionInfoRequest = models.DescribeSpartaProtectionInfoRequest;
const CacheUrlItems = models.CacheUrlItems;
const Strategy = models.Strategy;
const GenerateDealsAndPayNewResponse = models.GenerateDealsAndPayNewResponse;
const DescribeCCRuleRequest = models.DescribeCCRuleRequest;
const IntentDetectResult = models.IntentDetectResult;
const DescribeLLMKeywordLibraryResponse = models.DescribeLLMKeywordLibraryResponse;
const VipInfo = models.VipInfo;
const DeleteOwaspRuleStatusRequest = models.DeleteOwaspRuleStatusRequest;
const DescribeTopAttackDomainResponse = models.DescribeTopAttackDomainResponse;
const ModifyLLMSdkAccessResponse = models.ModifyLLMSdkAccessResponse;
const DeleteCustomRuleResponse = models.DeleteCustomRuleResponse;
const SkillScanCapabilityTag = models.SkillScanCapabilityTag;
const DescribeHistogramRequest = models.DescribeHistogramRequest;
const DeleteCCRuleResponse = models.DeleteCCRuleResponse;
const UpsertCCRuleRequest = models.UpsertCCRuleRequest;
const ModifyLLMStatusResponse = models.ModifyLLMStatusResponse;
const ModifyProtectionStatusResponse = models.ModifyProtectionStatusResponse;
const ModifyOwaspRuleStatusRequest = models.ModifyOwaspRuleStatusRequest;
const ModifyDomainPostActionRequest = models.ModifyDomainPostActionRequest;
const BotPkg = models.BotPkg;
const SearchAttackLogResponse = models.SearchAttackLogResponse;
const RefreshAccessCheckResultRequest = models.RefreshAccessCheckResultRequest;
const WebshellStatus = models.WebshellStatus;
const DescribeSpartaProtectionInfoResponse = models.DescribeSpartaProtectionInfoResponse;
const ModifyModuleStatusRequest = models.ModifyModuleStatusRequest;
const DeleteLLMContentRuleResponse = models.DeleteLLMContentRuleResponse;
const ModifyInstanceNameRequest = models.ModifyInstanceNameRequest;
const DescribePortsResponse = models.DescribePortsResponse;
const ModifyCustomRuleRequest = models.ModifyCustomRuleRequest;
const ModifyOwaspRuleTypeLevelResponse = models.ModifyOwaspRuleTypeLevelResponse;
const DescribeLLMContentSecCheckResponse = models.DescribeLLMContentSecCheckResponse;
const DescribePeakPointsRequest = models.DescribePeakPointsRequest;
const ModifyHostFlowModeResponse = models.ModifyHostFlowModeResponse;
const DescribeAntiInfoLeakRulesStrategyItem = models.DescribeAntiInfoLeakRulesStrategyItem;
const DescribeCiphersDetailRequest = models.DescribeCiphersDetailRequest;
const CCRuleItems = models.CCRuleItems;
const ModifyDomainIpv6StatusRequest = models.ModifyDomainIpv6StatusRequest;
const SkillScanQueryData = models.SkillScanQueryData;
const LLMSdkAccessItem = models.LLMSdkAccessItem;
const DescribeAntiInfoLeakageRulesResponse = models.DescribeAntiInfoLeakageRulesResponse;
const DescribeSkillSecScanResultRequest = models.DescribeSkillSecScanResultRequest;
const OwaspRule = models.OwaspRule;
const GetAttackHistogramRequest = models.GetAttackHistogramRequest;
const ImageResult = models.ImageResult;
const DescribeAttackTypeRequest = models.DescribeAttackTypeRequest;
const CategoryGroup = models.CategoryGroup;
const ModifyCustomWhiteRuleRequest = models.ModifyCustomWhiteRuleRequest;
const DeleteCustomWhiteRuleRequest = models.DeleteCustomWhiteRuleRequest;
const ModifyInstanceRenewFlagResponse = models.ModifyInstanceRenewFlagResponse;
const ModifyOwaspRuleTypeStatusResponse = models.ModifyOwaspRuleTypeStatusResponse;
const ImportIpAccessControlResponse = models.ImportIpAccessControlResponse;
const AddCustomWhiteRuleRequest = models.AddCustomWhiteRuleRequest;
const CronJob = models.CronJob;
const DeleteOwaspWhiteRuleResponse = models.DeleteOwaspWhiteRuleResponse;
const DomainsPartInfo = models.DomainsPartInfo;
const AddAntiInfoLeakRulesRequest = models.AddAntiInfoLeakRulesRequest;
const AddSpartaProtectionRequest = models.AddSpartaProtectionRequest;
const ModifyModuleStatusResponse = models.ModifyModuleStatusResponse;
const RuleDetail = models.RuleDetail;
const AttackLogInfo = models.AttackLogInfo;
const ModifyOwaspRuleTypeStatusRequest = models.ModifyOwaspRuleTypeStatusRequest;
const SkillScanItem = models.SkillScanItem;
const LogHistogramInfo = models.LogHistogramInfo;
const DescribeDomainVerifyResultRequest = models.DescribeDomainVerifyResultRequest;
const CreateDealsGoods = models.CreateDealsGoods;
const DescribeLLMWafToolCallRulesRequest = models.DescribeLLMWafToolCallRulesRequest;
const ModifySpartaProtectionModeResponse = models.ModifySpartaProtectionModeResponse;
const SkillRuleCatalogItem = models.SkillRuleCatalogItem;
const ModifyCustomWhiteRuleStatusResponse = models.ModifyCustomWhiteRuleStatusResponse;
const BatchIpAccessControlData = models.BatchIpAccessControlData;
const DeleteLLMKeywordLibraryRequest = models.DeleteLLMKeywordLibraryRequest;
const BotQPS = models.BotQPS;
const DescribeLLMHourBillDetailRequest = models.DescribeLLMHourBillDetailRequest;
const DescribePolicyStatusResponse = models.DescribePolicyStatusResponse;
const GetAttackTotalCountResponse = models.GetAttackTotalCountResponse;
const DescribeLLMWafDLPRulesRequest = models.DescribeLLMWafDLPRulesRequest;
const CreateDealsResponse = models.CreateDealsResponse;
const DescribeOwaspRulesRequest = models.DescribeOwaspRulesRequest;
const DescribeCCRuleListRequest = models.DescribeCCRuleListRequest;
const ModifyLLMContentRuleStatusRequest = models.ModifyLLMContentRuleStatusRequest;
const DescribeDomainVerifyResultResponse = models.DescribeDomainVerifyResultResponse;
const AddCustomRuleRequest = models.AddCustomRuleRequest;
const DeleteCCRuleRequest = models.DeleteCCRuleRequest;
const DescribeAttackTypeResponse = models.DescribeAttackTypeResponse;
const DescribeCCRuleResponse = models.DescribeCCRuleResponse;
const ModifyObjectResponse = models.ModifyObjectResponse;
const ModifyAntiFakeUrlStatusResponse = models.ModifyAntiFakeUrlStatusResponse;
const DescribeOwaspRuleTypesResponse = models.DescribeOwaspRuleTypesResponse;
const ModifyInstanceElasticModeRequest = models.ModifyInstanceElasticModeRequest;
const DescribeWebshellStatusResponse = models.DescribeWebshellStatusResponse;
const ModifyLLMContentRuleResponse = models.ModifyLLMContentRuleResponse;
const FindAllDomainDetail = models.FindAllDomainDetail;
const DeleteAntiInfoLeakRuleRequest = models.DeleteAntiInfoLeakRuleRequest;
const DescribeVipInfoResponse = models.DescribeVipInfoResponse;
const ModifyIpAccessControlResponse = models.ModifyIpAccessControlResponse;
const DescribeRuleLimitRequest = models.DescribeRuleLimitRequest;
const UrlHitInfo = models.UrlHitInfo;
const ModifyDomainPostActionResponse = models.ModifyDomainPostActionResponse;
const ModifyDomainsCLSStatusRequest = models.ModifyDomainsCLSStatusRequest;
const DescribeTlsVersionResponse = models.DescribeTlsVersionResponse;
const DescribeLLMContentSecCheckRequest = models.DescribeLLMContentSecCheckRequest;
const DescribeSessionResponse = models.DescribeSessionResponse;
const UpsertSessionRequest = models.UpsertSessionRequest;
const DescribeHostLimitRequest = models.DescribeHostLimitRequest;
const DescribeOwaspWhiteRulesResponse = models.DescribeOwaspWhiteRulesResponse;
const ClbDomainsInfo = models.ClbDomainsInfo;
const DescribeObjectsResponse = models.DescribeObjectsResponse;
const ExportLLMKeywordLibResponse = models.ExportLLMKeywordLibResponse;
const MiniExtendPkg = models.MiniExtendPkg;
const CreateOwaspWhiteRuleResponse = models.CreateOwaspWhiteRuleResponse;
const DomainURI = models.DomainURI;
const DescribeObjectsRequest = models.DescribeObjectsRequest;
const ModifyHostStatusRequest = models.ModifyHostStatusRequest;


/**
 * waf client
 * @class
 */
class WafClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("waf.intl.tencentcloudapi.com", "2018-01-25", credential, region, profile);
    }
    
    /**
     * Query the top N attack types for a specified domain
     * @param {DescribeAttackTypeRequest} req
     * @param {function(string, DescribeAttackTypeResponse):void} cb
     * @public
     */
    DescribeAttackType(req, cb) {
        let resp = new DescribeAttackTypeResponse();
        this.request("DescribeAttackType", req, resp, cb);
    }

    /**
     * This API is used to query DLP rules.
     * @param {DescribeLLMWafDLPRulesRequest} req
     * @param {function(string, DescribeLLMWafDLPRulesResponse):void} cb
     * @public
     */
    DescribeLLMWafDLPRules(req, cb) {
        let resp = new DescribeLLMWafDLPRulesResponse();
        this.request("DescribeLLMWafDLPRules", req, resp, cb);
    }

    /**
     * Obtain CLB WAF domain details
     * @param {DescribeDomainDetailsClbRequest} req
     * @param {function(string, DescribeDomainDetailsClbResponse):void} cb
     * @public
     */
    DescribeDomainDetailsClb(req, cb) {
        let resp = new DescribeDomainDetailsClbResponse();
        this.request("DescribeDomainDetailsClb", req, resp, cb);
    }

    /**
     * Query detailed information of all user domains
     * @param {DescribeDomainsRequest} req
     * @param {function(string, DescribeDomainsResponse):void} cb
     * @public
     */
    DescribeDomains(req, cb) {
        let resp = new DescribeDomainsResponse();
        this.request("DescribeDomains", req, resp, cb);
    }

    /**
     * This API is used to generate a bar chart for the generation time of attack logs.
     * @param {GetAttackHistogramRequest} req
     * @param {function(string, GetAttackHistogramResponse):void} cb
     * @public
     */
    GetAttackHistogram(req, cb) {
        let resp = new GetAttackHistogramResponse();
        this.request("GetAttackHistogram", req, resp, cb);
    }

    /**
     * This API is used to query LLM rule requests.
     * @param {DescribeLLMWafProtectRulesRequest} req
     * @param {function(string, DescribeLLMWafProtectRulesResponse):void} cb
     * @public
     */
    DescribeLLMWafProtectRules(req, cb) {
        let resp = new DescribeLLMWafProtectRulesResponse();
        this.request("DescribeLLMWafProtectRules", req, resp, cb);
    }

    /**
     * Display total attack count by querying based on conditions
     * @param {GetAttackTotalCountRequest} req
     * @param {function(string, GetAttackTotalCountResponse):void} cb
     * @public
     */
    GetAttackTotalCount(req, cb) {
        let resp = new GetAttackTotalCountResponse();
        this.request("GetAttackTotalCount", req, resp, cb);
    }

    /**
     * This API is used to import IP allowlists/blocklists.
     * @param {ImportIpAccessControlRequest} req
     * @param {function(string, ImportIpAccessControlResponse):void} cb
     * @public
     */
    ImportIpAccessControl(req, cb) {
        let resp = new ImportIpAccessControlResponse();
        this.request("ImportIpAccessControl", req, resp, cb);
    }

    /**
     * Add precision allowlist rules
     * @param {AddCustomWhiteRuleRequest} req
     * @param {function(string, AddCustomWhiteRuleResponse):void} cb
     * @public
     */
    AddCustomWhiteRule(req, cb) {
        let resp = new AddCustomWhiteRuleResponse();
        this.request("AddCustomWhiteRule", req, resp, cb);
    }

    /**
     * This API is used to delete a user rule engine allowlist.
     * @param {DeleteOwaspWhiteRuleRequest} req
     * @param {function(string, DeleteOwaspWhiteRuleResponse):void} cb
     * @public
     */
    DeleteOwaspWhiteRule(req, cb) {
        let resp = new DeleteOwaspWhiteRuleResponse();
        this.request("DeleteOwaspWhiteRule", req, resp, cb);
    }

    /**
     * This API is used to edit a custom rule.
     * @param {ModifyCustomRuleRequest} req
     * @param {function(string, ModifyCustomRuleResponse):void} cb
     * @public
     */
    ModifyCustomRule(req, cb) {
        let resp = new ModifyCustomRuleResponse();
        this.request("ModifyCustomRule", req, resp, cb);
    }

    /**
     * Set elastic QPS limit for package instances
     * @param {ModifyInstanceQpsLimitRequest} req
     * @param {function(string, ModifyInstanceQpsLimitResponse):void} cb
     * @public
     */
    ModifyInstanceQpsLimit(req, cb) {
        let resp = new ModifyInstanceQpsLimitResponse();
        this.request("ModifyInstanceQpsLimit", req, resp, cb);
    }

    /**
     * WAF Sparta - Obtain protection domain information
     * @param {DescribeSpartaProtectionInfoRequest} req
     * @param {function(string, DescribeSpartaProtectionInfoResponse):void} cb
     * @public
     */
    DescribeSpartaProtectionInfo(req, cb) {
        let resp = new DescribeSpartaProtectionInfoResponse();
        this.request("DescribeSpartaProtectionInfo", req, resp, cb);
    }

    /**
     * Delete precision allowlist rules
     * @param {DeleteCustomWhiteRuleRequest} req
     * @param {function(string, DeleteCustomWhiteRuleResponse):void} cb
     * @public
     */
    DeleteCustomWhiteRule(req, cb) {
        let resp = new DeleteCustomWhiteRuleResponse();
        this.request("DeleteCustomWhiteRule", req, resp, cb);
    }

    /**
     * Add access control (from custom policy)
     * @param {AddCustomRuleRequest} req
     * @param {function(string, AddCustomRuleResponse):void} cb
     * @public
     */
    AddCustomRule(req, cb) {
        let resp = new AddCustomRuleResponse();
        this.request("AddCustomRule", req, resp, cb);
    }

    /**
     * This API is used to upload a Skill ZIP file and trigger asynchronous security detection.
     * @param {UploadSkillSecScanRequest} req
     * @param {function(string, UploadSkillSecScanResponse):void} cb
     * @public
     */
    UploadSkillSecScan(req, cb) {
        let resp = new UploadSkillSecScanResponse();
        this.request("UploadSkillSecScan", req, resp, cb);
    }

    /**
     * This API is used to unlock the Door God rule status.
     * @param {DeleteOwaspRuleStatusRequest} req
     * @param {function(string, DeleteOwaspRuleStatusResponse):void} cb
     * @public
     */
    DeleteOwaspRuleStatus(req, cb) {
        let resp = new DeleteOwaspRuleStatusResponse();
        this.request("DeleteOwaspRuleStatus", req, resp, cb);
    }

    /**
     * Delete custom rule
     * @param {DeleteCustomRuleRequest} req
     * @param {function(string, DeleteCustomRuleResponse):void} cb
     * @public
     */
    DeleteCustomRule(req, cb) {
        let resp = new DeleteCustomRuleResponse();
        this.request("DeleteCustomRule", req, resp, cb);
    }

    /**
     * This API is used to add an access configuration in llmwaf-sdk.
     * @param {AddLLMSdkAccessRequest} req
     * @param {function(string, AddLLMSdkAccessResponse):void} cb
     * @public
     */
    AddLLMSdkAccess(req, cb) {
        let resp = new AddLLMSdkAccessResponse();
        this.request("AddLLMSdkAccess", req, resp, cb);
    }

    /**
     * Edit a tamper-proof URL
     * @param {ModifyAntiFakeUrlRequest} req
     * @param {function(string, ModifyAntiFakeUrlResponse):void} cb
     * @public
     */
    ModifyAntiFakeUrl(req, cb) {
        let resp = new ModifyAntiFakeUrlResponse();
        this.request("ModifyAntiFakeUrl", req, resp, cb);
    }

    /**
     * This API is used to edit the configuration of domain names protected by SaaS WAF.
     * @param {ModifySpartaProtectionRequest} req
     * @param {function(string, ModifySpartaProtectionResponse):void} cb
     * @public
     */
    ModifySpartaProtection(req, cb) {
        let resp = new ModifySpartaProtectionResponse();
        this.request("ModifySpartaProtection", req, resp, cb);
    }

    /**
     * Modify the QPS elastic billing switch for an instance
     * @param {ModifyInstanceElasticModeRequest} req
     * @param {function(string, ModifyInstanceElasticModeResponse):void} cb
     * @public
     */
    ModifyInstanceElasticMode(req, cb) {
        let resp = new ModifyInstanceElasticModeResponse();
        this.request("ModifyInstanceElasticMode", req, resp, cb);
    }

    /**
     * Query Domain Information for SaaS and CLB
     * @param {DescribeUserDomainInfoRequest} req
     * @param {function(string, DescribeUserDomainInfoResponse):void} cb
     * @public
     */
    DescribeUserDomainInfo(req, cb) {
        let resp = new DescribeUserDomainInfoResponse();
        this.request("DescribeUserDomainInfo", req, resp, cb);
    }

    /**
     * WAF CC V2 deletion API
     * @param {DeleteCCRuleRequest} req
     * @param {function(string, DeleteCCRuleResponse):void} cb
     * @public
     */
    DeleteCCRule(req, cb) {
        let resp = new DeleteCCRuleResponse();
        this.request("DeleteCCRule", req, resp, cb);
    }

    /**
     * Obtain the information leakage prevention rule list
     * @param {DescribeAntiInfoLeakageRulesRequest} req
     * @param {function(string, DescribeAntiInfoLeakageRulesResponse):void} cb
     * @public
     */
    DescribeAntiInfoLeakageRules(req, cb) {
        let resp = new DescribeAntiInfoLeakageRulesResponse();
        this.request("DescribeAntiInfoLeakageRules", req, resp, cb);
    }

    /**
     * This API is used to query the rule types of the rule engine.
     * @param {DescribeOwaspRuleTypesRequest} req
     * @param {function(string, DescribeOwaspRuleTypesResponse):void} cb
     * @public
     */
    DescribeOwaspRuleTypes(req, cb) {
        let resp = new DescribeOwaspRuleTypesResponse();
        this.request("DescribeOwaspRuleTypes", req, resp, cb);
    }

    /**
     * This API is used to export lexicon files.
     * @param {ExportLLMKeywordLibRequest} req
     * @param {function(string, ExportLLMKeywordLibResponse):void} cb
     * @public
     */
    ExportLLMKeywordLib(req, cb) {
        let resp = new ExportLLMKeywordLibResponse();
        this.request("ExportLLMKeywordLib", req, resp, cb);
    }

    /**
     * Obtain the webshell status of a domain
     * @param {DescribeWebshellStatusRequest} req
     * @param {function(string, DescribeWebshellStatusResponse):void} cb
     * @public
     */
    DescribeWebshellStatus(req, cb) {
        let resp = new DescribeWebshellStatusResponse();
        this.request("DescribeWebshellStatus", req, resp, cb);
    }

    /**
     * Delete information leakage prevention rule
     * @param {DeleteAntiInfoLeakRuleRequest} req
     * @param {function(string, DeleteAntiInfoLeakRuleResponse):void} cb
     * @public
     */
    DeleteAntiInfoLeakRule(req, cb) {
        let resp = new DeleteAntiInfoLeakRuleResponse();
        this.request("DeleteAntiInfoLeakRule", req, resp, cb);
    }

    /**
     * This API is used to add a rule engine allowlist.
     * @param {CreateOwaspWhiteRuleRequest} req
     * @param {function(string, CreateOwaspWhiteRuleResponse):void} cb
     * @public
     */
    CreateOwaspWhiteRule(req, cb) {
        let resp = new CreateOwaspWhiteRuleResponse();
        this.request("CreateOwaspWhiteRule", req, resp, cb);
    }

    /**
     * This API is used to refresh the rule switch.
     * @param {ModifyOwaspRuleStatusRequest} req
     * @param {function(string, ModifyOwaspRuleStatusResponse):void} cb
     * @public
     */
    ModifyOwaspRuleStatus(req, cb) {
        let resp = new ModifyOwaspRuleStatusResponse();
        this.request("ModifyOwaspRuleStatus", req, resp, cb);
    }

    /**
     * Billing Resource Purchase, Renewal Order API
     * @param {CreateDealsRequest} req
     * @param {function(string, CreateDealsResponse):void} cb
     * @public
     */
    CreateDeals(req, cb) {
        let resp = new CreateDealsResponse();
        this.request("CreateDeals", req, resp, cb);
    }

    /**
     * This API is used to edit WAF IP allowlists/blocklists.
     * @param {ModifyIpAccessControlRequest} req
     * @param {function(string, ModifyIpAccessControlResponse):void} cb
     * @public
     */
    ModifyIpAccessControl(req, cb) {
        let resp = new ModifyIpAccessControlResponse();
        this.request("ModifyIpAccessControl", req, resp, cb);
    }

    /**
     * This API is used to configure boundary access for llmwaf-sdk.
     * @param {ModifyLLMSdkAccessRequest} req
     * @param {function(string, ModifyLLMSdkAccessResponse):void} cb
     * @public
     */
    ModifyLLMSdkAccess(req, cb) {
        let resp = new ModifyLLMSdkAccessResponse();
        this.request("ModifyLLMSdkAccess", req, resp, cb);
    }

    /**
     * Obtain specific specification limits for each module
     * @param {DescribeRuleLimitRequest} req
     * @param {function(string, DescribeRuleLimitResponse):void} cb
     * @public
     */
    DescribeRuleLimit(req, cb) {
        let resp = new DescribeRuleLimitResponse();
        this.request("DescribeRuleLimit", req, resp, cb);
    }

    /**
     * Add information leakage prevention rule
     * @param {AddAntiInfoLeakRulesRequest} req
     * @param {function(string, AddAntiInfoLeakRulesResponse):void} cb
     * @public
     */
    AddAntiInfoLeakRules(req, cb) {
        let resp = new AddAntiInfoLeakRulesResponse();
        this.request("AddAntiInfoLeakRules", req, resp, cb);
    }

    /**
     * This API is used to enable or disable CLB WAF for a protected domain name.
Batch operation is supported.
     * @param {ModifyHostStatusRequest} req
     * @param {function(string, ModifyHostStatusResponse):void} cb
     * @public
     */
    ModifyHostStatus(req, cb) {
        let resp = new ModifyHostStatusResponse();
        this.request("ModifyHostStatus", req, resp, cb);
    }

    /**
     * This API is used to query sdk access configurations.
     * @param {DescribeLLMSdkAccessRequest} req
     * @param {function(string, DescribeLLMSdkAccessResponse):void} cb
     * @public
     */
    DescribeLLMSdkAccess(req, cb) {
        let resp = new DescribeLLMSdkAccessResponse();
        this.request("DescribeLLMSdkAccess", req, resp, cb);
    }

    /**
     * Query the switch status of each WAF basic security module, check if each module is enabled
     * @param {DescribeModuleStatusRequest} req
     * @param {function(string, DescribeModuleStatusResponse):void} cb
     * @public
     */
    DescribeModuleStatus(req, cb) {
        let resp = new DescribeModuleStatusResponse();
        this.request("DescribeModuleStatus", req, resp, cb);
    }

    /**
     * This API is used to update the LLM content security rule.
     * @param {ModifyLLMContentRuleRequest} req
     * @param {function(string, ModifyLLMContentRuleResponse):void} cb
     * @public
     */
    ModifyLLMContentRule(req, cb) {
        let resp = new ModifyLLMContentRuleResponse();
        this.request("ModifyLLMContentRule", req, resp, cb);
    }

    /**
     * Toggle tamper-proof switch
     * @param {ModifyAntiFakeUrlStatusRequest} req
     * @param {function(string, ModifyAntiFakeUrlStatusResponse):void} cb
     * @public
     */
    ModifyAntiFakeUrlStatus(req, cb) {
        let resp = new ModifyAntiFakeUrlStatusResponse();
        this.request("ModifyAntiFakeUrlStatus", req, resp, cb);
    }

    /**
     * Query VIP information based on filter criteria
     * @param {DescribeVipInfoRequest} req
     * @param {function(string, DescribeVipInfoResponse):void} cb
     * @public
     */
    DescribeVipInfo(req, cb) {
        let resp = new DescribeVipInfoResponse();
        this.request("DescribeVipInfo", req, resp, cb);
    }

    /**
     * This API is used to delete a domain name protected by CLB WAF. Batch operation is supported.
     * @param {DeleteHostRequest} req
     * @param {function(string, DeleteHostResponse):void} cb
     * @public
     */
    DeleteHost(req, cb) {
        let resp = new DeleteHostResponse();
        this.request("DeleteHost", req, resp, cb);
    }

    /**
     * Query business and attack summary trends
     * @param {DescribePeakPointsRequest} req
     * @param {function(string, DescribePeakPointsResponse):void} cb
     * @public
     */
    DescribePeakPoints(req, cb) {
        let resp = new DescribePeakPointsResponse();
        this.request("DescribePeakPoints", req, resp, cb);
    }

    /**
     * Enable or disable auto-renewal for instance
     * @param {ModifyInstanceRenewFlagRequest} req
     * @param {function(string, ModifyInstanceRenewFlagResponse):void} cb
     * @public
     */
    ModifyInstanceRenewFlag(req, cb) {
        let resp = new ModifyInstanceRenewFlagResponse();
        this.request("ModifyInstanceRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to edit a precise allowlist.
     * @param {ModifyCustomWhiteRuleRequest} req
     * @param {function(string, ModifyCustomWhiteRuleResponse):void} cb
     * @public
     */
    ModifyCustomWhiteRule(req, cb) {
        let resp = new ModifyCustomWhiteRuleResponse();
        this.request("ModifyCustomWhiteRule", req, resp, cb);
    }

    /**
     * Obtain certificate inspection result
     * @param {DescribeCertificateVerifyResultRequest} req
     * @param {function(string, DescribeCertificateVerifyResultResponse):void} cb
     * @public
     */
    DescribeCertificateVerifyResult(req, cb) {
        let resp = new DescribeCertificateVerifyResultResponse();
        this.request("DescribeCertificateVerifyResult", req, resp, cb);
    }

    /**
     * This API is used to delete latest versions of WAF IP allowlists/blocklists.
     * @param {DeleteIpAccessControlV2Request} req
     * @param {function(string, DeleteIpAccessControlV2Response):void} cb
     * @public
     */
    DeleteIpAccessControlV2(req, cb) {
        let resp = new DeleteIpAccessControlV2Response();
        this.request("DeleteIpAccessControlV2", req, resp, cb);
    }

    /**
     * Toggle elasticity switch
     * @param {SwitchElasticModeRequest} req
     * @param {function(string, SwitchElasticModeResponse):void} cb
     * @public
     */
    SwitchElasticMode(req, cb) {
        let resp = new SwitchElasticModeResponse();
        this.request("SwitchElasticMode", req, resp, cb);
    }

    /**
     * This API is used to delete a thesaurus list.
     * @param {DeleteLLMKeywordLibraryRequest} req
     * @param {function(string, DeleteLLMKeywordLibraryResponse):void} cb
     * @public
     */
    DeleteLLMKeywordLibrary(req, cb) {
        let resp = new DeleteLLMKeywordLibraryResponse();
        this.request("DeleteLLMKeywordLibrary", req, resp, cb);
    }

    /**
     * Obtain the user protection rule level
     * @param {DescribeUserLevelRequest} req
     * @param {function(string, DescribeUserLevelResponse):void} cb
     * @public
     */
    DescribeUserLevel(req, cb) {
        let resp = new DescribeUserLevelResponse();
        this.request("DescribeUserLevel", req, resp, cb);
    }

    /**
     * This API is used to modify a custom lexicon.
     * @param {ModifyLLMKeywordLibraryRequest} req
     * @param {function(string, ModifyLLMKeywordLibraryResponse):void} cb
     * @public
     */
    ModifyLLMKeywordLibrary(req, cb) {
        let resp = new ModifyLLMKeywordLibraryResponse();
        this.request("ModifyLLMKeywordLibrary", req, resp, cb);
    }

    /**
     * WAF CC V2 query API
     * @param {DescribeCCRuleRequest} req
     * @param {function(string, DescribeCCRuleResponse):void} cb
     * @public
     */
    DescribeCCRule(req, cb) {
        let resp = new DescribeCCRuleResponse();
        this.request("DescribeCCRule", req, resp, cb);
    }

    /**
     * This API is used to update the protection mode of the rule type.
     * @param {ModifyOwaspRuleTypeActionRequest} req
     * @param {function(string, ModifyOwaspRuleTypeActionResponse):void} cb
     * @public
     */
    ModifyOwaspRuleTypeAction(req, cb) {
        let resp = new ModifyOwaspRuleTypeActionResponse();
        this.request("ModifyOwaspRuleTypeAction", req, resp, cb);
    }

    /**
     * This API is used to update the protection level of a rule type.
     * @param {ModifyOwaspRuleTypeLevelRequest} req
     * @param {function(string, ModifyOwaspRuleTypeLevelResponse):void} cb
     * @public
     */
    ModifyOwaspRuleTypeLevel(req, cb) {
        let resp = new ModifyOwaspRuleTypeLevelResponse();
        this.request("ModifyOwaspRuleTypeLevel", req, resp, cb);
    }

    /**
     * This API is used to modify LLM rules.
     * @param {ModifyLLMWafProtectRuleRequest} req
     * @param {function(string, ModifyLLMWafProtectRuleResponse):void} cb
     * @public
     */
    ModifyLLMWafProtectRule(req, cb) {
        let resp = new ModifyLLMWafProtectRuleResponse();
        this.request("ModifyLLMWafProtectRule", req, resp, cb);
    }

    /**
     * Obtain the access control policy list in the protection configuration
     * @param {DescribeCustomRuleListRequest} req
     * @param {function(string, DescribeCustomRuleListResponse):void} cb
     * @public
     */
    DescribeCustomRuleList(req, cb) {
        let resp = new DescribeCustomRuleListResponse();
        this.request("DescribeCustomRuleList", req, resp, cb);
    }

    /**
     * This API is used to describe the attack overview.
     * @param {DescribeAttackOverviewRequest} req
     * @param {function(string, DescribeAttackOverviewResponse):void} cb
     * @public
     */
    DescribeAttackOverview(req, cb) {
        let resp = new DescribeAttackOverviewResponse();
        this.request("DescribeAttackOverview", req, resp, cb);
    }

    /**
     * This API is used to edit the allowlist for the rule engine.
     * @param {ModifyOwaspWhiteRuleRequest} req
     * @param {function(string, ModifyOwaspWhiteRuleResponse):void} cb
     * @public
     */
    ModifyOwaspWhiteRule(req, cb) {
        let resp = new ModifyOwaspWhiteRuleResponse();
        this.request("ModifyOwaspWhiteRule", req, resp, cb);
    }

    /**
     * This API is used to query the hourly bill details of a single instance for a single day, including the estimated total bill amount, itemized costs, hourly trends, and hourly details.
     * @param {DescribeLLMHourBillDetailRequest} req
     * @param {function(string, DescribeLLMHourBillDetailResponse):void} cb
     * @public
     */
    DescribeLLMHourBillDetail(req, cb) {
        let resp = new DescribeLLMHourBillDetailResponse();
        this.request("DescribeLLMHourBillDetail", req, resp, cb);
    }

    /**
     * Obtain protection domain list in CLB-WAF
     * @param {DescribeHostsRequest} req
     * @param {function(string, DescribeHostsResponse):void} cb
     * @public
     */
    DescribeHosts(req, cb) {
        let resp = new DescribeHostsResponse();
        this.request("DescribeHosts", req, resp, cb);
    }

    /**
     * Add SaaS WAF protection domain
     * @param {AddSpartaProtectionRequest} req
     * @param {function(string, AddSpartaProtectionResponse):void} cb
     * @public
     */
    AddSpartaProtection(req, cb) {
        let resp = new AddSpartaProtectionResponse();
        this.request("AddSpartaProtection", req, resp, cb);
    }

    /**
     * Obtain protection status and the effective instance ID
     * @param {DescribePolicyStatusRequest} req
     * @param {function(string, DescribePolicyStatusResponse):void} cb
     * @public
     */
    DescribePolicyStatus(req, cb) {
        let resp = new DescribePolicyStatusResponse();
        this.request("DescribePolicyStatus", req, resp, cb);
    }

    /**
     * Query various conditions of cluster analysis
     * @param {DescribeHistogramRequest} req
     * @param {function(string, DescribeHistogramResponse):void} cb
     * @public
     */
    DescribeHistogram(req, cb) {
        let resp = new DescribeHistogramResponse();
        this.request("DescribeHistogram", req, resp, cb);
    }

    /**
     * WAF session definition query API
     * @param {DescribeSessionRequest} req
     * @param {function(string, DescribeSessionResponse):void} cb
     * @public
     */
    DescribeSession(req, cb) {
        let resp = new DescribeSessionResponse();
        this.request("DescribeSession", req, resp, cb);
    }

    /**
     * Query top 5 attack domains
     * @param {DescribeTopAttackDomainRequest} req
     * @param {function(string, DescribeTopAttackDomainResponse):void} cb
     * @public
     */
    DescribeTopAttackDomain(req, cb) {
        let resp = new DescribeTopAttackDomainResponse();
        this.request("DescribeTopAttackDomain", req, resp, cb);
    }

    /**
     * This API is used to edit the configuration of domain names protected by CLB WAF.
     * @param {ModifyHostRequest} req
     * @param {function(string, ModifyHostResponse):void} cb
     * @public
     */
    ModifyHost(req, cb) {
        let resp = new ModifyHostResponse();
        this.request("ModifyHost", req, resp, cb);
    }

    /**
     * This API is used to modify the module switch status of large model protection, supporting independent on/off operations for the master switch and each submodule. Before enabling, ensure that the instance has purchased the large model protection capability. If not purchased, the enable operation returns the AuthFailure.ErrCodeNoPurchased error.
     * @param {ModifyLLMStatusRequest} req
     * @param {function(string, ModifyLLMStatusResponse):void} cb
     * @public
     */
    ModifyLLMStatus(req, cb) {
        let resp = new ModifyLLMStatusResponse();
        this.request("ModifyLLMStatus", req, resp, cb);
    }

    /**
     * Bot_V2 bot master switch update
     * @param {ModifyBotStatusRequest} req
     * @param {function(string, ModifyBotStatusResponse):void} cb
     * @public
     */
    ModifyBotStatus(req, cb) {
        let resp = new ModifyBotStatusResponse();
        this.request("ModifyBotStatus", req, resp, cb);
    }

    /**
     * This API is used to obtain the enabling status of the basic security protection module of WAF.
     * @param {ModifyProtectionStatusRequest} req
     * @param {function(string, ModifyProtectionStatusResponse):void} cb
     * @public
     */
    ModifyProtectionStatus(req, cb) {
        let resp = new ModifyProtectionStatusResponse();
        this.request("ModifyProtectionStatus", req, resp, cb);
    }

    /**
     * Query SaaS WAF cipher suite information
     * @param {DescribeCiphersDetailRequest} req
     * @param {function(string, DescribeCiphersDetailResponse):void} cb
     * @public
     */
    DescribeCiphersDetail(req, cb) {
        let resp = new DescribeCiphersDetailResponse();
        this.request("DescribeCiphersDetail", req, resp, cb);
    }

    /**
     * This API is used to retrieve the allowlist for the rule engine.
     * @param {DescribeOwaspWhiteRulesRequest} req
     * @param {function(string, DescribeOwaspWhiteRulesResponse):void} cb
     * @public
     */
    DescribeOwaspWhiteRules(req, cb) {
        let resp = new DescribeOwaspWhiteRulesResponse();
        this.request("DescribeOwaspWhiteRules", req, resp, cb);
    }

    /**
     * This API is used to delete an LLM content protection rule.
     * @param {DeleteLLMContentRuleRequest} req
     * @param {function(string, DeleteLLMContentRuleResponse):void} cb
     * @public
     */
    DeleteLLMContentRule(req, cb) {
        let resp = new DeleteLLMContentRuleResponse();
        this.request("DeleteLLMContentRule", req, resp, cb);
    }

    /**
     * This API is used to query the keyword list.
     * @param {DescribeLLMKeywordLibraryRequest} req
     * @param {function(string, DescribeLLMKeywordLibraryResponse):void} cb
     * @public
     */
    DescribeLLMKeywordLibrary(req, cb) {
        let resp = new DescribeLLMKeywordLibraryResponse();
        this.request("DescribeLLMKeywordLibrary", req, resp, cb);
    }

    /**
     * Obtain a tamper-proof URL
     * @param {DescribeAntiFakeRulesRequest} req
     * @param {function(string, DescribeAntiFakeRulesResponse):void} cb
     * @public
     */
    DescribeAntiFakeRules(req, cb) {
        let resp = new DescribeAntiFakeRulesResponse();
        this.request("DescribeAntiFakeRules", req, resp, cb);
    }

    /**
     * Obtain discovered domain name list API
     * @param {DescribeFindDomainListRequest} req
     * @param {function(string, DescribeFindDomainListResponse):void} cb
     * @public
     */
    DescribeFindDomainList(req, cb) {
        let resp = new DescribeFindDomainListResponse();
        this.request("DescribeFindDomainList", req, resp, cb);
    }

    /**
     * Query individual SaaS WAF domain details
     * @param {DescribeDomainDetailsSaasRequest} req
     * @param {function(string, DescribeDomainDetailsSaasResponse):void} cb
     * @public
     */
    DescribeDomainDetailsSaas(req, cb) {
        let resp = new DescribeDomainDetailsSaasResponse();
        this.request("DescribeDomainDetailsSaas", req, resp, cb);
    }

    /**
     * This API is used to obtain the LLM content protection rules.
     * @param {DescribeLLMContentRuleListRequest} req
     * @param {function(string, DescribeLLMContentRuleListResponse):void} cb
     * @public
     */
    DescribeLLMContentRuleList(req, cb) {
        let resp = new DescribeLLMContentRuleListResponse();
        this.request("DescribeLLMContentRuleList", req, resp, cb);
    }

    /**
     * This API is used to query TLS versions supported by SaaS WAF.
     * @param {DescribeTlsVersionRequest} req
     * @param {function(string, DescribeTlsVersionResponse):void} cb
     * @public
     */
    DescribeTlsVersion(req, cb) {
        let resp = new DescribeTlsVersionResponse();
        this.request("DescribeTlsVersion", req, resp, cb);
    }

    /**
     * Edit an information leakage prevention rule
     * @param {ModifyAntiInfoLeakRulesRequest} req
     * @param {function(string, ModifyAntiInfoLeakRulesResponse):void} cb
     * @public
     */
    ModifyAntiInfoLeakRules(req, cb) {
        let resp = new ModifyAntiInfoLeakRulesResponse();
        this.request("ModifyAntiInfoLeakRules", req, resp, cb);
    }

    /**
     * This API is used to add WAF IP allowlists/blocklists.
     * @param {CreateIpAccessControlRequest} req
     * @param {function(string, CreateIpAccessControlResponse):void} cb
     * @public
     */
    CreateIpAccessControl(req, cb) {
        let resp = new CreateIpAccessControlResponse();
        this.request("CreateIpAccessControl", req, resp, cb);
    }

    /**
     * Add tamper-proof URL
     * @param {AddAntiFakeUrlRequest} req
     * @param {function(string, AddAntiFakeUrlResponse):void} cb
     * @public
     */
    AddAntiFakeUrl(req, cb) {
        let resp = new AddAntiFakeUrlResponse();
        this.request("AddAntiFakeUrl", req, resp, cb);
    }

    /**
     * This API is used to query Tool Call rules.
     * @param {DescribeLLMWafToolCallRulesRequest} req
     * @param {function(string, DescribeLLMWafToolCallRulesResponse):void} cb
     * @public
     */
    DescribeLLMWafToolCallRules(req, cb) {
        let resp = new DescribeLLMWafToolCallRulesResponse();
        this.request("DescribeLLMWafToolCallRules", req, resp, cb);
    }

    /**
     * This API is used to modify Tool Call rules.
     * @param {ModifyLLMWafToolCallRuleRequest} req
     * @param {function(string, ModifyLLMWafToolCallRuleResponse):void} cb
     * @public
     */
    ModifyLLMWafToolCallRule(req, cb) {
        let resp = new ModifyLLMWafToolCallRuleResponse();
        this.request("ModifyLLMWafToolCallRule", req, resp, cb);
    }

    /**
     * View protected object list
     * @param {DescribeObjectsRequest} req
     * @param {function(string, DescribeObjectsResponse):void} cb
     * @public
     */
    DescribeObjects(req, cb) {
        let resp = new DescribeObjectsResponse();
        this.request("DescribeObjects", req, resp, cb);
    }

    /**
     * Enable or disable access control (from custom policy)
     * @param {ModifyCustomRuleStatusRequest} req
     * @param {function(string, ModifyCustomRuleStatusResponse):void} cb
     * @public
     */
    ModifyCustomRuleStatus(req, cb) {
        let resp = new ModifyCustomRuleStatusResponse();
        this.request("ModifyCustomRuleStatus", req, resp, cb);
    }

    /**
     * This API is used to enable or disable the switch of protection rules for LLM content.
     * @param {ModifyLLMContentRuleStatusRequest} req
     * @param {function(string, ModifyLLMContentRuleStatusResponse):void} cb
     * @public
     */
    ModifyLLMContentRuleStatus(req, cb) {
        let resp = new ModifyLLMContentRuleStatusResponse();
        this.request("ModifyLLMContentRuleStatus", req, resp, cb);
    }

    /**
     * WAF CC V2 upsert API
     * @param {UpsertCCRuleRequest} req
     * @param {function(string, UpsertCCRuleResponse):void} cb
     * @public
     */
    UpsertCCRule(req, cb) {
        let resp = new UpsertCCRuleResponse();
        this.request("UpsertCCRule", req, resp, cb);
    }

    /**
     * WAF IP blocklist/allowlist query
     * @param {DescribeIpAccessControlRequest} req
     * @param {function(string, DescribeIpAccessControlResponse):void} cb
     * @public
     */
    DescribeIpAccessControl(req, cb) {
        let resp = new DescribeIpAccessControlResponse();
        this.request("DescribeIpAccessControl", req, resp, cb);
    }

    /**
     * Obtain domain overview
     * @param {DescribeDomainCountInfoRequest} req
     * @param {function(string, DescribeDomainCountInfoResponse):void} cb
     * @public
     */
    DescribeDomainCountInfo(req, cb) {
        let resp = new DescribeDomainCountInfoResponse();
        this.request("DescribeDomainCountInfo", req, resp, cb);
    }

    /**
     * This API is used to delete a domain name protected by SaaS WAF.
     * @param {DeleteSpartaProtectionRequest} req
     * @param {function(string, DeleteSpartaProtectionResponse):void} cb
     * @public
     */
    DeleteSpartaProtection(req, cb) {
        let resp = new DeleteSpartaProtectionResponse();
        this.request("DeleteSpartaProtection", req, resp, cb);
    }

    /**
     * This API is used to query the IP blocklist and allowlist for WAF batch protection.
     * @param {DescribeBatchIpAccessControlRequest} req
     * @param {function(string, DescribeBatchIpAccessControlResponse):void} cb
     * @public
     */
    DescribeBatchIpAccessControl(req, cb) {
        let resp = new DescribeBatchIpAccessControlResponse();
        this.request("DescribeBatchIpAccessControl", req, resp, cb);
    }

    /**
     * This API is used to query Skill security detection results by file Hash.
     * @param {DescribeSkillSecScanResultRequest} req
     * @param {function(string, DescribeSkillSecScanResultResponse):void} cb
     * @public
     */
    DescribeSkillSecScanResult(req, cb) {
        let resp = new DescribeSkillSecScanResultResponse();
        this.request("DescribeSkillSecScanResult", req, resp, cb);
    }

    /**
     * This API is used to query the rule list of the rule engine.
     * @param {DescribeOwaspRulesRequest} req
     * @param {function(string, DescribeOwaspRulesResponse):void} cb
     * @public
     */
    DescribeOwaspRules(req, cb) {
        let resp = new DescribeOwaspRulesResponse();
        this.request("DescribeOwaspRules", req, resp, cb);
    }

    /**
     * Delete CC attack session settings
     * @param {DeleteSessionRequest} req
     * @param {function(string, DeleteSessionResponse):void} cb
     * @public
     */
    DeleteSession(req, cb) {
        let resp = new DeleteSessionResponse();
        this.request("DeleteSession", req, resp, cb);
    }

    /**
     * Billing Resource Purchase, Renewal Order API
     * @param {GenerateDealsAndPayNewRequest} req
     * @param {function(string, GenerateDealsAndPayNewResponse):void} cb
     * @public
     */
    GenerateDealsAndPayNew(req, cb) {
        let resp = new GenerateDealsAndPayNewResponse();
        this.request("GenerateDealsAndPayNew", req, resp, cb);
    }

    /**
     * Set the Webshell status of a domain.
     * @param {ModifyWebshellStatusRequest} req
     * @param {function(string, ModifyWebshellStatusResponse):void} cb
     * @public
     */
    ModifyWebshellStatus(req, cb) {
        let resp = new ModifyWebshellStatusResponse();
        this.request("ModifyWebshellStatus", req, resp, cb);
    }

    /**
     * Enable or disable access log for domain list
     * @param {ModifyDomainsCLSStatusRequest} req
     * @param {function(string, ModifyDomainsCLSStatusResponse):void} cb
     * @public
     */
    ModifyDomainsCLSStatus(req, cb) {
        let resp = new ModifyDomainsCLSStatusResponse();
        this.request("ModifyDomainsCLSStatus", req, resp, cb);
    }

    /**
     * This API is used to delete the access configuration in llmwaf-sdk.
     * @param {DeleteLLMSdkAccessRequest} req
     * @param {function(string, DeleteLLMSdkAccessResponse):void} cb
     * @public
     */
    DeleteLLMSdkAccess(req, cb) {
        let resp = new DeleteLLMSdkAccessResponse();
        this.request("DeleteLLMSdkAccess", req, resp, cb);
    }

    /**
     * Obtain the precision allowlist policy list in the protection configuration
     * @param {DescribeCustomWhiteRuleRequest} req
     * @param {function(string, DescribeCustomWhiteRuleResponse):void} cb
     * @public
     */
    DescribeCustomWhiteRule(req, cb) {
        let resp = new DescribeCustomWhiteRuleResponse();
        this.request("DescribeCustomWhiteRule", req, resp, cb);
    }

    /**
     * Obtain protection domain details in CLB-WAF
     * @param {DescribeHostRequest} req
     * @param {function(string, DescribeHostResponse):void} cb
     * @public
     */
    DescribeHost(req, cb) {
        let resp = new DescribeHostResponse();
        this.request("DescribeHost", req, resp, cb);
    }

    /**
     * Firstly verify when adding a domain whether a package has been purchased, whether the limit of purchased package has not been reached, and whether the domain has already been added
     * @param {DescribeHostLimitRequest} req
     * @param {function(string, DescribeHostLimitResponse):void} cb
     * @public
     */
    DescribeHostLimit(req, cb) {
        let resp = new DescribeHostLimitResponse();
        this.request("DescribeHostLimit", req, resp, cb);
    }

    /**
     * Obtain the elastic QPS limit of package instances
     * @param {GetInstanceQpsLimitRequest} req
     * @param {function(string, GetInstanceQpsLimitResponse):void} cb
     * @public
     */
    GetInstanceQpsLimit(req, cb) {
        let resp = new GetInstanceQpsLimitResponse();
        this.request("GetInstanceQpsLimit", req, resp, cb);
    }

    /**
     * Set WAF protection status
     * @param {ModifySpartaProtectionModeRequest} req
     * @param {function(string, ModifySpartaProtectionModeResponse):void} cb
     * @public
     */
    ModifySpartaProtectionMode(req, cb) {
        let resp = new ModifySpartaProtectionModeResponse();
        this.request("ModifySpartaProtectionMode", req, resp, cb);
    }

    /**
     * Information leakage prevention toggle rule switch
     * @param {ModifyAntiInfoLeakRuleStatusRequest} req
     * @param {function(string, ModifyAntiInfoLeakRuleStatusResponse):void} cb
     * @public
     */
    ModifyAntiInfoLeakRuleStatus(req, cb) {
        let resp = new ModifyAntiInfoLeakRuleStatusResponse();
        this.request("ModifyAntiInfoLeakRuleStatus", req, resp, cb);
    }

    /**
     * Obtain the result of adding domain operation
     * @param {DescribeDomainVerifyResultRequest} req
     * @param {function(string, DescribeDomainVerifyResultResponse):void} cb
     * @public
     */
    DescribeDomainVerifyResult(req, cb) {
        let resp = new DescribeDomainVerifyResultResponse();
        this.request("DescribeDomainVerifyResult", req, resp, cb);
    }

    /**
     * The new version of the CLS API has parameter changes, with query changed to query_string to support Lucene syntax for API search queries.
     * @param {SearchAttackLogRequest} req
     * @param {function(string, SearchAttackLogResponse):void} cb
     * @public
     */
    SearchAttackLog(req, cb) {
        let resp = new SearchAttackLogResponse();
        this.request("SearchAttackLog", req, resp, cb);
    }

    /**
     * Query detailed information of all user instances
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to update the rule type switch.
     * @param {ModifyOwaspRuleTypeStatusRequest} req
     * @param {function(string, ModifyOwaspRuleTypeStatusResponse):void} cb
     * @public
     */
    ModifyOwaspRuleTypeStatus(req, cb) {
        let resp = new ModifyOwaspRuleTypeStatusResponse();
        this.request("ModifyOwaspRuleTypeStatus", req, resp, cb);
    }

    /**
     * Modify user protection rules, turn on/off specific rules
     * @param {ModifyUserSignatureRuleRequest} req
     * @param {function(string, ModifyUserSignatureRuleResponse):void} cb
     * @public
     */
    ModifyUserSignatureRule(req, cb) {
        let resp = new ModifyUserSignatureRuleResponse();
        this.request("ModifyUserSignatureRule", req, resp, cb);
    }

    /**
     * This API is used to set the traffic mode for domain names protected by CLB WAF. The mode can be mirror mode or cleaning mode.
     * @param {ModifyHostFlowModeRequest} req
     * @param {function(string, ModifyHostFlowModeResponse):void} cb
     * @public
     */
    ModifyHostFlowMode(req, cb) {
        let resp = new ModifyHostFlowModeResponse();
        this.request("ModifyHostFlowMode", req, resp, cb);
    }

    /**
     * Modify instance name
     * @param {ModifyInstanceNameRequest} req
     * @param {function(string, ModifyInstanceNameResponse):void} cb
     * @public
     */
    ModifyInstanceName(req, cb) {
        let resp = new ModifyInstanceNameResponse();
        this.request("ModifyInstanceName", req, resp, cb);
    }

    /**
     * Set the switch for the basic security module under a certain domain
     * @param {ModifyModuleStatusRequest} req
     * @param {function(string, ModifyModuleStatusResponse):void} cb
     * @public
     */
    ModifyModuleStatus(req, cb) {
        let resp = new ModifyModuleStatusResponse();
        this.request("ModifyModuleStatus", req, resp, cb);
    }

    /**
     * This API is used to review the request and response content of large models.
     * @param {DescribeLLMContentSecCheckRequest} req
     * @param {function(string, DescribeLLMContentSecCheckResponse):void} cb
     * @public
     */
    DescribeLLMContentSecCheck(req, cb) {
        let resp = new DescribeLLMContentSecCheckResponse();
        this.request("DescribeLLMContentSecCheck", req, resp, cb);
    }

    /**
     * API analysis page switch
     * @param {ModifyApiAnalyzeStatusRequest} req
     * @param {function(string, ModifyApiAnalyzeStatusResponse):void} cb
     * @public
     */
    ModifyApiAnalyzeStatus(req, cb) {
        let resp = new ModifyApiAnalyzeStatusResponse();
        this.request("ModifyApiAnalyzeStatus", req, resp, cb);
    }

    /**
     * Enable or disable a precision allowlist
     * @param {ModifyCustomWhiteRuleStatusRequest} req
     * @param {function(string, ModifyCustomWhiteRuleStatusResponse):void} cb
     * @public
     */
    ModifyCustomWhiteRuleStatus(req, cb) {
        let resp = new ModifyCustomWhiteRuleStatusResponse();
        this.request("ModifyCustomWhiteRuleStatus", req, resp, cb);
    }

    /**
     * Obtain the SaaS-type WAF protection port list
     * @param {DescribePortsRequest} req
     * @param {function(string, DescribePortsResponse):void} cb
     * @public
     */
    DescribePorts(req, cb) {
        let resp = new DescribePortsResponse();
        this.request("DescribePorts", req, resp, cb);
    }

    /**
     * Set CLB WAF protection domain status
     * @param {ModifyHostModeRequest} req
     * @param {function(string, ModifyHostModeResponse):void} cb
     * @public
     */
    ModifyHostMode(req, cb) {
        let resp = new ModifyHostModeResponse();
        this.request("ModifyHostMode", req, resp, cb);
    }

    /**
     * This API is used to modify the domain shipping status.
     * @param {ModifyDomainPostActionRequest} req
     * @param {function(string, ModifyDomainPostActionResponse):void} cb
     * @public
     */
    ModifyDomainPostAction(req, cb) {
        let resp = new ModifyDomainPostActionResponse();
        this.request("ModifyDomainPostAction", req, resp, cb);
    }

    /**
     * During the addition and modification of Domain Configuration for CLB-type WAF, it is required to display the supported region list for CLB-type WAF (clb-waf) through DescribeUserClbWafRegions to obtain the currently available region list for the customer.
     * @param {DescribeUserClbWafRegionsRequest} req
     * @param {function(string, DescribeUserClbWafRegionsResponse):void} cb
     * @public
     */
    DescribeUserClbWafRegions(req, cb) {
        let resp = new DescribeUserClbWafRegionsResponse();
        this.request("DescribeUserClbWafRegions", req, resp, cb);
    }

    /**
     * This API is used to modify llmwaf DLP rules.
     * @param {ModifyLLMWafDLPRuleRequest} req
     * @param {function(string, ModifyLLMWafDLPRuleResponse):void} cb
     * @public
     */
    ModifyLLMWafDLPRule(req, cb) {
        let resp = new ModifyLLMWafDLPRuleResponse();
        this.request("ModifyLLMWafDLPRule", req, resp, cb);
    }

    /**
     * Modify protection object
     * @param {ModifyObjectRequest} req
     * @param {function(string, ModifyObjectResponse):void} cb
     * @public
     */
    ModifyObject(req, cb) {
        let resp = new ModifyObjectResponse();
        this.request("ModifyObject", req, resp, cb);
    }

    /**
     * Delete tamper-proof URL
     * @param {DeleteAntiFakeUrlRequest} req
     * @param {function(string, DeleteAntiFakeUrlResponse):void} cb
     * @public
     */
    DeleteAntiFakeUrl(req, cb) {
        let resp = new DeleteAntiFakeUrlResponse();
        this.request("DeleteAntiFakeUrl", req, resp, cb);
    }

    /**
     * Query CC rules based on multiple conditions
     * @param {DescribeCCRuleListRequest} req
     * @param {function(string, DescribeCCRuleListResponse):void} cb
     * @public
     */
    DescribeCCRuleList(req, cb) {
        let resp = new DescribeCCRuleListResponse();
        this.request("DescribeCCRuleList", req, resp, cb);
    }

    /**
     * Add a protection domain in CLB-WAF
     * @param {CreateHostRequest} req
     * @param {function(string, CreateHostResponse):void} cb
     * @public
     */
    CreateHost(req, cb) {
        let resp = new CreateHostResponse();
        this.request("CreateHost", req, resp, cb);
    }

    /**
     * WAF session definition upsert API
     * @param {UpsertSessionRequest} req
     * @param {function(string, UpsertSessionResponse):void} cb
     * @public
     */
    UpsertSession(req, cb) {
        let resp = new UpsertSessionResponse();
        this.request("UpsertSession", req, resp, cb);
    }

    /**
     * Refresh a tamper-proof URL
     * @param {FreshAntiFakeUrlRequest} req
     * @param {function(string, FreshAntiFakeUrlResponse):void} cb
     * @public
     */
    FreshAntiFakeUrl(req, cb) {
        let resp = new FreshAntiFakeUrlResponse();
        this.request("FreshAntiFakeUrl", req, resp, cb);
    }

    /**
     * Refresh integration check results. The backend will generate integration check tasks
     * @param {RefreshAccessCheckResultRequest} req
     * @param {function(string, RefreshAccessCheckResultResponse):void} cb
     * @public
     */
    RefreshAccessCheckResult(req, cb) {
        let resp = new RefreshAccessCheckResultResponse();
        this.request("RefreshAccessCheckResult", req, resp, cb);
    }

    /**
     * Toggle the IPv6 switch
     * @param {ModifyDomainIpv6StatusRequest} req
     * @param {function(string, ModifyDomainIpv6StatusResponse):void} cb
     * @public
     */
    ModifyDomainIpv6Status(req, cb) {
        let resp = new ModifyDomainIpv6StatusResponse();
        this.request("ModifyDomainIpv6Status", req, resp, cb);
    }

    /**
     * Modify the user protection rule level
     * @param {ModifyUserLevelRequest} req
     * @param {function(string, ModifyUserLevelResponse):void} cb
     * @public
     */
    ModifyUserLevel(req, cb) {
        let resp = new ModifyUserLevelResponse();
        this.request("ModifyUserLevel", req, resp, cb);
    }


}
module.exports = WafClient;
