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
 * ModifyCompareTask response structure.
 * @class
 */
class ModifyCompareTaskResponse extends  AbstractModel {
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
 * DescribeSyncJobs response structure.
 * @class
 */
class DescribeSyncJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of tasks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of task details
Note: This field may return null, indicating that no valid values can be obtained.
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
 * ModifyMigrationJob response structure.
 * @class
 */
class ModifyMigrationJobResponse extends  AbstractModel {
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
 * ModifyMigrateJobSpec request structure.
 * @class
 */
class ModifyMigrateJobSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * New instance specification. Valid values: `micro`, `small`, `medium`, `large`, `xlarge`, `2xlarge`.
         * @type {string || null}
         */
        this.NewInstanceClass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.NewInstanceClass = 'NewInstanceClass' in params ? params.NewInstanceClass : null;

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
 * Error or warning information in the current step
 * @class
 */
class StepTip extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Solution
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * Help document
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HelpDoc = null;

        /**
         * Whether the current step is skipped
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SkipInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.HelpDoc = 'HelpDoc' in params ? params.HelpDoc : null;
        this.SkipInfo = 'SkipInfo' in params ? params.SkipInfo : null;

    }
}

/**
 * DestroyMigrateJob request structure.
 * @class
 */
class DestroyMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * ResizeSyncJob response structure.
 * @class
 */
class ResizeSyncJobResponse extends  AbstractModel {
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
 * ResumeMigrateJob response structure.
 * @class
 */
class ResumeMigrateJobResponse extends  AbstractModel {
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
 * Details of inconsistent tables
 * @class
 */
class DifferenceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Db = null;

        /**
         * Table name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Table = null;

        /**
         * Chunk ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Chunk = null;

        /**
         * Source database value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SrcItem = null;

        /**
         * Target database value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DstItem = null;

        /**
         * Index name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * First index key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LowerBoundary = null;

        /**
         * Last index key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpperBoundary = null;

        /**
         * Comparison time in ms
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * Completion time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FinishedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Chunk = 'Chunk' in params ? params.Chunk : null;
        this.SrcItem = 'SrcItem' in params ? params.SrcItem : null;
        this.DstItem = 'DstItem' in params ? params.DstItem : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.LowerBoundary = 'LowerBoundary' in params ? params.LowerBoundary : null;
        this.UpperBoundary = 'UpperBoundary' in params ? params.UpperBoundary : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.FinishedAt = 'FinishedAt' in params ? params.FinishedAt : null;

    }
}

/**
 * IsolateSyncJob request structure.
 * @class
 */
class IsolateSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task ID
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
 * DescribeCheckSyncJobResult request structure.
 * @class
 */
class DescribeCheckSyncJobResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task ID
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
 * DestroySyncJob response structure.
 * @class
 */
class DestroySyncJobResponse extends  AbstractModel {
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
 * DescribeCompareReport response structure.
 * @class
 */
class DescribeCompareReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Summary information of data consistency check
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CompareAbstractInfo || null}
         */
        this.Abstract = null;

        /**
         * Data consistency check details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CompareDetailInfo || null}
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

        if (params.Abstract) {
            let obj = new CompareAbstractInfo();
            obj.deserialize(params.Abstract)
            this.Abstract = obj;
        }

        if (params.Detail) {
            let obj = new CompareDetailInfo();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateMigrateJob request structure.
 * @class
 */
class IsolateMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * The set of table objects, which is required if `TableMode` is `partial`.
 * @class
 */
class TableItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the table to be migrated
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Name of the table after migration, which is required if `TableEditMode` is `rename`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewTableName = null;

        /**
         * Temp table to be migrated, which is required if `TableEditMode` is `pt`. To sync temp tables that may be generated during migration by tools such as pt-online-schema-change, you can use this parameter to configure the temp table names.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TmpTables = null;

        /**
         * Table editing type. Valid values: `rename` (table mapping); `pt` (additional table sync).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableEditMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.NewTableName = 'NewTableName' in params ? params.NewTableName : null;
        this.TmpTables = 'TmpTables' in params ? params.TmpTables : null;
        this.TableEditMode = 'TableEditMode' in params ? params.TableEditMode : null;

    }
}

/**
 * ModifyCompareTaskName request structure.
 * @class
 */
class ModifyCompareTaskNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data consistency check task ID in the format of `dts-8yv4w2i1-cmp-37skmii9`
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * Data consistency check task name
         * @type {string || null}
         */
        this.TaskName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;

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
 * DescribeMigrateDBInstances response structure.
 * @class
 */
class DescribeMigrateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MigrateDBItem> || null}
         */
        this.Instances = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new MigrateDBItem();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Additional configuration information
 * @class
 */
class KeyValuePairOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Option key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Option value
Note: This field may return null, indicating that no valid values can be obtained.
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
 * CreateCheckSyncJob request structure.
 * @class
 */
class CreateCheckSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task ID
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
 * StopSyncJob request structure.
 * @class
 */
class StopSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task ID
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
 * DescribeMigrationDetail request structure.
 * @class
 */
class DescribeMigrationDetailRequest extends  AbstractModel {
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
 * DestroySyncJob request structure.
 * @class
 */
class DestroySyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task ID
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
 * ResizeSyncJob request structure.
 * @class
 */
class ResizeSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Task specification
         * @type {string || null}
         */
        this.NewInstanceClass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.NewInstanceClass = 'NewInstanceClass' in params ? params.NewInstanceClass : null;

    }
}

/**
 * DDL statement sync processing during data sync
 * @class
 */
class DdlOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDL type, such as database, table, view, and index.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DdlObject = null;

        /**
         * DDL value. Valid values: [Create,Drop,Alter] for database <br>[Create,Drop,Alter,Truncate,Rename] for table <br/>[Create,Drop] for view <br/>[Create,Drop] for index
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DdlValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DdlObject = 'DdlObject' in params ? params.DdlObject : null;
        this.DdlValue = 'DdlValue' in params ? params.DdlValue : null;

    }
}

/**
 * Detailed description of conflict processing
 * @class
 */
class ConflictHandleOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Conditionally overwritten column
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConditionColumn = null;

        /**
         * Conditional overwrite operation
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConditionOperator = null;

        /**
         * Conditional overwrite priority configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConditionOrderInSrcAndDst = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConditionColumn = 'ConditionColumn' in params ? params.ConditionColumn : null;
        this.ConditionOperator = 'ConditionOperator' in params ? params.ConditionOperator : null;
        this.ConditionOrderInSrcAndDst = 'ConditionOrderInSrcAndDst' in params ? params.ConditionOrderInSrcAndDst : null;

    }
}

/**
 * ResumeSyncJob response structure.
 * @class
 */
class ResumeSyncJobResponse extends  AbstractModel {
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
 * ModifyCompareTaskName response structure.
 * @class
 */
class ModifyCompareTaskNameResponse extends  AbstractModel {
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
 * CreateMigrationService request structure.
 * @class
 */
class CreateMigrationServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source database type. Valid values: `mysql`, `redis`, `percona`, `mongodb`, `postgresql`, `sqlserver`, `mariadb`.
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Target database type. Valid values: `mysql`, `redis`, `percona`, `mongodb`, `postgresql`, `sqlserver`, `mariadb`.
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Source instance region, such as `ap-guangzhou`.
         * @type {string || null}
         */
        this.SrcRegion = null;

        /**
         * Target instance region, such as `ap-guangzhou`. Note that it must be the same as the API request region.
         * @type {string || null}
         */
        this.DstRegion = null;

        /**
         * Instance specification. Valid values: `small`, `medium`, `large`, `xlarge`, `2xlarge`.
         * @type {string || null}
         */
        this.InstanceClass = null;

        /**
         * Quantity. Value range: [1,15]. Default value: `1`.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Migration task name, which can contain up to 128 characters.
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Tag information
         * @type {Array.<TagItem> || null}
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
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.SrcRegion = 'SrcRegion' in params ? params.SrcRegion : null;
        this.DstRegion = 'DstRegion' in params ? params.DstRegion : null;
        this.InstanceClass = 'InstanceClass' in params ? params.InstanceClass : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Specific check item in this check step
 * @class
 */
class DetailCheckItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Check item name, such as source database permission check.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CheckItemName = null;

