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
 * CreateDBInstances request structure.
 * @class
 */
class CreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance AZ, such as ap-guangzhou-1 (Guangzhou Zone 1). Purchasable AZs for an instance can be obtained through the `DescribeZones` API
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Billing mode. Valid value: POSTPAID (pay-as-you-go).
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Number of instances purchased this time. Default value: 1. Maximum value: 10
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * VPC subnet ID in the format of subnet-bdoe83fa. `SubnetId` and `VpcId` should be set or ignored simultaneously
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPC ID in the format of vpc-dsp338hz. `SubnetId` and `VpcId` should be set or ignored simultaneously
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Length of purchase of instance. The default value is 1, indicating one month. The value cannot exceed 48
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether to automatically use voucher. 0: no, 1: yes. Default value: no
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Array of voucher IDs (currently, only one voucher can be used per order)
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * SQL Server version. Valid values: 2008R2 (SQL Server 2008 Enterprise), 2012SP3 (SQL Server 2012 Enterprise), 2016SP1 (SQL Server 2016 Enterprise), 201602 (SQL Server 2016 Standard), 2017 (SQL Server 2017 Enterprise). The version purchasable varies by region and can be queried by calling the `DescribeProductConfig` API. If this parameter is left empty, 2008R2 will be used by default.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Auto-renewal flag. 0: normal renewal, 1: auto-renewal. Default value: 1.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Security group list, which contains security group IDs in the format of sg-xxx.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupList = null;

        /**
         * Configuration of the maintenance window, which specifies the day of the week when maintenance can be performed. Valid values: 1 (Monday), 2 (Tuesday), 3 (Wednesday), 4 (Thursday), 5 (Friday), 6 (Saturday), 7 (Sunday).
         * @type {Array.<number> || null}
         */
        this.Weekly = null;

        /**
         * Configuration of the maintenance window, which specifies the start time of daily maintenance.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Configuration of the maintenance window, which specifies the maintenance duration in hours.
         * @type {number || null}
         */
        this.Span = null;

        /**
         * The type of purchased high-availability instance. Valid values: DUAL (dual-server high availability), CLUSTER (cluster). Default value: DUAL.
         * @type {string || null}
         */
        this.HAType = null;

        /**
         * Whether to deploy across availability zones. Default value: false.
         * @type {boolean || null}
         */
        this.MultiZones = null;

        /**
         * Tags associated with the instances to be created
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.SecurityGroupList = 'SecurityGroupList' in params ? params.SecurityGroupList : null;
        this.Weekly = 'Weekly' in params ? params.Weekly : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Span = 'Span' in params ? params.Span : null;
        this.HAType = 'HAType' in params ? params.HAType : null;
        this.MultiZones = 'MultiZones' in params ? params.MultiZones : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * CloneDB response structure.
 * @class
 */
class CloneDBResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used in the `DescribeFlowStatus` API to query the execution result of an async task
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
 * Order information
 * @class
 */
class DealInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * Number of items
         * @type {number || null}
         */
        this.Count = null;

        /**
         * ID of associated flow, which can be used to query the flow execution status
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * This field is required only for an order that creates an instance, indicating the ID of the instance created by the order
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * Account
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Instance billing type
         * @type {string || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * DescribeFlowStatus request structure.
 * @class
 */
class DescribeFlowStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
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
 * CreateMigration response structure.
 * @class
 */
class CreateMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {number || null}
         */
        this.MigrateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBackupMigration request structure.
 * @class
 */
class DeleteBackupMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target instance ID, which is returned through the API DescribeBackupMigration.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup import task ID, which is returned through the API DescribeBackupMigration.
         * @type {string || null}
         */
        this.BackupMigrationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;

    }
}

/**
 * RestartDBInstance request structure.
 * @class
 */
class RestartDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database instance ID in the format of mssql-njj2mtpl
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
 * StartBackupMigration response structure.
 * @class
 */
class StartBackupMigrationResponse extends  AbstractModel {
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
 * Region information
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID in the format of ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Numeric ID of region
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Current purchasability of this region. UNAVAILABLE: not purchasable, AVAILABLE: purchasable
         * @type {string || null}
         */
        this.RegionState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;

    }
}

/**
 * ModifyBackupStrategy response structure.
 * @class
 */
class ModifyBackupStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned error code.
         * @type {number || null}
         */
        this.Errno = null;

        /**
         * Returned error message.
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
        this.Errno = 'Errno' in params ? params.Errno : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIncrementalMigration request structure.
 * @class
 */
class ModifyIncrementalMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of imported target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup import task ID, which is returned through the API CreateBackupMigration
         * @type {string || null}
         */
        this.BackupMigrationId = null;

        /**
         * Incremental import task ID
         * @type {string || null}
         */
        this.IncrementalMigrationId = null;

        /**
         * Whether restoration is required. No: not required. Yes: required.
         * @type {string || null}
         */
        this.IsRecovery = null;

        /**
         * If the UploadType is COS_URL, fill in URL here. If the UploadType is COS_UPLOAD, fill in the name of the backup file here. Only 1 backup file is supported, but a backup file can involve multiple databases.
         * @type {Array.<string> || null}
         */
        this.BackupFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;
        this.IncrementalMigrationId = 'IncrementalMigrationId' in params ? params.IncrementalMigrationId : null;
        this.IsRecovery = 'IsRecovery' in params ? params.IsRecovery : null;
        this.BackupFiles = 'BackupFiles' in params ? params.BackupFiles : null;

    }
}

/**
 * Migration progress details
 * @class
 */
class MigrateDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of current step
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Progress of current step in %
         * @type {number || null}
         */
        this.Progress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.Progress = 'Progress' in params ? params.Progress : null;

    }
}

/**
 * CreateIncrementalMigration request structure.
 * @class
 */
class CreateIncrementalMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of imported target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup import task ID, which is returned through the API CreateBackupMigration.
         * @type {string || null}
         */
        this.BackupMigrationId = null;

        /**
         * Incremental backup file. If the UploadType of a full backup file is COS_URL, fill in URL here. If the UploadType is COS_UPLOAD, fill in the name of the backup file here. Only 1 backup file is supported, but a backup file can involve multiple databases.
         * @type {Array.<string> || null}
         */
        this.BackupFiles = null;

        /**
         * Whether restoration is required. No: not required. Yes: required. Not required by default.
         * @type {string || null}
         */
        this.IsRecovery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;
        this.BackupFiles = 'BackupFiles' in params ? params.BackupFiles : null;
        this.IsRecovery = 'IsRecovery' in params ? params.IsRecovery : null;

    }
}

/**
 * RunMigration response structure.
 * @class
 */
class RunMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * After the migration task starts, the flow ID will be returned
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
 * DescribeProductConfig request structure.
 * @class
 */
class DescribeProductConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID in the format of ap-guangzhou-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The type of instances to be purchased. Valid values: HA (High-Availability Edition, including dual-server high availability and AlwaysOn cluster), RO (read-only replica), SI (Basic Edition)
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * CreateAccount request structure.
 * @class
 */
class CreateAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database instance ID in the format of mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database instance account information
         * @type {Array.<AccountCreateInfo> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountCreateInfo();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * RollbackInstance response structure.
 * @class
 */
class RollbackInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The async job ID
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
 * DeleteIncrementalMigration request structure.
 * @class
 */
class DeleteIncrementalMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup import task ID
         * @type {string || null}
         */
        this.BackupMigrationId = null;

        /**
         * ID of an incremental backup import task
         * @type {string || null}
         */
        this.IncrementalMigrationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;
        this.IncrementalMigrationId = 'IncrementalMigrationId' in params ? params.IncrementalMigrationId : null;

    }
}

/**
 * Database remarks
 * @class
 */
class DBRemark extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * List of databases to be migrated
 * @class
 */
class MigrateDB extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of migrated database
         * @type {string || null}
         */
        this.DBName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBName = 'DBName' in params ? params.DBName : null;

    }
}

/**
 * DescribeRegions response structure.
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of regions returned
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Region information array
         * @type {Array.<RegionInfo> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBCharsets response structure.
 * @class
 */
class DescribeDBCharsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database character set list
         * @type {Array.<string> || null}
         */
        this.DatabaseCharsets = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseCharsets = 'DatabaseCharsets' in params ? params.DatabaseCharsets : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceProject response structure.
 * @class
 */
class ModifyDBInstanceProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of successfully modified instances
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
 * DescribeRollbackTime response structure.
 * @class
 */
class DescribeRollbackTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of time range available for database rollback
         * @type {Array.<DbRollbackTimeInfo> || null}
         */
        this.Details = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new DbRollbackTimeInfo();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreInstance request structure.
 * @class
 */
class RestoreInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup file ID, which can be obtained through the `Id` field in the returned value of the `DescribeBackups` API
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * ID of the target instance to which the backup is restored. The target instance should be under the same `APPID`. If this parameter is left empty, ID of the source instance will be used.
         * @type {string || null}
         */
        this.TargetInstanceId = null;

        /**
         * Restore the databases listed in `ReNameRestoreDatabase` and rename them after restoration. If this parameter is left empty, all databases will be restored and renamed in the default format.
         * @type {Array.<RenameRestoreDatabase> || null}
         */
        this.RenameRestore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.TargetInstanceId = 'TargetInstanceId' in params ? params.TargetInstanceId : null;

        if (params.RenameRestore) {
            this.RenameRestore = new Array();
            for (let z in params.RenameRestore) {
                let obj = new RenameRestoreDatabase();
                obj.deserialize(params.RenameRestore[z]);
                this.RenameRestore.push(obj);
            }
        }

    }
}

