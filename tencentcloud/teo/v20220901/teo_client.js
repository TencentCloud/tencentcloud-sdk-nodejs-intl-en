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
const CreatePlanForZoneResponse = models.CreatePlanForZoneResponse;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const Compression = models.Compression;
const DeleteRulesRequest = models.DeleteRulesRequest;
const ExceptUserRuleCondition = models.ExceptUserRuleCondition;
const CheckCnameStatusResponse = models.CheckCnameStatusResponse;
const ModifyZoneResponse = models.ModifyZoneResponse;
const DescribeOriginGroupResponse = models.DescribeOriginGroupResponse;
const DescribeTopL7CacheDataRequest = models.DescribeTopL7CacheDataRequest;
const DeleteApplicationProxyResponse = models.DeleteApplicationProxyResponse;
const Https = models.Https;
const AlgDetectRule = models.AlgDetectRule;
const SecEntryValue = models.SecEntryValue;
const DescribeZonesRequest = models.DescribeZonesRequest;
const L4OfflineLog = models.L4OfflineLog;
const DiffIPWhitelist = models.DiffIPWhitelist;
const DeleteSecurityIPGroupResponse = models.DeleteSecurityIPGroupResponse;
const ModifyRuleRequest = models.ModifyRuleRequest;
const OriginRecord = models.OriginRecord;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const AdvancedFilter = models.AdvancedFilter;
const DeleteApplicationProxyRequest = models.DeleteApplicationProxyRequest;
const OriginDetail = models.OriginDetail;
const DescribeDDoSAttackDataResponse = models.DescribeDDoSAttackDataResponse;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const FileVerification = models.FileVerification;
const DescribeIdentificationsResponse = models.DescribeIdentificationsResponse;
const ModifySecurityPolicyRequest = models.ModifySecurityPolicyRequest;
const Waf = models.Waf;
const ModifyApplicationProxyRuleStatusResponse = models.ModifyApplicationProxyRuleStatusResponse;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const RuleRewriteActionParams = models.RuleRewriteActionParams;
const CreateApplicationProxyResponse = models.CreateApplicationProxyResponse;
const BotUserRule = models.BotUserRule;
const ModifyOriginGroupResponse = models.ModifyOriginGroupResponse;
const DeleteAccelerationDomainsRequest = models.DeleteAccelerationDomainsRequest;
const ExceptUserRuleScope = models.ExceptUserRuleScope;
const ModifyAliasDomainRequest = models.ModifyAliasDomainRequest;
const DescribeAvailablePlansRequest = models.DescribeAvailablePlansRequest;
const OriginInfo = models.OriginInfo;
const Tag = models.Tag;
const ModifySecurityPolicyResponse = models.ModifySecurityPolicyResponse;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const DnsVerification = models.DnsVerification;
const AlgDetectSession = models.AlgDetectSession;
const ModifyZoneRequest = models.ModifyZoneRequest;
const ModifyApplicationProxyStatusResponse = models.ModifyApplicationProxyStatusResponse;
const DeleteZoneResponse = models.DeleteZoneResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const BotExtendAction = models.BotExtendAction;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const DeleteApplicationProxyRuleResponse = models.DeleteApplicationProxyRuleResponse;
const DescribeRulesResponse = models.DescribeRulesResponse;
const TimingDataRecord = models.TimingDataRecord;
const OriginProtectionInfo = models.OriginProtectionInfo;
const DescribeOriginProtectionResponse = models.DescribeOriginProtectionResponse;
const BindZoneToPlanResponse = models.BindZoneToPlanResponse;
const ExceptConfig = models.ExceptConfig;
const DeleteOriginGroupRequest = models.DeleteOriginGroupRequest;
const AliasDomain = models.AliasDomain;
const AclCondition = models.AclCondition;
const DescribeAliasDomainsRequest = models.DescribeAliasDomainsRequest;
const SkipCondition = models.SkipCondition;
const IpTableRule = models.IpTableRule;
const L7OfflineLog = models.L7OfflineLog;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const ApplicationProxyRule = models.ApplicationProxyRule;
const SmartRouting = models.SmartRouting;
const ModifyApplicationProxyRequest = models.ModifyApplicationProxyRequest;
const ModifyAccelerationDomainStatusesResponse = models.ModifyAccelerationDomainStatusesResponse;
const Zone = models.Zone;
const DescribeRulesSettingResponse = models.DescribeRulesSettingResponse;
const RuleExtraParameter = models.RuleExtraParameter;
const RulesSettingAction = models.RulesSettingAction;
const DDoSAttackEvent = models.DDoSAttackEvent;
const ClientIpHeader = models.ClientIpHeader;
const DescribeDDoSAttackTopDataRequest = models.DescribeDDoSAttackTopDataRequest;
const Quic = models.Quic;
const Ipv6 = models.Ipv6;
const ModifyAccelerationDomainRequest = models.ModifyAccelerationDomainRequest;
const DescribeRulesRequest = models.DescribeRulesRequest;
const DescribeContentQuotaResponse = models.DescribeContentQuotaResponse;
const TopDataRecord = models.TopDataRecord;
const AclConfig = models.AclConfig;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const AlgDetectJS = models.AlgDetectJS;
const AccelerationDomain = models.AccelerationDomain;
const DeleteSecurityIPGroupRequest = models.DeleteSecurityIPGroupRequest;
const RateLimitTemplateDetail = models.RateLimitTemplateDetail;
const Origin = models.Origin;
const WafConfig = models.WafConfig;
const Grpc = models.Grpc;
const SlowRateConfig = models.SlowRateConfig;
const ServerCertInfo = models.ServerCertInfo;
const CreateAliasDomainRequest = models.CreateAliasDomainRequest;
const CreateAliasDomainResponse = models.CreateAliasDomainResponse;
const DescribeOriginProtectionRequest = models.DescribeOriginProtectionRequest;
const ClientIpCountry = models.ClientIpCountry;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DeleteApplicationProxyRuleRequest = models.DeleteApplicationProxyRuleRequest;
const DescribeApplicationProxiesResponse = models.DescribeApplicationProxiesResponse;
const DescribeTopL7AnalysisDataRequest = models.DescribeTopL7AnalysisDataRequest;
const FileAscriptionInfo = models.FileAscriptionInfo;
const DescribeAccelerationDomainsResponse = models.DescribeAccelerationDomainsResponse;
const ZoneSetting = models.ZoneSetting;
const DescribeTopL7CacheDataResponse = models.DescribeTopL7CacheDataResponse;
const DescribeOverviewL7DataRequest = models.DescribeOverviewL7DataRequest;
const SwitchConfig = models.SwitchConfig;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const WebSocket = models.WebSocket;
const DDoSBlockData = models.DDoSBlockData;
const VanityNameServers = models.VanityNameServers;
const RuleChoicePropertiesItem = models.RuleChoicePropertiesItem;
const WafRule = models.WafRule;
const SecurityConfig = models.SecurityConfig;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const MaxAge = models.MaxAge;
const ModifyAliasDomainStatusResponse = models.ModifyAliasDomainStatusResponse;
const RuleCodeActionParams = models.RuleCodeActionParams;
const IPGroup = models.IPGroup;
const DescribeTimingL7AnalysisDataRequest = models.DescribeTimingL7AnalysisDataRequest;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const NoCache = models.NoCache;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const DescribeAliasDomainsResponse = models.DescribeAliasDomainsResponse;
const SecurityType = models.SecurityType;
const IPWhitelist = models.IPWhitelist;
const DDoS = models.DDoS;
const CreateZoneRequest = models.CreateZoneRequest;
const PlanInfo = models.PlanInfo;
const DescribeTimingL7CacheDataRequest = models.DescribeTimingL7CacheDataRequest;
const Task = models.Task;
const ModifyRuleResponse = models.ModifyRuleResponse;
const AscriptionInfo = models.AscriptionInfo;
const RuleItem = models.RuleItem;
const FirstPartConfig = models.FirstPartConfig;
const DescribeDDoSAttackEventResponse = models.DescribeDDoSAttackEventResponse;
const CreateApplicationProxyRuleRequest = models.CreateApplicationProxyRuleRequest;
const Cache = models.Cache;
const ForceRedirect = models.ForceRedirect;
const RateLimitConfig = models.RateLimitConfig;
const DownloadL4LogsRequest = models.DownloadL4LogsRequest;
const CodeAction = models.CodeAction;
const DetailHost = models.DetailHost;
const Identification = models.Identification;
const DescribeDDoSAttackDataRequest = models.DescribeDDoSAttackDataRequest;
const CachePrefresh = models.CachePrefresh;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const DescribeTimingL7AnalysisDataResponse = models.DescribeTimingL7AnalysisDataResponse;
const ImageOptimize = models.ImageOptimize;
const DescribeApplicationProxiesRequest = models.DescribeApplicationProxiesRequest;
const DescribeContentQuotaRequest = models.DescribeContentQuotaRequest;
const BotPortraitRule = models.BotPortraitRule;
const RuleCondition = models.RuleCondition;
const RulesProperties = models.RulesProperties;
const DescribeOverviewL7DataResponse = models.DescribeOverviewL7DataResponse;
const Hsts = models.Hsts;
const RateLimitTemplate = models.RateLimitTemplate;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const CreateRuleRequest = models.CreateRuleRequest;
const TemplateConfig = models.TemplateConfig;
const TopEntry = models.TopEntry;
const VanityNameServersIps = models.VanityNameServersIps;
const NsVerification = models.NsVerification;
const SlowPostConfig = models.SlowPostConfig;
const AccelerateMainland = models.AccelerateMainland;
const ExceptUserRule = models.ExceptUserRule;
const CreateApplicationProxyRuleResponse = models.CreateApplicationProxyRuleResponse;
const RateLimitUserRule = models.RateLimitUserRule;
const SubRule = models.SubRule;
const CreatePlanForZoneRequest = models.CreatePlanForZoneRequest;
const ModifyAliasDomainStatusRequest = models.ModifyAliasDomainStatusRequest;
const TimingDataItem = models.TimingDataItem;
const CreateApplicationProxyRequest = models.CreateApplicationProxyRequest;
const CC = models.CC;
const IntelligenceRuleItem = models.IntelligenceRuleItem;
const IntelligenceRule = models.IntelligenceRule;
const PostMaxSize = models.PostMaxSize;
const Sv = models.Sv;
const Rule = models.Rule;
const Filter = models.Filter;
const CreateAccelerationDomainResponse = models.CreateAccelerationDomainResponse;
const DescribeTimingL4DataResponse = models.DescribeTimingL4DataResponse;
const CreateZoneResponse = models.CreateZoneResponse;
const Action = models.Action;
const ApplicationProxy = models.ApplicationProxy;
const ModifyApplicationProxyResponse = models.ModifyApplicationProxyResponse;
const ModifySecurityIPGroupResponse = models.ModifySecurityIPGroupResponse;
const CacheKey = models.CacheKey;
const ModifyOriginGroupRequest = models.ModifyOriginGroupRequest;
const DownloadL4LogsResponse = models.DownloadL4LogsResponse;
const DescribeTimingL7CacheDataResponse = models.DescribeTimingL7CacheDataResponse;
const RateLimitIntelligence = models.RateLimitIntelligence;
const IpTableConfig = models.IpTableConfig;
const ModifyApplicationProxyStatusRequest = models.ModifyApplicationProxyStatusRequest;
const DeleteOriginGroupResponse = models.DeleteOriginGroupResponse;
const Header = models.Header;
const RuleAndConditions = models.RuleAndConditions;
const DropPageConfig = models.DropPageConfig;
const SecEntry = models.SecEntry;
const DescribeIdentificationsRequest = models.DescribeIdentificationsRequest;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const PartialModule = models.PartialModule;
const CreateOriginGroupResponse = models.CreateOriginGroupResponse;
const ModifyApplicationProxyRuleStatusRequest = models.ModifyApplicationProxyRuleStatusRequest;
const AccelerateType = models.AccelerateType;
const BindZoneToPlanRequest = models.BindZoneToPlanRequest;
const CreateAccelerationDomainRequest = models.CreateAccelerationDomainRequest;
const FollowOrigin = models.FollowOrigin;
const DeleteZoneRequest = models.DeleteZoneRequest;
const BotManagedRule = models.BotManagedRule;
const NormalAction = models.NormalAction;
const TopDetailData = models.TopDetailData;
const DescribeOriginGroupRequest = models.DescribeOriginGroupRequest;
const ModifyApplicationProxyRuleResponse = models.ModifyApplicationProxyRuleResponse;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const AiRule = models.AiRule;
const CreateSecurityIPGroupRequest = models.CreateSecurityIPGroupRequest;
const DropPageDetail = models.DropPageDetail;
const DeleteRulesResponse = models.DeleteRulesResponse;
const QueryCondition = models.QueryCondition;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const CacheConfig = models.CacheConfig;
const ModifyApplicationProxyRuleRequest = models.ModifyApplicationProxyRuleRequest;
const ModifyAccelerationDomainResponse = models.ModifyAccelerationDomainResponse;
const FailReason = models.FailReason;
const DescribeRulesSettingRequest = models.DescribeRulesSettingRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const ModifyAliasDomainResponse = models.ModifyAliasDomainResponse;
const RewriteAction = models.RewriteAction;
const CheckCnameStatusRequest = models.CheckCnameStatusRequest;
const DeleteAliasDomainRequest = models.DeleteAliasDomainRequest;
const CnameStatus = models.CnameStatus;
const DeleteAccelerationDomainsResponse = models.DeleteAccelerationDomainsResponse;
const DescribeTopL7AnalysisDataResponse = models.DescribeTopL7AnalysisDataResponse;
const StandardDebug = models.StandardDebug;
const RuleNormalActionParams = models.RuleNormalActionParams;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const Resource = models.Resource;
const PrivateParameter = models.PrivateParameter;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const AclUserRule = models.AclUserRule;
const Quota = models.Quota;
const CreateOriginGroupRequest = models.CreateOriginGroupRequest;
const DescribeTimingL4DataRequest = models.DescribeTimingL4DataRequest;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const SubRuleItem = models.SubRuleItem;
const CreateSecurityIPGroupResponse = models.CreateSecurityIPGroupResponse;
const CreateSharedCNAMEResponse = models.CreateSharedCNAMEResponse;
const OwnershipVerification = models.OwnershipVerification;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const DescribeAvailablePlansResponse = models.DescribeAvailablePlansResponse;
const DescribeDDoSAttackEventRequest = models.DescribeDDoSAttackEventRequest;
const OriginGroup = models.OriginGroup;
const ModifySecurityIPGroupRequest = models.ModifySecurityIPGroupRequest;
const AlgDetectResult = models.AlgDetectResult;
const QueryString = models.QueryString;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const CreateSharedCNAMERequest = models.CreateSharedCNAMERequest;
const DescribeAccelerationDomainsRequest = models.DescribeAccelerationDomainsRequest;
const UpstreamHttp2 = models.UpstreamHttp2;
const TopEntryValue = models.TopEntryValue;
const OfflineCache = models.OfflineCache;
const DescribeDDoSAttackTopDataResponse = models.DescribeDDoSAttackTopDataResponse;
const DeleteAliasDomainResponse = models.DeleteAliasDomainResponse;
const ModifyAccelerationDomainStatusesRequest = models.ModifyAccelerationDomainStatusesRequest;
const BotConfig = models.BotConfig;
const TimingTypeValue = models.TimingTypeValue;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.tencentcloudapi.com", "2022-09-01", credential, region, profile);
    }
    
    /**
     * This API is used to modify an application proxy rule.
     * @param {ModifyApplicationProxyRuleRequest} req
     * @param {function(string, ModifyApplicationProxyRuleResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRule(req, cb) {
        let resp = new ModifyApplicationProxyRuleResponse();
        this.request("ModifyApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to delete an origin group.
     * @param {DeleteOriginGroupRequest} req
     * @param {function(string, DeleteOriginGroupResponse):void} cb
     * @public
     */
    DeleteOriginGroup(req, cb) {
        let resp = new DeleteOriginGroupResponse();
        this.request("DeleteOriginGroup", req, resp, cb);
    }

    /**
     * This API is used to create a shared CNAME.
     * @param {CreateSharedCNAMERequest} req
     * @param {function(string, CreateSharedCNAMEResponse):void} cb
     * @public
     */
    CreateSharedCNAME(req, cb) {
        let resp = new CreateSharedCNAMEResponse();
        this.request("CreateSharedCNAME", req, resp, cb);
    }

    /**
     * This API is used to delete a site.
     * @param {DeleteZoneRequest} req
     * @param {function(string, DeleteZoneResponse):void} cb
     * @public
     */
    DeleteZone(req, cb) {
        let resp = new DeleteZoneResponse();
        this.request("DeleteZone", req, resp, cb);
    }

    /**
     * When the origin server resource is updated but the node cache TTL has not expired, the user will still access the old resource. To solve this problem, you can use this API to purge the node cache. There are two action options: <li>Delete directly: Delete the node cache directly without any verification. Trigger origin-pull when the resource is requested.</li><li>Mark as expired: Set the node resource as expired, and trigger origin-pull verification when the resource, that is, send an HTTP conditional request with If-None-Match and If-Modified-Since headers. If the origin responds with 200, the node pulls new resources from the origin and update the cache. If the origin responds with 304, the node does not update the cache</li>.

For more details, see [Cache Purge](https://intl.cloud.tencent.com/document/product/1552/70759?from_cn_redirect=1).
     * @param {CreatePurgeTaskRequest} req
     * @param {function(string, CreatePurgeTaskResponse):void} cb
     * @public
     */
    CreatePurgeTask(req, cb) {
        let resp = new CreatePurgeTaskResponse();
        this.request("CreatePurgeTask", req, resp, cb);
    }

    /**
     * This API is used to create an origin group.
     * @param {CreateOriginGroupRequest} req
     * @param {function(string, CreateOriginGroupResponse):void} cb
     * @public
     */
    CreateOriginGroup(req, cb) {
        let resp = new CreateOriginGroupResponse();
        this.request("CreateOriginGroup", req, resp, cb);
    }

    /**
     * This API is used to create a security IP group.
     * @param {CreateSecurityIPGroupRequest} req
     * @param {function(string, CreateSecurityIPGroupResponse):void} cb
     * @public
     */
    CreateSecurityIPGroup(req, cb) {
        let resp = new CreateSecurityIPGroupResponse();
        this.request("CreateSecurityIPGroup", req, resp, cb);
    }

    /**
     * Querying the cache purging history
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * This API is used to modify the site configuration.
     * @param {ModifyZoneSettingRequest} req
     * @param {function(string, ModifyZoneSettingResponse):void} cb
     * @public
     */
    ModifyZoneSetting(req, cb) {
        let resp = new ModifyZoneSettingResponse();
        this.request("ModifyZoneSetting", req, resp, cb);
    }

    /**
     * This API is used to query the time-series L7 cached data.
     * @param {DescribeTimingL7CacheDataRequest} req
     * @param {function(string, DescribeTimingL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTimingL7CacheData(req, cb) {
        let resp = new DescribeTimingL7CacheDataResponse();
        this.request("DescribeTimingL7CacheData", req, resp, cb);
    }

    /**
     * This API is used to batch remove accelerated domain names.
     * @param {DeleteAccelerationDomainsRequest} req
     * @param {function(string, DeleteAccelerationDomainsResponse):void} cb
     * @public
     */
    DeleteAccelerationDomains(req, cb) {
        let resp = new DeleteAccelerationDomainsResponse();
        this.request("DeleteAccelerationDomains", req, resp, cb);
    }

    /**
     * This API is used to modify the certificate of a domain name.
     * @param {ModifyHostsCertificateRequest} req
     * @param {function(string, ModifyHostsCertificateResponse):void} cb
     * @public
     */
    ModifyHostsCertificate(req, cb) {
        let resp = new ModifyHostsCertificateResponse();
        this.request("ModifyHostsCertificate", req, resp, cb);
    }

    /**
     * This API is used to create a rule in the rule engine.
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * This API is used to purchase a plan for a new site.
     * @param {CreatePlanForZoneRequest} req
     * @param {function(string, CreatePlanForZoneResponse):void} cb
     * @public
     */
    CreatePlanForZone(req, cb) {
        let resp = new CreatePlanForZoneResponse();
        this.request("CreatePlanForZone", req, resp, cb);
    }

    /**
     * This API is used to query content management quotas.
     * @param {DescribeContentQuotaRequest} req
     * @param {function(string, DescribeContentQuotaResponse):void} cb
     * @public
     */
    DescribeContentQuota(req, cb) {
        let resp = new DescribeContentQuotaResponse();
        this.request("DescribeContentQuota", req, resp, cb);
    }

    /**
     * This API is used to modify an application proxy.
     * @param {ModifyApplicationProxyRequest} req
     * @param {function(string, ModifyApplicationProxyResponse):void} cb
     * @public
     */
    ModifyApplicationProxy(req, cb) {
        let resp = new ModifyApplicationProxyResponse();
        this.request("ModifyApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to query the verification information of a site.
     * @param {DescribeIdentificationsRequest} req
     * @param {function(string, DescribeIdentificationsResponse):void} cb
     * @public
     */
    DescribeIdentifications(req, cb) {
        let resp = new DescribeIdentificationsResponse();
        this.request("DescribeIdentifications", req, resp, cb);
    }

    /**
     * This API is used to access a new site.
     * @param {CreateZoneRequest} req
     * @param {function(string, CreateZoneResponse):void} cb
     * @public
     */
    CreateZone(req, cb) {
        let resp = new CreateZoneResponse();
        this.request("CreateZone", req, resp, cb);
    }

    /**
     * This API is used to modify a site.
     * @param {ModifyZoneRequest} req
     * @param {function(string, ModifyZoneResponse):void} cb
     * @public
     */
    ModifyZone(req, cb) {
        let resp = new ModifyZoneResponse();
        this.request("ModifyZone", req, resp, cb);
    }

    /**
     * This API is used to query detailed domain name configuration.
     * @param {DescribeHostsSettingRequest} req
     * @param {function(string, DescribeHostsSettingResponse):void} cb
     * @public
     */
    DescribeHostsSetting(req, cb) {
        let resp = new DescribeHostsSettingResponse();
        this.request("DescribeHostsSetting", req, resp, cb);
    }

    /**
     * This API is used to query plan options available for purchase.
     * @param {DescribeAvailablePlansRequest} req
     * @param {function(string, DescribeAvailablePlansResponse):void} cb
     * @public
     */
    DescribeAvailablePlans(req, cb) {
        let resp = new DescribeAvailablePlansResponse();
        this.request("DescribeAvailablePlans", req, resp, cb);
    }

    /**
     * This API is used to verify ownership of the site.
     * @param {IdentifyZoneRequest} req
     * @param {function(string, IdentifyZoneResponse):void} cb
     * @public
     */
    IdentifyZone(req, cb) {
        let resp = new IdentifyZoneResponse();
        this.request("IdentifyZone", req, resp, cb);
    }

    /**
     * This API is used to query the origin protection configuration.
     * @param {DescribeOriginProtectionRequest} req
     * @param {function(string, DescribeOriginProtectionResponse):void} cb
     * @public
     */
    DescribeOriginProtection(req, cb) {
        let resp = new DescribeOriginProtectionResponse();
        this.request("DescribeOriginProtection", req, resp, cb);
    }

    /**
     * This API is used to query a list of default certificates.
     * @param {DescribeDefaultCertificatesRequest} req
     * @param {function(string, DescribeDefaultCertificatesResponse):void} cb
     * @public
     */
    DescribeDefaultCertificates(req, cb) {
        let resp = new DescribeDefaultCertificatesResponse();
        this.request("DescribeDefaultCertificates", req, resp, cb);
    }

    /**
     * This API is used to query the site configuration.
     * @param {DescribeZoneSettingRequest} req
     * @param {function(string, DescribeZoneSettingResponse):void} cb
     * @public
     */
    DescribeZoneSetting(req, cb) {
        let resp = new DescribeZoneSettingResponse();
        this.request("DescribeZoneSetting", req, resp, cb);
    }

    /**
     * This API is used to return the list of the settings of the rule engine that can be used for request match and their detailed recommended configuration information.
     * @param {DescribeRulesSettingRequest} req
     * @param {function(string, DescribeRulesSettingResponse):void} cb
     * @public
     */
    DescribeRulesSetting(req, cb) {
        let resp = new DescribeRulesSettingResponse();
        this.request("DescribeRulesSetting", req, resp, cb);
    }

    /**
     * This API is used to query accelerated domain names. Paging, sorting and filtering are supported.
     * @param {DescribeAccelerationDomainsRequest} req
     * @param {function(string, DescribeAccelerationDomainsResponse):void} cb
     * @public
     */
    DescribeAccelerationDomains(req, cb) {
        let resp = new DescribeAccelerationDomainsResponse();
        this.request("DescribeAccelerationDomains", req, resp, cb);
    }

    /**
     * This API is used to modify an origin group.
     * @param {ModifyOriginGroupRequest} req
     * @param {function(string, ModifyOriginGroupResponse):void} cb
     * @public
     */
    ModifyOriginGroup(req, cb) {
        let resp = new ModifyOriginGroupResponse();
        this.request("ModifyOriginGroup", req, resp, cb);
    }

    /**
     * This API is used to delete a specified security IP group. Note that the security IP group cannot be deleted if it is referenced in a rule.
     * @param {DeleteSecurityIPGroupRequest} req
     * @param {function(string, DeleteSecurityIPGroupResponse):void} cb
     * @public
     */
    DeleteSecurityIPGroup(req, cb) {
        let resp = new DeleteSecurityIPGroupResponse();
        this.request("DeleteSecurityIPGroup", req, resp, cb);
    }

    /**
     * This API is used to create an application proxy rule.
     * @param {CreateApplicationProxyRuleRequest} req
     * @param {function(string, CreateApplicationProxyRuleResponse):void} cb
     * @public
     */
    CreateApplicationProxyRule(req, cb) {
        let resp = new CreateApplicationProxyRuleResponse();
        this.request("CreateApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to query the pre-warming task status.
     * @param {DescribePrefetchTasksRequest} req
     * @param {function(string, DescribePrefetchTasksResponse):void} cb
     * @public
     */
    DescribePrefetchTasks(req, cb) {
        let resp = new DescribePrefetchTasksResponse();
        this.request("DescribePrefetchTasks", req, resp, cb);
    }

    /**
     * This API is used to query the list of user sites.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to query the top-ranked DDoS attack data.
     * @param {DescribeDDoSAttackTopDataRequest} req
     * @param {function(string, DescribeDDoSAttackTopDataResponse):void} cb
     * @public
     */
    DescribeDDoSAttackTopData(req, cb) {
        let resp = new DescribeDDoSAttackTopDataResponse();
        this.request("DescribeDDoSAttackTopData", req, resp, cb);
    }

    /**
     * This API is used to delete an application proxy.
     * @param {DeleteApplicationProxyRequest} req
     * @param {function(string, DeleteApplicationProxyResponse):void} cb
     * @public
     */
    DeleteApplicationProxy(req, cb) {
        let resp = new DeleteApplicationProxyResponse();
        this.request("DeleteApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to query the cached L7 top-ranked data.
     * @param {DescribeTopL7CacheDataRequest} req
     * @param {function(string, DescribeTopL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTopL7CacheData(req, cb) {
        let resp = new DescribeTopL7CacheDataResponse();
        this.request("DescribeTopL7CacheData", req, resp, cb);
    }

    /**
     * This API is used to create an alias domain name.
     * @param {CreateAliasDomainRequest} req
     * @param {function(string, CreateAliasDomainResponse):void} cb
     * @public
     */
    CreateAliasDomain(req, cb) {
        let resp = new CreateAliasDomainResponse();
        this.request("CreateAliasDomain", req, resp, cb);
    }

    /**
     * This API is used to change the site status.
     * @param {ModifyZoneStatusRequest} req
     * @param {function(string, ModifyZoneStatusResponse):void} cb
     * @public
     */
    ModifyZoneStatus(req, cb) {
        let resp = new ModifyZoneStatusResponse();
        this.request("ModifyZoneStatus", req, resp, cb);
    }

    /**
     * This API is used to modify the status of an alias domain name.
     * @param {ModifyAliasDomainStatusRequest} req
     * @param {function(string, ModifyAliasDomainStatusResponse):void} cb
     * @public
     */
    ModifyAliasDomainStatus(req, cb) {
        let resp = new ModifyAliasDomainStatusResponse();
        this.request("ModifyAliasDomainStatus", req, resp, cb);
    }

    /**
     * This API is used to download L7 logs.
     * @param {DownloadL7LogsRequest} req
     * @param {function(string, DownloadL7LogsResponse):void} cb
     * @public
     */
    DownloadL7Logs(req, cb) {
        let resp = new DownloadL7LogsResponse();
        this.request("DownloadL7Logs", req, resp, cb);
    }

    /**
     * This API is used to delete an application proxy rule.
     * @param {DeleteApplicationProxyRuleRequest} req
     * @param {function(string, DeleteApplicationProxyRuleResponse):void} cb
     * @public
     */
    DeleteApplicationProxyRule(req, cb) {
        let resp = new DeleteApplicationProxyRuleResponse();
        this.request("DeleteApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to query the CNAME status of a domain name.
     * @param {CheckCnameStatusRequest} req
     * @param {function(string, CheckCnameStatusResponse):void} cb
     * @public
     */
    CheckCnameStatus(req, cb) {
        let resp = new CheckCnameStatusResponse();
        this.request("CheckCnameStatus", req, resp, cb);
    }

    /**
     * This API is used to batch delete rules from the rule engine.
     * @param {DeleteRulesRequest} req
     * @param {function(string, DeleteRulesResponse):void} cb
     * @public
     */
    DeleteRules(req, cb) {
        let resp = new DeleteRulesResponse();
        this.request("DeleteRules", req, resp, cb);
    }

    /**
     * This API is used to query the list of L4 traffic data recorded over time.
     * @param {DescribeTimingL4DataRequest} req
     * @param {function(string, DescribeTimingL4DataResponse):void} cb
     * @public
     */
    DescribeTimingL4Data(req, cb) {
        let resp = new DescribeTimingL4DataResponse();
        this.request("DescribeTimingL4Data", req, resp, cb);
    }

    /**
     * This API is used to batch modify the status of accelerated domains.
     * @param {ModifyAccelerationDomainStatusesRequest} req
     * @param {function(string, ModifyAccelerationDomainStatusesResponse):void} cb
     * @public
     */
    ModifyAccelerationDomainStatuses(req, cb) {
        let resp = new ModifyAccelerationDomainStatusesResponse();
        this.request("ModifyAccelerationDomainStatuses", req, resp, cb);
    }

    /**
     * This API is used to modify a rule in the rule engine.
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }

    /**
     * This API is used to query the top-ranked L7 traffic data.
     * @param {DescribeTopL7AnalysisDataRequest} req
     * @param {function(string, DescribeTopL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTopL7AnalysisData(req, cb) {
        let resp = new DescribeTopL7AnalysisDataResponse();
        this.request("DescribeTopL7AnalysisData", req, resp, cb);
    }

    /**
     * This API is used to query the time-series data of DDoS attacks.
     * @param {DescribeDDoSAttackDataRequest} req
     * @param {function(string, DescribeDDoSAttackDataResponse):void} cb
     * @public
     */
    DescribeDDoSAttackData(req, cb) {
        let resp = new DescribeDDoSAttackDataResponse();
        this.request("DescribeDDoSAttackData", req, resp, cb);
    }

    /**
     * This API is used to query DDoS attack events.
     * @param {DescribeDDoSAttackEventRequest} req
     * @param {function(string, DescribeDDoSAttackEventResponse):void} cb
     * @public
     */
    DescribeDDoSAttackEvent(req, cb) {
        let resp = new DescribeDDoSAttackEventResponse();
        this.request("DescribeDDoSAttackEvent", req, resp, cb);
    }

    /**
     * This API is used to modify the web and bot security configurations.
     * @param {ModifySecurityPolicyRequest} req
     * @param {function(string, ModifySecurityPolicyResponse):void} cb
     * @public
     */
    ModifySecurityPolicy(req, cb) {
        let resp = new ModifySecurityPolicyResponse();
        this.request("ModifySecurityPolicy", req, resp, cb);
    }

    /**
     * This API is used to download L4 logs.
     * @param {DownloadL4LogsRequest} req
     * @param {function(string, DownloadL4LogsResponse):void} cb
     * @public
     */
    DownloadL4Logs(req, cb) {
        let resp = new DownloadL4LogsResponse();
        this.request("DownloadL4Logs", req, resp, cb);
    }

    /**
     * This API is used to create a pre-warming task.
     * @param {CreatePrefetchTaskRequest} req
     * @param {function(string, CreatePrefetchTaskResponse):void} cb
     * @public
     */
    CreatePrefetchTask(req, cb) {
        let resp = new CreatePrefetchTaskResponse();
        this.request("CreatePrefetchTask", req, resp, cb);
    }

    /**
     * This API is used to delete an alias domain name.
     * @param {DeleteAliasDomainRequest} req
     * @param {function(string, DeleteAliasDomainResponse):void} cb
     * @public
     */
    DeleteAliasDomain(req, cb) {
        let resp = new DeleteAliasDomainResponse();
        this.request("DeleteAliasDomain", req, resp, cb);
    }

    /**
     * This API is used to query the L7 traffic summary statistics recorded over time.
     * @param {DescribeOverviewL7DataRequest} req
     * @param {function(string, DescribeOverviewL7DataResponse):void} cb
     * @public
     */
    DescribeOverviewL7Data(req, cb) {
        let resp = new DescribeOverviewL7DataResponse();
        this.request("DescribeOverviewL7Data", req, resp, cb);
    }

    /**
     * This API is used to bind a site to a plan.
     * @param {BindZoneToPlanRequest} req
     * @param {function(string, BindZoneToPlanResponse):void} cb
     * @public
     */
    BindZoneToPlan(req, cb) {
        let resp = new BindZoneToPlanResponse();
        this.request("BindZoneToPlan", req, resp, cb);
    }

    /**
     * This API is used to connect a domain to EdgeOne.
     * @param {CreateAccelerationDomainRequest} req
     * @param {function(string, CreateAccelerationDomainResponse):void} cb
     * @public
     */
    CreateAccelerationDomain(req, cb) {
        let resp = new CreateAccelerationDomainResponse();
        this.request("CreateAccelerationDomain", req, resp, cb);
    }

    /**
     * This API is used to query the information of alias domain names.
     * @param {DescribeAliasDomainsRequest} req
     * @param {function(string, DescribeAliasDomainsResponse):void} cb
     * @public
     */
    DescribeAliasDomains(req, cb) {
        let resp = new DescribeAliasDomainsResponse();
        this.request("DescribeAliasDomains", req, resp, cb);
    }

    /**
     * This API is used to modify an accelerated domain name.
     * @param {ModifyAccelerationDomainRequest} req
     * @param {function(string, ModifyAccelerationDomainResponse):void} cb
     * @public
     */
    ModifyAccelerationDomain(req, cb) {
        let resp = new ModifyAccelerationDomainResponse();
        this.request("ModifyAccelerationDomain", req, resp, cb);
    }

    /**
     * This API is used to modify a security IP group.
     * @param {ModifySecurityIPGroupRequest} req
     * @param {function(string, ModifySecurityIPGroupResponse):void} cb
     * @public
     */
    ModifySecurityIPGroup(req, cb) {
        let resp = new ModifySecurityIPGroupResponse();
        this.request("ModifySecurityIPGroup", req, resp, cb);
    }

    /**
     * This API is used to query the rules in the rule engine.
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * This API is used to create an application proxy.
     * @param {CreateApplicationProxyRequest} req
     * @param {function(string, CreateApplicationProxyResponse):void} cb
     * @public
     */
    CreateApplicationProxy(req, cb) {
        let resp = new CreateApplicationProxyResponse();
        this.request("CreateApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of origin groups.
     * @param {DescribeOriginGroupRequest} req
     * @param {function(string, DescribeOriginGroupResponse):void} cb
     * @public
     */
    DescribeOriginGroup(req, cb) {
        let resp = new DescribeOriginGroupResponse();
        this.request("DescribeOriginGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the status of an application proxy.
     * @param {ModifyApplicationProxyStatusRequest} req
     * @param {function(string, ModifyApplicationProxyStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyStatus(req, cb) {
        let resp = new ModifyApplicationProxyStatusResponse();
        this.request("ModifyApplicationProxyStatus", req, resp, cb);
    }

    /**
     * This API is used to query the L7 data recorded over time.
     * @param {DescribeTimingL7AnalysisDataRequest} req
     * @param {function(string, DescribeTimingL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTimingL7AnalysisData(req, cb) {
        let resp = new DescribeTimingL7AnalysisDataResponse();
        this.request("DescribeTimingL7AnalysisData", req, resp, cb);
    }

    /**
     * This API is used to modify an alias domain name.
     * @param {ModifyAliasDomainRequest} req
     * @param {function(string, ModifyAliasDomainResponse):void} cb
     * @public
     */
    ModifyAliasDomain(req, cb) {
        let resp = new ModifyAliasDomainResponse();
        this.request("ModifyAliasDomain", req, resp, cb);
    }

    /**
     * This API is used to modify the status of an application proxy rule.
     * @param {ModifyApplicationProxyRuleStatusRequest} req
     * @param {function(string, ModifyApplicationProxyRuleStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRuleStatus(req, cb) {
        let resp = new ModifyApplicationProxyRuleStatusResponse();
        this.request("ModifyApplicationProxyRuleStatus", req, resp, cb);
    }

    /**
     * This API is used to query the list of application proxies.
     * @param {DescribeApplicationProxiesRequest} req
     * @param {function(string, DescribeApplicationProxiesResponse):void} cb
     * @public
     */
    DescribeApplicationProxies(req, cb) {
        let resp = new DescribeApplicationProxiesResponse();
        this.request("DescribeApplicationProxies", req, resp, cb);
    }


}
module.exports = TeoClient;