        /**
         * Check item details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Check item result. Valid values: `pass` (pass); `failed` (failure); `warning` (pass with warning).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CheckResult = null;

        /**
         * The cause of the check item failure
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FailureReason = null;

        /**
         * Solution
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * Execution error log
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ErrorLog = null;

        /**
         * URL of the detailed help document
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.HelpDoc = null;

        /**
         * Prompt text for ignoring a risk
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SkipInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckItemName = 'CheckItemName' in params ? params.CheckItemName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CheckResult = 'CheckResult' in params ? params.CheckResult : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.ErrorLog = 'ErrorLog' in params ? params.ErrorLog : null;
        this.HelpDoc = 'HelpDoc' in params ? params.HelpDoc : null;
        this.SkipInfo = 'SkipInfo' in params ? params.SkipInfo : null;

    }
}

/**
 * DescribeCompareTasks request structure.
 * @class
 */
class DescribeCompareTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Number of tasks to be displayed per page. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Configuration of the data consistency check object
 * @class
 */
class CompareObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Object migration mode. Valid values: `all`, `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ObjectMode = null;

        /**
         * Migration database/table configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CompareObjectItem> || null}
         */
        this.ObjectItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ObjectMode = 'ObjectMode' in params ? params.ObjectMode : null;

        if (params.ObjectItems) {
            this.ObjectItems = new Array();
            for (let z in params.ObjectItems) {
                let obj = new CompareObjectItem();
                obj.deserialize(params.ObjectItems[z]);
                this.ObjectItems.push(obj);
            }
        }

    }
}

/**
 * Task error information
 * @class
 */
class ErrorInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Solution
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * Error log
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorLog = null;

        /**
         * Help document
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HelpDoc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.ErrorLog = 'ErrorLog' in params ? params.ErrorLog : null;
        this.HelpDoc = 'HelpDoc' in params ? params.HelpDoc : null;

    }
}

/**
 * RecoverSyncJob response structure.
 * @class
 */
class RecoverSyncJobResponse extends  AbstractModel {
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
 * Task operation information, which contains the list of all operations in the migration task as well as the list of allowed operations under the current status.
 * @class
 */
class MigrateAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of all operations in the task
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AllAction = null;

        /**
         * List of allowed operations in the task under the current status
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DeleteCompareTask response structure.
 * @class
 */
class DeleteCompareTaskResponse extends  AbstractModel {
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
 * Instance information
 * @class
 */
class DBEndpointInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instances network access type. Valid values: `extranet` (public network); `ipv6` (public IPv6); `cvm` (self-build on CVM); `dcg` (Direct Connect); `vpncloud` (VPN access); `cdb` (database); `ccn` (CCN); `intranet` (intranet); `vpc` (VPC). Note that the valid values are subject to the current link.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccessType = null;

        /**
         * Database type, such as `mysql`, `redis`, `mongodb`, `postgresql`, `mariadb`, and `percona`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DatabaseType = null;

        /**
         * Node type. Valid values: empty or `simple` (general node); `cluster` (cluster node).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Database information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DBInfo> || null}
         */
        this.Info = null;

        /**
         * Instance service provider, such as "aliyun" and "others".
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Supplier = null;

        /**
         * For MongoDB, you can define the following parameters: 	['AuthDatabase':'admin', 
'AuthFlag': "1",	'AuthMechanism':"SCRAM-SHA-1"]
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<KeyValuePairOption> || null}
         */
        this.ExtraAttr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.AccessType = 'AccessType' in params ? params.AccessType : null;
        this.DatabaseType = 'DatabaseType' in params ? params.DatabaseType : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;

        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new DBInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }
        this.Supplier = 'Supplier' in params ? params.Supplier : null;

        if (params.ExtraAttr) {
            this.ExtraAttr = new Array();
            for (let z in params.ExtraAttr) {
                let obj = new KeyValuePairOption();
                obj.deserialize(params.ExtraAttr[z]);
                this.ExtraAttr.push(obj);
            }
        }

    }
}

/**
 * Data sync options
 * @class
 */
class Options extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync initialization option. Valid values: `data` (full data initialization); `Structure` (structure initialization); `Full` (full data and structure initialization); `None` (incremental data only). Default value: `Full`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InitType = null;

        /**
         * Processing method for duplicate tables. Valid values: `ReportErrorAfterCheck`, `InitializeAfterDelete`, `ExecuteAfterIgnore`. Default value: `ReportErrorAfterCheck`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DealOfExistSameTable = null;

        /**
         * Conflict processing option. Valid values: `ReportError` (report an error); `Ignore` (ignore); `Cover` (overwrite); `ConditionCover` (conditionally overwrite). Default value: `ReportError`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConflictHandleType = null;

        /**
         * Whether to add the additional column
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AddAdditionalColumn = null;

        /**
         * DML and DDL options to be synced. Valid values: `Insert` (INSERT operations); `Update` (UPDATE operations); `Delete` (DELETE operations); `DDL` (structure sync); `PartialDDL` (custom option, which is used together with `DdlOptions`). You can also leave this parameter empty.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.OpTypes = null;

        /**
         * Detailed option for conflict processing, such as condition rows and operations in conditional overwrite.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ConflictHandleOption || null}
         */
        this.ConflictHandleOption = null;

        /**
         * DDL statements to be synced
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DdlOption> || null}
         */
        this.DdlOptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InitType = 'InitType' in params ? params.InitType : null;
        this.DealOfExistSameTable = 'DealOfExistSameTable' in params ? params.DealOfExistSameTable : null;
        this.ConflictHandleType = 'ConflictHandleType' in params ? params.ConflictHandleType : null;
        this.AddAdditionalColumn = 'AddAdditionalColumn' in params ? params.AddAdditionalColumn : null;
        this.OpTypes = 'OpTypes' in params ? params.OpTypes : null;

        if (params.ConflictHandleOption) {
            let obj = new ConflictHandleOption();
            obj.deserialize(params.ConflictHandleOption)
            this.ConflictHandleOption = obj;
        }

        if (params.DdlOptions) {
            this.DdlOptions = new Array();
            for (let z in params.DdlOptions) {
                let obj = new DdlOption();
                obj.deserialize(params.DdlOptions[z]);
                this.DdlOptions.push(obj);
            }
        }

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

        /**
         * The way to complete the task, which is supported only for legacy MySQL migration tasks. Valid values: `waitForSync` (wait for the source-replica lag to become 0 before stopping); `immediately` (complete immediately without waiting for source-replica sync). Default value: `waitForSync`.
         * @type {string || null}
         */
        this.CompleteMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompleteMode = 'CompleteMode' in params ? params.CompleteMode : null;

    }
}

/**
 * DescribeCompareTasks response structure.
 * @class
 */
class DescribeCompareTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of data consistency check tasks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CompareTaskItem> || null}
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
                let obj = new CompareTaskItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopCompare request structure.
 * @class
 */
class StopCompareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data consistency check task ID in the format of `dts-8yv4w2i1-cmp-37skmii9`
         * @type {string || null}
         */
        this.CompareTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;

    }
}

/**
 * DescribeCheckSyncJobResult response structure.
 * @class
 */
class DescribeCheckSyncJobResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Check result
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Total number of steps
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepCount = null;

        /**
         * The current step
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepCur = null;

        /**
         * Overall progress
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Step information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<StepInfo> || null}
         */
        this.StepInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.StepCount = 'StepCount' in params ? params.StepCount : null;
        this.StepCur = 'StepCur' in params ? params.StepCur : null;
        this.Progress = 'Progress' in params ? params.Progress : null;

        if (params.StepInfos) {
            this.StepInfos = new Array();
            for (let z in params.StepInfos) {
                let obj = new StepInfo();
                obj.deserialize(params.StepInfos[z]);
                this.StepInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopSyncJob response structure.
 * @class
 */
class StopSyncJobResponse extends  AbstractModel {
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
 * Details of skipped tables
 * @class
 */
class SkippedDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of skipped tables
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of skipped tables
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SkippedItem> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SkippedItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * Migration options, which describe how the task performs migration.
 * @class
 */
class MigrateOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration object options, which tell DTS which database/table objects should be migrated.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DatabaseTableObject || null}
         */
        this.DatabaseTable = null;

        /**
         * Migration type. Valid values: `full`, `structure`, `fullAndIncrement`. Default value: `fullAndIncrement`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MigrateType = null;

        /**
         * Data consistency check option. Data consistency check is disabled by default.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ConsistencyOption || null}
         */
        this.Consistency = null;

        /**
         * Whether to migrate accounts. Valid values: `yes`, `no`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsMigrateAccount = null;

        /**
         * Whether to use the `Root` account in the source database to overwrite that in the target database. Valid values: `false`, `true`. For database/table or structural migration, you should specify `false`. Note that this parameter takes effect only for OldDTS.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsOverrideRoot = null;

        /**
         * Whether to set the target database to read-only during migration, which takes effect only for MySQL databases. Valid values: `true`, `false`. Default value: `false`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsDstReadOnly = null;

        /**
         * Additional information. You can set additional parameters for certain database types. For Redis, you can define the following parameters: 
["ClientOutputBufferHardLimit":512, 	Hard limit of the replica buffer zone capacity in MB	"ClientOutputBufferSoftLimit":512, 	Soft limit of the replica buffer zone capacity in MB	"ClientOutputBufferPersistTime":60, Soft limit duration of the replica buffer zone in seconds	"ReplBacklogSize":512, 	Limit of the circular buffer zone capacity in MB	"ReplTimeout":120, 		Replication timeout period in seconds]
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<KeyValuePairOption> || null}
         */
        this.ExtraAttr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DatabaseTable) {
            let obj = new DatabaseTableObject();
            obj.deserialize(params.DatabaseTable)
            this.DatabaseTable = obj;
        }
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;

        if (params.Consistency) {
            let obj = new ConsistencyOption();
            obj.deserialize(params.Consistency)
            this.Consistency = obj;
        }
        this.IsMigrateAccount = 'IsMigrateAccount' in params ? params.IsMigrateAccount : null;
        this.IsOverrideRoot = 'IsOverrideRoot' in params ? params.IsOverrideRoot : null;
        this.IsDstReadOnly = 'IsDstReadOnly' in params ? params.IsDstReadOnly : null;

        if (params.ExtraAttr) {
            this.ExtraAttr = new Array();
            for (let z in params.ExtraAttr) {
                let obj = new KeyValuePairOption();
                obj.deserialize(params.ExtraAttr[z]);
                this.ExtraAttr.push(obj);
            }
        }

    }
}

/**
 * ModifyMigrateName response structure.
 * @class
 */
class ModifyMigrateNameResponse extends  AbstractModel {
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
 * DescribeMigrationJobs response structure.
 * @class
 */
class DescribeMigrationJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of migration tasks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Migration task list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<JobItem> || null}
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
                let obj = new JobItem();
                obj.deserialize(params.JobList[z]);
                this.JobList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of skipped tables
 * @class
 */
class SkippedItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Db = null;

        /**
         * Table name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Table = null;

        /**
         * The cause why check is not initiated
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * DestroyMigrateJob response structure.
 * @class
 */
class DestroyMigrateJobResponse extends  AbstractModel {
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
 * Task step information
 * @class
 */
class ProcessProgress extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step status. Valid values: `notStarted`, `running`, `success`, `failed`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Progress information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Total number of steps
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * Current step
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * The prompt output in the current step
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Step information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<StepDetailInfo> || null}
         */
        this.Steps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.StepAll = 'StepAll' in params ? params.StepAll : null;
        this.StepNow = 'StepNow' in params ? params.StepNow : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Steps) {
            this.Steps = new Array();
            for (let z in params.Steps) {
                let obj = new StepDetailInfo();
                obj.deserialize(params.Steps[z]);
                this.Steps.push(obj);
            }
        }

    }
}

/**
 * IsolateSyncJob response structure.
 * @class
 */
class IsolateSyncJobResponse extends  AbstractModel {
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
 * DescribeMigrationJobs request structure.
 * @class
 */
class DescribeMigrationJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID such as `dts-amm1jw5q`
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data migration task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Data migration task status. Valid values: `created`, `checking`, `checkPass`, `checkNotPass`, `readyRun`, `running`, `readyComplete`, `success`, `failed`, `stopping`, `completing`.
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * Source instance ID in the format of `cdb-c1nl9rpv`
         * @type {string || null}
         */
        this.SrcInstanceId = null;

        /**
         * Source instance region, such as `ap-guangzhou`.
         * @type {string || null}
         */
        this.SrcRegion = null;

        /**
         * Source database type, such as `sqlserver`, `mysql`, `mongodb`, `redis`, `tendis`, `keewidb`, `clickhouse`, `cynosdbmysql`, `percona`, `tdsqlpercona`, `mariadb`, `tdsqlmysql`, `postgresql.
         * @type {Array.<string> || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source instance access type. Valid values: `extranet` (public network); `vpncloud` (VPN access); `dcg` (Direct Connect); `ccn` (CCN); `cdb` (Database); `cvm` (self-build on CVM).
         * @type {Array.<string> || null}
         */
        this.SrcAccessType = null;

        /**
         * Target instance ID in the format of `cdb-c1nl9rpv`
         * @type {string || null}
         */
        this.DstInstanceId = null;

        /**
         * Target instance region, such as `ap-guangzhou`.
         * @type {string || null}
         */
        this.DstRegion = null;

        /**
         * Target database type, such as `sqlserver`, `mysql`, `mongodb`, `redis`, `tendis`, `keewidb`, `clickhouse`, `cynosdbmysql`, `percona`, `tdsqlpercona`, `mariadb`, `tdsqlmysql`, `postgresql.
         * @type {Array.<string> || null}
         */
        this.DstDatabaseType = null;

        /**
         * Target instance access type. Valid values: `extranet` (public network); `vpncloud` (VPN access); `dcg` (Direct Connect); `ccn` (CCN); `cdb` (Database); `cvm` (self-build on CVM).
         * @type {Array.<string> || null}
         */
        this.DstAccessType = null;

        /**
         * Task running mode. Valid values: `immediate`, `timed`.
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * Sorting order. Valid values: `asc`, `desc`. Default value: `desc` by creation time.
         * @type {string || null}
         */
        this.OrderSeq = null;

        /**
         * Number of instances to be returned. Value range: [1,100]. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Tag filter
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.SrcInstanceId = 'SrcInstanceId' in params ? params.SrcInstanceId : null;
        this.SrcRegion = 'SrcRegion' in params ? params.SrcRegion : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;
        this.DstInstanceId = 'DstInstanceId' in params ? params.DstInstanceId : null;
        this.DstRegion = 'DstRegion' in params ? params.DstRegion : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.OrderSeq = 'OrderSeq' in params ? params.OrderSeq : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * Data consistency check result
 * @class
 */
class CompareTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data consistency check task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * Data consistency check result. Valid values: `unstart` (the task is not started); `running` (the task is running); `canceled` (the task is stopped); `failed` (the task failed); `inconsistent` (the data is inconsistent); `consistent` (the data is consistent); `notexist` (the task does not exist).
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
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateMigrationService response structure.
 * @class
 */
class CreateMigrationServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of migration task IDs randomly generated in the format of `dts-c1f6rs21` after a successful order placement
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Sync task ID
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
 * DescribeMigrationCheckJob response structure.
 * @class
 */
class DescribeMigrationCheckJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Check task execution status. Valid values: `notStarted`, `running`, `failed`, `success`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Check task result message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BriefMsg = null;

        /**
         * Check step
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CheckStep> || null}
         */
        this.StepInfo = null;

        /**
         * Check result. Valid values: `checkPass`, `checkNotPass`.
         * @type {string || null}
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
        this.BriefMsg = 'BriefMsg' in params ? params.BriefMsg : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new CheckStep();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database/Table objects for data consistency check
 * @class
 */
class CompareObjectItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The database to be migrated
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Database selection mode. Valid values: `all`, `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * The schema to be migrated
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * Schema selection mode. Valid values: `all`, `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableMode = null;

        /**
         * Table configuration for data consistency check, which is required if `TableMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CompareTableItem> || null}
         */
        this.Tables = null;

        /**
         * View selection mode. Valid values: `all`, `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ViewMode = null;

        /**
         * View configuration for data consistency check, which is required if `ViewMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CompareViewItem> || null}
         */
        this.Views = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.TableMode = 'TableMode' in params ? params.TableMode : null;

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new CompareTableItem();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }
        this.ViewMode = 'ViewMode' in params ? params.ViewMode : null;

