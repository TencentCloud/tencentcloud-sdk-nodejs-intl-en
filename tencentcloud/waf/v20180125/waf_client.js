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
const ModifyUserLevelResponse = models.ModifyUserLevelResponse;
const DescribeAntiInfoLeakRulesResponse = models.DescribeAntiInfoLeakRulesResponse;
const DescribeCustomRulesRspRuleListItem = models.DescribeCustomRulesRspRuleListItem;
const ModifyAntiInfoLeakRulesResponse = models.ModifyAntiInfoLeakRulesResponse;
const ModifyWebshellStatusRequest = models.ModifyWebshellStatusRequest;
const DescribeCertificateVerifyResultRequest = models.DescribeCertificateVerifyResultRequest;
const TLSCiphers = models.TLSCiphers;
const AddAntiFakeUrlRequest = models.AddAntiFakeUrlRequest;
const WebshellStatus = models.WebshellStatus;
const DescribeSpartaProtectionInfoResponse = models.DescribeSpartaProtectionInfoResponse;
const ModifyHostFlowModeResponse = models.ModifyHostFlowModeResponse;
const ModifyModuleStatusRequest = models.ModifyModuleStatusRequest;
const ModifyApiAnalyzeStatusResponse = models.ModifyApiAnalyzeStatusResponse;
const HostDel = models.HostDel;
const DescribeModuleStatusRequest = models.DescribeModuleStatusRequest;
const ModifyCustomRuleRequest = models.ModifyCustomRuleRequest;
const DescribeAntiLeakageItem = models.DescribeAntiLeakageItem;
const LoadBalancerPackageNew = models.LoadBalancerPackageNew;
const DescribeAntiFakeUrlRequest = models.DescribeAntiFakeUrlRequest;
const CCRuleData = models.CCRuleData;
const DescribeCustomRuleListRequest = models.DescribeCustomRuleListRequest;
const DescribeHostsResponse = models.DescribeHostsResponse;
const DescribePeakPointsRequest = models.DescribePeakPointsRequest;
const DeleteHostRequest = models.DeleteHostRequest;
const DescribeCertificateVerifyResultResponse = models.DescribeCertificateVerifyResultResponse;
const ModifyUserSignatureRuleResponse = models.ModifyUserSignatureRuleResponse;
const DescribeAntiInfoLeakRulesStrategyItem = models.DescribeAntiInfoLeakRulesStrategyItem;
const UpsertSessionResponse = models.UpsertSessionResponse;
const DescribeDomainsResponse = models.DescribeDomainsResponse;
const GenerateDealsAndPayNewRequest = models.GenerateDealsAndPayNewRequest;
const RefreshAccessCheckResultRequest = models.RefreshAccessCheckResultRequest;
const AddAntiFakeUrlResponse = models.AddAntiFakeUrlResponse;
const ModifyHostResponse = models.ModifyHostResponse;
const DescribeCiphersDetailRequest = models.DescribeCiphersDetailRequest;
const AddCustomRuleResponse = models.AddCustomRuleResponse;
const CCRuleItems = models.CCRuleItems;
const ModifyDomainIpv6StatusRequest = models.ModifyDomainIpv6StatusRequest;
const RefreshAccessCheckResultResponse = models.RefreshAccessCheckResultResponse;
const DescribeAntiInfoLeakageRulesResponse = models.DescribeAntiInfoLeakageRulesResponse;
const SessionItem = models.SessionItem;
const ModifyObjectRequest = models.ModifyObjectRequest;
const ModifyHostFlowModeRequest = models.ModifyHostFlowModeRequest;
const ModifyProtectionStatusRequest = models.ModifyProtectionStatusRequest;
const CCRuleLists = models.CCRuleLists;
const DomainsPartInfo = models.DomainsPartInfo;
const DescribeModuleStatusResponse = models.DescribeModuleStatusResponse;
const DeleteAntiFakeUrlResponse = models.DeleteAntiFakeUrlResponse;
const WafRuleLimit = models.WafRuleLimit;
const DescribeAttackTypeRequest = models.DescribeAttackTypeRequest;
const ModifyAntiFakeUrlStatusRequest = models.ModifyAntiFakeUrlStatusRequest;
const DescribeUserLevelResponse = models.DescribeUserLevelResponse;
const ModifyHostModeResponse = models.ModifyHostModeResponse;
const DescribeCCRuleListRequest = models.DescribeCCRuleListRequest;
const ModifyProtectionStatusResponse = models.ModifyProtectionStatusResponse;
const ResponseCode = models.ResponseCode;
const DescribeCustomRuleListResponse = models.DescribeCustomRuleListResponse;
const ModifyDomainsCLSStatusResponse = models.ModifyDomainsCLSStatusResponse;
const ModifyDomainsCLSStatusRequest = models.ModifyDomainsCLSStatusRequest;
const DescribeWebshellStatusRequest = models.DescribeWebshellStatusRequest;
const CronJob = models.CronJob;
const FiltersItemNew = models.FiltersItemNew;
const DeleteSpartaProtectionResponse = models.DeleteSpartaProtectionResponse;
const SessionData = models.SessionData;
const ModifyUserLevelRequest = models.ModifyUserLevelRequest;
const DescribeAntiInfoLeakageRulesRequest = models.DescribeAntiInfoLeakageRulesRequest;
const CreateHostResponse = models.CreateHostResponse;
const PiechartItem = models.PiechartItem;
const DeleteHostResponse = models.DeleteHostResponse;
const FreshAntiFakeUrlResponse = models.FreshAntiFakeUrlResponse;
const ModifyBotStatusRequest = models.ModifyBotStatusRequest;
const DeleteSpartaProtectionRequest = models.DeleteSpartaProtectionRequest;
const DescribeTopAttackDomainRequest = models.DescribeTopAttackDomainRequest;
const DescribeAntiFakeRulesResponse = models.DescribeAntiFakeRulesResponse;
const AddAntiInfoLeakRulesRequest = models.AddAntiInfoLeakRulesRequest;
const HostRecord = models.HostRecord;
const CreateHostRequest = models.CreateHostRequest;
const UserDomainInfo = models.UserDomainInfo;
const FreshAntiFakeUrlRequest = models.FreshAntiFakeUrlRequest;
const DescribeFindDomainListResponse = models.DescribeFindDomainListResponse;
const SpartaProtectionPort = models.SpartaProtectionPort;
const AddSpartaProtectionRequest = models.AddSpartaProtectionRequest;
const PeakPointsItem = models.PeakPointsItem;
const CreateDealsRequest = models.CreateDealsRequest;
const JobDateTime = models.JobDateTime;
const DescribeSessionRequest = models.DescribeSessionRequest;
const ModifyModuleStatusResponse = models.ModifyModuleStatusResponse;
const DescribePolicyStatusRequest = models.DescribePolicyStatusRequest;
const GetAttackTotalCountRequest = models.GetAttackTotalCountRequest;
const DescribeHostRequest = models.DescribeHostRequest;
const ModifyDomainIpv6StatusResponse = models.ModifyDomainIpv6StatusResponse;
const ModifyWebshellStatusResponse = models.ModifyWebshellStatusResponse;
const DescribeCCRuleListResponse = models.DescribeCCRuleListResponse;
const DescribeDomainCountInfoResponse = models.DescribeDomainCountInfoResponse;
const DescribeAntiInfoLeakRulesRequest = models.DescribeAntiInfoLeakRulesRequest;
const ModifyHostModeRequest = models.ModifyHostModeRequest;
const ModifyAntiFakeUrlRequest = models.ModifyAntiFakeUrlRequest;
const DescribeDomainDetailsClbRequest = models.DescribeDomainDetailsClbRequest;
const ModifyAntiInfoLeakRuleStatusRequest = models.ModifyAntiInfoLeakRuleStatusRequest;
const CreateDealsGoods = models.CreateDealsGoods;
const TimedJob = models.TimedJob;
const DescribeTlsVersionRequest = models.DescribeTlsVersionRequest;
const DescribeCiphersDetailResponse = models.DescribeCiphersDetailResponse;
const DealData = models.DealData;
const ModifySpartaProtectionModeResponse = models.ModifySpartaProtectionModeResponse;
const ModifyBotStatusResponse = models.ModifyBotStatusResponse;
const DescribeDomainDetailsSaasRequest = models.DescribeDomainDetailsSaasRequest;
const ModifyCustomRuleStatusResponse = models.ModifyCustomRuleStatusResponse;
const StrategyForAntiInfoLeak = models.StrategyForAntiInfoLeak;
const AddSpartaProtectionResponse = models.AddSpartaProtectionResponse;
const DescribeUserDomainInfoRequest = models.DescribeUserDomainInfoRequest;
const DomainRuleId = models.DomainRuleId;
const PortItem = models.PortItem;
const CreateDealsGoodsDetail = models.CreateDealsGoodsDetail;
const SearchItem = models.SearchItem;
const ModifyCustomWhiteRuleStatusResponse = models.ModifyCustomWhiteRuleStatusResponse;
const ModifyHostStatusResponse = models.ModifyHostStatusResponse;
const BatchIpAccessControlData = models.BatchIpAccessControlData;
const ModifyCustomRuleStatusRequest = models.ModifyCustomRuleStatusRequest;
const DescribePeakPointsResponse = models.DescribePeakPointsResponse;
const DescribeAntiInfoLeakRulesRuleItem = models.DescribeAntiInfoLeakRulesRuleItem;
const ModifySpartaProtectionModeRequest = models.ModifySpartaProtectionModeRequest;
const DescribeHostResponse = models.DescribeHostResponse;
const DescribeUserLevelRequest = models.DescribeUserLevelRequest;
const DescribeDomainDetailsClbResponse = models.DescribeDomainDetailsClbResponse;
const HostStatus = models.HostStatus;
const GoodsDetailNew = models.GoodsDetailNew;
const ModifyAntiFakeUrlResponse = models.ModifyAntiFakeUrlResponse;
const ModifySpartaProtectionResponse = models.ModifySpartaProtectionResponse;
const DomainInfo = models.DomainInfo;
const DescribeBatchIpAccessControlRequest = models.DescribeBatchIpAccessControlRequest;
const DescribePolicyStatusResponse = models.DescribePolicyStatusResponse;
const GetAttackTotalCountResponse = models.GetAttackTotalCountResponse;
const CreateDealsResponse = models.CreateDealsResponse;
const BatchIpAccessControlItem = models.BatchIpAccessControlItem;
const KVInt = models.KVInt;
const PortInfo = models.PortInfo;
const DescribeBatchIpAccessControlResponse = models.DescribeBatchIpAccessControlResponse;
const DescribeDomainDetailsSaasResponse = models.DescribeDomainDetailsSaasResponse;
const ModifyApiAnalyzeStatusRequest = models.ModifyApiAnalyzeStatusRequest;
const AddCustomRuleRequest = models.AddCustomRuleRequest;
const ModifyAntiInfoLeakRuleStatusResponse = models.ModifyAntiInfoLeakRuleStatusResponse;
const UpsertCCRuleResponse = models.UpsertCCRuleResponse;
const DeleteCCRuleRequest = models.DeleteCCRuleRequest;
const DescribeAttackTypeResponse = models.DescribeAttackTypeResponse;
const GenerateDealsAndPayNewResponse = models.GenerateDealsAndPayNewResponse;
const DeleteCustomRuleRequest = models.DeleteCustomRuleRequest;
const DescribeCCRuleResponse = models.DescribeCCRuleResponse;
const DescribeAntiFakeUrlResponse = models.DescribeAntiFakeUrlResponse;
const ModifyObjectResponse = models.ModifyObjectResponse;
const DescribeFindDomainListRequest = models.DescribeFindDomainListRequest;
const ModifyAntiFakeUrlStatusResponse = models.ModifyAntiFakeUrlStatusResponse;
const DescribeHostsRequest = models.DescribeHostsRequest;
const DescribeHostLimitResponse = models.DescribeHostLimitResponse;
const UpsertCCRuleRequest = models.UpsertCCRuleRequest;
const DescribeWebshellStatusResponse = models.DescribeWebshellStatusResponse;
const ModifyCustomWhiteRuleStatusRequest = models.ModifyCustomWhiteRuleStatusRequest;
const DeleteAntiFakeUrlRequest = models.DeleteAntiFakeUrlRequest;
const DescribeSpartaProtectionInfoRequest = models.DescribeSpartaProtectionInfoRequest;
const CacheUrlItems = models.CacheUrlItems;
const ReqUserRule = models.ReqUserRule;
const Strategy = models.Strategy;
const FindAllDomainDetail = models.FindAllDomainDetail;
const DeleteAntiInfoLeakRuleRequest = models.DeleteAntiInfoLeakRuleRequest;
const DescribeVipInfoResponse = models.DescribeVipInfoResponse;
const GoodNews = models.GoodNews;
const TLSVersion = models.TLSVersion;
const DescribeCCRuleRequest = models.DescribeCCRuleRequest;
const CacheUrlItem = models.CacheUrlItem;
const DescribeRuleLimitRequest = models.DescribeRuleLimitRequest;
const TargetEntity = models.TargetEntity;
const CCRuleItem = models.CCRuleItem;
const DescribeDomainCountInfoRequest = models.DescribeDomainCountInfoRequest;
const ModifySpartaProtectionRequest = models.ModifySpartaProtectionRequest;
const DescribeTlsVersionResponse = models.DescribeTlsVersionResponse;
const VipInfo = models.VipInfo;
const DescribeTopAttackDomainResponse = models.DescribeTopAttackDomainResponse;
const DescribeSessionResponse = models.DescribeSessionResponse;
const AddAntiInfoLeakRulesResponse = models.AddAntiInfoLeakRulesResponse;
const DescribeAntiFakeRulesRequest = models.DescribeAntiFakeRulesRequest;
const DescribeVipInfoRequest = models.DescribeVipInfoRequest;
const DeleteAntiInfoLeakRuleResponse = models.DeleteAntiInfoLeakRuleResponse;
const ModifyAntiInfoLeakRulesRequest = models.ModifyAntiInfoLeakRulesRequest;
const UpsertSessionRequest = models.UpsertSessionRequest;
const DescribeRuleLimitResponse = models.DescribeRuleLimitResponse;
const DescribeHostLimitRequest = models.DescribeHostLimitRequest;
const DeleteCustomRuleResponse = models.DeleteCustomRuleResponse;
const ModifyUserSignatureRuleRequest = models.ModifyUserSignatureRuleRequest;
const ClbDomainsInfo = models.ClbDomainsInfo;
const DescribeObjectsResponse = models.DescribeObjectsResponse;
const DescribeHistogramRequest = models.DescribeHistogramRequest;
const DeleteCCRuleResponse = models.DeleteCCRuleResponse;
const DomainURI = models.DomainURI;
const PageInfo = models.PageInfo;
const ModifyHostRequest = models.ModifyHostRequest;
const DescribeDomainsRequest = models.DescribeDomainsRequest;
const DescribeObjectsRequest = models.DescribeObjectsRequest;
const DescribeUserDomainInfoResponse = models.DescribeUserDomainInfoResponse;
const ModifyHostStatusRequest = models.ModifyHostStatusRequest;
const DescribeHistogramResponse = models.DescribeHistogramResponse;
const ModifyCustomRuleResponse = models.ModifyCustomRuleResponse;
const LoadBalancer = models.LoadBalancer;
const ClbObject = models.ClbObject;


