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
const DescribeTimingL7CacheDataResponse = models.DescribeTimingL7CacheDataResponse;
const Compression = models.Compression;
const DeleteRulesRequest = models.DeleteRulesRequest;
const DescribeDDoSAttackEventDetailResponse = models.DescribeDDoSAttackEventDetailResponse;
const ModifyDefaultCertificateRequest = models.ModifyDefaultCertificateRequest;
const ModifyZoneResponse = models.ModifyZoneResponse;
const SecClientIp = models.SecClientIp;
const DescribeTopL7CacheDataRequest = models.DescribeTopL7CacheDataRequest;
const SingleTypeValue = models.SingleTypeValue;
const CreateCredentialResponse = models.CreateCredentialResponse;
const Https = models.Https;
const SecEntryValue = models.SecEntryValue;
const SwitchLogTopicTaskRequest = models.SwitchLogTopicTaskRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DescribeLogTopicTasksRequest = models.DescribeLogTopicTasksRequest;
const CreateCredentialRequest = models.CreateCredentialRequest;
const ModifyRuleRequest = models.ModifyRuleRequest;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const DescribeWebManagedRulesHitRuleDetailRequest = models.DescribeWebManagedRulesHitRuleDetailRequest;
const AdvancedFilter = models.AdvancedFilter;
const DescribeClientRuleListResponse = models.DescribeClientRuleListResponse;
const DescribeDDoSAttackDataResponse = models.DescribeDDoSAttackDataResponse;
const ReclaimZoneResponse = models.ReclaimZoneResponse;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const RuleCondition = models.RuleCondition;
const DescribeAddableEntityListResponse = models.DescribeAddableEntityListResponse;
const LogSetInfo = models.LogSetInfo;
const DescribeClientRuleListRequest = models.DescribeClientRuleListRequest;
const DescribeBotDataRequest = models.DescribeBotDataRequest;
const RuleRewriteActionParams = models.RuleRewriteActionParams;
const ModifyZoneRequest = models.ModifyZoneRequest;
const Origin = models.Origin;
const SingleDataRecord = models.SingleDataRecord;
const DescribeWebProtectionTopDataRequest = models.DescribeWebProtectionTopDataRequest;
const BotLog = models.BotLog;
const DescribeAvailablePlansRequest = models.DescribeAvailablePlansRequest;
const DescribeSingleL7AnalysisDataRequest = models.DescribeSingleL7AnalysisDataRequest;
const CacheKey = models.CacheKey;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const DescribeBotTopDataRequest = models.DescribeBotTopDataRequest;
const DeleteZoneResponse = models.DeleteZoneResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const DescribeIdentificationsResponse = models.DescribeIdentificationsResponse;
const TimingDataRecord = models.TimingDataRecord;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const ModifyDnssecRequest = models.ModifyDnssecRequest;
const DescribeRulesResponse = models.DescribeRulesResponse;
const DownloadL4LogsResponse = models.DownloadL4LogsResponse;
const DDoSAttackEventDetailData = models.DDoSAttackEventDetailData;
const DescribeBotClientIpListRequest = models.DescribeBotClientIpListRequest;
const DescribeTopL7AnalysisDataResponse = models.DescribeTopL7AnalysisDataResponse;
const DescribeBotTopDataResponse = models.DescribeBotTopDataResponse;
const DetailHost = models.DetailHost;
const RewriteAction = models.RewriteAction;
const CreateDnsRecordRequest = models.CreateDnsRecordRequest;
const L7OfflineLog = models.L7OfflineLog;
const CreateLogTopicTaskResponse = models.CreateLogTopicTaskResponse;
const SmartRouting = models.SmartRouting;
const DescribeDnsDataResponse = models.DescribeDnsDataResponse;
const ModifyLogTopicTaskResponse = models.ModifyLogTopicTaskResponse;
const Zone = models.Zone;
const RuleNormalActionParams = models.RuleNormalActionParams;
const DescribeDDoSAttackSourceEventRequest = models.DescribeDDoSAttackSourceEventRequest;
const RuleExtraParameter = models.RuleExtraParameter;
const RulesSettingAction = models.RulesSettingAction;
const DDoSAttackEvent = models.DDoSAttackEvent;
const ClientIpHeader = models.ClientIpHeader;
const DescribeDDoSAttackTopDataRequest = models.DescribeDDoSAttackTopDataRequest;
const Quic = models.Quic;
const Ipv6 = models.Ipv6;
const DescribeRulesRequest = models.DescribeRulesRequest;
const ClsLogTopicInfo = models.ClsLogTopicInfo;
const DescribeDDoSMajorAttackEventResponse = models.DescribeDDoSMajorAttackEventResponse;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const DescribeContentQuotaResponse = models.DescribeContentQuotaResponse;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const DescribeBillingDataRequest = models.DescribeBillingDataRequest;
const CreateDnsRecordResponse = models.CreateDnsRecordResponse;
const TimingTypeValue = models.TimingTypeValue;
const DnsData = models.DnsData;
const ServerCertInfo = models.ServerCertInfo;
const DescribeWebManagedRulesDataResponse = models.DescribeWebManagedRulesDataResponse;
const DescribeWebManagedRulesLogResponse = models.DescribeWebManagedRulesLogResponse;
const ClientIpCountry = models.ClientIpCountry;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DescribeTopL7AnalysisDataRequest = models.DescribeTopL7AnalysisDataRequest;
const FileAscriptionInfo = models.FileAscriptionInfo;
const DescribeDDoSBlockListResponse = models.DescribeDDoSBlockListResponse;
const ZoneSetting = models.ZoneSetting;
const DDoSAttackSourceEvent = models.DDoSAttackSourceEvent;
const ModifyRulePriorityResponse = models.ModifyRulePriorityResponse;
const DescribeTopL7CacheDataResponse = models.DescribeTopL7CacheDataResponse;
const DescribeOverviewL7DataRequest = models.DescribeOverviewL7DataRequest;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const WebSocket = models.WebSocket;
const DeleteLogTopicTaskRequest = models.DeleteLogTopicTaskRequest;
const DDoSBlockData = models.DDoSBlockData;
const VanityNameServers = models.VanityNameServers;
const DescribeDnssecRequest = models.DescribeDnssecRequest;
const DeleteLogTopicTaskResponse = models.DeleteLogTopicTaskResponse;
const DescribeWebManagedRulesDataRequest = models.DescribeWebManagedRulesDataRequest;
const RuleChoicePropertiesItem = models.RuleChoicePropertiesItem;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const MaxAge = models.MaxAge;
const DescribeDDoSAttackSourceEventResponse = models.DescribeDDoSAttackSourceEventResponse;
const DnsRecord = models.DnsRecord;
const ModifyRulePriorityRequest = models.ModifyRulePriorityRequest;
const DescribeDnsRecordsRequest = models.DescribeDnsRecordsRequest;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const NoCache = models.NoCache;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const DescribeWebProtectionHitRuleDetailRequest = models.DescribeWebProtectionHitRuleDetailRequest;
const DDoS = models.DDoS;
const CreateZoneRequest = models.CreateZoneRequest;
const PlanInfo = models.PlanInfo;
const DescribeTimingL7CacheDataRequest = models.DescribeTimingL7CacheDataRequest;
const Task = models.Task;
const Waf = models.Waf;
const ModifyRuleResponse = models.ModifyRuleResponse;
const CheckCertificateResponse = models.CheckCertificateResponse;
const AscriptionInfo = models.AscriptionInfo;
const DescribeLogSetsResponse = models.DescribeLogSetsResponse;
const DescribeWebProtectionDataRequest = models.DescribeWebProtectionDataRequest;
const CheckCertificateRequest = models.CheckCertificateRequest;
const DescribeDDoSAttackEventResponse = models.DescribeDDoSAttackEventResponse;
const DescribeLogTopicTaskDetailRequest = models.DescribeLogTopicTaskDetailRequest;
const Cache = models.Cache;
const ForceRedirect = models.ForceRedirect;
const CodeAction = models.CodeAction;
const DescribeBotHitRuleDetailRequest = models.DescribeBotHitRuleDetailRequest;
const CreateReplayTaskRequest = models.CreateReplayTaskRequest;
const DescribeWebProtectionHitRuleDetailResponse = models.DescribeWebProtectionHitRuleDetailResponse;
const Identification = models.Identification;
const DescribeDnsRecordsResponse = models.DescribeDnsRecordsResponse;
const DescribeDDoSAttackDataRequest = models.DescribeDDoSAttackDataRequest;
const CachePrefresh = models.CachePrefresh;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const DescribeWebProtectionClientIpListResponse = models.DescribeWebProtectionClientIpListResponse;
const DescribeTimingL7AnalysisDataResponse = models.DescribeTimingL7AnalysisDataResponse;
const DescribeContentQuotaRequest = models.DescribeContentQuotaRequest;
const DescribeWebProtectionAttackEventsRequest = models.DescribeWebProtectionAttackEventsRequest;
const RulesProperties = models.RulesProperties;
const DescribeOverviewL7DataResponse = models.DescribeOverviewL7DataResponse;
const Hsts = models.Hsts;
const RuleCodeActionParams = models.RuleCodeActionParams;
const CreateRuleRequest = models.CreateRuleRequest;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const TopEntry = models.TopEntry;
const Rule = models.Rule;
const TimingDataItem = models.TimingDataItem;
const DescribeLogTopicTaskDetailResponse = models.DescribeLogTopicTaskDetailResponse;
const ModifyDnsRecordResponse = models.ModifyDnsRecordResponse;
const DescribeLogSetsRequest = models.DescribeLogSetsRequest;
const CreatePlanForZoneRequest = models.CreatePlanForZoneRequest;
const ClientRule = models.ClientRule;
const CC = models.CC;
const PostMaxSize = models.PostMaxSize;
const Sv = models.Sv;
const DescribeBillingDataResponse = models.DescribeBillingDataResponse;
const CreateLogSetResponse = models.CreateLogSetResponse;
const Filter = models.Filter;
const DownloadL4LogsRequest = models.DownloadL4LogsRequest;
const DescribeWebProtectionClientIpListRequest = models.DescribeWebProtectionClientIpListRequest;
const DescribeDnssecResponse = models.DescribeDnssecResponse;
const CreateZoneResponse = models.CreateZoneResponse;
const ModifyZoneCnameSpeedUpRequest = models.ModifyZoneCnameSpeedUpRequest;
const Action = models.Action;
const DescribeTimingL7AnalysisDataRequest = models.DescribeTimingL7AnalysisDataRequest;
const LogTopicDetailInfo = models.LogTopicDetailInfo;
const ModifyDnsRecordRequest = models.ModifyDnsRecordRequest;
const SecurityType = models.SecurityType;
const DescribeDDoSBlockListRequest = models.DescribeDDoSBlockListRequest;
const DescribeDDoSMajorAttackEventRequest = models.DescribeDDoSMajorAttackEventRequest;
const BillingDataFilter = models.BillingDataFilter;
const DescribeBotDataResponse = models.DescribeBotDataResponse;
const DescribeAddableEntityListRequest = models.DescribeAddableEntityListRequest;
const DescribeSingleL7AnalysisDataResponse = models.DescribeSingleL7AnalysisDataResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const Header = models.Header;
const RuleAndConditions = models.RuleAndConditions;
const SecEntry = models.SecEntry;
const DescribeIdentificationsRequest = models.DescribeIdentificationsRequest;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const DescribeAvailablePlansResponse = models.DescribeAvailablePlansResponse;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const AccelerateType = models.AccelerateType;
const NormalAction = models.NormalAction;
const ReclaimZoneRequest = models.ReclaimZoneRequest;
const FollowOrigin = models.FollowOrigin;
const CreateLogSetRequest = models.CreateLogSetRequest;
const DeleteZoneRequest = models.DeleteZoneRequest;
const SecHitRuleInfo = models.SecHitRuleInfo;
const ModifyDefaultCertificateResponse = models.ModifyDefaultCertificateResponse;
const TopDetailData = models.TopDetailData;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const DescribeBotLogRequest = models.DescribeBotLogRequest;
const L4OfflineLog = models.L4OfflineLog;
const CreateLogTopicTaskRequest = models.CreateLogTopicTaskRequest;
const DeleteRulesResponse = models.DeleteRulesResponse;
const QueryCondition = models.QueryCondition;
const DescribeWebProtectionDataResponse = models.DescribeWebProtectionDataResponse;
const CacheConfig = models.CacheConfig;
const DescribeRulesSettingResponse = models.DescribeRulesSettingResponse;
const CCInterceptEvent = models.CCInterceptEvent;
const ModifyZoneCnameSpeedUpResponse = models.ModifyZoneCnameSpeedUpResponse;
const FailReason = models.FailReason;
const DescribeRulesSettingRequest = models.DescribeRulesSettingRequest;
const DescribeBotClientIpListResponse = models.DescribeBotClientIpListResponse;
const DeleteDnsRecordsRequest = models.DeleteDnsRecordsRequest;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const DDoSMajorAttackEvent = models.DDoSMajorAttackEvent;
const DescribeDnsDataRequest = models.DescribeDnsDataRequest;
const DescribeWebProtectionAttackEventsResponse = models.DescribeWebProtectionAttackEventsResponse;
const Tag = models.Tag;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const Resource = models.Resource;
const DeleteDnsRecordsResponse = models.DeleteDnsRecordsResponse;
const Quota = models.Quota;
const TopDataRecord = models.TopDataRecord;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const DescribeWebManagedRulesLogRequest = models.DescribeWebManagedRulesLogRequest;
const DescribeBotHitRuleDetailResponse = models.DescribeBotHitRuleDetailResponse;
const ModifyLogTopicTaskRequest = models.ModifyLogTopicTaskRequest;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const RuleItem = models.RuleItem;
const DescribeDDoSAttackEventDetailRequest = models.DescribeDDoSAttackEventDetailRequest;
const DescribeDDoSAttackEventRequest = models.DescribeDDoSAttackEventRequest;
const DescribeWebProtectionTopDataResponse = models.DescribeWebProtectionTopDataResponse;
const VanityNameServersIps = models.VanityNameServersIps;
const DescribeWebManagedRulesHitRuleDetailResponse = models.DescribeWebManagedRulesHitRuleDetailResponse;
const DescribeBotLogResponse = models.DescribeBotLogResponse;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const ModifyDnssecResponse = models.ModifyDnssecResponse;
const WebLogs = models.WebLogs;
const SwitchLogTopicTaskResponse = models.SwitchLogTopicTaskResponse;
const QueryString = models.QueryString;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const DnssecInfo = models.DnssecInfo;
const UpstreamHttp2 = models.UpstreamHttp2;
const TopEntryValue = models.TopEntryValue;
const OfflineCache = models.OfflineCache;
const DescribeDDoSAttackTopDataResponse = models.DescribeDDoSAttackTopDataResponse;
const DescribeTimingL4DataRequest = models.DescribeTimingL4DataRequest;
const SecRuleRelatedInfo = models.SecRuleRelatedInfo;
const DescribeTimingL4DataResponse = models.DescribeTimingL4DataResponse;
const DescribeLogTopicTasksResponse = models.DescribeLogTopicTasksResponse;
const CreateReplayTaskResponse = models.CreateReplayTaskResponse;


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
     * This API is used to modify the DNSSEC status of a site.
     * @param {ModifyDnssecRequest} req
     * @param {function(string, ModifyDnssecResponse):void} cb
     * @public
     */
    ModifyDnssec(req, cb) {
        let resp = new ModifyDnssecResponse();
        this.request("ModifyDnssec", req, resp, cb);
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


}
module.exports = TeoClient;