        if (params.Views) {
            this.Views = new Array();
            for (let z in params.Views) {
                let obj = new CompareViewItem();
                obj.deserialize(params.Views[z]);
                this.Views.push(obj);
            }
        }

    }
}

/**
 * Information of the source and target databases in data sync
 * @class
 */
class Endpoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name, such as `ap-guangzhou`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Database kernel type, which is used to distinguish between different kernels in TDSQL. Valid values: `percona`, `mariadb`, `mysql`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbKernel = null;

        /**
         * Database instance ID in the format of `cdb-powiqx8q`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance IP address, which is required if the access type is not `cdb`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Instance port, which is required if the access type is not `cdb`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Username, which is required for an instance authenticated by username and password.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Password, which is required for an instance authenticated by username and password.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Database name, which is required if the database type is `cdwpg`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * VPC ID in the format of `vpc-92jblxto`, which is required if the access type is `vpc`, `dcg`, or `vpncloud`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the subnet in the VPC in the format of `subnet-3paxmkdz`, which is required if the access type is `vpc`, `dcg`, or `vpncloud`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Short CVM instance ID in the format of `ins-olgl39y8`, which is required if the access type is `cvm`. It is the same as the instance ID displayed in the CVM console.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CvmInstanceId = null;

        /**
         * Direct Connect gateway ID in the format of `dcg-0rxtqqxb`, which is required if the access type is `dcg`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqDcgId = null;

        /**
         * VPN gateway ID in the format of `vpngw-9ghexg7q`, which is required if the access type is `vpncloud`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqVpnGwId = null;

        /**
         * CCN instance ID in the format of `ccn-afp6kltc`, which is required if the access type is `ccn`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * Cloud vendor type. For Alibaba Cloud ApsaraDB for RDS instances, enter `aliyun`; otherwise, enter `others`. Default value: `others`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Supplier = null;

        /**
         * Database version in the format of `5.6` or `5.7`, which takes effect only if the instance is an RDS instance. Default value: `5.6`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * The account to which the resource belongs. Valid values: empty or `self` (the current account); `other` (another account).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountMode = null;

        /**
         * Instance account, which is required if the operation is performed across accounts.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Account = null;

        /**
         * The role used for cross-account sync, which can contain [a-zA-Z0-9\-\_]+ and is required if the operation is performed across accounts.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountRole = null;

        /**
         * ID of the temporary key, which is required if the operation is performed across accounts.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * Key of the temporary key, which is required if the operation is performed across accounts.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * Temporary token, which is required if the operation is performed across accounts.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TmpToken = null;

        /**
         * External role ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoleExternalId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.DbKernel = 'DbKernel' in params ? params.DbKernel : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.CvmInstanceId = 'CvmInstanceId' in params ? params.CvmInstanceId : null;
        this.UniqDcgId = 'UniqDcgId' in params ? params.UniqDcgId : null;
        this.UniqVpnGwId = 'UniqVpnGwId' in params ? params.UniqVpnGwId : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.Supplier = 'Supplier' in params ? params.Supplier : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.AccountMode = 'AccountMode' in params ? params.AccountMode : null;
        this.Account = 'Account' in params ? params.Account : null;
        this.AccountRole = 'AccountRole' in params ? params.AccountRole : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.TmpToken = 'TmpToken' in params ? params.TmpToken : null;
        this.RoleExternalId = 'RoleExternalId' in params ? params.RoleExternalId : null;

    }
}

/**
 * Details of inconsistent tables
 * @class
 */
class DifferenceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of inconsistent tables
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of inconsistent tables
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DifferenceItem> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new DifferenceItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * CreateCheckSyncJob response structure.
 * @class
 */
class CreateCheckSyncJobResponse extends  AbstractModel {
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
 * Database information
 * @class
 */
class DBInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node role in a distributed database, such as the mongos node in MongoDB.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Kernel version, such as the different kernel versions of MariaDB.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbKernel = null;

