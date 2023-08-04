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
 * The condition of the exception rule
 * @class
 */
class ExceptUserRuleCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * The field to match. Values:
<li>`host`: Request domain name</li>
<li>`sip`: Client IP</li>
<li>`ua`: User-Agent</li>
<li>`cookie`: Cookie</li>
<li>`cgi`: CGI script</li>
<li>`xff`: XFF header</li>
<li>`url`: Request URL</li>
<li>`accept`: Request content type</li>
<li>`method`: Request method</li>
<li>`header`: Request header</li>
<li>`sip_proto`: Network layer protocol</li>
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * The parameter of the field. Only when `MatchFrom = header`, the key contained in the header can be passed.
         * @type {string || null}
         */
        this.MatchParam = null;

        /**
         * The logical operator. Values:
<li>`equal`: String equals</li>
<li>`not_equal`: Value not equals</li>
<li>`include`: String contains</li>
<li>`not_include`: String not contains</li>
<li>`match`: IP matches</li>
<li>`not_match`: IP not matches</li>
<li>`include_area`: Regions contain</li>
<li>`is_empty`: Value left empty</li>
<li>`not_exists`: Key fields not exist</li>
<li>`regexp`: Regex matches</li>
<li>`len_gt`: Value greater than</li>
<li>`len_lt`: Value smaller than</li>
<li>`len_eq`: Value equals</li>
<li>`match_prefix`: Prefix matches</li>
<li>`match_suffix`: Suffix matches</li>
<li>`wildcard`: Wildcard</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * The value of the parameter.
         * @type {string || null}
         */
        this.MatchContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchFrom = 'MatchFrom' in params ? params.MatchFrom : null;
        this.MatchParam = 'MatchParam' in params ? params.MatchParam : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;

    }
}

/**
 * CheckCnameStatus response structure.
 * @class
 */
class CheckCnameStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of CNAME statuses.
         * @type {Array.<CnameStatus> || null}
         */
        this.CnameStatus = null;

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

        if (params.CnameStatus) {
            this.CnameStatus = new Array();
            for (let z in params.CnameStatus) {
                let obj = new CnameStatus();
                obj.deserialize(params.CnameStatus[z]);
                this.CnameStatus.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOriginGroup response structure.
 * @class
 */
class DescribeOriginGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Origin group information.
         * @type {Array.<OriginGroup> || null}
         */
        this.OriginGroups = null;

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

        if (params.OriginGroups) {
            this.OriginGroups = new Array();
            for (let z in params.OriginGroups) {
                let obj = new OriginGroup();
                obj.deserialize(params.OriginGroups[z]);
                this.OriginGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Top rows of data to query. Maximum value: 1000. Top 10 rows of data are queried if this field is not specified.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter conditions. See below for details: 
<li>`domain`<br>   Filter by the <strong>sub-domain name</strong>, such as `test.example.com`<br>   Type: String<br>   Required: No</li>
<li>`url`<br>   Filter by the <strong>URL</strong>, such as `/content`. The query period cannot exceed 30 days. <br>   Type: String<br>   Required: No</li>
<li>`resourceType`<br>   Filter by the <strong>resource file type</strong>, such as `jpg`, `png`. The query period cannot exceed 30 days.<br>  Type: String<br>   Required: No</li>
<li>cacheType<br>  Filter by the <strong>cache hit result</strong>.<br> Type: String<br>   Required: No<br>   Values: <br>   `hit`: Cache hit; <br>   `dynamic`: Resource non-cacheable; <br>   `miss`: Cache miss</li>
<li>`statusCode`<br>   Filter by the <strong> status code</strong>. The query period  cannot exceed 30 days. <br>   Type: String<br>   Required: No<br>   Values: <br>   `1XX`: All 1xx status codes;<br>   `100`: 100 status code;<br>   `101`: 101 status code;<br>   `102`: 102 status code;<br>   `2XX`: All 2xx status codes;<br>   `200`: 200 status code;<br>   `201`: 201 status code;<br>   `202`: 202 status code;<br>   `203`: 203 status code;<br>   `204`: 204 status code;<br>   `205`: 205 status code;<br>   `206`: 206 status code;<br>   `207`: 207 status code;<br>   `3XX`: All 3xx status codes;<br>   `300`: 300 status code;<br>   `301`: 301 status code;<br>   `302`: 302 status code;<br>   `303`: 303 status code;<br>   `304`: 304 status code;<br>   `305`: 305 status code;<br>   `307`: 307 status code;<br>   `4XX`: All 4xx status codes;<br>   `400`: 400 status code;<br>   `401`: 401 status code;<br>   `402`: 402 status code;<br>   `403`: 403 status code;<br>   `404`: 404 status code;<br>   `405`: 405 status code;<br>   `406`: 406 status code;<br>   `407`: 407 status code;<br>   `408`: 408 status code;<br>   `409`: 409 status code;<br>   `410`: 410 status code;<br>   `411`: 411 status code;<br>   `412`: 412 status code;<br>   `412`: 413 status code;<br>   `414`: 414 status code;<br>   `415`: 415 status code;<br>   `416`: 416 status code;<br>   `417`: 417 status code;<br>  `422`: 422 status code;<br>   `423`: 423 status code;<br>   `424`: 424 status code;<br>   `426`: 426 status code;<br>   `451`: 451 status code;<br>   `5XX`: All 5xx status codes;<br>   `500`: 500 status code;<br>   `501`: 501 status code;<br>   `502`: 502 status code;<br>   `503`: 503 status code;<br>   `504`: 504 status code;<br>   `505`: 505 status code;<br>   `506`: 506 status code;<br>   `507`: 507 status code;<br>   `510`: 510 status code;<br>   `514`: 514 status code;<br>   `544`: 544 status code.</li>
<li>`tagKey`:<br>   Filter by the <strong>tag key</strong><br>   Type: String<br>   Required: No</li>
<li>`tagValue`<br>   Filter by the <strong>tag value</strong><br>   Type: String<br>   Required: No</li>
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
         * Geolocation scope. Values:
<li>`overseas`: Regions outside the Chinese mainland</li>
<li>`mainland`: Chinese mainland</li>
<li>`global`: Global</li>If this field is not specified, the default value `global` is used.
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
 * DeleteApplicationProxy response structure.
 * @class
 */
class DeleteApplicationProxyResponse extends  AbstractModel {
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
         * TLS version. Valid values: 
<li>`TLSv1`: TLSv1 version;</li>
<li>`TLSV1.1`: TLSv1.1 version;</li>
<li>`TLSV1.2`: TLSv1.2 version;</li>
<li>`TLSv1.3`: TLSv1.3 version.</li>Only consecutive versions can be enabled at the same time. 
Note: This field may return `null`, indicating that no valid values can be obtained.
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

        /**
         * Whether the certificate is managed by EdgeOne. Values:
<li>`apply`: Managed by EdgeOne.</li>
<li>`none`: Not managed by EdgeOne.</li>If it is left empty, the default value `none` is used.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ApplyType = null;

        /**
         * Cipher suite. Values:
<li>`loose-v2023`: Offer the highest compatibility but relatively lower security. It supports TLS 1.0-1.3.</li>
<li>`general-v2023`: Keep a balance between the compatibility and security. It supports TLS 1.2-1.3.</li>
<li>`strict-v2023`: Provides high security, disabling all insecure cipher suites. It supports TLS 1.2-1.3.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CipherSuite = null;

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
        this.ApplyType = 'ApplyType' in params ? params.ApplyType : null;
        this.CipherSuite = 'CipherSuite' in params ? params.CipherSuite : null;

    }
}

/**
 * Active bot detection rule.
 * @class
 */
class AlgDetectRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the rule.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * Name of the rule.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Whether to enable the rule.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Condition specified for the rule.
         * @type {Array.<AclCondition> || null}
         */
        this.AlgConditions = null;

        /**
         * Validate Cookie when the condition is satisfied.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AlgDetectSession || null}
         */
        this.AlgDetectSession = null;

        /**
         * Validate client behavior when the condition is satisfied.
         * @type {Array.<AlgDetectJS> || null}
         */
        this.AlgDetectJS = null;

        /**
         * The update time, which is only used as an output parameter.
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
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.AlgConditions) {
            this.AlgConditions = new Array();
            for (let z in params.AlgConditions) {
                let obj = new AclCondition();
                obj.deserialize(params.AlgConditions[z]);
                this.AlgConditions.push(obj);
            }
        }

        if (params.AlgDetectSession) {
            let obj = new AlgDetectSession();
            obj.deserialize(params.AlgDetectSession)
            this.AlgDetectSession = obj;
        }

        if (params.AlgDetectJS) {
            this.AlgDetectJS = new Array();
            for (let z in params.AlgDetectJS) {
                let obj = new AlgDetectJS();
                obj.deserialize(params.AlgDetectJS[z]);
                this.AlgDetectJS.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
<li>`zone-name`:<br>   Filter by <strong>site name</strong><br>   Type: String<br>   Required: No</li><li>`zone-id`:<br>   Filter by <strong>site ID</strong>, such as zone-xxx<br>   Type: String<br>   Required: No</li><li>`status`:<br>   Filter by <strong>site status</strong><br>   Type: String<br>   Required: No</li><li>`tag-key`:<br>   Filter by <strong>tag key</strong><br>   Type: String<br>   Required: No</li><li>`tag-value`:<br>   Filter by <strong>tag value</strong><br>   Type: String<br>   Required: No</li>Only `zone-name` supports fuzzy query.
         * @type {Array.<AdvancedFilter> || null}
         */
        this.Filters = null;

        /**
         * The sorting field. Values:
<li>`type`: Access mode</li>
<li>`area`: Acceleration region</li>
<li>`create-time`: Creation date</li>
<li>`zone-name`: Site name</li>
<li>`use-time`: Last used date</li>
<li>`active-status`: Activation status</li>If it is left empty, the default value `create-time` is used.
         * @type {string || null}
         */
        this.Order = null;

        /**
         * The sorting direction. Values:
<li>`asc`: From smallest to largest</li>
<li>`desc`: From largest to smallest</li>If it is left empty, the default value `desc` is used.
         * @type {string || null}
         */
        this.Direction = null;

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
        this.Order = 'Order' in params ? params.Order : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

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
 * Differences between the newest and existing intermediate IPs
 * @class
 */
class DiffIPWhitelist extends  AbstractModel {
    constructor(){
        super();

        /**
         * The latest intermediate IPs.
         * @type {IPWhitelist || null}
         */
        this.LatestIPWhitelist = null;

        /**
         * The intermediate IPs added to the existing list.
         * @type {IPWhitelist || null}
         */
        this.AddedIPWhitelist = null;

        /**
         * The intermediate IPs removed from the existing list.
         * @type {IPWhitelist || null}
         */
        this.RemovedIPWhitelist = null;

        /**
         * The intermediate IPs that remain unchanged.
         * @type {IPWhitelist || null}
         */
        this.NoChangeIPWhitelist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LatestIPWhitelist) {
            let obj = new IPWhitelist();
            obj.deserialize(params.LatestIPWhitelist)
            this.LatestIPWhitelist = obj;
        }

        if (params.AddedIPWhitelist) {
            let obj = new IPWhitelist();
            obj.deserialize(params.AddedIPWhitelist)
            this.AddedIPWhitelist = obj;
        }

        if (params.RemovedIPWhitelist) {
            let obj = new IPWhitelist();
            obj.deserialize(params.RemovedIPWhitelist)
            this.RemovedIPWhitelist = obj;
        }

        if (params.NoChangeIPWhitelist) {
            let obj = new IPWhitelist();
            obj.deserialize(params.NoChangeIPWhitelist)
            this.NoChangeIPWhitelist = obj;
        }

    }
}

/**
 * DeleteSecurityIPGroup response structure.
 * @class
 */
class DeleteSecurityIPGroupResponse extends  AbstractModel {
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

        /**
         * Tag of the rule.
         * @type {Array.<string> || null}
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
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * Origin group record
 * @class
 */
class OriginRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * The origin record value, which can be an IPv4/IPv6 address or a domain name.
         * @type {string || null}
         */
        this.Record = null;

        /**
         * The origin record ID.
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * The origin port. Value rang: 1-65535.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * The weight when `ConfigurationType=weight`.
If 0 or no value is passed, the weight of each origin in a group will be 0 or left empty, indicating that origin-pull is performed by round-robin.
If a value between 1-100 is passed, the total weight of multiple origins in a group should be 100, indicating that origin-pull is performed by weight.
The weight when `ConfigurationType=proto`.
If 0 or no value is passed, the weight of each origin in a group will be 0 or left empty, indicating that origin-pull is performed by round-robin.
If a value between 1-100 is passed, the total weight of multiple origins with the same protocol in a group should be 100, indicating that origin-pull is performed by weight.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * The origin protocol when `ConfigurationType=proto`, indicating that origin-pull is performed by protocol.
<li>`http`: HTTP protocol</li>
<li>`https`: HTTPS protocol</li>
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * The region when `ConfigurationType=area`, which is specified by country code (ISO 3166 alpha-2) or continent code. If not specified, it indicates all regions. Supported continent codes:
<li>`Asia`</li>
<li>`Europe`</li>
<li>`Africa`</li>
<li>`Oceania`</li>
<li>`Americas`</li>An origin group must have at least one origin configured with all regions.
         * @type {Array.<string> || null}
         */
        this.Area = null;

        /**
         * It is valid only when `OriginType=third_part`.
Whether the origin group is private. Values:
<li>`true`: Yes.</li>
<li>`false`: No.</li>If not specified, it defaults to false.
         * @type {boolean || null}
         */
        this.Private = null;

        /**
         * The authentication parameter, which is used when `Private=true`.
         * @type {Array.<PrivateParameter> || null}
         */
        this.PrivateParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Record = 'Record' in params ? params.Record : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Private = 'Private' in params ? params.Private : null;

        if (params.PrivateParameters) {
            this.PrivateParameters = new Array();
            for (let z in params.PrivateParameters) {
                let obj = new PrivateParameter();
                obj.deserialize(params.PrivateParameters[z]);
                this.PrivateParameters.push(obj);
            }
        }

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
 * Key-value pair filters for conditional filtering queries and fuzzy queries, such as filtering ID, name, and status.
If more than one filter exists, the logical relationship between these filters is `AND`.
If one filter has multiple values, the logical relationship between these values is `OR`.
 * @class
 */
class AdvancedFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field to be filtered.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value of the filtered field.
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
 * DeleteApplicationProxy request structure.
 * @class
 */
class DeleteApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The proxy ID.
         * @type {string || null}
         */
        this.ProxyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * Details of the origin.
 * @class
 */
class OriginDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The origin type. Values:
<li>`IP_DOMAIN`: IPv4/IPv6 address or domain name</li>
<li>`COS`: COS bucket address</li>
<li>`ORIGIN_GROUP`: Origin group</li>
<li>`AWS_S3`: AWS S3 bucket address</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * The origin address. Enter the origin group ID if `OriginType=ORIGIN_GROUP`.
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * ID of the secondary origin group (valid when `OriginType=ORIGIN_GROUP`). If it’s not specified, it indicates that secondary origins are not used.
         * @type {string || null}
         */
        this.BackupOrigin = null;

        /**
         * Name of the primary origin group (valid when `OriginType=ORIGIN_GROUP`).
         * @type {string || null}
         */
        this.OriginGroupName = null;

        /**
         * Name of the secondary origin group (valid when `OriginType=ORIGIN_GROUP` and `BackupOrigin` is specified).
         * @type {string || null}
         */
        this.BackOriginGroupName = null;

        /**
         * Whether to authenticate access to the private object storage origin (valid when `OriginType=COS/AWS_S3`). Values:
<li>`on`: Enable private authentication.</li>
<li>`off`: Disable private authentication.</li>
If this field is not specified, the default value `off` is used.
         * @type {string || null}
         */
        this.PrivateAccess = null;

        /**
         * The private authentication parameters. This field is valid when `PrivateAccess=on`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrivateParameter> || null}
         */
        this.PrivateParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.BackupOrigin = 'BackupOrigin' in params ? params.BackupOrigin : null;
        this.OriginGroupName = 'OriginGroupName' in params ? params.OriginGroupName : null;
        this.BackOriginGroupName = 'BackOriginGroupName' in params ? params.BackOriginGroupName : null;
        this.PrivateAccess = 'PrivateAccess' in params ? params.PrivateAccess : null;

        if (params.PrivateParameters) {
            this.PrivateParameters = new Array();
            for (let z in params.PrivateParameters) {
                let obj = new PrivateParameter();
                obj.deserialize(params.PrivateParameters[z]);
                this.PrivateParameters.push(obj);
            }
        }

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
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of DDoS attack data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecEntry> || null}
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
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
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
 * ModifySecurityPolicy request structure.
 * @class
 */
class ModifySecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Security configuration.
         * @type {SecurityConfig || null}
         */
        this.SecurityConfig = null;

        /**
         * The subdomain name/L4 proxy. You must specify either "Entity" or "TemplateId".
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * The template ID. You must specify either this field or "Entity".
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.SecurityConfig) {
            let obj = new SecurityConfig();
            obj.deserialize(params.SecurityConfig)
            this.SecurityConfig = obj;
        }
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

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
 * ModifyApplicationProxyRuleStatus response structure.
 * @class
 */
class ModifyApplicationProxyRuleStatusResponse extends  AbstractModel {
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
 * ModifyZoneSetting request structure.
 * @class
 */
class ModifyZoneSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID to modify.
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
         * QUIC access configuration. 
The original configuration will apply if it is not specified.
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * POST transport configuration. 
The original configuration will apply if it is not specified.
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
         * HTTP2 origin-pull configuration. 
The original configuration will apply if it is not specified.
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * Force HTTPS redirect configuration. 
The original configuration will apply if it is not specified.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * HTTPS acceleration configuration. 
The original configuration will apply if it is not specified.
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
         * WebSocket configuration. 
The original configuration will apply if it is not specified.
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * Origin-pull client IP header configuration. 
The original configuration will apply if it is not specified.
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
         * Ipv6 access configuration. 
The original configuration will apply if it is not specified.
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * Whether to carry the location information of the client IP during origin-pull. 
The original configuration will apply if it is not specified.
         * @type {ClientIpCountry || null}
         */
        this.ClientIpCountry = null;

        /**
         * Configuration of gRPC support. 
The original configuration will apply if it is not specified.
         * @type {Grpc || null}
         */
        this.Grpc = null;

        /**
         * Image optimization. 
It is disabled if this parameter is not specified.
         * @type {ImageOptimize || null}
         */
        this.ImageOptimize = null;

        /**
         * Standard debugging configuration.
         * @type {StandardDebug || null}
         */
        this.StandardDebug = null;

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

        if (params.Grpc) {
            let obj = new Grpc();
            obj.deserialize(params.Grpc)
            this.Grpc = obj;
        }

        if (params.ImageOptimize) {
            let obj = new ImageOptimize();
            obj.deserialize(params.ImageOptimize)
            this.ImageOptimize = obj;
        }

        if (params.StandardDebug) {
            let obj = new StandardDebug();
            obj.deserialize(params.StandardDebug)
            this.StandardDebug = obj;
        }

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
 * CreateApplicationProxy response structure.
 * @class
 */
class CreateApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The L4 application proxy ID.
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Custom bot rules
 * @class
 */
class BotUserRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Action. Valid values: 
<li>`drop`: Block;</li>
<li>`monitor`: Observe;</li>
<li>`trans`: Allow;</li>
<li>`alg`: JavaScript challenge;</li>
<li>`captcha`: Managed challenge;</li>
<li>`random`: Random action;</li>
<li>`silence`: Silence;</li>
<li>`shortdelay`: Add short latency;</li>
<li>`longdelay`: Add long latency.</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The rule status. Values:
<li>`on`: Enabled</li>
<li>`off`: Disabled</li>Default value: `on`
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * Details of the rule.
         * @type {Array.<AclCondition> || null}
         */
        this.AclConditions = null;

        /**
         * The rule weight. Value range: 0-100.
         * @type {number || null}
         */
        this.RulePriority = null;

        /**
         * The rule ID, which is only used as an output parameter.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * [Currently unavailable] Specify the random action and percentage.
         * @type {Array.<BotExtendAction> || null}
         */
        this.ExtendActions = null;

        /**
         * The filter. Values:
<li>`sip`: Client IP</li>
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FreqFields = null;

        /**
         * Updated time
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The statistical dimension. Values:
<li>`source_to_eo`: Responses from the origin server to EdgeOne</li>
<li>`client_to_eo`: Requests from the client to EdgeOne</li>
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FreqScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;

        if (params.AclConditions) {
            this.AclConditions = new Array();
            for (let z in params.AclConditions) {
                let obj = new AclCondition();
                obj.deserialize(params.AclConditions[z]);
                this.AclConditions.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;

        if (params.ExtendActions) {
            this.ExtendActions = new Array();
            for (let z in params.ExtendActions) {
                let obj = new BotExtendAction();
                obj.deserialize(params.ExtendActions[z]);
                this.ExtendActions.push(obj);
            }
        }
        this.FreqFields = 'FreqFields' in params ? params.FreqFields : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FreqScope = 'FreqScope' in params ? params.FreqScope : null;

    }
}

/**
 * ModifyOriginGroup response structure.
 * @class
 */
class ModifyOriginGroupResponse extends  AbstractModel {
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
 * DeleteAccelerationDomains request structure.
 * @class
 */
class DeleteAccelerationDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site related with the accelerated domain name.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of accelerated domain names to be deleted.
         * @type {Array.<string> || null}
         */
        this.DomainNames = null;

        /**
         * Whether to forcibly delete a domain name if it is associated with resources (such as alias domain names and traffic scheduling policies). 
<li>`true`: Delete the domain name and all associated resources.</li>
<li>`false`: Do not delete the domain name and all associated resources.</li>If it’s not specified, the default value `false` is used.
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DomainNames = 'DomainNames' in params ? params.DomainNames : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * The scope to which the exception rule applies
 * @class
 */
class ExceptUserRuleScope extends  AbstractModel {
    constructor(){
        super();

        /**
         * Exception mode. Values:
<li>`complete`: Skip the exception rule for full requests.</li>
<li>`partial`: Skip the exception rule for partial requests.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The module to be activated. Values:
<li>`waf`: Tencent Cloud-managed rules</li>
<li>`rate`: Rate limiting rules</li>
<li>`acl`: Custom rule</li>
<li>`cc`: CC attack defense</li>
<li>`bot`: Bot protection</li>
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.Modules = null;

        /**
         * Module settings of the exception rule. If it is null, the settings that were last configured will be used.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<PartialModule> || null}
         */
        this.PartialModules = null;

        /**
         * Condition settings of the exception rule. If it is null, the settings that were last configured will be used.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<SkipCondition> || null}
         */
        this.SkipConditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Modules = 'Modules' in params ? params.Modules : null;

        if (params.PartialModules) {
            this.PartialModules = new Array();
            for (let z in params.PartialModules) {
                let obj = new PartialModule();
                obj.deserialize(params.PartialModules[z]);
                this.PartialModules.push(obj);
            }
        }

        if (params.SkipConditions) {
            this.SkipConditions = new Array();
            for (let z in params.SkipConditions) {
                let obj = new SkipCondition();
                obj.deserialize(params.SkipConditions[z]);
                this.SkipConditions.push(obj);
            }
        }

    }
}

/**
 * ModifyAliasDomain request structure.
 * @class
 */
class ModifyAliasDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The alias domain name.
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * The target domain name.
         * @type {string || null}
         */
        this.TargetName = null;

        /**
         * Certificate configuration. Values:
<li>`none`: Off</li>
<li>`hosting`: Managed SSL certificate</li>
<li>`apply`: Free certificate</li>The original configuration will apply if this field is not specified.
         * @type {string || null}
         */
        this.CertType = null;

        /**
         * The certificate ID. This field is required when `CertType=hosting`.
         * @type {Array.<string> || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertId = 'CertId' in params ? params.CertId : null;

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
 * Details of the origin.
 * @class
 */
class OriginInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The origin type. Values:
<li>`IP_DOMAIN`: IPv4/IPv6 address or domain name</li>
<li>`COS`: COS bucket address </li>
<li>`ORIGIN_GROUP`: Origin group </li>
<li>`AWS_S3`: AWS S3 bucket address </li>
<li>`SPACE`: EdgeOne Shield Space </li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * The origin address. Enter the origin group ID if `OriginType=ORIGIN_GROUP`.
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * ID of the secondary origin group (valid when `OriginType=ORIGIN_GROUP`). If it’s not specified, it indicates that secondary origins are not used.
         * @type {string || null}
         */
        this.BackupOrigin = null;

        /**
         * Whether to authenticate access to the private object storage origin (valid when `OriginType=COS/AWS_S3`). Values: 
<li>`on`: Enable private authentication.</li>
<li>`off`: Disable private authentication.</li>If this field is not specified, the default value `off` is used.
         * @type {string || null}
         */
        this.PrivateAccess = null;

        /**
         * The private authentication parameters. This field is valid when `PrivateAccess=on`.
         * @type {Array.<PrivateParameter> || null}
         */
        this.PrivateParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.BackupOrigin = 'BackupOrigin' in params ? params.BackupOrigin : null;
        this.PrivateAccess = 'PrivateAccess' in params ? params.PrivateAccess : null;

        if (params.PrivateParameters) {
            this.PrivateParameters = new Array();
            for (let z in params.PrivateParameters) {
                let obj = new PrivateParameter();
                obj.deserialize(params.PrivateParameters[z]);
                this.PrivateParameters.push(obj);
            }
        }

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
 * ModifySecurityPolicy response structure.
 * @class
 */
class ModifySecurityPolicyResponse extends  AbstractModel {
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
 * Validate Cookie.
 * @class
 */
class AlgDetectSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Method to validate Cookie.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The validation mode. Values:
<li>`detect`: Validate only</li>
<li>`update_detect` (default): Update Cookie and validate</li>
         * @type {string || null}
         */
        this.DetectMode = null;

        /**
         * Whether to enable Cookie-based session check. The default value is `off`. Values:
<li>`off`: Disable</li>
<li>`on`: Enable</li>
         * @type {string || null}
         */
        this.SessionAnalyzeSwitch = null;

        /**
         * The period threshold for validating the result "No Cookie/Cookie expired" in seconds. Value range: 5-3600. Default value: 10.
         * @type {number || null}
         */
        this.InvalidStatTime = null;

        /**
         * The number of times for the result "No Cookie/Cookie expired" occurred in the specified period. Value range: 1-100000000. Default value: 300.
         * @type {number || null}
         */
        this.InvalidThreshold = null;

        /**
         * Cookie validation results.
         * @type {Array.<AlgDetectResult> || null}
         */
        this.AlgDetectResults = null;

        /**
         * Cookie-based session check results.
         * @type {Array.<AlgDetectResult> || null}
         */
        this.SessionBehaviors = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DetectMode = 'DetectMode' in params ? params.DetectMode : null;
        this.SessionAnalyzeSwitch = 'SessionAnalyzeSwitch' in params ? params.SessionAnalyzeSwitch : null;
        this.InvalidStatTime = 'InvalidStatTime' in params ? params.InvalidStatTime : null;
        this.InvalidThreshold = 'InvalidThreshold' in params ? params.InvalidThreshold : null;

        if (params.AlgDetectResults) {
            this.AlgDetectResults = new Array();
            for (let z in params.AlgDetectResults) {
                let obj = new AlgDetectResult();
                obj.deserialize(params.AlgDetectResults[z]);
                this.AlgDetectResults.push(obj);
            }
        }

        if (params.SessionBehaviors) {
            this.SessionBehaviors = new Array();
            for (let z in params.SessionBehaviors) {
                let obj = new AlgDetectResult();
                obj.deserialize(params.SessionBehaviors[z]);
                this.SessionBehaviors.push(obj);
            }
        }

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
         * Access mode of the site. Values:
<li> `full`: Access through a name server.</li>
<li> `partial`: Access through a CNAME u200drecord. A site using domainless access can only switch to CNAME access. </li>The original configuration applies if this field is not specified.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The custom name servers. The original configuration applies if this field is not specified. It is not allowed to pass this field when a site is connected without using a domain name.
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

        /**
         * The site alias. It can be up to 20 characters consisting of digits, letters, hyphens (-) and underscores (_).
         * @type {string || null}
         */
        this.AliasZoneName = null;

        /**
         * The region where the site requests access. Values:
<li> `global`: Global coverage</li>
<li> `mainland`: Chinese mainland</li>
<li> `overseas`: Outside the Chinese mainland </li>It is not allowed to pass this field when a site is connected without using a domain name.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Name of the site. This field takes effect only when the site switches from domainless access to CNAME access.
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }
        this.AliasZoneName = 'AliasZoneName' in params ? params.AliasZoneName : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * ModifyApplicationProxyStatus response structure.
 * @class
 */
class ModifyApplicationProxyStatusResponse extends  AbstractModel {
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
 * Bot extended actions
 * @class
 */
class BotExtendAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action. Valid values: 
<li>`monitor`: Observe;</li>
<li>`alg`: JavaScript challenge;</li>
<li>`captcha`: Managed challenge;</li>
<li>`random`: Actions are executed based on the percentage specified in `ExtendActions`;</li>
<li>`silence`: Silence;</li>
<li>`shortdelay`: Add short latency;</li>
<li>`longdelay`: Add long latency.</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The probability for triggering the action. Value range: 0-100.
Note: This field may return `null`, indicating that no valid values can be obtained.
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
        this.Action = 'Action' in params ? params.Action : null;
        this.Percent = 'Percent' in params ? params.Percent : null;

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
 * DeleteApplicationProxyRule response structure.
 * @class
 */
class DeleteApplicationProxyRuleResponse extends  AbstractModel {
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
 * Origin protection configuration
 * @class
 */
class OriginProtectionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of domain names.
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * List of proxy IDs.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * The existing intermediate IPs.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {IPWhitelist || null}
         */
        this.CurrentIPWhitelist = null;

        /**
         * Whether the intermediate IP update is needed for the site. Values:
<li>`true`: Update needed;</li>
<li>`false`: Update not needed.</li>
         * @type {boolean || null}
         */
        this.NeedUpdate = null;

        /**
         * Status of the origin protection configuration. Values:
<li>`online`: Origin protection is activated;</li>
<li>`offline`: Origin protection is disabled.</li>
<li>`nonactivate`: Origin protection is not activated. This value is returned only when the feature is not activated before it’s used.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Whether origin protection is supported in the plan. Values:
<li>`true`: Origin protection supported;</li>
<li>`false`: Origin protection not supported.</li>
         * @type {boolean || null}
         */
        this.PlanSupport = null;

        /**
         * Differences between the latest and existing intermediate IPs.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {DiffIPWhitelist || null}
         */
        this.DiffIPWhitelist = null;

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
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

        if (params.CurrentIPWhitelist) {
            let obj = new IPWhitelist();
            obj.deserialize(params.CurrentIPWhitelist)
            this.CurrentIPWhitelist = obj;
        }
        this.NeedUpdate = 'NeedUpdate' in params ? params.NeedUpdate : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PlanSupport = 'PlanSupport' in params ? params.PlanSupport : null;

        if (params.DiffIPWhitelist) {
            let obj = new DiffIPWhitelist();
            obj.deserialize(params.DiffIPWhitelist)
            this.DiffIPWhitelist = obj;
        }

    }
}

/**
 * DescribeOriginProtection response structure.
 * @class
 */
class DescribeOriginProtectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin protection configuration.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<OriginProtectionInfo> || null}
         */
        this.OriginProtectionInfo = null;

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

        if (params.OriginProtectionInfo) {
            this.OriginProtectionInfo = new Array();
            for (let z in params.OriginProtectionInfo) {
                let obj = new OriginProtectionInfo();
                obj.deserialize(params.OriginProtectionInfo[z]);
                this.OriginProtectionInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindZoneToPlan response structure.
 * @class
 */
class BindZoneToPlanResponse extends  AbstractModel {
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
 * Exception rules, which are used to bypass specific rules
 * @class
 */
class ExceptConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable configuration. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The settings of the exception rule. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ExceptUserRule> || null}
         */
        this.ExceptUserRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.ExceptUserRules) {
            this.ExceptUserRules = new Array();
            for (let z in params.ExceptUserRules) {
                let obj = new ExceptUserRule();
                obj.deserialize(params.ExceptUserRules[z]);
                this.ExceptUserRules.push(obj);
            }
        }

    }
}

/**
 * DeleteOriginGroup request structure.
 * @class
 */
class DeleteOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The ID of the origin group.
         * @type {string || null}
         */
        this.OriginGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;

    }
}

/**
 * Information of the alias domain name
 * @class
 */
class AliasDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * The alias domain name.
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The target domain name.
         * @type {string || null}
         */
        this.TargetName = null;

        /**
         * Status of the alias domain name. Values:
<li>`active`: Activated</li>
<li>`pending`: Deploying</li>
<li>`conflict`: Reclaimed</li>
<li>`stop`: Stopped</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The blocking mode. Values:
<li>`0`: Not blocked</li>
<li>`11`: Blocked due to regulatory compliance</li>
<li>`14`: Blocked due to ICP filing not obtained</li>
         * @type {number || null}
         */
        this.ForbidMode = null;

        /**
         * Creation time of the alias domain name.
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Modification time of the alias domain name.
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
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ForbidMode = 'ForbidMode' in params ? params.ForbidMode : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;

    }
}

/**
 * The condition that makes up an access control rule
 * @class
 */
class AclCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * The field to match. Values:
<li>`host`: Request domain name</li>
<li>`sip`: Client IP</li>
<li>`ua`: User-Agent</li>
<li>`cookie`: Cookie</li>
<li>`cgi`: CGI script</li>
<li>`xff`: XFF header</li>
<li>`url`: Request URL</li>
<li>`accept`: Request content type</li>
<li>`method`: Request method</li>
<li>`header`: Request header</li>
<li>`app_proto`: Application layer protocol</li>
<li>`sip_proto`: Network layer protocol</li>
<li>`uabot`: UA rules (only available in custom bot rules)</li>
<li>`idcid`: IDC rules (only available in custom bot rules)</li>
<li>`sipbot`: Search engine rules (only available in custom bot rules)</li>
<li>`portrait`: Client reputation (only available in custom bot rules)</li>
<li>`header_seq`: Header sequence (only available in custom bot rules)</li>
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * The parameter of the field. When `MatchFrom = header`, the key contained in the header can be passed.
         * @type {string || null}
         */
        this.MatchParam = null;

        /**
         * The logical operator. Values:
<li>`equal`: Value equals</li>
<li>`not_equal`: Value not equals</li>
<li>`include`: String contains</li>
<li>`not_include`: String not contains</li>
<li>`match`: IP matches</li>
<li>`not_match`: IP not matches</li>
<li>`include_area`: Regions contain</li>
<li>`is_empty`: Value left empty</li>
<li>`not_exists`: Key fields not exist</li>
<li>`regexp`: Regex matches</li>
<li>`len_gt`: Value greater than</li>
<li>`len_lt`: Value smaller than</li>
<li>`len_eq`: Value equals</li>
<li>`match_prefix`: Prefix matches</li>
<li>`match_suffix`: Suffix matches</li>
<li>`wildcard`: Wildcard</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * The content to match.
         * @type {string || null}
         */
        this.MatchContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchFrom = 'MatchFrom' in params ? params.MatchFrom : null;
        this.MatchParam = 'MatchParam' in params ? params.MatchParam : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;

    }
}

/**
 * DescribeAliasDomains request structure.
 * @class
 */
class DescribeAliasDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

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
<li>`target-name`:<br>   Filter by <strong>target domain name</strong><br>   Type: String<br>   Required: No</li><li>`alias-name`:<br>   Filter by <strong>alias domain name</strong><br>   Type: String<br>   Required: No</li>Only `alias-name` supports fuzzy query.
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
 * Exception rule conditions, used to filter requests by specific fields
 * @class
 */
class SkipCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * The field type. Values:
<li>`header_fields`: HTTP request header</li>
<li>`cookie`: HTTP request cookie</li>
<li>`query_string`: Query string in the HTTP request URL</li>
<li>`uri`: HTTP request URI</li>
<li>`body_raw`: HTTP request body</li>
<li>`body_json`: JSON HTTP request body</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The specific field. Values:
<li>`args`: Query parameter in the URI, such as "?name1=jack&age=12"</li>
<li>`path`: Partial path in the URI, such as "/path/to/resource.jpg"</li>
<li>`full`: Full path in the URI, such as "example.com/path/to/resource.jpg?name1=jack&age=12"</li>
<li>`upload_filename`: File path segment</li>
<li>`keys`: All keys</li>
<li>`values`: Values of all keys</li>
<li>`key_value`: Key and its value</li>
         * @type {string || null}
         */
        this.Selector = null;

        /**
         * The match method used to match the key. Values:
<li>`equal`: Exact match</li>
<li>`wildcard`: Wildcard match (only asterisks)</li>
         * @type {string || null}
         */
        this.MatchFromType = null;

        /**
         * The value that matches the key.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.MatchFrom = null;

        /**
         * The match method used to match the content.
<li>`equal`: Exact match</li>
<li>`wildcard`: Wildcard match (only asterisks)</li>
         * @type {string || null}
         */
        this.MatchContentType = null;

        /**
         * The value that matches the content.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.MatchContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Selector = 'Selector' in params ? params.Selector : null;
        this.MatchFromType = 'MatchFromType' in params ? params.MatchFromType : null;
        this.MatchFrom = 'MatchFrom' in params ? params.MatchFrom : null;
        this.MatchContentType = 'MatchContentType' in params ? params.MatchContentType : null;
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;

    }
}

/**
 * IP blocklist/allowlist rule details
 * @class
 */
class IpTableRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The action. Values:
<li>`drop`: Block</li>
<li>`trans`: Allow</li>
<li>`monitor`: Observe</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The matching dimension. Values:
<li>`ip`: Match by IP.</li>
<li>`area`: Match by IP region.</li>
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * Matching method. It defaults to `equal` if it’s left empty.
Values: 
<li>`is_empty`: The field is empty.</li>
<li>`not_exists`: The configuration item does not exist.</li>
<li>`include`: Include</li>
<li>`not_include`: Do not include</li>
<li>`equal`: Equal to</li>
<li>`not_equal`: Not equal to</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * The rule ID, which is only used as an output parameter.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * The update time, which is only used as an output parameter.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The rule status. A null value indicates that the rule is enabled. Values:
<li>`on`: Enabled</li>
<li>`off`: Disabled</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The rule name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Matching content. It’s not required when `Operator` is `is_emty` or `not_exists`. 
         * @type {string || null}
         */
        this.MatchContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.MatchFrom = 'MatchFrom' in params ? params.MatchFrom : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;

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

        /**
         * Whether the certificate is managed by EdgeOne. Values:
<li>`apply`: Managed by EdgeOne.</li>
<li>`none`: Not managed by EdgeOne.</li>If not specified, this field uses the default value `none`.
         * @type {string || null}
         */
        this.ApplyType = null;

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
        this.ApplyType = 'ApplyType' in params ? params.ApplyType : null;

    }
}

/**
 * Application proxy rule
 * @class
 */
class ApplicationProxyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The protocol. Values:
<li>`TCP`: TCP protocol.</li>
<li>`UDP`: UDP protocol.</li>
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * The access port, which can be:
<li>A single port, such as 80</li>
<li>A port range, such as 81-82</li>
Note that each rule can have up to 20 ports.
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * The origin type. Values:
<li>`custom`: Specified origins</li>
<li>`origins`: Origin group</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin server information:
<li>When `OriginType=custom`, it indicates one or more origin servers, such as ["8.8.8.8","9.9.9.9"] or ["test.com"].</li>
<li>When `OriginType=origins`, it indicates an origin group ID, such as ["origin-537f5b41-162a-11ed-abaa-525400c5da15"].</li>
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * The rule ID.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * The rule status. Values:
<li>`online`: Enabled.</li>
<li>`offline`: Disabled.</li>
<li>`progress`: Deploying</li>
<li>`stopping`: Disabling</li>
<li>`fail`: Failed to deploy or disable</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Passes the client IP. Values:
<li>`TOA`: Pass the client IP via TOA (available only when `Proto=TCP`).</li>
<li>`PPV1`: Pass the client IP via Proxy Protocol V1 (available only when `Proto=TCP`).</li>
<li>`PPV2`: Pass the client IP via Proxy Protocol V2.</li>
<li>`OFF`: Not pass the client IP.</li>Default value: OFF.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * Whether to enable session persistence. Values:
<li>`true`: Enable</li>
<li>`false`: Disable</li>Default value: false
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * Duration for the persistent session. The value takes effect only when `SessionPersist = true`.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * The origin port, which can be:
<li>A single port, such as 80</li>
<li>A port range, such as 81-82</li>
         * @type {string || null}
         */
        this.OriginPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.OriginPort = 'OriginPort' in params ? params.OriginPort : null;

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
 * ModifyApplicationProxy request structure.
 * @class
 */
class ModifyApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Domain name or subdomain name when `ProxyType=hostname`; 
Instance name when `ProxyType=instance`.
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * The session persistence duration. Value range: 30-3600 (in seconds).
The original configuration will apply if this field is not specified.
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * The proxy type. Values:
<li>`hostname`: The proxy is created by subdomain name.</li>
<li>`instance`: The proxy is created by instance.</li>If not specified, this field uses the default value `instance`.
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * IPv6 access configuration. The original configuration will apply if it is not specified.
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * Cross-MLC-border acceleration. The original configuration will apply if it is not specified.
         * @type {AccelerateMainland || null}
         */
        this.AccelerateMainland = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.AccelerateMainland) {
            let obj = new AccelerateMainland();
            obj.deserialize(params.AccelerateMainland)
            this.AccelerateMainland = obj;
        }

    }
}

/**
 * ModifyAccelerationDomainStatuses response structure.
 * @class
 */
class ModifyAccelerationDomainStatusesResponse extends  AbstractModel {
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
         * Access mode of the site. Values:
<li> `full`: Access through a name server.</li>
<li> `partial`: Access through a CNAME record.</li>
<li> `noDomainAccess`: Access without using a domain name </li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Whether the site is disabled.
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * Whether CNAME acceleration is enabled. Values:
<li>`enabled`: Enabled</li>
<li>`disabled`: Disabled</li>
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

        /**
         * Status of the proxy. Values:
<li>`active`: Enabled</li>
<li>`inactive`: Not activated</li>
<li>`paused`: Disabled</li>
         * @type {string || null}
         */
        this.ActiveStatus = null;

        /**
         * The site alias. It can be up to 20 characters consisting of digits, letters, hyphens (-) and underscores (_).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AliasZoneName = null;

        /**
         * Whether it’s a fake site. Valid values: 
<li>`0`: Non-fake site;</li>
<li>`1`: Fake site.</li>
         * @type {number || null}
         */
        this.IsFake = null;

        /**
         * Lock status. Valid values: <li>`enable`: Normal. Modifying is allowed;</li><li>`disable`: Locked. Modifying is not allowed.</li>
         * @type {string || null}
         */
        this.LockStatus = null;

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
        this.ActiveStatus = 'ActiveStatus' in params ? params.ActiveStatus : null;
        this.AliasZoneName = 'AliasZoneName' in params ? params.AliasZoneName : null;
        this.IsFake = 'IsFake' in params ? params.IsFake : null;
        this.LockStatus = 'LockStatus' in params ? params.LockStatus : null;

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
 * Information of the DDoS attacker
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
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * The site ID. 
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Geolocation scope. Values: 
<li>`overseas`: Regions outside the Chinese mainland</li>
<li>`mainland`: Chinese mainland</li>
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * The blocking time of a DDoS attack. 
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<DDoSBlockData> || null}
         */
        this.DDoSBlockData = null;

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
        this.Area = 'Area' in params ? params.Area : null;

        if (params.DDoSBlockData) {
            this.DDoSBlockData = new Array();
            for (let z in params.DDoSBlockData) {
                let obj = new DDoSBlockData();
                obj.deserialize(params.DDoSBlockData[z]);
                this.DDoSBlockData.push(obj);
            }
        }

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
         * Name of the request header that contains the client IP for origin-pull. 
The default value `X-Forwarded-IP` is used when it is not specified. 
Note: This field may return `null`, indicating that no valid values can be obtained.
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
<li>`ddos_attackFlux_protocol`: Rank protocols by the attack traffic.</li>
<li>`ddos_attackPackageNum_protocol`: Rank protocols by the number of attack packets.</li>
<li>`ddos_attackNum_attackType`: Rank attack types by the number of attacks.</li>
<li>`ddos_attackNum_sregion`: Rank attacker regions by the number of attacks.</li>
<li>`ddos_attackFlux_sip`: Rank attacker IPs by the number of attacks.</li>
<li>`ddos_attackFlux_sregion`: Rank attacker regions by the number of attacks.</li>
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
         * Whether to enable QUIC. Valid values: 
<li>`on`: Enable;</li>
<li>`off`: Disable.</li>
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
 * The IPv6 access configuration.
 * @class
 */
class Ipv6 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable IPv6 access. Valid values: 
<li>`on`: Enable;</li>
<li>`off`: Disable.</li>
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
 * ModifyAccelerationDomain request structure.
 * @class
 */
class ModifyAccelerationDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site related with the accelerated domain name.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Accelerated domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Details of the origin.
         * @type {OriginInfo || null}
         */
        this.OriginInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

        if (params.OriginInfo) {
            let obj = new OriginInfo();
            obj.deserialize(params.OriginInfo)
            this.OriginInfo = obj;
        }

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
         * Filter conditions. Each filter condition can have up to 20 entries. See below for details:
<li>`rule-id`:<br>   Filter by the <strong>rule ID</strong><br>   Type: String<br>   Required: No</li>
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
 * ACL configuration
 * @class
 */
class AclConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The custom rule.
         * @type {Array.<AclUserRule> || null}
         */
        this.AclUserRules = null;

        /**
         * Custom managed rules
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<AclUserRule> || null}
         */
        this.Customizes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.AclUserRules) {
            this.AclUserRules = new Array();
            for (let z in params.AclUserRules) {
                let obj = new AclUserRule();
                obj.deserialize(params.AclUserRules[z]);
                this.AclUserRules.push(obj);
            }
        }

        if (params.Customizes) {
            this.Customizes = new Array();
            for (let z in params.Customizes) {
                let obj = new AclUserRule();
                obj.deserialize(params.Customizes[z]);
                this.Customizes.push(obj);
            }
        }

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
 * Validate client behavior.
 * @class
 */
class AlgDetectJS extends  AbstractModel {
    constructor(){
        super();

        /**
         * Method to validate client behavior.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Proof-of-work strength. Values:
<li>`low` (default): Low</li>
<li>`middle`: Medium</li>
<li>`high`: High</li>
         * @type {string || null}
         */
        this.WorkLevel = null;

        /**
         * Implement a delay before executing JS in milliseconds. Value range: 0-1000. Default value: 500.
         * @type {number || null}
         */
        this.ExecuteMode = null;

        /**
         * The period threshold for validating the result "Client JS disabled" in seconds. Value range: 5-3600. Default value: 10.
         * @type {number || null}
         */
        this.InvalidStatTime = null;

        /**
         * The number of times for the result "Client JS disabled" occurred in the specified period. Value range: 1-100000000. Default value: 30.
         * @type {number || null}
         */
        this.InvalidThreshold = null;

        /**
         * Client behavior validation results.
         * @type {Array.<AlgDetectResult> || null}
         */
        this.AlgDetectResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.WorkLevel = 'WorkLevel' in params ? params.WorkLevel : null;
        this.ExecuteMode = 'ExecuteMode' in params ? params.ExecuteMode : null;
        this.InvalidStatTime = 'InvalidStatTime' in params ? params.InvalidStatTime : null;
        this.InvalidThreshold = 'InvalidThreshold' in params ? params.InvalidThreshold : null;

        if (params.AlgDetectResults) {
            this.AlgDetectResults = new Array();
            for (let z in params.AlgDetectResults) {
                let obj = new AlgDetectResult();
                obj.deserialize(params.AlgDetectResults[z]);
                this.AlgDetectResults.push(obj);
            }
        }

    }
}

/**
 * Accelerated domain name
 * @class
 */
class AccelerationDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of the origin.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {OriginDetail || null}
         */
        this.OriginDetail = null;

        /**
         * Creation time of the accelerated domain name.
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Accelerated domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Modification time of the accelerated domain name.
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Status of the accelerated domain name. Values:
<li>`online`: Activated</li>
<li>`process`: Being deployed</li>
<li>`offline`: Disabled</li>
<li>`forbidden`: Blocked</li>
<li>`init`: Pending activation</li>
         * @type {string || null}
         */
        this.DomainStatus = null;

        /**
         * The CNAME address.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Ownership verification status. Values: <li>`pending`: Pending verification</li> <li>`finished`: Verified</li>	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentificationStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OriginDetail) {
            let obj = new OriginDetail();
            obj.deserialize(params.OriginDetail)
            this.OriginDetail = obj;
        }
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.IdentificationStatus = 'IdentificationStatus' in params ? params.IdentificationStatus : null;

    }
}

/**
 * DeleteSecurityIPGroup request structure.
 * @class
 */
class DeleteSecurityIPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * IP group ID.
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * The settings of the rate limiting template
 * @class
 */
class RateLimitTemplateDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The mode. Values:
<li>`sup_loose`: Super loose</li>
<li>`loose`: Loose</li>
<li>`emergency`: Emergency</li>
<li>`normal`: Moderate</li>
<li>`strict`: Strict</li>
<li>`close`: Off</li>
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * The unique ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * The action. Values:
<li>`alg`: JavaScript challenge</li>
<li>`monitor`: Observe</li>
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The blocking duration, in seconds. Value range: 0-172800.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * The request threshold. Value range: 0-4294967294.
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * The statistical period. Value range: 0-120 seconds.
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Period = 'Period' in params ? params.Period : null;

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
<li>`https`: Force HTTPS for origin-pull.</li>
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

        /**
         * Whether to allow private access to buckets when `OriginType=cos`. Valid values: 
<li>`on`: Private access;</li>
<li>`off`: Public access.</li>
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * WAF configuration.
 * @class
 */
class WafConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable WAF configuration. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>The configuration can be modified even when it is disabled.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The protection level. Values:
<li>`loose`: Loose</li>
<li>`normal`: Moderate</li>
<li>`strict`: Strict</li>
<li>`stricter`: Super strict</li>
<li>`custom`: Custom</li>
         * @type {string || null}
         */
        this.Level = null;

        /**
         * The WAF global mode. Values:
<li>`block`: Block globally</li>
<li>`observe`: Observe globally</li>
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * The settings of the managed rule. If it is null, the settings that were last configured will be used.
         * @type {WafRule || null}
         */
        this.WafRule = null;

        /**
         * The setting of the AI rule engine. If it is null, the setting that was last configured will be used.
         * @type {AiRule || null}
         */
        this.AiRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.WafRule) {
            let obj = new WafRule();
            obj.deserialize(params.WafRule)
            this.WafRule = obj;
        }

        if (params.AiRule) {
            let obj = new AiRule();
            obj.deserialize(params.AiRule)
            this.AiRule = obj;
        }

    }
}

/**
 * Configuration of gRPC support
 * @class
 */
class Grpc extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable gRPC support. Valid values: 
<li>`on`: Enable;</li>
<li>`off`: Disable.</li>
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
 * The configuration to detect slow attacks
 * @class
 */
class SlowRateConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The sampling interval in seconds. In this way, the first 8 KB of the request is ignored. The rest of data is separated in to multiple parts according to this interval for slow attack measurement.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * The transfer rate threshold in bps. When the transfer rate of a sample is lower than the threshold, it’s considered a slow attack and handled according to the specified `Action`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Threshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;

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
<li>`default`: Default certificate</lil>
<li>`upload`: Specified certificate</li>
<li>`managed`: Tencent Cloud-managed certificate</li>
Note: This field may return `null`, indicating that no valid value can be obtained.
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

        /**
         * Domain name of the certificate.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CommonName = null;

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
        this.CommonName = 'CommonName' in params ? params.CommonName : null;

    }
}

/**
 * CreateAliasDomain request structure.
 * @class
 */
class CreateAliasDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The alias domain name.
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * The target domain name.
         * @type {string || null}
         */
        this.TargetName = null;

        /**
         * Certificate configuration. Values:
<li>`none`: (Default) Do not configure</li>
<li>`hosting`: Managed SSL certificate</li>
         * @type {string || null}
         */
        this.CertType = null;

        /**
         * The certificate ID. This field is required when `CertType=hosting`.
         * @type {Array.<string> || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * CreateAliasDomain response structure.
 * @class
 */
class CreateAliasDomainResponse extends  AbstractModel {
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
 * DescribeOriginProtection request structure.
 * @class
 */
class DescribeOriginProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Filter conditions. Each filter condition can have up to 20 entries. See below for details:
<li>`need-update`:<br>   Whether <strong>the intermediate IP update is needed for the site</strong>.<br>   Type: String<br>   Required: No<br>   Values:<br>   `true`: Update needed.<br>   `false`: Update not needed.<br></li>
<li>`plan-support`:<br>   Whether <strong>origin protection is supported in the plan</strong>.<br>   Type: String<br>   Required: No<br>   Values:<br>   `true`: Origin protection supported.<br>   `false`: Origin protection not supported.<br></li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset for paginated queries. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 1000.
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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

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
 * Location information of the client IP carried in origin-pull. It is formatted as a two-letter ISO-3166-1 country/region code.
 * @class
 */
class ClientIpCountry extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable configuration. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Name of the request header that contains the client IP region. It is valid when `Switch=on`. 
The default value `EO-Client-IPCountry` is used when it is not specified.
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
         * Resources to be pre-warmed, for example: 
http://www.example.com/example.txt 
Note: The number of submitted tasks is limited by the quota of the plan. For details, see [Billing Overview](https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1).
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
 * DeleteApplicationProxyRule request structure.
 * @class
 */
class DeleteApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The proxy ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * The rule ID.
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeApplicationProxies response structure.
 * @class
 */
class DescribeApplicationProxiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of application proxies.
         * @type {Array.<ApplicationProxy> || null}
         */
        this.ApplicationProxies = null;

        /**
         * Total number of records.
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

        if (params.ApplicationProxies) {
            this.ApplicationProxies = new Array();
            for (let z in params.ApplicationProxies) {
                let obj = new ApplicationProxy();
                obj.deserialize(params.ApplicationProxies[z]);
                this.ApplicationProxies.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Metrics to query. Valid values: 
<li>`l7Flow_outFlux_country`: Query traffic by country/region;</li>
<li>`l7Flow_outFlux_statusCode`: Query traffic by status code;</li>
<li>`l7Flow_outFlux_domain`: Query traffic by domain;</li>
<li>`l7Flow_outFlux_url`: Query traffic by URL;</li>
<li>`l7Flow_outFlux_resourceType`: Query traffic by resource type;</li>
<li>`l7Flow_outFlux_sip`: Query traffic by source IP;</li>
<li>`l7Flow_outFlux_referers`: Query traffic by refer information;</li>
<li>`l7Flow_outFlux_ua_device`: Query traffic by device;</li>
<li>`l7Flow_outFlux_ua_browser`: Query traffic by browser;</li>
<li>`l7Flow_outFlux_us_os`: Query traffic by OS;</li>
<li>`l7Flow_request_country`: Query requests by country/region;</li>
<li>`l7Flow_request_statusCode`: Query requests by status code;</li>
<li>`l7Flow_request_domain`: Query requests by domain;</li>
<li>`l7Flow_request_url`: Query requests by URL;</li>
<li>`l7Flow_request_resourceType`: Query requests by resource type;</li>
<li>`l7Flow_request_sip`: Query requests by source IP;</li>
<li>`l7Flow_request_referer`: Query requests by refer information;</li>
<li>`l7Flow_request_ua_device`: Query requests by device;</li>
<li>`l7Flow_request_ua_browser`: Query requests by browser;</li>
<li>`l7Flow_request_us_os`: Query requests by OS.</li>

         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * (Required) List of sites. No query results are returned if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Queries the top n rows of data. Maximum value: 1000. Top 10 rows of data will be queried if this field is not specified.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters
<li>`country`:<br>   Filter by the specified <strong>country code</strong>. <a href="https://en.wikipedia.org/wiki/ISO_3166-1">ISO 3166</a> country codes are used.</li>
<li>`province`:<br>   Filter by the specified <strong>province name</strong>. It’s only available when `Area` is `mainland`.</li>
<li>`isp`:<br>   Filter by the specified <strong>ISP</strong>. It’s only available when `Area` is `mainland`.<br>   Values: <br>   `2`: CTCC; <br>   `26`: CUCC;<br>   `1046`: CMCC;<br>   `3947`: CTT; <br>   `38`: CERNET; <br>   `43`: GWBN;<br>   `0`: Others</li>
<li>`domain`:<br>   Filter by the specified <strong>sub-domain name</strong>, such as `test.example.com`</li>
<li>`url`:<br>   Filter by the specified <strong>URL Path</strong> (such as `/content` or `content/test.jpg`.<br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.</li>
<li>`referer`:<br>   Filter by the specified <strong>Referer header</strong>, such as `example.com`.<br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.</li>
<li>`resourceType`:<br>   Filter by the specified <strong>resource file type</strong>, such as `jpg`, `css`. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.</li>
<li>`protocol`:<br>   Filter by the specified <strong>HTTP protocol version</strong><br>   Values:<br>   `HTTP/1.0`: HTTP 1.0;<br>   `HTTP/1.1`: HTTP 1.1;<br>   `HTTP/2.0`: HTTP 2.0;<br>   `HTTP/3.0`: HTTP 3.0;<br>   `WebSocket`: WebSocket.</li>
<li>`socket`<br>   Filter by the specified <strong>HTTP protocol type</strong><br>   Values:<br>   `HTTP`: HTTP protocol;<br>   `HTTPS`: HTTPS protocol;<br>   `QUIC`: QUIC protocol.</li>
<li>`statusCode`:<br>   Filter by the specified <strong> status code</strong>. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>  In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.<br>   Values: <br>   `1XX`: All 1xx status codes;<br>   `100`: 100 status code;<br>   `101`: 101 status code;<br>   `102`: 102 status code;<br>   `2XX`: All 2xx status codes;<br>   `200`: 200 status code;<br>   `201`: 201 status code;<br>   `202`: 202 status code;<br>   `203`: 203 status code;<br>   `204`: 204 status code;<br>   `205`: 205 status code;<br>   `206`: 206 status code;<br>   `207`: 207 status code;<br>  `3XX`: All 3xx status codes;<br>   `300`: 300 status code;<br>   `301`: 301 status code;<br>   `302`: 302 status code;<br>   `303`: 303 status code;<br>   `304`: 304 status code;<br>   `305`: 305 status code;<br>   `307`: 307 status code;<br>   `4XX`: All 4xx status codes;<br>   `400`: 400 status code;<br>   `401`: 401 status code;<br>   `402`: 402 status code;<br>   `403`: 403 status code;<br>   `404`: 404 status code;<br>   `405`: 405 status code;<br>   `406`: 406 status code;<br>   `407`: 407 status code;<br>   `408`: 408 status code;<br>   `409`: 409 status code;<br>   `410`: 410 status code;<br>   `411`: 411 status code;<br>   `412`: 412 status code;<br>   `412`: 413 status code;<br>   `414`: 414 status code;<br>   `415`: 415 status code;<br>   `416`: 416 status code;<br>   `417`: 417 status code;<br>  `422`: 422 status code;<br>   `423`: 423 status code;<br>   `424`: 424 status code;<br>   `426`: 426 status code;<br>   `451`: 451 status code;<br>   `5XX`: All 5xx status codes;<br>   `500`: 500 status code;<br>   `501`: 501 status code;<br>   `502`: 502 status code;<br>   `503`: 503 status code;<br>   `504`: 504 status code;<br>   `505`: 505 status code;<br>   `506`: 506 status code;<br>   `507`: 507 status code;<br>   `510`: 510 status code;<br>   `514`: 514 status code;<br>   `544`: 544 status code.</li>
<li>`browserType`:<br>   Filter by the specified <strong>browser type</strong>. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.<br>   Values: <br>  `Firefox`: Firefox browser;<br>   `Chrome`: Chrome browser;<br>   `Safari`: Safari browser;<br>   `MicrosoftEdge`: Microsoft Edge browser;<br>   `IE`: IE browser;<br>   `Opera`: Opera browser;<br>   `QQBrowser`: QQ browser;<br>   `LBBrowser`: LB browser;<br>   `MaxthonBrowser`: Maxthon browser;<br>   `SouGouBrowser`: Sogou browser;<br>  `BIDUBrowser`: Baidu browser;<br>   `TaoBrowser`: Tao browser;<br>   `UBrowser`: UC browser;<br>   `Other`: Other browsers; <br>   `Empty`: The browser type is not specified; <br>   `Bot`: Web crawler.</li>
<li>`deviceType`:<br>   Filter by the <strong>device type</strong>. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.<br>   Values: <br>   `TV`: TV; <br>   `Tablet`: Tablet;<br>   `Mobile`: Mobile phone;<br>   `Desktop`: Desktop device; <br>   `Other`: Other device;<br>   `Empty`: Device type not specified.</li>
<li>`operatingSystemType`:<br>   Filter by the <strong>operating system</strong>. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.<br>   Values: <br>   `Linux`: Linux OS;<br>   `MacOS`: Mac OS;<br>   `Android`: Android OS;<br>   `IOS`: iOS OS;<br>   `Windows`: Windows OS;<br>   `NetBSD`: NetBSD OS;<br>   `ChromiumOS`: Chromium OS;<br>   `Bot`: Web crawler: <br>   `Other`: Other OS;<br>   `Empty`: The OS is not specified.</li>
<li>`tlsVersion`:<br>   Filter by the <strong>TLS version</strong>. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.<br>   Values:<br>   `TLS1.0`: TLS 1.0; <br>   `TLS1.1`: TLS 1.1;<br>   `TLS1.2`: TLS 1.2;<br>   `TLS1.3`: TLS 1.3.</li>
<li>`ipVersion`:<br>   Filter by the specified <strong>IP version</strong>.<br>   Values:<br>   `4`: IPv4;<br>   `6`: IPv6.</li>
<li>`tagKey`:<br>   Filter by the specified <strong>tag key</strong></li>
<li>`tagValue`:<br>   Filter by the specified <strong>tag value</strong></li>
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
         * Geolocation scope. Values:
<li>`overseas`: Regions outside the Chinese mainland</li>
<li>`mainland`: Chinese mainland</li>
<li>`global`: Global</li>If this field is not specified, the default value `global` is used.
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
 * Verification file, used to verify site ownership
 * @class
 */
class FileAscriptionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Directory of the verification file.
         * @type {string || null}
         */
        this.IdentifyPath = null;

