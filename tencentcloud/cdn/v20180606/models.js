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
 * DescribeCdnDomainLogs response structure.
 * @class
 */
class DescribeCdnDomainLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download link of the log package
         * @type {Array.<DomainLog> || null}
         */
        this.DomainLogs = null;

        /**
         * Total number of entries obtained
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
                let obj = new DomainLog();
                obj.deserialize(params.DomainLogs[z]);
                this.DomainLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCdnDomainLogs request structure.
 * @class
 */
class DescribeCdnDomainLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies a domain name for the query
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Starting time, such as `2019-09-04 00:00:00`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as `2019-09-04 12:00:00`
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Offset for paged queries. Default value: 0 (the first page)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paged queries. Default value: 100. Maximum value: 1,000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specifies a region for the query.
`mainland`: specifies to return the download link of logs on acceleration within Mainland China;
`overseas`: specifies to return the download link of logs on acceleration outside Mainland China;
`global`: specifies to return a download link of logs on acceleration within Mainland China and a link of logs on acceleration outside Mainland China.
Default value: `mainland`.
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;

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
 * PurgeUrlsCache request structure.
 * @class
 */
class PurgeUrlsCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of URLs. The protocol header such as "http://" or "https://" needs to be included.
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
 * This API is used to query an object and its access details
 * @class
 */
class ResourceData extends  AbstractModel {
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
 * Details of the blocked URLs
 * @class
 */
class UrlRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status (disable: blocked; enable: unblocked)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Corresponding URL
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealUrl = null;

        /**
         * Creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RealUrl = 'RealUrl' in params ? params.RealUrl : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
 * Prefetch task details.
 * @class
 */
class PushTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prefetch task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Prefetched URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Prefetch task status
`fail`: prefetch failed
`done`: prefetch succeeded
`process`: prefetch in progress
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Prefetch progress in percentage
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Prefetch task submission time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Prefetch region
`mainland`: within Mainland China
`overseas`: outside Mainland China
`global`: global
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
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Area = 'Area' in params ? params.Area : null;

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
 * DescribeCdnIp request structure.
 * @class
 */
class DescribeCdnIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IPs to be queried
         * @type {Array.<string> || null}
         */
        this.Ips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ips = 'Ips' in params ? params.Ips : null;

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

    }
}

/**
 * DescribePushTasks request structure.
 * @class
 */
class DescribePushTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting time, such as `2018-08-08 00:00:00`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as `2018-08-08 23:59:59`
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies a task ID for your query.
You must specify either a task ID or a starting time.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Specifies a keyword for your query. Please enter a domain name or a complete URL beginning with `http(s)://`
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Offset for paged queries. Default value: 0 (the first page)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paged queries. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specifies a region for your query:
`mainland`: within Mainland China
`overseas`: outside Mainland China
`global`: global
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Specifies a task state for your query:
`fail`: prefetch failed
`done`: prefetch succeeded
`process`: prefetch in progress
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeIpVisit response structure.
 * @class
 */
class DescribeIpVisitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time granularity of data statistics, which supports 5min (5 minutes) and day (1 day).
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Origin-pull data details of each resource.
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
 * Purge task details.
 * @class
 */
class PurgeTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purge task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Purged URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Purge task status
`fail`: purge failed
`done`: purge succeeded
`process`: purge in progress
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Purge type
`url`: URL purge
`path`: directory purge
         * @type {string || null}
         */
        this.PurgeType = null;

        /**
         * Purge method
`flush`: purges updated resources; this type is available only for directory purges
`delete`: purges all resources
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
 * DescribePurgeTasks request structure.
 * @class
 */
class DescribePurgeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies a purge type:
`url`: URL purge record
`path`: Directory purge record
         * @type {string || null}
         */
        this.PurgeType = null;

        /**
         * Specifies the starting time of the period you want to query, such as `2018-08-08 00:00:00`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Specifies the end time of the period you want to query, such as 2018-08-08 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies a task ID when you want to query by task ID.
You must specify either a task ID or a starting time for your query.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Offset for paged queries. Default value: 0 (the first page)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paged queries. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * You can filter the results by domain name or a complete URL beginning with `http(s)://`
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Specifies a task state for your query:
`fail`: purge failed
`done`: purge succeeded
`process`: purge in progress
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Specifies a purge region for your query:
`mainland`: within Mainland China
`overseas`: outside Mainland China
`global`: global
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
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Result of blocking/unblocking URLs
 * @class
 */
class CacheOptResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of succeeded URLs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SuccessUrls = null;

        /**
         * List of failed URLs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FailUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessUrls = 'SuccessUrls' in params ? params.SuccessUrls : null;
        this.FailUrls = 'FailUrls' in params ? params.FailUrls : null;

    }
}

/**
 * ListTopData response structure.
 * @class
 */
class ListTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top access data details of each resource
         * @type {Array.<TopData> || null}
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
                let obj = new TopData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMapInfo response structure.
 * @class
 */
class DescribeMapInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of mappings.
         * @type {Array.<MapInfo> || null}
         */
        this.MapInfoList = null;

        /**
         * The relationship between server region ID and sub-region ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RegionMapRelation> || null}
         */
        this.ServerRegionRelation = null;

        /**
         * The relationship between client region ID and sub-region ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RegionMapRelation> || null}
         */
        this.ClientRegionRelation = null;

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

        if (params.MapInfoList) {
            this.MapInfoList = new Array();
            for (let z in params.MapInfoList) {
                let obj = new MapInfo();
                obj.deserialize(params.MapInfoList[z]);
                this.MapInfoList.push(obj);
            }
        }

        if (params.ServerRegionRelation) {
            this.ServerRegionRelation = new Array();
            for (let z in params.ServerRegionRelation) {
                let obj = new RegionMapRelation();
                obj.deserialize(params.ServerRegionRelation[z]);
                this.ServerRegionRelation.push(obj);
            }
        }

        if (params.ClientRegionRelation) {
            this.ClientRegionRelation = new Array();
            for (let z in params.ClientRegionRelation) {
                let obj = new RegionMapRelation();
                obj.deserialize(params.ClientRegionRelation[z]);
                this.ClientRegionRelation.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMapInfo request structure.
 * @class
 */
class DescribeMapInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query type:
`isp`: queries ISP codes
`district`: queries codes of provinces (Mainland China) or countries/regions (outside Mainland China)
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * EnableCaches response structure.
 * @class
 */
class EnableCachesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CacheOptResult || null}
         */
        this.CacheOptResult = null;

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

        if (params.CacheOptResult) {
            let obj = new CacheOptResult();
            obj.deserialize(params.CacheOptResult)
            this.CacheOptResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePayType request structure.
 * @class
 */
class DescribePayTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies a service region.
`mainland`: queries billing methods within Mainland China;
`overseas`: queries billing methods outside Mainland China.
Default value: `mainland`.
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
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeIpVisit request structure.
 * @class
 */
class DescribeIpVisitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time, such as 2018-09-04 10:40:10; the returned result is later than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query start time is 2018-09-04 10:40:10 and the query time granularity is 5 minutes, the time for the first returned entry will be 2018-09-04 10:40:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, such as 2018-09-04 10:40:10; the returned result is earlier than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query start time is 2018-09-04 10:40:10 and the query time granularity is 5 minutes, the time for the last returned entry will be 2018-09-04 10:40:00.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies the list of domain names to be queried; up to 30 domain names can be queried at a time.
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
         * Time granularity, which can be:
5min: 5 minutes. If the query period is within 24 hours, `5min` will be used by default.
day: 1 day. If the query period is longer than 24 hours, `day` will be used by default.
         * @type {string || null}
         */
        this.Interval = null;

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
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * Details about a log package download link
 * @class
 */
class DomainLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting time of the log package
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the log package
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Log package download link
         * @type {string || null}
         */
        this.LogPath = null;

        /**
         * Acceleration region corresponding to the log package
`mainland`: within Mainland China
`overseas`: outside Mainland China
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Log package filename
         * @type {string || null}
         */
        this.LogName = null;

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
        this.Area = 'Area' in params ? params.Area : null;
        this.LogName = 'LogName' in params ? params.LogName : null;

    }
}

/**
 * DescribePayType response structure.
 * @class
 */
class DescribePayTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing modes:
`flux`: bill-by-traffic
`bandwidth`: bill-by-bandwidth
When you switch the billing mode for a daily-billing-cycle account, if there is bandwidth usage on the day, this field indicates the billing mode that will take effect on the next day; otherwise, it indicates the billing mode that has already taken effect
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * Billing cycle:
day: daily settlement
month: monthly settlement
         * @type {string || null}
         */
        this.BillingCycle = null;

        /**
         * Billing method:
monthMax: billed by the monthly average of daily peak traffic (monthly settlement)
day95: billed by the daily 95th percentile bandwidth (monthly settlement)
month95: billed by the monthly 95th percentile bandwidth (monthly settlement)
sum: billed by the total traffic (daily or monthly settlement)
max: billed by the peak bandwidth (daily settlement)
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * Billing method outside Mainland China:
`all`: unified billing for all regions
`multiple`: separate billing for different regions
         * @type {string || null}
         */
        this.RegionType = null;

        /**
         * Currently billing mode in effect:
`flux`: bill-by-traffic
`bandwidth`: bill-by-bandwidth
         * @type {string || null}
         */
        this.CurrentPayType = null;

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
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.BillingCycle = 'BillingCycle' in params ? params.BillingCycle : null;
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.RegionType = 'RegionType' in params ? params.RegionType : null;
        this.CurrentPayType = 'CurrentPayType' in params ? params.CurrentPayType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDisableRecords request structure.
 * @class
 */
class GetDisableRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting time, such as `2018-12-12 10:24:00`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as 2018-12-14 10:24:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies the URL to be queried
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Current URL status
disable: The URL remains disabled, and accessing it will return an error 403
enable: The URL is enabled (unblocked) and can be normally accessed
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Offset for paged queries. Default value: 0 (the first page)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paged queries. Default value: 20
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * Purge task ID. URLs submitted in one request share a task ID.
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
 * ListTopData request structure.
 * @class
 */
class ListTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting time of the queried period, such as `2018-09-09 00:00:00`. Currently, only 1-day granularity is supported, so only the date information will be used for the query.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the queried period, such as `2018-09-10 00:00:00`. Currently, only 1-day granularity is supported, so only the date information will be used for the query. For example, to query data on September 10, 2018, just enter `StartTime=2018-09-10 00:00:00` and `EndTime=2018-09-10 00:00:00`.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Objects to be sorted. Valid values:
`url`: sorts access URLs with query string parameters included. Supported filters are `flux` and `request`.
`path`: sorts access URLs with query string parameters excluded. Supported filters are `flux` and `request`. You need to be whitelisted before using this feature.
`district`: sorts provinces or countries/regions. Supported filters are `flux` and `request`.
`isp`: sorts ISPs. Supported filters are `flux` and `request`.
`host`: sorts domain name access data. Supported filters are `flux`, `request`, `bandwidth`, `fluxHitRate`, `2XX`, `3XX`, `4XX`, `5XX` and `statusCode`.
`originHost`: sorts by domain name origin-pull data. Supported filters are `flux`, `request`, `bandwidth`, `origin_2XX`, `origin_3XX`, `oringin_4XX`, `origin_5XX` and `OriginStatusCode`
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Metric name used for sorting:
flux: If Metric is `host`, it indicates the access traffic; if Metric is `originHost`, it indicates the origin-pull traffic.
bandwidth: If Metric is `host`, it indicates the access bandwidth; if Metric is `originHost`, it indicates the origin-pull bandwidth.
request: If Metric is `host`, it indicates the number of access requests; if Metric is `originHost`, it indicates the number of origin-pull requests.
fluxHitRate: Average traffic hit rate
2XX: access 2XX status code
3XX: access 3XX status code
4XX: access 4XX status code
5XX: access 5XX status code
origin_2XX: origin-pull 2XX status code
origin_3XX: origin-pull 3XX status code
origin_4XX: origin-pull 4XX status code
origin_5XX: origin-pull 5XX status code
statusCode: statistics of a specific access status code which is specified in the `Code` parameter.
OriginStatusCode: statistics of a specific origin-pull status code which is specified in the `Code` parameter.
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * Specifies the list of domain names to be queried; up to 30 domain names can be queried at a time.
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
         * Default value: `false`, indicating that results for all domain names are returned together when you query multiple domain names.
If `Metric` is `Url`, `Path`, `District`, or `Isp` and `Filter` is `flux` or `request`, you can set this parameter to `true`, indicating that results for each domain name are returned.
         * @type {boolean || null}
         */
        this.Detail = null;

        /**
         * When Filter is `statusCode` or `OriginStatusCode`, enter a code to query and sort results.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Specifies a service region for the query. If it is left blank, CDN data within Mainland China will be queried.
`mainland`: specifies to query CDN data within Mainland China;
`overseas`: specifies to query CDN data outside Mainland China. Supported metrics are `url`, `district`, `host`, and `originHost`. If `Metric` is `originHost`, supported filters are `flux`, `request`, and `bandwidth`.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Specifies a region type for the query. If it is left blank, data on the service region will be queried. This parameter is only valid when `Area` is `overseas` and `Metric` is `District` or `Host`.
`server`: specifies to query data on the service region where Tencent Cloud CDN nodes are located;
`client`: specifies to query data on the client region where the request devices are located; if `Metric` is `Host`, supported filters are `flux`, `request`, and `bandwidth`.
         * @type {string || null}
         */
        this.AreaType = null;

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
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.AreaType = 'AreaType' in params ? params.AreaType : null;

    }
}

