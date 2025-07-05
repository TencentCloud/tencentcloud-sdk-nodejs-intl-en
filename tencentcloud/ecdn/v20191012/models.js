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
const AbstractModel = require("../../common/abstract_model");

/**
 * PurgePathCache request structure.
 * @class
 */
class PurgePathCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of directories to be purged. The protocol header must be included.
         * @type {Array.<string> || null}
         */
        this.Paths = null;

        /**
         * Purge type. flush: purges updated resources, delete: purges all resources.
         * @type {string || null}
         */
        this.FlushType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Paths = 'Paths' in params ? params.Paths : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;

    }
}

/**
 * DescribeEcdnStatistics request structure.
 * @class
 */
class DescribeEcdnStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time, such as 2019-12-13 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, such as 2019-12-13 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies the query metric, which can be:
flux: traffic (in bytes)
bandwidth: bandwidth (in bps)
request: number of requests
2xx: returns the number of 2xx status codes or details of status codes starting with 2
3xx: returns the number of 3xx status codes or details of status codes starting with 3
4xx: returns the number of 4xx status codes or details of status codes starting with 4
5xx: returns the number of 5xx status codes or details of status codes starting with 5
         * @type {Array.<string> || null}
         */
        this.Metrics = null;

        /**
         * Sampling interval in minutes. The available options vary for different query period. See below: 
1 day: `1`, `5`, `15`, `30`, `60`, `120`, `240`, `1440` 
2 to 3 days: `15`, `30`, `60`, `120`, `240`, `1440`
4 to 7 days: `30`, `60`, `120`, `240`, `1440`
8 to 31 days: `60`, `120`, `240`, `1440`
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Specifies the list of domain names to be queried

Up to 30 acceleration domain names can be queried at a time.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Specifies the project ID to be queried, which can be viewed [here](https://console.cloud.tencent.com/project)
If no domain name is entered, the specified project will be queried; otherwise, the domain name will prevail
         * @type {Array.<number> || null}
         */
        this.Projects = null;

        /**
         * Statistical areas:
mainland: Chinese mainland
oversea: outside the Chinese mainland
global: global
Default value: global
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metrics = 'Metrics' in params ? params.Metrics : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Projects = 'Projects' in params ? params.Projects : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * StartEcdnDomain request structure.
 * @class
 */
class StartEcdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name to be enabled.
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribeDomainsConfig response structure.
 * @class
 */
class DescribeDomainsConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name list.
         * @type {Array.<DomainDetailInfo> || null}
         */
        this.Domains = null;

        /**
         * Number of matched domain names. This is used for paginated query.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DomainDetailInfo();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Custom HTTPS configuration for origin-pull
 * @class
 */
class AdvanceHttps extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom TLS data switch
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomTlsStatus = null;

        /**
         * TLS version settings. Valid values: `TLSv1`, `TLSV1.1`, `TLSV1.2`, and `TLSv1.3`. Only consecutive versions can be enabled at the same time.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TlsVersion = null;

        /**
         * Custom encryption suite
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Cipher = null;

        /**
         * Origin-pull verification status
`off`: Disables origin-pull verification
`oneWay`: Only verify the origin
`twoWay`: Enables two-way origin-pull verification
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VerifyOriginType = null;

        /**
         * Configuration information of the origin-pull certificate
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {ServerCert || null}
         */
        this.CertInfo = null;

        /**
         * Configuration information of the origin server certificate
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {ClientCert || null}
         */
        this.OriginCertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomTlsStatus = 'CustomTlsStatus' in params ? params.CustomTlsStatus : null;
        this.TlsVersion = 'TlsVersion' in params ? params.TlsVersion : null;
        this.Cipher = 'Cipher' in params ? params.Cipher : null;
        this.VerifyOriginType = 'VerifyOriginType' in params ? params.VerifyOriginType : null;

        if (params.CertInfo) {
            let obj = new ServerCert();
            obj.deserialize(params.CertInfo)
            this.CertInfo = obj;
        }

        if (params.OriginCertInfo) {
            let obj = new ClientCert();
            obj.deserialize(params.OriginCertInfo)
            this.OriginCertInfo = obj;
        }

    }
}

/**
 * PurgeUrlsCache request structure.
 * @class
 */
class PurgeUrlsCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of URLs to be purged. The protocol header must be included.
         * @type {Array.<string> || null}
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * Query object and its access details
 * @class
 */
class ResourceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name, which is categorized as follows based on different query conditions:
Specific domain name: indicates the details of the specific domain name
multiDomains: indicates aggregated details of multiple domain names
Project ID: displays the ID of the specified project to be queried
all: details at the account level
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Data details of resource
         * @type {EcdnData || null}
         */
        this.EcdnData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.EcdnData) {
            let obj = new EcdnData();
            obj.deserialize(params.EcdnData)
            this.EcdnData = obj;
        }

    }
}

/**
 * HTTPS configuration of domain name.
 * @class
 */
class Https extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTPS configuration switch. Valid values: on, off. If the domain name with HTTPS configuration enabled is being deployed, this switch will be `off`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Whether to enable HTTP2. Valid values: on, off.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Http2 = null;

        /**
         * Whether to enable the OCSP feature. Valid values: on, off.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OcspStapling = null;

        /**
         * Whether to enable the client certificate verification feature. Valid values: on, off. The client certificate information must be uploaded if this feature is enabled.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VerifyClient = null;

        /**
         * Server certificate configuration information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ServerCert || null}
         */
        this.CertInfo = null;

        /**
         * Client certificate configuration information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ClientCert || null}
         */
        this.ClientCertInfo = null;

        /**
         * Whether to enable SPDY. Valid values: on, off.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Spdy = null;

        /**
         * HTTPS certificate deployment status. Valid values: closed (disabled), deploying (deploying), deployed (deployment succeeded), failed (deployment failed). This parameter cannot be used as an input parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SslStatus = null;

        /**
         * HSTS configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Hsts || null}
         */
        this.Hsts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.OcspStapling = 'OcspStapling' in params ? params.OcspStapling : null;
        this.VerifyClient = 'VerifyClient' in params ? params.VerifyClient : null;

        if (params.CertInfo) {
            let obj = new ServerCert();
            obj.deserialize(params.CertInfo)
            this.CertInfo = obj;
        }

        if (params.ClientCertInfo) {
            let obj = new ClientCert();
            obj.deserialize(params.ClientCertInfo)
            this.ClientCertInfo = obj;
        }
        this.Spdy = 'Spdy' in params ? params.Spdy : null;
        this.SslStatus = 'SslStatus' in params ? params.SslStatus : null;

        if (params.Hsts) {
            let obj = new Hsts();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }

    }
}

/**
 * Simple edition of cache configuration, which does not support setting a caching rule for scenarios where the `max-age` is not returned from the origin server.
 * @class
 */
class Cache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Caching configuration rule array.
         * @type {Array.<CacheRule> || null}
         */
        this.CacheRules = null;

        /**
         * Whether to follow the `Cache-Control: max-age` configuration on the origin server (this feature is only available to users on the allowlist).
on: enable
off: disable
If it is enabled, resources that do not match `CacheRules` will be cached on node according to the `max-age` value returned by the origin server, while resources that match `CacheRules` will be cached on node according to the cache expiration time set in `CacheRules`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FollowOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CacheRules) {
            this.CacheRules = new Array();
            for (let z in params.CacheRules) {
                let obj = new CacheRule();
                obj.deserialize(params.CacheRules[z]);
                this.CacheRules.push(obj);
            }
        }
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;

    }
}

/**
 * Forced access protocol redirection configuration.
 * @class
 */
class ForceRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forced access protocol redirection configuration switch. Valid values: on, off.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Access protocol type for forced redirection. Valid values: http (forced redirection to HTTP protocol), https (forced redirection to HTTPS protocol).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RedirectType = null;

        /**
         * HTTP status code returned when forced redirection is enabled. Valid values: 301, 302.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RedirectStatusCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RedirectType = 'RedirectType' in params ? params.RedirectType : null;
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;

    }
}

/**
 * DescribePurgeQuota response structure.
 * @class
 */
class DescribePurgeQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL purge usage and quota.
         * @type {Quota || null}
         */
        this.UrlPurge = null;

        /**
         * Directory purge usage and quota.
         * @type {Quota || null}
         */
        this.PathPurge = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UrlPurge) {
            let obj = new Quota();
            obj.deserialize(params.UrlPurge)
            this.UrlPurge = obj;
        }

        if (params.PathPurge) {
            let obj = new Quota();
            obj.deserialize(params.PathPurge)
            this.PathPurge = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEcdnDomainStatistics response structure.
 * @class
 */
class DescribeEcdnDomainStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name data
         * @type {Array.<DomainData> || null}
         */
        this.Data = null;

        /**
         * Quantity
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DomainData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Timestamp and its corresponding value
 * @class
 */
class TimestampData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistical time point in forward rounding mode
Taking the 5-minute granularity as an example, 13:35:00 indicates that the statistical interval is between 13:35:00 and 13:39:59
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Data value
         * @type {Array.<number> || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Data structure of sorted data
 * @class
 */
class DomainData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Result details.
         * @type {Array.<DetailData> || null}
         */
        this.DetailData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new DetailData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

    }
}

/**
 * StopEcdnDomain request structure.
 * @class
 */
class StopEcdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name to be disabled.
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * Sorting criteria for query results.
 * @class
 */
class Sort extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sort by field. Valid values:
createTime: domain name creation time
certExpireTime: certificate expiration time
         * @type {string || null}
         */
        this.Key = null;

        /**
         * asc/desc. Default value: desc.
         * @type {string || null}
         */
        this.Sequence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Sequence = 'Sequence' in params ? params.Sequence : null;

    }
}

/**
 * IP access limit configuration.
 * @class
 */
class IpFreqLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP access limit switch. Valid values: on, off.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Number of requests per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Qps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Qps = 'Qps' in params ? params.Qps : null;

    }
}

/**
 * DescribePurgeTasks request structure.
 * @class
 */
class DescribePurgeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purge type to be queried. url: query URL purge records; path: query directory purge records.
         * @type {string || null}
         */
        this.PurgeType = null;

        /**
         * Start time, such as 2018-08-08 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as 2018-08-08 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task ID returned during submission. Either `TaskId` or start time must be specified for a query.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Pagination offset. Default value: 0 (starting from entry 0).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination limit. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query keyword. Please enter a domain name or full URL beginning with `http(s)://`.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Specified task status to be queried. fail: failed, done: succeeded, process: purging.
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeEcdnStatistics response structure.
 * @class
 */
class DescribeEcdnStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned data details of the specified conditional query
         * @type {Array.<ResourceData> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Domain name log information.
 * @class
 */
class DomainLogs extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Log end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Log download path.
         * @type {string || null}
         */
        this.LogPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.LogPath = 'LogPath' in params ? params.LogPath : null;

    }
}

/**
 * HSTS configuration.
 * @class
 */
class Hsts extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable. Valid values: on, off.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * `MaxAge` value.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxAge = null;

        /**
         * Whether to include subdomain names. Valid values: on, off.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IncludeSubDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.MaxAge = 'MaxAge' in params ? params.MaxAge : null;
        this.IncludeSubDomains = 'IncludeSubDomains' in params ? params.IncludeSubDomains : null;

    }
}

/**
 * Path-specific HTTP header setting rule.
 * @class
 */
class HttpHeaderPathRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP header setting method. Valid values: add (add header), set (set header), del (delete header).
Request header currently does not support `set`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HeaderMode = null;

        /**
         * HTTP header name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HeaderName = null;

        /**
         * HTTP header value, which is optional when it is `del`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HeaderValue = null;

        /**
         * Type of effective URL path rule. Valid values: all (all paths), file (file extension), directory (directory), path (absolute path).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * URL path or file type list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeaderMode = 'HeaderMode' in params ? params.HeaderMode : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;
        this.HeaderValue = 'HeaderValue' in params ? params.HeaderValue : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

/**
 * UpdateDomainConfig response structure.
 * @class
 */
class UpdateDomainConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Data structure of sorted data
 * @class
 */
class DetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data type name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Data value
         * @type {number || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribePurgeQuota request structure.
 * @class
 */
class DescribePurgeQuotaRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeEcdnDomainLogs response structure.
 * @class
 */
class DescribeEcdnDomainLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log link list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DomainLogs> || null}
         */
        this.DomainLogs = null;

        /**
         * Total number of log links.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DomainLogs) {
            this.DomainLogs = new Array();
            for (let z in params.DomainLogs) {
                let obj = new DomainLogs();
                obj.deserialize(params.DomainLogs[z]);
                this.DomainLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Detailed access data type
 * @class
 */
