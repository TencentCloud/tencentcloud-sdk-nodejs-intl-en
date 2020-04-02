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
         * Number of results per page. Value range: 1–100. Default value: 20
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

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
         * Number of results per page. Value range: 1–100. Default value: 20
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * Length of purchase in months. Value range: 1–48. Default value: 1
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Number of instances purchased at a time. Value range: 1–100. Default value: 1
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * SQL Server version. Valid values: 2008R2 (SQL Server 2008 Enterprise), 2012SP3 (SQL Server 2012 Enterprise), 2016SP1 (SQL Server 2016 Enterprise), 201602 (SQL Server 2016 Standard), 2017 (SQL Server 2017 Enterprise). Default value: 2008R2.
         * @type {string || null}
         */
        this.DBVersion = null;

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
         * Migration task status (1: initializing, 4: migrating, 5: migration failed, 6: migration succeeded)
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
<li>3: running restrictedly (master/slave switching)</li>
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
         * Number of results per page. Value range: 1–100. Default value: 100
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
         * Number of results per page. Value range: 1–100. Default value: 100
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
         * Number of results per page. Value range: 1–100. Default value: 20
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
         * Instance status. Valid values: <li>1: applying </li> <li>2: running </li> <li>3: restrictedly running (master/slave switching) </li> <li>4: isolated </li> <li>5: repossessing </li> <li>6: repossessed </li> <li>7: task running (e.g., backing up or rolling back the instance) </li> <li>8: decommissioned </li> <li>9: scaling </li> <li>10: migrating </li> <li>11: read-only </li> <li>12: restarting </li>
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
         * Instance high availability status. 1: dual-server high-availability, 2: single-server
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
         * Number of results per page. Value range: 1–100. Default value: 20
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

module.exports = {
    CreateDBInstancesRequest: CreateDBInstancesRequest,
    DealInfo: DealInfo,
    DescribeAccountsRequest: DescribeAccountsRequest,
    CreateMigrationResponse: CreateMigrationResponse,
    DeleteDBResponse: DeleteDBResponse,
    ModifyDBRemarkRequest: ModifyDBRemarkRequest,
    MigrateDetail: MigrateDetail,
    RunMigrationResponse: RunMigrationResponse,
    DescribeProductConfigRequest: DescribeProductConfigRequest,
    CreateAccountRequest: CreateAccountRequest,
    RollbackInstanceResponse: RollbackInstanceResponse,
    DBRemark: DBRemark,
    MigrateDB: MigrateDB,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DescribeBackupsRequest: DescribeBackupsRequest,
    ModifyDBInstanceProjectResponse: ModifyDBInstanceProjectResponse,
    DescribeRollbackTimeResponse: DescribeRollbackTimeResponse,
    RestoreInstanceRequest: RestoreInstanceRequest,
    RunMigrationRequest: RunMigrationRequest,
    RestoreInstanceResponse: RestoreInstanceResponse,
    CreateDBRequest: CreateDBRequest,
    ZoneInfo: ZoneInfo,
    InquiryPriceCreateDBInstancesRequest: InquiryPriceCreateDBInstancesRequest,
    DescribeMigrationDetailRequest: DescribeMigrationDetailRequest,
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
    DescribeZonesRequest: DescribeZonesRequest,
    DeleteDBRequest: DeleteDBRequest,
    MigrateSource: MigrateSource,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    ModifyAccountPrivilegeRequest: ModifyAccountPrivilegeRequest,
    DescribeMigrationsRequest: DescribeMigrationsRequest,
    DescribeFlowStatusRequest: DescribeFlowStatusRequest,
    DescribeDBsRequest: DescribeDBsRequest,
    ModifyDBNameRequest: ModifyDBNameRequest,
    DescribeBackupsResponse: DescribeBackupsResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeFlowStatusResponse: DescribeFlowStatusResponse,
    DeleteMigrationRequest: DeleteMigrationRequest,
    DBPrivilegeModifyInfo: DBPrivilegeModifyInfo,
    TerminateDBInstanceRequest: TerminateDBInstanceRequest,
    RestartDBInstanceRequest: RestartDBInstanceRequest,
    InquiryPriceUpgradeDBInstanceRequest: InquiryPriceUpgradeDBInstanceRequest,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    AccountPassword: AccountPassword,
    DeleteMigrationResponse: DeleteMigrationResponse,
    InstanceDBDetail: InstanceDBDetail,
    DbRollbackTimeInfo: DbRollbackTimeInfo,
    AccountDetail: AccountDetail,
    CreateBackupResponse: CreateBackupResponse,
    DBInstance: DBInstance,
    DescribeProductConfigResponse: DescribeProductConfigResponse,
    CreateMigrationRequest: CreateMigrationRequest,
    ModifyDBNameResponse: ModifyDBNameResponse,
    Backup: Backup,
    AccountRemark: AccountRemark,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    AccountPrivilegeModifyInfo: AccountPrivilegeModifyInfo,
    MigrateTarget: MigrateTarget,
    DescribeZonesResponse: DescribeZonesResponse,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    DBPrivilege: DBPrivilege,
    DescribeOrdersRequest: DescribeOrdersRequest,
    DeleteAccountRequest: DeleteAccountRequest,
    CreateBackupRequest: CreateBackupRequest,
    ModifyAccountRemarkRequest: ModifyAccountRemarkRequest,
    InquiryPriceUpgradeDBInstanceResponse: InquiryPriceUpgradeDBInstanceResponse,
    DescribeMigrationDetailResponse: DescribeMigrationDetailResponse,
    ModifyMigrationRequest: ModifyMigrationRequest,
    CreateAccountResponse: CreateAccountResponse,
    RegionInfo: RegionInfo,
    CreateDBResponse: CreateDBResponse,
    RestartDBInstanceResponse: RestartDBInstanceResponse,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    DescribeSlowlogsResponse: DescribeSlowlogsResponse,
    DBDetail: DBDetail,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeSlowlogsRequest: DescribeSlowlogsRequest,
    ModifyDBInstanceProjectRequest: ModifyDBInstanceProjectRequest,
    TerminateDBInstanceResponse: TerminateDBInstanceResponse,
    DescribeAccountsResponse: DescribeAccountsResponse,
    RollbackInstanceRequest: RollbackInstanceRequest,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    DescribeRollbackTimeRequest: DescribeRollbackTimeRequest,
    ModifyDBRemarkResponse: ModifyDBRemarkResponse,
    CreateDBInstancesResponse: CreateDBInstancesResponse,
    DeleteAccountResponse: DeleteAccountResponse,

}
