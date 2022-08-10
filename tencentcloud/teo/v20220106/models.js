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
 * Smart compression
 * @class
 */
class Compression extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable Smart compression
`on`: Enable
`off`: Disable
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
 * Web attack log data
 * @class
 */
class WebLogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WebLogs> || null}
         */
        this.List = null;

        /**
         * Current page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Number of items per page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of pages
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Total number of items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new WebLogs();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

/**
 * Certificate configurations for domain names
 * @class
 */
class HostCertSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Server certificate configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.Host = 'Host' in params ? params.Host : null;

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
 * Custom ACL rule
 * @class
 */
class ACLUserRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the rule
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Action
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Status of the rule
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * ACL rule
         * @type {Array.<ACLCondition> || null}
         */
        this.Conditions = null;

        /**
         * Priority of the rule
         * @type {number || null}
         */
        this.RulePriority = null;

        /**
         * ID of the rule
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * Update time
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * IP blocking time
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * IP blocking time unit
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * Name of the custom block page
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * ID of the custom block page
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * Redirection URL, which must be a subdomain name of the site
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * Return code configured on the custom block page
Note: This field may return `null`, indicating that no valid value can be obtained.
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

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ACLCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
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
 * ModifyDefaultCertificate request structure.
 * @class
 */
class ModifyDefaultCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Certificate status
`deployed`: The certificate is deployed.
`disabled`: The certificate is disabled.
If the deployment fails, you can pass in `Status = deployed` again.
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
 * DescribeWebManagedRulesTopData response structure.
 * @class
 */
class DescribeWebManagedRulesTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top N data
         * @type {Array.<TopNEntry> || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new TopNEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
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
         * Origin group information
         * @type {Array.<OriginGroup> || null}
         */
        this.Data = null;

        /**
         * Total number of records
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
                let obj = new OriginGroup();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebManagedRulesAttackEvents response structure.
 * @class
 */
class DescribeWebManagedRulesAttackEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Web attack event data
         * @type {WebEventData || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned data
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new WebEventData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
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
         * Start time of the query (client time in RFC 3339)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query (client time in RFC 3339)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Metric for time-series data query
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Specifies the number of data records to return. If `0` is passed in, all data is returned.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Time interval. Values: {min, 5min, hour, day, week}. This field is optional.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Array of site IDs
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Filter condition
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

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
 * DeleteApplicationProxy response structure.
 * @class
 */
class DeleteApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Proxy ID
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
 * Domain name HTTPS acceleration configuration. This is disabled by default.
 * @class
 */
class Https extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP2 configuration switch
`on`: Enable
`off`: Disable
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Http2 = null;

        /**
         * OCSP configuration switch
`on`: Enable
`off`: Disable
It is disabled by default.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OcspStapling = null;

        /**
         * TLS version settings. Valid values: `TLSv1`, `TLSV1.1`, `TLSV1.2`, and `TLSv1.3`. Only consecutive versions can be enabled at the same time.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.TlsVersion = null;

        /**
         * HSTS Configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.OcspStapling = 'OcspStapling' in params ? params.OcspStapling : null;
        this.TlsVersion = 'TlsVersion' in params ? params.TlsVersion : null;

        if (params.Hsts) {
            let obj = new Hsts();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }

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
         * User APPID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Top-level domain name
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Second-level domain name
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Type of protected resource. Values: `domain` and `application`.
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;

    }
}

/**
 * The filter parameter to query origin groups
 * @class
 */
class OriginFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field to be filtered. Supported field: name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value of the field
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
 * Block log in rate-limiting policy
 * @class
 */
class BotLogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data set of bot attack logs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BotLog> || null}
         */
        this.List = null;

        /**
         * Current page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Number of items per page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of pages
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Total number of items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new BotLog();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
 * Rate limit template
 * @class
 */
class RateLimitTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Template details
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {RateLimitTemplateDetail || null}
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
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.Detail) {
            let obj = new RateLimitTemplateDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }

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
         * ID of the site (top-level domain name)
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Type of protected resource. Values: `domain` and `application`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Layer-4 proxy name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.EntityName = null;

        /**
         * Layer-7 domain name parameters
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<DDoSApplication> || null}
         */
        this.Application = null;

        /**
         * Number of layer-4 TCP forwarding rules
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TcpNum = null;

        /**
         * Number of layer-4 UDP forwarding rules
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.UdpNum = null;

        /**
         * Name of the protected resource
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Whether the shared resource is used. Values: `true` (yes) and `false` (no). The proxy mode cannot be switched when the shared resource is used.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.Share = null;

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

        if (params.Application) {
            this.Application = new Array();
            for (let z in params.Application) {
                let obj = new DDoSApplication();
                obj.deserialize(params.Application[z]);
                this.Application.push(obj);
            }
        }
        this.TcpNum = 'TcpNum' in params ? params.TcpNum : null;
        this.UdpNum = 'UdpNum' in params ? params.UdpNum : null;
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.Share = 'Share' in params ? params.Share : null;

    }
}

/**
 * DDoS mitigation configuration
 * @class
 */
class DdosRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS mitigation level
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {DDoSStatusInfo || null}
         */
        this.DdosStatusInfo = null;

        /**
         * DDoS regional blocking
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {DDoSGeoIp || null}
         */
        this.DdosGeoIp = null;

        /**
         * DDoS blocklist/allowlist
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {DdosAllowBlock || null}
         */
        this.DdosAllowBlock = null;

        /**
         * Protocol blocking and null session protection
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {DDoSAntiPly || null}
         */
        this.DdosAntiPly = null;

        /**
         * DDoS feature filtering
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {DdosPacketFilter || null}
         */
        this.DdosPacketFilter = null;

        /**
         * DDoS port filtering
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {DdosAcls || null}
         */
        this.DdosAcl = null;

        /**
         * DDoS mitigation switch. `on`: Enable; `off`: Disable.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Whether to enable UDP fragmentation. `on`: Enable; `off`: Disable.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UdpShardOpen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DdosStatusInfo) {
            let obj = new DDoSStatusInfo();
            obj.deserialize(params.DdosStatusInfo)
            this.DdosStatusInfo = obj;
        }

        if (params.DdosGeoIp) {
            let obj = new DDoSGeoIp();
            obj.deserialize(params.DdosGeoIp)
            this.DdosGeoIp = obj;
        }

        if (params.DdosAllowBlock) {
            let obj = new DdosAllowBlock();
            obj.deserialize(params.DdosAllowBlock)
            this.DdosAllowBlock = obj;
        }

        if (params.DdosAntiPly) {
            let obj = new DDoSAntiPly();
            obj.deserialize(params.DdosAntiPly)
            this.DdosAntiPly = obj;
        }

        if (params.DdosPacketFilter) {
            let obj = new DdosPacketFilter();
            obj.deserialize(params.DdosPacketFilter)
            this.DdosPacketFilter = obj;
        }

        if (params.DdosAcl) {
            let obj = new DdosAcls();
            obj.deserialize(params.DdosAcl)
            this.DdosAcl = obj;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.UdpShardOpen = 'UdpShardOpen' in params ? params.UdpShardOpen : null;

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
         * CLB instance ID
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
 * DescribeDDosAttackEvent response structure.
 * @class
 */
class DescribeDDosAttackEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS attack event data
         * @type {DDosAttackEventData || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new DDosAttackEventData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID
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
 * ReclaimZone response structure.
 * @class
 */
class ReclaimZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
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
         * Site ID
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
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site status.
- `false`: Enable the site.
- `true`: Disable the site.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Paused = 'Paused' in params ? params.Paused : null;

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
         * Record ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Record content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Priority
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Proxy mode
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
        this.Id = 'Id' in params ? params.Id : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * DDoS port filtering configuration
 * @class
 */
class DDoSAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Destination port used as the end port
         * @type {number || null}
         */
        this.DportEnd = null;

        /**
         * Destination port used as the start port
         * @type {number || null}
         */
        this.DportStart = null;

        /**
         * Source port used as the end port
         * @type {number || null}
         */
        this.SportEnd = null;

        /**
         * Source port used as the start port
         * @type {number || null}
         */
        this.SportStart = null;

        /**
         * Protocol. Values: `tcp`, `udp`, and `all`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Action. Values: `drop` (Drop the request); `transmit` (Allow the request); `forward` (Continue to offer protection).
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Whether it is a system configuration. Values: `0` (manual configuration); `1` (system configuration).
         * @type {number || null}
         */
        this.Default = null;

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
        this.Default = 'Default' in params ? params.Default : null;

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
         * Top-level domain name
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name/layer-4 proxy
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Security configuration
         * @type {SecurityConfig || null}
         */
        this.Config = null;

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

        if (params.Config) {
            let obj = new SecurityConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * CreateApplicationProxyRules request structure.
 * @class
 */
class CreateApplicationProxyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Rule list
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

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

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }

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
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name. You can use @ to represent the root domain.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Proxy mode. Valid values:
`dns_only`: Only DNS
`proxied`: Enable proxy
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Indicates DNS TTL time when `Type=dns_only`
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * ID of the origin group used
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * Information of the origin server used
         * @type {Array.<OriginGroup> || null}
         */
        this.Origin = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Schedules domain names
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

        if (params.Origin) {
            this.Origin = new Array();
            for (let z in params.Origin) {
                let obj = new OriginGroup();
                obj.deserialize(params.Origin[z]);
                this.Origin.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;

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
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * DNSSEC status
- `enabled`: Enabled
- `disabled`: Disabled
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * ID of the site to be modified
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Cache expiration time
         * @type {CacheConfig || null}
         */
        this.Cache = null;

        /**
         * Node cache key
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Browser cache configuration
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * Offline cache
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * QUIC access
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * Maximum size of files transferred over POST request
         * @type {PostMaxSize || null}
         */
        this.PostMaxSize = null;

        /**
         * Smart compression configuration
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * HTTP2 origin-pull configuration
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * Force HTTPS redirect configuration
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * HTTPS acceleration configuration
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * Origin server configuration
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Smart acceleration configuration
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * WebSocket configuration
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * Origin-pull client IP header configuration
         * @type {ClientIp || null}
         */
        this.ClientIpHeader = null;

        /**
         * Cache prefresh configuration
         * @type {CachePrefresh || null}
         */
        this.CachePrefresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.Cache) {
            let obj = new CacheConfig();
            obj.deserialize(params.Cache)
            this.Cache = obj;
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
            let obj = new ClientIp();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

        if (params.CachePrefresh) {
            let obj = new CachePrefresh();
            obj.deserialize(params.CachePrefresh)
            this.CachePrefresh = obj;
        }

    }
}

/**
 * DDoS feature filtering
 * @class
 */
class DdosPacketFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to remove all settings when empty strings are passed in. Default value: `off` (remove)
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Array of objects in feature filtering configuration
         * @type {Array.<DDoSFeaturesFilter> || null}
         */
        this.PacketFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.PacketFilter) {
            this.PacketFilter = new Array();
            for (let z in params.PacketFilter) {
                let obj = new DDoSFeaturesFilter();
                obj.deserialize(params.PacketFilter[z]);
                this.PacketFilter.push(obj);
            }
        }

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
         * Layer-4 application proxy ID
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
 * ImportDnsRecords request structure.
 * @class
 */
class ImportDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * File content
         * @type {string || null}
         */
        this.File = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.File = 'File' in params ? params.File : null;

    }
}

/**
 * Do not cache the configuration
 * @class
 */
class CacheConfigNoCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to cache the configuration
`on`: Do not cache
`off`: Cache
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * ModifyOriginGroup response structure.
 * @class
 */
class ModifyOriginGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin group ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZoneDetails response structure.
 * @class
 */
class DescribeZoneDetailsResponse extends  AbstractModel {
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
         * List of name servers used
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * List of name servers assigned to users by Tencent Cloud
Note: This field may return `null`, indicating that no valid value can be obtained.
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
         * Specifies how the site is connected to EdgeOne.
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

        /**
         * User-defined name server information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

        /**
         * User-defined name server IP information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<VanityNameServersIps> || null}
         */
        this.VanityNameServersIps = null;

        /**
         * Specifies whether to enable CNAME acceleration
- `enabled`: Enable
- `disabled`: Disable
         * @type {string || null}
         */
        this.CnameSpeedUp = null;

