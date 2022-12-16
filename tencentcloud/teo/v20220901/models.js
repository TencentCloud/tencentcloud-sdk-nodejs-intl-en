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
 * ModifyLoadBalancingStatus response structure.
 * @class
 */
class ModifyLoadBalancingStatusResponse extends  AbstractModel {
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
 * The site test information
 * @class
 */
class SpeedTestingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task status. Values:
<li>`200`: The task completed.</li>
<li>`100`: The task is running.</li>
<li>`503`: The task failed.</li>
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * ID of the site test task.
         * @type {string || null}
         */
        this.TestId = null;

        /**
         * The settings of the site test task.
         * @type {SpeedTestingConfig || null}
         */
        this.SpeedTestingConfig = null;

        /**
         * The site test result.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SpeedTestingStatistics || null}
         */
        this.SpeedTestingStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.TestId = 'TestId' in params ? params.TestId : null;

        if (params.SpeedTestingConfig) {
            let obj = new SpeedTestingConfig();
            obj.deserialize(params.SpeedTestingConfig)
            this.SpeedTestingConfig = obj;
        }

        if (params.SpeedTestingStatistics) {
            let obj = new SpeedTestingStatistics();
            obj.deserialize(params.SpeedTestingStatistics)
            this.SpeedTestingStatistics = obj;
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
 * DDoS mitigation configuration
 * @class
 */
class ShieldArea extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * The type of protected resources. Values:
<li>`domain`: Layer-7 subdomain name</li>
<li>`application`: Layer-4 proxy</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The layer-7 site name.
         * @type {string || null}
         */
        this.EntityName = null;

        /**
         * The layer-7 subdomain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DDoSHost> || null}
         */
        this.DDoSHosts = null;

        /**
         * Number of layer-4 TCP forwarding rules
         * @type {number || null}
         */
        this.TcpNum = null;

        /**
         * Number of layer-4 UDP forwarding rules
         * @type {number || null}
         */
        this.UdpNum = null;

        /**
         * Name of the protected resource
         * @type {string || null}
         */
        this.Entity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;

        if (params.DDoSHosts) {
            this.DDoSHosts = new Array();
            for (let z in params.DDoSHosts) {
                let obj = new DDoSHost();
                obj.deserialize(params.DDoSHosts[z]);
                this.DDoSHosts.push(obj);
            }
        }
        this.TcpNum = 'TcpNum' in params ? params.TcpNum : null;
        this.UdpNum = 'UdpNum' in params ? params.UdpNum : null;
        this.Entity = 'Entity' in params ? params.Entity : null;

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
         * Whether to allow private access to buckets when `OriginType=cos`. Values:
<li>`on`: Allow private access.</li>
<li>`off`: Allow public access.</li>
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * Rate limiting configuration
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
         * Type of the shipping task. Values:
<li>`cls`: Ship logs to CLS.</li>
<li>`custom_endpoint`: Ship logs to custom APIs.</li>
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
<li>`none`: Off</li>
<li>`hosting`: Managed SSL certificate</li>
<li>`apply`: Free certificate</li>Default value: none
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
 * The site’s load speed across regions.
 * @class
 */
class SpeedTestingDetailData extends  AbstractModel {
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
         * The site performance across regions.
         * @type {Array.<DistrictStatistics> || null}
         */
        this.DistrictStatistics = null;

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

        if (params.DistrictStatistics) {
            this.DistrictStatistics = new Array();
            for (let z in params.DistrictStatistics) {
                let obj = new DistrictStatistics();
                obj.deserialize(params.DistrictStatistics[z]);
                this.DistrictStatistics.push(obj);
            }
        }

    }
}

/**
 * Bot managed rule details
 * @class
 */
class BotManagedRuleDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * The rule description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Rule type
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * The rule status.
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * DDoS protection against protocol and connection attacks
 * @class
 */
class DDoSAntiPly extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable TCP protocol blocking. Values:
<li>`off`: Disable</li>
<li>`on`: Enable</li>
         * @type {string || null}
         */
        this.DropTcp = null;

        /**
         * Whether to enable UDP protocol blocking. Values:
<li>`off`: Disable</li>
<li>`on`: Enable</li>
         * @type {string || null}
         */
        this.DropUdp = null;

        /**
         * Whether to enable ICMP protocol blocking. Values:
<li>`off`: Disable</li>
<li>`on`: Enable</li>
         * @type {string || null}
         */
        this.DropIcmp = null;

        /**
         * Whether to enable blocking of other protocols. Values:
<li>`off`: Disable</li>
<li>`on`: Enable</li>
         * @type {string || null}
         */
        this.DropOther = null;

        /**
         * Maximum number of new connections to the origin per second. Value range: 0–4294967295.
         * @type {number || null}
         */
        this.SourceCreateLimit = null;

        /**
         * Maximum number of concurrent connections to the origin. Value range: 0–4294967295.
         * @type {number || null}
         */
        this.SourceConnectLimit = null;

        /**
         * Maximum number of new connections to the destination port per second. Value range: 0–4294967295.
         * @type {number || null}
         */
        this.DestinationCreateLimit = null;

        /**
         * Maximum number of concurrent connections to the destination port. Value range: 0–4294967295.
         * @type {number || null}
         */
        this.DestinationConnectLimit = null;

        /**
         * Maximum number of abnormal connections per second. Value range: 0–4294967295.
         * @type {number || null}
         */
        this.AbnormalConnectNum = null;

        /**
         * Maximum percentage of abnormal SYN packets. Value range: 0–100.
         * @type {number || null}
         */
        this.AbnormalSynRatio = null;

        /**
         * Maximum number of abnormal SYN packets. Value range: 0–65535.
         * @type {number || null}
         */
        this.AbnormalSynNum = null;

        /**
         * Maximum number of detected connections timed out per second. Value range: 0–65535.
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * Whether to enable null session protection. Values:
<li>`off`: Disable</li>
<li>`on`: Enable</li>
         * @type {string || null}
         */
        this.EmptyConnectProtect = null;

        /**
         * Whether to enable UDP fragmentation. Values:
<li>`off`: Disable</li>
<li>`on`: Enable</li>
         * @type {string || null}
         */
        this.UdpShard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DropTcp = 'DropTcp' in params ? params.DropTcp : null;
        this.DropUdp = 'DropUdp' in params ? params.DropUdp : null;
        this.DropIcmp = 'DropIcmp' in params ? params.DropIcmp : null;
        this.DropOther = 'DropOther' in params ? params.DropOther : null;
        this.SourceCreateLimit = 'SourceCreateLimit' in params ? params.SourceCreateLimit : null;
        this.SourceConnectLimit = 'SourceConnectLimit' in params ? params.SourceConnectLimit : null;
        this.DestinationCreateLimit = 'DestinationCreateLimit' in params ? params.DestinationCreateLimit : null;
        this.DestinationConnectLimit = 'DestinationConnectLimit' in params ? params.DestinationConnectLimit : null;
        this.AbnormalConnectNum = 'AbnormalConnectNum' in params ? params.AbnormalConnectNum : null;
        this.AbnormalSynRatio = 'AbnormalSynRatio' in params ? params.AbnormalSynRatio : null;
        this.AbnormalSynNum = 'AbnormalSynNum' in params ? params.AbnormalSynNum : null;
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.EmptyConnectProtect = 'EmptyConnectProtect' in params ? params.EmptyConnectProtect : null;
        this.UdpShard = 'UdpShard' in params ? params.UdpShard : null;

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
 * DescribeSecurityPolicyList response structure.
 * @class
 */
class DescribeSecurityPolicyListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of protected resources
         * @type {Array.<SecurityEntity> || null}
         */
        this.SecurityEntities = null;

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

        if (params.SecurityEntities) {
            this.SecurityEntities = new Array();
            for (let z in params.SecurityEntities) {
                let obj = new SecurityEntity();
                obj.deserialize(params.SecurityEntities[z]);
                this.SecurityEntities.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Origin-pull condition
 * @class
 */
class OriginGroupCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Match type. Values:
<li>`url`: Partial URL path under the current site, such as "/example" and "/example/foo.jpg". You can use an asterisk (*) to indicate all values and a question mark (?) to indicate any single character.
</li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * The operator. Values:
<li>`equal`: Equals</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Values of the match type.
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
        this.Target = 'Target' in params ? params.Target : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Values = 'Values' in params ? params.Values : null;

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
 * DDoS mitigation configuration
 * @class
 */
class DDoSRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DDoS mitigation level. If it is null, the setting that was last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DDoSStatusInfo || null}
         */
        this.DDoSStatusInfo = null;

        /**
         * The regional blocking settings. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DDoSGeoIp || null}
         */
        this.DDoSGeoIp = null;

        /**
         * The IP blocklist/allowlist. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DDoSAllowBlock || null}
         */
        this.DDoSAllowBlock = null;

        /**
         * The protocol and connection protection settings. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DDoSAntiPly || null}
         */
        this.DDoSAntiPly = null;

        /**
         * The feature filtering settings. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DDoSPacketFilter || null}
         */
        this.DDoSPacketFilter = null;

        /**
         * The port filtering settings. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DDoSAcl || null}
         */
        this.DDoSAcl = null;

        /**
         * Whether to enable DDoS mitigation. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>If it is null, the setting that was last configured will be used.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Whether to enable UDP fragmentation. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>It is required only when used as an output parameter.
         * @type {string || null}
         */
        this.UdpShardOpen = null;

        /**
         * The settings of the rate limiting rule. If it is null, the settings that were last configured will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DDoSSpeedLimit || null}
         */
        this.DDoSSpeedLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DDoSStatusInfo) {
            let obj = new DDoSStatusInfo();
            obj.deserialize(params.DDoSStatusInfo)
            this.DDoSStatusInfo = obj;
        }

        if (params.DDoSGeoIp) {
            let obj = new DDoSGeoIp();
            obj.deserialize(params.DDoSGeoIp)
            this.DDoSGeoIp = obj;
        }

        if (params.DDoSAllowBlock) {
            let obj = new DDoSAllowBlock();
            obj.deserialize(params.DDoSAllowBlock)
            this.DDoSAllowBlock = obj;
        }

        if (params.DDoSAntiPly) {
            let obj = new DDoSAntiPly();
            obj.deserialize(params.DDoSAntiPly)
            this.DDoSAntiPly = obj;
        }

        if (params.DDoSPacketFilter) {
            let obj = new DDoSPacketFilter();
            obj.deserialize(params.DDoSPacketFilter)
            this.DDoSPacketFilter = obj;
        }