        /**
         * Content of the verification file.
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
 * DescribeAccelerationDomains response structure.
 * @class
 */
class DescribeAccelerationDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of matched accelerated domain names.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of accelerated domain names.
         * @type {Array.<AccelerationDomain> || null}
         */
        this.AccelerationDomains = null;

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

        if (params.AccelerationDomains) {
            this.AccelerationDomains = new Array();
            for (let z in params.AccelerationDomains) {
                let obj = new AccelerationDomain();
                obj.deserialize(params.AccelerationDomains[z]);
                this.AccelerationDomains.push(obj);
            }
        }
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
         * Whether to carry the location information of the client IP during origin-pull.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {ClientIpCountry || null}
         */
        this.ClientIpCountry = null;

        /**
         * Configuration of gRPC support
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Grpc || null}
         */
        this.Grpc = null;

        /**
         * Image optimization configuration. 
Note: This field may return `null`, indicating that no valid value was found.
         * @type {ImageOptimize || null}
         */
        this.ImageOptimize = null;

        /**
         * Cross-MLC-border acceleration. 
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AccelerateMainland || null}
         */
        this.AccelerateMainland = null;

        /**
         * Standard debugging configuration.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {StandardDebug || null}
         */
        this.StandardDebug = null;

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

        if (params.Grpc) {
            let obj = new Grpc();
            obj.deserialize(params.Grpc)
            this.Grpc = obj;
        }

        if (params.ImageOptimize) {
            let obj = new ImageOptimize();
            obj.deserialize(params.ImageOptimize)
            this.ImageOptimize = obj;
        }

        if (params.AccelerateMainland) {
            let obj = new AccelerateMainland();
            obj.deserialize(params.AccelerateMainland)
            this.AccelerateMainland = obj;
        }

        if (params.StandardDebug) {
            let obj = new StandardDebug();
            obj.deserialize(params.StandardDebug)
            this.StandardDebug = obj;
        }

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
         * The metric to query. Values:
<li>`l7Flow_outFlux`: Traffic used for EdegOne responses</li>
<li>`l7Flow_inFlux`: Traffic used for EdegOne requests</li>
<li>`l7Flow_outBandwidth`: Bandwidth used for EdegOne responses</li>
<li>`l7Flow_inBandwidth`: Bandwidth used for EdegOne requests</li>
<li>`l7Flow_hit_outFlux`: Traffic used for cache hit</li>
<li>`l7Flow_request`: Access requests</li>
<li>`l7Flow_flux`: Upstream and downstream traffic used for client access</li>
<li>`l7Flow_bandwidth`: Upstream and downstream bandwidth used for client access</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of sites
Enter the IDs of sites to query. The maximum query period is determined by the <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> of the bound plan. If it’s not specified, all sites are selected by default, and the query period must be within the last 30 days. 
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
<li>`all`:   All protocols. </li>If it’s not specified, `all` is used. This parameter is not yet available now.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The query granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minutes;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: One day</li>If this field is not specified, the granularity will be determined based on the query period. <br>Period ≤ 1 hour: `min`; <br>1 hour < Period ≤ 2 days: `5min`; <br>2 days < period ≤ 7 days: `hour`; <br>Period > 7 days: `day`.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Filters
<li>`socket`:<br>u2003u2003 Filter by the specified <strong>HTTP protocol type</strong><br>u2003u2003 Values:<br>u2003u2003 `HTTP`: HTTP protocol;<br>u2003u2003 `HTTPS`: HTTPS protocol;<br>u2003u2003 `QUIC`: QUIC protocol.</li>
<li>`tagKey`:<br>u2003u2003 Filter by the specified <strong>tag key</strong></li>
<li>`tagValue`<br>u2003u2003 Filter by the specified <strong>tag value</strong></li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * Geolocation scope. Values:
<li>`overseas`: Regions outside the Chinese mainland</li>
<li>`mainland`: Chinese mainland</li>
<li>`global`: Global</li>If this field is not specified, the default value `global` is used.
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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
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
 * Web security configuration switch
 * @class
 */
class SwitchConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable web protection. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>It does not affect DDoS and bot configuration.
         * @type {string || null}
         */
        this.WebSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebSwitch = 'WebSwitch' in params ? params.WebSwitch : null;

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
         * Details of the DNS record.
         * @type {AscriptionInfo || null}
         */
        this.Ascription = null;

        /**
         * Details of the verification file.
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
 * DDoS blocking details
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
         * The end time recorded in UNIX timestamp. `0` indicates the blocking is ongoing.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The regions blocked.
         * @type {string || null}
         */
        this.BlockArea = null;

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
        this.BlockArea = 'BlockArea' in params ? params.BlockArea : null;

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
 * WAF rule
 * @class
 */
class WafRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable managed rules. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * IDs of the rules to be disabled.
         * @type {Array.<number> || null}
         */
        this.BlockRuleIDs = null;

        /**
         * IDs of the rules to be executed in Observe mode.
         * @type {Array.<number> || null}
         */
        this.ObserveRuleIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockRuleIDs = 'BlockRuleIDs' in params ? params.BlockRuleIDs : null;
        this.ObserveRuleIDs = 'ObserveRuleIDs' in params ? params.ObserveRuleIDs : null;

    }
}

/**
 * Security configuration
 * @class
 */
class SecurityConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The settings of the managed rule. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {WafConfig || null}
         */
        this.WafConfig = null;

        /**
         * The settings of the rate limiting rule. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RateLimitConfig || null}
         */
        this.RateLimitConfig = null;

        /**
         * The settings of the custom rule. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AclConfig || null}
         */
        this.AclConfig = null;

        /**
         * The settings of the bot configuration. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BotConfig || null}
         */
        this.BotConfig = null;

        /**
         * The switch setting of the layer-7 protection. If it is null, the setting that was last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SwitchConfig || null}
         */
        this.SwitchConfig = null;

        /**
         * The settings of the basic access control rule. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {IpTableConfig || null}
         */
        this.IpTableConfig = null;

        /**
         * The settings of the exception rule. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ExceptConfig || null}
         */
        this.ExceptConfig = null;

        /**
         * The settings of the custom block page. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DropPageConfig || null}
         */
        this.DropPageConfig = null;

        /**
         * Security template settings
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {TemplateConfig || null}
         */
        this.TemplateConfig = null;

        /**
         * Slow attack defense configuration. If it is `null`, the previous setting is used.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {SlowPostConfig || null}
         */
        this.SlowPostConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WafConfig) {
            let obj = new WafConfig();
            obj.deserialize(params.WafConfig)
            this.WafConfig = obj;
        }

        if (params.RateLimitConfig) {
            let obj = new RateLimitConfig();
            obj.deserialize(params.RateLimitConfig)
            this.RateLimitConfig = obj;
        }

        if (params.AclConfig) {
            let obj = new AclConfig();
            obj.deserialize(params.AclConfig)
            this.AclConfig = obj;
        }

        if (params.BotConfig) {
            let obj = new BotConfig();
            obj.deserialize(params.BotConfig)
            this.BotConfig = obj;
        }

        if (params.SwitchConfig) {
            let obj = new SwitchConfig();
            obj.deserialize(params.SwitchConfig)
            this.SwitchConfig = obj;
        }

        if (params.IpTableConfig) {
            let obj = new IpTableConfig();
            obj.deserialize(params.IpTableConfig)
            this.IpTableConfig = obj;
        }

        if (params.ExceptConfig) {
            let obj = new ExceptConfig();
            obj.deserialize(params.ExceptConfig)
            this.ExceptConfig = obj;
        }

        if (params.DropPageConfig) {
            let obj = new DropPageConfig();
            obj.deserialize(params.DropPageConfig)
            this.DropPageConfig = obj;
        }

        if (params.TemplateConfig) {
            let obj = new TemplateConfig();
            obj.deserialize(params.TemplateConfig)
            this.TemplateConfig = obj;
        }

        if (params.SlowPostConfig) {
            let obj = new SlowPostConfig();
            obj.deserialize(params.SlowPostConfig)
            this.SlowPostConfig = obj;
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
<li>`zone-id`:<br>   Filter by <strong>site ID</strong>, such as zone-1379afjk91u32h (up to one entry)<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported</li><li>`job-id`:<br>   Filter by <strong>task ID</strong>, such as 1379afjk91u32h (up to one entry)<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported</li><li>`target`:<br>   Filter by <strong>target resource</strong>, such as http://www.qq.com/1.txt (up to one entry)<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported</li><li>`domains`:<br>   Filter by <strong>domain name</strong>, such as www.qq.com<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported</li><li>`statuses`:<br>   Filter by <strong>task status</strong><br>   Required: No<br>   Fuzzy query: Not supported<br>   Values:<br>   `processing`: The task is in progress.<br>   `success`: The task succeeded.<br>   `failed`: The task failed.<br>   `timeout`: The task timed out.</li>
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
 * ModifyAliasDomainStatus response structure.
 * @class
 */
class ModifyAliasDomainStatusResponse extends  AbstractModel {
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
 * IP range group
 * @class
 */
class IPGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID. Enter `0`.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Group name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * IP group information, including IP and IP mask.
         * @type {Array.<string> || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;

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
         * The metric to query. Values:
<li>`l7Flow_outFlux`: Traffic used for EdgeOne responses</li>
<li>`l7Flow_inFlux`: Traffic used for EdgeOne requests</li>
<li>`l7Flow_outBandwidth`: Bandwidth used for EdgeOne responses</li>
<li>`l7Flow_inBandwidth`: Bandwidth used for EdgeOne requests</li>
<li>`l7Flow_request`: Access requests</li>
<li>`l7Flow_flux`: Upstream and downstream traffic used for client access</li>
<li>`l7Flow_bandwidth`: Upstream and downstream bandwidth used for client access</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of sites
Enter the IDs of sites to query. The maximum query period is determined by the <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> of the bound plan. If it’s not specified, all sites are selected by default, and the query period must be within the last 30 days. 
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * The query granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minutes;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the query period. <br>Period ≤ 1 hour: `min`; <br>1 hour < Period ≤ 2 days: `5min`; <br>2 days < period ≤ 7 days: `hour`; <br>Period > 7 days: `day`.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Filters
<li>`country`:<br>   Filter by the specified <strong>country code</strong>. <a href="https://en.wikipedia.org/wiki/ISO_3166-1">ISO 3166</a> country codes are used.</li>
<li>`province`:<br>   Filter by the specified <strong>province name</strong>. It’s only available when `Area` is `mainland`. </li>
<li>`isp`:<br>   Filter by the specified <strong>ISP</strong>. It’s only available when `Area` is `mainland`.<br>   Values: <br>   `2`: CTCC; <br>   `26`: CUCC;<br>   `1046`: CMCC;<br>   `3947`: CTT; <br>   `38`: CERNET; <br>   `43`: GWBN;<br>   `0`: Others.</li>
<li>`domain`:<br>   Filter by the specified <strong>sub-domain name</strong>, such as `test.example.com`</li>
<li>`url`:<br>   Filter by the specified <strong>URL Path</strong> (such as `/content` or `content/test.jpg`.<br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.</li>
<li>`referer`:<br>   Filter by the specified <strong>Referer header</strong>, such as `example.com`.<br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.</li>
<li>`resourceType`<br>   Filter by the specified <strong>resource file type</strong>, such as `jpg`, `css`. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.</li>
<li>`protocol`:<br>   Filter by the specified <strong>HTTP protocol version</strong><br>   Values:<br>   `HTTP/1.0`: HTTP 1.0;<br>   `HTTP/1.1`: HTTP 1.1;<br>   `HTTP/2.0`: HTTP 2.0;<br>   `HTTP/3.0`: HTTP 3.0;<br>   `WebSocket`: WebSocket.</li>
<li>`socket`:<br>   Filter by the specified <strong>HTTP protocol type</strong><br>   Values:<br>   `HTTP`: HTTP protocol;<br>   `HTTPS`: HTTPS protocol;<br>   `QUIC`: QUIC protocol.</li>
<li>`statusCode`:<br>   Filter by the specified <strong> status code</strong>. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.<br>   Values: <br>   `1XX`: All 1xx status codes;<br>   `100`: 100 status code;<br>   `101`: 101 status code;<br>   `102`: 102 status code;<br>   `2XX`: All 2xx status codes;<br>   `200`: 200 status code;<br>   `201`: 201 status code;<br>   `202`: 202 status code;<br>   `203`: 203 status code;<br>   `204`: 204 status code;<br>   `205`: 205 status code;<br>   `206`: 206 status code;<br>   `207`: 207 status code;<br>  `3XX`: All 3xx status codes;<br>   `300`: 300 status code;<br>   `301`: 301 status code;<br>   `302`: 302 status code;<br>   `303`: 303 status code;<br>   `304`: 304 status code;<br>   `305`: 305 status code;<br>   `307`: 307 status code;<br>   `4XX`: All 4xx status codes;<br>   `400`: 400 status code;<br>   `401`: 401 status code;<br>   `402`: 402 status code;<br>   `403`: 403 status code;<br>   `404`: 404 status code;<br>   `405`: 405 status code;<br>   `406`: 406 status code;<br>   `407`: 407 status code;<br>   `408`: 408 status code;<br>   `409`: 409 status code;<br>   `410`: 410 status code;<br>   `411`: 411 status code;<br>   `412`: 412 status code;<br>   `412`: 413 status code;<br>   `414`: 414 status code;<br>   `415`: 415 status code;<br>   `416`: 416 status code;<br>   `417`: 417 status code;<br>  `422`: 422 status code;<br>   `423`: 423 status code;<br>   `424`: 424 status code;<br>   `426`: 426 status code;<br>   `451`: 451 status code;<br>   `5XX`: All 5xx status codes;<br>   `500`: 500 status code;<br>   `501`: 501 status code;<br>   `502`: 502 status code;<br>   `503`: 503 status code;<br>   `504`: 504 status code;<br>   `505`: 505 status code;<br>   `506`: 506 status code;<br>   `507`: 507 status code;<br>   `510`: 510 status code;<br>   `514`: 514 status code;<br>   `544`: 544 status code.</li>
<li>`browserType`:<br>   Filter by the specified <strong>browser type</strong>. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.<br>   Values: <br>  `Firefox`: Firefox browser;<br>   `Chrome`: Chrome browser;<br>   `Safari`: Safari browser;<br>   `MicrosoftEdge`: Microsoft Edge browser;<br>   `IE`: IE browser;<br>   `Opera`: Opera browser;<br>   `QQBrowser`: QQ browser;<br>   `LBBrowser`: LB browser;<br>   `MaxthonBrowser`: Maxthon browser;<br>   `SouGouBrowser`: Sogou browser;<br>  `BIDUBrowser`: Baidu browser;<br>   `TaoBrowser`: Tao browser;<br>   `UBrowser`: UC browser;<br>   `Other`: Other browsers; <br>   `Empty`: The browser type is not specified; <br>   `Bot`: Web crawler.</li>
<li>`deviceType`:<br>   Filter by the <strong>device type</strong>. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.<br>   Values: <br>   `TV`: TV; <br>   `Tablet`: Tablet;<br>   `Mobile`: Mobile phone;<br>   `Desktop`: Desktop device; <br>   `Other`: Other device;<br>   `Empty`: Device type not specified.</li>
<li>`operatingSystemType`:<br>   Filter by the <strong>operating system</strong>. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.<br>   Values: <br>   `Linux`: Linux OS;<br>   `MacOS`: Mac OS;<br>   `Android`: Android OS;<br>   `IOS`: iOS OS;<br>   `Windows`: Windows OS;<br>   `NetBSD`: NetBSD OS;<br>   `ChromiumOS`: Chromium OS;<br>   `Bot`: Web crawler: <br>   `Other`: Other OS;<br>   `Empty`: The OS is not specified.</li>
<li>`tlsVersion`:<br>   Filter by the <strong>TLS version</strong>. <br>   When this parameter is specified, the query period must be within the last 30 days. <br>   In this case, the supported <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> stated when `Zonelds` is specified become invalid.<br>   Values:<br>   `TLS1.0`: TLS 1.0; <br>   `TLS1.1`: TLS 1.1;<br>   `TLS1.2`: TLS 1.2;<br>   `TLS1.3`: TLS 1.3.</li>
<li>`ipVersion`:<br>   Filter by the specified <strong>IP version</strong>.<br>   Values:<br>   `4`: IPv4;<br>   `6`: IPv6.</li>
<li>`tagKey`:<br>   Filter by the specified <strong>tag key</strong></li>
<li>`tagValue`<br>   Filter by the specified <strong>tag value</strong></li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * Geolocation scope. Values:
<li>`overseas`: Regions outside the Chinese mainland</li>
<li>`mainland`: Chinese mainland</li>
<li>`global`: Global</li>If this field is not specified, the default value `global` is used.
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
<li>`zone-id`: <br>Filter by <strong>site ID</strong>, such as zone-xxx<br>   Type: String<br>   Required: No</li>
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
 * DescribeAliasDomains response structure.
 * @class
 */
class DescribeAliasDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total eligible alias domain names.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information of the eligible alias domain names.
         * @type {Array.<AliasDomain> || null}
         */
        this.AliasDomains = null;

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

        if (params.AliasDomains) {
            this.AliasDomains = new Array();
            for (let z in params.AliasDomains) {
                let obj = new AliasDomain();
                obj.deserialize(params.AliasDomains[z]);
                this.AliasDomains.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Intermediate IPs
 * @class
 */
class IPWhitelist extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IPv4 addresses
         * @type {Array.<string> || null}
         */
        this.IPv4 = null;

        /**
         * List of IPv6 addresses
         * @type {Array.<string> || null}
         */
        this.IPv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IPv4 = 'IPv4' in params ? params.IPv4 : null;
        this.IPv6 = 'IPv6' in params ? params.IPv6 : null;

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
<li> `full`: Access through a name server.</li>
<li> `partial`: Access through a CNAME. Before using this access mode, first verify your site with the site verification API (IdentifyZone).<li>`noDomainAccess`: Access without using a domain name. If this value is passed, only the Tags field needs to be set. </li>
If not specified, this field uses the default value `full`.
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

        /**
         * Whether to allow duplicate sites. Values:
<li>`true`: Duplicate sites are allowed.</li>
<li>`false`: Duplicate sites are not allowed.</li>If it is left empty, the default value `false` is used.
         * @type {boolean || null}
         */
        this.AllowDuplicates = null;

        /**
         * The site alias. It can be up to 20 characters consisting of digits, letters, hyphens (-) and underscores (_).
         * @type {string || null}
         */
        this.AliasZoneName = null;

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
        this.AllowDuplicates = 'AllowDuplicates' in params ? params.AllowDuplicates : null;
        this.AliasZoneName = 'AliasZoneName' in params ? params.AliasZoneName : null;

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
         * The plan option. Values:
<li>`sta`: Standard plan that supports content delivery network outside the Chinese mainland.</li>
<li>`sta_with_bot`: Standard plan that supports content delivery network outside the Chinese mainland and bot management.</li>
<li>`sta_cm`: Standard plan that supports content delivery network inside the Chinese mainland.</li>
<li>`sta_cm_with_bot`: Standard plan that supports content delivery network inside the Chinese mainland and bot management.</li>
<li>`sta`: Standard plan that supports content delivery network over the globe.</li>
<li>`sta_global_with_bot`: Standard plan that supports content delivery network over the globe and bot management.</li>
<li>`ent`: Enterprise plan that supports content delivery network outside the Chinese mainland.</li>
<li>`ent_with_bot`: Enterprise plan that supports content delivery network outside the Chinese mainland and bot management.</li>
<li>`ent_cm`: Enterprise plan that supports content delivery network inside the Chinese mainland.</li>
<li>`ent_cm_with_bot`: Enterprise plan that supports content delivery network inside the Chinese mainland and bot management.</li>
<li>`ent_global`: Enterprise plan that supports content delivery network over the globe.</li>
<li>`ent_global_with_bot`: Enterprise plan that supports content delivery network over the globe and bot management.</li>
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
         * The acceleration region. Values:
<li>`mainland`: Chinese mainland</li>
<li>`overseas`: Global (Chinese mainland not included)</li>
<li>`global`: Global (Chinese mainland included)</li>
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
         * Filter conditions. See below for details: 
<li>`domain`<br>   Filter by the <strong>sub-domain name</strong>, such as `test.example.com`<br>   Type: String<br>   Required: No</li>
<li>`url`<br>   Filter by the <strong>URL</strong>, such as `/content`. The query period cannot exceed 30 days. <br>   Type: String<br>   Required: No</li>
<li>`resourceType`<br>   Filter by the <strong>resource file type</strong>, such as `jpg`, `png`. The query period cannot exceed 30 days.<br>  Type: String<br>   Required: No</li>
<li>cacheType<br>  Filter by the <strong>cache hit result</strong>.<br> Type: String<br>   Required: No<br>   Values: <br>   `hit`: Cache hit; <br>   `dynamic`: Resource non-cacheable; <br>   `miss`: Cache miss</li>
<li>`statusCode`<br>   Filter by the <strong> status code</strong>. The query period  cannot exceed 30 days. <br>   Type: String<br>   Required: No<br>   Values: <br>   `1XX`: All 1xx status codes;<br>   `100`: 100 status code;<br>   `101`: 101 status code;<br>   `102`: 102 status code;<br>   `2XX`: All 2xx status codes;<br>   `200`: 200 status code;<br>   `201`: 201 status code;<br>   `202`: 202 status code;<br>   `203`: 203 status code;<br>   `204`: 204 status code;<br>   `205`: 205 status code;<br>   `206`: 206 status code;<br>   `207`: 207 status code;<br>   `3XX`: All 3xx status codes;<br>   `300`: 300 status code;<br>   `301`: 301 status code;<br>   `302`: 302 status code;<br>   `303`: 303 status code;<br>   `304`: 304 status code;<br>   `305`: 305 status code;<br>   `307`: 307 status code;<br>   `4XX`: All 4xx status codes;<br>   `400`: 400 status code;<br>   `401`: 401 status code;<br>   `402`: 402 status code;<br>   `403`: 403 status code;<br>   `404`: 404 status code;<br>   `405`: 405 status code;<br>   `406`: 406 status code;<br>   `407`: 407 status code;<br>   `408`: 408 status code;<br>   `409`: 409 status code;<br>   `410`: 410 status code;<br>   `411`: 411 status code;<br>   `412`: 412 status code;<br>   `412`: 413 status code;<br>   `414`: 414 status code;<br>   `415`: 415 status code;<br>   `416`: 416 status code;<br>   `417`: 417 status code;<br>  `422`: 422 status code;<br>   `423`: 423 status code;<br>   `424`: 424 status code;<br>   `426`: 426 status code;<br>   `451`: 451 status code;<br>   `5XX`: All 5xx status codes;<br>   `500`: 500 status code;<br>   `501`: 501 status code;<br>   `502`: 502 status code;<br>   `503`: 503 status code;<br>   `504`: 504 status code;<br>   `505`: 505 status code;<br>   `506`: 506 status code;<br>   `507`: 507 status code;<br>   `510`: 510 status code;<br>   `514`: 514 status code;<br>   `544`: 544 status code.</li>
<li>`tagKey`:<br>   Filter by the <strong>tag key</strong><br>   Type: String<br>   Required: No</li>
<li>`tagValue`<br>   Filter by the <strong>tag value</strong><br>   Type: String<br>   Required: No</li>
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
         * Geolocation scope. Values:
<li>`overseas`: Regions outside the Chinese mainland</li>
<li>`mainland`: Chinese mainland</li>
<li>`global`: Global</li>If this field is not specified, the default value `global` is used.
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

        /**
         * Tag of the rule.
         * @type {Array.<string> || null}
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
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * The configuration to detect slow attacks based on the transfer period the first 8 KB of requests
 * @class
 */
class FirstPartConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The transfer period threshold of the first 8 KB. If the threshold is reached, it’s considered a slow attack. Default: `5`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.StatTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.StatTime = 'StatTime' in params ? params.StatTime : null;

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
         * List of DDoS attack data. 
Note: This field may return `null`, indicating that no valid value was found.
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
 * CreateApplicationProxyRule request structure.
 * @class
 */
class CreateApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The proxy ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * The protocol. Values:
<li>`TCP`: TCP protocol</li>
<li>`UDP`: UDP protocol</li>
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * The access port, which can be:
<li>A single port, such as 80</li>
<li>A port range, such as 81-90</li>
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * The origin type. Values:
<li>`custom`: Specified origins</li>
<li>`origins`: Origin group</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin server information:
<li>When `OriginType=custom`, it indicates one or more origin servers, such as ["8.8.8.8","9.9.9.9"] or ["test.com"].</li>
<li>When `OriginType=origins`, it indicates an origin group ID, such as ["origin-537f5b41-162a-11ed-abaa-525400c5da15"].</li>
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * Passes the client IP. Values:
<li>`TOA`: Pass the client IP via TOA (available only when `Proto=TCP`).</li>
<li>`PPV1`: Pass the client IP via Proxy Protocol V1 (available only when `Proto=TCP`).</li>
<li>`PPV2`: Pass the client IP via Proxy Protocol V2.</li>
<li>`OFF`: Not pass the client IP.</li>Default value: OFF.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * Whether to enable session persistence. Values:
<li>`true`: Enable.</li>
<li>`false`: Disable.</li>Default value: false.
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * Duration for the persistent session. The value takes effect only when `SessionPersist = true`.
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * The origin port, which can be:
<li>A single port, such as 80</li>
<li>A port range, such as 81-82</li>
         * @type {string || null}
         */
        this.OriginPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.OriginPort = 'OriginPort' in params ? params.OriginPort : null;

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
<li>`off`: Disable </li>
Note: u200dThis field may return null, indicating that no valid values can be obtained.
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
 * Rate limiting rules
 * @class
 */
class RateLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The settings of the custom rate limiting rule. If it is null, the settings that were last configured will be used.
         * @type {Array.<RateLimitUserRule> || null}
         */
        this.RateLimitUserRules = null;

        /**
         * The settings of the rate limiting template. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RateLimitTemplate || null}
         */
        this.RateLimitTemplate = null;

        /**
         * The client filtering settings. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RateLimitIntelligence || null}
         */
        this.RateLimitIntelligence = null;

        /**
         * The custom rate limiting rules. If it is `null`, the previous settings is used.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<RateLimitUserRule> || null}
         */
        this.RateLimitCustomizes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.RateLimitUserRules) {
            this.RateLimitUserRules = new Array();
            for (let z in params.RateLimitUserRules) {
                let obj = new RateLimitUserRule();
                obj.deserialize(params.RateLimitUserRules[z]);
                this.RateLimitUserRules.push(obj);
            }
        }

        if (params.RateLimitTemplate) {
            let obj = new RateLimitTemplate();
            obj.deserialize(params.RateLimitTemplate)
            this.RateLimitTemplate = obj;
        }

        if (params.RateLimitIntelligence) {
            let obj = new RateLimitIntelligence();
            obj.deserialize(params.RateLimitIntelligence)
            this.RateLimitIntelligence = obj;
        }

        if (params.RateLimitCustomizes) {
            this.RateLimitCustomizes = new Array();
            for (let z in params.RateLimitCustomizes) {
                let obj = new RateLimitUserRule();
                obj.deserialize(params.RateLimitCustomizes[z]);
                this.RateLimitCustomizes.push(obj);
            }
        }

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
         * Whether to carry the location information of the client IP during origin-pull.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
         * The subdomain name to be verified. To verify the ownership of a site, leave it blank.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The verification status. Values:
<li>`pending`: The verification is ongoing.</li>
<li>`finished`: The verification completed.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Details of the DNS record.
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
         * Details of the verification file.
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
        this.Domain = 'Domain' in params ? params.Domain : null;
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
 * DescribeDDoSAttackData request structure.
 * @class
 */
class DescribeDDoSAttackDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the query period.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query period.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Statistical metrics.
<li>`ddos_attackMaxBandwidth`: Peak attack bandwidth;</li>
<li>`ddos_attackMaxPackageRate`: Peak attack packet rate;</li>
<li>`ddos_attackBandwidth`: Time-series data of attack bandwidth;</li>
<li>`ddos_attackPackageRate`: Time-series data of attack packet rate.</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of sites to be queried. All sites will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * IDs of DDoS policies to be queried. All policies will be selected if this field is not specified.
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * The query granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minutes;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day</li>If this field is not specified, the granularity is determined based on the query period. <br>Period ≤ 1 hour: `min`; <br>1 hour < Period ≤ 2 days: `5min`; <br>2 days < Period ≤ 7 days: `hour`; <br>Period > 7 days: `day`.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Geolocation scope. Values:
<li>`overseas`: Regions outside the Chinese mainland</li>
<li>`mainland`: Chinese mainland</li>
<li>`global`: Global </li>If this field is not specified, the default value `global` is used.
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
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
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
         * Disused. Use "zone-id" in "Filters" instead.
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
         * Filter criteria. Each filter criteria can have up to 20 entries. <li>`zone-id`:<br>   Filter by <strong>site ID</strong>, such as zone-xxx (up to one entry)<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported</li><li>`job-id`:<br>   Filter by <strong>task ID</strong>, such as 1379afjk91u32h (up to one entry)<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported</li><li>`target`:<br>   Filter by <strong>target resource</strong>, such as http://www.qq.com/1.txt and tag1<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported</li><li>`domains`:<br>   Filter by <strong>domain name</strong>, such as www.qq.com<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported</li><li>`statuses`:<br>   Filter by <strong>task status</strong><br>   Required: No<br>   Fuzzy query: Not supported<br>   Values:<br>   `processing`: The task is in progress.<br>   `success`: The task succeeded.<br>   `failed`: The task failed.<br>   `timeout`: The task timed out.<li>`type`:<br>   Filter by <strong>purging mode</strong> (up to one entry)<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported<br>   Values:<br>   `purge_url`: Purge by URL.<br>   `purge_prefix`: Purge by prefix.<br>   `purge_all`: Purge all caches.<br>   `purge_host`: Purge by hostname.<br>   `purge_cache_tag`: Purge by cache tag.</li>
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
 * Image optimization configuration.
 * @class
 */
class ImageOptimize extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable configuration. Values: 
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
 * DescribeApplicationProxies request structure.
 * @class
 */
class DescribeApplicationProxiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The paginated query offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The paginated query limit. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter criteria. Each filter criteria can have up to 20 entries. <li>`proxy-id`:<br>   Filter by <strong>proxy ID</strong>, such as proxy-ev2sawbwfd<br>   Type: String<br>   Required: No</li><li>`zone-id`:<br>   Filter by <strong>site ID</strong>, such as zone-vawer2vadg<br>   Type: String<br>   Required: No</li>
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
 * Bot user portrait rules
 * @class
 */
class BotPortraitRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The rule ID, which is only used as an output parameter.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * The ID of the rule that applies the "JavaScript challenge" action.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.AlgManagedIds = null;

        /**
         * The ID of the rule that applies the "Managed challenge" action.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.CapManagedIds = null;

        /**
         * The ID of the rule that applies the "Observe" action.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.MonManagedIds = null;

        /**
         * The ID of the rule that applies the "Block" action.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.DropManagedIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.AlgManagedIds = 'AlgManagedIds' in params ? params.AlgManagedIds : null;
        this.CapManagedIds = 'CapManagedIds' in params ? params.CapManagedIds : null;
        this.MonManagedIds = 'MonManagedIds' in params ? params.MonManagedIds : null;
        this.DropManagedIds = 'DropManagedIds' in params ? params.DropManagedIds : null;

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
<li>`equals`: Equals</li>
<li>`notEquals`: Does not equal</li>
<li>`exist`: Exists</li>
<li>`notexist`: Does not exist</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * The match type. Values:
<li>`filename`: File name</li>
<li>`extension`: File extension</li>
<li>`host`: Host</li>
<li>`full_url`: Full URL, which indicates the complete URL path under the current site and must contain the HTTP protocol, host, and path.</li>
<li>`url`: Partial URL under the current site</li><li>`client_country`: Country/Region of the client</li>
<li>`query_string`: Query string in the request URL</li>
<li>`request_header`: HTTP request header</li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * The parameter value of the match type. It can be an empty string only when `Target=query string/request header` and `Operator=exist/notexist`.
<li>When `Target=extension`, enter the file extension, such as "jpg" and "txt".</li>
<li>When `Target=filename`, enter the file name, such as "foo" in "foo.jpg".</li>
<li>When `Target=all`, it indicates any site request.</li>
<li>When `Target=host`, enter the host under the current site, such as "www.maxx55.com".</li>
<li>When `Target=url`, enter the partial URL path under the current site, such as "/example".</li>
<li>When `Target=full_url`, enter the complete URL under the current site. It must contain the HTTP protocol, host, and path, such as "https://www.maxx55.cn/example".</li>
<li>When `Target=client_country`, enter the ISO-3166 country/region code.</li>
<li>When `Target=query_string`, enter the value of the query string, such as "cn" and "1" in "lang=cn&version=1".</li>
<li>When `Target=request_header`, enter the HTTP request header value, such as "zh-CN,zh;q=0.9" in the "Accept-Language:zh-CN,zh;q=0.9" header.</li>
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Whether the parameter value is case insensitive. Default value: false.
         * @type {boolean || null}
         */
        this.IgnoreCase = null;

        /**
         * The parameter name of the match type. This field is required only when `Target=query_string/request_header`.
<li>`query_string`: Name of the query string, such as "lang" and "version" in "lang=cn&version=1".</li>
<li>`request_header`: Name of the HTTP request header, such as "Accept-Language" in the "Accept-Language:zh-CN,zh;q=0.9" header.</li>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether the parameter name is case insensitive. Default value: `false`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IgnoreNameCase = null;

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
        this.IgnoreCase = 'IgnoreCase' in params ? params.IgnoreCase : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IgnoreNameCase = 'IgnoreNameCase' in params ? params.IgnoreNameCase : null;

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
         * MaxAge (in seconds). The maximum value is 1 day. 
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * Rate limit template
 * @class
 */
class RateLimitTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * The mode. Values:
<li>`sup_loose`: Super loose</li>
<li>`loose`: Loose</li>
<li>`emergency`: Emergency</li>
<li>`normal`: Moderate</li>
<li>`strict`: Strict</li>
<li>`close`: Off</li>
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * The action. Values:
<li>`alg`: JavaScript challenge</li>
<li>`monitor`: Observe</li>If it is left empty, the default value `alg` is used.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The settings of the rate limiting template. It is only used as an output parameter.
         * @type {RateLimitTemplateDetail || null}
         */
        this.RateLimitTemplateDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Action = 'Action' in params ? params.Action : null;

        if (params.RateLimitTemplateDetail) {
            let obj = new RateLimitTemplateDetail();
            obj.deserialize(params.RateLimitTemplateDetail)
            this.RateLimitTemplateDetail = obj;
        }

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

        /**
         * Tag of the rule.
         * @type {Array.<string> || null}
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
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * Security template settings
 * @class
 */
class TemplateConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The template ID.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * The template name.
         * @type {string || null}
         */
        this.TemplateName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;

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
 * Slow attack defense configuration.
 * @class
 */
class SlowPostConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Detect slow attacks by the transfer period of the first 8 KB of requests
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {FirstPartConfig || null}
         */
        this.FirstPartConfig = null;

        /**
         * Detect slow attacks by the data rate of the main body (excluding the first 8 KB) of requests
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {SlowRateConfig || null}
         */
        this.SlowRateConfig = null;

        /**
         * The action to taken when a slow attack is detected. Values:
<li>`monitor`: Observe</li>
<li>`drop`: Block the request</li>
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * ID of the rule
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.FirstPartConfig) {
            let obj = new FirstPartConfig();
            obj.deserialize(params.FirstPartConfig)
            this.FirstPartConfig = obj;
        }

        if (params.SlowRateConfig) {
            let obj = new SlowRateConfig();
            obj.deserialize(params.SlowRateConfig)
            this.SlowRateConfig = obj;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * Cross-MLC-border acceleration.
 * @class
 */
class AccelerateMainland extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable Cross-MLC-border acceleration. Valid values: 
<li>`on`: Enable;</li>
<li>`off`: Disable.</li>
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
 * The settings of the exception rule
 * @class
 */
class ExceptUserRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rule name.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * The rule action. It only supports the value `skip`, which indicates skipping all managed rules.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The rule status. Values:
<li>`on`: Enabled</li>
<li>`off`: Disabled</li>
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * The rule ID, which is automatically created and only used as an output parameter.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * The update time. If it is null, the current date and time is recorded.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The matching condition.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ExceptUserRuleCondition> || null}
         */
        this.ExceptUserRuleConditions = null;

        /**
         * The scope to which the exception rule applies.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ExceptUserRuleScope || null}
         */
        this.ExceptUserRuleScope = null;

        /**
         * The rule priority. Value range: 0-100. If it is null, it defaults to 0.
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
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.ExceptUserRuleConditions) {
            this.ExceptUserRuleConditions = new Array();
            for (let z in params.ExceptUserRuleConditions) {
                let obj = new ExceptUserRuleCondition();
                obj.deserialize(params.ExceptUserRuleConditions[z]);
                this.ExceptUserRuleConditions.push(obj);
            }
        }

        if (params.ExceptUserRuleScope) {
            let obj = new ExceptUserRuleScope();
            obj.deserialize(params.ExceptUserRuleScope)
            this.ExceptUserRuleScope = obj;
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;

    }
}

/**
 * CreateApplicationProxyRule response structure.
 * @class
 */
class CreateApplicationProxyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rule ID.
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
 * Rate limit rule
 * @class
 */
class RateLimitUserRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The request threshold. Value range: 0-4294967294.
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * The statistical period. The value can be 10, 20, 30, 40, 50, or 60 seconds.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * The rule name, which consists of only letters, digits, and underscores and cannot start with an underscore.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * The action. Values:
<li>`monitor`: Observe</li>
<li>`drop`: Block</li>
<li>`alg`: JavaScript challenge</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The amount of time taken to perform the action. Value range: 0 seconds - 2 days.
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * The time unit. Values:
<li>`second`: Second</li>
<li>`minutes`: Minute</li>
<li>`hour`: Hour</li>
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * The rule status. Values:
<li>`on`: Enabled</li>
<li>`off`: Disabled</li>Default value: on
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * The rule details.
         * @type {Array.<AclCondition> || null}
         */
        this.AclConditions = null;

        /**
         * The rule weight. Value range: 0-100.
         * @type {number || null}
         */
        this.RulePriority = null;

        /**
         * The rule ID, which is only used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * The filter. Values:
<li>`sip`: Client IP</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FreqFields = null;

        /**
         * Update time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The statistical dimension. Values:
<li>`source_to_eo`: Responses from the origin server to EdgeOne</li>
<li>`client_to_eo`: Requests from the client to EdgeOne</li>
Note: A null value indicates responses from the origin server to EdgeOne are recorded.
         * @type {Array.<string> || null}
         */
        this.FreqScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.PunishTimeUnit = 'PunishTimeUnit' in params ? params.PunishTimeUnit : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;

        if (params.AclConditions) {
            this.AclConditions = new Array();
            for (let z in params.AclConditions) {
                let obj = new AclCondition();
                obj.deserialize(params.AclConditions[z]);
                this.AclConditions.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.FreqFields = 'FreqFields' in params ? params.FreqFields : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FreqScope = 'FreqScope' in params ? params.FreqScope : null;

    }
}

/**
 * Nested rule settings
 * @class
 */
class SubRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The condition that determines if a feature should run.
Note: If any condition in the array is met, the feature will run.
         * @type {Array.<RuleAndConditions> || null}
         */
        this.Conditions = null;

        /**
         * The feature to be executed.
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
         * The plan option. Values:
<li>`sta`: Standard plan that supports content delivery network outside the Chinese mainland.</li>
<li>`sta_with_bot`: Standard plan that supports content delivery network outside the Chinese mainland and bot management.</li>
<li>`sta_cm`: Standard plan that supports content delivery network inside the Chinese mainland.</li>
<li>`sta_cm_with_bot`: Standard plan that supports content delivery network inside the Chinese mainland and bot management.</li>
<li>`sta_global`: Standard plan that supports content delivery network over the globe.</li>
<li>`sta_global_with_bot`: Standard plan that supports content delivery network over the globe and bot management.</li>
<li>`ent`: Enterprise plan that supports content delivery network outside the Chinese mainland.</li>
<li>`ent_with_bot`: Enterprise plan that supports content delivery network outside the Chinese mainland and bot management.</li>
<li>`ent_cm`: Enterprise plan that supports content delivery network inside the Chinese mainland.</li>
<li>`ent_cm_with_bot`: Enterprise plan that supports content delivery network inside the Chinese mainland and bot management.</li>
<li>`ent_global`: Enterprise plan that supports content delivery network over the globe.</li>
<li>`ent_global_with_bot`: Enterprise plan that supports content delivery network over the globe and bot management.</li>To get the available plan options for your account, view the output from <a href="https://intl.cloud.tencent.com/document/product/1552/80606?from_cn_redirect=1">DescribeAvailablePlans</a>.
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
 * ModifyAliasDomainStatus request structure.
 * @class
 */
class ModifyAliasDomainStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Status of the alias domain name. Values:
<li>`false`: Enable the alias domain name.</li>
<li>`true`: Disable the alias domain name.</li>
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * The alias domain name you want to modify its status. If it is left empty, the modify operation is not performed.
         * @type {Array.<string> || null}
         */
        this.AliasNames = null;

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
        this.AliasNames = 'AliasNames' in params ? params.AliasNames : null;

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
 * CreateApplicationProxy request structure.
 * @class
 */
class CreateApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Domain name or subdomain name when `ProxyType=hostname`; 
Instance name when `ProxyType=instance`.
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * The scheduling mode. Values:
<li>`ip`: Schedule via Anycast IP.</li>
<li>`domain`: Schedule via CNAME.</li>
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * Whether to enable security protection. Values:
<li>`0`: Disable security protection.</li>
<li>`1`: Enable security protection.</li>
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * Whether to enable acceleration. Values:
<li>`0`: Disable acceleration.</li>
<li>`1`: Enable acceleration.</li>
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * The proxy type. Values:
<li>`hostname`: The proxy is created by subdomain name.</li>
<li>`instance`: The proxy is created by instance.</li>If not specified, this field uses the default value `instance`.
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * The session persistence duration. Value range: 30-3600 (in seconds).
If not specified, this field uses the default value 600.
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Ipv6 access configuration. 
IPv6 access is disabled if it is not specified.
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * The rule details.
If this field is not specified, an application proxy rule will not be created.
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.ApplicationProxyRules = null;

        /**
         * Cross-MLC-border acceleration. It is disabled if this parameter is not specified.
         * @type {AccelerateMainland || null}
         */
        this.AccelerateMainland = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.ApplicationProxyRules) {
            this.ApplicationProxyRules = new Array();
            for (let z in params.ApplicationProxyRules) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.ApplicationProxyRules[z]);
                this.ApplicationProxyRules.push(obj);
            }
        }

        if (params.AccelerateMainland) {
            let obj = new AccelerateMainland();
            obj.deserialize(params.AccelerateMainland)
            this.AccelerateMainland = obj;
        }

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
 * Bot intelligence rule items
 * @class
 */
class IntelligenceRuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The tag to categorize bots. Values:
<li>`evil_bot`: Malicious bot</li>
<li>`suspect_bot`: Suspected bot</li>
<li>`good_bot`: Good bot</li>
<li>`normal`: Normal request</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * The action taken on bots. Values
<li>`drop`: Block</li>
<li>`trans`: Allow</li>
<li>`alg`: JavaScript challenge</li>
<li>`captcha`: Managed challenge</li>
<li>`monitor`: Observe</li>
         * @type {string || null}
         */
        this.Action = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Action = 'Action' in params ? params.Action : null;

    }
}