/**
 * DescribeIncrementalMigration request structure.
 * @class
 */
class DescribeIncrementalMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup import task ID, which is returned through the API CreateBackupMigration
         * @type {string || null}
         */
        this.BackupMigrationId = null;

        /**
         * ID of imported target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup file name
         * @type {string || null}
         */
        this.BackupFileName = null;

        /**
         * Status set of import tasks
         * @type {Array.<number> || null}
         */
        this.StatusSet = null;

        /**
         * Paging. Page size
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Paging. Number of pages
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Field for order: name,createTime,startTime,endTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Type of order: desc,asc
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * ID of an incremental backup import task
         * @type {string || null}
         */
        this.IncrementalMigrationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupFileName = 'BackupFileName' in params ? params.BackupFileName : null;
        this.StatusSet = 'StatusSet' in params ? params.StatusSet : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.IncrementalMigrationId = 'IncrementalMigrationId' in params ? params.IncrementalMigrationId : null;

    }
}

/**
 * RunMigration request structure.
 * @class
 */
class RunMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {number || null}
         */
        this.MigrateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;

    }
}

/**
 * DescribeDBCharsets request structure.
 * @class
 */
class DescribeDBCharsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of mssql-j8kv137v
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
 * RestoreInstance response structure.
 * @class
 */
class RestoreInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async flow task ID, which can be used to call the `DescribeFlowStatus` API to get the task execution status
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
 * AZ information
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID in the format of ap-guangzhou-1 (i.e., Guangzhou Zone 1)
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Numeric ID of AZ
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * ID of specification purchasable in this AZ, which, together with the returned value of the `DescribeProductConfig` API, can be used to find out the specifications currently purchasable in the AZ
         * @type {number || null}
         */
        this.SpecId = null;

        /**
         * Information of database versions purchasable under the current AZ and specification. Valid values: 2008R2 (SQL Server 2008 Enterprise), 2012SP3 (SQL Server 2012 Enterprise), 2016SP1 (SQL Server 2016 Enterprise), 201602 (SQL Server 2016 Standard), 2017 (SQL Server 2017 Enterprise)
         * @type {string || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.SpecId = 'SpecId' in params ? params.SpecId : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * InquiryPriceCreateDBInstances request structure.
 * @class
 */
class InquiryPriceCreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID, which can be obtained through the `Zone` field in the returned value of the `DescribeZones` API
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Billing type. Valid value: POSTPAID.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Length of purchase in months. Value range: 1-48. Default value: 1
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Number of instances purchased at a time. Value range: 1-100. Default value: 1
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * SQL Server version. Valid values: 2008R2 (SQL Server 2008 Enterprise), 2012SP3 (SQL Server 2012 Enterprise), 2016SP1 (SQL Server 2016 Enterprise), 201602 (SQL Server 2016 Standard), 2017 (SQL Server 2017 Enterprise). Default value: 2008R2.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * The number of CPU cores of the instance you want to purchase.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * The type of purchased instance. Valid values: HA (high-availability edition, including dual-server high availability and AlwaysOn cluster), RO (read-only replica), SI (basic edition). Default value: HA.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * The host type of purchased instance. Valid values: PM (physical machine), CLOUD_PREMIUM (physical machine with premium cloud disk), CLOUD_SSD (physical machine with SSD). Default value: PM.
         * @type {string || null}
         */
        this.MachineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

    }
}

/**
 * StartIncrementalMigration request structure.
 * @class
 */
class StartIncrementalMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of imported target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup import task ID, which is returned through the API CreateBackupMigration
         * @type {string || null}
         */
        this.BackupMigrationId = null;

        /**
         * ID of an incremental backup import task
         * @type {string || null}
         */
        this.IncrementalMigrationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;
        this.IncrementalMigrationId = 'IncrementalMigrationId' in params ? params.IncrementalMigrationId : null;

    }
}

/**
 * Cold backup migration import
 * @class
 */
class Migration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup import task ID or incremental import task ID
         * @type {string || null}
         */
        this.MigrationId = null;

        /**
         * Backup import task name. For an incremental import task, this field will be left empty.
Note: this field may return ‘null’, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MigrationName = null;

        /**
         * Application ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * ID of migrated target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Migration task restoration type
         * @type {string || null}
         */
        this.RecoveryType = null;

        /**
         * Backup user upload type. COS_URL: the backup is stored in user’s Cloud Object Storage, with URL provided. COS_UPLOAD: the backup is stored in the application’s Cloud Object Storage and needs to be uploaded by the user.
         * @type {string || null}
         */
        this.UploadType = null;

        /**
         * Backup file list, which is determined by UploadType. If the upload type is COS_URL, URL will be saved. If the upload type is COS_UPLOAD, the backup name will be saved.
         * @type {Array.<string> || null}
         */
        this.BackupFiles = null;

        /**
         * Migration task status,
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Migration task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Migration task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Migration task end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * More information
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Migration detail
         * @type {MigrationDetail || null}
         */
        this.Detail = null;

        /**
         * Operation allowed in the current status
         * @type {MigrationAction || null}
         */
        this.Action = null;

        /**
         * Whether this is the final restoration. For a full import task, this field will be left empty.
Note: this field may return ‘null’, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsRecovery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrationId = 'MigrationId' in params ? params.MigrationId : null;
        this.MigrationName = 'MigrationName' in params ? params.MigrationName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RecoveryType = 'RecoveryType' in params ? params.RecoveryType : null;
        this.UploadType = 'UploadType' in params ? params.UploadType : null;
        this.BackupFiles = 'BackupFiles' in params ? params.BackupFiles : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Detail) {
            let obj = new MigrationDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }

        if (params.Action) {
            let obj = new MigrationAction();
            obj.deserialize(params.Action)
            this.Action = obj;
        }
        this.IsRecovery = 'IsRecovery' in params ? params.IsRecovery : null;

    }
}

/**
 * ModifyDBInstanceNetwork request structure.
 * @class
 */
class ModifyDBInstanceNetworkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID of the new VPC
         * @type {string || null}
         */
        this.NewVpcId = null;

        /**
         * ID of the new subnet
         * @type {string || null}
         */
        this.NewSubnetId = null;

        /**
         * Retention period (in hours) of the original VIP. Value range: `0-168`. Default value: `0`, indicating the original VIP is released immediately.
         * @type {number || null}
         */
        this.OldIpRetainTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NewVpcId = 'NewVpcId' in params ? params.NewVpcId : null;
        this.NewSubnetId = 'NewSubnetId' in params ? params.NewSubnetId : null;
        this.OldIpRetainTime = 'OldIpRetainTime' in params ? params.OldIpRetainTime : null;

    }
}

/**
 * Details of a cold backup import task
 * @class
 */
class MigrationDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of steps
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * Current step
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * Overall progress. For example, “30” means 30%.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Step information. ‘null’ means the migration has not started
Note: this field may return ‘null’, indicating that no valid values can be obtained.
         * @type {Array.<MigrationStep> || null}
         */
        this.StepInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepAll = 'StepAll' in params ? params.StepAll : null;
        this.StepNow = 'StepNow' in params ? params.StepNow : null;
        this.Progress = 'Progress' in params ? params.Progress : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new MigrationStep();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }

    }
}

/**
 * RecycleDBInstance request structure.
 * @class
 */
class RecycleDBInstanceRequest extends  AbstractModel {
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
 * DescribeAccounts request structure.
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of results per page. Value range: 1-100. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number. Default value: 0
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Migration task type
 * @class
 */
class MigrateTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {number || null}
         */
        this.MigrateId = null;

        /**
         * Migration task name
         * @type {string || null}
         */
        this.MigrateName = null;

        /**
         * User ID of migration task
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Migration task region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Migration source type. 1: TencentDB for SQL Server, 2: CVM-based self-created SQL Server database; 3: SQL Server backup restoration, 4: SQL Server backup restoration (in COS mode)
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * Migration task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Migration task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Migration task end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Migration task status (1: initializing, 4: migrating, 5: migration failed, 6: migration succeeded, 7: suspended, 8: deleted, 9: suspending, 10: completing, 11: suspension failed, 12: completion failed)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Information
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Whether migration task has been checked (0: not checked, 1: check succeeded, 2: check failed, 3: checking)
         * @type {number || null}
         */
        this.CheckFlag = null;

        /**
         * Migration task progress in %
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Migration task progress details
         * @type {MigrateDetail || null}
         */
        this.MigrateDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;
        this.MigrateName = 'MigrateName' in params ? params.MigrateName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.Progress = 'Progress' in params ? params.Progress : null;

        if (params.MigrateDetail) {
            let obj = new MigrateDetail();
            obj.deserialize(params.MigrateDetail)
            this.MigrateDetail = obj;
        }

    }
}

/**
 * Information of purchasable specification for an instance
 * @class
 */
class SpecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance specification ID. The `SpecId` returned by `DescribeZones` together with the purchasable specification information returned by `DescribeProductConfig` can be used to find out what specifications can be purchased in a specified AZ
         * @type {number || null}
         */
        this.SpecId = null;

        /**
         * Model ID
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * Model name
         * @type {string || null}
         */
        this.MachineTypeName = null;

        /**
         * Database version information. Valid values: 2008R2 (SQL Server 2008 Enterprise), 2012SP3 (SQL Server 2012 Enterprise), 2016SP1 (SQL Server 2016 Enterprise), 201602 (SQL Server 2016 Standard), 2017 (SQL Server 2017 Enterprise)
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Version name corresponding to the `Version` field
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Minimum disk size under this specification in GB
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * Maximum disk size under this specification in GB
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * QPS of this specification
         * @type {number || null}
         */
        this.QPS = null;

        /**
         * Description of this specification
         * @type {string || null}
         */
        this.SuitInfo = null;

        /**
         * Pid of this specification
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Pay-as-you-go Pid list corresponding to this specification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.PostPid = null;

        /**
         * Billing mode under this specification. POST: pay-as-you-go
         * @type {string || null}
         */
        this.PayModeStatus = null;

        /**
         * Instance type. Valid values: HA (High-Availability Edition, including dual-server high availability and AlwaysOn cluster), RO (read-only replica), SI (Basic Edition)
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Whether multi-AZ deployment is supported. Valid values: MultiZones (only multi-AZ deployment is supported), SameZones (only single-AZ deployment is supported), ALL (both deployments are supported)
         * @type {string || null}
         */
        this.MultiZonesStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecId = 'SpecId' in params ? params.SpecId : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineTypeName = 'MachineTypeName' in params ? params.MachineTypeName : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.QPS = 'QPS' in params ? params.QPS : null;
        this.SuitInfo = 'SuitInfo' in params ? params.SuitInfo : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.PostPid = 'PostPid' in params ? params.PostPid : null;
        this.PayModeStatus = 'PayModeStatus' in params ? params.PayModeStatus : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.MultiZonesStatus = 'MultiZonesStatus' in params ? params.MultiZonesStatus : null;

    }
}

/**
 * DescribeOrders response structure.
 * @class
 */
class DescribeOrdersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order information array
         * @type {Array.<DealInfo> || null}
         */
        this.Deals = null;

        /**
         * Number of orders returned
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

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new DealInfo();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateDBInstances response structure.
 * @class
 */
class InquiryPriceCreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price before discount. This value divided by 100 indicates the price; for example, 10010 means 100.10 USD
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * The actual price to be paid. This value divided by 100 indicates the price; for example, 10010 means 100.10 USD
         * @type {number || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountPrivilege response structure.
 * @class
 */
class ModifyAccountPrivilegeResponse extends  AbstractModel {
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
 * Database creation information
 * @class
 */
class DBCreateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.DBName = null;

        /**
         * Character set. Valid values: Chinese_PRC_CI_AS, Chinese_PRC_CS_AS, Chinese_PRC_BIN, Chinese_Taiwan_Stroke_CI_AS, SQL_Latin1_General_CP1_CI_AS, and SQL_Latin1_General_CP1_CS_AS. If this parameter is left empty, `Chinese_PRC_CI_AS` will be used by default
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * Database account permission information
         * @type {Array.<AccountPrivilege> || null}
         */
        this.Accounts = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.Charset = 'Charset' in params ? params.Charset : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountPrivilege();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Database account permission information, which is set when the database is created
 * @class
 */
class AccountPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Database permissions. ReadWrite: read/write, ReadOnly: read-only
         * @type {string || null}
         */
        this.Privilege = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

    }
}

/**
 * ModifyMigration response structure.
 * @class
 */
class ModifyMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {number || null}
         */
        this.MigrateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Account creation information
 * @class
 */
class AccountCreateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Instance password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * List of database permissions
         * @type {Array.<DBPrivilege> || null}
         */
        this.DBPrivileges = null;

        /**
         * Account remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether it is an admin account. Default value: no
         * @type {boolean || null}
         */
        this.IsAdmin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.DBPrivileges) {
            this.DBPrivileges = new Array();
            for (let z in params.DBPrivileges) {
                let obj = new DBPrivilege();
                obj.deserialize(params.DBPrivileges[z]);
                this.DBPrivileges.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.IsAdmin = 'IsAdmin' in params ? params.IsAdmin : null;

    }
}

/**
 * DescribeDBs response structure.
 * @class
 */
class DescribeDBsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of databases
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance databases
         * @type {Array.<InstanceDBDetail> || null}
         */
        this.DBInstances = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.DBInstances) {
            this.DBInstances = new Array();
            for (let z in params.DBInstances) {
                let obj = new InstanceDBDetail();
                obj.deserialize(params.DBInstances[z]);
                this.DBInstances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstances request structure.
 * @class
 */
class DescribeDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance status. Valid values:
<li>1: applying</li>
<li>2: running</li>
<li>3: running restrictedly (primary/secondary switching)</li>
<li>4: isolated</li>
<li>5: repossessing</li>
<li>6: repossessed</li>
<li>7: executing task (e.g., backing up or rolling back instance)</li>
<li>8: deactivated</li>
<li>9: scaling out instance</li>
<li>10: migrating instance</li>
<li>11: read-only</li>
<li>12: restarting</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Page number. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results per page. Value range: 1-100. Default value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * One or more instance IDs in the format of mssql-si2823jyl
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * Retrieves billing type. 0: pay-as-you-go
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Unique string-type ID of instance VPC in the format of `vpc-xxx`. If an empty string ("") is passed in, filtering will be made by basic network.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Unique string-type ID of instance subnet in the format of `subnet-xxx`. If an empty string ("") is passed in, filtering will be made by basic network.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The list of instance private IPs, such as 172.1.0.12
         * @type {Array.<string> || null}
         */
        this.VipSet = null;

        /**
         * The list of instance names used for fuzzy match
         * @type {Array.<string> || null}
         */
        this.InstanceNameSet = null;

        /**
         * The list of instance version numbers, such as 2008R2, 2012SP3
         * @type {Array.<string> || null}
         */
        this.VersionSet = null;

        /**
         * Instance availability zone, such as ap-guangzhou-2
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The list of instance tags
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Keyword used for fuzzy match, including instance ID, instance name, and instance private IP
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VipSet = 'VipSet' in params ? params.VipSet : null;
        this.InstanceNameSet = 'InstanceNameSet' in params ? params.InstanceNameSet : null;
        this.VersionSet = 'VersionSet' in params ? params.VersionSet : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * Slow query log file information
 * @class
 */
class SlowlogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of slow query log file
         * @type {number || null}
         */
        this.Id = null;

        /**
         * File generation start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * File generation end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * File size in KB
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Number of logs in file
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Download address for private network
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * Download address for public network
         * @type {string || null}
         */
        this.ExternalAddr = null;

        /**
         * Status (1: success, 2: failure)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyAccountRemark response structure.
 * @class
 */
class ModifyAccountRemarkResponse extends  AbstractModel {
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
 * DescribeMigrations response structure.
 * @class
 */
class DescribeMigrationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of query results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of query results
         * @type {Array.<MigrateTask> || null}
         */
        this.MigrateTaskSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.MigrateTaskSet) {
            this.MigrateTaskSet = new Array();
            for (let z in params.MigrateTaskSet) {
                let obj = new MigrateTask();
                obj.deserialize(params.MigrateTaskSet[z]);
                this.MigrateTaskSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupStrategy request structure.
 * @class
 */
class ModifyBackupStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup mode, which supports daily backup only. Valid value: daily.
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * Backup time. Value range: an integer from 0 to 23.
         * @type {number || null}
         */
        this.BackupTime = null;

        /**
         * Backup interval in days when the `BackupType` is `daily`. Valid value: 1.
         * @type {number || null}
         */
        this.BackupDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;
        this.BackupDay = 'BackupDay' in params ? params.BackupDay : null;

    }
}

/**
 * DescribeZones request structure.
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
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
 * DeleteDB request structure.
 * @class
 */
class DeleteDBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of mssql-rljoi3bf
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Array of database names
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * Source type of migration task
 * @class
 */
class MigrateSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source instance ID in the format of `mssql-si2823jyl`, which is used when `MigrateType` is 1 (TencentDB for SQL Server)
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID of source CVM instance, which is used when `MigrateType` is 2 (CVM-based self-created SQL Server database)
         * @type {string || null}
         */
        this.CvmId = null;

        /**
         * VPC ID of source CVM instance in the format of vpc-6ys9ont9, which is used when `MigrateType` is 2 (CVM-based self-created SQL Server database)
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID of source CVM instance in the format of subnet-h9extioi, which is used when `MigrateType` is 2 (CVM-based self-created SQL Server database)
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Username, which is used when `MigrateType` is 1 or 2
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Password, which is used when `MigrateType` is 1 or 2
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Private IP of source CVM database, which is used when `MigrateType` is 2 (CVM-based self-created SQL Server database)
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Port number of source CVM database, which is used when `MigrateType` is 2 (CVM-based self-created SQL Server database)
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Source backup address for offline migration, which is used when `MigrateType` is 4 or 5
         * @type {Array.<string> || null}
         */
        this.Url = null;

        /**
         * Source backup password for offline migration, which is used when `MigrateType` is 4 or 5
         * @type {string || null}
         */
        this.UrlPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CvmId = 'CvmId' in params ? params.CvmId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.UrlPassword = 'UrlPassword' in params ? params.UrlPassword : null;

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
         * ID of async task flow for account password change
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
 * ModifyBackupMigration response structure.
 * @class
 */
class ModifyBackupMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup import task ID
         * @type {string || null}
         */
        this.BackupMigrationId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountPrivilege request structure.
 * @class
 */
class ModifyAccountPrivilegeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database instance ID in the format of mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Account permission change information
         * @type {Array.<AccountPrivilegeModifyInfo> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountPrivilegeModifyInfo();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * CreateBackupMigration request structure.
 * @class
 */
class CreateBackupMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of imported target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Migration task restoration type. FULL: full backup restoration, FULL_LOG: full backup and transaction log restoration, FULL_DIFF: full backup and differential backup restoration
         * @type {string || null}
         */
        this.RecoveryType = null;

        /**
         * Backup upload type. COS_URL: the backup is stored in user’s Cloud Object Storage, with URL provided. COS_UPLOAD: the backup is stored in the application’s Cloud Object Storage and needs to be uploaded by the user.
         * @type {string || null}
         */
        this.UploadType = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.MigrationName = null;

        /**
         * If the UploadType is COS_URL, fill in the URL here. If the UploadType is COS_UPLOAD, fill in the name of the backup file here. Only 1 backup file is supported, but a backup file can involve multiple databases.
         * @type {Array.<string> || null}
         */
        this.BackupFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RecoveryType = 'RecoveryType' in params ? params.RecoveryType : null;
        this.UploadType = 'UploadType' in params ? params.UploadType : null;
        this.MigrationName = 'MigrationName' in params ? params.MigrationName : null;
        this.BackupFiles = 'BackupFiles' in params ? params.BackupFiles : null;

    }
}

/**
 * DescribeMigrations request structure.
 * @class
 */
class DescribeMigrationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status set. As long as a migration task is in a status therein, it will be listed
         * @type {Array.<number> || null}
         */
        this.StatusSet = null;

        /**
         * Migration task name (fuzzy match)
         * @type {string || null}
         */
        this.MigrateName = null;

        /**
         * Number of results per page. Value range: 1-100. Default value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The query results are sorted by keyword. Valid values: name, createTime, startTime, endTime, status
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: desc, asc
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
        this.StatusSet = 'StatusSet' in params ? params.StatusSet : null;
        this.MigrateName = 'MigrateName' in params ? params.MigrateName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DescribeBackupUploadSize response structure.
 * @class
 */
class DescribeBackupUploadSizeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of uploaded backups
         * @type {Array.<CosUploadBackupFile> || null}
         */
        this.CosUploadBackupFileSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CosUploadBackupFileSet) {
            this.CosUploadBackupFileSet = new Array();
            for (let z in params.CosUploadBackupFileSet) {
                let obj = new CosUploadBackupFile();
                obj.deserialize(params.CosUploadBackupFileSet[z]);
                this.CosUploadBackupFileSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBs request structure.
 * @class
 */
class DescribeDBsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * Number of results per page. Value range: 1-100. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number. Default value: 0
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
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyDBName request structure.
 * @class
 */
class ModifyDBNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Old database name
         * @type {string || null}
         */
        this.OldDBName = null;

        /**
         * New name of database
         * @type {string || null}
         */
        this.NewDBName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OldDBName = 'OldDBName' in params ? params.OldDBName : null;
        this.NewDBName = 'NewDBName' in params ? params.NewDBName : null;

    }
}