        /**
         * Instance IP address, which is required for the following access types: public network, Direct Connect, VPN, CCN, intranet, and VPC.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Instance port, which is required for the following access types: public network, self-build on CVM, Direct Connect, VPN, CCN, intranet, and VPC.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Instance username
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Instance password
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Short CVM instance ID in the format of `ins-olgl39y8`, which is required if the access type is `cvm`. It is the same as the instance ID displayed in the CVM console.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CvmInstanceId = null;

        /**
         * VPN gateway ID in the format of `vpngw-9ghexg7q`, which is required if the access type is `vpncloud`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqVpnGwId = null;

        /**
         * Direct Connect gateway ID in the format of `dcg-0rxtqqxb`, which is required if the access type is `dcg`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqDcgId = null;

        /**
         * Database instance ID in the format of `cdb-powiqx8q`, which is required if the access type is `cdb`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * CCN instance ID such as `ccn-afp6kltc`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CcnGwId = null;

        /**
         * VPC ID in the format of `vpc-92jblxto`, which is required if the access type is `vpc`, `vpncloud`, `ccn`, or `dcg`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the subnet in the VPC in the format of `subnet-3paxmkdz`, which is required if the access type is `vpc`, `vpncloud`, `ccn`, or `dcg`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Database version in the format of `5.6` or `5.7`, which takes effect only if the instance is an RDS instance. Default value: `5.6`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Instance account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Account = null;

        /**
         * The role used for cross-account migration, which can contain [a-zA-Z0-9\-\_]+.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountRole = null;

        /**
         * The account to which the resource belongs. Valid values: empty or `self` (the current account); `other` (another account).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountMode = null;

        /**
         * ID of the temporary key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * Key of the temporary key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * Temporary token
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TmpToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.DbKernel = 'DbKernel' in params ? params.DbKernel : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.CvmInstanceId = 'CvmInstanceId' in params ? params.CvmInstanceId : null;
        this.UniqVpnGwId = 'UniqVpnGwId' in params ? params.UniqVpnGwId : null;
        this.UniqDcgId = 'UniqDcgId' in params ? params.UniqDcgId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CcnGwId = 'CcnGwId' in params ? params.CcnGwId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Account = 'Account' in params ? params.Account : null;
        this.AccountRole = 'AccountRole' in params ? params.AccountRole : null;
        this.AccountMode = 'AccountMode' in params ? params.AccountMode : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.TmpToken = 'TmpToken' in params ? params.TmpToken : null;

    }
}

/**
 * ConfigureSyncJob request structure.
 * @class
 */
class ConfigureSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task instance ID in the format of `sync-werwfs23`, which is used to identify a sync task.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Source database access type. Valid values: `cdb` (database); `cvm` (self-build on CVM); `vpc` (VPC); `extranet` (public network); `vpncloud` (VPN access); `dcg` (Direct Connect); `ccn` (CCN); `intranet` (intranet); `noProxy`. Note that the valid values are subject to the current link.
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source database information
         * @type {Endpoint || null}
         */
        this.SrcInfo = null;

        /**
         * Target database access type. Valid values: `cdb` (database); `cvm` (self-build on CVM); `vpc` (VPC); `extranet` (public network); `vpncloud` (VPN access); `dcg` (Direct Connect); `ccn` (CCN); `intranet` (intranet); `noProxy`. Note that the valid values are subject to the current link.
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Target database information
         * @type {Endpoint || null}
         */
        this.DstInfo = null;

        /**
         * Sync task options
         * @type {Options || null}
         */
        this.Options = null;

        /**
         * Information of synced database/table objects
         * @type {Objects || null}
         */
        this.Objects = null;

        /**
         * Sync task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Running mode. Valid values: `Immediate`, `Timed`. Default value: `Immediate`.
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * Expected start time in the format of "2006-01-02 15:04:05", which is required if `RunMode` is `Timed`.
         * @type {string || null}
         */
        this.ExpectRunTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new Endpoint();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new Endpoint();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

        if (params.Options) {
            let obj = new Options();
            obj.deserialize(params.Options)
            this.Options = obj;
        }

        if (params.Objects) {
            let obj = new Objects();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectRunTime = 'ExpectRunTime' in params ? params.ExpectRunTime : null;

    }
}

/**
 * Object in the migration task instance list
 * @class
 */
class MigrateDBItem extends  AbstractModel {
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
         * Instance VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Instance Vport
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Whether the instance can be migrated. Valid values: `1 (yes); `0` (no).
         * @type {number || null}
         */
        this.Usable = null;

        /**
         * The cause why the instance cannot be migrated
         * @type {string || null}
         */
        this.Hint = null;

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
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Usable = 'Usable' in params ? params.Usable : null;
        this.Hint = 'Hint' in params ? params.Hint : null;

    }
}

/**
 * DescribeMigrateDBInstances request structure.
 * @class
 */
class DescribeMigrateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database type, such as `mysql`.
         * @type {string || null}
         */
        this.DatabaseType = null;

        /**
         * Specifies whether the instance is the migration source or target. Valid values: `src` (source); `dts` (target).
         * @type {string || null}
         */
        this.MigrateRole = null;

        /**
         * Database instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Number of results to be returned
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The account to which the resource belongs. Valid values: empty or `self` (the current account); `other` (another account).
         * @type {string || null}
         */
        this.AccountMode = null;

        /**
         * ID of the temporary key, which is required if the operation is performed across accounts.
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * Key of the temporary key, which is required if the operation is performed across accounts.
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * Temporary token, which is required if the operation is performed across accounts.
         * @type {string || null}
         */
        this.TmpToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseType = 'DatabaseType' in params ? params.DatabaseType : null;
        this.MigrateRole = 'MigrateRole' in params ? params.MigrateRole : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.AccountMode = 'AccountMode' in params ? params.AccountMode : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.TmpToken = 'TmpToken' in params ? params.TmpToken : null;

    }
}

/**
 * Check task running details
 * @class
 */
class CheckStepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task start time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * Task end time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndAt = null;

        /**
         * Task step information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ProcessProgress || null}
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
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.EndAt = 'EndAt' in params ? params.EndAt : null;

        if (params.Progress) {
            let obj = new ProcessProgress();
            obj.deserialize(params.Progress)
            this.Progress = obj;
        }

    }
}

/**
 * Object of the error or warning information
 * @class
 */
class ProcessStepTip extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prompt message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Solution
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * Help document
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HelpDoc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.HelpDoc = 'HelpDoc' in params ? params.HelpDoc : null;

    }
}

/**
 * ModifyCompareTask request structure.
 * @class
 */
class ModifyCompareTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data consistency check task ID in the format of `dts-8yv4w2i1-cmp-37skmii9`
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Data comparison object mode. Valid values: `sameAsMigrate` (all migration objects); `custom` (custom mode). Default value: `sameAsMigrate`.
         * @type {string || null}
         */
        this.ObjectMode = null;

        /**
         * Compared object, which is required if `CompareObjectMode` is `custom`.
         * @type {CompareObject || null}
         */
        this.Objects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ObjectMode = 'ObjectMode' in params ? params.ObjectMode : null;

        if (params.Objects) {
            let obj = new CompareObject();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }

    }
}

/**
 * RecoverSyncJob request structure.
 * @class
 */
class RecoverSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task instance ID in the format of `sync-werwfs23`, which is used to identify a sync task.
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
 * The database/table objects to be synced
 * @class
 */
class Database extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the database to be migrated or synced, which is required if `ObjectMode` is `Partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Name of the database after migration or sync, which is the same as the source database name by default.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewDbName = null;

        /**
         * Database selection mode, which is required if `Mode` is `Partial`. Valid values: `All`, `Partial`. Note that the sync of advanced objects does not depend on this parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * The schema to be migrated or synced
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * Name of the schema after migration or sync
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewSchemaName = null;

        /**
         * Table selection mode, which is required if `DBMode` is `Partial`. Valid values: `All`, `Partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableMode = null;

        /**
         * The set of table objects, which is required if `TableMode` is `Partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Table> || null}
         */
        this.Tables = null;

        /**
         * View selection mode. Valid values: `All`, `Partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ViewMode = null;

        /**
         * The set of view objects, which is required if `ViewMode` is `Partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<View> || null}
         */
        this.Views = null;