class EcdnData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries the specified metric. Valid values: Bandwidth, Flux, Request, Delay, status code, LogBandwidth, LogFlux, LogRequest
         * @type {Array.<string> || null}
         */
        this.Metrics = null;

        /**
         * Detailed data collection
         * @type {Array.<TimestampData> || null}
         */
        this.DetailData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metrics = 'Metrics' in params ? params.Metrics : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new TimestampData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

    }
}

/**
 * UpdateDomainConfig request structure.
 * @class
 */
class UpdateDomainConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Origin server configuration.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * IP blocklist/allowlist configuration.
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP access limit configuration.
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * Origin server response header configuration.
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * Node caching configuration.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Caching rule configuration.
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * HTTPS configuration.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * Forced access protocol redirection configuration.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Domain name acceleration region. Valid values: mainland (acceleration in Mainland China), overseas (acceleration outside Mainland China), global (global acceleration).
         * @type {string || null}
         */
        this.Area = null;

        /**
         * WebSocket configuration.
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

    }
}

/**
 * DescribeDomainsConfig request structure.
 * @class
 */
class DescribeDomainsConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset address. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of domain names per page. Default value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query filter.
         * @type {Array.<DomainFilter> || null}
         */
        this.Filters = null;

        /**
         * Query result sorting rule.
         * @type {Sort || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DomainFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sort) {
            let obj = new Sort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * HTTPS client certificate configuration.
 * @class
 */
class ClientCert extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client certificate in PEM format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * Client certificate name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Certificate expiration time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Certificate issuance time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeployTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;

    }
}

/**
 * Basic information of a CDN domain name.
 * @class
 */
class DomainBriefInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Tencent Cloud account ID.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * CDN acceleration domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain name CNAME.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Domain name status. Valid values: pending (reviewing), rejected (rejected), processing (deploying after approval), online (enabled), offline (disabled), deleted (deleted).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Domain name creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Domain name update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Origin server configuration details.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Domain name blockage status. Valid values: normal (normal), overdue (service is suspended due to arrears), quota (trial traffic package is used up), malicious (malicious user), ddos (DDoS attack), idle (no traffic), unlicensed (no ICP filing), capping (bandwidth cap reached), readonly (read-only)
         * @type {string || null}
         */
        this.Disable = null;

        /**
         * Acceleration region. Valid values: mainland, oversea, global.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Domain name lock status. normal: not locked; global: globally locked
         * @type {string || null}
         */
        this.Readonly = null;

        /**
         * Domain name tag
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.Disable = 'Disable' in params ? params.Disable : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Readonly = 'Readonly' in params ? params.Readonly : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }

    }
}

/**
 * StartEcdnDomain response structure.
 * @class
 */
class StartEcdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEcdnDomain response structure.
 * @class
 */
class DeleteEcdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Tag key and tag value.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * WebSocket configuration.
 * @class
 */
class WebSocket extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable custom WebSocket timeout setting. When it’s `off`: WebSocket connection is supported, and the default timeout period is 15 seconds. To change the timeout period, please set it to `on`.

* WebSocket is now only available for beta users. To use it, please submit a ticket.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Sets timeout period in seconds. Maximum value: 65
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Timeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

    }
}

/**
 * StopEcdnDomain response structure.
 * @class
 */
class StopEcdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PurgePathCache response structure.
 * @class
 */
class PurgePathCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purge task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PurgeUrlsCache response structure.
 * @class
 */
class PurgeUrlsCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purge task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP blocklist/allowlist.
 * @class
 */
class IpFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP blocklist/allowlist switch. Valid values: on, off.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * IP blocklist/allowlist type. Valid values: whitelist, blacklist.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * IP blocklist/allowlist list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.Filters = 'Filters' in params ? params.Filters : null;

    }
}

/**
 * AddEcdnDomain request structure.
 * @class
 */
class AddEcdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Origin server configuration.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Domain name acceleration region. Valid values: mainland (acceleration in Mainland China), overseas (acceleration outside Mainland China), global (global acceleration).
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Project ID. Default value: 0.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * IP block/allowlist configuration.
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP access limit configuration.
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * Origin server response header configuration.
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * Node caching configuration.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Caching rule configuration.
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * HTTPS configuration.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * Forced access protocol redirection configuration.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Tag bound to a domain name.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * WebSocket configuration.
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

    }
}

/**
 * Custom response header configuration.
 * @class
 */
