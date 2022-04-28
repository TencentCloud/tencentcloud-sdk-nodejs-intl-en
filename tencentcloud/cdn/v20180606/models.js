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
const AbstractModel = require("../../common/abstract_model");

/**
 * PurgePathCache request structure.
 * @class
 */
class PurgePathCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of directories. The protocol header such as "http://" or "https://" needs to be included.
         * @type {Array.<string> || null}
         */
        this.Paths = null;

        /**
         * Purge type:
`flush`: purges updated resources
`delete`: purges all resources
         * @type {string || null}
         */
        this.FlushType = null;

        /**
         * Whether to encode Chinese characters before purge.
         * @type {boolean || null}
         */
        this.UrlEncode = null;

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
        this.UrlEncode = 'UrlEncode' in params ? params.UrlEncode : null;

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
         * Purge task ID. Directories submitted in one request share a task ID.
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
 * DescribeCdnData request structure.
 * @class
 */
class DescribeCdnDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries start time, such as 2018-09-04 10:40:00; the returned result is later than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query end time is 2018-09-04 10:40:00 and the query time granularity is 1 hour, the time for the first returned entry will be 2018-09-04 10:00:00.
The gap between the start time and end time should be less than or equal to 90 days.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Queries end time, such as 2018-09-04 10:40:00; the returned result is earlier than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query start time is 2018-09-04 10:40:00 and the query time granularity is 1 hour, the time for the last returned entry will be 2018-09-04 10:00:00.
The gap between the start time and end time should be less than or equal to 90 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies the metric to query, which can be:
`flux`: traffic (in bytes)
`fluxIn`: upstream traffic (in bytes), only used for the `ecdn` product
`fluxOut`: downstream traffic (in bytes), only used for the `ecdn` product
`bandwidth`: bandwidth (in bps)
`bandwidthIn`: upstream bandwidth (in bps), only used for the `ecdn` product
`bandwidthOut`: downstream bandwidth (in bps), only used for the `ecdn` product
`request`: number of requests
`hitRequest`: number of hit requests
`requestHitRate`: request hit rate (in % with two decimal digits)
`hitFlux`: hit traffic (in bytes)
`fluxHitRate`: traffic hit rate (in % with two decimal digits)
`statusCode`: status code. Number of 2xx, 3xx, 4xx, and 5xx status codes returned during the queried period.
`2xx`: lists the number of all status codes starting with **2** returned during the queried period based on the specified interval (if any)
`3xx`: lists the number of all status codes starting with **3** returned during the queried period based on the specified interval (if any)
`4xx`: lists the number of all status codes starting with **4** returned during the queried period based on the specified interval (if any)
`5xx`: lists the number of all status codes starting with **5** returned during the queried period based on the specified interval (if any)
Specifies the status code to query. The return will be empty if the status code has never been generated.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Queries the information of specified domain names
Specifies a domain name to query
Specifies multiple domain names to query (30 at most at a time)
Queries all Specifies an account to query all domain names
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Specifies the project ID to be queried, which can be viewed [here](https://console.cloud.tencent.com/project)
Please note that if domain names are specified, this parameter will be ignored.
         * @type {number || null}
         */
        this.Project = null;

        /**
         * Time granularity; valid values:
`min`: data with 1-minute granularity is returned when the queried period is no longer than 24 hours. This value is not supported if the service region you want to query is outside Mainland China;
`5min`: data with 5-minute granularity is returned when the queried period is no longer than 31 days;
`hour`: data with 1-hour granularity is returned when the queried period is no longer than 31 days;
`day`: data with 1-day granularity is returned when the queried period is longer than 31 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The aggregate data for multiple domain names is returned by default (false) during a multi-domain-name query.
You can set it to true to return the details for each Domain (the statusCode metric is currently not supported)
         * @type {boolean || null}
         */
        this.Detail = null;

        /**
         * Specifies an ISP when you query the CDN data within Mainland China. If this is left blank, all ISPs will be queried.
To view ISP codes, see [ISP Code Mappings](https://intl.cloud.tencent.com/document/product/228/6316?from_cn_redirect=1#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
If you have specified an ISP, you cannot specify a province or an IP protocol for the same query.
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * Specifies a province when you query the CDN data within Mainland China. If this is left blank, all provinces will be queried.
Specifies a country/region when you query the CDN data outside Mainland China. If this is left blank, all countries/regions will be queried.
To view codes of provinces or countries/regions, see [Province Code Mappings](https://intl.cloud.tencent.com/document/product/228/6316?from_cn_redirect=1#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
If you have specified a province for your query on CDN data within mainland China, you cannot specify an ISP or an IP protocol for the same query.
         * @type {number || null}
         */
        this.District = null;

        /**
         * Specifies the protocol to be queried; if you leave it blank, all protocols will be queried.
all: All protocols
http: specifies the HTTP metric to be queried
https: specifies the HTTPS metric to be queried
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Specifies the data source to be queried, which can be seen as the allowlist function.
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * Specified IP protocol to be queried. If this parameter is left empty, all protocols will be queried
all: all protocols
ipv4: specifies to query IPv4 metrics
ipv6: specifies to query IPv6 metrics
If the IP protocol to be queried is specified, the district and ISP cannot be specified at the same time
Note: non-IPv6 allowlisted users cannot specify `ipv4` and `ipv6` for query
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * Specifies a service region. If this value is left blank, CDN data within Mainland China will be queried.
`mainland`: specifies to query CDN data within Mainland China;
`overseas`: specifies to query CDN data outside Mainland China.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Specifies a region type for your query on CDN data outside Mainland China. If this parameter is left blank, data on the service region will be queried. This parameter is valid only when `Area` is `overseas`.
`server`: specifies to query data on the service region where Tencent Cloud CDN nodes are located;
`client`: specifies to query data on the client region where the request devices are located.
         * @type {string || null}
         */
        this.AreaType = null;

        /**
         * Specifies the product to query, either `cdn` (default) or `ecdn`.
         * @type {string || null}
         */
        this.Product = null;

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
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.District = 'District' in params ? params.District : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.AreaType = 'AreaType' in params ? params.AreaType : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Detailed access data
 * @class
 */
class CdnData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries the specified metric:
flux: traffic (in bytes)
bandwidth: bandwidth (in bps)
request: number of requests
fluxHitRate: traffic hit rate (in %)
statusCode: status code. The aggregate data for 2xx, 3xx, 4xx, and 5xx status codes will be returned (in entries)
2XX: Returns the aggregate list of 2xx status codes and the data for status codes starting with 2 (in entries)
3XX: Returns the aggregate list of 3xx status codes and the data for status codes starting with 3 (in entries)
4XX: Returns the aggregate list of 4xx status codes and the data for status codes starting with 4 (in entries)
5XX: Returns the aggregate list of 5xx status codes and the data for status codes starting with 5 (in entries)
Alternatively, you can specify a status code for querying.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Detailed data combination
         * @type {Array.<TimestampData> || null}
         */
        this.DetailData = null;

        /**
         * Aggregate data combination
         * @type {SummarizedData || null}
         */
        this.SummarizedData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new TimestampData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

        if (params.SummarizedData) {
            let obj = new SummarizedData();
            obj.deserialize(params.SummarizedData)
            this.SummarizedData = obj;
        }

    }
}