        /**
         * Ownership verification status of the site when it accesses via CNAME.
- `finished`: The site is verified.
- `pending`: The site is waiting for verification.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;

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
        this.CnameSpeedUp = 'CnameSpeedUp' in params ? params.CnameSpeedUp : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Attack time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AttackTime = null;

        /**
         * Attack IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackIp = null;

        /**
         * Domain name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Request URI
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RequestUri = null;

        /**
         * Attack type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * Request method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RequestMethod = null;

        /**
         * Attack content
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackContent = null;

        /**
         * Risk grade
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * Rule number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * IP country/region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SipCountryCode = null;

        /**
         * Event ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * Processing method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisposalMethod = null;

        /**
         * http_log
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HttpLog = null;

        /**
         * user agent
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ua = null;

        /**
         * Detection method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DetectionMethod = null;

        /**
         * Confidence
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

    }
}

/**
 * Origin server configuration
 * @class
 */
class Origin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin-pull protocol.
`http`: Switch HTTPS requests to HTTP
`follow`: Follow the protocol of the request.
`https`: Switch HTTP requests to HTTPS. This only supports port 443 on the origin server.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginPullProtocol = 'OriginPullProtocol' in params ? params.OriginPullProtocol : null;

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
         * Site status.
- `false`: Enable the site.
- `true`: Disable the site.
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * Update time
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityPolicyManagedRules request structure.
 * @class
 */
class DescribeSecurityPolicyManagedRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top-level domain name
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name/layer-4 proxy
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Total number of pages
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of rules per page
         * @type {number || null}
         */
        this.PerPage = null;

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
        this.Page = 'Page' in params ? params.Page : null;
        this.PerPage = 'PerPage' in params ? params.PerPage : null;

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
         * Top-level domain name
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name/Application name
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
 * Sorting conditions for query results.
 * @class
 */
class CertSort extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fields that can be sorted. Values:
`createTime`: Domain name creation time
`certExpireTime`: Certificate expiration time
`certDeployTime`: Certificate deployment time
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Sorting order. Valid values: `asc` and `desc` (default).
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
 * ModifyDDoSPolicyHost request structure.
 * @class
 */
class ModifyDDoSPolicyHostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Second-level domain name
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Whether to enable content acceleration. Values: `on` (enable content acceleration), and `off` (disable content acceleration). It can be used together with `SecurityType`.
         * @type {string || null}
         */
        this.AccelerateType = null;

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Whether to enable security protection. Values: `on` (enable security protection) and `off` (disable security protection). It can be used together with `AccelerateType`.
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
 * DescribeHostsSetting response structure.
 * @class
 */
class DescribeHostsSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of domain names
         * @type {Array.<DetailHost> || null}
         */
        this.Hosts = null;

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

        if (params.Hosts) {
            this.Hosts = new Array();
            for (let z in params.Hosts) {
                let obj = new DetailHost();
                obj.deserialize(params.Hosts[z]);
                this.Hosts.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
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
         * Total number of regions
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Region information
         * @type {Array.<GeoIp> || null}
         */
        this.GeoIp = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.GeoIp) {
            this.GeoIp = new Array();
            for (let z in params.GeoIp) {
                let obj = new GeoIp();
                obj.deserialize(params.GeoIp[z]);
                this.GeoIp.push(obj);
            }
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
         * Name server used by the site
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * Site status.
- `pending`: The name server is not connected.
- `active`: The name server is connected.
- `moved`: The name server is moved.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Specifies how the site is connected to EdgeOne.
- `full`: Connect via the name server.
- `partial`: Connect via the CNAME.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * List of name servers assigned by Tencent Cloud
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * CNAME access status.
- `finished`: Ownership of the site is verified.
- `pending`: Verifying the ownership of the site.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDosAttackSourceEvent request structure.
 * @class
 */
class DescribeDDosAttackSourceEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of items
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Set of DDoS policy group IDs
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * Site set
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Protocol type. Valid values: {tcp,udp,all}
         * @type {string || null}
         */
        this.ProtocolType = null;

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
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;

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
         * Site ID, which is used to identify the site.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Specifies how the site is connected to EdgeOne.
- `full`: Connect via the name server.
- `partial`: Connect via the CNAME.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Custom site information
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }

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
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DDoS attack event data
 * @class
 */
class DDosAttackEventData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data set of attack events
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DDosAttackEvent> || null}
         */
        this.List = null;

        /**
         * Current page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Number of items per page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of pages
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Total number of items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new DDosAttackEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
         * Specifies whether to enable. Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * `MaxAge` value.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.MaxAge = null;

        /**
         * Specifies whether to include subdomain names. Valid values: `on` and `off`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.IncludeSubDomains = null;

        /**
         * Specifies whether to preload. Valid values: `on` and `off`.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * DeleteApplicationProxyRule response structure.
 * @class
 */
class DeleteApplicationProxyRuleResponse extends  AbstractModel {
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
 * DDoS attack event object
 * @class
 */
class DDosAttackSourceEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attack source IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackSourceIp = null;

        /**
         * Country/Region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackRegion = null;

        /**
         * Accumulative attack traffic
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AttackFlow = null;

        /**
         * Accumulative number of attack packets
Note: This field may return null, indicating that no valid values can be obtained.
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
 * Time series data of L7 data analysis
 * @class
 */
class TimingDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query dimension value
         * @type {string || null}
         */
        this.TypeKey = null;

