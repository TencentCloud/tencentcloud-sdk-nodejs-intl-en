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
 * DescribeSyncJobs response structure.
 * @class
 */
class DescribeSyncJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of task details
         * @type {Array.<SyncJobInfo> || null}
         */
        this.JobList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.JobList) {
            this.JobList = new Array();
            for (let z in params.JobList) {
                let obj = new SyncJobInfo();
                obj.deserialize(params.JobList[z]);
                this.JobList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMigrateJobs response structure.
 * @class
 */
class DescribeMigrateJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of task details
         * @type {Array.<MigrateJobInfo> || null}
         */
        this.JobList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.JobList) {
            this.JobList = new Array();
            for (let z in params.JobList) {
                let obj = new MigrateJobInfo();
                obj.deserialize(params.JobList[z]);
                this.JobList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes the specific migration process
 * @class
 */
class MigrateDetailInfo extends  AbstractModel {
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
         * Overall progress, such as:
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * Progress of the current step, such as:
         * @type {string || null}
         */
        this.CurrentStepProgress = null;

        /**
         * Master/slave lag in MB, which is valid during incremental sync and currently supported by TencentDB for Redis and MySQL
         * @type {number || null}
         */
        this.MasterSlaveDistance = null;

        /**
         * Master/slave lag in seconds, which is valid during incremental sync and currently supported by TencentDB for MySQL
         * @type {number || null}
         */
        this.SecondsBehindMaster = null;

        /**
         * Step information
         * @type {Array.<MigrateStepDetailInfo> || null}
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
        this.CurrentStepProgress = 'CurrentStepProgress' in params ? params.CurrentStepProgress : null;
        this.MasterSlaveDistance = 'MasterSlaveDistance' in params ? params.MasterSlaveDistance : null;
        this.SecondsBehindMaster = 'SecondsBehindMaster' in params ? params.SecondsBehindMaster : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new MigrateStepDetailInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteMigrateJob response structure.
 * @class
 */
class DeleteMigrateJobResponse extends  AbstractModel {
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
 * CreateMigrateCheckJob request structure.
 * @class
 */
class CreateMigrateCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * Instance information of disaster recovery sync, which records the information of the master instance or disaster recovery instance
 * @class
 */
class SyncInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name, such as ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Short instance ID
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
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateSyncJob response structure.
 * @class
 */
class CreateSyncJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery sync task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMigrateCheckJob request structure.
 * @class
 */
class DescribeMigrateCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * StartMigrateJob request structure.
 * @class
 */
class StartMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * StartSyncJob request structure.
 * @class
 */
class StartSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery sync task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * CreateMigrateJob request structure.
 * @class
 */
class CreateMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Migration task configuration options
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * Source instance database type, which currently supports MySQL, Redis, MongoDB, PostgreSQL, MariaDB, and Percona. For more information on the supported types in a specific region, see the migration task creation page in the console.
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source instance access type. Valid values: extranet (public network), cvm (CVM-based self-created instance), dcg (Direct Connect-enabled instance), vpncloud (Tencent Cloud VPN-enabled instance), cdb (TencentDB instance), ccn (CCN instance)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source instance information, which is correlated with the migration task type
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target instance access type, which currently supports MySQL, Redis, MongoDB, PostgreSQL, MariaDB, and Percona. For more information on the supported types in a specific region, see the migration task creation page in the console.
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Target instance access type, which currently only supports cdb (TencentDB instance)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Destination instance information
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * Information of the source table to be migrated, which is described in JSON string format. It is required if MigrateOption.MigrateObject is 2 (migrating the specified table).
For databases with a database-table structure:
[{Database:db1,Table:[table1,table2]},{Database:db2}]
For databases with a database-schema-table structure:
[{Database:db1,Schema:s1
Table:[table1,table2]},{Database:db1,Schema:s2
Table:[table1,table2]},{Database:db2,Schema:s1
Table:[table1,table2]},{Database:db3},{Database:db4
Schema:s1}]
         * @type {string || null}
         */
        this.DatabaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * Disaster recovery sync task information
 * @class
 */
class SyncJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Disaster recovery task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Task sync
         * @type {SyncOption || null}
         */
        this.SyncOption = null;

        /**
         * Source access type
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source data type
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source instance information
         * @type {SyncInstanceInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Disaster recovery access type
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Disaster recovery data type
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Disaster recovery instance information
         * @type {SyncInstanceInfo || null}
         */
        this.DstInfo = null;

        /**
         * Task information
         * @type {SyncDetailInfo || null}
         */
        this.Detail = null;

        /**
         * Task status
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Table to be migrated
         * @type {string || null}
         */
        this.DatabaseInfo = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.SyncOption) {
            let obj = new SyncOption();
            obj.deserialize(params.SyncOption)
            this.SyncOption = obj;
        }
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;

        if (params.SrcInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;

        if (params.DstInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

        if (params.Detail) {
            let obj = new SyncDetailInfo();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Target instance information, which is correlated with the migration task type
 * @class
 */
class DstInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target instance ID, such as cdb-jd92ijd8
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Target instance region, such as ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Target instance VIP, which has been disused and does not need to be entered
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Target instance Vport, which has been disused and does not need to be entered
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Only valid for MySQL currently. For instance-level migration, the value range is: 1 (read-only), 0 (read/write)
         * @type {number || null}
         */
        this.ReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;

    }
}

/**
 * ModifyMigrateJob response structure.
 * @class
 */
class ModifyMigrateJobResponse extends  AbstractModel {
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
 * Source instance information
 * @class
 */
class SrcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alibaba Cloud AccessKey, which is applicable if the source database is an Alibaba Cloud ApsaraDB for RDS 5.6 instance
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * Instance IP address
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Instance port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Instance username
         * @type {string || null}
         */
        this.User = null;

        /**
         * Instance password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Alibaba Cloud ApsaraDB for RDS instance ID, which is applicable if the source database is an Alibaba Cloud ApsaraDB for RDS 5.6/5.7 instance
         * @type {string || null}
         */
        this.RdsInstanceId = null;

        /**
         * Short CVM instance ID in the format of `ins-olgl39y8`. It is the same as the instance ID displayed on the CVM Console page. For CVM-based self-created instances, this field needs to be passed in
         * @type {string || null}
         */
        this.CvmInstanceId = null;

        /**
         * Direct Connect gateway ID in the format of dcg-0rxtqqxb
         * @type {string || null}
         */
        this.UniqDcgId = null;

        /**
         * VPC ID in the format of vpc-92jblxto
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC Subnet ID in the format of subnet-3paxmkdz
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPN gateway ID in the format of vpngw-9ghexg7q
         * @type {string || null}
         */
        this.UniqVpnGwId = null;

        /**
         * Database instance ID in the format of cdb-powiqx8q
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Region name, such as ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * For Alibaba Cloud ApsaraDB for RDS instances, enter "aliyun"; otherwise, enter "others"
         * @type {string || null}
         */
        this.Supplier = null;

        /**
         * CCN instance ID, such as ccn-afp6kltc
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * Database version. This parameter is valid only when the instance is an RDS instance. Value: 5.6 or 5.7. Default value: 5.6
         * @type {string || null}
         */
        this.EngineVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.RdsInstanceId = 'RdsInstanceId' in params ? params.RdsInstanceId : null;
        this.CvmInstanceId = 'CvmInstanceId' in params ? params.CvmInstanceId : null;
        this.UniqDcgId = 'UniqDcgId' in params ? params.UniqDcgId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.UniqVpnGwId = 'UniqVpnGwId' in params ? params.UniqVpnGwId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Supplier = 'Supplier' in params ? params.Supplier : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;

    }
}

/**
 * Sampling parameter for spot check
 * @class
 */
class ConsistencyParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data content check parameter, which refers to the proportion of the rows selected for data comparison in all the rows of the table. Value: an integer between 1 and 100.
         * @type {number || null}
         */
        this.SelectRowsPerTable = null;

        /**
         * Data content check parameter, which refers to the proportion of the tables selected for data detection in all the tables. Value: an integer between 1 and 100.
         * @type {number || null}
         */
        this.TablesSelectAll = null;

        /**
         * Data quantity check parameter, which checks whether the numbers of rows are identical. It refers to the proportion of the tables selected for quantity check in all the tables. Value: an integer between 1 and 100.
         * @type {number || null}
         */
        this.TablesSelectCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SelectRowsPerTable = 'SelectRowsPerTable' in params ? params.SelectRowsPerTable : null;
        this.TablesSelectAll = 'TablesSelectAll' in params ? params.TablesSelectAll : null;
        this.TablesSelectCount = 'TablesSelectCount' in params ? params.TablesSelectCount : null;

    }
}

/**
 * Configuration options of a disaster recovery sync task
 * @class
 */
class SyncOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync object. 1: entire instance; 2: specified table
         * @type {number || null}
         */
        this.SyncObject = null;

        /**
         * Sync start configuration. 1: start immediately
         * @type {number || null}
         */
        this.RunMode = null;

        /**
         * Sync mode. 3: full + incremental sync
         * @type {number || null}
         */
        this.SyncType = null;

        /**
         * Data consistency check. 1: no configuration required
         * @type {number || null}
         */
        this.ConsistencyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SyncObject = 'SyncObject' in params ? params.SyncObject : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.SyncType = 'SyncType' in params ? params.SyncType : null;
        this.ConsistencyType = 'ConsistencyType' in params ? params.ConsistencyType : null;

    }
}