/**
 * DescribeBackups response structure.
 * @class
 */
class DescribeBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of backups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Backup list details
         * @type {Array.<Backup> || null}
         */
        this.Backups = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Backups) {
            this.Backups = new Array();
            for (let z in params.Backups) {
                let obj = new Backup();
                obj.deserialize(params.Backups[z]);
                this.Backups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions request structure.
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * DescribeFlowStatus response structure.
 * @class
 */
class DescribeFlowStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow status. 0: succeeded, 1: failed, 2: running
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
 * DeleteMigration request structure.
 * @class
 */
class DeleteMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {number || null}
         */
        this.MigrateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;

    }
}

/**
 * DescribeMigrationDetail request structure.
 * @class
 */
class DescribeMigrationDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {number || null}
         */
        this.MigrateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;

    }
}

/**
 * Database permission change information
 * @class
 */
class DBPrivilegeModifyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.DBName = null;

        /**
         * Permission change information. ReadWrite: read/write, ReadOnly: read-only, Delete: the account has the permission to delete this database
         * @type {string || null}
         */
        this.Privilege = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

    }
}

/**
 * TerminateDBInstance request structure.
 * @class
 */
class TerminateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs manually terminated in the format of [mssql-3l3fgqn7], which are the same as the instance IDs displayed on the TencentDB Console page
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * CreateDB request structure.
 * @class
 */
class CreateDBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database creation information
         * @type {Array.<DBCreateInfo> || null}
         */
        this.DBs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DBs) {
            this.DBs = new Array();
            for (let z in params.DBs) {
                let obj = new DBCreateInfo();
                obj.deserialize(params.DBs[z]);
                this.DBs.push(obj);
            }
        }

    }
}

/**
 * Used in the `RestoreInstance`, `RollbackInstance`, `CreateMigration`, and `CloneDB` APIs to specify and rename the database to be restored, rolled back, migrated, or cloned.
 * @class
 */
class RenameRestoreDatabase extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name. If the `OldName` database does not exist, a failure will be returned.
It can be left empty in offline migration tasks.
         * @type {string || null}
         */
        this.OldName = null;

        /**
         * New database name. In offline migration, `OldName` will be used if `NewName` is left empty (`OldName` and `NewName` cannot be both empty). In database cloning, `OldName` and `NewName` must be both specified and cannot have the same value.
         * @type {string || null}
         */
        this.NewName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldName = 'OldName' in params ? params.OldName : null;
        this.NewName = 'NewName' in params ? params.NewName : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance request structure.
 * @class
 */
class InquiryPriceUpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Memory size after instance upgrade in GB, which cannot be smaller than the current instance memory size
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Storage capacity after instance upgrade in GB, which cannot be smaller than the current instance storage capacity
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * The number of CUP cores after the instance is upgraded, which cannot be smaller than that of the current cores.
         * @type {number || null}
         */
        this.Cpu = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * ModifyDBRemark request structure.
 * @class
 */
class ModifyDBRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of mssql-rljoi3bf
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Array of database names and remarks, where each element contains a database name and the corresponding remarks
         * @type {Array.<DBRemark> || null}
         */
        this.DBRemarks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DBRemarks) {
            this.DBRemarks = new Array();
            for (let z in params.DBRemarks) {
                let obj = new DBRemark();
                obj.deserialize(params.DBRemarks[z]);
                this.DBRemarks.push(obj);
            }
        }

    }
}

/**
 * ModifyDBInstanceName request structure.
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database instance ID in the format of mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * New name of database instance
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
 * Instance account password information
 * @class
 */
class AccountPassword extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Password
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DeleteMigration response structure.
 * @class
 */
class DeleteMigrationResponse extends  AbstractModel {
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
 * DescribeBackupMigration request structure.
 * @class
 */
class DescribeBackupMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of imported target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup import task ID, which is returned through the API CreateBackupMigration.
         * @type {string || null}
         */
        this.BackupMigrationId = null;

        /**
         * Import task name
         * @type {string || null}
         */
        this.MigrationName = null;

        /**
         * Backup file name
         * @type {string || null}
         */
        this.BackupFileName = null;

        /**
         * Status set of import tasks
         * @type {Array.<number> || null}
         */
        this.StatusSet = null;

        /**
         * Import task restoration type: FULL,FULL_LOG,FULL_DIFF
         * @type {string || null}
         */
        this.RecoveryType = null;

        /**
         * COS_URL: the backup is stored in user’s Cloud Object Storage, with URL provided. COS_UPLOAD: the backup is stored in the application’s Cloud Object Storage and needs to be uploaded by the user.
         * @type {string || null}
         */
        this.UploadType = null;

        /**
         * Paging. Page size
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Paging. Number of pages
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Field for order: name,createTime,startTime,endTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Type of order: desc,asc
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
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;
        this.MigrationName = 'MigrationName' in params ? params.MigrationName : null;
        this.BackupFileName = 'BackupFileName' in params ? params.BackupFileName : null;
        this.StatusSet = 'StatusSet' in params ? params.StatusSet : null;
        this.RecoveryType = 'RecoveryType' in params ? params.RecoveryType : null;
        this.UploadType = 'UploadType' in params ? params.UploadType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * Instance database information
 * @class
 */
class InstanceDBDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database information list
         * @type {Array.<DBDetail> || null}
         */
        this.DBDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DBDetails) {
            this.DBDetails = new Array();
            for (let z in params.DBDetails) {
                let obj = new DBDetail();
                obj.deserialize(params.DBDetails[z]);
                this.DBDetails.push(obj);
            }
        }

    }
}

/**
 * StartIncrementalMigration response structure.
 * @class
 */
class StartIncrementalMigrationResponse extends  AbstractModel {
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
 * Information of time range available for database rollback
 * @class
 */
class DbRollbackTimeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.DBName = null;