/**
 * DisableCaches response structure.
 * @class
 */
class DisableCachesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Submission result
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CacheOptResult || null}
         */
        this.CacheOptResult = null;

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

        if (params.CacheOptResult) {
            let obj = new CacheOptResult();
            obj.deserialize(params.CacheOptResult)
            this.CacheOptResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Detailed purge record.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PurgeTask> || null}
         */
        this.PurgeLogs = null;

        /**
         * Total number of tasks, which is used for pagination.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribePushTasks response structure.
 * @class
 */
class DescribePushTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prefetch history
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PushTask> || null}
         */
        this.PushLogs = null;

        /**
         * Total number of tasks, which is used for pagination.
Note: This field may return null, indicating that no valid values can be obtained.
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

        if (params.PushLogs) {
            this.PushLogs = new Array();
            for (let z in params.PushLogs) {
                let obj = new PushTask();
                obj.deserialize(params.PushLogs[z]);
                this.PushLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeCdnIp response structure.
 * @class
 */
class DescribeCdnIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ownership details
         * @type {Array.<CdnIp> || null}
         */
        this.Ips = null;

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
                let obj = new CdnIp();
                obj.deserialize(params.Ips[z]);
                this.Ips.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CdnIp attribute details
 * @class
 */
class CdnIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP of the node.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Whether the IP is a Tencent Cloud CDN cache node. `yes`: it is a Tencent Cloud CDN cache node; `no`: it is not.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * District/country where the node is located. `unknown`: the node location is unknown.
         * @type {string || null}
         */
        this.Location = null;

        /**
         * Activation and deactivation history of the node.
         * @type {Array.<CdnIpHistory> || null}
         */
        this.History = null;

        /**
         * Service region of the node. `mainland`: Mainland China; `overseas`: outside Mainland China; `unknown`: unknown
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Location = 'Location' in params ? params.Location : null;

        if (params.History) {
            this.History = new Array();
            for (let z in params.History) {
                let obj = new CdnIpHistory();
                obj.deserialize(params.History[z]);
                this.History.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DisableCaches request structure.
 * @class
 */
class DisableCachesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of URLs to be blocked
Up to 100 entries can be submitted at a time and 3,000 entries per day.
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
         * Specifies the query metric, which can be:
flux: traffic (in bytes)
bandwidth: bandwidth (in bps)
request: number of requests
fluxHitRate: traffic hit rate (in %)
statusCode: status code. The aggregate data for 2xx, 3xx, 4xx, and 5xx status codes will be returned (in entries)
2xx: Returns the aggregate list of 2xx status codes and the data for status codes starting with 2 (in entries)
3xx: Returns the aggregate list of 3xx status codes and the data for status codes starting with 3 (in entries)
4xx: Returns the aggregate list of 4xx status codes and the data for status codes starting with 4 (in entries)
5xx: Returns the aggregate list of 5xx status codes and the data for status codes starting with 5 (in entries)
It is supported to specify a status code for query. The return will be empty if the status code has never been generated.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Specifies the list of domain names to be queried
Up to 30 domain names can be queried at a time
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
         * Specifies an ISP when you query the CDN data within Mainland China. If it is left blank, all ISPs will be queried.
To view ISP codes, please see [Log Management > ISP Mapping](https://cloud.tencent.com/document/product/228/6316#.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84).
If you have specified an ISP, you cannot specify a district or an IP protocol for the same query.
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * Specifies a province when you query the CDN data within Mainland China. If it is left blank, all districts will be queried.
Specifies a country/region when you query the CDN data outside Mainland China. If it is left blank, all countries/regions will be queried.
To view codes of provinces or countries/regions, see [Log Management > Province Mapping/Region Mapping](https://cloud.tencent.com/document/product/228/6316#.E7.9C.81.E4.BB.BD.E6.98.A0.E5.B0.84)
If you have specified a province for your query on CDN data within Mainland China, you cannot specify an ISP or an IP protocol for the same query.
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
         * Specifies the data source to be queried, which can be seen as the whitelist function.
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * Specifies an IP protocol; if it is left blank, all IP protocols will be queried.
`all`: All protocols
`ipv4`: IPv4
`ipv6`: IPv6
If the IP protocol to be queried is specified, the district and ISP cannot be specified at the same time
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

    }
}

