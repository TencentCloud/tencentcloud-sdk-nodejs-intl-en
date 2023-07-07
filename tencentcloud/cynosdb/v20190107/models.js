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
 * ModifyClusterName request structure.
 * @class
 */
class ModifyClusterNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * DescribeRollbackTimeRange request structure.
 * @class
 */
class DescribeRollbackTimeRangeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeResourcePackageList response structure.
 * @class
 */
class DescribeResourcePackageListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of resource packs
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Resource pack details Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Package> || null}
         */
        this.Detail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new Package();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePriceRenew request structure.
 * @class
 */
class InquirePriceRenewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Validity period, which needs to be used together with `TimeUnit`.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Unit of validity period, which needs to be used together with `TimeSpan`. Valid values: `d` (day), `m` (month).
         * @type {string || null}
         */
        this.TimeUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

    }
}

/**
 * DescribeAccountPrivileges response structure.
 * @class
 */
class DescribeAccountPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of permissions, such as  ["select","update","delete","create","drop","references","index","alter","show_db","create_tmp_table","lock_tables","execute","create_view","show_view","create_routine","alter_routine","event","trigger"]
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Audit rule details of the instance, which is an output parameter of the `DescribeAuditRuleWithInstanceIds` API.
 * @class
 */
class InstanceAuditRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether the audit is rule audit. Valid values: `true` (rule audit), `false` (full audit).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AuditRule = null;

        /**
         * Audit rule details, which is valid only when `AuditRule` is `true`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AuditRuleFilters> || null}
         */
        this.AuditRuleFilters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AuditRule = 'AuditRule' in params ? params.AuditRule : null;

        if (params.AuditRuleFilters) {
            this.AuditRuleFilters = new Array();
            for (let z in params.AuditRuleFilters) {
                let obj = new AuditRuleFilters();
                obj.deserialize(params.AuditRuleFilters[z]);
                this.AuditRuleFilters.push(obj);
            }
        }

    }
}

/**
 * CreateResourcePackage request structure.
 * @class
 */
class CreateResourcePackageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Region of the resource pack. Valid values: `China` (Chinese mainland), `overseas` (outside Chinese mainland).
         * @type {string || null}
         */
        this.PackageRegion = null;

        /**
         * Resource pack type. Valid values:  `CCU` (compute resource pack), `DISK` (storage resource pack).
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Resource pack edition. Valid values: `base` (basic edition), `common` (general edition), `enterprise` (enterprise edition).
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * Resource pack size. Unit of the compute resource pack: Ten thousand.  Unit of the storage resource pack:  GB
         * @type {number || null}
         */
        this.PackageSpec = null;

        /**
         * Validity period of a resource pack in days
         * @type {number || null}
         */
        this.ExpireDay = null;

        /**
         * Number of the resource packs to be purchased
         * @type {number || null}
         */
        this.PackageCount = null;

        /**
         * Resource pack name
         * @type {string || null}
         */
        this.PackageName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.PackageRegion = 'PackageRegion' in params ? params.PackageRegion : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;
        this.PackageSpec = 'PackageSpec' in params ? params.PackageSpec : null;
        this.ExpireDay = 'ExpireDay' in params ? params.ExpireDay : null;
        this.PackageCount = 'PackageCount' in params ? params.PackageCount : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;

    }
}

/**
 * DescribeClusterDetailDatabases request structure.
 * @class
 */
class DescribeClusterDetailDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: `20`. Maximum value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DbName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.DbName = 'DbName' in params ? params.DbName : null;

    }
}

/**
 * DescribeBackupConfig request structure.
 * @class
 */
class DescribeBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyAuditRuleTemplates request structure.
 * @class
 */
class ModifyAuditRuleTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit rule template ID
         * @type {Array.<string> || null}
         */
        this.RuleTemplateIds = null;

        /**
         * Audit rule after modification
         * @type {Array.<RuleFilters> || null}
         */
        this.RuleFilters = null;

        /**
         * New name of the rule template
         * @type {string || null}
         */
        this.RuleTemplateName = null;

        /**
         * New description of the rule template
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
        this.RuleTemplateIds = 'RuleTemplateIds' in params ? params.RuleTemplateIds : null;

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new RuleFilters();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }
        this.RuleTemplateName = 'RuleTemplateName' in params ? params.RuleTemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeAccounts request structure.
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of accounts to be filtered
         * @type {Array.<string> || null}
         */
        this.AccountNames = null;

        /**
         * Database type. Valid values: 
<li> MYSQL </li>
This parameter has been disused.
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * List of accounts to be filtered
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * Maximum entries returned per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AccountNames = 'AccountNames' in params ? params.AccountNames : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyMaintainPeriodConfig request structure.
 * @class
 */
class ModifyMaintainPeriodConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Maintenance start time in seconds. For example, 03:00 AM is represented by 10800
         * @type {number || null}
         */
        this.MaintainStartTime = null;

        /**
         * Maintenance duration in seconds. For example, one hour is represented by 3600
         * @type {number || null}
         */
        this.MaintainDuration = null;

        /**
         * Maintenance days of the week. Valid values: [Mon, Tue, Wed, Thu, Fri, Sat, Sun].
         * @type {Array.<string> || null}
         */
        this.MaintainWeekDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MaintainStartTime = 'MaintainStartTime' in params ? params.MaintainStartTime : null;
        this.MaintainDuration = 'MaintainDuration' in params ? params.MaintainDuration : null;
        this.MaintainWeekDays = 'MaintainWeekDays' in params ? params.MaintainWeekDays : null;

    }
}

/**
 * DescribeRollbackTimeRange response structure.
 * @class
 */
class DescribeRollbackTimeRangeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of valid rollback time range (disused)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * End time of valid rollback time range (disused)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * Time range available for rollback
         * @type {Array.<RollbackTimeRange> || null}
         */
        this.RollbackTimeRanges = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeRangeStart = 'TimeRangeStart' in params ? params.TimeRangeStart : null;
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;

        if (params.RollbackTimeRanges) {
            this.RollbackTimeRanges = new Array();
            for (let z in params.RollbackTimeRanges) {
                let obj = new RollbackTimeRange();
                obj.deserialize(params.RollbackTimeRanges[z]);
                this.RollbackTimeRanges.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Billable resource information
 * @class
 */
class BillingResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Instance ID list
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.DealName = 'DealName' in params ? params.DealName : null;

    }
}

/**
 * ModifyClusterPasswordComplexity response structure.
 * @class
 */
class ModifyClusterPasswordComplexityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupName response structure.
 * @class
 */
class ModifyBackupNameResponse extends  AbstractModel {
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
 * SwitchClusterZone response structure.
 * @class
 */
class SwitchClusterZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async FlowId
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourcePackageDetail response structure.
 * @class
 */
class DescribeResourcePackageDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of deducted resource packs
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Resource pack details
         * @type {Array.<PackageDetail> || null}
         */
        this.Detail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new PackageDetail();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterPasswordComplexity request structure.
 * @class
 */
class DescribeClusterPasswordComplexityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * Query filter
 * @class
 */
class QueryFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Search field. Valid values: "InstanceId", "ProjectId", "InstanceName", "Vip"
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * Search string
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Whether to use exact match
         * @type {boolean || null}
         */
        this.ExactMatch = null;

        /**
         * Search field
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Operator
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Names = 'Names' in params ? params.Names : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.ExactMatch = 'ExactMatch' in params ? params.ExactMatch : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeBinlogDownloadUrl request structure.
 * @class
 */
class DescribeBinlogDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Binlog file ID
         * @type {number || null}
         */
        this.BinlogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BinlogId = 'BinlogId' in params ? params.BinlogId : null;

    }
}

/**
 * CreateAccounts response structure.
 * @class
 */
class CreateAccountsResponse extends  AbstractModel {
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
 * ModifyInstanceName request structure.
 * @class
 */
class ModifyInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * ModifyClusterDatabase response structure.
 * @class
 */
class ModifyClusterDatabaseResponse extends  AbstractModel {
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
 * UpgradeClusterVersion response structure.
 * @class
 */
class UpgradeClusterVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSecurityGroups response structure.
 * @class
 */
class DescribeDBSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group information
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseWan response structure.
 * @class
 */
class CloseWanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBinlogs response structure.
 * @class
 */
class DescribeBinlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Binlog list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BinlogItem> || null}
         */
        this.Binlogs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Binlogs) {
            this.Binlogs = new Array();
            for (let z in params.Binlogs) {
                let obj = new BinlogItem();
                obj.deserialize(params.Binlogs[z]);
                this.Binlogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteParamTemplate response structure.
 * @class
 */
class DeleteParamTemplateResponse extends  AbstractModel {
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
 * DescribeInstances response structure.
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance list
         * @type {Array.<CynosdbInstance> || null}
         */
        this.InstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new CynosdbInstance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
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
         * Whether the virtual zone is included.–
         * @type {boolean || null}
         */
        this.IncludeVirtualZones = null;

        /**
         * Whether to display all AZs in a region and the user’s permissions in each AZ.
         * @type {boolean || null}
         */
        this.ShowPermission = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IncludeVirtualZones = 'IncludeVirtualZones' in params ? params.IncludeVirtualZones : null;
        this.ShowPermission = 'ShowPermission' in params ? params.ShowPermission : null;

    }
}

/**
 * Cluster instance information
 * @class
 */
class ClusterInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Engine type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Instance status
         * @type {string || null}
         */
        this.InstanceStatus = null;

        /**
         * Instance status description
         * @type {string || null}
         */
        this.InstanceStatusDesc = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.InstanceCpu = null;

        /**
         * Memory
         * @type {number || null}
         */
        this.InstanceMemory = null;

        /**
         * Disk
         * @type {number || null}
         */
        this.InstanceStorage = null;

        /**
         * Instance role
         * @type {string || null}
         */
        this.InstanceRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.InstanceStatusDesc = 'InstanceStatusDesc' in params ? params.InstanceStatusDesc : null;
        this.InstanceCpu = 'InstanceCpu' in params ? params.InstanceCpu : null;
        this.InstanceMemory = 'InstanceMemory' in params ? params.InstanceMemory : null;
        this.InstanceStorage = 'InstanceStorage' in params ? params.InstanceStorage : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

    }
}

/**
 * AddClusterSlaveZone response structure.
 * @class
 */
class AddClusterSlaveZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async FlowId
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database address
 * @class
 */
class OldAddrInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Port
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Expected valid hours of old IPs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReturnTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.ReturnTime = 'ReturnTime' in params ? params.ReturnTime : null;

    }
}

/**
 * Slow query information of the instance
 * @class
 */
class SlowQueriesItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution timestamp
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Execution duration in seconds
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * SQL statement
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * Client host
         * @type {string || null}
         */
        this.UserHost = null;

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Lock duration in seconds
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * Number of scanned rows
         * @type {number || null}
         */
        this.RowsExamined = null;

        /**
         * Number of returned rows
         * @type {number || null}
         */
        this.RowsSent = null;

        /**
         * SQL template
         * @type {string || null}
         */
        this.SqlTemplate = null;

        /**
         * MD5 value of the SQL statement
         * @type {string || null}
         */
        this.SqlMd5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.QueryTime = 'QueryTime' in params ? params.QueryTime : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.UserHost = 'UserHost' in params ? params.UserHost : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.LockTime = 'LockTime' in params ? params.LockTime : null;
        this.RowsExamined = 'RowsExamined' in params ? params.RowsExamined : null;
        this.RowsSent = 'RowsSent' in params ? params.RowsSent : null;
        this.SqlTemplate = 'SqlTemplate' in params ? params.SqlTemplate : null;
        this.SqlMd5 = 'SqlMd5' in params ? params.SqlMd5 : null;

    }
}

/**
 * DescribeClusterParams response structure.
 * @class
 */
class DescribeClusterParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of parameters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance parameter list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ParamInfo> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParamInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseWan request structure.
 * @class
 */
class CloseWanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance group ID
         * @type {string || null}
         */
        this.InstanceGrpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceGrpId = 'InstanceGrpId' in params ? params.InstanceGrpId : null;

    }
}

/**
 * BindClusterResourcePackages request structure.
 * @class
 */
class BindClusterResourcePackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a resource pack
         * @type {Array.<string> || null}
         */
        this.PackageIds = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageIds = 'PackageIds' in params ? params.PackageIds : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * IsolateInstance response structure.
 * @class
 */
class IsolateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Order ID for isolated instance (prepaid instance)
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceName response structure.
 * @class
 */
class ModifyInstanceNameResponse extends  AbstractModel {
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
 * DescribeParamTemplates request structure.
 * @class
 */
class DescribeParamTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine version number
         * @type {Array.<string> || null}
         */
        this.EngineVersions = null;

        /**
         * Template name
         * @type {Array.<string> || null}
         */
        this.TemplateNames = null;

        /**
         * Template ID
         * @type {Array.<number> || null}
         */
        this.TemplateIds = null;

        /**
         * Database Type. Valid values: `NORMAL`, `SERVERLESS`.
         * @type {Array.<string> || null}
         */
        this.DbModes = null;

        /**
         * Offset for query
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on queries
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Product type of the queried template
         * @type {Array.<string> || null}
         */
        this.Products = null;

        /**
         * Template type
         * @type {Array.<string> || null}
         */
        this.TemplateTypes = null;

        /**
         * Version type
         * @type {Array.<string> || null}
         */
        this.EngineTypes = null;

        /**
         * The sorting order of the returned results
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `desc`, `asc `.
         * @type {string || null}
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EngineVersions = 'EngineVersions' in params ? params.EngineVersions : null;
        this.TemplateNames = 'TemplateNames' in params ? params.TemplateNames : null;
        this.TemplateIds = 'TemplateIds' in params ? params.TemplateIds : null;
        this.DbModes = 'DbModes' in params ? params.DbModes : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Products = 'Products' in params ? params.Products : null;
        this.TemplateTypes = 'TemplateTypes' in params ? params.TemplateTypes : null;
        this.EngineTypes = 'EngineTypes' in params ? params.EngineTypes : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * CopyClusterPasswordComplexity response structure.
 * @class
 */
class CopyClusterPasswordComplexityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of tags associated with cluster, including `TagKey` and `TagValue`
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
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
 * DescribeInstanceParams request structure.
 * @class
 */
class DescribeInstanceParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Instance ID, which supports batch query.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Search condition for a parameter name, which supports fuzzy search.
         * @type {string || null}
         */
        this.ParamKeyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ParamKeyword = 'ParamKeyword' in params ? params.ParamKeyword : null;

    }
}

/**
 * SearchClusterTables request structure.
 * @class
 */
class SearchClusterTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Data table name
         * @type {string || null}
         */
        this.Table = null;

        /**
         * Data table type. Valid values:
`view`: Only return to view,
`base_table`: Only return to basic table,
`all`: Return to view and table.
         * @type {string || null}
         */
        this.TableType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.TableType = 'TableType' in params ? params.TableType : null;

    }
}

/**
 * ModifyResourcePackageClusters request structure.
 * @class
 */
class ModifyResourcePackageClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a resource pack
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * ID of the cluster to be bound
         * @type {Array.<string> || null}
         */
        this.BindClusterIds = null;

        /**
         * ID of the cluster to be unbound
         * @type {Array.<string> || null}
         */
        this.UnbindClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.BindClusterIds = 'BindClusterIds' in params ? params.BindClusterIds : null;
        this.UnbindClusterIds = 'UnbindClusterIds' in params ? params.UnbindClusterIds : null;

    }
}

/**
 * DeleteParamTemplate request structure.
 * @class
 */
class DeleteParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID
         * @type {number || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * Database details
 * @class
 */
class DbInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Character set
         * @type {string || null}
         */
        this.CharacterSet = null;

        /**
         * Database status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Collation rule
         * @type {string || null}
         */
        this.CollateRule = null;

        /**
         * Database remarks Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * User permissions Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserHostPrivilege> || null}
         */
        this.UserHostPrivileges = null;

        /**
         * Database ID Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DbId = null;

        /**
         * Creation time Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * User appid Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * User Uin Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Cluster ID Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.CharacterSet = 'CharacterSet' in params ? params.CharacterSet : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CollateRule = 'CollateRule' in params ? params.CollateRule : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.UserHostPrivileges) {
            this.UserHostPrivileges = new Array();
            for (let z in params.UserHostPrivileges) {
                let obj = new UserHostPrivilege();
                obj.deserialize(params.UserHostPrivileges[z]);
                this.UserHostPrivileges.push(obj);
            }
        }
        this.DbId = 'DbId' in params ? params.DbId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeFlow response structure.
 * @class
 */
class DescribeFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow status. Valid values: `0` (succeeded), `1` (failed), `2` (Processing).
         * @type {number || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetRenewFlag response structure.
 * @class
 */
class SetRenewFlagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of successfully manipulated instances
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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportInstanceErrorLogs request structure.
 * @class
 */
class ExportInstanceErrorLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Log start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Log end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The max number of returned results
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Log level
         * @type {Array.<string> || null}
         */
        this.LogLevels = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.KeyWords = null;

        /**
         * The template type. Valid values: `csv`, `original`.
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * Valid value: `Timestamp`
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Valid values: `ASC` or `DESC`.
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.LogLevels = 'LogLevels' in params ? params.LogLevels : null;
        this.KeyWords = 'KeyWords' in params ? params.KeyWords : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * CreateClusters response structure.
 * @class
 */
class CreateClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Freezing transaction ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * Order ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * List of resource IDs (This field has been deprecated. You need to use `dealNames` in the `DescribeResourcesByDealName` API to get resource IDs.)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * List of cluster IDs (This field has been deprecated. You need to use `dealNames` in the `DescribeResourcesByDealName` API to get cluster IDs.)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * Big order ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BigDealIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetRenewFlag request structure.
 * @class
 */
class SetRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be manipulated
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * Auto-renewal flag. 0: normal renewal, 1: auto-renewal, 2: no renewal.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * OfflineCluster request structure.
 * @class
 */
class OfflineClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeClusterDetailDatabases response structure.
 * @class
 */
class DescribeClusterDetailDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database information Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DbInfo> || null}
         */
        this.DbInfos = null;

        /**
         * The total count
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

        if (params.DbInfos) {
            this.DbInfos = new Array();
            for (let z in params.DbInfos) {
                let obj = new DbInfo();
                obj.deserialize(params.DbInfos[z]);
                this.DbInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance group information
 * @class
 */
class CynosdbInstanceGrp extends  AbstractModel {
    constructor(){
        super();

        /**
         * User `appId`
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Deletion time
         * @type {string || null}
         */
        this.DeletedTime = null;

        /**
         * Instance group ID
         * @type {string || null}
         */
        this.InstanceGrpId = null;

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Instance group type. ha: HA group; ro: RO group
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * Private IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Private port
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Public domain name
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * Public IP
         * @type {string || null}
         */
        this.WanIP = null;

        /**
         * Public port
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * Public network status
         * @type {string || null}
         */
        this.WanStatus = null;

        /**
         * Information of instances contained in instance group
         * @type {Array.<CynosdbInstance> || null}
         */
        this.InstanceSet = null;

        /**
         * VPC ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Subnet ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Information of the old IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {OldAddrInfo || null}
         */
        this.OldAddrInfo = null;

        /**
         * Task in progress
         * @type {Array.<string> || null}
         */
        this.ProcessingTasks = null;

        /**
         * Task list
         * @type {Array.<ObjectTask> || null}
         */
        this.Tasks = null;

        /**
         * biz_net_service table ID
         * @type {number || null}
         */
        this.NetServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DeletedTime = 'DeletedTime' in params ? params.DeletedTime : null;
        this.InstanceGrpId = 'InstanceGrpId' in params ? params.InstanceGrpId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanIP = 'WanIP' in params ? params.WanIP : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new CynosdbInstance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;

        if (params.OldAddrInfo) {
            let obj = new OldAddrInfo();
            obj.deserialize(params.OldAddrInfo)
            this.OldAddrInfo = obj;
        }
        this.ProcessingTasks = 'ProcessingTasks' in params ? params.ProcessingTasks : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ObjectTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.NetServiceId = 'NetServiceId' in params ? params.NetServiceId : null;

    }
}

/**
 * CreateParamTemplate response structure.
 * @class
 */
class CreateParamTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ActivateInstance request structure.
 * @class
 */
class ActivateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of instance IDs in the format of `cynosdbmysql-ins-n7ocdslw` as displayed in the TDSQL-C for MySQL console. You can use the instance list querying API to query the ID, i.e., the `InstanceId` value in the output parameters.
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;

    }
}

/**
 * Database table information
 * @class
 */
class DatabaseTables extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Table name list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Tables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Tables = 'Tables' in params ? params.Tables : null;

    }
}

/**
 * AddClusterSlaveZone request structure.
 * @class
 */
class AddClusterSlaveZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Replica AZ
         * @type {string || null}
         */
        this.SlaveZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;

    }
}

/**
 * RemoveClusterSlaveZone response structure.
 * @class
 */
class RemoveClusterSlaveZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async FlowId
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Types of the returned error logs for an instance
 * @class
 */
class CynosdbErrorLogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log timestamp Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Log level Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Log content Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * UpgradeClusterVersion request structure.
 * @class
 */
class UpgradeClusterVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Kernel version
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * Upgrade time type. Valid values: `upgradeImmediate`, `upgradeInMaintain`.
         * @type {string || null}
         */
        this.UpgradeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CynosVersion = 'CynosVersion' in params ? params.CynosVersion : null;
        this.UpgradeType = 'UpgradeType' in params ? params.UpgradeType : null;

    }
}

/**
 * UpgradeInstance response structure.
 * @class
 */
class UpgradeInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Freezing transaction ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * Big order ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BigDealIds = null;

        /**
         * Order ID
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
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVipVport request structure.
 * @class
 */
class ModifyVipVportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Instance group ID
         * @type {string || null}
         */
        this.InstanceGrpId = null;

        /**
         * Target IP to be modified
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Target port to be modified
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Database type. Valid values: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Valid hours of old IPs. If it is set to `0` hours, the IPs will be released immediately.
         * @type {number || null}
         */
        this.OldIpReserveHours = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceGrpId = 'InstanceGrpId' in params ? params.InstanceGrpId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.OldIpReserveHours = 'OldIpReserveHours' in params ? params.OldIpReserveHours : null;

    }
}

/**
 * Database permission list
 * @class
 */
class DatabasePrivileges extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database
         * @type {string || null}
         */
        this.Db = null;

        /**
         * Permission list
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * DescribeClusters request structure.
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Engine type. Currently, `MYSQL` is supported.
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Record offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sort by field. Valid values:
<li> CREATETIME: creation time</li>
<li> PERIODENDTIME: expiration time</li>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values:
<li> ASC: ascending</li>
<li> DESC: descending</li>
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Filter. If more than one filter exists, the logical relationship between these filters is `AND`.
         * @type {Array.<QueryFilter> || null}
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
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * CloseClusterPasswordComplexity request structure.
 * @class
 */
class CloseClusterPasswordComplexityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster IDs in array
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups response structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends  AbstractModel {
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
 * OpenReadOnlyInstanceExclusiveAccess response structure.
 * @class
 */
class OpenReadOnlyInstanceExclusiveAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Activation process ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterInstanceGrps request structure.
 * @class
 */
class DescribeClusterInstanceGrpsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeResourcesByDealName response structure.
 * @class
 */
class DescribeResourcesByDealNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billable resource ID information array
         * @type {Array.<BillingResourceInfo> || null}
         */
        this.BillingResourceInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BillingResourceInfos) {
            this.BillingResourceInfos = new Array();
            for (let z in params.BillingResourceInfos) {
                let obj = new BillingResourceInfo();
                obj.deserialize(params.BillingResourceInfos[z]);
                this.BillingResourceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance network information
 * @class
 */
class InstanceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceGroupType = null;

        /**
         * Instance group ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceGroupId = null;

        /**
         * VPC ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Network type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NetType = null;

        /**
         * VPC IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * VPC port
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Public network domain name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * 
         * @type {string || null}
         */
        this.WanIP = null;

        /**
         * Public network port
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * Public network status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WanStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceGroupType = 'InstanceGroupType' in params ? params.InstanceGroupType : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanIP = 'WanIP' in params ? params.WanIP : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;

    }
}

/**
 * CreateAccounts request structure.
 * @class
 */
class CreateAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of new accounts
         * @type {Array.<NewAccount> || null}
         */
        this.Accounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new NewAccount();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * DeleteAuditRuleTemplates request structure.
 * @class
 */
class DeleteAuditRuleTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit rule template ID
         * @type {Array.<string> || null}
         */
        this.RuleTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleTemplateIds = 'RuleTemplateIds' in params ? params.RuleTemplateIds : null;

    }
}

/**
 * DescribeAuditRuleTemplates response structure.
 * @class
 */
class DescribeAuditRuleTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of rule template details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AuditRuleTemplateInfo> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AuditRuleTemplateInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Resource pack
 * @class
 */
class Package extends  AbstractModel {
    constructor(){
        super();

        /**
         * AppID Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * The unique ID of a resource pack Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * Resource pack name Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * Resource pack type. Valid values: `CCU` (compute resource pack), `DISK` (storage resource pack). Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Region of the resource pack. Valid values: `China` (Chinese mainland), `overseas` (outside Chinese mainland). Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageRegion = null;

        /**
         * Resource pack status. Valid values: `creating`, `using`, `expired`, `normal_finish` (used up), `apply_refund` (requesting a refund), `refund` (refunded). 
Note:  This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Total number of resource packs Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PackageTotalSpec = null;

        /**
         * Consumed usage of resource packs Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PackageUsedSpec = null;

        /**
         * Remaining usage of resource packs Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.HasQuota = null;

        /**
         * Information of the instance bound Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BindInstanceInfo> || null}
         */
        this.BindInstanceInfos = null;

        /**
         * Validity time:  2022-07-01 00:00:00 Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Validity time:  2022-08-01 00:00:00 Note: This field may return null, indicating that no valid values can be obtained.
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.PackageRegion = 'PackageRegion' in params ? params.PackageRegion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PackageTotalSpec = 'PackageTotalSpec' in params ? params.PackageTotalSpec : null;
        this.PackageUsedSpec = 'PackageUsedSpec' in params ? params.PackageUsedSpec : null;
        this.HasQuota = 'HasQuota' in params ? params.HasQuota : null;

        if (params.BindInstanceInfos) {
            this.BindInstanceInfos = new Array();
            for (let z in params.BindInstanceInfos) {
                let obj = new BindInstanceInfo();
                obj.deserialize(params.BindInstanceInfos[z]);
                this.BindInstanceInfos.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * SwitchClusterZone request structure.
 * @class
 */
class SwitchClusterZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The current AZ
         * @type {string || null}
         */
        this.OldZone = null;

        /**
         * New AZ
         * @type {string || null}
         */
        this.NewZone = null;

        /**
         * Valid values: `yes` (execute during maintenance time), `no` (execute now)
         * @type {string || null}
         */
        this.IsInMaintainPeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.OldZone = 'OldZone' in params ? params.OldZone : null;
        this.NewZone = 'NewZone' in params ? params.NewZone : null;
        this.IsInMaintainPeriod = 'IsInMaintainPeriod' in params ? params.IsInMaintainPeriod : null;

    }
}

/**
 * Instance parameter information
 * @class
 */
class InstanceParamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of instance parameters
         * @type {Array.<ParamItemDetail> || null}
         */
        this.ParamsItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ParamsItems) {
            this.ParamsItems = new Array();
            for (let z in params.ParamsItems) {
                let obj = new ParamItemDetail();
                obj.deserialize(params.ParamsItems[z]);
                this.ParamsItems.push(obj);
            }
        }

    }
}

/**
 * DescribeInstanceDetail request structure.
 * @class
 */
class DescribeInstanceDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Features supported by the cluster
 * @class
 */
class Ability extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether secondary AZ is supported
         * @type {string || null}
         */
        this.IsSupportSlaveZone = null;

        /**
         * The reason why secondary AZ is not supported
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NonsupportSlaveZoneReason = null;

        /**
         * Whether read-only instance is supported
         * @type {string || null}
         */
        this.IsSupportRo = null;

        /**
         * The reason why read-only instance is not supported
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NonsupportRoReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsSupportSlaveZone = 'IsSupportSlaveZone' in params ? params.IsSupportSlaveZone : null;
        this.NonsupportSlaveZoneReason = 'NonsupportSlaveZoneReason' in params ? params.NonsupportSlaveZoneReason : null;
        this.IsSupportRo = 'IsSupportRo' in params ? params.IsSupportRo : null;
        this.NonsupportRoReason = 'NonsupportRoReason' in params ? params.NonsupportRoReason : null;

    }
}

/**
 * Instance initialization configuration information
 * @class
 */
class InstanceInitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance CPU
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance memory
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance type. Valid values:`rw`, `ro`.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Number of the instances. Value range: 1-15.
         * @type {number || null}
         */
        this.InstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

    }
}

/**
 * Resource pack details
 * @class
 */
class PackageDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account ID of `AppId` Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * The unique ID of a resource pack Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * Instance ID Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The successfully deducted capacity Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SuccessDeductSpec = null;

        /**
         * Used capacity of a resource pack as of now Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PackageTotalUsedSpec = null;

        /**
         * Deduction start time Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Deduction end time Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Extended information Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExtendInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SuccessDeductSpec = 'SuccessDeductSpec' in params ? params.SuccessDeductSpec : null;
        this.PackageTotalUsedSpec = 'PackageTotalUsedSpec' in params ? params.PackageTotalUsedSpec : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ExtendInfo = 'ExtendInfo' in params ? params.ExtendInfo : null;

    }
}

/**
 * UpgradeInstance request structure.
 * @class
 */
class UpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database CPU
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Database memory in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Upgrade type. Valid values: upgradeImmediate, upgradeInMaintain
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * This parameter has been disused.
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * Whether to automatically select a voucher. 1: yes; 0: no. Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * This parameter has been disused.
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Transaction mode. Valid values: `0` (place and pay for an order), `1` (place an order)
         * @type {number || null}
         */
        this.DealMode = null;

        /**
         * Valid values: `NormalUpgrade` (Normal mode), `FastUpgrade` (QuickChange). If the system detects that the configuration modification process will cause a momentary disconnection, the process will be terminated.
         * @type {string || null}
         */
        this.UpgradeMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.UpgradeType = 'UpgradeType' in params ? params.UpgradeType : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.DealMode = 'DealMode' in params ? params.DealMode : null;
        this.UpgradeMode = 'UpgradeMode' in params ? params.UpgradeMode : null;

    }
}

/**
 * ModifyMaintainPeriodConfig response structure.
 * @class
 */
class ModifyMaintainPeriodConfigResponse extends  AbstractModel {
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
 * SwitchClusterVpc response structure.
 * @class
 */
class SwitchClusterVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterDetail request structure.
 * @class
 */
class DescribeClusterDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DeleteBackup response structure.
 * @class
 */
class DeleteBackupResponse extends  AbstractModel {
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
 * ModifyInstanceParam request structure.
 * @class
 */
class ModifyInstanceParamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Instance ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * List of cluster parameters
         * @type {Array.<ModifyParamItem> || null}
         */
        this.ClusterParamList = null;

        /**
         * List of the instance parameters
         * @type {Array.<ModifyParamItem> || null}
         */
        this.InstanceParamList = null;

        /**
         * Valid values: `yes` (modify in maintenance window),  `no`  (execute now by default).
         * @type {string || null}
         */
        this.IsInMaintainPeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.ClusterParamList) {
            this.ClusterParamList = new Array();
            for (let z in params.ClusterParamList) {
                let obj = new ModifyParamItem();
                obj.deserialize(params.ClusterParamList[z]);
                this.ClusterParamList.push(obj);
            }
        }

        if (params.InstanceParamList) {
            this.InstanceParamList = new Array();
            for (let z in params.InstanceParamList) {
                let obj = new ModifyParamItem();
                obj.deserialize(params.InstanceParamList[z]);
                this.InstanceParamList.push(obj);
            }
        }
        this.IsInMaintainPeriod = 'IsInMaintainPeriod' in params ? params.IsInMaintainPeriod : null;

    }
}

/**
 * DescribeProjectSecurityGroups response structure.
 * @class
 */
class DescribeProjectSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group details
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * The total number of groups
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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResourcePackageName request structure.
 * @class
 */
class ModifyResourcePackageNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a resource pack
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * Custom resource pack name, which can contains up to 120 characters.
         * @type {string || null}
         */
        this.PackageName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;

    }
}

/**
 * OpenWan response structure.
 * @class
 */
class OpenWanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PauseServerless response structure.
 * @class
 */
class PauseServerlessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance parameter details
 * @class
 */
class ParamDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter type. Valid values:  `integer`, `enum`, `float`, `string`, `func`.
         * @type {string || null}
         */
        this.ParamType = null;

        /**
         * Whether `func` is supported. Valid values: `true` (supported), `false` (not supported).
         * @type {boolean || null}
         */
        this.SupportFunc = null;

        /**
         * Default value
         * @type {string || null}
         */
        this.Default = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Current value of the parameter
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Whether to restart the database for the modified parameters to take effect. Valid values:  `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * Maximum value of the parameter
         * @type {string || null}
         */
        this.Max = null;

        /**
         * Minimum value of the parameter
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Enumerated values of the parameter.  It is null if the parameter is non-enumerated. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Valid values: `1` (global parameter),  `0`  (non-global parameter).
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * The match type. Valid value: `multiVal`.
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * Match values, which will be separated by comma when `MatchType` is `multiVal`.
         * @type {string || null}
         */
        this.MatchValue = null;

        /**
         * Whether it is a `func` type. Valid values: `true` (yes), `false` (no). Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsFunc = null;

        /**
         * Formula content returned when `ParamType` is `func`. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Func = null;

        /**
         * Whether the parameter can be modified Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ModifiableInfo || null}
         */
        this.ModifiableInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;
        this.SupportFunc = 'SupportFunc' in params ? params.SupportFunc : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;
        this.MatchValue = 'MatchValue' in params ? params.MatchValue : null;
        this.IsFunc = 'IsFunc' in params ? params.IsFunc : null;
        this.Func = 'Func' in params ? params.Func : null;

        if (params.ModifiableInfo) {
            let obj = new ModifiableInfo();
            obj.deserialize(params.ModifiableInfo)
            this.ModifiableInfo = obj;
        }

    }
}

/**
 * DeleteAccounts response structure.
 * @class
 */
class DeleteAccountsResponse extends  AbstractModel {
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
 * ResetAccountPassword response structure.
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
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
 * The newly created x08 account
 * @class
 */
class NewAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account name, which can contain 1-16 letters, digits, and underscores. It must begin with a letter and end with a letter or digit.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Password, which can contain 8-64 characters.
         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * Host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Maximum number of user connections, which cannot be above 10,240.
         * @type {number || null}
         */
        this.MaxUserConnections = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MaxUserConnections = 'MaxUserConnections' in params ? params.MaxUserConnections : null;

    }
}

/**
 * Backup file information
 * @class
 */
class BackupFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot file ID, which is deprecated. You need to use `BackupId`.
         * @type {number || null}
         */
        this.SnapshotId = null;

        /**
         * Backup file name
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Backup file size
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Backup start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Backup end time
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Backup type. Valid values: `snapshot` (snapshot backup), `logic` (logic backup).
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * Back mode. auto: auto backup; manual: manual backup
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * Backup file status. success: backup succeeded; fail: backup failed; creating: creating backup file; deleting: deleting backup file
         * @type {string || null}
         */
        this.BackupStatus = null;

        /**
         * Backup file time
         * @type {string || null}
         */
        this.SnapshotTime = null;

        /**
         * Backup ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * 
         * @type {string || null}
         */
        this.SnapShotType = null;

        /**
         * Backup file alias
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupStatus = 'BackupStatus' in params ? params.BackupStatus : null;
        this.SnapshotTime = 'SnapshotTime' in params ? params.SnapshotTime : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.SnapShotType = 'SnapShotType' in params ? params.SnapShotType : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * MySQL table permission
 * @class
 */
class TablePrivileges extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.Db = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Permission list
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * DescribeBinlogDownloadUrl response structure.
 * @class
 */
class DescribeBinlogDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download address
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of the instance bound to the resource pack
 * @class
 */
class BindInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the instance bound Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Region of the instance bound Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceRegion = null;

        /**
         * Type of the instance bound Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRegion = 'InstanceRegion' in params ? params.InstanceRegion : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DescribeAuditRuleWithInstanceIds response structure.
 * @class
 */
class DescribeAuditRuleWithInstanceIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * None
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Audit rule information of the instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<InstanceAuditRule> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceAuditRule();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResourcePackageName response structure.
 * @class
 */
class ModifyResourcePackageNameResponse extends  AbstractModel {
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
 * DescribeBackupList request structure.
 * @class
 */
class DescribeBackupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The number of results to be returned. Value range: (0,100]
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Record offset. Value range: [0,INF)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Database type. Valid values: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Backup ID
         * @type {Array.<number> || null}
         */
        this.BackupIds = null;

        /**
         * Backup type. Valid values: `snapshot` (snapshot backup), `logic` (logic backup).
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * Back mode. Valid values: `auto` (automatic backup), `manual` (manual backup)
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * 
         * @type {string || null}
         */
        this.SnapShotType = null;

        /**
         * Backup start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Backup end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.FileNames = null;

        /**
         * Backup alias, which supports fuzzy query.
         * @type {Array.<string> || null}
         */
        this.BackupNames = null;

        /**
         * ID list of the snapshot backup
         * @type {Array.<number> || null}
         */
        this.SnapshotIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.BackupIds = 'BackupIds' in params ? params.BackupIds : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.SnapShotType = 'SnapShotType' in params ? params.SnapShotType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.FileNames = 'FileNames' in params ? params.FileNames : null;
        this.BackupNames = 'BackupNames' in params ? params.BackupNames : null;
        this.SnapshotIdList = 'SnapshotIdList' in params ? params.SnapshotIdList : null;

    }
}

/**
 * SearchClusterDatabases request structure.
 * @class
 */
class SearchClusterDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Whether to search exactly
Valid values: `0` (fuzzy search), `1` (exact search). 
Default value: `0`.
         * @type {number || null}
         */
        this.MatchType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;

    }
}

/**
 * SwitchClusterVpc request structure.
 * @class
 */
class SwitchClusterVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * VPC ID in string
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Subnet ID in string
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Valid hours of old IP
         * @type {number || null}
         */
        this.OldIpReserveHours = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.OldIpReserveHours = 'OldIpReserveHours' in params ? params.OldIpReserveHours : null;

    }
}

/**
 * CreateResourcePackage response structure.
 * @class
 */
class CreateResourcePackageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Big order number
         * @type {Array.<string> || null}
         */
        this.BigDealIds = null;

        /**
         * Each item has only one `dealName`, through which you need to ensure the idempotency of the delivery API.
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
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance information
 * @class
 */
class CynosdbInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * User `Uin`
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * User `AppId`
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Instance status description
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Instance type, which is used to indicate whether it is a serverless instance.
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * Database type
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Database version
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Current instance role
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Private IP of instance
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Private port of instance
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Billing mode
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Instance expiration time
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * Termination deadline
         * @type {string || null}
         */
        this.DestroyDeadlineText = null;

        /**
         * Isolation time
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * Network type
         * @type {number || null}
         */
        this.NetType = null;

        /**
         * Public domain name
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * Public IP
         * @type {string || null}
         */
        this.WanIP = null;

        /**
         * Public port
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * Public network status
         * @type {string || null}
         */
        this.WanStatus = null;

        /**
         * Instance termination time
         * @type {string || null}
         */
        this.DestroyTime = null;

        /**
         * TDSQL-C kernel version
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * Task in progress
         * @type {string || null}
         */
        this.ProcessingTask = null;

        /**
         * Renewal flag
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * Minimum number of CPU cores for serverless instance
         * @type {number || null}
         */
        this.MinCpu = null;

        /**
         * Maximum number of CPU cores for serverless instance
         * @type {number || null}
         */
        this.MaxCpu = null;

        /**
         * Serverless instance status. Valid values:
resume
pause
         * @type {string || null}
         */
        this.ServerlessStatus = null;

        /**
         * Prepaid storage ID
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.StorageId = null;

        /**
         * Storage billing mode
         * @type {number || null}
         */
        this.StoragePayMode = null;

        /**
         * Physical zone
         * @type {string || null}
         */
        this.PhysicalZone = null;

        /**
         * Business type
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * Task
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ObjectTask> || null}
         */
        this.Tasks = null;

        /**
         * Whether to freeze
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsFreeze = null;

        /**
         * The resource tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * Source AZ
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.MasterZone = null;

        /**
         * Replica AZ
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.SlaveZones = null;

        /**
         * Instance network information
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<InstanceNetInfo> || null}
         */
        this.InstanceNetInfo = null;

        /**
         * Information of the resource pack bound to an instance when `packageType` is `CCU`. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ResourcePackage> || null}
         */
        this.ResourcePackages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.DestroyDeadlineText = 'DestroyDeadlineText' in params ? params.DestroyDeadlineText : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanIP = 'WanIP' in params ? params.WanIP : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.DestroyTime = 'DestroyTime' in params ? params.DestroyTime : null;
        this.CynosVersion = 'CynosVersion' in params ? params.CynosVersion : null;
        this.ProcessingTask = 'ProcessingTask' in params ? params.ProcessingTask : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.MinCpu = 'MinCpu' in params ? params.MinCpu : null;
        this.MaxCpu = 'MaxCpu' in params ? params.MaxCpu : null;
        this.ServerlessStatus = 'ServerlessStatus' in params ? params.ServerlessStatus : null;
        this.StorageId = 'StorageId' in params ? params.StorageId : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.PhysicalZone = 'PhysicalZone' in params ? params.PhysicalZone : null;
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ObjectTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.IsFreeze = 'IsFreeze' in params ? params.IsFreeze : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new Tag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;
        this.SlaveZones = 'SlaveZones' in params ? params.SlaveZones : null;

        if (params.InstanceNetInfo) {
            this.InstanceNetInfo = new Array();
            for (let z in params.InstanceNetInfo) {
                let obj = new InstanceNetInfo();
                obj.deserialize(params.InstanceNetInfo[z]);
                this.InstanceNetInfo.push(obj);
            }
        }

        if (params.ResourcePackages) {
            this.ResourcePackages = new Array();
            for (let z in params.ResourcePackages) {
                let obj = new ResourcePackage();
                obj.deserialize(params.ResourcePackages[z]);
                this.ResourcePackages.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterPasswordComplexity response structure.
 * @class
 */
class DescribeClusterPasswordComplexityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data dictionary parameter Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ParamInfo || null}
         */
        this.ValidatePasswordDictionary = null;

        /**
         * The length of the password Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ParamInfo || null}
         */
        this.ValidatePasswordLength = null;

        /**
         * Number of case-sensitive characters Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ParamInfo || null}
         */
        this.ValidatePasswordMixedCaseCount = null;

        /**
         * Number of digits Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ParamInfo || null}
         */
        this.ValidatePasswordNumberCount = null;

        /**
         * Password level Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ParamInfo || null}
         */
        this.ValidatePasswordPolicy = null;

        /**
         * Number of symbols Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ParamInfo || null}
         */
        this.ValidatePasswordSpecialCharCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ValidatePasswordDictionary) {
            let obj = new ParamInfo();
            obj.deserialize(params.ValidatePasswordDictionary)
            this.ValidatePasswordDictionary = obj;
        }

        if (params.ValidatePasswordLength) {
            let obj = new ParamInfo();
            obj.deserialize(params.ValidatePasswordLength)
            this.ValidatePasswordLength = obj;
        }

        if (params.ValidatePasswordMixedCaseCount) {
            let obj = new ParamInfo();
            obj.deserialize(params.ValidatePasswordMixedCaseCount)
            this.ValidatePasswordMixedCaseCount = obj;
        }

        if (params.ValidatePasswordNumberCount) {
            let obj = new ParamInfo();
            obj.deserialize(params.ValidatePasswordNumberCount)
            this.ValidatePasswordNumberCount = obj;
        }

        if (params.ValidatePasswordPolicy) {
            let obj = new ParamInfo();
            obj.deserialize(params.ValidatePasswordPolicy)
            this.ValidatePasswordPolicy = obj;
        }

        if (params.ValidatePasswordSpecialCharCount) {
            let obj = new ParamInfo();
            obj.deserialize(params.ValidatePasswordSpecialCharCount)
            this.ValidatePasswordSpecialCharCount = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAuditRuleWithInstanceIds request structure.
 * @class
 */
class DescribeAuditRuleWithInstanceIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Currently, only one single instance can be queried.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ExportInstanceErrorLogs response structure.
 * @class
 */
class ExportInstanceErrorLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Export content of the error log Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ErrorLogItemExport> || null}
         */
        this.ErrorLogItems = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ErrorLogItems) {
            this.ErrorLogItems = new Array();
            for (let z in params.ErrorLogItems) {
                let obj = new ErrorLogItemExport();
                obj.deserialize(params.ErrorLogItems[z]);
                this.ErrorLogItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterSlaveZone response structure.
 * @class
 */
class ModifyClusterSlaveZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async FlowId
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance parameter information
 * @class
 */
class ParamItemDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Default value
         * @type {string || null}
         */
        this.Default = null;

        /**
         * Enumerated values of the parameter It is null if the parameter is non-enumerated.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Valid values: `1` (global parameter),  `0`  (non-global parameter).
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * Maximum value
         * @type {string || null}
         */
        this.Max = null;

        /**
         * Minimum value
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Whether to restart the database for the modified parameters to take effect. Valid values:  `0` (no), `1` (yes)
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter type. Valid values:  `integer`, `enum`, `float`, `string`, `func`.
         * @type {string || null}
         */
        this.ParamType = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether `ParamType` is a `func` Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsFunc = null;

        /**
         * Parameter configuration formula Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Func = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsFunc = 'IsFunc' in params ? params.IsFunc : null;
        this.Func = 'Func' in params ? params.Func : null;

    }
}

/**
 * RemoveClusterSlaveZone request structure.
 * @class
 */
class RemoveClusterSlaveZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Replica AZ
         * @type {string || null}
         */
        this.SlaveZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;

    }
}

/**
 * Binlog description
 * @class
 */
class BinlogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Binlog filename
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * File size in bytes
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Transaction start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Transaction end time
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Binlog file ID
         * @type {number || null}
         */
        this.BinlogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.BinlogId = 'BinlogId' in params ? params.BinlogId : null;

    }
}

/**
 * Information of the modified instance parameter
 * @class
 */
class ModifyParamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Current parameter value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Old parameter value, which is used only in output parameters.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OldValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.OldValue = 'OldValue' in params ? params.OldValue : null;

    }
}

/**
 * ModifyAuditService request structure.
 * @class
 */
class ModifyAuditServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Log retention period
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * Frequent log retention period
         * @type {number || null}
         */
        this.HighLogExpireDay = null;

        /**
         * The parameter used to change the audit rule of the instance to full audit
         * @type {boolean || null}
         */
        this.AuditAll = null;

        /**
         * Rule audit
         * @type {Array.<AuditRuleFilters> || null}
         */
        this.AuditRuleFilters = null;

        /**
         * Rule template ID
         * @type {Array.<string> || null}
         */
        this.RuleTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.HighLogExpireDay = 'HighLogExpireDay' in params ? params.HighLogExpireDay : null;
        this.AuditAll = 'AuditAll' in params ? params.AuditAll : null;

        if (params.AuditRuleFilters) {
            this.AuditRuleFilters = new Array();
            for (let z in params.AuditRuleFilters) {
                let obj = new AuditRuleFilters();
                obj.deserialize(params.AuditRuleFilters[z]);
                this.AuditRuleFilters.push(obj);
            }
        }
        this.RuleTemplateIds = 'RuleTemplateIds' in params ? params.RuleTemplateIds : null;

    }
}

/**
 * CreateClusters request structure.
 * @class
 */
class CreateClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Database type. Valid values: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Database version. Valid values: 
<li> Valid values for `MYSQL`: 5.7 and 8.0 </li>
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * It is required when `DbMode` is set to `NORMAL` or left empty.
Number of CPU cores of normal instance
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * It is required when `DbMode` is set to `NORMAL` or left empty.
Memory of a non-serverless instance in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * This parameter has been deprecated.
Storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Cluster name, which can contain less than 64 letters, digits, or symbols (-_.).
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Account password, which must contain 8-64 characters in at least three of the following four types: uppercase letters, lowercase letters, digits, and symbols (~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/).
         * @type {string || null}
         */
        this.AdminPassword = null;

        /**
         * Port. Valid range: [0, 65535). Default value: 3306
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Billing mode. `0`: pay-as-you-go; `1`: monthly subscription. Default value: `0`
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Number of purchased clusters. Valid range: [1,50]. Default value: 1
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Rollback type:
noneRollback: no rollback;
snapRollback: rollback by snapshot;
timeRollback: rollback by time point
         * @type {string || null}
         */
        this.RollbackStrategy = null;

        /**
         * `snapshotId` for snapshot rollback or `queryId` for time point rollback. 0 indicates to determine whether the time point is valid
         * @type {number || null}
         */
        this.RollbackId = null;

        /**
         * The source cluster ID passed in during rollback to find the source `poolId`
         * @type {string || null}
         */
        this.OriginalClusterId = null;

        /**
         * Specified time for time point rollback or snapshot time for snapshot rollback
         * @type {string || null}
         */
        this.ExpectTime = null;

        /**
         * This parameter has been deprecated.
Specified allowed time range for time point rollback
         * @type {number || null}
         */
        this.ExpectTimeThresh = null;

        /**
         * Storage upper limit of normal instance in GB
If `DbType` is `MYSQL` and the storage billing mode is monthly subscription, the parameter value can’t exceed the maximum storage corresponding to the CPU and memory specifications.
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * Number of Instances. Valid range: (0,16]
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Purchase duration of monthly subscription plan
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Duration unit of monthly subscription. Valid values: `s`, `d`, `m`, `y`
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Whether auto-renewal is enabled for monthly subscription plan. Default value: `0`
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Whether to automatically select a voucher. `1`: yes; `0`: no. Default value: `0`
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Number of instances (this parameter has been disused and is retained only for compatibility with existing instances)
         * @type {number || null}
         */
        this.HaCount = null;

        /**
         * Order source
         * @type {string || null}
         */
        this.OrderSource = null;

        /**
         * Array of tags to be bound to the created cluster
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * Database type
Valid values when `DbType` is `MYSQL` (default value: `NORMAL`):
<li>NORMAL</li>
<li>SERVERLESS</li>
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * This parameter is required if `DbMode` is `SERVERLESS`.
Minimum number of CPU cores. For the value range, see the returned result of `DescribeServerlessInstanceSpecs`.
         * @type {number || null}
         */
        this.MinCpu = null;

        /**
         * This parameter is required if `DbMode` is `SERVERLESS`.
Maximum number of CPU cores. For the value range, see the returned result of `DescribeServerlessInstanceSpecs`.
         * @type {number || null}
         */
        this.MaxCpu = null;

        /**
         * This parameter specifies whether the cluster will be automatically paused if `DbMode` is `SERVERLESS`. Valid values:
<li>yes</li>
<li>no</li>
Default value: yes
         * @type {string || null}
         */
        this.AutoPause = null;

        /**
         * This parameter specifies the delay for automatic cluster pause in seconds if `DbMode` is `SERVERLESS`. Value range: [600,691200]
Default value: `600`
         * @type {number || null}
         */
        this.AutoPauseDelay = null;

        /**
         * The billing mode of cluster storage. Valid values: `0` (pay-as-you-go), `1` (monthly subscription). Default value: `0`.
If `DbType` is `MYSQL` and the billing mode of cluster compute is pay-as-you-go (or the `DbMode` is `SERVERLESS`), the billing mode of cluster storage must be pay-as-you-go.
Clusters with storage billed in monthly subscription can’t be cloned or rolled back.
         * @type {number || null}
         */
        this.StoragePayMode = null;

        /**
         * Array of security group IDs
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Array of alarm policy IDs
         * @type {Array.<string> || null}
         */
        this.AlarmPolicyIds = null;

        /**
         * Array of parameters. Valid values: `character_set_server` (utf8｜latin1｜gbk｜utf8mb4), `lower_case_table_names`. 0: case-sensitive; 1: case-insensitive).
         * @type {Array.<ParamItem> || null}
         */
        this.ClusterParams = null;

        /**
         * Transaction mode. Valid values: `0` (place and pay for an order), `1` (place an order)
         * @type {number || null}
         */
        this.DealMode = null;

        /**
         * Parameter template ID, which can be obtained by querying parameter template information “DescribeParamTemplates”
         * @type {number || null}
         */
        this.ParamTemplateId = null;

        /**
         * Multi-AZ address
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * Instance initialization configuration information, which is used to select instances with different specifications when purchasing a cluster.
         * @type {Array.<InstanceInitInfo> || null}
         */
        this.InstanceInitInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.AdminPassword = 'AdminPassword' in params ? params.AdminPassword : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RollbackStrategy = 'RollbackStrategy' in params ? params.RollbackStrategy : null;
        this.RollbackId = 'RollbackId' in params ? params.RollbackId : null;
        this.OriginalClusterId = 'OriginalClusterId' in params ? params.OriginalClusterId : null;
        this.ExpectTime = 'ExpectTime' in params ? params.ExpectTime : null;
        this.ExpectTimeThresh = 'ExpectTimeThresh' in params ? params.ExpectTimeThresh : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.HaCount = 'HaCount' in params ? params.HaCount : null;
        this.OrderSource = 'OrderSource' in params ? params.OrderSource : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new Tag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.MinCpu = 'MinCpu' in params ? params.MinCpu : null;
        this.MaxCpu = 'MaxCpu' in params ? params.MaxCpu : null;
        this.AutoPause = 'AutoPause' in params ? params.AutoPause : null;
        this.AutoPauseDelay = 'AutoPauseDelay' in params ? params.AutoPauseDelay : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.AlarmPolicyIds = 'AlarmPolicyIds' in params ? params.AlarmPolicyIds : null;

        if (params.ClusterParams) {
            this.ClusterParams = new Array();
            for (let z in params.ClusterParams) {
                let obj = new ParamItem();
                obj.deserialize(params.ClusterParams[z]);
                this.ClusterParams.push(obj);
            }
        }
        this.DealMode = 'DealMode' in params ? params.DealMode : null;
        this.ParamTemplateId = 'ParamTemplateId' in params ? params.ParamTemplateId : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;

        if (params.InstanceInitInfos) {
            this.InstanceInitInfos = new Array();
            for (let z in params.InstanceInitInfos) {
                let obj = new InstanceInitInfo();
                obj.deserialize(params.InstanceInitInfos[z]);
                this.InstanceInitInfos.push(obj);
            }
        }

    }
}

/**
 * User host permissions
 * @class
 */
class UserHostPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * Authorized user
         * @type {string || null}
         */
        this.DbUserName = null;

        /**
         * Client IP Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbHost = null;

        /**
         * User permissions Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbPrivilege = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbUserName = 'DbUserName' in params ? params.DbUserName : null;
        this.DbHost = 'DbHost' in params ? params.DbHost : null;
        this.DbPrivilege = 'DbPrivilege' in params ? params.DbPrivilege : null;

    }
}

/**
 * DescribeClusters response structure.
 * @class
 */
class DescribeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of clusters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Cluster list
         * @type {Array.<CynosdbCluster> || null}
         */
        this.ClusterSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ClusterSet) {
            this.ClusterSet = new Array();
            for (let z in params.ClusterSet) {
                let obj = new CynosdbCluster();
                obj.deserialize(params.ClusterSet[z]);
                this.ClusterSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenAuditService request structure.
 * @class
 */
class OpenAuditServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Log retention period
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * Frequent log retention period
         * @type {number || null}
         */
        this.HighLogExpireDay = null;

        /**
         * Audit rule. If both this parameter and `RuleTemplateIds` are left empty, full audit will be applied.
         * @type {Array.<AuditRuleFilters> || null}
         */
        this.AuditRuleFilters = null;

        /**
         * Rule template ID. If both this parameter and `AuditRuleFilters` are left empty, full audit will be applied.
         * @type {Array.<string> || null}
         */
        this.RuleTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.HighLogExpireDay = 'HighLogExpireDay' in params ? params.HighLogExpireDay : null;

        if (params.AuditRuleFilters) {
            this.AuditRuleFilters = new Array();
            for (let z in params.AuditRuleFilters) {
                let obj = new AuditRuleFilters();
                obj.deserialize(params.AuditRuleFilters[z]);
                this.AuditRuleFilters.push(obj);
            }
        }
        this.RuleTemplateIds = 'RuleTemplateIds' in params ? params.RuleTemplateIds : null;

    }
}

/**
 * RefundResourcePackage request structure.
 * @class
 */
class RefundResourcePackageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a resource pack
         * @type {string || null}
         */
        this.PackageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageId = 'PackageId' in params ? params.PackageId : null;

    }
}

/**
 * DescribeBackupConfig response structure.
 * @class
 */
class DescribeBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full backup start time. Value range: [0-24*3600]. For example, 0:00 AM, 1:00 AM, and 2:00 AM are represented by 0, 3600, and 7200, respectively
         * @type {number || null}
         */
        this.BackupTimeBeg = null;

        /**
         * Full backup end time. Value range: [0-24*3600]. For example, 0:00 AM, 1:00 AM, and 2:00 AM are represented by 0, 3600, and 7200, respectively
         * @type {number || null}
         */
        this.BackupTimeEnd = null;

        /**
         * Backup retention period in seconds. Backups will be cleared after this period elapses. 7 days is represented by 3600*24*7 = 604800
         * @type {number || null}
         */
        this.ReserveDuration = null;

        /**
         * Backup frequency. It is an array of 7 elements corresponding to Monday through Sunday. full: full backup; increment: incremental backup
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BackupFreq = null;

        /**
         * Backup mode. logic: logic backup; snapshot: snapshot backup
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupTimeBeg = 'BackupTimeBeg' in params ? params.BackupTimeBeg : null;
        this.BackupTimeEnd = 'BackupTimeEnd' in params ? params.BackupTimeEnd : null;
        this.ReserveDuration = 'ReserveDuration' in params ? params.ReserveDuration : null;
        this.BackupFreq = 'BackupFreq' in params ? params.BackupFreq : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBinlogSaveDays request structure.
 * @class
 */
class ModifyBinlogSaveDaysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Binlog retention period in days
         * @type {number || null}
         */
        this.BinlogSaveDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BinlogSaveDays = 'BinlogSaveDays' in params ? params.BinlogSaveDays : null;

    }
}

/**
 * ResumeServerless response structure.
 * @class
 */
class ResumeServerlessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups request structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance group ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of IDs of security groups to be modified, which is an array of one or more security group IDs.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DescribeParamTemplates response structure.
 * @class
 */
class DescribeParamTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of parameter templates
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter template information
         * @type {Array.<ParamTemplateListInfo> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParamTemplateListInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseAuditService request structure.
 * @class
 */
class CloseAuditServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * AddInstances response structure.
 * @class
 */
class AddInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Freezing transaction. One freezing transaction ID is generated each time an instance is added.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * Pay-as-You-Go order ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * List of IDs of delivered resources
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * Big order ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BigDealIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database address
 * @class
 */
class Addr extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Port
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * Resource pack details
 * @class
 */
class SalePackageSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region of the resource pack Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageRegion = null;

        /**
         * Resource pack type. Valid values: `CCU` (compute resource pack), `DISK` (storage resource pack). Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Resource pack edition. Valid values: `base` (basic edition), `common` (general edition), `enterprise` (enterprise edition). Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * Minimum number of resources for the current edition of the resource pack.  Unit of the compute resources: pcs.  Unit of the storage resources: GB. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinPackageSpec = null;

        /**
         * Maximum number of resources for the current edition of the resource pack.  Unit of the compute resources: pcs.  Unit of the storage resources: GB. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxPackageSpec = null;

        /**
         * Validity period of a resource pack in days Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExpireDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageRegion = 'PackageRegion' in params ? params.PackageRegion : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;
        this.MinPackageSpec = 'MinPackageSpec' in params ? params.MinPackageSpec : null;
        this.MaxPackageSpec = 'MaxPackageSpec' in params ? params.MaxPackageSpec : null;
        this.ExpireDay = 'ExpireDay' in params ? params.ExpireDay : null;

    }
}

/**
 * PauseServerless request structure.
 * @class
 */
class PauseServerlessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Whether to pause forcibly and ignore the current user connections. Valid values: `0` (no), `1` (yes). Default value: `1`
         * @type {number || null}
         */
        this.ForcePause = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ForcePause = 'ForcePause' in params ? params.ForcePause : null;

    }
}

/**
 * ModifyParamTemplate response structure.
 * @class
 */
class ModifyParamTemplateResponse extends  AbstractModel {
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
 * Parameter information
 * @class
 */
class ParamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Default value
         * @type {string || null}
         */
        this.Default = null;

        /**
         * List of valid values when parameter type is `enum`, `string` or `bool`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Maximum value when parameter type is `float` or `integer`.
         * @type {string || null}
         */
        this.Max = null;

        /**
         * Minimum value when parameter type is `float` or `integer`.
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Whether to restart the instance for the modified parameters to take effect.
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * Parameter type: `integer`, `float`, `string`, `enum`, `bool`.
         * @type {string || null}
         */
        this.ParamType = null;

        /**
         * Match type. Regex can be used when parameter type is `string`. Valid value: `multiVal`.
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * Match values, which will be separated by semicolon when match type is `multiVal`.
         * @type {string || null}
         */
        this.MatchValue = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether it is global parameter
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * Whether the parameter can be modified
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ModifiableInfo || null}
         */
        this.ModifiableInfo = null;

        /**
         * Whether it is a function
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsFunc = null;

        /**
         * Function
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Func = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;
        this.MatchValue = 'MatchValue' in params ? params.MatchValue : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;

        if (params.ModifiableInfo) {
            let obj = new ModifiableInfo();
            obj.deserialize(params.ModifiableInfo)
            this.ModifiableInfo = obj;
        }
        this.IsFunc = 'IsFunc' in params ? params.IsFunc : null;
        this.Func = 'Func' in params ? params.Func : null;

    }
}

/**
 * DescribeProjectSecurityGroups request structure.
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Maximum entries returned per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Search by keyword
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * ModifyClusterParam response structure.
 * @class
 */
class ModifyClusterParamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async request ID used to query the result
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security group details
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Creation time in the format of yyyy-mm-dd hh:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Inbound rule
         * @type {Array.<PolicyRule> || null}
         */
        this.Inbound = null;

        /**
         * Outbound rule
         * @type {Array.<PolicyRule> || null}
         */
        this.Outbound = null;

        /**
         * Security group ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group name
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * Security group remarks
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new PolicyRule();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new PolicyRule();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

    }
}

/**
 * BindClusterResourcePackages response structure.
 * @class
 */
class BindClusterResourcePackagesResponse extends  AbstractModel {
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
 * DescribeBackupDownloadUrl request structure.
 * @class
 */
class DescribeBackupDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Backup ID
         * @type {number || null}
         */
        this.BackupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;

    }
}

/**
 * SearchClusterDatabases response structure.
 * @class
 */
class SearchClusterDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database List
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Databases = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Databases = 'Databases' in params ? params.Databases : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OfflineInstance request structure.
 * @class
 */
class OfflineInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Instance ID array
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;

    }
}

/**
 * ModifyClusterPasswordComplexity request structure.
 * @class
 */
class ModifyClusterPasswordComplexityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Password length
         * @type {number || null}
         */
        this.ValidatePasswordLength = null;

        /**
         * Number of letters
         * @type {number || null}
         */
        this.ValidatePasswordMixedCaseCount = null;

        /**
         * Number of symbols
         * @type {number || null}
         */
        this.ValidatePasswordSpecialCharCount = null;

        /**
         * Number of digits
         * @type {number || null}
         */
        this.ValidatePasswordNumberCount = null;

        /**
         * Password strength. Valid values: `MEDIUM`, `STRONG`.
         * @type {string || null}
         */
        this.ValidatePasswordPolicy = null;

        /**
         * Data dictionary
         * @type {Array.<string> || null}
         */
        this.ValidatePasswordDictionary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ValidatePasswordLength = 'ValidatePasswordLength' in params ? params.ValidatePasswordLength : null;
        this.ValidatePasswordMixedCaseCount = 'ValidatePasswordMixedCaseCount' in params ? params.ValidatePasswordMixedCaseCount : null;
        this.ValidatePasswordSpecialCharCount = 'ValidatePasswordSpecialCharCount' in params ? params.ValidatePasswordSpecialCharCount : null;
        this.ValidatePasswordNumberCount = 'ValidatePasswordNumberCount' in params ? params.ValidatePasswordNumberCount : null;
        this.ValidatePasswordPolicy = 'ValidatePasswordPolicy' in params ? params.ValidatePasswordPolicy : null;
        this.ValidatePasswordDictionary = 'ValidatePasswordDictionary' in params ? params.ValidatePasswordDictionary : null;

    }
}

/**
 * OpenWan request structure.
 * @class
 */
class OpenWanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance group ID
         * @type {string || null}
         */
        this.InstanceGrpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceGrpId = 'InstanceGrpId' in params ? params.InstanceGrpId : null;

    }
}

/**
 * UnbindClusterResourcePackages request structure.
 * @class
 */
class UnbindClusterResourcePackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The unique ID of a resource pack. If this parameter is left empty, all resource packs of the instance will be unbound.
         * @type {Array.<string> || null}
         */
        this.PackageIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.PackageIds = 'PackageIds' in params ? params.PackageIds : null;

    }
}

/**
 * OpenClusterPasswordComplexity response structure.
 * @class
 */
class OpenClusterPasswordComplexityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceDetail response structure.
 * @class
 */
class DescribeInstanceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance details
         * @type {CynosdbInstanceDetail || null}
         */
        this.Detail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Detail) {
            let obj = new CynosdbInstanceDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourcePackageSaleSpec response structure.
 * @class
 */
class DescribeResourcePackageSaleSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of available resource packs
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Resource pack details Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SalePackageSpec> || null}
         */
        this.Detail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new SalePackageSpec();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OfflineInstance response structure.
 * @class
 */
class OfflineInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceParam response structure.
 * @class
 */
class ModifyInstanceParamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Network information
 * @class
 */
class NetAddr extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private network IP
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Private network port number
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Public network domain name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * Public network port number
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * Network type. Valid values: `ro` (read-only), `rw` or `ha` (read-write)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Subnet ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * VPC ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Public IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WanIP = null;

        /**
         * Public network status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WanStatus = null;

        /**
         * Instance group ID Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.WanIP = 'WanIP' in params ? params.WanIP : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;

    }
}

/**
 * Information of a resource pack
 * @class
 */
class ResourcePackage extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a resource pack Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * Resource pack type. Valid values:  `CCU` (compute resource pack),  `DISK`  (storage resource pack). Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;

    }
}

/**
 * RestartInstance response structure.
 * @class
 */
class RestartInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CopyClusterPasswordComplexity request structure.
 * @class
 */
class CopyClusterPasswordComplexityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * A parameter used to replicate the array of cluster IDs
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.SourceClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.SourceClusterId = 'SourceClusterId' in params ? params.SourceClusterId : null;

    }
}

/**
 * Parameter template details
 * @class
 */
class TemplateParamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Default value
         * @type {string || null}
         */
        this.Default = null;

        /**
         * The collection of valid value types when parameter type is `enum`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Maximum value when parameter type is `float` or `integer`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Max = null;

        /**
         * Minimum value when parameter type is `float` or `integer`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Whether to restart the instance for the parameter to take effect
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Parameter type. Valid value: `integer`, `float`, `string`, `enum`.
         * @type {string || null}
         */
        this.ParamType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;

    }
}

/**
 * DescribeResourcesByDealName request structure.
 * @class
 */
class DescribeResourcesByDealNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID. (If the cluster is not delivered yet, the `DescribeResourcesByDealName` API may return the `InvalidParameterValue.DealNameNotFound` error. Call the API again until it succeeds.)
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * Order ID, which can be used to query the resource information of multiple orders ID (If the cluster is not delivered yet, the `DescribeResourcesByDealName` API may return the `InvalidParameterValue.DealNameNotFound` error. Call the API again until it succeeds.)
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * CreateBackup response structure.
 * @class
 */
class CreateBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountPrivileges response structure.
 * @class
 */
class ModifyAccountPrivilegesResponse extends  AbstractModel {
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
 * DescribeRollbackTimeValidity response structure.
 * @class
 */
class DescribeRollbackTimeValidityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage `poolID`
         * @type {number || null}
         */
        this.PoolId = null;

        /**
         * Rollback task ID, which needs to be passed in when rolling back to this time point
         * @type {number || null}
         */
        this.QueryId = null;

        /**
         * Whether the time point is valid. pass: check passed; fail: check failed
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Suggested time point. This value takes effect only if `Status` is `fail`
         * @type {string || null}
         */
        this.SuggestTime = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PoolId = 'PoolId' in params ? params.PoolId : null;
        this.QueryId = 'QueryId' in params ? params.QueryId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SuggestTime = 'SuggestTime' in params ? params.SuggestTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of an audit rule template
 * @class
 */
class AuditRuleTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule template ID
         * @type {string || null}
         */
        this.RuleTemplateId = null;

        /**
         * Rule template name
         * @type {string || null}
         */
        this.RuleTemplateName = null;

        /**
         * Filter of the rule template
         * @type {Array.<RuleFilters> || null}
         */
        this.RuleFilters = null;

        /**
         * Description of a rule template
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time of a rule template
         * @type {string || null}
         */
        this.CreateAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleTemplateId = 'RuleTemplateId' in params ? params.RuleTemplateId : null;
        this.RuleTemplateName = 'RuleTemplateName' in params ? params.RuleTemplateName : null;

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new RuleFilters();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateAt = 'CreateAt' in params ? params.CreateAt : null;

    }
}

/**
 * DescribeInstanceSlowQueries response structure.
 * @class
 */
class DescribeInstanceSlowQueriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow query record
         * @type {Array.<SlowQueriesItem> || null}
         */
        this.SlowQueries = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.SlowQueries) {
            this.SlowQueries = new Array();
            for (let z in params.SlowQueries) {
                let obj = new SlowQueriesItem();
                obj.deserialize(params.SlowQueries[z]);
                this.SlowQueries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountHost response structure.
 * @class
 */
class ModifyAccountHostResponse extends  AbstractModel {
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
 * DescribeInstances request structure.
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned results. Default value: 20. Maximum value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Record offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sort by field. Valid values:
<li> CREATETIME: creation time</li>
<li> PERIODENDTIME: expiration time</li>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values:
<li> ASC: ascending</li>
<li> DESC: descending</li>
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Filter. If more than one filter exists, the logical relationship between these filters is `AND`.
         * @type {Array.<QueryFilter> || null}
         */
        this.Filters = null;

        /**
         * Engine type. Currently, `MYSQL` is supported.
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Instance status. Valid values:
creating
running
isolating
isolated
activating: Removing the instance from isolation
offlining: Eliminating the instance
offlined: Instance eliminated
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Instance ID list
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * OpenReadOnlyInstanceExclusiveAccess request structure.
 * @class
 */
class OpenReadOnlyInstanceExclusiveAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ID of the read-only instance with dedicated access to be enabled
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specified VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Specified subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Security group
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * CloseClusterPasswordComplexity response structure.
 * @class
 */
class CloseClusterPasswordComplexityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMaintainPeriod request structure.
 * @class
 */
class DescribeMaintainPeriodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeBackupDownloadUrl response structure.
 * @class
 */
class DescribeBackupDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup download address
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeServerless request structure.
 * @class
 */
class ResumeServerlessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * InquirePriceCreate request structure.
 * @class
 */
class InquirePriceCreateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Number of compute node to purchase
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Instance type for purchase. Valid values: `PREPAID`, `POSTPAID`, `SERVERLESS`.
         * @type {string || null}
         */
        this.InstancePayMode = null;

        /**
         * Storage type for purchase. Valid values: `PREPAID`, `POSTPAID`.
         * @type {string || null}
         */
        this.StoragePayMode = null;

        /**
         * Number of CPU cores, which is required when `InstancePayMode` is `PREPAID` or `POSTPAID`.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size in GB, which is required when `InstancePayMode` is `PREPAID` or `POSTPAID`.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * CCU size, which is required when `InstancePayMode` is `SERVERLESS`.
         * @type {number || null}
         */
        this.Ccu = null;

        /**
         * Storage size, which is required when `StoragePayMode` is `PREPAID`.
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * Validity period, which is required when `InstancePayMode` is `PREPAID`.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Duration unit, which is required when `InstancePayMode` is `PREPAID`. Valid values: `m` (month), `d` (day).
         * @type {string || null}
         */
        this.TimeUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.InstancePayMode = 'InstancePayMode' in params ? params.InstancePayMode : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Ccu = 'Ccu' in params ? params.Ccu : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

    }
}

/**
 * OpenClusterPasswordComplexity request structure.
 * @class
 */
class OpenClusterPasswordComplexityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Password length
         * @type {number || null}
         */
        this.ValidatePasswordLength = null;

        /**
         * Number of letters
         * @type {number || null}
         */
        this.ValidatePasswordMixedCaseCount = null;

        /**
         * Number of symbols
         * @type {number || null}
         */
        this.ValidatePasswordSpecialCharCount = null;

        /**
         * Number of digits
         * @type {number || null}
         */
        this.ValidatePasswordNumberCount = null;

        /**
         * Password strength. Valid values: `MEDIUM`, `STRONG`.
         * @type {string || null}
         */
        this.ValidatePasswordPolicy = null;

        /**
         * Data dictionary
         * @type {Array.<string> || null}
         */
        this.ValidatePasswordDictionary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ValidatePasswordLength = 'ValidatePasswordLength' in params ? params.ValidatePasswordLength : null;
        this.ValidatePasswordMixedCaseCount = 'ValidatePasswordMixedCaseCount' in params ? params.ValidatePasswordMixedCaseCount : null;
        this.ValidatePasswordSpecialCharCount = 'ValidatePasswordSpecialCharCount' in params ? params.ValidatePasswordSpecialCharCount : null;
        this.ValidatePasswordNumberCount = 'ValidatePasswordNumberCount' in params ? params.ValidatePasswordNumberCount : null;
        this.ValidatePasswordPolicy = 'ValidatePasswordPolicy' in params ? params.ValidatePasswordPolicy : null;
        this.ValidatePasswordDictionary = 'ValidatePasswordDictionary' in params ? params.ValidatePasswordDictionary : null;

    }
}

/**
 * CreateAuditRuleTemplate request structure.
 * @class
 */
class CreateAuditRuleTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit rule
         * @type {Array.<RuleFilters> || null}
         */
        this.RuleFilters = null;

        /**
         * Rule template name
         * @type {string || null}
         */
        this.RuleTemplateName = null;

        /**
         * Rule template description.
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

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new RuleFilters();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }
        this.RuleTemplateName = 'RuleTemplateName' in params ? params.RuleTemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ModifyClusterName response structure.
 * @class
 */
class ModifyClusterNameResponse extends  AbstractModel {
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
 * DescribeInstanceSpecs request structure.
 * @class
 */
class DescribeInstanceSpecsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database type. Valid values: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Whether to return the AZ information.
         * @type {boolean || null}
         */
        this.IncludeZoneStocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.IncludeZoneStocks = 'IncludeZoneStocks' in params ? params.IncludeZoneStocks : null;

    }
}

/**
 * ExportInstanceSlowQueries request structure.
 * @class
 */
class ExportInstanceSlowQueriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Transaction start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Transaction end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Maximum number
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Client host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * File type. Valid values: csv, original.
         * @type {string || null}
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * ModifyAccountDescription request structure.
 * @class
 */
class ModifyAccountDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database account name
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Database account description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Host. Default value: `%`
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
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * Parameter to be modified
 * @class
 */
class ParamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * New value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Original value
         * @type {string || null}
         */
        this.OldValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.OldValue = 'OldValue' in params ? params.OldValue : null;

    }
}

/**
 * ModifyClusterParam request structure.
 * @class
 */
class ModifyClusterParamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of the parameters to be modified. Each element in the list is a combination of `ParamName`, `CurrentValue`, and `OldValue`. `ParamName` is the parameter name; `CurrentValue` is the current value; `OldValue` is the old value that doesn’t need to be verified.
         * @type {Array.<ParamItem> || null}
         */
        this.ParamList = null;

        /**
         * Valid values: `yes` (execute during maintenance time), `no` (execute now)
         * @type {string || null}
         */
        this.IsInMaintainPeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamItem();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.IsInMaintainPeriod = 'IsInMaintainPeriod' in params ? params.IsInMaintainPeriod : null;

    }
}

/**
 * Cluster information
 * @class
 */
class CynosdbCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster status. Valid values are as follows:
creating
running
isolating
isolated
activating (removing isolation)
offlining (deactivating)
offlined (deactivated)
deleting
deleted
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Database version
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * User UIN
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Engine type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * User `appid`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Cluster status description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Cluster creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Billing mode. `0`: Pay-as-you-go; `1`: Monthly subscription.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * End time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * Cluster read-write VIP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Cluster read-write vport
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Project ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * VPC ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * TDSQL-C kernel version
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * Storage capacity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * Renewal flag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * Task in progress
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProcessingTask = null;

        /**
         * Array of tasks in the cluster
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ObjectTask> || null}
         */
        this.Tasks = null;

        /**
         * Array of tags bound to the cluster
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * Database type. Valid values: `NORMAL`, `SERVERLESS`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * Serverless cluster status when the database type is `SERVERLESS`. Valid values:
`resume`
`pause`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServerlessStatus = null;

        /**
         * Prepaid cluster storage capacity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Cluster storage ID used in prepaid storage modification
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StorageId = null;

        /**
         * Billing mode of cluster storage. Valid values: `0` (pay-as-you-go), `1` (monthly subscription).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StoragePayMode = null;

        /**
         * The minimum storage corresponding to the compute specification of the cluster
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinStorageSize = null;

        /**
         * The maximum storage corresponding to the compute specification of the cluster
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxStorageSize = null;

        /**
         * Network information of the cluster
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<NetAddr> || null}
         */
        this.NetAddrs = null;

        /**
         * Physical AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PhysicalZone = null;

        /**
         * Primary AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MasterZone = null;

        /**
         * Whether there is a secondary AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HasSlaveZone = null;

        /**
         * Secondary AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SlaveZones = null;

        /**
         * Business type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * Whether to freeze
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsFreeze = null;

        /**
         * Order source
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrderSource = null;

        /**
         * Capability
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Ability || null}
         */
        this.Ability = null;

        /**
         * Information of the resource pack bound to an instance when `packageType` is `DISK`. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ResourcePackage> || null}
         */
        this.ResourcePackages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.CynosVersion = 'CynosVersion' in params ? params.CynosVersion : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ProcessingTask = 'ProcessingTask' in params ? params.ProcessingTask : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ObjectTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new Tag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.ServerlessStatus = 'ServerlessStatus' in params ? params.ServerlessStatus : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.StorageId = 'StorageId' in params ? params.StorageId : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.MinStorageSize = 'MinStorageSize' in params ? params.MinStorageSize : null;
        this.MaxStorageSize = 'MaxStorageSize' in params ? params.MaxStorageSize : null;

        if (params.NetAddrs) {
            this.NetAddrs = new Array();
            for (let z in params.NetAddrs) {
                let obj = new NetAddr();
                obj.deserialize(params.NetAddrs[z]);
                this.NetAddrs.push(obj);
            }
        }
        this.PhysicalZone = 'PhysicalZone' in params ? params.PhysicalZone : null;
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;
        this.HasSlaveZone = 'HasSlaveZone' in params ? params.HasSlaveZone : null;
        this.SlaveZones = 'SlaveZones' in params ? params.SlaveZones : null;
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;
        this.IsFreeze = 'IsFreeze' in params ? params.IsFreeze : null;
        this.OrderSource = 'OrderSource' in params ? params.OrderSource : null;

        if (params.Ability) {
            let obj = new Ability();
            obj.deserialize(params.Ability)
            this.Ability = obj;
        }

        if (params.ResourcePackages) {
            this.ResourcePackages = new Array();
            for (let z in params.ResourcePackages) {
                let obj = new ResourcePackage();
                obj.deserialize(params.ResourcePackages[z]);
                this.ResourcePackages.push(obj);
            }
        }

    }
}

/**
 * CreateAuditRuleTemplate response structure.
 * @class
 */
class CreateAuditRuleTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The generated rule template ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleTemplateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleTemplateId = 'RuleTemplateId' in params ? params.RuleTemplateId : null;
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
         * Region information
         * @type {Array.<SaleRegion> || null}
         */
        this.RegionSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new SaleRegion();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateCluster response structure.
 * @class
 */
class IsolateClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Refund order ID
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourcePackageList request structure.
 * @class
 */
class DescribeResourcePackageListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a resource pack
         * @type {Array.<string> || null}
         */
        this.PackageId = null;

        /**
         * Resource pack name
         * @type {Array.<string> || null}
         */
        this.PackageName = null;

        /**
         * Resource pack type. Valid values: `CCU` (compute resource pack), `DISK` (storage resource pack).
         * @type {Array.<string> || null}
         */
        this.PackageType = null;

        /**
         * Region of the resource pack. Valid values: `China` (Chinese mainland), `overseas` (outside Chinese mainland).
         * @type {Array.<string> || null}
         */
        this.PackageRegion = null;

        /**
         * Resource pack status. Valid values: `using`, `expired`, `normal_finish` (used up), `apply_refund` (requesting a refund), `refund` (refunded).
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * Sorting conditions. Valid values: `startTime` (effective time), `expireTime` (expiration date), `packageUsedSpec` (used capacity), `packageTotalSpec` (total storage capacity). 
Sorting by array order
         * @type {Array.<string> || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `ASC` (ascending), `DESC` (descending).
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit
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
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.PackageRegion = 'PackageRegion' in params ? params.PackageRegion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Information of a purchasable AZ
 * @class
 */
class SaleZone extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ name
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Numeric ID of an AZ
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.ZoneZh = null;

        /**
         * Whether serverless cluster is supported. Valid values: <br>
`0`: No<br>
`1`: Yes
         * @type {number || null}
         */
        this.IsSupportServerless = null;

        /**
         * Whether standard cluster is supported. Valid values: <br>
`0`: No<br>
`1`: Yes
         * @type {number || null}
         */
        this.IsSupportNormal = null;

        /**
         * Physical zone
         * @type {string || null}
         */
        this.PhysicalZone = null;

        /**
         * Whether the user has AZ permission
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.HasPermission = null;

        /**
         * Whether it is a full-linkage RDMA AZ.
         * @type {string || null}
         */
        this.IsWholeRdmaZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneZh = 'ZoneZh' in params ? params.ZoneZh : null;
        this.IsSupportServerless = 'IsSupportServerless' in params ? params.IsSupportServerless : null;
        this.IsSupportNormal = 'IsSupportNormal' in params ? params.IsSupportNormal : null;
        this.PhysicalZone = 'PhysicalZone' in params ? params.PhysicalZone : null;
        this.HasPermission = 'HasPermission' in params ? params.HasPermission : null;
        this.IsWholeRdmaZone = 'IsWholeRdmaZone' in params ? params.IsWholeRdmaZone : null;

    }
}

/**
 * ModifyParamTemplate request structure.
 * @class
 */
class ModifyParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template Name
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * The template description
         * @type {string || null}
         */
        this.TemplateDescription = null;

        /**
         * Parameter list
         * @type {Array.<ModifyParamItem> || null}
         */
        this.ParamList = null;

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
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ModifyParamItem();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * Task information
 * @class
 */
class ObjectTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto-Incrementing task ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Task type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Task status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * Task ID (cluster ID | instance group ID | instance ID)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ObjectId = null;

        /**
         * Task type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ObjectType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.ObjectId = 'ObjectId' in params ? params.ObjectId : null;
        this.ObjectType = 'ObjectType' in params ? params.ObjectType : null;

    }
}

/**
 * OpenAuditService response structure.
 * @class
 */
class OpenAuditServiceResponse extends  AbstractModel {
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
 * OfflineCluster response structure.
 * @class
 */
class OfflineClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchProxyVpc response structure.
 * @class
 */
class SwitchProxyVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeParamTemplateDetail request structure.
 * @class
 */
class DescribeParamTemplateDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID
         * @type {number || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * ModifyAccountHost request structure.
 * @class
 */
class ModifyAccountHostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * New host
         * @type {string || null}
         */
        this.NewHost = null;

        /**
         * Account infomation
         * @type {InputAccount || null}
         */
        this.Account = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NewHost = 'NewHost' in params ? params.NewHost : null;

        if (params.Account) {
            let obj = new InputAccount();
            obj.deserialize(params.Account)
            this.Account = obj;
        }

    }
}

/**
 * CreateParamTemplate request structure.
 * @class
 */
class CreateParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * MySQL version number
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * The description of a template
         * @type {string || null}
         */
        this.TemplateDescription = null;

        /**
         * (Optional) ID of the template to be copied
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Database type. Valid values:  `NORMAL` (default), `SERVERLESS`.
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * List of the parameters
         * @type {Array.<ParamItem> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.DbMode = 'DbMode' in params ? params.DbMode : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamItem();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * DescribeAuditRuleTemplates request structure.
 * @class
 */
class DescribeAuditRuleTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule template ID
         * @type {Array.<string> || null}
         */
        this.RuleTemplateIds = null;

        /**
         * Rule template name
         * @type {Array.<string> || null}
         */
        this.RuleTemplateNames = null;

        /**
         * Number of results returned per request. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: `0`.
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
        this.RuleTemplateIds = 'RuleTemplateIds' in params ? params.RuleTemplateIds : null;
        this.RuleTemplateNames = 'RuleTemplateNames' in params ? params.RuleTemplateNames : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Details of purchasable instance specifications. `Cpu` and `Memory` determine the instance specification during instance creation. The value range of the storage capacity is [MinStorageSize,MaxStorageSize]
 * @class
 */
class InstanceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instance CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance memory in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Maximum instance storage capacity GB
         * @type {number || null}
         */
        this.MaxStorageSize = null;

        /**
         * Minimum instance storage capacity GB
         * @type {number || null}
         */
        this.MinStorageSize = null;

        /**
         * Whether there is an inventory.
         * @type {boolean || null}
         */
        this.HasStock = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * Maximum IOPS
         * @type {number || null}
         */
        this.MaxIops = null;

        /**
         * Maximum bandwidth
         * @type {number || null}
         */
        this.MaxIoBandWidth = null;

        /**
         * Inventory information in a region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ZoneStockInfo> || null}
         */
        this.ZoneStockInfos = null;

        /**
         * Quantity in stock
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StockCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MaxStorageSize = 'MaxStorageSize' in params ? params.MaxStorageSize : null;
        this.MinStorageSize = 'MinStorageSize' in params ? params.MinStorageSize : null;
        this.HasStock = 'HasStock' in params ? params.HasStock : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MaxIops = 'MaxIops' in params ? params.MaxIops : null;
        this.MaxIoBandWidth = 'MaxIoBandWidth' in params ? params.MaxIoBandWidth : null;

        if (params.ZoneStockInfos) {
            this.ZoneStockInfos = new Array();
            for (let z in params.ZoneStockInfos) {
                let obj = new ZoneStockInfo();
                obj.deserialize(params.ZoneStockInfos[z]);
                this.ZoneStockInfos.push(obj);
            }
        }
        this.StockCount = 'StockCount' in params ? params.StockCount : null;

    }
}

/**
 * DescribeFlow request structure.
 * @class
 */
class DescribeFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * RestartInstance request structure.
 * @class
 */
class RestartInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * IsolateInstance request structure.
 * @class
 */
class IsolateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Instance ID array
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * This parameter has been disused.
         * @type {string || null}
         */
        this.DbType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;
        this.DbType = 'DbType' in params ? params.DbType : null;

    }
}

/**
 * ModifyAccountPrivileges request structure.
 * @class
 */
class ModifyAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Account infomation
         * @type {InputAccount || null}
         */
        this.Account = null;

        /**
         * Array of global permissions
         * @type {Array.<string> || null}
         */
        this.GlobalPrivileges = null;

        /**
         * Array of database permissions
         * @type {Array.<DatabasePrivileges> || null}
         */
        this.DatabasePrivileges = null;

        /**
         * Array of table permissions
         * @type {Array.<TablePrivileges> || null}
         */
        this.TablePrivileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Account) {
            let obj = new InputAccount();
            obj.deserialize(params.Account)
            this.Account = obj;
        }
        this.GlobalPrivileges = 'GlobalPrivileges' in params ? params.GlobalPrivileges : null;

        if (params.DatabasePrivileges) {
            this.DatabasePrivileges = new Array();
            for (let z in params.DatabasePrivileges) {
                let obj = new DatabasePrivileges();
                obj.deserialize(params.DatabasePrivileges[z]);
                this.DatabasePrivileges.push(obj);
            }
        }

        if (params.TablePrivileges) {
            this.TablePrivileges = new Array();
            for (let z in params.TablePrivileges) {
                let obj = new TablePrivileges();
                obj.deserialize(params.TablePrivileges[z]);
                this.TablePrivileges.push(obj);
            }
        }

    }
}

/**
 * Database account information
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database account name
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Database account description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * The max connections
         * @type {number || null}
         */
        this.MaxUserConnections = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.MaxUserConnections = 'MaxUserConnections' in params ? params.MaxUserConnections : null;

    }
}

/**
 * CreateBackup request structure.
 * @class
 */
class CreateBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Backup type. Valid values: `logic` (logic backup), `snapshot` (physical backup)
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * Backup database, which is valid when `BackupType` is `logic`.
         * @type {Array.<string> || null}
         */
        this.BackupDatabases = null;

        /**
         * Backup table, which is valid when `BackupType` is `logic`.
         * @type {Array.<DatabaseTables> || null}
         */
        this.BackupTables = null;

        /**
         * Backup name
         * @type {string || null}
         */
        this.BackupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupDatabases = 'BackupDatabases' in params ? params.BackupDatabases : null;

        if (params.BackupTables) {
            this.BackupTables = new Array();
            for (let z in params.BackupTables) {
                let obj = new DatabaseTables();
                obj.deserialize(params.BackupTables[z]);
                this.BackupTables.push(obj);
            }
        }
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * CreateClusterDatabase response structure.
 * @class
 */
class CreateClusterDatabaseResponse extends  AbstractModel {
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
 * ExportInstanceSlowQueries response structure.
 * @class
 */
class ExportInstanceSlowQueriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow query export content
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchClusterTables response structure.
 * @class
 */
class SearchClusterTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data table list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DatabaseTables> || null}
         */
        this.Tables = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new DatabaseTables();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security group rule
 * @class
 */
class PolicyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy, which can be `ACCEPT` or `DROP`
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Source IP or IP range, such as 192.168.0.0/16
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Port
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * Network protocol, such as UDP and TCP
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * Protocol port ID or protocol port group ID.
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * IP address ID or IP address group ID.
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * DescribeResourcePackageSaleSpec request structure.
 * @class
 */
class DescribeResourcePackageSaleSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Region of the resource pack. Valid values: `China` (Chinese mainland), `overseas` (outside Chinese mainland).
         * @type {string || null}
         */
        this.PackageRegion = null;

        /**
         * Resource pack type. Valid values: `CCU` (compute resource pack, `DISK` (storage resource pack).
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit
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
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.PackageRegion = 'PackageRegion' in params ? params.PackageRegion : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UnbindClusterResourcePackages response structure.
 * @class
 */
class UnbindClusterResourcePackagesResponse extends  AbstractModel {
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
 * DescribeMaintainPeriod response structure.
 * @class
 */
class DescribeMaintainPeriodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maintenance days of the week
         * @type {Array.<string> || null}
         */
        this.MaintainWeekDays = null;

        /**
         * Maintenance start time in seconds
         * @type {number || null}
         */
        this.MaintainStartTime = null;

        /**
         * Maintenance duration in seconds
         * @type {number || null}
         */
        this.MaintainDuration = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaintainWeekDays = 'MaintainWeekDays' in params ? params.MaintainWeekDays : null;
        this.MaintainStartTime = 'MaintainStartTime' in params ? params.MaintainStartTime : null;
        this.MaintainDuration = 'MaintainDuration' in params ? params.MaintainDuration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchProxyVpc request structure.
 * @class
 */
class SwitchProxyVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * VPC ID in string
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Subnet ID in string
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Valid hours of old IP
         * @type {number || null}
         */
        this.OldIpReserveHours = null;

        /**
         * Database proxy group ID (required), which can be obtained through the `DescribeProxies` API.
         * @type {string || null}
         */
        this.ProxyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.OldIpReserveHours = 'OldIpReserveHours' in params ? params.OldIpReserveHours : null;
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;

    }
}

/**
 * DescribeBackupList response structure.
 * @class
 */
class DescribeBackupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of backup files
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Backup file list
         * @type {Array.<BackupFileInfo> || null}
         */
        this.BackupList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.BackupList) {
            this.BackupList = new Array();
            for (let z in params.BackupList) {
                let obj = new BackupFileInfo();
                obj.deserialize(params.BackupList[z]);
                this.BackupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of a purchasable region
 * @class
 */
class SaleRegion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Numeric ID of a region
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionZh = null;

        /**
         * List of purchasable AZs
         * @type {Array.<SaleZone> || null}
         */
        this.ZoneSet = null;

        /**
         * Engine type
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Supported modules in a region
         * @type {Array.<Module> || null}
         */
        this.Modules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionZh = 'RegionZh' in params ? params.RegionZh : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new SaleZone();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.DbType = 'DbType' in params ? params.DbType : null;

        if (params.Modules) {
            this.Modules = new Array();
            for (let z in params.Modules) {
                let obj = new Module();
                obj.deserialize(params.Modules[z]);
                this.Modules.push(obj);
            }
        }

    }
}

/**
 * DescribeResourcePackageDetail request structure.
 * @class
 */
class DescribeResourcePackageDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a resource pack
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * Instance ID
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

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
         * Offset
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * Limit
         * @type {string || null}
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
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeBinlogSaveDays request structure.
 * @class
 */
class DescribeBinlogSaveDaysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyBackupConfig request structure.
 * @class
 */
class ModifyBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Full backup start time. Value range: [0-24*3600]. For example, 0:00 AM, 1:00 AM, and 2:00 AM are represented by 0, 3600, and 7200, respectively
         * @type {number || null}
         */
        this.BackupTimeBeg = null;

        /**
         * Full backup end time. Value range: [0-24*3600]. For example, 0:00 AM, 1:00 AM, and 2:00 AM are represented by 0, 3600, and 7200, respectively.
         * @type {number || null}
         */
        this.BackupTimeEnd = null;

        /**
         * Backup retention period in seconds. Backups will be cleared after this period elapses. 7 days is represented by 3600*24*7 = 604800. Maximum value: 158112000.
         * @type {number || null}
         */
        this.ReserveDuration = null;

        /**
         * Backup frequency. It is an array of 7 elements corresponding to Monday through Sunday. full: full backup; increment: incremental backup. This parameter cannot be modified currently and doesn't need to be entered.
         * @type {Array.<string> || null}
         */
        this.BackupFreq = null;

        /**
         * Backup mode. logic: logic backup; snapshot: snapshot backup. This parameter cannot be modified currently and doesn't need to be entered.
         * @type {string || null}
         */
        this.BackupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BackupTimeBeg = 'BackupTimeBeg' in params ? params.BackupTimeBeg : null;
        this.BackupTimeEnd = 'BackupTimeEnd' in params ? params.BackupTimeEnd : null;
        this.ReserveDuration = 'ReserveDuration' in params ? params.ReserveDuration : null;
        this.BackupFreq = 'BackupFreq' in params ? params.BackupFreq : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;

    }
}

/**
 * ActivateInstance response structure.
 * @class
 */
class ActivateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountDescription response structure.
 * @class
 */
class ModifyAccountDescriptionResponse extends  AbstractModel {
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
 * DescribeRollbackTimeValidity request structure.
 * @class
 */
class DescribeRollbackTimeValidityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Expected time point to roll back to
         * @type {string || null}
         */
        this.ExpectTime = null;

        /**
         * Error tolerance range for rollback time point
         * @type {number || null}
         */
        this.ExpectTimeThresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ExpectTime = 'ExpectTime' in params ? params.ExpectTime : null;
        this.ExpectTimeThresh = 'ExpectTimeThresh' in params ? params.ExpectTimeThresh : null;

    }
}

/**
 * IsolateCluster request structure.
 * @class
 */
class IsolateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * This parameter has been disused.
         * @type {string || null}
         */
        this.DbType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.DbType = 'DbType' in params ? params.DbType : null;

    }
}

/**
 * DescribeClusterInstanceGrps response structure.
 * @class
 */
class DescribeClusterInstanceGrpsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instance groups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance group list
         * @type {Array.<CynosdbInstanceGrp> || null}
         */
        this.InstanceGrpInfoList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.InstanceGrpInfoList) {
            this.InstanceGrpInfoList = new Array();
            for (let z in params.InstanceGrpInfoList) {
                let obj = new CynosdbInstanceGrp();
                obj.deserialize(params.InstanceGrpInfoList[z]);
                this.InstanceGrpInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddInstances request structure.
 * @class
 */
class AddInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Number of added read-only instances. Value range: (0,16].
         * @type {number || null}
         */
        this.ReadOnlyCount = null;

        /**
         * Instance group ID, which will be used when you add an instance in an existing RO group. If this parameter is left empty, an RO group will be created. But it is not recommended to pass in this parameter for the current version, as this version has been disused.
         * @type {string || null}
         */
        this.InstanceGrpId = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID. If `VpcId` is set, `SubnetId` is required.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The port used when adding an RO group. Value range: [0,65535).
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Instance name. String length range: [0,64).
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Whether to automatically select a voucher. 1: yes; 0: no. Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Database type. Valid values: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Order source. String length range: [0,64).
         * @type {string || null}
         */
        this.OrderSource = null;

        /**
         * Transaction mode. Valid values: `0` (place and pay for an order), `1` (place an order)
         * @type {number || null}
         */
        this.DealMode = null;

        /**
         * Parameter template ID
         * @type {number || null}
         */
        this.ParamTemplateId = null;

        /**
         * Parameter list, which is valid only if `InstanceParams` is passed in to `ParamTemplateId`.
         * @type {Array.<ModifyParamItem> || null}
         */
        this.InstanceParams = null;

        /**
         * Security group ID. You can specify an security group when creating a read-only instance.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.ReadOnlyCount = 'ReadOnlyCount' in params ? params.ReadOnlyCount : null;
        this.InstanceGrpId = 'InstanceGrpId' in params ? params.InstanceGrpId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.OrderSource = 'OrderSource' in params ? params.OrderSource : null;
        this.DealMode = 'DealMode' in params ? params.DealMode : null;
        this.ParamTemplateId = 'ParamTemplateId' in params ? params.ParamTemplateId : null;

        if (params.InstanceParams) {
            this.InstanceParams = new Array();
            for (let z in params.InstanceParams) {
                let obj = new ModifyParamItem();
                obj.deserialize(params.InstanceParams[z]);
                this.InstanceParams.push(obj);
            }
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * ModifyClusterDatabase request structure.
 * @class
 */
class ModifyClusterDatabaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Host permissions of the new authorized user
         * @type {Array.<UserHostPrivilege> || null}
         */
        this.NewUserHostPrivileges = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Host permissions of previously authorized users
         * @type {Array.<UserHostPrivilege> || null}
         */
        this.OldUserHostPrivileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;

        if (params.NewUserHostPrivileges) {
            this.NewUserHostPrivileges = new Array();
            for (let z in params.NewUserHostPrivileges) {
                let obj = new UserHostPrivilege();
                obj.deserialize(params.NewUserHostPrivileges[z]);
                this.NewUserHostPrivileges.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

        if (params.OldUserHostPrivileges) {
            this.OldUserHostPrivileges = new Array();
            for (let z in params.OldUserHostPrivileges) {
                let obj = new UserHostPrivilege();
                obj.deserialize(params.OldUserHostPrivileges[z]);
                this.OldUserHostPrivileges.push(obj);
            }
        }

    }
}

/**
 * InquirePriceCreate response structure.
 * @class
 */
class InquirePriceCreateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance price
         * @type {TradePrice || null}
         */
        this.InstancePrice = null;

        /**
         * Storage price
         * @type {TradePrice || null}
         */
        this.StoragePrice = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new TradePrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

        if (params.StoragePrice) {
            let obj = new TradePrice();
            obj.deserialize(params.StoragePrice)
            this.StoragePrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterSlaveZone request structure.
 * @class
 */
class ModifyClusterSlaveZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Old replica AZ
         * @type {string || null}
         */
        this.OldSlaveZone = null;

        /**
         * New replica AZ
         * @type {string || null}
         */
        this.NewSlaveZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.OldSlaveZone = 'OldSlaveZone' in params ? params.OldSlaveZone : null;
        this.NewSlaveZone = 'NewSlaveZone' in params ? params.NewSlaveZone : null;

    }
}

/**
 * DescribeInstanceErrorLogs response structure.
 * @class
 */
class DescribeInstanceErrorLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of logs Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Error log list Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CynosdbErrorLogItem> || null}
         */
        this.ErrorLogs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ErrorLogs) {
            this.ErrorLogs = new Array();
            for (let z in params.ErrorLogs) {
                let obj = new CynosdbErrorLogItem();
                obj.deserialize(params.ErrorLogs[z]);
                this.ErrorLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance details
 * @class
 */
class CynosdbInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * User `Uin`
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * User `AppId`
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Instance status description
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Database type
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Database version
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Current instance role
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Billing mode
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Instance expiration time
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * Network type
         * @type {number || null}
         */
        this.NetType = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Private IP of instance
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Private port of instance
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Public domain name of instance
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * Character set
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * TDSQL-C kernel version
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * Renewal flag
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * The minimum number of CPU cores for a serverless instance
         * @type {number || null}
         */
        this.MinCpu = null;

        /**
         * The maximum number of CPU cores for a serverless instance
         * @type {number || null}
         */
        this.MaxCpu = null;

        /**
         * Serverless instance status. Valid values:
resume
pause
         * @type {string || null}
         */
        this.ServerlessStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.CynosVersion = 'CynosVersion' in params ? params.CynosVersion : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.MinCpu = 'MinCpu' in params ? params.MinCpu : null;
        this.MaxCpu = 'MaxCpu' in params ? params.MaxCpu : null;
        this.ServerlessStatus = 'ServerlessStatus' in params ? params.ServerlessStatus : null;

    }
}

/**
 * Filter of the audit rule
 * @class
 */
class RuleFilters extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter parameter name of the audit rule. Valid values: `host` (client IP), `user` (database account), `dbName` (database name), `sqlType` (SQL type), `sql` (SQL statement).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Filter match type of the audit rule. Valid values: `INC` (including), `EXC` (excluding), `EQS` (equal to), `NEQ` (not equal to).
         * @type {string || null}
         */
        this.Compare = null;

        /**
         * Filter match value of the audit rule
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Compare = 'Compare' in params ? params.Compare : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * RefundResourcePackage response structure.
 * @class
 */
class RefundResourcePackageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Each item has only one `dealName`, through which you can ensure the idempotency of the delivery API.
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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteClusterDatabase response structure.
 * @class
 */
class DeleteClusterDatabaseResponse extends  AbstractModel {
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
 * Cluster details
 * @class
 */
class CynosdbClusterDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Physical AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PhysicalZone = null;

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Status description
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Serverless cluster status when the database type is `SERVERLESS`. Valid values:
resume
resuming
pause
pausing
         * @type {string || null}
         */
        this.ServerlessStatus = null;

        /**
         * Storage ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StorageId = null;

        /**
         * Storage capacity in GB
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Maximum storage specification in GB
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxStorageSize = null;

        /**
         * Minimum storage specification in GB
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinStorageSize = null;

        /**
         * Storage billing mode. Valid values: `1` (monthly subscription), `0` (pay-as-you-go).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StoragePayMode = null;

        /**
         * VPC name
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Unique VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet name
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Character set
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Database type
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Database type. Valid values: `normal`, `serverless`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * Database version
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * Maximum storage space
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * Used capacity
         * @type {number || null}
         */
        this.UsedStorage = null;

        /**
         * VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * vport
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * vport for read/write separation
         * @type {Array.<Addr> || null}
         */
        this.RoAddr = null;

        /**
         * Features supported by the cluster
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Ability || null}
         */
        this.Ability = null;

        /**
         * TDSQL-C version
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * Business type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * Whether there is a secondary AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HasSlaveZone = null;

        /**
         * Whether to freeze
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsFreeze = null;

        /**
         * Task list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ObjectTask> || null}
         */
        this.Tasks = null;

        /**
         * Primary AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MasterZone = null;

        /**
         * Secondary AZ list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SlaveZones = null;

        /**
         * Instance information
         * @type {Array.<ClusterInstanceDetail> || null}
         */
        this.InstanceSet = null;

        /**
         * Billing mode
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Expiration time
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * Array of tags bound to instance
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * Proxy status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProxyStatus = null;

        /**
         * Binlog switch. Valid values: `ON`, `OFF`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogBin = null;

        /**
         * Whether to skip the transaction
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsSkipTrade = null;

        /**
         * PITR type. Valid values: `normal`, `redo_pitr`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PitrType = null;

        /**
         * Whether to enable password complexity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsOpenPasswordComplexity = null;

        /**
         * Network type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NetworkStatus = null;

        /**
         * Information of the resource pack bound to a cluster Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ResourcePackage> || null}
         */
        this.ResourcePackages = null;

        /**
         * The auto-renewal flag. Valid values: `0`: (manual renewal, default), `1` (auto-renewal). Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.PhysicalZone = 'PhysicalZone' in params ? params.PhysicalZone : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.ServerlessStatus = 'ServerlessStatus' in params ? params.ServerlessStatus : null;
        this.StorageId = 'StorageId' in params ? params.StorageId : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.MaxStorageSize = 'MaxStorageSize' in params ? params.MaxStorageSize : null;
        this.MinStorageSize = 'MinStorageSize' in params ? params.MinStorageSize : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.UsedStorage = 'UsedStorage' in params ? params.UsedStorage : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

        if (params.RoAddr) {
            this.RoAddr = new Array();
            for (let z in params.RoAddr) {
                let obj = new Addr();
                obj.deserialize(params.RoAddr[z]);
                this.RoAddr.push(obj);
            }
        }

        if (params.Ability) {
            let obj = new Ability();
            obj.deserialize(params.Ability)
            this.Ability = obj;
        }
        this.CynosVersion = 'CynosVersion' in params ? params.CynosVersion : null;
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;
        this.HasSlaveZone = 'HasSlaveZone' in params ? params.HasSlaveZone : null;
        this.IsFreeze = 'IsFreeze' in params ? params.IsFreeze : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ObjectTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;
        this.SlaveZones = 'SlaveZones' in params ? params.SlaveZones : null;

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new ClusterInstanceDetail();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new Tag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.ProxyStatus = 'ProxyStatus' in params ? params.ProxyStatus : null;
        this.LogBin = 'LogBin' in params ? params.LogBin : null;
        this.IsSkipTrade = 'IsSkipTrade' in params ? params.IsSkipTrade : null;
        this.PitrType = 'PitrType' in params ? params.PitrType : null;
        this.IsOpenPasswordComplexity = 'IsOpenPasswordComplexity' in params ? params.IsOpenPasswordComplexity : null;
        this.NetworkStatus = 'NetworkStatus' in params ? params.NetworkStatus : null;

        if (params.ResourcePackages) {
            this.ResourcePackages = new Array();
            for (let z in params.ResourcePackages) {
                let obj = new ResourcePackage();
                obj.deserialize(params.ResourcePackages[z]);
                this.ResourcePackages.push(obj);
            }
        }
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * ResetAccountPassword request structure.
 * @class
 */
class ResetAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database account name
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * New password of the database account
         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Host. Default value: `%`
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
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * DescribeInstanceErrorLogs request structure.
 * @class
 */
class DescribeInstanceErrorLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Limit on the number of logs
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset of the log number
         * @type {number || null}
         */
        this.Offset = null;

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
         * Sorting field. Valid value: 'Timestamp'.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `ASC`, `DESC`.
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Log level, which supports combo search by multiple levels. Valid values: `error`, `warning`, `note`.
         * @type {Array.<string> || null}
         */
        this.LogLevels = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.KeyWords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.LogLevels = 'LogLevels' in params ? params.LogLevels : null;
        this.KeyWords = 'KeyWords' in params ? params.KeyWords : null;

    }
}

/**
 * DeleteClusterDatabase request structure.
 * @class
 */
class DeleteClusterDatabaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.DbNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.DbNames = 'DbNames' in params ? params.DbNames : null;

    }
}

/**
 * Details of whether the parameter can be modified
 * @class
 */
class ModifiableInfo extends  AbstractModel {
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
 * DescribeInstanceParams response structure.
 * @class
 */
class DescribeInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance parameters
         * @type {Array.<InstanceParamItem> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceParamItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupName request structure.
 * @class
 */
class ModifyBackupNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Backup file ID
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * Backup name, which can contain up to 60 characters.
         * @type {string || null}
         */
        this.BackupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * DeleteAccounts request structure.
 * @class
 */
class DeleteAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Accounts in array, which contains `account` and `host`.
         * @type {Array.<InputAccount> || null}
         */
        this.Accounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new InputAccount();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * Filter of rule audit
 * @class
 */
class AuditRuleFilters extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit rule
         * @type {Array.<RuleFilters> || null}
         */
        this.RuleFilters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new RuleFilters();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }

    }
}

/**
 * DescribeBinlogSaveDays response structure.
 * @class
 */
class DescribeBinlogSaveDaysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Binlog retention period in days
         * @type {number || null}
         */
        this.BinlogSaveDays = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BinlogSaveDays = 'BinlogSaveDays' in params ? params.BinlogSaveDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountPrivileges request structure.
 * @class
 */
class DescribeAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Account name
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * When the database name is “*”, the value specified in `Type` and `TableName` will be ignored, indicating that the user's global permissions are being modified.
         * @type {string || null}
         */
        this.Db = null;

        /**
         * Object type in a specified database. Valid values: `table`, `*`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The database name can be specified when `Type` is 'table'.
         * @type {string || null}
         */
        this.TableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Db = 'Db' in params ? params.Db : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TableName = 'TableName' in params ? params.TableName : null;

    }
}

/**
 * Parameter template information
 * @class
 */
class ParamTemplateListInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Parameter template name
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Parameter template description
         * @type {string || null}
         */
        this.TemplateDescription = null;

        /**
         * Engine version
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Database Type. Valid values: `NORMAL`, `SERVERLESS`.
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * Parameter template details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TemplateParamInfo> || null}
         */
        this.ParamInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.DbMode = 'DbMode' in params ? params.DbMode : null;

        if (params.ParamInfoSet) {
            this.ParamInfoSet = new Array();
            for (let z in params.ParamInfoSet) {
                let obj = new TemplateParamInfo();
                obj.deserialize(params.ParamInfoSet[z]);
                this.ParamInfoSet.push(obj);
            }
        }

    }
}

/**
 * DescribeAccounts response structure.
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database account list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Account> || null}
         */
        this.AccountSet = null;

        /**
         * Total number of accounts
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

        if (params.AccountSet) {
            this.AccountSet = new Array();
            for (let z in params.AccountSet) {
                let obj = new Account();
                obj.deserialize(params.AccountSet[z]);
                this.AccountSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Rollback time range
 * @class
 */
class RollbackTimeRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * End time
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeRangeStart = 'TimeRangeStart' in params ? params.TimeRangeStart : null;
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;

    }
}

/**
 * CreateClusterDatabase request structure.
 * @class
 */
class CreateClusterDatabaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Character set
         * @type {string || null}
         */
        this.CharacterSet = null;

        /**
         * Collation
         * @type {string || null}
         */
        this.CollateRule = null;

        /**
         * Host permissions of the authorized user
         * @type {Array.<UserHostPrivilege> || null}
         */
        this.UserHostPrivileges = null;

        /**
         * Remarks
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.CharacterSet = 'CharacterSet' in params ? params.CharacterSet : null;
        this.CollateRule = 'CollateRule' in params ? params.CollateRule : null;

        if (params.UserHostPrivileges) {
            this.UserHostPrivileges = new Array();
            for (let z in params.UserHostPrivileges) {
                let obj = new UserHostPrivilege();
                obj.deserialize(params.UserHostPrivileges[z]);
                this.UserHostPrivileges.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeleteBackup request structure.
 * @class
 */
class DeleteBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Backup file ID. This field is used by legacy versions and thus not recommended.
         * @type {Array.<number> || null}
         */
        this.SnapshotIdList = null;

        /**
         * Backup file ID. This field is recommended.
         * @type {Array.<number> || null}
         */
        this.BackupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SnapshotIdList = 'SnapshotIdList' in params ? params.SnapshotIdList : null;
        this.BackupIds = 'BackupIds' in params ? params.BackupIds : null;

    }
}

/**
 * Billing details
 * @class
 */
class TradePrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * The non-discounted total price of monthly subscribed resources (unit: US cent)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalPrice = null;

        /**
         * Total discount. `100` means no discount.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * The discounted total price of monthly subscribed resources (unit: US cent). If a discount is applied, `TotalPriceDiscount` will be the product of `TotalPrice` and `Discount`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalPriceDiscount = null;

        /**
         * The non-discounted unit price of pay-as-you-go resources (unit: US cent)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * The discounted unit price of pay-as-you-go resources (unit: US cent). If a discount is applied, `UnitPriceDiscount` will be the product of `UnitPrice` and `Discount`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * Price unit
         * @type {string || null}
         */
        this.ChargeUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalPrice = 'TotalPrice' in params ? params.TotalPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.TotalPriceDiscount = 'TotalPriceDiscount' in params ? params.TotalPriceDiscount : null;
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.ChargeUnit = 'ChargeUnit' in params ? params.ChargeUnit : null;

    }
}

/**
 * DescribeClusterParams request structure.
 * @class
 */
class DescribeClusterParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;

    }
}

/**
 * CloseAuditService response structure.
 * @class
 */
class CloseAuditServiceResponse extends  AbstractModel {
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
 * DescribeInstanceSpecs response structure.
 * @class
 */
class DescribeInstanceSpecsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification information
         * @type {Array.<InstanceSpec> || null}
         */
        this.InstanceSpecSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceSpecSet) {
            this.InstanceSpecSet = new Array();
            for (let z in params.InstanceSpecSet) {
                let obj = new InstanceSpec();
                obj.deserialize(params.InstanceSpecSet[z]);
                this.InstanceSpecSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSecurityGroups request structure.
 * @class
 */
class DescribeDBSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance group ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * The export format for an error log
 * @class
 */
class ErrorLogItemExport extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * Log level. Valid values: `error`, `warning`, `note`. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Log content Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeParamTemplateDetail response structure.
 * @class
 */
class DescribeParamTemplateDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Parameter template name
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Parameter template description
         * @type {string || null}
         */
        this.TemplateDescription = null;

        /**
         * Engine version
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Total number of parameters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of parameters
         * @type {Array.<ParamDetail> || null}
         */
        this.Items = null;

        /**
         * Database type. Valid values:  `NORMAL`, `SERVERLESS`.
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

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
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParamDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBinlogSaveDays response structure.
 * @class
 */
class ModifyBinlogSaveDaysResponse extends  AbstractModel {
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
 * ModifyAuditService response structure.
 * @class
 */
class ModifyAuditServiceResponse extends  AbstractModel {
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
 * DeleteAuditRuleTemplates response structure.
 * @class
 */
class DeleteAuditRuleTemplatesResponse extends  AbstractModel {
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
 * Modules supported by the system
 * @class
 */
class Module extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is supported. Valid values: `yes`, `no`.
         * @type {string || null}
         */
        this.IsDisable = null;

        /**
         * Module name
         * @type {string || null}
         */
        this.ModuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsDisable = 'IsDisable' in params ? params.IsDisable : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;

    }
}

/**
 * ModifyVipVport response structure.
 * @class
 */
class ModifyVipVportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterDetail response structure.
 * @class
 */
class DescribeClusterDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster details
         * @type {CynosdbClusterDetail || null}
         */
        this.Detail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Detail) {
            let obj = new CynosdbClusterDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceSlowQueries request structure.
 * @class
 */
class DescribeInstanceSlowQueriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Transaction start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Transaction end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Maximum number
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Client host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Sorting field. Valid values: QueryTime, LockTime, RowsExamined, RowsSent.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: asc, desc.
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * ModifyResourcePackageClusters response structure.
 * @class
 */
class ModifyResourcePackageClustersResponse extends  AbstractModel {
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
 * DescribeBinlogs request structure.
 * @class
 */
class DescribeBinlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

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
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Account. Valid values: `accountName`, `host`.
 * @class
 */
class InputAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Host. Default value: `%`
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
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * ModifyBackupConfig response structure.
 * @class
 */
class ModifyBackupConfigResponse extends  AbstractModel {
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
 * Inventory information in an AZ
 * @class
 */
class ZoneStockInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Whether there is an inventory.
         * @type {boolean || null}
         */
        this.HasStock = null;

        /**
         * Quantity in stock
         * @type {number || null}
         */
        this.StockCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.HasStock = 'HasStock' in params ? params.HasStock : null;
        this.StockCount = 'StockCount' in params ? params.StockCount : null;

    }
}

/**
 * InquirePriceRenew response structure.
 * @class
 */
class InquirePriceRenewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Instance ID list
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Price of instance specification in array
         * @type {Array.<TradePrice> || null}
         */
        this.Prices = null;

        /**
         * Total renewal price of compute node
         * @type {number || null}
         */
        this.InstanceRealTotalPrice = null;

        /**
         * Total renewal price of storage node
         * @type {number || null}
         */
        this.StorageRealTotalPrice = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Prices) {
            this.Prices = new Array();
            for (let z in params.Prices) {
                let obj = new TradePrice();
                obj.deserialize(params.Prices[z]);
                this.Prices.push(obj);
            }
        }
        this.InstanceRealTotalPrice = 'InstanceRealTotalPrice' in params ? params.InstanceRealTotalPrice : null;
        this.StorageRealTotalPrice = 'StorageRealTotalPrice' in params ? params.StorageRealTotalPrice : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAuditRuleTemplates response structure.
 * @class
 */
class ModifyAuditRuleTemplatesResponse extends  AbstractModel {
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

module.exports = {
    ModifyClusterNameRequest: ModifyClusterNameRequest,
    DescribeRollbackTimeRangeRequest: DescribeRollbackTimeRangeRequest,
    DescribeResourcePackageListResponse: DescribeResourcePackageListResponse,
    InquirePriceRenewRequest: InquirePriceRenewRequest,
    DescribeAccountPrivilegesResponse: DescribeAccountPrivilegesResponse,
    InstanceAuditRule: InstanceAuditRule,
    CreateResourcePackageRequest: CreateResourcePackageRequest,
    DescribeClusterDetailDatabasesRequest: DescribeClusterDetailDatabasesRequest,
    DescribeBackupConfigRequest: DescribeBackupConfigRequest,
    ModifyAuditRuleTemplatesRequest: ModifyAuditRuleTemplatesRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    ModifyMaintainPeriodConfigRequest: ModifyMaintainPeriodConfigRequest,
    DescribeRollbackTimeRangeResponse: DescribeRollbackTimeRangeResponse,
    BillingResourceInfo: BillingResourceInfo,
    ModifyClusterPasswordComplexityResponse: ModifyClusterPasswordComplexityResponse,
    ModifyBackupNameResponse: ModifyBackupNameResponse,
    SwitchClusterZoneResponse: SwitchClusterZoneResponse,
    DescribeResourcePackageDetailResponse: DescribeResourcePackageDetailResponse,
    DescribeClusterPasswordComplexityRequest: DescribeClusterPasswordComplexityRequest,
    QueryFilter: QueryFilter,
    DescribeBinlogDownloadUrlRequest: DescribeBinlogDownloadUrlRequest,
    CreateAccountsResponse: CreateAccountsResponse,
    ModifyInstanceNameRequest: ModifyInstanceNameRequest,
    ModifyClusterDatabaseResponse: ModifyClusterDatabaseResponse,
    UpgradeClusterVersionResponse: UpgradeClusterVersionResponse,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    CloseWanResponse: CloseWanResponse,
    DescribeBinlogsResponse: DescribeBinlogsResponse,
    DeleteParamTemplateResponse: DeleteParamTemplateResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeZonesRequest: DescribeZonesRequest,
    ClusterInstanceDetail: ClusterInstanceDetail,
    AddClusterSlaveZoneResponse: AddClusterSlaveZoneResponse,
    OldAddrInfo: OldAddrInfo,
    SlowQueriesItem: SlowQueriesItem,
    DescribeClusterParamsResponse: DescribeClusterParamsResponse,
    CloseWanRequest: CloseWanRequest,
    BindClusterResourcePackagesRequest: BindClusterResourcePackagesRequest,
    IsolateInstanceResponse: IsolateInstanceResponse,
    ModifyInstanceNameResponse: ModifyInstanceNameResponse,
    DescribeParamTemplatesRequest: DescribeParamTemplatesRequest,
    CopyClusterPasswordComplexityResponse: CopyClusterPasswordComplexityResponse,
    Tag: Tag,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    SearchClusterTablesRequest: SearchClusterTablesRequest,
    ModifyResourcePackageClustersRequest: ModifyResourcePackageClustersRequest,
    DeleteParamTemplateRequest: DeleteParamTemplateRequest,
    DbInfo: DbInfo,
    DescribeFlowResponse: DescribeFlowResponse,
    SetRenewFlagResponse: SetRenewFlagResponse,
    ExportInstanceErrorLogsRequest: ExportInstanceErrorLogsRequest,
    CreateClustersResponse: CreateClustersResponse,
    SetRenewFlagRequest: SetRenewFlagRequest,
    OfflineClusterRequest: OfflineClusterRequest,
    DescribeClusterDetailDatabasesResponse: DescribeClusterDetailDatabasesResponse,
    CynosdbInstanceGrp: CynosdbInstanceGrp,
    CreateParamTemplateResponse: CreateParamTemplateResponse,
    ActivateInstanceRequest: ActivateInstanceRequest,
    DatabaseTables: DatabaseTables,
    AddClusterSlaveZoneRequest: AddClusterSlaveZoneRequest,
    RemoveClusterSlaveZoneResponse: RemoveClusterSlaveZoneResponse,
    CynosdbErrorLogItem: CynosdbErrorLogItem,
    UpgradeClusterVersionRequest: UpgradeClusterVersionRequest,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    ModifyVipVportRequest: ModifyVipVportRequest,
    DatabasePrivileges: DatabasePrivileges,
    DescribeClustersRequest: DescribeClustersRequest,
    CloseClusterPasswordComplexityRequest: CloseClusterPasswordComplexityRequest,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    OpenReadOnlyInstanceExclusiveAccessResponse: OpenReadOnlyInstanceExclusiveAccessResponse,
    DescribeClusterInstanceGrpsRequest: DescribeClusterInstanceGrpsRequest,
    DescribeResourcesByDealNameResponse: DescribeResourcesByDealNameResponse,
    InstanceNetInfo: InstanceNetInfo,
    CreateAccountsRequest: CreateAccountsRequest,
    DeleteAuditRuleTemplatesRequest: DeleteAuditRuleTemplatesRequest,
    DescribeAuditRuleTemplatesResponse: DescribeAuditRuleTemplatesResponse,
    Package: Package,
    SwitchClusterZoneRequest: SwitchClusterZoneRequest,
    InstanceParamItem: InstanceParamItem,
    DescribeInstanceDetailRequest: DescribeInstanceDetailRequest,
    Ability: Ability,
    InstanceInitInfo: InstanceInitInfo,
    PackageDetail: PackageDetail,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    ModifyMaintainPeriodConfigResponse: ModifyMaintainPeriodConfigResponse,
    SwitchClusterVpcResponse: SwitchClusterVpcResponse,
    DescribeClusterDetailRequest: DescribeClusterDetailRequest,
    DeleteBackupResponse: DeleteBackupResponse,
    ModifyInstanceParamRequest: ModifyInstanceParamRequest,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    ModifyResourcePackageNameRequest: ModifyResourcePackageNameRequest,
    OpenWanResponse: OpenWanResponse,
    PauseServerlessResponse: PauseServerlessResponse,
    ParamDetail: ParamDetail,
    DeleteAccountsResponse: DeleteAccountsResponse,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    NewAccount: NewAccount,
    BackupFileInfo: BackupFileInfo,
    TablePrivileges: TablePrivileges,
    DescribeBinlogDownloadUrlResponse: DescribeBinlogDownloadUrlResponse,
    BindInstanceInfo: BindInstanceInfo,
    DescribeAuditRuleWithInstanceIdsResponse: DescribeAuditRuleWithInstanceIdsResponse,
    ModifyResourcePackageNameResponse: ModifyResourcePackageNameResponse,
    DescribeBackupListRequest: DescribeBackupListRequest,
    SearchClusterDatabasesRequest: SearchClusterDatabasesRequest,
    SwitchClusterVpcRequest: SwitchClusterVpcRequest,
    CreateResourcePackageResponse: CreateResourcePackageResponse,
    CynosdbInstance: CynosdbInstance,
    DescribeClusterPasswordComplexityResponse: DescribeClusterPasswordComplexityResponse,
    DescribeAuditRuleWithInstanceIdsRequest: DescribeAuditRuleWithInstanceIdsRequest,
    ExportInstanceErrorLogsResponse: ExportInstanceErrorLogsResponse,
    ModifyClusterSlaveZoneResponse: ModifyClusterSlaveZoneResponse,
    ParamItemDetail: ParamItemDetail,
    RemoveClusterSlaveZoneRequest: RemoveClusterSlaveZoneRequest,
    BinlogItem: BinlogItem,
    ModifyParamItem: ModifyParamItem,
    ModifyAuditServiceRequest: ModifyAuditServiceRequest,
    CreateClustersRequest: CreateClustersRequest,
    UserHostPrivilege: UserHostPrivilege,
    DescribeClustersResponse: DescribeClustersResponse,
    OpenAuditServiceRequest: OpenAuditServiceRequest,
    RefundResourcePackageRequest: RefundResourcePackageRequest,
    DescribeBackupConfigResponse: DescribeBackupConfigResponse,
    ModifyBinlogSaveDaysRequest: ModifyBinlogSaveDaysRequest,
    ResumeServerlessResponse: ResumeServerlessResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeParamTemplatesResponse: DescribeParamTemplatesResponse,
    CloseAuditServiceRequest: CloseAuditServiceRequest,
    AddInstancesResponse: AddInstancesResponse,
    Addr: Addr,
    SalePackageSpec: SalePackageSpec,
    PauseServerlessRequest: PauseServerlessRequest,
    ModifyParamTemplateResponse: ModifyParamTemplateResponse,
    ParamInfo: ParamInfo,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    ModifyClusterParamResponse: ModifyClusterParamResponse,
    SecurityGroup: SecurityGroup,
    BindClusterResourcePackagesResponse: BindClusterResourcePackagesResponse,
    DescribeBackupDownloadUrlRequest: DescribeBackupDownloadUrlRequest,
    SearchClusterDatabasesResponse: SearchClusterDatabasesResponse,
    OfflineInstanceRequest: OfflineInstanceRequest,
    ModifyClusterPasswordComplexityRequest: ModifyClusterPasswordComplexityRequest,
    OpenWanRequest: OpenWanRequest,
    UnbindClusterResourcePackagesRequest: UnbindClusterResourcePackagesRequest,
    OpenClusterPasswordComplexityResponse: OpenClusterPasswordComplexityResponse,
    DescribeInstanceDetailResponse: DescribeInstanceDetailResponse,
    DescribeResourcePackageSaleSpecResponse: DescribeResourcePackageSaleSpecResponse,
    OfflineInstanceResponse: OfflineInstanceResponse,
    ModifyInstanceParamResponse: ModifyInstanceParamResponse,
    NetAddr: NetAddr,
    ResourcePackage: ResourcePackage,
    RestartInstanceResponse: RestartInstanceResponse,
    CopyClusterPasswordComplexityRequest: CopyClusterPasswordComplexityRequest,
    TemplateParamInfo: TemplateParamInfo,
    DescribeResourcesByDealNameRequest: DescribeResourcesByDealNameRequest,
    CreateBackupResponse: CreateBackupResponse,
    ModifyAccountPrivilegesResponse: ModifyAccountPrivilegesResponse,
    DescribeRollbackTimeValidityResponse: DescribeRollbackTimeValidityResponse,
    AuditRuleTemplateInfo: AuditRuleTemplateInfo,
    DescribeInstanceSlowQueriesResponse: DescribeInstanceSlowQueriesResponse,
    ModifyAccountHostResponse: ModifyAccountHostResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    OpenReadOnlyInstanceExclusiveAccessRequest: OpenReadOnlyInstanceExclusiveAccessRequest,
    CloseClusterPasswordComplexityResponse: CloseClusterPasswordComplexityResponse,
    DescribeMaintainPeriodRequest: DescribeMaintainPeriodRequest,
    DescribeBackupDownloadUrlResponse: DescribeBackupDownloadUrlResponse,
    ResumeServerlessRequest: ResumeServerlessRequest,
    InquirePriceCreateRequest: InquirePriceCreateRequest,
    OpenClusterPasswordComplexityRequest: OpenClusterPasswordComplexityRequest,
    CreateAuditRuleTemplateRequest: CreateAuditRuleTemplateRequest,
    ModifyClusterNameResponse: ModifyClusterNameResponse,
    DescribeInstanceSpecsRequest: DescribeInstanceSpecsRequest,
    ExportInstanceSlowQueriesRequest: ExportInstanceSlowQueriesRequest,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    ParamItem: ParamItem,
    ModifyClusterParamRequest: ModifyClusterParamRequest,
    CynosdbCluster: CynosdbCluster,
    CreateAuditRuleTemplateResponse: CreateAuditRuleTemplateResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    IsolateClusterResponse: IsolateClusterResponse,
    DescribeResourcePackageListRequest: DescribeResourcePackageListRequest,
    SaleZone: SaleZone,
    ModifyParamTemplateRequest: ModifyParamTemplateRequest,
    ObjectTask: ObjectTask,
    OpenAuditServiceResponse: OpenAuditServiceResponse,
    OfflineClusterResponse: OfflineClusterResponse,
    SwitchProxyVpcResponse: SwitchProxyVpcResponse,
    DescribeParamTemplateDetailRequest: DescribeParamTemplateDetailRequest,
    ModifyAccountHostRequest: ModifyAccountHostRequest,
    CreateParamTemplateRequest: CreateParamTemplateRequest,
    DescribeAuditRuleTemplatesRequest: DescribeAuditRuleTemplatesRequest,
    InstanceSpec: InstanceSpec,
    DescribeFlowRequest: DescribeFlowRequest,
    RestartInstanceRequest: RestartInstanceRequest,
    IsolateInstanceRequest: IsolateInstanceRequest,
    ModifyAccountPrivilegesRequest: ModifyAccountPrivilegesRequest,
    Account: Account,
    CreateBackupRequest: CreateBackupRequest,
    CreateClusterDatabaseResponse: CreateClusterDatabaseResponse,
    ExportInstanceSlowQueriesResponse: ExportInstanceSlowQueriesResponse,
    SearchClusterTablesResponse: SearchClusterTablesResponse,
    PolicyRule: PolicyRule,
    DescribeResourcePackageSaleSpecRequest: DescribeResourcePackageSaleSpecRequest,
    UnbindClusterResourcePackagesResponse: UnbindClusterResourcePackagesResponse,
    DescribeMaintainPeriodResponse: DescribeMaintainPeriodResponse,
    SwitchProxyVpcRequest: SwitchProxyVpcRequest,
    DescribeBackupListResponse: DescribeBackupListResponse,
    SaleRegion: SaleRegion,
    DescribeResourcePackageDetailRequest: DescribeResourcePackageDetailRequest,
    DescribeBinlogSaveDaysRequest: DescribeBinlogSaveDaysRequest,
    ModifyBackupConfigRequest: ModifyBackupConfigRequest,
    ActivateInstanceResponse: ActivateInstanceResponse,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    DescribeRollbackTimeValidityRequest: DescribeRollbackTimeValidityRequest,
    IsolateClusterRequest: IsolateClusterRequest,
    DescribeClusterInstanceGrpsResponse: DescribeClusterInstanceGrpsResponse,
    AddInstancesRequest: AddInstancesRequest,
    ModifyClusterDatabaseRequest: ModifyClusterDatabaseRequest,
    InquirePriceCreateResponse: InquirePriceCreateResponse,
    ModifyClusterSlaveZoneRequest: ModifyClusterSlaveZoneRequest,
    DescribeInstanceErrorLogsResponse: DescribeInstanceErrorLogsResponse,
    CynosdbInstanceDetail: CynosdbInstanceDetail,
    RuleFilters: RuleFilters,
    RefundResourcePackageResponse: RefundResourcePackageResponse,
    DeleteClusterDatabaseResponse: DeleteClusterDatabaseResponse,
    CynosdbClusterDetail: CynosdbClusterDetail,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeInstanceErrorLogsRequest: DescribeInstanceErrorLogsRequest,
    DeleteClusterDatabaseRequest: DeleteClusterDatabaseRequest,
    ModifiableInfo: ModifiableInfo,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    ModifyBackupNameRequest: ModifyBackupNameRequest,
    DeleteAccountsRequest: DeleteAccountsRequest,
    AuditRuleFilters: AuditRuleFilters,
    DescribeBinlogSaveDaysResponse: DescribeBinlogSaveDaysResponse,
    DescribeAccountPrivilegesRequest: DescribeAccountPrivilegesRequest,
    ParamTemplateListInfo: ParamTemplateListInfo,
    DescribeAccountsResponse: DescribeAccountsResponse,
    RollbackTimeRange: RollbackTimeRange,
    CreateClusterDatabaseRequest: CreateClusterDatabaseRequest,
    DeleteBackupRequest: DeleteBackupRequest,
    TradePrice: TradePrice,
    DescribeClusterParamsRequest: DescribeClusterParamsRequest,
    CloseAuditServiceResponse: CloseAuditServiceResponse,
    DescribeInstanceSpecsResponse: DescribeInstanceSpecsResponse,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    ErrorLogItemExport: ErrorLogItemExport,
    DescribeParamTemplateDetailResponse: DescribeParamTemplateDetailResponse,
    ModifyBinlogSaveDaysResponse: ModifyBinlogSaveDaysResponse,
    ModifyAuditServiceResponse: ModifyAuditServiceResponse,
    DeleteAuditRuleTemplatesResponse: DeleteAuditRuleTemplatesResponse,
    Module: Module,
    ModifyVipVportResponse: ModifyVipVportResponse,
    DescribeClusterDetailResponse: DescribeClusterDetailResponse,
    DescribeInstanceSlowQueriesRequest: DescribeInstanceSlowQueriesRequest,
    ModifyResourcePackageClustersResponse: ModifyResourcePackageClustersResponse,
    DescribeBinlogsRequest: DescribeBinlogsRequest,
    InputAccount: InputAccount,
    ModifyBackupConfigResponse: ModifyBackupConfigResponse,
    ZoneStockInfo: ZoneStockInfo,
    InquirePriceRenewResponse: InquirePriceRenewResponse,
    ModifyAuditRuleTemplatesResponse: ModifyAuditRuleTemplatesResponse,

}