        /**
         * Start time of time range available for rollback
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of time range available for rollback
         * @type {string || null}
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
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyDBInstanceNetwork response structure.
 * @class
 */
class ModifyDBInstanceNetworkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance network changing task. You can use the [DescribeFlowStatus](https://intl.cloud.tencent.com/document/product/238/19967?from_cn_redirect=1) API to query the task status.
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
 * Account details
 * @class
 */
class AccountDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Account remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Account creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Account status. 1: creating, 2: normal, 3: modifying, 4: resetting password, -1: deleting
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Account update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Password update time
         * @type {string || null}
         */
        this.PassTime = null;

        /**
         * Internal account status, which should be `enable` normally
         * @type {string || null}
         */
        this.InternalStatus = null;

        /**
         * Information of read and write permissions of this account on relevant databases
         * @type {Array.<DBPrivilege> || null}
         */
        this.Dbs = null;

        /**
         * Whether it is an admin account
         * @type {boolean || null}
         */
        this.IsAdmin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.PassTime = 'PassTime' in params ? params.PassTime : null;
        this.InternalStatus = 'InternalStatus' in params ? params.InternalStatus : null;

        if (params.Dbs) {
            this.Dbs = new Array();
            for (let z in params.Dbs) {
                let obj = new DBPrivilege();
                obj.deserialize(params.Dbs[z]);
                this.Dbs.push(obj);
            }
        }
        this.IsAdmin = 'IsAdmin' in params ? params.IsAdmin : null;

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
         * The async job ID
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
 * Instance details
 * @class
 */
class DBInstance extends  AbstractModel {
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
        this.Name = null;

        /**
         * Project ID of instance
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Instance AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Instance VPC ID, which will be 0 if the basic network is used
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Instance VPC subnet ID, which will be 0 if the basic network is used
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * Instance status. Valid values: <li>1: applying </li> <li>2: running </li> <li>3: restrictedly running (primary/secondary switching) </li> <li>4: isolated </li> <li>5: repossessing </li> <li>6: repossessed </li> <li>7: task running (e.g., backing up or rolling back the instance) </li> <li>8: decommissioned </li> <li>9: scaling </li> <li>10: migrating </li> <li>11: read-only </li> <li>12: restarting </li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance access IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Instance access port
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Instance billing start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Instance billing end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Instance isolation time
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * Instance memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Used storage capacity of instance in GB
         * @type {number || null}
         */
        this.UsedStorage = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Instance version
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Instance renewal flag
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * High-availability instance type. Valid values: 1 (dual-server high-availability), 2 (standalone), 3 (multi-AZ), 4 (multi-AZ cluster), 5 (cluster), 9 (private consumption)
         * @type {number || null}
         */
        this.Model = null;

        /**
         * Instance region name, such as ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance AZ name, such as ap-guangzhou-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Backup time point
         * @type {string || null}
         */
        this.BackupTime = null;

        /**
         * Instance billing mode. 0: pay-as-you-go
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Instance UID
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * Number of CPU cores of instance
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance version code
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Physical server code
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Billing ID
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Unique string-type ID of instance VPC in the format of `vpc-xxx`, which is an empty string if the basic network is used
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Unique string-type ID of instance subnet in the format of `subnet-xxx`, which is an empty string if the basic network is used
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Instance isolation.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsolateOperator = null;

        /**
         * Pub/sub flag. Valid values: SUB (subscribe instance), PUB (publish instance). If it is left empty, it refers to a regular instance without a pub/sub design.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubFlag = null;

        /**
         * Read-only flag. Valid values: RO (read-only instance), MASTER (primary instance with read-only instances). If it is left empty, it refers to an instance which is not read-only and has no RO group.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ROFlag = null;

        /**
         * Disaster recovery type. Valid values: MIRROR (image), ALWAYSON (AlwaysOn), SINGLE (singleton).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HAFlag = null;

        /**
         * The list of tags associated with the instance
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.UsedStorage = 'UsedStorage' in params ? params.UsedStorage : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.IsolateOperator = 'IsolateOperator' in params ? params.IsolateOperator : null;
        this.SubFlag = 'SubFlag' in params ? params.SubFlag : null;
        this.ROFlag = 'ROFlag' in params ? params.ROFlag : null;
        this.HAFlag = 'HAFlag' in params ? params.HAFlag : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * DescribeProductConfig response structure.
 * @class
 */
class DescribeProductConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification information array
         * @type {Array.<SpecInfo> || null}
         */
        this.SpecInfoList = null;

        /**
         * Number of date entries returned
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

        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupCommand response structure.
 * @class
 */
class DescribeBackupCommandResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Create a backup command
         * @type {string || null}
         */
        this.Command = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Command = 'Command' in params ? params.Command : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUploadBackupInfo response structure.
 * @class
 */
class DescribeUploadBackupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bucket name
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * Bucket location information
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Storage path
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Temporary key ID
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * Temporary key (Key)
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * Temporary key (Token)
         * @type {string || null}
         */
        this.XCosSecurityToken = null;

        /**
         * Temporary key start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Temporary key expiration time
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.XCosSecurityToken = 'XCosSecurityToken' in params ? params.XCosSecurityToken : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMigration request structure.
 * @class
 */
class CreateMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task name
         * @type {string || null}
         */
        this.MigrateName = null;

        /**
         * Migration type (1: structure migration, 2: data migration, 3: incremental sync)
         * @type {number || null}
         */
        this.MigrateType = null;

        /**
         * Migration source type. 1: TencentDB for SQL Server, 2: CVM-based self-created SQL Server database; 3: SQL Server backup restoration, 4: SQL Server backup restoration (in COS mode)
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * Migration source
         * @type {MigrateSource || null}
         */
        this.Source = null;

        /**
         * Migration target
         * @type {MigrateTarget || null}
         */
        this.Target = null;

        /**
         * Database objects to be migrated. This parameter is not used for offline migration (SourceType=4 or SourceType=5)
         * @type {Array.<MigrateDB> || null}
         */
        this.MigrateDBSet = null;

        /**
         * Restore and rename the databases listed in `ReNameRestoreDatabase`. If this parameter is left empty, all restored databases will be renamed in the default format. This parameter takes effect only when `SourceType=5`.
         * @type {Array.<RenameRestoreDatabase> || null}
         */
        this.RenameRestore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateName = 'MigrateName' in params ? params.MigrateName : null;
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

        if (params.Source) {
            let obj = new MigrateSource();
            obj.deserialize(params.Source)
            this.Source = obj;
        }

        if (params.Target) {
            let obj = new MigrateTarget();
            obj.deserialize(params.Target)
            this.Target = obj;
        }

        if (params.MigrateDBSet) {
            this.MigrateDBSet = new Array();
            for (let z in params.MigrateDBSet) {
                let obj = new MigrateDB();
                obj.deserialize(params.MigrateDBSet[z]);
                this.MigrateDBSet.push(obj);
            }
        }

        if (params.RenameRestore) {
            this.RenameRestore = new Array();
            for (let z in params.RenameRestore) {
                let obj = new RenameRestoreDatabase();
                obj.deserialize(params.RenameRestore[z]);
                this.RenameRestore.push(obj);
            }
        }

    }
}

/**
 * DescribeUploadBackupInfo request structure.
 * @class
 */
class DescribeUploadBackupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of imported target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup import task ID, which is returned through the API CreateBackupMigration
         * @type {string || null}
         */
        this.BackupMigrationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;

    }
}

/**
 * ModifyDBName response structure.
 * @class
 */
class ModifyDBNameResponse extends  AbstractModel {
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
 * Querying the size of uploaded backup files.
 * @class
 */
class CosUploadBackupFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup name
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Backup size
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
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * StartBackupMigration request structure.
 * @class
 */
class StartBackupMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of imported target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup import task ID, which is returned through the API CreateBackupMigration
         * @type {string || null}
         */
        this.BackupMigrationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;

    }
}

/**
 * Backup file details
 * @class
 */
class Backup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filename
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * File size in KB
         * @type {number || null}
         */
        this.Size = null;

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
         * Download address for private network
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * Download address for public network
         * @type {string || null}
         */
        this.ExternalAddr = null;

        /**
         * Unique ID of backup file, which will be used by the `RestoreInstance` API
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Backup file status (0: creating, 1: succeeded, 2: failed)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * List of databases for multi-database backup
         * @type {Array.<string> || null}
         */
        this.DBs = null;

        /**
         * Backup policy (0: instance backup, 1: multi-database backup)
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Backup mode. 0: scheduled, 1: manual
         * @type {number || null}
         */
        this.BackupWay = null;

        /**
         * Backup name, which can be customized.
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
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DBs = 'DBs' in params ? params.DBs : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.BackupWay = 'BackupWay' in params ? params.BackupWay : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * DescribeBackupCommand request structure.
 * @class
 */
class DescribeBackupCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup file type. Full: full backup. FULL_LOG: full backup which needs log increments. FULL_DIFF: full backup which needs differential increments. LOG: log backup. DIFF: differential backup.
         * @type {string || null}
         */
        this.BackupFileType = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DataBaseName = null;

        /**
         * Whether restoration is required. No: not required. Yes: required.
         * @type {string || null}
         */
        this.IsRecovery = null;

        /**
         * Storage path of backup files. If this parameter is left empty, the default storage path will be D:\\.
         * @type {string || null}
         */
        this.LocalPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupFileType = 'BackupFileType' in params ? params.BackupFileType : null;
        this.DataBaseName = 'DataBaseName' in params ? params.DataBaseName : null;
        this.IsRecovery = 'IsRecovery' in params ? params.IsRecovery : null;
        this.LocalPath = 'LocalPath' in params ? params.LocalPath : null;

    }
}

