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
const DescribeCdnDomainLogsResponse = models.DescribeCdnDomainLogsResponse;
const DescribeCdnDomainLogsRequest = models.DescribeCdnDomainLogsRequest;
const Compression = models.Compression;
const ResourceData = models.ResourceData;
const UrlRecord = models.UrlRecord;
const UpdatePayTypeRequest = models.UpdatePayTypeRequest;
const Authentication = models.Authentication;
const ImageOptimization = models.ImageOptimization;
const Https = models.Https;
const ReportData = models.ReportData;
const CreateClsLogTopicResponse = models.CreateClsLogTopicResponse;
const PurgePathCacheResponse = models.PurgePathCacheResponse;
const DomainFilter = models.DomainFilter;
const SpecificConfig = models.SpecificConfig;
const FollowRedirect = models.FollowRedirect;
const RequestHeader = models.RequestHeader;
const HttpHeaderPathRule = models.HttpHeaderPathRule;
const Referer = models.Referer;
const UserAgentFilter = models.UserAgentFilter;
const AdvanceCacheRule = models.AdvanceCacheRule;
const DeleteCdnDomainRequest = models.DeleteCdnDomainRequest;
const DescribePayTypeResponse = models.DescribePayTypeResponse;
const ListTopDataRequest = models.ListTopDataRequest;
const ListClsTopicDomainsRequest = models.ListClsTopicDomainsRequest;
const DescribeDomainsResponse = models.DescribeDomainsResponse;
const CompressionRule = models.CompressionRule;
const GuetzliAdapter = models.GuetzliAdapter;
const Origin = models.Origin;
const EnableCachesRequest = models.EnableCachesRequest;
const SimpleCache = models.SimpleCache;
const DeleteClsLogTopicRequest = models.DeleteClsLogTopicRequest;
const UpdatePayTypeResponse = models.UpdatePayTypeResponse;
const TopicInfo = models.TopicInfo;
const DescribeDomainsConfigResponse = models.DescribeDomainsConfigResponse;
const BriefDomain = models.BriefDomain;
const DescribeReportDataResponse = models.DescribeReportDataResponse;
const DisableClsLogTopicRequest = models.DisableClsLogTopicRequest;
const ListClsTopicDomainsResponse = models.ListClsTopicDomainsResponse;
const DescribeCdnIpRequest = models.DescribeCdnIpRequest;
const Ipv6 = models.Ipv6;
const StatusCodeCache = models.StatusCodeCache;
const DescribeIpVisitResponse = models.DescribeIpVisitResponse;
const EnableClsLogTopicResponse = models.EnableClsLogTopicResponse;
const ListClsLogTopicsResponse = models.ListClsLogTopicsResponse;
const OverseaConfig = models.OverseaConfig;
const AddCdnDomainRequest = models.AddCdnDomainRequest;
const UserAgentFilterRule = models.UserAgentFilterRule;
const TopDetailData = models.TopDetailData;
const ErrorPage = models.ErrorPage;
const MaxAgeRule = models.MaxAgeRule;
const DescribePayTypeRequest = models.DescribePayTypeRequest;
const DescribeCertDomainsRequest = models.DescribeCertDomainsRequest;
const DescribeDomainsConfigRequest = models.DescribeDomainsConfigRequest;
const AdvancedCache = models.AdvancedCache;
const WebpAdapter = models.WebpAdapter;
const StartCdnDomainRequest = models.StartCdnDomainRequest;
const MapInfo = models.MapInfo;
const DescribeCertDomainsResponse = models.DescribeCertDomainsResponse;
const AuthenticationTypeD = models.AuthenticationTypeD;
const AuthenticationTypeC = models.AuthenticationTypeC;
const AuthenticationTypeB = models.AuthenticationTypeB;
const AuthenticationTypeA = models.AuthenticationTypeA;
const DescribePushTasksResponse = models.DescribePushTasksResponse;
const ResourceOriginData = models.ResourceOriginData;
const AddCdnDomainResponse = models.AddCdnDomainResponse;
const DomainAreaConfig = models.DomainAreaConfig;
const ServerCert = models.ServerCert;
const DisableCachesRequest = models.DisableCachesRequest;
const SimpleCacheRule = models.SimpleCacheRule;
const DisableClsLogTopicResponse = models.DisableClsLogTopicResponse;
const Hsts = models.Hsts;
const TpgAdapter = models.TpgAdapter;
const DetailDomain = models.DetailDomain;
const GetDisableRecordsResponse = models.GetDisableRecordsResponse;
const ResponseHeader = models.ResponseHeader;
const CdnIpHistory = models.CdnIpHistory;
const SummarizedData = models.SummarizedData;
const ManageClsTopicDomainsRequest = models.ManageClsTopicDomainsRequest;
const Cache = models.Cache;
const ForceRedirect = models.ForceRedirect;
const DescribeOriginDataRequest = models.DescribeOriginDataRequest;
const RangeOriginPull = models.RangeOriginPull;
const ViolationUrl = models.ViolationUrl;
const SearchClsLogResponse = models.SearchClsLogResponse;
const PushUrlsCacheRequest = models.PushUrlsCacheRequest;
const MainlandConfig = models.MainlandConfig;
const DescribeReportDataRequest = models.DescribeReportDataRequest;
const DescribePushTasksRequest = models.DescribePushTasksRequest;
const DescribeUrlViolationsRequest = models.DescribeUrlViolationsRequest;
const RefererRule = models.RefererRule;
const IpFreqLimit = models.IpFreqLimit;
const CreateClsLogTopicRequest = models.CreateClsLogTopicRequest;
const CacheOptResult = models.CacheOptResult;
const StopCdnDomainRequest = models.StopCdnDomainRequest;
const DescribeMapInfoResponse = models.DescribeMapInfoResponse;
const DescribeMapInfoRequest = models.DescribeMapInfoRequest;
const EnableCachesResponse = models.EnableCachesResponse;
const DescribeIpVisitRequest = models.DescribeIpVisitRequest;
const StatusCodeCacheRule = models.StatusCodeCacheRule;
const ClientCert = models.ClientCert;
const DomainLog = models.DomainLog;
const GetDisableRecordsRequest = models.GetDisableRecordsRequest;
const PurgeUrlsCacheResponse = models.PurgeUrlsCacheResponse;
const DeleteClsLogTopicResponse = models.DeleteClsLogTopicResponse;
const DisableCachesResponse = models.DisableCachesResponse;
const DescribeCdnIpResponse = models.DescribeCdnIpResponse;
const DescribeCdnDataResponse = models.DescribeCdnDataResponse;
const EnableClsLogTopicRequest = models.EnableClsLogTopicRequest;
const CacheKey = models.CacheKey;
const DownstreamCapping = models.DownstreamCapping;
const TopData = models.TopData;
const CappingRule = models.CappingRule;
const ListClsLogTopicsRequest = models.ListClsLogTopicsRequest;
const Seo = models.Seo;
const BandwidthAlert = models.BandwidthAlert;
const ClsLogObject = models.ClsLogObject;
const RegionMapRelation = models.RegionMapRelation;
const PurgePathCacheRequest = models.PurgePathCacheRequest;
const CdnData = models.CdnData;
const PurgeUrlsCacheRequest = models.PurgeUrlsCacheRequest;
const OriginPullOptimization = models.OriginPullOptimization;
const PushTask = models.PushTask;
const TimestampData = models.TimestampData;
const StartCdnDomainResponse = models.StartCdnDomainResponse;
const ResponseHeaderCache = models.ResponseHeaderCache;
const SecurityConfig = models.SecurityConfig;
const Sort = models.Sort;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const PushUrlsCacheResponse = models.PushUrlsCacheResponse;
const StopCdnDomainResponse = models.StopCdnDomainResponse;
const ListTopDataResponse = models.ListTopDataResponse;
const MaxAge = models.MaxAge;
const UpdateDomainConfigResponse = models.UpdateDomainConfigResponse;
const LogSetInfo = models.LogSetInfo;
const SearchClsLogRequest = models.SearchClsLogRequest;
const UpdateDomainConfigRequest = models.UpdateDomainConfigRequest;
const AwsPrivateAccess = models.AwsPrivateAccess;
const ManageClsTopicDomainsResponse = models.ManageClsTopicDomainsResponse;
const VideoSeek = models.VideoSeek;
const Compatibility = models.Compatibility;
const ClsSearchLogs = models.ClsSearchLogs;
const DescribeUrlViolationsResponse = models.DescribeUrlViolationsResponse;
const IpFilter = models.IpFilter;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const ErrorPageRule = models.ErrorPageRule;
const DescribeOriginDataResponse = models.DescribeOriginDataResponse;
const PurgeTask = models.PurgeTask;
const OriginPullTimeout = models.OriginPullTimeout;
const DeleteCdnDomainResponse = models.DeleteCdnDomainResponse;
const CdnIp = models.CdnIp;
const DescribeCdnDataRequest = models.DescribeCdnDataRequest;
const DescribeDomainsRequest = models.DescribeDomainsRequest;


