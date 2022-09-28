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
 * CreatePlanForZone response structure.
 * @class
 */
class CreatePlanForZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of purchased resources.
         * @type {Array.<string> || null}
         */
        this.ResourceNames = null;

        /**
         * List or order numbers.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

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
        this.ResourceNames = 'ResourceNames' in params ? params.ResourceNames : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTimingL7CacheData response structure.
 * @class
 */
class DescribeTimingL7CacheDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of cached L7 time-series data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TimingDataRecord> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Smart compression configuration.
 * @class
 */
class Compression extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable smart compression. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Compression algorithm. Values:
<li>`brotli`: Brotli algorithm</li>
<li>`gzip`: Gzip algorithm</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Algorithms = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Algorithms = 'Algorithms' in params ? params.Algorithms : null;

    }
}

/**
 * DeleteRules request structure.
 * @class
 */
class DeleteRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * IDs of the rules to be deleted.
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;

    }
}

/**
 * DescribeDDoSAttackEventDetail response structure.
 * @class
 */
class DescribeDDoSAttackEventDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The details of a DDoS attack event.
         * @type {DDoSAttackEventDetailData || null}
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
            let obj = new DDoSAttackEventDetailData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDefaultCertificate request structure.
 * @class
 */
class ModifyDefaultCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * ID of the certificate.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Status of the certificate. Values:
<li>`deployed`: The certificate is deployed;</li>
<li>`disabled`: The certificate is disabled.</li>When a deployment fails, you can try again.
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyZone response structure.
 * @class
 */
class ModifyZoneResponse extends  AbstractModel {
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
 * Client IP information
 * @class
 */
class SecClientIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP of the client.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Maximum QPS.
         * @type {number || null}
         */
        this.RequestMaxQps = null;

        /**
         * Number of requests.
         * @type {number || null}
         */
        this.RequestNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.RequestMaxQps = 'RequestMaxQps' in params ? params.RequestMaxQps : null;
        this.RequestNum = 'RequestNum' in params ? params.RequestNum : null;

    }
}

/**
 * DescribeTopL7CacheData request structure.
 * @class
 */
class DescribeTopL7CacheDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The query metric. Values:
<li>`l7Cache_outFlux_domain`: Host/Domain name;</li>
<li>`l7Cache_outFlux_url`: URL address;</li>
<li>`l7Cache_outFlux_resourceType`: Resource type;</li>
<li>`l7Cache_outFlux_statusCode`: Status code.</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Specifies sites by ID. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Queries the top rows of data. Top 10 rows of data will be queried if this field is not specified.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`cacheType`: Cache type;</li>
<li>`domain`: Host/domain name;</li>
<li>`resourceType`: Resource type;</li>
<li>`url`: URL address;</li>
<li>`tagKey`: Tag key;</li>
<li>`tagValue`: Tag value.</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minutes;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * The dimensional data
 * @class
 */
class SingleTypeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * The metric name.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * The metric value.
         * @type {number || null}
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.DetailData = 'DetailData' in params ? params.DetailData : null;

    }
}

/**
 * CreateCredential response structure.
 * @class
 */
class CreateCredentialResponse extends  AbstractModel {
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
 * Domain name HTTPS acceleration configuration. This is disabled by default.
 * @class
 */
class Https extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable HTTP2. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Http2 = null;

        /**
         * Whether to enable OCSP. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OcspStapling = null;

        /**
         * TLS version. Values:
<li>`TLSv1`: TLSv1 version</li>
<li>`TLSV1.1`: TLSv1.1 version</li>
<li>`TLSV1.2`: TLSv1.2 version</li>
<li>`TLSv1.3`: TLSv1.3 version</li>Only consecutive versions can be enabled at the same time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TlsVersion = null;

        /**
         * HSTS Configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Hsts || null}
         */
        this.Hsts = null;

        /**
         * The certificate configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ServerCertInfo> || null}
         */
        this.CertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.OcspStapling = 'OcspStapling' in params ? params.OcspStapling : null;
        this.TlsVersion = 'TlsVersion' in params ? params.TlsVersion : null;

        if (params.Hsts) {
            let obj = new Hsts();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new ServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }

    }
}

/**
 * The security data queried by metric
 * @class
 */
class SecEntryValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * The metric name.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * The time-series data details.
         * @type {Array.<TimingDataItem> || null}
         */
        this.Detail = null;

        /**
         * The maximum value.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * The average value.
         * @type {number || null}
         */
        this.Avg = null;

        /**
         * Sum
         * @type {number || null}
         */
        this.Sum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new TimingDataItem();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.Max = 'Max' in params ? params.Max : null;
        this.Avg = 'Avg' in params ? params.Avg : null;
        this.Sum = 'Sum' in params ? params.Sum : null;

    }
}

/**
 * SwitchLogTopicTask request structure.
 * @class
 */
class SwitchLogTopicTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID of the shipping task.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Whether to enable the shipping task. Values:
<li>`true`: Enable the shipping task;</li>
<li>`false`: Disable the shipping task.</li>
         * @type {boolean || null}
         */
        this.IsOpen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;

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
         * The page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The paginated query limit. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`zone-name`:<br>   Filter by <strong>site name</strong><br>   Type: String<br>   Required: No<li>`zone-id`:<br>   Filter by <strong>site ID</strong>, such as zone-xxx<br>   Type: String<br>   Required: No<li>`status`:<br>   Filter by <strong>site status</strong><br>   Type: String<br>   Required: No<li>`tag-key`:<br>   Filter by <strong>tag key</strong><br>   Type: String<br>   Required: No<li>`tag-value`:<br>   Filter by <strong>tag value</strong><br>   Type: String<br>   Required: No<li>`Fuzzy`:<br>   Filter by <strong>values in fuzzy query</strong> (only `zone-name` allowed). Values limit: 1<br>   Type: Boolean<br>   Required: No<br>   Default value: false
         * @type {Array.<AdvancedFilter> || null}
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
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeLogTopicTasks request structure.
 * @class
 */
class DescribeLogTopicTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Limit on paginated queries. Default value: `20`. Maximum value: `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateCredential request structure.
 * @class
 */
class CreateCredentialRequest extends  AbstractModel {
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
 * ModifyRule request structure.
 * @class
 */
class ModifyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The rule name. It is a string that can contain 1–255 characters.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * The rule content.
         * @type {Array.<Rule> || null}
         */
        this.Rules = null;

        /**
         * The rule ID.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Rule status. Values:
<li>`enable`: Enabled</li>
<li>`disable`: Disabled</li>
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new Rule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * Total entries that match the specified query condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of tasks returned.
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
 * DescribeWebManagedRulesHitRuleDetail request structure.
 * @class
 */
class DescribeWebManagedRulesHitRuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Key-value pair filters for conditional filtering queries and fuzzy queries, such as filtering ID, name, and status.
If there are multiple filters, they’re combined with `AND`.
Values of the same Filter are combined with `OR`.
 * @class
 */
class AdvancedFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the field to filter.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Values of the filtered field.
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Whether to enable fuzzy query.
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
 * DescribeClientRuleList response structure.
 * @class
 */
class DescribeClientRuleListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The blocked client information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClientRule> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new ClientRule();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSAttackData response structure.
 * @class
 */
class DescribeDDoSAttackDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of DDoS attack data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReclaimZone response structure.
 * @class
 */
class ReclaimZoneResponse extends  AbstractModel {
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
 * DescribeZoneSetting request structure.
 * @class
 */
class DescribeZoneSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * ModifyZoneSetting request structure.
 * @class
 */
class ModifyZoneSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID to be modified.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Cache expiration time configuration
The original configuration will apply if this field is not specified.
         * @type {CacheConfig || null}
         */
        this.CacheConfig = null;

        /**
         * The node cache key configuration.
The original configuration will apply if this field is not specified.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * The browser cache configuration.
The original configuration will apply if this field is not specified.
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * The offline cache configuration.
The original configuration will apply if this field is not specified.
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * The QUIC access configuration.
The original configuration will apply if this field is not specified.
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * The POST transport configuration.
The original configuration will apply if this field is not specified.
         * @type {PostMaxSize || null}
         */
        this.PostMaxSize = null;

        /**
         * The smart compression configuration.
The original configuration will apply if this field is not specified.
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * The HTTP2 origin-pull configuration.
The original configuration will apply if this field is not specified.
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * The force HTTPS redirect configuration.
The original configuration will apply if this field is not specified.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * The HTTPS acceleration configuration.
The original configuration will apply if this field is not specified.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * The origin server configuration.
The original configuration will apply if this field is not specified.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * The smart acceleration configuration.
The original configuration will apply if this field is not specified.
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * The WebSocket configuration.
The original configuration will apply if this field is not specified.
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * The origin-pull client IP header configuration.
The original configuration will apply if this field is not specified.
         * @type {ClientIpHeader || null}
         */
        this.ClientIpHeader = null;

        /**
         * The cache prefresh configuration.
The original configuration will apply if this field is not specified.
         * @type {CachePrefresh || null}
         */
        this.CachePrefresh = null;

        /**
         * The IPv6 access configuration.
The original configuration will apply if this field is not specified.
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * 
         * @type {ClientIpCountry || null}
         */
        this.ClientIpCountry = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.CacheConfig) {
            let obj = new CacheConfig();
            obj.deserialize(params.CacheConfig)
            this.CacheConfig = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.OfflineCache) {
            let obj = new OfflineCache();
            obj.deserialize(params.OfflineCache)
            this.OfflineCache = obj;
        }

        if (params.Quic) {
            let obj = new Quic();
            obj.deserialize(params.Quic)
            this.Quic = obj;
        }

        if (params.PostMaxSize) {
            let obj = new PostMaxSize();
            obj.deserialize(params.PostMaxSize)
            this.PostMaxSize = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.UpstreamHttp2) {
            let obj = new UpstreamHttp2();
            obj.deserialize(params.UpstreamHttp2)
            this.UpstreamHttp2 = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.SmartRouting) {
            let obj = new SmartRouting();
            obj.deserialize(params.SmartRouting)
            this.SmartRouting = obj;
        }

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.ClientIpHeader) {
            let obj = new ClientIpHeader();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

        if (params.CachePrefresh) {
            let obj = new CachePrefresh();
            obj.deserialize(params.CachePrefresh)
            this.CachePrefresh = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.ClientIpCountry) {
            let obj = new ClientIpCountry();
            obj.deserialize(params.ClientIpCountry)
            this.ClientIpCountry = obj;
        }

    }
}

/**
 * Rule engine condition parameters
 * @class
 */
class RuleCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operator. Valid values:
<li>equal: Equal to.</li>
<li>notequal: Not equal to.</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Match type. Valid values:
<li>`host`: All</li>
<li>`filename`: File name</li>
<li>`extension`: File extension</li>
<li>`host`: HOST: .</li>
<li>`full_url`: The full URL of the current site. It must contain the HTTP protocol, host, and path.</li>
<li>`url`: The URL path of the current site.</li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * Parameter values of the match type. Each match type has the following valid values:
<li>`Target=extension`:  The extension of the file, such as `jpg` and `txt`.</li>
<li>`Target=filename`: The file name without the extension.</li>
<li>`Target=host`: Values can be `all` 
or a host, such as `www.maxx55.com`.</li>
<li>`Target=url`: A URL request path under the current site, such as `/example`.</li>
<li>`Target=full_url`: A complete URL request under the current site. It must contain the protocol, host, and path, such as `https://www.maxx55.cn/example`.</li>
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeAddableEntityList response structure.
 * @class
 */
class DescribeAddableEntityListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of available shipping entities.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.EntityList = null;

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
        this.EntityList = 'EntityList' in params ? params.EntityList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Logset information
 * @class
 */
class LogSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region of the logset.
         * @type {string || null}
         */
        this.LogSetRegion = null;

        /**
         * Name of the logset.
         * @type {string || null}
         */
        this.LogSetName = null;

        /**
         * ID of the logset.
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * Whether the logset is deleted. Values:
<li>`no`: The logset is not deleted;</li>
<li>`yes`: The logset is deleted.</li>
         * @type {string || null}
         */
        this.Deleted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;
        this.LogSetName = 'LogSetName' in params ? params.LogSetName : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;

    }
}

/**
 * DescribeClientRuleList request structure.
 * @class
 */
class DescribeClientRuleListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the site to be queried.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name to be queried.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Rule type. Values:
<li>`acl`: Custom rules;</li>
<li>`rate`: Rate limiting rules.</li>All rules will be queried if this field is not specified.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * The rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * The client IP.
         * @type {string || null}
         */
        this.SourceClientIp = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.SourceClientIp = 'SourceClientIp' in params ? params.SourceClientIp : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeBotData request structure.
 * @class
 */
class DescribeBotDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of statistical metric. Values:
<li>`bot_interceptNum`: Blocked bot requests;</li>
<li>`bot_noneRequestNum`: Uncategorized bot requests;</li>
<li>`bot_maliciousRequestNum`: Malicious bot requests;</li>
<li>`bot_suspectedRequestNum`: Suspected bot requests;</li>
<li>`bot_friendlyRequestNum`: Friendly bot requests;</li>
<li>`bot_normalRequestNum`: Normal bot requests.</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Specifies sites by ID. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Parameter of the action for the HTTP request/response header of a rule engine condition.
 * @class
 */
class RuleRewriteActionParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Feature parameter name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the parameter name, which has three values:
<li>add: Add the HTTP header.</li>
<li>set: Rewrite the HTTP header.</li>
<li>del: Delete the HTTP header.</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Parameter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter value
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * ModifyZone request structure.
 * @class
 */
class ModifyZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The site access method. Values:
<li>`full`: Access through a name server.</li>
<li>`partial`: Access through a CNAME record.</li>The original configuration will apply if this field is not specified.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The custom name servers. If this field is not specified, the default name servers will be used.
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

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

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }

    }
}

/**
 * The origin server configuration.
 * @class
 */
class Origin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary origin server list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Origins = null;

        /**
         * The list of backup origin servers.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BackupOrigins = null;

        /**
         * Origin-pull protocol configuration. Values:
<li>`http`: Force HTTP for origin-pull.</li>
<li>`follow`: Follow protocol.</li>
<li>`https`: Force HTTPS for origin-pull. This only supports port 443 on the origin server.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

        /**
         * When OriginType is COS, you can specify if access to private buckets is allowed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CosPrivateAccess = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Origins = 'Origins' in params ? params.Origins : null;
        this.BackupOrigins = 'BackupOrigins' in params ? params.BackupOrigins : null;
        this.OriginPullProtocol = 'OriginPullProtocol' in params ? params.OriginPullProtocol : null;
        this.CosPrivateAccess = 'CosPrivateAccess' in params ? params.CosPrivateAccess : null;

    }
}

/**
 * The dimensional data record
 * @class
 */
class SingleDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * The query dimension value.
         * @type {string || null}
         */
        this.TypeKey = null;

        /**
         * Value of the metric under the query dimension.
         * @type {Array.<SingleTypeValue> || null}
         */
        this.TypeValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeKey = 'TypeKey' in params ? params.TypeKey : null;

        if (params.TypeValue) {
            this.TypeValue = new Array();
            for (let z in params.TypeValue) {
                let obj = new SingleTypeValue();
                obj.deserialize(params.TypeValue[z]);
                this.TypeValue.push(obj);
            }
        }

    }
}

/**
 * DescribeWebProtectionTopData request structure.
 * @class
 */
class DescribeWebProtectionTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of statistical metric. Values:
<li>`ccRate_requestNum_url`: Top-ranked URLs by rate limiting requests.</li>
<li>`ccRate_cipRequestNum_region`: Top-ranked client IPs by rate limiting requests.</li>
<li>`ccAcl_requestNum_url`: Top-ranked URLs by custom rule requests.</li>
<li>`ccAcl_requestNum_cip`: Top-ranked client IPs by custom rule execution requests.</li>
<li>`ccAcl_cipRequestNum_region`: Top-ranked clients by custom rule execution requests.</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Queries the top n rows of data. Top 10 rows of data will be queried if this field is not specified.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Bot attack log
 * @class
 */
class BotLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * The attack time recorded in seconds using UNIX timestamp.
         * @type {number || null}
         */
        this.AttackTime = null;

        /**
         * The attacker IP.
         * @type {string || null}
         */
        this.AttackIp = null;

        /**
         * The attacked domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The URI.
         * @type {string || null}
         */
        this.RequestUri = null;

        /**
         * Attack type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * Request method.
         * @type {string || null}
         */
        this.RequestMethod = null;

        /**
         * The attack content.
         * @type {string || null}
         */
        this.AttackContent = null;

        /**
         * The attack level.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * The rule ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * The country code of the attacker IP, which is defined in ISO-3166 alpha-2. For the list of country codes, see [ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json).
         * @type {string || null}
         */
        this.SipCountryCode = null;

        /**
         * The attack event ID.
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * The processing method.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisposalMethod = null;

        /**
         * The HTTP log.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HttpLog = null;

        /**
         * The user agent.
         * @type {string || null}
         */
        this.Ua = null;

        /**
         * The detection method.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DetectionMethod = null;

        /**
         * The credibility level.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Confidence = null;

        /**
         * Maliciousness
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Maliciousness = null;

        /**
         * The security rule information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecRuleRelatedInfo> || null}
         */
        this.RuleDetailList = null;

        /**
         * The bot tag.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;
        this.AttackIp = 'AttackIp' in params ? params.AttackIp : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RequestUri = 'RequestUri' in params ? params.RequestUri : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.RequestMethod = 'RequestMethod' in params ? params.RequestMethod : null;
        this.AttackContent = 'AttackContent' in params ? params.AttackContent : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.SipCountryCode = 'SipCountryCode' in params ? params.SipCountryCode : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.DisposalMethod = 'DisposalMethod' in params ? params.DisposalMethod : null;
        this.HttpLog = 'HttpLog' in params ? params.HttpLog : null;
        this.Ua = 'Ua' in params ? params.Ua : null;
        this.DetectionMethod = 'DetectionMethod' in params ? params.DetectionMethod : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Maliciousness = 'Maliciousness' in params ? params.Maliciousness : null;

        if (params.RuleDetailList) {
            this.RuleDetailList = new Array();
            for (let z in params.RuleDetailList) {
                let obj = new SecRuleRelatedInfo();
                obj.deserialize(params.RuleDetailList[z]);
                this.RuleDetailList.push(obj);
            }
        }
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * DescribeAvailablePlans request structure.
 * @class
 */
class DescribeAvailablePlansRequest extends  AbstractModel {
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
 * DescribeSingleL7AnalysisData request structure.
 * @class
 */
class DescribeSingleL7AnalysisDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The query metric. Values:
<li>`l7Flow_singleIpRequest`: Number of requests from a single IP.</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`country`: Country/Region;</li>
<li>`domain`: Domain name;</li>
<li>`protocol`: Protocol type;</li>
<li>`tagKey`: Tag key;</li>
<li>`tagValue`: Tag value.</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * The cache key configuration.
 * @class
 */
class CacheKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable full-path cache. Values:
<li>`on`: Enable full-path cache (i.e., disable Ignore Query String).</li>
<li>`off`: Disable full-path cache (i.e., enable Ignore Query String).</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullUrlCache = null;

        /**
         * Whether to ignore case in the cache key. Values:
<li>`on`: Ignore</li>
<li>`off`: Not ignore</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IgnoreCase = null;

        /**
         * Request parameter contained in `CacheKey`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {QueryString || null}
         */
        this.QueryString = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FullUrlCache = 'FullUrlCache' in params ? params.FullUrlCache : null;
        this.IgnoreCase = 'IgnoreCase' in params ? params.IgnoreCase : null;

        if (params.QueryString) {
            let obj = new QueryString();
            obj.deserialize(params.QueryString)
            this.QueryString = obj;
        }

    }
}

/**
 * DescribeHostsSetting response structure.
 * @class
 */
class DescribeHostsSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of domain names.
         * @type {Array.<DetailHost> || null}
         */
        this.DetailHosts = null;

        /**
         * Number of domain names
         * @type {number || null}
         */
        this.TotalNumber = null;

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

        if (params.DetailHosts) {
            this.DetailHosts = new Array();
            for (let z in params.DetailHosts) {
                let obj = new DetailHost();
                obj.deserialize(params.DetailHosts[z]);
                this.DetailHosts.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZoneStatus response structure.
 * @class
 */
class ModifyZoneStatusResponse extends  AbstractModel {
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
 * DescribeBotTopData request structure.
 * @class
 */
class DescribeBotTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of statistical metric. Values:
<li>`bot_requestNum_labelType`: Top-ranked tag types by bot requests.</li>
<li>`bot_requestNum_url`: Top-ranked URLs by bot requests.</li>
<li>`bot_cipRequestNum_region`: Top-ranked client IPs by bot requests.</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Queries the top rows of data. Maximum value: 1000. Top 10 rows of data will be queried if this field is not specified.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DeleteZone response structure.
 * @class
 */
class DeleteZoneResponse extends  AbstractModel {
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
 * CreateRule response structure.
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIdentifications response structure.
 * @class
 */
class DescribeIdentificationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible sites.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The site verification information.
         * @type {Array.<Identification> || null}
         */
        this.Identifications = null;

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

        if (params.Identifications) {
            this.Identifications = new Array();
            for (let z in params.Identifications) {
                let obj = new Identification();
                obj.deserialize(params.Identifications[z]);
                this.Identifications.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The time-series data
 * @class
 */
class TimingDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * The query dimension value.
         * @type {string || null}
         */
        this.TypeKey = null;

        /**
         * Detailed time series data
         * @type {Array.<TimingTypeValue> || null}
         */
        this.TypeValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeKey = 'TypeKey' in params ? params.TypeKey : null;

        if (params.TypeValue) {
            this.TypeValue = new Array();
            for (let z in params.TypeValue) {
                let obj = new TimingTypeValue();
                obj.deserialize(params.TypeValue[z]);
                this.TypeValue.push(obj);
            }
        }

    }
}

/**
 * CreatePurgeTask response structure.
 * @class
 */
class CreatePurgeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the task.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * List of failed tasks and reasons.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * ModifyDnssec request structure.
 * @class
 */
class ModifyDnssecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The DNSSEC status. Values:
<li>`enabled`: Enabled</li>
<li>`disabled`: Disabled</li>
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeRules response structure.
 * @class
 */
class DescribeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of rules. Rules are sorted in order of execution.
         * @type {Array.<RuleItem> || null}
         */
        this.RuleItems = null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.RuleItems) {
            this.RuleItems = new Array();
            for (let z in params.RuleItems) {
                let obj = new RuleItem();
                obj.deserialize(params.RuleItems[z]);
                this.RuleItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadL4Logs response structure.
 * @class
 */
class DownloadL4LogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of L4 log data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<L4OfflineLog> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new L4OfflineLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The details of a DDoS attack event
 * @class
 */
class DDoSAttackEventDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * The attack status. Values:
<li>`1`: The attack is being observed;</li>
<li>`2`: The attack started;</li>
<li>`3`: The attack ended.</li>
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * The attack type.
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * The end time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The maximum bandwidth.
         * @type {number || null}
         */
        this.MaxBandWidth = null;

        /**
         * The maximum packet rate.
         * @type {number || null}
         */
        this.PacketMaxRate = null;

        /**
         * The event ID.
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * The DDoS policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.MaxBandWidth = 'MaxBandWidth' in params ? params.MaxBandWidth : null;
        this.PacketMaxRate = 'PacketMaxRate' in params ? params.PacketMaxRate : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * DescribeBotClientIpList request structure.
 * @class
 */
class DescribeBotClientIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland).</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeTopL7AnalysisData response structure.
 * @class
 */
class DescribeTopL7AnalysisDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of top-ranked L7 traffic data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopDataRecord> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new TopDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBotTopData response structure.
 * @class
 */
class DescribeBotTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of top-ranked bot attack data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopEntry> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new TopEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Domain name configuration information
 * @class
 */
class DetailHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The acceleration status. Values:
<li>`process`: In progress</li>
<li>`online`: Enabled</li>
<li>`offline`: Disabled</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The domain name.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Name of the site
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * The assigned CNAME
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * The resource ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The lock status.
         * @type {number || null}
         */
        this.Lock = null;

        /**
         * The domain name status.
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * The acceleration area of the domain name. Values:
<li>`global`: Global.</li>
<li>`mainland`: Chinese mainland.</li>
<li>`overseas`: Outside the Chinese mainland.</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * The acceleration type configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AccelerateType || null}
         */
        this.AccelerateType = null;

        /**
         * The HTTPS configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * The cache configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CacheConfig || null}
         */
        this.CacheConfig = null;

        /**
         * The origin configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * The security type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SecurityType || null}
         */
        this.SecurityType = null;

        /**
         * The cache key configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * The smart compression configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * The WAF protection configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Waf || null}
         */
        this.Waf = null;

        /**
         * The CC protection configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CC || null}
         */
        this.CC = null;

        /**
         * DDoS mitigation configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DDoS || null}
         */
        this.DDoS = null;

        /**
         * The smart routing configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * The IPv6 access configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * 
         * @type {ClientIpCountry || null}
         */
        this.ClientIpCountry = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Lock = 'Lock' in params ? params.Lock : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.AccelerateType) {
            let obj = new AccelerateType();
            obj.deserialize(params.AccelerateType)
            this.AccelerateType = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.CacheConfig) {
            let obj = new CacheConfig();
            obj.deserialize(params.CacheConfig)
            this.CacheConfig = obj;
        }

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.SecurityType) {
            let obj = new SecurityType();
            obj.deserialize(params.SecurityType)
            this.SecurityType = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.Waf) {
            let obj = new Waf();
            obj.deserialize(params.Waf)
            this.Waf = obj;
        }

        if (params.CC) {
            let obj = new CC();
            obj.deserialize(params.CC)
            this.CC = obj;
        }

        if (params.DDoS) {
            let obj = new DDoS();
            obj.deserialize(params.DDoS)
            this.DDoS = obj;
        }

        if (params.SmartRouting) {
            let obj = new SmartRouting();
            obj.deserialize(params.SmartRouting)
            this.SmartRouting = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.ClientIpCountry) {
            let obj = new ClientIpCountry();
            obj.deserialize(params.ClientIpCountry)
            this.ClientIpCountry = obj;
        }

    }
}

/**
 * Rule engine action for the HTTP request/response header
 * @class
 */
class RewriteAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Feature name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the feature name.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Parameter
         * @type {Array.<RuleRewriteActionParams> || null}
         */
        this.Parameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new RuleRewriteActionParams();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }

    }
}

/**
 * CreateDnsRecord request structure.
 * @class
 */
class CreateDnsRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID of the DNS record.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The DNS record type. Values:
<li>`A`: Point a domain name to an IPv4 address, such as 8.8.8.8.</li>
<li>`AAAA`: Point a domain name to an IPv6 address.</li>
<li>`MX`: It is used for email servers. The record value and priority parameters are provided by email service providers. If there are multiple MX records, the lower the priority value, the higher the priority.</li>
<li>`CNAME`: Point a domain name to another domain name that can be resolved to an IP address.</li>
<li>`TXT`: Identify and describe a domain name. It is usually used for domain verification and as SPF records (for anti-spam).</li>
<li>`NS`: If you need to authorize a subdomain name to another DNS service provider for DNS resolution, you need to add an NS record. You cannot add an NS record for a root domain name.</li>
<li>`CAA`: Specify CAs to issue certificates for sites.</li>
<li>`SRV`: Identify a service used by a server. It is commonly used in Microsoft directory management.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The DNS record name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The DNS record content.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * The proxy mode. Values:
<li>`dns_only`: Only DNS</li>
<li>`proxied`: Proxied</li>
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * TTL (in seconds). The smaller the value, the faster the record changes take effect. Default value: 300
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Specifies a value in the range 1–50 when you make changes to the MX records. A smaller value indicates higher priority. Note that the default value 0 will be used if this field is not specified.
         * @type {number || null}
         */
        this.Priority = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

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
         * @type {number || null}
         */
        this.LogTime = null;

        /**
         * The subdomain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Log size, in bytes.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Download address
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Log package name
         * @type {string || null}
         */
        this.LogPacketName = null;

        /**
         * Acceleration region. Values:
<li>`mainland`: Chinese mainland;</li>
<li>`overseas`: Global (outside the Chinese mainland);</li>
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
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LogPacketName = 'LogPacketName' in params ? params.LogPacketName : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * CreateLogTopicTask response structure.
 * @class
 */
class CreateLogTopicTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the log topic created.
         * @type {string || null}
         */
        this.TopicId = null;

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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Smart acceleration configuration
 * @class
 */
class SmartRouting extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable smart acceleration. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeDnsData response structure.
 * @class
 */
class DescribeDnsDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS statistics.
         * @type {Array.<DnsData> || null}
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
                let obj = new DnsData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLogTopicTask response structure.
 * @class
 */
class ModifyLogTopicTaskResponse extends  AbstractModel {
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
 * Site information
 * @class
 */
class Zone extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The site name.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * List of name servers used by the site
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * The list of name servers assigned by Tencent Cloud.
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * The site status. Values:
<li>`active`: The name server is switched.</li>
<li>`pending`: The name server is not switched.</li>
<li>`moved`: The name server is moved.</li>
<li>`deactivated`: The site is blocked.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The site access method. Values:
<li>`full`: Access through a name server.</li>
<li>`partial`: Access through a CNAME record.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Whether the site is disabled.
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * Whether CNAME flattening is enabled. Valid values:
<li>`enabled`: Enabled.</li>
<li>`disabled`: Disabled.</li>
         * @type {string || null}
         */
        this.CnameSpeedUp = null;

        /**
         * CNAME record access status. Values:
<li>`finished`: The site is verified.</li>
<li>`pending`: The site is being verified.</li>
         * @type {string || null}
         */
        this.CnameStatus = null;

        /**
         * The list of resource tags.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * The list of billable resources.
         * @type {Array.<Resource> || null}
         */
        this.Resources = null;

        /**
         * The creation time of the site.
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * The modification date of the site.
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * The site access region. Values:
<li>`global`: Global.</li>
<li>`mainland`: Chinese mainland.</li>
<li>`overseas`: Outside the Chinese mainland.</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * The custom name server information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

        /**
         * The custom name server IP information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<VanityNameServersIps> || null}
         */
        this.VanityNameServersIps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.CnameSpeedUp = 'CnameSpeedUp' in params ? params.CnameSpeedUp : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new Resource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }

        if (params.VanityNameServersIps) {
            this.VanityNameServersIps = new Array();
            for (let z in params.VanityNameServersIps) {
                let obj = new VanityNameServersIps();
                obj.deserialize(params.VanityNameServersIps[z]);
                this.VanityNameServersIps.push(obj);
            }
        }

    }
}

/**
 * Common action parameter of a rule engine condition
 * @class
 */
class RuleNormalActionParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the parameter name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The parameter value.
         * @type {Array.<string> || null}
         */
        this.Values = null;

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

    }
}

/**
 * DescribeDDoSAttackSourceEvent request structure.
 * @class
 */
class DescribeDDoSAttackSourceEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The protocol type. Values:
<li>`tcp`: TCP protocol;</li>
<li>`udp`: UDP protocol;</li>
<li>`all`: All protocol types.</li>This field will be set to the default value `all` if not specified.
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * The list of DDoS policy IDs to be specified. All policies will be selected if this field is not specified.
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Rule engine parameter details and special parameter types.
 * @class
 */
class RuleExtraParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name. Valid values:
<li>`Action`: Required parameter for HTTP header modification when `RewirteAction` is selected for `RuleAction`.</li>
<li>`StatusCode`: Required parameter for the status code feature when `CodeAction` is selected for `RuleAction`.</li>
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Parameter value type.
<li>`CHOICE`: The parameter value can be selected only from `Values`.</li>
<li>`CUSTOM_NUM`: The parameter value is a custom integer.</li>
<li>`CUSTOM_STRING`: The parameter value is a custom string.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Valid values.
Note: If the value of `Id` is `StatusCode`, values in the array are all integer values. When entering a parameter value, enter the integer value of the string.
         * @type {Array.<string> || null}
         */
        this.Choices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Choices = 'Choices' in params ? params.Choices : null;

    }
}

/**
 * List of the settings of the rule engine that can be used for request match and their detailed information.
 * @class
 */
class RulesSettingAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Feature name. Valid values:
<li>Access URL rewrite (`AccessUrlRedirect`).</li>
<li>Origin-pull URL rewrite (`UpstreamUrlRedirect`).</li>
<li>Custom error page
(`ErrorPage`).</li>
<li>QUIC (`QUIC`).</li>
<li>WebSocket (`WebSocket`).</li>
<li>Video dragging (`VideoSeek`).</li>
<li>Token authentication (`Authentication`).</li>
<li>`CacheKey`: Custom cache key.</li>
<li>`Cache`: Node cache TTL.</li>
<li>`MaxAge`: Browser cache TTL.</li>
<li>`OfflineCache`: Offline cache.</li>
<li>`SmartRouting`: Smart acceleration.</li>
<li>`RangeOriginPull`: Range GETs.</li>
<li>`UpstreamHttp2`: HTTP/2 forwarding.</li>
<li>`HostHeader`: Host header rewrite.</li>
<li>`ForceRedirect`: Force HTTPS.</li>
<li>`OriginPullProtocol`: Origin-pull HTTPS.</li>
<li>`CachePrefresh`: Cache prefresh.</li>
<li>`Compression`: Smart compression.</li>
<li>`RequestHeader`: HTTP request header modification.</li>
<li>HTTP response header modification (`ResponseHeader`).</li>
<li>Status code cache TTL (`StatusCodeCache`).</li>
<li>`Hsts`.</li>
<li>`ClientIpHeader`.</li>
<li>`TlsVersion`.</li>
<li>`OcspStapling`.</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Parameter information
         * @type {Array.<RulesProperties> || null}
         */
        this.Properties = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new RulesProperties();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }

    }
}

/**
 * The DDoS attacker information
 * @class
 */
class DDoSAttackEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * The event ID.
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * The attack type.
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * The attack status.
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * The maximum attack bandwidth.
         * @type {number || null}
         */
        this.AttackMaxBandWidth = null;

        /**
         * The peak attack packet rate.
         * @type {number || null}
         */
        this.AttackPacketMaxRate = null;

        /**
         * The attack start time recorded in seconds.
         * @type {number || null}
         */
        this.AttackStartTime = null;

        /**
         * The attack end time recorded in seconds.
         * @type {number || null}
         */
        this.AttackEndTime = null;

        /**
         * The DDoS policy ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * ID of the site.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.AttackMaxBandWidth = 'AttackMaxBandWidth' in params ? params.AttackMaxBandWidth : null;
        this.AttackPacketMaxRate = 'AttackPacketMaxRate' in params ? params.AttackPacketMaxRate : null;
        this.AttackStartTime = 'AttackStartTime' in params ? params.AttackStartTime : null;
        this.AttackEndTime = 'AttackEndTime' in params ? params.AttackEndTime : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * The client IP header configuration
 * @class
 */
class ClientIpHeader extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the configuration. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The name of the HTTP header that contains the client IP, which is used for forwarding.
If this field is not specified, the default value `X-Forwarded-IP` will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HeaderName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;

    }
}

/**
 * DescribeDDoSAttackTopData request structure.
 * @class
 */
class DescribeDDoSAttackTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The statistical metric. Values:
<li>`ddos_attackFlux_protocol`: Top-ranked protocols by DDoS attack traffic.</li>
<li>`ddos_attackPackageNum_protocol`: Top-ranked protocols by DDoS attack packets.</li>
<li>`ddos_attackNum_attackType`: Top-ranked attack types by DDoS attacks.</li>
<li>`ddos_attackNum_sregion`: Top-ranked attack source regions by DDoS attacks.</li>
<li>`ddos_attackFlux_sip`: Top-ranked attacker IPs by DDoS attack traffic.</li>
<li>`ddos_attackFlux_sregion`: Top-ranked attack source regions by DDoS attack traffic.</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * List of site IDs to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * The list of DDoS policy IDs to be specified. All policies will be selected if this field is not specified.
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * The attack type. Values:
<li>`flood`: Flood;</li>
<li>`icmpFlood`: ICMP flood;</li>
<li>`all`: All attack types.</li>This field will be set to the default value `all` if not specified.
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * The protocol type. Values:
<li>`tcp`: TCP protocol;</li>
<li>`udp`: UDP protocol;</li>
<li>`all`: All protocol types.</li>This field will be set to the default value `all` if not specified.
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * The port number.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Queries the top n rows of data. Top 10 rows of data will be queried if this field is not specified.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * QUIC configuration item
 * @class
 */
class Quic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable QUIC. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * IPv6 access configuration
 * @class
 */
class Ipv6 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable IPv6 access. Values:
<li>`on`: Enable IPv6 access.</li>
<li>`off`: Disable IPv6 access.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeRules request structure.
 * @class
 */
class DescribeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`rule-id`:<br>   Filter by the <strong>rule ID</strong><br>   Type: string<br>   Required: No
         * @type {Array.<Filter> || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * The log topic information
 * @class
 */
class ClsLogTopicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the task.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Name of the site.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * ID of the logset.
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * ID of the log topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Type of the task.
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * Retention period of the log topic.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether the log topic is enabled.
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Whether the log topic is deleted.
         * @type {string || null}
         */
        this.Deleted = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Target location. Values:
<li>`cls`: Ship logs to CLS;</li>
<li>`custom_enpoint`: Ship logs to a custom address.</li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * Region of the logset.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogSetRegion = null;

        /**
         * ID of the site.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Acceleration region. Values:
<li>`mainland`: Chinese mainland;</li>
<li>`overseas`: Global (outside the Chinese mainland).</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 
         * @type {string || null}
         */
        this.LogSetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.LogSetType = 'LogSetType' in params ? params.LogSetType : null;

    }
}

/**
 * DescribeDDoSMajorAttackEvent response structure.
 * @class
 */
class DescribeDDoSMajorAttackEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of large DDoS attack data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DDoSMajorAttackEvent> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new DDoSMajorAttackEvent();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeContentQuota response structure.
 * @class
 */
class DescribeContentQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purging quotas.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Quota> || null}
         */
        this.PurgeQuota = null;

        /**
         * Pre-warming quotas.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Quota> || null}
         */
        this.PrefetchQuota = null;

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

        if (params.PurgeQuota) {
            this.PurgeQuota = new Array();
            for (let z in params.PurgeQuota) {
                let obj = new Quota();
                obj.deserialize(params.PurgeQuota[z]);
                this.PurgeQuota.push(obj);
            }
        }

        if (params.PrefetchQuota) {
            this.PrefetchQuota = new Array();
            for (let z in params.PrefetchQuota) {
                let obj = new Quota();
                obj.deserialize(params.PrefetchQuota[z]);
                this.PrefetchQuota.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZoneSetting response structure.
 * @class
 */
class ModifyZoneSettingResponse extends  AbstractModel {
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
 * DownloadL7Logs response structure.
 * @class
 */
class DownloadL7LogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of L7 log data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<L7OfflineLog> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new L7OfflineLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * Start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Time granularity. Values:
<ul>
<li>`min`: One minute</li>
<li>`5min`: Five minutes</li>
<li>`hour`: One hour</li>
<li>`day`: One day</li>
</ul>
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Metric item. Values:
<ul>
<li>`acc_flux`: Content acceleration traffic;</li>
<li>`quic_request`: QUIC requests;</li>
<li>`sec_flux`: Security traffic;</li>
<li>`sec_request_clean`: Clean security requests.</li>
</ul>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Filter item. Values:
<ul>
<li>`zone`: Site;</li>
<li>`plan`: Service plan;</li>
<li>`service`: L4 or L7;</li>
<li>`tagKey`: Tag key;</li>
<li>`tagValue`: Tag value.</li>
</ul>
         * @type {Array.<BillingDataFilter> || null}
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new BillingDataFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * CreateDnsRecord response structure.
 * @class
 */
class CreateDnsRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DNS record ID.
         * @type {string || null}
         */
        this.DnsRecordId = null;

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
        this.DnsRecordId = 'DnsRecordId' in params ? params.DnsRecordId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Detailed data of time series type
 * @class
 */
class TimingTypeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sum.
         * @type {number || null}
         */
        this.Sum = null;

        /**
         * The maximum value.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * The average value.
         * @type {number || null}
         */
        this.Avg = null;

        /**
         * Metric name.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TimingDataItem> || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sum = 'Sum' in params ? params.Sum : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Avg = 'Avg' in params ? params.Avg : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new TimingDataItem();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

    }
}

/**
 * DNS data points
 * @class
 */
class DnsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * The time.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * The value.
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
 * HTTPS server certificate configuration
 * @class
 */
class ServerCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the server certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Alias of the certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Type of the certificate. Values:
<li>`default`: Default certificate;</lil>
<li>`upload`: Custom certificate;</li>
<li>`managed`: Tencent Cloud-managed certificate.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time when the certificate expires.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Time when the certificate is deployed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * Signature algorithm.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SignAlgo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.SignAlgo = 'SignAlgo' in params ? params.SignAlgo : null;

    }
}

/**
 * DescribeWebManagedRulesData response structure.
 * @class
 */
class DescribeWebManagedRulesDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of WAF attack data recorded over time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebManagedRulesLog response structure.
 * @class
 */
class DescribeWebManagedRulesLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of web log data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WebLogs> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new WebLogs();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 
 * @class
 */
class ClientIpCountry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 
         * @type {string || null}
         */
        this.HeaderName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;

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
         * ID of the site.
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
         * Whether to encode a URL according to RFC3986. Enable this field when the URL contains non-ASCII characters.
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
 * DescribeTopL7AnalysisData request structure.
 * @class
 */
class DescribeTopL7AnalysisDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The query metric. Values:
<li>`l7Flow_outFlux_country`: Country the request came from;</li>
<li>`l7Flow_outFlux_statusCode`: Status code of the request;</li>
<li>`l7Flow_outFlux_domain`: Domain name of the request;</li>
<li>`l7Flow_outFlux_url`: URL of the request;</li>
<li>`l7Flow_outFlux_resourceType`: Resource type;</li>
<li>`l7Flow_outFlux_sip`: Client IP;</li>
<li>`l7Flow_outFlux_referers`: Refer header;</li>
<li>`l7Flow_outFlux_ua_device`: Device type;</li>
<li>`l7Flow_outFlux_ua_browser`: Browser type;</li>
<li>`l7Flow_outFlux_us_os`: OS type;</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Queries the top n rows of data. Maximum value: 1000. Top 10 rows of data will be queried if this field is not specified.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`country`: Country/Region;</li>
<li>`domain`: Domain name;</li>
<li>`protocol`: Protocol type;</li>
<li>`resourceType`: Resource type;</li>
<li>`statusCode`: Status code;</li>
<li>`browserType`: Browser type;</li>
<li>`deviceType`: Device type;</li>
<li>`operatingSystemType`: OS type;</li>
<li>`tlsVersion`: TLS version;</li>
<li>`url`: URL address;</li>
<li>`referer`: Refer header;</li>
<li>`ipVersion`: IP version;</li>
<li>`tagKey`: Tag key;</li>
<li>`tagValue`: Tag value.</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 
 * @class
 */
class FileAscriptionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.IdentifyPath = null;

        /**
         * 
         * @type {string || null}
         */
        this.IdentifyContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentifyPath = 'IdentifyPath' in params ? params.IdentifyPath : null;
        this.IdentifyContent = 'IdentifyContent' in params ? params.IdentifyContent : null;

    }
}

/**
 * DescribeDDoSBlockList response structure.
 * @class
 */
class DescribeDDoSBlockListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The blocking time of a DDoS attack.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DDoSBlockData> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new DDoSBlockData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The site configuration.
 * @class
 */
class ZoneSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the site
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Site acceleration region. Values:
<li>`mainland`: Acceleration in the Chinese mainland.</li>
<li>`overseas`: Acceleration outside the Chinese mainland.</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Node cache key configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * The QUIC access configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * The POST transport configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PostMaxSize || null}
         */
        this.PostMaxSize = null;

        /**
         * Smart compression configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * HTTP2 origin-pull configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * Force HTTPS redirect configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Cache expiration time configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CacheConfig || null}
         */
        this.CacheConfig = null;

        /**
         * Origin server configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Smart acceleration configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * Browser cache configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * The offline cache configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * WebSocket configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * Origin-pull client IP header configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ClientIpHeader || null}
         */
        this.ClientIpHeader = null;

        /**
         * Cache prefresh configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CachePrefresh || null}
         */
        this.CachePrefresh = null;

        /**
         * IPv6 access configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * HTTPS acceleration configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 
         * @type {ClientIpCountry || null}
         */
        this.ClientIpCountry = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Quic) {
            let obj = new Quic();
            obj.deserialize(params.Quic)
            this.Quic = obj;
        }

        if (params.PostMaxSize) {
            let obj = new PostMaxSize();
            obj.deserialize(params.PostMaxSize)
            this.PostMaxSize = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.UpstreamHttp2) {
            let obj = new UpstreamHttp2();
            obj.deserialize(params.UpstreamHttp2)
            this.UpstreamHttp2 = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.CacheConfig) {
            let obj = new CacheConfig();
            obj.deserialize(params.CacheConfig)
            this.CacheConfig = obj;
        }

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.SmartRouting) {
            let obj = new SmartRouting();
            obj.deserialize(params.SmartRouting)
            this.SmartRouting = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.OfflineCache) {
            let obj = new OfflineCache();
            obj.deserialize(params.OfflineCache)
            this.OfflineCache = obj;
        }

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.ClientIpHeader) {
            let obj = new ClientIpHeader();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

        if (params.CachePrefresh) {
            let obj = new CachePrefresh();
            obj.deserialize(params.CachePrefresh)
            this.CachePrefresh = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.ClientIpCountry) {
            let obj = new ClientIpCountry();
            obj.deserialize(params.ClientIpCountry)
            this.ClientIpCountry = obj;
        }

    }
}

/**
 * The DDoS attacker information
 * @class
 */
class DDoSAttackSourceEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * The attacker IP.
         * @type {string || null}
         */
        this.AttackSourceIp = null;

        /**
         * The country or region.
         * @type {string || null}
         */
        this.AttackRegion = null;

        /**
         * The accumulative attack traffic.
         * @type {number || null}
         */
        this.AttackFlow = null;

        /**
         * The accumulative attack packets.
         * @type {number || null}
         */
        this.AttackPacketNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackSourceIp = 'AttackSourceIp' in params ? params.AttackSourceIp : null;
        this.AttackRegion = 'AttackRegion' in params ? params.AttackRegion : null;
        this.AttackFlow = 'AttackFlow' in params ? params.AttackFlow : null;
        this.AttackPacketNum = 'AttackPacketNum' in params ? params.AttackPacketNum : null;

    }
}

/**
 * ModifyRulePriority response structure.
 * @class
 */
class ModifyRulePriorityResponse extends  AbstractModel {
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
 * DescribeTopL7CacheData response structure.
 * @class
 */
class DescribeTopL7CacheDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of cached L7 top-ranked traffic data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopDataRecord> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new TopDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOverviewL7Data request structure.
 * @class
 */
class DescribeOverviewL7DataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The query metric. Values:
<li>`l7Flow_outFlux`: Access traffic;</li>
<li>`l7Flow_request`: Access requests;</li>
<li>`l7Flow_outBandwidth`: Access bandwidth.</li>
<li>`l7Flow_hit_outFlux`: Cache hit traffic.</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The protocol type. Values:
<li>`http`: HTTP protocol;</li>
<li>`https`: HTTPS protocol;</li>
<li>`http2`: HTTP2 protocol;</li>
<li>`all`: All protocol types.</li>This field will be set to the default value `all` if not specified.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`tagKey`:<br>   Filter by <strong>tag key</strong><br>   Type: String<br>   Required: No</li>
<li>`tagValue`<br>  Filter by <strong>tag value</strong><br>   Type: String<br>   Required: No</li>
         * @type {Array.<QueryCondition> || null}
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * IdentifyZone response structure.
 * @class
 */
class IdentifyZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ownership information.
         * @type {AscriptionInfo || null}
         */
        this.Ascription = null;

        /**
         * 
         * @type {FileAscriptionInfo || null}
         */
        this.FileAscription = null;

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

        if (params.Ascription) {
            let obj = new AscriptionInfo();
            obj.deserialize(params.Ascription)
            this.Ascription = obj;
        }