/**
 * Account remarks
 * @class
 */
class AccountRemark extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * New remarks of account
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModifyDBInstanceName response structure.
 * @class
 */
class ModifyDBInstanceNameResponse extends  AbstractModel {
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
 * CreateIncrementalMigration response structure.
 * @class
 */
class CreateIncrementalMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of an incremental backup import task
         * @type {string || null}
         */
        this.IncrementalMigrationId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IncrementalMigrationId = 'IncrementalMigrationId' in params ? params.IncrementalMigrationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database account permission change information
 * @class
 */
class AccountPrivilegeModifyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Account permission change information
         * @type {Array.<DBPrivilegeModifyInfo> || null}
         */
        this.DBPrivileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;

        if (params.DBPrivileges) {
            this.DBPrivileges = new Array();
            for (let z in params.DBPrivileges) {
                let obj = new DBPrivilegeModifyInfo();
                obj.deserialize(params.DBPrivileges[z]);
                this.DBPrivileges.push(obj);
            }
        }

    }
}

/**
 * DescribeBackupMigration response structure.
 * @class
 */
class DescribeBackupMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Migration task set
         * @type {Array.<Migration> || null}
         */
        this.BackupMigrationSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.BackupMigrationSet) {
            this.BackupMigrationSet = new Array();
            for (let z in params.BackupMigrationSet) {
                let obj = new Migration();
                obj.deserialize(params.BackupMigrationSet[z]);
                this.BackupMigrationSet.push(obj);
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
         * Number of AZs returned
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of AZs
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstance request structure.
 * @class
 */
class UpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Memory size after instance upgrade in GB, which cannot be smaller than the current instance memory size
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Storage capacity after instance upgrade in GB, which cannot be smaller than the current instance storage capacity
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Whether to automatically use vouchers. 0: no, 1: yes. Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID (currently, only one voucher can be used per order)
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * The number of CUP cores after the instance is upgraded.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Upgrade the SQL Server version. Supported versions include SQL Server 2008 Enterprise (`2008R2`), SQL Server 2012 Enterprise (`2012SP3`), etc. As the purchasable versions are region-specific, you can use the `DescribeProductConfig` API to query the information of purchasable versions in each region. Downgrading is unsupported. If this parameter is left empty, the SQL Server version will not be changed.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Upgrade the high availability architecture from image-based disaster recovery to Always On cluster disaster recovery. This parameter is valid only for instances which support Always On high availability and run SQL Server 2017 or later. Neither downgrading to image-based disaster recovery nor upgrading from cluster disaster recovery to Always On disaster recovery is supported. If this parameter is left empty, the high availability architecture will not be changed.
         * @type {string || null}
         */
        this.HAType = null;

        /**
         * Change the instance deployment scheme. Valid values: `SameZones` (change to single-AZ deployment, which does not support cross-AZ disaster recovery), `MultiZones` (change to multi-AZ deployment, which supports cross-AZ disaster recovery).
         * @type {string || null}
         */
        this.MultiZones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.HAType = 'HAType' in params ? params.HAType : null;
        this.MultiZones = 'MultiZones' in params ? params.MultiZones : null;

    }
}

/**
 * Database permission information of account
 * @class
 */
class DBPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.DBName = null;

        /**
         * Database permissions. ReadWrite: read/write, ReadOnly: read-only
         * @type {string || null}
         */
        this.Privilege = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

    }
}

/**
 * DescribeOrders request structure.
 * @class
 */
class DescribeOrdersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order array. The order name will be returned upon shipping, which can be used to call the `DescribeOrders` API to query shipment status
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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * DeleteIncrementalMigration response structure.
 * @class
 */
class DeleteIncrementalMigrationResponse extends  AbstractModel {
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
 * The information of tags associated with instances
 * @class
 */
class ResourceTag extends  AbstractModel {
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
 * CreateBackupMigration response structure.
 * @class
 */
class CreateBackupMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup import task ID
         * @type {string || null}
         */
        this.BackupMigrationId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecycleDBInstance response structure.
 * @class
 */
class RecycleDBInstanceResponse extends  AbstractModel {
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
 * DeleteAccount request structure.
 * @class
 */
class DeleteAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database instance ID in the format of mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Array of instance usernames
         * @type {Array.<string> || null}
         */
        this.UserNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserNames = 'UserNames' in params ? params.UserNames : null;

    }
}

/**
 * DeleteBackupMigration response structure.
 * @class
 */
class DeleteBackupMigrationResponse extends  AbstractModel {
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
 * CreateBackup request structure.
 * @class
 */
class CreateBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup policy (0: instance backup, 1: multi-database backup)
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * List of names of databases to be backed up (required only for multi-database backup)
         * @type {Array.<string> || null}
         */
        this.DBNames = null;

        /**
         * Instance ID in the format of mssql-i1z41iwd
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup name. If this parameter is left empty, a backup name in the format of "[Instance ID]_[Backup start timestamp]" will be automatically generated.
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
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.DBNames = 'DBNames' in params ? params.DBNames : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * ModifyAccountRemark request structure.
 * @class
 */
class ModifyAccountRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Information of account for which to modify remarks
         * @type {Array.<AccountRemark> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountRemark();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * ModifyIncrementalMigration response structure.
 * @class
 */
class ModifyIncrementalMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of an incremental backup import task
         * @type {string || null}
         */
        this.IncrementalMigrationId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IncrementalMigrationId = 'IncrementalMigrationId' in params ? params.IncrementalMigrationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Operation allowed by a cold backup import task
 * @class
 */
class MigrationAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * All the allowed operations. Values include: view (viewing a task), modify (modifying a task), start (starting a task), incremental (creating an incremental task), delete (deleting a task), and upload (obtaining the upload permission).
         * @type {Array.<string> || null}
         */
        this.AllAction = null;

        /**
         * Operation allowed in the current status. If the subset of AllAction is left empty, no operations will be allowed.
         * @type {Array.<string> || null}
         */
        this.AllowedAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllAction = 'AllAction' in params ? params.AllAction : null;
        this.AllowedAction = 'AllowedAction' in params ? params.AllowedAction : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance response structure.
 * @class
 */
class InquiryPriceUpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price before discount. This value divided by 100 indicates the price; for example, 10094 means 100.94 USD
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * The actual price to be paid. This value divided by 100 indicates the price; for example, 10094 means 100.94 USD
         * @type {number || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloneDB request structure.
 * @class
 */
class CloneDBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Clone and rename the databases specified in `ReNameRestoreDatabase`. Please note that the clones must be renamed.
         * @type {Array.<RenameRestoreDatabase> || null}
         */
        this.RenameRestore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.RenameRestore) {
            this.RenameRestore = new Array();
            for (let z in params.RenameRestore) {
                let obj = new RenameRestoreDatabase();
                obj.deserialize(params.RenameRestore[z]);
                this.RenameRestore.push(obj);
            }
        }

    }
}

/**
 * DescribeMigrationDetail response structure.
 * @class
 */
class DescribeMigrationDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {number || null}
         */
        this.MigrateId = null;

        /**
         * Migration task name
         * @type {string || null}
         */
        this.MigrateName = null;

        /**
         * User ID of migration task
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Migration task region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Migration source type. 1: TencentDB for SQL Server, 2: CVM-based self-created SQL Server database; 3: SQL Server backup restoration, 4: SQL Server backup restoration (in COS mode)
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * Migration task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Migration task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Migration task end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Migration task status (1: initializing, 4: migrating, 5: migration failed, 6: migration succeeded)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Migration task progress
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Migration type (1: structure migration, 2: data migration, 3: incremental sync)
         * @type {number || null}
         */
        this.MigrateType = null;

        /**
         * Migration source
         * @type {MigrateSource || null}
         */
        this.Source = null;

        /**
         * Migration target
         * @type {MigrateTarget || null}
         */
        this.Target = null;

        /**
         * Database objects to be migrated. This parameter is not used for offline migration (SourceType=4 or SourceType=5)
         * @type {Array.<MigrateDB> || null}
         */
        this.MigrateDBSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;
        this.MigrateName = 'MigrateName' in params ? params.MigrateName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;

        if (params.Source) {
            let obj = new MigrateSource();
            obj.deserialize(params.Source)
            this.Source = obj;
        }

        if (params.Target) {
            let obj = new MigrateTarget();
            obj.deserialize(params.Target)
            this.Target = obj;
        }

