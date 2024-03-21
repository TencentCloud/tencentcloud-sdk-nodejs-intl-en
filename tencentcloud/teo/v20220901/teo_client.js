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
const DeployConfigGroupVersionRequest = models.DeployConfigGroupVersionRequest;
const Compression = models.Compression;
const DeleteL4ProxyRulesRequest = models.DeleteL4ProxyRulesRequest;
const DescribeOriginGroupResponse = models.DescribeOriginGroupResponse;
const SlowPostConfig = models.SlowPostConfig;
const DescribeConfigGroupVersionDetailResponse = models.DescribeConfigGroupVersionDetailResponse;
const OriginDetail = models.OriginDetail;
const ModifyAccelerationDomainResponse = models.ModifyAccelerationDomainResponse;
const TopEntryValue = models.TopEntryValue;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const Origin = models.Origin;
const DescribeRulesResponse = models.DescribeRulesResponse;
const TimingDataRecord = models.TimingDataRecord;
const CreateCLSIndexResponse = models.CreateCLSIndexResponse;
const DescribeRealtimeLogDeliveryTasksRequest = models.DescribeRealtimeLogDeliveryTasksRequest;
const DescribeOriginProtectionResponse = models.DescribeOriginProtectionResponse;
const DescribeBillingDataRequest = models.DescribeBillingDataRequest;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const DescribeAliasDomainsRequest = models.DescribeAliasDomainsRequest;
const RateLimitConfig = models.RateLimitConfig;
const CreateRealtimeLogDeliveryTaskRequest = models.CreateRealtimeLogDeliveryTaskRequest;
const ModifyAccelerationDomainStatusesResponse = models.ModifyAccelerationDomainStatusesResponse;
const DeployRecord = models.DeployRecord;
const RuleExtraParameter = models.RuleExtraParameter;
const WebSocket = models.WebSocket;
const ModifyAccelerationDomainRequest = models.ModifyAccelerationDomainRequest;
const WafConfig = models.WafConfig;
const CreateAliasDomainRequest = models.CreateAliasDomainRequest;
const CLSTopic = models.CLSTopic;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DescribeApplicationProxiesResponse = models.DescribeApplicationProxiesResponse;
const DescribeTopL7AnalysisDataRequest = models.DescribeTopL7AnalysisDataRequest;
const DescribeAccelerationDomainsResponse = models.DescribeAccelerationDomainsResponse;
const SwitchConfig = models.SwitchConfig;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const ModifyL4ProxyResponse = models.ModifyL4ProxyResponse;
const DescribeAliasDomainsResponse = models.DescribeAliasDomainsResponse;
const EnvInfo = models.EnvInfo;
const PlanInfo = models.PlanInfo;
const DescribeTimingL7CacheDataRequest = models.DescribeTimingL7CacheDataRequest;
const S3 = models.S3;
const DescribeDDoSAttackEventResponse = models.DescribeDDoSAttackEventResponse;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const ForceRedirect = models.ForceRedirect;
const CodeAction = models.CodeAction;
const CachePrefresh = models.CachePrefresh;
const DescribeTimingL7AnalysisDataResponse = models.DescribeTimingL7AnalysisDataResponse;
const ImageOptimize = models.ImageOptimize;
const BotPortraitRule = models.BotPortraitRule;
const RulesProperties = models.RulesProperties;
const RuleCodeActionParams = models.RuleCodeActionParams;
const OriginGroupReference = models.OriginGroupReference;
const ExceptUserRule = models.ExceptUserRule;
const AccelerateType = models.AccelerateType;
const SubRule = models.SubRule;
const ConfigGroupVersionInfo = models.ConfigGroupVersionInfo;
const VerifyOwnershipResponse = models.VerifyOwnershipResponse;
const Sv = models.Sv;
const Rule = models.Rule;
const DownloadL4LogsRequest = models.DownloadL4LogsRequest;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const BillingDataFilter = models.BillingDataFilter;
const DescribeTimingL7CacheDataResponse = models.DescribeTimingL7CacheDataResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const Header = models.Header;
const CustomField = models.CustomField;
const CreateL4ProxyRulesRequest = models.CreateL4ProxyRulesRequest;
const DeleteZoneRequest = models.DeleteZoneRequest;
const BotManagedRule = models.BotManagedRule;
const SecurityConfig = models.SecurityConfig;
const L4OfflineLog = models.L4OfflineLog;
const ExceptUserRuleScope = models.ExceptUserRuleScope;
const SecEntryValue = models.SecEntryValue;
const ModifyL4ProxyRulesRequest = models.ModifyL4ProxyRulesRequest;
const DescribeRulesSettingRequest = models.DescribeRulesSettingRequest;
const EntityStatus = models.EntityStatus;
const ModifyAliasDomainRequest = models.ModifyAliasDomainRequest;
const RuleNormalActionParams = models.RuleNormalActionParams;
const PrivateParameter = models.PrivateParameter;
const CreateSecurityIPGroupRequest = models.CreateSecurityIPGroupRequest;
const CreateOriginGroupRequest = models.CreateOriginGroupRequest;
const TopDataRecord = models.TopDataRecord;
const CreateSecurityIPGroupResponse = models.CreateSecurityIPGroupResponse;
const CreateSharedCNAMEResponse = models.CreateSharedCNAMEResponse;
const DescribeAvailablePlansResponse = models.DescribeAvailablePlansResponse;
const RateLimitTemplate = models.RateLimitTemplate;
const ModifyRealtimeLogDeliveryTaskResponse = models.ModifyRealtimeLogDeliveryTaskResponse;
const AccelerationDomainCertificate = models.AccelerationDomainCertificate;
const DescribeSecurityTemplateBindingsRequest = models.DescribeSecurityTemplateBindingsRequest;
const AlgDetectResult = models.AlgDetectResult;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const StandardDebug = models.StandardDebug;
const DescribeDDoSAttackTopDataResponse = models.DescribeDDoSAttackTopDataResponse;
const DeleteRulesRequest = models.DeleteRulesRequest;
const ExceptUserRuleCondition = models.ExceptUserRuleCondition;
const MaxAge = models.MaxAge;
const DeleteApplicationProxyResponse = models.DeleteApplicationProxyResponse;
const AlgDetectRule = models.AlgDetectRule;
const DiffIPWhitelist = models.DiffIPWhitelist;
const DeleteSecurityIPGroupResponse = models.DeleteSecurityIPGroupResponse;
const ModifyRuleRequest = models.ModifyRuleRequest;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const ModifyL4ProxyStatusResponse = models.ModifyL4ProxyStatusResponse;
const FileVerification = models.FileVerification;
const ModifySecurityPolicyRequest = models.ModifySecurityPolicyRequest;
const SmartRouting = models.SmartRouting;
const CreateApplicationProxyResponse = models.CreateApplicationProxyResponse;
const BotUserRule = models.BotUserRule;
const Task = models.Task;
const DescribeL4ProxyRulesResponse = models.DescribeL4ProxyRulesResponse;
const DeleteAliasDomainRequest = models.DeleteAliasDomainRequest;
const DescribeIdentificationsResponse = models.DescribeIdentificationsResponse;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const DeleteApplicationProxyRuleResponse = models.DeleteApplicationProxyRuleResponse;
const ExceptConfig = models.ExceptConfig;
const DeleteOriginGroupRequest = models.DeleteOriginGroupRequest;
const AclCondition = models.AclCondition;
const L7OfflineLog = models.L7OfflineLog;
const ModifyRuleResponse = models.ModifyRuleResponse;
const ApplicationProxyRule = models.ApplicationProxyRule;
const Zone = models.Zone;
const DescribeRulesSettingResponse = models.DescribeRulesSettingResponse;
const BindSecurityTemplateToEntityResponse = models.BindSecurityTemplateToEntityResponse;
const ModifyL4ProxyRulesResponse = models.ModifyL4ProxyRulesResponse;
const DDoSAttackEvent = models.DDoSAttackEvent;
const DescribeConfigGroupVersionDetailRequest = models.DescribeConfigGroupVersionDetailRequest;
const DropPageDetail = models.DropPageDetail;
const CnameStatus = models.CnameStatus;
const ServerCertInfo = models.ServerCertInfo;
const DescribeZonesRequest = models.DescribeZonesRequest;
const OriginRecord = models.OriginRecord;
const Tag = models.Tag;
const BindSharedCNAMEResponse = models.BindSharedCNAMEResponse;
const DeleteSharedCNAMERequest = models.DeleteSharedCNAMERequest;
const ModifyRealtimeLogDeliveryTaskRequest = models.ModifyRealtimeLogDeliveryTaskRequest;
const VanityNameServers = models.VanityNameServers;
const IPGroup = models.IPGroup;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const ModifyApplicationProxyRuleResponse = models.ModifyApplicationProxyRuleResponse;
const DDoS = models.DDoS;
const CreateConfigGroupVersionResponse = models.CreateConfigGroupVersionResponse;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const RuleItem = models.RuleItem;
const Cache = models.Cache;
const DetailHost = models.DetailHost;
const DescribeRealtimeLogDeliveryTasksResponse = models.DescribeRealtimeLogDeliveryTasksResponse;
const DescribeConfigGroupVersionsResponse = models.DescribeConfigGroupVersionsResponse;
const DeleteRealtimeLogDeliveryTaskResponse = models.DeleteRealtimeLogDeliveryTaskResponse;
const RuleCondition = models.RuleCondition;
const DescribeOverviewL7DataResponse = models.DescribeOverviewL7DataResponse;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const TimingDataItem = models.TimingDataItem;
const RateLimitUserRule = models.RateLimitUserRule;
const CreatePlanForZoneRequest = models.CreatePlanForZoneRequest;
const CreateL4ProxyRulesResponse = models.CreateL4ProxyRulesResponse;
const CacheKey = models.CacheKey;
const DownloadL4LogsResponse = models.DownloadL4LogsResponse;
const BindSharedCNAMERequest = models.BindSharedCNAMERequest;
const IpTableConfig = models.IpTableConfig;
const DeleteOriginGroupResponse = models.DeleteOriginGroupResponse;
const DescribeL4ProxyRequest = models.DescribeL4ProxyRequest;
const DescribeIdentificationsRequest = models.DescribeIdentificationsRequest;
const TemplateScope = models.TemplateScope;
const CreateAccelerationDomainRequest = models.CreateAccelerationDomainRequest;
const NormalAction = models.NormalAction;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const CacheConfig = models.CacheConfig;
const OfflineCache = models.OfflineCache;
const CreateConfigGroupVersionRequest = models.CreateConfigGroupVersionRequest;
const AclUserRule = models.AclUserRule;
const DescribeDDoSAttackEventRequest = models.DescribeDDoSAttackEventRequest;
const CreateL4ProxyResponse = models.CreateL4ProxyResponse;
const DescribeOriginGroupRequest = models.DescribeOriginGroupRequest;
const DescribeIPRegionRequest = models.DescribeIPRegionRequest;
const TimingTypeValue = models.TimingTypeValue;
const CreatePlanForZoneResponse = models.CreatePlanForZoneResponse;
const ModifyL4ProxyRulesStatusResponse = models.ModifyL4ProxyRulesStatusResponse;
const CheckCnameStatusResponse = models.CheckCnameStatusResponse;
const CustomEndpoint = models.CustomEndpoint;
const VerifyOwnershipRequest = models.VerifyOwnershipRequest;
const DeleteL4ProxyRequest = models.DeleteL4ProxyRequest;
const DeleteApplicationProxyRequest = models.DeleteApplicationProxyRequest;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const FailReason = models.FailReason;
const DescribeL4ProxyResponse = models.DescribeL4ProxyResponse;
const ModifyOriginGroupResponse = models.ModifyOriginGroupResponse;
const DeleteAccelerationDomainsRequest = models.DeleteAccelerationDomainsRequest;
const RealtimeLogDeliveryTask = models.RealtimeLogDeliveryTask;
const DescribeDeployHistoryRequest = models.DescribeDeployHistoryRequest;
const BillingData = models.BillingData;
const DeleteZoneResponse = models.DeleteZoneResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const BindZoneToPlanResponse = models.BindZoneToPlanResponse;
const WafRule = models.WafRule;
const ModifyApplicationProxyRequest = models.ModifyApplicationProxyRequest;
const ModifyAliasDomainStatusRequest = models.ModifyAliasDomainStatusRequest;
const BindSharedCNAMEMap = models.BindSharedCNAMEMap;
const DeleteRealtimeLogDeliveryTaskRequest = models.DeleteRealtimeLogDeliveryTaskRequest;
const RulesSettingAction = models.RulesSettingAction;
const Ipv6 = models.Ipv6;
const ModifyApplicationProxyRuleRequest = models.ModifyApplicationProxyRuleRequest;
const AclConfig = models.AclConfig;
const AlgDetectJS = models.AlgDetectJS;
const SubRuleItem = models.SubRuleItem;
const DeleteSecurityIPGroupRequest = models.DeleteSecurityIPGroupRequest;
const Grpc = models.Grpc;
const CreateAliasDomainResponse = models.CreateAliasDomainResponse;
const ClientIpCountry = models.ClientIpCountry;
const DeleteApplicationProxyRuleRequest = models.DeleteApplicationProxyRuleRequest;
const FileAscriptionInfo = models.FileAscriptionInfo;
const CreateRealtimeLogDeliveryTaskResponse = models.CreateRealtimeLogDeliveryTaskResponse;
const DescribeTopL7CacheDataResponse = models.DescribeTopL7CacheDataResponse;
const RuleChoicePropertiesItem = models.RuleChoicePropertiesItem;
const DescribeSecurityTemplateBindingsResponse = models.DescribeSecurityTemplateBindingsResponse;
const ModifyAliasDomainStatusResponse = models.ModifyAliasDomainStatusResponse;
const DescribeTimingL7AnalysisDataRequest = models.DescribeTimingL7AnalysisDataRequest;
const NoCache = models.NoCache;
const ModifyApplicationProxyStatusRequest = models.ModifyApplicationProxyStatusRequest;
const CreateZoneRequest = models.CreateZoneRequest;
const AscriptionInfo = models.AscriptionInfo;
const FirstPartConfig = models.FirstPartConfig;
const Waf = models.Waf;
const ModifyZoneRequest = models.ModifyZoneRequest;
const DDosProtectionConfig = models.DDosProtectionConfig;
const DescribeDDoSAttackDataRequest = models.DescribeDDoSAttackDataRequest;
const CreateL4ProxyRequest = models.CreateL4ProxyRequest;
const DescribeApplicationProxiesRequest = models.DescribeApplicationProxiesRequest;
const DescribeContentQuotaRequest = models.DescribeContentQuotaRequest;
const Hsts = models.Hsts;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const CreateRuleRequest = models.CreateRuleRequest;
const ModifyL4ProxyStatusRequest = models.ModifyL4ProxyStatusRequest;
const RateLimitTemplateDetail = models.RateLimitTemplateDetail;
const CreateApplicationProxyRuleResponse = models.CreateApplicationProxyRuleResponse;
const CertificateInfo = models.CertificateInfo;
const CreateApplicationProxyRequest = models.CreateApplicationProxyRequest;
const CC = models.CC;
const ModifyL4ProxyRulesStatusRequest = models.ModifyL4ProxyRulesStatusRequest;
const DescribeTimingL4DataResponse = models.DescribeTimingL4DataResponse;
const Action = models.Action;
const ApplicationProxy = models.ApplicationProxy;
const ModifyApplicationProxyResponse = models.ModifyApplicationProxyResponse;
const ModifySecurityIPGroupResponse = models.ModifySecurityIPGroupResponse;
const ZoneSetting = models.ZoneSetting;
const ModifyL4ProxyRequest = models.ModifyL4ProxyRequest;
const RuleAndConditions = models.RuleAndConditions;
const DropPageConfig = models.DropPageConfig;
const PartialModule = models.PartialModule;
const ModifyApplicationProxyRuleStatusRequest = models.ModifyApplicationProxyRuleStatusRequest;
const SecEntry = models.SecEntry;
const DeliveryCondition = models.DeliveryCondition;
const FollowOrigin = models.FollowOrigin;
const IPRegionInfo = models.IPRegionInfo;
const QueryCondition = models.QueryCondition;
const RuleRewriteActionParams = models.RuleRewriteActionParams;
const ModifyAliasDomainResponse = models.ModifyAliasDomainResponse;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const DeleteAccelerationDomainsResponse = models.DeleteAccelerationDomainsResponse;
const DescribeTopL7AnalysisDataResponse = models.DescribeTopL7AnalysisDataResponse;
const ClientIpHeader = models.ClientIpHeader;
const Resource = models.Resource;
const DescribeOriginProtectionRequest = models.DescribeOriginProtectionRequest;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const DeleteRulesResponse = models.DeleteRulesResponse;
const OriginGroup = models.OriginGroup;
const ModifySecurityIPGroupRequest = models.ModifySecurityIPGroupRequest;
const L4Proxy = models.L4Proxy;
const SkipCondition = models.SkipCondition;
const CreateSharedCNAMERequest = models.CreateSharedCNAMERequest;
const UpstreamHttp2 = models.UpstreamHttp2;
const DeleteAliasDomainResponse = models.DeleteAliasDomainResponse;
const BotConfig = models.BotConfig;
const DnsVerification = models.DnsVerification;
const DescribeTopL7CacheDataRequest = models.DescribeTopL7CacheDataRequest;
const OriginInfo = models.OriginInfo;
const Https = models.Https;
const L4ProxyRule = models.L4ProxyRule;
const AdvancedFilter = models.AdvancedFilter;
const DescribeDDoSAttackDataResponse = models.DescribeDDoSAttackDataResponse;
const TemplateConfig = models.TemplateConfig;
const BotExtendAction = models.BotExtendAction;
const DeleteL4ProxyResponse = models.DeleteL4ProxyResponse;
const ModifyApplicationProxyRuleStatusResponse = models.ModifyApplicationProxyRuleStatusResponse;
const CreateApplicationProxyRuleRequest = models.CreateApplicationProxyRuleRequest;
const DescribeIPRegionResponse = models.DescribeIPRegionResponse;
const DescribeAvailablePlansRequest = models.DescribeAvailablePlansRequest;
const CreateOriginGroupResponse = models.CreateOriginGroupResponse;
const ModifyZoneResponse = models.ModifyZoneResponse;
const AlgDetectSession = models.AlgDetectSession;
const OriginProtectionInfo = models.OriginProtectionInfo;
const AliasDomain = models.AliasDomain;
const RewriteAction = models.RewriteAction;
const IpTableRule = models.IpTableRule;
const DescribeDDoSAttackTopDataRequest = models.DescribeDDoSAttackTopDataRequest;
const Quic = models.Quic;
const CreateCLSIndexRequest = models.CreateCLSIndexRequest;
const DescribeRulesRequest = models.DescribeRulesRequest;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const AccelerationDomain = models.AccelerationDomain;
const SlowRateConfig = models.SlowRateConfig;
const TopDetailData = models.TopDetailData;
const DescribeOverviewL7DataRequest = models.DescribeOverviewL7DataRequest;
const DeleteSharedCNAMEResponse = models.DeleteSharedCNAMEResponse;
const DDoSBlockData = models.DDoSBlockData;
const DeleteL4ProxyRulesResponse = models.DeleteL4ProxyRulesResponse;
const BindZoneToPlanRequest = models.BindZoneToPlanRequest;
const SecurityType = models.SecurityType;
const IPWhitelist = models.IPWhitelist;
const ModifyApplicationProxyStatusResponse = models.ModifyApplicationProxyStatusResponse;
const Identification = models.Identification;
const TopEntry = models.TopEntry;
const NsVerification = models.NsVerification;
const AccelerateMainland = models.AccelerateMainland;
const BindSecurityTemplateToEntityRequest = models.BindSecurityTemplateToEntityRequest;
const IntelligenceRuleItem = models.IntelligenceRuleItem;
const IntelligenceRule = models.IntelligenceRule;
const PostMaxSize = models.PostMaxSize;
const DescribeBillingDataResponse = models.DescribeBillingDataResponse;
const Filter = models.Filter;
const CreateAccelerationDomainResponse = models.CreateAccelerationDomainResponse;
const ModifyAccelerationDomainStatusesRequest = models.ModifyAccelerationDomainStatusesRequest;
const CreateZoneResponse = models.CreateZoneResponse;
const ModifySecurityPolicyResponse = models.ModifySecurityPolicyResponse;
const ModifyOriginGroupRequest = models.ModifyOriginGroupRequest;
const SecurityTemplateBinding = models.SecurityTemplateBinding;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const OwnershipVerification = models.OwnershipVerification;
const DescribeConfigGroupVersionsRequest = models.DescribeConfigGroupVersionsRequest;
const DescribeL4ProxyRulesRequest = models.DescribeL4ProxyRulesRequest;
const AiRule = models.AiRule;
const Quota = models.Quota;
const CheckCnameStatusRequest = models.CheckCnameStatusRequest;
const DescribeContentQuotaResponse = models.DescribeContentQuotaResponse;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const DeployConfigGroupVersionResponse = models.DeployConfigGroupVersionResponse;
const RateLimitIntelligence = models.RateLimitIntelligence;
const DescribeDeployHistoryResponse = models.DescribeDeployHistoryResponse;
const QueryString = models.QueryString;
const DescribeAccelerationDomainsRequest = models.DescribeAccelerationDomainsRequest;
const DescribeTimingL4DataRequest = models.DescribeTimingL4DataRequest;
const VanityNameServersIps = models.VanityNameServersIps;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.tencentcloudapi.com", "2022-09-01", credential, region, profile);
    }
    
    /**
     * When there are resources updated on the origin with the TTL remaining valid, users cannot access the latest resources. In this case, you can purge the cache using this API. There are two methods: <li>Delete: This method deletes the node cache without verification and retrieves the latest resources from the origin when receiving a request.</li><li>Invalidate: This method marks the node cache as invalid and sends a request with the If-None-Match and If-Modified-Since headers to the origin. If the origin responses with 200, the latest resources are retrieved to be cached on the node. If a 304 response is returned, the latest resources are not cached on the node.

</li>For more details, see [Cache Purge](https://intl.cloud.tencent.com/document/product/1552/70759?from_cn_redirect=1). </li>
     * @param {CreatePurgeTaskRequest} req
     * @param {function(string, CreatePurgeTaskResponse):void} cb
     * @public
     */
    CreatePurgeTask(req, cb) {
        let resp = new CreatePurgeTaskResponse();
        this.request("CreatePurgeTask", req, resp, cb);
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
     * DescribePrefetchTasks is used to query the submission history and execution progress of preheating tasks. This interface can be used to query the tasks submitted by the CreatePrefetchTasks interface.
     * @param {DescribePrefetchTasksRequest} req
     * @param {function(string, DescribePrefetchTasksResponse):void} cb
     * @public
     */
    DescribePrefetchTasks(req, cb) {
        let resp = new DescribePrefetchTasksResponse();
        this.request("DescribePrefetchTasks", req, resp, cb);
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
     * This API is used to query the real-time log delivery task list.
     * @param {DescribeRealtimeLogDeliveryTasksRequest} req
     * @param {function(string, DescribeRealtimeLogDeliveryTasksResponse):void} cb
     * @public
     */
    DescribeRealtimeLogDeliveryTasks(req, cb) {
        let resp = new DescribeRealtimeLogDeliveryTasksResponse();
        this.request("DescribeRealtimeLogDeliveryTasks", req, resp, cb);
    }

    /**
     * This API is used to verify your ownership of a site or domain name. It's required in the CNAME access mode. After a site is verified, you don't need to verify the ownership again for domain names added to it in the future. For details, see [Ownership Verification](https://intl.cloud.tencent.com/document/product/1552/70789?from_cn_redirect=1).

For sites connected via the NS, you can query whether the NS is successfully switched through this API. For details, see [Modifying DNS Servers](https://intl.cloud.tencent.com/document/product/1552/90452?from_cn_redirect=1).
     * @param {VerifyOwnershipRequest} req
     * @param {function(string, VerifyOwnershipResponse):void} cb
     * @public
     */
    VerifyOwnership(req, cb) {
        let resp = new VerifyOwnershipResponse();
        this.request("VerifyOwnership", req, resp, cb);
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
     * This API is used to query domain name information of a site, including the acceleration domain name, origin, and domain name status. You can query the information of all domain names, or specific domain names by specifying filters information.
     * @param {DescribeAccelerationDomainsRequest} req
     * @param {function(string, DescribeAccelerationDomainsResponse):void} cb
     * @public
     */
    DescribeAccelerationDomains(req, cb) {
        let resp = new DescribeAccelerationDomainsResponse();
        this.request("DescribeAccelerationDomains", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration of an origin group. The original configuration will be overwritten. 
     * @param {ModifyOriginGroupRequest} req
     * @param {function(string, ModifyOriginGroupResponse):void} cb
     * @public
     */
    ModifyOriginGroup(req, cb) {
        let resp = new ModifyOriginGroupResponse();
        this.request("ModifyOriginGroup", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [DeleteL4Proxy] (https://intl.cloud.tencent.com/document/product/1552/103415?from_cn_redirect=1).
     * @param {DeleteApplicationProxyRequest} req
     * @param {function(string, DeleteApplicationProxyResponse):void} cb
     * @public
     */
    DeleteApplicationProxy(req, cb) {
        let resp = new DeleteApplicationProxyResponse();
        this.request("DeleteApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to enable or disable a Layer 4 proxy instance.
     * @param {ModifyL4ProxyStatusRequest} req
     * @param {function(string, ModifyL4ProxyStatusResponse):void} cb
     * @public
     */
    ModifyL4ProxyStatus(req, cb) {
        let resp = new ModifyL4ProxyStatusResponse();
        this.request("ModifyL4ProxyStatus", req, resp, cb);
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
     * This API is used to query environment information in version management mode. The response includes the environment ID, type, and current effective version. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        let resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [DeleteL4ProxyRules] (https://intl.cloud.tencent.com/document/product/1552/103414?from_cn_redirect=1).
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
     * This API is used to query the time sequence traffic data of the monitoring category in L7. This API is to be discarded. Please use the API <a href="https://intl.cloud.tencent.com/document/product/1552/80648?from_cn_redirect=1">DescribeTimingL7AnalysisData</a>.
     * @param {DescribeOverviewL7DataRequest} req
     * @param {function(string, DescribeOverviewL7DataResponse):void} cb
     * @public
     */
    DescribeOverviewL7Data(req, cb) {
        let resp = new DescribeOverviewL7DataResponse();
        this.request("DescribeOverviewL7Data", req, resp, cb);
    }

    /**
     * This API is used to create an acceleration domain name. 

For sites connected via the CNAME, if you have not verified the ownership of the domain name, the ownership verification information of the domain name is returned. To verify your ownership of the domain name, see [Ownership Verification](https://intl.cloud.tencent.com/document/product/1552/70789?from_cn_redirect=1).
     * @param {CreateAccelerationDomainRequest} req
     * @param {function(string, CreateAccelerationDomainResponse):void} cb
     * @public
     */
    CreateAccelerationDomain(req, cb) {
        let resp = new CreateAccelerationDomainResponse();
        this.request("CreateAccelerationDomain", req, resp, cb);
    }

    /**
     * This API is used to obtain detailed information about a version in version management mode. The response includes the version ID, description, status, creation time, configuration group information, and the content of the version configuration file. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {DescribeConfigGroupVersionDetailRequest} req
     * @param {function(string, DescribeConfigGroupVersionDetailResponse):void} cb
     * @public
     */
    DescribeConfigGroupVersionDetail(req, cb) {
        let resp = new DescribeConfigGroupVersionDetailResponse();
        this.request("DescribeConfigGroupVersionDetail", req, resp, cb);
    }

    /**
     * This API is used to bind/unbind a domain name to/from a specific policy template. 
     * @param {BindSecurityTemplateToEntityRequest} req
     * @param {function(string, BindSecurityTemplateToEntityResponse):void} cb
     * @public
     */
    BindSecurityTemplateToEntity(req, cb) {
        let resp = new BindSecurityTemplateToEntityResponse();
        this.request("BindSecurityTemplateToEntity", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [ModifyL4ProxyRulesStatus
] (https://intl.cloud.tencent.com/document/product/1552/103409?from_cn_redirect=1).
     * @param {ModifyApplicationProxyRuleStatusRequest} req
     * @param {function(string, ModifyApplicationProxyRuleStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRuleStatus(req, cb) {
        let resp = new ModifyApplicationProxyRuleStatusResponse();
        this.request("ModifyApplicationProxyRuleStatus", req, resp, cb);
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
     * This API is used to delete an origin group. Note that an origin group can not be deleted if it is referenced by services (e.g. L4 Proxy, domain name service, load balancing, rule engines). 
     * @param {DeleteOriginGroupRequest} req
     * @param {function(string, DeleteOriginGroupResponse):void} cb
     * @public
     */
    DeleteOriginGroup(req, cb) {
        let resp = new DeleteOriginGroupResponse();
        this.request("DeleteOriginGroup", req, resp, cb);
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
     * This API is used to check if the IP is an EdgeOne IP.
     * @param {DescribeIPRegionRequest} req
     * @param {function(string, DescribeIPRegionResponse):void} cb
     * @public
     */
    DescribeIPRegion(req, cb) {
        let resp = new DescribeIPRegionResponse();
        this.request("DescribeIPRegion", req, resp, cb);
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
     * This API is used to create real-time log delivery tasks. This API has the following restrictions:
Under the same combination of data delivery type (LogType) and data delivery area (Area), an entity (Layer 7 domain or Layer 4 proxy instance) can be added to only one real-time log delivery task. It is recommended to first query the real-time log delivery task list by entity through the [DescribeRealtimeLogDeliveryTasks](https://tcloud4api.woa.com/document/product/1657/343539?!preview&!document=1) API to check whether an entity has been added to a real-time log delivery task.
     * @param {CreateRealtimeLogDeliveryTaskRequest} req
     * @param {function(string, CreateRealtimeLogDeliveryTaskResponse):void} cb
     * @public
     */
    CreateRealtimeLogDeliveryTask(req, cb) {
        let resp = new CreateRealtimeLogDeliveryTaskResponse();
        this.request("CreateRealtimeLogDeliveryTask", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration of a Layer 4 proxy instance.
     * @param {ModifyL4ProxyRequest} req
     * @param {function(string, ModifyL4ProxyResponse):void} cb
     * @public
     */
    ModifyL4Proxy(req, cb) {
        let resp = new ModifyL4ProxyResponse();
        this.request("ModifyL4Proxy", req, resp, cb);
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
     * This API is used to query the version list for the specified configuration group in version management mode. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {DescribeConfigGroupVersionsRequest} req
     * @param {function(string, DescribeConfigGroupVersionsResponse):void} cb
     * @public
     */
    DescribeConfigGroupVersions(req, cb) {
        let resp = new DescribeConfigGroupVersionsResponse();
        this.request("DescribeConfigGroupVersions", req, resp, cb);
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
     * This API is used to modify Layer 4 proxy forwarding rules, supporting both individual and batch modification.
     * @param {ModifyL4ProxyRulesRequest} req
     * @param {function(string, ModifyL4ProxyRulesResponse):void} cb
     * @public
     */
    ModifyL4ProxyRules(req, cb) {
        let resp = new ModifyL4ProxyRulesResponse();
        this.request("ModifyL4ProxyRules", req, resp, cb);
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
     * This API is used to create Layer 4 proxy instance rules, supporting both individual and batch creation.
     * @param {CreateL4ProxyRulesRequest} req
     * @param {function(string, CreateL4ProxyRulesResponse):void} cb
     * @public
     */
    CreateL4ProxyRules(req, cb) {
        let resp = new CreateL4ProxyRulesResponse();
        this.request("CreateL4ProxyRules", req, resp, cb);
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
     * This API is used to delete Layer 4 proxy forwarding rules, supporting both individual and batch operation.
     * @param {DeleteL4ProxyRulesRequest} req
     * @param {function(string, DeleteL4ProxyRulesResponse):void} cb
     * @public
     */
    DeleteL4ProxyRules(req, cb) {
        let resp = new DeleteL4ProxyRulesResponse();
        this.request("DeleteL4ProxyRules", req, resp, cb);
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
     * This API is used to create Layer 4 proxy instances.
     * @param {CreateL4ProxyRequest} req
     * @param {function(string, CreateL4ProxyResponse):void} cb
     * @public
     */
    CreateL4Proxy(req, cb) {
        let resp = new CreateL4ProxyResponse();
        this.request("CreateL4Proxy", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [ModifyL4ProxyStatus] (https://intl.cloud.tencent.com/document/product/1552/103408?from_cn_redirect=1).
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
     * This API is on an earlier version. If you want to call it, please switch to the latest version. In the latest version, this API has been split into two APIs: one for querying the Layer 4 proxy instance list and the other for querying Layer 4 forwarding rules. For details, see [DescribeL4Proxy] (https://intl.cloud.tencent.com/document/product/1552/103413?from_cn_redirect=1) and [DescribeL4ProxyRules] (https://intl.cloud.tencent.com/document/product/1552/103412?from_cn_redirect=1).
     * @param {DescribeApplicationProxiesRequest} req
     * @param {function(string, DescribeApplicationProxiesResponse):void} cb
     * @public
     */
    DescribeApplicationProxies(req, cb) {
        let resp = new DescribeApplicationProxiesResponse();
        this.request("DescribeApplicationProxies", req, resp, cb);
    }

    /**
     * This API is used to create a shared CNAME. It is now only available to beta users.
     * @param {CreateSharedCNAMERequest} req
     * @param {function(string, CreateSharedCNAMEResponse):void} cb
     * @public
     */
    CreateSharedCNAME(req, cb) {
        let resp = new CreateSharedCNAMEResponse();
        this.request("CreateSharedCNAME", req, resp, cb);
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
     * This API is used to create a new version for the specified configuration group in version management mode. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {CreateConfigGroupVersionRequest} req
     * @param {function(string, CreateConfigGroupVersionResponse):void} cb
     * @public
     */
    CreateConfigGroupVersion(req, cb) {
        let resp = new CreateConfigGroupVersionResponse();
        this.request("CreateConfigGroupVersion", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [ModifyL4Proxy
] (https://intl.cloud.tencent.com/document/product/1552/103411?from_cn_redirect=1).
     * @param {ModifyApplicationProxyRequest} req
     * @param {function(string, ModifyApplicationProxyResponse):void} cb
     * @public
     */
    ModifyApplicationProxy(req, cb) {
        let resp = new ModifyApplicationProxyResponse();
        this.request("ModifyApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to create a site. After you create the site, you can connect it to EdgeOne via the CNAME or NS (see [Quick Start](https://intl.cloud.tencent.com/document/product/1552/87601?from_cn_redirect=1)), or connect it without a domain name (see [Quick Access to L4 Proxy Service](https://intl.cloud.tencent.com/document/product/1552/96051?from_cn_redirect=1)).

If there are already EdgeOne plans under the current account, it is recommended to pass in the `PlanId` to bind the site with the plan directly. If `PlanId` is not passed in, the created site is not activated. You need to call [BindZoneToPlan](https://intl.cloud.tencent.com/document/product/1552/83042?from_cn_redirect=1) to bind the site with a plan. To purchase a plan, please go to the EdgeOne console.
     * @param {CreateZoneRequest} req
     * @param {function(string, CreateZoneResponse):void} cb
     * @public
     */
    CreateZone(req, cb) {
        let resp = new CreateZoneResponse();
        this.request("CreateZone", req, resp, cb);
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
     * This API is used to delete a real-time log delivery task.
     * @param {DeleteRealtimeLogDeliveryTaskRequest} req
     * @param {function(string, DeleteRealtimeLogDeliveryTaskResponse):void} cb
     * @public
     */
    DeleteRealtimeLogDeliveryTask(req, cb) {
        let resp = new DeleteRealtimeLogDeliveryTaskResponse();
        this.request("DeleteRealtimeLogDeliveryTask", req, resp, cb);
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
     * DescribePurgeTasks is used to query the submitted URL refreshing and directory refreshing records and execution progress. This interface can be used to query the tasks submitted by the CreatePurgeTasks API.
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
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
     * This API is used to query the forwarding rule list under a Layer 4 proxy instance.
     * @param {DescribeL4ProxyRulesRequest} req
     * @param {function(string, DescribeL4ProxyRulesResponse):void} cb
     * @public
     */
    DescribeL4ProxyRules(req, cb) {
        let resp = new DescribeL4ProxyRulesResponse();
        this.request("DescribeL4ProxyRules", req, resp, cb);
    }

    /**
     * This API is used to query a Layer 4 proxy instance list.
     * @param {DescribeL4ProxyRequest} req
     * @param {function(string, DescribeL4ProxyResponse):void} cb
     * @public
     */
    DescribeL4Proxy(req, cb) {
        let resp = new DescribeL4ProxyResponse();
        this.request("DescribeL4Proxy", req, resp, cb);
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
     * This API is used to create key-value indexes for relevant delivered log fields in the corresponding Tencent Cloud CLS log topic for a specified real-time log delivery task (task-id). If such indexes have been created in CLS, this API will append indexes through merging.
     * @param {CreateCLSIndexRequest} req
     * @param {function(string, CreateCLSIndexResponse):void} cb
     * @public
     */
    CreateCLSIndex(req, cb) {
        let resp = new CreateCLSIndexResponse();
        this.request("CreateCLSIndex", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version [CreateL4Proxy] (https://intl.cloud.tencent.com/document/product/1552/103417?from_cn_redirect=1).
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
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [ModifyL4ProxyRules] (https://intl.cloud.tencent.com/document/product/1552/103410?from_cn_redirect=1).
     * @param {ModifyApplicationProxyRuleRequest} req
     * @param {function(string, ModifyApplicationProxyRuleResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRule(req, cb) {
        let resp = new ModifyApplicationProxyRuleResponse();
        this.request("ModifyApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to create an origin group for easy management. The created origin server group can be used for **adding acceleration domain names** and **layer-4 proxy configuration**.
     * @param {CreateOriginGroupRequest} req
     * @param {function(string, CreateOriginGroupResponse):void} cb
     * @public
     */
    CreateOriginGroup(req, cb) {
        let resp = new CreateOriginGroupResponse();
        this.request("CreateOriginGroup", req, resp, cb);
    }

    /**
     * This API is used to configure the certificate of a site. You can use your own certificate or [apply for a free certificate](https://intl.cloud.tencent.com/document/product/1552/90437?from_cn_redirect=1).
To use an external certificate, upload the certificate to [SSL Certificates Console](https://console.cloud.tencent.com/certoview) first, and then input the certificate ID in this API. For details, see [Deploying Own Certificates to EdgeOne Domains](https://intl.cloud.tencent.com/document/product/1552/88874?from_cn_redirect=1).
 
     * @param {ModifyHostsCertificateRequest} req
     * @param {function(string, ModifyHostsCertificateResponse):void} cb
     * @public
     */
    ModifyHostsCertificate(req, cb) {
        let resp = new ModifyHostsCertificateResponse();
        this.request("ModifyHostsCertificate", req, resp, cb);
    }

    /**
     * This API is used to query the release history of versions in the production or test environment in version management mode. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {DescribeDeployHistoryRequest} req
     * @param {function(string, DescribeDeployHistoryResponse):void} cb
     * @public
     */
    DescribeDeployHistory(req, cb) {
        let resp = new DescribeDeployHistoryResponse();
        this.request("DescribeDeployHistory", req, resp, cb);
    }

    /**
     * This API is used to release versions in version management mode. Users can deploy the version to either the testing environment or the production environment by specifying the EnvId parameter. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {DeployConfigGroupVersionRequest} req
     * @param {function(string, DeployConfigGroupVersionResponse):void} cb
     * @public
     */
    DeployConfigGroupVersion(req, cb) {
        let resp = new DeployConfigGroupVersionResponse();
        this.request("DeployConfigGroupVersion", req, resp, cb);
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
     * This API is used to query bindings of a policy template.
     * @param {DescribeSecurityTemplateBindingsRequest} req
     * @param {function(string, DescribeSecurityTemplateBindingsResponse):void} cb
     * @public
     */
    DescribeSecurityTemplateBindings(req, cb) {
        let resp = new DescribeSecurityTemplateBindingsResponse();
        this.request("DescribeSecurityTemplateBindings", req, resp, cb);
    }

    /**
     * This API is used to delete a Layer 4 proxy instance.
     * @param {DeleteL4ProxyRequest} req
     * @param {function(string, DeleteL4ProxyResponse):void} cb
     * @public
     */
    DeleteL4Proxy(req, cb) {
        let resp = new DeleteL4ProxyResponse();
        this.request("DeleteL4Proxy", req, resp, cb);
    }

    /**
     * This API is used to bind/unbind a domain name to/from a shared CNAME. It is now only available to beta users.
     * @param {BindSharedCNAMERequest} req
     * @param {function(string, BindSharedCNAMEResponse):void} cb
     * @public
     */
    BindSharedCNAME(req, cb) {
        let resp = new BindSharedCNAMEResponse();
        this.request("BindSharedCNAME", req, resp, cb);
    }

    /**
     * This API is used to modify the real-time log delivery task configuration. This API has the following restrictions:<li>Does not support modifying the destination type of the real-time log delivery task (TaskType);</li><li>Does not support modifying the data delivery type (LogType)</li><li>Does not support modifying the data delivery area (Area)</li><li>Does not support modifying the detailed destination configuration, such as log set and log topic, when the destination of the original real-time log delivery task is Tencent Cloud CLS.</li>
     * @param {ModifyRealtimeLogDeliveryTaskRequest} req
     * @param {function(string, ModifyRealtimeLogDeliveryTaskResponse):void} cb
     * @public
     */
    ModifyRealtimeLogDeliveryTask(req, cb) {
        let resp = new ModifyRealtimeLogDeliveryTaskResponse();
        this.request("ModifyRealtimeLogDeliveryTask", req, resp, cb);
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
     * This API is used to start or stop Layer 4 proxy forwarding rules, supporting both individual and batch operation.
     * @param {ModifyL4ProxyRulesStatusRequest} req
     * @param {function(string, ModifyL4ProxyRulesStatusResponse):void} cb
     * @public
     */
    ModifyL4ProxyRulesStatus(req, cb) {
        let resp = new ModifyL4ProxyRulesStatusResponse();
        this.request("ModifyL4ProxyRulesStatus", req, resp, cb);
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
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [CreateL4ProxyRules] (https://intl.cloud.tencent.com/document/product/1552/103416?from_cn_redirect=1).
     * @param {CreateApplicationProxyRuleRequest} req
     * @param {function(string, CreateApplicationProxyRuleResponse):void} cb
     * @public
     */
    CreateApplicationProxyRule(req, cb) {
        let resp = new CreateApplicationProxyRuleResponse();
        this.request("CreateApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to query the information of sites that you have access to. You can filter sites based on different query criteria.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
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
     * This API is used to delete a shared CNAME. It is now only available to beta users.
     * @param {DeleteSharedCNAMERequest} req
     * @param {function(string, DeleteSharedCNAMEResponse):void} cb
     * @public
     */
    DeleteSharedCNAME(req, cb) {
        let resp = new DeleteSharedCNAMEResponse();
        this.request("DeleteSharedCNAME", req, resp, cb);
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
     * This API is used to query billing data.
     * @param {DescribeBillingDataRequest} req
     * @param {function(string, DescribeBillingDataResponse):void} cb
     * @public
     */
    DescribeBillingData(req, cb) {
        let resp = new DescribeBillingDataResponse();
        this.request("DescribeBillingData", req, resp, cb);
    }


}
module.exports = TeoClient;
