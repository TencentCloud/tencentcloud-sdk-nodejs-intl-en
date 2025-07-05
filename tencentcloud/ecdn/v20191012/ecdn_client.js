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
const PurgePathCacheRequest = models.PurgePathCacheRequest;
const DescribeEcdnStatisticsRequest = models.DescribeEcdnStatisticsRequest;
const StartEcdnDomainRequest = models.StartEcdnDomainRequest;
const DescribeDomainsConfigResponse = models.DescribeDomainsConfigResponse;
const AdvanceHttps = models.AdvanceHttps;
const PurgeUrlsCacheRequest = models.PurgeUrlsCacheRequest;
const ResourceData = models.ResourceData;
const Https = models.Https;
const Cache = models.Cache;
const ForceRedirect = models.ForceRedirect;
const DescribePurgeQuotaResponse = models.DescribePurgeQuotaResponse;
const DescribeEcdnDomainStatisticsResponse = models.DescribeEcdnDomainStatisticsResponse;
const TimestampData = models.TimestampData;
const DomainData = models.DomainData;
const StopEcdnDomainRequest = models.StopEcdnDomainRequest;
const Sort = models.Sort;
const IpFreqLimit = models.IpFreqLimit;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const DescribeEcdnStatisticsResponse = models.DescribeEcdnStatisticsResponse;
const DomainLogs = models.DomainLogs;
const Hsts = models.Hsts;
const HttpHeaderPathRule = models.HttpHeaderPathRule;
const UpdateDomainConfigResponse = models.UpdateDomainConfigResponse;
const DetailData = models.DetailData;
const DescribePurgeQuotaRequest = models.DescribePurgeQuotaRequest;
const DescribeEcdnDomainLogsResponse = models.DescribeEcdnDomainLogsResponse;
const EcdnData = models.EcdnData;
const UpdateDomainConfigRequest = models.UpdateDomainConfigRequest;
const DescribeDomainsConfigRequest = models.DescribeDomainsConfigRequest;
const ClientCert = models.ClientCert;
const DomainBriefInfo = models.DomainBriefInfo;
const StartEcdnDomainResponse = models.StartEcdnDomainResponse;
const DeleteEcdnDomainResponse = models.DeleteEcdnDomainResponse;
const Tag = models.Tag;
const WebSocket = models.WebSocket;
const StopEcdnDomainResponse = models.StopEcdnDomainResponse;
const PurgePathCacheResponse = models.PurgePathCacheResponse;
const PurgeUrlsCacheResponse = models.PurgeUrlsCacheResponse;
const IpFilter = models.IpFilter;
const AddEcdnDomainRequest = models.AddEcdnDomainRequest;
const ResponseHeader = models.ResponseHeader;
const DescribeDomainsResponse = models.DescribeDomainsResponse;
const DeleteEcdnDomainRequest = models.DeleteEcdnDomainRequest;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const AddEcdnDomainResponse = models.AddEcdnDomainResponse;
const IpStatus = models.IpStatus;
const PurgeTask = models.PurgeTask;
const CacheRule = models.CacheRule;
const DescribeIpStatusResponse = models.DescribeIpStatusResponse;
const Origin = models.Origin;
const ServerCert = models.ServerCert;
const CacheKey = models.CacheKey;
const DomainFilter = models.DomainFilter;
const DescribeEcdnDomainStatisticsRequest = models.DescribeEcdnDomainStatisticsRequest;
const Quota = models.Quota;
const DescribeEcdnDomainLogsRequest = models.DescribeEcdnDomainLogsRequest;
const DomainDetailInfo = models.DomainDetailInfo;
const DescribeIpStatusRequest = models.DescribeIpStatusRequest;
const DescribeDomainsRequest = models.DescribeDomainsRequest;


/**
 * ecdn client
 * @class
 */
class EcdnClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ecdn.intl.tencentcloudapi.com", "2019-10-12", credential, region, profile);
    }
    
    /**
     * This API is used to create an acceleration domain name.

>? If you have migrated your ECDN service to CDN, you can use the <a href="https://intl.cloud.tencent.com/document/api/228/41123?from_cn_redirect=1">corresponding CDN API</a>.
     * @param {AddEcdnDomainRequest} req
     * @param {function(string, AddEcdnDomainResponse):void} cb
     * @public
     */
    AddEcdnDomain(req, cb) {
        let resp = new AddEcdnDomainResponse();
        this.request("AddEcdnDomain", req, resp, cb);
    }

    /**
     * This API is used to query ECDN node IPs. This API is only available to beta users. Please submit a ticket to use it.

If you need to add the node IPs to your origin allowlist, keep querying the updating the IPs regularly to ensure the success of origin forwarding. 
     * @param {DescribeIpStatusRequest} req
     * @param {function(string, DescribeIpStatusResponse):void} cb
     * @public
     */
    DescribeIpStatus(req, cb) {
        let resp = new DescribeIpStatusResponse();
        this.request("DescribeIpStatus", req, resp, cb);
    }

    /**
     * This API is used to purge cache directories in batches. One purge task ID will be returned for each submission.

>? If you have migrated your ECDN service to CDN, you can use the <a href="https://intl.cloud.tencent.com/document/api/570/42475?from_cn_redirect=1">corresponding CDN API</a>.
     * @param {PurgePathCacheRequest} req
     * @param {function(string, PurgePathCacheResponse):void} cb
     * @public
     */
    PurgePathCache(req, cb) {
        let resp = new PurgePathCacheResponse();
        this.request("PurgePathCache", req, resp, cb);
    }

    /**
     * This API is used to enable an acceleration domain name. The domain name to be enabled must be in deactivated status.

>? If you have migrated your ECDN service to CDN, you can use the <a href="https://intl.cloud.tencent.com/document/product/228/41121?from_cn_redirect=1">corresponding CDN API</a>.
     * @param {StartEcdnDomainRequest} req
     * @param {function(string, StartEcdnDomainResponse):void} cb
     * @public
     */
    StartEcdnDomain(req, cb) {
        let resp = new StartEcdnDomainResponse();
        this.request("StartEcdnDomain", req, resp, cb);
    }

    /**
     * This API is used to update the configuration information of an ECDN acceleration domain name.
Note: if you need to update complex configuration items, you must pass all the attributes of the entire object. The default value will be used for attributes that are not passed. We recommend calling the querying API to obtain the configuration attributes first. You can then modify and pass the attributes to the API. The certificate and key fields do not need to be passed for HTTPS configuration.

>?  If your application has been migrated to Tencent Cloud CDN, you can use <a href="https://intl.cloud.tencent.com/document/product/228/41116?from_cn_redirect=1">CDN APIs</a>.

     * @param {UpdateDomainConfigRequest} req
     * @param {function(string, UpdateDomainConfigResponse):void} cb
     * @public
     */
    UpdateDomainConfig(req, cb) {
        let resp = new UpdateDomainConfigResponse();
        this.request("UpdateDomainConfig", req, resp, cb);
    }

    /**
     * This API is used to query the submission record and progress of purge tasks.

>? If you have migrated your ECDN service to CDN, you can use the <a href="https://intl.cloud.tencent.com/document/api/228/37873?from_cn_redirect=1">corresponding CDN API</a>.
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * This API is used to query the access log download link of a domain name.
     * @param {DescribeEcdnDomainLogsRequest} req
     * @param {function(string, DescribeEcdnDomainLogsResponse):void} cb
     * @public
     */
    DescribeEcdnDomainLogs(req, cb) {
        let resp = new DescribeEcdnDomainLogsResponse();
        this.request("DescribeEcdnDomainLogs", req, resp, cb);
    }

    /**
     * This API is used to query the detailed configuration information of a CDN acceleration domain name.

>? If you have migrated your ECDN service to CDN, you can use the <a href="https://intl.cloud.tencent.com/document/api/228/41117?from_cn_redirect=1">corresponding CDN API</a>.
     * @param {DescribeDomainsConfigRequest} req
     * @param {function(string, DescribeDomainsConfigResponse):void} cb
     * @public
     */
    DescribeDomainsConfig(req, cb) {
        let resp = new DescribeDomainsConfigResponse();
        this.request("DescribeDomainsConfig", req, resp, cb);
    }

    /**
     * This API is used to query the usage quota of the purge API.

>? If you have migrated your ECDN service to CDN, you can use the <a href="https://intl.cloud.tencent.com/document/api/228/41956?from_cn_redirect=1">corresponding CDN API</a>.
     * @param {DescribePurgeQuotaRequest} req
     * @param {function(string, DescribePurgeQuotaResponse):void} cb
     * @public
     */
    DescribePurgeQuota(req, cb) {
        let resp = new DescribePurgeQuotaResponse();
        this.request("DescribePurgeQuota", req, resp, cb);
    }

    /**
     * This API is used to batch purge URLs. One purge task ID will be returned for each submission.

>? If you have migrated your ECDN service to CDN, you can use the <a href="https://intl.cloud.tencent.com/document/api/228/37870?from_cn_redirect=1">corresponding CDN API</a>.
     * @param {PurgeUrlsCacheRequest} req
     * @param {function(string, PurgeUrlsCacheResponse):void} cb
     * @public
     */
    PurgeUrlsCache(req, cb) {
        let resp = new PurgeUrlsCacheResponse();
        this.request("PurgeUrlsCache", req, resp, cb);
    }

    /**
     * This API is used to disable an acceleration domain name. The domain name to be disabled must be in enabled or deploying status.

>? If you have migrated your ECDN service to CDN, you can use the <a href="https://intl.cloud.tencent.com/document/product/228/41120?from_cn_redirect=1">corresponding CDN API</a>.
     * @param {StopEcdnDomainRequest} req
     * @param {function(string, StopEcdnDomainResponse):void} cb
     * @public
     */
    StopEcdnDomain(req, cb) {
        let resp = new StopEcdnDomainResponse();
        this.request("StopEcdnDomain", req, resp, cb);
    }

    /**
     * This API is used to delete a specified acceleration domain name. The acceleration domain name to be deleted must be in disabled status.

>? If you have migrated your ECDN service to CDN, you can use the <a href="https://intl.cloud.tencent.com/document/api/570/42471?from_cn_redirect=1">corresponding CDN API</a>.
     * @param {DeleteEcdnDomainRequest} req
     * @param {function(string, DeleteEcdnDomainResponse):void} cb
     * @public
     */
    DeleteEcdnDomain(req, cb) {
        let resp = new DeleteEcdnDomainResponse();
        this.request("DeleteEcdnDomain", req, resp, cb);
    }

    /**
     * This API is used to query the basic information of a CDN domain name, including the project ID, status, business type, creation time, update time, etc.

>? If you have migrated your ECDN service to CDN, you can use the <a href="https://intl.cloud.tencent.com/document/api/228/41118?from_cn_redirect=1">corresponding CDN API</a>.
     * @param {DescribeDomainsRequest} req
     * @param {function(string, DescribeDomainsResponse):void} cb
     * @public
     */
    DescribeDomains(req, cb) {
        let resp = new DescribeDomainsResponse();
        this.request("DescribeDomains", req, resp, cb);
    }

    /**
     * This API is used to query ECDN real-time access monitoring data and supports the following metrics:

+ Traffic (in bytes)
+ Bandwidth (in bps)
+ Number of requests
+ Number of 2xx status codes and details of status codes starting with 2
+ Number of 3xx status codes and details of status codes starting with 3
+ Number of 4xx status codes and details of status codes starting with 4
+ Number of 5xx status codes and details of status codes starting with 5
     * @param {DescribeEcdnStatisticsRequest} req
     * @param {function(string, DescribeEcdnStatisticsResponse):void} cb
     * @public
     */
    DescribeEcdnStatistics(req, cb) {
        let resp = new DescribeEcdnStatisticsResponse();
        this.request("DescribeEcdnStatistics", req, resp, cb);
    }

    /**
     * This API is used to query the statistical metrics of domain name access within a specified time period.
     * @param {DescribeEcdnDomainStatisticsRequest} req
     * @param {function(string, DescribeEcdnDomainStatisticsResponse):void} cb
     * @public
     */
    DescribeEcdnDomainStatistics(req, cb) {
        let resp = new DescribeEcdnDomainStatisticsResponse();
        this.request("DescribeEcdnDomainStatistics", req, resp, cb);
    }


}
module.exports = EcdnClient;