        if (params.MigrateDBSet) {
            this.MigrateDBSet = new Array();
            for (let z in params.MigrateDBSet) {
                let obj = new MigrateDB();
                obj.deserialize(params.MigrateDBSet[z]);
                this.MigrateDBSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMigration request structure.
 * @class
 */
class ModifyMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {number || null}
         */
        this.MigrateId = null;

        /**
         * New name of migration task. If this parameter is left empty, no modification will be made
         * @type {string || null}
         */
        this.MigrateName = null;

        /**
         * New migration type (1: structure migration, 2: data migration, 3: incremental sync). If this parameter is left empty, no modification will be made
         * @type {number || null}
         */
        this.MigrateType = null;

        /**
         * Migration source type. 1: TencentDB for SQL Server, 2: CVM-based self-created SQL Server database; 3: SQL Server backup restoration, 4: SQL Server backup restoration (in COS mode). If this parameter is left empty, no modification will be made
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * Migration source. If this parameter is left empty, no modification will be made
         * @type {MigrateSource || null}
         */
        this.Source = null;

        /**
         * Migration target. If this parameter is left empty, no modification will be made
         * @type {MigrateTarget || null}
         */
        this.Target = null;

        /**
         * Database objects to be migrated. This parameter is not used for offline migration (SourceType=4 or SourceType=5). If it left empty, no modification will be made
         * @type {Array.<MigrateDB> || null}
         */
        this.MigrateDBSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;
        this.MigrateName = 'MigrateName' in params ? params.MigrateName : null;
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

        if (params.Source) {
            let obj = new MigrateSource();
            obj.deserialize(params.Source)
            this.Source = obj;
        }

        if (params.Target) {
            let obj = new MigrateTarget();
            obj.deserialize(params.Target)
            this.Target = obj;
        }

        if (params.MigrateDBSet) {
            this.MigrateDBSet = new Array();
            for (let z in params.MigrateDBSet) {
                let obj = new MigrateDB();
                obj.deserialize(params.MigrateDBSet[z]);
                this.MigrateDBSet.push(obj);
            }
        }

    }
}

/**
 * CreateAccount response structure.
 * @class
 */
class CreateAccountResponse extends  AbstractModel {
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
 * DescribeBackupUploadSize request structure.
 * @class
 */
class DescribeBackupUploadSizeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of imported target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup import task ID, which is returned through the API CreateBackupMigration
         * @type {string || null}
         */
        this.BackupMigrationId = null;

        /**
         * Incremental import task ID
         * @type {string || null}
         */
        this.IncrementalMigrationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;
        this.IncrementalMigrationId = 'IncrementalMigrationId' in params ? params.IncrementalMigrationId : null;

    }
}

/**
 * DeleteDB response structure.
 * @class
 */