/**
 * Migration task configuration options
 * @class
 */
class MigrateOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task operation mode. Value range: 1 (immediate execution), 2 (scheduled execution)
         * @type {number || null}
         */
        this.RunMode = null;

        /**
         * Expected execution time in the format of yyyy-mm-dd hh:mm:ss. If runMode=2, this field is required
         * @type {string || null}
         */
        this.ExpectTime = null;

        /**
         * Data migration type. Value range: 1 (structural migration), 2 (full migration), 3 (full + incremental migration)
         * @type {number || null}
         */
        this.MigrateType = null;

        /**
         * Migration subject. 1: entire instance; 2: specified table
         * @type {number || null}
         */
        this.MigrateObject = null;

        /**
         * Parameter of spot data consistency check. 1: not configured; 2: full check; 3: spot check; 4: check inconsistent tables only; 5: no check
         * @type {number || null}
         */
        this.ConsistencyType = null;

        /**
         * Whether to overwrite the target database with the root account of the source database. Value range: 0 (no), 1 (yes). This value should be 0 for table or structural migration
         * @type {number || null}
         */
        this.IsOverrideRoot = null;

        /**
         * Additional parameters for different databases, which are described in JSON format. 
The following parameters can be defined for Redis: 
{ 
	"ClientOutputBufferHardLimit":512, 	Hard capacity limit of slave buffer (MB) 
	"ClientOutputBufferSoftLimit":512, 	Soft capacity limit of slave buffer (MB) 
	"ClientOutputBufferPersistTime":60, Soft limit duration of slave buffer (s) 
	"ReplBacklogSize":512, 	Circular buffer capacity limit (MB) 
	"ReplTimeout":120, 		Replication timeout period (s) 
}
The following parameters can be defined for MongoDB: 
{
	'SrcAuthDatabase':'admin', 
	'SrcAuthFlag': "1", 
	'SrcAuthMechanism':"SCRAM-SHA-1"
}
MySQL currently does not support configuring additional parameters.
         * @type {string || null}
         */
        this.ExternParams = null;

        /**
         * Only used for "spot data consistency check". It is required if ConsistencyType is spot check
         * @type {ConsistencyParams || null}
         */
        this.ConsistencyParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectTime = 'ExpectTime' in params ? params.ExpectTime : null;
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;
        this.MigrateObject = 'MigrateObject' in params ? params.MigrateObject : null;
        this.ConsistencyType = 'ConsistencyType' in params ? params.ConsistencyType : null;
        this.IsOverrideRoot = 'IsOverrideRoot' in params ? params.IsOverrideRoot : null;
        this.ExternParams = 'ExternParams' in params ? params.ExternParams : null;

        if (params.ConsistencyParams) {
            let obj = new ConsistencyParams();
            obj.deserialize(params.ConsistencyParams)
            this.ConsistencyParams = obj;
        }

    }
}