        /**
         * Detailed time series data
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DDoS port filtering
 * @class
 */
class DdosAcls extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to remove all settings when empty strings are passed in. Default value: `off` (remove)
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * DDoS port filtering parameters
         * @type {Array.<DDoSAcl> || null}
         */
        this.Acl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.Acl) {
            this.Acl = new Array();
            for (let z in params.Acl) {
                let obj = new DDoSAcl();
                obj.deserialize(params.Acl[z]);
                this.Acl.push(obj);
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
         * Origin group ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * Site ID
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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * The structure used to sort the top data
 * @class
 */
class TopDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field name
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Field value
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
 * CreateDnsRecord request structure.
 * @class
 */
class CreateDnsRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Record content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Proxy mode. Valid values: `dns_only`, `cdn_only`, and `secure_cdn`.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Priority
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
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

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
         * Action: `drop` (block), `trans` (allow), `monitor` (observe)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Matches by IP or region. Values: `ip` and `area`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * Matching content
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MatchContent = null;

        /**
         * Rule ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleID = null;

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
        this.Action = 'Action' in params ? params.Action : null;
        this.MatchFrom = 'MatchFrom' in params ? params.MatchFrom : null;
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
         * Subdomain name
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

/**
 * ModifyHostsCertificate request structure.
 * @class
 */
class ModifyHostsCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Domain name that the certificate will be attached to
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * Certificate information. Note that only `CertId` is required. If it is not specified, the default certificate will be used.
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;

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
 * Application proxy rule
 * @class
 */
class ApplicationProxyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol. Valid values: `TCP` and `UDP`.
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * Port. Valid values:
`80`: Port 80
`81-90`: Port range 81-90
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * Origin server type. Valid values:
`custom`: Specified origins
`origins`: Origin group
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin server information:
When `OriginType=custom`, it indicates one or more origin servers. Example:
OriginValue=["8.8.8.8:80","9.9.9.9:80"]
OriginValue=["test.com:80"]

When `OriginType=origins`, it indicates an origin group ID. Example:
OriginValue=["origin-xxx"]
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * Rule ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Status:
`online`: Enable
`offline`: Disable
`progress`: Deploying
`stopping`: Disabling
`fail`: Deployment/Disabling failed
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Passes the client IP. When `Proto=TCP`, valid values:
`TOA`: Pass the client IP via TOA
`PPV1`: Pass the client IP via Proxy Protocol V1
`PPV2`: Pass the client IP via Proxy Protocol V2
`OFF`: Do not pass the client IP.
When `Proto=UDP`, valid values:
`PPV2`: Pass the client IP via Proxy Protocol V2
`OFF`: Do not pass the client IP.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * Specifies whether to enable session persistence
         * @type {boolean || null}
         */
        this.SessionPersist = null;

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
         * Whether to enable smart acceleration
`on`: Enable
`off`: Disable
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
         * DNS request data
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<DataItem> || null}
         */
        this.Data = null;

        /**
         * Interval
Note: This field may return `null`, indicating that no valid value can be obtained.
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
                let obj = new DataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
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

        /**
         * Ownership verification status of the site when it is connected to EdgeOne via CNAME.
- `finished`: The site is verified.
- `pending`: Verifying the ownership of the site.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CnameStatus = null;

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
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;

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
 * DescribeSecurityPolicyManagedRulesId request structure.
 * @class
 */
class DescribeSecurityPolicyManagedRulesIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rule IDs
         * @type {Array.<number> || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * ID of the proxy
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Status
`offline`: Disabled
`online`: Enabled
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
 * Cache time settings
 * @class
 */
class CacheConfigCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache configuration switch
`on`: Enable
`off`: Disable
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Cache expiration time settings
Unit: second. The maximum value is 365 days.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.CacheTime = null;

        /**
         * Specifies whether to enable force cache
`on`: Enable
`off`: Disable
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * Query filter to search for certificates
 * @class
 */
class CertFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters by the field name. Values:
 - `host`: Domain name
 - `certId`: Certificate ID
 - `certAlias`: Certificate alias
 - `certType: default`: Default certificate; `upload`: External certificate; `managed`: Tencent Cloud certificate.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filters by the field value
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Specifies whether to enable fuzzy query, which only supports the `host` field.
If it is enabled, the length of `Value` must be 1.
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
 * DescribeIdentification request structure.
 * @class
 */
class DescribeIdentificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
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
 * ModifyLoadBalancingStatus request structure.
 * @class
 */
class ModifyLoadBalancingStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * Status.
`online`: Enabled
`offline`: Disabled
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
 * DescribeDDosAttackTopData response structure.
 * @class
 */
class DescribeDDosAttackTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top N data
         * @type {Array.<TopNEntry> || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new TopNEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCnameStatus response structure.
 * @class
 */
class DescribeCnameStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of CNAME statuses
         * @type {Array.<CnameStatus> || null}
         */
        this.Status = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Status) {
            this.Status = new Array();
            for (let z in params.Status) {
                let obj = new CnameStatus();
                obj.deserialize(params.Status[z]);
                this.Status.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Ignore query string parameter
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Specifies whether the `Host` parameter supports fuzzy match
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

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
         * Client IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Number of blocks per minute
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InterceptNum = null;

        /**
         * Block time in rate-limiting policy per minute in seconds
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
 * DDoS protection level
 * @class
 */
class DDoSStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is not supported. Value: `off`.
         * @type {string || null}
         */
        this.AiStatus = null;

        /**
         * User appid
         * @type {string || null}
         */
        this.Appid = null;

        /**
         * Protection level. Values: `low`, `middle`, and `high`.
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
        this.AiStatus = 'AiStatus' in params ? params.AiStatus : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
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
         * Switch
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * ACL user rule
         * @type {Array.<ACLUserRule> || null}
         */
        this.UserRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.UserRules) {
            this.UserRules = new Array();
            for (let z in params.UserRules) {
                let obj = new ACLUserRule();
                obj.deserialize(params.UserRules[z]);
                this.UserRules.push(obj);
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
         * Site ID
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
 * ScanDnsRecords response structure.
 * @class
 */
class ScanDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scan status
- `doing`: Scanning
- `done`: Scanned
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Number of DNS records added after scanning
         * @type {number || null}
         */
        this.RecordsAdded = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RecordsAdded = 'RecordsAdded' in params ? params.RecordsAdded : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WAF configuration
 * @class
 */
class WafConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Protection level: `loose`, `normal`, `strict`, `stricter`, `custom`
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Mode: `block`, `observe`, `close`
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * WAF rule allowlist/blocklist
         * @type {WafRule || null}
         */
        this.WafRules = null;

        /**
         * AI rule engine
Note: This field may return `null`, indicating that no valid value can be obtained.
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
         * Record ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Record content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Priority
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Proxy mode
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Resolution status. Valid values:
`active`: Activated
`pending`: Not activated
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Whether the DNS record is locked
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * CNAME address
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Block log in rate-limiting policy
 * @class
 */
class CCLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attack time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AttackTime = null;

        /**
         * Attack source IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackSip = null;

        /**
         * Attack domain name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackDomain = null;

        /**
         * Request URI
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RequestUri = null;

        /**
         * Number of hits
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HitCount = null;

        /**
         * IP country/region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SipCountryCode = null;

        /**
         * Event ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * Processing method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisposalMethod = null;

        /**
         * http_log
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HttpLog = null;

        /**
         * Rule number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Risk grade
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RiskLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;
        this.AttackSip = 'AttackSip' in params ? params.AttackSip : null;
        this.AttackDomain = 'AttackDomain' in params ? params.AttackDomain : null;
        this.RequestUri = 'RequestUri' in params ? params.RequestUri : null;
        this.HitCount = 'HitCount' in params ? params.HitCount : null;
        this.SipCountryCode = 'SipCountryCode' in params ? params.SipCountryCode : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.DisposalMethod = 'DisposalMethod' in params ? params.DisposalMethod : null;
        this.HttpLog = 'HttpLog' in params ? params.HttpLog : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

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
         * Server certificate ID, which is the ID of the default certificate. If you choose to upload an external certificate for SSL certificate management, a certificate ID will be generated.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Alias of the certificate
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Certificate type.
`default`: Default certificate
`upload`: External certificate
`managed`: Tencent Cloud managed certificate
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time when the certificate expires
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Certificate deployment time
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * Certificate deployment status.
`processing`: Deploying
`deployed`: Deployed
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DDoS configuration
 * @class
 */
class DDoSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch
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
 * DescribeWebManagedRulesData response structure.
 * @class
 */
class DescribeWebManagedRulesDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Web attack log entity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Query time granularity. Valid values: {min,5min,hour,day}
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
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
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
         * Web attack log data
         * @type {WebLogData || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new WebLogData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Record value
         * @type {string || null}
         */
        this.Record = null;

        /**
         * A specific region when `Type=area`.
The default region when `Type` is not specified.
         * @type {Array.<string> || null}
         */
        this.Area = null;

        /**
         * A specific weight when `Type=weight`.
The value range is [1-100].
The total weight of multiple origins in an origin group should be 100.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Record ID
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * Specifies whether to run private origin authentication.
It is valid only when `OriginType=third_part`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.Private = null;

        /**
         * Private origin parameter.
It is valid only when `Private=true`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<OriginRecordPrivateParameter> || null}
         */
        this.PrivateParameter = null;

        /**
         * 
         * @type {string || null}
         */
        this.Proto = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Record = 'Record' in params ? params.Record : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Private = 'Private' in params ? params.Private : null;

        if (params.PrivateParameter) {
            this.PrivateParameter = new Array();
            for (let z in params.PrivateParameter) {
                let obj = new OriginRecordPrivateParameter();
                obj.deserialize(params.PrivateParameter[z]);
                this.PrivateParameter.push(obj);
            }
        }
        this.Proto = 'Proto' in params ? params.Proto : null;

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
         * Attack content
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackContent = null;

        /**
         * Attack IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackIp = null;

        /**
         * Attack type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * Domain name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * uuid
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Msuuid = null;

        /**
         * Request method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RequestMethod = null;

        /**
         * Request URI
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RequestUri = null;

        /**
         * Risk grade
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * Rule ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * IP country/region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SipCountryCode = null;

        /**
         * Event ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * Processing method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisposalMethod = null;

        /**
         * http_log
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HttpLog = null;

        /**
         * user agent
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ua = null;

        /**
         * Attack time. For consistency considerations, the original parameter `time` was renamed `AttackTime`.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.AttackContent = 'AttackContent' in params ? params.AttackContent : null;
        this.AttackIp = 'AttackIp' in params ? params.AttackIp : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Msuuid = 'Msuuid' in params ? params.Msuuid : null;
        this.RequestMethod = 'RequestMethod' in params ? params.RequestMethod : null;
        this.RequestUri = 'RequestUri' in params ? params.RequestUri : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.SipCountryCode = 'SipCountryCode' in params ? params.SipCountryCode : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.DisposalMethod = 'DisposalMethod' in params ? params.DisposalMethod : null;
        this.HttpLog = 'HttpLog' in params ? params.HttpLog : null;
        this.Ua = 'Ua' in params ? params.Ua : null;
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;

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
 * DeleteApplicationProxyRule request structure.
 * @class
 */
class DeleteApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Rule ID
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
 * Follows the origin server configuration
 * @class
 */
class CacheConfigFollowOrigin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to follow the origin server configuration
`on`: Enable
`off`: Disable
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * Condition that makes up an access control rule
 * @class
 */
class ACLCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field to match
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * String to match
         * @type {string || null}
         */
        this.MatchParam = null;

        /**
         * Relation between the field and content
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Content to match
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
 * DescribeTopL7AnalysisData request structure.
 * @class
 */
class DescribeTopL7AnalysisDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client time in RFC 3339 format
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Client time in RFC 3339 format
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Time series-type access traffic metric
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Top N. 0 indicates to return the full data.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Time interval. Valid values: {min, 5min, hour, day, week}
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Array of `ZoneId` values
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Filter
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

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
 * TopN entry
 * @class
 */
class TopNEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * Entry key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Top N data
         * @type {Array.<TopNEntryValue> || null}
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
                let obj = new TopNEntryValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * DescribeApplicationProxy response structure.
 * @class
 */
class DescribeApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of data
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<ApplicationProxy> || null}
         */
        this.Data = null;

        /**
         * Total number of records
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Disused
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Quota = null;

        /**
         * When `PlatType` is `ip`, it indicates the number of proxies that schedule via Anycast IP.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IpCount = null;

        /**
         * When `PlatType` is `domain`, it indicates the number of proxies that schedule via CNAME.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.DomainCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new ApplicationProxy();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Quota = 'Quota' in params ? params.Quota : null;
        this.IpCount = 'IpCount' in params ? params.IpCount : null;
        this.DomainCount = 'DomainCount' in params ? params.DomainCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * CLB instance ID
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
 * DescribeTopL7CacheData response structure.
 * @class
 */
class DescribeTopL7CacheDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top-ranked data details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopDataRecord> || null}
         */
        this.Data = null;

        /**
         * Dimension specified for data query
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Metric specified for data query
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Type = 'Type' in params ? params.Type : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
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
         * Client time in RFC 3339 format
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Client time in RFC 3339 format
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Supported metrics for data query:
`l7Flow_outFlux`: Access traffic
`l7Flow_request`: Access requests
`l7Flow_outBandwidth`: Access bandwidth
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * Time interval. Valid values: {min, 5min, hour, day, week}
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * List of `ZoneId` values. This parameter takes effect only when querying in the zone/domain dimension.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of `Domain` values. This parameter takes effect only when querying in the domain dimension.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Protocol type. Valid values: {http,http2,https,all}
         * @type {string || null}
         */
        this.Protocol = null;

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
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

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
         * Switch that controls all web security configuration: basic web protection, custom rules, and rate limiting
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
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Record value
         * @type {string || null}
         */
        this.RecordValue = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Whether to enable custom WebSocket timeout setting. When it’s `off`: it means to keep the default WebSocket connection timeout period, which is 15 seconds. To change the timeout period, please set it to `on`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Sets timeout period in seconds. Maximum value: 120
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
 * Data items in a DNS request curve
 * @class
 */
class DataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Value
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * ModifyLoadBalancing request structure.
 * @class
 */
class ModifyLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * Proxy mode.
`dns_only`: Only DNS
`proxied`: Enable proxy
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of the origin group used
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * Indicates DNS TTL time when `Type=dns_only`
         * @type {number || null}
         */
        this.TTL = null;

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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name. You can use @ to represent the root domain.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Proxy mode. Valid values:
`dns_only`: Only DNS
`proxied`: Enable proxy
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of the origin group used
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * Indicates DNS TTL time when `Type=dns_only` 
         * @type {number || null}
         */
        this.TTL = null;

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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

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
         * Site ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeWebProtectionLog response structure.
 * @class
 */
class DescribeWebProtectionLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Block data in rate-limiting policy
         * @type {CCLogData || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new CCLogData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CC block event data
 * @class
 */
class CCInterceptEventData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data set of attack events
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CCInterceptEvent> || null}
         */
        this.List = null;

        /**
         * Current page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Number of items per page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of pages
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Total number of items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new CCInterceptEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

/**
 * DescribeLoadBalancingDetail response structure.
 * @class
 */
class DescribeLoadBalancingDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name. You can use @ to represent the root domain.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Proxy mode. Valid values:
`dns_only`: Only DNS
`proxied`: Enable proxy
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Indicates DNS TTL time when `Type=dns_only`
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * ID of the origin group used
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * Information of the origin server used
         * @type {Array.<OriginGroup> || null}
         */
        this.Origin = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Status of the task
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Schedules domain names
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

        if (params.Origin) {
            this.Origin = new Array();
            for (let z in params.Origin) {
                let obj = new OriginGroup();
                obj.deserialize(params.Origin[z]);
                this.Origin.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * WAF configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {WafConfig || null}
         */
        this.WafConfig = null;

        /**
         * Rate limit configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {RateLimitConfig || null}
         */
        this.RateLimitConfig = null;

        /**
         * DDoS mitigation configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {DDoSConfig || null}
         */
        this.DdosConfig = null;

        /**
         * ACL configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {AclConfig || null}
         */
        this.AclConfig = null;

        /**
         * Bot configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {BotConfig || null}
         */
        this.BotConfig = null;

        /**
         * Switch that controls all web security configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {SwitchConfig || null}
         */
        this.SwitchConfig = null;

        /**
         * IP blocklist/allowlist
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {IpTableConfig || null}
         */
        this.IpTableConfig = null;

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

        if (params.DdosConfig) {
            let obj = new DDoSConfig();
            obj.deserialize(params.DdosConfig)
            this.DdosConfig = obj;
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

    }
}

/**
 * Major attack object data
 * @class
 */
class DDosMajorAttackEventData extends  AbstractModel {
    constructor(){
        super();

        /**
         * `DDosMajorAttackEvent` DDoS attack event
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DDosMajorAttackEvent> || null}
         */
        this.List = null;

        /**
         * Current page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Number of items per page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of pages
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Total number of items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new DDosMajorAttackEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
         * Number of bot managed rules returned
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Bot managed rules
         * @type {Array.<BotManagedRuleDetail> || null}
         */
        this.Rules = null;

        /**
         * Total number of bot managed rules
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new BotManagedRuleDetail();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
         * Record ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Host record
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Record value
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Proxy mode
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * TTL value
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Priority
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * Domain name lock
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Resolution status
`active`: Activated
`pending`: Not activated
         * @type {string || null}
         */
        this.Status = null;

        /**
         * CNAME address
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Which service is enabled for the domain name.
- `lb`: Load balancing
- `security`: Security acceleration
- `l4`: L4 proxy
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
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
 * Top data of layer-7 data analysis
 * @class
 */
class TopDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query dimension value
         * @type {string || null}
         */
        this.TypeKey = null;

        /**
         * Top data rankings
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DDoS protection against protocol and connection attacks
 * @class
 */
class DDoSAntiPly extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enables TCP protocol blocking. `on` (enable); `off` (disable).
         * @type {string || null}
         */
        this.DropTcp = null;

        /**
         * Enables UDP protocol blocking. `on` (enable); `off` (disable).
         * @type {string || null}
         */
        this.DropUdp = null;

        /**
         * Enables ICMP protocol blocking. `on` (enable); `off` (disable).
         * @type {string || null}
         */
        this.DropIcmp = null;

        /**
         * Enables blocking for other protocols. `on` (enable); `off` (disable).
         * @type {string || null}
         */
        this.DropOther = null;

        /**
         * Number of new connections the source port can establish. Value range: 0-4294967295.
         * @type {number || null}
         */
        this.SourceCreateLimit = null;

        /**
         * Number of concurrent connections the source port can establish. Value range: 0-4294967295.
         * @type {number || null}
         */
        this.SourceConnectLimit = null;

        /**
         * Number of new connections the destination port can establish. Value range: 0-4294967295.
         * @type {number || null}
         */
        this.DestinationCreateLimit = null;

        /**
         * Number of concurrent connections the destination port can establish. Value range: 0-4294967295.
         * @type {number || null}
         */
        this.DestinationConnectLimit = null;

        /**
         * Number of abnormal connections allowed. Value range: 0-4294967295.
         * @type {number || null}
         */
        this.AbnormalConnectNum = null;

        /**
         * Specifies the ratio of SYN exceptions to trigger alerts. Value range: 0-100
         * @type {number || null}
         */
        this.AbnormalSynRatio = null;

        /**
         * Specifies a max number of SYN packets that triggers alarms. Value range: 0-65535
         * @type {number || null}
         */
        this.AbnormalSynNum = null;

        /**
         * Connection timeout period. Value range: 0-65535.
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * Whether to enable null session protection. `0`: Disable; `1`: Enable.
         * @type {string || null}
         */
        this.EmptyConnectProtect = null;

        /**
         * Whether to enable UDP fragmentation. `off`: Disable; `on`: Enable.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribeWebManagedRulesData request structure.
 * @class
 */
class DescribeWebManagedRulesDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of statistical metrics
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of site IDs
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Protocol type
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * "webshell" : WebShell detection prevention
"oa" : Common OA vulnerability prevention
"xss" : XSS attack prevention
"xxe" : XXE attack prevention
"webscan" : Scanner attack vulnerability prevention
"cms" : Common CMS vulnerability prevention
"upload" : Malicious file upload attack prevention
"sql" : SQL injection attack prevention
"cmd_inject": Command/Code injection attack prevention
"osc" : Open-source component vulnerability prevention
"file_read" : Arbitrary file read prevention
"ldap" : LDAP injection attack prevention
"other" : Other vulnerability prevention

"all":"All"
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * Query time granularity. Valid values: {min,5min,hour,day}
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * DDoS attack source data
 * @class
 */
class DDosAttackSourceEventData extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS attack source data set
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DDosAttackSourceEvent> || null}
         */
        this.List = null;

        /**
         * Current page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Number of items per page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of pages
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Total number of items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new DDosAttackSourceEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
         * ID of the policy group
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Query filter
         * @type {Array.<DnsRecordFilter> || null}
         */
        this.Filters = null;

        /**
         * Sorts the order
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Valid values: `asc`, and `desc`.
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * Valid values: `all`, and `any`.
         * @type {string || null}
         */
        this.Match = null;

        /**
         * Limit on paginated queries. Default value: 100. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Site ID
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DnsRecordFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Match = 'Match' in params ? params.Match : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
 * WAF rule
 * @class
 */
class WafRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocklist
         * @type {Array.<number> || null}
         */
        this.BlockRuleIDs = null;

        /**
         * Whether the WAF rule is enabled or disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Observe mode
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.BlockRuleIDs = 'BlockRuleIDs' in params ? params.BlockRuleIDs : null;
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ObserveRuleIDs = 'ObserveRuleIDs' in params ? params.ObserveRuleIDs : null;

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
         * Site ID
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
         * Continent name
         * @type {string || null}
         */
        this.Continent = null;

        /**
         * Country name in English
         * @type {string || null}
         */
        this.CountryEn = null;

        /**
         * Continent name in English
         * @type {string || null}
         */
        this.ContinentEn = null;

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
        this.CountryEn = 'CountryEn' in params ? params.CountryEn : null;
        this.ContinentEn = 'ContinentEn' in params ? params.ContinentEn : null;

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
         * Top-level domain name
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Second-level domain name
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
 * ModifyApplicationProxyRule response structure.
 * @class
 */
class ModifyApplicationProxyRuleResponse extends  AbstractModel {
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
 * DDoS attack event object
 * @class
 */
class DDosAttackEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS policy group ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Attack type (corresponding to interaction event name)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * Attack status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * Maximum attack bandwidth
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AttackMaxBandWidth = null;

        /**
         * Peak attack packet rate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AttackPacketMaxRate = null;

        /**
         * Attack start time in seconds
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AttackStartTime = null;

        /**
         * Attack end time in seconds
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AttackEndTime = null;

        /**
         * Event ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * Site ID
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.AttackMaxBandWidth = 'AttackMaxBandWidth' in params ? params.AttackMaxBandWidth : null;
        this.AttackPacketMaxRate = 'AttackPacketMaxRate' in params ? params.AttackPacketMaxRate : null;
        this.AttackStartTime = 'AttackStartTime' in params ? params.AttackStartTime : null;
        this.AttackEndTime = 'AttackEndTime' in params ? params.AttackEndTime : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
 * CreateZone request structure.
 * @class
 */
class CreateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Access mode. Valid values:
- `full` (default): Access via NS
- `partial`: Access via CNAME
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Specifies whether to skip resolution record scanning
         * @type {boolean || null}
         */
        this.JumpStart = null;

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
        this.JumpStart = 'JumpStart' in params ? params.JumpStart : null;

    }
}

/**
 * Rate limit configuration
 * @class
 */
class RateLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Rate limit rule
         * @type {Array.<RateLimitUserRule> || null}
         */
        this.UserRules = null;

        /**
         * Default template
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {RateLimitTemplate || null}
         */
        this.Template = null;

        /**
         * Client filtering
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RateLimitIntelligence || null}
         */
        this.Intelligence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.UserRules) {
            this.UserRules = new Array();
            for (let z in params.UserRules) {
                let obj = new RateLimitUserRule();
                obj.deserialize(params.UserRules[z]);
                this.UserRules.push(obj);
            }
        }

        if (params.Template) {
            let obj = new RateLimitTemplate();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

        if (params.Intelligence) {
            let obj = new RateLimitIntelligence();
            obj.deserialize(params.Intelligence)
            this.Intelligence = obj;
        }

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
         * Start time of the query (client time in RFC 3339)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Start time of the query (client time in RFC 3339)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Supported metrics for data query:
`l7Cache_outFlux`: Access traffic
`l7Cache_request`: Access requests
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * Time interval. Values: {min, 5min, hour, day, week}
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * List of site IDs
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Filter condition:
{Key: "cacheType", Value: ["hit"], Operator: "equals"}: Filter by data responded from EdgeOne
{Key: "cacheType", Value: ["miss", "dynamic"], Operator: "equals"}: Filter by data responded from the origin server
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

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
        this.Entities = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Entities) {
            this.Entities = new Array();
            for (let z in params.Entities) {
                let obj = new SecurityEntity();
                obj.deserialize(params.Entities[z]);
                this.Entities.push(obj);
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
 * Private origin authentication parameter
 * @class
 */
class OriginRecordPrivateParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the private origin authentication parameter.
`AccessKeyId`: Access key ID
`SecretAccessKey`: Secret access key
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value of the private origin authentication parameter
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
 * DDoS protection for the application layer (layer 7)
 * @class
 */
class DDoSApplication extends  AbstractModel {
    constructor(){
        super();

        /**
         * Second-level domain name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Status of the domain name
`init`: NS to be switched
`offline`: Site acceleration not enabled with DNS
`process`: Deployment in progress
`online`: Normal
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Site acceleration switch. `on`: Enable site acceleration; `off`: Disable site acceleration. This field can be used together with `SecurityType`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.AccelerateType = null;

        /**
         * Security acceleration switch. `on`: Enable site acceleration; `off`: Disable site acceleration. This field can be used together with `AccelerateType`.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
         * Array of site names
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Array of subdomain names
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
 * DeleteLoadBalancing response structure.
 * @class
 */
class DeleteLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
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
 * DescribeWebProtectionData request structure.
 * @class
 */
class DescribeWebProtectionDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of statistical metrics
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of site IDs
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Protocol type
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * "webshell" : WebShell detection prevention
"oa" : Common OA vulnerability prevention
"xss" : XSS attack prevention
"xxe" : XXE attack prevention
"webscan" : Scanner attack vulnerability prevention
"cms" : Common CMS vulnerability prevention
"upload" : Malicious file upload attack prevention
"sql" : SQL injection attack prevention
"cmd_inject": Command/Code injection attack prevention
"osc" : Open-source component vulnerability prevention
"file_read" : Arbitrary file read prevention
"ldap" : LDAP injection attack prevention
"other" : Other vulnerability prevention

"all":"All"
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * Query time granularity. Valid values: {min,5min,hour,day}
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

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
         * Certificate
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * Private key
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
 * DescribeSecurityPortraitRules response structure.
 * @class
 */
class DescribeSecurityPortraitRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of rules returned in this request
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Bot user profiling rule
         * @type {Array.<PortraitManagedRuleDetail> || null}
         */
        this.Rules = null;

        /**
         * Total number of rules
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new PortraitManagedRuleDetail();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Protocol. Valid values: `TCP` and `UDP`.
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * Port. Valid values:
`80`: Port 80
`81-90`: Port range 81-90
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * Origin type. Valid values:
`custom`: Specified origins
`origins`: Origin group
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin information:
When `OriginType=custom`, it can include one or more origins in either of the following formats:
IP:Port
Domain name:Port
When `OriginType=origins`, it is an origin group ID.
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * Passes the client IP. When `Proto=TCP`, valid values:
`TOA`: Pass the client IP via TOA
`PPV1`: Pass the client IP via Proxy Protocol V1
`PPV2`: Pass the client IP via Proxy Protocol V2
`OFF`: Do not pass the client IP.
When `Proto=UDP`, valid values:
`PPV2`: Pass the client IP via Proxy Protocol V2
`OFF`: Do not pass the client IP.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * Specifies whether to enable session persistence 
         * @type {boolean || null}
         */
        this.SessionPersist = null;

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
         * ID of the rule
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Rule description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Rule type
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * Whether the rule is enabled
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
 * Force HTTPS redirect configuration
 * @class
 */
class ForceRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Force redirect configuration switch
`on`: Enable
`off`: Disable
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Redirection status code
301
302
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * ModifyApplicationProxy request structure.
 * @class
 */
class ModifyApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * ID of the proxy
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Name of the proxy:
Domain name or subdomain name when `ProxyType=hostname`
Instance name when `ProxyType=instance`
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * This parameter is disused.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * This parameter is disused.
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * Session persistence time. Value range: 30-3600 (in seconds).
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Specifies how a layer-4 proxy is created.
`hostname`: Create by subdomain name
`instance`: Create by instance
         * @type {string || null}
         */
        this.ProxyType = null;

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
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

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
         * ID of the proxy
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
 * IdentifyZone request structure.
 * @class
 */
class IdentifyZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
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
 * Domain name configuration information
 * @class
 */
class DetailHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tencent Cloud account ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Acceleration service status
`process`: Deploying
`online`: Enabled
`offline`: Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Domain name
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Host = 'Host' in params ? params.Host : null;

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
         * Rate threshold
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * Data collection time
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Name of the rule
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Action: `monitor` (Observe), `drop` (Block)
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Time it takes to perform the action
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * Time unit: second
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * Status of the rule
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * Rule
         * @type {Array.<ACLCondition> || null}
         */
        this.Conditions = null;

        /**
         * Priority of the rule
         * @type {number || null}
         */
        this.RulePriority = null;

        /**
         * ID of the rule
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * Word filter
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.FreqFields = null;

        /**
         * Update time
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.PunishTimeUnit = 'PunishTimeUnit' in params ? params.PunishTimeUnit : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ACLCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.FreqFields = 'FreqFields' in params ? params.FreqFields : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
         * Used for paginated query by total count
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of DNS records
         * @type {Array.<DnsRecord> || null}
         */
        this.Records = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new DnsRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
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
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<DefaultServerCertInfo> || null}
         */
        this.CertInfo = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new DefaultServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Configuration switch
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Cache prefresh percentage. Values: 1-99
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
 * DescribeTimingL7AnalysisData response structure.
 * @class
 */
class DescribeTimingL7AnalysisDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Detailed data
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TimingDataRecord> || null}
         */
        this.Data = null;

        /**
         * Query dimension
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time interval
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
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Rule feature category ID (scanner, bot behavior, etc.)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ClassificationId = null;

        /**
         * Current rule action status (block, alg, etc.)
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
 * Bot user portrait rules
 * @class
 */
class BotPortraitRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the rule being applied
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * ID of the rule that is set to verify requests by JavaScript challenge
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.AlgManagedIds = null;

        /**
         * ID of the rule that is set to verify requests by CAPTCHA
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.CapManagedIds = null;

        /**
         * ID of the rule that is set to observe requests
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.MonManagedIds = null;

        /**
         * ID of the rule that is set to block requests
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.DropManagedIds = null;

        /**
         * Feature switch
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.AlgManagedIds = 'AlgManagedIds' in params ? params.AlgManagedIds : null;
        this.CapManagedIds = 'CapManagedIds' in params ? params.CapManagedIds : null;
        this.MonManagedIds = 'MonManagedIds' in params ? params.MonManagedIds : null;
        this.DropManagedIds = 'DropManagedIds' in params ? params.DropManagedIds : null;
        this.Switch = 'Switch' in params ? params.Switch : null;

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
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of items
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Domain name
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Site set
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

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
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

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
         * Query dimension
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time interval
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Detailed data
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

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
 * DescribeHostsCertificate request structure.
 * @class
 */
class DescribeHostsCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: 100. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query filter
         * @type {Array.<CertFilter> || null}
         */
        this.Filters = null;

        /**
         * Sorting order
         * @type {CertSort || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new CertFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sort) {
            let obj = new CertSort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * DescribeSecurityPolicyManagedRules response structure.
 * @class
 */
class DescribeSecurityPolicyManagedRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of rules returned
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Managed rule
         * @type {Array.<ManagedRule> || null}
         */
        this.Rules = null;

        /**
         * Total number of rules
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ManagedRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Origin group information
 * @class
 */
class OriginGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin group ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * Origin group name
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * Origin-pull configuration type
`area`: Origin-pull by the client IP’s region specified by `Area` in `OriginRecord`.
`weight`: Origin-pull by the weight specified by `Weight` in `OriginRecord`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record
         * @type {Array.<OriginRecord> || null}
         */
        this.Record = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Origin server type
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Whether the origin group uses layer-4 proxy.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ApplicationProxyUsed = null;

        /**
         * Whether the origin group is used for load balancing.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.LoadBalancingUsed = null;

        /**
         * Origin status 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {OriginCheckOriginStatus || null}
         */
        this.Status = null;

        /**
         * Proxy mode of the load balancing task associated with the origin group.
`none`: This origin group is not used for load balancing.
`dns_only`: Used for DNS-only load balancing 
`proxied`: Used for proxied load balancing
`both`: It’s used for both DNS-only and proxied load balancing.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancingUsedType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new OriginRecord();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ApplicationProxyUsed = 'ApplicationProxyUsed' in params ? params.ApplicationProxyUsed : null;
        this.LoadBalancingUsed = 'LoadBalancingUsed' in params ? params.LoadBalancingUsed : null;

        if (params.Status) {
            let obj = new OriginCheckOriginStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }
        this.LoadBalancingUsedType = 'LoadBalancingUsedType' in params ? params.LoadBalancingUsedType : null;

    }
}

/**
 * DescribeApplicationProxy request structure.
 * @class
 */
class DescribeApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination parameter
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Top N data entry
 * @class
 */
class TopNEntryValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Entry name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Quantity
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
 * ModifyDDoSPolicyHost response structure.
 * @class
 */
class ModifyDDoSPolicyHostResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subdomain name
         * @type {string || null}
         */
        this.Host = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * ID of the proxy
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Status
`offline`: Disabled
`online`: Enabled
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
 * ModifyLoadBalancing response structure.
 * @class
 */
class ModifyLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
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
 * Web block event
 * @class
 */
class WebAttackEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Attack URL
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackUrl = null;

        /**
         * Attack time in seconds
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.AttackUrl = 'AttackUrl' in params ? params.AttackUrl : null;
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;

    }
}

/**
 * DescribeDDosAttackTopData request structure.
 * @class
 */
class DescribeDDosAttackTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter metric
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Number of the top data entries to query. 0: queries all data entries.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Site set
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Set of DDoS policy group IDs
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * Port number
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Protocol type. Valid values: tcp, udp, all
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * Attack type. Valid values: flood, icmpFlood..., all
         * @type {string || null}
         */
        this.AttackType = null;

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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;

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
 * DescribeDDosAttackData request structure.
 * @class
 */
class DescribeDDosAttackDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of statistical metrics
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of site IDs
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of DDoS policy group IDs
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * Port number
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Protocol type. Valid values: tcp, udp, all
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * Attack type. Valid values: flood, icmpFlood..., all
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * Query time granularity. Valid values: {min,5min,hour,day}
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

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
         * Record ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Record content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Priority
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Proxy mode
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Resolution status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * CNAME address
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Whether the DNS record is locked
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Rate limit template configuration
 * @class
 */
class RateLimitTemplateDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Unique ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Action
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Time it takes to perform the action
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * Request rate threshold
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * Statistical period
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * Data items of the statistical curve
 * @class
 */
class TimingDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Second-level timestamp
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Value
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Name of the proxy:
Domain name or subdomain name when `ProxyType=hostname`
Instance name when `ProxyType=instance`
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Scheduling mode. Values:
`ip`: Anycast IP
`domain`: CNAME
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * `0`: Disable security protection; `1`: Enable security protection.
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * `0`: Disable acceleration; `1`: Enable acceleration.
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * This field is moved to `Rule.ForwardClientIp`.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * This field is moved to `Rule.SessionPersist`.
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * Rule details
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

        /**
         * Session persistence duration. Value range: 30-3600 (in seconds).
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Specifies how a layer-4 proxy is created.
`hostname`: Create by subdomain name
`instance`: Create by instance
         * @type {string || null}
         */
        this.ProxyType = null;

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
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

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
         * Top detailed data
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopDataRecord> || null}
         */
        this.Data = null;

        /**
         * Query dimension
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Query metric
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Type = 'Type' in params ? params.Type : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
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
         * Malicious bot, which is used to tag bad bots
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Action
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Switch
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Items in a bot intelligence rule
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<IntelligenceRuleItem> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new IntelligenceRuleItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
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
         * Specifies whether to enable custom setting of the maximum file size. 
`off`: Disable. In this case, the max size defaults to 32 MB.
`on`: Enable. You can set a custom max size.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Maximum size. Value range: 1-500 MB.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * Origin health status
 * @class
 */
class OriginCheckOriginStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * `healthy`: Healthy; `unhealthy`: Unhealthy; `process`: Checking origin.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * List of unhealthy origin groups when `Status = unhealthy`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * Managed rule
 * @class
 */
class ManagedRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the rule
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Rule description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Rule type
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * Rule level
         * @type {string || null}
         */
        this.RuleLevelDesc = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Rule status: `block`, `allow`
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Tag of the rule
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.RuleTags = null;

        /**
         * Description of the rule type
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RuleTypeDesc = null;

        /**
         * ID of the rule type
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.RuleTypeId = null;

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
        this.RuleLevelDesc = 'RuleLevelDesc' in params ? params.RuleLevelDesc : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuleTags = 'RuleTags' in params ? params.RuleTags : null;
        this.RuleTypeDesc = 'RuleTypeDesc' in params ? params.RuleTypeDesc : null;
        this.RuleTypeId = 'RuleTypeId' in params ? params.RuleTypeId : null;

    }
}

/**
 * Filter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter dimension
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Operator
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Filter dimension value
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
 * DescribeWebManagedRulesAttackEvents request structure.
 * @class
 */
class DescribeWebManagedRulesAttackEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of items
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * List of DDoS policy group IDs
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * Site set
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Whether to show details. Valid values: Y (yes), N (no).
         * @type {string || null}
         */
        this.IsShowDetail = null;

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
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.IsShowDetail = 'IsShowDetail' in params ? params.IsShowDetail : null;

    }
}

/**
 * DescribeCnameStatus request structure.
 * @class
 */
class DescribeCnameStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of domain names
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Names = 'Names' in params ? params.Names : null;

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
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name of the site
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Name of the file specified to be returned
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Content of the custom page
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
         * DNSSEC status. Valid values:
- `enabled`: Enabled
- `disabled`: Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 
         * @type {DnssecInfo || null}
         */
        this.Dnssec = null;

        /**
         * Modification time
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Dnssec) {
            let obj = new DnssecInfo();
            obj.deserialize(params.Dnssec)
            this.Dnssec = obj;
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
         * Specifies how the site is connected to EdgeOne.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Site status
- `pending`: The name server is not switched.
- `active`: The name server is switched to another assigned.
- `moved`: Move the NS out of Tencent Cloud
         * @type {string || null}
         */
        this.Status = null;

        /**
         * List of name servers
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * List of name servers assigned to users
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * Site creation date
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Site update time
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ignore query string parameters for DNS data
 * @class
 */
class DnsDataFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name. Valid values:
`zone`: Site name
`host`: Domain name
`type`: DNS resolution type
`code`: DNS response code
`area`: Region of the resolution server
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter value
When `Name=area`, valid values:
`Asia`
`Europe`
`Africa`
`Oceania`
`Americas`

When `Name=code`, valid values:
`NoError`: Successful response.
`NXDomain`: Non-existent domain in the request. It is only valid when the response is from the authoritative name server.
`NotImp`: Request type not supported.
`Refused`: The name server refuses to perform the requested operation for policy reasons.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Parameter value
When `Name=area`, valid values:
`Asia`
`Europe`
`Africa`
`Oceania`
`Americas`

When `Name=code`, valid values:
`NoError`: Successful response.
`NXDomain`: Non-existent domain in the request. It is only valid when the response is from the authoritative name server.
`NotImp`: Request type not supported.
`Refused`: The name server refuses to perform the requested operation for policy reasons.
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
        this.Value = 'Value' in params ? params.Value : null;
        this.Values = 'Values' in params ? params.Values : null;

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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB instance ID
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
 * DescribeTimingL7AnalysisData request structure.
 * @class
 */
class DescribeTimingL7AnalysisDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client time in RFC 3339 format
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Client time in RFC 3339 format
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Supported metrics for data query:
`l7Flow_outFlux`: Access traffic
`l7Flow_request`: Access requests
`l7Flow_outBandwidth`: Access bandwidth
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * Time interval. Valid values: {min, 5min, hour, day, week}
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Array of `ZoneId` values
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Filter
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

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
 * DescribeSecurityPolicyManagedRulesId response structure.
 * @class
 */
class DescribeSecurityPolicyManagedRulesIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of returned items
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Managed rule
         * @type {Array.<ManagedRule> || null}
         */
        this.Rules = null;

        /**
         * Total number of returned items
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ManagedRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Web event data
 * @class
 */
class WebEventData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data set of attack events
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WebAttackEvent> || null}
         */
        this.List = null;

        /**
         * Current page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Number of items per page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of pages
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Total number of items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new WebAttackEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
         * ID of the proxy
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Name of the proxy:
Domain name or subdomain name when `ProxyType=hostname`
Instance name when `ProxyType=instance`
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Scheduling mode:
`ip`: Anycast IP
`domain`: CNAME
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * `0`: Disable security protection; `1`: Enable security protection.
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * `0`: Disable acceleration; `1`: Enable acceleration.
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * This field is moved to `Rule.ForwardClientIp`.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * This field is moved to `Rule.SessionPersist`.
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * Rule list
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

        /**
         * Status:
`online`: Enable
`offline`: Disable
`progress`: Deploying
`stopping`: Disabling
`fail`: Deployment/Disabling failed
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Scheduling information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.ScheduleValue = null;

        /**
         * Update time
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Site ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Session persistence duration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Specifies how a layer-4 proxy is created.
`hostname`: Create by subdomain name
`instance`: Create by instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * When `ProxyType=hostname`:
`ProxyName` indicates a specified domain name;
`HostId` indicates a unique ID of the domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HostId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ScheduleValue = 'ScheduleValue' in params ? params.ScheduleValue : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.HostId = 'HostId' in params ? params.HostId : null;

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
         * ID of the proxy
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
 * DescribeDDoSPolicy response structure.
 * @class
 */
class DescribeDDoSPolicyResponse extends  AbstractModel {
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
 * Cache key configuration
 * @class
 */
class CacheKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to enable full-path cache
`on`: Enable full-path cache (i.e., disable Ignore Query String)
`off`: Disable full-path cache (i.e., enable Ignore Query String)
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.FullUrlCache = null;

        /**
         * Specifies whether the cache key is case sensitive
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.IgnoreCase = null;

        /**
         * Request parameter contained in `CacheKey`
Note: This field may return `null`, indicating that no valid value can be obtained.
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
         * ID of the origin group
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * Name of the origin group
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * Origin-pull configuration type. This field is required when `OriginType=self`.
`area`: Origin-pull by region
`weight`: Origin-pull by weight
When `OriginType=third_party/cos`, it can be left empty.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Origin record
         * @type {Array.<OriginRecord> || null}
         */
        this.Record = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Origin type
`self`: Customer origin
`third_party`: Third-party origin
`cos`: Tencent Cloud COS origin
         * @type {string || null}
         */
        this.OriginType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new OriginRecord();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;

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
 * DescribeSecurityPolicyList request structure.
 * @class
 */
class DescribeSecurityPolicyListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top-level domain name
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
         * Details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TimingDataRecord> || null}
         */
        this.Data = null;

        /**
         * Metric specified for data query
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time interval
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
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplicationProxyDetail request structure.
 * @class
 */
class DescribeApplicationProxyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Instance ID
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
 * Client filtering
 * @class
 */
class RateLimitIntelligence extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable this feature
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Action. Values: `monitor` (observe), `alg` (JS/Managed challenge)
Note: This field may return null, indicating that no valid values can be obtained.
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
 * IP/Region blocklist/allowlist configuration
 * @class
 */
class IpTableConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * []
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<IpTableRule> || null}
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
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new IpTableRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
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
         * Origin group ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
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
 * IP of the custom name server
 * @class
 */
class VanityNameServersIps extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the custom name server
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
 * DescribeDDosAttackSourceEvent response structure.
 * @class
 */
class DescribeDDosAttackSourceEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS attack source data
         * @type {DDosAttackSourceEventData || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new DDosAttackSourceEventData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZoneDetails request structure.
 * @class
 */
class DescribeZoneDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
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
        this.Id = 'Id' in params ? params.Id : null;

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
         * Policy group ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Top-level domain name (site)
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
         * Entry key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Entry value
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribeDDosMajorAttackEvent request structure.
 * @class
 */
class DescribeDDosMajorAttackEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of items
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Set of DDoS policy group IDs
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * Protocol type. Valid values: {tcp,udp,all}
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * Site set
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

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
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

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
         * Whether to enable QUIC
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
 * CreateOriginGroup response structure.
 * @class
 */
class CreateOriginGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the newly added origin group
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
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
         * User ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Top-level domain name
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Second-level domain name
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Security configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {SecurityConfig || null}
         */
        this.Config = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Entity = 'Entity' in params ? params.Entity : null;

        if (params.Config) {
            let obj = new SecurityConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
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
         * Whether to use `QueryString` as part of `CacheKey`. Valid values: `on` and `off`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * `includeCustom`: Include the specified query strings.
`excludeCustom`: Exclude the specified query strings.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Array of query strings used/excluded
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * DescribeSecurityPolicyRegions request structure.
 * @class
 */
class DescribeSecurityPolicyRegionsRequest extends  AbstractModel {
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
 * Corresponding value of security data entry
 * @class
 */
class SecEntryValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Metric data details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TimingDataItem> || null}
         */
        this.Detail = null;

        /**
         * Maximum
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * Average
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Avg = null;

        /**
         * Sum
Note: This field may return null, indicating that no valid values can be obtained.
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
 * ReclaimZone request structure.
 * @class
 */
class ReclaimZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
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
 * DeleteZone request structure.
 * @class
 */
class DeleteZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Bot managed rules
 * @class
 */
class BotManagedRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the rule to be enabled
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.ManagedIds = null;

        /**
         * ID of the rule being applied
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * Action of the rule. Values: `drop`; `trans`; `monitor`; `alg`.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The amount of time the IP is blocked
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * Unit of IP blocking time
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * Name of the custom block page
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * ID of the custom block page
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * Redirection URL, which must be a subdomain name of your site encoded by URLEncode
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * Response code returned after redirection
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ResponseCode = null;

        /**
         * ID of the rule that is set to allow requests
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.TransManagedIds = null;

        /**
         * ID of the rule that is set to verify requests by JavaScript challenge
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.AlgManagedIds = null;

        /**
         * ID of the rule that is set to verify requests by CAPTCHA
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.CapManagedIds = null;

        /**
         * ID of the rule that is set to observe requests
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.MonManagedIds = null;

        /**
         * ID of the rule that is set to block requests
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.ManagedIds = 'ManagedIds' in params ? params.ManagedIds : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.PunishTimeUnit = 'PunishTimeUnit' in params ? params.PunishTimeUnit : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.ResponseCode = 'ResponseCode' in params ? params.ResponseCode : null;
        this.TransManagedIds = 'TransManagedIds' in params ? params.TransManagedIds : null;
        this.AlgManagedIds = 'AlgManagedIds' in params ? params.AlgManagedIds : null;
        this.CapManagedIds = 'CapManagedIds' in params ? params.CapManagedIds : null;
        this.MonManagedIds = 'MonManagedIds' in params ? params.MonManagedIds : null;
        this.DropManagedIds = 'DropManagedIds' in params ? params.DropManagedIds : null;

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
 * DescribeDDosAttackEvent request structure.
 * @class
 */
class DescribeDDosAttackEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of items
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Set of DDoS policy group IDs
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * Site set
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Protocol type. Valid values: {tcp,udp,all}
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * Whether to show details. Valid values: Y (yes), N (no).
         * @type {string || null}
         */
        this.IsShowDetail = null;

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
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.IsShowDetail = 'IsShowDetail' in params ? params.IsShowDetail : null;

    }
}

/**
 * Client IP header
 * @class
 */
class ClientIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to enable client IP header
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Name of the origin-pull client IP request header
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * Query filter to search for DNS records
 * @class
 */
class DnsRecordFilter extends  AbstractModel {
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
         * Specifies whether to enable fuzzy query. It’s only available when the filter name is `name`. If it’s enabled, the length of `Values` must be 1.
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
 * DescribeHostsCertificate response structure.
 * @class
 */
class DescribeHostsCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Used for paginated query by total count
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of certificate configurations for domain names
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<HostCertSetting> || null}
         */
        this.Hosts = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Hosts) {
            this.Hosts = new Array();
            for (let z in params.Hosts) {
                let obj = new HostCertSetting();
                obj.deserialize(params.Hosts[z]);
                this.Hosts.push(obj);
            }
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
         * Cache expiration time configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {CacheConfig || null}
         */
        this.Cache = null;

        /**
         * Node cache key configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Browser cache configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * Offline cache
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * QUIC access
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * POST transport configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {PostMaxSize || null}
         */
        this.PostMaxSize = null;

        /**
         * Smart compression configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * HTTP2 origin-pull configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * Force HTTPS redirect configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * HTTPS acceleration configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * Origin server configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Dynamic acceleration configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Domain name of the site
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * WebSocket configuration.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * Origin-pull client IP header configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {ClientIp || null}
         */
        this.ClientIpHeader = null;

        /**
         * Cache prefresh configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {CachePrefresh || null}
         */
        this.CachePrefresh = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Cache) {
            let obj = new CacheConfig();
            obj.deserialize(params.Cache)
            this.Cache = obj;
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.ClientIpHeader) {
            let obj = new ClientIp();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

        if (params.CachePrefresh) {
            let obj = new CachePrefresh();
            obj.deserialize(params.CachePrefresh)
            this.CachePrefresh = obj;
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
         * `smart_status_close`: Disable; `smart_status_open`: Block;
`smart_status_observe`: Observe.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * Browser cache rule configuration. 
 * @class
 */
class MaxAge extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the max age of the cache (in seconds). The maximum value is 365 days.
Note: the value `0` means not to cache.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.MaxAgeTime = null;

        /**
         * Specifies whether to follow the max cache age of the origin server. Valid values: `on` and `off`. If it's on, `MaxAgeTime` is ignored.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.MaxAgeTime = 'MaxAgeTime' in params ? params.MaxAgeTime : null;
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;

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
 * Query condition
 * @class
 */
class QueryCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dimension
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Operator
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Dimension value
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
 * DescribeDnsData request structure.
 * @class
 */
class DescribeDnsDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter parameters
         * @type {Array.<DnsDataFilter> || null}
         */
        this.Filters = null;

        /**
         * Time granularity. The default value is `min`. The server can adapt to the time granularity specified.
Valid values:
`min`: 1 minute
`5min`: 5 minutes
`hour`: 1 hour
`day`: 1 day
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
                let obj = new DnsDataFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * Cache rule configuration
 * @class
 */
class CacheConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {CacheConfigCache || null}
         */
        this.Cache = null;

        /**
         * No-cache configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {CacheConfigNoCache || null}
         */
        this.NoCache = null;

        /**
         * Follows the origin server configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {CacheConfigFollowOrigin || null}
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
            let obj = new CacheConfigCache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.NoCache) {
            let obj = new CacheConfigNoCache();
            obj.deserialize(params.NoCache)
            this.NoCache = obj;
        }

        if (params.FollowOrigin) {
            let obj = new CacheConfigFollowOrigin();
            obj.deserialize(params.FollowOrigin)
            this.FollowOrigin = obj;
        }

    }
}

/**
 * DescribeDDosAttackEventDetail response structure.
 * @class
 */
class DescribeDDosAttackEventDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS attack event details
         * @type {DDosAttackEventDetailData || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new DDosAttackEventDetailData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Protocol. Valid values: `TCP` and `UDP`.
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * Port. Valid values:
`80`: Port 80
`81-90`: Port range 81-90
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * Origin server type. Valid values:
`custom`: Specified origins
`origins`: Origin group
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin server information:
When `OriginType=custom`, it indicates one or more origin servers. Example:
OriginValue=["8.8.8.8:80","9.9.9.9:80"]
OriginValue=["test.com:80"]

When `OriginType=origins`, it indicates an origin group ID. Example:
OriginValue=["origin-xxx"]
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * Passes the client IP. When `Proto=TCP`, valid values:
`TOA`: Pass the client IP via TOA.
`PPV1`: Pass the client IP via Proxy Protocol V1.
`PPV2`: Pass the client IP via Proxy Protocol V2.
`OFF`: Do not pass the client IP.
When `Proto=UDP`, valid values:
`PPV2`: Pass the client IP via Proxy Protocol V2.
`OFF`: Do not pass the client IP.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * Specifies whether to enable session persistence
         * @type {boolean || null}
         */
        this.SessionPersist = null;

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
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

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
         * ID of the policy group
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Top-level domain name
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Detailed DDoS mitigation configuration
         * @type {DdosRule || null}
         */
        this.DdosRule = null;

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

        if (params.DdosRule) {
            let obj = new DdosRule();
            obj.deserialize(params.DdosRule)
            this.DdosRule = obj;
        }

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
         * CNAME acceleration status.
- `enabled`: Enabled
- `disabled`: Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Update time
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebProtectionLog request structure.
 * @class
 */
class DescribeWebProtectionLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of items per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Site set
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Domain name set
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Query condition
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

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

    }
}

/**
 * Block log in rate-limiting policy
 * @class
 */
class CCLogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data set of CC block logs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CCLog> || null}
         */
        this.List = null;