/**
 * Data structure of sorted data
 * @class
 */
class TopData extends  AbstractModel {
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
         * Detailed sorting results
         * @type {Array.<TopDetailData> || null}
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
                let obj = new TopDetailData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

    }
}

/**
 * EnableCaches request structure.
 * @class
 */
class EnableCachesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of unblocked URLs
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
 * Mapping between a name and an ID
 * @class
 */
class MapInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Object ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Object name
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * Data structure of sorted data
 * @class
 */
class TopDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Datatype name
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
 * GetDisableRecords response structure.
 * @class
 */
class GetDisableRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocking history
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UrlRecord> || null}
         */
        this.UrlRecordList = null;

        /**
         * Total number of tasks, which is used for pagination
Note: This field may return null, indicating that no valid values can be obtained.
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

        if (params.UrlRecordList) {
            this.UrlRecordList = new Array();
            for (let z in params.UrlRecordList) {
                let obj = new UrlRecord();
                obj.deserialize(params.UrlRecordList[z]);
                this.UrlRecordList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Activation and deactivation history of a CDN IP node.
 * @class
 */
class CdnIpHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node status. `online`: activated; `offline`: deactivated
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Operation time. If its value is `null`, it means there is no status change record.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Datetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Datetime = 'Datetime' in params ? params.Datetime : null;

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
 * Association between a region ID and sub-region IDs.
 * @class
 */
class RegionMapRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * List of sub-region IDs
         * @type {Array.<number> || null}
         */
        this.SubRegionIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.SubRegionIdList = 'SubRegionIdList' in params ? params.SubRegionIdList : null;

    }
}

module.exports = {
    PurgePathCacheRequest: PurgePathCacheRequest,
    DescribeCdnDomainLogsResponse: DescribeCdnDomainLogsResponse,
    DescribeCdnDomainLogsRequest: DescribeCdnDomainLogsRequest,
    CdnData: CdnData,
    PurgeUrlsCacheRequest: PurgeUrlsCacheRequest,
    ResourceData: ResourceData,
    UrlRecord: UrlRecord,
    DescribeOriginDataRequest: DescribeOriginDataRequest,
    PushTask: PushTask,
    TimestampData: TimestampData,
    DescribeCdnIpRequest: DescribeCdnIpRequest,
    PushUrlsCacheRequest: PushUrlsCacheRequest,
    DescribePushTasksRequest: DescribePushTasksRequest,
    DescribeIpVisitResponse: DescribeIpVisitResponse,
    PurgePathCacheResponse: PurgePathCacheResponse,
    PurgeTask: PurgeTask,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    CacheOptResult: CacheOptResult,
    ListTopDataResponse: ListTopDataResponse,
    DescribeMapInfoResponse: DescribeMapInfoResponse,
    DescribeMapInfoRequest: DescribeMapInfoRequest,
    EnableCachesResponse: EnableCachesResponse,
    DescribePayTypeRequest: DescribePayTypeRequest,
    DescribeIpVisitRequest: DescribeIpVisitRequest,
    DomainLog: DomainLog,
    DescribePayTypeResponse: DescribePayTypeResponse,
    GetDisableRecordsRequest: GetDisableRecordsRequest,
    PurgeUrlsCacheResponse: PurgeUrlsCacheResponse,
    ListTopDataRequest: ListTopDataRequest,
    DisableCachesResponse: DisableCachesResponse,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    DescribePushTasksResponse: DescribePushTasksResponse,
    ResourceOriginData: ResourceOriginData,
    DescribeOriginDataResponse: DescribeOriginDataResponse,
    DescribeCdnIpResponse: DescribeCdnIpResponse,
    DescribeCdnDataResponse: DescribeCdnDataResponse,
    CdnIp: CdnIp,
    DisableCachesRequest: DisableCachesRequest,
    DescribeCdnDataRequest: DescribeCdnDataRequest,
    TopData: TopData,
    EnableCachesRequest: EnableCachesRequest,
    PushUrlsCacheResponse: PushUrlsCacheResponse,
    MapInfo: MapInfo,
    TopDetailData: TopDetailData,
    GetDisableRecordsResponse: GetDisableRecordsResponse,
    CdnIpHistory: CdnIpHistory,
    SummarizedData: SummarizedData,
    RegionMapRelation: RegionMapRelation,

}