        if (params.FileAscription) {
            let obj = new FileAscriptionInfo();
            obj.deserialize(params.FileAscription)
            this.FileAscription = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WebSocket configuration
 * @class
 */
class WebSocket extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable WebSocket connection timeout. Values:
<li>`on`: The field "Timeout" can be configured.</li>
<li>`off`: The field "Timeout" is fixed to 15 seconds.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The timeout period in seconds. Maximum value: 120.
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
 * DeleteLogTopicTask request structure.
 * @class
 */
class DeleteLogTopicTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the shipping task to be deleted.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Region of the logset.
         * @type {string || null}
         */
        this.LogSetRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;

    }
}

/**
 * The blocking time of a DDoS attack
 * @class
 */
class DDoSBlockData extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time recorded in UNIX timestamp.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The start time recorded in UNIX timestamp.
         * @type {number || null}
         */
        this.EndTime = null;

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

    }
}

/**
 * Custom name servers
 * @class
 */
class VanityNameServers extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable custom name servers. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * List of custom name servers
         * @type {Array.<string> || null}
         */
        this.Servers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Servers = 'Servers' in params ? params.Servers : null;

    }
}

/**
 * DescribeDnssec request structure.
 * @class
 */
class DescribeDnssecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DeleteLogTopicTask response structure.
 * @class
 */
class DeleteLogTopicTaskResponse extends  AbstractModel {
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
 * DescribeWebManagedRulesData request structure.
 * @class
 */
class DescribeWebManagedRulesDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of statistical metric. Values:
<li>`waf_interceptNum`: Requests blocked by WAF.</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Detailed settings of the rule engine that can be used for request match, which are optional parameter configuration items.
 * @class
 */
class RuleChoicePropertiesItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The parameter name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The parameter value type.
<li>CHOICE: The parameter value can be selected only from `Values`.</li>
<li>TOGGLE: The parameter value is of switch type and can be selected from `ChoicesValue`.</li>
<li>CUSTOM_NUM: The parameter value is a custom integer.</li>
<li>CUSTOM_STRING: The parameter value is a custom string.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Valid parameter values.
Note: If `Type` is `CUSTOM_NUM` or `CUSTOM_STRING`, this parameter will be an empty array.
         * @type {Array.<string> || null}
         */
        this.ChoicesValue = null;

        /**
         * Minimum value. If both `Min` and `Max` are set to `0`, this parameter does not take effect.
         * @type {number || null}
         */
        this.Min = null;

        /**
         * Maximum value. If both `Min` and `Max` are set to `0`, this parameter does not take effect.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * Whether multiple values can be selected or entered.
         * @type {boolean || null}
         */
        this.IsMultiple = null;

        /**
         * Whether the parameter can be left empty.
         * @type {boolean || null}
         */
        this.IsAllowEmpty = null;

        /**
         * Special parameter.
<li>NULL: Select `NormalAction` for `RuleAction`. </li>
<li>If the member parameter `Id` is `Action`, select `RewirteAction` for `RuleAction`.</li>
<li>If the member parameter `Id` is `StatusCode`, select `CodeAction` for `RuleAction`.</li>
         * @type {RuleExtraParameter || null}
         */
        this.ExtraParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ChoicesValue = 'ChoicesValue' in params ? params.ChoicesValue : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.IsMultiple = 'IsMultiple' in params ? params.IsMultiple : null;
        this.IsAllowEmpty = 'IsAllowEmpty' in params ? params.IsAllowEmpty : null;

        if (params.ExtraParameter) {
            let obj = new RuleExtraParameter();
            obj.deserialize(params.ExtraParameter)
            this.ExtraParameter = obj;
        }

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
         * Start time of the query.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Offset for paginated queries. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: `20`. Maximum value: `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`zone-id`:<br>   Filter by the <strong>site ID</strong>, such as zone-1379afjk91u32h (up to one entry)<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported<li>`job-id`:<br>   Filter by <strong>task ID</strong>, such as 1379afjk91u32h (up to one entry)<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported<li>`target`:<br>   Filter by <strong>target resource</strong>, such as http://www.qq.com/1.txt (up to one entry)<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported<li>`domains`:<br>   Filter by <strong>domain name</strong>, such as www.qq.com<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported<li>`statuses`:<br>   Filter by <strong>task status</strong><br>   Required: No<br>   Fuzzy query: Not supported<br>   Values:<br>   `processing`: The task is in progress.<br>   `success`: The task succeeded.<br>   `failed`: The task failed.<br>   `timeout`: The task timed out.
         * @type {Array.<AdvancedFilter> || null}
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * Browser cache rule configuration, which is used to set the default value of `MaxAge` and is disabled by default.
 * @class
 */
class MaxAge extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to follow the origin server. Values:
<li>`on`: Follow the origin server and ignore the field MaxAgeTime;</li>
<li>`off`: Do not follow the origin server and apply the field MaxAgeTime.</li>
         * @type {string || null}
         */
        this.FollowOrigin = null;

        /**
         * Specifies the maximum amount of time (in seconds). The maximum value is 365 days.
Note: The value `0` means not to cache.
         * @type {number || null}
         */
        this.MaxAgeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;
        this.MaxAgeTime = 'MaxAgeTime' in params ? params.MaxAgeTime : null;

    }
}

/**
 * DescribeDDoSAttackSourceEvent response structure.
 * @class
 */
class DescribeDDoSAttackSourceEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of DDoS attacker data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DDoSAttackSourceEvent> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new DDoSAttackSourceEvent();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DNS record
 * @class
 */
class DnsRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * The record ID.
         * @type {string || null}
         */
        this.DnsRecordId = null;

        /**
         * The DNS record type. Values:
<li>`A`: Point a domain name to an IPv4 address, such as 8.8.8.8.</li>
<li>`AAAA`: Point a domain name to an IPv6 address.</li>
<li>`MX`: It is used for email servers. The record value and priority parameters are provided by email service providers. If there are multiple MX records, the lower the priority value, the higher the priority.</li>
<li>`CNAME`: Point a domain name to another domain name that can be resolved to an IP address.</li>
<li>`TXT`: Identify and describe a domain name. It is usually used for domain verification and as SPF records (for anti-spam).</li>
<li>`NS`: If you need to authorize a subdomain name to another DNS service provider for DNS resolution, you need to add an NS record. You cannot add an NS record for a root domain name.</li>
<li>`CAA`: Specify CAs to issue certificates for sites.</li>
<li>`SRV`: Identify a service used by a server. It is commonly used in Microsoft directory management.</li>
         * @type {string || null}
         */
        this.DnsRecordType = null;

        /**
         * The record name.
         * @type {string || null}
         */
        this.DnsRecordName = null;

        /**
         * The record value.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * The proxy mode. Values:
<li>`dns_only`: Only DNS</li>
<li>`proxied`: Proxied</li>
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * TTL (in seconds). The smaller the value, the faster the record changes take effect.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * The MX record priority. The smaller the value, the higher the priority.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * The modification time.
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * The lock status of the domain name.
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The site name.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * The DNS record status. Values:
<li>`active`: Activated</li>
<li>`pending`: Deactivated</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The CNAME address.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * The service used by the domain name. Values:
<li>`lb`: Load balancing</li>
<li>`security`: Security protection</li>
<li>`l4`: L4 proxy</li>
         * @type {Array.<string> || null}
         */
        this.DomainStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DnsRecordId = 'DnsRecordId' in params ? params.DnsRecordId : null;
        this.DnsRecordType = 'DnsRecordType' in params ? params.DnsRecordType : null;
        this.DnsRecordName = 'DnsRecordName' in params ? params.DnsRecordName : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;

    }
}

/**
 * ModifyRulePriority request structure.
 * @class
 */
class ModifyRulePriorityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Order of rule IDs. If there are multiple rules, they will be executed in order from top to bottom.
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;

    }
}

/**
 * DescribeDnsRecords request structure.
 * @class
 */
class DescribeDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID of the DNS record. All sites’ DNS records will be returned if this field is not specified.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`record-id`:<br>   Filter by <strong>DNS record ID</strong>, such as record-1a8df68z<br>   Type: String<br>Required: No
<li>`record-name`:<br>   Filter by <strong>DNS record name</strong><br>   Type: String<br>Required: No
<li>`record-type`:<br>   Filter by <strong>DNS record type</strong><br>   Type: String<br>Required: No<br>   Values:<br>   `A`: Point a domain name to an IPv4 address, such as 8.8.8.8.<br>   `AAAA`: Point a domain name to an IPv6 address.<br>   `CNAME`: Point a domain name to another domain name that can be resolved to an IP address.<br>   `TXT`: Identify and describe a domain name. It is usually used for domain verification and as SPF records (for anti-spam).<br>   `NS`: If you need to authorize a subdomain name to another DNS service provider for DNS resolution, you need to add an NS record. You cannot add an NS record for a root domain name.<br>   `CAA`: Specify CAs to issue certificates for sites.<br>   `SRV`: Identify a service used by a server. It is commonly used in Microsoft directory management.<br>  `MX`: Specify the mail server for receiving emails.
<li>`mode`:<br>   Filter by <strong>proxy mode</strong><br>   Type: String<br>Required: No<br>   Values:<br>   `dns_only`: Only DNS<br>   `proxied`: Proxied
<li>`ttl`:<br>   Filter by <strong>TTL</strong><br>   Type: String<br>Required: No
         * @type {Array.<AdvancedFilter> || null}
         */
        this.Filters = null;

        /**
         * The sorting order. Values:
<li>`ASC`: Ascending order</li>
<li>`desc`: Descending order</li> Default value: asc
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * The match mode. Values:
<li>`all`: Return all records that match the specified filter.</li>
<li>`any`: Return any record that matches the specified filter.</li>Default value: all.
         * @type {string || null}
         */
        this.Match = null;

        /**
         * The paginated query limit. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The sorting criteria. Values:
<li>`content`: DNS record content.</li>
<li>`created_on`: Creation time of the DNS record.</li>
<li>`mode`: Proxy mode.</li>
<li>`record-name`: DNS record name.</li>
<li>`ttl`: DNS TTL.</li>
<li>`record-type`: DNS record type.</li>If this field is not specified, the DNS records are sorted based on `record-type` and `recrod-name`.
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Match = 'Match' in params ? params.Match : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;

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
         * ID of the task.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * List of failed tasks.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * No-cache configuration
 * @class
 */
class NoCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable no-cache configuration. Valid values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeDefaultCertificates request structure.
 * @class
 */
class DescribeDefaultCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter criteria. Each filter criteria can have up to 5 entries.
<li>`zone-id`: <br>Filter by <strong>site ID</strong>. Format: zone-xxx
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset for paginated queries. Default value: `0`
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: `20`. Maximum value: `100`.
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeWebProtectionHitRuleDetail request structure.
 * @class
 */
class DescribeWebProtectionHitRuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The rule type. Values:
<li>`rate`: Rate limiting rules;</li>
<li>`acl`: Custom rules.</li>
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.EntityType = 'EntityType' in params ? params.EntityType : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DDoS mitigation configuration
 * @class
 */
class DDoS extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * CreateZone request structure.
 * @class
 */
class CreateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site name.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * The access mode. Values:
<li>`full`: Access through a name server.</li>
<li>`partial`: Access through a CNAME record.</li>This field will be set to the default value `full` if not specified.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Whether to skip scanning the existing DNS records of the site. Default value: false.
         * @type {boolean || null}
         */
        this.JumpStart = null;

        /**
         * The resource tag.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.JumpStart = 'JumpStart' in params ? params.JumpStart : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * EdgeOne plan information
 * @class
 */
class PlanInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Settlement currency. Values:
<li>`CNY`: Settled by Chinese RMB;</li>
<li>`USD`: Settled by US dollars.</li>
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Traffic quota of the plan. It includes the traffic for security acceleration, content acceleration and smart acceleration. Unit: byte.
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * Settlement cycle. Values:
<li>`y`: Settled by year;</li>
<li>`m`: Settled by month;</li>
<li>`h`: Settled by hour;</li>
<li>`M`: Settled by minute;</li>
<li>`s`: Settled by second.</li>
         * @type {string || null}
         */
        this.Frequency = null;

        /**
         * Plan option. Values:
<li>`sta`: Standard plan that supports content delivery network outside Chinese mainland;</li>
<li>`sta_with_bot`: Standard plan that supports content delivery network outside Chinese mainland and bot management;</li>
<li>`sta_cm`: Standard plan that supports content delivery network inside Chinese mainland;</li>
<li>`sta_cm_with_bot`: Standard plan that supports content delivery network inside Chinese mainland and bot management;</li>
<li>`ent`: Enterprise plan that supports content delivery network outside Chinese mainland;</li>
<li>`ent_with_bot`: Enterprise plan that supports content delivery network outside Chinese mainland and bot management;</li>
<li>`ent_cm`: Enterprise plan that supports content delivery network inside Chinese mainland;</li>
<li>`ent_cm_with_bot`: Enterprise plan that supports content delivery network inside Chinese mainland and bot management.</li>
         * @type {string || null}
         */
        this.PlanType = null;

        /**
         * Plan price (in CNY fen/US cent). The price unit depends on the settlement currency.
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Quota on security acceleration requests
         * @type {number || null}
         */
        this.Request = null;

        /**
         * Number of sites to be bound to the plan
         * @type {number || null}
         */
        this.SiteNumber = null;

        /**
         * Acceleration region. Values:
<li>`mainland`: Chinese mainland;</li>
<li>`overseas`: Global (Chinese mainland not included).</li>
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
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.Flux = 'Flux' in params ? params.Flux : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.PlanType = 'PlanType' in params ? params.PlanType : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Request = 'Request' in params ? params.Request : null;
        this.SiteNumber = 'SiteNumber' in params ? params.SiteNumber : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeTimingL7CacheData request structure.
 * @class
 */
class DescribeTimingL7CacheDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The query metric. Values:
<li>`l7Cache_outFlux`: Response traffic.</li>
<li>`l7Cache_request`: Response requests.</li>
<li>`l7Cache_outBandwidth`: Response bandwidth.</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`cacheType`: Cache type;</li>
<li>`domain`: Host/domain name;</li>
<li>`resourceType`: Resource type;</li>
<li>`url`: URL address;</li>
<li>`tagKey`: Tag key;</li>
<li>`tagValue`: Tag value.</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

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
         * ID of the task.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Status of the task.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Resource.
         * @type {string || null}
         */
        this.Target = null;

        /**
         * Type of the task.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Creation time of the task.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Completion time of the task.
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
 * N/A
 * @class
 */
class Waf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable WAF. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * ID of the policy
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * ModifyRule response structure.
 * @class
 */
class ModifyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckCertificate response structure.
 * @class
 */
class CheckCertificateResponse extends  AbstractModel {
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
 * The site ownership information
 * @class
 */
class AscriptionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * The record type.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * The record value.
         * @type {string || null}
         */
        this.RecordValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;

    }
}

/**
 * DescribeLogSets response structure.
 * @class
 */
class DescribeLogSetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of logsets.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LogSetInfo> || null}
         */
        this.LogSetList = null;

        /**
         * Total number of query results.
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

        if (params.LogSetList) {
            this.LogSetList = new Array();
            for (let z in params.LogSetList) {
                let obj = new LogSetInfo();
                obj.deserialize(params.LogSetList[z]);
                this.LogSetList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebProtectionData request structure.
 * @class
 */
class DescribeWebProtectionDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Metrics to query. Values:
<li>`ccRate_interceptNum`: Requests restricted by the rate limiting rules;</li>
<li>`ccAcl_interceptNum`: Requests restricted by the custom rules.</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * CheckCertificate request structure.
 * @class
 */
class CheckCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Content of the certificate.
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * Content of the private key.
         * @type {string || null}
         */
        this.PrivateKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;

    }
}

/**
 * DescribeDDoSAttackEvent response structure.
 * @class
 */
class DescribeDDoSAttackEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of DDoS attack data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DDoSAttackEvent> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new DDoSAttackEvent();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogTopicTaskDetail request structure.
 * @class
 */
class DescribeLogTopicTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the shipping task.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * Cache time settings
 * @class
 */
class Cache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable cache configuration. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Cache expiration time setting.
Unit: second. The maximum value is 365 days.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CacheTime = null;

        /**
         * Whether to enable force cache. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IgnoreCacheControl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;
        this.IgnoreCacheControl = 'IgnoreCacheControl' in params ? params.IgnoreCacheControl : null;

    }
}

/**
 * Force HTTPS redirect configuration
 * @class
 */
class ForceRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable force HTTPS redirect. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Redirect status code. Values:
<li>`301`: 301 redirect</li>
<li>`302`: 302 redirect</li>
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;

    }
}

/**
 * Rule engine action with a status code
 * @class
 */
class CodeAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Feature name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the feature name.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Operation parameter.
         * @type {Array.<RuleCodeActionParams> || null}
         */
        this.Parameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new RuleCodeActionParams();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }

    }
}

/**
 * DescribeBotHitRuleDetail request structure.
 * @class
 */
class DescribeBotHitRuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * CreateReplayTask request structure.
 * @class
 */
class CreateReplayTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of replay task IDs.
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeWebProtectionHitRuleDetail response structure.
 * @class
 */
class DescribeWebProtectionHitRuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of hit CC protection rules.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecHitRuleInfo> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new SecHitRuleInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The site verification information
 * @class
 */
class Identification extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site name.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * The verification status. Values:
<li>`pending`: The verification is ongoing.</li>
<li>`finished`: The verification completed.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The site ownership information.
         * @type {AscriptionInfo || null}
         */
        this.Ascription = null;

        /**
         * The NS record of the domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * 
         * @type {FileAscriptionInfo || null}
         */
        this.FileAscription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Ascription) {
            let obj = new AscriptionInfo();
            obj.deserialize(params.Ascription)
            this.Ascription = obj;
        }
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;

        if (params.FileAscription) {
            let obj = new FileAscriptionInfo();
            obj.deserialize(params.FileAscription)
            this.FileAscription = obj;
        }

    }
}

/**
 * DescribeDnsRecords response structure.
 * @class
 */
class DescribeDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of DNS records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of DNS records
         * @type {Array.<DnsRecord> || null}
         */
        this.DnsRecords = null;

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

        if (params.DnsRecords) {
            this.DnsRecords = new Array();
            for (let z in params.DnsRecords) {
                let obj = new DnsRecord();
                obj.deserialize(params.DnsRecords[z]);
                this.DnsRecords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSAttackData request structure.
 * @class
 */
class DescribeDDoSAttackDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of statistical metric. Values:
<li>`ddos_attackMaxBandwidth`: Peak attack bandwidth;</li>
<li>`ddos_attackMaxPackageRate`: Peak attack packet rate;</li>
<li>`ddos_attackBandwidth`: Attack bandwidth;</li>
<li>`ddos_attackPackageRate`: Attack packet rate.</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * The port number.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * The attack type. Values:
<li>`flood`: Flood;</li>
<li>`icmpFlood`: ICMP flood;</li>
<li>`all`: All attack types.</li>This field will be set to the default value `all` if not specified.
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * The list of DDoS policy IDs to be specified. All policies will be selected if this field is not specified.
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * The protocol type. Values:
<li>`tcp`: TCP protocol;</li>
<li>`udp`: UDP protocol;</li>
<li>`all`: All protocol types.</li>This field will be set to the default value `all` if not specified.
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Cache prefresh
 * @class
 */
class CachePrefresh extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable cache prefresh. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The cache prefresh percentage. Values: 1-99
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Percent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Percent = 'Percent' in params ? params.Percent : null;

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
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Start time of the query.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Offset for paginated queries. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: `20`. Maximum value: `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`job-id`:<br> Filter by the <strong>Task ID</strong>, such as 1379afjk91u32h. Only one ID can be specified.<br>Type: String<br>   Required: No<br>   Fuzzy query: Not supported<li>`target`:<br>   Filter by the <strong>resource address</strong>, such as http://www.qq.com/1.txt. Only one entry allowed.<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported<li>`domains`:<br>   Filter by the <strong>domain name</strong>, such as www.qq.com<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported<li>`statuses`:<br>   Filter by the <strong>task status</strong><br>   Required: No<br>   Fuzzy query: Not supported<br>   Values:<br>   `processing`: Tasks in progress<br>   `success`: Succeeded tasks<br>   `failed`: Failed tasks<br>   `timeout`: Timed-out tasks<li>`type`:<br>   Filter by the <strong>purging mode</strong>. Only one value allowed.<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported<br>   Values:<br>   `purge_url`: Purge URLs.<br>   `purge_prefix`: Purge prefixes.<br>   `purge_all`: Purge all caches.<br>   `purge_host`: Purge hostnames.
         * @type {Array.<AdvancedFilter> || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeWebProtectionClientIpList response structure.
 * @class
 */
class DescribeWebProtectionClientIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of CC attacker IPs.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecClientIp> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new SecClientIp();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTimingL7AnalysisData response structure.
 * @class
 */
class DescribeTimingL7AnalysisDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of L7 traffic data recorded over time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TimingDataRecord> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContentQuota request structure.
 * @class
 */
class DescribeContentQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeWebProtectionAttackEvents request structure.
 * @class
 */
class DescribeWebProtectionAttackEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Detailed settings of the rule engine that can be used for request match.
 * @class
 */
class RulesProperties extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Minimum value. If both `Min` and `Max` are set to `0`, this parameter does not take effect.
         * @type {number || null}
         */
        this.Min = null;

        /**
         * Valid parameter values.
Note: If `Type` is `CUSTOM_NUM` or `CUSTOM_STRING`, this parameter will be an empty array.
         * @type {Array.<string> || null}
         */
        this.ChoicesValue = null;

        /**
         * Parameter value type.
<li>`CHOICE`: The parameter value can be selected only from `ChoicesValue`.</li>
<li>`TOGGLE`: The parameter value is of switch type and can be selected from `ChoicesValue`.</li>
<li>`OBJECT`: The parameter value is of object type, and `ChoiceProperties` indicates the attributes associated with the object type.</li>
<li>`CUSTOM_NUM`: Custom integer</li>
<li>`CUSTOM_STRING`: Custom string.</li>Note: If `OBJECT` is selected, refer to [Example 2. Create a rule with parameters of OBJECT type](https://tcloud4api.woa.com/document/product/1657/79382?!preview&!document=1).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Maximum value. If both `Min` and `Max` are set to `0`, this parameter does not take effect.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * Whether multiple values can be selected or entered.
         * @type {boolean || null}
         */
        this.IsMultiple = null;

        /**
         * Whether the parameter can be left empty.
         * @type {boolean || null}
         */
        this.IsAllowEmpty = null;

        /**
         * Associated configuration parameters of this parameter, which are required for API call.
Note: This parameter will be an empty array if no special parameters are added as optional parameters.
         * @type {Array.<RuleChoicePropertiesItem> || null}
         */
        this.ChoiceProperties = null;

        /**
         * <li>NULL: No special parameters when `NormalAction` is selected for `RuleAction`.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RuleExtraParameter || null}
         */
        this.ExtraParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.ChoicesValue = 'ChoicesValue' in params ? params.ChoicesValue : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.IsMultiple = 'IsMultiple' in params ? params.IsMultiple : null;
        this.IsAllowEmpty = 'IsAllowEmpty' in params ? params.IsAllowEmpty : null;

        if (params.ChoiceProperties) {
            this.ChoiceProperties = new Array();
            for (let z in params.ChoiceProperties) {
                let obj = new RuleChoicePropertiesItem();
                obj.deserialize(params.ChoiceProperties[z]);
                this.ChoiceProperties.push(obj);
            }
        }

        if (params.ExtraParameter) {
            let obj = new RuleExtraParameter();
            obj.deserialize(params.ExtraParameter)
            this.ExtraParameter = obj;
        }

    }
}