        /**
         * Sync mode. Valid values: `Partial`, `All`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FunctionMode = null;

        /**
         * This parameter is required if `FunctionMode` is `Partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Functions = null;

        /**
         * Sync mode. Valid values: `Partial`, `All`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProcedureMode = null;

        /**
         * This parameter is required if `ProcedureMode` is `Partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Procedures = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.NewDbName = 'NewDbName' in params ? params.NewDbName : null;
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.NewSchemaName = 'NewSchemaName' in params ? params.NewSchemaName : null;
        this.TableMode = 'TableMode' in params ? params.TableMode : null;

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new Table();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }
        this.ViewMode = 'ViewMode' in params ? params.ViewMode : null;

        if (params.Views) {
            this.Views = new Array();
            for (let z in params.Views) {
                let obj = new View();
                obj.deserialize(params.Views[z]);
                this.Views.push(obj);
            }
        }
        this.FunctionMode = 'FunctionMode' in params ? params.FunctionMode : null;
        this.Functions = 'Functions' in params ? params.Functions : null;
        this.ProcedureMode = 'ProcedureMode' in params ? params.ProcedureMode : null;
        this.Procedures = 'Procedures' in params ? params.Procedures : null;

    }
}

/**
 * ModifyMigrationJob request structure.
 * @class
 */
class ModifyMigrationJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Running mode. Valid values: `immediate`, `timed`.
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * Migration task configuration options, which describe how the task performs migration.
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * Source instance information
         * @type {DBEndpointInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target instance information
         * @type {DBEndpointInfo || null}
         */
        this.DstInfo = null;

        /**
         * Migration task name, which can contain up to 128 characters.
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Expected start time in the format of "2006-01-02 15:04:05", which is required if `RunMode` is `timed`.
         * @type {string || null}
         */
        this.ExpectRunTime = null;

        /**
         * Tag information
         * @type {Array.<TagItem> || null}
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }

        if (params.SrcInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.ExpectRunTime = 'ExpectRunTime' in params ? params.ExpectRunTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
         * Sync task ID, such as `sync-werwfs23`.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Sync task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Sort by field, such as `CreateTime`.
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sorting order. Valid values: `ASC`, `DESC`. Default value: `DESC` by `CreateTime`.
         * @type {string || null}
         */
        this.OrderSeq = null;

        /**
         * Offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of sync task instances to be returned. Value range: [1,100]. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The set of status values, such as `Initialized,CheckPass,Running,ResumableErr,Stopped`.
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * Running mode. Valid values: `Immediate`, `Timed`.
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * Task type, such as `mysql2mysql` (sync from MySQL to MySQL).
         * @type {string || null}
         */
        this.JobType = null;

        /**
         * Billing mode. Valid values: `PrePay` (prepaid); `PostPay` (postpaid).
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * tag
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.JobType = 'JobType' in params ? params.JobType : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * Step information of the sync task
 * @class
 */
class SyncDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of steps
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * Current step
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * Overall progress
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Progress of the current step
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CurrentStepProgress = null;

        /**
         * Data volume difference between the sync source and target
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MasterSlaveDistance = null;

        /**
         * Time difference between the sync source and target
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SecondsBehindMaster = null;

        /**
         * Overall description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Step details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<StepInfo> || null}
         */
        this.StepInfos = null;

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
        this.Message = 'Message' in params ? params.Message : null;

        if (params.StepInfos) {
            this.StepInfos = new Array();
            for (let z in params.StepInfos) {
                let obj = new StepInfo();
                obj.deserialize(params.StepInfos[z]);
                this.StepInfos.push(obj);
            }
        }

    }
}

/**
 * ResumeSyncJob request structure.
 * @class
 */
class ResumeSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task ID
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
 * Table configuration for data consistency check
 * @class
 */
class CompareTableItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table name
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.TableName = 'TableName' in params ? params.TableName : null;

    }
}

/**
 * ConfigureSyncJob response structure.
 * @class
 */
class ConfigureSyncJobResponse extends  AbstractModel {
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
 * View configuration for data consistency check
 * @class
 */
class CompareViewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * View name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ViewName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ViewName = 'ViewName' in params ? params.ViewName : null;

    }
}

/**
 * Step details
 * @class
 */
class StepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * Step name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Step ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StepId = null;

        /**
         * Current status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Step start time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<StepTip> || null}
         */
        this.Errors = null;

        /**
         * Warning message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<StepTip> || null}
         */
        this.Warnings = null;

        /**
         * Progress of the current step
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.StepNo = 'StepNo' in params ? params.StepNo : null;
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.StepId = 'StepId' in params ? params.StepId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

        if (params.Errors) {
            this.Errors = new Array();
            for (let z in params.Errors) {
                let obj = new StepTip();
                obj.deserialize(params.Errors[z]);
                this.Errors.push(obj);
            }
        }

        if (params.Warnings) {
            this.Warnings = new Array();
            for (let z in params.Warnings) {
                let obj = new StepTip();
                obj.deserialize(params.Warnings[z]);
                this.Warnings.push(obj);
            }
        }
        this.Progress = 'Progress' in params ? params.Progress : null;

    }
}

/**
 * ResumeMigrateJob request structure.
 * @class
 */
class ResumeMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Task resumption mode. Valid values: `clearData` (clear the target instance data); `overwrite` (execute the task in overwrite mode); `normal` (follow the normal process without performing additional operations).
         * @type {string || null}
         */
        this.ResumeOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ResumeOption = 'ResumeOption' in params ? params.ResumeOption : null;

    }
}

/**
 * Billing status information
 * @class
 */
class TradeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * Last order number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastDealName = null;

        /**
         * Instance specification. Valid values: `micro`, `small`, `medium`, `large`, `xlarge`, `2xlarge`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceClass = null;

        /**
         * Task billing status. Valid values: `normal` (billed or to be billed); `resizing` (adjusting configuration); `reversing` (topping up, which is a short status); `isolating` (isolating, which is a short status); `isolated` (isolated); `offlining` (deleting); `offlined` (deleted); `notBilled` (not billed).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TradeStatus = null;

        /**
         * Expiration time in the format of "yyyy-mm-dd hh:mm:ss"
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Deletion time in the format of "yyyy-mm-dd hh:mm:ss"
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * Isolation time in the format of "yyyy-mm-dd hh:mm:ss"
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * The cause of deletion
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OfflineReason = null;

        /**
         * The cause of isolation
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsolateReason = null;

        /**
         * Billing mode. Valid values: `postpay` (postpaid); `prepay` (prepaid).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * Task billing type. Valid values: `billing` (billed); `notBilling` (free); `promotions` (in promotion).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillingType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.LastDealName = 'LastDealName' in params ? params.LastDealName : null;
        this.InstanceClass = 'InstanceClass' in params ? params.InstanceClass : null;
        this.TradeStatus = 'TradeStatus' in params ? params.TradeStatus : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.OfflineReason = 'OfflineReason' in params ? params.OfflineReason : null;
        this.IsolateReason = 'IsolateReason' in params ? params.IsolateReason : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.BillingType = 'BillingType' in params ? params.BillingType : null;

    }
}

/**
 * StartCompare response structure.
 * @class
 */
class StartCompareResponse extends  AbstractModel {
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
 * CreateCompareTask response structure.
 * @class
 */
class CreateCompareTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data consistency check task ID in the format of `dts-8yv4w2i1-cmp-37skmii9`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopCompare response structure.
 * @class
 */
class StopCompareResponse extends  AbstractModel {
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
 * Summary information of data consistency check
 * @class
 */
class CompareAbstractInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Comparison conclusion. Valid values: `same`, `different`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Conclusion = null;

        /**
         * Task status. Valid values: `success`, `failed`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Total number of tables
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalTables = null;

        /**
         * Number of checked tables
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CheckedTables = null;

        /**
         * Number of inconsistent tables
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DifferentTables = null;

        /**
         * Number of skipped tables
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SkippedTables = null;

        /**
         * Number of inconsistent data rows
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DifferentRows = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Conclusion = 'Conclusion' in params ? params.Conclusion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TotalTables = 'TotalTables' in params ? params.TotalTables : null;
        this.CheckedTables = 'CheckedTables' in params ? params.CheckedTables : null;
        this.DifferentTables = 'DifferentTables' in params ? params.DifferentTables : null;
        this.SkippedTables = 'SkippedTables' in params ? params.SkippedTables : null;
        this.DifferentRows = 'DifferentRows' in params ? params.DifferentRows : null;

    }
}

/**
 * Check step
 * @class
 */
class CheckStep extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * Step ID such as `ConnectDBCheck`, `VersionCheck`, and `SrcPrivilegeCheck`. The specific check items are subject to source and target instances.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StepId = null;

        /**
         * Step name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Result of this check step. Valid values: `pass`, `failed`, `notStarted`, `blocked`, `warning`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StepStatus = null;

        /**
         * Error message in this check step
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StepMessage = null;

        /**
         * Specific check item in this check step
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DetailCheckItem> || null}
         */
        this.DetailCheckItems = null;

        /**
         * Whether this step was skipped
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.HasSkipped = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepNo = 'StepNo' in params ? params.StepNo : null;
        this.StepId = 'StepId' in params ? params.StepId : null;
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.StepStatus = 'StepStatus' in params ? params.StepStatus : null;
        this.StepMessage = 'StepMessage' in params ? params.StepMessage : null;

        if (params.DetailCheckItems) {
            this.DetailCheckItems = new Array();
            for (let z in params.DetailCheckItems) {
                let obj = new DetailCheckItem();
                obj.deserialize(params.DetailCheckItems[z]);
                this.DetailCheckItems.push(obj);
            }
        }
        this.HasSkipped = 'HasSkipped' in params ? params.HasSkipped : null;

    }
}

/**
 * Information of the data consistency check object
 * @class
 */
class CompareTaskItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data consistency check task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * Data consistency check task name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Data consistency check task status. Valid values: `created`, `readyRun`, `running`, `success`, `stopping`, `failed`, `canceled`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Data consistency check task configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CompareObject || null}
         */
        this.Config = null;

        /**
         * Check details of the data consistency check task
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ProcessProgress || null}
         */
        this.CheckProcess = null;

        /**
         * Running details of the data consistency check task
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ProcessProgress || null}
         */
        this.CompareProcess = null;

        /**
         * Comparison result. Valid values: `same`, `different`, `skipAll`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Conclusion = null;

        /**
         * Task creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Task start time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartedAt = null;

        /**
         * Comparison end time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FinishedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Config) {
            let obj = new CompareObject();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.CheckProcess) {
            let obj = new ProcessProgress();
            obj.deserialize(params.CheckProcess)
            this.CheckProcess = obj;
        }

        if (params.CompareProcess) {
            let obj = new ProcessProgress();
            obj.deserialize(params.CompareProcess)
            this.CompareProcess = obj;
        }
        this.Conclusion = 'Conclusion' in params ? params.Conclusion : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.StartedAt = 'StartedAt' in params ? params.StartedAt : null;
        this.FinishedAt = 'FinishedAt' in params ? params.FinishedAt : null;

    }
}

/**
 * ModifyMigrateJobSpec response structure.
 * @class
 */
class ModifyMigrateJobSpecResponse extends  AbstractModel {
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
 * CreateSyncJob response structure.
 * @class
 */
class CreateSyncJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task IDs
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCompareTask request structure.
 * @class
 */
class CreateCompareTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data consistency check task name. If this parameter is left empty, the value of `CompareTaskId` will be assigned to it.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Data comparison object mode. Valid values: `sameAsMigrate` (all migration objects); `custom` (custom mode). Default value: `sameAsMigrate`.
         * @type {string || null}
         */
        this.ObjectMode = null;