        /**
         * Current page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Number of items per page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of pages
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Total number of items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new CCLog();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
 * DeleteDnsRecords request structure.
 * @class
 */
class DeleteDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Record ID
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DDoS blocklist/allowlist
 * @class
 */
class DdosAllowBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to remove all settings when empty strings are passed in. Default value: `off` (remove)
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Array of objects in blocklist/allowlist configuration
         * @type {Array.<DDoSUserAllowBlockIP> || null}
         */
        this.UserAllowBlockIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.UserAllowBlockIp) {
            this.UserAllowBlockIp = new Array();
            for (let z in params.UserAllowBlockIp) {
                let obj = new DDoSUserAllowBlockIP();
                obj.deserialize(params.UserAllowBlockIp[z]);
                this.UserAllowBlockIp.push(obj);
            }
        }

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
         * Region information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.RegionId = null;

        /**
         * Whether to remove all settings when empty strings are passed in. Default value: `off` (remove)
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Switch = 'Switch' in params ? params.Switch : null;

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
         * User APPID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * DDoS mitigation configuration
         * @type {Array.<ShieldArea> || null}
         */
        this.ShieldAreas = null;

        /**
         * Includes the details of all subdomain names
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<DDoSApplication> || null}
         */
        this.Domains = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;

        if (params.ShieldAreas) {
            this.ShieldAreas = new Array();
            for (let z in params.ShieldAreas) {
                let obj = new ShieldArea();
                obj.deserialize(params.ShieldAreas[z]);
                this.ShieldAreas.push(obj);
            }
        }

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DDoSApplication();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Record name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * CNAME address
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Status
`active`: Activated
`moved`: Not activated
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeDDosMajorAttackEvent response structure.
 * @class
 */
class DescribeDDosMajorAttackEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Major DDoS attack event
         * @type {DDosMajorAttackEventData || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new DDosMajorAttackEventData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
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
         * Action. `drop`: Drop the request; `transmit`: Allow the request; `drop_block`: Drop the request and block it; `forward`: Continue to offer protection.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Sets how far from the first search position
         * @type {number || null}
         */
        this.Depth = null;

        /**
         * Sets how far from the second search position
         * @type {number || null}
         */
        this.Depth2 = null;

        /**
         * End of the destination port
         * @type {number || null}
         */
        this.DportEnd = null;

        /**
         * Start of the destination port
         * @type {number || null}
         */
        this.DportStart = null;

        /**
         * Whether to match string 1 that does not contain all the specified elements
         * @type {number || null}
         */
        this.IsNot = null;

        /**
         * Whether to match string 2 that does not contain all the specified elements
         * @type {number || null}
         */
        this.IsNot2 = null;

        /**
         * Logical operator that combines two conditions. Values: `none`, `and` and `or`. If there is only one condition, pass in `none` for this condition only.
         * @type {string || null}
         */
        this.MatchLogic = null;

        /**
         * Matching method of the first condition. `pcre`: Regex match; `sunday`: String match.
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * Matching method of the second condition. `pcre`: Regex match; `sunday`: String match.
         * @type {string || null}
         */
        this.MatchType2 = null;

        /**
         * Offset from the first search position
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Offset from the second search position
         * @type {number || null}
         */
        this.Offset2 = null;

        /**
         * Maximum packet length
         * @type {number || null}
         */
        this.PacketMax = null;

        /**
         * Minimum packet length
         * @type {number || null}
         */
        this.PacketMin = null;

        /**
         * Protocol. Values: `tcp`, `udp`, `icmp` and `all`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * End of the source port
         * @type {number || null}
         */
        this.SportEnd = null;

        /**
         * Start of the source port
         * @type {number || null}
         */
        this.SportStart = null;

        /**
         * String in the first condition
         * @type {string || null}
         */
        this.Str = null;

        /**
         * String in the second condition
         * @type {string || null}
         */
        this.Str2 = null;

        /**
         * Layer at which each match starts. Values: `begin_l5`, `no_match`, `begin_l3` and `begin_l4`.
         * @type {string || null}
         */
        this.MatchBegin = null;

        /**
         * Layer at which each match starts. Values: `begin_l5`, `no_match`, `begin_l3` and `begin_l4`.
         * @type {string || null}
         */
        this.MatchBegin2 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Depth = 'Depth' in params ? params.Depth : null;
        this.Depth2 = 'Depth2' in params ? params.Depth2 : null;
        this.DportEnd = 'DportEnd' in params ? params.DportEnd : null;
        this.DportStart = 'DportStart' in params ? params.DportStart : null;
        this.IsNot = 'IsNot' in params ? params.IsNot : null;
        this.IsNot2 = 'IsNot2' in params ? params.IsNot2 : null;
        this.MatchLogic = 'MatchLogic' in params ? params.MatchLogic : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;
        this.MatchType2 = 'MatchType2' in params ? params.MatchType2 : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Offset2 = 'Offset2' in params ? params.Offset2 : null;
        this.PacketMax = 'PacketMax' in params ? params.PacketMax : null;
        this.PacketMin = 'PacketMin' in params ? params.PacketMin : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SportEnd = 'SportEnd' in params ? params.SportEnd : null;
        this.SportStart = 'SportStart' in params ? params.SportStart : null;
        this.Str = 'Str' in params ? params.Str : null;
        this.Str2 = 'Str2' in params ? params.Str2 : null;
        this.MatchBegin = 'MatchBegin' in params ? params.MatchBegin : null;
        this.MatchBegin2 = 'MatchBegin2' in params ? params.MatchBegin2 : null;

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
         * DDoS attack event data
         * @type {CCInterceptEventData || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new CCInterceptEventData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
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
 * DeleteDnsRecords response structure.
 * @class
 */
class DeleteDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {Array.<string> || null}
         */
        this.Ids = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;
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
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of items per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Site set
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Domain name set
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Query condition
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

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
 * DDoS attack event details
 * @class
 */
class DDosAttackEventDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attack status
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * Attack type
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Maximum bandwidth
         * @type {number || null}
         */
        this.MaxBandWidth = null;

        /**
         * Maximum packet rate
         * @type {number || null}
         */
        this.PacketMaxRate = null;

        /**
         * Event ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * DDoS policy group ID
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
 * CreateOriginGroup request structure.
 * @class
 */
class CreateOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the origin group
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * Origin-pull configuration type. This field is required when `OriginType=self`.
`area`: Origin-pull by region
`weight`: Origin-pull by weight
When `OriginType=third_party/cos`, it can be left empty.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Origin records
         * @type {Array.<OriginRecord> || null}
         */
        this.Record = null;

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Origin type
`self`: Customer origin
`third_party`: Third-party origin
`cos`: Tencent Cloud COS origin
         * @type {string || null}
         */
        this.OriginType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new OriginRecord();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;

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
         * Client time in RFC 3339 format
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Client time in RFC 3339 format
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Supported metrics for data query:
`l4Flow_connections`: Access connections
`l4Flow_flux`: Access traffic
`l4Flow_inFlux`: Inbound traffic
`l4Flow_outFlux`: Outbound traffic
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * List of site IDs
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * This field has been disused. Use `ProxyIds` instead.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * This field is not supported currently.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Time interval. Valid values: {min, 5min, hour, day}
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * This field is not supported currently. Use `Filter` instead.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Supported filters: `proxyd`, `ruleId`
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * List of layer-4 proxies
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: 100. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specifies a domain name for the query
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

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
        this.Hosts = 'Hosts' in params ? params.Hosts : null;

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
         * ID of the site (top-level domain name)
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
 * DescribeDDosAttackData response structure.
 * @class
 */
class DescribeDDosAttackDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS attack data
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned data
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Query time granularity. Valid values: {min,5min,hour,day}
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
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of items per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Site set
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Domain name set
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Query condition
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

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

    }
}