class DeleteDBResponse extends  AbstractModel {
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
 * CreateDB response structure.
 * @class
 */
class CreateDBResponse extends  AbstractModel {
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
 * RestartDBInstance response structure.
 * @class
 */
class RestartDBInstanceResponse extends  AbstractModel {
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
 * DescribeDBInstances response structure.
 * @class
 */
class DescribeDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of eligible instances. If the results are returned in multiple pages, this value will be the number of all eligible instances but not the number of instances returned according to the current values of `Limit` and `Offset`
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance list
         * @type {Array.<DBInstance> || null}
         */
        this.DBInstances = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.DBInstances) {
            this.DBInstances = new Array();
            for (let z in params.DBInstances) {
                let obj = new DBInstance();
                obj.deserialize(params.DBInstances[z]);
                this.DBInstances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSlowlogs response structure.
 * @class
 */
class DescribeSlowlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of queries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information list of slow query logs
         * @type {Array.<SlowlogInfo> || null}
         */
        this.Slowlogs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Slowlogs) {
            this.Slowlogs = new Array();
            for (let z in params.Slowlogs) {
                let obj = new SlowlogInfo();
                obj.deserialize(params.Slowlogs[z]);
                this.Slowlogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database information
 * @class
 */
class DBDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Character set
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Database creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Database status. 1: creating, 2: running, 3: modifying, -1: dropping
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Database account permission information
         * @type {Array.<AccountPrivilege> || null}
         */
        this.Accounts = null;

        /**
         * Internal status. ONLINE: running
         * @type {string || null}
         */
        this.InternalStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountPrivilege();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.InternalStatus = 'InternalStatus' in params ? params.InternalStatus : null;

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
         * Database instance ID in the format of mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Updated account password information array
         * @type {Array.<AccountPassword> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountPassword();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * DescribeSlowlogs request structure.
 * @class
 */
class DescribeSlowlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of mssql-k8voqdlz
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Query start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of results per page. Value range: 1-100. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number. Default value: 0
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyDBInstanceProject request structure.
 * @class
 */
class ModifyDBInstanceProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of instance IDs in the format of mssql-j8kv137v
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * Project ID. If this parameter is 0, the default project will be used
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
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * Migration steps of a cold backup import task
 * @class
 */
class MigrationStep extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step sequence
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * Step name
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Step ID in English
         * @type {string || null}
         */
        this.StepId = null;

        /**
         * Step status: 0 (default value), 1 (succeeded), 2 (failed), 3 (in progress), 4 (not started)
         * @type {number || null}
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
        this.StepNo = 'StepNo' in params ? params.StepNo : null;
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.StepId = 'StepId' in params ? params.StepId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * TerminateDBInstance response structure.
 * @class
 */
class TerminateDBInstanceResponse extends  AbstractModel {
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
 * DescribeAccounts response structure.
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Account information list
         * @type {Array.<AccountDetail> || null}
         */
        this.Accounts = null;

        /**
         * Total number
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountDetail();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RollbackInstance request structure.
 * @class
 */
class RollbackInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Rollback type. 0: the database rolled back overwrites the original database; 1: the database rolled back is renamed and does not overwrite the original database
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Database to be rolled back
         * @type {Array.<string> || null}
         */
        this.DBs = null;

        /**
         * Target time point for rollback
         * @type {string || null}
         */
        this.Time = null;

        /**
         * ID of the target instance to which the backup is restored. The target instance should be under the same `APPID`. If this parameter is left empty, ID of the source instance will be used.
         * @type {string || null}
         */
        this.TargetInstanceId = null;

        /**
         * Rename the databases listed in `ReNameRestoreDatabase`. This parameter takes effect only when `Type = 1` which indicates that backup rollback supports renaming databases. If it is left empty, databases will be renamed in the default format and the `DBs` parameter specifies the databases to be restored.
         * @type {Array.<RenameRestoreDatabase> || null}
         */
        this.RenameRestore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DBs = 'DBs' in params ? params.DBs : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.TargetInstanceId = 'TargetInstanceId' in params ? params.TargetInstanceId : null;

        if (params.RenameRestore) {
            this.RenameRestore = new Array();
            for (let z in params.RenameRestore) {
                let obj = new RenameRestoreDatabase();
                obj.deserialize(params.RenameRestore[z]);
                this.RenameRestore.push(obj);
            }
        }

    }
}

/**
 * UpgradeDBInstance response structure.
 * @class
 */
class UpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeRollbackTime request structure.
 * @class
 */
class DescribeRollbackTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of databases to be queried
         * @type {Array.<string> || null}
         */
        this.DBs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DBs = 'DBs' in params ? params.DBs : null;

    }
}

/**
 * DescribeIncrementalMigration response structure.
 * @class
 */
class DescribeIncrementalMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of import tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Incremental import task set
         * @type {Array.<Migration> || null}
         */
        this.IncrementalMigrationSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.IncrementalMigrationSet) {
            this.IncrementalMigrationSet = new Array();
            for (let z in params.IncrementalMigrationSet) {
                let obj = new Migration();
                obj.deserialize(params.IncrementalMigrationSet[z]);
                this.IncrementalMigrationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBRemark response structure.
 * @class
 */
class ModifyDBRemarkResponse extends  AbstractModel {
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
 * Target type of migration task
 * @class
 */
class MigrateTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of target instance in the format of mssql-si2823jyl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username of migration target instance
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Password of migration target instance
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * CreateDBInstances response structure.
 * @class
 */
class CreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * Order name array
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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupMigration request structure.
 * @class
 */
class ModifyBackupMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of imported target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup import task ID, which is returned through the API CreateBackupMigration
         * @type {string || null}
         */
        this.BackupMigrationId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.MigrationName = null;

        /**
         * Migration task restoration type: FULL,FULL_LOG,FULL_DIFF
         * @type {string || null}
         */
        this.RecoveryType = null;

        /**
         * COS_URL: the backup is stored in user’s Cloud Object Storage, with URL provided. COS_UPLOAD: the backup is stored in the application’s Cloud Object Storage and needs to be uploaded by the user.
         * @type {string || null}
         */
        this.UploadType = null;

        /**
         * If the UploadType is COS_URL, fill in URL here. If the UploadType is COS_UPLOAD, fill in the name of the backup file here. Only 1 backup file is supported, but a backup file can involve multiple databases.
         * @type {Array.<string> || null}
         */
        this.BackupFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMigrationId = 'BackupMigrationId' in params ? params.BackupMigrationId : null;
        this.MigrationName = 'MigrationName' in params ? params.MigrationName : null;
        this.RecoveryType = 'RecoveryType' in params ? params.RecoveryType : null;
        this.UploadType = 'UploadType' in params ? params.UploadType : null;
        this.BackupFiles = 'BackupFiles' in params ? params.BackupFiles : null;

    }
}

/**
 * DeleteAccount response structure.
 * @class
 */
class DeleteAccountResponse extends  AbstractModel {
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
 * DescribeBackups request structure.
 * @class
 */
class DescribeBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start name (yyyy-MM-dd HH:mm:ss)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time (yyyy-MM-dd HH:mm:ss)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Instance ID in the format of mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of results per page. Value range: 1-100. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter by backup name. If this parameter is left empty, backup name will not be used in filtering.
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * Filter by backup policy. Valid values: 0 (instance backup), 1 (multi-database backup). If this parameter is left empty, backup policy will not be used in filtering.
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Filter by backup mode. Valid values: 0 (automatic backup on a regular basis), 1 (manual backup performed by the user at any time). If this parameter is left empty, backup mode will not be used in filtering.
         * @type {number || null}
         */
        this.BackupWay = null;

        /**
         * Filter by backup ID. If this parameter is left empty, backup ID will not be used in filtering.
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * Filter backups by the database name. If the parameter is left empty, this filter criteria will not take effect.
         * @type {string || null}
         */
        this.DatabaseName = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.BackupWay = 'BackupWay' in params ? params.BackupWay : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;

    }
}

module.exports = {
    CreateDBInstancesRequest: CreateDBInstancesRequest,
    CloneDBResponse: CloneDBResponse,
    DealInfo: DealInfo,
    DescribeFlowStatusRequest: DescribeFlowStatusRequest,
    CreateMigrationResponse: CreateMigrationResponse,
    DeleteBackupMigrationRequest: DeleteBackupMigrationRequest,
    RestartDBInstanceRequest: RestartDBInstanceRequest,
    StartBackupMigrationResponse: StartBackupMigrationResponse,
    RegionInfo: RegionInfo,
    ModifyBackupStrategyResponse: ModifyBackupStrategyResponse,
    ModifyIncrementalMigrationRequest: ModifyIncrementalMigrationRequest,
    MigrateDetail: MigrateDetail,
    CreateIncrementalMigrationRequest: CreateIncrementalMigrationRequest,
    RunMigrationResponse: RunMigrationResponse,
    DescribeProductConfigRequest: DescribeProductConfigRequest,
    CreateAccountRequest: CreateAccountRequest,
    RollbackInstanceResponse: RollbackInstanceResponse,
    DeleteIncrementalMigrationRequest: DeleteIncrementalMigrationRequest,
    DBRemark: DBRemark,
    MigrateDB: MigrateDB,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DescribeDBCharsetsResponse: DescribeDBCharsetsResponse,
    ModifyDBInstanceProjectResponse: ModifyDBInstanceProjectResponse,
    DescribeRollbackTimeResponse: DescribeRollbackTimeResponse,
    RestoreInstanceRequest: RestoreInstanceRequest,
    DescribeIncrementalMigrationRequest: DescribeIncrementalMigrationRequest,
    RunMigrationRequest: RunMigrationRequest,
    DescribeDBCharsetsRequest: DescribeDBCharsetsRequest,
    RestoreInstanceResponse: RestoreInstanceResponse,
    ZoneInfo: ZoneInfo,
    InquiryPriceCreateDBInstancesRequest: InquiryPriceCreateDBInstancesRequest,
    StartIncrementalMigrationRequest: StartIncrementalMigrationRequest,
    Migration: Migration,
    ModifyDBInstanceNetworkRequest: ModifyDBInstanceNetworkRequest,
    MigrationDetail: MigrationDetail,
    RecycleDBInstanceRequest: RecycleDBInstanceRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    MigrateTask: MigrateTask,
    SpecInfo: SpecInfo,
    DescribeOrdersResponse: DescribeOrdersResponse,
    InquiryPriceCreateDBInstancesResponse: InquiryPriceCreateDBInstancesResponse,
    ModifyAccountPrivilegeResponse: ModifyAccountPrivilegeResponse,
    DBCreateInfo: DBCreateInfo,
    AccountPrivilege: AccountPrivilege,
    ModifyMigrationResponse: ModifyMigrationResponse,
    AccountCreateInfo: AccountCreateInfo,
    DescribeDBsResponse: DescribeDBsResponse,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    SlowlogInfo: SlowlogInfo,
    ModifyAccountRemarkResponse: ModifyAccountRemarkResponse,
    DescribeMigrationsResponse: DescribeMigrationsResponse,
    ModifyBackupStrategyRequest: ModifyBackupStrategyRequest,
    DescribeZonesRequest: DescribeZonesRequest,
    DeleteDBRequest: DeleteDBRequest,
    MigrateSource: MigrateSource,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    ModifyBackupMigrationResponse: ModifyBackupMigrationResponse,
    ModifyAccountPrivilegeRequest: ModifyAccountPrivilegeRequest,
    CreateBackupMigrationRequest: CreateBackupMigrationRequest,
    DescribeMigrationsRequest: DescribeMigrationsRequest,
    DescribeBackupUploadSizeResponse: DescribeBackupUploadSizeResponse,
    DescribeDBsRequest: DescribeDBsRequest,
    ModifyDBNameRequest: ModifyDBNameRequest,
    DescribeBackupsResponse: DescribeBackupsResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeFlowStatusResponse: DescribeFlowStatusResponse,
    DeleteMigrationRequest: DeleteMigrationRequest,
    DescribeMigrationDetailRequest: DescribeMigrationDetailRequest,
    DBPrivilegeModifyInfo: DBPrivilegeModifyInfo,
    TerminateDBInstanceRequest: TerminateDBInstanceRequest,
    CreateDBRequest: CreateDBRequest,
    RenameRestoreDatabase: RenameRestoreDatabase,
    InquiryPriceUpgradeDBInstanceRequest: InquiryPriceUpgradeDBInstanceRequest,
    ModifyDBRemarkRequest: ModifyDBRemarkRequest,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    AccountPassword: AccountPassword,
    DeleteMigrationResponse: DeleteMigrationResponse,
    DescribeBackupMigrationRequest: DescribeBackupMigrationRequest,
    InstanceDBDetail: InstanceDBDetail,
    StartIncrementalMigrationResponse: StartIncrementalMigrationResponse,
    DbRollbackTimeInfo: DbRollbackTimeInfo,
    ModifyDBInstanceNetworkResponse: ModifyDBInstanceNetworkResponse,
    AccountDetail: AccountDetail,
    CreateBackupResponse: CreateBackupResponse,
    DBInstance: DBInstance,
    DescribeProductConfigResponse: DescribeProductConfigResponse,
    DescribeBackupCommandResponse: DescribeBackupCommandResponse,
    DescribeUploadBackupInfoResponse: DescribeUploadBackupInfoResponse,
    CreateMigrationRequest: CreateMigrationRequest,
    DescribeUploadBackupInfoRequest: DescribeUploadBackupInfoRequest,
    ModifyDBNameResponse: ModifyDBNameResponse,
    CosUploadBackupFile: CosUploadBackupFile,
    StartBackupMigrationRequest: StartBackupMigrationRequest,
    Backup: Backup,
    DescribeBackupCommandRequest: DescribeBackupCommandRequest,
    AccountRemark: AccountRemark,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    CreateIncrementalMigrationResponse: CreateIncrementalMigrationResponse,
    AccountPrivilegeModifyInfo: AccountPrivilegeModifyInfo,
    DescribeBackupMigrationResponse: DescribeBackupMigrationResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    DBPrivilege: DBPrivilege,
    DescribeOrdersRequest: DescribeOrdersRequest,
    DeleteIncrementalMigrationResponse: DeleteIncrementalMigrationResponse,
    ResourceTag: ResourceTag,
    CreateBackupMigrationResponse: CreateBackupMigrationResponse,
    RecycleDBInstanceResponse: RecycleDBInstanceResponse,
    DeleteAccountRequest: DeleteAccountRequest,
    DeleteBackupMigrationResponse: DeleteBackupMigrationResponse,
    CreateBackupRequest: CreateBackupRequest,
    ModifyAccountRemarkRequest: ModifyAccountRemarkRequest,
    ModifyIncrementalMigrationResponse: ModifyIncrementalMigrationResponse,
    MigrationAction: MigrationAction,
    InquiryPriceUpgradeDBInstanceResponse: InquiryPriceUpgradeDBInstanceResponse,
    CloneDBRequest: CloneDBRequest,
    DescribeMigrationDetailResponse: DescribeMigrationDetailResponse,
    ModifyMigrationRequest: ModifyMigrationRequest,
    CreateAccountResponse: CreateAccountResponse,
    DescribeBackupUploadSizeRequest: DescribeBackupUploadSizeRequest,
    DeleteDBResponse: DeleteDBResponse,
    CreateDBResponse: CreateDBResponse,
    RestartDBInstanceResponse: RestartDBInstanceResponse,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    DescribeSlowlogsResponse: DescribeSlowlogsResponse,
    DBDetail: DBDetail,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeSlowlogsRequest: DescribeSlowlogsRequest,
    ModifyDBInstanceProjectRequest: ModifyDBInstanceProjectRequest,
    MigrationStep: MigrationStep,
    TerminateDBInstanceResponse: TerminateDBInstanceResponse,
    DescribeAccountsResponse: DescribeAccountsResponse,
    RollbackInstanceRequest: RollbackInstanceRequest,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    DescribeRollbackTimeRequest: DescribeRollbackTimeRequest,
    DescribeIncrementalMigrationResponse: DescribeIncrementalMigrationResponse,
    ModifyDBRemarkResponse: ModifyDBRemarkResponse,
    MigrateTarget: MigrateTarget,
    CreateDBInstancesResponse: CreateDBInstancesResponse,
    ModifyBackupMigrationRequest: ModifyBackupMigrationRequest,
    DeleteAccountResponse: DeleteAccountResponse,
    DescribeBackupsRequest: DescribeBackupsRequest,

}
