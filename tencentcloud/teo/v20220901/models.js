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
 * DeployConfigGroupVersion request structure.
 * @class
 */
class DeployConfigGroupVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Environment ID. Please specify the environment ID to which the version should be released.
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Version information required for release. Multiple versions of different configuration groups can be modified simultaneously, while each group allows modifying only one version at a time.
         * @type {Array.<ConfigGroupVersionInfo> || null}
         */
        this.ConfigGroupVersionInfos = null;

        /**
         * Change description. It is used to describe the content and reasons for this change. A maximum of 100 characters are supported.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

        if (params.ConfigGroupVersionInfos) {
            this.ConfigGroupVersionInfos = new Array();
            for (let z in params.ConfigGroupVersionInfos) {
                let obj = new ConfigGroupVersionInfo();
                obj.deserialize(params.ConfigGroupVersionInfos[z]);
                this.ConfigGroupVersionInfos.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Auto-renewal configuration item in a prepaid plan.
 * @class
 */
class RenewFlag extends  AbstractModel {
    constructor(){
        super();

        /**
         * The auto-renewal flag for prepaid plan has the following values:
<li> on: Enable auto-renewal;</li>
<li> off: Disable auto-renewal. </li>
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
 * DeleteL4ProxyRules request structure.
 * @class
 */
class DeleteL4ProxyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer 4 proxy instance ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * List of forwarding rule IDs. It supports up to 200 forwarding rules at a time.
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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeSecurityIPGroupInfo response structure.
 * @class
 */
class DescribeSecurityIPGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of IP groups that meet the conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Detailed configuration information of the IP group, including the ID, name, and IP/network segment list of each IP group.
         * @type {Array.<IPGroup> || null}
         */
        this.IPGroups = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.IPGroups) {
            this.IPGroups = new Array();
            for (let z in params.IPGroups) {
                let obj = new IPGroup();
                obj.deserialize(params.IPGroups[z]);
                this.IPGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeConfigGroupVersionDetail response structure.
 * @class
 */
class DescribeConfigGroupVersionDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version information.
         * @type {ConfigGroupVersionInfo || null}
         */
        this.ConfigGroupVersionInfo = null;

        /**
         * Version file content. It is returned in JSON format.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ConfigGroupVersionInfo) {
            let obj = new ConfigGroupVersionInfo();
            obj.deserialize(params.ConfigGroupVersionInfo)
            this.ConfigGroupVersionInfo = obj;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Origin server type, with values:
<li>IP_DOMAIN: IPv4, IPv6, or domain name type origin server;</li>
<li>COS: Tencent Cloud COS origin server;</li>
<li>AWS_S3: AWS S3 origin server;</li>
<li>ORIGIN_GROUP: origin server group type origin server;</li>
<li>VODEO: VOD on EO;</li>
<li>VOD: Video on Demand;</li>
<li>SPACE: origin server uninstallation. Currently only available to the allowlist;</li>
<li>LB: load balancing. Currently only available to the allowlist. </li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin server address, which varies according to the value of OriginType:
<li>When OriginType = IP_DOMAIN, this parameter should be an IPv4 address, an IPv6 address, or a domain name;</li>
<li>When OriginType = COS, this parameter should be the access domain name of the COS bucket;</li>
<li>When OriginType = AWS_S3, this parameter should be the access domain name of the S3 bucket;</li>
<li>When OriginType = ORIGIN_GROUP, this parameter should be the origin server group ID;</li>
<li>When OriginType = VOD, this parameter should be the VOD application ID;</li>
<li>When OriginType = VODEO, if VodeoDistributionRange = ALL, then this parameter is "all-buckets-in-vodeo-application"; if VodeoDistributionRange = Bucket, then this parameter is the domain name of the corresponding bucket. </li>
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * Secondary origin group ID. This parameter is valid only when OriginType is ORIGIN_GROUP and a secondary origin group is configured.
         * @type {string || null}
         */
        this.BackupOrigin = null;

        /**
         * Primary origin group name. This parameter returns a value when OriginType is ORIGIN_GROUP.
         * @type {string || null}
         */
        this.OriginGroupName = null;

        /**
         * Secondary origin group name. This parameter is valid only when OriginType is ORIGIN_GROUP and a secondary origin group is configured.
         * @type {string || null}
         */
        this.BackOriginGroupName = null;

        /**
         * Whether access to the private object storage origin server is allowed. This parameter is valid only when the origin server type OriginType is COS or AWS_S3. Valid values:
<li>on: Enable private authentication;</li>
<li>off: Disable private authentication. </li>
If this field is not specified, the default value 'off' will be used.
         * @type {string || null}
         */
        this.PrivateAccess = null;

        /**
         * Private authentication parameter. This parameter is valid only when PrivateAccess is on.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrivateParameter> || null}
         */
        this.PrivateParameters = null;

        /**
         * MO sub-application ID
         * @type {number || null}
         */
        this.VodeoSubAppId = null;

        /**
         * MO distribution range. Valid values: <li>All: all</li> <li>Bucket: bucket</li>
         * @type {string || null}
         */
        this.VodeoDistributionRange = null;

        /**
         * MO bucket ID, required when the distribution range (DistributionRange) is bucket (Bucket)
         * @type {string || null}
         */
        this.VodeoBucketId = null;

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
        this.VodeoSubAppId = 'VodeoSubAppId' in params ? params.VodeoSubAppId : null;
        this.VodeoDistributionRange = 'VodeoDistributionRange' in params ? params.VodeoDistributionRange : null;
        this.VodeoBucketId = 'VodeoBucketId' in params ? params.VodeoBucketId : null;

    }
}

/**
 * Prepaid Plan Billing Parameters
 * @class
 */
class PrepaidPlanParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prepaid plan duration, unit: month. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36.

If this field is not specified, the default value '1' will be used.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * The auto-renewal flag for prepaid plan has the following values:
<li> on: Enable auto-renewal;</li>
<li> off: Disable auto-renewal. </li>
If this field is not specified, the default value 'off' will be used. When auto-renewal is enabled, it defaults to renewing for one month.
         * @type {string || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateCLSIndex response structure.
 * @class
 */
class CreateCLSIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeRealtimeLogDeliveryTasks request structure.
 * @class
 */
class DescribeRealtimeLogDeliveryTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The offset of paginated query. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The limit of paginated query. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter conditions. The maximum value for Filters.Values is 20. If this field is not filled in, all the real-time log delivery task information under the current zone-id will be returned. Detailed filter conditions are as follows:
<li>task-id: Filter by real-time log delivery task ID. Fuzzy search is not supported.</li>
<li>task-name: Filter by real-time log delivery task name. Fuzzy search is supported, but only one real-time log delivery task name can be filled in for fuzzy search.</li>
<li>entity-list: Filter by entity corresponding to the real-time log delivery task. Fuzzy search is not supported. Example values: domain.example.com or sid-2s69eb5wcms7.</li>
<li>task-type: Filter by real-time log delivery task type. Fuzzy search is not supported. Optional values:<br>cls: Push to Tencent Cloud CLS;<br>custom_endpoint: Push to a user-defined HTTP(S) address;<br>s3: Push to an AWS S3-compatible bucket address.</li>
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeBillingData request structure.
 * @class
 */
class DescribeBillingDataRequest extends  AbstractModel {
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
         * Zone ID set. This parameter is required.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Indicator list. Valid values:<li>acc_flux: Content acceleration traffic, in bytes;</li>
<li>smt_flux: Smart acceleration traffic, in bytes;</li>
<li>l4_flux: Layer 4 acceleration traffic, in bytes;</li>
<li>sec_flux: Exclusive DDoS mitigation traffic, in bytes;</li>
<li>zxctg_flux: Cross-MLC-border acceleration traffic, in bytes;</li>
<li>acc_bandwidth: Content acceleration bandwidth, in bps;</li>
<li>smt_bandwidth: Smart acceleration bandwidth, in bps;</li>
<li>l4_bandwidth: Layer 4 acceleration bandwidth, in bps;</li>
<li>sec_bandwidth: Exclusive DDoS mitigation bandwidth, in bps;</li>
<li>zxctg_bandwidth: Cross-MLC-border acceleration bandwidth, in bps;</li><li>sec_request_clean: HTTP/HTTPS requests, in count;</li>
<li>smt_request_clean: Smart acceleration requests, in count;</li>
<li>quic_request: QUIC requests, in count;</li>
<li>bot_request_clean: Bot requests, in count;</li>
<li>cls_count: Real-time log delivery log counts, in count;</li>
<li>ddos_bandwidth: Exclusive DDoS mitigation elastic bandwidth, in bps.</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Query granularity. Valid values:<li>5min: 5-minute granularity;</li>
<li>hour: 1-hour granularity;</li>
<li>day: 1-day granularity.</li>
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Filter. The detailed filters are as follows:
<li>host: Filter by Domain Name. Example: test.example.com.<br></li>
<li>proxy-id: Filter by Layer 4 Proxy Instance ID. Example: sid-2rugn89bkla9.<br></li>
<li>region-id: Filter by Billing Region.Options are:<br>   CH: Chinese mainland<br>   AF: Africa<br>   AS1: Asia-Pacific Region 1<br>   AS2: Asia-Pacific Region 2<br>   AS3: Asia-Pacific Region 3<br>  EU: Europe<br>   MidEast: Middle East<br>   NA: North America<br>   SA: South America</li>
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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

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
 * Output format for real-time log delivery. You can directly use the specified predefined log output format (JSON Lines / csv) through the FormatType parameter, or define a variant output format through additional parameters based on the predefined log output format.
 * @class
 */
class LogFormat extends  AbstractModel {
    constructor(){
        super();

        /**
         * Predefined output format type for log delivery. Valid values:
<li>json: Use the predefined log output format JSON Lines, where fields in each log record are presented as key-value pairs;</li>
<li>csv: Use the predefined log output format csv, where fields in each log record is only presented as field values, excluding field names. </li>
         * @type {string || null}
         */
        this.FormatType = null;

        /**
         * A string added before each log delivery batch. Each log delivery batch may contain multiple log records.
         * @type {string || null}
         */
        this.BatchPrefix = null;

        /**
         * A string appended after each log delivery batch.
         * @type {string || null}
         */
        this.BatchSuffix = null;

        /**
         * A string added before each log record.
         * @type {string || null}
         */
        this.RecordPrefix = null;

        /**
         * A string appended after each log record.
         * @type {string || null}
         */
        this.RecordSuffix = null;

        /**
         * A string inserted between log records as a separator. Valid values:
<li>\n: Line break;</li>
<li>\t: Tab character;</li>
<li>,: Half-width comma. </li>
         * @type {string || null}
         */
        this.RecordDelimiter = null;

        /**
         * A string inserted between fields as a separator within a single log record. Valid values:
<li>\t: Tab character;</li>
<li>,: Half-width comma;</li>
<li>;: Half-width semicolon. </li>
         * @type {string || null}
         */
        this.FieldDelimiter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FormatType = 'FormatType' in params ? params.FormatType : null;
        this.BatchPrefix = 'BatchPrefix' in params ? params.BatchPrefix : null;
        this.BatchSuffix = 'BatchSuffix' in params ? params.BatchSuffix : null;
        this.RecordPrefix = 'RecordPrefix' in params ? params.RecordPrefix : null;
        this.RecordSuffix = 'RecordSuffix' in params ? params.RecordSuffix : null;
        this.RecordDelimiter = 'RecordDelimiter' in params ? params.RecordDelimiter : null;
        this.FieldDelimiter = 'FieldDelimiter' in params ? params.FieldDelimiter : null;

    }
}

/**
 * DescribeEnvironments request structure.
 * @class
 */
class DescribeEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
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
         * Filter conditions. The maximum value for Filters.Values is 20. The detailed conditions are as follows:
<li>target-name: Filter by the target domain name;</li>
<li>alias-name: Filter by the alias of the domain name.</li>Fuzzy queries are only supported for the field name alias-name.
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
 * CreateRealtimeLogDeliveryTask request structure.
 * @class
 */
class CreateRealtimeLogDeliveryTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The name of the real-time log delivery task, which is a combination of numbers, English letters, - and _, containing up to 200 characters.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * The type of the real-time log delivery task. Valid values:
<li>cls: Push to Tencent Cloud CLS;</li>
<li>custom_endpoint: Push to a user-defined HTTP(S) address;</li>
<li>s3: Push to an AWS S3-compatible bucket address.</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * The list of entities (Layer 7 domains or Layer 4 proxy instances) corresponding to the real-time log delivery task. Valid value examples:
<li>Layer 7 domain: domain.example.com;</li>
<li>Layer 4 proxy instance: sid-2s69eb5wcms7.</li>
         * @type {Array.<string> || null}
         */
        this.EntityList = null;

        /**
         * The type of data delivery. Valid values:
<li>domain: Site acceleration log;</li>
<li>application: Layer 4 proxy log;</li>
<li>web-rateLiming: Rate limit and CC attack defense log;</li>
<li>web-attack: Managed rule log;</li>
<li>web-rule: Custom rule log;</li>
<li>web-bot: Bot management log.</li>
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * The data delivery area. Valid values:
<li>mainland: Within the Chinese mainland;</li>
<li>overseas: Global (excluding the Chinese mainland).</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * The list of predefined fields for delivery.
         * @type {Array.<string> || null}
         */
        this.Fields = null;

        /**
         * The list of custom fields for delivery, supporting extracting specified field values from HTTP request headers, response headers, and cookies. Each custom field name must be unique and the maximum number of fields is 200.
         * @type {Array.<CustomField> || null}
         */
        this.CustomFields = null;

        /**
         * Log delivery filter conditions. If this field is not filled in, all logs will be delivered.
         * @type {Array.<DeliveryCondition> || null}
         */
        this.DeliveryConditions = null;

        /**
         * The sampling ratio in permille. Value range: 1 to 1000. For example, 605 represents a sampling ratio of 60.5%. If this field is not filled in, the sampling ratio is 100%.
         * @type {number || null}
         */
        this.Sample = null;

        /**
         * Output format for log delivery. If this field is not specified, the default format is used, which works as follows:
<li>When TaskType is 'custom_endpoint', the default format is an array of JSON objects, with each JSON object representing a log entry;</li>
<li>When TaskType is 's3', the default format is JSON Lines;</li>Specifically, when TaskType is 'cls', the only allowed value for LogFormat.FormatType is 'json', and other parameters in LogFormat will be ignored. It is recommended not to transfer LogFormat.
         * @type {LogFormat || null}
         */
        this.LogFormat = null;

        /**
         * The configuration information of CLS. This parameter is required when TaskType is cls.
         * @type {CLSTopic || null}
         */
        this.CLS = null;

        /**
         * The configuration information of the custom HTTP service. This parameter is required when TaskType is custom_endpoint.
         * @type {CustomEndpoint || null}
         */
        this.CustomEndpoint = null;

        /**
         * The configuration information of the AWS S3-compatible bucket. This parameter is required when TaskType is s3.
         * @type {S3 || null}
         */
        this.S3 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.EntityList = 'EntityList' in params ? params.EntityList : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Fields = 'Fields' in params ? params.Fields : null;

        if (params.CustomFields) {
            this.CustomFields = new Array();
            for (let z in params.CustomFields) {
                let obj = new CustomField();
                obj.deserialize(params.CustomFields[z]);
                this.CustomFields.push(obj);
            }
        }

        if (params.DeliveryConditions) {
            this.DeliveryConditions = new Array();
            for (let z in params.DeliveryConditions) {
                let obj = new DeliveryCondition();
                obj.deserialize(params.DeliveryConditions[z]);
                this.DeliveryConditions.push(obj);
            }
        }
        this.Sample = 'Sample' in params ? params.Sample : null;

        if (params.LogFormat) {
            let obj = new LogFormat();
            obj.deserialize(params.LogFormat)
            this.LogFormat = obj;
        }

        if (params.CLS) {
            let obj = new CLSTopic();
            obj.deserialize(params.CLS)
            this.CLS = obj;
        }

        if (params.CustomEndpoint) {
            let obj = new CustomEndpoint();
            obj.deserialize(params.CustomEndpoint)
            this.CustomEndpoint = obj;
        }

        if (params.S3) {
            let obj = new S3();
            obj.deserialize(params.S3)
            this.S3 = obj;
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Version release record details for the configuration group.
 * @class
 */
class DeployRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details about the released version.
         * @type {Array.<ConfigGroupVersionInfo> || null}
         */
        this.ConfigGroupVersionInfos = null;

        /**
         * Release time. The time format follows the ISO 8601 standard and is represented in Coordinated Universal Time (UTC).
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * Release status. Valid values: 
<li>deploying: Being released.</li>
<li>failure: Release failed.</li>
<li>success: Released successfully. </li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Release result information.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Release record ID. 
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * Change description.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ConfigGroupVersionInfos) {
            this.ConfigGroupVersionInfos = new Array();
            for (let z in params.ConfigGroupVersionInfos) {
                let obj = new ConfigGroupVersionInfo();
                obj.deserialize(params.ConfigGroupVersionInfos[z]);
                this.ConfigGroupVersionInfos.push(obj);
            }
        }
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Description = 'Description' in params ? params.Description : null;

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

        /**
         * Origin-pull protocol configuration. Values:
<li>`FOLLOW`: Follow the protocol of origin</li>
<li>`HTTP`: Send requests to the origin over HTTP</li>
<li>`HTTPS`: Send requests to the origin over HTTPS</li>
<li>The original configuration applies if this field is not specified.</li>
         * @type {string || null}
         */
        this.OriginProtocol = null;

        /**
         * Ports for HTTP origin-pull requests. Range: 1-65535. It takes effect when `OriginProtocol=FOLLOW/HTTP`. The original configuration is used if it's not specified.
         * @type {number || null}
         */
        this.HttpOriginPort = null;

        /**
         * Ports for HTTPS origin-pull requests. Range: 1-65535. It takes effect when `OriginProtocol=FOLLOW/HTTPS`. The original configuration is used if it's not specified.
         * @type {number || null}
         */
        this.HttpsOriginPort = null;

        /**
         * IPv6 status. Values:
<li>`follow`: Follow the IPv6 configuration of the site</li>
<li>`on`: Enable</li>
<li>`off`: Disable</li>
<li>The original configuration applies if this field is not specified.</li>
         * @type {string || null}
         */
        this.IPv6Status = null;

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
        this.OriginProtocol = 'OriginProtocol' in params ? params.OriginProtocol : null;
        this.HttpOriginPort = 'HttpOriginPort' in params ? params.HttpOriginPort : null;
        this.HttpsOriginPort = 'HttpsOriginPort' in params ? params.HttpsOriginPort : null;
        this.IPv6Status = 'IPv6Status' in params ? params.IPv6Status : null;

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
 * The configuration information of real-time log delivery to Tencent Cloud CLS
 * @class
 */
class CLSTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the Tencent Cloud CLS log set.
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * The ID of the Tencent Cloud CLS log topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * The region of the Tencent Cloud CLS log set.
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
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;

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
         * List of resources to be preheated. Each element format is similar to the following:
http://www.example.com/example.txt. The parameter value is currently required.
Note: The number of tasks that can be submitted is limited by the quota of a billing package. For details, see [Billing Overview] (https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1).
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * ZoneId set. This parameter is required.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Queries the top N data entries. Maximum value: 1000. Top 10 data entries will be queried if this field is not specified.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters
<li>`country`<br>Filter by the <strong> Country/Region</strong>. The country/region follows <a href="https://baike.baidu.com/item/ISO%203166-1/5269555">ISO 3166</a> specification. </li>
<li>`province`<br>Filter by the <strong>specified province name</strong>. It’s only available when `Area` is `mainland`.</li>
<li>`isp`<br>:   Filter by the specified ISP. It’s only available when `Area` is `mainland`.<br>Values: <br>`2`: CTCC; <br>`26`: CUCC; <br>`1046`: CMCC; <br>`3947`: CTT; <br>`38`: CERNET; <br>`43`: GWBN; <br>`0`: Others.</li>
<li>`domain`<br>: Filter by the specified <strong>sub-domain name</strong>, such as `test.example.com`</li>
<li>`url`:<br>Filter by the <strong>specified URL Path (such as `/content` or `content/test.jpg`. <br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.</li>
<li>`referer`:<br>Filter by the specified <strong>Referer header</strong>, such as `example.com`.<br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.</li>
<li>`resourceType`:<br>Filter by the specified <strong>resource file type</strong>, such as `jpg`, `css`. <br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.</li>
<li>`protocol`:<br> Filter by the specified <strong>HTTP protocol</strong> version <br>Values: <br>`HTTP/1.0`: HTTP 1.0;<br>`HTTP/1.1`: HTTP 1.1;<br>`HTTP/2.0`: HTTP 2.0;<br>`HTTP/3.0`: HTTP 3.0;<br>`WebSocket`: WebSocket.</li>
<li>`socket`:<br>Filter by the specified <strong>HTTP protocol type</strong> <br>Values:<br>`HTTP`: HTTP protocol; <br>`HTTPS`: HTTPS protocol;<br>`QUIC`: QUIC protocol.
<li>`statusCode`:<br> Filter by the <strong> Status Code</strong><br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.<br>Values:<br>1XX: Status code of type 1xx <br>100: 100 status code <br>101: 101 status code <br>102: 102 status code <br>2XX: Status code of type 2xx <br>200: 200 status code <br>201: 201 status code <br>202: 202 status code <br>203: 203 status code <br>204: 204 status code <br>205: 205 status code <br>206: 206 status code <br>207: 207 status code <br>3XX: Status code of type 3xx <br>300: 300 status code <br>301: 301 status code <br>302: 302 status code <br>303: 303 status code <br>304: 304 status code <br>305: 305 status code <br>307: 307 status code <br>4XX: Status code of type 4xx <br>400: 400 status code <br>401: 401 status code <br>402: 402 status code <br>403: 403 status code <br>404: 404 status code <br>405: 405 status code <br>406: 406 status code <br>407: 407 status code <br>408: 408 status code <br>409: 409 status code <br>410: 410 status code <br>411: 411 status code <br>412: 412 status code <br>412: 413 Status Code <br>414: 414 status code <br>415: 415 status code <br>416: 416 status code <br>417: 417 status code <br>422: 422 status code <br>423: 423 status code <br>424: 424 status code <br>426: 426 status code <br>451: 451 status code <br>5XX: Status code of type 5xx <br>500: 500 status code <br>501: 501 status code <br>502:502 status code <br>503: 503 status code <br>504: 504 status code <br>505: 505 status code <br>506: 506 status code <br>507: 507 status code <br>510: 510 status code <br>514: 514 status code <br>544: 544 Status Code. </li>
<li>`browserType`:<br>Filter by the specified <strong>browser type</strong>. <br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.</li><br>Values: <br>`Firefox`: Firefox browser; <br>`Chrome`: Chrome browser; <br>`Safari`: Safari browser; <br>`MicrosoftEdge`: Microsoft Edge browser; <br>`IE`: IE browser; <br>`Opera`: Opera browser; <br>`QQBrowser`: QQ browser; <br>`LBBrowser`: LB browser; <br>`MaxthonBrowser`: Maxthon browser; <br>`SouGouBrowser`: Sogou browser; <br>`BIDUBrowser`: Baidu browser; <br>`TaoBrowser`: Tao browser; <br>`UBrowser`: UC browser; <br>`Other`: Other browsers; <br>`Empty`: The browser type is not specified; <br>`Bot`: Web crawler.</li>
<li>`deviceType`:<br>Filter by the <strong>device type</strong>.<br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.<br>Values:<br>`TV`: TV; <br>`Tablet`: Tablet;<br>`Mobile`: Mobile phone; <br>`Desktop`: Desktop device;<br>`Other`: Other device;<br>`Empty`: Device type not specified.</li>
<li>`operatingSystemType`:<br>Filter by the <strong>operating system</strong>.<br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.<br>Values: <br>`Linux`: Linux OS; <br>`MacOS`: Mac OS;<br>`Android`: Android OS;<br>`IOS`: iOS OS;<br>`Windows`: Windows OS;<br>`NetBSD`: NetBSD OS;<br>`ChromiumOS`: Chromium OS; <br>`Bot`: Web crawler:<br>`Other`: Other OS;   <br>`Empty`: The OS is not specified.</li>
<li>`tlsVersion`:<br>Filter by the <strong>TLS version</strong>. <br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.<br>Values: <br>`TLS1.0`: TLS 1.0;<br>`TLS1.1`: TLS 1.1; <br>`TLS1.2`: TLS 1.2;<br>`TLS1.3`: TLS 1.3.</li>
<li>`ipVersion`<br>Filter by the <strong>specified IP version. <br>Values: <br>`4`: IPv4; <br>`6`: IPv6.
<li>`tagKey`<br>Filter by the <strong>Tag Key</strong>. </li>
<li>`tagValue`<br>Filter by the <strong>Tag Value</strong>. </li>
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
 * DescribeAccelerationDomains response structure.
 * @class
 */
class DescribeAccelerationDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total of matched alias domain names.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information of all matched acceleration domain names
         * @type {Array.<AccelerationDomain> || null}
         */
        this.AccelerationDomains = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyL4Proxy response structure.
 * @class
 */
class ModifyL4ProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Environment information.
 * @class
 */
class EnvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID.
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Environment type. Valid values: 
<li>production: Production environment.</li><li> staging: Test environment. </li>
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * Environment status. Valid values: 
<li>creating: Being created.</li>
<li>running: The environment is stable, with version changes allowed.</li>
<li>version_deploying: The version is currently being deployed, with no more changes allowed. </li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Effective scope of the configuration in the current environment. Valid values: 
<li>ALL: It takes effect on the entire network when EnvType is set to production.</li>
<li>It returns the IP address of the test node for host binding during testing when EnvType is set to staging. </li>
         * @type {Array.<string> || null}
         */
        this.Scope = null;

        /**
         * For the effective versions of each configuration group in the current environment, there are two possible scenarios based on the value of Status: 
<li>When Status is set to version_deploying, the returned value of this field represents the previously effective version. In other words, during the deployment of the new version, the effective version is the one that was in effect before any changes were made.</li>
<li>When Status is set to running, the value returned by this field is the currently effective version. </li>
         * @type {Array.<ConfigGroupVersionInfo> || null}
         */
        this.CurrentConfigGroupVersionInfos = null;

        /**
         * Creation time. The time format follows the ISO 8601 standard and is represented in Coordinated Universal Time (UTC).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time. The time format follows the ISO 8601 standard and is represented in Coordinated Universal Time (UTC).
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Scope = 'Scope' in params ? params.Scope : null;

        if (params.CurrentConfigGroupVersionInfos) {
            this.CurrentConfigGroupVersionInfos = new Array();
            for (let z in params.CurrentConfigGroupVersionInfos) {
                let obj = new ConfigGroupVersionInfo();
                obj.deserialize(params.CurrentConfigGroupVersionInfos[z]);
                this.CurrentConfigGroupVersionInfos.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
         * ZoneId set. This parameter is required.
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
 * The configuration information of real-time log delivery to an AWS S3 compatible bucket
 * @class
 */
class S3 extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL without bucket name or path, for example: `https://storage.googleapis.com`, `https://s3.ap-northeast-2.amazonaws.com`, and `https://cos.ap-nanjing.myqcloud.com`.
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * The region where the bucket is located, for example: `ap-northeast-2`.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The bucket name and log storage directory, for example: `your_bucket_name/EO-logs/`. If the directory does not exist in the bucket, it will be created automatically.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * The Access Key ID used to access the bucket.
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * The secret key used to access the bucket.
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * The data compress type. Valid values:<li>gzip: gzip compression.</li>If this field is not filled in, compression is disabled.
         * @type {string || null}
         */
        this.CompressType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.CompressType = 'CompressType' in params ? params.CompressType : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribePrefetchTasks request structure.
 * @class
 */
class DescribePrefetchTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ZoneId. The parameter is required.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Start time of the query. Either time or job-id is required.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query. Either time or job-id is required.
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
         * Filtering condition. The maximum value of Filters.Values is 20. Detailed filtering conditions: 
<li>job-id 
Filter based on task ID.  job-id format: 1379afjk91u32h. Multiple values are not supported, Fuzzy search is not supported. </li>
<li>target
Filter based on target resource information. target format: http://www.qq.com/1.txt. Multiple values are not supported, Fuzzy search is not supported. </li>
<li>domains 
Filter based on domain name. domains format: www.qq.com. Fuzzy search is not supported.</li>
<li>statuses
Filter based on task status.  Fuzzy search is not supported. Options:<br> processing: Processing<br> success: Success<br> failed: Failure<br> timeout: Timeout</li>
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
         * Feature name. For details, see [DescribeRulesSetting](https://intl.cloud.tencent.com/document/product/1552/80618?from_cn_redirect=1) API
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
 * DescribeTimingL7AnalysisData response structure.
 * @class
 */
class DescribeTimingL7AnalysisDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of L7 traffic data recorded over time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TimingDataRecord> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The parameter value type.
<li>`CHOICE`: `If Type=CHOICE`, choose a value in `ChoiceValue`.</li>
<li>`TOGGLE`: If `Type=TOGGLE`, choose `on` or `off` from `ChoicesValue`.</li>
<li>`OBJECT`: Specify an object. If this is specified, `ChoiceProperties` includes attributes of the specified object. See [Example 2. Create a rule with Type=OBJECT](https://intl.cloud.tencent.com/document/product/1552/80622?from_cn_redirect=1#.E7.A4.BA.E4.BE.8B2-.E5.8F.82.E6.95.B0.E4.B8.BA-OBJECT-.E7.B1.BB.E5.9E.8B.E7.9A.84.E5.88.9B.E5.BB.BA)</li>
<li>`CUSTOM_NUM`: (Integer) Custom value.</li>
<li>`CUSTOM_STRING`: (String) Custom value.</li>
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
         * The parameter name. For details, see [DescribeRulesSetting](https://intl.cloud.tencent.com/document/product/1552/80618?from_cn_redirect=1).
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
 * Services referencing this origin group
 * @class
 */
class OriginGroupReference extends  AbstractModel {
    constructor(){
        super();

        /**
         * Services referencing the origin group. Values:
<li>`AccelerationDomain`: Acceleration domain name</li>
<li>`RuleEngine`: Rules engine</li>
<li>`Loadbalance`: Load balancer</li>
<li>`ApplicationProxy`: L4 proxy</li>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * ID of the instances referencing the origin group
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Name of the instance referencing the origin group
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

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
 * ModifyCustomErrorPage response structure.
 * @class
 */
class ModifyCustomErrorPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Version information about the configuration group.
 * @class
 */
class ConfigGroupVersionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version ID.
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * Version No.
         * @type {string || null}
         */
        this.VersionNumber = null;

        /**
         * Configuraration group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Configuration group type. Valid values: 
<li>l7_acceleration: L7 acceleration configuration group. </li>
<li>edge_functions: Edge function configuration group. </li>
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Version description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Version status. Valid values: 
<li>creating: Being created.</li>
<li>inactive: Not effective.</li>
<li>active: Effective. </li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Version creation time. The time format follows the ISO 8601 standard and is represented in Coordinated Universal Time (UTC).
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
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.VersionNumber = 'VersionNumber' in params ? params.VersionNumber : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * VerifyOwnership response structure.
 * @class
 */
class VerifyOwnershipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of ownership verification
<li>`success`: Verification passed</li>
<li>`fail`: Verification failed</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * When the ownership verification result is `fail`, this field returns the reason of failure.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Result = 'Result' in params ? params.Result : null;
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

        /**
         * Quota for a resource. Values:
<li>`zone`: Quota for sites</li>
<li>`custom-rule`: Quota for custom rules</li>
<li>`rate-limiting-rule`: Quota for rate limiting rules</li>
<li>`l4-proxy-instance`: Quota for L4 proxy instances </li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Pack = null;

        /**
         * ID of the L4 proxy instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The protection specification.
Values: <li> `cm_30G`: 30 Gbps base protection bandwidth in **Chinese mainland** service area</li><li> `cm_60G`: 60 Gbps base protection bandwidth in **Chinese mainland** service area</li><li> `cm_100G`: 100 Gbps base protection bandwidth in **Chinese mainland** service area</li><li> `anycast_300G`: 300 Gbps Anycast-based protection in **Global (MLC)** service area</li><li> `anycast_unlimited`: Unlimited Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> `cm_30G_anycast_300G`: 30 Gbps base protection bandwidth in **Chinese mainland** service area and 300 Gbps Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> `cm_30G_anycast_unlimited`: 30 Gbps base protection bandwidth in **Chinese mainland** service area and unlimited Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> cm_60G_anycast_300G`: 60 Gbps base protection bandwidth in **Chinese mainland** service area and 300 Gbps Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> cm_60G_anycast_unlimited`: 60 Gbps base protection bandwidth in **Chinese mainland** service area and unlimited Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> `cm_100G_anycast_300G`: 100 Gbps base protection bandwidth in **Chinese mainland** service area and 300 Gbps Anycast-based protection bandwidth in **Global (MLC)** service area</li><li> cm_100G_anycast_unlimited`: 100 Gbps base protection bandwidth in **Chinese mainland** service area and unlimited Anycast-based protection bandwidth in **Global (MLC)** service area </li>
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Feature execution conditions.
Note: If any condition in the array is met, the feature will run.
         * @type {Array.<RuleAndConditions> || null}
         */
        this.Conditions = null;

        /**
         * Feature to be executed.
Note: Actions and SubRules cannot both be empty.
         * @type {Array.<Action> || null}
         */
        this.Actions = null;

        /**
         * The nested rule.
Note: Actions and SubRules cannot both be empty.
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
         * ZoneId set. This parameter is required.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of L4 proxy instance IDs.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 300.
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
 * Billing data filter criteria.
 * @class
 */
class BillingDataFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Parameter value.
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
 * DeleteCustomErrorPage response structure.
 * @class
 */
class DeleteCustomErrorPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeTimingL7CacheData response structure.
 * @class
 */
class DescribeTimingL7CacheDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of cached L7 time-series data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TimingDataRecord> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Details of sites.
         * @type {Array.<Zone> || null}
         */
        this.Zones = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteCustomErrorPage request structure.
 * @class
 */
class DeleteCustomErrorPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Custom response page ID.
         * @type {string || null}
         */
        this.PageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PageId = 'PageId' in params ? params.PageId : null;

    }
}

/**
 * The custom log field in a real-time log delivery task
 * @class
 */
class CustomField extends  AbstractModel {
    constructor(){
        super();

        /**
         * Extracts data from specified positions in HTTP requests and responses. Valid values:
<li>ReqHeader: Extract a specified field value from an HTTP request header;</li>
<li>RspHeader: Extract a specified field value from an HTTP response header;</li>
<li>cookie: Extract a specified field value from a cookie.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Indicates the name of the parameter from which a value needs to be extracted, such as Accept-Language.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Indicates whether to deliver this field. If not filled in, this field will not be delivered.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Enabled = null;

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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

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
         * Managed rule. If the parameter is null or not filled, the configuration last set will be used by default.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {WafConfig || null}
         */
        this.WafConfig = null;

        /**
         * Rate limiting. If the parameter is null or not filled, the configuration last set will be used by default.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {RateLimitConfig || null}
         */
        this.RateLimitConfig = null;

        /**
         * Custom rule. If the parameter is null or not filled, the configuration last set will be used by default.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {AclConfig || null}
         */
        this.AclConfig = null;

        /**
         * Bot configuration. If the parameter is null or not filled, the configuration last set will be used by default.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {BotConfig || null}
         */
        this.BotConfig = null;

        /**
         * Switch setting of the 7-layer protection. If the parameter is null or not filled, the configuration last set will be used by default.Note: This field may return null, indicating that no valid value can be obtained.
         * @type {SwitchConfig || null}
         */
        this.SwitchConfig = null;

        /**
         * Basic access control. If the parameter is null or not filled, the configuration last set will be used by default.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {IpTableConfig || null}
         */
        this.IpTableConfig = null;

        /**
         * Exception rule configuration. If the parameter is null or not filled, the configuration last set will be used by default.Note: This field may return null, indicating that no valid value can be obtained.
         * @type {ExceptConfig || null}
         */
        this.ExceptConfig = null;

        /**
         * Custom block page settings. If the parameter is null or not filled, the configuration last set will be used by default.Note: This field may return null, indicating that no valid value can be obtained.
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
         * Settings for slow attack defense. If the parameter is null or not filled, the configuration last set will be used by default.Note: This field may return null, indicating that no valid value can be obtained.
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
 * The L7 log details
 * @class
 */
class L4OfflineLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * L4 proxy instance ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Log query area. Valid values:
<li>`mainland`: Chinese mainland;</li>
<li>`overseas`: Global (outside the Chinese mainland). </li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Log packet name.
         * @type {string || null}
         */
        this.LogPacketName = null;

        /**
         * Log download address.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * (Disused) Log packaging time. 
         * @type {number || null}
         */
        this.LogTime = null;

        /**
         * Start time of log packaging.
         * @type {string || null}
         */
        this.LogStartTime = null;

        /**
         * End time of the log package.
         * @type {string || null}
         */
        this.LogEndTime = null;

        /**
         * Log size (in bytes).
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.LogPacketName = 'LogPacketName' in params ? params.LogPacketName : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.LogStartTime = 'LogStartTime' in params ? params.LogStartTime : null;
        this.LogEndTime = 'LogEndTime' in params ? params.LogEndTime : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * ModifyPlan request structure.
 * @class
 */
class ModifyPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Plan ID, formatted as edgeone-2unuvzjmmn2q.
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * Auto-renewal configuration item in a prepaid plan. If auto-renewal is enabled, the plan will be automatically renewed one day before it expires. This feature is only available for Personal, Basic, and Standard Edition Plans. If this field is not specified, the original configuration will be retained.
         * @type {RenewFlag || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

        if (params.RenewFlag) {
            let obj = new RenewFlag();
            obj.deserialize(params.RenewFlag)
            this.RenewFlag = obj;
        }

    }
}

/**
 * Custom error code page structure.
 * @class
 */
class CustomErrorPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom error page ID.
         * @type {string || null}
         */
        this.PageId = null;

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Custom error page name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Custom error page type.
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * Custom error page description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Custom error page content.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Custom error page reference.
         * @type {Array.<ErrorPageReference> || null}
         */
        this.References = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Content = 'Content' in params ? params.Content : null;

        if (params.References) {
            this.References = new Array();
            for (let z in params.References) {
                let obj = new ErrorPageReference();
                obj.deserialize(params.References[z]);
                this.References.push(obj);
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
 * ModifyL4ProxyRules request structure.
 * @class
 */
class ModifyL4ProxyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer 4 proxy instance ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * List of forwarding rules. A single request supports up to 200 forwarding rules.
Note: When L4ProxyRule is used here, RuleId is a required field; Protocol, PortRange, OriginType, OriginValue, OriginPortRange, ClientIPPassThroughMode, SessionPersist, SessionPersistTime, and RuleTag are all optional fields. No modification is made when no value is specified for those fields. Status should not be filled.
         * @type {Array.<L4ProxyRule> || null}
         */
        this.L4ProxyRules = null;

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

        if (params.L4ProxyRules) {
            this.L4ProxyRules = new Array();
            for (let z in params.L4ProxyRules) {
                let obj = new L4ProxyRule();
                obj.deserialize(params.L4ProxyRules[z]);
                this.L4ProxyRules.push(obj);
            }
        }

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
 * Status of domain names bound with this template.
 * @class
 */
class EntityStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name. Only subdomain names are supported.
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Instance configuration status. Values:
<li>`online`: Configuration has taken effect;</li><li>`fail`: Configuration failed;</li><li>`process`: Configuration is being delivered. </li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Message returned after the operation completed. 
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
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;

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
 * Common action parameter of a rule engine condition
 * @class
 */
class RuleNormalActionParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The parameter name. For details, see [DescribeRulesSetting](https://intl.cloud.tencent.com/document/product/1552/80618?from_cn_redirect=1).
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
 * Private authentication parameters for Cloud Object Storage origin server
 * @class
 */
class PrivateParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the private authentication parameter. Valid values:
<li>AccessKeyId: Access Key ID for authentication;</li>
<li>SecretAccessKey: Secret Access Key for authentication;</li>
<li>SignatureVersion: Authentication version, v2 or v4;</li>
<li>Region: The region of the storage bucket.</li>
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
 * CreateOriginGroup request structure.
 * @class
 */
class CreateOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Origin group name. It can contain 1 to 200 characters ([a-z], [A-Z], [0-9] and [_-]).
         * @type {string || null}
         */
        this.Name = null;

        /**
         * (Required) Origin group type. Values:
<li>`GENERAL`: General origin groups. It supports IPs and domain names. It can be referenced by DNS, Rule Engine, Layer 4 Proxy and General LoadBalancer. </li>
<li>`HTTP`: HTTP-specific origin groups. It supports IPs/domain names and object storage buckets. It can be referenced by acceleration domain names, rule engines and HTTP LoadBalancer. It cannot be referenced by L4 proxies. </li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * (Required) Origins in the origin group.
         * @type {Array.<OriginRecord> || null}
         */
        this.Records = null;

        /**
         * Host header used for origin-pull. It only works when `Type=HTTP`. The `HostHeader` specified in `RuleEngine` takes a higher priority over this configuration.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new OriginRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateSharedCNAME response structure.
 * @class
 */
class CreateSharedCNAMEResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared CNAME. Format: '<Custom prefix>+<A 12-character random string in ZoneId>+share.dnse[0-5].com'.
         * @type {string || null}
         */
        this.SharedCNAME = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SharedCNAME = 'SharedCNAME' in params ? params.SharedCNAME : null;
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyRealtimeLogDeliveryTask response structure.
 * @class
 */
class ModifyRealtimeLogDeliveryTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Information of the acceleration domain name certificate.
 * @class
 */
class AccelerationDomainCertificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate configuration mode. Values: <li>`disable`: Do not configure the certificate;</li><li>`eofreecert`: Use a free certificate provided by EdgeOne; </li><li>`sslcert`: Configure an SSL certificate.</li>
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * List of certificates
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<CertificateInfo> || null}
         */
        this.List = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new CertificateInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * DescribeSecurityTemplateBindings request structure.
 * @class
 */
class DescribeSecurityTemplateBindingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site to query
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * ID of the policy template to query.
         * @type {Array.<string> || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeCustomErrorPages response structure.
 * @class
 */
class DescribeCustomErrorPagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of custom response pages.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Custom response page data list.
         * @type {Array.<CustomErrorPage> || null}
         */
        this.ErrorPages = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ErrorPages) {
            this.ErrorPages = new Array();
            for (let z in params.ErrorPages) {
                let obj = new CustomErrorPage();
                obj.deserialize(params.ErrorPages[z]);
                this.ErrorPages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * RenewPlan request structure.
 * @class
 */
class RenewPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Plan ID, formatted as edgeone-2unuvzjmmn2q.
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * Renewal plan duration, unit: month. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether to automatically use a voucher. Valid values: <li>true: Yes;</li><li>false: No. </li> If this field is not specified, the default value 'false' will be used.
         * @type {string || null}
         */
        this.AutoUseVoucher = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoUseVoucher = 'AutoUseVoucher' in params ? params.AutoUseVoucher : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyL4ProxyStatus response structure.
 * @class
 */
class ModifyL4ProxyStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Information required for verifying via a file. It's applicable to sites connected via CNAMEs.
 * @class
 */
class FileVerification extends  AbstractModel {
    constructor(){
        super();

        /**
         * EdgeOne obtains the file verification information in the format of "Scheme + Host + URL Path", (e.g. https://www.example.com/.well-known/teo-verification/z12h416twn.txt). This field is the URL path section of the URL you need to create.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Content of the verification file. The contents of this field need to be filled into the text file returned by `Path`.
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
        this.Path = 'Path' in params ? params.Path : null;
        this.Content = 'Content' in params ? params.Content : null;

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
         * Subdomain/application name.

Note: When both this parameter and the TemplateId parameter are specified, this parameter will not take effect. Do not specify this parameter and the TemplateId parameter at the same time.
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * Specifies the policy template ID, or the site's global policy.
- To configure a policy template, specify the policy template ID.
- To configure the site's global policy, use the @ZoneLevel@Domain parameter value.

Note: When this parameter is used, the Entity parameter will not take effect. Do not use this parameter and the Entity parameter at the same time.
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The action. Values:
<li>`drop`: Block the request</li>
<li>`monitor`: Observe</li>
<li>`trans`: Allow</li>
<li>`redirect`: Redirect the request</li>
<li>`page`: Return the specified page</li>
<li>`alg`: JavaScript challenge</li>
<li>`captcha`: Managed challenge</li>
<li>`random`: Handle the request randomly by the weight</li>
<li>`silence`: Keep the connection but do not response to the client</li>
<li>`shortdelay`: Add a short latency period</li>
<li>`longdelay`: Add a long latency period</li>
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
         * Rule ID, which is only used as an output parameter.
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
This parameter is left empty by default.
         * @type {Array.<string> || null}
         */
        this.FreqFields = null;

        /**
         * The update time, which is only used as an output parameter.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Query scope. Values:
<li>`source_to_eo`: (Response) Traffic going from the origin to EdgeOne.</li>
<li>`client_to_eo`: (Request) Traffic going from the client to EdgeOne.</li>
Default: `source_to_eo`.
         * @type {Array.<string> || null}
         */
        this.FreqScope = null;

        /**
         * Name of the custom return page. It's required when `Action=page`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * ID of custom response. The ID can be obtained via the `DescribeCustomErrorPages` API. It's required when `Action=page`.	
         * @type {string || null}
         */
        this.CustomResponseId = null;

        /**
         * The response code to trigger the return page. It's required when `Action=page`. Value: 100-600. 3xx response codes are not supported. Default value: 567.
         * @type {number || null}
         */
        this.ResponseCode = null;

        /**
         * The redirection URL. It's required when `Action=redirect`.
         * @type {string || null}
         */
        this.RedirectUrl = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.CustomResponseId = 'CustomResponseId' in params ? params.CustomResponseId : null;
        this.ResponseCode = 'ResponseCode' in params ? params.ResponseCode : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

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
         * Node cache purge method, with values:
<li>invalidate: Marks as expired. A back-to-origin validation is triggered upon user request, sending an HTTP conditional request with If-None-Match and If-Modified-Since headers. If the origin server responds with 200, the node will fetch new resources from the origin and update the cache; if the origin server responds with 304, the cache will not be updated;</li>
<li>delete: Directly deletes the node's cache, triggering a resource fetch from the origin upon user request.</li>
Note: This field may return null, which indicates a failure to obtain a valid value.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Status. Valid values:
<li>processing: Processing;</li>
<li>success: Succeeded;</li>
<li>failed: Failed;</li>
<li>timeout: Timed out. </li>
         * @type {string || null}
         */
        this.Status = null;

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
        this.Target = 'Target' in params ? params.Target : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeL4ProxyRules response structure.
 * @class
 */
class DescribeL4ProxyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total count of forwarding rules.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of forwarding rules.	
         * @type {Array.<L4ProxyRule> || null}
         */
        this.L4ProxyRules = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.L4ProxyRules) {
            this.L4ProxyRules = new Array();
            for (let z in params.L4ProxyRules) {
                let obj = new L4ProxyRule();
                obj.deserialize(params.L4ProxyRules[z]);
                this.L4ProxyRules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Origin server group ID. This parameter is required.
         * @type {string || null}
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
 * The condition that makes up an access control rule
 * @class
 */
class AclCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters: 
<li>`host`: Request domain name;</li>
<li>`sip`: Client IP;</li>
<li>`ua`: User-Agent;</li>
<li>`cookie`: Cookie;</li>
<li>`cgi`: CGI script;</li>
<li>`xff`: XFF header;</li></li>
<li>`url`: Request URL;<li></li>
<li>`accept`: Request content type;</li>
<li>`method`: Request method<;/li>
<li>`header`: Request header;</li>
<li>`app_proto`: Application layer protocol;</li>
<li>`sip_proto`: Network layer protocol;</li>
<li>`uabot`: UA rules (only available in custom bot rules);</li>
<li>`idcid`: IDC rules (only available in custom bot rules);</li>
<li>`sipbot`: Search engine rules (only available in custom bot rules);</li>
<li>`portrait`: Client reputation (only available in custom bot rules);</li>
<li>`header_seq`: Header sequence (only available in custom bot rules);</li>
<li>`hdr`: Request body (only available in custom Web protection rules). </li>
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
 * Details of L7 logs.
 * @class
 */
class L7OfflineLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Log query area. Valid values:
<li>`mainland`: Chinese mainland;</li>
<li>`overseas`: Global (outside the Chinese mainland). </li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Log packet name.	
         * @type {string || null}
         */
        this.LogPacketName = null;

        /**
         * Log download address.	
         * @type {string || null}
         */
        this.Url = null;

        /**
         * (Disused) Log packaging time. 
         * @type {number || null}
         */
        this.LogTime = null;

        /**
         * Start time of log packaging.
         * @type {string || null}
         */
        this.LogStartTime = null;

        /**
         * End time of the log package.
         * @type {string || null}
         */
        this.LogEndTime = null;

        /**
         * Original log size (in bytes).
         * @type {number || null}
         */
        this.Size = null;

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
        this.LogPacketName = 'LogPacketName' in params ? params.LogPacketName : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.LogStartTime = 'LogStartTime' in params ? params.LogStartTime : null;
        this.LogEndTime = 'LogEndTime' in params ? params.LogEndTime : null;
        this.Size = 'Size' in params ? params.Size : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Origin server type. Valid values:<li>custom: Manually added;</li><li>loadbalancer: Cloud Load Balancer;</li><li>origins: Origin server group.</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Details of the origin server:
<li>When OriginType is custom, it indicates one or more origin servers, such as ["8.8.8.8","9.9.9.9"] or OriginValue=["test.com"];</li><li>When OriginType is loadbalancer, it indicates a single Cloud Load Balancer, such as ["lb-xdffsfasdfs"];</li>
<li>When OriginType is origins, it requires one and only one element, which represents an origin server group ID, such as ["origin-537f5b41-162a-11ed-abaa-525400c5da15"].</li>
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

        /**
         * Rule tag.
Note: This field may return·`null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleTag = null;

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
        this.RuleTag = 'RuleTag' in params ? params.RuleTag : null;

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
         * Site ID.
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
u200c<li>`active`: The name server is switched to EdgeOne.</li>
u200c<li>`pending`: The name server is not switched.</li>
u200c<li>`moved`: The name server is changed to other service providers.</li>
u200c<li>`deactivated`: The site is blocked.</li>
<li>`initializing`: The site is not bound with any plan. </li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Site connection method, valid values:
<li>full: Connect via NS;</li>
<li>partial: Connect via CNAME;</li>
<li>noDomainAccess: Connect without using a domain name;</li>
<li>vodeo: Connect by default when VODEO is enabled.</li>
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
         * Lock status. Values: <li>`enable`: Normal. Modification is allowed.</li><li>`disable`: Locked. Modification is not allowed.</li><li>`plan_migrate`: Adjusting the plan. Modification is not allowed.</li> 
         * @type {string || null}
         */
        this.LockStatus = null;

        /**
         * Ownership verification information
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {OwnershipVerification || null}
         */
        this.OwnershipVerification = null;

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

        if (params.OwnershipVerification) {
            let obj = new OwnershipVerification();
            obj.deserialize(params.OwnershipVerification)
            this.OwnershipVerification = obj;
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * BindSecurityTemplateToEntity response structure.
 * @class
 */
class BindSecurityTemplateToEntityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyL4ProxyRules response structure.
 * @class
 */
class ModifyL4ProxyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeConfigGroupVersionDetail request structure.
 * @class
 */
class DescribeConfigGroupVersionDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Version ID.
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * ModifyPlan response structure.
 * @class
 */
class ModifyPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * The configuration details of the block page
 * @class
 */
class DropPageDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the block page. Specify `0` to use the default block page. 
(Disused) If 0 is passed, the default block page will be used.
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * The HTTP status code to trigger the block page. Range: 100-600, excluding 3xx codes. Code 566: Requests blocked by managed rules. Code 567: Requests blocked by web security rules (except managed rules).
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
<li>`page`: Return the specified page.</li>

         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of custom response. The ID can be obtained via the `DescribeCustomErrorPages` API. It's required when `Type=page`.
         * @type {string || null}
         */
        this.CustomResponseId = null;

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
        this.CustomResponseId = 'CustomResponseId' in params ? params.CustomResponseId : null;

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
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * The CNAME status. Values:
<li>`active`: Activated</li>
<li>`moved`: Not activated </li>
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
        this.RecordName = 'RecordName' in params ? params.RecordName : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;

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
u200c<li>`default`: Default certificate</li>
u200c<li>`upload`: Custom certificate</li>
u200c<li>`managed`: Tencent Cloud-managed certificate</li>
Note: This field may return·null, indicating that no valid values can be obtained.
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
         * Limit on paginated queries. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter conditions. Up to 20 values for each filter. If this parameter is not filled in, the information of all sites under the current account is returned. Detailed filtering conditions are as follows:
<li>`zone-name`: Site name </li><li>`zone-id`: Site ID, such as zone-2noz78a8ev6k</li><li>`status`: Site status </li><li>`tag-key`: Tag key </li><li>`tag-value`: Tag value </li>Only `zone-name` supports fuzzy query.
         * @type {Array.<AdvancedFilter> || null}
         */
        this.Filters = null;

        /**
         * Sort the returned results according to this field. Values include:
<li>`type`: Connection mode</li>
<li>`area`: Acceleration region</li>
<li>`create-time`: Creation time</li>
<li>`zone-name`: Site name</li>
<li>`use-time`: Last used time</li>
<li>`active-status` Effective status</li> Default value: `create-time`
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sort direction. If the field value is a number, sort by the numeric value. If the field value is text, sort by the ascill code. Values include:
<li>`asc`: From the smallest to largest</li>
<li>`desc`: From the largest to smallest.</li>Default value: `desc`
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
         * The origin type. Values:
<li>`IP_DOMAIN`: IPv4/IPv6 address or domain name</li>
<li>`COS`: COS bucket address</li>
<li>`AWS_S3`: AWS S3 bucket address
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The origin record ID.
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * Weight of an origin. Range: 0-100. If it is not specified, a random weight is assigned. If `0` is passed in, there is no traffic scheduled to this origin.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Whether to enable private authentication. It is valid when `OriginType=COS/AWS_S3`. Values:
<li>`true`: Yes.</li>
<li>`false`: No.</li>Default: `false`.

         * @type {boolean || null}
         */
        this.Private = null;

        /**
         * Private authentication parameters. This field is valid when `Private=true`.
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
        this.Type = 'Type' in params ? params.Type : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
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
 * BindSharedCNAME response structure.
 * @class
 */
class BindSharedCNAMEResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteSharedCNAME request structure.
 * @class
 */
class DeleteSharedCNAMERequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site to which the shared CNAME belongs.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The shared CNAME to be deleted
         * @type {string || null}
         */
        this.SharedCNAME = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.SharedCNAME = 'SharedCNAME' in params ? params.SharedCNAME : null;

    }
}

/**
 * ModifyRealtimeLogDeliveryTask request structure.
 * @class
 */
class ModifyRealtimeLogDeliveryTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The ID of the real-time log delivery task.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The name of the real-time log delivery task, which is a combination of numbers, English letters, - and _, containing up to 200 characters. If this field is not filled in, the original configuration will be retained.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * The status of the real-time log delivery task. Valid values:
<li>`enabled`: Enabled;</li>
<li>`disabled`: Disabled.</li>If this field is not filled in, the original configuration will be retained.
         * @type {string || null}
         */
        this.DeliveryStatus = null;

        /**
         * The list of entities (Layer 7 domains or Layer 4 proxy instances) corresponding to the real-time log delivery task. Valid value examples:
<li>Layer 7 domain: domain.example.com;</li>
<li>Layer 4 proxy instance: sid-2s69eb5wcms7.</li>If this field is not filled in, the original configuration will be retained.
         * @type {Array.<string> || null}
         */
        this.EntityList = null;

        /**
         * The list of predefined fields for delivery. If this field is not filled in, the original configuration will be retained.
         * @type {Array.<string> || null}
         */
        this.Fields = null;

        /**
         * The list of custom fields for delivery, supporting extracting specified field values from HTTP request headers, response headers, and cookies. Each custom field name must be unique and the maximum number of fields is 200. If this field is not filled in, the original configuration will be retained.
         * @type {Array.<CustomField> || null}
         */
        this.CustomFields = null;

        /**
         * Log delivery filter conditions. If this field is not filled in, all logs will be delivered.
         * @type {Array.<DeliveryCondition> || null}
         */
        this.DeliveryConditions = null;

        /**
         * The sampling ratio in permille. Value range: 1 to 1000. For example, 605 represents a sampling ratio of 60.5%. If this field is not filled in, the original configuration will be retained.
         * @type {number || null}
         */
        this.Sample = null;

        /**
         * Output format for log delivery. If this field is not specified, the original configuration will be retained.Specifically, when TaskType is set to cls, the value of LogFormat.FormatType can only be json, and other parameters in LogFormat will be ignored. It is recommended not to input LogFormat.
         * @type {LogFormat || null}
         */
        this.LogFormat = null;

        /**
         * The configuration information of the custom HTTP service. If this field is not filled in, the original configuration will be retained.
         * @type {CustomEndpoint || null}
         */
        this.CustomEndpoint = null;

        /**
         * The configuration information of the AWS S3-compatible bucket. If this field is not filled in, the original configuration will be retained.
         * @type {S3 || null}
         */
        this.S3 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.DeliveryStatus = 'DeliveryStatus' in params ? params.DeliveryStatus : null;
        this.EntityList = 'EntityList' in params ? params.EntityList : null;
        this.Fields = 'Fields' in params ? params.Fields : null;

        if (params.CustomFields) {
            this.CustomFields = new Array();
            for (let z in params.CustomFields) {
                let obj = new CustomField();
                obj.deserialize(params.CustomFields[z]);
                this.CustomFields.push(obj);
            }
        }

        if (params.DeliveryConditions) {
            this.DeliveryConditions = new Array();
            for (let z in params.DeliveryConditions) {
                let obj = new DeliveryCondition();
                obj.deserialize(params.DeliveryConditions[z]);
                this.DeliveryConditions.push(obj);
            }
        }
        this.Sample = 'Sample' in params ? params.Sample : null;

        if (params.LogFormat) {
            let obj = new LogFormat();
            obj.deserialize(params.LogFormat)
            this.LogFormat = obj;
        }

        if (params.CustomEndpoint) {
            let obj = new CustomEndpoint();
            obj.deserialize(params.CustomEndpoint)
            this.CustomEndpoint = obj;
        }

        if (params.S3) {
            let obj = new S3();
            obj.deserialize(params.S3)
            this.S3 = obj;
        }

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
 * DestroyPlan request structure.
 * @class
 */
class DestroyPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Plan ID, in the format of edgeone-2wdo315m2y4c.
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
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

    }
}

/**
 * CreatePlan request structure.
 * @class
 */
class CreatePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of plan subscribed to. Valid values:<li>personal: Personal Edition Plan, prepaid;</li><li>basic: Basic Edition Plan, prepaid;</li><li>standard: Standard Edition Plan, prepaid;</li><li>enterprise: Enterprise Edition Plan, post-paid. </li>When subscribing to a prepaid plan, ensure there is sufficient balance in the account, as insufficient balance will result in a pending payment order.
For an overview of billing, refer to [Billing Overview](https://intl.cloud.tencent.com/document/product/1552/94156?from_cn_redirect=1).
For differences between plans, refer to [ Comparison of EdgeOne Plan](https://intl.cloud.tencent.com/document/product/1552/94165?from_cn_redirect=1).
         * @type {string || null}
         */
        this.PlanType = null;

        /**
         * Whether to automatically use a voucher. Valid values: <li>true: Yes;</li><li>false: No. </li> This parameter is valid only when PlanType is personal, basic, or standard.
If this field is not specified, the default value 'false' will be used.
         * @type {string || null}
         */
        this.AutoUseVoucher = null;

        /**
         * Parameters for subscribing to prepaid plans. When PlanType is personal, basic, or standard, this parameter can be optionally set to specify the subscription duration and whether to enable auto-renewal for the plan.
If this field is not specified, the default plan duration is 1 month, with auto-renewal disabled.
         * @type {PrepaidPlanParam || null}
         */
        this.PrepaidPlanParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanType = 'PlanType' in params ? params.PlanType : null;
        this.AutoUseVoucher = 'AutoUseVoucher' in params ? params.AutoUseVoucher : null;

        if (params.PrepaidPlanParam) {
            let obj = new PrepaidPlanParam();
            obj.deserialize(params.PrepaidPlanParam)
            this.PrepaidPlanParam = obj;
        }

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
         * IP group content. Only supports IP and IP mask.
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateConfigGroupVersion response structure.
 * @class
 */
class CreateConfigGroupVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version ID.
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
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
         * ZoneId set. This parameter is required.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * List of subdomain names to be queried. All subdomain names will be selected if this field is not specified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 300.
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
 * DescribeRealtimeLogDeliveryTasks response structure.
 * @class
 */
class DescribeRealtimeLogDeliveryTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of real-time log delivery tasks which match the query conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of all real-time log delivery tasks which match the query conditions.
         * @type {Array.<RealtimeLogDeliveryTask> || null}
         */
        this.RealtimeLogDeliveryTasks = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RealtimeLogDeliveryTasks) {
            this.RealtimeLogDeliveryTasks = new Array();
            for (let z in params.RealtimeLogDeliveryTasks) {
                let obj = new RealtimeLogDeliveryTask();
                obj.deserialize(params.RealtimeLogDeliveryTasks[z]);
                this.RealtimeLogDeliveryTasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigGroupVersions response structure.
 * @class
 */
class DescribeConfigGroupVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total versions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Version information list.
         * @type {Array.<ConfigGroupVersionInfo> || null}
         */
        this.ConfigGroupVersionInfos = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ConfigGroupVersionInfos) {
            this.ConfigGroupVersionInfos = new Array();
            for (let z in params.ConfigGroupVersionInfos) {
                let obj = new ConfigGroupVersionInfo();
                obj.deserialize(params.ConfigGroupVersionInfos[z]);
                this.ConfigGroupVersionInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRealtimeLogDeliveryTask response structure.
 * @class
 */
class DeleteRealtimeLogDeliveryTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Match type. Valid values: <li> filename: File name; </li> <li> extension: File extension; </li> <li> host: Host name; </li> <li> full_url: The complete URL path under the current site, which must include the HTTP protocol, host, and path; </li> <li> url: Request for the URL path under the current site; </li><li> client_country: Client country/region;</li> <li> query_string: The query string of the URL requested under the current site; </li> <li> request_header: HTTP request header; </li><li> client_ip: Client IP address. </li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * The parameter values for match types. It is allowed to pass an empty array only when the match type is query_string or request_header and the operator value is Exist or Does Not Exist. The corresponding match types include:
<li> File extension: Extensions like jpg, txt, etc.;</li>
<li> File name: For example, foo in foo.jpg;</li>
<li> All: All requests for domain names under the site; </li>
<li> HOST: The host under the current site, for example, www.maxx55.com;</li>
<li> URL Path: Request for the URL path under the current site, for example, /example;</li>
<li> URL Full: The complete URL request under the current site, which must include the HTTP protocol, host, and path, for example, https://www.maxx55.cn/example;</li>
<li> Client country/region: Country/region codes compliant with the ISO3166 standard;</li>
<li> Query string: The parameter values in the query string of the URL requested under the current site, for example, cn and 1 in lang=cn&version=1; </li>
<li> HTTP request header: The value of the HTTP request header field, for example, zh-CN,zh;q=0.9 in Accept-Language:zh-CN,zh;q=0.9; </li>
<li> Client IP: The client IP address carried by the current request, supporting IPv4, IPv6, and an IP range. </li>
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
         * Note: This field may return 'null', which indicates a failure to obtain a valid value.
         * @type {Array.<TimingDataRecord> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeEnvironments response structure.
 * @class
 */
class DescribeEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total environments.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Environment list.
         * @type {Array.<EnvInfo> || null}
         */
        this.EnvInfos = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.EnvInfos) {
            this.EnvInfos = new Array();
            for (let z in params.EnvInfos) {
                let obj = new EnvInfo();
                obj.deserialize(params.EnvInfos[z]);
                this.EnvInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Action. Values:<li>`monitor`: Observe;</li><li>`drop`: Block;</li><li>`redirect`: Redirect;</li><li>`page`: Return a specific page;</li><li>`alg`: JavaScript challenge. </li>	
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
<li>`off`: Disabled</li>Default value: `on`
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
         * Rule ID, which is only used as an output parameter.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * The filter. Values:
<li>`sip`: Client IP</li>
This parameter is left empty by default.
         * @type {Array.<string> || null}
         */
        this.FreqFields = null;

        /**
         * Update time. It is only used as a response parameter, and defaults to the current time. 
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Query scope. Values:
<li>`source_to_eo`: (Response) Traffic going from the origin to EdgeOne.</li>
<li>`client_to_eo`: (Request) Traffic going from the client to EdgeOne.</li>
Default: `source_to_eo`.
         * @type {Array.<string> || null}
         */
        this.FreqScope = null;

        /**
         * Name of the custom return page. It's required when `Action=page`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * ID of custom response. The ID can be obtained via the `DescribeCustomErrorPages` API. It's required when `Action=page`.	
         * @type {string || null}
         */
        this.CustomResponseId = null;

        /**
         * The response code to trigger the return page. It's required when `Action=page`. Value: 100-600. 3xx response codes are not supported. Default value: 567.
         * @type {number || null}
         */
        this.ResponseCode = null;

        /**
         * The redirection URL. It's required when `Action=redirect`.
         * @type {string || null}
         */
        this.RedirectUrl = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.CustomResponseId = 'CustomResponseId' in params ? params.CustomResponseId : null;
        this.ResponseCode = 'ResponseCode' in params ? params.ResponseCode : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

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
 * CreateL4ProxyRules response structure.
 * @class
 */
class CreateL4ProxyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of newly added forwarding rules, returned as an array.
         * @type {Array.<string> || null}
         */
        this.L4ProxyRuleIds = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.L4ProxyRuleIds = 'L4ProxyRuleIds' in params ? params.L4ProxyRuleIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCustomErrorPage request structure.
 * @class
 */
class ModifyCustomErrorPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom response page ID.
         * @type {string || null}
         */
        this.PageId = null;

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Custom response page name. The name must be 2-60 characters long.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Custom response page description, not exceeding 60 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Custom response page type, with values:<li>text/html. </li><li>application/json.</li><li>plain/text.</li><li>text/xml.</li>
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * Custom response page content, not exceeding 2 KB.
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
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Content = 'Content' in params ? params.Content : null;

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
 * DownloadL4Logs response structure.
 * @class
 */
class DownloadL4LogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of L4 logs.
         * @type {Array.<L4OfflineLog> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new L4OfflineLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindSharedCNAME request structure.
 * @class
 */
class BindSharedCNAMERequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site related with the acceleration domain name.	
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Action type. Values:
<li>`bind`: To bind</li>
<li>`unbind`: To unbind</li>
         * @type {string || null}
         */
        this.BindType = null;

        /**
         * Bindings between domain names and a shared CNAME
         * @type {Array.<BindSharedCNAMEMap> || null}
         */
        this.BindSharedCNAMEMaps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.BindType = 'BindType' in params ? params.BindType : null;

        if (params.BindSharedCNAMEMaps) {
            this.BindSharedCNAMEMaps = new Array();
            for (let z in params.BindSharedCNAMEMaps) {
                let obj = new BindSharedCNAMEMap();
                obj.deserialize(params.BindSharedCNAMEMaps[z]);
                this.BindSharedCNAMEMaps.push(obj);
            }
        }

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeL4Proxy request structure.
 * @class
 */
class DescribeL4ProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the zone where the Layer 4 proxy instance belongs.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Paginated query offset. Defaults to 0 when not specified.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Paginated query limit. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter criteria. The upper limit for Filters.Values is 20. If left empty, all Layer 4 proxy instance information under the current zone ID is returned. The detailed filter criteria are as follows: <li>proxy-id: Filters by Layer 4 proxy instance ID;</li>
<li>ddos-protection-type: Filters by security protection type;</li>

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
 * DescribeIdentifications request structure.
 * @class
 */
class DescribeIdentificationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions. The maximum value for Filters.Values is 20. The detailed conditions are as follows:<li>zone-name: Filter by site name.</li>
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateAccelerationDomain request structure.
 * @class
 */
class CreateAccelerationDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site related with the acceleration domain name.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Acceleration domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Details of the origin.
         * @type {OriginInfo || null}
         */
        this.OriginInfo = null;

        /**
         * Origin-pull protocol configuration. Values:
<li>`FOLLOW`: Follow the protocol of origin</li>
<li>`HTTP`: Send requests to the origin over HTTP</li>
<li>`HTTPS`: Send requests to the origin over HTTPS</li>
<li>Default: `FOLLOW`</li>
         * @type {string || null}
         */
        this.OriginProtocol = null;

        /**
         * Ports for HTTP origin-pull requests. Range: 1-65535. It takes effect when `OriginProtocol=FOLLOW/HTTP`. Port 80 is used if it's not specified. 
         * @type {number || null}
         */
        this.HttpOriginPort = null;

        /**
         * Ports for HTTPS origin-pull requests. Range: 1-65535. It takes effect when `OriginProtocol=FOLLOW/HTTPS`. Port 443 is used if it's not specified. 
         * @type {number || null}
         */
        this.HttpsOriginPort = null;

        /**
         * IPv6 status. Values:
<li>`follow`: Follow the IPv6 configuration of the site</li>
<li>`on`: Enable</li>
<li>`off`: Disable</li>
<li>Default: `follow`</li>
         * @type {string || null}
         */
        this.IPv6Status = null;

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
        this.OriginProtocol = 'OriginProtocol' in params ? params.OriginProtocol : null;
        this.HttpOriginPort = 'HttpOriginPort' in params ? params.HttpOriginPort : null;
        this.HttpsOriginPort = 'HttpsOriginPort' in params ? params.HttpsOriginPort : null;
        this.IPv6Status = 'IPv6Status' in params ? params.IPv6Status : null;

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
         * Feature name. For details, see [DescribeRulesSetting](https://intl.cloud.tencent.com/document/product/1552/80618?from_cn_redirect=1) API
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribePurgeTasks request structure.
 * @class
 */
class DescribePurgeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ZoneId. The parameter is required.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Start time of the query. Either time or job-id is required.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query. Either time or job-id is required.
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
         * Filtering condition. The maximum value of Filters.Values is 20. Detailed filtering conditions: 
<li>job-id
Filter based on task ID. job-id format: 1379afjk91u32h. Multiple values are not supported, Fuzzy search is not supported;</li>
<li>target
Filter based on: target resource information. target format: http://www.qq.com/1.txt or tag1. Multiple values are not supported, Fuzzy search is not supported; </li>
<li>domains
Filter based on domain name. domains format: www.qq.com, Fuzzy search is not supported; </li>
<li>statuses
Filter based on task status, Fuzzy search is not supported. Options: <br>processing: Processing<br>success: Success<br>failed: Failure<br>timeout: Timeout</li>
<li>type
Filter based on cleared cache type. Multiple values are not supported, Fuzzy search is not supported. Options:<br> purge_url: URL<br> purge_prefix: Prefix<br> purge_all: All cache content<br> purge_host: Hostname<br> purge_cache_tag: CacheTag</li>
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
 * UpgradePlan response structure.
 * @class
 */
class UpgradePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order number.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateL4ProxyRules request structure.
 * @class
 */
class CreateL4ProxyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer 4 proxy instance ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * List of forwarding rules. A single request supports up to 200 forwarding rules.
Note: When L4ProxyRule is used here, Protocol, PortRange, OriginType, OriginValue, and OriginPortRange are required fields; ClientIPPassThroughMode, SessionPersist, SessionPersistTime, and RuleTag are optional fields; do not fill in RuleId and Status.
         * @type {Array.<L4ProxyRule> || null}
         */
        this.L4ProxyRules = null;

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

        if (params.L4ProxyRules) {
            this.L4ProxyRules = new Array();
            for (let z in params.L4ProxyRules) {
                let obj = new L4ProxyRule();
                obj.deserialize(params.L4ProxyRules[z]);
                this.L4ProxyRules.push(obj);
            }
        }

    }
}

/**
 * CreateConfigGroupVersion request structure.
 * @class
 */
class CreateConfigGroupVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * GroupId of the version to be created.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Configuration content to be imported. It is required to be in JSON format and encoded in UTF-8. Please refer to the example below for the configuration file content.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Version description. The maximum length allowed is 50 characters. This field can be used to provide details about the application scenarios of this version.
         * @type {string || null}
         */
        this.Description = null;

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
        this.Content = 'Content' in params ? params.Content : null;
        this.Description = 'Description' in params ? params.Description : null;

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
         * The action. Values:
<li>`trans`: Allow</li>
<li>`drop`: Block the request</li>
<li>`monitor`: Observe</li>
<li>`ban`: Block the IP</li>
<li>`redirect`: Redirect the request</li>
<li>`page`: Return the specified page</li>
<li>`alg`: JavaScript challenge</li>
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
         * Rule ID, which is only used as an output parameter.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * The update time, which is only used as an output parameter.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * IP ban duration. Range: 0-2 days. It's required when `Action=ban`. 
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * The unit of the IP ban duration. Values:
<li>`second`: Second</li>
<li>`minutes`: Minute</li>
<li>`hour`: Hour</li>Default value: `second`.
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * Name of the custom return page. It's required when `Action=page`.	
         * @type {string || null}
         */
        this.Name = null;

        /**
         * (Disused) ID of the custom return page. The default value is 0, which means that the system default blocking page is used. 
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * ID of custom response. The ID can be obtained via the `DescribeCustomErrorPages` API. It's required when `Action=page`.	
         * @type {string || null}
         */
        this.CustomResponseId = null;

        /**
         * The response code to trigger the return page. It's required when `Action=page`. Value: 100-600. 3xx response codes are not supported. Default value: 567.
         * @type {number || null}
         */
        this.ResponseCode = null;

        /**
         * The redirection URL. It's required when `Action=redirect`.	
         * @type {string || null}
         */
        this.RedirectUrl = null;

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
        this.CustomResponseId = 'CustomResponseId' in params ? params.CustomResponseId : null;
        this.ResponseCode = 'ResponseCode' in params ? params.ResponseCode : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

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
         * Start time. Time range: 30 days.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time. Time range: 30 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of DDoS policy IDs. All policies are selected if this field is not specified.
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * ZoneId set. This parameter is required.
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
         * Parameter to show attack details. If it is configured as false, only the number of attacks is returned without details. If it is configured as true, attack details are returned.
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
 * CreateL4Proxy response structure.
 * @class
 */
class CreateL4ProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer 4 instance ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeOriginGroup request structure.
 * @class
 */
class DescribeOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Required) Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The paginated query offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Value range: 1-1000. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters. Each filter can have up to 20 entries. See below for details:
<li>`origin-group-id`<br>Filter by the <strong>origin group ID</strong>. Format: `origin-2ccgtb24-7dc5-46s2-9r3e-95825d53dwe3a`<br>Fuzzy query is not supported</li><li>`origin-group-name`<br>Filter by the <strong>origin group name</strong><br>Fuzzy query is supported. When fuzzy query is used, only one origin groupsource site group name is supported</li>
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
 * DescribeIPRegion request structure.
 * @class
 */
class DescribeIPRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IPs to be queried, supporting IPV4 and IPV6. Up to 100 can be queried.
         * @type {Array.<string> || null}
         */
        this.IPs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IPs = 'IPs' in params ? params.IPs : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyL4ProxyRulesStatus response structure.
 * @class
 */
class ModifyL4ProxyRulesStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CheckCnameStatus response structure.
 * @class
 */
class CheckCnameStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CNAME status of accelerated domain names.
         * @type {Array.<CnameStatus> || null}
         */
        this.CnameStatus = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * The configuration information of real-time log delivery to a custom HTTP(S) interface
 * @class
 */
class CustomEndpoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * The address of the custom HTTP interface for real-time log delivery. Currently, only HTTP and HTTPS protocols are supported.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Specifies the custom SecretId for generating an encrypted signature. This parameter is required if the origin server needs authentication.
         * @type {string || null}
         */
        this.AccessId = null;

        /**
         * Specifies the custom SecretKey for generating an encrypted signature. This parameter is required if the origin server needs authentication.
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * The type of data compression. Valid values:<li>gzip: gzip compression.</li>If this field is not filled in, compression is disabled.
         * @type {string || null}
         */
        this.CompressType = null;

        /**
         * The type of the application layer protocol used when POST requests log delivery. Valid values:
<li>http: HTTP protocol;</li>
<li>https: HTTPS protocol.</li>If this field is not filled in, the protocol type will be parsed from the URL field.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The custom request header carried during log delivery. If the header name you fill in is the default header carried by EdgeOne log delivery such as Content-Type, then the header value you fill in will override the default value. The header value supports referring to a single variable ${batchSize} to obtain the number of log entries included in each POST request.
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
        this.Url = 'Url' in params ? params.Url : null;
        this.AccessId = 'AccessId' in params ? params.AccessId : null;
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.CompressType = 'CompressType' in params ? params.CompressType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

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
 * VerifyOwnership request structure.
 * @class
 */
class VerifyOwnershipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site or acceleration domain name
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
 * DeleteL4Proxy request structure.
 * @class
 */
class DeleteL4ProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer 4 proxy instance ID.
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
 * DescribeL4Proxy response structure.
 * @class
 */
class DescribeL4ProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of Layer 4 proxy instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of Layer 4 proxy instances.
         * @type {Array.<L4Proxy> || null}
         */
        this.L4Proxies = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.L4Proxies) {
            this.L4Proxies = new Array();
            for (let z in params.L4Proxies) {
                let obj = new L4Proxy();
                obj.deserialize(params.L4Proxies[z]);
                this.L4Proxies.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * RenewPlan response structure.
 * @class
 */
class RenewPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order number.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Real-time log delivery task
 * @class
 */
class RealtimeLogDeliveryTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the real-time log delivery task.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The name of the real-time log delivery task.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * The status of the real-time log delivery task. Valid values:<li>enabled: Enabled;</li><li>disabled: Disabled;</li><li>deleted: Abnormal deletion. Check whether the destination Tencent Cloud CLS log set/log topic has been deleted.</li>
         * @type {string || null}
         */
        this.DeliveryStatus = null;

        /**
         * The type of the real-time log delivery task. Valid values:<li>cls: Push to Tencent Cloud CLS;</li><li>custom_endpoint: Push to a custom HTTP(S) address;</li><li>s3: Push to an AWS S3-compatible bucket address.</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * The list of entities (Layer 7 domains or Layer 4 proxy instances) corresponding to the real-time log delivery task. Valid value examples:<li>Layer 7 domain: domain.example.com;</li><li>Layer 4 proxy instance: sid-2s69eb5wcms7.</li>
         * @type {Array.<string> || null}
         */
        this.EntityList = null;

        /**
         * The data delivery type. Valid values: <li>domain: Site acceleration log;</li><li>application: Layer 4 proxy log;</li><li>web-rateLiming: Rate limit and CC attack defense log;</li><li>web-attack: Managed rule log;</li><li>web-rule: Custom rule log;</li><li>web-bot: Bot management log.</li>
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * The data delivery area. Valid values:<li>mainland: Within the Chinese mainland;</li><li>overseas: Global (excluding the Chinese mainland).</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * The list of predefined fields for delivery.
         * @type {Array.<string> || null}
         */
        this.Fields = null;

        /**
         * The list of custom fields for delivery.
         * @type {Array.<CustomField> || null}
         */
        this.CustomFields = null;

        /**
         * Log delivery filter conditions.
         * @type {Array.<DeliveryCondition> || null}
         */
        this.DeliveryConditions = null;

        /**
         * The sampling ratio in permille. Value range: 1 to 1000. For example, 605 represents a sampling ratio of 60.5%.
         * @type {number || null}
         */
        this.Sample = null;

        /**
         * Output format for log delivery. When the output parameter is null, the default format is used, which works as follows:
<li>When TaskType is 'custom_endpoint', the default format is an array of JSON objects, with each JSON object representing a log entry;</li>
<li>When TaskType is 's3', the default format is JSON Lines. </li>
Note: This field may return 'null', which indicates a failure to obtain a valid value.
         * @type {LogFormat || null}
         */
        this.LogFormat = null;

        /**
         * Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CLSTopic || null}
         */
        this.CLS = null;

        /**
         * Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CustomEndpoint || null}
         */
        this.CustomEndpoint = null;

        /**
         * Note: This field may return null, indicating that no valid values can be obtained.
         * @type {S3 || null}
         */
        this.S3 = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The update time.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.DeliveryStatus = 'DeliveryStatus' in params ? params.DeliveryStatus : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.EntityList = 'EntityList' in params ? params.EntityList : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Fields = 'Fields' in params ? params.Fields : null;

        if (params.CustomFields) {
            this.CustomFields = new Array();
            for (let z in params.CustomFields) {
                let obj = new CustomField();
                obj.deserialize(params.CustomFields[z]);
                this.CustomFields.push(obj);
            }
        }

        if (params.DeliveryConditions) {
            this.DeliveryConditions = new Array();
            for (let z in params.DeliveryConditions) {
                let obj = new DeliveryCondition();
                obj.deserialize(params.DeliveryConditions[z]);
                this.DeliveryConditions.push(obj);
            }
        }
        this.Sample = 'Sample' in params ? params.Sample : null;

        if (params.LogFormat) {
            let obj = new LogFormat();
            obj.deserialize(params.LogFormat)
            this.LogFormat = obj;
        }

        if (params.CLS) {
            let obj = new CLSTopic();
            obj.deserialize(params.CLS)
            this.CLS = obj;
        }

        if (params.CustomEndpoint) {
            let obj = new CustomEndpoint();
            obj.deserialize(params.CustomEndpoint)
            this.CustomEndpoint = obj;
        }

        if (params.S3) {
            let obj = new S3();
            obj.deserialize(params.S3)
            this.S3 = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeDeployHistory request structure.
 * @class
 */
class DescribeDeployHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Environment ID.
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Filtering condition. The maximum value of Filters.Values is 20. Detailed filtering conditions: 
<li>record-id: Filter by release record ID. </li>
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

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
 * Billing data item
 * @class
 */
class BillingData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Value.
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
 * DeleteZone response structure.
 * @class
 */
class DeleteZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * L4 proxy mode. Valid values: 
<li>instance: Instance mode. </li>If it is not specified, instance is used by default.
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
 * Bindings between a shared CNAME and connected domain names
 * @class
 */
class BindSharedCNAMEMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * The shared CNAME to be bound with or unbound from.
         * @type {string || null}
         */
        this.SharedCNAME = null;

        /**
         * Acceleration domains (up to 20).
         * @type {Array.<string> || null}
         */
        this.DomainNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SharedCNAME = 'SharedCNAME' in params ? params.SharedCNAME : null;
        this.DomainNames = 'DomainNames' in params ? params.DomainNames : null;

    }
}

/**
 * DeleteRealtimeLogDeliveryTask request structure.
 * @class
 */
class DeleteRealtimeLogDeliveryTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The ID of the real-time log delivery task.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
         * Origin server type. Valid values:
<li>custom: Manually added;</li>
<li>origins: Origin server group.</li>
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

        /**
         * Rule tag. The original configuration will apply if it is not specified.
         * @type {string || null}
         */
        this.RuleTag = null;

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
        this.RuleTag = 'RuleTag' in params ? params.RuleTag : null;

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
 * CreateAliasDomain response structure.
 * @class
 */
class CreateAliasDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateRealtimeLogDeliveryTask response structure.
 * @class
 */
class CreateRealtimeLogDeliveryTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the successfully created task.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeTopL7CacheData response structure.
 * @class
 */
class DescribeTopL7CacheDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of cached L7 top-ranked traffic data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopDataRecord> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new TopDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeSecurityTemplateBindings response structure.
 * @class
 */
class DescribeSecurityTemplateBindingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bindings of the specified policy template.

When a domain name of a site is bound with the specified policy template, `TemplateScope` includes the `ZoneId` of the related site and the bindings of the domain name. 

Note: If the template is not bound with any domain name, and there is not any existing binding, `TemplateScope=0` is returned.

In the binding list, the same domain name may appear repeatedly in the `EntityStatus` list with different `Status`. For example, when a domain name is being bound to another policy template, it's marked both `online` and `pending`.
         * @type {Array.<SecurityTemplateBinding> || null}
         */
        this.SecurityTemplate = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityTemplate) {
            this.SecurityTemplate = new Array();
            for (let z in params.SecurityTemplate) {
                let obj = new SecurityTemplateBinding();
                obj.deserialize(params.SecurityTemplate[z]);
                this.SecurityTemplate.push(obj);
            }
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Indicator list. Values: 
<li>l7Flow_outFlux: Edgeone response traffic;</li>
<li>l7Flow_inFlux: Edgeone request traffic;</li>
<li>l7Flow_outBandwidth: Edgeone response bandwidth;</li>
<li>l7Flow_inBandwidth: Edgeone request bandwidth;</li>
<li>l7Flow_request: Number of access requests;</li>
<li>l7Flow_flux: Uplink + downlink traffic of access requests;< li>
<li>l7Flow_bandwidth: Uplink + downlink bandwidth of access requests. </li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * ZoneId set. This parameter is required.
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
<li>country<br>Filter by the <strong> Country/Region</strong>. The country/region follows <a href="https://baike.baidu.com/item/ISO%203166-1/5269555">ISO 3166</a> specification. </li>
<li>`province`<br>Filter by the <strong>specified province name</strong>. It’s only available when `Area` is `mainland`.</li>
<li>`isp`<br>:   Filter by the specified ISP. It’s only available when `Area` is `mainland`.<br>Values: <br>`2`: CTCC; <br>`26`: CUCC; <br>`1046`: CMCC; <br>`3947`: CTT; <br>`38`: CERNET; <br>`43`: GWBN; <br>`0`: Others.</li>
<li>`domain`<br>: Filter by the specified <strong>sub-domain name</strong>, such as `test.example.com`</li>
<li>`url`:<br>Filter by the specified <strong>URL path<strong> (such as `/content` or `content/test.jpg`).<br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.</li>
<li>`referer`:<br>Filter by the specified <strong>Referer header</strong>, such as `example.com`.<br>If this parameter is specified, the max query period is the last 30 days.<br>The<a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.</li>
<li>`resourceType`:<br>Filter by the specified <strong>resource file type</strong>, such as `jpg`, `css`. <br>Note that if this parameter is specified, the max data query period is the last 30 days. <br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">data query scope stated in the specifications of service package</a> related with the `ZoneIds` becomes invalid.</li>
<li>`protocol`:<br> Filter  by the specified <strong>HTTP protocol</strong> version <br>Values: <br>`HTTP/1.0`: HTTP 1.0;<br>`HTTP/1.1`: HTTP 1.1;<br>`HTTP/2.0`: HTTP 2.0;<br>`HTTP/3.0`: HTTP 3.0;<br>`WebSocket`: WebSocket.</li>
<li>`socket`:<br>Filter by the specified <strong>HTTP protocol</strong> type <br>Values: <br>`HTTP`: HTTP protocol;<br>`HTTPS`: HTTPS protocol;<br>`QUIC`: QUIC protocol.</li>
<li>statusCode<br> Filter by [strong> Status Code/strong>]. lt;br> If you only fill in statusCode parameter, you can query data of nearly 30 days at most; <br> If statusCode+Zonelds parameter is filled in at the same time, the supported query data range is the smaller of a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90"> Maximum query range of data analysis/a> and 30 days supported by package. lt;br> The corresponding Value options are as follows: <br> 1XX: Status code of type 1xx; <br> 100:100 status code; <br> 101:101 status code; <br> 102:102 status code; <br> 2XX: Status code of type 2xx; <br> 200:200 status code; <br> 201:201 status code; <br> 202:202 status code; <br> 203:203 status code; <br> 204:204 status code; <br> 205:205 status code; <br> 206:206 status code; <br> 207:207 status code; <br> 3XX: Status code of type 3xx; <br> 300:300 status code; <br> 301:301 status code; <br> 302:302 status code; <br> 303:303 status code; <br> 304:304 status code; <br> 305:305 status code; <br> 307:307 status code; <br> 4XX: Status code of type 4xx; <br> 400:400 status code; <br> 401:401 status code; <br> 402:402 status code; <br> 403:403 status code; <br> 404:404 status code; <br> 405:405 status code; <br> 406:406 status code; <br> 407:407 status code; <br> 408:408 status code; <br> 409:409 status code; <br> 410:410 status code; <br> 411:411 status code; <br> 412:412 status code; <br> 412:413 Status Code; <br> 414:414 status code; <br> 415:415 status code; <br> 416:416 status code; <br> 417:417 status code; <br> 422:422 status code; <br> 423:423 status code; <br> 424:424 status code; <br> 426:426 status code; <br> 451:451 status code; <br> 5XX: Status code of type 5xx; <br> 500:500 status code; <br> 501:501 status code; <br> 502:502 status code; <br> 503:503 status code; <br> 504:504 status code; <br> 505:505 status code; <br> 506:506 status code; <br> 507:507 status code; <br> 510:510 status code; <br> 514:514 status code; <br> 544:544 Status Code.& lt</li>
<li>`browserType`:<br>Filter by the specified <strong>browser type</strong>. <br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.</li><br>Values: <br>`Firefox`: Firefox browser; <br>`Chrome`: Chrome browser; <br>`Safari`: Safari browser; <br>`MicrosoftEdge`: Microsoft Edge browser; <br>`IE`: IE browser; <br>`Opera`: Opera browser; <br>`QQBrowser`: QQ browser; <br>`LBBrowser`: LB browser; <br>`MaxthonBrowser`: Maxthon browser; <br>`SouGouBrowser`: Sogou browser; <br>`BIDUBrowser`: Baidu browser; <br>`TaoBrowser`: Tao browser; <br>`UBrowser`: UC browser; <br>`Other`: Other browsers; <br>`Empty`: The browser type is not specified; <br>`Bot`: Web crawler.</li>
<li>`deviceType`:<br>Filter by the <strong>device type</strong>.<br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.<br>Values:<br>`TV`: TV; <br>`Tablet`: Tablet;<br>`Mobile`: Mobile phone; <br>`Desktop`: Desktop device;<br>`Other`: Other device;<br>`Empty`: Device type not specified.</li>
<li>`operatingSystemType`:<br>Filter by the <strong>operating system</strong>.<br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.<br>Values: <br>`Linux`: Linux OS; <br>`MacOS`: Mac OS;<br>`Android`: Android OS;<br>`IOS`: iOS OS;<br>`Windows`: Windows OS;<br>`NetBSD`: NetBSD OS;<br>`ChromiumOS`: Chromium OS; <br>`Bot`: Web crawler:<br>`Other`: Other OS;   <br>`Empty`: The OS is not specified.</li>
<li>`tlsVersion`:<br>Filter by the <strong>TLS version</strong>. <br>If this parameter is specified, the max query period is the last 30 days.<br>The <a href="https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1#edgeone-.E5.A5.97.E9.A4.90">max data query scope stated in the service package specifications</a> of the site (if `ZoneIds` specified) becomes invalid.<br>Values: <br>`TLS1.0`: TLS 1.0;<br>`TLS1.1`: TLS 1.1; <br>`TLS1.2`: TLS 1.2;<br>`TLS1.3`: TLS 1.3.</li>
<li>`ipVersion`<br>Filter by the <strong>specified IP version. <br>Values: <br>`4`: IPv4; <br>`6`: IPv6.
<li>`tagKey`<br>Filter by the <strong>Tag Key</strong>. </li>
<li>`tagValue`<br>Filter by the <strong>Tag Value</strong>. </li>
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
         * Site access types. Options include:
<li>`partial`: (Default) Access through a CNAME record</li>
<li>`full`: Access through a name server</li>
<li>`noDomainAccess`: Access without using a domain name</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Site name. For sites connected via CNAME/NS, pass in the secondary domain name (example.com). Leave it blank if the site is connected without a domain name. 
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * The acceleration area of the L7 domain name when `Type` is `partial` or `full`. When Type is `noDomainAccess`, please leave it blank.
<li>`global`: Global AZs</li>
<li>`mainland`: AZs in the Chinese mainland</li>
<li>`overseas`: (Default) AZs outside the Chinese mainland </li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * ID of the plan to which you want to bind the site. If you don't have an EdgeOne plan, purchase one in the EdgeOne console.
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * The site alias. It allows up to 20 characters, including [0-9], [a-z], [A-Z] and [-_]. For details, see [Glossary](https://intl.cloud.tencent.com/document/product/1552/70202?from_cn_redirect=1). If you don't want to use it, just leave it blank.
         * @type {string || null}
         */
        this.AliasZoneName = null;

        /**
         * Tags of the site. To create tags, go to the [Tag Console](https://console.cloud.tencent.com/tag/taglist).
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
         * Whether to skip scanning the existing DNS records of the site. Default value: false.
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
        this.Type = 'Type' in params ? params.Type : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.AliasZoneName = 'AliasZoneName' in params ? params.AliasZoneName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AllowDuplicates = 'AllowDuplicates' in params ? params.AllowDuplicates : null;
        this.JumpStart = 'JumpStart' in params ? params.JumpStart : null;

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
<li> `partial`: Access through a CNAME record. A site using domainless access can only switch to CNAME access. </li>The original configuration applies if this field is not specified.
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
 * Exclusive DDoS protection specifications configuration applicable to Layer 4 proxy or web site service.
 * @class
 */
class DDosProtectionConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dedicated anti-DDoS specifications in the Chinese mainland. For details, refer to [Dedicated Anti-DDoS Related Fees](https://intl.cloud.tencent.com/document/product/1552/94162?from_cn_redirect=1).
<li>PLATFORM: uses the default protection. Dedicated anti-DDoS is not enabled;</li>
<li>BASE30_MAX300: uses dedicated anti-DDoS, which provides 30 Gbps guaranteed protection bandwidth and up to 300 Gbps elastic protection bandwidth;</li>
<li>BASE60_MAX600: uses dedicated anti-DDoS, which provides 60 Gbps guaranteed protection bandwidth and up to 600 Gbps elastic protection bandwidth. </li>If this field is not specified, the default value 'PLATFORM' will be used.
         * @type {string || null}
         */
        this.LevelMainland = null;

        /**
         * Configuration of elastic protection bandwidth for exclusive DDoS protection in the Chinese mainland.Valid only when exclusive DDoS protection in the Chinese mainland is enabled (refer to the LevelMainland parameter configuration), and the value has the following limitations:<li>When exclusive DDoS protection is enabled in the Chinese mainland and the 30 Gbps baseline protection bandwidth is used (the LevelMainland parameter value is BASE30_MAX300): the value range is 30 to 300 in Gbps;</li><li>When exclusive DDoS protection is enabled in the Chinese mainland and the 60 Gbps baseline protection bandwidth is used (the LevelMainland parameter value is BASE60_MAX600): the value range is 60 to 600 in Gbps;</li><li>When the default protection of the platform is used (the LevelMainland parameter value is PLATFORM): configuration is not supported, and the value of this parameter is invalid.</li>
         * @type {number || null}
         */
        this.MaxBandwidthMainland = null;

        /**
         * Dedicated anti-DDoS specifications in global regions (excluding the Chinese mainland).
<li>PLATFORM: uses the default protection. Dedicated anti-DDoS is not enabled;</li>
<li>ANYCAST300: uses dedicated anti-DDoS, which provides 300 Gbps protection bandwidth;</li>
<li>ANYCAST_ALLIN: uses dedicated anti-DDoS, which provides all available protection resources. </li>If this field is not specified, the default value 'PLATFORM' will be used.
         * @type {string || null}
         */
        this.LevelOverseas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LevelMainland = 'LevelMainland' in params ? params.LevelMainland : null;
        this.MaxBandwidthMainland = 'MaxBandwidthMainland' in params ? params.MaxBandwidthMainland : null;
        this.LevelOverseas = 'LevelOverseas' in params ? params.LevelOverseas : null;

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
         * ZoneId set. This parameter is required.
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
 * CreateL4Proxy request structure.
 * @class
 */
class CreateL4ProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer 4 proxy instance name. You can enter 1-50 characters. Valid characters are a-z, 0-9, and hyphens (-). However, hyphens (-) cannot be used individually or consecutively and should not be placed at the beginning or end of the name. Modifications are not allowed after creation.
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Acceleration zone of the Layer 4 proxy instance.<li>mainland: Availability zone in the Chinese mainland;</li><li>overseas: Global availability zone (excluding the Chinese mainland);</li><li>global: Global availability zone.</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Specifies whether to enable IPv6 access. The default value off is used if left empty. This configuration can only be enabled in certain acceleration zones and security protection configurations. For details, see [Creating an L4 Proxy Instance](https://intl.cloud.tencent.com/document/product/1552/90025?from_cn_redirect=1). Valid values:<li>on: Enable;</li>
<li>off: Disable.</li>

         * @type {string || null}
         */
        this.Ipv6 = null;

        /**
         * Specifies whether to enable the fixed IP address. The default value off is used if left empty. This configuration can only be enabled in certain acceleration zones and security protection configurations. For details, see [Creating an L4 Proxy Instance](https://intl.cloud.tencent.com/document/product/1552/90025?from_cn_redirect=1). Valid values:<li>on: Enable;</li>
<li>off: Disable.</li>

         * @type {string || null}
         */
        this.StaticIp = null;

        /**
         * Specifies whether to enable network optimization in the Chinese mainland. The default value off is used if left empty. This configuration can only be enabled in certain acceleration zones and security protection configurations. For details, see [Creating an L4 Proxy Instance](https://intl.cloud.tencent.com/document/product/1552/90025?from_cn_redirect=1). Valid values:<li>on: Enable;</li>
<li>off: Disable.</li>

         * @type {string || null}
         */
        this.AccelerateMainland = null;

        /**
         * Layer 3/Layer 4 DDoS protection. The default protection option of the platform will be used if it is left empty. For details, see [Exclusive DDoS Protection Usage](https://intl.cloud.tencent.com/document/product/1552/95994?from_cn_redirect=1).
         * @type {DDosProtectionConfig || null}
         */
        this.DDosProtectionConfig = null;

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
        this.Area = 'Area' in params ? params.Area : null;
        this.Ipv6 = 'Ipv6' in params ? params.Ipv6 : null;
        this.StaticIp = 'StaticIp' in params ? params.StaticIp : null;
        this.AccelerateMainland = 'AccelerateMainland' in params ? params.AccelerateMainland : null;

        if (params.DDosProtectionConfig) {
            let obj = new DDosProtectionConfig();
            obj.deserialize(params.DDosProtectionConfig)
            this.DDosProtectionConfig = obj;
        }

    }
}

/**
 * CreatePlan response structure.
 * @class
 */
class CreatePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Plan ID, formatted as edgeone-2unuvzjmmn2q.
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * Order number.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
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
         * Zone ID. This parameter is required.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Filters. Each filter can have up to 20 entries. Details: <li>proxy-id<br>   Filter by the <strong>Proxy ID</strong>, such as: `proxy-ev2sawbwfd`. <br>   Type: String<br>   Required: No</li><li>zone-id<br>   Filter by the <strong>Site ID</strong>, such as `zone-vawer2vadg`. <br>   Type: String<br>   Required: No</li><li>rule-tag<br>   Filter by the <strong>Rule tag</strong>, such as `rule-service-1`. <br>   Type: String<br>   Required: No</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyL4ProxyStatus request structure.
 * @class
 */
class ModifyL4ProxyStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer 4 proxy instance ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Layer 4 proxy instance status. Valid values:<li>online: Enabled;</li>
<li>offline: Disabled.</li>
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
 * The settings of the rate limiting template
 * @class
 */
class RateLimitTemplateDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Note: This field may return null, which indicates a failure to obtain a valid value.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * The unique ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Note: This field may return null, which indicates a failure to obtain a valid value.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Note: This field may return null, which indicates a failure to obtain a valid value.
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * HTTPS server certificate configuration
 * @class
 */
class CertificateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the server certificate.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Alias of the certificate.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Type of the certificate. Values:
<li>`default`: Default certificate</li>
<li>`upload`: Specified certificate</li>
<li>`managed`: Tencent Cloud-managed certificate</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The certificate expiration time.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Time when the certificate is deployed.
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * Signature algorithm.
         * @type {string || null}
         */
        this.SignAlgo = null;

        /**
         * Status of the certificate. Values:
u200c<li>`deployed`: The deployment has completed</li>
u200c<li>`processing`: Deployment in progress</li>
u200c<li>`applying`: Application in progress</li>
u200c<li>`failed`: Application rejected</li>
<li>`issued`: Binding failed.</li>
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
        this.SignAlgo = 'SignAlgo' in params ? params.SignAlgo : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * Layer 4 proxy mode, with value: <li>instance: instance mode.</li>If not specified, the default value instance will be used.
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
 * ModifyL4ProxyRulesStatus request structure.
 * @class
 */
class ModifyL4ProxyRulesStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer 4 proxy instance ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * List of forwarding rule IDs. It supports up to 200 forwarding rules at a time.
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

        /**
         * Status of forwarding rules. Valid values:
<li>online: Enabled;</li>
<li>offline: Disabled.</li>
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
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeCustomErrorPages request structure.
 * @class
 */
class DescribeCustomErrorPagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Filter criteria. The upper limit for Filters.Values is 20. The detailed filter criteria are as follows:
<li>page-id: Filter by page ID;</li>
<li>name: Filter by page name;</li>
<li>description: Filter by page description;</li>
<li>content-type: Filter by page type.</li>
         * @type {Array.<AdvancedFilter> || null}
         */
        this.Filters = null;

        /**
         * The offset of paginated query. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The limit of paginated query. Default value: 20. Maximum value: 1,000.
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Rule engine action. Each feature supports only one of the following three action types. The `RuleAction` array can be of only one of the following types. For all details, see [DescribeRulesSetting](https://intl.cloud.tencent.com/document/product/1552/80618?from_cn_redirect=1).
 * @class
 */
class Action extends  AbstractModel {
    constructor(){
        super();

        /**
         * Common feature operations. The options for this category include:
<li> Access URL overriding (AccessUrlRedirect);</li>
<li> Origin URL overriding (UpstreamUrlRedirect);</li>
<li> QUIC;</li>
<li> WebSocket;</li>
<li> Video dragging (VideoSeek);</li>
<li> Token authentication (Authentication);</li>
<li> Custom CacheKey (CacheKey);</li>
<li> Node caching TTL (Cache);</li>
<li> Browser caching TTL (MaxAge);</li>
<li> Offline caching (OfflineCache);</li>
<li> Smart routing (SmartRouting);</li>
<li> Range-based origin pull (RangeOriginPull);</li>
<li> HTTP/2 origin pull (UpstreamHttp2);</li>
<li> Host header overriding (HostHeader);</li>
<li> Forced HTTPS (ForceRedirect);</li>
<li> HTTPS origin pull (OriginPullProtocol);</li>
<li> Cache pre-refresh (CachePrefresh);</li>
<li> Smart compression (Compression);</li>
<li> Hsts;</li>
<li> ClientIpHeader;</li>
<li> SslTlsSecureConf;</li>
<li> OcspStapling;</li>
<li> HTTP/2 access (Http2);</li>
<li> Redirection during origin pull (UpstreamFollowRedirect);</li>
<li> Modifying origin server (Origin);</li>
<li> Layer 7 origin pull timeout (HTTPUpstreamTimeout);</li>
<li> HTTP response (HttpResponse).</li>
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
Note: This field may return null, indicating that no valid values can be obtained.
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
 * ModifyL4Proxy request structure.
 * @class
 */
class ModifyL4ProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Application ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Specifies whether to enable IPv6 access. If this parameter is not filled, this configuration will not be modified. This configuration can only be enabled in certain acceleration zones and security protection configurations. For details, see [Creating an L4 Proxy Instance] (https://intl.cloud.tencent.com/document/product/1552/90025?from_cn_redirect=1). Valid values:<li>on: Enable;</li> 
<li>off: Disable.</li>

         * @type {string || null}
         */
        this.Ipv6 = null;

        /**
         * Specifies whether to enable network optimization in the Chinese mainland. If this parameter is not filled, this configuration will not be modified. This configuration can only be enabled in certain acceleration zones and security protection configurations. For details, see [Creating an L4 Proxy Instance] (https://intl.cloud.tencent.com/document/product/1552/90025?from_cn_redirect=1). Valid values:<li>on: Enable;</li> 
<li>off: Disable.</li>
         * @type {string || null}
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
        this.Ipv6 = 'Ipv6' in params ? params.Ipv6 : null;
        this.AccelerateMainland = 'AccelerateMainland' in params ? params.AccelerateMainland : null;

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
 * DescribeSecurityIPGroupInfo request structure.
 * @class
 */
class DescribeSecurityIPGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID, used to specify the query scope.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Maximum number of entries returned in a single response. Default value: 20. Maximum query entries: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The starting entry offset for pagination queries. The default value is 0.
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
 * Real-time log delivery conditions used to define the scope of log delivery. The relationship between items in a DeliveryCondition array is "or", whereas the relationship between items in an inner Conditions array is "and".
 * @class
 */
class DeliveryCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log filter conditions. Detailed filter conditions are as follows:
<li>EdgeResponseStatusCode: Filter by status code returned to the client by the EdgeOne node.<br>      Supported operators: equal, great, less, great_equal, less_equal<br>      Value range: Any integer greater than or equal to 0</li>
<li>OriginResponseStatusCode: Filter by response status code of the origin server.<br>      Supported operators: equal, great, less, great_equal, less_equal<br>      Value range: Any integer greater than or equal to -1</li>
<li>SecurityAction: Filter by final action after the request hits the security rule.<br>      Supported operators: equal<br>      Options are as follows:<br>      -: Unknown/unhit<br>      Monitor: Log only<br>      JSChallenge: JavaScript challenge<br>      Deny: Interception<br>      Allow: Allow<br>      BlockIP: IP ban<br>      Redirect: Redirect<br>      ReturnCustomPage: Return to custom page<br>      ManagedChallenge: Managed challenge<br>      Silence: Silence<br>      LongDelay: Response after a long wait<br>      ShortDelay: Response after a short wait</li>
<li>SecurityModule: Filter according to the name of the security module that ultimately handles the request. <br>      Supported operators: equal<br>      Options are as follows:<br>      -: Unknown/miss<br>      CustomRule: Web protection - custom rules<br>      RateLimitingCustomRule: Web protection - rate limiting rule<br>      ManagedRule: Web Protection - Managed Rules<br>      L7DDoS: Web Protection - CC Attack Protection<br>      BotManagement: Bot Management - Bot Basic Management<br>      BotClientReputation: Bot Management - Client Reputation Analysis<br>      BotBehaviorAnalysis: Bot Management - Bot Intelligence Analysis<br>      BotCustomRule: Bot Management - Custom Bot Rules<br>      BotActiveDetection: Bot Management - Active Detection</li>
         * @type {Array.<QueryCondition> || null}
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
                let obj = new QueryCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
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
 * IP location information query
 * @class
 */
class IPRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address, IPV4 or IPV6.
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Whether the IP belongs to an EdgeOne node. Valid values:
<li>yes: This IP belongs to an EdgeOne node;</li>
<li>no: This IP does not belong to an EdgeOne node.</li>
         * @type {string || null}
         */
        this.IsEdgeOneIP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.IsEdgeOneIP = 'IsEdgeOneIP' in params ? params.IsEdgeOneIP : null;

    }
}

/**
 * DestroyPlan response structure.
 * @class
 */
class DestroyPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Parameter of the action for the HTTP request/response header of a rule engine condition.
 * @class
 */
class RuleRewriteActionParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Feature parameter name. For details, see [DescribeRulesSetting](https://intl.cloud.tencent.com/document/product/1552/80618?from_cn_redirect=1).
<li>`add`: Add the HTTP header.</li>
<li>`set`: Rewrite the HTTP header.</li>
<li>`del`: Delete the HTTP header.</li>
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Domain names that you need to modify the certificate configuration
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * Certificate configuration mode. Values:
<li>`disable`: (Default) Do not configure the certificate</li>
<li>`eofreecert`: Use a free certificate provided by EdgeOne</li>
<li>`sslcert`: Configure an SSL certificate.</li>
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * ID of the SSL certificate. It takes effect when `mode=sslcert`. To check the certificate ID, go to the [SSL Certificate](https://console.cloud.tencent.com/certoview) console.
         * @type {Array.<ServerCertInfo> || null}
         */
        this.ServerCertInfo = null;

        /**
         * Whether the certificate is managed by EdgeOne. Values:
<li>`none`: Not managed by EdgeOne</li>
<li>`apply`: Managed by EdgeOne</li>
Default value: `none`.
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
        this.Mode = 'Mode' in params ? params.Mode : null;

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
 * DeleteAccelerationDomains response structure.
 * @class
 */
class DeleteAccelerationDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of top-ranked L7 traffic data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopDataRecord> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new TopDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
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
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Group = null;

        /**
         * The sites that are associated with the current resources.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneNumber = null;

        /**
         * Resource tag type. Valid values:
<li>vodeo: vodeo resource.</li>
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
        this.Type = 'Type' in params ? params.Type : null;

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
         * Set of site IDs to be queried. This is a required parameter.
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
         * Filter conditions. The maximum value for Filters.Values is 20. The detailed conditions are as follows:<li>host: Filter by domain name.</li>
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
 * DeleteRules response structure.
 * @class
 */
class DeleteRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The ID of the origin group.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The name of the origin group.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The origin group type. Values:
<li>`GENERAL`: General origin group</li>
<li>`HTTP`: HTTP-specific origin group</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Details of the origin record.
         * @type {Array.<OriginRecord> || null}
         */
        this.Records = null;

        /**
         * List of instances referencing this origin group.	
         * @type {Array.<OriginGroupReference> || null}
         */
        this.References = null;

        /**
         * Creation time of the origin group.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The update time of the origin group.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Origin-pull host header
Note: This field may return·null, indicating that no valid values can be obtained.
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new OriginRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }

        if (params.References) {
            this.References = new Array();
            for (let z in params.References) {
                let obj = new OriginGroupReference();
                obj.deserialize(params.References[z]);
                this.References.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
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
 * Layer 4 proxy instance.
 * @class
 */
class L4Proxy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer 4 proxy instance ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Layer 4 proxy instance name.
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Acceleration zone of the Layer 4 proxy instance.<li>mainland: Availability zone in the Chinese mainland;</li><li>overseas: Global availability zone (excluding the Chinese mainland);</li><li>global: Global availability zone.</li>	
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Access via CNAME.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * After the fixed IP address is enabled, this value will return the corresponding access IP address; if it is not enabled, this value will be empty.
         * @type {Array.<string> || null}
         */
        this.Ips = null;

        /**
         * Status of the Layer 4 proxy instance.<li>online: Enabled;</li>
<li>offline: Disabled;</li>
<li>progress: Deploying;</li>	
<li>stopping: Disabling;</li>
<li>banned: Blocked;</li>
<li>fail: Failed to deploy or disable.</li>	
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Specifies whether to enable IPv6 access.<li>on: Enable;</li> <li>off: Disable.</li>
         * @type {string || null}
         */
        this.Ipv6 = null;

        /**
         * Specifies whether to enable the fixed IP address.<li>on: Enable;</li> <li>off: Disable.</li>
         * @type {string || null}
         */
        this.StaticIp = null;

        /**
         * Specifies whether to enable network optimization in the Chinese mainland.<li>on: Enable</li> <li>off: Disable</li>
         * @type {string || null}
         */
        this.AccelerateMainland = null;

        /**
         * Security protection configuration.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {DDosProtectionConfig || null}
         */
        this.DDosProtectionConfig = null;

        /**
         * Number of forwarding rules under the Layer 4 proxy instance.
         * @type {number || null}
         */
        this.L4ProxyRuleCount = null;

        /**
         * Latest modification time.
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Ips = 'Ips' in params ? params.Ips : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Ipv6 = 'Ipv6' in params ? params.Ipv6 : null;
        this.StaticIp = 'StaticIp' in params ? params.StaticIp : null;
        this.AccelerateMainland = 'AccelerateMainland' in params ? params.AccelerateMainland : null;

        if (params.DDosProtectionConfig) {
            let obj = new DDosProtectionConfig();
            obj.deserialize(params.DDosProtectionConfig)
            this.DDosProtectionConfig = obj;
        }
        this.L4ProxyRuleCount = 'L4ProxyRuleCount' in params ? params.L4ProxyRuleCount : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
 * CreateSharedCNAME request structure.
 * @class
 */
class CreateSharedCNAMERequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site to which the shared CNAME belongs.	
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Shared CNAME prefix. Enter a valid domain name prefix, such as "test-api" and "test-api.com". A maximum of 50 characters are allowed. 

Complete format of the shared CNAME: '<Custom prefix>+<A 12-character random string in ZoneId>+share.dnse[0-5].com'. 

For example, if the prefix is example.com, EdgeOne will create the shared CNAME: example.com.sai2ig51kaa5.share.dnse2.com.
         * @type {string || null}
         */
        this.SharedCNAMEPrefix = null;

        /**
         * Description. It supports 1-50 characters.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.SharedCNAMEPrefix = 'SharedCNAMEPrefix' in params ? params.SharedCNAMEPrefix : null;
        this.Description = 'Description' in params ? params.Description : null;

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
 * DeleteAliasDomain response structure.
 * @class
 */
class DeleteAliasDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * 
 * @class
 */
class DnsVerification extends  AbstractModel {
    constructor(){
        super();

        /**
         * The host record.
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
         * ZoneId set. This parameter is required.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * The number of data entries to be queried. The maximum value is 1000. If it is not specified, the value 10 is used by default, indicating that the top 10 data entries.
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
 * Details of the origin.
 * @class
 */
class OriginInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server type, with values:
<li>IP_DOMAIN: IPv4, IPv6, or domain name type origin server;</li>
<li>COS: Tencent Cloud COS origin server;</li>
<li>AWS_S3: AWS S3 origin server;</li>
<li>ORIGIN_GROUP: origin server group type origin server;</li>
 <li>VOD: Video on Demand;</li>
<li>SPACE: origin server uninstallation. Currently only available to the allowlist;</li>
<li>LB: load balancing. Currently only available to the allowlist. </li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin server address, which varies according to the value of OriginType:
<li>When OriginType = IP_DOMAIN, fill in an IPv4 address, an IPv6 address, or a domain name;</li>
<li>When OriginType = COS, fill in the access domain name of the COS bucket;</li>
<li>When OriginType = AWS_S3, fill in the access domain name of the S3 bucket;</li>
<li>When OriginType = ORIGIN_GROUP, fill in the origin server group ID;</li>
<li>When OriginType = VOD, fill in the VOD application ID;</li>
<li>When OriginType = LB, fill in the Cloud Load Balancer instance ID. This feature is currently only available to the allowlist;</li>
<li>When OriginType = SPACE, fill in the origin server uninstallation space ID. This feature is currently only available to the allowlist.</li>
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * The ID of the secondary origin group. This parameter is valid only when OriginType is ORIGIN_GROUP. This field indicates the old version capability, which cannot be configured or modified on the control panel after being called. Please submit a ticket if required.
         * @type {string || null}
         */
        this.BackupOrigin = null;

        /**
         * Whether access to the private Cloud Object Storage origin server is allowed. This parameter is valid only when OriginType is COS or AWS_S3. Valid values:
<li>on: Enable private authentication;</li>
<li>off: Disable private authentication.</li>
If it is not specified, the default value is off.
         * @type {string || null}
         */
        this.PrivateAccess = null;

        /**
         * Private authentication parameter. This parameter is valid only when PrivateAccess is on.
         * @type {Array.<PrivateParameter> || null}
         */
        this.PrivateParameters = null;

        /**
         * VODEO sub-application ID. This parameter is required when OriginType is VODEO.
         * @type {number || null}
         */
        this.VodeoSubAppId = null;

        /**
         * VOD on EO distribution range. This parameter is required when OriginType = VODEO. The values are: 
<li>All: all buckets under the current application;</li> 
<li>Bucket: a specified bucket.</li>
         * @type {string || null}
         */
        this.VodeoDistributionRange = null;

        /**
         * VODEO storage bucket ID. This parameter is required when OriginType is VODEO and VodeoDistributionRange is Bucket.
         * @type {string || null}
         */
        this.VodeoBucketId = null;

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
        this.VodeoSubAppId = 'VodeoSubAppId' in params ? params.VodeoSubAppId : null;
        this.VodeoDistributionRange = 'VodeoDistributionRange' in params ? params.VodeoDistributionRange : null;
        this.VodeoBucketId = 'VodeoBucketId' in params ? params.VodeoBucketId : null;

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
         * The cipher suite, with values:
<li>loose-v2023: Provides high compatibility with general security, and supports TLS 1.0-1.3 cipher suites;</li>
<li>general-v2023: Provides relatively high compatibility with moderate security, and supports TLS 1.2-1.3 cipher suites;</li>
<li>strict-v2023: Provides high security, disables all cipher suites with security risks, and supports TLS 1.2-1.3 cipher suites.</li>
Note: This field may return null, which indicates a failure to obtain a valid value.
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
 * Details of Layer 4 proxy forwarding rules.
 * @class
 */
class L4ProxyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule ID.
Note: Do not fill in this parameter when L4ProxyRule is used as an input parameter in CreateL4ProxyRules; it must be filled in when L4ProxyRule is used as an input parameter in ModifyL4ProxyRules.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Forwarding protocol. Valid values:
<li>TCP: TCP protocol;</li>
<li>UDP: UDP protocol.</li>
Note: This parameter must be filled in when L4ProxyRule is used as an input parameter in CreateL4ProxyRules; it is optional when L4ProxyRule is used as an input parameter in ModifyL4ProxyRules. If not specified, it will retain its existing value.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Forwarding port, which can be set as follows:
<li>A single port, such as 80;</li>
<li>A range of ports, such as 81-85, representing ports 81, 82, 83, 84, 85.</li>
Note: This parameter must be filled in when L4ProxyRule is used as an input parameter in CreateL4ProxyRules; it is optional when L4ProxyRule is used as an input parameter in ModifyL4ProxyRules. If not specified, it will retain its existing value.
         * @type {Array.<string> || null}
         */
        this.PortRange = null;

        /**
         * Origin server type. Valid values:
<li>IP_DOMAIN: IP/Domain name origin server;</li>
<li>ORIGIN_GROUP: Origin server group;</li>
<li>LB: Cloud Load Balancer, currently only open to the allowlist.</li>
Note: This parameter must be filled in when L4ProxyRule is used as an input parameter in CreateL4ProxyRules; it is optional when L4ProxyRule is used as an input parameter in ModifyL4ProxyRules. If not specified, it will retain its existing value.
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin server address.
<li>When OriginType is set to IP_DOMAIN, enter the IP address or domain name, such as 8.8.8.8 or test.com;</li>
<li>When OriginType is set to ORIGIN_GROUP, enter the origin server group ID, such as og-537y24vf5b41;</li>
<li>When OriginType is set to LB, enter the Cloud Load Balancer instance ID, such as lb-2qwk30xf7s9g.</li>
Note: This parameter must be filled in when L4ProxyRule is used as an input parameter in CreateL4ProxyRules; it is optional when L4ProxyRule is used as an input parameter in ModifyL4ProxyRules. If not specified, it will retain its existing value.
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * Origin server port, which can be set as follows:<li>A single port, such as 80;</li>
<li>A range of ports, such as 81-85, representing ports 81, 82, 83, 84, 85. When inputting a range of ports, ensure that the length corresponds with that of the forwarding port range. For example, if the forwarding port range is 80-90, this port range should be 90-100.</li>
Note: This parameter must be filled in when L4ProxyRule is used as an input parameter in CreateL4ProxyRules; it is optional when L4ProxyRule is used as an input parameter in ModifyL4ProxyRules. If not specified, it will retain its existing value.
         * @type {string || null}
         */
        this.OriginPortRange = null;

        /**
         * Transmission of the client IP address. Valid values:<li>TOA: Available only when Protocol=TCP;</li> 
<li>PPV1: Transmission via Proxy Protocol V1. Available only when Protocol=TCP;</li>
<li>PPV2: Transmission via Proxy Protocol V2;</li> 
<li>SPP: Transmission via Simple Proxy Protocol. Available only when Protocol=UDP;</li> 
<li>OFF: No transmission.</li>
Note: This parameter is optional when L4ProxyRule is used as an input parameter in CreateL4ProxyRules, and if not specified, the default value OFF will be used; it is optional when L4ProxyRule is used as an input parameter in ModifyL4ProxyRules. If not specified, it will retain its existing value.
         * @type {string || null}
         */
        this.ClientIPPassThroughMode = null;

        /**
         * Specifies whether to enable session persistence. Valid values:
<li>on: Enable;</li>
<li>off: Disable.</li>
Note: This parameter is optional when L4ProxyRule is used as an input parameter in CreateL4ProxyRules, and if not specified, the default value off will be used; it is optional when L4ProxyRule is used as an input parameter in ModifyL4ProxyRules. If not specified, it will retain its existing value.
         * @type {string || null}
         */
        this.SessionPersist = null;

        /**
         * Session persistence period, with a range of 30-3600, measured in seconds.
Note: This parameter is optional when L4ProxyRule is used as an input parameter in CreateL4ProxyRules. It is valid only when SessionPersist is set to on and defaults to 3600 if not specified. It is optional when L4ProxyRule is used as an input parameter in ModifyL4ProxyRules. If not specified, it will retain its existing value.
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Rule tag. Accepts 1-50 arbitrary characters.
Note: This parameter is optional when L4ProxyRule is used as an input parameter in CreateL4ProxyRules; it is optional when L4ProxyRule is used as an input parameter in ModifyL4ProxyRules. If not specified, it will retain its existing value.
         * @type {string || null}
         */
        this.RuleTag = null;

        /**
         * Rule status. Valid values:<li>online: Enabled;</li>
<li>offline: Disabled;</li>
<li>progress: Deploying;</li>
<li>stopping: Disabling;</li>
<li>fail: Failed to deploy or disable.</li>
Note: Do not set this parameter when L4ProxyRule is used as an input parameter in CreateL4ProxyRules and ModifyL4ProxyRules.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * BuID.
         * @type {string || null}
         */
        this.BuId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.OriginPortRange = 'OriginPortRange' in params ? params.OriginPortRange : null;
        this.ClientIPPassThroughMode = 'ClientIPPassThroughMode' in params ? params.ClientIPPassThroughMode : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.RuleTag = 'RuleTag' in params ? params.RuleTag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BuId = 'BuId' in params ? params.BuId : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Custom error page's referenced source
 * @class
 */
class ErrorPageReference extends  AbstractModel {
    constructor(){
        super();

        /**
         * Referenced business ID, such as the custom block rule ID.
         * @type {string || null}
         */
        this.BusinessId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;

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
 * DeleteL4Proxy response structure.
 * @class
 */
class DeleteL4ProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyApplicationProxyRuleStatus response structure.
 * @class
 */
class ModifyApplicationProxyRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Origin server type. Valid values:<li>custom: Manually added;</li>
<li>loadbalancer: Cloud Load Balancer;</li><li>origins: Origin server group.</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Details of the origin server:<li>When OriginType is custom, it indicates one or more origin servers, such as ["8.8.8.8","9.9.9.9"] or OriginValue=["test.com"];</li><li>When OriginType is loadbalancer, it indicates a single Cloud Load Balancer, such as ["lb-xdffsfasdfs"];</li><li>When OriginType is origins, it requires one and only one element, which represents an origin server group ID, such as ["origin-537f5b41-162a-11ed-abaa-525400c5da15"].</li>
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

        /**
         * Rule tag. This parameter is left empty by default.
         * @type {string || null}
         */
        this.RuleTag = null;

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
        this.RuleTag = 'RuleTag' in params ? params.RuleTag : null;

    }
}

/**
 * IncreasePlanQuota response structure.
 * @class
 */
class IncreasePlanQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order number.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIPRegion response structure.
 * @class
 */
class DescribeIPRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IP attribution information.
         * @type {Array.<IPRegionInfo> || null}
         */
        this.IPRegionInfo = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IPRegionInfo) {
            this.IPRegionInfo = new Array();
            for (let z in params.IPRegionInfo) {
                let obj = new IPRegionInfo();
                obj.deserialize(params.IPRegionInfo[z]);
                this.IPRegionInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * IncreasePlanQuota request structure.
 * @class
 */
class IncreasePlanQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Plan ID, formatted as edgeone-2unuvzjmmn2q.
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * The types of new plan quotas available include:<li> site: Number of sites;</li><li> precise_access_control_rule: the number of rules under "Web Protection - Custom Rules - Precision Matching Policy";</li><li> rate_limiting_rule: the number of rules under "Web Protection - Rate Limiting - Precision Rate Limiting Module". </li>
         * @type {string || null}
         */
        this.QuotaType = null;

        /**
         * Number of new quotas. The maximum number of quotas that can be added at one time is 100.
         * @type {number || null}
         */
        this.QuotaNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.QuotaType = 'QuotaType' in params ? params.QuotaType : null;
        this.QuotaNumber = 'QuotaNumber' in params ? params.QuotaNumber : null;

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
         * Site ID set. This parameter is required.
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
 * CreateCLSIndex request structure.
 * @class
 */
class CreateCLSIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The ID of the real-time log delivery task.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of L7 logs.
         * @type {Array.<L7OfflineLog> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new L7OfflineLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * ID of the site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Accelerated domain name
         * @type {string || null}
         */
        this.DomainName = null;

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
         * Details of the origin.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {OriginDetail || null}
         */
        this.OriginDetail = null;

        /**
         * Origin-pull protocol configuration. Values:
<li>`FOLLOW`: Follow the protocol of origin</li>
<li>`HTTP`: Send requests to the origin over HTTP</li>
<li>`HTTPS`: Send requests to the origin over HTTPS</li>
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginProtocol = null;

        /**
         * The port used for HTTP origin-pull requests
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HttpOriginPort = null;

        /**
         * The port used for HTTPS origin-pull requests
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HttpsOriginPort = null;

        /**
         * IPv6 status. Values:
<li>`follow`: Follow the IPv6 configuration of the site</li>
<li>`on`: Enable</li>
<li>`off`: Disable</li>
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IPv6Status = null;

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

        /**
         * Creation time of the accelerated domain name.
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Modification time of the accelerated domain name.
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * Information required to verify the ownership of a domain name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {OwnershipVerification || null}
         */
        this.OwnershipVerification = null;

        /**
         * Domain name certificate information
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {AccelerationDomainCertificate || null}
         */
        this.Certificate = null;

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
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;

        if (params.OriginDetail) {
            let obj = new OriginDetail();
            obj.deserialize(params.OriginDetail)
            this.OriginDetail = obj;
        }
        this.OriginProtocol = 'OriginProtocol' in params ? params.OriginProtocol : null;
        this.HttpOriginPort = 'HttpOriginPort' in params ? params.HttpOriginPort : null;
        this.HttpsOriginPort = 'HttpsOriginPort' in params ? params.HttpsOriginPort : null;
        this.IPv6Status = 'IPv6Status' in params ? params.IPv6Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.IdentificationStatus = 'IdentificationStatus' in params ? params.IdentificationStatus : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;

        if (params.OwnershipVerification) {
            let obj = new OwnershipVerification();
            obj.deserialize(params.OwnershipVerification)
            this.OwnershipVerification = obj;
        }

        if (params.Certificate) {
            let obj = new AccelerationDomainCertificate();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }

    }
}

/**
 * CreateCustomizeErrorPage response structure.
 * @class
 */
class CreateCustomizeErrorPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom response page ID.
         * @type {string || null}
         */
        this.PageId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Rule engine action for the HTTP request/response header
 * @class
 */
class RewriteAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Feature name. For details, see [DescribeRulesSetting](https://intl.cloud.tencent.com/document/product/1552/80618?from_cn_redirect=1) API
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
 * Domain names bound with the template. 
 * @class
 */
class TemplateScope extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of instance statuses
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<EntityStatus> || null}
         */
        this.EntityStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.EntityStatus) {
            this.EntityStatus = new Array();
            for (let z in params.EntityStatus) {
                let obj = new EntityStatus();
                obj.deserialize(params.EntityStatus[z]);
                this.EntityStatus.push(obj);
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
         * ZoneId set. This parameter is required.
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * Queried domain name set. This parameter has been discarded.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The protocol type. Values:
<li>`http`: HTTP protocol;</li>
<li>`https`: HTTPS protocol;</li>
<li>`http2`: HTTP2 protocol;</li>
<li>`all`: All protocols. </li>If it's not specified, `all` is used. This parameter is not yet available now.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The query granularity. Values:
<li>`min`: 1 minute;</li>
<li>`5min`: 5 minutes;</li>
<li>`hour`: 1 hour;</li>
<li>`day`: One day</li>If this field is not specified, the granularity will be determined based on the query period. <br>Period <= 1 hour: `min`; <br>1 hour < Period <= 2 days: `5min`; <br>2 days < period <= 7 days: `hour`; <br>Period > 7 days: `day`.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Filtering condition. The detailed filtering condition key values are as follows: 
<li>socket: Filter based on HTTP protocol type. Corresponding value options: <br> HTTP: HTTP protocol; <br> HTTPS: HTTPS protocol; <br> QUIC: QUIC protocol. </li>
<li>domains: Filter based on domain name. </li>
<li>tagKey: Filter based on Tag Key. </li>
<li>tagValue: Filter based on Tag Value. </li>
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
 * DeleteSharedCNAME response structure.
 * @class
 */
class DeleteSharedCNAMEResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteL4ProxyRules response structure.
 * @class
 */
class DeleteL4ProxyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateCustomizeErrorPage request structure.
 * @class
 */
class CreateCustomizeErrorPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Custom response page name. The name must be 2-30 characters long.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Custom response page type, with values:<li>text/html; </li><li>application/json;</li><li>text/plain;</li><li>text/xml.</li>
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * Custom response page description, not exceeding 60 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Custom response page content, not exceeding 2 KB.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeSecurityIPGroup request structure.
 * @class
 */
class DescribeSecurityIPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID, used to specify the scope of the queried site.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Specifies the ID of a security IP group.
<li>When this parameter is provided, only the configuration of the security IP group with the specified ID is queried.</li>
<li>When this parameter is not provided, information of all security IP groups under the site is returned.</li>
         * @type {Array.<number> || null}
         */
        this.GroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Information required for switching DNS servers. It's applicable to sites connected via NSs.
 * @class
 */
class NsVerification extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DNS server address assigned to the user when connecting a site to EO via NS. You need to switch the NameServer of the domain name to this address.
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NameServers = 'NameServers' in params ? params.NameServers : null;

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
         * The time when the standard debugging setting expires. If it is exceeded, this feature becomes invalid.
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
 * BindSecurityTemplateToEntity request structure.
 * @class
 */
class BindSecurityTemplateToEntityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID of the policy template to be bound to or unbound from.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of domain names to bind to/unbind from a policy template
         * @type {Array.<string> || null}
         */
        this.Entities = null;

        /**
         * Action options. Values include:
<li>`bind`: Bind the domain names to the specified policy template </li>
<li>`unbind-keep-policy`: Unbind a domain name from a policy template and keep the current policy when unbinding</li>
<li>`unbind-use-default`: Unbind domain names from policy templates and use default blank policy.</li> Note: Only one domain name can be unbound at one time. When `Operate` is `unbind-keep-policy` or `unbind-use-default`, there can only be one domain name specified in `Entities`.
         * @type {string || null}
         */
        this.Operate = null;

        /**
         * Specifies the ID of the policy template or the site's global policy to be bound or unbound.
- To bind to a policy template, or unbind from it, specify the policy template ID.
- To bind to the site's global policy, or unbind from it, use the @ZoneLevel@domain parameter value.

Note: After unbinding, the domain name will use an independent policy and rule quota will be calculated separately. Please make sure there is sufficient rule quota before unbinding.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Whether to replace the existing policy template bound with the domain name. Values: 
<li>`true`: Replace the template bound to the domain. </li>
<li>`false`: Do not replace the template.</li> Note: In this case, the API returns an error if there is already a policy template bound to the specified domain name.
         * @type {boolean || null}
         */
        this.OverWrite = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Entities = 'Entities' in params ? params.Entities : null;
        this.Operate = 'Operate' in params ? params.Operate : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.OverWrite = 'OverWrite' in params ? params.OverWrite : null;

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
 * DescribeBillingData response structure.
 * @class
 */
class DescribeBillingDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillingData> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new BillingData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Use the information returned by this parameter to verify the ownership of a domain name. For details, see [Ownership Verification](https://intl.cloud.tencent.com/document/product/1552/70789?from_cn_redirect=1).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {OwnershipVerification || null}
         */
        this.OwnershipVerification = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OwnershipVerification) {
            let obj = new OwnershipVerification();
            obj.deserialize(params.OwnershipVerification)
            this.OwnershipVerification = obj;
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
 * CreateZone response structure.
 * @class
 */
class CreateZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site ownership verification information. After the site is created, you need to complete the ownership verification before the site can serve normally.

If `Type=partial`, add TXT records to your DNS provider or add files to the root DNS server, and then call [VerifyOwnership]() to complete verification. For more information, see [Ownership Verification](https://intl.cloud.tencent.com/document/product/1552/70789?from_cn_redirect=1).

If `Type = full`, switch the DNS server as instructed by [Modifying DNS Server](https://intl.cloud.tencent.com/document/product/1552/90452?from_cn_redirect=1). Then call [VerifyOwnership]() to check the result.

If `Type = noDomainAccess`, leave it blank. No action is required.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {OwnershipVerification || null}
         */
        this.OwnershipVerification = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.OwnershipVerification) {
            let obj = new OwnershipVerification();
            obj.deserialize(params.OwnershipVerification)
            this.OwnershipVerification = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * (Required) Origin group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Origin group name. It can contain 1 to 200 characters ([a-z], [A-Z], [0-9] and [_-]). The original configuration applies if this field is not specified.	
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The origin grouptype. Values:
<li>`GENERAL`: General origin groups. It supports IPs and domain names. It can be referenced by DNS, Rule Engine, Layer 4 Proxy and General LoadBalancer.</li>
<li>`HTTP`: HTTP-specific origin groups. It supports IPs/domain names and object storage buckets. It can be referenced by acceleration domain names, rule engines and HTTP LoadBalancer. It cannot be referenced by L4 proxies. </li>The original configuration is used if it's not specified.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Origin information. The original configuration is used if it's not specified.
         * @type {Array.<OriginRecord> || null}
         */
        this.Records = null;

        /**
         * Host header used for origin-pull. It only works when `Type=HTTP`. If it's not specified, no specific Host header is configured. The `HostHeader` specified in `RuleEngine` takes a higher priority over this configuration. 
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new OriginRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.HostHeader = 'HostHeader' in params ? params.HostHeader : null;

    }
}

/**
 * Bindings of a security policy template
 * @class
 */
class SecurityTemplateBinding extends  AbstractModel {
    constructor(){
        super();

        /**
         * template ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Binding status of the template.
         * @type {Array.<TemplateScope> || null}
         */
        this.TemplateScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.TemplateScope) {
            this.TemplateScope = new Array();
            for (let z in params.TemplateScope) {
                let obj = new TemplateScope();
                obj.deserialize(params.TemplateScope[z]);
                this.TemplateScope.push(obj);
            }
        }

    }
}

/**
 * The information attached when the node cache purge type is set to purge_cache_tag.
 * @class
 */
class CacheTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of domain names to purge cache for.
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
        this.Domains = 'Domains' in params ? params.Domains : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Information of domain name ownership verification.
 * @class
 */
class OwnershipVerification extends  AbstractModel {
    constructor(){
        super();

        /**
         * u200cInformation required for authentication using DNS resolution. It's applicable to sites connected via CNAME. See [Ownership Verification](https://intl.cloud.tencent.com/document/product/1552/70789?from_cn_redirect=1#7af6ecf8-afca-4e35-8811-b5797ed1bde5).
 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {DnsVerification || null}
         */
        this.DnsVerification = null;

        /**
         * u200cInformation required for verifying via a file. It's applicable to sites connected via CNAMEs. See [Ownership Verification](https://intl.cloud.tencent.com/document/product/1552/70789?from_cn_redirect=1#7af6ecf8-afca-4e35-8811-b5797ed1bde5).
 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {FileVerification || null}
         */
        this.FileVerification = null;

        /**
         * u200cInformation required for switching DNS servers. It's applicable to sites connected via NSs. For details, see [Modifying DNS Server](https://intl.cloud.tencent.com/document/product/1552/90452?from_cn_redirect=1).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {NsVerification || null}
         */
        this.NsVerification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DnsVerification) {
            let obj = new DnsVerification();
            obj.deserialize(params.DnsVerification)
            this.DnsVerification = obj;
        }

        if (params.FileVerification) {
            let obj = new FileVerification();
            obj.deserialize(params.FileVerification)
            this.FileVerification = obj;
        }

        if (params.NsVerification) {
            let obj = new NsVerification();
            obj.deserialize(params.NsVerification)
            this.NsVerification = obj;
        }

    }
}

/**
 * DescribeConfigGroupVersions request structure.
 * @class
 */
class DescribeConfigGroupVersionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Configuraration group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Filtering condition. The maximum value of Filters.Values is 20. If this parameter is not specified, all version information for the selected configuration group is returned. Detailed filtering conditions: 
<li>version-id: Filter by version ID.</li>
         * @type {Array.<AdvancedFilter> || null}
         */
        this.Filters = null;

        /**
         * Paging query offset. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limited entries in paging queries. The default value is 20 and the maximum value is 100. 
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeL4ProxyRules request structure.
 * @class
 */
class DescribeL4ProxyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer 4 proxy instance ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Paginated query offset. Defaults to 0 when not specified.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Paginated query limit. Default value: 20. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter criteria. The upper limit for Filters.Values is 20. All rule information under the current Layer 4 instance will be returned if left empty. The detailed filter criteria are as follows: <li>rule-tag: Filters rules under the Layer 4 proxy instance according to rule tag.</li>
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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
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
 * CheckCnameStatus request structure.
 * @class
 */
class CheckCnameStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of accelerated domain names.
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
 * ModifyZoneStatus response structure.
 * @class
 */
class ModifyZoneStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeSecurityIPGroup response structure.
 * @class
 */
class DescribeSecurityIPGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Detailed configuration information of security IP groups, including the ID, name, and IP/IP range list information of each security IP group.
         * @type {Array.<IPGroup> || null}
         */
        this.IPGroups = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IPGroups) {
            this.IPGroups = new Array();
            for (let z in params.IPGroups) {
                let obj = new IPGroup();
                obj.deserialize(params.IPGroups[z]);
                this.IPGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradePlan request structure.
 * @class
 */
class UpgradePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Plan ID, formatted as edgeone-2unuvzjmmn2q.
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * Target plan version for upgrade. Valid values: <li>basic: Basic Edition Plan;</li><li>standard: Standard Edition Plan. </li>
         * @type {string || null}
         */
        this.PlanType = null;

        /**
         * Whether to automatically use a voucher. Valid values: <li>true: Yes;</li><li>false: No. </li> If this field is not specified, the default value 'false' will be used.
         * @type {string || null}
         */
        this.AutoUseVoucher = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.PlanType = 'PlanType' in params ? params.PlanType : null;
        this.AutoUseVoucher = 'AutoUseVoucher' in params ? params.AutoUseVoucher : null;

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
         * Node cache purge method, valid for directory, hostname, and all cache refreshes. Valid values: <li>invalidate: Refreshes only resources that were updated under the directory; </li><li>delete: Refreshes all node resources, regardless of whether they were updated. </li>Default value: invalidate.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * List of resources for which cache is to be purged. Each element format depends on the cache purge type and you can refer to the API examples for details. <li>The number of tasks that can be submitted at a time is limited by the quota of a billing package. For details, see [Billing Overview] (https://intl.cloud.tencent.com/document/product/1552/77380?from_cn_redirect=1).</li>
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * Specifies whether to transcode non-ASCII URLs according to RFC3986.
Note that if it’s enabled, the purging is based on the converted URLs.
         * @type {boolean || null}
         */
        this.EncodeUrl = null;

        /**
         * The information attached when the node cache purge type is set to purge_cache_tag.
         * @type {CacheTag || null}
         */
        this.CacheTag = null;

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

        if (params.CacheTag) {
            let obj = new CacheTag();
            obj.deserialize(params.CacheTag)
            this.CacheTag = obj;
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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeployConfigGroupVersion response structure.
 * @class
 */
class DeployConfigGroupVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Release record ID.
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
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
 * DescribeDeployHistory response structure.
 * @class
 */
class DescribeDeployHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total release records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Release record details.
         * @type {Array.<DeployRecord> || null}
         */
        this.Records = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new DeployRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
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
 * DescribeAccelerationDomains request structure.
 * @class
 */
class DescribeAccelerationDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site related with the acceleration domain name.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Offset for paginated queries. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: 20. Maximum value: 200.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter conditions. The maximum value of Filters.Values is 20. If it is not specified, all domains related with the specific zone-id are returned.
<li>domain-name: Filtering based on the acceleration domain name</li>
<li>origin-type: Filtering based on the type of the origin server</li>
<li>origin: Filtering based on the primary origin server address</li>
<li>backup-origin: Filtering based on the secondary origin server address</li>
<li>domain-cname: Filtering based on the CNAME</li>
<li>share-cname: Filtering based on the shared CNAME</li>
<li>vodeo-sub-app-id: Filtering based on [vodeo sub-application ID]</li>
<li>vodeo-distribution-range: Filtering based on [vodeo distribution range]</li>
<li>vodeo-bucket-id: Filtering based on [vodeo storage bucket ID];</li>
         * @type {Array.<AdvancedFilter> || null}
         */
        this.Filters = null;

        /**
         * Sort the returned results according to this field. Values include:
<li>`created_on`: Creation time of the acceleration domain name</li>
<li>`domain-name`: (Default) Acceleration domain name.</li> 
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sort direction. If the field value is number, sort by the numeric value. If the field value is text, sort by the ascill code. Values include:
<li>`asc`: Ascending order.</li>
<li>`desc`: Descending order.</li> Default value: `asc`.
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
        this.Order = 'Order' in params ? params.Order : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Match = 'Match' in params ? params.Match : null;

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
         * Query indicator. Values: 
<li>l4Flow_connections: Number of access connections;</li>
<li>l4Flow_flux: Total access traffic;</li>
<li>l4Flow_inFlux: Ingress access traffic;</li>
<li>l4Flow_outFlux: Egress access traffic. </li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * ZoneId set. This parameter is required.
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

module.exports = {
    DeployConfigGroupVersionRequest: DeployConfigGroupVersionRequest,
    RenewFlag: RenewFlag,
    Compression: Compression,
    DeleteL4ProxyRulesRequest: DeleteL4ProxyRulesRequest,
    DescribeOriginGroupResponse: DescribeOriginGroupResponse,
    DescribeSecurityIPGroupInfoResponse: DescribeSecurityIPGroupInfoResponse,
    SlowPostConfig: SlowPostConfig,
    DescribeConfigGroupVersionDetailResponse: DescribeConfigGroupVersionDetailResponse,
    OriginDetail: OriginDetail,
    PrepaidPlanParam: PrepaidPlanParam,
    ModifyAccelerationDomainResponse: ModifyAccelerationDomainResponse,
    TopEntryValue: TopEntryValue,
    DescribeHostsSettingResponse: DescribeHostsSettingResponse,
    Origin: Origin,
    DescribeRulesResponse: DescribeRulesResponse,
    TimingDataRecord: TimingDataRecord,
    CreateCLSIndexResponse: CreateCLSIndexResponse,
    DescribeRealtimeLogDeliveryTasksRequest: DescribeRealtimeLogDeliveryTasksRequest,
    DescribeOriginProtectionResponse: DescribeOriginProtectionResponse,
    DescribeBillingDataRequest: DescribeBillingDataRequest,
    LogFormat: LogFormat,
    DescribeEnvironmentsRequest: DescribeEnvironmentsRequest,
    DescribeAliasDomainsRequest: DescribeAliasDomainsRequest,
    RateLimitConfig: RateLimitConfig,
    CreateRealtimeLogDeliveryTaskRequest: CreateRealtimeLogDeliveryTaskRequest,
    ModifyAccelerationDomainStatusesResponse: ModifyAccelerationDomainStatusesResponse,
    DeployRecord: DeployRecord,
    RuleExtraParameter: RuleExtraParameter,
    WebSocket: WebSocket,
    ModifyAccelerationDomainRequest: ModifyAccelerationDomainRequest,
    WafConfig: WafConfig,
    CreateAliasDomainRequest: CreateAliasDomainRequest,
    CLSTopic: CLSTopic,
    CreatePrefetchTaskRequest: CreatePrefetchTaskRequest,
    DescribeApplicationProxiesResponse: DescribeApplicationProxiesResponse,
    DescribeTopL7AnalysisDataRequest: DescribeTopL7AnalysisDataRequest,
    DescribeAccelerationDomainsResponse: DescribeAccelerationDomainsResponse,
    SwitchConfig: SwitchConfig,
    IdentifyZoneResponse: IdentifyZoneResponse,
    ModifyL4ProxyResponse: ModifyL4ProxyResponse,
    DescribeAliasDomainsResponse: DescribeAliasDomainsResponse,
    EnvInfo: EnvInfo,
    PlanInfo: PlanInfo,
    DescribeTimingL7CacheDataRequest: DescribeTimingL7CacheDataRequest,
    S3: S3,
    DescribeDDoSAttackEventResponse: DescribeDDoSAttackEventResponse,
    DescribePrefetchTasksRequest: DescribePrefetchTasksRequest,
    ForceRedirect: ForceRedirect,
    CodeAction: CodeAction,
    CachePrefresh: CachePrefresh,
    DescribeTimingL7AnalysisDataResponse: DescribeTimingL7AnalysisDataResponse,
    ImageOptimize: ImageOptimize,
    BotPortraitRule: BotPortraitRule,
    RulesProperties: RulesProperties,
    RuleCodeActionParams: RuleCodeActionParams,
    OriginGroupReference: OriginGroupReference,
    ExceptUserRule: ExceptUserRule,
    AccelerateType: AccelerateType,
    ModifyCustomErrorPageResponse: ModifyCustomErrorPageResponse,
    SubRule: SubRule,
    ConfigGroupVersionInfo: ConfigGroupVersionInfo,
    VerifyOwnershipResponse: VerifyOwnershipResponse,
    Sv: Sv,
    Rule: Rule,
    DownloadL4LogsRequest: DownloadL4LogsRequest,
    ModifyZoneSettingRequest: ModifyZoneSettingRequest,
    BillingDataFilter: BillingDataFilter,
    DeleteCustomErrorPageResponse: DeleteCustomErrorPageResponse,
    DescribeTimingL7CacheDataResponse: DescribeTimingL7CacheDataResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    Header: Header,
    DeleteCustomErrorPageRequest: DeleteCustomErrorPageRequest,
    CustomField: CustomField,
    DeleteZoneRequest: DeleteZoneRequest,
    BotManagedRule: BotManagedRule,
    SecurityConfig: SecurityConfig,
    L4OfflineLog: L4OfflineLog,
    ModifyPlanRequest: ModifyPlanRequest,
    CustomErrorPage: CustomErrorPage,
    SecEntryValue: SecEntryValue,
    ModifyL4ProxyRulesRequest: ModifyL4ProxyRulesRequest,
    DescribeRulesSettingRequest: DescribeRulesSettingRequest,
    EntityStatus: EntityStatus,
    ModifyAliasDomainRequest: ModifyAliasDomainRequest,
    RuleNormalActionParams: RuleNormalActionParams,
    PrivateParameter: PrivateParameter,
    CreateSecurityIPGroupRequest: CreateSecurityIPGroupRequest,
    CreateOriginGroupRequest: CreateOriginGroupRequest,
    TopDataRecord: TopDataRecord,
    CreateSecurityIPGroupResponse: CreateSecurityIPGroupResponse,
    CreateSharedCNAMEResponse: CreateSharedCNAMEResponse,
    DescribeAvailablePlansResponse: DescribeAvailablePlansResponse,
    RateLimitTemplate: RateLimitTemplate,
    ModifyRealtimeLogDeliveryTaskResponse: ModifyRealtimeLogDeliveryTaskResponse,
    AccelerationDomainCertificate: AccelerationDomainCertificate,
    DescribeSecurityTemplateBindingsRequest: DescribeSecurityTemplateBindingsRequest,
    AlgDetectResult: AlgDetectResult,
    DefaultServerCertInfo: DefaultServerCertInfo,
    OfflineCache: OfflineCache,
    DescribeDDoSAttackTopDataResponse: DescribeDDoSAttackTopDataResponse,
    DeleteRulesRequest: DeleteRulesRequest,
    ExceptUserRuleCondition: ExceptUserRuleCondition,
    MaxAge: MaxAge,
    DescribeCustomErrorPagesResponse: DescribeCustomErrorPagesResponse,
    DeleteApplicationProxyResponse: DeleteApplicationProxyResponse,
    AlgDetectRule: AlgDetectRule,
    DiffIPWhitelist: DiffIPWhitelist,
    DeleteSecurityIPGroupResponse: DeleteSecurityIPGroupResponse,
    ModifyRuleRequest: ModifyRuleRequest,
    RenewPlanRequest: RenewPlanRequest,
    DescribePrefetchTasksResponse: DescribePrefetchTasksResponse,
    DescribeZoneSettingRequest: DescribeZoneSettingRequest,
    ModifyL4ProxyStatusResponse: ModifyL4ProxyStatusResponse,
    FileVerification: FileVerification,
    ModifySecurityPolicyRequest: ModifySecurityPolicyRequest,
    SmartRouting: SmartRouting,
    CreateApplicationProxyResponse: CreateApplicationProxyResponse,
    BotUserRule: BotUserRule,
    Task: Task,
    DescribeL4ProxyRulesResponse: DescribeL4ProxyRulesResponse,
    DeleteAliasDomainRequest: DeleteAliasDomainRequest,
    DescribeIdentificationsResponse: DescribeIdentificationsResponse,
    CreatePurgeTaskResponse: CreatePurgeTaskResponse,
    DeleteApplicationProxyRuleResponse: DeleteApplicationProxyRuleResponse,
    ExceptConfig: ExceptConfig,
    DeleteOriginGroupRequest: DeleteOriginGroupRequest,
    AclCondition: AclCondition,
    L7OfflineLog: L7OfflineLog,
    ModifyRuleResponse: ModifyRuleResponse,
    ApplicationProxyRule: ApplicationProxyRule,
    Zone: Zone,
    DescribeRulesSettingResponse: DescribeRulesSettingResponse,
    BindSecurityTemplateToEntityResponse: BindSecurityTemplateToEntityResponse,
    ModifyL4ProxyRulesResponse: ModifyL4ProxyRulesResponse,
    DDoSAttackEvent: DDoSAttackEvent,
    DescribeConfigGroupVersionDetailRequest: DescribeConfigGroupVersionDetailRequest,
    ModifyPlanResponse: ModifyPlanResponse,
    DropPageDetail: DropPageDetail,
    CnameStatus: CnameStatus,
    ServerCertInfo: ServerCertInfo,
    DescribeZonesRequest: DescribeZonesRequest,
    OriginRecord: OriginRecord,
    Tag: Tag,
    BindSharedCNAMEResponse: BindSharedCNAMEResponse,
    DeleteSharedCNAMERequest: DeleteSharedCNAMERequest,
    ModifyRealtimeLogDeliveryTaskRequest: ModifyRealtimeLogDeliveryTaskRequest,
    VanityNameServers: VanityNameServers,
    DestroyPlanRequest: DestroyPlanRequest,
    CreatePlanRequest: CreatePlanRequest,
    IPGroup: IPGroup,
    CreatePrefetchTaskResponse: CreatePrefetchTaskResponse,
    DescribeDefaultCertificatesRequest: DescribeDefaultCertificatesRequest,
    ModifyApplicationProxyRuleResponse: ModifyApplicationProxyRuleResponse,
    DDoS: DDoS,
    CreateConfigGroupVersionResponse: CreateConfigGroupVersionResponse,
    DownloadL7LogsRequest: DownloadL7LogsRequest,
    RuleItem: RuleItem,
    SlowRateConfig: SlowRateConfig,
    Cache: Cache,
    DetailHost: DetailHost,
    DescribeRealtimeLogDeliveryTasksResponse: DescribeRealtimeLogDeliveryTasksResponse,
    DescribeConfigGroupVersionsResponse: DescribeConfigGroupVersionsResponse,
    DeleteRealtimeLogDeliveryTaskResponse: DeleteRealtimeLogDeliveryTaskResponse,
    RuleCondition: RuleCondition,
    DescribeOverviewL7DataResponse: DescribeOverviewL7DataResponse,
    DescribeEnvironmentsResponse: DescribeEnvironmentsResponse,
    TimingDataItem: TimingDataItem,
    RateLimitUserRule: RateLimitUserRule,
    CreatePlanForZoneRequest: CreatePlanForZoneRequest,
    CreateL4ProxyRulesResponse: CreateL4ProxyRulesResponse,
    ModifyCustomErrorPageRequest: ModifyCustomErrorPageRequest,
    CacheKey: CacheKey,
    DownloadL4LogsResponse: DownloadL4LogsResponse,
    BindSharedCNAMERequest: BindSharedCNAMERequest,
    IpTableConfig: IpTableConfig,
    DeleteOriginGroupResponse: DeleteOriginGroupResponse,
    DescribeL4ProxyRequest: DescribeL4ProxyRequest,
    DescribeIdentificationsRequest: DescribeIdentificationsRequest,
    ModifyHostsCertificateResponse: ModifyHostsCertificateResponse,
    CreateAccelerationDomainRequest: CreateAccelerationDomainRequest,
    NormalAction: NormalAction,
    TopDetailData: TopDetailData,
    DescribeZoneSettingResponse: DescribeZoneSettingResponse,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    IdentifyZoneRequest: IdentifyZoneRequest,
    CacheConfig: CacheConfig,
    UpgradePlanResponse: UpgradePlanResponse,
    CreateL4ProxyRulesRequest: CreateL4ProxyRulesRequest,
    CreateConfigGroupVersionRequest: CreateConfigGroupVersionRequest,
    AclUserRule: AclUserRule,
    DescribeDDoSAttackEventRequest: DescribeDDoSAttackEventRequest,
    CreateL4ProxyResponse: CreateL4ProxyResponse,
    DescribeOriginGroupRequest: DescribeOriginGroupRequest,
    DescribeIPRegionRequest: DescribeIPRegionRequest,
    TimingTypeValue: TimingTypeValue,
    CreatePlanForZoneResponse: CreatePlanForZoneResponse,
    ModifyL4ProxyRulesStatusResponse: ModifyL4ProxyRulesStatusResponse,
    CheckCnameStatusResponse: CheckCnameStatusResponse,
    CustomEndpoint: CustomEndpoint,
    VerifyOwnershipRequest: VerifyOwnershipRequest,
    DeleteL4ProxyRequest: DeleteL4ProxyRequest,
    DeleteApplicationProxyRequest: DeleteApplicationProxyRequest,
    ModifyZoneStatusRequest: ModifyZoneStatusRequest,
    FailReason: FailReason,
    DescribeL4ProxyResponse: DescribeL4ProxyResponse,
    ModifyOriginGroupResponse: ModifyOriginGroupResponse,
    DeleteAccelerationDomainsRequest: DeleteAccelerationDomainsRequest,
    RenewPlanResponse: RenewPlanResponse,
    RealtimeLogDeliveryTask: RealtimeLogDeliveryTask,
    DescribeDeployHistoryRequest: DescribeDeployHistoryRequest,
    BillingData: BillingData,
    DeleteZoneResponse: DeleteZoneResponse,
    CreateRuleResponse: CreateRuleResponse,
    BindZoneToPlanResponse: BindZoneToPlanResponse,
    WafRule: WafRule,
    ModifyApplicationProxyRequest: ModifyApplicationProxyRequest,
    ModifyAliasDomainStatusRequest: ModifyAliasDomainStatusRequest,
    BindSharedCNAMEMap: BindSharedCNAMEMap,
    DeleteRealtimeLogDeliveryTaskRequest: DeleteRealtimeLogDeliveryTaskRequest,
    RulesSettingAction: RulesSettingAction,
    Ipv6: Ipv6,
    ModifyApplicationProxyRuleRequest: ModifyApplicationProxyRuleRequest,
    AclConfig: AclConfig,
    AlgDetectJS: AlgDetectJS,
    SubRuleItem: SubRuleItem,
    DeleteSecurityIPGroupRequest: DeleteSecurityIPGroupRequest,
    Grpc: Grpc,
    CreateAliasDomainResponse: CreateAliasDomainResponse,
    ClientIpCountry: ClientIpCountry,
    DeleteApplicationProxyRuleRequest: DeleteApplicationProxyRuleRequest,
    FileAscriptionInfo: FileAscriptionInfo,
    CreateRealtimeLogDeliveryTaskResponse: CreateRealtimeLogDeliveryTaskResponse,
    DescribeTopL7CacheDataResponse: DescribeTopL7CacheDataResponse,
    RuleChoicePropertiesItem: RuleChoicePropertiesItem,
    DescribeSecurityTemplateBindingsResponse: DescribeSecurityTemplateBindingsResponse,
    ModifyAliasDomainStatusResponse: ModifyAliasDomainStatusResponse,
    DescribeTimingL7AnalysisDataRequest: DescribeTimingL7AnalysisDataRequest,
    NoCache: NoCache,
    ModifyApplicationProxyStatusRequest: ModifyApplicationProxyStatusRequest,
    CreateZoneRequest: CreateZoneRequest,
    AscriptionInfo: AscriptionInfo,
    FirstPartConfig: FirstPartConfig,
    Waf: Waf,
    ModifyZoneRequest: ModifyZoneRequest,
    DDosProtectionConfig: DDosProtectionConfig,
    DescribeDDoSAttackDataRequest: DescribeDDoSAttackDataRequest,
    CreateL4ProxyRequest: CreateL4ProxyRequest,
    CreatePlanResponse: CreatePlanResponse,
    DescribeApplicationProxiesRequest: DescribeApplicationProxiesRequest,
    DescribeContentQuotaRequest: DescribeContentQuotaRequest,
    Hsts: Hsts,
    CreateOriginGroupResponse: CreateOriginGroupResponse,
    CreateRuleRequest: CreateRuleRequest,
    ModifyL4ProxyStatusRequest: ModifyL4ProxyStatusRequest,
    RateLimitTemplateDetail: RateLimitTemplateDetail,
    CreateApplicationProxyRuleResponse: CreateApplicationProxyRuleResponse,
    CertificateInfo: CertificateInfo,
    CreateApplicationProxyRequest: CreateApplicationProxyRequest,
    CC: CC,
    ModifyL4ProxyRulesStatusRequest: ModifyL4ProxyRulesStatusRequest,
    DescribeCustomErrorPagesRequest: DescribeCustomErrorPagesRequest,
    DescribeTimingL4DataResponse: DescribeTimingL4DataResponse,
    Action: Action,
    ApplicationProxy: ApplicationProxy,
    ModifyApplicationProxyResponse: ModifyApplicationProxyResponse,
    ModifySecurityIPGroupResponse: ModifySecurityIPGroupResponse,
    ZoneSetting: ZoneSetting,
    ModifyL4ProxyRequest: ModifyL4ProxyRequest,
    RuleAndConditions: RuleAndConditions,
    DropPageConfig: DropPageConfig,
    DescribeSecurityIPGroupInfoRequest: DescribeSecurityIPGroupInfoRequest,
    ExceptUserRuleScope: ExceptUserRuleScope,
    PartialModule: PartialModule,
    ModifyApplicationProxyRuleStatusRequest: ModifyApplicationProxyRuleStatusRequest,
    SecEntry: SecEntry,
    DeliveryCondition: DeliveryCondition,
    FollowOrigin: FollowOrigin,
    IPRegionInfo: IPRegionInfo,
    DestroyPlanResponse: DestroyPlanResponse,
    QueryCondition: QueryCondition,
    RuleRewriteActionParams: RuleRewriteActionParams,
    ModifyAliasDomainResponse: ModifyAliasDomainResponse,
    ModifyHostsCertificateRequest: ModifyHostsCertificateRequest,
    DeleteAccelerationDomainsResponse: DeleteAccelerationDomainsResponse,
    DescribeTopL7AnalysisDataResponse: DescribeTopL7AnalysisDataResponse,
    ClientIpHeader: ClientIpHeader,
    Resource: Resource,
    DescribeOriginProtectionRequest: DescribeOriginProtectionRequest,
    DescribeHostsSettingRequest: DescribeHostsSettingRequest,
    DeleteRulesResponse: DeleteRulesResponse,
    OriginGroup: OriginGroup,
    ModifySecurityIPGroupRequest: ModifySecurityIPGroupRequest,
    L4Proxy: L4Proxy,
    SkipCondition: SkipCondition,
    CreateSharedCNAMERequest: CreateSharedCNAMERequest,
    UpstreamHttp2: UpstreamHttp2,
    DeleteAliasDomainResponse: DeleteAliasDomainResponse,
    BotConfig: BotConfig,
    DnsVerification: DnsVerification,
    DescribeTopL7CacheDataRequest: DescribeTopL7CacheDataRequest,
    OriginInfo: OriginInfo,
    Https: Https,
    L4ProxyRule: L4ProxyRule,
    AdvancedFilter: AdvancedFilter,
    DescribeDDoSAttackDataResponse: DescribeDDoSAttackDataResponse,
    TemplateConfig: TemplateConfig,
    ErrorPageReference: ErrorPageReference,
    BotExtendAction: BotExtendAction,
    DeleteL4ProxyResponse: DeleteL4ProxyResponse,
    ModifyApplicationProxyRuleStatusResponse: ModifyApplicationProxyRuleStatusResponse,
    CreateApplicationProxyRuleRequest: CreateApplicationProxyRuleRequest,
    IncreasePlanQuotaResponse: IncreasePlanQuotaResponse,
    DescribeIPRegionResponse: DescribeIPRegionResponse,
    DescribeAvailablePlansRequest: DescribeAvailablePlansRequest,
    ModifyZoneResponse: ModifyZoneResponse,
    AlgDetectSession: AlgDetectSession,
    OriginProtectionInfo: OriginProtectionInfo,
    AliasDomain: AliasDomain,
    IpTableRule: IpTableRule,
    IncreasePlanQuotaRequest: IncreasePlanQuotaRequest,
    DescribeDDoSAttackTopDataRequest: DescribeDDoSAttackTopDataRequest,
    Quic: Quic,
    CreateCLSIndexRequest: CreateCLSIndexRequest,
    DescribeRulesRequest: DescribeRulesRequest,
    DescribeContentQuotaResponse: DescribeContentQuotaResponse,
    ModifyZoneSettingResponse: ModifyZoneSettingResponse,
    DownloadL7LogsResponse: DownloadL7LogsResponse,
    AccelerationDomain: AccelerationDomain,
    CreateCustomizeErrorPageResponse: CreateCustomizeErrorPageResponse,
    RewriteAction: RewriteAction,
    TemplateScope: TemplateScope,
    DescribeOverviewL7DataRequest: DescribeOverviewL7DataRequest,
    DeleteSharedCNAMEResponse: DeleteSharedCNAMEResponse,
    DDoSBlockData: DDoSBlockData,
    DeleteL4ProxyRulesResponse: DeleteL4ProxyRulesResponse,
    BindZoneToPlanRequest: BindZoneToPlanRequest,
    SecurityType: SecurityType,
    IPWhitelist: IPWhitelist,
    CreateCustomizeErrorPageRequest: CreateCustomizeErrorPageRequest,
    DescribeSecurityIPGroupRequest: DescribeSecurityIPGroupRequest,
    ModifyApplicationProxyStatusResponse: ModifyApplicationProxyStatusResponse,
    Identification: Identification,
    TopEntry: TopEntry,
    NsVerification: NsVerification,
    AccelerateMainland: AccelerateMainland,
    StandardDebug: StandardDebug,
    BindSecurityTemplateToEntityRequest: BindSecurityTemplateToEntityRequest,
    IntelligenceRuleItem: IntelligenceRuleItem,
    IntelligenceRule: IntelligenceRule,
    PostMaxSize: PostMaxSize,
    DescribeBillingDataResponse: DescribeBillingDataResponse,
    Filter: Filter,
    CreateAccelerationDomainResponse: CreateAccelerationDomainResponse,
    ModifyAccelerationDomainStatusesRequest: ModifyAccelerationDomainStatusesRequest,
    CreateZoneResponse: CreateZoneResponse,
    ModifySecurityPolicyResponse: ModifySecurityPolicyResponse,
    ModifyOriginGroupRequest: ModifyOriginGroupRequest,
    SecurityTemplateBinding: SecurityTemplateBinding,
    CacheTag: CacheTag,
    DescribeDefaultCertificatesResponse: DescribeDefaultCertificatesResponse,
    OwnershipVerification: OwnershipVerification,
    DescribeConfigGroupVersionsRequest: DescribeConfigGroupVersionsRequest,
    DescribeL4ProxyRulesRequest: DescribeL4ProxyRulesRequest,
    AiRule: AiRule,
    Quota: Quota,
    CheckCnameStatusRequest: CheckCnameStatusRequest,
    ModifyZoneStatusResponse: ModifyZoneStatusResponse,
    DescribeSecurityIPGroupResponse: DescribeSecurityIPGroupResponse,
    UpgradePlanRequest: UpgradePlanRequest,
    CreatePurgeTaskRequest: CreatePurgeTaskRequest,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    DeployConfigGroupVersionResponse: DeployConfigGroupVersionResponse,
    RateLimitIntelligence: RateLimitIntelligence,
    DescribeDeployHistoryResponse: DescribeDeployHistoryResponse,
    QueryString: QueryString,
    DescribeAccelerationDomainsRequest: DescribeAccelerationDomainsRequest,
    DescribeTimingL4DataRequest: DescribeTimingL4DataRequest,
    VanityNameServersIps: VanityNameServersIps,

}