/**
 * CreateApplicationProxyRules response structure.
 * @class
 */
class CreateApplicationProxyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of rule IDs
         * @type {Array.<string> || null}
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
 * DescribeWebManagedRulesTopData request structure.
 * @class
 */
class DescribeWebManagedRulesTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter metric
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Number of the top data entries to query. 0: queries all data entries.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Site set
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Set of DDoS policy group IDs
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * Port number
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Protocol type. Valid values: tcp, udp, all
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * Attack type. Valid values: flood, icmpFlood..., all
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * Domain name set
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

    }
}

/**
 * DescribeIdentification response structure.
 * @class
 */
class DescribeIdentificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Verification status. Valid values:
- `pending`: Verifying
- `finished`: The site is verified.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Record value
         * @type {string || null}
         */
        this.RecordValue = null;

        /**
         * NS records of the domain name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Major DDoS attack event
 * @class
 */
class DDosMajorAttackEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS policy group ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Maximum attack bandwidth
         * @type {number || null}
         */
        this.AttackMaxBandWidth = null;

        /**
         * Attack time in seconds
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
 * ModifyZoneCnameSpeedUp request structure.
 * @class
 */
class ModifyZoneCnameSpeedUpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * CNAME acceleration status.
- `enabled`: Enabled
- `disabled`: Disabled
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeApplicationProxyDetail response structure.
 * @class
 */
class DescribeApplicationProxyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Name of the proxy:
Domain name or subdomain name when `ProxyType=hostname`
Instance name when `ProxyType=instance`
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Proxy mode. Valid values:
`ip`: Anycast IP
`domain`: CNAME
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * `0`: Disable security protection; `1`: Enable security protection.
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * `0`: Disable acceleration; `1`: Enable acceleration.
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * This field is moved to `Rule.ForwardClientIp`.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * This field is moved to `Rule.SessionPersist`.
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * List of rules
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

        /**
         * Status. Valid values:
`online`: Enable
`offline`: Disable
`progress`: Deploying
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Scheduling information
         * @type {Array.<string> || null}
         */
        this.ScheduleValue = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Session persistence time
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Specifies how a layer-4 proxy is created.
`hostname`: Create by subdomain name
`instance`: Create by instance
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * When `ProxyType=hostname`:
`ProxyName` indicates a specified domain name, such as test.123.com
`HostId` indicates a unique ID of the domain name.
         * @type {string || null}
         */
        this.HostId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ScheduleValue = 'ScheduleValue' in params ? params.ScheduleValue : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.HostId = 'HostId' in params ? params.HostId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP Allowlist/Blocklist for DDoS protection
 * @class
 */
class DDoSUserAllowBlockIP extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start IP address in a specific range
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Start mask in a specific range
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Mask = null;

        /**
         * IP type. `block`: IP blocklist; `allow`: IP allowlist.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Timestamp
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * End IP address in a specific range
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Ip2 = null;

        /**
         * End mask in a specific range
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Mask2 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Mask = 'Mask' in params ? params.Mask : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Ip2 = 'Ip2' in params ? params.Ip2 : null;
        this.Mask2 = 'Mask2' in params ? params.Mask2 : null;

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
         * Bot attack data
         * @type {BotLogData || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new BotLogData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
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
         * Total number of records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * CLB information
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
 * DescribeWebProtectionData response structure.
 * @class
 */
class DescribeWebProtectionDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * Status. 1: failed; 0: succeeded
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Query time granularity. Valid values: {min,5min,hour,day}
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
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * DNSSEC status.
- `enabled`: Enabled
- `disabled`: Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * DNSSEC information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {DnssecInfo || null}
         */
        this.Dnssec = null;

        /**
         * Modification time
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Dnssec) {
            let obj = new DnssecInfo();
            obj.deserialize(params.Dnssec)
            this.Dnssec = obj;
        }
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScanDnsRecords request structure.
 * @class
 */
class ScanDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
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
 * Custom name servers
 * @class
 */
class VanityNameServers extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the custom name server
`on`: Enable
`off`: Disable
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
 * ImportDnsRecords response structure.
 * @class
 */
class ImportDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {Array.<string> || null}
         */
        this.Ids = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalancingDetail request structure.
 * @class
 */
class DescribeLoadBalancingDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB instance ID
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
 * HTTPS server certificate configuration
 * @class
 */
class DefaultServerCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server certificate ID, which is the ID of the default certificate. If you choose to upload an external certificate for SSL certificate management, a certificate ID will be generated.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Certificate alias
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Certificate type. Valid values:
`default`: Default certificate
`upload`: External certificate
`managed`: Tencent Cloud managed certificate
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time when the certificate expires
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Time when the certificate takes effect
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * Certificate common name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CommonName = null;

        /**
         * Domain names added to the SAN certificate
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * Certificate status. Valid values:
`applying`: Application in progress
`failed`: Application failed
`processing`: Deploying certificate
`deployed`: Certificate deployed
`disabled`: Certificate disabled
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Returns a message to display failure causes when `Status=failed`
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.CommonName = 'CommonName' in params ? params.CommonName : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;

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
 * DescribeOriginGroup request structure.
 * @class
 */
class DescribeOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter parameters
         * @type {Array.<OriginFilter> || null}
         */
        this.Filters = null;

        /**
         * Site ID
If it’s not specified, all origin groups will be obtained.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new OriginFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeOriginGroupDetail response structure.
 * @class
 */
class DescribeOriginGroupDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin group ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * Origin group name
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * Origin-pull configuration type
`area`: Origin-pull by the client IP’s region specified by `Area` in OriginRecord.
`weight`: Origin-pull by the weight specified by `Weight` in OriginRecord.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record
         * @type {Array.<OriginRecord> || null}
         */
        this.Record = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Origin type
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Whether the origin group uses layer-4 proxy.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ApplicationProxyUsed = null;

        /**
         * Whether the origin group is used for load balancing.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.LoadBalancingUsed = null;

        /**
         * Proxy mode of the load balancing task associated with the origin group.
`none`: Not used for load balancing.
`dns_only`: Used for DNS-only load balancing.
`proxied`: Used for proxied load balancing.
`both`: Used for both DNS-only and proxied load balancing.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancingUsedType = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new OriginRecord();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ApplicationProxyUsed = 'ApplicationProxyUsed' in params ? params.ApplicationProxyUsed : null;
        this.LoadBalancingUsed = 'LoadBalancingUsed' in params ? params.LoadBalancingUsed : null;
        this.LoadBalancingUsedType = 'LoadBalancingUsedType' in params ? params.LoadBalancingUsedType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Whether to enable HTTP2 origin-pull
`on`: Enable
`off`: Disable
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
 * Configuration of offline cache
 * @class
 */
class OfflineCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable offline cache. Valid values: `on` and `off`.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * DescribeOriginGroupDetail request structure.
 * @class
 */
class DescribeOriginGroupDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin group ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * Site ID
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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeDDosAttackEventDetail request structure.
 * @class
 */
class DescribeDDosAttackEventDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

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
         * Query dimension
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time interval
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Detailed data
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

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
 * Bot security configuration
 * @class
 */
class BotConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable bot security configuration
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Preset rules
         * @type {BotManagedRule || null}
         */
        this.ManagedRule = null;

        /**
         * Not supported currently
         * @type {BotManagedRule || null}
         */
        this.UaBotRule = null;

        /**
         * Not supported currently
         * @type {BotManagedRule || null}
         */
        this.IspBotRule = null;

        /**
         * User portrait rules
         * @type {BotPortraitRule || null}
         */
        this.PortraitRule = null;

        /**
         * Bot intelligence rules
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

        if (params.ManagedRule) {
            let obj = new BotManagedRule();
            obj.deserialize(params.ManagedRule)
            this.ManagedRule = obj;
        }

        if (params.UaBotRule) {
            let obj = new BotManagedRule();
            obj.deserialize(params.UaBotRule)
            this.UaBotRule = obj;
        }

        if (params.IspBotRule) {
            let obj = new BotManagedRule();
            obj.deserialize(params.IspBotRule)
            this.IspBotRule = obj;
        }

        if (params.PortraitRule) {
            let obj = new BotPortraitRule();
            obj.deserialize(params.PortraitRule)
            this.PortraitRule = obj;
        }

        if (params.IntelligenceRule) {
            let obj = new IntelligenceRule();
            obj.deserialize(params.IntelligenceRule)
            this.IntelligenceRule = obj;
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
         * Sum
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Sum = null;

        /**
         * Maximum
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * Average
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Avg = null;

        /**
         * Metric name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * This field will be disused soon. Use the `Detail` field instead.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.DetailData = null;

        /**
         * Detailed data
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
        this.DetailData = 'DetailData' in params ? params.DetailData : null;

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
 * DescribeBotManagedRules request structure.
 * @class
 */
class DescribeBotManagedRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top-level domain name
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name/layer-4 proxy
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Total number of pages
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of rules per page
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * Rule type. Values: `idcid`, `sipbot` and `uabot`. All rules will be returned if this field is not specified.
         * @type {string || null}
         */
        this.RuleType = null;

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
        this.Page = 'Page' in params ? params.Page : null;
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;

    }
}