/**
 * PushUrlsCache response structure.
 * @class
 */
class PushUrlsCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the submitted task
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
 * CreateScdnFailedLogTask request structure.
 * @class
 */
class CreateScdnFailedLogTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the failed task to retry
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Region. Valid values: `mainland` and `overseas`.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeOriginData request structure.
 * @class
 */
class DescribeOriginDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time, such as 2018-09-04 10:40:00; the returned result is later than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query end time is 2018-09-04 10:40:00 and the query time granularity is 1 hour, the time for the first returned entry will be 2018-09-04 10:00:00.
The gap between the start time and end time should be less than or equal to 90 days.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, such as 2018-09-04 10:40:00; the returned result is earlier than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query start time is 2018-09-04 10:40:00 and the query time granularity is 1 hour, the time for the last returned entry will be 2018-09-04 10:00:00.
The gap between the start time and end time should be less than or equal to 90 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies the query metric, which can be:
flux: origin-pull traffic (in bytes)
bandwidth: origin-pull bandwidth (in bps)
request: number of origin-pull requests
failRequest: number of failed origin-pull requests
failRate: origin-pull failure rate (in %)
statusCode: origin-pull status code. The aggregate data for 2xx, 3xx, 4xx, and 5xx origin-pull status codes will be returned (in entries)
2xx: Returns the aggregate list of 2xx origin-pull status codes and the data for origin-pull status codes starting with 2 (in entries)
3xx: Returns the aggregate list of 3xx origin-pull status codes and the data for origin-pull status codes starting with 3 (in entries)
4xx: Returns the aggregate list of 4xx origin-pull status codes and the data for origin-pull status codes starting with 4 (in entries)
5xx: Returns the aggregate list of 5xx origin-pull status codes and the data for origin-pull status codes starting with 5 (in entries)
It is supported to specify a status code for query. The return will be empty if the status code has never been generated.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Specifies the list of domain names to be queried; up to 30 domain names can be queried at a time.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Project ID, which can be viewed [here](https://console.cloud.tencent.com/project)
If the domain name is not specified, the specified project will be queried. Up to 30 acceleration domain names can be queried at a time
If the domain name information is specified, the domain name will prevail
         * @type {number || null}
         */
        this.Project = null;

        /**
         * Time granularity; valid values:
`min`: data with 1-minute granularity is returned when the queried period is no longer than 24 hours. This value is not supported if the service region you want to query is outside Mainland China;
`5min`: data with 5-minute granularity is returned when the queried period is no longer than 31 days;
`hour`: data with 1-hour granularity is returned when the queried period is no longer than 31 days;
`day`: data with 1-day granularity is returned when the queried period is longer than 31 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The aggregate data for multiple domain names is returned by default (false) when multiple `Domains` are passed in.
You can set it to true to return the details for each Domain (the statusCode metric is currently not supported)
         * @type {boolean || null}
         */
        this.Detail = null;

        /**
         * Specifies a service region. If this value is left blank, CDN data within Mainland China will be queried.
`mainland`: specifies to query CDN data within Mainland China;
`overseas`: specifies to query CDN data outside Mainland China.
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
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeBillingData response structure.
 * @class
 */
class DescribeBillingDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time granularity, which is specified by the parameter passed in during the query:
min: 1-minute
5min: 5-minute
hour: 1-hour
day: 1-day
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Data details
         * @type {Array.<ResourceBillingData> || null}
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
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceBillingData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillingData request structure.
 * @class
 */
class DescribeBillingDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time, e.g., 2018-09-04 10:40:00. The returned result will be later than or equal to the specified time
The time will be rounded forward based on the granularity parameter `Interval`. For example, if the query start time is 2018-09-04 10:40:00 and the query time granularity is 1-hour, the time for the first returned entry will be 2018-09-04 10:00:00
The range between the start time and end time should be less than or equal to 90 days
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, e.g. 2018-09-04 10:40:00. The returned result will be earlier than or equal to the specified time
The time will be rounded forward based on the granularity parameter `Interval`. For example, if the query end time is 2018-09-04 10:40:00 and the query time granularity is 1-hour, the time for the last returned entry will be 2018-09-04 10:00:00
The range between the start time and end time should be less than or equal to 90 days
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Time granularity, which can be:
`min`: 1-minute granularity. The query period cannot exceed 24 hours.
`5min`: 5-minute granularity. The query range cannot exceed 31 days.
`hour`: 1-hour granularity. The query period cannot exceed 31 days.
`day`: 1-day granularity. The query period cannot exceed 31 days.

Querying 1-minute granularity data is not supported if the `Area` field is `overseas`.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Domain name whose billing data is to be queried
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Project ID, which can be viewed [here](https://console.cloud.tencent.com/project)
If the `Domain` parameter is populated with specific domain name information, then the billing data of this domain name instead of the specified project will be returned
         * @type {number || null}
         */
        this.Project = null;

        /**
         * Acceleration region whose billing data is to be queried:
mainland: in the mainland of China
overseas: outside the mainland of China
If this parameter is left empty, `mainland` will be used by default
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Country/region to be queried if `Area` is `overseas`
For district or country/region codes, please see [District Code Mappings](https://intl.cloud.tencent.com/document/product/228/6316?from_cn_redirect=1#.E7.9C.81.E4.BB.BD.E6.98.A0.E5.B0.84)
If this parameter is left empty, all countries/regions will be queried
         * @type {number || null}
         */
        this.District = null;

        /**
         * Billing statistics type
flux: bill-by-traffic
bandwidth: bill-by-bandwidth
Default value: `bandwidth`
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Specifies the product to query, either `cdn` (default) or `ecdn`.
         * @type {string || null}
         */
        this.Product = null;

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
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.District = 'District' in params ? params.District : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Product = 'Product' in params ? params.Product : null;

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
         * Statistical point in time in forward rounding mode
Taking the 5-minute granularity as an example, 13:35:00 indicates that the statistical interval is between 13:35:00 and 13:39:59.
         * @type {string || null}
         */
        this.Time = null;

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
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * CreateScdnFailedLogTask response structure.
 * @class
 */
class CreateScdnFailedLogTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation result. 
0: Creation succeeded
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PushUrlsCache request structure.
 * @class
 */
class PushUrlsCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of URLs. The protocol header such as "http://" or "https://" needs to be included.
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * Specifies the User-Agent header of an HTTP prefetch request when it is forwarded to the origin server
Default value: `TencentCdn`
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * Destination region for the prefetch
`mainland`: prefetches resources to nodes within Mainland China
`overseas`: prefetches resources to nodes outside Mainland China
`global`: prefetches resources to global nodes
Default value: `mainland`. You can prefetch a URL to nodes in a region provided that CDN service has been enabled for the domain name in the URL in the region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * If this parameter is `middle` or left empty, prefetch will be performed onto the intermediate node.
Note: resources prefetched outside the Chinese mainland will be cached to CDN nodes outside the Chinese mainland and the traffic generated will incur costs.
         * @type {string || null}
         */
        this.Layer = null;

        /**
         * Whether to recursively resolve the M3U8 index file and prefetch the TS shards in it.
Notes:
1. This feature requires that the M3U8 index file can be directly requested and obtained.
2. In the M3U8 index file, currently only the TS shards at the first to the third level can be recursively resolved.
3. Prefetching the TS shards obtained through recursive resolution consumes the daily prefetch quota. If the usage exceeds the quota, the feature will be disabled and TS shards will not be prefetched.
         * @type {boolean || null}
         */
        this.ParseM3U8 = null;

        /**
         * Specifies whether to disable Range GETs.
Notes:
This feature is in beta test.
         * @type {boolean || null}
         */
        this.DisableRange = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Layer = 'Layer' in params ? params.Layer : null;
        this.ParseM3U8 = 'ParseM3U8' in params ? params.ParseM3U8 : null;
        this.DisableRange = 'DisableRange' in params ? params.DisableRange : null;

    }
}