/**
 * Bot intelligence rules
 * @class
 */
class IntelligenceRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Items in a bot intelligence rule
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<IntelligenceRuleItem> || null}
         */
        this.IntelligenceRuleItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.IntelligenceRuleItems) {
            this.IntelligenceRuleItems = new Array();
            for (let z in params.IntelligenceRuleItems) {
                let obj = new IntelligenceRuleItem();
                obj.deserialize(params.IntelligenceRuleItems[z]);
                this.IntelligenceRuleItems.push(obj);
            }
        }

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
         * Whether to enable POST upload limit (default limit: 32 MB). Valid values: 
<li>`on`: Enable;</li>
<li>`off`: Disable.</li>
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

        /**
         * Quota for a resource. Values:
<li>`zone`: Quota for sites</li>
<li>`custom-rule`: Quota for custom rules</li>
<li>`rate-limiting-rule`: Quota for rate limiting rules</li>
<li>`l4-proxy-instance`: Quota for L4 proxy instances </li>
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Pack = null;

        /**
         * ID of the L4 proxy instance.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The protection specification.
Values: <li> `cm_30G`: 30 Gbps base protection bandwidth in **Chinese mainland** service area</li><li> `cm_60G`: 60 Gbps base protection bandwidth in **Chinese mainland** service area</li><li> `cm_100G`: 100 Gbps base protection bandwidth in **Chinese mainland** service area</li><li> `anycast_300G`: 300 Gbps Anycast-based protection in **Global (MLC)** service area</li><li> `anycast_unlimited`: Unlimited Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> `cm_30G_anycast_300G`: 30 Gbps base protection bandwidth in **Chinese mainland** service area and 300 Gbps Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> `cm_30G_anycast_unlimited`: 30 Gbps base protection bandwidth in **Chinese mainland** service area and unlimited Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> cm_60G_anycast_300G`: 60 Gbps base protection bandwidth in **Chinese mainland** service area and 300 Gbps Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> cm_60G_anycast_unlimited`: 60 Gbps base protection bandwidth in **Chinese mainland** service area and unlimited Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> `cm_100G_anycast_300G`: 100 Gbps base protection bandwidth in **Chinese mainland** service area and 300 Gbps Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> cm_100G_anycast_unlimited`: 100 Gbps base protection bandwidth in **Chinese mainland** service area and unlimited Anycast-based protection bandwidth in **Global (MLC)** service area </li>
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProtectionSpecs = null;

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
        this.Pack = 'Pack' in params ? params.Pack : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProtectionSpecs = 'ProtectionSpecs' in params ? params.ProtectionSpecs : null;

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
         * Feature to be executed.
         * @type {Array.<Action> || null}
         */
        this.Actions = null;

        /**
         * Feature execution conditions.
Note: If any condition in the array is met, the feature will run.
         * @type {Array.<RuleAndConditions> || null}
         */
        this.Conditions = null;

        /**
         * The nested rule.
         * @type {Array.<SubRuleItem> || null}
         */
        this.SubRules = null;

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
                let obj = new Action();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RuleAndConditions();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.SubRules) {
            this.SubRules = new Array();
            for (let z in params.SubRules) {
                let obj = new SubRuleItem();
                obj.deserialize(params.SubRules[z]);
                this.SubRules.push(obj);
            }
        }

    }
}

/**
 * Key-value pair filters for conditional filtering queries, such as filtering ID, name, and status.
If more than one filter exists, the logical relationship between these filters is `AND`.
If multiple values exist in one filter, the logical relationship between these values under the same filter is `OR`.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fields to be filtered.
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
 * CreateAccelerationDomain response structure.
 * @class
 */
class CreateAccelerationDomainResponse extends  AbstractModel {
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
 * Rule engine feature operation. A feature can be of only one of the following three types, so each item in the `RuleAction` array can be of only one of the following types. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view more requirements for entering feature items.
 * @class
 */
class Action extends  AbstractModel {
    constructor(){
        super();

        /**
         * Common operation. Values:
<li>`AccessUrlRedirect`: Access URL rewrite</li>
<li>`UpstreamUrlRedirect`: Origin-pull URL rewrite</li>
<li>`QUIC`: QUIC</li>
<li>`WebSocket`: WebSocket</li>
<li>`VideoSeek`: Video dragging</li>
<li>`Authentication`: Token authentication</li>
<li>`CacheKey`: Custom cache key</li>
<li>`Cache`: Node cache TTL</li>
<li>`MaxAge`: Browser cache TTL</li>
<li>`OfflineCache`: Offline cache</li>
<li>`SmartRouting`: Smart acceleration</li>
<li>`RangeOriginPull`: Range GETs</li>
<li>`UpstreamHttp2`: HTTP/2 forwarding</li>
<li>`HostHeader`: Host header rewrite</li>
<li>`ForceRedirect`: Force HTTPS</li>
<li>`OriginPullProtocol`: Origin-pull HTTPS</li>
<li>`CachePrefresh`: Cache prefresh</li>
<li>`Compression`: Smart compression</li>
<li>`Hsts`</li>
<li>`ClientIpHeader`</li>
<li>`SslTlsSecureConf`</li>
<li>`OcspStapling`</li>
<li>`Http2`: HTTP/2 access</li>
<li>`UpstreamFollowRedirect`: Follow origin redirect</li>
<li>`Origin`: Origin</li>
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * Application proxy instance
 * @class
 */
class ApplicationProxy extends  AbstractModel {
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
         * The proxy ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * The domain name or subdomain name when `ProxyType=hostname`.
The instance name when `ProxyType=instance`.
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * The proxy type. Values:
<li>`hostname`: The proxy is created by subdomain name.</li>
<li>`instance`: The proxy is created by instance.</li>
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * The scheduling mode. Values:
<li>`ip`: Schedule via Anycast IP.</li>
<li>`domain`: Schedule via CNAME.</li>
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * Acceleration region. Values:
<li>`mainland`: Chinese mainland.</li>
<li>`overseas`: Global (outside the Chinese mainland);</li>
Default value: overseas.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Whether to enable security protection. Values:
<li>`0`: Disable security protection.</li>
<li>`1`: Enable security protection.</li>
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * Whether to enable acceleration. Values:
<li>`0`: Disable acceleration.</li>
<li>`1`: Enable acceleration.</li>
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * The session persistence duration.
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * The rule status. Values:
<li>`online`: Enabled</li>
<li>`offline`: Disabled</li>
<li>`progress`: Deploying</li>
<li>`stopping`: Disabling</li>
<li>`fail`: Failed to deploy or disable</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The blocking status of the proxy. Values:
<li>`banned`: Blocked</li>
<li>`banning`: Blocking</li>
<li>`recover`: Unblocked</li>
<li>`recovering`: Unblocking</li>
         * @type {string || null}
         */
        this.BanStatus = null;

        /**
         * Scheduling information.
         * @type {Array.<string> || null}
         */
        this.ScheduleValue = null;

        /**
         * When `ProxyType=hostname`:
This field indicates the unique ID of the subdomain name.
         * @type {string || null}
         */
        this.HostId = null;

        /**
         * The IPv6 access configuration.
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * The update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * List of rules.
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.ApplicationProxyRules = null;

        /**
         * Cross-MLC-border acceleration.
         * @type {AccelerateMainland || null}
         */
        this.AccelerateMainland = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BanStatus = 'BanStatus' in params ? params.BanStatus : null;
        this.ScheduleValue = 'ScheduleValue' in params ? params.ScheduleValue : null;
        this.HostId = 'HostId' in params ? params.HostId : null;

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.ApplicationProxyRules) {
            this.ApplicationProxyRules = new Array();
            for (let z in params.ApplicationProxyRules) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.ApplicationProxyRules[z]);
                this.ApplicationProxyRules.push(obj);
            }
        }

        if (params.AccelerateMainland) {
            let obj = new AccelerateMainland();
            obj.deserialize(params.AccelerateMainland)
            this.AccelerateMainland = obj;
        }

    }
}

/**
 * ModifyApplicationProxy response structure.
 * @class
 */
class ModifyApplicationProxyResponse extends  AbstractModel {
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
 * ModifySecurityIPGroup response structure.
 * @class
 */
class ModifySecurityIPGroupResponse extends  AbstractModel {
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
         * Request parameter contained in `CacheKey`. 
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * ModifyOriginGroup request structure.
 * @class
 */
class ModifyOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The ID of the origin group.
         * @type {string || null}
         */
        this.OriginGroupId = null;

        /**
         * The origin type. Values:
<li>`self`: Customer origin</li>
<li>`third_party`: Third-party origin</li>
<li>`cos`: Tencent Cloud COS origin</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * The name of the origin group.
         * @type {string || null}
         */
        this.OriginGroupName = null;

        /**
         * The origin configuration type when `OriginType=self`. Values:
<li>`area`: Configure by region.</li>
<li>`weight`: Configure by weight.</li>
<li>`proto`: Configure by HTTP protocol.</li> When `OriginType=third_party/cos`, leave this field empty.
         * @type {string || null}
         */
        this.ConfigurationType = null;

        /**
         * Details of the origin record.
         * @type {Array.<OriginRecord> || null}
         */
        this.OriginRecords = null;

        /**
         * The origin domain. This field can be specified only when `OriginType=self`.
If it is left empty, the existing configuration is used.
         * @type {string || null}
         */
        this.HostHeader = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginGroupName = 'OriginGroupName' in params ? params.OriginGroupName : null;
        this.ConfigurationType = 'ConfigurationType' in params ? params.ConfigurationType : null;

        if (params.OriginRecords) {
            this.OriginRecords = new Array();
            for (let z in params.OriginRecords) {
                let obj = new OriginRecord();
                obj.deserialize(params.OriginRecords[z]);
                this.OriginRecords.push(obj);
            }
        }
        this.HostHeader = 'HostHeader' in params ? params.HostHeader : null;

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
 * Client filtering
 * @class
 */
class RateLimitIntelligence extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable configuration. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Action to be executed. Values:
<li>`monitor`: Observe</li>
<li>`alg`: Challenge</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The rule ID, which is only used as a response parameter.
         * @type {number || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * IP/Region blocklist/allowlist configuration
 * @class
 */
class IpTableConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The settings of the basic access control rule. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<IpTableRule> || null}
         */
        this.IpTableRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.IpTableRules) {
            this.IpTableRules = new Array();
            for (let z in params.IpTableRules) {
                let obj = new IpTableRule();
                obj.deserialize(params.IpTableRules[z]);
                this.IpTableRules.push(obj);
            }
        }

    }
}

/**
 * ModifyApplicationProxyStatus request structure.
 * @class
 */
class ModifyApplicationProxyStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The proxy ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * The proxy status. Values:
<li>`offline`: The proxy is disabled.</li>
<li>`online`: The proxy is enabled.</li>
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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteOriginGroup response structure.
 * @class
 */
class DeleteOriginGroupResponse extends  AbstractModel {
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
 * HTTP header, used as input for the CreatePrefetchTask API
 * @class
 */
class Header extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP header name.
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
 * Block page configuration
 * @class
 */
class DropPageConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable configuration. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The settings of the block page that applies managed rules. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DropPageDetail || null}
         */
        this.WafDropPageDetail = null;

        /**
         * The settings of the block page that applies custom rules. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DropPageDetail || null}
         */
        this.AclDropPageDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.WafDropPageDetail) {
            let obj = new DropPageDetail();
            obj.deserialize(params.WafDropPageDetail)
            this.WafDropPageDetail = obj;
        }

        if (params.AclDropPageDetail) {
            let obj = new DropPageDetail();
            obj.deserialize(params.AclDropPageDetail)
            this.AclDropPageDetail = obj;
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
<li>`zone-name`: <br>Filter by <strong>site name</strong><br>   Type: String<br>   Required: No</li>
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
 * Module settings of the exception rule
 * @class
 */
class PartialModule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The module. Values:
<li>`waf`: Managed rules</li>
         * @type {string || null}
         */
        this.Module = null;

        /**
         * List of managed rule IDs to be skipped.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.Include = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Include = 'Include' in params ? params.Include : null;

    }
}

/**
 * CreateOriginGroup response structure.
 * @class
 */
class CreateOriginGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the origin group.
         * @type {string || null}
         */
        this.OriginGroupId = null;

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
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApplicationProxyRuleStatus request structure.
 * @class
 */
class ModifyApplicationProxyRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The proxy ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * The rule ID.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * The rule status. Values:
<li>`offline`: Disabled</li>
<li>`online`: Enabled</li>
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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * BindZoneToPlan request structure.
 * @class
 */
class BindZoneToPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site to be bound.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * ID of the target plan.
         * @type {string || null}
         */
        this.PlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

    }
}