module.exports = {
    Compression: Compression,
    WebLogData: WebLogData,
    HostCertSetting: HostCertSetting,
    ACLUserRule: ACLUserRule,
    ModifyDefaultCertificateRequest: ModifyDefaultCertificateRequest,
    DescribeWebManagedRulesTopDataResponse: DescribeWebManagedRulesTopDataResponse,
    DescribeOriginGroupResponse: DescribeOriginGroupResponse,
    DescribeWebManagedRulesAttackEventsResponse: DescribeWebManagedRulesAttackEventsResponse,
    DescribeTopL7CacheDataRequest: DescribeTopL7CacheDataRequest,
    DeleteApplicationProxyResponse: DeleteApplicationProxyResponse,
    Https: Https,
    SecurityEntity: SecurityEntity,
    OriginFilter: OriginFilter,
    BotLogData: BotLogData,
    DescribeZonesRequest: DescribeZonesRequest,
    RateLimitTemplate: RateLimitTemplate,
    ShieldArea: ShieldArea,
    DdosRule: DdosRule,
    ModifyLoadBalancingStatusResponse: ModifyLoadBalancingStatusResponse,
    DescribePrefetchTasksResponse: DescribePrefetchTasksResponse,
    DescribeDDosAttackEventResponse: DescribeDDosAttackEventResponse,
    DeleteApplicationProxyRequest: DeleteApplicationProxyRequest,
    CreateCustomErrorPageResponse: CreateCustomErrorPageResponse,
    ReclaimZoneResponse: ReclaimZoneResponse,
    DescribeZoneSettingRequest: DescribeZoneSettingRequest,
    ModifyZoneStatusRequest: ModifyZoneStatusRequest,
    ModifyDnsRecordRequest: ModifyDnsRecordRequest,
    DDoSAcl: DDoSAcl,
    ModifySecurityPolicyRequest: ModifySecurityPolicyRequest,
    CreateApplicationProxyRulesRequest: CreateApplicationProxyRulesRequest,
    LoadBalancing: LoadBalancing,
    ModifyDnssecRequest: ModifyDnssecRequest,
    ModifyZoneSettingRequest: ModifyZoneSettingRequest,
    DdosPacketFilter: DdosPacketFilter,
    CreateApplicationProxyResponse: CreateApplicationProxyResponse,
    ImportDnsRecordsRequest: ImportDnsRecordsRequest,
    CacheConfigNoCache: CacheConfigNoCache,
    ModifyOriginGroupResponse: ModifyOriginGroupResponse,
    DescribeZoneDetailsResponse: DescribeZoneDetailsResponse,
    BotLog: BotLog,
    Origin: Origin,
    ModifyZoneStatusResponse: ModifyZoneStatusResponse,
    DescribeSecurityPolicyManagedRulesRequest: DescribeSecurityPolicyManagedRulesRequest,
    DescribeSecurityPortraitRulesRequest: DescribeSecurityPortraitRulesRequest,
    CertSort: CertSort,
    ModifySecurityPolicyResponse: ModifySecurityPolicyResponse,
    ModifyDDoSPolicyHostRequest: ModifyDDoSPolicyHostRequest,
    DescribeHostsSettingResponse: DescribeHostsSettingResponse,
    DescribeSecurityPolicyRegionsResponse: DescribeSecurityPolicyRegionsResponse,
    ModifyZoneResponse: ModifyZoneResponse,
    DescribeDDosAttackSourceEventRequest: DescribeDDosAttackSourceEventRequest,
    ModifyZoneRequest: ModifyZoneRequest,
    DeleteZoneResponse: DeleteZoneResponse,
    DDosAttackEventData: DDosAttackEventData,
    Hsts: Hsts,
    CreatePurgeTaskResponse: CreatePurgeTaskResponse,
    DeleteApplicationProxyRuleResponse: DeleteApplicationProxyRuleResponse,
    DDosAttackSourceEvent: DDosAttackSourceEvent,
    TimingDataRecord: TimingDataRecord,
    DdosAcls: DdosAcls,
    DeleteOriginGroupRequest: DeleteOriginGroupRequest,
    TopDetailData: TopDetailData,
    ModifyHostsCertificateResponse: ModifyHostsCertificateResponse,
    CreateDnsRecordRequest: CreateDnsRecordRequest,
    IpTableRule: IpTableRule,
    L7OfflineLog: L7OfflineLog,
    ModifyHostsCertificateRequest: ModifyHostsCertificateRequest,
    ApplicationProxyRule: ApplicationProxyRule,
    SmartRouting: SmartRouting,
    DescribeDnsDataResponse: DescribeDnsDataResponse,
    Zone: Zone,
    ZoneFilter: ZoneFilter,
    DescribeSecurityPolicyManagedRulesIdRequest: DescribeSecurityPolicyManagedRulesIdRequest,
    ModifyApplicationProxyStatusRequest: ModifyApplicationProxyStatusRequest,
    CacheConfigCache: CacheConfigCache,
    CertFilter: CertFilter,
    DescribeIdentificationRequest: DescribeIdentificationRequest,
    ModifyLoadBalancingStatusRequest: ModifyLoadBalancingStatusRequest,
    DescribeDDosAttackTopDataResponse: DescribeDDosAttackTopDataResponse,
    DescribeCnameStatusResponse: DescribeCnameStatusResponse,
    DescribeLoadBalancingRequest: DescribeLoadBalancingRequest,
    CCInterceptEvent: CCInterceptEvent,
    DDoSStatusInfo: DDoSStatusInfo,
    AclConfig: AclConfig,
    ModifyZoneSettingResponse: ModifyZoneSettingResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    ScanDnsRecordsResponse: ScanDnsRecordsResponse,
    WafConfig: WafConfig,
    CreateDnsRecordResponse: CreateDnsRecordResponse,
    CCLog: CCLog,
    ServerCertInfo: ServerCertInfo,
    DDoSConfig: DDoSConfig,
    DescribeWebManagedRulesDataResponse: DescribeWebManagedRulesDataResponse,
    DescribeWebManagedRulesLogResponse: DescribeWebManagedRulesLogResponse,
    OriginRecord: OriginRecord,
    WebLogs: WebLogs,
    CreatePrefetchTaskRequest: CreatePrefetchTaskRequest,
    DeleteApplicationProxyRuleRequest: DeleteApplicationProxyRuleRequest,
    CacheConfigFollowOrigin: CacheConfigFollowOrigin,
    ACLCondition: ACLCondition,
    DescribeTopL7AnalysisDataRequest: DescribeTopL7AnalysisDataRequest,
    TopNEntry: TopNEntry,
    DescribeApplicationProxyResponse: DescribeApplicationProxyResponse,
    CreateLoadBalancingResponse: CreateLoadBalancingResponse,
    DescribeTopL7CacheDataResponse: DescribeTopL7CacheDataResponse,
    DescribeOverviewL7DataRequest: DescribeOverviewL7DataRequest,
    SwitchConfig: SwitchConfig,
    IdentifyZoneResponse: IdentifyZoneResponse,
    WebSocket: WebSocket,
    DataItem: DataItem,
    ModifyLoadBalancingRequest: ModifyLoadBalancingRequest,
    CreateLoadBalancingRequest: CreateLoadBalancingRequest,
    DescribeDnssecRequest: DescribeDnssecRequest,
    DescribeWebProtectionLogResponse: DescribeWebProtectionLogResponse,
    CCInterceptEventData: CCInterceptEventData,
    DescribeLoadBalancingDetailResponse: DescribeLoadBalancingDetailResponse,
    SecurityConfig: SecurityConfig,
    DDosMajorAttackEventData: DDosMajorAttackEventData,
    DescribeBotManagedRulesResponse: DescribeBotManagedRulesResponse,
    DnsRecord: DnsRecord,
    TopDataRecord: TopDataRecord,
    DDoSAntiPly: DDoSAntiPly,
    DescribeWebManagedRulesDataRequest: DescribeWebManagedRulesDataRequest,
    DDosAttackSourceEventData: DDosAttackSourceEventData,
    ModifyDDoSPolicyResponse: ModifyDDoSPolicyResponse,
    DescribeDnsRecordsRequest: DescribeDnsRecordsRequest,
    CreatePrefetchTaskResponse: CreatePrefetchTaskResponse,
    WafRule: WafRule,
    DescribeDefaultCertificatesRequest: DescribeDefaultCertificatesRequest,
    GeoIp: GeoIp,
    DescribeSecurityPolicyRequest: DescribeSecurityPolicyRequest,
    ModifyApplicationProxyRuleResponse: ModifyApplicationProxyRuleResponse,
    DDosAttackEvent: DDosAttackEvent,
    FailReason: FailReason,
    CreateZoneRequest: CreateZoneRequest,
    RateLimitConfig: RateLimitConfig,
    DescribeTimingL7CacheDataRequest: DescribeTimingL7CacheDataRequest,
    DescribeSecurityPolicyListResponse: DescribeSecurityPolicyListResponse,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    OriginRecordPrivateParameter: OriginRecordPrivateParameter,
    CheckCertificateResponse: CheckCertificateResponse,
    DDoSApplication: DDoSApplication,
    DownloadL7LogsRequest: DownloadL7LogsRequest,
    DeleteLoadBalancingResponse: DeleteLoadBalancingResponse,
    DescribeWebProtectionDataRequest: DescribeWebProtectionDataRequest,
    CheckCertificateRequest: CheckCertificateRequest,
    DescribeSecurityPortraitRulesResponse: DescribeSecurityPortraitRulesResponse,
    CreateApplicationProxyRuleRequest: CreateApplicationProxyRuleRequest,
    BotManagedRuleDetail: BotManagedRuleDetail,
    ForceRedirect: ForceRedirect,
    ModifyApplicationProxyRequest: ModifyApplicationProxyRequest,
    ModifyApplicationProxyStatusResponse: ModifyApplicationProxyStatusResponse,
    IdentifyZoneRequest: IdentifyZoneRequest,
    DetailHost: DetailHost,
    RateLimitUserRule: RateLimitUserRule,
    DescribeDnsRecordsResponse: DescribeDnsRecordsResponse,
    DescribeDefaultCertificatesResponse: DescribeDefaultCertificatesResponse,
    CachePrefresh: CachePrefresh,
    DescribeTimingL7AnalysisDataResponse: DescribeTimingL7AnalysisDataResponse,
    PortraitManagedRuleDetail: PortraitManagedRuleDetail,
    BotPortraitRule: BotPortraitRule,
    DescribeWebProtectionAttackEventsRequest: DescribeWebProtectionAttackEventsRequest,
    DescribeOverviewL7DataResponse: DescribeOverviewL7DataResponse,
    DescribeHostsCertificateRequest: DescribeHostsCertificateRequest,
    DescribeSecurityPolicyManagedRulesResponse: DescribeSecurityPolicyManagedRulesResponse,
    OriginGroup: OriginGroup,
    DescribeApplicationProxyRequest: DescribeApplicationProxyRequest,
    TopNEntryValue: TopNEntryValue,
    ModifyDDoSPolicyHostResponse: ModifyDDoSPolicyHostResponse,
    ModifyApplicationProxyRuleStatusRequest: ModifyApplicationProxyRuleStatusRequest,
    ModifyLoadBalancingResponse: ModifyLoadBalancingResponse,
    WebAttackEvent: WebAttackEvent,
    DescribeDDosAttackTopDataRequest: DescribeDDosAttackTopDataRequest,
    CreateApplicationProxyRuleResponse: CreateApplicationProxyRuleResponse,
    DescribeDDosAttackDataRequest: DescribeDDosAttackDataRequest,
    ModifyDnsRecordResponse: ModifyDnsRecordResponse,
    RateLimitTemplateDetail: RateLimitTemplateDetail,
    TimingDataItem: TimingDataItem,
    CreateApplicationProxyRequest: CreateApplicationProxyRequest,
    DescribeTopL7AnalysisDataResponse: DescribeTopL7AnalysisDataResponse,
    IntelligenceRuleItem: IntelligenceRuleItem,
    IntelligenceRule: IntelligenceRule,
    PostMaxSize: PostMaxSize,
    OriginCheckOriginStatus: OriginCheckOriginStatus,
    ManagedRule: ManagedRule,
    Filter: Filter,
    DescribeWebManagedRulesAttackEventsRequest: DescribeWebManagedRulesAttackEventsRequest,
    DescribeCnameStatusRequest: DescribeCnameStatusRequest,
    CreateCustomErrorPageRequest: CreateCustomErrorPageRequest,
    DescribeDnssecResponse: DescribeDnssecResponse,
    CreateZoneResponse: CreateZoneResponse,
    DnsDataFilter: DnsDataFilter,
    DeleteLoadBalancingRequest: DeleteLoadBalancingRequest,
    DescribeTimingL7AnalysisDataRequest: DescribeTimingL7AnalysisDataRequest,
    DescribeSecurityPolicyManagedRulesIdResponse: DescribeSecurityPolicyManagedRulesIdResponse,
    WebEventData: WebEventData,
    ApplicationProxy: ApplicationProxy,
    ModifyApplicationProxyResponse: ModifyApplicationProxyResponse,
    DescribeDDoSPolicyResponse: DescribeDDoSPolicyResponse,
    CacheKey: CacheKey,
    ModifyOriginGroupRequest: ModifyOriginGroupRequest,
    ModifyApplicationProxyRuleStatusResponse: ModifyApplicationProxyRuleStatusResponse,
    DescribeSecurityPolicyListRequest: DescribeSecurityPolicyListRequest,
    DescribeTimingL7CacheDataResponse: DescribeTimingL7CacheDataResponse,
    DescribeApplicationProxyDetailRequest: DescribeApplicationProxyDetailRequest,
    RateLimitIntelligence: RateLimitIntelligence,
    IpTableConfig: IpTableConfig,
    DeleteOriginGroupResponse: DeleteOriginGroupResponse,
    Header: Header,
    VanityNameServersIps: VanityNameServersIps,
    DescribeDDosAttackSourceEventResponse: DescribeDDosAttackSourceEventResponse,
    DescribeZoneDetailsRequest: DescribeZoneDetailsRequest,
    DescribeDDoSPolicyRequest: DescribeDDoSPolicyRequest,
    SecEntry: SecEntry,
    DescribeDDosMajorAttackEventRequest: DescribeDDosMajorAttackEventRequest,
    Quic: Quic,
    CreateOriginGroupResponse: CreateOriginGroupResponse,
    DescribeSecurityPolicyResponse: DescribeSecurityPolicyResponse,
    QueryString: QueryString,
    DescribeSecurityPolicyRegionsRequest: DescribeSecurityPolicyRegionsRequest,
    SecEntryValue: SecEntryValue,
    ReclaimZoneRequest: ReclaimZoneRequest,
    DeleteZoneRequest: DeleteZoneRequest,
    BotManagedRule: BotManagedRule,
    ModifyDefaultCertificateResponse: ModifyDefaultCertificateResponse,
    DescribeDDosAttackEventRequest: DescribeDDosAttackEventRequest,
    ClientIp: ClientIp,
    DnsRecordFilter: DnsRecordFilter,
    DescribeHostsCertificateResponse: DescribeHostsCertificateResponse,
    DescribeZoneSettingResponse: DescribeZoneSettingResponse,
    AiRule: AiRule,
    MaxAge: MaxAge,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    QueryCondition: QueryCondition,
    DescribeDnsDataRequest: DescribeDnsDataRequest,
    CacheConfig: CacheConfig,
    DescribeDDosAttackEventDetailResponse: DescribeDDosAttackEventDetailResponse,
    ModifyApplicationProxyRuleRequest: ModifyApplicationProxyRuleRequest,
    ModifyDDoSPolicyRequest: ModifyDDoSPolicyRequest,
    ModifyZoneCnameSpeedUpResponse: ModifyZoneCnameSpeedUpResponse,
    DescribeWebProtectionLogRequest: DescribeWebProtectionLogRequest,
    CCLogData: CCLogData,
    DescribePrefetchTasksRequest: DescribePrefetchTasksRequest,
    Task: Task,
    DeleteDnsRecordsRequest: DeleteDnsRecordsRequest,
    DdosAllowBlock: DdosAllowBlock,
    DDoSGeoIp: DDoSGeoIp,
    DescribeZoneDDoSPolicyResponse: DescribeZoneDDoSPolicyResponse,
    CnameStatus: CnameStatus,
    DescribeDDosMajorAttackEventResponse: DescribeDDosMajorAttackEventResponse,
    DDoSFeaturesFilter: DDoSFeaturesFilter,
    DescribeWebProtectionAttackEventsResponse: DescribeWebProtectionAttackEventsResponse,
    CreatePurgeTaskRequest: CreatePurgeTaskRequest,
    DeleteDnsRecordsResponse: DeleteDnsRecordsResponse,
    DescribeBotLogRequest: DescribeBotLogRequest,
    DownloadL7LogsResponse: DownloadL7LogsResponse,
    DDosAttackEventDetailData: DDosAttackEventDetailData,
    CreateOriginGroupRequest: CreateOriginGroupRequest,
    DescribeTimingL4DataRequest: DescribeTimingL4DataRequest,
    DescribeHostsSettingRequest: DescribeHostsSettingRequest,
    DescribeZoneDDoSPolicyRequest: DescribeZoneDDoSPolicyRequest,
    DescribeDDosAttackDataResponse: DescribeDDosAttackDataResponse,
    DescribeWebManagedRulesLogRequest: DescribeWebManagedRulesLogRequest,
    CreateApplicationProxyRulesResponse: CreateApplicationProxyRulesResponse,
    DescribeWebManagedRulesTopDataRequest: DescribeWebManagedRulesTopDataRequest,
    DescribeIdentificationResponse: DescribeIdentificationResponse,
    DDosMajorAttackEvent: DDosMajorAttackEvent,
    ModifyZoneCnameSpeedUpRequest: ModifyZoneCnameSpeedUpRequest,
    DescribeApplicationProxyDetailResponse: DescribeApplicationProxyDetailResponse,
    DDoSUserAllowBlockIP: DDoSUserAllowBlockIP,
    DescribeBotLogResponse: DescribeBotLogResponse,
    DescribeLoadBalancingResponse: DescribeLoadBalancingResponse,
    DescribeWebProtectionDataResponse: DescribeWebProtectionDataResponse,
    ModifyDnssecResponse: ModifyDnssecResponse,
    ScanDnsRecordsRequest: ScanDnsRecordsRequest,
    VanityNameServers: VanityNameServers,
    ImportDnsRecordsResponse: ImportDnsRecordsResponse,
    DescribeLoadBalancingDetailRequest: DescribeLoadBalancingDetailRequest,
    DefaultServerCertInfo: DefaultServerCertInfo,
    DnssecInfo: DnssecInfo,
    DescribeOriginGroupRequest: DescribeOriginGroupRequest,
    DescribeOriginGroupDetailResponse: DescribeOriginGroupDetailResponse,
    UpstreamHttp2: UpstreamHttp2,
    OfflineCache: OfflineCache,
    DescribeOriginGroupDetailRequest: DescribeOriginGroupDetailRequest,
    DescribeDDosAttackEventDetailRequest: DescribeDDosAttackEventDetailRequest,
    DescribeTimingL4DataResponse: DescribeTimingL4DataResponse,
    BotConfig: BotConfig,
    TimingTypeValue: TimingTypeValue,
    DescribeBotManagedRulesRequest: DescribeBotManagedRulesRequest,

}