        if (params.DDoSAcl) {
            let obj = new DDoSAcl();
            obj.deserialize(params.DDoSAcl)
            this.DDoSAcl = obj;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.UdpShardOpen = 'UdpShardOpen' in params ? params.UdpShardOpen : null;

        if (params.DDoSSpeedLimit) {
            let obj = new DDoSSpeedLimit();
            obj.deserialize(params.DDoSSpeedLimit)
            this.DDoSSpeedLimit = obj;
        }

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
 * ModifyDDoSPolicyHost response structure.
 * @class
 */
class ModifyDDoSPolicyHostResponse extends  AbstractModel {
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
 * DDoS feature filtering
 * @class
 */
class DDoSPacketFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of feature filtering rules.
         * @type {Array.<DDoSFeaturesFilter> || null}
         */
        this.DDoSFeaturesFilters = null;

        /**
         * Whether to clear feature filtering rules. Values:
<li>`off`: Clear feature filtering rules.</li>
<li>`on`: Configure feature filtering rules. In this case, `DDoSFeaturesFilters` needs to be specified.</li>
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

        if (params.DDoSFeaturesFilters) {
            this.DDoSFeaturesFilters = new Array();
            for (let z in params.DDoSFeaturesFilters) {
                let obj = new DDoSFeaturesFilter();
                obj.deserialize(params.DDoSFeaturesFilters[z]);
                this.DDoSFeaturesFilters.push(obj);
            }
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeSpeedTestingMetricData response structure.
 * @class
 */
class DescribeSpeedTestingMetricDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site test metrics.
         * @type {SpeedTestingMetricData || null}
         */
        this.SpeedTestingMetricData = null;

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

        if (params.SpeedTestingMetricData) {
            let obj = new SpeedTestingMetricData();
            obj.deserialize(params.SpeedTestingMetricData)
            this.SpeedTestingMetricData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateCustomErrorPage request structure.
 * @class
 */
class CreateCustomErrorPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name.
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Name of the file specified to be returned.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The custom page content, which is passed after being URL-encoded.
         * @type {string || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;

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
 * Protected resource
 * @class
 */
class SecurityEntity extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name/layer-4 proxy
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * The type. Values:
<li>`domain`: Layer-7 subdomain name</li>
<li>`application`: Layer-4 proxy name</li>
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
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;

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
 * DescribeDDoSPolicy response structure.
 * @class
 */
class DescribeDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS mitigation configuration.
         * @type {DDoSRule || null}
         */
        this.DDoSRule = null;

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

        if (params.DDoSRule) {
            let obj = new DDoSRule();
            obj.deserialize(params.DDoSRule)
            this.DDoSRule = obj;
        }
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
        this.OriginPort = 'OriginPort' in params ? params.OriginPort : null;

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
 * DescribeSecurityPolicyList request structure.
 * @class
 */
class DescribeSecurityPolicyListRequest extends  AbstractModel {
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
 * DescribeDDoSPolicy request structure.
 * @class
 */
class DescribeDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Policy ID
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * The DDoS rate limits
 * @class
 */
class DDoSSpeedLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * The limit on origin packet rate. Value range: 1 pps - 1000 Gpps. If 0 is passed, the packet rate will not be restricted.
         * @type {string || null}
         */
        this.PackageLimit = null;

        /**
         * The limit on origin traffic rate. Value range: 1 bps - 10000 Gbps. If 0 is passed, the traffic rate will not be restricted.
         * @type {string || null}
         */
        this.FluxLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageLimit = 'PackageLimit' in params ? params.PackageLimit : null;
        this.FluxLimit = 'FluxLimit' in params ? params.FluxLimit : null;

    }
}

/**
 * Details of the intelligent rate limiting rule
 * @class
 */
class RateLimitIntelligenceRuleDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The client IP detected.
         * @type {string || null}
         */
        this.MatchContent = null;

        /**
         * The action taken.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * The expiration time.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * The rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * The action status. `allowed` indicates that the request is allowed.
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
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * The optimization suggestions
 * @class
 */
class OptimizeAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * The optimization metric. Values:
<li>`Http2`</li>
<li>`Http3`</li>
<li>`Brotli`</li>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The network environment.
         * @type {string || null}
         */
        this.Connectivity = null;

        /**
         * The estimated load time, in milliseconds.
         * @type {number || null}
         */
        this.Value = null;

        /**
         * The estimated improvement ratio, in %.
         * @type {number || null}
         */
        this.Ratio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Connectivity = 'Connectivity' in params ? params.Connectivity : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;

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
 * ModifyLoadBalancing request structure.
 * @class
 */
class ModifyLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The load balancer ID.
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * The proxy mode. Values:
<li>`dns_only`: Only DNS</li>
<li>`proxied`: Proxied</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The ID of the primary origin group.
         * @type {string || null}
         */
        this.OriginGroupId = null;

        /**
         * The ID of the secondary origin group (only available when `Type=proxied`). If not specified, it indicates that secondary origins are not used.
         * @type {string || null}
         */
        this.BackupOriginGroupId = null;

        /**
         * When `Type=dns_only`, it indicates the amount of time that DNS records remain in the cache of a DNS server.
Value range: 60-86400 (in seconds). If it's not specified, the default value 600 will be used.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * The origin-pull type. Values:
<li>`normal`: Primary/Secondary origin-pull</li>
<li>`advanced`: Advanced origin-pull (only used when `Type=proxied`)</li>If it is left empty, primary/secondary origin-pull is applied.
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Advanced origin-pull configuration. This field is valid when `OriginType=advanced`.
If it is left empty, this configuration is not used.
         * @type {Array.<AdvancedOriginGroup> || null}
         */
        this.AdvancedOriginGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;
        this.BackupOriginGroupId = 'BackupOriginGroupId' in params ? params.BackupOriginGroupId : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;

        if (params.AdvancedOriginGroups) {
            this.AdvancedOriginGroups = new Array();
            for (let z in params.AdvancedOriginGroups) {
                let obj = new AdvancedOriginGroup();
                obj.deserialize(params.AdvancedOriginGroups[z]);
                this.AdvancedOriginGroups.push(obj);
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
 * WAF managed rule group
 * @class
 */
class WafGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action to be executed. Values:
<li>`block`: Block</li>
<li>`observe: Observe</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The protection level. Values:
<li>`loose`: Loose</li>
<li>`normal`: Moderate</li>
<li>`strict`: Strict</li>
<li>`stricter`: Super strict</li>
<li>`custom`: Custom</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * ID of the rule type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TypeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.TypeId = 'TypeId' in params ? params.TypeId : null;

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
 * The managed rule
 * @class
 */
class WafGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of managed rule groups.
         * @type {Array.<WafGroupDetail> || null}
         */
        this.WafGroupDetails = null;

        /**
         * The level of the managed rule group
<li>`loose`: Loose</li>
<li>`normal`: Moderate</li>
<li>`strict`: Strict</li>
<li>`stricter`: Super strict</li>
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Reserved field.
         * @type {string || null}
         */
        this.Act = null;

        /**
         * The mode. Values:
<li>`block`: Block</li>
<li>`observe`: Observer</li>
         * @type {string || null}
         */
        this.Mode = null;

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

        if (params.WafGroupDetails) {
            this.WafGroupDetails = new Array();
            for (let z in params.WafGroupDetails) {
                let obj = new WafGroupDetail();
                obj.deserialize(params.WafGroupDetails[z]);
                this.WafGroupDetails.push(obj);
            }
        }
        this.Level = 'Level' in params ? params.Level : null;
        this.Act = 'Act' in params ? params.Act : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Switch = 'Switch' in params ? params.Switch : null;

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

        /**
         * The attack content.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackContent = null;

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
        this.AttackContent = 'AttackContent' in params ? params.AttackContent : null;

    }
}

/**
 * DescribeSpeedTestingQuota response structure.
 * @class
 */
class DescribeSpeedTestingQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The quota limit on site tests.
         * @type {SpeedTestingQuota || null}
         */
        this.SpeedTestingQuota = null;

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

        if (params.SpeedTestingQuota) {
            let obj = new SpeedTestingQuota();
            obj.deserialize(params.SpeedTestingQuota)
            this.SpeedTestingQuota = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyAlarmDefaultThreshold response structure.
 * @class
 */
class ModifyAlarmDefaultThresholdResponse extends  AbstractModel {
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
 * ModifySecurityWafGroupPolicy request structure.
 * @class
 */
class ModifySecurityWafGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID. You must specify either "ZoneId+Entity" or "TemplateId".
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name. You must specify either "ZoneId+Entity" or "TemplateId". 
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Switch. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>If not specified, it defaults to the setting that was last configured.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The rule level. Values:
<li>`loose`: Loose</li>
<li>`normal`: Moderate</li>
<li>`strict`: Strict</li>
<li>`stricter`: Super strict</li>
<li>`custom`: Custom</li>If not specified, it defaults to the setting that was last configured.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * The rule action. Values:
<li>`block`: Block</li>
<li>`observe`: Observe</li>If not specified, it defaults to the setting that was last configured.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * The settings of the managed rule. If not specified, it defaults to the settings that were last configured.
         * @type {WafRule || null}
         */
        this.WafRules = null;

        /**
         * The settings of the AI rule engine. If not specified, it defaults to the settings that were last configured.
         * @type {AiRule || null}
         */
        this.AiRule = null;

        /**
         * The settings of the managed rule group. If not specified, it defaults to the settings that were last configured.
         * @type {Array.<WafGroup> || null}
         */
        this.WafGroups = null;

        /**
         * The template ID. You must specify either this field or "ZoneId+Entity".
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
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.WafRules) {
            let obj = new WafRule();
            obj.deserialize(params.WafRules)
            this.WafRules = obj;
        }

        if (params.AiRule) {
            let obj = new AiRule();
            obj.deserialize(params.AiRule)
            this.AiRule = obj;
        }

        if (params.WafGroups) {
            this.WafGroups = new Array();
            for (let z in params.WafGroups) {
                let obj = new WafGroup();
                obj.deserialize(params.WafGroups[z]);
                this.WafGroups.push(obj);
            }
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

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
 * The site’s load speed across regions
 * @class
 */
class DistrictStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ISO 3166-2 Alpha-2 country code. For the list of country codes, see [ISO 3166-2](https://zh.m.wikipedia.org/zh-hans/ISO_3166-2).
         * @type {string || null}
         */
        this.Alpha2 = null;

        /**
         * The overall load time, in milliseconds.
         * @type {number || null}
         */
        this.LoadTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alpha2 = 'Alpha2' in params ? params.Alpha2 : null;
        this.LoadTime = 'LoadTime' in params ? params.LoadTime : null;

    }
}

/**
 * CreateIpTableList request structure.
 * @class
 */
class CreateIpTableListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name/layer-4 proxy.
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * List of basic access control rules.
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Entity = 'Entity' in params ? params.Entity : null;

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
 * ModifyDDoSPolicyHost request structure.
 * @class
 */
class ModifyDDoSPolicyHostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name/layer-4 proxy.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Whether to enabled acceleration. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.AccelerateType = null;

        /**
         * The policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Whether to enable security protection. Values:
<li>`on`: Enable</li>
<li>`off`: Disable</li>
         * @type {string || null}
         */
        this.SecurityType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;

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
 * ReclaimAliasDomain request structure.
 * @class
 */
class ReclaimAliasDomainRequest extends  AbstractModel {
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

    }
}

/**
 * CreateSecurityDropPage request structure.
 * @class
 */
class CreateSecurityDropPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID. You must specify either "ZoneId+Entity" or "TemplateId".
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name/L4 proxy. You must specify either "ZoneId+Entity" or "TemplateId".
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Name of the block page file.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The block page content, which is passed after being URL-encoded.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * How to build the block page. Values:
<li>`file`: Upload a file to be URL-encoded.</li>
<li>`url`: Upload a URL to be URL-encoded.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The module that applies on the block page. Values:
<li>`waf`: Managed rules</li>
<li>`rate`: Custom rules</li>
         * @type {string || null}
         */
        this.Module = null;

        /**
         * The template ID. You must specify either this field or "ZoneId+Entity".
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
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

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
<li>`sip_proto`: Network layer protocol</li>
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
 * User profiling rule details
 * @class
 */
class PortraitManagedRuleDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique rule ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Rule description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Rule type name: botdb (user profile)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * The ID that classifies the rule category.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ClassificationId = null;

        /**
         * Action status of the rule.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;
        this.ClassificationId = 'ClassificationId' in params ? params.ClassificationId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
        this.OriginPort = 'OriginPort' in params ? params.OriginPort : null;

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
 * ModifyLoadBalancingStatus request structure.
 * @class
 */
class ModifyLoadBalancingStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The load balancer ID.
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * The load balancer status. Values:
<li>`online`: Enabled</li>
<li>`offline`: Disabled</li>
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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * Advanced origin-pull configuration
 * @class
 */
class AdvancedOriginGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Matching condition. The "Target" field must be unique.
         * @type {Array.<OriginGroupCondition> || null}
         */
        this.OriginGroupConditions = null;

        /**
         * ID of the primary origin server.
         * @type {string || null}
         */
        this.OriginGroupId = null;

        /**
         * ID of the secondary origin server.
         * @type {string || null}
         */
        this.BackupOriginGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OriginGroupConditions) {
            this.OriginGroupConditions = new Array();
            for (let z in params.OriginGroupConditions) {
                let obj = new OriginGroupCondition();
                obj.deserialize(params.OriginGroupConditions[z]);
                this.OriginGroupConditions.push(obj);
            }
        }
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;
        this.BackupOriginGroupId = 'BackupOriginGroupId' in params ? params.BackupOriginGroupId : null;

    }
}

/**
 * CreateLoadBalancing response structure.
 * @class
 */
class CreateLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The load balancer ID.
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Region of the logset to be shipped. This field is only required when you configure CLS shipping tasks.
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
 * DescribeSecurityRuleId request structure.
 * @class
 */
class DescribeSecurityRuleIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of rule IDs.
         * @type {Array.<number> || null}
         */
        this.RuleIdList = null;

        /**
         * Rule type. Values:
<li>`waf`: Web managed rules</li>
<li>`acl`: Custom rules</li>
<li>`rate`: Rate limiting rules</li>
<li>`bot`: Bot managed rules</li>
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * The subdomain name/layer-4 proxy.
         * @type {string || null}
         */
        this.Entity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.Entity = 'Entity' in params ? params.Entity : null;

    }
}

/**
 * DDoS protection for the application layer (layer 7)
 * @class
 */
class DDoSHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * The second-level domain name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Status of the domain name. Values:
`init`: NS to be switched
`offline`: Site acceleration not enabled with DNS
`process`: Deployment in progress
`online`: Normal
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Site acceleration switch. `on`: Enable site acceleration; `off`: Disable site acceleration. This field can be used together with `SecurityType`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccelerateType = null;

        /**
         * Security acceleration switch. `on`: Enable site acceleration; `off`: Disable site acceleration. This field can be used together with `AccelerateType`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecurityType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;

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
 * DeleteLoadBalancing response structure.
 * @class
 */
class DeleteLoadBalancingResponse extends  AbstractModel {
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
 * DescribeSpeedTestingMetricData request structure.
 * @class
 */
class DescribeSpeedTestingMetricDataRequest extends  AbstractModel {
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
 * DescribeSecurityPolicy request structure.
 * @class
 */
class DescribeSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

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
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

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
<li>`ent_global_with_bot`: Enterprise plan that supports content delivery network over the globe and bot management.</li>To get the available plan options for your account, view the output from <a href="https://tcloud4api.woa.com/document/product/1657/80124?!preview&!document=1">DescribeAvailablePlans</a>.
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
 * DeleteLoadBalancing request structure.
 * @class
 */
class DeleteLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The load balancer ID.
         * @type {string || null}
         */
        this.LoadBalancingId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;

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
 * CreateSecurityDropPage response structure.
 * @class
 */
class CreateSecurityDropPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the custom page.
         * @type {number || null}
         */
        this.PageId = null;

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
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The site test metrics.
 * @class
 */
class SpeedTestingMetricData extends  AbstractModel {
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
         * The origin information.
         * @type {Array.<SpeedTestingInfo> || null}
         */
        this.OriginSpeedTestingInfo = null;

        /**
         * The EdgeOne information.
         * @type {Array.<SpeedTestingInfo> || null}
         */
        this.ProxySpeedTestingInfo = null;

        /**
         * The site status.
         * @type {SpeedTestingStatus || null}
         */
        this.SpeedTestingStatus = null;

        /**
         * The optimization suggestions.
         * @type {Array.<OptimizeAction> || null}
         */
        this.OptimizeAction = null;

        /**
         * The EdgeOne load time, in milliseconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProxyLoadTime = null;

        /**
         * The origin load time, in milliseconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OriginLoadTime = null;

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

        if (params.OriginSpeedTestingInfo) {
            this.OriginSpeedTestingInfo = new Array();
            for (let z in params.OriginSpeedTestingInfo) {
                let obj = new SpeedTestingInfo();
                obj.deserialize(params.OriginSpeedTestingInfo[z]);
                this.OriginSpeedTestingInfo.push(obj);
            }
        }

        if (params.ProxySpeedTestingInfo) {
            this.ProxySpeedTestingInfo = new Array();
            for (let z in params.ProxySpeedTestingInfo) {
                let obj = new SpeedTestingInfo();
                obj.deserialize(params.ProxySpeedTestingInfo[z]);
                this.ProxySpeedTestingInfo.push(obj);
            }
        }

        if (params.SpeedTestingStatus) {
            let obj = new SpeedTestingStatus();
            obj.deserialize(params.SpeedTestingStatus)
            this.SpeedTestingStatus = obj;
        }

        if (params.OptimizeAction) {
            this.OptimizeAction = new Array();
            for (let z in params.OptimizeAction) {
                let obj = new OptimizeAction();
                obj.deserialize(params.OptimizeAction[z]);
                this.OptimizeAction.push(obj);
            }
        }
        this.ProxyLoadTime = 'ProxyLoadTime' in params ? params.ProxyLoadTime : null;
        this.OriginLoadTime = 'OriginLoadTime' in params ? params.OriginLoadTime : null;

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
 * CreateIpTableList response structure.
 * @class
 */
class CreateIpTableListResponse extends  AbstractModel {
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
 * IP Allowlist/Blocklist
 * @class
 */
class DDoSAllowBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of objects in the blocklist/allowlist configuration.
         * @type {Array.<DDoSAllowBlockRule> || null}
         */
        this.DDoSAllowBlockRules = null;

        /**
         * Whether to clear the blocklist/allowlist. Values:
<li>`off`: Disable.</li>
<li>`on`: Enable. In this case, UserAllowBlockIp needs to be specified.</li>
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

        if (params.DDoSAllowBlockRules) {
            this.DDoSAllowBlockRules = new Array();
            for (let z in params.DDoSAllowBlockRules) {
                let obj = new DDoSAllowBlockRule();
                obj.deserialize(params.DDoSAllowBlockRules[z]);
                this.DDoSAllowBlockRules.push(obj);
            }
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

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
 * ModifyDDoSPolicy response structure.
 * @class
 */
class ModifyDDoSPolicyResponse extends  AbstractModel {
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
 * DDoS feature filtering
 * @class
 */
class DDoSFeaturesFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action to be executed. Valid values:
<li>`drop`: Discard</li>
<li>`transmit`: Allow</li>
<li>`drop_block`: Discard and block</li>
<li>`forward`: Continue protection</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The protocol. Values:
<li>`tcp`: TCP protocol</li>
<li>`udp`: UDP protocol</li>
<li>`icmp`: ICMP protocol</li>
<li>`all`: All protocols</li>
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Start of the destination port. Value range: 0–65535.
         * @type {number || null}
         */
        this.DportStart = null;

        /**
         * End of the destination port. Value range: 0–65535.
         * @type {number || null}
         */
        this.DportEnd = null;

        /**
         * Minimum packet length. Value range: 0–1500.
         * @type {number || null}
         */
        this.PacketMin = null;

        /**
         * Maximum packet length. Value range: 0–1500.
         * @type {number || null}
         */
        this.PacketMax = null;

        /**
         * Start of the source port. Value range: 0–65535.
         * @type {number || null}
         */
        this.SportStart = null;

        /**
         * End of the source port. Value range: 0–65535.
         * @type {number || null}
         */
        this.SportEnd = null;

        /**
         * Matching method 1 of **feature 1**. Values:
<li>`pcre`: Regular expression match</li>
<li>`sunday`: String match</li>An empty string is used by default.
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * Whether the pattern in **feature 1** is matched. This parameter is used together with `MatchType`. Values:
<li>`0`: Matched</li>
<li>`1`: Not matched</li>
         * @type {number || null}
         */
        this.IsNot = null;

        /**
         * Offset 1 of **feature 1**. Value range: 0–1500.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The depth to inspect **feature 1** in the packet. Value range: 1–1500.
         * @type {number || null}
         */
        this.Depth = null;

        /**
         * The layer from which each match starts. Values:
<li>`begin_l5`: Start from the payload.</li>
<li>`begin_l4`: Start from the TCP/UDP header.</li>
<li>`begin_l3`: Start from the IP header.</li>
         * @type {string || null}
         */
        this.MatchBegin = null;

        /**
         * The match content of **feature 1**.
         * @type {string || null}
         */
        this.Str = null;

        /**
         * Matching method 2 of **feature 2**. Values:
<li>`pcre`: Regular expression match</li>
<li>`sunday`: String match</li>An empty string is used by default.
         * @type {string || null}
         */
        this.MatchType2 = null;

        /**
         * Whether the pattern in **feature 2** is matched. This parameter is used together with `MatchType2`. Values:
<li>`0`: Matched</li>
<li>`1`: Not matched</li>
         * @type {number || null}
         */
        this.IsNot2 = null;

        /**
         * Offset 2 of **feature 2**. Value range: 0–1500.
         * @type {number || null}
         */
        this.Offset2 = null;

        /**
         * The depth to inspect **feature 2** in the packet. Value range: 1–1500.
         * @type {number || null}
         */
        this.Depth2 = null;

        /**
         * The layer from which each match starts. Values:
<li>`begin_l5`: Start from the payload.</li>
<li>`begin_l4`: Start from the TCP/UDP header.</li>
<li>`begin_l3`: Start from the IP header.</li>
         * @type {string || null}
         */
        this.MatchBegin2 = null;

        /**
         * The match content of **feature 2**.
         * @type {string || null}
         */
        this.Str2 = null;

        /**
         * Multi-feature relationship. Enter `none` if only **feature 1** is configured. If **feature 2** exists, you can leave this parameter empty.
         * @type {string || null}
         */
        this.MatchLogic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.DportStart = 'DportStart' in params ? params.DportStart : null;
        this.DportEnd = 'DportEnd' in params ? params.DportEnd : null;
        this.PacketMin = 'PacketMin' in params ? params.PacketMin : null;
        this.PacketMax = 'PacketMax' in params ? params.PacketMax : null;
        this.SportStart = 'SportStart' in params ? params.SportStart : null;
        this.SportEnd = 'SportEnd' in params ? params.SportEnd : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;
        this.IsNot = 'IsNot' in params ? params.IsNot : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Depth = 'Depth' in params ? params.Depth : null;
        this.MatchBegin = 'MatchBegin' in params ? params.MatchBegin : null;
        this.Str = 'Str' in params ? params.Str : null;
        this.MatchType2 = 'MatchType2' in params ? params.MatchType2 : null;
        this.IsNot2 = 'IsNot2' in params ? params.IsNot2 : null;
        this.Offset2 = 'Offset2' in params ? params.Offset2 : null;
        this.Depth2 = 'Depth2' in params ? params.Depth2 : null;
        this.MatchBegin2 = 'MatchBegin2' in params ? params.MatchBegin2 : null;
        this.Str2 = 'Str2' in params ? params.Str2 : null;
        this.MatchLogic = 'MatchLogic' in params ? params.MatchLogic : null;

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
 * Details of the IP blocklist/allowlist
 * @class
 */
class DDoSAllowBlockRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The client IP, which can be a single IP, IP range, or subnet range, such as "1.1.1.1", "1.1.1.2-1.1.1.3", and "1.2.1.0/24-1.2.2.0/24".
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * The type. Values:
<li>`block`: Blocklist</li><li>`allow`: Allowlist</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The 10-digit timestamp, such as `1199116800`. The current time will be used if this field is not specified.
         * @type {number || null}
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeZoneDDoSPolicy request structure.
 * @class
 */
class DescribeZoneDDoSPolicyRequest extends  AbstractModel {
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
 * CreateSpeedTesting response structure.
 * @class
 */
class CreateSpeedTestingResponse extends  AbstractModel {
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

        /**
         * The bot tag. Values:
<li>`evil_bot`: Malicious bot</li>
<li>`suspect_bot`: Suspected bot</li>
<li>`good_bot`: Good bot</li>
<li>`normal`: Normal request</li>
<li>`none`: Uncategorized</li>
         * @type {string || null}
         */
        this.BotLabel = null;

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
        this.BotLabel = 'BotLabel' in params ? params.BotLabel : null;

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
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`zone-id`<br>   Filter by <strong>site ID</strong>, such as zone-20hzkd4rdmy0<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported<li>`origin-group-id`:<br>   Filter by <strong>origin group ID</strong>, such as origin-2ccgtb24-7dc5-46s2-9r3e-95825d53dwe3a<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported<li>`origin-group-name`:<br>   Filter by <strong>origin group name</strong><br>   Type: String<br>   Required: No<br>   Fuzzy query: Supported (only one origin group name allowed in a query)
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
<li>`waf`: Managed rules</li>
<li>`cc`: Rate limiting rules</li>
<li>`bot`: bot protection</li>
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * DescribeSecurityPortraitRules request structure.
 * @class
 */
class DescribeSecurityPortraitRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID. You must specify either "ZoneId+Entity" or "TemplateId".
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name/L4 proxy. You must specify either "ZoneId+Entity" or "TemplateId".
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * The template ID. You must specify either this field or "ZoneId+Entity". 
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
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

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
 * DescribeSecurityPolicyRegions response structure.
 * @class
 */
class DescribeSecurityPolicyRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of regions.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Region information.
         * @type {Array.<GeoIp> || null}
         */
        this.GeoIps = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.GeoIps) {
            this.GeoIps = new Array();
            for (let z in params.GeoIps) {
                let obj = new GeoIp();
                obj.deserialize(params.GeoIps[z]);
                this.GeoIps.push(obj);
            }
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
         * IDs of the managed rules in the Block mode. You can obtain more details from [DescribeSecurityGroupManagedRules](https://tcloud4api.woa.com/document/product/1657/80807?!preview&!document=1).
         * @type {Array.<number> || null}
         */
        this.BlockRuleIDs = null;

        /**
         * IDs of the managed rules in the Observe mode. You can obtain more details from [DescribeSecurityGroupManagedRules](https://tcloud4api.woa.com/document/product/1657/80807?!preview&!document=1).
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
 * ModifyApplicationProxy request structure.
 * @class
 */
class ModifyApplicationProxyRequest extends  AbstractModel {
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
         * The domain name or subdomain name when `ProxyType=hostname`.
The instance name when `ProxyType=instance`.
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
         * The IPv6 access configuration. The original configuration will apply if this field is not specified.
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

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
 * The IPv6 access configuration.
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
 * ModifyAlarmDefaultThreshold request structure.
 * @class
 */
class ModifyAlarmDefaultThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The alarm service type. Values:
<li>`ddos`: DDoS alarm service.</li>
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The threshold in Mbps. Maximum value: 10.
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * The protection entity, which is a proxy ID when layer-4 protection is enabled, or a site name when layer-7 protection is on.
         * @type {string || null}
         */
        this.Entity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Entity = 'Entity' in params ? params.Entity : null;

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
        this.OriginPort = 'OriginPort' in params ? params.OriginPort : null;

    }
}

/**
 * DDoS protection level
 * @class
 */
class DDoSStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The policy level. Values:
<li>`low`: Loose.</li>
<li>`middle`: Moderate</li>
<li>`high`: Strict</li>
         * @type {string || null}
         */
        this.PlyLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlyLevel = 'PlyLevel' in params ? params.PlyLevel : null;

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
 * DescribeSpeedTestingDetails response structure.
 * @class
 */
class DescribeSpeedTestingDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site’s load speed across regions.
         * @type {SpeedTestingDetailData || null}
         */
        this.SpeedTestingDetailData = null;

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

        if (params.SpeedTestingDetailData) {
            let obj = new SpeedTestingDetailData();
            obj.deserialize(params.SpeedTestingDetailData)
            this.SpeedTestingDetailData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of the managed rule group
 * @class
 */
class WafGroupDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the rule type.
         * @type {number || null}
         */
        this.RuleTypeId = null;

        /**
         * The rule type.
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * Description of the rule type.
         * @type {string || null}
         */
        this.RuleTypeDesc = null;

        /**
         * List of rules.
         * @type {Array.<WafGroupRule> || null}
         */
        this.WafGroupRules = null;

        /**
         * The rule level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * The rule action.
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
        this.RuleTypeId = 'RuleTypeId' in params ? params.RuleTypeId : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;
        this.RuleTypeDesc = 'RuleTypeDesc' in params ? params.RuleTypeDesc : null;

        if (params.WafGroupRules) {
            this.WafGroupRules = new Array();
            for (let z in params.WafGroupRules) {
                let obj = new WafGroupRule();
                obj.deserialize(params.WafGroupRules[z]);
                this.WafGroupRules.push(obj);
            }
        }
        this.Level = 'Level' in params ? params.Level : null;
        this.Action = 'Action' in params ? params.Action : null;

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
         * Header name of ClientIpCountry. This field is valid only when `Switch=on`.
If it is left empty, the default value `EO-Client-IPCountry` will be used.
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
 * CLB information
 * @class
 */
class LoadBalancing extends  AbstractModel {
    constructor(){
        super();

        /**
         * The load balancer ID.
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name. You can use @ to represent the root domain.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * The proxy mode. Values:
<li>`dns_only`: Only DNS</li>
<li>`proxied`: Proxied</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The cache time of DNS records when `Type=dns_only`.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * The load balancer status. Values:
<li>`online`: Deployed</li>
<li>`process`: Deployment in progress</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Schedules domain names.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * The ID of the primary origin group.
         * @type {string || null}
         */
        this.OriginGroupId = null;

        /**
         * The ID of the secondary origin group. If not specified, it indicates that secondary origins are not used.
         * @type {string || null}
         */
        this.BackupOriginGroupId = null;

        /**
         * The update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The origin-pull type. Values:
<li>`normal`: Primary/Secondary origin-pull</li>
<li>`advanced`: Advanced origin-pull</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Advanced origin-pull configuration. This field is valid when `OriginType=advanced`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<AdvancedOriginGroup> || null}
         */
        this.AdvancedOriginGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;
        this.BackupOriginGroupId = 'BackupOriginGroupId' in params ? params.BackupOriginGroupId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;

        if (params.AdvancedOriginGroups) {
            this.AdvancedOriginGroups = new Array();
            for (let z in params.AdvancedOriginGroups) {
                let obj = new AdvancedOriginGroup();
                obj.deserialize(params.AdvancedOriginGroups[z]);
                this.AdvancedOriginGroups.push(obj);
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
 * The test task status
 * @class
 */
class SpeedTestingStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Whether the URL uses HTTPS.
         * @type {boolean || null}
         */
        this.Tls = null;

        /**
         * Creation time of the task.
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * The task status. Values:
<li>`200`: The task completed.</li>
<li>`100`: The task is running.</li>
<li>`503`: The task failed./li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * The user agent.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UA = null;

        /**
         * The network environment.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Connectivity = null;

        /**
         * Whether the URL is reachable. Values:
<li>`true`: Yes</li>
<li>`false`: No</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Reachable = null;

        /**
         * Whether the URL connection timed out. Values:
<li>`true`: Yes</li>
<li>`false`: No</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.TimedOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Tls = 'Tls' in params ? params.Tls : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.UA = 'UA' in params ? params.UA : null;
        this.Connectivity = 'Connectivity' in params ? params.Connectivity : null;
        this.Reachable = 'Reachable' in params ? params.Reachable : null;
        this.TimedOut = 'TimedOut' in params ? params.TimedOut : null;

    }
}

/**
 * CreateLoadBalancing request structure.
 * @class
 */
class CreateLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The load balancing hostname.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * The proxy mode. Values:
<li>`dns_only`: Only DNS</li>
<li>`proxied`: Proxied</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The ID of the primary origin group.
         * @type {string || null}
         */
        this.OriginGroupId = null;

        /**
         * The ID of the secondary origin group (only available when `Type=proxied`). If not specified, it indicates that secondary origins are not used.
         * @type {string || null}
         */
        this.BackupOriginGroupId = null;

        /**
         * When `Type=dns_only`, it indicates the amount of time that DNS records remain in the cache of a DNS server.
Value range: 60-86400 (in seconds). If it's not specified, the default value 600 will be used.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * The origin-pull type. Values:
<li>`normal`: Primary/Secondary origin-pull</li>
<li>`advanced`: Advanced origin-pull (only used when `Type=proxied`)</li>If it is left empty, primary/secondary origin-pull is applied.
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Advanced origin-pull configuration. This field is valid when `OriginType=advanced`.
         * @type {Array.<AdvancedOriginGroup> || null}
         */
        this.AdvancedOriginGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;
        this.BackupOriginGroupId = 'BackupOriginGroupId' in params ? params.BackupOriginGroupId : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;

        if (params.AdvancedOriginGroups) {
            this.AdvancedOriginGroups = new Array();
            for (let z in params.AdvancedOriginGroups) {
                let obj = new AdvancedOriginGroup();
                obj.deserialize(params.AdvancedOriginGroups[z]);
                this.AdvancedOriginGroups.push(obj);
            }
        }

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
 * ModifyAlarmConfig response structure.
 * @class
 */
class ModifyAlarmConfigResponse extends  AbstractModel {
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
 * Region information
 * @class
 */
class GeoIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Country name
         * @type {string || null}
         */
        this.Country = null;

        /**
         * The continent.
         * @type {string || null}
         */
        this.Continent = null;

        /**
         * The state/province.
         * @type {string || null}
         */
        this.Province = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Continent = 'Continent' in params ? params.Continent : null;
        this.Province = 'Province' in params ? params.Province : null;

    }
}

/**
 * DescribeSecurityGroupManagedRules request structure.
 * @class
 */
class DescribeSecurityGroupManagedRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID. You must specify either "ZoneId+Entity" or "TemplateId".
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name/L4 proxy. You must specify either "ZoneId+Entity" or "TemplateId".
         * @type {string || null}
         */
        this.Entity = null;

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
         * The template ID. You must specify either this field or ZoneId+Entity".
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
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

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
<li>`partial`: Access through a CNAME record. Note that you should verify your site with the IdentifyZone API before starting site access.</li>If it is left empty, the default value `full` is used.
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
 * CreateSpeedTesting request structure.
 * @class
 */
class CreateSpeedTestingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name to test.
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;

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
 * DescribeRateLimitIntelligenceRule request structure.
 * @class
 */
class DescribeRateLimitIntelligenceRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name/layer-4 proxy.
         * @type {string || null}
         */
        this.Entity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Entity = 'Entity' in params ? params.Entity : null;

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
 * DescribeRateLimitIntelligenceRule response structure.
 * @class
 */
class DescribeRateLimitIntelligenceRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The intelligent rate limiting rule.
         * @type {Array.<RateLimitIntelligenceRuleDetail> || null}
         */
        this.RateLimitIntelligenceRuleDetails = null;

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

        if (params.RateLimitIntelligenceRuleDetails) {
            this.RateLimitIntelligenceRuleDetails = new Array();
            for (let z in params.RateLimitIntelligenceRuleDetails) {
                let obj = new RateLimitIntelligenceRuleDetail();
                obj.deserialize(params.RateLimitIntelligenceRuleDetails[z]);
                this.RateLimitIntelligenceRuleDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateApplicationProxy request structure.
 * @class
 */
class CreateApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * When `ProxyType=hostname`, this field indicates a domain name or subdomain name.
When `ProxyType=instance`, it indicates a proxy instance.
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
         * The IPv6 access configuration.
If this field is not specified, IPv6 access will be disabled.
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * The rule details.
If this field is not specified, an application proxy rule will not be created.
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.ApplicationProxyRules = null;

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
 * Rule engine feature operation. A feature can be of only one of the following three types, so each item in the `RuleAction` array can be of only one of the following types. You can call the [DescribeRulesSetting](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) API to view more requirements for entering feature items.
 * @class
 */
class Action extends  AbstractModel {
    constructor(){
        super();

        /**
         * Common feature operation. Features of this type include:
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
<li>`TlsVersion`</li>
<li>`OcspStapling`</li>
<li>`Http2`: HTTP/2 access</li>
<li>`UpstreamFollowRedirect: Follow origin redirect</li>
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
 * DescribeSecurityGroupManagedRules response structure.
 * @class
 */
class DescribeSecurityGroupManagedRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of bot managed rules returned.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The total number of rules.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Details of the managed rule.
         * @type {WafGroupInfo || null}
         */
        this.WafGroupInfo = null;

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
        this.Count = 'Count' in params ? params.Count : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.WafGroupInfo) {
            let obj = new WafGroupInfo();
            obj.deserialize(params.WafGroupInfo)
            this.WafGroupInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

    }
}

/**
 * DescribeSpeedTestingDetails request structure.
 * @class
 */
class DescribeSpeedTestingDetailsRequest extends  AbstractModel {
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
 * DDoS regional blocking
 * @class
 */
class DDoSGeoIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to clear the blocklist of the region. Values:
<li>`off`: Clear the blocklist of the region.</li>
<li>`on`: Perform no operations.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Region information. For more information on the ID, see [DescribeSecurityPolicyRegions](https://tcloud4api.woa.com/document/product/1657/81247?!preview&!document=1).
         * @type {Array.<number> || null}
         */
        this.RegionIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;

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
<li>`apply`: Managed by EdgeOne</li>
<li>`none`: Not managed by EdgeOne</li>If it is left empty, the default value `apply` is used.
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
 * ReclaimAliasDomain response structure.
 * @class
 */
class ReclaimAliasDomainResponse extends  AbstractModel {
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

        /**
         * Whether the certificate is managed by EdgeOne. Values:
<li>`apply`: Managed by EdgeOne.</li>
<li>`none`: Not managed by EdgeOne.</li>If it is left empty, the default value `none` is used.
Note: This field may return `null`, indicating that no valid value can be obtained.
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

    }
}

/**
 * DescribeBotManagedRules response structure.
 * @class
 */
class DescribeBotManagedRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of bot managed rules returned.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The bot managed rule.
         * @type {Array.<BotManagedRuleDetail> || null}
         */
        this.BotManagedRuleDetails = null;

        /**
         * The total number of bot managed rules.
         * @type {number || null}
         */
        this.Total = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.BotManagedRuleDetails) {
            this.BotManagedRuleDetails = new Array();
            for (let z in params.BotManagedRuleDetails) {
                let obj = new BotManagedRuleDetail();
                obj.deserialize(params.BotManagedRuleDetails[z]);
                this.BotManagedRuleDetails.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
 * CreateCustomErrorPage response structure.
 * @class
 */
class CreateCustomErrorPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the custom page
         * @type {number || null}
         */
        this.PageId = null;

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
        this.PageId = 'PageId' in params ? params.PageId : null;
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
         * Whether to carry the location information of the client IP during origin-pull.
The original configuration will apply if this field is not specified.
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
 * DDoS port filtering
 * @class
 */
class DDoSAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of port filtering rules.
         * @type {Array.<DDoSAclRule> || null}
         */
        this.DDoSAclRules = null;

        /**
         * Whether to clear port filtering rules. Values:
<li>`off`: Clear port filtering rules.</li>
<li>`on`: Configure port filtering rules. In this case, DDoSAclRules needs to be specified.</li>
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

        if (params.DDoSAclRules) {
            this.DDoSAclRules = new Array();
            for (let z in params.DDoSAclRules) {
                let obj = new DDoSAclRule();
                obj.deserialize(params.DDoSAclRules[z]);
                this.DDoSAclRules.push(obj);
            }
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }
        this.AliasZoneName = 'AliasZoneName' in params ? params.AliasZoneName : null;

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
 * The managed rule details
 * @class
 */
class WafGroupRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * The rule description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The description of the rule level.
         * @type {string || null}
         */
        this.RuleLevelDesc = null;

        /**
         * The rule tag.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RuleTags = null;

        /**
         * The update time in the format of YYYY-MM-DD hh:mm:ss.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The rule status. Values:
<li>`on`: Enabled</li>
<li>`off`: Disabled</li>It can be left empty when you query a managed rule.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The rule type.
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * ID of the rule type.
         * @type {number || null}
         */
        this.RuleTypeId = null;

        /**
         * Description of the rule type.
         * @type {string || null}
         */
        this.RuleTypeDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleLevelDesc = 'RuleLevelDesc' in params ? params.RuleLevelDesc : null;
        this.RuleTags = 'RuleTags' in params ? params.RuleTags : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;
        this.RuleTypeId = 'RuleTypeId' in params ? params.RuleTypeId : null;
        this.RuleTypeDesc = 'RuleTypeDesc' in params ? params.RuleTypeDesc : null;

    }
}

/**
 * DDoS port filtering configuration
 * @class
 */
class DDoSAclRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * End of the destination port. Value range: 0–65535.
         * @type {number || null}
         */
        this.DportEnd = null;

        /**
         * Start of the destination port. Value range: 0–65535.
         * @type {number || null}
         */
        this.DportStart = null;

        /**
         * End of the source port. Value range: 0–65535.
         * @type {number || null}
         */
        this.SportEnd = null;

        /**
         * Start of the source port. Value range: 0–65535.
         * @type {number || null}
         */
        this.SportStart = null;

        /**
         * The protocol. Values:
<li>`tcp`: TCP protocol</li>
<li>`udp`: UDP protocol</li>
<li>`all`: All protocols</li>
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Action to be executed. Values:
<li>`drop`: Discard</li>
<li>`transmit`: Allow</li>
<li>`forward`: Continue protection</li>
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
        this.DportEnd = 'DportEnd' in params ? params.DportEnd : null;
        this.DportStart = 'DportStart' in params ? params.DportStart : null;
        this.SportEnd = 'SportEnd' in params ? params.SportEnd : null;
        this.SportStart = 'SportStart' in params ? params.SportStart : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Action = 'Action' in params ? params.Action : null;

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
         * The matching content.
         * @type {string || null}
         */
        this.MatchContent = null;

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
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * ModifySecurityWafGroupPolicy response structure.
 * @class
 */
class ModifySecurityWafGroupPolicyResponse extends  AbstractModel {
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
 * The quota limit on site tests.
 * @class
 */
class SpeedTestingQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of site tests.
         * @type {number || null}
         */
        this.TotalTestRuns = null;

        /**
         * The number of available site tests.
         * @type {number || null}
         */
        this.AvailableTestRuns = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTestRuns = 'TotalTestRuns' in params ? params.TotalTestRuns : null;
        this.AvailableTestRuns = 'AvailableTestRuns' in params ? params.AvailableTestRuns : null;

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
 * The site test result
 * @class
 */
class SpeedTestingStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Last contentful paint, in milliseconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FirstContentfulPaint = null;

        /**
         * Full content load, in milliseconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FirstMeaningfulPaint = null;

        /**
         * Average download speed, in KB/s.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OverallDownloadSpeed = null;

        /**
         * Rendering time, in milliseconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RenderTime = null;

        /**
         * DOM content loaded, in milliseconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DocumentFinishTime = null;

        /**
         * Average TCP connection, in milliseconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TcpConnectionTime = null;

        /**
         * Average backend response, in milliseconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ResponseTime = null;

        /**
         * Average DOM content download, in milliseconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileDownloadTime = null;

        /**
         * Load time, in milliseconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LoadTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstContentfulPaint = 'FirstContentfulPaint' in params ? params.FirstContentfulPaint : null;
        this.FirstMeaningfulPaint = 'FirstMeaningfulPaint' in params ? params.FirstMeaningfulPaint : null;
        this.OverallDownloadSpeed = 'OverallDownloadSpeed' in params ? params.OverallDownloadSpeed : null;
        this.RenderTime = 'RenderTime' in params ? params.RenderTime : null;
        this.DocumentFinishTime = 'DocumentFinishTime' in params ? params.DocumentFinishTime : null;
        this.TcpConnectionTime = 'TcpConnectionTime' in params ? params.TcpConnectionTime : null;
        this.ResponseTime = 'ResponseTime' in params ? params.ResponseTime : null;
        this.FileDownloadTime = 'FileDownloadTime' in params ? params.FileDownloadTime : null;
        this.LoadTime = 'LoadTime' in params ? params.LoadTime : null;

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
 * DescribeSecurityPortraitRules response structure.
 * @class
 */
class DescribeSecurityPortraitRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of rules returned.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The bot client reputation rule.
         * @type {Array.<PortraitManagedRuleDetail> || null}
         */
        this.PortraitManagedRuleDetails = null;

        /**
         * The total number of rules.
         * @type {number || null}
         */
        this.Total = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.PortraitManagedRuleDetails) {
            this.PortraitManagedRuleDetails = new Array();
            for (let z in params.PortraitManagedRuleDetails) {
                let obj = new PortraitManagedRuleDetail();
                obj.deserialize(params.PortraitManagedRuleDetails[z]);
                this.PortraitManagedRuleDetails.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSPolicy request structure.
 * @class
 */
class ModifyDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Details of the DDoS mitigation configuration.
         * @type {DDoSRule || null}
         */
        this.DDoSRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.DDoSRule) {
            let obj = new DDoSRule();
            obj.deserialize(params.DDoSRule)
            this.DDoSRule = obj;
        }

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
 * ModifyAlarmConfig request structure.
 * @class
 */
class ModifyAlarmConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The alarm service type. Values:
<li>`ddos`: DDoS alarm service.</li>
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * The site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The list of protection entities.
         * @type {Array.<string> || null}
         */
        this.EntityList = null;

        /**
         * The alarm threshold. When no value or 0 is passed, the default alarm threshold will be used.
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * Whether the default alarm threshold is used.
         * @type {boolean || null}
         */
        this.IsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.EntityList = 'EntityList' in params ? params.EntityList : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

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
 * ModifyLoadBalancing response structure.
 * @class
 */
class ModifyLoadBalancingResponse extends  AbstractModel {
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
 * DescribeSpeedTestingQuota request structure.
 * @class
 */
class DescribeSpeedTestingQuotaRequest extends  AbstractModel {
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
 * DescribeSecurityPolicy response structure.
 * @class
 */
class DescribeSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SecurityConfig || null}
         */
        this.SecurityConfig = null;

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

        if (params.SecurityConfig) {
            let obj = new SecurityConfig();
            obj.deserialize(params.SecurityConfig)
            this.SecurityConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The site test configuration
 * @class
 */
class SpeedTestingConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task type. Values:
<li>`1`: Page performance</li>
<li>`2`: File uploads</li>
<li>`3`: File downloads</li>
<li>`4`: Port performance</li>
<li>`5`: Network quality</li>
<li>`6`: Audio/Video experience</li>
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * The URL.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The user agent.
         * @type {string || null}
         */
        this.UA = null;

        /**
         * The network type.
         * @type {string || null}
         */
        this.Connectivity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.UA = 'UA' in params ? params.UA : null;
        this.Connectivity = 'Connectivity' in params ? params.Connectivity : null;

    }
}

/**
 * DescribeSecurityPolicyRegions request structure.
 * @class
 */
class DescribeSecurityPolicyRegionsRequest extends  AbstractModel {
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
 * DescribeLoadBalancing request structure.
 * @class
 */
class DescribeLoadBalancingRequest extends  AbstractModel {
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
         * Filter criteria. Each filter criteria can have up to 20 entries.
<li>`zone-id`:<br>   Filter by <strong>site ID</strong>, such as zone-1a8df68z<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported
</li><li>`load-balancing-id`<br>   Filter by <strong>load balancer ID</strong>, such as lb-d21bfaf7-8d72-11ec-841d-00ff977fb3c8<br>   Type: String<br>   Required: No<br>   Fuzzy query: Not supported
</li><li>`host`:<br>   Filter by <strong>load balancing hostname</strong>, such as lb.tencent.com<br>   Type: String<br>   Required: No<br>   Fuzzy query: Supported (only one hostname allowed in a query)</li>
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
 * DescribeZoneDDoSPolicy response structure.
 * @class
 */
class DescribeZoneDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS mitigation configuration.
         * @type {Array.<ShieldArea> || null}
         */
        this.ShieldAreas = null;

        /**
         * Information of the proxied subdomain names.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DDoSHost> || null}
         */
        this.DDoSHosts = null;

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

        if (params.ShieldAreas) {
            this.ShieldAreas = new Array();
            for (let z in params.ShieldAreas) {
                let obj = new ShieldArea();
                obj.deserialize(params.ShieldAreas[z]);
                this.ShieldAreas.push(obj);
            }
        }

        if (params.DDoSHosts) {
            this.DDoSHosts = new Array();
            for (let z in params.DDoSHosts) {
                let obj = new DDoSHost();
                obj.deserialize(params.DDoSHosts[z]);
                this.DDoSHosts.push(obj);
            }
        }
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
         * Mode of cache purging. Values:
<li>`purge_url`: Purge by URL</li>
<li>`purge_prefix`: Purge by prefix</li>
<li>`purge_host`: Purge by hostname</li>
<li>`purge_all`: Purge all caches</li>
<li>`purge_cache_tag`: Purge by cache tag</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Target resource to be purged, which depends on the `Type` field.
1. When `Type = purge_host`:
Enter the hostname, such as www.example.com and foo.bar.example.com.
2. When `Type = purge_prefix`:
Enter the prefix, such as http://www.example.com/example.
3. When `Type = purge_url`:
Enter the URL, such as https://www.example.com/example.jpg.
4. When `Type = purge_all`:
This field can be left empty.
5. When `Type = purge_cache_tag`:
Enter the cache tag, such as tag1.
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
 * DescribeSecurityRuleId response structure.
 * @class
 */
class DescribeSecurityRuleIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rules.
         * @type {Array.<WafGroupRule> || null}
         */
        this.WafGroupRules = null;

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

        if (params.WafGroupRules) {
            this.WafGroupRules = new Array();
            for (let z in params.WafGroupRules) {
                let obj = new WafGroupRule();
                obj.deserialize(params.WafGroupRules[z]);
                this.WafGroupRules.push(obj);
            }
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
 * DescribeLoadBalancing response structure.
 * @class
 */
class DescribeLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Load balancer information.
         * @type {Array.<LoadBalancing> || null}
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
                let obj = new LoadBalancing();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
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
 * DescribeBotManagedRules request structure.
 * @class
 */
class DescribeBotManagedRulesRequest extends  AbstractModel {
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
         * The site ID. You must specify either "ZoneId+Entity" or "TemplateId".
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The subdomain name/L4 proxy. You must specify either "ZoneId+Entity" or "TemplateId".
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * The rule type. Values:
<li>`idcid`</li>
<li>`sipbot`</li>
<li>`uabot`</li>If no value or 0 is passed, all rule types will be selected.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * The template ID. You must specify either "ZoneId+Entity" or "TemplateId".
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

module.exports = {
    Compression: Compression,
    DescribeOriginGroupResponse: DescribeOriginGroupResponse,
    ModifyLoadBalancingStatusResponse: ModifyLoadBalancingStatusResponse,
    DescribeBotDataRequest: DescribeBotDataRequest,
    SpeedTestingInfo: SpeedTestingInfo,
    DescribeSingleL7AnalysisDataRequest: DescribeSingleL7AnalysisDataRequest,
    TopEntryValue: TopEntryValue,
    DescribeHostsSettingResponse: DescribeHostsSettingResponse,
    ShieldArea: ShieldArea,
    Origin: Origin,
    DescribeRulesResponse: DescribeRulesResponse,
    TimingDataRecord: TimingDataRecord,
    DDoSAttackEventDetailData: DDoSAttackEventDetailData,
    DescribeBotDataResponse: DescribeBotDataResponse,
    Tag: Tag,
    RateLimitConfig: RateLimitConfig,
    RuleExtraParameter: RuleExtraParameter,
    ClsLogTopicInfo: ClsLogTopicInfo,
    WafConfig: WafConfig,
    CreateAliasDomainRequest: CreateAliasDomainRequest,
    CreatePrefetchTaskRequest: CreatePrefetchTaskRequest,
    DescribeApplicationProxiesResponse: DescribeApplicationProxiesResponse,
    DescribeTopL7AnalysisDataRequest: DescribeTopL7AnalysisDataRequest,
    DDoSAttackSourceEvent: DDoSAttackSourceEvent,
    ModifyRulePriorityResponse: ModifyRulePriorityResponse,
    SwitchConfig: SwitchConfig,
    IdentifyZoneResponse: IdentifyZoneResponse,
    SpeedTestingDetailData: SpeedTestingDetailData,
    BotManagedRuleDetail: BotManagedRuleDetail,
    DescribeDDoSAttackSourceEventResponse: DescribeDDoSAttackSourceEventResponse,
    DDoSAntiPly: DDoSAntiPly,
    DescribeAliasDomainsResponse: DescribeAliasDomainsResponse,
    PlanInfo: PlanInfo,
    DescribeTimingL7CacheDataRequest: DescribeTimingL7CacheDataRequest,
    DescribeSecurityPolicyListResponse: DescribeSecurityPolicyListResponse,
    CheckCertificateRequest: CheckCertificateRequest,
    DescribeDDoSAttackEventResponse: DescribeDDoSAttackEventResponse,
    ForceRedirect: ForceRedirect,
    CodeAction: CodeAction,
    CachePrefresh: CachePrefresh,
    DescribeWebProtectionClientIpListResponse: DescribeWebProtectionClientIpListResponse,
    DescribeTimingL7AnalysisDataResponse: DescribeTimingL7AnalysisDataResponse,
    OriginGroupCondition: OriginGroupCondition,
    BotPortraitRule: BotPortraitRule,
    DDoSRule: DDoSRule,
    RulesProperties: RulesProperties,
    RuleCodeActionParams: RuleCodeActionParams,
    ModifyDDoSPolicyHostResponse: ModifyDDoSPolicyHostResponse,
    ExceptUserRule: ExceptUserRule,
    SecEntry: SecEntry,
    SubRule: SubRule,
    DDoSPacketFilter: DDoSPacketFilter,
    DescribeSpeedTestingMetricDataResponse: DescribeSpeedTestingMetricDataResponse,
    Sv: Sv,
    Rule: Rule,
    CreateLogSetResponse: CreateLogSetResponse,
    DownloadL4LogsRequest: DownloadL4LogsRequest,
    CreateCustomErrorPageRequest: CreateCustomErrorPageRequest,
    DescribeDnssecResponse: DescribeDnssecResponse,
    ModifyZoneCnameSpeedUpRequest: ModifyZoneCnameSpeedUpRequest,
    SecurityEntity: SecurityEntity,
    ModifyDnsRecordRequest: ModifyDnsRecordRequest,
    DescribeDDoSPolicyResponse: DescribeDDoSPolicyResponse,
    CreateApplicationProxyRuleRequest: CreateApplicationProxyRuleRequest,
    DescribeDDoSBlockListRequest: DescribeDDoSBlockListRequest,
    DescribeDDoSMajorAttackEventRequest: DescribeDDoSMajorAttackEventRequest,
    DescribeSecurityPolicyListRequest: DescribeSecurityPolicyListRequest,
    DescribeTimingL7CacheDataResponse: DescribeTimingL7CacheDataResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    Header: Header,
    DescribeDDoSPolicyRequest: DescribeDDoSPolicyRequest,
    DDoSSpeedLimit: DDoSSpeedLimit,
    RateLimitIntelligenceRuleDetail: RateLimitIntelligenceRuleDetail,
    ReclaimZoneRequest: ReclaimZoneRequest,
    DeleteZoneRequest: DeleteZoneRequest,
    BotManagedRule: BotManagedRule,
    SecurityConfig: SecurityConfig,
    L4OfflineLog: L4OfflineLog,
    ModifyZoneCnameSpeedUpResponse: ModifyZoneCnameSpeedUpResponse,
    FailReason: FailReason,
    DescribeRulesSettingRequest: DescribeRulesSettingRequest,
    LogSetInfo: LogSetInfo,
    OptimizeAction: OptimizeAction,
    DescribeDnsDataRequest: DescribeDnsDataRequest,
    RuleNormalActionParams: RuleNormalActionParams,
    PrivateParameter: PrivateParameter,
    CreateOriginGroupRequest: CreateOriginGroupRequest,
    TopDataRecord: TopDataRecord,
    ModifyLoadBalancingRequest: ModifyLoadBalancingRequest,
    DescribeWebManagedRulesLogRequest: DescribeWebManagedRulesLogRequest,
    WafGroup: WafGroup,
    DescribeAvailablePlansResponse: DescribeAvailablePlansResponse,
    RateLimitTemplate: RateLimitTemplate,
    DescribeWebProtectionTopDataResponse: DescribeWebProtectionTopDataResponse,
    WafGroupInfo: WafGroupInfo,
    DefaultServerCertInfo: DefaultServerCertInfo,
    OfflineCache: OfflineCache,
    DescribeDDoSAttackTopDataResponse: DescribeDDoSAttackTopDataResponse,
    SecRuleRelatedInfo: SecRuleRelatedInfo,
    DescribeSpeedTestingQuotaResponse: DescribeSpeedTestingQuotaResponse,
    DeleteRulesRequest: DeleteRulesRequest,
    ExceptUserRuleCondition: ExceptUserRuleCondition,
    ModifyDefaultCertificateRequest: ModifyDefaultCertificateRequest,
    MaxAge: MaxAge,
    DeleteApplicationProxyResponse: DeleteApplicationProxyResponse,
    SecEntryValue: SecEntryValue,
    ModifyAlarmDefaultThresholdResponse: ModifyAlarmDefaultThresholdResponse,
    CreateCredentialRequest: CreateCredentialRequest,
    ModifyRuleRequest: ModifyRuleRequest,
    DescribePrefetchTasksResponse: DescribePrefetchTasksResponse,
    DescribeWebManagedRulesHitRuleDetailRequest: DescribeWebManagedRulesHitRuleDetailRequest,
    DescribeBotClientIpListResponse: DescribeBotClientIpListResponse,
    ModifySecurityWafGroupPolicyRequest: ModifySecurityWafGroupPolicyRequest,
    DescribeZoneSettingRequest: DescribeZoneSettingRequest,
    ModifySecurityPolicyRequest: ModifySecurityPolicyRequest,
    ModifyDnssecRequest: ModifyDnssecRequest,
    SmartRouting: SmartRouting,
    CreateApplicationProxyResponse: CreateApplicationProxyResponse,
    Task: Task,
    BotLog: BotLog,
    DistrictStatistics: DistrictStatistics,
    CreateIpTableListRequest: CreateIpTableListRequest,
    ModifyDDoSPolicyHostRequest: ModifyDDoSPolicyHostRequest,
    DeleteAliasDomainRequest: DeleteAliasDomainRequest,
    DescribeIdentificationsResponse: DescribeIdentificationsResponse,
    CreatePurgeTaskResponse: CreatePurgeTaskResponse,
    DeleteApplicationProxyRuleResponse: DeleteApplicationProxyRuleResponse,
    ReclaimAliasDomainRequest: ReclaimAliasDomainRequest,
    CreateSecurityDropPageRequest: CreateSecurityDropPageRequest,
    ExceptConfig: ExceptConfig,
    DeleteOriginGroupRequest: DeleteOriginGroupRequest,
    DetailHost: DetailHost,
    AclCondition: AclCondition,
    PortraitManagedRuleDetail: PortraitManagedRuleDetail,
    L7OfflineLog: L7OfflineLog,
    CreateLogTopicTaskResponse: CreateLogTopicTaskResponse,
    ApplicationProxyRule: ApplicationProxyRule,
    DescribeDnsDataResponse: DescribeDnsDataResponse,
    Zone: Zone,
    DescribeDDoSAttackSourceEventRequest: DescribeDDoSAttackSourceEventRequest,
    ModifyLoadBalancingStatusRequest: ModifyLoadBalancingStatusRequest,
    DDoSAttackEvent: DDoSAttackEvent,
    DropPageDetail: DropPageDetail,
    SwitchLogTopicTaskResponse: SwitchLogTopicTaskResponse,
    CreateDnsRecordResponse: CreateDnsRecordResponse,
    ServerCertInfo: ServerCertInfo,
    DescribeZonesRequest: DescribeZonesRequest,
    OriginRecord: OriginRecord,
    AdvancedOriginGroup: AdvancedOriginGroup,
    CreateLoadBalancingResponse: CreateLoadBalancingResponse,
    DeleteLogTopicTaskRequest: DeleteLogTopicTaskRequest,
    VanityNameServers: VanityNameServers,
    DescribeDnsRecordsRequest: DescribeDnsRecordsRequest,
    CreatePrefetchTaskResponse: CreatePrefetchTaskResponse,
    DescribeDefaultCertificatesRequest: DescribeDefaultCertificatesRequest,
    ModifyApplicationProxyRuleResponse: ModifyApplicationProxyRuleResponse,
    DescribeWebProtectionHitRuleDetailRequest: DescribeWebProtectionHitRuleDetailRequest,
    DDoS: DDoS,
    DescribeSecurityRuleIdRequest: DescribeSecurityRuleIdRequest,
    DDoSHost: DDoSHost,
    DownloadL7LogsRequest: DownloadL7LogsRequest,
    DeleteLoadBalancingResponse: DeleteLoadBalancingResponse,
    RuleItem: RuleItem,
    DescribeAddableEntityListResponse: DescribeAddableEntityListResponse,
    Cache: Cache,
    DescribeBotHitRuleDetailRequest: DescribeBotHitRuleDetailRequest,
    DescribeWebProtectionHitRuleDetailResponse: DescribeWebProtectionHitRuleDetailResponse,
    DescribeSpeedTestingMetricDataRequest: DescribeSpeedTestingMetricDataRequest,
    ModifyLogTopicTaskResponse: ModifyLogTopicTaskResponse,
    RuleCondition: RuleCondition,
    DescribeOverviewL7DataResponse: DescribeOverviewL7DataResponse,
    DescribeSecurityPolicyRequest: DescribeSecurityPolicyRequest,
    TimingDataItem: TimingDataItem,
    RateLimitUserRule: RateLimitUserRule,
    ModifyDnsRecordResponse: ModifyDnsRecordResponse,
    CreatePlanForZoneRequest: CreatePlanForZoneRequest,
    DeleteLoadBalancingRequest: DeleteLoadBalancingRequest,
    CacheKey: CacheKey,
    DownloadL4LogsResponse: DownloadL4LogsResponse,
    IpTableConfig: IpTableConfig,
    DeleteOriginGroupResponse: DeleteOriginGroupResponse,
    CreateSecurityDropPageResponse: CreateSecurityDropPageResponse,
    SpeedTestingMetricData: SpeedTestingMetricData,
    DescribeIdentificationsRequest: DescribeIdentificationsRequest,
    ModifyHostsCertificateResponse: ModifyHostsCertificateResponse,
    CreateLogSetRequest: CreateLogSetRequest,
    CreateIpTableListResponse: CreateIpTableListResponse,
    NormalAction: NormalAction,
    TopDetailData: TopDetailData,
    DescribeZoneSettingResponse: DescribeZoneSettingResponse,
    DDoSAllowBlock: DDoSAllowBlock,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    IdentifyZoneRequest: IdentifyZoneRequest,
    CacheConfig: CacheConfig,
    ModifyDDoSPolicyResponse: ModifyDDoSPolicyResponse,
    DDoSFeaturesFilter: DDoSFeaturesFilter,
    IntelligenceRule: IntelligenceRule,
    DDoSAllowBlockRule: DDoSAllowBlockRule,
    DescribeZoneDDoSPolicyRequest: DescribeZoneDDoSPolicyRequest,
    ModifyLogTopicTaskRequest: ModifyLogTopicTaskRequest,
    DescribeDDoSAttackEventRequest: DescribeDDoSAttackEventRequest,
    DescribeWebProtectionClientIpListRequest: DescribeWebProtectionClientIpListRequest,
    ModifyDnssecResponse: ModifyDnssecResponse,
    CreateSpeedTestingResponse: CreateSpeedTestingResponse,
    SecHitRuleInfo: SecHitRuleInfo,
    DescribeOriginGroupRequest: DescribeOriginGroupRequest,
    DescribeLogTopicTasksResponse: DescribeLogTopicTasksResponse,
    CreatePlanForZoneResponse: CreatePlanForZoneResponse,
    DescribeLogTopicTasksRequest: DescribeLogTopicTasksRequest,
    DescribeDDoSAttackEventDetailResponse: DescribeDDoSAttackEventDetailResponse,
    SingleTypeValue: SingleTypeValue,
    CreateCredentialResponse: CreateCredentialResponse,
    DescribeAliasDomainsRequest: DescribeAliasDomainsRequest,
    SwitchLogTopicTaskRequest: SwitchLogTopicTaskRequest,
    DeleteApplicationProxyRequest: DeleteApplicationProxyRequest,
    ModifyZoneStatusRequest: ModifyZoneStatusRequest,
    ModifyOriginGroupResponse: ModifyOriginGroupResponse,
    ExceptUserRuleScope: ExceptUserRuleScope,
    ModifyAliasDomainRequest: ModifyAliasDomainRequest,
    DescribeSecurityPortraitRulesRequest: DescribeSecurityPortraitRulesRequest,
    ReclaimZoneResponse: ReclaimZoneResponse,
    DescribeSecurityPolicyRegionsResponse: DescribeSecurityPolicyRegionsResponse,
    DescribeBotTopDataRequest: DescribeBotTopDataRequest,
    DeleteZoneResponse: DeleteZoneResponse,
    CreateRuleResponse: CreateRuleResponse,
    BindZoneToPlanResponse: BindZoneToPlanResponse,
    CreateDnsRecordRequest: CreateDnsRecordRequest,
    WafRule: WafRule,
    ModifyApplicationProxyRequest: ModifyApplicationProxyRequest,
    ModifyAliasDomainStatusRequest: ModifyAliasDomainStatusRequest,
    RulesSettingAction: RulesSettingAction,
    Ipv6: Ipv6,
    ModifyAlarmDefaultThresholdRequest: ModifyAlarmDefaultThresholdRequest,
    ModifyApplicationProxyRuleRequest: ModifyApplicationProxyRuleRequest,
    DDoSStatusInfo: DDoSStatusInfo,
    AclConfig: AclConfig,
    SubRuleItem: SubRuleItem,
    DescribeSpeedTestingDetailsResponse: DescribeSpeedTestingDetailsResponse,
    WafGroupDetail: WafGroupDetail,
    CreateAliasDomainResponse: CreateAliasDomainResponse,
    ClientIpCountry: ClientIpCountry,
    LoadBalancing: LoadBalancing,
    DeleteApplicationProxyRuleRequest: DeleteApplicationProxyRuleRequest,
    FileAscriptionInfo: FileAscriptionInfo,
    DescribeDDoSBlockListResponse: DescribeDDoSBlockListResponse,
    DescribeTopL7CacheDataResponse: DescribeTopL7CacheDataResponse,
    SpeedTestingStatus: SpeedTestingStatus,
    CreateLoadBalancingRequest: CreateLoadBalancingRequest,
    DescribeDnssecRequest: DescribeDnssecRequest,
    RuleChoicePropertiesItem: RuleChoicePropertiesItem,
    ModifyAlarmConfigResponse: ModifyAlarmConfigResponse,
    ModifyAliasDomainStatusResponse: ModifyAliasDomainStatusResponse,
    DescribeTimingL7AnalysisDataRequest: DescribeTimingL7AnalysisDataRequest,
    NoCache: NoCache,
    GeoIp: GeoIp,
    DescribeSecurityGroupManagedRulesRequest: DescribeSecurityGroupManagedRulesRequest,
    ModifyApplicationProxyStatusRequest: ModifyApplicationProxyStatusRequest,
    CreateZoneRequest: CreateZoneRequest,
    AscriptionInfo: AscriptionInfo,
    DescribeLogSetsResponse: DescribeLogSetsResponse,
    DescribeClientRuleListResponse: DescribeClientRuleListResponse,
    Waf: Waf,
    DescribeLogTopicTaskDetailRequest: DescribeLogTopicTaskDetailRequest,
    CreateSpeedTestingRequest: CreateSpeedTestingRequest,
    CreateReplayTaskRequest: CreateReplayTaskRequest,
    DescribeRateLimitIntelligenceRuleRequest: DescribeRateLimitIntelligenceRuleRequest,
    DescribeDnsRecordsResponse: DescribeDnsRecordsResponse,
    DescribeDDoSAttackDataRequest: DescribeDDoSAttackDataRequest,
    DescribeWebManagedRulesDataResponse: DescribeWebManagedRulesDataResponse,
    DescribeApplicationProxiesRequest: DescribeApplicationProxiesRequest,
    DescribeContentQuotaRequest: DescribeContentQuotaRequest,
    DescribeWebProtectionAttackEventsRequest: DescribeWebProtectionAttackEventsRequest,
    Hsts: Hsts,
    CreateRuleRequest: CreateRuleRequest,
    TemplateConfig: TemplateConfig,
    DescribeRateLimitIntelligenceRuleResponse: DescribeRateLimitIntelligenceRuleResponse,
    RateLimitTemplateDetail: RateLimitTemplateDetail,
    CreateApplicationProxyRuleResponse: CreateApplicationProxyRuleResponse,
    DescribeLogSetsRequest: DescribeLogSetsRequest,
    ClientRule: ClientRule,
    CreateApplicationProxyRequest: CreateApplicationProxyRequest,
    CC: CC,
    DescribeTimingL4DataResponse: DescribeTimingL4DataResponse,
    Action: Action,
    LogTopicDetailInfo: LogTopicDetailInfo,
    ApplicationProxy: ApplicationProxy,
    ModifyApplicationProxyResponse: ModifyApplicationProxyResponse,
    ZoneSetting: ZoneSetting,
    RuleAndConditions: RuleAndConditions,
    DropPageConfig: DropPageConfig,
    PartialModule: PartialModule,
    ModifyApplicationProxyRuleStatusRequest: ModifyApplicationProxyRuleStatusRequest,
    AccelerateType: AccelerateType,
    ModifyDefaultCertificateResponse: ModifyDefaultCertificateResponse,
    DescribeSecurityGroupManagedRulesResponse: DescribeSecurityGroupManagedRulesResponse,
    FollowOrigin: FollowOrigin,
    DescribeSpeedTestingDetailsRequest: DescribeSpeedTestingDetailsRequest,
    CreateLogTopicTaskRequest: CreateLogTopicTaskRequest,
    QueryCondition: QueryCondition,
    RuleRewriteActionParams: RuleRewriteActionParams,
    ModifyAliasDomainResponse: ModifyAliasDomainResponse,
    DeleteDnsRecordsRequest: DeleteDnsRecordsRequest,
    DescribeBotLogRequest: DescribeBotLogRequest,
    DDoSGeoIp: DDoSGeoIp,
    ModifyHostsCertificateRequest: ModifyHostsCertificateRequest,
    DDoSMajorAttackEvent: DDoSMajorAttackEvent,
    DescribeTopL7AnalysisDataResponse: DescribeTopL7AnalysisDataResponse,
    ClientIpHeader: ClientIpHeader,
    Resource: Resource,
    DescribeHostsSettingRequest: DescribeHostsSettingRequest,
    DescribeBotHitRuleDetailResponse: DescribeBotHitRuleDetailResponse,
    DescribeDDoSAttackEventDetailRequest: DescribeDDoSAttackEventDetailRequest,
    DeleteRulesResponse: DeleteRulesResponse,
    OriginGroup: OriginGroup,
    DescribeWebManagedRulesHitRuleDetailResponse: DescribeWebManagedRulesHitRuleDetailResponse,
    WebLogs: WebLogs,
    SkipCondition: SkipCondition,
    DnssecInfo: DnssecInfo,
    UpstreamHttp2: UpstreamHttp2,
    ReclaimAliasDomainResponse: ReclaimAliasDomainResponse,
    DeleteAliasDomainResponse: DeleteAliasDomainResponse,
    BotConfig: BotConfig,
    CreateReplayTaskResponse: CreateReplayTaskResponse,
    SingleDataRecord: SingleDataRecord,
    SecClientIp: SecClientIp,
    DescribeTopL7CacheDataRequest: DescribeTopL7CacheDataRequest,
    Https: Https,
    DescribeBotManagedRulesResponse: DescribeBotManagedRulesResponse,
    AdvancedFilter: AdvancedFilter,
    CreateCustomErrorPageResponse: CreateCustomErrorPageResponse,
    DescribeDDoSAttackDataResponse: DescribeDDoSAttackDataResponse,
    ModifyZoneSettingRequest: ModifyZoneSettingRequest,
    DDoSAcl: DDoSAcl,
    ModifyApplicationProxyRuleStatusResponse: ModifyApplicationProxyRuleStatusResponse,
    DescribeClientRuleListRequest: DescribeClientRuleListRequest,
    ModifyZoneRequest: ModifyZoneRequest,
    DescribeAvailablePlansRequest: DescribeAvailablePlansRequest,
    ModifyZoneResponse: ModifyZoneResponse,
    WafGroupRule: WafGroupRule,
    DDoSAclRule: DDoSAclRule,
    DescribeBotTopDataResponse: DescribeBotTopDataResponse,
    DescribeBotClientIpListRequest: DescribeBotClientIpListRequest,
    AliasDomain: AliasDomain,
    IpTableRule: IpTableRule,
    DescribeDDoSAttackTopDataRequest: DescribeDDoSAttackTopDataRequest,
    Quic: Quic,
    DescribeRulesRequest: DescribeRulesRequest,
    CCInterceptEvent: CCInterceptEvent,
    DescribeDDoSMajorAttackEventResponse: DescribeDDoSMajorAttackEventResponse,
    DescribeContentQuotaResponse: DescribeContentQuotaResponse,
    ModifyZoneSettingResponse: ModifyZoneSettingResponse,
    DownloadL7LogsResponse: DownloadL7LogsResponse,
    DnsData: DnsData,
    DescribeWebManagedRulesLogResponse: DescribeWebManagedRulesLogResponse,
    AclUserRule: AclUserRule,
    RewriteAction: RewriteAction,
    DescribeOverviewL7DataRequest: DescribeOverviewL7DataRequest,
    WebSocket: WebSocket,
    DescribeWebProtectionTopDataRequest: DescribeWebProtectionTopDataRequest,
    DDoSBlockData: DDoSBlockData,
    ModifySecurityWafGroupPolicyResponse: ModifySecurityWafGroupPolicyResponse,
    DescribeWebManagedRulesDataRequest: DescribeWebManagedRulesDataRequest,
    SpeedTestingQuota: SpeedTestingQuota,
    DescribePrefetchTasksRequest: DescribePrefetchTasksRequest,
    DnsRecord: DnsRecord,
    ModifyRulePriorityRequest: ModifyRulePriorityRequest,
    SpeedTestingStatistics: SpeedTestingStatistics,
    BindZoneToPlanRequest: BindZoneToPlanRequest,
    SecurityType: SecurityType,
    ModifyRuleResponse: ModifyRuleResponse,
    CheckCertificateResponse: CheckCertificateResponse,
    DescribeWebProtectionDataRequest: DescribeWebProtectionDataRequest,
    DescribeSecurityPortraitRulesResponse: DescribeSecurityPortraitRulesResponse,
    ModifyDDoSPolicyRequest: ModifyDDoSPolicyRequest,
    ModifyApplicationProxyStatusResponse: ModifyApplicationProxyStatusResponse,
    Identification: Identification,
    ModifyAlarmConfigRequest: ModifyAlarmConfigRequest,
    DeleteLogTopicTaskResponse: DeleteLogTopicTaskResponse,
    ModifyLoadBalancingResponse: ModifyLoadBalancingResponse,
    TopEntry: TopEntry,
    DescribeRulesSettingResponse: DescribeRulesSettingResponse,
    IntelligenceRuleItem: IntelligenceRuleItem,
    DescribeLogTopicTaskDetailResponse: DescribeLogTopicTaskDetailResponse,
    PostMaxSize: PostMaxSize,
    Filter: Filter,
    CreateZoneResponse: CreateZoneResponse,
    DescribeSpeedTestingQuotaRequest: DescribeSpeedTestingQuotaRequest,
    ModifySecurityPolicyResponse: ModifySecurityPolicyResponse,
    ModifyOriginGroupRequest: ModifyOriginGroupRequest,
    DescribeAddableEntityListRequest: DescribeAddableEntityListRequest,
    DescribeSingleL7AnalysisDataResponse: DescribeSingleL7AnalysisDataResponse,
    DescribeDefaultCertificatesResponse: DescribeDefaultCertificatesResponse,
    CreateOriginGroupResponse: CreateOriginGroupResponse,
    DescribeSecurityPolicyResponse: DescribeSecurityPolicyResponse,
    SpeedTestingConfig: SpeedTestingConfig,
    DescribeSecurityPolicyRegionsRequest: DescribeSecurityPolicyRegionsRequest,
    AiRule: AiRule,
    DescribeLoadBalancingRequest: DescribeLoadBalancingRequest,
    DescribeWebProtectionDataResponse: DescribeWebProtectionDataResponse,
    Quota: Quota,
    DescribeZoneDDoSPolicyResponse: DescribeZoneDDoSPolicyResponse,
    ModifyZoneStatusResponse: ModifyZoneStatusResponse,
    DescribeWebProtectionAttackEventsResponse: DescribeWebProtectionAttackEventsResponse,
    CreatePurgeTaskRequest: CreatePurgeTaskRequest,
    DeleteDnsRecordsResponse: DeleteDnsRecordsResponse,
    DescribeSecurityRuleIdResponse: DescribeSecurityRuleIdResponse,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    DescribeBotLogResponse: DescribeBotLogResponse,
    DescribeLoadBalancingResponse: DescribeLoadBalancingResponse,
    RateLimitIntelligence: RateLimitIntelligence,
    QueryString: QueryString,
    TimingTypeValue: TimingTypeValue,
    DescribeTimingL4DataRequest: DescribeTimingL4DataRequest,
    VanityNameServersIps: VanityNameServersIps,
    DescribeBotManagedRulesRequest: DescribeBotManagedRulesRequest,

}