/**
 * DescribeOverviewL7Data response structure.
 * @class
 */
class DescribeOverviewL7DataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of L7 traffic summary statistics recorded over time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TimingDataRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HSTS configuration
 * @class
 */
class Hsts extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the configuration. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The MaxAge value in seconds. Maximum value: `86400` (one day)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxAge = null;

        /**
         * Whether to contain subdomain names. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IncludeSubDomains = null;

        /**
         * Whether to enable preloading. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Preload = null;

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
        this.Preload = 'Preload' in params ? params.Preload : null;

    }
}

/**
 * Parameters of the action with the `StatusCode` field as the rule engine condition
 * @class
 */
class RuleCodeActionParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The status code.
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * The parameter name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the parameter name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The parameter value.
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * CreateRule request structure.
 * @class
 */
class CreateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The rule name (1 to 255 characters)
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule status. Values:
<li>`enable`: Enabled</li>
<li>`disable`: Disabled</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The rule content.
         * @type {Array.<Rule> || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new Rule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * ModifyZoneStatus request structure.
 * @class
 */
class ModifyZoneStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The site status. Values:
<li>`false`: Disabled</li>
<li>`true`: Enabled</li>
         * @type {boolean || null}
         */
        this.Paused = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Paused = 'Paused' in params ? params.Paused : null;

    }
}

/**
 * The Top-ranked data
 * @class
 */
class TopEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * The query dimension value.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The details.
         * @type {Array.<TopEntryValue> || null}
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
        this.Key = 'Key' in params ? params.Key : null;

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new TopEntryValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * Rule item of the rule engine. The items in the `Conditions` array are in `OR` relationship, and the items in the inner `Conditions` list are in `AND` relationship.
 * @class
 */
class Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Feature execution conditions.
Note: If any condition in the array is met, the feature will run.
         * @type {Array.<RuleAndConditions> || null}
         */
        this.Conditions = null;

        /**
         * Feature to be executed.
         * @type {Array.<Action> || null}
         */
        this.Actions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RuleAndConditions();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new Action();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }

    }
}

/**
 * Data items of the statistical curve
 * @class
 */
class TimingDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The query time recorded in seconds using UNIX timestamp.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * The value.
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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeLogTopicTaskDetail response structure.
 * @class
 */
class DescribeLogTopicTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The shipping task details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LogTopicDetailInfo || null}
         */
        this.LogTopicDetailInfo = null;

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

        if (params.LogTopicDetailInfo) {
            let obj = new LogTopicDetailInfo();
            obj.deserialize(params.LogTopicDetailInfo)
            this.LogTopicDetailInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDnsRecord response structure.
 * @class
 */
class ModifyDnsRecordResponse extends  AbstractModel {
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
 * DescribeLogSets request structure.
 * @class
 */
class DescribeLogSetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region of the logset.
         * @type {string || null}
         */
        this.LogSetRegion = null;

        /**
         * ID of the logset.
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * Name of the logset.
         * @type {string || null}
         */
        this.LogSetName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.LogSetName = 'LogSetName' in params ? params.LogSetName : null;

    }
}

/**
 * CreatePlanForZone request structure.
 * @class
 */
class CreatePlanForZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Plan options available for purchase. Values:
<li>`sta`: Standard plan for global areas except Chinese mainland;</li>
<li>`sta_with_bot`: Standard plan for global areas except Chinese mainland, with extra bot management;</li>
<li>`sta_cm`: Standard plan for Chinese mainland;</li>
<li>`sta_cm_with_bot`: Standard plan for Chinese mainland, with extra bot management;</li>
<li>`ent`: Enterprise plan for global areas except Chinese mainland;</li>
<li>`ent_with_bot`: Enterprise plan for global areas except Chinese mainland, with extra bot management;</li>
<li>`ent_cm`: Enterprise plan for Chinese mainland;</li>
<li>`ent_cm_with_bot`: Enterprise plan for Chinese mainland, with extra bot management.</li>To get the available plan options for your account, view the output from <a href="https://tcloud4api.woa.com/document/product/1657/80124?!preview&!document=1">DescribeAvailablePlans</a>.
         * @type {string || null}
         */
        this.PlanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PlanType = 'PlanType' in params ? params.PlanType : null;

    }
}

/**
 * The client rule information
 * @class
 */
class ClientRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The client IP.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * The rule type.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * The rule ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * The rule description.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The blocking status. Values:
<li>`block`: Block;</li>
<li>`allow`: Allow.</li>
         * @type {string || null}
         */
        this.IpStatus = null;

        /**
         * The blocking time recorded in UNIX timestamp.
         * @type {number || null}
         */
        this.BlockTime = null;

        /**
         * The data entry ID.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IpStatus = 'IpStatus' in params ? params.IpStatus : null;
        this.BlockTime = 'BlockTime' in params ? params.BlockTime : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * CC configuration item.
 * @class
 */
class CC extends  AbstractModel {
    constructor(){
        super();

        /**
         * WAF switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * ID of the policy
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * Maximum size of the file uploaded for streaming via a POST request
 * @class
 */
class PostMaxSize extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable POST upload limit (default limit: 32 MB). Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Maximum size. Value range: 1-500 MB.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * Pricing query parameter
 * @class
 */
class Sv extends  AbstractModel {
    constructor(){
        super();

        /**
         * The parameter key.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The parameter value.
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

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
         * Data of the sampling point
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DnsData> || null}
         */
        this.Data = null;

        /**
         * Time granularity of sampling
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Interval = null;

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
                let obj = new DnsData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLogSet response structure.
 * @class
 */
class CreateLogSetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the logset created.
         * @type {string || null}
         */
        this.LogSetId = null;

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
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Key-value pair filters for conditional filtering queries, such as filtering ID, name, and status.
If there are multiple filters, they’re combined with `AND`.
Values of the same Filter are combined with `OR`.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the field to filter.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value of the filtered field.
         * @type {Array.<string> || null}
         */
        this.Values = null;

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

    }
}

/**
 * DownloadL4Logs request structure.
 * @class
 */
class DownloadL4LogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of L4 proxy IDs.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeWebProtectionClientIpList request structure.
 * @class
 */
class DescribeWebProtectionClientIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeDnssec response structure.
 * @class
 */
class DescribeDnssecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DNSSEC status. Values:
<li>`enabled`: Enabled</li>
<li>`disabled`: Disabled</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The DNSSEC information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DnssecInfo || null}
         */
        this.DnssecInfo = null;

        /**
         * The update time of the site information.
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Status = 'Status' in params ? params.Status : null;

        if (params.DnssecInfo) {
            let obj = new DnssecInfo();
            obj.deserialize(params.DnssecInfo)
            this.DnssecInfo = obj;
        }
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateZone response structure.
 * @class
 */
class CreateZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZoneCnameSpeedUp request structure.
 * @class
 */
class ModifyZoneCnameSpeedUpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The CNAME acceleration status. Values:
<li>`enabled`: Enabled</li>
<li>`disabled`: Disabled</li>
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Rule engine feature operation. A feature can be of only one of the following three types, so each item in the `RuleAction` array can be of only one of the following types. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view more requirements for entering feature items.
 * @class
 */
class Action extends  AbstractModel {
    constructor(){
        super();

        /**
         * Common feature operation. Features of this type include:
<li>`AccessUrlRedirect`: Access URL rewrite.</li>
<li>`UpstreamUrlRedirect`: Origin-pull URL rewrite.</li>
<li>`QUIC`: QUIC.</li>
<li>`WebSocket`: WebSocket.</li>
<li>`VideoSeek`: Video dragging.</li>
<li>`Authentication`: Token authentication.</li>
<li>`CacheKey`: Custom cache key.</li>
<li>`Cache`: Node cache TTL.</li>
<li>`MaxAge`: Browser cache TTL.</li>
<li>`OfflineCache`: Offline cache.</li>
<li>`SmartRouting`: Smart acceleration.</li>
<li>`RangeOriginPull`: Range GETs.</li>
<li>`UpstreamHttp2`: HTTP/2 forwarding.</li>
<li>`HostHeader`: Host header rewrite.</li>
<li>`ForceRedirect`: Force HTTPS.</li>
<li>`OriginPullProtocol`: Origin-pull HTTPS.</li>
<li>`CachePrefresh`: Cache prefresh.</li>
<li>`Compression`: Smart compression.</li>
<li>`Hsts`.</li>
<li>`ClientIpHeader`.</li>
<li>`TlsVersion`.</li>
<li>`OcspStapling`.</li>
<li>`Http2`: HTTP/2 access.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NormalAction || null}
         */
        this.NormalAction = null;

        /**
         * Feature operation with a request/response header. Features of this type include:
<li>`RequestHeader`: HTTP request header modification.</li>
<li>`ResponseHeader`: HTTP response header modification.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RewriteAction || null}
         */
        this.RewriteAction = null;

        /**
         * Feature operation with a status code. Features of this type include:
<li>`ErrorPage`: Custom error page.</li>
<li>`StatusCodeCache`: Status code cache TTL.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CodeAction || null}
         */
        this.CodeAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NormalAction) {
            let obj = new NormalAction();
            obj.deserialize(params.NormalAction)
            this.NormalAction = obj;
        }