/**
 * waf client
 * @class
 */
class WafClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("waf.tencentcloudapi.com", "2018-01-25", credential, region, profile);
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
     * 老接口已经不再使用。

The old API is no longer in use.

Obtain the information leakage prevention rule list
     * @param {DescribeAntiInfoLeakRulesRequest} req
     * @param {function(string, DescribeAntiInfoLeakRulesResponse):void} cb
     * @public
     */
    DescribeAntiInfoLeakRules(req, cb) {
        let resp = new DescribeAntiInfoLeakRulesResponse();
        this.request("DescribeAntiInfoLeakRules", req, resp, cb);
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
     * 废弃接口

This API has been deprecated.

Obtain a tamper-proof URL
     * @param {DescribeAntiFakeUrlRequest} req
     * @param {function(string, DescribeAntiFakeUrlResponse):void} cb
     * @public
     */
    DescribeAntiFakeUrl(req, cb) {
        let resp = new DescribeAntiFakeUrlResponse();
        this.request("DescribeAntiFakeUrl", req, resp, cb);
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
     * Modify the user protection rule level
     * @param {ModifyUserLevelRequest} req
     * @param {function(string, ModifyUserLevelResponse):void} cb
     * @public
     */
    ModifyUserLevel(req, cb) {
        let resp = new ModifyUserLevelResponse();
        this.request("ModifyUserLevel", req, resp, cb);
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
     * Obtain the webshell status of a domain
     * @param {DescribeWebshellStatusRequest} req
     * @param {function(string, DescribeWebshellStatusResponse):void} cb
     * @public
     */
    DescribeWebshellStatus(req, cb) {
        let resp = new DescribeWebshellStatusResponse();
        this.request("DescribeWebshellStatus", req, resp, cb);
    }


}
module.exports = WafClient;