/**
 * CreateMigrateCheckJob response structure.
 * @class
 */
class CreateMigrateCheckJobResponse extends  AbstractModel {
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
 * Information of steps in migration
 * @class
 */
class MigrateStepDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step number
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * Step name
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Step ID
         * @type {string || null}
         */
        this.StepId = null;

        /**
         * Step status. Value range: 0 (default), 1 (succeeded), 2 (failed), 3 (in progress), 4 (not started)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Start time of current step in the format of `yyyy-mm-dd hh:mm:ss`. This field is meaningless if it does not exist or is empty
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * DescribeMigrateCheckJob response structure.
 * @class
 */
class DescribeMigrateCheckJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Check task status: unavailable, starting, running, finished
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task error code
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Task error message
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * Check task progress. For example, "30" means 30% completed
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * Whether the check succeeds. 0: no; 1: yes; 3: not checked
         * @type {number || null}
         */
        this.CheckFlag = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartSyncJob response structure.
 * @class
 */
class StartSyncJobResponse extends  AbstractModel {
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
 * CreateSyncCheckJob response structure.
 * @class
 */
class CreateSyncCheckJobResponse extends  AbstractModel {
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
 * DescribeSyncCheckJob request structure.
 * @class
 */
class DescribeSyncCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the disaster recovery sync task to be queried
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * StopMigrateJob request structure.
 * @class
 */
class StopMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * ModifySyncJob response structure.
 * @class
 */
class ModifySyncJobResponse extends  AbstractModel {
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
 * ModifyMigrateJob request structure.
 * @class
 */
class ModifyMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the data migration task to be modified
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data migration task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Migration task configuration options
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * Source instance access type. Valid values: extranet (public network), cvm (CVM-based self-created instance), dcg (Direct Connect-enabled instance), vpncloud (Tencent Cloud VPN-enabled instance), cdb (TencentDB instance)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source instance information, which is correlated with the migration task type
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target instance access type. Valid values: extranet (public network), cvm (CVM-based self-created instance), dcg (Direct Connect-enabled instance), vpncloud (Tencent Cloud VPN-enabled instance), cdb (TencentDB instance). Currently, only `cdb` is supported
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Target instance information. The region where the target instance is located cannot be modified.
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * When migrating the specified table, you need to set the information of the source database table to be migrated, which should be described in JSON string format. Below are examples.

For databases with a database-table structure:
[{"Database":"db1","Table":["table1","table2"]},{"Database":"db2"}]
For databases with a database-schema-table structure:
[{"Database":"db1","Schema":"s1","Table":["table1","table2"]},{"Database":"db1","Schema":"s2","Table":["table1","table2"]},{"Database":"db2","Schema":"s1","Table":["table1","table2"]},{"Database":"db3"},{"Database":"db4","Schema":"s1"}]

This field does not need to be set when the entire instance is to be migrated
         * @type {string || null}
         */
        this.DatabaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * CompleteMigrateJob request structure.
 * @class
 */
class CompleteMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * Check steps for a disaster recovery task
 * @class
 */
class SyncCheckStepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step number
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * Step name
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Code of the step execution result
         * @type {number || null}
         */
        this.StepCode = null;

