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
const WebLogData = models.WebLogData;
const HostCertSetting = models.HostCertSetting;
const ACLUserRule = models.ACLUserRule;
const ModifyDefaultCertificateRequest = models.ModifyDefaultCertificateRequest;
const DescribeWebManagedRulesTopDataResponse = models.DescribeWebManagedRulesTopDataResponse;
const DescribeOriginGroupResponse = models.DescribeOriginGroupResponse;
const DescribeWebManagedRulesAttackEventsResponse = models.DescribeWebManagedRulesAttackEventsResponse;
const DescribeTopL7CacheDataRequest = models.DescribeTopL7CacheDataRequest;
const DeleteApplicationProxyResponse = models.DeleteApplicationProxyResponse;
const Https = models.Https;
const SecurityEntity = models.SecurityEntity;
const OriginFilter = models.OriginFilter;
const BotLogData = models.BotLogData;
const DescribeZonesRequest = models.DescribeZonesRequest;
const RateLimitTemplate = models.RateLimitTemplate;
const ShieldArea = models.ShieldArea;
const DdosRule = models.DdosRule;
const ModifyLoadBalancingStatusResponse = models.ModifyLoadBalancingStatusResponse;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const DescribeDDosAttackEventResponse = models.DescribeDDosAttackEventResponse;
const DeleteApplicationProxyRequest = models.DeleteApplicationProxyRequest;
const CreateCustomErrorPageResponse = models.CreateCustomErrorPageResponse;
const ReclaimZoneResponse = models.ReclaimZoneResponse;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const ModifyDnsRecordRequest = models.ModifyDnsRecordRequest;
const DDoSAcl = models.DDoSAcl;
const ModifySecurityPolicyRequest = models.ModifySecurityPolicyRequest;
const CreateApplicationProxyRulesRequest = models.CreateApplicationProxyRulesRequest;
const LoadBalancing = models.LoadBalancing;
const ModifyDnssecRequest = models.ModifyDnssecRequest;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const DdosPacketFilter = models.DdosPacketFilter;
const CreateApplicationProxyResponse = models.CreateApplicationProxyResponse;
const ImportDnsRecordsRequest = models.ImportDnsRecordsRequest;
const CacheConfigNoCache = models.CacheConfigNoCache;
const ModifyOriginGroupResponse = models.ModifyOriginGroupResponse;
const DescribeZoneDetailsResponse = models.DescribeZoneDetailsResponse;
const BotLog = models.BotLog;
const Origin = models.Origin;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const DescribeSecurityPolicyManagedRulesRequest = models.DescribeSecurityPolicyManagedRulesRequest;
const DescribeSecurityPortraitRulesRequest = models.DescribeSecurityPortraitRulesRequest;
const CertSort = models.CertSort;
const ModifySecurityPolicyResponse = models.ModifySecurityPolicyResponse;
const ModifyDDoSPolicyHostRequest = models.ModifyDDoSPolicyHostRequest;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const DescribeSecurityPolicyRegionsResponse = models.DescribeSecurityPolicyRegionsResponse;
const ModifyZoneResponse = models.ModifyZoneResponse;
const DescribeDDosAttackSourceEventRequest = models.DescribeDDosAttackSourceEventRequest;
const ModifyZoneRequest = models.ModifyZoneRequest;
const DeleteZoneResponse = models.DeleteZoneResponse;
const DDosAttackEventData = models.DDosAttackEventData;
const Hsts = models.Hsts;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const DeleteApplicationProxyRuleResponse = models.DeleteApplicationProxyRuleResponse;
const DDosAttackSourceEvent = models.DDosAttackSourceEvent;
const TimingDataRecord = models.TimingDataRecord;
const DdosAcls = models.DdosAcls;
const DeleteOriginGroupRequest = models.DeleteOriginGroupRequest;
const Tag = models.Tag;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const CreateDnsRecordRequest = models.CreateDnsRecordRequest;
const IpTableRule = models.IpTableRule;
const L7OfflineLog = models.L7OfflineLog;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const ApplicationProxyRule = models.ApplicationProxyRule;
const SmartRouting = models.SmartRouting;
const DescribeDnsDataResponse = models.DescribeDnsDataResponse;
const Zone = models.Zone;
const ZoneFilter = models.ZoneFilter;
const DescribeSecurityPolicyManagedRulesIdRequest = models.DescribeSecurityPolicyManagedRulesIdRequest;
const ModifyApplicationProxyStatusRequest = models.ModifyApplicationProxyStatusRequest;
const CacheConfigCache = models.CacheConfigCache;
const CertFilter = models.CertFilter;
const DescribeIdentificationRequest = models.DescribeIdentificationRequest;
const ModifyLoadBalancingStatusRequest = models.ModifyLoadBalancingStatusRequest;
const DescribeDDosAttackTopDataResponse = models.DescribeDDosAttackTopDataResponse;
const DescribeCnameStatusResponse = models.DescribeCnameStatusResponse;
const DescribeLoadBalancingRequest = models.DescribeLoadBalancingRequest;
const CCInterceptEvent = models.CCInterceptEvent;
const DDoSStatusInfo = models.DDoSStatusInfo;
const AclConfig = models.AclConfig;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const ScanDnsRecordsResponse = models.ScanDnsRecordsResponse;
const WafConfig = models.WafConfig;
const CreateDnsRecordResponse = models.CreateDnsRecordResponse;
const CCLog = models.CCLog;
const ServerCertInfo = models.ServerCertInfo;
const DDoSConfig = models.DDoSConfig;
const DescribeWebManagedRulesDataResponse = models.DescribeWebManagedRulesDataResponse;
const DescribeWebManagedRulesLogResponse = models.DescribeWebManagedRulesLogResponse;
const OriginRecord = models.OriginRecord;
const WebLogs = models.WebLogs;
const TopDetailData = models.TopDetailData;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DeleteApplicationProxyRuleRequest = models.DeleteApplicationProxyRuleRequest;
const CacheConfigFollowOrigin = models.CacheConfigFollowOrigin;
const ACLCondition = models.ACLCondition;
const DescribeTopL7AnalysisDataRequest = models.DescribeTopL7AnalysisDataRequest;
const TopNEntry = models.TopNEntry;
const DescribeApplicationProxyResponse = models.DescribeApplicationProxyResponse;
const CreateLoadBalancingResponse = models.CreateLoadBalancingResponse;
const DescribeTopL7CacheDataResponse = models.DescribeTopL7CacheDataResponse;
const DescribeOverviewL7DataRequest = models.DescribeOverviewL7DataRequest;
const SwitchConfig = models.SwitchConfig;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const WebSocket = models.WebSocket;
const DataItem = models.DataItem;
const ModifyLoadBalancingRequest = models.ModifyLoadBalancingRequest;
const CreateLoadBalancingRequest = models.CreateLoadBalancingRequest;
const DescribeDnssecRequest = models.DescribeDnssecRequest;
const DescribeWebProtectionLogResponse = models.DescribeWebProtectionLogResponse;
const CCInterceptEventData = models.CCInterceptEventData;
const DescribeLoadBalancingDetailResponse = models.DescribeLoadBalancingDetailResponse;
const SecurityConfig = models.SecurityConfig;
const DDosMajorAttackEventData = models.DDosMajorAttackEventData;
const DescribeBotManagedRulesResponse = models.DescribeBotManagedRulesResponse;
const DnsRecord = models.DnsRecord;
const TopDataRecord = models.TopDataRecord;
const DDoSAntiPly = models.DDoSAntiPly;
const DescribeWebManagedRulesDataRequest = models.DescribeWebManagedRulesDataRequest;
const DDosAttackSourceEventData = models.DDosAttackSourceEventData;
const ModifyDDoSPolicyResponse = models.ModifyDDoSPolicyResponse;
const DescribeDnsRecordsRequest = models.DescribeDnsRecordsRequest;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const WafRule = models.WafRule;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const GeoIp = models.GeoIp;
const DescribeSecurityPolicyRequest = models.DescribeSecurityPolicyRequest;
const ModifyApplicationProxyRuleResponse = models.ModifyApplicationProxyRuleResponse;
const DDosAttackEvent = models.DDosAttackEvent;
const FailReason = models.FailReason;
const CreateZoneRequest = models.CreateZoneRequest;
const RateLimitConfig = models.RateLimitConfig;
const DescribeTimingL7CacheDataRequest = models.DescribeTimingL7CacheDataRequest;
const DescribeSecurityPolicyListResponse = models.DescribeSecurityPolicyListResponse;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const OriginRecordPrivateParameter = models.OriginRecordPrivateParameter;
const CheckCertificateResponse = models.CheckCertificateResponse;
const DDoSApplication = models.DDoSApplication;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const DeleteLoadBalancingResponse = models.DeleteLoadBalancingResponse;
const DescribeWebProtectionDataRequest = models.DescribeWebProtectionDataRequest;
const CheckCertificateRequest = models.CheckCertificateRequest;
const DescribeSecurityPortraitRulesResponse = models.DescribeSecurityPortraitRulesResponse;
const CreateApplicationProxyRuleRequest = models.CreateApplicationProxyRuleRequest;
const BotManagedRuleDetail = models.BotManagedRuleDetail;
const ForceRedirect = models.ForceRedirect;
const ModifyApplicationProxyRequest = models.ModifyApplicationProxyRequest;
const ModifyApplicationProxyStatusResponse = models.ModifyApplicationProxyStatusResponse;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const DetailHost = models.DetailHost;
const RateLimitUserRule = models.RateLimitUserRule;
const DescribeDnsRecordsResponse = models.DescribeDnsRecordsResponse;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const CachePrefresh = models.CachePrefresh;
const DescribeTimingL7AnalysisDataResponse = models.DescribeTimingL7AnalysisDataResponse;
const PortraitManagedRuleDetail = models.PortraitManagedRuleDetail;
const BotPortraitRule = models.BotPortraitRule;
const DescribeWebProtectionAttackEventsRequest = models.DescribeWebProtectionAttackEventsRequest;
const DescribeOverviewL7DataResponse = models.DescribeOverviewL7DataResponse;
const DescribeHostsCertificateRequest = models.DescribeHostsCertificateRequest;
const DescribeSecurityPolicyManagedRulesResponse = models.DescribeSecurityPolicyManagedRulesResponse;
const OriginGroup = models.OriginGroup;
const DescribeApplicationProxyRequest = models.DescribeApplicationProxyRequest;
const TopNEntryValue = models.TopNEntryValue;
const ModifyDDoSPolicyHostResponse = models.ModifyDDoSPolicyHostResponse;
const ModifyApplicationProxyRuleStatusRequest = models.ModifyApplicationProxyRuleStatusRequest;
const ModifyLoadBalancingResponse = models.ModifyLoadBalancingResponse;
const WebAttackEvent = models.WebAttackEvent;
const DescribeDDosAttackTopDataRequest = models.DescribeDDosAttackTopDataRequest;
const CreateApplicationProxyRuleResponse = models.CreateApplicationProxyRuleResponse;
const DescribeDDosAttackDataRequest = models.DescribeDDosAttackDataRequest;
const ModifyDnsRecordResponse = models.ModifyDnsRecordResponse;
const RateLimitTemplateDetail = models.RateLimitTemplateDetail;
const TimingDataItem = models.TimingDataItem;
const CreateApplicationProxyRequest = models.CreateApplicationProxyRequest;
const DescribeTopL7AnalysisDataResponse = models.DescribeTopL7AnalysisDataResponse;
const IntelligenceRuleItem = models.IntelligenceRuleItem;
const IntelligenceRule = models.IntelligenceRule;
const PostMaxSize = models.PostMaxSize;
const OriginCheckOriginStatus = models.OriginCheckOriginStatus;
const ManagedRule = models.ManagedRule;
const Filter = models.Filter;
const DescribeWebManagedRulesAttackEventsRequest = models.DescribeWebManagedRulesAttackEventsRequest;
const DescribeCnameStatusRequest = models.DescribeCnameStatusRequest;
const CreateCustomErrorPageRequest = models.CreateCustomErrorPageRequest;
const DescribeDnssecResponse = models.DescribeDnssecResponse;
const CreateZoneResponse = models.CreateZoneResponse;
const DnsDataFilter = models.DnsDataFilter;
const DeleteLoadBalancingRequest = models.DeleteLoadBalancingRequest;
const DescribeTimingL7AnalysisDataRequest = models.DescribeTimingL7AnalysisDataRequest;
const DescribeSecurityPolicyManagedRulesIdResponse = models.DescribeSecurityPolicyManagedRulesIdResponse;
const WebEventData = models.WebEventData;
const ApplicationProxy = models.ApplicationProxy;
const ModifyApplicationProxyResponse = models.ModifyApplicationProxyResponse;
const DescribeDDoSPolicyResponse = models.DescribeDDoSPolicyResponse;
const CacheKey = models.CacheKey;
const ModifyOriginGroupRequest = models.ModifyOriginGroupRequest;
const ModifyApplicationProxyRuleStatusResponse = models.ModifyApplicationProxyRuleStatusResponse;
const DescribeSecurityPolicyListRequest = models.DescribeSecurityPolicyListRequest;
const DescribeTimingL7CacheDataResponse = models.DescribeTimingL7CacheDataResponse;
const DescribeApplicationProxyDetailRequest = models.DescribeApplicationProxyDetailRequest;
const RateLimitIntelligence = models.RateLimitIntelligence;
const IpTableConfig = models.IpTableConfig;
const DeleteOriginGroupResponse = models.DeleteOriginGroupResponse;
const Header = models.Header;
const VanityNameServersIps = models.VanityNameServersIps;
const DescribeDDosAttackSourceEventResponse = models.DescribeDDosAttackSourceEventResponse;
const DescribeZoneDetailsRequest = models.DescribeZoneDetailsRequest;
const DescribeDDoSPolicyRequest = models.DescribeDDoSPolicyRequest;
const SecEntry = models.SecEntry;
const DescribeDDosMajorAttackEventRequest = models.DescribeDDosMajorAttackEventRequest;
const Quic = models.Quic;
const CreateOriginGroupResponse = models.CreateOriginGroupResponse;
const DescribeSecurityPolicyResponse = models.DescribeSecurityPolicyResponse;
const QueryString = models.QueryString;
const DescribeSecurityPolicyRegionsRequest = models.DescribeSecurityPolicyRegionsRequest;
const SecEntryValue = models.SecEntryValue;
const ReclaimZoneRequest = models.ReclaimZoneRequest;
const DeleteZoneRequest = models.DeleteZoneRequest;
const BotManagedRule = models.BotManagedRule;
const ModifyDefaultCertificateResponse = models.ModifyDefaultCertificateResponse;
const DescribeDDosAttackEventRequest = models.DescribeDDosAttackEventRequest;
const ClientIp = models.ClientIp;
const DnsRecordFilter = models.DnsRecordFilter;
const DescribeHostsCertificateResponse = models.DescribeHostsCertificateResponse;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const AiRule = models.AiRule;
const MaxAge = models.MaxAge;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const QueryCondition = models.QueryCondition;
const DescribeDnsDataRequest = models.DescribeDnsDataRequest;
const CacheConfig = models.CacheConfig;
const DescribeDDosAttackEventDetailResponse = models.DescribeDDosAttackEventDetailResponse;
const ModifyApplicationProxyRuleRequest = models.ModifyApplicationProxyRuleRequest;
const ModifyDDoSPolicyRequest = models.ModifyDDoSPolicyRequest;
const ModifyZoneCnameSpeedUpResponse = models.ModifyZoneCnameSpeedUpResponse;
const DescribeWebProtectionLogRequest = models.DescribeWebProtectionLogRequest;
const CCLogData = models.CCLogData;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const Task = models.Task;
const DeleteDnsRecordsRequest = models.DeleteDnsRecordsRequest;
const DdosAllowBlock = models.DdosAllowBlock;
const DDoSGeoIp = models.DDoSGeoIp;
const DescribeZoneDDoSPolicyResponse = models.DescribeZoneDDoSPolicyResponse;
const CnameStatus = models.CnameStatus;
const DescribeDDosMajorAttackEventResponse = models.DescribeDDosMajorAttackEventResponse;
const DDoSFeaturesFilter = models.DDoSFeaturesFilter;
const DescribeWebProtectionAttackEventsResponse = models.DescribeWebProtectionAttackEventsResponse;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const Resource = models.Resource;
const DeleteDnsRecordsResponse = models.DeleteDnsRecordsResponse;
const DescribeBotLogRequest = models.DescribeBotLogRequest;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const DDosAttackEventDetailData = models.DDosAttackEventDetailData;
const CreateOriginGroupRequest = models.CreateOriginGroupRequest;
const DescribeTimingL4DataRequest = models.DescribeTimingL4DataRequest;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const DescribeZoneDDoSPolicyRequest = models.DescribeZoneDDoSPolicyRequest;
const DescribeDDosAttackDataResponse = models.DescribeDDosAttackDataResponse;
const DescribeWebManagedRulesLogRequest = models.DescribeWebManagedRulesLogRequest;
const CreateApplicationProxyRulesResponse = models.CreateApplicationProxyRulesResponse;
const DescribeWebManagedRulesTopDataRequest = models.DescribeWebManagedRulesTopDataRequest;
const DescribeIdentificationResponse = models.DescribeIdentificationResponse;
const DDosMajorAttackEvent = models.DDosMajorAttackEvent;
const ModifyZoneCnameSpeedUpRequest = models.ModifyZoneCnameSpeedUpRequest;
const DescribeApplicationProxyDetailResponse = models.DescribeApplicationProxyDetailResponse;
const DDoSUserAllowBlockIP = models.DDoSUserAllowBlockIP;
const DescribeBotLogResponse = models.DescribeBotLogResponse;
const DescribeLoadBalancingResponse = models.DescribeLoadBalancingResponse;
const DescribeWebProtectionDataResponse = models.DescribeWebProtectionDataResponse;
const ModifyDnssecResponse = models.ModifyDnssecResponse;
const ScanDnsRecordsRequest = models.ScanDnsRecordsRequest;
const VanityNameServers = models.VanityNameServers;
const ImportDnsRecordsResponse = models.ImportDnsRecordsResponse;
const DescribeLoadBalancingDetailRequest = models.DescribeLoadBalancingDetailRequest;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const DnssecInfo = models.DnssecInfo;
const DescribeOriginGroupRequest = models.DescribeOriginGroupRequest;
const DescribeOriginGroupDetailResponse = models.DescribeOriginGroupDetailResponse;
const UpstreamHttp2 = models.UpstreamHttp2;
const OfflineCache = models.OfflineCache;
const DescribeOriginGroupDetailRequest = models.DescribeOriginGroupDetailRequest;
const DescribeDDosAttackEventDetailRequest = models.DescribeDDosAttackEventDetailRequest;
const DescribeTimingL4DataResponse = models.DescribeTimingL4DataResponse;
const Sv = models.Sv;
const BotConfig = models.BotConfig;
const TimingTypeValue = models.TimingTypeValue;
const DescribeBotManagedRulesRequest = models.DescribeBotManagedRulesRequest;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.intl.tencentcloudapi.com", "2022-01-06", credential, region, profile);
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
     * This API is used to query web attack events.
     * @param {DescribeWebProtectionAttackEventsRequest} req
     * @param {function(string, DescribeWebProtectionAttackEventsResponse):void} cb
     * @public
     */
    DescribeWebProtectionAttackEvents(req, cb) {
        let resp = new DescribeWebProtectionAttackEventsResponse();
        this.request("DescribeWebProtectionAttackEvents", req, resp, cb);
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
     * This API is used to query the top data of DDoS attacks.
     * @param {DescribeDDosAttackTopDataRequest} req
     * @param {function(string, DescribeDDosAttackTopDataResponse):void} cb
     * @public
     */
    DescribeDDosAttackTopData(req, cb) {
        let resp = new DescribeDDosAttackTopDataResponse();
        this.request("DescribeDDosAttackTopData", req, resp, cb);
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
     * This API is used to query web hosting logs.
     * @param {DescribeWebManagedRulesLogRequest} req
     * @param {function(string, DescribeWebManagedRulesLogResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesLog(req, cb) {
        let resp = new DescribeWebManagedRulesLogResponse();
        this.request("DescribeWebManagedRulesLog", req, resp, cb);
    }

    /**
     * This API is used to query layer-7 logs.
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
     * This API is used to query the web protection data.
     * @param {DescribeWebProtectionDataRequest} req
     * @param {function(string, DescribeWebProtectionDataResponse):void} cb
     * @public
     */
    DescribeWebProtectionData(req, cb) {
        let resp = new DescribeWebProtectionDataResponse();
        this.request("DescribeWebProtectionData", req, resp, cb);
    }

    /**
     * This API is used to query web hosting attack events.
     * @param {DescribeWebManagedRulesAttackEventsRequest} req
     * @param {function(string, DescribeWebManagedRulesAttackEventsResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesAttackEvents(req, cb) {
        let resp = new DescribeWebManagedRulesAttackEventsResponse();
        this.request("DescribeWebManagedRulesAttackEvents", req, resp, cb);
    }

    /**
     * This API is used to modify the site information.
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
     * This API is used to query the layer-7 time series traffic data for monitoring.
     * @param {DescribeOverviewL7DataRequest} req
     * @param {function(string, DescribeOverviewL7DataResponse):void} cb
     * @public
     */
    DescribeOverviewL7Data(req, cb) {
        let resp = new DescribeOverviewL7DataResponse();
        this.request("DescribeOverviewL7Data", req, resp, cb);
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
     * This API is used to query managed rules.
     * @param {DescribeSecurityPolicyManagedRulesRequest} req
     * @param {function(string, DescribeSecurityPolicyManagedRulesResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyManagedRules(req, cb) {
        let resp = new DescribeSecurityPolicyManagedRulesResponse();
        this.request("DescribeSecurityPolicyManagedRules", req, resp, cb);
    }

    /**
     * This API is used to query the CNAME status of a domain name.
     * @param {DescribeCnameStatusRequest} req
     * @param {function(string, DescribeCnameStatusResponse):void} cb
     * @public
     */
    DescribeCnameStatus(req, cb) {
        let resp = new DescribeCnameStatusResponse();
        this.request("DescribeCnameStatus", req, resp, cb);
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
     * This API is used to query the details of a site by site ID.
     * @param {DescribeZoneDetailsRequest} req
     * @param {function(string, DescribeZoneDetailsResponse):void} cb
     * @public
     */
    DescribeZoneDetails(req, cb) {
        let resp = new DescribeZoneDetailsResponse();
        this.request("DescribeZoneDetails", req, resp, cb);
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
     * This API is used to query the top data of web hosting rules.
     * @param {DescribeWebManagedRulesTopDataRequest} req
     * @param {function(string, DescribeWebManagedRulesTopDataResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesTopData(req, cb) {
        let resp = new DescribeWebManagedRulesTopDataResponse();
        this.request("DescribeWebManagedRulesTopData", req, resp, cb);
    }

    /**
     * This API is used to batch create application proxy rules.
     * @param {CreateApplicationProxyRulesRequest} req
     * @param {function(string, CreateApplicationProxyRulesResponse):void} cb
     * @public
     */
    CreateApplicationProxyRules(req, cb) {
        let resp = new CreateApplicationProxyRulesResponse();
        this.request("CreateApplicationProxyRules", req, resp, cb);
    }

    /**
     * This API is used to query the cache purging history.
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * This API is used to query DDoS attack event details.
     * @param {DescribeDDosAttackEventDetailRequest} req
     * @param {function(string, DescribeDDosAttackEventDetailResponse):void} cb
     * @public
     */
    DescribeDDosAttackEventDetail(req, cb) {
        let resp = new DescribeDDosAttackEventDetailResponse();
        this.request("DescribeDDosAttackEventDetail", req, resp, cb);
    }

    /**
     * This API is used to query time-series L7 cached data.
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
     * This API is used to query the layer-4 time series traffic data.
     * @param {DescribeTimingL4DataRequest} req
     * @param {function(string, DescribeTimingL4DataResponse):void} cb
     * @public
     */
    DescribeTimingL4Data(req, cb) {
        let resp = new DescribeTimingL4DataResponse();
        this.request("DescribeTimingL4Data", req, resp, cb);
    }

    /**
     * This API is used to query the top-ranked L7 cached data.
     * @param {DescribeTopL7CacheDataRequest} req
     * @param {function(string, DescribeTopL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTopL7CacheData(req, cb) {
        let resp = new DescribeTopL7CacheDataResponse();
        this.request("DescribeTopL7CacheData", req, resp, cb);
    }

    /**
     * This API is used to scan resolution records.
     * @param {ScanDnsRecordsRequest} req
     * @param {function(string, ScanDnsRecordsResponse):void} cb
     * @public
     */
    ScanDnsRecords(req, cb) {
        let resp = new ScanDnsRecordsResponse();
        this.request("ScanDnsRecords", req, resp, cb);
    }

    /**
     * This API is used to query the top traffic data.
     * @param {DescribeTopL7AnalysisDataRequest} req
     * @param {function(string, DescribeTopL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTopL7AnalysisData(req, cb) {
        let resp = new DescribeTopL7AnalysisDataResponse();
        this.request("DescribeTopL7AnalysisData", req, resp, cb);
    }

    /**
     * This API is used to batch delete DNS records.
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
     * This API is used to query bot managed rules.
     * @param {DescribeBotManagedRulesRequest} req
     * @param {function(string, DescribeBotManagedRulesResponse):void} cb
     * @public
     */
    DescribeBotManagedRules(req, cb) {
        let resp = new DescribeBotManagedRulesResponse();
        this.request("DescribeBotManagedRules", req, resp, cb);
    }

    /**
     * This API is used to query DDoS attack sources.
     * @param {DescribeDDosAttackSourceEventRequest} req
     * @param {function(string, DescribeDDosAttackSourceEventResponse):void} cb
     * @public
     */
    DescribeDDosAttackSourceEvent(req, cb) {
        let resp = new DescribeDDosAttackSourceEventResponse();
        this.request("DescribeDDosAttackSourceEvent", req, resp, cb);
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
     * This API is used to query the layer-7 time series traffic data for data analysis.
     * @param {DescribeTimingL7AnalysisDataRequest} req
     * @param {function(string, DescribeTimingL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTimingL7AnalysisData(req, cb) {
        let resp = new DescribeTimingL7AnalysisDataResponse();
        this.request("DescribeTimingL7AnalysisData", req, resp, cb);
    }

    /**
     * This API is used to query verification results.
     * @param {DescribeIdentificationRequest} req
     * @param {function(string, DescribeIdentificationResponse):void} cb
     * @public
     */
    DescribeIdentification(req, cb) {
        let resp = new DescribeIdentificationResponse();
        this.request("DescribeIdentification", req, resp, cb);
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
     * This API is used to obtain collected DNS requests.
     * @param {DescribeDnsDataRequest} req
     * @param {function(string, DescribeDnsDataResponse):void} cb
     * @public
     */
    DescribeDnsData(req, cb) {
        let resp = new DescribeDnsDataResponse();
        this.request("DescribeDnsData", req, resp, cb);
    }

    /**
     * This API is used to query certificates of domain names. Paging, sorting and filtering are supported.
     * @param {DescribeHostsCertificateRequest} req
     * @param {function(string, DescribeHostsCertificateResponse):void} cb
     * @public
     */
    DescribeHostsCertificate(req, cb) {
        let resp = new DescribeHostsCertificateResponse();
        this.request("DescribeHostsCertificate", req, resp, cb);
    }

    /**
     * This API is used to query the DDoS attack data.
     * @param {DescribeDDosAttackDataRequest} req
     * @param {function(string, DescribeDDosAttackDataResponse):void} cb
     * @public
     */
    DescribeDDosAttackData(req, cb) {
        let resp = new DescribeDDosAttackDataResponse();
        this.request("DescribeDDosAttackData", req, resp, cb);
    }

    /**
     * This API is used to get the details of the origin group.
     * @param {DescribeOriginGroupDetailRequest} req
     * @param {function(string, DescribeOriginGroupDetailResponse):void} cb
     * @public
     */
    DescribeOriginGroupDetail(req, cb) {
        let resp = new DescribeOriginGroupDetailResponse();
        this.request("DescribeOriginGroupDetail", req, resp, cb);
    }

    /**
     * This API is used to obtain the details of an application proxy.
     * @param {DescribeApplicationProxyDetailRequest} req
     * @param {function(string, DescribeApplicationProxyDetailResponse):void} cb
     * @public
     */
    DescribeApplicationProxyDetail(req, cb) {
        let resp = new DescribeApplicationProxyDetailResponse();
        this.request("DescribeApplicationProxyDetail", req, resp, cb);
    }

    /**
     * This API is used to query web protection logs.
     * @param {DescribeWebProtectionLogRequest} req
     * @param {function(string, DescribeWebProtectionLogResponse):void} cb
     * @public
     */
    DescribeWebProtectionLog(req, cb) {
        let resp = new DescribeWebProtectionLogResponse();
        this.request("DescribeWebProtectionLog", req, resp, cb);
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
     * This API is used to modify the status of a default certificate.
     * @param {ModifyDefaultCertificateRequest} req
     * @param {function(string, ModifyDefaultCertificateResponse):void} cb
     * @public
     */
    ModifyDefaultCertificate(req, cb) {
        let resp = new ModifyDefaultCertificateResponse();
        this.request("ModifyDefaultCertificate", req, resp, cb);
    }

    /**
     * This API is used to query the details of a CLB instance.
     * @param {DescribeLoadBalancingDetailRequest} req
     * @param {function(string, DescribeLoadBalancingDetailResponse):void} cb
     * @public
     */
    DescribeLoadBalancingDetail(req, cb) {
        let resp = new DescribeLoadBalancingDetailResponse();
        this.request("DescribeLoadBalancingDetail", req, resp, cb);
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
     * This API is used to get the list of origin groups.
     * @param {DescribeOriginGroupRequest} req
     * @param {function(string, DescribeOriginGroupResponse):void} cb
     * @public
     */
    DescribeOriginGroup(req, cb) {
        let resp = new DescribeOriginGroupResponse();
        this.request("DescribeOriginGroup", req, resp, cb);
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
     * This API is used to query the major DDoS attack event.
     * @param {DescribeDDosMajorAttackEventRequest} req
     * @param {function(string, DescribeDDosMajorAttackEventResponse):void} cb
     * @public
     */
    DescribeDDosMajorAttackEvent(req, cb) {
        let resp = new DescribeDDosMajorAttackEventResponse();
        this.request("DescribeDDosMajorAttackEvent", req, resp, cb);
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
     * This API is used to query DDoS attack events.
     * @param {DescribeDDosAttackEventRequest} req
     * @param {function(string, DescribeDDosAttackEventResponse):void} cb
     * @public
     */
    DescribeDDosAttackEvent(req, cb) {
        let resp = new DescribeDDosAttackEventResponse();
        this.request("DescribeDDosAttackEvent", req, resp, cb);
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
     * This API is used to obtain a list of application proxies.
     * @param {DescribeApplicationProxyRequest} req
     * @param {function(string, DescribeApplicationProxyResponse):void} cb
     * @public
     */
    DescribeApplicationProxy(req, cb) {
        let resp = new DescribeApplicationProxyResponse();
        this.request("DescribeApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to query the web hosting rule data.
     * @param {DescribeWebManagedRulesDataRequest} req
     * @param {function(string, DescribeWebManagedRulesDataResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesData(req, cb) {
        let resp = new DescribeWebManagedRulesDataResponse();
        this.request("DescribeWebManagedRulesData", req, resp, cb);
    }

    /**
     * This API is used to import DNS records.
     * @param {ImportDnsRecordsRequest} req
     * @param {function(string, ImportDnsRecordsResponse):void} cb
     * @public
     */
    ImportDnsRecords(req, cb) {
        let resp = new ImportDnsRecordsResponse();
        this.request("ImportDnsRecords", req, resp, cb);
    }

    /**
     * This API is used to query the details of a managed rule by rule ID.
     * @param {DescribeSecurityPolicyManagedRulesIdRequest} req
     * @param {function(string, DescribeSecurityPolicyManagedRulesIdResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyManagedRulesId(req, cb) {
        let resp = new DescribeSecurityPolicyManagedRulesIdResponse();
        this.request("DescribeSecurityPolicyManagedRulesId", req, resp, cb);
    }

    /**
     * This API is used to modify the DNSSEC status.
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