class ResponseHeader extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom response header switch. Valid values: on, off.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom response header rule array.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<HttpHeaderPathRule> || null}
         */
        this.HeaderRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.HeaderRules) {
            this.HeaderRules = new Array();
            for (let z in params.HeaderRules) {
                let obj = new HttpHeaderPathRule();
                obj.deserialize(params.HeaderRules[z]);
                this.HeaderRules.push(obj);
            }
        }

    }
}

/**
 * DescribeDomains response structure.
 * @class
 */
class DescribeDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name information list.
         * @type {Array.<DomainBriefInfo> || null}
         */
        this.Domains = null;

        /**
         * Total number of domain names.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DomainBriefInfo();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEcdnDomain request structure.
 * @class
 */
class DeleteEcdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name to be deleted.
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribePurgeTasks response structure.
 * @class
 */
class DescribePurgeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purge history.
         * @type {Array.<PurgeTask> || null}
         */
        this.PurgeLogs = null;

        /**
         * Total number of tasks, which is used for pagination.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PurgeLogs) {
            this.PurgeLogs = new Array();
            for (let z in params.PurgeLogs) {
                let obj = new PurgeTask();
                obj.deserialize(params.PurgeLogs[z]);
                this.PurgeLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddEcdnDomain response structure.
 * @class
 */
class AddEcdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Node IP information
 * @class
 */
class IpStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Node region
         * @type {string || null}
         */
        this.District = null;

        /**
         * Node ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Node city
         * @type {string || null}
         */
        this.City = null;

        /**
         * Node status
online: the node is online and scheduling normally
offline: the node is offline
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Node IP creation time
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.District = 'District' in params ? params.District : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.City = 'City' in params ? params.City : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * Purge task log details.
 * @class
 */
class PurgeTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purge task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Purged URL.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Purge task status. fail: failed, done: succeeded, process: purging.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Purge type. url: URL purge; path: directory purge.
         * @type {string || null}
         */
        this.PurgeType = null;

        /**
         * Resource purge method. flush: purges updated resources, delete: purges all resources.
         * @type {string || null}
         */
        this.FlushType = null;

        /**
         * Purge task submission time
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * Caching configuration rule.
 * @class
 */
class CacheRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache type. Valid values: all (all files), file (extension type), directory (directory), path (full path), index (homepage).
         * @type {string || null}
         */
        this.CacheType = null;

        /**
         * Cached content list.
         * @type {Array.<string> || null}
         */
        this.CacheContents = null;

        /**
         * Cache time in seconds.
         * @type {number || null}
         */
        this.CacheTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CacheType = 'CacheType' in params ? params.CacheType : null;
        this.CacheContents = 'CacheContents' in params ? params.CacheContents : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;

    }
}

/**
 * DescribeIpStatus response structure.
 * @class
 */
class DescribeIpStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node list
         * @type {Array.<IpStatus> || null}
         */
        this.Ips = null;

        /**
         * Total number of nodes
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Ips) {
            this.Ips = new Array();
            for (let z in params.Ips) {
                let obj = new IpStatus();
                obj.deserialize(params.Ips[z]);
                this.Ips.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Origin server configuration.
 * @class
 */
class Origin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary origin server list. IP and the domain name of the origin server cannot be entered at the same time. Configure origin server port in the format of ["origin1:port1", "origin2:port2"]. Configure origin-pull weight in the format of ["origin1::weight1", "origin2::weight2"]. Configure both port and weight in the format of ["origin1:port1:weight1", "origin2:port2:weight2"]. Valid range of weight value: 0 - 100.
         * @type {Array.<string> || null}
         */
        this.Origins = null;

        /**
         * Primary origin server type. Valid values: domain (domain name origin server), ip (IP origin server).
This is required when setting `Origins`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Host header value during origin-pull.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * Origin-pull protocol type. Valid values: http (forced HTTP origin-pull), follow (protocol follow), https (HTTPS origin-pull).
If this parameter is left empty, HTTP origin-pull will be used by default.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

        /**
         * Secondary origin server list.
         * @type {Array.<string> || null}
         */
        this.BackupOrigins = null;

        /**
         * Secondary origin server type, which is the same as `OriginType`.
This is required when setting `BackupOrigins`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupOriginType = null;

        /**
         * HTTPS advanced origin-pull configuration
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AdvanceHttps || null}
         */
        this.AdvanceHttps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Origins = 'Origins' in params ? params.Origins : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.OriginPullProtocol = 'OriginPullProtocol' in params ? params.OriginPullProtocol : null;
        this.BackupOrigins = 'BackupOrigins' in params ? params.BackupOrigins : null;
        this.BackupOriginType = 'BackupOriginType' in params ? params.BackupOriginType : null;

        if (params.AdvanceHttps) {
            let obj = new AdvanceHttps();
            obj.deserialize(params.AdvanceHttps)
            this.AdvanceHttps = obj;
        }

    }
}

