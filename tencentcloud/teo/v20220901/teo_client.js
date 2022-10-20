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
const Compression = models.Compression;
const DescribeOriginGroupResponse = models.DescribeOriginGroupResponse;
const ModifyLoadBalancingStatusResponse = models.ModifyLoadBalancingStatusResponse;
const DescribeBotDataRequest = models.DescribeBotDataRequest;
const SpeedTestingInfo = models.SpeedTestingInfo;
const DescribeSingleL7AnalysisDataRequest = models.DescribeSingleL7AnalysisDataRequest;
const TopEntryValue = models.TopEntryValue;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const ShieldArea = models.ShieldArea;
const Origin = models.Origin;
const DescribeRulesResponse = models.DescribeRulesResponse;
const TimingDataRecord = models.TimingDataRecord;
const DDoSAttackEventDetailData = models.DDoSAttackEventDetailData;
const DescribeBillingDataRequest = models.DescribeBillingDataRequest;
const Tag = models.Tag;
const RateLimitConfig = models.RateLimitConfig;
const RuleExtraParameter = models.RuleExtraParameter;
const ClsLogTopicInfo = models.ClsLogTopicInfo;
const WafConfig = models.WafConfig;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DescribeApplicationProxiesResponse = models.DescribeApplicationProxiesResponse;
const DescribeTopL7AnalysisDataRequest = models.DescribeTopL7AnalysisDataRequest;
const DDoSAttackSourceEvent = models.DDoSAttackSourceEvent;
const ModifyRulePriorityResponse = models.ModifyRulePriorityResponse;
const SwitchConfig = models.SwitchConfig;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const SpeedTestingDetailData = models.SpeedTestingDetailData;
const BotManagedRuleDetail = models.BotManagedRuleDetail;
const DescribeDDoSAttackSourceEventResponse = models.DescribeDDoSAttackSourceEventResponse;
const DDoSAntiPly = models.DDoSAntiPly;
const PlanInfo = models.PlanInfo;
const DescribeTimingL7CacheDataRequest = models.DescribeTimingL7CacheDataRequest;
const DescribeSecurityPolicyListResponse = models.DescribeSecurityPolicyListResponse;
const CheckCertificateRequest = models.CheckCertificateRequest;
const DescribeDDoSAttackEventResponse = models.DescribeDDoSAttackEventResponse;
const ForceRedirect = models.ForceRedirect;
const CodeAction = models.CodeAction;
const CachePrefresh = models.CachePrefresh;
const DescribeWebProtectionClientIpListResponse = models.DescribeWebProtectionClientIpListResponse;
const DescribeTimingL7AnalysisDataResponse = models.DescribeTimingL7AnalysisDataResponse;
const OriginGroupCondition = models.OriginGroupCondition;
const BotPortraitRule = models.BotPortraitRule;
const DDoSRule = models.DDoSRule;
const RulesProperties = models.RulesProperties;
const RuleCodeActionParams = models.RuleCodeActionParams;
const ModifyDDoSPolicyHostResponse = models.ModifyDDoSPolicyHostResponse;
const ExceptUserRule = models.ExceptUserRule;
const SecEntry = models.SecEntry;
const DDoSPacketFilter = models.DDoSPacketFilter;
const DescribeSpeedTestingMetricDataResponse = models.DescribeSpeedTestingMetricDataResponse;
const Sv = models.Sv;
const Rule = models.Rule;
const CreateLogSetResponse = models.CreateLogSetResponse;
const DownloadL4LogsRequest = models.DownloadL4LogsRequest;
const CreateCustomErrorPageRequest = models.CreateCustomErrorPageRequest;
const DescribeDnssecResponse = models.DescribeDnssecResponse;
const ModifyZoneCnameSpeedUpRequest = models.ModifyZoneCnameSpeedUpRequest;
const SecurityEntity = models.SecurityEntity;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const DescribeDDoSPolicyResponse = models.DescribeDDoSPolicyResponse;
const CreateApplicationProxyRuleRequest = models.CreateApplicationProxyRuleRequest;
const DescribeDDoSBlockListRequest = models.DescribeDDoSBlockListRequest;
const DescribeDDoSMajorAttackEventRequest = models.DescribeDDoSMajorAttackEventRequest;
const BillingDataFilter = models.BillingDataFilter;
const DescribeSecurityPolicyListRequest = models.DescribeSecurityPolicyListRequest;
const DescribeTimingL7CacheDataResponse = models.DescribeTimingL7CacheDataResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const Header = models.Header;
const DescribeDDoSPolicyRequest = models.DescribeDDoSPolicyRequest;
const DDoSSpeedLimit = models.DDoSSpeedLimit;
const RateLimitIntelligenceRuleDetail = models.RateLimitIntelligenceRuleDetail;
const ReclaimZoneRequest = models.ReclaimZoneRequest;
const DeleteZoneRequest = models.DeleteZoneRequest;
const BotManagedRule = models.BotManagedRule;
const SecurityConfig = models.SecurityConfig;
const L4OfflineLog = models.L4OfflineLog;
const ModifyZoneCnameSpeedUpResponse = models.ModifyZoneCnameSpeedUpResponse;
const FailReason = models.FailReason;
const DescribeRulesSettingRequest = models.DescribeRulesSettingRequest;
const LogSetInfo = models.LogSetInfo;
const OptimizeAction = models.OptimizeAction;
const DescribeDnsDataRequest = models.DescribeDnsDataRequest;
const RuleNormalActionParams = models.RuleNormalActionParams;
const PrivateParameter = models.PrivateParameter;
const CreateOriginGroupRequest = models.CreateOriginGroupRequest;
const TopDataRecord = models.TopDataRecord;
const ModifyLoadBalancingRequest = models.ModifyLoadBalancingRequest;
const DescribeWebManagedRulesLogRequest = models.DescribeWebManagedRulesLogRequest;
const WafGroup = models.WafGroup;
const DescribeAvailablePlansResponse = models.DescribeAvailablePlansResponse;
const RateLimitTemplate = models.RateLimitTemplate;
const DescribeWebProtectionTopDataResponse = models.DescribeWebProtectionTopDataResponse;
const WafGroupInfo = models.WafGroupInfo;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const OfflineCache = models.OfflineCache;
const DescribeDDoSAttackTopDataResponse = models.DescribeDDoSAttackTopDataResponse;
const SecRuleRelatedInfo = models.SecRuleRelatedInfo;
const DescribeSpeedTestingQuotaResponse = models.DescribeSpeedTestingQuotaResponse;
const DeleteRulesRequest = models.DeleteRulesRequest;
const ExceptUserRuleCondition = models.ExceptUserRuleCondition;
const ModifyDefaultCertificateRequest = models.ModifyDefaultCertificateRequest;
const MaxAge = models.MaxAge;
const DeleteApplicationProxyResponse = models.DeleteApplicationProxyResponse;
const SecEntryValue = models.SecEntryValue;
const ModifyAlarmDefaultThresholdResponse = models.ModifyAlarmDefaultThresholdResponse;
const CreateCredentialRequest = models.CreateCredentialRequest;
const ModifyRuleRequest = models.ModifyRuleRequest;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const DescribeWebManagedRulesHitRuleDetailRequest = models.DescribeWebManagedRulesHitRuleDetailRequest;
const ModifySecurityWafGroupPolicyRequest = models.ModifySecurityWafGroupPolicyRequest;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const ModifySecurityPolicyRequest = models.ModifySecurityPolicyRequest;
const ModifyDnssecRequest = models.ModifyDnssecRequest;
const SmartRouting = models.SmartRouting;
const CreateApplicationProxyResponse = models.CreateApplicationProxyResponse;
const Task = models.Task;
const BotLog = models.BotLog;
const DistrictStatistics = models.DistrictStatistics;
const CreateIpTableListRequest = models.CreateIpTableListRequest;
const ModifyDDoSPolicyHostRequest = models.ModifyDDoSPolicyHostRequest;
const DescribeIdentificationsResponse = models.DescribeIdentificationsResponse;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const DeleteApplicationProxyRuleResponse = models.DeleteApplicationProxyRuleResponse;
const CreateSecurityDropPageRequest = models.CreateSecurityDropPageRequest;
const ExceptConfig = models.ExceptConfig;
const DeleteOriginGroupRequest = models.DeleteOriginGroupRequest;
const DescribeWebProtectionHitRuleDetailResponse = models.DescribeWebProtectionHitRuleDetailResponse;
const AclCondition = models.AclCondition;
const PortraitManagedRuleDetail = models.PortraitManagedRuleDetail;
const L7OfflineLog = models.L7OfflineLog;
const CreateLogTopicTaskResponse = models.CreateLogTopicTaskResponse;
const ApplicationProxyRule = models.ApplicationProxyRule;
const DescribeDnsDataResponse = models.DescribeDnsDataResponse;
const Zone = models.Zone;
const DescribeDDoSAttackSourceEventRequest = models.DescribeDDoSAttackSourceEventRequest;
const ModifyLoadBalancingStatusRequest = models.ModifyLoadBalancingStatusRequest;
const DDoSAttackEvent = models.DDoSAttackEvent;
const DropPageDetail = models.DropPageDetail;
const SwitchLogTopicTaskResponse = models.SwitchLogTopicTaskResponse;
const CreateDnsRecordResponse = models.CreateDnsRecordResponse;
const ServerCertInfo = models.ServerCertInfo;
const DescribeZonesRequest = models.DescribeZonesRequest;
const OriginRecord = models.OriginRecord;
const AdvancedOriginGroup = models.AdvancedOriginGroup;
const CreateLoadBalancingResponse = models.CreateLoadBalancingResponse;
const DeleteLogTopicTaskRequest = models.DeleteLogTopicTaskRequest;
const VanityNameServers = models.VanityNameServers;
const DescribeDnsRecordsRequest = models.DescribeDnsRecordsRequest;
const ModifyDnsRecordRequest = models.ModifyDnsRecordRequest;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const ModifyApplicationProxyRuleResponse = models.ModifyApplicationProxyRuleResponse;
const DescribeWebProtectionHitRuleDetailRequest = models.DescribeWebProtectionHitRuleDetailRequest;
const DDoS = models.DDoS;
const DescribeSecurityRuleIdRequest = models.DescribeSecurityRuleIdRequest;
const DDoSHost = models.DDoSHost;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const DeleteLoadBalancingResponse = models.DeleteLoadBalancingResponse;
const RuleItem = models.RuleItem;
const DescribeAddableEntityListResponse = models.DescribeAddableEntityListResponse;
const Cache = models.Cache;
const DescribeBotHitRuleDetailRequest = models.DescribeBotHitRuleDetailRequest;
const DetailHost = models.DetailHost;
const DescribeSpeedTestingMetricDataRequest = models.DescribeSpeedTestingMetricDataRequest;
const RuleCondition = models.RuleCondition;
const DescribeOverviewL7DataResponse = models.DescribeOverviewL7DataResponse;
const DescribeSecurityPolicyRequest = models.DescribeSecurityPolicyRequest;
const TimingDataItem = models.TimingDataItem;
const RateLimitUserRule = models.RateLimitUserRule;
const ModifyDnsRecordResponse = models.ModifyDnsRecordResponse;
const CreatePlanForZoneRequest = models.CreatePlanForZoneRequest;
const DeleteLoadBalancingRequest = models.DeleteLoadBalancingRequest;
const CacheKey = models.CacheKey;
const DownloadL4LogsResponse = models.DownloadL4LogsResponse;
const IpTableConfig = models.IpTableConfig;
const DeleteOriginGroupResponse = models.DeleteOriginGroupResponse;
const CreateSecurityDropPageResponse = models.CreateSecurityDropPageResponse;
const SpeedTestingMetricData = models.SpeedTestingMetricData;
const DescribeIdentificationsRequest = models.DescribeIdentificationsRequest;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const CreateLogSetRequest = models.CreateLogSetRequest;
const CreateIpTableListResponse = models.CreateIpTableListResponse;
const NormalAction = models.NormalAction;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const DDoSAllowBlock = models.DDoSAllowBlock;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const CacheConfig = models.CacheConfig;
const ModifyDDoSPolicyResponse = models.ModifyDDoSPolicyResponse;
const DDoSFeaturesFilter = models.DDoSFeaturesFilter;
const IntelligenceRule = models.IntelligenceRule;
const DDoSAllowBlockRule = models.DDoSAllowBlockRule;
const DescribeZoneDDoSPolicyRequest = models.DescribeZoneDDoSPolicyRequest;
const ModifyLogTopicTaskRequest = models.ModifyLogTopicTaskRequest;
const DescribeDDoSAttackEventRequest = models.DescribeDDoSAttackEventRequest;
const DescribeWebProtectionClientIpListRequest = models.DescribeWebProtectionClientIpListRequest;
const ModifyDnssecResponse = models.ModifyDnssecResponse;
const CreateSpeedTestingResponse = models.CreateSpeedTestingResponse;
const SecHitRuleInfo = models.SecHitRuleInfo;
const DescribeOriginGroupRequest = models.DescribeOriginGroupRequest;
const DescribeLogTopicTasksResponse = models.DescribeLogTopicTasksResponse;
const CreatePlanForZoneResponse = models.CreatePlanForZoneResponse;
const DescribeLogTopicTasksRequest = models.DescribeLogTopicTasksRequest;
const DescribeDDoSAttackEventDetailResponse = models.DescribeDDoSAttackEventDetailResponse;
const SingleTypeValue = models.SingleTypeValue;
const CreateCredentialResponse = models.CreateCredentialResponse;
const SwitchLogTopicTaskRequest = models.SwitchLogTopicTaskRequest;
const DeleteApplicationProxyRequest = models.DeleteApplicationProxyRequest;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const ModifyOriginGroupResponse = models.ModifyOriginGroupResponse;
const ExceptUserRuleScope = models.ExceptUserRuleScope;
const DescribeSecurityPortraitRulesRequest = models.DescribeSecurityPortraitRulesRequest;
const ReclaimZoneResponse = models.ReclaimZoneResponse;
const DescribeSecurityPolicyRegionsResponse = models.DescribeSecurityPolicyRegionsResponse;
const DescribeBotTopDataRequest = models.DescribeBotTopDataRequest;
const DeleteZoneResponse = models.DeleteZoneResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const CreateDnsRecordRequest = models.CreateDnsRecordRequest;
const WafRule = models.WafRule;
const ModifyApplicationProxyRequest = models.ModifyApplicationProxyRequest;
const ModifyLogTopicTaskResponse = models.ModifyLogTopicTaskResponse;
const RulesSettingAction = models.RulesSettingAction;
const Ipv6 = models.Ipv6;
const ModifyAlarmDefaultThresholdRequest = models.ModifyAlarmDefaultThresholdRequest;
const ModifyApplicationProxyRuleRequest = models.ModifyApplicationProxyRuleRequest;
const DDoSStatusInfo = models.DDoSStatusInfo;
const AclConfig = models.AclConfig;
const DescribeSpeedTestingDetailsResponse = models.DescribeSpeedTestingDetailsResponse;
const WafGroupDetail = models.WafGroupDetail;
const ClientIpCountry = models.ClientIpCountry;
const LoadBalancing = models.LoadBalancing;
const DeleteApplicationProxyRuleRequest = models.DeleteApplicationProxyRuleRequest;
const FileAscriptionInfo = models.FileAscriptionInfo;
const DescribeDDoSBlockListResponse = models.DescribeDDoSBlockListResponse;
const DescribeTopL7CacheDataResponse = models.DescribeTopL7CacheDataResponse;
const SpeedTestingStatus = models.SpeedTestingStatus;
const CreateLoadBalancingRequest = models.CreateLoadBalancingRequest;
const DescribeDnssecRequest = models.DescribeDnssecRequest;
const RuleChoicePropertiesItem = models.RuleChoicePropertiesItem;
const ModifyAlarmConfigResponse = models.ModifyAlarmConfigResponse;
const DescribeTimingL7AnalysisDataRequest = models.DescribeTimingL7AnalysisDataRequest;
const NoCache = models.NoCache;
const GeoIp = models.GeoIp;
const DescribeSecurityGroupManagedRulesRequest = models.DescribeSecurityGroupManagedRulesRequest;
const ModifyApplicationProxyStatusRequest = models.ModifyApplicationProxyStatusRequest;
const CreateZoneRequest = models.CreateZoneRequest;
const AscriptionInfo = models.AscriptionInfo;
const DescribeBotDataResponse = models.DescribeBotDataResponse;
const DescribeLogSetsResponse = models.DescribeLogSetsResponse;
const DescribeClientRuleListResponse = models.DescribeClientRuleListResponse;
const Waf = models.Waf;
const DescribeLogTopicTaskDetailRequest = models.DescribeLogTopicTaskDetailRequest;
const CreateSpeedTestingRequest = models.CreateSpeedTestingRequest;
const CreateReplayTaskRequest = models.CreateReplayTaskRequest;
const DescribeRateLimitIntelligenceRuleRequest = models.DescribeRateLimitIntelligenceRuleRequest;
const DescribeDnsRecordsResponse = models.DescribeDnsRecordsResponse;
const DescribeDDoSAttackDataRequest = models.DescribeDDoSAttackDataRequest;
const DescribeWebManagedRulesDataResponse = models.DescribeWebManagedRulesDataResponse;
const DescribeApplicationProxiesRequest = models.DescribeApplicationProxiesRequest;
const DescribeContentQuotaRequest = models.DescribeContentQuotaRequest;
const DescribeWebProtectionAttackEventsRequest = models.DescribeWebProtectionAttackEventsRequest;
const Hsts = models.Hsts;
const CreateRuleRequest = models.CreateRuleRequest;
const DescribeRateLimitIntelligenceRuleResponse = models.DescribeRateLimitIntelligenceRuleResponse;
const RateLimitTemplateDetail = models.RateLimitTemplateDetail;
const CreateApplicationProxyRuleResponse = models.CreateApplicationProxyRuleResponse;
const DescribeLogSetsRequest = models.DescribeLogSetsRequest;
const ClientRule = models.ClientRule;
const CreateApplicationProxyRequest = models.CreateApplicationProxyRequest;
const CC = models.CC;
const DescribeTimingL4DataResponse = models.DescribeTimingL4DataResponse;
const Action = models.Action;
const LogTopicDetailInfo = models.LogTopicDetailInfo;
const ApplicationProxy = models.ApplicationProxy;
const ModifyApplicationProxyResponse = models.ModifyApplicationProxyResponse;
const ZoneSetting = models.ZoneSetting;
const RuleAndConditions = models.RuleAndConditions;
const DropPageConfig = models.DropPageConfig;
const PartialModule = models.PartialModule;
const ModifyApplicationProxyRuleStatusRequest = models.ModifyApplicationProxyRuleStatusRequest;
const AccelerateType = models.AccelerateType;
const ModifyDefaultCertificateResponse = models.ModifyDefaultCertificateResponse;
const DescribeSecurityGroupManagedRulesResponse = models.DescribeSecurityGroupManagedRulesResponse;
const FollowOrigin = models.FollowOrigin;
const DescribeSpeedTestingDetailsRequest = models.DescribeSpeedTestingDetailsRequest;
const CreateLogTopicTaskRequest = models.CreateLogTopicTaskRequest;
const QueryCondition = models.QueryCondition;
const RuleRewriteActionParams = models.RuleRewriteActionParams;
const DescribeBotClientIpListResponse = models.DescribeBotClientIpListResponse;
const DeleteDnsRecordsRequest = models.DeleteDnsRecordsRequest;
const DescribeBotLogRequest = models.DescribeBotLogRequest;
const DDoSGeoIp = models.DDoSGeoIp;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const DDoSMajorAttackEvent = models.DDoSMajorAttackEvent;
const DescribeTopL7AnalysisDataResponse = models.DescribeTopL7AnalysisDataResponse;
const ClientIpHeader = models.ClientIpHeader;
const Resource = models.Resource;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const DescribeBotHitRuleDetailResponse = models.DescribeBotHitRuleDetailResponse;
const DescribeDDoSAttackEventDetailRequest = models.DescribeDDoSAttackEventDetailRequest;
const DeleteRulesResponse = models.DeleteRulesResponse;
const OriginGroup = models.OriginGroup;
const DescribeWebManagedRulesHitRuleDetailResponse = models.DescribeWebManagedRulesHitRuleDetailResponse;
const WebLogs = models.WebLogs;
const SkipCondition = models.SkipCondition;
const DnssecInfo = models.DnssecInfo;
const UpstreamHttp2 = models.UpstreamHttp2;
const BotConfig = models.BotConfig;
const CreateReplayTaskResponse = models.CreateReplayTaskResponse;
const SingleDataRecord = models.SingleDataRecord;
const SecClientIp = models.SecClientIp;
const DescribeTopL7CacheDataRequest = models.DescribeTopL7CacheDataRequest;
const Https = models.Https;
const DescribeBotManagedRulesResponse = models.DescribeBotManagedRulesResponse;
const AdvancedFilter = models.AdvancedFilter;
const CreateCustomErrorPageResponse = models.CreateCustomErrorPageResponse;
const DescribeDDoSAttackDataResponse = models.DescribeDDoSAttackDataResponse;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const DDoSAcl = models.DDoSAcl;
const ModifyApplicationProxyRuleStatusResponse = models.ModifyApplicationProxyRuleStatusResponse;
const DescribeClientRuleListRequest = models.DescribeClientRuleListRequest;
const ModifyZoneRequest = models.ModifyZoneRequest;
const DescribeAvailablePlansRequest = models.DescribeAvailablePlansRequest;
const ModifyZoneResponse = models.ModifyZoneResponse;
const WafGroupRule = models.WafGroupRule;
const DDoSAclRule = models.DDoSAclRule;
const DescribeBotTopDataResponse = models.DescribeBotTopDataResponse;
const DescribeBotClientIpListRequest = models.DescribeBotClientIpListRequest;
const RewriteAction = models.RewriteAction;
const IpTableRule = models.IpTableRule;
const DescribeDDoSAttackTopDataRequest = models.DescribeDDoSAttackTopDataRequest;
const Quic = models.Quic;
const DescribeRulesRequest = models.DescribeRulesRequest;
const CCInterceptEvent = models.CCInterceptEvent;
const DescribeDDoSMajorAttackEventResponse = models.DescribeDDoSMajorAttackEventResponse;
const DescribeContentQuotaResponse = models.DescribeContentQuotaResponse;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const DnsData = models.DnsData;
const DescribeWebManagedRulesLogResponse = models.DescribeWebManagedRulesLogResponse;
const AclUserRule = models.AclUserRule;
const TopDetailData = models.TopDetailData;
const DescribeOverviewL7DataRequest = models.DescribeOverviewL7DataRequest;
const WebSocket = models.WebSocket;
const DescribeWebProtectionTopDataRequest = models.DescribeWebProtectionTopDataRequest;
const DDoSBlockData = models.DDoSBlockData;
const ModifySecurityWafGroupPolicyResponse = models.ModifySecurityWafGroupPolicyResponse;
const DescribeWebManagedRulesDataRequest = models.DescribeWebManagedRulesDataRequest;
const SpeedTestingQuota = models.SpeedTestingQuota;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const DnsRecord = models.DnsRecord;
const ModifyRulePriorityRequest = models.ModifyRulePriorityRequest;
const SpeedTestingStatistics = models.SpeedTestingStatistics;
const SecurityType = models.SecurityType;
const ModifyRuleResponse = models.ModifyRuleResponse;
const CheckCertificateResponse = models.CheckCertificateResponse;
const DescribeWebProtectionDataRequest = models.DescribeWebProtectionDataRequest;
const DescribeSecurityPortraitRulesResponse = models.DescribeSecurityPortraitRulesResponse;
const ModifyDDoSPolicyRequest = models.ModifyDDoSPolicyRequest;
const ModifyApplicationProxyStatusResponse = models.ModifyApplicationProxyStatusResponse;
const Identification = models.Identification;
const ModifyAlarmConfigRequest = models.ModifyAlarmConfigRequest;
const DeleteLogTopicTaskResponse = models.DeleteLogTopicTaskResponse;
const ModifyLoadBalancingResponse = models.ModifyLoadBalancingResponse;
const TopEntry = models.TopEntry;
const DescribeRulesSettingResponse = models.DescribeRulesSettingResponse;
const IntelligenceRuleItem = models.IntelligenceRuleItem;
const DescribeLogTopicTaskDetailResponse = models.DescribeLogTopicTaskDetailResponse;
const PostMaxSize = models.PostMaxSize;
const DescribeBillingDataResponse = models.DescribeBillingDataResponse;
const Filter = models.Filter;
const CreateZoneResponse = models.CreateZoneResponse;
const DescribeSpeedTestingQuotaRequest = models.DescribeSpeedTestingQuotaRequest;
const ModifySecurityPolicyResponse = models.ModifySecurityPolicyResponse;
const ModifyOriginGroupRequest = models.ModifyOriginGroupRequest;
const DescribeAddableEntityListRequest = models.DescribeAddableEntityListRequest;
const DescribeSingleL7AnalysisDataResponse = models.DescribeSingleL7AnalysisDataResponse;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const CreateOriginGroupResponse = models.CreateOriginGroupResponse;
const DescribeSecurityPolicyResponse = models.DescribeSecurityPolicyResponse;
const SpeedTestingConfig = models.SpeedTestingConfig;
const DescribeSecurityPolicyRegionsRequest = models.DescribeSecurityPolicyRegionsRequest;
const AiRule = models.AiRule;
const DescribeLoadBalancingRequest = models.DescribeLoadBalancingRequest;
const DescribeWebProtectionDataResponse = models.DescribeWebProtectionDataResponse;
const Quota = models.Quota;
const DescribeZoneDDoSPolicyResponse = models.DescribeZoneDDoSPolicyResponse;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const DescribeWebProtectionAttackEventsResponse = models.DescribeWebProtectionAttackEventsResponse;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const DeleteDnsRecordsResponse = models.DeleteDnsRecordsResponse;
const DescribeSecurityRuleIdResponse = models.DescribeSecurityRuleIdResponse;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const DescribeBotLogResponse = models.DescribeBotLogResponse;
const DescribeLoadBalancingResponse = models.DescribeLoadBalancingResponse;
const RateLimitIntelligence = models.RateLimitIntelligence;
const QueryString = models.QueryString;
const TimingTypeValue = models.TimingTypeValue;
const DescribeTimingL4DataRequest = models.DescribeTimingL4DataRequest;
const VanityNameServersIps = models.VanityNameServersIps;
const DescribeBotManagedRulesRequest = models.DescribeBotManagedRulesRequest;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.tencentcloudapi.com", "2022-09-01", credential, region, profile);
    }
    
    /**
     * This API is used to create a DNS record.
     * @param {CreateDnsRecordRequest} req
     * @param {function(string, CreateDnsRecordResponse):void} cb
     * @public
     */
    CreateDnsRecord(req, cb) {
        let resp = new CreateDnsRecordResponse();
        this.request("CreateDnsRecord", req, resp, cb);
    }

    /**
     * This API is used to create a cache purging task.
     * @param {CreatePurgeTaskRequest} req
     * @param {function(string, CreatePurgeTaskResponse):void} cb
     * @public
     */
    CreatePurgeTask(req, cb) {
        let resp = new CreatePurgeTaskResponse();
        this.request("CreatePurgeTask", req, resp, cb);
    }

    /**
     * This API is used to query the list of bot attackers.
     * @param {DescribeBotClientIpListRequest} req
     * @param {function(string, DescribeBotClientIpListResponse):void} cb
     * @public
     */
    DescribeBotClientIpList(req, cb) {
        let resp = new DescribeBotClientIpListResponse();
        this.request("DescribeBotClientIpList", req, resp, cb);
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
     * This API is used to obtain a managed rule group.
     * @param {DescribeSecurityGroupManagedRulesRequest} req
     * @param {function(string, DescribeSecurityGroupManagedRulesResponse):void} cb
     * @public
     */
    DescribeSecurityGroupManagedRules(req, cb) {
        let resp = new DescribeSecurityGroupManagedRulesResponse();
        this.request("DescribeSecurityGroupManagedRules", req, resp, cb);
    }

    /**
     * This API is used to query the list of CC attack events.
     * @param {DescribeWebProtectionAttackEventsRequest} req
     * @param {function(string, DescribeWebProtectionAttackEventsResponse):void} cb
     * @public
     */
    DescribeWebProtectionAttackEvents(req, cb) {
        let resp = new DescribeWebProtectionAttackEventsResponse();
        this.request("DescribeWebProtectionAttackEvents", req, resp, cb);
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
     * This API is used to create a CLB instance.
     * @param {CreateLoadBalancingRequest} req
     * @param {function(string, CreateLoadBalancingResponse):void} cb
     * @public
     */
    CreateLoadBalancing(req, cb) {
        let resp = new CreateLoadBalancingResponse();
        this.request("CreateLoadBalancing", req, resp, cb);
    }

    /**
     * This API is used to enable high availability for domain names.
     * @param {ModifyDDoSPolicyHostRequest} req
     * @param {function(string, ModifyDDoSPolicyHostResponse):void} cb
     * @public
     */
    ModifyDDoSPolicyHost(req, cb) {
        let resp = new ModifyDDoSPolicyHostResponse();
        this.request("ModifyDDoSPolicyHost", req, resp, cb);
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
     * This API is used to modify a shipping task.
     * @param {ModifyLogTopicTaskRequest} req
     * @param {function(string, ModifyLogTopicTaskResponse):void} cb
     * @public
     */
    ModifyLogTopicTask(req, cb) {
        let resp = new ModifyLogTopicTaskResponse();
        this.request("ModifyLogTopicTask", req, resp, cb);
    }

    /**
     * This API is used to query user profiling rules.
     * @param {DescribeSecurityPortraitRulesRequest} req
     * @param {function(string, DescribeSecurityPortraitRulesResponse):void} cb
     * @public
     */
    DescribeSecurityPortraitRules(req, cb) {
        let resp = new DescribeSecurityPortraitRulesResponse();
        this.request("DescribeSecurityPortraitRules", req, resp, cb);
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
     * This API is used to query web attack logs.
     * @param {DescribeWebManagedRulesLogRequest} req
     * @param {function(string, DescribeWebManagedRulesLogResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesLog(req, cb) {
        let resp = new DescribeWebManagedRulesLogResponse();
        this.request("DescribeWebManagedRulesLog", req, resp, cb);
    }

    /**
     * Creates a credential for COS origin-pull.
     * @param {CreateCredentialRequest} req
     * @param {function(string, CreateCredentialResponse):void} cb
     * @public
     */
    CreateCredential(req, cb) {
        let resp = new CreateCredentialResponse();
        this.request("CreateCredential", req, resp, cb);
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
     * This API is used to modify the status of a CLB instance.
     * @param {ModifyLoadBalancingStatusRequest} req
     * @param {function(string, ModifyLoadBalancingStatusResponse):void} cb
     * @public
     */
    ModifyLoadBalancingStatus(req, cb) {
        let resp = new ModifyLoadBalancingStatusResponse();
        this.request("ModifyLoadBalancingStatus", req, resp, cb);
    }

    /**
     * This API is used to query the CC protection data recorded over time.
     * @param {DescribeWebProtectionDataRequest} req
     * @param {function(string, DescribeWebProtectionDataResponse):void} cb
     * @public
     */
    DescribeWebProtectionData(req, cb) {
        let resp = new DescribeWebProtectionDataResponse();
        this.request("DescribeWebProtectionData", req, resp, cb);
    }

    /**
     * This API is used to query the list of DDoS attackers.
     * @param {DescribeDDoSAttackSourceEventRequest} req
     * @param {function(string, DescribeDDoSAttackSourceEventResponse):void} cb
     * @public
     */
    DescribeDDoSAttackSourceEvent(req, cb) {
        let resp = new DescribeDDoSAttackSourceEventResponse();
        this.request("DescribeDDoSAttackSourceEvent", req, resp, cb);
    }

    /**
     * This API is used to create a CLS logset.
     * @param {CreateLogSetRequest} req
     * @param {function(string, CreateLogSetResponse):void} cb
     * @public
     */
    CreateLogSet(req, cb) {
        let resp = new CreateLogSetResponse();
        this.request("CreateLogSet", req, resp, cb);
    }

    /**
     * This API is used to modify alarm configuration.
     * @param {ModifyAlarmConfigRequest} req
     * @param {function(string, ModifyAlarmConfigResponse):void} cb
     * @public
     */
    ModifyAlarmConfig(req, cb) {
        let resp = new ModifyAlarmConfigResponse();
        this.request("ModifyAlarmConfig", req, resp, cb);
    }

    /**
     * This API is used to delete a shipping task.
     * @param {DeleteLogTopicTaskRequest} req
     * @param {function(string, DeleteLogTopicTaskResponse):void} cb
     * @public
     */
    DeleteLogTopicTask(req, cb) {
        let resp = new DeleteLogTopicTaskResponse();
        this.request("DeleteLogTopicTask", req, resp, cb);
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
     * This API is used to get the details of a shipping task.
     * @param {DescribeLogTopicTaskDetailRequest} req
     * @param {function(string, DescribeLogTopicTaskDetailResponse):void} cb
     * @public
     */
    DescribeLogTopicTaskDetail(req, cb) {
        let resp = new DescribeLogTopicTaskDetailResponse();
        this.request("DescribeLogTopicTaskDetail", req, resp, cb);
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
     * This API is used to query available shipping entities.
     * @param {DescribeAddableEntityListRequest} req
     * @param {function(string, DescribeAddableEntityListResponse):void} cb
     * @public
     */
    DescribeAddableEntityList(req, cb) {
        let resp = new DescribeAddableEntityListResponse();
        this.request("DescribeAddableEntityList", req, resp, cb);
    }

    /**
     * This API is used to verify a certificate.
     * @param {CheckCertificateRequest} req
     * @param {function(string, CheckCertificateResponse):void} cb
     * @public
     */
    CheckCertificate(req, cb) {
        let resp = new CheckCertificateResponse();
        this.request("CheckCertificate", req, resp, cb);
    }

    /**
     * This API is used to create a replay task for purging or pre-warming URLs.
     * @param {CreateReplayTaskRequest} req
     * @param {function(string, CreateReplayTaskResponse):void} cb
     * @public
     */
    CreateReplayTask(req, cb) {
        let resp = new CreateReplayTaskResponse();
        this.request("CreateReplayTask", req, resp, cb);
    }

    /**
     * This API is used to query the quota limit on site tests.
     * @param {DescribeSpeedTestingQuotaRequest} req
     * @param {function(string, DescribeSpeedTestingQuotaResponse):void} cb
     * @public
     */
    DescribeSpeedTestingQuota(req, cb) {
        let resp = new DescribeSpeedTestingQuotaResponse();
        this.request("DescribeSpeedTestingQuota", req, resp, cb);
    }

    /**
     * This API is used to create a site testing task for a specified domain name.
     * @param {CreateSpeedTestingRequest} req
     * @param {function(string, CreateSpeedTestingResponse):void} cb
     * @public
     */
    CreateSpeedTesting(req, cb) {
        let resp = new CreateSpeedTestingResponse();
        this.request("CreateSpeedTesting", req, resp, cb);
    }

    /**
     * This API is used to query information of all regions.
     * @param {DescribeSecurityPolicyRegionsRequest} req
     * @param {function(string, DescribeSecurityPolicyRegionsResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyRegions(req, cb) {
        let resp = new DescribeSecurityPolicyRegionsResponse();
        this.request("DescribeSecurityPolicyRegions", req, resp, cb);
    }

    /**
     * This API is used to query the result of a site test.
     * @param {DescribeSpeedTestingMetricDataRequest} req
     * @param {function(string, DescribeSpeedTestingMetricDataResponse):void} cb
     * @public
     */
    DescribeSpeedTestingMetricData(req, cb) {
        let resp = new DescribeSpeedTestingMetricDataResponse();
        this.request("DescribeSpeedTestingMetricData", req, resp, cb);
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
     * This API is used to query the list of large attack events.
     * @param {DescribeDDoSMajorAttackEventRequest} req
     * @param {function(string, DescribeDDoSMajorAttackEventResponse):void} cb
     * @public
     */
    DescribeDDoSMajorAttackEvent(req, cb) {
        let resp = new DescribeDDoSMajorAttackEventResponse();
        this.request("DescribeDDoSMajorAttackEvent", req, resp, cb);
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
     * This API is used to query all protected subdomain names.
     * @param {DescribeSecurityPolicyListRequest} req
     * @param {function(string, DescribeSecurityPolicyListResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyList(req, cb) {
        let resp = new DescribeSecurityPolicyListResponse();
        this.request("DescribeSecurityPolicyList", req, resp, cb);
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
     * This API is used to create a custom block page.
     * @param {CreateSecurityDropPageRequest} req
     * @param {function(string, CreateSecurityDropPageResponse):void} cb
     * @public
     */
    CreateSecurityDropPage(req, cb) {
        let resp = new CreateSecurityDropPageResponse();
        this.request("CreateSecurityDropPage", req, resp, cb);
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
     * This API is used to create a shipping task.
     * @param {CreateLogTopicTaskRequest} req
     * @param {function(string, CreateLogTopicTaskResponse):void} cb
     * @public
     */
    CreateLogTopicTask(req, cb) {
        let resp = new CreateLogTopicTaskResponse();
        this.request("CreateLogTopicTask", req, resp, cb);
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
     * This API is used to obtain a list of CLB instances.
     * @param {DescribeLoadBalancingRequest} req
     * @param {function(string, DescribeLoadBalancingResponse):void} cb
     * @public
     */
    DescribeLoadBalancing(req, cb) {
        let resp = new DescribeLoadBalancingResponse();
        this.request("DescribeLoadBalancing", req, resp, cb);
    }

    /**
     * This API is used to delete a CLB instance.
     * @param {DeleteLoadBalancingRequest} req
     * @param {function(string, DeleteLoadBalancingResponse):void} cb
     * @public
     */
    DeleteLoadBalancing(req, cb) {
        let resp = new DeleteLoadBalancingResponse();
        this.request("DeleteLoadBalancing", req, resp, cb);
    }

    /**
     * This API is used to query the bot attack data recorded over time.
     * @param {DescribeBotDataRequest} req
     * @param {function(string, DescribeBotDataResponse):void} cb
     * @public
     */
    DescribeBotData(req, cb) {
        let resp = new DescribeBotDataResponse();
        this.request("DescribeBotData", req, resp, cb);
    }

    /**
     * This API is used to query the details of a hit CC protection rule.
     * @param {DescribeWebProtectionHitRuleDetailRequest} req
     * @param {function(string, DescribeWebProtectionHitRuleDetailResponse):void} cb
     * @public
     */
    DescribeWebProtectionHitRuleDetail(req, cb) {
        let resp = new DescribeWebProtectionHitRuleDetailResponse();
        this.request("DescribeWebProtectionHitRuleDetail", req, resp, cb);
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
     * This API is used to query a security rule.
     * @param {DescribeSecurityRuleIdRequest} req
     * @param {function(string, DescribeSecurityRuleIdResponse):void} cb
     * @public
     */
    DescribeSecurityRuleId(req, cb) {
        let resp = new DescribeSecurityRuleIdResponse();
        this.request("DescribeSecurityRuleId", req, resp, cb);
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
     * This API is used to delete DNS records in batches.
     * @param {DeleteDnsRecordsRequest} req
     * @param {function(string, DeleteDnsRecordsResponse):void} cb
     * @public
     */
    DeleteDnsRecords(req, cb) {
        let resp = new DeleteDnsRecordsResponse();
        this.request("DeleteDnsRecords", req, resp, cb);
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
     * This API is used to modify the priority of a rule in the rule engine.
     * @param {ModifyRulePriorityRequest} req
     * @param {function(string, ModifyRulePriorityResponse):void} cb
     * @public
     */
    ModifyRulePriority(req, cb) {
        let resp = new ModifyRulePriorityResponse();
        this.request("ModifyRulePriority", req, resp, cb);
    }

    /**
     * This API is used to query the list of DDoS attack events.
     * @param {DescribeDDoSAttackEventRequest} req
     * @param {function(string, DescribeDDoSAttackEventResponse):void} cb
     * @public
     */
    DescribeDDoSAttackEvent(req, cb) {
        let resp = new DescribeDDoSAttackEventResponse();
        this.request("DescribeDDoSAttackEvent", req, resp, cb);
    }

    /**
     * This API is used to query a bot managed rule.
     * @param {DescribeBotManagedRulesRequest} req
     * @param {function(string, DescribeBotManagedRulesResponse):void} cb
     * @public
     */
    DescribeBotManagedRules(req, cb) {
        let resp = new DescribeBotManagedRulesResponse();
        this.request("DescribeBotManagedRules", req, resp, cb);
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
     * This API is used to query the list of application proxies.
     * @param {DescribeApplicationProxiesRequest} req
     * @param {function(string, DescribeApplicationProxiesResponse):void} cb
     * @public
     */
    DescribeApplicationProxies(req, cb) {
        let resp = new DescribeApplicationProxiesResponse();
        this.request("DescribeApplicationProxies", req, resp, cb);
    }

    /**
     * This API is used to query the information of blocked clients.
     * @param {DescribeClientRuleListRequest} req
     * @param {function(string, DescribeClientRuleListResponse):void} cb
     * @public
     */
    DescribeClientRuleList(req, cb) {
        let resp = new DescribeClientRuleListResponse();
        this.request("DescribeClientRuleList", req, resp, cb);
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
     * This API is used to query the details of a DDoS attack event.
     * @param {DescribeDDoSAttackEventDetailRequest} req
     * @param {function(string, DescribeDDoSAttackEventDetailResponse):void} cb
     * @public
     */
    DescribeDDoSAttackEventDetail(req, cb) {
        let resp = new DescribeDDoSAttackEventDetailResponse();
        this.request("DescribeDDoSAttackEventDetail", req, resp, cb);
    }

    /**
     * This API is used to query the information of CC attackers.
     * @param {DescribeWebProtectionClientIpListRequest} req
     * @param {function(string, DescribeWebProtectionClientIpListResponse):void} cb
     * @public
     */
    DescribeWebProtectionClientIpList(req, cb) {
        let resp = new DescribeWebProtectionClientIpListResponse();
        this.request("DescribeWebProtectionClientIpList", req, resp, cb);
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
     * This API is used to query all DDoS mitigation configuration.
     * @param {DescribeZoneDDoSPolicyRequest} req
     * @param {function(string, DescribeZoneDDoSPolicyResponse):void} cb
     * @public
     */
    DescribeZoneDDoSPolicy(req, cb) {
        let resp = new DescribeZoneDDoSPolicyResponse();
        this.request("DescribeZoneDDoSPolicy", req, resp, cb);
    }

    /**
     * This API is used to modify a CLB instance.
     * @param {ModifyLoadBalancingRequest} req
     * @param {function(string, ModifyLoadBalancingResponse):void} cb
     * @public
     */
    ModifyLoadBalancing(req, cb) {
        let resp = new ModifyLoadBalancingResponse();
        this.request("ModifyLoadBalancing", req, resp, cb);
    }

    /**
     * This API is used to modify a managed rule.
     * @param {ModifySecurityWafGroupPolicyRequest} req
     * @param {function(string, ModifySecurityWafGroupPolicyResponse):void} cb
     * @public
     */
    ModifySecurityWafGroupPolicy(req, cb) {
        let resp = new ModifySecurityWafGroupPolicyResponse();
        this.request("ModifySecurityWafGroupPolicy", req, resp, cb);
    }

    /**
     * This API is used to create a custom error page.
     * @param {CreateCustomErrorPageRequest} req
     * @param {function(string, CreateCustomErrorPageResponse):void} cb
     * @public
     */
    CreateCustomErrorPage(req, cb) {
        let resp = new CreateCustomErrorPageResponse();
        this.request("CreateCustomErrorPage", req, resp, cb);
    }

    /**
     * This API is used to modify DDoS mitigation configuration.
     * @param {ModifyDDoSPolicyRequest} req
     * @param {function(string, ModifyDDoSPolicyResponse):void} cb
     * @public
     */
    ModifyDDoSPolicy(req, cb) {
        let resp = new ModifyDDoSPolicyResponse();
        this.request("ModifyDDoSPolicy", req, resp, cb);
    }

    /**
     * This API is used to get DNS requests.
     * @param {DescribeDnsDataRequest} req
     * @param {function(string, DescribeDnsDataResponse):void} cb
     * @public
     */
    DescribeDnsData(req, cb) {
        let resp = new DescribeDnsDataResponse();
        this.request("DescribeDnsData", req, resp, cb);
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
     * This API is used to get a list of shipping tasks.
     * @param {DescribeLogTopicTasksRequest} req
     * @param {function(string, DescribeLogTopicTasksResponse):void} cb
     * @public
     */
    DescribeLogTopicTasks(req, cb) {
        let resp = new DescribeLogTopicTasksResponse();
        this.request("DescribeLogTopicTasks", req, resp, cb);
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
     * This API is used to query the DDoS protection configuration.
     * @param {DescribeDDoSPolicyRequest} req
     * @param {function(string, DescribeDDoSPolicyResponse):void} cb
     * @public
     */
    DescribeDDoSPolicy(req, cb) {
        let resp = new DescribeDDoSPolicyResponse();
        this.request("DescribeDDoSPolicy", req, resp, cb);
    }

    /**
     * This API is used to query the list of L7 dimensional data.
     * @param {DescribeSingleL7AnalysisDataRequest} req
     * @param {function(string, DescribeSingleL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeSingleL7AnalysisData(req, cb) {
        let resp = new DescribeSingleL7AnalysisDataResponse();
        this.request("DescribeSingleL7AnalysisData", req, resp, cb);
    }

    /**
     * This API is used to query the details of a hit bot security rule.
     * @param {DescribeBotHitRuleDetailRequest} req
     * @param {function(string, DescribeBotHitRuleDetailResponse):void} cb
     * @public
     */
    DescribeBotHitRuleDetail(req, cb) {
        let resp = new DescribeBotHitRuleDetailResponse();
        this.request("DescribeBotHitRuleDetail", req, resp, cb);
    }

    /**
     * This example shows you how to modify the status of a default certificate.
     * @param {ModifyDefaultCertificateRequest} req
     * @param {function(string, ModifyDefaultCertificateResponse):void} cb
     * @public
     */
    ModifyDefaultCertificate(req, cb) {
        let resp = new ModifyDefaultCertificateResponse();
        this.request("ModifyDefaultCertificate", req, resp, cb);
    }

    /**
     * This API is used to query the security protection configuration.
     * @param {DescribeSecurityPolicyRequest} req
     * @param {function(string, DescribeSecurityPolicyResponse):void} cb
     * @public
     */
    DescribeSecurityPolicy(req, cb) {
        let resp = new DescribeSecurityPolicyResponse();
        this.request("DescribeSecurityPolicy", req, resp, cb);
    }

    /**
     * This API is used to create an IP blocklist/allowlist.
     * @param {CreateIpTableListRequest} req
     * @param {function(string, CreateIpTableListResponse):void} cb
     * @public
     */
    CreateIpTableList(req, cb) {
        let resp = new CreateIpTableListResponse();
        this.request("CreateIpTableList", req, resp, cb);
    }

    /**
     * This API is used to query the details of a hit WAF security rule.
     * @param {DescribeWebManagedRulesHitRuleDetailRequest} req
     * @param {function(string, DescribeWebManagedRulesHitRuleDetailResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesHitRuleDetail(req, cb) {
        let resp = new DescribeWebManagedRulesHitRuleDetailResponse();
        this.request("DescribeWebManagedRulesHitRuleDetail", req, resp, cb);
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
     * This API is used to enable or disable a shipping task.
     * @param {SwitchLogTopicTaskRequest} req
     * @param {function(string, SwitchLogTopicTaskResponse):void} cb
     * @public
     */
    SwitchLogTopicTask(req, cb) {
        let resp = new SwitchLogTopicTaskResponse();
        this.request("SwitchLogTopicTask", req, resp, cb);
    }

    /**
     * This API is used to query DNSSEC information.
     * @param {DescribeDnssecRequest} req
     * @param {function(string, DescribeDnssecResponse):void} cb
     * @public
     */
    DescribeDnssec(req, cb) {
        let resp = new DescribeDnssecResponse();
        this.request("DescribeDnssec", req, resp, cb);
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
     * This API is used to query the top-ranked bot attack data.
     * @param {DescribeBotTopDataRequest} req
     * @param {function(string, DescribeBotTopDataResponse):void} cb
     * @public
     */
    DescribeBotTopData(req, cb) {
        let resp = new DescribeBotTopDataResponse();
        this.request("DescribeBotTopData", req, resp, cb);
    }

    /**
     * This API is used to query the site’s load speed across regions.
     * @param {DescribeSpeedTestingDetailsRequest} req
     * @param {function(string, DescribeSpeedTestingDetailsResponse):void} cb
     * @public
     */
    DescribeSpeedTestingDetails(req, cb) {
        let resp = new DescribeSpeedTestingDetailsResponse();
        this.request("DescribeSpeedTestingDetails", req, resp, cb);
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
     * This API is used to modify the CNAME acceleration status.
     * @param {ModifyZoneCnameSpeedUpRequest} req
     * @param {function(string, ModifyZoneCnameSpeedUpResponse):void} cb
     * @public
     */
    ModifyZoneCnameSpeedUp(req, cb) {
        let resp = new ModifyZoneCnameSpeedUpResponse();
        this.request("ModifyZoneCnameSpeedUp", req, resp, cb);
    }

    /**
     * This API is used to modify DNS records.
     * @param {ModifyDnsRecordRequest} req
     * @param {function(string, ModifyDnsRecordResponse):void} cb
     * @public
     */
    ModifyDnsRecord(req, cb) {
        let resp = new ModifyDnsRecordResponse();
        this.request("ModifyDnsRecord", req, resp, cb);
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
     * This API is used to get a list of logsets.
     * @param {DescribeLogSetsRequest} req
     * @param {function(string, DescribeLogSetsResponse):void} cb
     * @public
     */
    DescribeLogSets(req, cb) {
        let resp = new DescribeLogSetsResponse();
        this.request("DescribeLogSets", req, resp, cb);
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
     * This API is used to modify the default alarm threshold.
     * @param {ModifyAlarmDefaultThresholdRequest} req
     * @param {function(string, ModifyAlarmDefaultThresholdResponse):void} cb
     * @public
     */
    ModifyAlarmDefaultThreshold(req, cb) {
        let resp = new ModifyAlarmDefaultThresholdResponse();
        this.request("ModifyAlarmDefaultThreshold", req, resp, cb);
    }

    /**
     * This API is used to query the list of DDoS blocking data.
     * @param {DescribeDDoSBlockListRequest} req
     * @param {function(string, DescribeDDoSBlockListResponse):void} cb
     * @public
     */
    DescribeDDoSBlockList(req, cb) {
        let resp = new DescribeDDoSBlockListResponse();
        this.request("DescribeDDoSBlockList", req, resp, cb);
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
     * This API is used to reclaim a site from other users after its ownership is verified.
     * @param {ReclaimZoneRequest} req
     * @param {function(string, ReclaimZoneResponse):void} cb
     * @public
     */
    ReclaimZone(req, cb) {
        let resp = new ReclaimZoneResponse();
        this.request("ReclaimZone", req, resp, cb);
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
     * This API is used to query an intelligent rate limiting rule.
     * @param {DescribeRateLimitIntelligenceRuleRequest} req
     * @param {function(string, DescribeRateLimitIntelligenceRuleResponse):void} cb
     * @public
     */
    DescribeRateLimitIntelligenceRule(req, cb) {
        let resp = new DescribeRateLimitIntelligenceRuleResponse();
        this.request("DescribeRateLimitIntelligenceRule", req, resp, cb);
    }

    /**
     * This API is used to query DNS records. Paging, sorting and filtering are supported.
     * @param {DescribeDnsRecordsRequest} req
     * @param {function(string, DescribeDnsRecordsResponse):void} cb
     * @public
     */
    DescribeDnsRecords(req, cb) {
        let resp = new DescribeDnsRecordsResponse();
        this.request("DescribeDnsRecords", req, resp, cb);
    }

    /**
     * This API is used to query bot attack logs.
     * @param {DescribeBotLogRequest} req
     * @param {function(string, DescribeBotLogResponse):void} cb
     * @public
     */
    DescribeBotLog(req, cb) {
        let resp = new DescribeBotLogResponse();
        this.request("DescribeBotLog", req, resp, cb);
    }

    /**
     * This API is used to query the DDoS attack data recorded over time.
     * @param {DescribeDDoSAttackDataRequest} req
     * @param {function(string, DescribeDDoSAttackDataResponse):void} cb
     * @public
     */
    DescribeDDoSAttackData(req, cb) {
        let resp = new DescribeDDoSAttackDataResponse();
        this.request("DescribeDDoSAttackData", req, resp, cb);
    }

    /**
     * This API is used to query the top-ranked CC protection data.
     * @param {DescribeWebProtectionTopDataRequest} req
     * @param {function(string, DescribeWebProtectionTopDataResponse):void} cb
     * @public
     */
    DescribeWebProtectionTopData(req, cb) {
        let resp = new DescribeWebProtectionTopDataResponse();
        this.request("DescribeWebProtectionTopData", req, resp, cb);
    }

    /**
     * This API is used to query the WAF attack data recorded over time.
     * @param {DescribeWebManagedRulesDataRequest} req
     * @param {function(string, DescribeWebManagedRulesDataResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesData(req, cb) {
        let resp = new DescribeWebManagedRulesDataResponse();
        this.request("DescribeWebManagedRulesData", req, resp, cb);
    }

    /**
     * This API is used to get the billing data.
     * @param {DescribeBillingDataRequest} req
     * @param {function(string, DescribeBillingDataResponse):void} cb
     * @public
     */
    DescribeBillingData(req, cb) {
        let resp = new DescribeBillingDataResponse();
        this.request("DescribeBillingData", req, resp, cb);
    }

    /**
     * This API is used to modify the DNSSEC status of a site.
     * @param {ModifyDnssecRequest} req
     * @param {function(string, ModifyDnssecResponse):void} cb
     * @public
     */
    ModifyDnssec(req, cb) {
        let resp = new ModifyDnssecResponse();
        this.request("ModifyDnssec", req, resp, cb);
    }


}
module.exports = TeoClient;