/**
 * This API is used to query an object and its origin-pull details
 * @class
 */
class ResourceOriginData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name, which is classified as follows based on different query conditions:
A specific domain name: This indicates the details of this domain name
multiDomains: This indicates the aggregate details of multiple domain names
Project ID: This displays the ID of the specifically queried project
all: This indicates the details at the account level
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Origin-pull data details
         * @type {Array.<CdnData> || null}
         */
        this.OriginData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.OriginData) {
            this.OriginData = new Array();
            for (let z in params.OriginData) {
                let obj = new CdnData();
                obj.deserialize(params.OriginData[z]);
                this.OriginData.push(obj);
            }
        }

    }
}

/**
 * DescribeCdnData response structure.
 * @class
 */
class DescribeCdnDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time granularity of the returned data. Specify one of the following during querying:
min: 1 minute
5min: 5 minutes
hour: 1 hour
day: 1 day
         * @type {string || null}
         */
        this.Interval = null;

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
        this.Interval = 'Interval' in params ? params.Interval : null;

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
 * Aggregate values of details; each metric has different aggregation methods based on its characteristics
 * @class
 */
class SummarizedData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Aggregation method, which can be:
sum: aggregate summation
max: maximum value; in bandwidth mode, the peak bandwidth is calculated based on the aggregate data with 5-minute granularity.
avg: average value
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Aggregate data value
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
 * This API is used to query an object and its access details
 * @class
 */
class ResourceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name, which is classified as follows based on different query filters:
A single domain name: queries domain name details by a domain name. The details of the domain name will be displayed when the passed parameter `detail` is `true` (the `detail` parameter defaults to `false`).
Multiple domain names: queries domain name details by multiple domain names. The aggregated details of the domain names will be displayed.
Project ID: queries domain name details by a project ID. The aggregated details of the domain names of the project will be displayed.
`all`: account-level data, which is aggregated details of all domain names of an account.
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Data details of a resource
         * @type {Array.<CdnData> || null}
         */
        this.CdnData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.CdnData) {
            this.CdnData = new Array();
            for (let z in params.CdnData) {
                let obj = new CdnData();
                obj.deserialize(params.CdnData[z]);
                this.CdnData.push(obj);
            }
        }

    }
}

/**
 * DescribeOriginData response structure.
 * @class
 */
class DescribeOriginDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time granularity of data statistics, which supports min (1 minute), 5min (5 minutes), hour (1 hour), and day (1 day).
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Origin-pull data details of each resource.
         * @type {Array.<ResourceOriginData> || null}
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
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceOriginData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Billing data details
 * @class
 */
class ResourceBillingData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name, which is categorized as follows based on different query conditions:
Specific domain name: domain name details
multiDomains: aggregated details of multiple domain names
Project ID: displays the ID of the specified project to be queried
all: the details at the account level
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Billing data details
         * @type {Array.<CdnData> || null}
         */
        this.BillingData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.BillingData) {
            this.BillingData = new Array();
            for (let z in params.BillingData) {
                let obj = new CdnData();
                obj.deserialize(params.BillingData[z]);
                this.BillingData.push(obj);
            }
        }

    }
}

module.exports = {
    PurgePathCacheRequest: PurgePathCacheRequest,
    PurgePathCacheResponse: PurgePathCacheResponse,
    DescribeCdnDataRequest: DescribeCdnDataRequest,
    CdnData: CdnData,
    PushUrlsCacheResponse: PushUrlsCacheResponse,
    CreateScdnFailedLogTaskRequest: CreateScdnFailedLogTaskRequest,
    DescribeOriginDataRequest: DescribeOriginDataRequest,
    DescribeBillingDataResponse: DescribeBillingDataResponse,
    DescribeBillingDataRequest: DescribeBillingDataRequest,
    TimestampData: TimestampData,
    CreateScdnFailedLogTaskResponse: CreateScdnFailedLogTaskResponse,
    PushUrlsCacheRequest: PushUrlsCacheRequest,
    ResourceOriginData: ResourceOriginData,
    DescribeCdnDataResponse: DescribeCdnDataResponse,
    SummarizedData: SummarizedData,
    ResourceData: ResourceData,
    DescribeOriginDataResponse: DescribeOriginDataResponse,
    ResourceBillingData: ResourceBillingData,

}