/**
 * CreateAccelerationDomain request structure.
 * @class
 */
class CreateAccelerationDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site related with the accelerated domain name.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Accelerated domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Details of the origin.
         * @type {OriginInfo || null}
         */
        this.OriginInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

        if (params.OriginInfo) {
            let obj = new OriginInfo();
            obj.deserialize(params.OriginInfo)
            this.OriginInfo = obj;
        }

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

        /**
         * Sets the default cache time when the origin server does not return the Cache-Control header.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.DefaultCacheTime = null;

        /**
         * Specifies whether to enable cache when the origin server does not return the Cache-Control header.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DefaultCache = null;

        /**
         * Specifies whether to use the default caching policy when Cache-Control is not returned from the origin
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DefaultCacheStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.DefaultCacheTime = 'DefaultCacheTime' in params ? params.DefaultCacheTime : null;
        this.DefaultCache = 'DefaultCache' in params ? params.DefaultCache : null;
        this.DefaultCacheStrategy = 'DefaultCacheStrategy' in params ? params.DefaultCacheStrategy : null;

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
 * Bot managed rules. The rule IDs can be obtained from the output of DescribeBotManagedRules.
 * @class
 */
class BotManagedRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rule action. Values:
<li>`drop`: Block</li>
<li>`trans`: Allow</li>
<li>`alg`: JavaScript challenge</li>
<li>`monitor`: Observe</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The rule ID, which is only used as an output parameter.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * The ID of the rule that applies the "Allow" action.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.TransManagedIds = null;

        /**
         * The ID of the rule that applies the "JavaScript challenge" action.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.AlgManagedIds = null;

        /**
         * The ID of the rule that applies the "Managed challenge" action.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.CapManagedIds = null;

        /**
         * The ID of the rule that applies the "Observe" action.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.MonManagedIds = null;

        /**
         * The ID of the rule that applies the "Block" action.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.DropManagedIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.TransManagedIds = 'TransManagedIds' in params ? params.TransManagedIds : null;
        this.AlgManagedIds = 'AlgManagedIds' in params ? params.AlgManagedIds : null;
        this.CapManagedIds = 'CapManagedIds' in params ? params.CapManagedIds : null;
        this.MonManagedIds = 'MonManagedIds' in params ? params.MonManagedIds : null;
        this.DropManagedIds = 'DropManagedIds' in params ? params.DropManagedIds : null;

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
 * DescribeOriginGroup request structure.
 * @class
 */
class DescribeOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset for paginated queries. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Value range: 1-1000. Default value: 10.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters. Each filter can have up to 20 entries. See below for details:
<li>`zone-id`<br>   Filter by the specified <strong>site ID</strong>, such as zone-20hzkd4rdmy0<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported</li><li>`origin-group-id`:<br>   Filter by the specified <strong>origin group ID</strong>, such as origin-2ccgtb24-7dc5-46s2-9r3e-95825d53dwe3a<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported</li><li>`origin-group-name`:<br>   Filter by the specified <strong>origin group name</strong><br>   Type: String<br>   Required: No<br>   Fuzzy query: Supported (only one origin group name allowed in a query)</li>
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
 * ModifyApplicationProxyRule response structure.
 * @class
 */
class ModifyApplicationProxyRuleResponse extends  AbstractModel {
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
 * AI rule engine
 * @class
 */
class AiRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The status of the AI rule engine. Values:
<li>`smart_status_close`: Disabled</li>
<li>`smart_status_open`: Block</li>
<li>`smart_status_observe`: Observe</li>
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
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * CreateSecurityIPGroup request structure.
 * @class
 */
class CreateSecurityIPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * IP group information.
         * @type {IPGroup || null}
         */
        this.IPGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.IPGroup) {
            let obj = new IPGroup();
            obj.deserialize(params.IPGroup)
            this.IPGroup = obj;
        }

    }
}

/**
 * The configuration details of the block page
 * @class
 */
class DropPageDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the block page, which can be obtained from the CreateSecurityDropPage API.
If 0 is passed, the default block page will be used.
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * The HTTP status code of the block page. Value range: 100-600.
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * The block page file or URL.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Type of the block page. Values:
<li>`file`: Block page file</li>
<li>`url`: Block page URL</li>
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
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

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
<li>`equals`: Equals</li>
<li>`notEquals`: Does not equal</li>
<li>`include`: Contains</li>
<li>`notInclude`: Does not contain</li>
<li>`startWith`: Starts with</li>
<li>`notStartWith`: Does not start with</li>
<li>`endWith`: Ends with</li>
<li>`notEndWith`: Does not end with</li>
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

        /**
         * A subdomain name under the site. Specify this field if you want to verify the ownership of a subdomain name. Otherwise you can leave it blank.

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
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

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
 * ModifyApplicationProxyRule request structure.
 * @class
 */
class ModifyApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The proxy ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * The rule ID.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * The origin type. Values:
<li>`custom`: Specified origins</li>
<li>`origins`: Origin group</li></li>The original configuration will apply if this field is not specified.
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * The access port, which can be:
<li>A single port, such as 80</li>
<li>A port range, such as 81-90</li>
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * The protocol. Values:
<li>`TCP`: TCP protocol</li>
<li>`UDP`: UDP protocol</li>The original configuration will apply if this field is not specified.
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * Origin server information:
<li>When `OriginType=custom`, it indicates one or more origin servers, such as ["8.8.8.8","9.9.9.9"] or ["test.com"].</li>
<li>When `OriginType=origins`, it indicates an origin group ID, such as ["origin-537f5b41-162a-11ed-abaa-525400c5da15"].</li>

The original configuration will apply if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * Passes the client IP. Values:
<li>`TOA`: Pass the client IP via TOA (available only when `Proto=TCP`).</li>
<li>`PPV1`: Pass the client IP via Proxy Protocol V1 (available only when `Proto=TCP`).</li>
<li>`PPV2`: Pass the client IP via Proxy Protocol V2.</li>
<li>`OFF`: Not pass the client IP.</li>If not specified, this field uses the default value OFF.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * Whether to enable session persistence. Values:
<li>`true`: Enable</li>
<li>`false`: Disable</li>If it is left empty, the default value `false` is used.
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * Duration for the persistent session. The value takes effect only when `SessionPersist = true`.
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * The origin port, which can be:
<li>A single port, such as 80</li>
<li>A port range, such as 81-82</li>
         * @type {string || null}
         */
        this.OriginPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.OriginPort = 'OriginPort' in params ? params.OriginPort : null;

    }
}

/**
 * ModifyAccelerationDomain response structure.
 * @class
 */
class ModifyAccelerationDomainResponse extends  AbstractModel {
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
 * ModifyAliasDomain response structure.
 * @class
 */
class ModifyAliasDomainResponse extends  AbstractModel {
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
 * CheckCnameStatus request structure.
 * @class
 */
class CheckCnameStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of domain names.
         * @type {Array.<string> || null}
         */
        this.RecordNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RecordNames = 'RecordNames' in params ? params.RecordNames : null;

    }
}

/**
 * DeleteAliasDomain request structure.
 * @class
 */
class DeleteAliasDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The alias domain name to be deleted. If it is left empty, the delete operation is not performed.
         * @type {Array.<string> || null}
         */
        this.AliasNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AliasNames = 'AliasNames' in params ? params.AliasNames : null;

    }
}

/**
 * CNAME status
 * @class
 */
class CnameStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain name.
         * @type {string || null}
         */
        this.RecordName = null;

        /**
         * The CNAME address.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * The CNAME status. Values:
<li>`active`: Activated</li>
<li>`moved`: Not activated </li>
Note: u200dThis field may return null, indicating that no valid values can be obtained.
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
        this.RecordName = 'RecordName' in params ? params.RecordName : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteAccelerationDomains response structure.
 * @class
 */
class DeleteAccelerationDomainsResponse extends  AbstractModel {
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
 * Standard debugging
 * @class
 */
class StandardDebug extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable standard debugging. Values:
<li>`on`: Enable</li>
<li>`off`: Disable </li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The client IP to allow. It can be an IPv4/IPv6 address or a CIDR block. If not specified, it means to allow any client IP
         * @type {Array.<string> || null}
         */
        this.AllowClientIPList = null;

        /**
         * The time when the standard debugging setting expires. If it is exceeded, this feature u200dbecomes invalid.
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.AllowClientIPList = 'AllowClientIPList' in params ? params.AllowClientIPList : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

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
         * Type of cache purging. Values:
<li>`purge_url`: Purge by the URL</li>
<li>`purge_prefix`: Purge by the directory</li>
<li>`purge_host`: Purge by the hostname</li>
<li>`purge_all`: Purge all caches</li>
<li>`purge_cache_tag`: Purge by the cache-tag </li>For more details, see [Cache Purge](https://intl.cloud.tencent.com/document/product/1552/70759?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Configures how resources under the directory are purged when `Type = purge_prefix`. Values: <li>`invalidate`: Only resources updated under the directory are purged.</li><li>`delete`: All resources under the directory are purged regardless of whether they are updated. </li>Default value: `invalidate`.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * List of cached resources to purge. The format for input depends on the type of cache purging. See examples below for details. <li>By default, non-ASCII characters u200dare escaped based on RFC3986.</li><li>The maximum number of tasks per purging request is determined by the EdgeOne plan. See [Billing Overview (New)](https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1). </li>
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
        this.Method = 'Method' in params ? params.Method : null;
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
         * Applicable area. Values:
<li>`mainland`: Chinese mainland</li>
<li>`overseas`: Regions outside the Chinese mainland</li>
<li>`global`: Global</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * The resource type. Values:
<li>`plan`: Plan resources</li>
<li>`pay-as-you-go`: Pay-as-you-go resources </li>
<li>`value-added`: Value-added resources </li>
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Group = null;

        /**
         * The sites that are associated with the current resources.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneNumber = null;

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
        this.Group = 'Group' in params ? params.Group : null;
        this.ZoneNumber = 'ZoneNumber' in params ? params.ZoneNumber : null;

    }
}

/**
 * Origin authentication parameter
 * @class
 */
class PrivateParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * The parameter name. Values
<li>`AccessKeyId`: Access Key ID</li>
<li>`SecretAccessKey`: Secret Access Key</li>
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * The custom rule
 * @class
 */
class AclUserRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rule name.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * The rule action. Values:
<li>`trans`: Allow the request.</li>
<li>`drop`: Block the request.</li>
<li>`monitor`: Observe the request.</li>
<li>`ban`: Block the IP.</li>
<li>`redirect`: Redirect the request.</li>
<li>`page`: Return the specified page.</li>
<li>`alg`: Verify the request by Javascript challenge.</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The rule status. Values:
<li>`on`: Enabled</li>
<li>`off`: Disabled</li>
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * The custom rule.
         * @type {Array.<AclCondition> || null}
         */
        this.AclConditions = null;

        /**
         * The rule priority. Value range: 0-100.
         * @type {number || null}
         */
        this.RulePriority = null;

        /**
         * The rule ID, which is only used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * The update time, which is only used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The IP blocking duration. Value range: 0 seconds - 2 days. Default value: 0 seconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * The unit of the IP blocking duration. Values:
<li>`second`: Second</li>
<li>`minutes`: Minute</li>
<li>`hour`: Hour</li>Default value: second.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * The name of the custom page, which defaults to an empty string.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The ID of the custom page, which defaults to 0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * The redirection URL, which must be a subdomain name of the site. It defaults to an empty string.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * The response code returned after redirection, which defaults to 0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ResponseCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;

        if (params.AclConditions) {
            this.AclConditions = new Array();
            for (let z in params.AclConditions) {
                let obj = new AclCondition();
                obj.deserialize(params.AclConditions[z]);
                this.AclConditions.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.PunishTimeUnit = 'PunishTimeUnit' in params ? params.PunishTimeUnit : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.ResponseCode = 'ResponseCode' in params ? params.ResponseCode : null;

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
         * Type of cache purging/pre-warming. Values:
<li>`purge_prefix`: Purge by prefix</li>
<li>`purge_url`: Purge by URL</li>
<li>`purge_host`: Purge by hostname</li>
<li>`purge_all`: Purge all caches</li>
<li>`purge_cache_tag`: Purge by cache tag</li><li>`prefetch_url`: Pre-warm by URL</li>
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
 * CreateOriginGroup request structure.
 * @class
 */
class CreateOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The origin type. Values:
<li>`self`: Customer origin</li>
<li>`third_party`: Third-party origin</li>
<li>`cos`: Tencent Cloud COS origin</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * The name of the origin group.
         * @type {string || null}
         */
        this.OriginGroupName = null;

        /**
         * The origin configuration type when `OriginType=self`. Values:
<li>`area`: Configure by region.</li>
<li>`weight`: Configure by weight.</li>
<li>`proto`: Configure by HTTP protocol.</li>When `OriginType=third_party/cos`, leave this field empty.
         * @type {string || null}
         */
        this.ConfigurationType = null;

        /**
         * Details of the origin record.
         * @type {Array.<OriginRecord> || null}
         */
        this.OriginRecords = null;

        /**
         * The origin domain. This field can be specified only when `OriginType=self`.
         * @type {string || null}
         */
        this.HostHeader = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginGroupName = 'OriginGroupName' in params ? params.OriginGroupName : null;
        this.ConfigurationType = 'ConfigurationType' in params ? params.ConfigurationType : null;

        if (params.OriginRecords) {
            this.OriginRecords = new Array();
            for (let z in params.OriginRecords) {
                let obj = new OriginRecord();
                obj.deserialize(params.OriginRecords[z]);
                this.OriginRecords.push(obj);
            }
        }
        this.HostHeader = 'HostHeader' in params ? params.HostHeader : null;

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
         * List of sites
If it’s not specified, all sites are selected by default, and the query period must be within the last 30 days. 
Enter the IDs of sites to query. The maximum query period is determined by the <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query period</a> of the bound plan. 
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of L4 proxy IDs. All L4 proxies will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * The query granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minutes;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: 1 day.</li>If this field is not specified, the granularity will be determined based on the query period. <br>Period ≤ 1 hour: `min`; <br>1 hour < Period ≤ 2 days: `5min`; <br>2 days < period ≤ 7 days: `hour`; <br>Period > 7 days: `day`.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Filters
<li>ruleId<br>   Filter by the specified <strong>forwarding rule ID</strong></li>
<li>proxyId<br>   Filter by the specified <strong>L4 agent ID</strong></li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * Geolocation scope. Values:
<li>`overseas`: Regions outside the Chinese mainland</li>
<li>`mainland`: Chinese mainland</li>
<li>`global`: Global</li>If this field is not specified, the default value `global` is used.
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
<li>`host`:<br>   Filter by <strong>domain name </strong><br>   Type: String<br>   Required: No</li>
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
 * Rule engine nested rule
 * @class
 */
class SubRuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Nested rule settings
         * @type {Array.<SubRule> || null}
         */
        this.Rules = null;

        /**
         * Tag of the rule.
         * @type {Array.<string> || null}
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new SubRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * CreateSecurityIPGroup response structure.
 * @class
 */
class CreateSecurityIPGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP group ID.
         * @type {number || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
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
 * DescribeDDoSAttackEvent request structure.
 * @class
 */
class DescribeDDoSAttackEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the query period.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query period.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of DDoS policy IDs. All policies are selected if this field is not specified.
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * (Required) List of sites. No query results are returned if this field is not specified.
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
         * Geolocation scope. Values: 
<li>`overseas`: Regions outside the Chinese mainland</li>
<li>`mainland`: Chinese mainland</li>
<li>`global`: Global</li>If this field is not specified, the default value `global` is used.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * The sorting field. Values: 
<li>`MaxBandWidth`: Peak bandwidth</li>
<li>`AttackStartTime` Start time of the attack</li>If this field is not specified, the default value `AttackStartTime` is used.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * The sorting method. Values: 
<Li>`asc`: Ascending</li>
<li>`desc`: Descending</li>If this field is not specified, the default value `desc` is used.
         * @type {string || null}
         */
        this.OrderType = null;

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
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ShowDetail = 'ShowDetail' in params ? params.ShowDetail : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;

    }
}

/**
 * Origin group information.
 * @class
 */
class OriginGroup extends  AbstractModel {
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
         * The ID of the origin group.
         * @type {string || null}
         */
        this.OriginGroupId = null;

        /**
         * The origin type. Values:
<li>`self`: Customer origin</li>
<li>`third_party`: Third-party origin</li>
<li>`cos`: Tencent Cloud COS origin</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * The name of the origin group.
         * @type {string || null}
         */
        this.OriginGroupName = null;

        /**
         * The origin configuration type when `OriginType=self`. Values:
<li>`area`: Configure by region.</li>
<li>`weight`: Configure by weight.</li>
<li>`proto`: Configure by HTTP protocol.</li>When `OriginType=third_party/cos`, leave this field empty.
         * @type {string || null}
         */
        this.ConfigurationType = null;

        /**
         * The origin record information.
         * @type {Array.<OriginRecord> || null}
         */
        this.OriginRecords = null;

        /**
         * The update time of the origin group.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The origin domain when `OriginType=self`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.HostHeader = null;

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
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginGroupName = 'OriginGroupName' in params ? params.OriginGroupName : null;
        this.ConfigurationType = 'ConfigurationType' in params ? params.ConfigurationType : null;

        if (params.OriginRecords) {
            this.OriginRecords = new Array();
            for (let z in params.OriginRecords) {
                let obj = new OriginRecord();
                obj.deserialize(params.OriginRecords[z]);
                this.OriginRecords.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.HostHeader = 'HostHeader' in params ? params.HostHeader : null;

    }
}

/**
 * ModifySecurityIPGroup request structure.
 * @class
 */
class ModifySecurityIPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * IP group configuration.
         * @type {IPGroup || null}
         */
        this.IPGroup = null;

        /**
         * Operation type. Valid values: 
<li>`append`: Add information of `Content` to `IPGroup`;</li>
<li>`remove`: Delete information of `Content` from `IPGroup`;</li>
<li>`update`: Replace all information of `IPGroup` and modify the IPGroup name.</li>
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.IPGroup) {
            let obj = new IPGroup();
            obj.deserialize(params.IPGroup)
            this.IPGroup = obj;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * Active bot detection results.
 * @class
 */
class AlgDetectResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The validation result. Values:
<li>`invalid`: Invalid Cookie</li>
<li>`cookie_empty`: No Cookie/Cookie expired</li>
<li>`js_empty`: Client JS disabled</li>
<li>`low`: Low-risk session</li>
<li>`middle`: Medium-risk session</li>
<li>`high`: High-risk session</li>
<li>`timeout`: JS validation timed out</li>
<li>`not_browser`: Invalid browser</li>
<li>`is_bot`: Bot client</li>
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The action. Values:
<li>`drop`: Block</li>
<li>`monitor`: Observe</li>
<li>`silence`: Drop w/o response</li>
<li>`shortdelay`: Add short latency</li>
<li>`longdelay`: Add long latency</li>
         * @type {string || null}
         */
        this.Action = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.Action = 'Action' in params ? params.Action : null;

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
<li>`processing`: Deployment in progress</li>
<li>`deployed`: Deployed</li>
<li>`failed`: Deployment failed</li>
Note: This field may return `null`, indicating that no valid value can be obtained.
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
         * Certificate algorithm.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * DescribeAccelerationDomains request structure.
 * @class
 */
class DescribeAccelerationDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site related with the accelerated domain name.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Filters. Each filter can have up to 20 entries. See below for details: 
<li>`domain-name`:<br>   <strong>Accelerated domain name</strong><br>   Type: String<br>Required: No 
<li>`origin-type`:<br>   <strong>Type of the origin</strong><br>   Type: String<br>   Required: No 
<li>`origin`:<br>   <strong>Primary origin</strong><br>   Type: String<br>   Required: No 
<li>`backup-origin`:<br>   <strong>Secondary origin</strong><br>   Type: String<br>   Required: No 
<li>`domain-cname`:<br>   <strong>Accelerated CNAME</strong><br>   Type: String<br>   Required: No 
<li>`share-cname`:<br>   <strong> Shared CNAME</strong><br>   Type: String<br>   Required: No
         * @type {Array.<AdvancedFilter> || null}
         */
        this.Filters = null;