        /**
         * Message about the step execution result
         * @type {string || null}
         */
        this.StepMessage = null;

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
        this.StepCode = 'StepCode' in params ? params.StepCode : null;
        this.StepMessage = 'StepMessage' in params ? params.StepMessage : null;

    }
}

/**
 * CreateSyncJob request structure.
 * @class
 */
class CreateSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery sync task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Configuration options of a disaster recovery sync task
         * @type {SyncOption || null}
         */
        this.SyncOption = null;

        /**
         * Source instance database type, which currently only supports mysql
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source instance access type, which currently only supports cdb (TencentDB instances)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source instance information
         * @type {SyncInstanceInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target instance access type, which currently only supports mysql
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Target instance access type, which currently only supports cdb (TencentDB instances)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Target instance information
         * @type {SyncInstanceInfo || null}
         */
        this.DstInfo = null;

        /**
         * Information of the source table to be synced, which is described in JSON string format.
For databases with a database-table structure:
[{Database:db1,Table:[table1,table2]},{Database:db2}]
         * @type {string || null}
         */
        this.DatabaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.SyncOption) {
            let obj = new SyncOption();
            obj.deserialize(params.SyncOption)
            this.SyncOption = obj;
        }
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * DescribeSyncJobs request structure.
 * @class
 */
class DescribeSyncJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery sync task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Disaster recovery sync task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Sort by field. Value range: JobId, Status, JobName, CreateTime
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sorting order. Value range: ASC (ascending), DESC (descending)
         * @type {string || null}
         */
        this.OrderSeq = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of the returned instances. Value range: [1, 100]. Default value: 20
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderSeq = 'OrderSeq' in params ? params.OrderSeq : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeMigrateJobs request structure.
 * @class
 */
class DescribeMigrateJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data migration task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Sort by field. Value range: JobId, Status, JobName, MigrateType, RunMode, CreateTime
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sorting order. Value range: ASC (ascending), DESC (descending)
         * @type {string || null}
         */
        this.OrderSeq = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of the returned instances. Value range: [1, 100]. Default value: 20
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderSeq = 'OrderSeq' in params ? params.OrderSeq : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Describes the specific process of the sync task.
 * @class
 */
class SyncDetailInfo extends  AbstractModel {
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
         * Overall progress
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * Progress of the current step
         * @type {string || null}
         */
        this.CurrentStepProgress = null;

