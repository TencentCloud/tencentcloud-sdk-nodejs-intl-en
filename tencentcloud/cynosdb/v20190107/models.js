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
 * DescribeClusters request structure.
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Engine type. Valid values: MYSQL, POSTGRESQL
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

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
        this.AccountNames = 'AccountNames' in params ? params.AccountNames : null;
        this.DbType = 'DbType' in params ? params.DbType : null;

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
         * Database type. Valid values: 
<li> MYSQL </li>
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
 * DescribeRollbackTimeRange response structure.
 * @class
 */
class DescribeRollbackTimeRangeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time point of valid rollback time range
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * End time point of valid rollback time range
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Maintenance days of the week
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
         * Full backup start time. Value range: [0-24*3600]. For example, 0:00 AM, 1:00 AM, and 2:00 AM are represented by 0, 3600, and 7200, respectively
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
         * @type {Array.<string> || null}
         */
        this.BackupFreq = null;

        /**
         * Backup mode. logic: logic backup; snapshot: snapshot backup
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
         * Database type. Valid values: 
<li> MYSQL </li>
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
         * Memory
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Number of added read-only instances
         * @type {number || null}
         */
        this.ReadOnlyCount = null;

        /**
         * Instance group ID, which is used when you add an instance in an existing RO group. If this parameter is left empty, an RO group will be created.
         * @type {string || null}
         */
        this.InstanceGrpId = null;

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
         * Port used when adding RO group
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Instance name
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
         * Order source
         * @type {string || null}
         */
        this.OrderSource = null;

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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Database version
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * Used capacity
         * @type {number || null}
         */
        this.UsedStorage = null;

        /**
         * vport for read/write separation
         * @type {Array.<Addr> || null}
         */
        this.RoAddr = null;

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
         * Project ID
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Array of tags bound to instance
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * Serverless cluster status when the database type is `SERVERLESS`. Valid values:
resume
resuming
pause
pausing
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.UsedStorage = 'UsedStorage' in params ? params.UsedStorage : null;

        if (params.RoAddr) {
            this.RoAddr = new Array();
            for (let z in params.RoAddr) {
                let obj = new Addr();
                obj.deserialize(params.RoAddr[z]);
                this.RoAddr.push(obj);
            }
        }

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
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new Tag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.ServerlessStatus = 'ServerlessStatus' in params ? params.ServerlessStatus : null;

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
         * Snapshot file ID used for rollback
         * @type {number || null}
         */
        this.SnapshotId = null;

        /**
         * Snapshot file name
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Snapshot file size
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Snapshot backup start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Snapshot backup end time
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Backup type. snapshot: snapshot backup; timepoint: time point backup
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
         * Engine type. Valid values: MYSQL, POSTGRESQL
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * Instance status
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
 * DescribeResourcesByDealName request structure.
 * @class
 */
class DescribeResourcesByDealNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing order ID
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
        this.DealName = 'DealName' in params ? params.DealName : null;

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
         * Backup file list offset
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Backup file list start
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * @type {Array.<Account> || null}
         */
        this.AccountSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Database memory
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Upgrade type. Valid values: upgradeImmediate, upgradeInMaintain
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * Storage upper limit. 0 indicates to use the standard configuration
         * @type {number || null}
         */
        this.StorageLimit = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbType = 'DbType' in params ? params.DbType : null;

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
 * CreateClusters response structure.
 * @class
 */
class CreateClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Freezing transaction ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * Order ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * List of resource IDs (this parameter may not be returned in case of asynchronous delivery. We strongly recommend you call the `DescribeResourcesByDealName` API with the `dealNames` field to get the IDs of asynchronously delivered resources)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * List of cluster IDs (this parameter may not be returned in case of asynchronous delivery. We strongly recommend you call the `DescribeResourcesByDealName` API with the `dealNames` field to get the IDs of asynchronously delivered clusters)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

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
         * Auto-Renewal flag
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
<li> Valid values for `MYSQL`: 5.7 </li>
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Number of CPU cores of normal instance
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory of normal instance
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Storage
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Account password, which can contain 8–64 characters and must contain at least two of the following types of characters: letters, digits, and special symbols (_+-&=!@#$%^*()~)
         * @type {string || null}
         */
        this.AdminPassword = null;

        /**
         * Port. Default value: 5432
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Billing mode. 0: pay-as-you-go; 1: monthly subscription. Default value: 0
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Number of purchased items. Currently, only 1 can be passed in. If this parameter is left empty, 1 will be used by default.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Rollback type:
noneRollback: no rollback
snapRollback: rollback by snapshot
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
         * Pass in the source cluster ID during rollback to find the source `poolId`
         * @type {string || null}
         */
        this.OriginalClusterId = null;

        /**
         * Specified time for time point rollback or snapshot time for snapshot rollback
         * @type {string || null}
         */
        this.ExpectTime = null;

        /**
         * Specified allowed time range for time point rollback
         * @type {number || null}
         */
        this.ExpectTimeThresh = null;

        /**
         * Storage upper limit of normal instance in GB
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Purchase duration of monthly subscription plan
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Purchase duration unit of monthly subscription plan
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Whether auto-renewal is enabled for monthly subscription plan
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Whether to automatically select a voucher. 1: yes; 0: no. Default value: 0
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
Valid values when `DbType` is `MYSQL` (default value: NORMAL):
<li>NORMAL</li>
<li>SERVERLESS</li>
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * This parameter is required if `DbMode` is `SERVERLESS`
Minimum number of CPU cores. For the value range, please see the returned result of `DescribeServerlessInstanceSpecs`
         * @type {number || null}
         */
        this.MinCpu = null;

        /**
         * This parameter is required if `DbMode` is `SERVERLESS`:
Maximum number of CPU cores. For the value range, please see the returned result of `DescribeServerlessInstanceSpecs`
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
Default value: 600
         * @type {number || null}
         */
        this.AutoPauseDelay = null;

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
         * Cluster status
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
         * User `uin`
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Engine type
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * User `appid`
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Cluster status description
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Cluster creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Billing mode. 0: pay-as-you-go; 1: monthly subscription
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * End time
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * Cluster read-write VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Cluster read-write vport
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectID = null;

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
         * TDSQL-C kernel version
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * Storage capacity
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * Renewal flag
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * Task in progress
         * @type {string || null}
         */
        this.ProcessingTask = null;

        /**
         * Array of tasks in cluster
         * @type {Array.<ObjectTask> || null}
         */
        this.Tasks = null;

        /**
         * Array of tags bound to cluster
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * Database type (`NORMAL` or `SERVERLESS`)
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * Serverless cluster status when the database type is `SERVERLESS`. Valid values:
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
 * Instance group information
 * @class
 */
class CynosdbInstanceGrp extends  AbstractModel {
    constructor(){
        super();

        /**
         * appId
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
         * List of IDs of the security groups to be modified, which is an array of one or more security group IDs.
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

module.exports = {
    AddInstancesResponse: AddInstancesResponse,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    Addr: Addr,
    DescribeClustersRequest: DescribeClustersRequest,
    InstanceSpec: InstanceSpec,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    SetRenewFlagResponse: SetRenewFlagResponse,
    Account: Account,
    SecurityGroup: SecurityGroup,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DescribeBackupConfigRequest: DescribeBackupConfigRequest,
    DescribeClusterInstanceGrpsRequest: DescribeClusterInstanceGrpsRequest,
    DescribeResourcesByDealNameResponse: DescribeResourcesByDealNameResponse,
    DescribeAccountsRequest: DescribeAccountsRequest,
    IsolateInstanceRequest: IsolateInstanceRequest,
    DescribeMaintainPeriodResponse: DescribeMaintainPeriodResponse,
    DescribeBackupListResponse: DescribeBackupListResponse,
    DescribeRollbackTimeRangeResponse: DescribeRollbackTimeRangeResponse,
    ModifyMaintainPeriodConfigRequest: ModifyMaintainPeriodConfigRequest,
    ModifyBackupConfigRequest: ModifyBackupConfigRequest,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    DescribeRollbackTimeValidityRequest: DescribeRollbackTimeValidityRequest,
    IsolateClusterRequest: IsolateClusterRequest,
    DescribeClusterInstanceGrpsResponse: DescribeClusterInstanceGrpsResponse,
    AddInstancesRequest: AddInstancesRequest,
    DescribeClusterDetailRequest: DescribeClusterDetailRequest,
    Tag: Tag,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    CynosdbInstanceDetail: CynosdbInstanceDetail,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    DescribeMaintainPeriodRequest: DescribeMaintainPeriodRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    CynosdbClusterDetail: CynosdbClusterDetail,
    ClusterInstanceDetail: ClusterInstanceDetail,
    BackupFileInfo: BackupFileInfo,
    DescribeRollbackTimeValidityResponse: DescribeRollbackTimeValidityResponse,
    DescribeInstanceDetailRequest: DescribeInstanceDetailRequest,
    ModifyMaintainPeriodConfigResponse: ModifyMaintainPeriodConfigResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    DescribeResourcesByDealNameRequest: DescribeResourcesByDealNameRequest,
    IsolateInstanceResponse: IsolateInstanceResponse,
    DescribeBackupListRequest: DescribeBackupListRequest,
    DescribeRollbackTimeRangeRequest: DescribeRollbackTimeRangeRequest,
    QueryFilter: QueryFilter,
    CynosdbInstance: CynosdbInstance,
    DescribeAccountsResponse: DescribeAccountsResponse,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    DescribeInstanceDetailResponse: DescribeInstanceDetailResponse,
    OfflineInstanceRequest: OfflineInstanceRequest,
    BillingResourceInfo: BillingResourceInfo,
    OfflineClusterResponse: OfflineClusterResponse,
    DescribeInstanceSpecsResponse: DescribeInstanceSpecsResponse,
    ObjectTask: ObjectTask,
    DescribeInstanceSpecsRequest: DescribeInstanceSpecsRequest,
    PolicyRule: PolicyRule,
    IsolateClusterResponse: IsolateClusterResponse,
    CreateClustersResponse: CreateClustersResponse,
    SetRenewFlagRequest: SetRenewFlagRequest,
    CreateClustersRequest: CreateClustersRequest,
    CynosdbCluster: CynosdbCluster,
    OfflineClusterRequest: OfflineClusterRequest,
    DescribeClusterDetailResponse: DescribeClusterDetailResponse,
    OfflineInstanceResponse: OfflineInstanceResponse,
    CynosdbInstanceGrp: CynosdbInstanceGrp,
    DescribeClustersResponse: DescribeClustersResponse,
    ModifyBackupConfigResponse: ModifyBackupConfigResponse,
    DescribeBackupConfigResponse: DescribeBackupConfigResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,

}