/**
 * cdn client
 * @class
 */
class CdnClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdn.tencentcloudapi.com", "2018-06-06", credential, region, profile);
    }
    
    /**
     * This API (DescribeMapInfo) is used to query the IDs of districts or ISPs.
     * @param {DescribeMapInfoRequest} req
     * @param {function(string, DescribeMapInfoResponse):void} cb
     * @public
     */
    DescribeMapInfo(req, cb) {
        let resp = new DescribeMapInfoResponse();
        this.request("DescribeMapInfo", req, resp, cb);
    }

    /**
     * This API is used to delete a specified acceleration domain name.
     * @param {DeleteCdnDomainRequest} req
     * @param {function(string, DeleteCdnDomainResponse):void} cb
     * @public
     */
    DeleteCdnDomain(req, cb) {
        let resp = new DeleteCdnDomainResponse();
        this.request("DeleteCdnDomain", req, resp, cb);
    }

    /**
     * This API is used to query the record and progress of URL or directory purge tasks submitted via the `PurgePathCache` or `PurgeUrlsCache` APIs.
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * This API (DescribePayType) is used to query billing information of the current account, such as billing mode and billing cycle.
     * @param {DescribePayTypeRequest} req
     * @param {function(string, DescribePayTypeResponse):void} cb
     * @public
     */
    DescribePayType(req, cb) {
        let resp = new DescribePayTypeResponse();
        this.request("DescribePayType", req, resp, cb);
    }

    /**
     * This API is used to query the complete configuration information of CDN acceleration domain names (inside and outside mainland China).
     * @param {DescribeDomainsConfigRequest} req
     * @param {function(string, DescribeDomainsConfigResponse):void} cb
     * @public
     */
    DescribeDomainsConfig(req, cb) {
        let resp = new DescribeDomainsConfigResponse();
        this.request("DescribeDomainsConfig", req, resp, cb);
    }

    /**
     * This API is used to add a CDN acceleration domain name.
     * @param {AddCdnDomainRequest} req
     * @param {function(string, AddCdnDomainResponse):void} cb
     * @public
     */
    AddCdnDomain(req, cb) {
        let resp = new AddCdnDomainResponse();
        this.request("AddCdnDomain", req, resp, cb);
    }

    /**
     * This API (DescribeIpVisit) is used to query the number of users who remain active for 5 minutes and the detailed number of daily active users.

+ Number of users who remain active for 5 minutes: Collects deduplicated statistics based on client IP addresses in the log with the 5-minute granularity.
+ Number of daily active users: Collects deduplicated statistics based on client IP addresses in the log with the 1-day granularity.
     * @param {DescribeIpVisitRequest} req
     * @param {function(string, DescribeIpVisitResponse):void} cb
     * @public
     */
    DescribeIpVisit(req, cb) {
        let resp = new DescribeIpVisitResponse();
        this.request("DescribeIpVisit", req, resp, cb);
    }

    /**
     * This API (DescribeCdnData) is used to query CDN real-time access monitoring data and supports the following metrics:

+ Traffic (in bytes)
+ Bandwidth (in bps)
+ Number of requests
+ Traffic hit rate (in % with two decimal digits)
+ Aggregate list of 2xx status codes and the details of status codes starting with 2 (in entries)
+ Aggregate list of 3xx status codes and the details of status codes starting with 3 (in entries)
+ Aggregate list of 4xx status codes and the details of status codes starting with 4 (in entries)
+ Aggregate list of 5xx status codes and the details of status codes starting with 5 (in entries)
     * @param {DescribeCdnDataRequest} req
     * @param {function(string, DescribeCdnDataResponse):void} cb
     * @public
     */
    DescribeCdnData(req, cb) {
        let resp = new DescribeCdnDataResponse();
        this.request("DescribeCdnData", req, resp, cb);
    }

    /**
     * This API (DisableCaches) is used to block access to a specific URL on CDN. After a URL is blocked, error 403 will be returned for all access requests to it. (This API is during beta test and not fully available now.)
     * @param {DisableCachesRequest} req
     * @param {function(string, DisableCachesResponse):void} cb
     * @public
     */
    DisableCaches(req, cb) {
        let resp = new DisableCachesResponse();
        this.request("DisableCaches", req, resp, cb);
    }

    /**
     * This API is used to query the basic configuration information of CDN acceleration domain names (inside and outside mainland China), including the project ID, service status, service type, creation time, and update time, etc.
     * @param {DescribeDomainsRequest} req
     * @param {function(string, DescribeDomainsResponse):void} cb
     * @public
     */
    DescribeDomains(req, cb) {
        let resp = new DescribeDomainsResponse();
        this.request("DescribeDomains", req, resp, cb);
    }

    /**
     * This API is used to manage the list of domain names bound to a log topic.
     * @param {ManageClsTopicDomainsRequest} req
     * @param {function(string, ManageClsTopicDomainsResponse):void} cb
     * @public
     */
    ManageClsTopicDomains(req, cb) {
        let resp = new ManageClsTopicDomainsResponse();
        this.request("ManageClsTopicDomains", req, resp, cb);
    }

    /**
     * This API is used to enable the acceleration service for a disabled domain name.
     * @param {StartCdnDomainRequest} req
     * @param {function(string, StartCdnDomainResponse):void} cb
     * @public
     */
    StartCdnDomain(req, cb) {
        let resp = new StartCdnDomainResponse();
        this.request("StartCdnDomain", req, resp, cb);
    }

    /**
     * This API is used to suspend the acceleration service for a domain name.
Note: after the acceleration service has been suspended, requests to the cache node will return a 404 error. In order to avoid impact to your business, please move the domain name to another service before suspending the acceleration service.
     * @param {StopCdnDomainRequest} req
     * @param {function(string, StopCdnDomainResponse):void} cb
     * @public
     */
    StopCdnDomain(req, cb) {
        let resp = new StopCdnDomainResponse();
        this.request("StopCdnDomain", req, resp, cb);
    }

    /**
     * This API is used to search for CLS logs. Search filters can be set to today, 24 hours (one of the last 7 days), and the last 7 days.
     * @param {SearchClsLogRequest} req
     * @param {function(string, SearchClsLogResponse):void} cb
     * @public
     */
    SearchClsLog(req, cb) {
        let resp = new SearchClsLogResponse();
        this.request("SearchClsLog", req, resp, cb);
    }

    /**
     * This API is used to list data sorted the following ways by using different combinations of the Metric and Filter input parameters:

+ It sorts access URLs by total traffic and total requests, and returns the top 1,000 URLs in descending order.
+ It sorts client districts by total traffic and total requests, and returns the list of districts in descending order.
+ It sorts client ISPs by total traffic and total requests, and returns the list of ISPs in descending order.
+ It sorts domain names by total traffic, peak bandwidth, total requests, average hit rate, and 2XX/3XX/4XX/5XX status codes, and returns the list of domain names in descending order.
+ It sorts domain names by total origin-pull traffic, peak origin-pull bandwidth, total origin-pull requests, average origin-pull failure rate, and 2XX/3XX/4XX/5XX origin-pull status codes, and returns the list of domain names in descending order.

Note: only data from the last 90 days will be queried.
     * @param {ListTopDataRequest} req
     * @param {function(string, ListTopDataResponse):void} cb
     * @public
     */
    ListTopData(req, cb) {
        let resp = new ListTopDataResponse();
        this.request("ListTopData", req, resp, cb);
    }

    /**
     * This API (DescribeOriginData) is used to query CDN real-time origin-pull monitoring data and supports the following metrics:

+ Origin-pull traffic (in bytes)
+ Origin-pull bandwidth (in bps)
+ Number of origin-pull requests
+ Number of failed origin-pull requests
+ Origin-pull failure rate (in % with two decimal digits)
+ Aggregate list of 2xx origin-pull status codes and the details of origin-pull status codes starting with 2 (in entries)
+ Aggregate list of 3xx origin-pull status codes and the details of origin-pull status codes starting with 3 (in entries)
+ Aggregate list of 4xx origin-pull status codes and the details of origin-pull status codes starting with 4 (in entries)
+ Aggregate list of 5xx origin-pull status codes and the details of origin-pull status codes starting with 5 (in entries)
     * @param {DescribeOriginDataRequest} req
     * @param {function(string, DescribeOriginDataResponse):void} cb
     * @public
     */
    DescribeOriginData(req, cb) {
        let resp = new DescribeOriginDataResponse();
        this.request("DescribeOriginData", req, resp, cb);
    }

    /**
     * This API is used to query CDN IP ownership.
     * @param {DescribeCdnIpRequest} req
     * @param {function(string, DescribeCdnIpResponse):void} cb
     * @public
     */
    DescribeCdnIp(req, cb) {
        let resp = new DescribeCdnIpResponse();
        this.request("DescribeCdnIp", req, resp, cb);
    }

    /**
     * This API is used to submit multiple directory purge tasks, which are carried out according to the acceleration region of the domain names.
By default, a maximum of 100 directories can be purged per day for acceleration regions either within or outside Mainland China, and up to 20 tasks can be submitted at a time.
     * @param {PurgePathCacheRequest} req
     * @param {function(string, PurgePathCacheResponse):void} cb
     * @public
     */
    PurgePathCache(req, cb) {
        let resp = new PurgePathCacheResponse();
        this.request("PurgePathCache", req, resp, cb);
    }

    /**
     * This API is used to query the list of domain name URLs containing regulation-violating content scanned and detected by the CDN system, and the current status of the URLs.
It corresponds to the **Pornography Detection** page on the CDN Console.
     * @param {DescribeUrlViolationsRequest} req
     * @param {function(string, DescribeUrlViolationsResponse):void} cb
     * @public
     */
    DescribeUrlViolations(req, cb) {
        let resp = new DescribeUrlViolationsResponse();
        this.request("DescribeUrlViolations", req, resp, cb);
    }

    /**
     * This API is used to submit multiple URL purge tasks, which are carried out according to the current acceleration region of the domain names in the URLs.
By default, a maximum of 10,000 URLs can be purged per day for acceleration regions either within or outside Mainland China, and up to 1,000 tasks can be submitted at a time.
     * @param {PurgeUrlsCacheRequest} req
     * @param {function(string, PurgeUrlsCacheResponse):void} cb
     * @public
     */
    PurgeUrlsCache(req, cb) {
        let resp = new PurgeUrlsCacheResponse();
        this.request("PurgeUrlsCache", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration of CDN acceleration domain names.
Note: if you need to update complex configuration items, you must pass all the attributes of the entire object. The default value will be used for attributes that are not passed. We recommend calling the querying API to obtain the configuration attributes first. You can then modify and pass the attributes to the API. The certificate and key fields do not need to be passed for HTTPS configuration.
     * @param {UpdateDomainConfigRequest} req
     * @param {function(string, UpdateDomainConfigResponse):void} cb
     * @public
     */
    UpdateDomainConfig(req, cb) {
        let resp = new UpdateDomainConfigResponse();
        this.request("UpdateDomainConfig", req, resp, cb);
    }

    /**
     * This API is used to query the download link of an access log. You can use this API for access logs in the last 30 days either within or outside Mainland China.
     * @param {DescribeCdnDomainLogsRequest} req
     * @param {function(string, DescribeCdnDomainLogsResponse):void} cb
     * @public
     */
    DescribeCdnDomainLogs(req, cb) {
        let resp = new DescribeCdnDomainLogsResponse();
        this.request("DescribeCdnDomainLogs", req, resp, cb);
    }

    /**
     * This API is used to query the submission record and progress of prefetch tasks.
This API is in beta test and not fully available yet. Please stay tuned.
     * @param {DescribePushTasksRequest} req
     * @param {function(string, DescribePushTasksResponse):void} cb
     * @public
     */
    DescribePushTasks(req, cb) {
        let resp = new DescribePushTasksResponse();
        this.request("DescribePushTasks", req, resp, cb);
    }

    /**
     * This API is used to verify an SSL certificate and extract the domain names. It will then return the list of domain names connected to CDN and the list of domain names with the certificate configured.
     * @param {DescribeCertDomainsRequest} req
     * @param {function(string, DescribeCertDomainsResponse):void} cb
     * @public
     */
    DescribeCertDomains(req, cb) {
        let resp = new DescribeCertDomainsResponse();
        this.request("DescribeCertDomains", req, resp, cb);
    }

    /**
     * This API is used to create a log topic. Note: up to 10 log topics can be created under one logset.
     * @param {CreateClsLogTopicRequest} req
     * @param {function(string, CreateClsLogTopicResponse):void} cb
     * @public
     */
    CreateClsLogTopic(req, cb) {
        let resp = new CreateClsLogTopicResponse();
        this.request("CreateClsLogTopic", req, resp, cb);
    }

    /**
     * This API is used to cache specified URL resources to CDN nodes. You can specify acceleration regions for the prefetch.
By default, a maximum of 1,000 URLs can be prefetched per day either within or outside Mainland China, and up to 20 tasks can be submitted at a time.
This API is in beta test and not fully available yet. Please stay tuned.
     * @param {PushUrlsCacheRequest} req
     * @param {function(string, PushUrlsCacheResponse):void} cb
     * @public
     */
    PushUrlsCache(req, cb) {
        let resp = new PushUrlsCacheResponse();
        this.request("PushUrlsCache", req, resp, cb);
    }

    /**
     * This API is used to stop publishing to a log topic. Note: after a log topic is disabled, all logs of the domain names bound to it will no longer be published to the topic, and the logs that have already been published will be retained. This action will take effect within 5–15 minutes.

     * @param {DisableClsLogTopicRequest} req
     * @param {function(string, DisableClsLogTopicResponse):void} cb
     * @public
     */
    DisableClsLogTopic(req, cb) {
        let resp = new DisableClsLogTopicResponse();
        this.request("DisableClsLogTopic", req, resp, cb);
    }

    /**
     * This API is used to get the list of domain names bound to a log topic.
     * @param {ListClsTopicDomainsRequest} req
     * @param {function(string, ListClsTopicDomainsResponse):void} cb
     * @public
     */
    ListClsTopicDomains(req, cb) {
        let resp = new ListClsTopicDomainsResponse();
        this.request("ListClsTopicDomains", req, resp, cb);
    }

    /**
     * This API is used to display the list of log topics. Note: a logset can contain up to 10 log topics.
     * @param {ListClsLogTopicsRequest} req
     * @param {function(string, ListClsLogTopicsResponse):void} cb
     * @public
     */
    ListClsLogTopics(req, cb) {
        let resp = new ListClsLogTopicsResponse();
        this.request("ListClsLogTopics", req, resp, cb);
    }

    /**
     * This API is used to query the resource blocking history and the current URL status. (This API is in beta test and not generally available yet.)
     * @param {GetDisableRecordsRequest} req
     * @param {function(string, GetDisableRecordsResponse):void} cb
     * @public
     */
    GetDisableRecords(req, cb) {
        let resp = new GetDisableRecordsResponse();
        this.request("GetDisableRecords", req, resp, cb);
    }

    /**
     * This API is used to delete a log topic. Note: when a log topic is deleted, all logs of the domain names bound to it will no longer be published to the topic, and the logs previously published to the topic will be deleted. This action will take effect within 5–15 minutes.
     * @param {DeleteClsLogTopicRequest} req
     * @param {function(string, DeleteClsLogTopicResponse):void} cb
     * @public
     */
    DeleteClsLogTopic(req, cb) {
        let resp = new DeleteClsLogTopicResponse();
        this.request("DeleteClsLogTopic", req, resp, cb);
    }

    /**
     * This API is used to start publishing to a log topic. Note: after a log topic is enabled, all logs of the domain names bound to the topic will be published to it. This action will take effect within 5–15 minutes.
     * @param {EnableClsLogTopicRequest} req
     * @param {function(string, EnableClsLogTopicResponse):void} cb
     * @public
     */
    EnableClsLogTopic(req, cb) {
        let resp = new EnableClsLogTopicResponse();
        this.request("EnableClsLogTopic", req, resp, cb);
    }

    /**
     * This API is used to query the daily/weekly/monthly report data at domain name/project levels.
     * @param {DescribeReportDataRequest} req
     * @param {function(string, DescribeReportDataResponse):void} cb
     * @public
     */
    DescribeReportData(req, cb) {
        let resp = new DescribeReportDataResponse();
        this.request("DescribeReportData", req, resp, cb);
    }

    /**
     * This API is used to modify the billing mode of an account. At present, the billing mode of accounts on a monthly billing cycle and sub-accounts cannot be modified.
     * @param {UpdatePayTypeRequest} req
     * @param {function(string, UpdatePayTypeResponse):void} cb
     * @public
     */
    UpdatePayType(req, cb) {
        let resp = new UpdatePayTypeResponse();
        this.request("UpdatePayType", req, resp, cb);
    }

    /**
     * This API (EnableCaches) is used to unblock manually blocked URLs. After a URL is successfully unblocked, it takes about 5 to 10 minutes to take effect across the entire network. (This API is during beta test and not fully available now.)
     * @param {EnableCachesRequest} req
     * @param {function(string, EnableCachesResponse):void} cb
     * @public
     */
    EnableCaches(req, cb) {
        let resp = new EnableCachesResponse();
        this.request("EnableCaches", req, resp, cb);
    }


}
module.exports = CdnClient;