        /**
         * Master/slave delay in MB
         * @type {number || null}
         */
        this.MasterSlaveDistance = null;

        /**
         * Master/slave delay in seconds
         * @type {number || null}
         */
        this.SecondsBehindMaster = null;

        /**
         * Step information
         * @type {Array.<SyncStepDetailInfo> || null}
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
        this.CurrentStepProgress = 'CurrentStepProgress' in params ? params.CurrentStepProgress : null;
        this.MasterSlaveDistance = 'MasterSlaveDistance' in params ? params.MasterSlaveDistance : null;
        this.SecondsBehindMaster = 'SecondsBehindMaster' in params ? params.SecondsBehindMaster : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new SyncStepDetailInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }

    }
}

/**
 * Sync task progress
 * @class
 */
class SyncStepDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step number
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * Step name
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Whether it can be stopped
         * @type {number || null}
         */
        this.CanStop = null;

        /**
         * Step ID
         * @type {number || null}
         */
        this.StepId = null;

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
        this.CanStop = 'CanStop' in params ? params.CanStop : null;
        this.StepId = 'StepId' in params ? params.StepId : null;

    }
}

/**
 * StopMigrateJob response structure.
 * @class
 */
class StopMigrateJobResponse extends  AbstractModel {
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
 * DeleteSyncJob response structure.
 * @class
 */
class DeleteSyncJobResponse extends  AbstractModel {
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
 * CreateSyncCheckJob request structure.
 * @class
 */
class CreateSyncCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery sync task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * CompleteMigrateJob response structure.
 * @class
 */
class CompleteMigrateJobResponse extends  AbstractModel {
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
 * StartMigrateJob response structure.
 * @class
 */
class StartMigrateJobResponse extends  AbstractModel {
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
 * CreateMigrateJob response structure.
 * @class
 */
class CreateMigrateJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMigrateJob request structure.
 * @class
 */
class DeleteMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * DeleteSyncJob request structure.
 * @class
 */
class DeleteSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the disaster recovery sync task to be deleted
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * Migration task details
 * @class
 */
class MigrateJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data migration task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Migration task configuration options
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * Source instance database type: MySQL, Redis, MongoDB, PostgreSQL, MariaDB, Percona
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source instance access type. Value range: extranet (public network), cvm (CVM-created instance), dcg (Direct Connect-enabled instance), vpncloud (Tencent Cloud VPN-enabled instance), cdb (TencentDB instance), ccn (CCN instances)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source instance information, which is correlated with the migration task type
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target instance access type: MySQL, Redis, MongoDB, PostgreSQL, MariaDB, Percona
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Target instance access type, which currently only supports cdb (TencentDB instance)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Target instance information
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * Information of the source table to be migrated. If the entire instance is to be migrated, this field should be []
         * @type {string || null}
         */
        this.DatabaseInfo = null;

        /**
         * Task creation/submission time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task status. Value range: 1 (Creating), 3 (Checking), 4 (CheckPass), 5 (CheckNotPass), 7 (Running), 8 (ReadyComplete), 9 (Success), 10 (Failed), 11 (Stopping), 12 (Completing)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task details
         * @type {MigrateDetailInfo || null}
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Detail) {
            let obj = new MigrateDetailInfo();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }

    }
}

/**
 * ModifySyncJob request structure.
 * @class
 */
class ModifySyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the disaster recovery sync task to be modified
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Name of the disaster recovery sync task
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Configuration options of a disaster recovery sync task
         * @type {SyncOption || null}
         */
        this.SyncOption = null;

