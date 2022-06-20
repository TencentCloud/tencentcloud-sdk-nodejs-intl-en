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
 * CreatePurgeTask response structure.
 * @class
 */
class CreatePurgeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * List of failed tasks and reasons
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<FailReason> || null}
         */
        this.FailedList = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.FailedList) {
            this.FailedList = new Array();
            for (let z in params.FailedList) {
                let obj = new FailReason();
                obj.deserialize(params.FailedList[z]);
                this.FailedList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadL7Logs request structure.
 * @class
 */
class DownloadL7LogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time. It must conform to the RFC3339 standard.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time. It must conform to the RFC3339 standard.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * List of sites
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * List of domain names
         * @type {Array.<string> || null}
         */
        this.Domains = null;

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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

    }
}

/**
 * CreatePurgeTask request structure.
 * @class
 */
class CreatePurgeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Type of the purging task. Values:
- `purge_url`: Purge by the URL
- `purge_prefix`: Purge by the prefix
- `purge_host`: Purge by the Hostname
- `purge_all`: Purge all cached contents
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Target resource to be purged, which depends on the `Type` field.
1. When `Type = purge_host`:
Hostnames are purged, such as www.example.com and foo.bar.example.com.
2. When `Type = purge_prefix`:
Prefixes are purged, such as http://www.example.com/example.
3. When `Type = purge_url`:
URLs are purged, such as https://www.example.com/example.jpg.
4. When `Type = purge_all`: All types of resources are purged.
`Targets` is not a required field.
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * Specifies whether to transcode non-ASCII URLs according to RFC3986.
Note that if it’s enabled, the purging is based on the converted URLs.
         * @type {boolean || null}
         */
        this.EncodeUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Targets = 'Targets' in params ? params.Targets : null;
        this.EncodeUrl = 'EncodeUrl' in params ? params.EncodeUrl : null;

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
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Type of the purging task
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Start time of the query
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Offset of the query
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of results returned
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Statuses of tasks to be queried. Values:
`processing`, `success`, `failed`, `timeout` and `invalid`
         * @type {Array.<string> || null}
         */
        this.Statuses = null;

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of domain names queried
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Queries content
         * @type {string || null}
         */
        this.Target = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Target = 'Target' in params ? params.Target : null;

    }
}

/**
 * CreatePrefetchTask response structure.
 * @class
 */
class CreatePrefetchTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * List of failed tasks
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<FailReason> || null}
         */
        this.FailedList = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.FailedList) {
            this.FailedList = new Array();
            for (let z in params.FailedList) {
                let obj = new FailReason();
                obj.deserialize(params.FailedList[z]);
                this.FailedList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Site information
 * @class
 */
class Zone extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of name servers used by the site
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * List of name servers assigned by Tencent Cloud
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * Site status
- `active`: The name server is switched.
- `pending`: The name server is not switched.
- `moved`: The name server is moved.
- `deactivated`: The name server is blocked.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * How the site is connected to EdgeOne.
- `full`: The site is connected via name server.
- `partial`: The site is connected via CNAME.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Indicates whether the site is disabled
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * Site creation date
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Site modification date
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;

    }
}

/**
 * DownloadL7Logs response structure.
 * @class
 */
class DownloadL7LogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-7 offline log data
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<L7OfflineLog> || null}
         */
        this.Data = null;

        /**
         * Page size
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Total number of pages
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Total number of entries
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

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
                let obj = new L7OfflineLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrefetchTasks response structure.
 * @class
 */
class DescribePrefetchTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total entries that match the specified query condition
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of tasks returned
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZones request structure.
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination parameter, which specifies the offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination parameter, which specifies the number of sites returned in each page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query condition filter, which supports complex type.
         * @type {Array.<ZoneFilter> || null}
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
                let obj = new ZoneFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeZones response structure.
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of sites that match the specified conditions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of sites
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<Zone> || null}
         */
        this.Zones = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new Zone();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HTTP header, used as input for the CreatePrefetchTask API
 * @class
 */
class Header extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP header name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * HTTP header value
         * @type {string || null}
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
 * Failure reason
 * @class
 */
class FailReason extends  AbstractModel {
    constructor(){
        super();

        /**
         * Failure reason
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * List of resources failed to be processed. 
 
         * @type {Array.<string> || null}
         */
        this.Targets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Targets = 'Targets' in params ? params.Targets : null;

    }
}

/**
 * Content management task result
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Status of the task
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Resource
         * @type {string || null}
         */
        this.Target = null;

        /**
         * Task type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task completion time
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreatePrefetchTask request structure.
 * @class
 */
class CreatePrefetchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of resources to be pre-warmed, for example:
http://www.example.com/example.txt
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * Specifies whether to encode the URL
Note that if it’s enabled, the purging is based on the converted URLs.
         * @type {boolean || null}
         */
        this.EncodeUrl = null;

        /**
         * HTTP header information
         * @type {Array.<Header> || null}
         */
        this.Headers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Targets = 'Targets' in params ? params.Targets : null;
        this.EncodeUrl = 'EncodeUrl' in params ? params.EncodeUrl : null;

        if (params.Headers) {
            this.Headers = new Array();
            for (let z in params.Headers) {
                let obj = new Header();
                obj.deserialize(params.Headers[z]);
                this.Headers.push(obj);
            }
        }

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
         * Total entries that match the specified query condition
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of tasks returned
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrefetchTasks request structure.
 * @class
 */
class DescribePrefetchTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Start time of the query
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Offset of the query
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of results returned
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Statuses of tasks to be queried. Values:
`processing`, `success`, `failed`, `timeout` and `invalid`
         * @type {Array.<string> || null}
         */
        this.Statuses = null;

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of domain names queried
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Resources queried
         * @type {string || null}
         */
        this.Target = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Target = 'Target' in params ? params.Target : null;

    }
}

/**
 * Site query filter
 * @class
 */
class ZoneFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters by the field name. Vaules:
- `name`: Site name.
- `status`: Site status.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filters by the field value
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Specifies whether to enable fuzzy query. It’s only available when filter name is `name`. If it’s enabled, the length of `Values` must be 1.
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * Layer-7 offline log details
 * @class
 */
class L7OfflineLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the log packaging
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.LogTime = null;

        /**
         * Site name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Log size, in bytes
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Download address
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Log package name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.LogPacketName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LogPacketName = 'LogPacketName' in params ? params.LogPacketName : null;

    }
}

module.exports = {
    CreatePurgeTaskResponse: CreatePurgeTaskResponse,
    DownloadL7LogsRequest: DownloadL7LogsRequest,
    CreatePurgeTaskRequest: CreatePurgeTaskRequest,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    CreatePrefetchTaskResponse: CreatePrefetchTaskResponse,
    Zone: Zone,
    DownloadL7LogsResponse: DownloadL7LogsResponse,
    DescribePrefetchTasksResponse: DescribePrefetchTasksResponse,
    DescribeZonesRequest: DescribeZonesRequest,
    DescribeZonesResponse: DescribeZonesResponse,
    Header: Header,
    FailReason: FailReason,
    Task: Task,
    CreatePrefetchTaskRequest: CreatePrefetchTaskRequest,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    DescribePrefetchTasksRequest: DescribePrefetchTasksRequest,
    ZoneFilter: ZoneFilter,
    L7OfflineLog: L7OfflineLog,

}