        if (params.RewriteAction) {
            let obj = new RewriteAction();
            obj.deserialize(params.RewriteAction)
            this.RewriteAction = obj;
        }

        if (params.CodeAction) {
            let obj = new CodeAction();
            obj.deserialize(params.CodeAction)
            this.CodeAction = obj;
        }

    }
}

/**
 * DescribeTimingL7AnalysisData request structure.
 * @class
 */
class DescribeTimingL7AnalysisDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The list of metrics. Values:
<li>`l7Flow_outFlux`: Access traffic;</li>
<li>`l7Flow_request`: Access requests;</li>
<li>`l7Flow_outBandwidth`: Access bandwidth.</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`country`: Country/Region;</li>
<li>`domain`: Domain name;</li>
<li>`protocol`: Protocol type;</li>
<li>`resourceType`: Resource type;</li>
<li>`statusCode`: Status code;</li>
<li>`browserType`: Browser type;</li>
<li>`deviceType`: Device type;</li>
<li>`operatingSystemType`: OS type;</li>
<li>`tlsVersion`: TLS version;</li>
<li>`url`: URL address;</li>
<li>`referer`: Refer header;</li>
<li>`ipVersion`: IP version;</li>
<li>`tagKey`: Tag key;</li>
<li>`tagValue`: Tag value.</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Details of the shipping task
 * @class
 */
class LogTopicDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the shipping task.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Region of the logset.
         * @type {string || null}
         */
        this.LogSetRegion = null;

        /**
         * Type of the shipping task.
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * List of tasks.
         * @type {Array.<string> || null}
         */
        this.EntityList = null;

        /**
         * ID of the logset.
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * Name of the logset.
         * @type {string || null}
         */
        this.LogSetName = null;

        /**
         * Topic ID of the shipping task.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic name of the shipping task.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Retention period of the shipping task topic. Unit: day.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether the shipping task is enabled.
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Creation time in the format of YYYY-mm-dd HH:MM:SS.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Acceleration region. Values:
<li>`mainland`: Chinese mainland;</li>
<li>`overseas`: Global (outside the Chinese mainland).</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * ID of the site.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Name of the site.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Whether the shipping task is deleted. Values:
<li>`yes`: The shipping task is deleted;</li>
<li>`no`: The shipping task is not deleted.</li>
         * @type {string || null}
         */
        this.Deleted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;
        this.EntityList = 'EntityList' in params ? params.EntityList : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.LogSetName = 'LogSetName' in params ? params.LogSetName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;

    }
}

/**
 * ModifyDnsRecord request structure.
 * @class
 */
class ModifyDnsRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The record ID.
         * @type {string || null}
         */
        this.DnsRecordId = null;

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The DNS record type. Values:
<li>`A`: Point a domain name to an IPv4 address, such as 8.8.8.8.</li>
<li>`AAAA`: Point a domain name to an IPv6 address.</li>
<li>`MX`: It is used for email servers. The record value and priority parameters are provided by email service providers. If there are multiple MX records, the lower the priority value, the higher the priority.</li>
<li>`CNAME`: Point a domain name to another domain name that can be resolved to an IP address.</li>
<li>`TXT`: Identify and describe a domain name. It is usually used for domain verification and as SPF records (for anti-spam).</li>
<li>`NS`: If you need to authorize a subdomain name to another DNS service provider for DNS resolution, you need to add an NS record. You cannot add an NS record for a root domain name.</li>
<li>`CAA`: Specify CAs to issue certificates for sites.</li>
<li>`SRV`: Identify a service used by a server. It is commonly used in Microsoft directory management.</li>
         * @type {string || null}
         */
        this.DnsRecordType = null;

        /**
         * The record name, which consists of the host record and site name. Note that the original configuration will be used if this field is not specified.
         * @type {string || null}
         */
        this.DnsRecordName = null;

        /**
         * The record content. Note that the original configuration will be used if this field is not specified.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * TTL (in seconds). The smaller the value, the faster the record changes take effect. Default value: 300. Note that the original configuration will be used if this field is not specified.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Specifies a value in the range 1–50 when you make changes to the MX records. A smaller value indicates higher priority. Note that the default value 0 will be used if this field is not specified.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * The proxy mode. Values:
<li>`dns_only`: Only DNS</li>
<li>`proxied`: Proxied</li></li>The original configuration will apply if this field is not specified.
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DnsRecordId = 'DnsRecordId' in params ? params.DnsRecordId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DnsRecordType = 'DnsRecordType' in params ? params.DnsRecordType : null;
        this.DnsRecordName = 'DnsRecordName' in params ? params.DnsRecordName : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * The security type setting item.
 * @class
 */
class SecurityType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the security type setting. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeDDoSBlockList request structure.
 * @class
 */
class DescribeDDoSBlockListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time of the attack event.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The list of attack events.
         * @type {Array.<string> || null}
         */
        this.EventIds = null;

        /**
         * Specifies sites by ID. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * The list of policy IDs to be specified. All policies will be selected if this field is not specified.
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.EventIds = 'EventIds' in params ? params.EventIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeDDoSMajorAttackEvent request structure.
 * @class
 */
class DescribeDDoSMajorAttackEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies sites by ID. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * The list of DDoS policy IDs to be specified. All policies will be selected if this field is not specified.
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * The protocol type. Values:
<li>`tcp`: TCP protocol;</li>
<li>`udp`: UDP protocol;</li>
<li>`all`: All protocol types.</li>This field will be set to the default value `all` if not specified.
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * A parameter that filters DNS data
 * @class
 */
class BillingDataFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name. Valid values:
`zone`: Site name
`host`: Domain name
`proxy`: L4 proxy
`plan`: Plan type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Parameter value
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeBotData response structure.
 * @class
 */
class DescribeBotDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of bot attack data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAddableEntityList request structure.
 * @class
 */
class DescribeAddableEntityListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Type of the shipping entity. Values:
<li>`domain`: L7 acceleration logs;</li>
<li>`application`: L4 acceleration logs;</li>
<li>`web-rateLiming`: Rate limiting logs;</li>
<li>`web-attack`: Web security logs;</li>
<li>`web-rule`: Custom rule logs;</li>
<li>`web-bot`: Bot management logs.</li>
         * @type {string || null}
         */
        this.EntityType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;

    }
}

/**
 * DescribeSingleL7AnalysisData response structure.
 * @class
 */
class DescribeSingleL7AnalysisDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of L7 dimensional data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SingleDataRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SingleDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Number of eligible sites.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of sites
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
 * List of rule engine conditions in `AND` relationship
 * @class
 */
class RuleAndConditions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule engine condition. This condition will be considered met if all items in the array are met.
         * @type {Array.<RuleCondition> || null}
         */
        this.Conditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RuleCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

    }
}

/**
 * Returned value of security data entry
 * @class
 */
class SecEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * The query dimension value.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The details.
         * @type {Array.<SecEntryValue> || null}
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
        this.Key = 'Key' in params ? params.Key : null;

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new SecEntryValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * DescribeIdentifications request structure.
 * @class
 */
class DescribeIdentificationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`zone-name`: <br>Filter by <strong>site name</strong><br>   Type: String<br>   Required: No
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The paginated query limit. Default value: 20. Maximum value: 1000.
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDefaultCertificates response structure.
 * @class
 */
class DescribeDefaultCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of certificates
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of default certificates
         * @type {Array.<DefaultServerCertInfo> || null}
         */
        this.DefaultServerCertInfo = null;

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

        if (params.DefaultServerCertInfo) {
            this.DefaultServerCertInfo = new Array();
            for (let z in params.DefaultServerCertInfo) {
                let obj = new DefaultServerCertInfo();
                obj.deserialize(params.DefaultServerCertInfo[z]);
                this.DefaultServerCertInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailablePlans response structure.
 * @class
 */
class DescribeAvailablePlansResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Plans available for the current user
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PlanInfo> || null}
         */
        this.PlanInfo = null;

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

        if (params.PlanInfo) {
            this.PlanInfo = new Array();
            for (let z in params.PlanInfo) {
                let obj = new PlanInfo();
                obj.deserialize(params.PlanInfo[z]);
                this.PlanInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyHostsCertificate response structure.
 * @class
 */
class ModifyHostsCertificateResponse extends  AbstractModel {
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
 * Acceleration type
 * @class
 */
class AccelerateType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Acceleration switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Common action of the rule engine
 * @class
 */
class NormalAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Feature name. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view the requirements for entering the feature name.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Parameter
         * @type {Array.<RuleNormalActionParams> || null}
         */
        this.Parameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new RuleNormalActionParams();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }

    }
}

/**
 * ReclaimZone request structure.
 * @class
 */
class ReclaimZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site name.
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * The origin cache configuration
 * @class
 */
class FollowOrigin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the configuration of following the origin server. Valid values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * CreateLogSet request structure.
 * @class
 */
class CreateLogSetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the logset.
         * @type {string || null}
         */
        this.LogSetName = null;

        /**
         * Region of the logset.
         * @type {string || null}
         */
        this.LogSetRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogSetName = 'LogSetName' in params ? params.LogSetName : null;
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;

    }
}

/**
 * DeleteZone request structure.
 * @class
 */
class DeleteZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * The hit rule information
 * @class
 */
class SecHitRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * The rule type.
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * Action. Values:
<li>`trans`: Allow;</li>
<li>`alg`: Algorithm challenge;</li>
<li>`drop`: Discard;</li>
<li>`ban`: Block the source IP;</li>
<li>`redirect`: Redirect;</li>
<li>`page`: Return to the specified page;</li>
<li>`monitor`: Observe.</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The hit time recorded in seconds using UNIX timestamp.
         * @type {number || null}
         */
        this.HitTime = null;

        /**
         * The number of requests.
         * @type {number || null}
         */
        this.RequestNum = null;

        /**
         * The rule description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The subdomain name.
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.HitTime = 'HitTime' in params ? params.HitTime : null;
        this.RequestNum = 'RequestNum' in params ? params.RequestNum : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * ModifyDefaultCertificate response structure.
 * @class
 */
class ModifyDefaultCertificateResponse extends  AbstractModel {
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
 * The top-ranked data details
 * @class
 */
class TopDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * The field name.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The field value.
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeZoneSetting response structure.
 * @class
 */
class DescribeZoneSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ZoneSetting || null}
         */
        this.ZoneSetting = null;

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

        if (params.ZoneSetting) {
            let obj = new ZoneSetting();
            obj.deserialize(params.ZoneSetting)
            this.ZoneSetting = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBotLog request structure.
 * @class
 */
class DescribeBotLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`action`: The action;</li>
<li>`sipCountryCode`: The country code of the attacker IP;</li>
<li>`attackIp`: Attacker IP;</li>
<li>`ruleId`: Rule ID;</li>
<li>`eventId`: The event ID;</li>
<li>`ua`: User agent;</li>
<li>`requestMethod`: Request method;</li>
<li>`uri`: Uniform resource identifier.</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * The L7 log details
 * @class
 */
class L4OfflineLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time of the log packaging.
         * @type {number || null}
         */
        this.LogTime = null;

        /**
         * The L4 proxy ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * The log size, in bytes.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * The download address.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The log package name.
         * @type {string || null}
         */
        this.LogPacketName = null;

        /**
         * The acceleration region. Values:
<li>`mainland`: Chinese mainland;</li>
<li>`overseas`: Global (outside the Chinese mainland);</li>
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
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LogPacketName = 'LogPacketName' in params ? params.LogPacketName : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * CreateLogTopicTask request structure.
 * @class
 */
class CreateLogTopicTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the logset.
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * Region of the logset.
         * @type {string || null}
         */
        this.LogSetRegion = null;

        /**
         * Topic name of the logset.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Name of the shipping task.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Name of the site.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Type of the shipping entity. Values:
<li>`domain`: L7 acceleration logs;</li>
<li>`application`: L4 acceleration logs;</li>
<li>`web-rateLiming`: Rate limiting logs;</li>
<li>`web-attack`: Web security logs;</li>
<li>`web-rule`: Custom rule logs;</li>
<li>`web-bot`: Bot management logs.</li>
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * Retention period of the log topic. Value range: 1–366 (in days).
         * @type {number || null}
         */
        this.Period = null;

        /**
         * List of shipping entities.
         * @type {Array.<string> || null}
         */
        this.EntityList = null;

        /**
         * Acceleration region. Values:
<li>`mainland`: Chinese mainland.</li>
<li>`overseas`: Global (outside the Chinese mainland).</li> If this field is not specified, the acceleration region will be determined based on the user’s region.
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
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.EntityList = 'EntityList' in params ? params.EntityList : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DeleteRules response structure.
 * @class
 */
class DeleteRulesResponse extends  AbstractModel {
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
 * The query condition
 * @class
 */
class QueryCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * The key of QueryCondition.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The conditional operator. Values:
<li>`equals`: Equal to;</li>
<li>`notEquals`: Not equal to;</li>
<li>`include`: Contain;</li>
<li>`notInclude`: Not contain;</li>
<li>`startWith`: Start with;</li>
<li>`notStartWith`: Not start with;</li>
<li>`endWith`: End with;</li>
<li>`notEndWith`: Not end with.</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * The value of QueryCondition.
         * @type {Array.<string> || null}
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeWebProtectionData response structure.
 * @class
 */
class DescribeWebProtectionDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of CC protection data recorded over time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cache rule configuration.
 * @class
 */
class CacheConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * No-cache configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NoCache || null}
         */
        this.NoCache = null;

        /**
         * Follows the origin server configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FollowOrigin || null}
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

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.NoCache) {
            let obj = new NoCache();
            obj.deserialize(params.NoCache)
            this.NoCache = obj;
        }

        if (params.FollowOrigin) {
            let obj = new FollowOrigin();
            obj.deserialize(params.FollowOrigin)
            this.FollowOrigin = obj;
        }

    }
}

/**
 * DescribeRulesSetting response structure.
 * @class
 */
class DescribeRulesSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the settings of the rule engine that can be used for request match and their detailed recommended configuration information.
         * @type {Array.<RulesSettingAction> || null}
         */
        this.Actions = null;

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

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new RulesSettingAction();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CC block event
 * @class
 */
class CCInterceptEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * The client IP.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * The requests per minute that are blocked.
         * @type {number || null}
         */
        this.InterceptNum = null;

        /**
         * Block time in seconds.
         * @type {number || null}
         */
        this.InterceptTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.InterceptNum = 'InterceptNum' in params ? params.InterceptNum : null;
        this.InterceptTime = 'InterceptTime' in params ? params.InterceptTime : null;

    }
}

/**
 * ModifyZoneCnameSpeedUp response structure.
 * @class
 */
class ModifyZoneCnameSpeedUpResponse extends  AbstractModel {
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
 * Failure reason
 * @class
 */
class FailReason extends  AbstractModel {
    constructor(){
        super();

        /**
         * Failure reason.
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
 * DescribeRulesSetting request structure.
 * @class
 */
class DescribeRulesSettingRequest extends  AbstractModel {
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
 * DescribeBotClientIpList response structure.
 * @class
 */
class DescribeBotClientIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of client IP data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecClientIp> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new SecClientIp();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDnsRecords request structure.
 * @class
 */
class DeleteDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID of the DNS record to be deleted.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The ID of the DNS record to be deleted.
         * @type {Array.<string> || null}
         */
        this.DnsRecordIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DnsRecordIds = 'DnsRecordIds' in params ? params.DnsRecordIds : null;

    }
}

/**
 * ModifyHostsCertificate request structure.
 * @class
 */
class ModifyHostsCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of domain names that the certificate will be attached to.
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * Certificate information. Note that only `CertId` is required. If it is not specified, the default certificate will be used.
         * @type {Array.<ServerCertInfo> || null}
         */
        this.ServerCertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;

        if (params.ServerCertInfo) {
            this.ServerCertInfo = new Array();
            for (let z in params.ServerCertInfo) {
                let obj = new ServerCertInfo();
                obj.deserialize(params.ServerCertInfo[z]);
                this.ServerCertInfo.push(obj);
            }
        }

    }
}

/**
 * The large DDoS attack event
 * @class
 */
class DDoSMajorAttackEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DDoS policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * The maximum attack bandwidth.
         * @type {number || null}
         */
        this.AttackMaxBandWidth = null;

        /**
         * The attack time recorded in seconds using UNIX timestamp.
         * @type {number || null}
         */
        this.AttackTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttackMaxBandWidth = 'AttackMaxBandWidth' in params ? params.AttackMaxBandWidth : null;
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;

    }
}

/**
 * DescribeDnsData request structure.
 * @class
 */
class DescribeDnsDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`zone`:<br>   Filter by <strong>site name</strong>, such as tencent.com (up to one entry)<br>   Type: String<br>   Required: No
<li>`host`:<br>   Filter by <strong>domain name</strong>, such as test.tencent.com (up to one entry)<br>   Type: String<br>   Required: No
<li>`type`:<br>   Filter by <strong>DNS record type</strong><br>   Type: String<br>   Required: No<br>   Values:<br>   `A`: A record<br>   `AAAA`: AAAA record<br>   `CNAME`: CNAME record<br>   `MX`: MX record<br>   `TXT`: TXT record<br>   `NS`: NS record<br>   `SRV`: SRV record<br>   `CAA`: CAA record
<li>`code`:<br>   Filter by <strong>DNS status code</strong><br>   Type: String<br>   Required: No<br>   Values:<br>   `NoError`: Success<br>   `NXDomain`: Not found the request domain<br>   `NotImp`: Not supported request type<br>   `Refused`: The domain name server refuses to execute the request for policy reasons
<li>`area`:<br>   Filter by <strong>DNS region</strong><br>   Type: String<br>   Required: No<br>   Values:<br>   `Asia`<br>   `Europe`<br>   `Africa`<br>   `Oceania`<br>   `Americas`
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>This field will be set to the default value `min` if not specified.
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * DescribeWebProtectionAttackEvents response structure.
 * @class
 */
class DescribeWebProtectionAttackEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of CC attack events.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CCInterceptEvent> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new CCInterceptEvent();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Tag configuration
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * The tag key.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * The tag value.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * CreatePurgeTask request structure.
 * @class
 */
class CreatePurgeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Purging mode. Values:
<li>`purge_url`: Purge URLs;</li>
<li>`purge_prefix`: Purge prefixes;</li>
<li>`purge_host`: Purge hostnames;</li>
<li>`purge_all`: Purge all caches.</li>
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
 * Billable resource
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * The resource ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Billing mode
`0`: Pay-as-you-go
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The effective time.
         * @type {string || null}
         */
        this.EnableTime = null;

        /**
         * The expiration time.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * The plan status. Values:
<li>`normal`: Normal</li>
<li>`isolated`: Isolated</li>
<li>`destroyed`: Terminated</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Pricing query parameter
         * @type {Array.<Sv> || null}
         */
        this.Sv = null;

        /**
         * Whether to enable auto-renewal. Values:
<li>`0`: Default status.</li>
<li>`1`: Enable auto-renewal.</li>
<li>`2`: Disable auto-renewal.</li>
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * ID of the resource associated with the plan.
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * The region. Values:
<li>`mainland`: Chinese mainland.</li>
<li>`overseas`: Outside the Chinese mainland.</li>
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
        this.Id = 'Id' in params ? params.Id : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EnableTime = 'EnableTime' in params ? params.EnableTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Sv) {
            this.Sv = new Array();
            for (let z in params.Sv) {
                let obj = new Sv();
                obj.deserialize(params.Sv[z]);
                this.Sv.push(obj);
            }
        }
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DeleteDnsRecords response structure.
 * @class
 */
class DeleteDnsRecordsResponse extends  AbstractModel {
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
 * Purging/Pre-warming available usage and quota
 * @class
 */
class Quota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {number || null}
         */
        this.Batch = null;

        /**
         * Daily submission quota limit.
         * @type {number || null}
         */
        this.Daily = null;

        /**
         * Remaining daily submission quota.
         * @type {number || null}
         */
        this.DailyAvailable = null;

        /**
         * Quota type. Values:
<li>`purge_prefix`: Purge prefixes;</li>
<li>`purge_url`: Purge URLs;</li>
<li>`purge_host`: Purge hostnames;</li>
<li>`purge_all`: Purge all caches.</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Batch = 'Batch' in params ? params.Batch : null;
        this.Daily = 'Daily' in params ? params.Daily : null;
        this.DailyAvailable = 'DailyAvailable' in params ? params.DailyAvailable : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * The top-ranked data record
 * @class
 */
class TopDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * The query dimension value.
         * @type {string || null}
         */
        this.TypeKey = null;

        /**
         * Top data rankings
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
        this.TypeKey = 'TypeKey' in params ? params.TypeKey : null;

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
 * DescribeHostsSetting request structure.
 * @class
 */
class DescribeHostsSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Offset for paginated queries. Default value: 0. Minimum value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: 100. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`host`:<br>   Filter by <strong>domain name </strong><br>   Type: String<br>   Required: No
         * @type {Array.<Filter> || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeWebManagedRulesLog request structure.
 * @class
 */
class DescribeWebManagedRulesLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`attackType`: Attack type;</li>
<li>`riskLevel`: Risk level;</li>
<li>`action`: Action;</li>
<li>`ruleId`: Rule ID;</li>
<li>`sipCountryCode`: Country code of the attacker IP;</li>
<li>`attackIp`: Attacker IP;</li>
<li>`oriDomain`: Attacked subdomain name;</li>
<li>`eventId`: Event ID;</li>
<li>`ua`: User agent;</li>
<li>`requestMethod`: Request method;</li>
<li>`uri`: Uniform resource identifier.</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeBotHitRuleDetail response structure.
 * @class
 */
class DescribeBotHitRuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The hit rule information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecHitRuleInfo> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new SecHitRuleInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLogTopicTask request structure.
 * @class
 */
class ModifyLogTopicTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Region of the logset.
         * @type {string || null}
         */
        this.LogSetRegion = null;

        /**
         * ID of the logset.
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * ID of the log topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Type of the shipping entity. Values:
<li>`domain`: L7 acceleration logs;</li>
<li>`application`: L4 acceleration logs;</li>
<li>`web-rateLiming`: Rate limiting logs;</li>
<li>`web-attack`: Web security logs;</li>
<li>`web-rule`: Custom rule logs;</li>
<li>`web-bot`: Bot management logs.</li>
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * Name of the shipping task.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * The new topic name. If you do not specify this field, no changes will be made.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * The new logset name.
         * @type {string || null}
         */
        this.LogSetName = null;

        /**
         * The retention period of the updated logset.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * List of shipping entities to be deleted.
         * @type {Array.<string> || null}
         */
        this.DropEntityList = null;

        /**
         * List of shipping entities to be added.
         * @type {Array.<string> || null}
         */
        this.AddedEntityList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.LogSetName = 'LogSetName' in params ? params.LogSetName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.DropEntityList = 'DropEntityList' in params ? params.DropEntityList : null;
        this.AddedEntityList = 'AddedEntityList' in params ? params.AddedEntityList : null;

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
         * Total entries that match the specified query condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of tasks returned.
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
 * Rule details of the rule engine
 * @class
 */
class RuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rule ID.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * The rule name. It is a string that can contain 1–255 characters.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule status. Values:
<li>`enable`: Enabled</li>
<li>`disable`: Disabled</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The rule content.
         * @type {Array.<Rule> || null}
         */
        this.Rules = null;

        /**
         * The rule priority. The greater the value, the higher the priority. The minimum value is `1`.
         * @type {number || null}
         */
        this.RulePriority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new Rule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;

    }
}

/**
 * DescribeDDoSAttackEventDetail request structure.
 * @class
 */
class DescribeDDoSAttackEventDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The event ID to be queried.
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeDDoSAttackEvent request structure.
 * @class
 */
class DescribeDDoSAttackEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The protocol type. Values:
<li>`tcp`: TCP protocol;</li>
<li>`udp`: UDP protocol;</li>
<li>`all`: All protocol types.</li>This field will be set to the default value `all` if not specified.
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * The list of DDoS policy IDs to be specified. All policies will be selected if this field is not specified.
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether to display the details.
         * @type {boolean || null}
         */
        this.ShowDetail = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ShowDetail = 'ShowDetail' in params ? params.ShowDetail : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeWebProtectionTopData response structure.
 * @class
 */
class DescribeWebProtectionTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of top-ranked CC protection data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopEntry> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new TopEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP information of the custom name server
 * @class
 */
class VanityNameServersIps extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom name of the name server
         * @type {string || null}
         */
        this.Name = null;

        /**
         * IPv4 address of the custom name server
         * @type {string || null}
         */
        this.IPv4 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IPv4 = 'IPv4' in params ? params.IPv4 : null;

    }
}

/**
 * DescribeWebManagedRulesHitRuleDetail response structure.
 * @class
 */
class DescribeWebManagedRulesHitRuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The hit rule information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecHitRuleInfo> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new SecHitRuleInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBotLog response structure.
 * @class
 */
class DescribeBotLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of bot attack data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BotLog> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new BotLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IdentifyZone request structure.
 * @class
 */
class IdentifyZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site name.
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * ModifyDnssec response structure.
 * @class
 */