        /**
         * When syncing the specified table, you need to set the information of the source table to be synced, which should be described in JSON string format. Below are examples.
For databases with a database-table structure:
[{"Database":"db1","Table":["table1","table2"]},{"Database":"db2"}]
         * @type {string || null}
         */
        this.DatabaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.SyncOption) {
            let obj = new SyncOption();
            obj.deserialize(params.SyncOption)
            this.SyncOption = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * DescribeSyncCheckJob response structure.
 * @class
 */
class DescribeSyncCheckJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task check status: starting, running, finished
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Code of the task check result
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Prompt message
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * Description of a task execution step
         * @type {Array.<SyncCheckStepInfo> || null}
         */
        this.StepInfo = null;

        /**
         * Check flag. 0: checking; 1: successfully checked
         * @type {number || null}
         */
        this.CheckFlag = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new SyncCheckStepInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeSyncJobsResponse: DescribeSyncJobsResponse,
    DescribeMigrateJobsResponse: DescribeMigrateJobsResponse,
    MigrateDetailInfo: MigrateDetailInfo,
    DeleteMigrateJobResponse: DeleteMigrateJobResponse,
    CreateMigrateCheckJobRequest: CreateMigrateCheckJobRequest,
    SyncInstanceInfo: SyncInstanceInfo,
    CreateSyncJobResponse: CreateSyncJobResponse,
    DescribeMigrateCheckJobRequest: DescribeMigrateCheckJobRequest,
    StartMigrateJobRequest: StartMigrateJobRequest,
    StartSyncJobRequest: StartSyncJobRequest,
    CreateMigrateJobRequest: CreateMigrateJobRequest,
    SyncJobInfo: SyncJobInfo,
    DstInfo: DstInfo,
    ModifyMigrateJobResponse: ModifyMigrateJobResponse,
    SrcInfo: SrcInfo,
    ConsistencyParams: ConsistencyParams,
    SyncOption: SyncOption,
    MigrateOption: MigrateOption,
    CreateMigrateCheckJobResponse: CreateMigrateCheckJobResponse,
    MigrateStepDetailInfo: MigrateStepDetailInfo,
    DescribeMigrateCheckJobResponse: DescribeMigrateCheckJobResponse,
    StartSyncJobResponse: StartSyncJobResponse,
    CreateSyncCheckJobResponse: CreateSyncCheckJobResponse,
    DescribeSyncCheckJobRequest: DescribeSyncCheckJobRequest,
    StopMigrateJobRequest: StopMigrateJobRequest,
    ModifySyncJobResponse: ModifySyncJobResponse,
    ModifyMigrateJobRequest: ModifyMigrateJobRequest,
    CompleteMigrateJobRequest: CompleteMigrateJobRequest,
    SyncCheckStepInfo: SyncCheckStepInfo,
    CreateSyncJobRequest: CreateSyncJobRequest,
    DescribeSyncJobsRequest: DescribeSyncJobsRequest,
    DescribeMigrateJobsRequest: DescribeMigrateJobsRequest,
    SyncDetailInfo: SyncDetailInfo,
    SyncStepDetailInfo: SyncStepDetailInfo,
    StopMigrateJobResponse: StopMigrateJobResponse,
    DeleteSyncJobResponse: DeleteSyncJobResponse,
    CreateSyncCheckJobRequest: CreateSyncCheckJobRequest,
    CompleteMigrateJobResponse: CompleteMigrateJobResponse,
    StartMigrateJobResponse: StartMigrateJobResponse,
    CreateMigrateJobResponse: CreateMigrateJobResponse,
    DeleteMigrateJobRequest: DeleteMigrateJobRequest,
    DeleteSyncJobRequest: DeleteSyncJobRequest,
    MigrateJobInfo: MigrateJobInfo,
    ModifySyncJobRequest: ModifySyncJobRequest,
    DescribeSyncCheckJobResponse: DescribeSyncCheckJobResponse,

}