        /**
         * The sorting order. Values:
<li>`asc`: Ascending order.</li>
<li>`desc`: Descending order.</li>Default value: `asc`.
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * The match mode. Values:
<li>`all`: Return all matches.</li>
<li>`any`: Return any match.</li>Default value: `all`.
         * @type {string || null}
         */
        this.Match = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 200.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset for paginated queries. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The sorting criteria. Values:
<li>`created_on`: Creation time of the accelerated domain name.</li>
<li>`domain-name`: Acceleration domain name.</li>
</li>Default value: `domain-name`.
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
 * HTTP2 origin-pull configuration
 * @class
 */
class UpstreamHttp2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable HTTP2 origin-pull. Valid values: 
<li>`on`: Enable;</li>
<li>`off`: Disable.</li>
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
 * DeleteAliasDomain response structure.
 * @class
 */
class DeleteAliasDomainResponse extends  AbstractModel {
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
 * ModifyAccelerationDomainStatuses request structure.
 * @class
 */
class ModifyAccelerationDomainStatusesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site related with the accelerated domain name.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of accelerated domain names to be modified.
         * @type {Array.<string> || null}
         */
        this.DomainNames = null;

        /**
         * Status of the accelerated domain name. Values:
<li>`online`: Enabled</li>
<li>`offline`: Disabled</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Whether to force suspension when the domain name has associated resources (such as alias domain names and traffic scheduling policies). Values:
<li>`true`: Suspend the domain name and all associated resources.</li>
<li>`true`: Do not suspend the domain name and all associated resources.</li>Default value: `false`.
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DomainNames = 'DomainNames' in params ? params.DomainNames : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * Bot security configuration
 * @class
 */
class BotConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable bot security. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The settings of the bot managed rule. If it is null, the settings that were last configured will be used.
         * @type {BotManagedRule || null}
         */
        this.BotManagedRule = null;

        /**
         * The settings of the client reputation rule. If it is null, the settings that were last configured will be used.
         * @type {BotPortraitRule || null}
         */
        this.BotPortraitRule = null;

        /**
         * The bot intelligence settings. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {IntelligenceRule || null}
         */
        this.IntelligenceRule = null;

        /**
         * Settings of the custom bot rule. If it is null, the settings that were last configured will be used.
         * @type {Array.<BotUserRule> || null}
         */
        this.BotUserRules = null;

        /**
         * Active bot detection rule.
         * @type {Array.<AlgDetectRule> || null}
         */
        this.AlgDetectRule = null;

        /**
         * Settings of the bot managed rule. It is only used for output.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<BotUserRule> || null}
         */
        this.Customizes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.BotManagedRule) {
            let obj = new BotManagedRule();
            obj.deserialize(params.BotManagedRule)
            this.BotManagedRule = obj;
        }

        if (params.BotPortraitRule) {
            let obj = new BotPortraitRule();
            obj.deserialize(params.BotPortraitRule)
            this.BotPortraitRule = obj;
        }

        if (params.IntelligenceRule) {
            let obj = new IntelligenceRule();
            obj.deserialize(params.IntelligenceRule)
            this.IntelligenceRule = obj;
        }

        if (params.BotUserRules) {
            this.BotUserRules = new Array();
            for (let z in params.BotUserRules) {
                let obj = new BotUserRule();
                obj.deserialize(params.BotUserRules[z]);
                this.BotUserRules.push(obj);
            }
        }

        if (params.AlgDetectRule) {
            this.AlgDetectRule = new Array();
            for (let z in params.AlgDetectRule) {
                let obj = new AlgDetectRule();
                obj.deserialize(params.AlgDetectRule[z]);
                this.AlgDetectRule.push(obj);
            }
        }

        if (params.Customizes) {
            this.Customizes = new Array();
            for (let z in params.Customizes) {
                let obj = new BotUserRule();
                obj.deserialize(params.Customizes[z]);
                this.Customizes.push(obj);
            }
        }

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

module.exports = {
    CreatePlanForZoneResponse: CreatePlanForZoneResponse,
    DownloadL7LogsRequest: DownloadL7LogsRequest,
    Compression: Compression,
    DeleteRulesRequest: DeleteRulesRequest,
    ExceptUserRuleCondition: ExceptUserRuleCondition,
    CheckCnameStatusResponse: CheckCnameStatusResponse,
    DescribeOriginGroupResponse: DescribeOriginGroupResponse,
    DescribeTopL7CacheDataRequest: DescribeTopL7CacheDataRequest,
    DeleteApplicationProxyResponse: DeleteApplicationProxyResponse,
    Https: Https,
    AlgDetectRule: AlgDetectRule,
    SecEntryValue: SecEntryValue,
    DescribeZonesRequest: DescribeZonesRequest,
    L4OfflineLog: L4OfflineLog,
    DiffIPWhitelist: DiffIPWhitelist,
    DeleteSecurityIPGroupResponse: DeleteSecurityIPGroupResponse,
    ModifyRuleRequest: ModifyRuleRequest,
    OriginRecord: OriginRecord,
    DescribePrefetchTasksResponse: DescribePrefetchTasksResponse,
    AdvancedFilter: AdvancedFilter,
    DeleteApplicationProxyRequest: DeleteApplicationProxyRequest,
    OriginDetail: OriginDetail,
    DescribeDDoSAttackDataResponse: DescribeDDoSAttackDataResponse,
    DescribeZoneSettingRequest: DescribeZoneSettingRequest,
    ModifyZoneStatusRequest: ModifyZoneStatusRequest,
    DescribeIdentificationsResponse: DescribeIdentificationsResponse,
    ModifySecurityPolicyRequest: ModifySecurityPolicyRequest,
    Waf: Waf,
    ModifyApplicationProxyRuleStatusResponse: ModifyApplicationProxyRuleStatusResponse,
    ModifyZoneSettingRequest: ModifyZoneSettingRequest,
    RuleRewriteActionParams: RuleRewriteActionParams,
    CreateApplicationProxyResponse: CreateApplicationProxyResponse,
    BotUserRule: BotUserRule,
    ModifyOriginGroupResponse: ModifyOriginGroupResponse,
    DeleteAccelerationDomainsRequest: DeleteAccelerationDomainsRequest,
    ExceptUserRuleScope: ExceptUserRuleScope,
    ModifyAliasDomainRequest: ModifyAliasDomainRequest,
    DescribeAvailablePlansRequest: DescribeAvailablePlansRequest,
    OriginInfo: OriginInfo,
    Tag: Tag,
    ModifySecurityPolicyResponse: ModifySecurityPolicyResponse,
    DescribeHostsSettingResponse: DescribeHostsSettingResponse,
    ModifyZoneStatusResponse: ModifyZoneStatusResponse,
    ModifyZoneResponse: ModifyZoneResponse,
    AlgDetectSession: AlgDetectSession,
    ModifyZoneRequest: ModifyZoneRequest,
    ModifyApplicationProxyStatusResponse: ModifyApplicationProxyStatusResponse,
    DeleteZoneResponse: DeleteZoneResponse,
    CreateRuleResponse: CreateRuleResponse,
    BotExtendAction: BotExtendAction,
    CreatePurgeTaskResponse: CreatePurgeTaskResponse,
    DeleteApplicationProxyRuleResponse: DeleteApplicationProxyRuleResponse,
    DescribeRulesResponse: DescribeRulesResponse,
    TimingDataRecord: TimingDataRecord,
    OriginProtectionInfo: OriginProtectionInfo,
    DescribeOriginProtectionResponse: DescribeOriginProtectionResponse,
    BindZoneToPlanResponse: BindZoneToPlanResponse,
    ExceptConfig: ExceptConfig,
    DeleteOriginGroupRequest: DeleteOriginGroupRequest,
    AliasDomain: AliasDomain,
    AclCondition: AclCondition,
    DescribeAliasDomainsRequest: DescribeAliasDomainsRequest,
    SkipCondition: SkipCondition,
    IpTableRule: IpTableRule,
    L7OfflineLog: L7OfflineLog,
    ModifyHostsCertificateRequest: ModifyHostsCertificateRequest,
    ApplicationProxyRule: ApplicationProxyRule,
    SmartRouting: SmartRouting,
    ModifyApplicationProxyRequest: ModifyApplicationProxyRequest,
    ModifyAccelerationDomainStatusesResponse: ModifyAccelerationDomainStatusesResponse,
    Zone: Zone,
    DescribeRulesSettingResponse: DescribeRulesSettingResponse,
    RuleExtraParameter: RuleExtraParameter,
    RulesSettingAction: RulesSettingAction,
    DDoSAttackEvent: DDoSAttackEvent,
    ClientIpHeader: ClientIpHeader,
    DescribeDDoSAttackTopDataRequest: DescribeDDoSAttackTopDataRequest,
    Quic: Quic,
    Ipv6: Ipv6,
    ModifyAccelerationDomainRequest: ModifyAccelerationDomainRequest,
    DescribeRulesRequest: DescribeRulesRequest,
    DescribeContentQuotaResponse: DescribeContentQuotaResponse,
    TopDataRecord: TopDataRecord,
    AclConfig: AclConfig,
    ModifyZoneSettingResponse: ModifyZoneSettingResponse,
    AlgDetectJS: AlgDetectJS,
    AccelerationDomain: AccelerationDomain,
    DeleteSecurityIPGroupRequest: DeleteSecurityIPGroupRequest,
    RateLimitTemplateDetail: RateLimitTemplateDetail,
    Origin: Origin,
    WafConfig: WafConfig,
    Grpc: Grpc,
    SlowRateConfig: SlowRateConfig,
    ServerCertInfo: ServerCertInfo,
    CreateAliasDomainRequest: CreateAliasDomainRequest,
    CreateAliasDomainResponse: CreateAliasDomainResponse,
    DescribeOriginProtectionRequest: DescribeOriginProtectionRequest,
    ClientIpCountry: ClientIpCountry,
    CreatePrefetchTaskRequest: CreatePrefetchTaskRequest,
    DeleteApplicationProxyRuleRequest: DeleteApplicationProxyRuleRequest,
    DescribeApplicationProxiesResponse: DescribeApplicationProxiesResponse,
    DescribeTopL7AnalysisDataRequest: DescribeTopL7AnalysisDataRequest,
    FileAscriptionInfo: FileAscriptionInfo,
    DescribeAccelerationDomainsResponse: DescribeAccelerationDomainsResponse,
    ZoneSetting: ZoneSetting,
    DescribeTopL7CacheDataResponse: DescribeTopL7CacheDataResponse,
    DescribeOverviewL7DataRequest: DescribeOverviewL7DataRequest,
    SwitchConfig: SwitchConfig,
    IdentifyZoneResponse: IdentifyZoneResponse,
    WebSocket: WebSocket,
    DDoSBlockData: DDoSBlockData,
    VanityNameServers: VanityNameServers,
    RuleChoicePropertiesItem: RuleChoicePropertiesItem,
    WafRule: WafRule,
    SecurityConfig: SecurityConfig,
    DescribePrefetchTasksRequest: DescribePrefetchTasksRequest,
    MaxAge: MaxAge,
    ModifyAliasDomainStatusResponse: ModifyAliasDomainStatusResponse,
    RuleCodeActionParams: RuleCodeActionParams,
    IPGroup: IPGroup,
    DescribeTimingL7AnalysisDataRequest: DescribeTimingL7AnalysisDataRequest,
    CreatePrefetchTaskResponse: CreatePrefetchTaskResponse,
    NoCache: NoCache,
    DescribeDefaultCertificatesRequest: DescribeDefaultCertificatesRequest,
    DescribeAliasDomainsResponse: DescribeAliasDomainsResponse,
    SecurityType: SecurityType,
    IPWhitelist: IPWhitelist,
    DDoS: DDoS,
    CreateZoneRequest: CreateZoneRequest,
    PlanInfo: PlanInfo,
    DescribeTimingL7CacheDataRequest: DescribeTimingL7CacheDataRequest,
    Task: Task,
    ModifyRuleResponse: ModifyRuleResponse,
    AscriptionInfo: AscriptionInfo,
    RuleItem: RuleItem,
    FirstPartConfig: FirstPartConfig,
    DescribeDDoSAttackEventResponse: DescribeDDoSAttackEventResponse,
    CreateApplicationProxyRuleRequest: CreateApplicationProxyRuleRequest,
    Cache: Cache,
    ForceRedirect: ForceRedirect,
    RateLimitConfig: RateLimitConfig,
    DownloadL4LogsRequest: DownloadL4LogsRequest,
    CodeAction: CodeAction,
    DetailHost: DetailHost,
    Identification: Identification,
    DescribeDDoSAttackDataRequest: DescribeDDoSAttackDataRequest,
    CachePrefresh: CachePrefresh,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    DescribeTimingL7AnalysisDataResponse: DescribeTimingL7AnalysisDataResponse,
    ImageOptimize: ImageOptimize,
    DescribeApplicationProxiesRequest: DescribeApplicationProxiesRequest,
    DescribeContentQuotaRequest: DescribeContentQuotaRequest,
    BotPortraitRule: BotPortraitRule,
    RuleCondition: RuleCondition,
    RulesProperties: RulesProperties,
    DescribeOverviewL7DataResponse: DescribeOverviewL7DataResponse,
    Hsts: Hsts,
    RateLimitTemplate: RateLimitTemplate,
    ModifyHostsCertificateResponse: ModifyHostsCertificateResponse,
    CreateRuleRequest: CreateRuleRequest,
    TemplateConfig: TemplateConfig,
    TopEntry: TopEntry,
    VanityNameServersIps: VanityNameServersIps,
    SlowPostConfig: SlowPostConfig,
    AccelerateMainland: AccelerateMainland,
    ExceptUserRule: ExceptUserRule,
    CreateApplicationProxyRuleResponse: CreateApplicationProxyRuleResponse,
    RateLimitUserRule: RateLimitUserRule,
    SubRule: SubRule,
    CreatePlanForZoneRequest: CreatePlanForZoneRequest,
    ModifyAliasDomainStatusRequest: ModifyAliasDomainStatusRequest,
    TimingDataItem: TimingDataItem,
    CreateApplicationProxyRequest: CreateApplicationProxyRequest,
    CC: CC,
    IntelligenceRuleItem: IntelligenceRuleItem,
    IntelligenceRule: IntelligenceRule,
    PostMaxSize: PostMaxSize,
    Sv: Sv,
    Rule: Rule,
    Filter: Filter,
    CreateAccelerationDomainResponse: CreateAccelerationDomainResponse,
    DescribeTimingL4DataResponse: DescribeTimingL4DataResponse,
    CreateZoneResponse: CreateZoneResponse,
    Action: Action,
    ApplicationProxy: ApplicationProxy,
    ModifyApplicationProxyResponse: ModifyApplicationProxyResponse,
    ModifySecurityIPGroupResponse: ModifySecurityIPGroupResponse,
    CacheKey: CacheKey,
    ModifyOriginGroupRequest: ModifyOriginGroupRequest,
    DownloadL4LogsResponse: DownloadL4LogsResponse,
    DescribeTimingL7CacheDataResponse: DescribeTimingL7CacheDataResponse,
    RateLimitIntelligence: RateLimitIntelligence,
    IpTableConfig: IpTableConfig,
    ModifyApplicationProxyStatusRequest: ModifyApplicationProxyStatusRequest,
    DeleteOriginGroupResponse: DeleteOriginGroupResponse,
    Header: Header,
    RuleAndConditions: RuleAndConditions,
    DropPageConfig: DropPageConfig,
    SecEntry: SecEntry,
    DescribeIdentificationsRequest: DescribeIdentificationsRequest,
    DescribeDefaultCertificatesResponse: DescribeDefaultCertificatesResponse,
    PartialModule: PartialModule,
    CreateOriginGroupResponse: CreateOriginGroupResponse,
    ModifyApplicationProxyRuleStatusRequest: ModifyApplicationProxyRuleStatusRequest,
    AccelerateType: AccelerateType,
    BindZoneToPlanRequest: BindZoneToPlanRequest,
    CreateAccelerationDomainRequest: CreateAccelerationDomainRequest,
    FollowOrigin: FollowOrigin,
    DeleteZoneRequest: DeleteZoneRequest,
    BotManagedRule: BotManagedRule,
    NormalAction: NormalAction,
    TopDetailData: TopDetailData,
    DescribeOriginGroupRequest: DescribeOriginGroupRequest,
    ModifyApplicationProxyRuleResponse: ModifyApplicationProxyRuleResponse,
    DescribeZoneSettingResponse: DescribeZoneSettingResponse,
    AiRule: AiRule,
    CreateSecurityIPGroupRequest: CreateSecurityIPGroupRequest,
    DropPageDetail: DropPageDetail,
    DeleteRulesResponse: DeleteRulesResponse,
    QueryCondition: QueryCondition,
    IdentifyZoneRequest: IdentifyZoneRequest,
    CacheConfig: CacheConfig,
    ModifyApplicationProxyRuleRequest: ModifyApplicationProxyRuleRequest,
    ModifyAccelerationDomainResponse: ModifyAccelerationDomainResponse,
    FailReason: FailReason,
    DescribeRulesSettingRequest: DescribeRulesSettingRequest,
    DescribeZonesResponse: DescribeZonesResponse,
    ModifyAliasDomainResponse: ModifyAliasDomainResponse,
    RewriteAction: RewriteAction,
    CheckCnameStatusRequest: CheckCnameStatusRequest,
    DeleteAliasDomainRequest: DeleteAliasDomainRequest,
    CnameStatus: CnameStatus,
    DeleteAccelerationDomainsResponse: DeleteAccelerationDomainsResponse,
    DescribeTopL7AnalysisDataResponse: DescribeTopL7AnalysisDataResponse,
    StandardDebug: StandardDebug,
    RuleNormalActionParams: RuleNormalActionParams,
    CreatePurgeTaskRequest: CreatePurgeTaskRequest,
    Resource: Resource,
    PrivateParameter: PrivateParameter,
    DownloadL7LogsResponse: DownloadL7LogsResponse,
    AclUserRule: AclUserRule,
    Quota: Quota,
    CreateOriginGroupRequest: CreateOriginGroupRequest,
    DescribeTimingL4DataRequest: DescribeTimingL4DataRequest,
    DescribeHostsSettingRequest: DescribeHostsSettingRequest,
    SubRuleItem: SubRuleItem,
    CreateSecurityIPGroupResponse: CreateSecurityIPGroupResponse,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    DescribeAvailablePlansResponse: DescribeAvailablePlansResponse,
    DescribeDDoSAttackEventRequest: DescribeDDoSAttackEventRequest,
    OriginGroup: OriginGroup,
    ModifySecurityIPGroupRequest: ModifySecurityIPGroupRequest,
    AlgDetectResult: AlgDetectResult,
    QueryString: QueryString,
    DefaultServerCertInfo: DefaultServerCertInfo,
    DescribeAccelerationDomainsRequest: DescribeAccelerationDomainsRequest,
    UpstreamHttp2: UpstreamHttp2,
    TopEntryValue: TopEntryValue,
    OfflineCache: OfflineCache,
    DescribeDDoSAttackTopDataResponse: DescribeDDoSAttackTopDataResponse,
    DeleteAliasDomainResponse: DeleteAliasDomainResponse,
    ModifyAccelerationDomainStatusesRequest: ModifyAccelerationDomainStatusesRequest,
    BotConfig: BotConfig,
    TimingTypeValue: TimingTypeValue,

}