        /**
         * Configuration of the data consistency check object
         * @type {CompareObject || null}
         */
        this.Objects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ObjectMode = 'ObjectMode' in params ? params.ObjectMode : null;

        if (params.Objects) {
            let obj = new CompareObject();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }

    }
}

/**
 * StartCompare request structure.
 * @class
 */
class StartCompareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data consistency check task ID in the format of `dts-8yv4w2i1-cmp-37skmii9`
         * @type {string || null}
         */
        this.CompareTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;

    }
}

/**
 * DescribeMigrationCheckJob request structure.
 * @class
 */
class DescribeMigrationCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * DescribeMigrationDetail response structure.
 * @class
 */
class DescribeMigrationDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data migration task name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Task creation (submission) time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task update time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Task start time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Migration task error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BriefMsg = null;

        /**
         * Task status. Valid values: `created`, `checking`, `checkPass`, `checkNotPass`, `readyRun`, `running`, `readyComplete`, `success`, `failed`, `stopping`, `completing`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task operation information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MigrateAction || null}
         */
        this.Action = null;

        /**
         * Information of the migration task execution process. The check and migration step information will be displayed in the check and migration stages respectively.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MigrateDetailInfo || null}
         */
        this.StepInfo = null;

        /**
         * Source instance information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DBEndpointInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target database information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DBEndpointInfo || null}
         */
        this.DstInfo = null;

        /**
         * Data consistency check result
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CompareTaskInfo || null}
         */
        this.CompareTask = null;

        /**
         * Tag information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagItem> || null}
         */
        this.Tags = null;

        /**
         * Running mode. Valid values: `immediate`, `timed`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * Expected start time in the format of "2006-01-02 15:04:05", which is required if `RunMode` is `timed`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpectRunTime = null;

        /**
         * Migration options, which describe how the task performs migration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * Check task running details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CheckStepInfo || null}
         */
        this.CheckStepInfo = null;

        /**
         * Billing information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TradeInfo || null}
         */
        this.TradeInfo = null;

        /**
         * Task error information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ErrorInfoItem> || null}
         */
        this.ErrorInfo = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BriefMsg = 'BriefMsg' in params ? params.BriefMsg : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Action) {
            let obj = new MigrateAction();
            obj.deserialize(params.Action)
            this.Action = obj;
        }

        if (params.StepInfo) {
            let obj = new MigrateDetailInfo();
            obj.deserialize(params.StepInfo)
            this.StepInfo = obj;
        }

        if (params.SrcInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

        if (params.CompareTask) {
            let obj = new CompareTaskInfo();
            obj.deserialize(params.CompareTask)
            this.CompareTask = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectRunTime = 'ExpectRunTime' in params ? params.ExpectRunTime : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }

        if (params.CheckStepInfo) {
            let obj = new CheckStepInfo();
            obj.deserialize(params.CheckStepInfo)
            this.CheckStepInfo = obj;
        }

        if (params.TradeInfo) {
            let obj = new TradeInfo();
            obj.deserialize(params.TradeInfo)
            this.TradeInfo = obj;
        }

        if (params.ErrorInfo) {
            this.ErrorInfo = new Array();
            for (let z in params.ErrorInfo) {
                let obj = new ErrorInfoItem();
                obj.deserialize(params.ErrorInfo[z]);
                this.ErrorInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMigrateName request structure.
 * @class
 */
class ModifyMigrateNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * New migration task name
         * @type {string || null}
         */
        this.JobName = null;

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

    }
}

/**
 * Migration task list
 * @class
 */
class JobItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data migration task name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Task creation (submission) time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task update time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Task start time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Migration task error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BriefMsg = null;

        /**
         * Task status. Valid values: `creating`, `created`, `checking`, `checkPass`, `checkNotPass`, `readyRun`, `running`, `readyComplete`, `success`, `failed`, `stopping`, `completing`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task running mode. Valid values: `immediate`, `timed`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * Expected start time in the format of "2022-07-11 16:20:49", which is required if `RunMode` is `timed`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpectRunTime = null;

        /**
         * Task operation information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MigrateAction || null}
         */
        this.Action = null;

        /**
         * Information of the migration task execution process
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MigrateDetailInfo || null}
         */
        this.StepInfo = null;

        /**
         * Source instance information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DBEndpointInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target database information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DBEndpointInfo || null}
         */
        this.DstInfo = null;

        /**
         * Data consistency check result
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CompareTaskInfo || null}
         */
        this.CompareTask = null;

        /**
         * Billing status information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TradeInfo || null}
         */
        this.TradeInfo = null;

        /**
         * Tag information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagItem> || null}
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BriefMsg = 'BriefMsg' in params ? params.BriefMsg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectRunTime = 'ExpectRunTime' in params ? params.ExpectRunTime : null;

        if (params.Action) {
            let obj = new MigrateAction();
            obj.deserialize(params.Action)
            this.Action = obj;
        }

        if (params.StepInfo) {
            let obj = new MigrateDetailInfo();
            obj.deserialize(params.StepInfo)
            this.StepInfo = obj;
        }

        if (params.SrcInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

        if (params.CompareTask) {
            let obj = new CompareTaskInfo();
            obj.deserialize(params.CompareTask)
            this.CompareTask = obj;
        }

        if (params.TradeInfo) {
            let obj = new TradeInfo();
            obj.deserialize(params.TradeInfo)
            this.TradeInfo = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
 * Description of synced database objects
 * @class
 */
class Objects extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration object type, such as `Partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Sync object, which is required if `Mode` is `Partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Database> || null}
         */
        this.Databases = null;

        /**
         * Advanced object type, such as function and procedure. If you need to sync advanced objects, the initialization type must include structure initialization; that is, `Options.InitType` must be `Structure` or `Full`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AdvancedObjects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new Database();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }
        this.AdvancedObjects = 'AdvancedObjects' in params ? params.AdvancedObjects : null;

    }
}

/**
 * RecoverMigrateJob response structure.
 * @class
 */
class RecoverMigrateJobResponse extends  AbstractModel {
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
 * Migration object information
 * @class
 */
class DBItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the database to be migrated or synced, which is required if `ObjectMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Name of the database after migration or sync, which is the same as the source database name by default.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewDbName = null;

        /**
         * The schema to be migrated or synced
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * Name of the schema after migration or sync
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewSchemaName = null;

        /**
         * Database selection mode, which is required if `ObjectMode` is `partial`. Valid values: `all`, `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBMode = null;

        /**
         * Schema selection mode. Valid values: `all`, `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SchemaMode = null;

        /**
         * Table selection mode, which is required if `DBMode` is `partial`. Valid values: `all`, `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableMode = null;

        /**
         * The set of table objects, which is required if `TableMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TableItem> || null}
         */
        this.Tables = null;

        /**
         * View selection mode. Valid values: `all`, `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ViewMode = null;

        /**
         * The set of view objects, which is required if `ViewMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ViewItem> || null}
         */
        this.Views = null;

        /**
         * Role selection mode, which is exclusive to PostgreSQL. Valid values: `all`, `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoleMode = null;

        /**
         * Role, which is exclusive to PostgreSQL and required if `RoleMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RoleItem> || null}
         */
        this.Roles = null;

        /**
         * Sync mode. Valid values: `partial`, `all`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FunctionMode = null;

        /**
         * Sync mode. Valid values: `partial`, `all`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TriggerMode = null;

        /**
         * Sync mode. Valid values: `partial`, `all`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EventMode = null;

        /**
         * Sync mode. Valid values: `partial`, `all`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProcedureMode = null;

        /**
         * This parameter is required if `FunctionMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Functions = null;

        /**
         * This parameter is required if `ProcedureMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Procedures = null;

        /**
         * This parameter is required if `EventMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Events = null;

        /**
         * This parameter is required if `TriggerMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Triggers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.NewDbName = 'NewDbName' in params ? params.NewDbName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.NewSchemaName = 'NewSchemaName' in params ? params.NewSchemaName : null;
        this.DBMode = 'DBMode' in params ? params.DBMode : null;
        this.SchemaMode = 'SchemaMode' in params ? params.SchemaMode : null;
        this.TableMode = 'TableMode' in params ? params.TableMode : null;

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new TableItem();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }
        this.ViewMode = 'ViewMode' in params ? params.ViewMode : null;

        if (params.Views) {
            this.Views = new Array();
            for (let z in params.Views) {
                let obj = new ViewItem();
                obj.deserialize(params.Views[z]);
                this.Views.push(obj);
            }
        }
        this.RoleMode = 'RoleMode' in params ? params.RoleMode : null;

        if (params.Roles) {
            this.Roles = new Array();
            for (let z in params.Roles) {
                let obj = new RoleItem();
                obj.deserialize(params.Roles[z]);
                this.Roles.push(obj);
            }
        }
        this.FunctionMode = 'FunctionMode' in params ? params.FunctionMode : null;
        this.TriggerMode = 'TriggerMode' in params ? params.TriggerMode : null;
        this.EventMode = 'EventMode' in params ? params.EventMode : null;
        this.ProcedureMode = 'ProcedureMode' in params ? params.ProcedureMode : null;
        this.Functions = 'Functions' in params ? params.Functions : null;
        this.Procedures = 'Procedures' in params ? params.Procedures : null;
        this.Events = 'Events' in params ? params.Events : null;
        this.Triggers = 'Triggers' in params ? params.Triggers : null;

    }
}

/**
 * DeleteCompareTask request structure.
 * @class
 */
class DeleteCompareTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data consistency check task ID in the format of `dts-8yv4w2i1-cmp-37skmii9`
         * @type {string || null}
         */
        this.CompareTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;

    }
}

