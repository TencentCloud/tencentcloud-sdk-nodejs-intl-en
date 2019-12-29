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
const PurgePathCacheRequest = models.PurgePathCacheRequest;
const DescribeCdnDomainLogsResponse = models.DescribeCdnDomainLogsResponse;
const DescribeCdnDomainLogsRequest = models.DescribeCdnDomainLogsRequest;
const CdnData = models.CdnData;
const PurgeUrlsCacheRequest = models.PurgeUrlsCacheRequest;
const ResourceData = models.ResourceData;
const UrlRecord = models.UrlRecord;
const DescribeOriginDataRequest = models.DescribeOriginDataRequest;
const PushTask = models.PushTask;
const TimestampData = models.TimestampData;
const DescribeCdnIpRequest = models.DescribeCdnIpRequest;
const PushUrlsCacheRequest = models.PushUrlsCacheRequest;
const DescribePushTasksRequest = models.DescribePushTasksRequest;
const DescribeIpVisitResponse = models.DescribeIpVisitResponse;
const PurgePathCacheResponse = models.PurgePathCacheResponse;
const PurgeTask = models.PurgeTask;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const CacheOptResult = models.CacheOptResult;
const ListTopDataResponse = models.ListTopDataResponse;
const DescribeMapInfoResponse = models.DescribeMapInfoResponse;
const DescribeMapInfoRequest = models.DescribeMapInfoRequest;
const EnableCachesResponse = models.EnableCachesResponse;
const DescribePayTypeRequest = models.DescribePayTypeRequest;
const DescribeIpVisitRequest = models.DescribeIpVisitRequest;
const DomainLog = models.DomainLog;
const DescribePayTypeResponse = models.DescribePayTypeResponse;
const GetDisableRecordsRequest = models.GetDisableRecordsRequest;
const PurgeUrlsCacheResponse = models.PurgeUrlsCacheResponse;
const ListTopDataRequest = models.ListTopDataRequest;
const DisableCachesResponse = models.DisableCachesResponse;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const DescribePushTasksResponse = models.DescribePushTasksResponse;
const ResourceOriginData = models.ResourceOriginData;
const DescribeOriginDataResponse = models.DescribeOriginDataResponse;
const DescribeCdnIpResponse = models.DescribeCdnIpResponse;
const DescribeCdnDataResponse = models.DescribeCdnDataResponse;
const CdnIp = models.CdnIp;
const DisableCachesRequest = models.DisableCachesRequest;
const DescribeCdnDataRequest = models.DescribeCdnDataRequest;
const TopData = models.TopData;
const EnableCachesRequest = models.EnableCachesRequest;
const PushUrlsCacheResponse = models.PushUrlsCacheResponse;
const MapInfo = models.MapInfo;
const TopDetailData = models.TopDetailData;
const GetDisableRecordsResponse = models.GetDisableRecordsResponse;
const CdnIpHistory = models.CdnIpHistory;
const SummarizedData = models.SummarizedData;
const RegionMapRelation = models.RegionMapRelation;


/**
 * cdn client
 * @class
 */
class CdnClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdn.tencentcloudapi.com", "2018-06-06", credential, region, profile);
    }
    
    /**
     * This API (ListTopData) is used to query the following sorting data by using different combinations of the `Metric` and `Filter` input parameters:

+ Sorts access URLs by total traffic and total requests and returns top 1,000 URLs in descending order.
+ Sorts client districts by total traffic and total requests and returns the list of districts in descending order.
+ Sorts client ISPs by total traffic and total requests and returns the list of ISPs in descending order.
+ Sorts domain names by total traffic, peak bandwidth, total requests, average hit rate, and 2XX/3XX/4XX/5XX status codes and returns the list of domain names in descending order.
+ Sorts domain names by total origin-pull traffic, peak origin-pull bandwidth, total origin-pull requests, average origin-pull failure rate, and 2XX/3XX/4XX/5XX origin-pull status codes and returns the list of domain names in descending order.
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
     * This API (GetDisableRecords) is used to query the resource blocking history and the current URL status. (This API is during beta test and not fully available now.)
     * @param {GetDisableRecordsRequest} req
     * @param {function(string, GetDisableRecordsResponse):void} cb
     * @public
     */
    GetDisableRecords(req, cb) {
        let resp = new GetDisableRecordsResponse();
        this.request("GetDisableRecords", req, resp, cb);
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