/**
 * HTTPS server certificate configuration.
 * @class
 */
class ServerCert extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server certificate ID, which is required if the certificate is a Tencent Cloud-hosted certificate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Server certificate name, which is required if the certificate is a Tencent Cloud-hosted certificate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Server certificate information, which is required when uploading your own certificate and must contain complete certificate chain information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * Server key information, which is required when uploading your own certificate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * Certificate expiration time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Certificate issuance time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * Certificate remarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Caching configuration.
 * @class
 */
class CacheKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable full path cache. Valid values: on, off.
         * @type {string || null}
         */
        this.FullUrlCache = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FullUrlCache = 'FullUrlCache' in params ? params.FullUrlCache : null;

    }
}

/**
 * Filter for domain name query.
 * @class
 */
class DomainFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters by the field name, which includes:
- `origin`: Primary origin server.
- `domain`: Domain name.
- `resourceId`: Domain name ID.
- `status`: Domain name status. Valid values: `online`, `offline`, and `processing`.
- `disable`: Whether the domain name is blocked. Valid values: `normal`, `unlicensed`.
- `projectId`: Project ID.
- `fullUrlCache`: Whether to enable full-path cache, which can be `on` or `off`.
- `https`: Whether to configure HTTPS, which can be `on`, `off` or `processing`.
- `originPullProtocol`: Origin-pull protocol type, which can be `http`, `follow`, or `https`.
- `area`: Acceleration region, which can be `mainland`，`overseas` or `global`.
- `tagKey`: Tag key.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter field value.
         * @type {Array.<string> || null}
         */
        this.Value = null;

        /**
         * Whether to enable fuzzy query, which is supported only for filter fields `origin` and `domain`.
         * @type {boolean || null}
         */
        this.Fuzzy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * DescribeEcdnDomainStatistics request structure.
 * @class
 */
class DescribeEcdnDomainStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time, such as 2019-12-13 00:00:00.
The time span cannot exceed 90 days.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, such as 2019-12-13 23:59:59.
The time span cannot exceed 90 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Statistical metric names:
flux: traffic (in bytes)
bandwidth: bandwidth (in bps)
request: number of requests
         * @type {Array.<string> || null}
         */
        this.Metrics = null;

        /**
         * Specifies the list of domain names to be queried
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Specifies the project ID to be queried, which can be viewed [here](https://console.cloud.tencent.com/project)
If no domain name is entered, the specified project will be queried; otherwise, the domain name will prevail
         * @type {Array.<number> || null}
         */
        this.Projects = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Default value: 1000. Maximum value: 3,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Statistical areas:
mainland: Chinese mainland
oversea: outside the Chinese mainland
global: global
Default value: global
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metrics = 'Metrics' in params ? params.Metrics : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Projects = 'Projects' in params ? params.Projects : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Purge usage and quota
 * @class
 */
class Quota extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quota limit for one batch submission request.
         * @type {number || null}
         */
        this.Batch = null;

        /**
         * Daily submission quota limit.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Remaining daily submission quota.
         * @type {number || null}
         */
        this.Available = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Batch = 'Batch' in params ? params.Batch : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Available = 'Available' in params ? params.Available : null;

    }
}

/**
 * DescribeEcdnDomainLogs request structure.
 * @class
 */
class DescribeEcdnDomainLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name to be queried.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Log start time, such as 2019-10-01 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Log end time, such as 2019-10-02 00:00:00. Only logs for the last 30 days can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Pagination offset for log link list. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of log links per page. Default value: 100. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Detailed configuration information of ECDN domain name.
 * @class
 */
class DomainDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Tencent Cloud account ID.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Acceleration domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain name CNAME.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Domain name status. Valid values: pending (reviewing), rejected (rejected), processing (deploying after approval), online (enabled), offline (disabled), deleted (deleted).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Domain name creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Domain name update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Origin server configuration.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * IP blocklist/allowlist configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP access limit configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * Origin server response header configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * Node caching configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Caching rule configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * HTTPS configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * Domain name blockage status. Valid values: normal (normal), overdue (service is suspended due to arrears), quota (trial traffic package is used up), malicious (malicious user), ddos (DDoS attack), idle (no traffic), unlicensed (no ICP filing), capping (bandwidth cap reached), readonly (read-only).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Disable = null;

        /**
         * Forced access protocol redirection configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Acceleration region. Valid values: mainland, overseas, global.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Domain name lock status. normal: not locked; global: globally locked.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Readonly = null;

        /**
         * Domain name tag
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * WebSocket configuration.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }
        this.Disable = 'Disable' in params ? params.Disable : null;

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Readonly = 'Readonly' in params ? params.Readonly : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

    }
}

/**
 * DescribeIpStatus request structure.
 * @class
 */
class DescribeIpStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Acceleration domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Target region of the query:
mainland: nodes in Mainland China
overseas: nodes outside Mainland China
global: global nodes
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeDomains request structure.
 * @class
 */
class DescribeDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset address. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of domain names per page. Default value: 100. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query filter.
         * @type {Array.<DomainFilter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DomainFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

module.exports = {
    PurgePathCacheRequest: PurgePathCacheRequest,
    DescribeEcdnStatisticsRequest: DescribeEcdnStatisticsRequest,
    StartEcdnDomainRequest: StartEcdnDomainRequest,
    DescribeDomainsConfigResponse: DescribeDomainsConfigResponse,
    AdvanceHttps: AdvanceHttps,
    PurgeUrlsCacheRequest: PurgeUrlsCacheRequest,
    ResourceData: ResourceData,
    Https: Https,
    Cache: Cache,
    ForceRedirect: ForceRedirect,
    DescribePurgeQuotaResponse: DescribePurgeQuotaResponse,
    DescribeEcdnDomainStatisticsResponse: DescribeEcdnDomainStatisticsResponse,
    TimestampData: TimestampData,
    DomainData: DomainData,
    StopEcdnDomainRequest: StopEcdnDomainRequest,
    Sort: Sort,
    IpFreqLimit: IpFreqLimit,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    DescribeEcdnStatisticsResponse: DescribeEcdnStatisticsResponse,
    DomainLogs: DomainLogs,
    Hsts: Hsts,
    HttpHeaderPathRule: HttpHeaderPathRule,
    UpdateDomainConfigResponse: UpdateDomainConfigResponse,
    DetailData: DetailData,
    DescribePurgeQuotaRequest: DescribePurgeQuotaRequest,
    DescribeEcdnDomainLogsResponse: DescribeEcdnDomainLogsResponse,
    EcdnData: EcdnData,
    UpdateDomainConfigRequest: UpdateDomainConfigRequest,
    DescribeDomainsConfigRequest: DescribeDomainsConfigRequest,
    ClientCert: ClientCert,
    DomainBriefInfo: DomainBriefInfo,
    StartEcdnDomainResponse: StartEcdnDomainResponse,
    DeleteEcdnDomainResponse: DeleteEcdnDomainResponse,
    Tag: Tag,
    WebSocket: WebSocket,
    StopEcdnDomainResponse: StopEcdnDomainResponse,
    PurgePathCacheResponse: PurgePathCacheResponse,
    PurgeUrlsCacheResponse: PurgeUrlsCacheResponse,
    IpFilter: IpFilter,
    AddEcdnDomainRequest: AddEcdnDomainRequest,
    ResponseHeader: ResponseHeader,
    DescribeDomainsResponse: DescribeDomainsResponse,
    DeleteEcdnDomainRequest: DeleteEcdnDomainRequest,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    AddEcdnDomainResponse: AddEcdnDomainResponse,
    IpStatus: IpStatus,
    PurgeTask: PurgeTask,
    CacheRule: CacheRule,
    DescribeIpStatusResponse: DescribeIpStatusResponse,
    Origin: Origin,
    ServerCert: ServerCert,
    CacheKey: CacheKey,
    DomainFilter: DomainFilter,
    DescribeEcdnDomainStatisticsRequest: DescribeEcdnDomainStatisticsRequest,
    Quota: Quota,
    DescribeEcdnDomainLogsRequest: DescribeEcdnDomainLogsRequest,
    DomainDetailInfo: DomainDetailInfo,
    DescribeIpStatusRequest: DescribeIpStatusRequest,
    DescribeDomainsRequest: DescribeDomainsRequest,

}