class ModifyDnssecResponse extends  AbstractModel {
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
 * Web attack log
 * @class
 */
class WebLogs extends  AbstractModel {
    constructor(){
        super();

        /**
         * The attack event ID.
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * The attacker IP.
         * @type {string || null}
         */
        this.AttackIp = null;

        /**
         * The attacked subdomain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The HTTP log content.
         * @type {string || null}
         */
        this.HttpLog = null;

        /**
         * The country code of the attacker IP, which is defined in ISO-3166 alpha-2. For the list of country codes, see [ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json).
         * @type {string || null}
         */
        this.SipCountryCode = null;

        /**
         * The attack time recorded in seconds using UNIX timestamp.
         * @type {number || null}
         */
        this.AttackTime = null;

        /**
         * The request address.
         * @type {string || null}
         */
        this.RequestUri = null;

        /**
         * The attack content.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackContent = null;

        /**
         * The security rule information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecRuleRelatedInfo> || null}
         */
        this.RuleDetailList = null;

        /**
         * The request type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReqMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.AttackIp = 'AttackIp' in params ? params.AttackIp : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.HttpLog = 'HttpLog' in params ? params.HttpLog : null;
        this.SipCountryCode = 'SipCountryCode' in params ? params.SipCountryCode : null;
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;
        this.RequestUri = 'RequestUri' in params ? params.RequestUri : null;
        this.AttackContent = 'AttackContent' in params ? params.AttackContent : null;

        if (params.RuleDetailList) {
            this.RuleDetailList = new Array();
            for (let z in params.RuleDetailList) {
                let obj = new SecRuleRelatedInfo();
                obj.deserialize(params.RuleDetailList[z]);
                this.RuleDetailList.push(obj);
            }
        }
        this.ReqMethod = 'ReqMethod' in params ? params.ReqMethod : null;

    }
}

/**
 * SwitchLogTopicTask response structure.
 * @class
 */
class SwitchLogTopicTaskResponse extends  AbstractModel {
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
 * Request parameter contained in `CacheKey`
 * @class
 */
class QueryString extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to use `QueryString` as part of `CacheKey`. Values:
<li>`on`: Yes</li>
<li>`off`: No</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Specifies how to use query strings in the cache key. Values:
<li>`includeCustom`: `Include partial query strings.</li>
<li>`excludeCustom`: Exclude partial query strings.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Array of query strings used/excluded
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * HTTPS server certificate configuration
 * @class
 */
class DefaultServerCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the server certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Alias of the certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Type of the certificate. Values:
<li>`default`: Default certificate;</li>
<li>`upload`: Custom certificate;</li>
<li>`managed`: Tencent Cloud-managed certificate.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time when the certificate expires.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Time when the certificate takes effect.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * Common name of the certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CommonName = null;

        /**
         * Domain names added to the SAN certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * Deployment status. Values:
<li>`processing`: Deployment in progress;</li>
<li>`deployed`: Deployed.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Failure description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 
         * @type {string || null}
         */
        this.SignAlgo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.CommonName = 'CommonName' in params ? params.CommonName : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.SignAlgo = 'SignAlgo' in params ? params.SignAlgo : null;

    }
}

/**
 * DNSSEC information
 * @class
 */
class DnssecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flag
         * @type {number || null}
         */
        this.Flags = null;

        /**
         * Encryption algorithm
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * Encryption type
         * @type {string || null}
         */
        this.KeyType = null;

        /**
         * Digest type
         * @type {string || null}
         */
        this.DigestType = null;

        /**
         * Digest algorithm
         * @type {string || null}
         */
        this.DigestAlgorithm = null;

        /**
         * Digest message
         * @type {string || null}
         */
        this.Digest = null;

        /**
         * DS record value
         * @type {string || null}
         */
        this.DS = null;

        /**
         * Key tag
         * @type {number || null}
         */
        this.KeyTag = null;

        /**
         * Public key
         * @type {string || null}
         */
        this.PublicKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flags = 'Flags' in params ? params.Flags : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.KeyType = 'KeyType' in params ? params.KeyType : null;
        this.DigestType = 'DigestType' in params ? params.DigestType : null;
        this.DigestAlgorithm = 'DigestAlgorithm' in params ? params.DigestAlgorithm : null;
        this.Digest = 'Digest' in params ? params.Digest : null;
        this.DS = 'DS' in params ? params.DS : null;
        this.KeyTag = 'KeyTag' in params ? params.KeyTag : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;

    }
}

/**
 * HTTP2 origin-pull configuration
 * @class
 */
class UpstreamHttp2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable HTTP2 origin-pull. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * The top-ranked data
 * @class
 */
class TopEntryValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * The item name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The number of items.
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * Offline cache feature status switch.
 * @class
 */
class OfflineCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether offline cache is enabled. Valid values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeDDoSAttackTopData response structure.
 * @class
 */
class DescribeDDoSAttackTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of top-ranked DDoS attack data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopEntry> || null}
         */
        this.Data = null;

        /**
         * Total number of query results.
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
                let obj = new TopEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTimingL4Data request structure.
 * @class
 */
class DescribeTimingL4DataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Metric to query. Values:
<li>`l4Flow_connections`: Access connections;</li>
<li>`l4Flow_flux`: Access traffic;</li>
<li>`l4Flow_inFlux`: Inbound traffic;</li>
<li>`l4Flow_outFlux`: Outbound traffic;</li>
<li>`l4Flow_outPkt`: Outbound packets.</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of L4 proxy IDs. All L4 proxies will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * The query time granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minute;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the interval between the start time and end time as follows: 1-minute granularity applies for a 1-hour interval, 5-minute granularity for a 2-day interval, 1-hour granularity for a 7-day interval, and 1-day granularity for an interval of over 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The key of the parameter QueryCondition, which is used to specify a filter. Values:
<li>`ruleId`: Filter by rule ID;</li>
<li>`proxyId`: Filter by connection ID.</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * Data storage region. Values:
<li>`overseas`: Global (outside the Chinese mainland);</li>
<li>`mainland`: Chinese mainland.</li>If this field is not specified, the data storage region will be determined based on the user’s location.
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * CC/WAF/Bot security rule information
 * @class
 */
class SecRuleRelatedInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Action. Values:
<li>`trans`: Allow;</li>
<li>`alg`: Algorithm challenge;</li>
<li>`drop`: Discard;</li>
<li>`ban`: Block the source IP;</li>
<li>`redirect`: Redirect;</li>
<li>`page`: Return to the specified page;</li>
<li>`monitor`: Observe.</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Risk level (only found in WAF logs). Values:
<li>`high risk`: High risk;</li>
<li>`middle risk`: Middle risk;</li>
<li>`low risk`: Low risk;</li>
<li>`unkonw`: Unknown.</li>
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * Rule level. Values:
<li>`normal`: Moderate.</li>
         * @type {string || null}
         */
        this.RuleLevel = null;

        /**
         * Rule description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The rule type.
         * @type {string || null}
         */
        this.RuleTypeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RuleLevel = 'RuleLevel' in params ? params.RuleLevel : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;

    }
}

/**
 * DescribeTimingL4Data response structure.
 * @class
 */
class DescribeTimingL4DataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of L4 traffic data recorded over time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TimingDataRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogTopicTasks response structure.
 * @class
 */
class DescribeLogTopicTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of shipping tasks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClsLogTopicInfo> || null}
         */
        this.TopicList = null;

        /**
         * Total number of query results.
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

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new ClsLogTopicInfo();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReplayTask response structure.
 * @class
 */
class CreateReplayTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the task.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * List of failed tasks and reasons.
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

module.exports = {
    CreatePlanForZoneResponse: CreatePlanForZoneResponse,
    DescribeTimingL7CacheDataResponse: DescribeTimingL7CacheDataResponse,
    Compression: Compression,
    DeleteRulesRequest: DeleteRulesRequest,
    DescribeDDoSAttackEventDetailResponse: DescribeDDoSAttackEventDetailResponse,
    ModifyDefaultCertificateRequest: ModifyDefaultCertificateRequest,
    ModifyZoneResponse: ModifyZoneResponse,
    SecClientIp: SecClientIp,
    DescribeTopL7CacheDataRequest: DescribeTopL7CacheDataRequest,
    SingleTypeValue: SingleTypeValue,
    CreateCredentialResponse: CreateCredentialResponse,
    Https: Https,
    SecEntryValue: SecEntryValue,
    SwitchLogTopicTaskRequest: SwitchLogTopicTaskRequest,
    DescribeZonesRequest: DescribeZonesRequest,
    DescribeLogTopicTasksRequest: DescribeLogTopicTasksRequest,
    CreateCredentialRequest: CreateCredentialRequest,
    ModifyRuleRequest: ModifyRuleRequest,
    DescribePrefetchTasksResponse: DescribePrefetchTasksResponse,
    DescribeWebManagedRulesHitRuleDetailRequest: DescribeWebManagedRulesHitRuleDetailRequest,
    AdvancedFilter: AdvancedFilter,
    DescribeClientRuleListResponse: DescribeClientRuleListResponse,
    DescribeDDoSAttackDataResponse: DescribeDDoSAttackDataResponse,
    ReclaimZoneResponse: ReclaimZoneResponse,
    DescribeZoneSettingRequest: DescribeZoneSettingRequest,
    ModifyZoneSettingRequest: ModifyZoneSettingRequest,
    RuleCondition: RuleCondition,
    DescribeAddableEntityListResponse: DescribeAddableEntityListResponse,
    LogSetInfo: LogSetInfo,
    DescribeClientRuleListRequest: DescribeClientRuleListRequest,
    DescribeBotDataRequest: DescribeBotDataRequest,
    RuleRewriteActionParams: RuleRewriteActionParams,
    ModifyZoneRequest: ModifyZoneRequest,
    Origin: Origin,
    SingleDataRecord: SingleDataRecord,
    DescribeWebProtectionTopDataRequest: DescribeWebProtectionTopDataRequest,
    BotLog: BotLog,
    DescribeAvailablePlansRequest: DescribeAvailablePlansRequest,
    DescribeSingleL7AnalysisDataRequest: DescribeSingleL7AnalysisDataRequest,
    CacheKey: CacheKey,
    DescribeHostsSettingResponse: DescribeHostsSettingResponse,
    ModifyZoneStatusResponse: ModifyZoneStatusResponse,
    DescribeBotTopDataRequest: DescribeBotTopDataRequest,
    DeleteZoneResponse: DeleteZoneResponse,
    CreateRuleResponse: CreateRuleResponse,
    DescribeIdentificationsResponse: DescribeIdentificationsResponse,
    TimingDataRecord: TimingDataRecord,
    CreatePurgeTaskResponse: CreatePurgeTaskResponse,
    ModifyDnssecRequest: ModifyDnssecRequest,
    DescribeRulesResponse: DescribeRulesResponse,
    DownloadL4LogsResponse: DownloadL4LogsResponse,
    DDoSAttackEventDetailData: DDoSAttackEventDetailData,
    DescribeBotClientIpListRequest: DescribeBotClientIpListRequest,
    DescribeTopL7AnalysisDataResponse: DescribeTopL7AnalysisDataResponse,
    DescribeBotTopDataResponse: DescribeBotTopDataResponse,
    DetailHost: DetailHost,
    RewriteAction: RewriteAction,
    CreateDnsRecordRequest: CreateDnsRecordRequest,
    L7OfflineLog: L7OfflineLog,
    CreateLogTopicTaskResponse: CreateLogTopicTaskResponse,
    SmartRouting: SmartRouting,
    DescribeDnsDataResponse: DescribeDnsDataResponse,
    ModifyLogTopicTaskResponse: ModifyLogTopicTaskResponse,
    Zone: Zone,
    RuleNormalActionParams: RuleNormalActionParams,
    DescribeDDoSAttackSourceEventRequest: DescribeDDoSAttackSourceEventRequest,
    RuleExtraParameter: RuleExtraParameter,
    RulesSettingAction: RulesSettingAction,
    DDoSAttackEvent: DDoSAttackEvent,
    ClientIpHeader: ClientIpHeader,
    DescribeDDoSAttackTopDataRequest: DescribeDDoSAttackTopDataRequest,
    Quic: Quic,
    Ipv6: Ipv6,
    DescribeRulesRequest: DescribeRulesRequest,
    ClsLogTopicInfo: ClsLogTopicInfo,
    DescribeDDoSMajorAttackEventResponse: DescribeDDoSMajorAttackEventResponse,
    DownloadL7LogsRequest: DownloadL7LogsRequest,
    DescribeContentQuotaResponse: DescribeContentQuotaResponse,
    ModifyZoneSettingResponse: ModifyZoneSettingResponse,
    DownloadL7LogsResponse: DownloadL7LogsResponse,
    DescribeBillingDataRequest: DescribeBillingDataRequest,
    CreateDnsRecordResponse: CreateDnsRecordResponse,
    TimingTypeValue: TimingTypeValue,
    DnsData: DnsData,
    ServerCertInfo: ServerCertInfo,
    DescribeWebManagedRulesDataResponse: DescribeWebManagedRulesDataResponse,
    DescribeWebManagedRulesLogResponse: DescribeWebManagedRulesLogResponse,
    ClientIpCountry: ClientIpCountry,
    CreatePrefetchTaskRequest: CreatePrefetchTaskRequest,
    DescribeTopL7AnalysisDataRequest: DescribeTopL7AnalysisDataRequest,
    FileAscriptionInfo: FileAscriptionInfo,
    DescribeDDoSBlockListResponse: DescribeDDoSBlockListResponse,
    ZoneSetting: ZoneSetting,
    DDoSAttackSourceEvent: DDoSAttackSourceEvent,
    ModifyRulePriorityResponse: ModifyRulePriorityResponse,
    DescribeTopL7CacheDataResponse: DescribeTopL7CacheDataResponse,
    DescribeOverviewL7DataRequest: DescribeOverviewL7DataRequest,
    IdentifyZoneResponse: IdentifyZoneResponse,
    WebSocket: WebSocket,
    DeleteLogTopicTaskRequest: DeleteLogTopicTaskRequest,
    DDoSBlockData: DDoSBlockData,
    VanityNameServers: VanityNameServers,
    DescribeDnssecRequest: DescribeDnssecRequest,
    DeleteLogTopicTaskResponse: DeleteLogTopicTaskResponse,
    DescribeWebManagedRulesDataRequest: DescribeWebManagedRulesDataRequest,
    RuleChoicePropertiesItem: RuleChoicePropertiesItem,
    DescribePrefetchTasksRequest: DescribePrefetchTasksRequest,
    MaxAge: MaxAge,
    DescribeDDoSAttackSourceEventResponse: DescribeDDoSAttackSourceEventResponse,
    DnsRecord: DnsRecord,
    ModifyRulePriorityRequest: ModifyRulePriorityRequest,
    DescribeDnsRecordsRequest: DescribeDnsRecordsRequest,
    CreatePrefetchTaskResponse: CreatePrefetchTaskResponse,
    NoCache: NoCache,
    DescribeDefaultCertificatesRequest: DescribeDefaultCertificatesRequest,
    DescribeWebProtectionHitRuleDetailRequest: DescribeWebProtectionHitRuleDetailRequest,
    DDoS: DDoS,
    CreateZoneRequest: CreateZoneRequest,
    PlanInfo: PlanInfo,
    DescribeTimingL7CacheDataRequest: DescribeTimingL7CacheDataRequest,
    Task: Task,
    Waf: Waf,
    ModifyRuleResponse: ModifyRuleResponse,
    CheckCertificateResponse: CheckCertificateResponse,
    AscriptionInfo: AscriptionInfo,
    DescribeLogSetsResponse: DescribeLogSetsResponse,
    DescribeWebProtectionDataRequest: DescribeWebProtectionDataRequest,
    CheckCertificateRequest: CheckCertificateRequest,
    DescribeDDoSAttackEventResponse: DescribeDDoSAttackEventResponse,
    DescribeLogTopicTaskDetailRequest: DescribeLogTopicTaskDetailRequest,
    Cache: Cache,
    ForceRedirect: ForceRedirect,
    CodeAction: CodeAction,
    DescribeBotHitRuleDetailRequest: DescribeBotHitRuleDetailRequest,
    CreateReplayTaskRequest: CreateReplayTaskRequest,
    DescribeWebProtectionHitRuleDetailResponse: DescribeWebProtectionHitRuleDetailResponse,
    Identification: Identification,
    DescribeDnsRecordsResponse: DescribeDnsRecordsResponse,
    DescribeDDoSAttackDataRequest: DescribeDDoSAttackDataRequest,
    CachePrefresh: CachePrefresh,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    DescribeWebProtectionClientIpListResponse: DescribeWebProtectionClientIpListResponse,
    DescribeTimingL7AnalysisDataResponse: DescribeTimingL7AnalysisDataResponse,
    DescribeContentQuotaRequest: DescribeContentQuotaRequest,
    DescribeWebProtectionAttackEventsRequest: DescribeWebProtectionAttackEventsRequest,
    RulesProperties: RulesProperties,
    DescribeOverviewL7DataResponse: DescribeOverviewL7DataResponse,
    Hsts: Hsts,
    RuleCodeActionParams: RuleCodeActionParams,
    CreateRuleRequest: CreateRuleRequest,
    ModifyZoneStatusRequest: ModifyZoneStatusRequest,
    TopEntry: TopEntry,
    Rule: Rule,
    TimingDataItem: TimingDataItem,
    DescribeLogTopicTaskDetailResponse: DescribeLogTopicTaskDetailResponse,
    ModifyDnsRecordResponse: ModifyDnsRecordResponse,
    DescribeLogSetsRequest: DescribeLogSetsRequest,
    CreatePlanForZoneRequest: CreatePlanForZoneRequest,
    ClientRule: ClientRule,
    CC: CC,
    PostMaxSize: PostMaxSize,
    Sv: Sv,
    DescribeBillingDataResponse: DescribeBillingDataResponse,
    CreateLogSetResponse: CreateLogSetResponse,
    Filter: Filter,
    DownloadL4LogsRequest: DownloadL4LogsRequest,
    DescribeWebProtectionClientIpListRequest: DescribeWebProtectionClientIpListRequest,
    DescribeDnssecResponse: DescribeDnssecResponse,
    CreateZoneResponse: CreateZoneResponse,
    ModifyZoneCnameSpeedUpRequest: ModifyZoneCnameSpeedUpRequest,
    Action: Action,
    DescribeTimingL7AnalysisDataRequest: DescribeTimingL7AnalysisDataRequest,
    LogTopicDetailInfo: LogTopicDetailInfo,
    ModifyDnsRecordRequest: ModifyDnsRecordRequest,
    SecurityType: SecurityType,
    DescribeDDoSBlockListRequest: DescribeDDoSBlockListRequest,
    DescribeDDoSMajorAttackEventRequest: DescribeDDoSMajorAttackEventRequest,
    BillingDataFilter: BillingDataFilter,
    DescribeBotDataResponse: DescribeBotDataResponse,
    DescribeAddableEntityListRequest: DescribeAddableEntityListRequest,
    DescribeSingleL7AnalysisDataResponse: DescribeSingleL7AnalysisDataResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    Header: Header,
    RuleAndConditions: RuleAndConditions,
    SecEntry: SecEntry,
    DescribeIdentificationsRequest: DescribeIdentificationsRequest,
    DescribeDefaultCertificatesResponse: DescribeDefaultCertificatesResponse,
    DescribeAvailablePlansResponse: DescribeAvailablePlansResponse,
    ModifyHostsCertificateResponse: ModifyHostsCertificateResponse,
    AccelerateType: AccelerateType,
    NormalAction: NormalAction,
    ReclaimZoneRequest: ReclaimZoneRequest,
    FollowOrigin: FollowOrigin,
    CreateLogSetRequest: CreateLogSetRequest,
    DeleteZoneRequest: DeleteZoneRequest,
    SecHitRuleInfo: SecHitRuleInfo,
    ModifyDefaultCertificateResponse: ModifyDefaultCertificateResponse,
    TopDetailData: TopDetailData,
    DescribeZoneSettingResponse: DescribeZoneSettingResponse,
    DescribeBotLogRequest: DescribeBotLogRequest,
    L4OfflineLog: L4OfflineLog,
    CreateLogTopicTaskRequest: CreateLogTopicTaskRequest,
    DeleteRulesResponse: DeleteRulesResponse,
    QueryCondition: QueryCondition,
    DescribeWebProtectionDataResponse: DescribeWebProtectionDataResponse,
    CacheConfig: CacheConfig,
    DescribeRulesSettingResponse: DescribeRulesSettingResponse,
    CCInterceptEvent: CCInterceptEvent,
    ModifyZoneCnameSpeedUpResponse: ModifyZoneCnameSpeedUpResponse,
    FailReason: FailReason,
    DescribeRulesSettingRequest: DescribeRulesSettingRequest,
    DescribeBotClientIpListResponse: DescribeBotClientIpListResponse,
    DeleteDnsRecordsRequest: DeleteDnsRecordsRequest,
    ModifyHostsCertificateRequest: ModifyHostsCertificateRequest,
    DDoSMajorAttackEvent: DDoSMajorAttackEvent,
    DescribeDnsDataRequest: DescribeDnsDataRequest,
    DescribeWebProtectionAttackEventsResponse: DescribeWebProtectionAttackEventsResponse,
    Tag: Tag,
    CreatePurgeTaskRequest: CreatePurgeTaskRequest,
    Resource: Resource,
    DeleteDnsRecordsResponse: DeleteDnsRecordsResponse,
    Quota: Quota,
    TopDataRecord: TopDataRecord,
    DescribeHostsSettingRequest: DescribeHostsSettingRequest,
    DescribeWebManagedRulesLogRequest: DescribeWebManagedRulesLogRequest,
    DescribeBotHitRuleDetailResponse: DescribeBotHitRuleDetailResponse,
    ModifyLogTopicTaskRequest: ModifyLogTopicTaskRequest,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    RuleItem: RuleItem,
    DescribeDDoSAttackEventDetailRequest: DescribeDDoSAttackEventDetailRequest,
    DescribeDDoSAttackEventRequest: DescribeDDoSAttackEventRequest,
    DescribeWebProtectionTopDataResponse: DescribeWebProtectionTopDataResponse,
    VanityNameServersIps: VanityNameServersIps,
    DescribeWebManagedRulesHitRuleDetailResponse: DescribeWebManagedRulesHitRuleDetailResponse,
    DescribeBotLogResponse: DescribeBotLogResponse,
    IdentifyZoneRequest: IdentifyZoneRequest,
    ModifyDnssecResponse: ModifyDnssecResponse,
    WebLogs: WebLogs,
    SwitchLogTopicTaskResponse: SwitchLogTopicTaskResponse,
    QueryString: QueryString,
    DefaultServerCertInfo: DefaultServerCertInfo,
    DnssecInfo: DnssecInfo,
    UpstreamHttp2: UpstreamHttp2,
    TopEntryValue: TopEntryValue,
    OfflineCache: OfflineCache,
    DescribeDDoSAttackTopDataResponse: DescribeDDoSAttackTopDataResponse,
    DescribeTimingL4DataRequest: DescribeTimingL4DataRequest,
    SecRuleRelatedInfo: SecRuleRelatedInfo,
    DescribeTimingL4DataResponse: DescribeTimingL4DataResponse,
    DescribeLogTopicTasksResponse: DescribeLogTopicTasksResponse,
    CreateReplayTaskResponse: CreateReplayTaskResponse,

}