/**
 * Information of the migration task execution process
 * @class
 */
class MigrateDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of steps
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * Current step
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * Source-replica lag in MB. This parameter takes effect only when the task is normal and is in the last step of migration or sync (binlog sync). If it is invalid, `-1` will be returned.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MasterSlaveDistance = null;

        /**
         * Source-replica lag in seconds. This parameter takes effect only when the task is normal and is in the last step of migration or sync (binlog sync). If it is invalid, `-1` will be returned.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SecondsBehindMaster = null;

        /**
         * Step information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<StepDetailInfo> || null}
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
        this.MasterSlaveDistance = 'MasterSlaveDistance' in params ? params.MasterSlaveDistance : null;
        this.SecondsBehindMaster = 'SecondsBehindMaster' in params ? params.SecondsBehindMaster : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new StepDetailInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }

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
 * IsolateMigrateJob response structure.
 * @class
 */
class IsolateMigrateJobResponse extends  AbstractModel {
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
 * Sync task information
 * @class
 */
class SyncJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync task ID, such as `sync-btso140`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Sync task name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Billing mode. Valid values: `PostPay` (pay-as-you-go); `PrePay` (monthly subscription).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Running mode. Valid values: `Immediate`, `Timed`. Default value: `Immediate`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * Expected execution time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpectRunTime = null;

        /**
         * All supported operations
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AllActions = null;

        /**
         * Operations that can be performed under the current status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Actions = null;

        /**
         * Sync options
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Options || null}
         */
        this.Options = null;

        /**
         * Sync database/table objects
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Objects || null}
         */
        this.Objects = null;

        /**
         * Task specification
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * Expiration time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Source database region, such as `ap-guangzhou`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SrcRegion = null;

        /**
         * Source database type, such as `mysql`, `cynosdbmysql`, `tdapg`, `tdpg`, and `tdsqlmysql`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source database access type. Valid values: `cdb` (database); `cvm` (self-build on CVM); `vpc` (VPC); `extranet` (public network); `vpncloud` (VPN access); `dcg` (Direct Connect); `ccn` (CCN); `intranet` (intranet).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source database information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Endpoint || null}
         */
        this.SrcInfo = null;

        /**
         * Target database region, such as `ap-guangzhou`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DstRegion = null;

        /**
         * Target database type, such as `mysql`, `cynosdbmysql`, `tdapg`, `tdpg`, and `tdsqlmysql`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Target database access type. Valid values: `cdb` (database); `cvm` (self-build on CVM); `vpc` (VPC); `extranet` (public network); `vpncloud` (VPN access); `dcg` (Direct Connect); `ccn` (CCN); `intranet` (intranet).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Target database information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Endpoint || null}
         */
        this.DstInfo = null;

        /**
         * Creation time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Start time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task status. Valid values: `UnInitialized`, `Initialized`, `Checking`, `CheckPass`, `CheckNotPass`, `ReadyRunning`, `Running`, `Pausing`, `Paused`, `Stopping`, `Stopped`, `ResumableErr`, `Resuming`, `Failed`, `Released`, `Resetting`, `Unknown`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * End time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Tag information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagItem> || null}
         */
        this.Tags = null;

        /**
         * Step information of the sync task
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SyncDetailInfo || null}
         */
        this.Detail = null;

        /**
         * Billing status. Valid values: `Normal`, `Resizing`, `Renewing`, `Isolating`, `Isolated`, `Offlining`, `Offlined`, `NotBilled`, `Recovering`, `PostPay2Prepaying`, `PrePay2Postpaying`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TradeStatus = null;

        /**
         * Sync link specification, such as `micro`, `small`, `medium`, and `large`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceClass = null;

        /**
         * Auto-renewal flag, which takes effect if `PayMode` is `PrePay`. Valid values: `1` (auto-renewal enabled); `0` (auto-renewal disabled).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * Deletion time in the format of `yyyy-mm-dd hh:mm:ss`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OfflineTime = null;

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
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectRunTime = 'ExpectRunTime' in params ? params.ExpectRunTime : null;
        this.AllActions = 'AllActions' in params ? params.AllActions : null;
        this.Actions = 'Actions' in params ? params.Actions : null;

        if (params.Options) {
            let obj = new Options();
            obj.deserialize(params.Options)
            this.Options = obj;
        }

        if (params.Objects) {
            let obj = new Objects();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.SrcRegion = 'SrcRegion' in params ? params.SrcRegion : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new Endpoint();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstRegion = 'DstRegion' in params ? params.DstRegion : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new Endpoint();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Detail) {
            let obj = new SyncDetailInfo();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.TradeStatus = 'TradeStatus' in params ? params.TradeStatus : null;
        this.InstanceClass = 'InstanceClass' in params ? params.InstanceClass : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;

    }
}

/**
 * Role object, which is exclusive to PostgreSQL.
 * @class
 */
class RoleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Role name after migration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewRoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.NewRoleName = 'NewRoleName' in params ? params.NewRoleName : null;

    }
}

/**
 * Tag filter
 * @class
 */
class TagFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {Array.<string> || null}
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
 * Step information
 * @class
 */
class StepDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * Step name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Step ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StepId = null;

        /**
         * Step status. Valid values: `success`, `failed`, `running`, `notStarted`. Default value: `notStarted`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Start time of the current step in the format of "yyyy-mm-dd hh:mm:ss". If this field does not exist or is empty, it is meaningless.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Step error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StepMessage = null;

        /**
         * Execution progress
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ProcessStepTip> || null}
         */
        this.Errors = null;

        /**
         * Warning
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ProcessStepTip> || null}
         */
        this.Warnings = null;

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
        this.StepMessage = 'StepMessage' in params ? params.StepMessage : null;
        this.Percent = 'Percent' in params ? params.Percent : null;

        if (params.Errors) {
            this.Errors = new Array();
            for (let z in params.Errors) {
                let obj = new ProcessStepTip();
                obj.deserialize(params.Errors[z]);
                this.Errors.push(obj);
            }
        }

        if (params.Warnings) {
            this.Warnings = new Array();
            for (let z in params.Warnings) {
                let obj = new ProcessStepTip();
                obj.deserialize(params.Warnings[z]);
                this.Warnings.push(obj);
            }
        }

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
         * Billing mode. Valid values: `PrePay` (monthly subscription); `PostPay` (pay-as-you-go). Currently, DTS at Tencent Cloud International is free of charge.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Source database type, such as `mysql`, `cynosdbmysql`, `tdapg`, `tdpg`, and `tdsqlmysql`.
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source database region, such as `ap-guangzhou`.
         * @type {string || null}
         */
        this.SrcRegion = null;

        /**
         * Target database type, such as `mysql`, `cynosdbmysql`, `tdapg`, `tdpg`, and `tdsqlmysql`.
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Target database region, such as `ap-guangzhou`.
         * @type {string || null}
         */
        this.DstRegion = null;

        /**
         * Sync task specification, such as `Standard`.
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * Tag information
         * @type {Array.<TagItem> || null}
         */
        this.Tags = null;

        /**
         * The number of sync tasks purchased at a time. Value range: [1, 10]. Default value: `1`.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Auto-renewal flag, which takes effect if `PayMode` is `PrePay`. Valid values: `1` (auto-renewal enabled); `0` (auto-renewal disabled). Default value: `0`.
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * Sync link specification, such as `micro`, `small`, `medium`, and `large`. Default value: `medium`.
         * @type {string || null}
         */
        this.InstanceClass = null;

        /**
         * Sync task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * ID of the existing task used to create a similar task
         * @type {string || null}
         */
        this.ExistedJobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcRegion = 'SrcRegion' in params ? params.SrcRegion : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstRegion = 'DstRegion' in params ? params.DstRegion : null;
        this.Specification = 'Specification' in params ? params.Specification : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.InstanceClass = 'InstanceClass' in params ? params.InstanceClass : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.ExistedJobId = 'ExistedJobId' in params ? params.ExistedJobId : null;

    }
}

/**
 * View object
 * @class
 */
class ViewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * View name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * View name after migration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewViewName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.NewViewName = 'NewViewName' in params ? params.NewViewName : null;

    }
}

/**
 * DescribeCompareReport request structure.
 * @class
 */
class DescribeCompareReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Check task ID
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * Number of inconsistent objects to be returned
         * @type {number || null}
         */
        this.DifferenceLimit = null;

        /**
         * Offset of inconsistent objects
         * @type {number || null}
         */
        this.DifferenceOffset = null;

        /**
         * Search criterion: Inconsistent database name
         * @type {string || null}
         */
        this.DifferenceDB = null;

        /**
         * Search criterion: Inconsistent table name
         * @type {string || null}
         */
        this.DifferenceTable = null;

        /**
         * Number of unchecked objects to be returned
         * @type {number || null}
         */
        this.SkippedLimit = null;

        /**
         * Offset of unchecked objects
         * @type {number || null}
         */
        this.SkippedOffset = null;

        /**
         * Search criterion: Unchecked database name
         * @type {string || null}
         */
        this.SkippedDB = null;

        /**
         * Search criterion: Unchecked table name
         * @type {string || null}
         */
        this.SkippedTable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.DifferenceLimit = 'DifferenceLimit' in params ? params.DifferenceLimit : null;
        this.DifferenceOffset = 'DifferenceOffset' in params ? params.DifferenceOffset : null;
        this.DifferenceDB = 'DifferenceDB' in params ? params.DifferenceDB : null;
        this.DifferenceTable = 'DifferenceTable' in params ? params.DifferenceTable : null;
        this.SkippedLimit = 'SkippedLimit' in params ? params.SkippedLimit : null;
        this.SkippedOffset = 'SkippedOffset' in params ? params.SkippedOffset : null;
        this.SkippedDB = 'SkippedDB' in params ? params.SkippedDB : null;
        this.SkippedTable = 'SkippedTable' in params ? params.SkippedTable : null;

    }
}

/**
 * Synced view description
 * @class
 */
class View extends  AbstractModel {
    constructor(){
        super();

        /**
         * View name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * New view name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewViewName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.NewViewName = 'NewViewName' in params ? params.NewViewName : null;

    }
}

/**
 * Tag
 * @class
 */
class TagItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
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
 * RecoverMigrateJob request structure.
 * @class
 */
class RecoverMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * Migration object options, which tell DTS which database/table objects should be migrated.
 * @class
 */
class DatabaseTableObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration object type. Valid values: `all`, `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ObjectMode = null;

        /**
         * Migration object, which is required if `ObjectMode` is `partial`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DBItem> || null}
         */
        this.Databases = null;

        /**
         * Advanced object type, such as trigger, function, procedure, and event.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AdvancedObjects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ObjectMode = 'ObjectMode' in params ? params.ObjectMode : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new DBItem();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }
        this.AdvancedObjects = 'AdvancedObjects' in params ? params.AdvancedObjects : null;

    }
}

/**
 * Synced table description
 * @class
 */
class Table extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * New table name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewTableName = null;

        /**
         * Filter condition
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FilterCondition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.NewTableName = 'NewTableName' in params ? params.NewTableName : null;
        this.FilterCondition = 'FilterCondition' in params ? params.FilterCondition : null;

    }
}

/**
 * Data consistency check details
 * @class
 */
class CompareDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of inconsistent tables
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DifferenceDetail || null}
         */
        this.Difference = null;

        /**
         * Details of skipped tables
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SkippedDetail || null}
         */
        this.Skipped = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Difference) {
            let obj = new DifferenceDetail();
            obj.deserialize(params.Difference)
            this.Difference = obj;
        }

        if (params.Skipped) {
            let obj = new SkippedDetail();
            obj.deserialize(params.Skipped)
            this.Skipped = obj;
        }

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
 * Data consistency check option. Data consistency check is disabled by default.
 * @class
 */
class ConsistencyOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data consistency check type. Valid values: `full`, `noCheck`, `notConfigured`.
Note: This field may return null, indicating that no valid values can be obtained.
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

module.exports = {
    ModifyCompareTaskResponse: ModifyCompareTaskResponse,
    DescribeSyncJobsResponse: DescribeSyncJobsResponse,
    ModifyMigrationJobResponse: ModifyMigrationJobResponse,
    ModifyMigrateJobSpecRequest: ModifyMigrateJobSpecRequest,
    StartMigrateJobRequest: StartMigrateJobRequest,
    StepTip: StepTip,
    DestroyMigrateJobRequest: DestroyMigrateJobRequest,
    ResizeSyncJobResponse: ResizeSyncJobResponse,
    ResumeMigrateJobResponse: ResumeMigrateJobResponse,
    DifferenceItem: DifferenceItem,
    IsolateSyncJobRequest: IsolateSyncJobRequest,
    DescribeCheckSyncJobResultRequest: DescribeCheckSyncJobResultRequest,
    DestroySyncJobResponse: DestroySyncJobResponse,
    DescribeCompareReportResponse: DescribeCompareReportResponse,
    IsolateMigrateJobRequest: IsolateMigrateJobRequest,
    StopMigrateJobResponse: StopMigrateJobResponse,
    TableItem: TableItem,
    ModifyCompareTaskNameRequest: ModifyCompareTaskNameRequest,
    CompleteMigrateJobResponse: CompleteMigrateJobResponse,
    DescribeMigrateDBInstancesResponse: DescribeMigrateDBInstancesResponse,
    KeyValuePairOption: KeyValuePairOption,
    CreateCheckSyncJobRequest: CreateCheckSyncJobRequest,
    StopSyncJobRequest: StopSyncJobRequest,
    DescribeMigrationDetailRequest: DescribeMigrationDetailRequest,
    DestroySyncJobRequest: DestroySyncJobRequest,
    ResizeSyncJobRequest: ResizeSyncJobRequest,
    DdlOption: DdlOption,
    ConflictHandleOption: ConflictHandleOption,
    ResumeSyncJobResponse: ResumeSyncJobResponse,
    ModifyCompareTaskNameResponse: ModifyCompareTaskNameResponse,
    CreateMigrateCheckJobResponse: CreateMigrateCheckJobResponse,
    CreateMigrationServiceRequest: CreateMigrationServiceRequest,
    DetailCheckItem: DetailCheckItem,
    DescribeCompareTasksRequest: DescribeCompareTasksRequest,
    CompareObject: CompareObject,
    ErrorInfoItem: ErrorInfoItem,
    RecoverSyncJobResponse: RecoverSyncJobResponse,
    MigrateAction: MigrateAction,
    DeleteCompareTaskResponse: DeleteCompareTaskResponse,
    DBEndpointInfo: DBEndpointInfo,
    Options: Options,
    CompleteMigrateJobRequest: CompleteMigrateJobRequest,
    DescribeCompareTasksResponse: DescribeCompareTasksResponse,
    StopCompareRequest: StopCompareRequest,
    DescribeCheckSyncJobResultResponse: DescribeCheckSyncJobResultResponse,
    StopSyncJobResponse: StopSyncJobResponse,
    SkippedDetail: SkippedDetail,
    MigrateOption: MigrateOption,
    ModifyMigrateNameResponse: ModifyMigrateNameResponse,
    DescribeMigrationJobsResponse: DescribeMigrationJobsResponse,
    SkippedItem: SkippedItem,
    DestroyMigrateJobResponse: DestroyMigrateJobResponse,
    ProcessProgress: ProcessProgress,
    IsolateSyncJobResponse: IsolateSyncJobResponse,
    CreateMigrateCheckJobRequest: CreateMigrateCheckJobRequest,
    DescribeMigrationJobsRequest: DescribeMigrationJobsRequest,
    CompareTaskInfo: CompareTaskInfo,
    CreateMigrationServiceResponse: CreateMigrationServiceResponse,
    StartSyncJobRequest: StartSyncJobRequest,
    DescribeMigrationCheckJobResponse: DescribeMigrationCheckJobResponse,
    CompareObjectItem: CompareObjectItem,
    Endpoint: Endpoint,
    DifferenceDetail: DifferenceDetail,
    CreateCheckSyncJobResponse: CreateCheckSyncJobResponse,
    DBInfo: DBInfo,
    ConfigureSyncJobRequest: ConfigureSyncJobRequest,
    MigrateDBItem: MigrateDBItem,
    DescribeMigrateDBInstancesRequest: DescribeMigrateDBInstancesRequest,
    CheckStepInfo: CheckStepInfo,
    ProcessStepTip: ProcessStepTip,
    ModifyCompareTaskRequest: ModifyCompareTaskRequest,
    RecoverSyncJobRequest: RecoverSyncJobRequest,
    Database: Database,
    ModifyMigrationJobRequest: ModifyMigrationJobRequest,
    DescribeSyncJobsRequest: DescribeSyncJobsRequest,
    SyncDetailInfo: SyncDetailInfo,
    ResumeSyncJobRequest: ResumeSyncJobRequest,
    CompareTableItem: CompareTableItem,
    ConfigureSyncJobResponse: ConfigureSyncJobResponse,
    CompareViewItem: CompareViewItem,
    StepInfo: StepInfo,
    ResumeMigrateJobRequest: ResumeMigrateJobRequest,
    TradeInfo: TradeInfo,
    StartCompareResponse: StartCompareResponse,
    CreateCompareTaskResponse: CreateCompareTaskResponse,
    StopCompareResponse: StopCompareResponse,
    CompareAbstractInfo: CompareAbstractInfo,
    CheckStep: CheckStep,
    CompareTaskItem: CompareTaskItem,
    ModifyMigrateJobSpecResponse: ModifyMigrateJobSpecResponse,
    CreateSyncJobResponse: CreateSyncJobResponse,
    CreateCompareTaskRequest: CreateCompareTaskRequest,
    StartCompareRequest: StartCompareRequest,
    DescribeMigrationCheckJobRequest: DescribeMigrationCheckJobRequest,
    DescribeMigrationDetailResponse: DescribeMigrationDetailResponse,
    ModifyMigrateNameRequest: ModifyMigrateNameRequest,
    JobItem: JobItem,
    StartSyncJobResponse: StartSyncJobResponse,
    Objects: Objects,
    RecoverMigrateJobResponse: RecoverMigrateJobResponse,
    DBItem: DBItem,
    DeleteCompareTaskRequest: DeleteCompareTaskRequest,
    MigrateDetailInfo: MigrateDetailInfo,
    StopMigrateJobRequest: StopMigrateJobRequest,
    IsolateMigrateJobResponse: IsolateMigrateJobResponse,
    SyncJobInfo: SyncJobInfo,
    RoleItem: RoleItem,
    TagFilter: TagFilter,
    StepDetailInfo: StepDetailInfo,
    CreateSyncJobRequest: CreateSyncJobRequest,
    ViewItem: ViewItem,
    DescribeCompareReportRequest: DescribeCompareReportRequest,
    View: View,
    TagItem: TagItem,
    RecoverMigrateJobRequest: RecoverMigrateJobRequest,
    DatabaseTableObject: DatabaseTableObject,
    Table: Table,
    CompareDetailInfo: CompareDetailInfo,
    StartMigrateJobResponse: StartMigrateJobResponse,
    ConsistencyOption: ConsistencyOption,

}
