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
 * DescribeResultDownload response structure.
 * @class
 */
class DescribeResultDownloadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The file save path.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * The task status. Valid values: `init`, `queue`, `format`, `compress`, `success`, `timeout`, and `error`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The task exception cause.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * The temporary secret ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * The temporary secret key.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * The temporary token.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Token = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskResult response structure.
 * @class
 */
class DescribeTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The queried task information. If the returned value is empty, the task with the entered task ID does not exist. The task result will be returned only if the task status is `2` (succeeded).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskResultInfo || null}
         */
        this.TaskInfo = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskInfo) {
            let obj = new TaskResultInfo();
            obj.deserialize(params.TaskInfo)
            this.TaskInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Presto monitoring metrics
 * @class
 */
class PrestoMonitorMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 	The Alluxio cache hit rate.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LocalCacheHitRate = null;

        /**
         * The Fragment cache hit rate.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FragmentCacheHitRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalCacheHitRate = 'LocalCacheHitRate' in params ? params.LocalCacheHitRate : null;
        this.FragmentCacheHitRate = 'FragmentCacheHitRate' in params ? params.FragmentCacheHitRate : null;

    }
}

/**
 * DescribeSparkAppJob request structure.
 * @class
 */
class DescribeSparkAppJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Spark job ID. If it co-exists with `JobName`, `JobName` is invalid. At least `JobId` or `JobName` must be used.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Spark job name
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
 * COS permissions
 * @class
 */
class CosPermission extends  AbstractModel {
    constructor(){
        super();

        /**
         * The COS path.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CosPath = null;

        /**
         * The permissions. Valid values: `read` and `write`.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Permissions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosPath = 'CosPath' in params ? params.CosPath : null;
        this.Permissions = 'Permissions' in params ? params.Permissions : null;

    }
}

/**
 * CreateResultDownload response structure.
 * @class
 */
class CreateResultDownloadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The download task ID.
         * @type {string || null}
         */
        this.DownloadId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadId = 'DownloadId' in params ? params.DownloadId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGovernEventRule response structure.
 * @class
 */
class ModifyGovernEventRuleResponse extends  AbstractModel {
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
 * Spark monitoring metrics
 * @class
 */
class SparkMonitorMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * The shuffle data (in bytes) that overflows to COS.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ShuffleWriteBytesCos = null;

        /**
         * The total shuffle data (in bytes).
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ShuffleWriteBytesTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShuffleWriteBytesCos = 'ShuffleWriteBytesCos' in params ? params.ShuffleWriteBytesCos : null;
        this.ShuffleWriteBytesTotal = 'ShuffleWriteBytesTotal' in params ? params.ShuffleWriteBytesTotal : null;

    }
}

/**
 * Tag pair info
 * @class
 */
class TagInfo extends  AbstractModel {
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
 * SwitchDataEngine request structure.
 * @class
 */
class SwitchDataEngineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the primary cluster.
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * Whether to start the standby cluster.
         * @type {boolean || null}
         */
        this.StartStandbyCluster = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.StartStandbyCluster = 'StartStandbyCluster' in params ? params.StartStandbyCluster : null;

    }
}

/**
 * The session resource configuration template for a Spark cluster.
 * @class
 */
class SessionResourceTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * The driver size.
Valid values for the standard resource type: `small`, `medium`, `large`, and `xlarge`.
Valid values for the memory resource type: `m.small`, `m.medium`, `m.large`, and `m.xlarge`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DriverSize = null;

        /**
         * The executor size.
Valid values for the standard resource type: `small`, `medium`, `large`, and `xlarge`.
Valid values for the memory resource type: `m.small`, `m.medium`, `m.large`, and `m.xlarge`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExecutorSize = null;

        /**
         * The executor count. The minimum value is 1 and the maximum value is less than the cluster specification.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExecutorNums = null;

        /**
         * The maximum executor count (in dynamic mode). The minimum value is 1 and the maximum value is less than the cluster specification. If you set `ExecutorMaxNumbers` to a value smaller than that of `ExecutorNums`, the value of `ExecutorMaxNumbers` is automatically changed to that of `ExecutorNums`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExecutorMaxNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DriverSize = 'DriverSize' in params ? params.DriverSize : null;
        this.ExecutorSize = 'ExecutorSize' in params ? params.ExecutorSize : null;
        this.ExecutorNums = 'ExecutorNums' in params ? params.ExecutorNums : null;
        this.ExecutorMaxNumbers = 'ExecutorMaxNumbers' in params ? params.ExecutorMaxNumbers : null;

    }
}

/**
 * Task type, such as SQL query.
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * SQL query task
         * @type {SQLTask || null}
         */
        this.SQLTask = null;

        /**
         * Spark SQL query task
         * @type {SQLTask || null}
         */
        this.SparkSQLTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SQLTask) {
            let obj = new SQLTask();
            obj.deserialize(params.SQLTask)
            this.SQLTask = obj;
        }

        if (params.SparkSQLTask) {
            let obj = new SQLTask();
            obj.deserialize(params.SparkSQLTask)
            this.SparkSQLTask = obj;
        }

    }
}

/**
 * The task result information.
 * @class
 */
class TaskResultInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Name of the default selected data source when the current job is executed
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * Name of the default selected database when the current job is executed
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * The currently executed SQL statement. Each task contains one SQL statement.
         * @type {string || null}
         */
        this.SQL = null;

        /**
         * Type of the executed task. Valid values: `DDL`, `DML`, `DQL`.
         * @type {string || null}
         */
        this.SQLType = null;

        /**
         * u200cThe current task status. Valid values: `0` (initializing), `1` (executing), `2` (executed), `3` (writing data), `4` (queuing), u200c`-1` (failed), and `-3` (canceled). Only when the task is successfully executed, a task execution result will be returned.
         * @type {number || null}
         */
        this.State = null;

        /**
         * Amount of the data scanned in bytes
         * @type {number || null}
         */
        this.DataAmount = null;

        /**
         * The compute time in ms.
         * @type {number || null}
         */
        this.UsedTime = null;

        /**
         * Address of the COS bucket for storing the task result
         * @type {string || null}
         */
        this.OutputPath = null;

        /**
         * Task creation timestamp
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task execution information. `success` will be returned if the task succeeds; otherwise, the failure cause will be returned.
         * @type {string || null}
         */
        this.OutputMessage = null;

        /**
         * Number of affected rows
         * @type {string || null}
         */
        this.RowAffectInfo = null;

        /**
         * Schema information of the result
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Column> || null}
         */
        this.ResultSchema = null;

        /**
         * Result information. After it is unescaped, each element of the outer array is a data row.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResultSet = null;

        /**
         * Pagination information. If there is no more result data, `nextToken` will be empty.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Task progress (%)
         * @type {number || null}
         */
        this.Percentage = null;

        /**
         * Task progress details
         * @type {string || null}
         */
        this.ProgressDetail = null;

        /**
         * Console display format. Valid values: `table`, `text`.
         * @type {string || null}
         */
        this.DisplayFormat = null;

        /**
         * The task time in ms.
         * @type {number || null}
         */
        this.TotalTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SQL = 'SQL' in params ? params.SQL : null;
        this.SQLType = 'SQLType' in params ? params.SQLType : null;
        this.State = 'State' in params ? params.State : null;
        this.DataAmount = 'DataAmount' in params ? params.DataAmount : null;
        this.UsedTime = 'UsedTime' in params ? params.UsedTime : null;
        this.OutputPath = 'OutputPath' in params ? params.OutputPath : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.OutputMessage = 'OutputMessage' in params ? params.OutputMessage : null;
        this.RowAffectInfo = 'RowAffectInfo' in params ? params.RowAffectInfo : null;

        if (params.ResultSchema) {
            this.ResultSchema = new Array();
            for (let z in params.ResultSchema) {
                let obj = new Column();
                obj.deserialize(params.ResultSchema[z]);
                this.ResultSchema.push(obj);
            }
        }
        this.ResultSet = 'ResultSet' in params ? params.ResultSet : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;
        this.ProgressDetail = 'ProgressDetail' in params ? params.ProgressDetail : null;
        this.DisplayFormat = 'DisplayFormat' in params ? params.DisplayFormat : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;

    }
}

/**
 * DescribeSparkAppTasks response structure.
 * @class
 */
class DescribeSparkAppTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task result (this field has been disused)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskResponseInfo || null}
         */
        this.Tasks = null;

        /**
         * Total number of tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of task results
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TaskResponseInfo> || null}
         */
        this.SparkAppTasks = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tasks) {
            let obj = new TaskResponseInfo();
            obj.deserialize(params.Tasks)
            this.Tasks = obj;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SparkAppTasks) {
            this.SparkAppTasks = new Array();
            for (let z in params.SparkAppTasks) {
                let obj = new TaskResponseInfo();
                obj.deserialize(params.SparkAppTasks[z]);
                this.SparkAppTasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTasks response structure.
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of task objects.
         * @type {Array.<TaskResponseInfo> || null}
         */
        this.TaskList = null;

        /**
         * Total number of instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The task overview.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TasksOverview || null}
         */
        this.TasksOverview = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskList) {
            this.TaskList = new Array();
            for (let z in params.TaskList) {
                let obj = new TaskResponseInfo();
                obj.deserialize(params.TaskList[z]);
                this.TaskList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TasksOverview) {
            let obj = new TasksOverview();
            obj.deserialize(params.TasksOverview)
            this.TasksOverview = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Common task metrics
 * @class
 */
class CommonMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task creation time in ms.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTaskTime = null;

        /**
         * The processing time in ms.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProcessTime = null;

        /**
         * The queue time in ms.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.QueueTime = null;

        /**
         * The execution duration in ms.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExecutionTime = null;

        /**
         * Whether the result cache is hit.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsResultCacheHit = null;

        /**
         * The volume of matched materialized views, in bytes.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MatchedMVBytes = null;

        /**
         * The list of matched materialized views.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MatchedMVs = null;

        /**
         * The result data in bytes.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AffectedBytes = null;

        /**
         * 	The number of rows in the result.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AffectedRows = null;

        /**
         * The volume of the data scanned, in bytes.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProcessedBytes = null;

        /**
         * 	The number of scanned rows.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProcessedRows = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTaskTime = 'CreateTaskTime' in params ? params.CreateTaskTime : null;
        this.ProcessTime = 'ProcessTime' in params ? params.ProcessTime : null;
        this.QueueTime = 'QueueTime' in params ? params.QueueTime : null;
        this.ExecutionTime = 'ExecutionTime' in params ? params.ExecutionTime : null;
        this.IsResultCacheHit = 'IsResultCacheHit' in params ? params.IsResultCacheHit : null;
        this.MatchedMVBytes = 'MatchedMVBytes' in params ? params.MatchedMVBytes : null;
        this.MatchedMVs = 'MatchedMVs' in params ? params.MatchedMVs : null;
        this.AffectedBytes = 'AffectedBytes' in params ? params.AffectedBytes : null;
        this.AffectedRows = 'AffectedRows' in params ? params.AffectedRows : null;
        this.ProcessedBytes = 'ProcessedBytes' in params ? params.ProcessedBytes : null;
        this.ProcessedRows = 'ProcessedRows' in params ? params.ProcessedRows : null;

    }
}

/**
 * User role
 * @class
 */
class UserRole extends  AbstractModel {
    constructor(){
        super();

        /**
         * The role ID.
         * @type {number || null}
         */
        this.RoleId = null;

        /**
         * The user's app ID.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * The user ID.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * The role permission.
         * @type {string || null}
         */
        this.Arn = null;

        /**
         * The last modified timestamp.
         * @type {number || null}
         */
        this.ModifyTime = null;

        /**
         * The role description.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * The role name.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * The creator UIN.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * The COS permission list.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {Array.<CosPermission> || null}
         */
        this.CosPermissionList = null;

        /**
         * The CAM policy in JSON.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PermissionJson = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Arn = 'Arn' in params ? params.Arn : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Creator = 'Creator' in params ? params.Creator : null;

        if (params.CosPermissionList) {
            this.CosPermissionList = new Array();
            for (let z in params.CosPermissionList) {
                let obj = new CosPermission();
                obj.deserialize(params.CosPermissionList[z]);
                this.CosPermissionList.push(obj);
            }
        }
        this.PermissionJson = 'PermissionJson' in params ? params.PermissionJson : null;

    }
}

/**
 * DescribeSparkSessionBatchSqlLog response structure.
 * @class
 */
class DescribeSparkSessionBatchSqlLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The status. Valid values: `0` (initializing), `1` (successful), `2` (failed), `3` (canceled), and `4` (exception).
         * @type {number || null}
         */
        this.State = null;

        /**
         * The log information list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SparkSessionBatchLog> || null}
         */
        this.LogSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;

        if (params.LogSet) {
            this.LogSet = new Array();
            for (let z in params.LogSet) {
                let obj = new SparkSessionBatchLog();
                obj.deserialize(params.LogSet[z]);
                this.LogSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateCreateMangedTableSql request structure.
 * @class
 */
class GenerateCreateMangedTableSqlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The basic table information.
         * @type {TableBaseInfo || null}
         */
        this.TableBaseInfo = null;

        /**
         * The table fields.
         * @type {Array.<TColumn> || null}
         */
        this.Columns = null;

        /**
         * The table partitions.
         * @type {Array.<TPartition> || null}
         */
        this.Partitions = null;

        /**
         * The table properties.
         * @type {Array.<Property> || null}
         */
        this.Properties = null;

        /**
         * The Upsert key for a v2 table (in Upsert mode).
         * @type {Array.<string> || null}
         */
        this.UpsertKeys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TableBaseInfo) {
            let obj = new TableBaseInfo();
            obj.deserialize(params.TableBaseInfo)
            this.TableBaseInfo = obj;
        }

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new TColumn();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new TPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new Property();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }
        this.UpsertKeys = 'UpsertKeys' in params ? params.UpsertKeys : null;

    }
}

/**
 * SwitchDataEngine response structure.
 * @class
 */
class SwitchDataEngineResponse extends  AbstractModel {
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
 * DescribeLakeFsInfo request structure.
 * @class
 */
class DescribeLakeFsInfoRequest extends  AbstractModel {
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
 * ModifySparkApp request structure.
 * @class
 */
class ModifySparkAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Spark job name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The Spark job type. Valid values: `1` for Spark JAR job and `2` for Spark streaming job.
         * @type {number || null}
         */
        this.AppType = null;

        /**
         * The data engine executing the Spark job.
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * The path of the Spark job package.
         * @type {string || null}
         */
        this.AppFile = null;

        /**
         * The data access policy (CAM role arn).
         * @type {number || null}
         */
        this.RoleArn = null;

        /**
         * The driver size. Valid values: `small` (default, 1 CU), `medium` (2 CUs), `large` (4 CUs), and `xlarge` (8 CUs).
         * @type {string || null}
         */
        this.AppDriverSize = null;

        /**
         * The executor size. Valid values: `small` (default, 1 CU), `medium` (2 CUs), `large` (4 CUs), and `xlarge` (8 CUs).
         * @type {string || null}
         */
        this.AppExecutorSize = null;

        /**
         * Number of Spark job executors
         * @type {number || null}
         */
        this.AppExecutorNums = null;

        /**
         * The Spark job ID.
         * @type {string || null}
         */
        this.SparkAppId = null;

        /**
         * This field has been disused. Use the `Datasource` field instead.
         * @type {string || null}
         */
        this.Eni = null;

        /**
         * The source of the Spark job package. Valid values: `cos` for COS and `lakefs` for the local system (for use in the console, but this method does not support direct API calls).
         * @type {string || null}
         */
        this.IsLocal = null;

        /**
         * The main class of the Spark job.
         * @type {string || null}
         */
        this.MainClass = null;

        /**
         * Spark configurations separated by line break
         * @type {string || null}
         */
        this.AppConf = null;

        /**
         * The source of the dependency JAR packages of the Spark job. Valid values: `cos` for COS and `lakefs` for the local system (for use in the console, but this method does not support direct API calls).
         * @type {string || null}
         */
        this.IsLocalJars = null;

        /**
         * The dependency JAR packages of the Spark JAR job (JAR packages), separated by comma.
         * @type {string || null}
         */
        this.AppJars = null;

        /**
         * The source of the dependency files of the Spark job. Valid values: `cos` for COS and `lakefs` for the local system (for use in the console, but this method does not support direct API calls).
         * @type {string || null}
         */
        this.IsLocalFiles = null;

        /**
         * The dependency files of the Spark job (files other than JAR and ZIP packages), separated by comma.
         * @type {string || null}
         */
        this.AppFiles = null;

        /**
         * The source of the PySpark dependencies. Valid values: `cos` for COS and `lakefs` for the local system (for use in the console, but this method does not support direct API calls).
         * @type {string || null}
         */
        this.IsLocalPythonFiles = null;

        /**
         * The PySpark dependencies (Python files), separated by comma, with .py, .zip, and .egg formats supported.
         * @type {string || null}
         */
        this.AppPythonFiles = null;

        /**
         * The input parameters of the Spark job, separated by comma.
         * @type {string || null}
         */
        this.CmdArgs = null;

        /**
         * The maximum number of retries, valid for Spark streaming tasks only.
         * @type {number || null}
         */
        this.MaxRetries = null;

        /**
         * Data source name
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * The source of the dependency archives of the Spark job. Valid values: `cos` for COS and `lakefs` for the local system (for use in the console, but this method does not support direct API calls).
         * @type {string || null}
         */
        this.IsLocalArchives = null;

        /**
         * The dependency archives of the Spark job, separated by comma, with tar.gz, .tgz, and .tar formats supported.
         * @type {string || null}
         */
        this.AppArchives = null;

        /**
         * The Spark image version.
         * @type {string || null}
         */
        this.SparkImage = null;

        /**
         * The Spark image version name.
         * @type {string || null}
         */
        this.SparkImageVersion = null;

        /**
         * The specified executor count (max), which defaults to 1. This parameter applies if the "Dynamic" mode is selected. If the "Dynamic" mode is not selected, the executor count is equal to `AppExecutorNums`.
         * @type {number || null}
         */
        this.AppExecutorMaxNumbers = null;

        /**
         * The associated Data Lake Compute query script.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Whether to inherit the task resource configuration from the cluster configuration template. Valid values: `0` (default): No; `1`: Yes.
         * @type {number || null}
         */
        this.IsInherit = null;

        /**
         * Whether to run the task with the session SQLs. Valid values: `false` for no and `true` for yes.
         * @type {boolean || null}
         */
        this.IsSessionStarted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.DataEngine = 'DataEngine' in params ? params.DataEngine : null;
        this.AppFile = 'AppFile' in params ? params.AppFile : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.AppDriverSize = 'AppDriverSize' in params ? params.AppDriverSize : null;
        this.AppExecutorSize = 'AppExecutorSize' in params ? params.AppExecutorSize : null;
        this.AppExecutorNums = 'AppExecutorNums' in params ? params.AppExecutorNums : null;
        this.SparkAppId = 'SparkAppId' in params ? params.SparkAppId : null;
        this.Eni = 'Eni' in params ? params.Eni : null;
        this.IsLocal = 'IsLocal' in params ? params.IsLocal : null;
        this.MainClass = 'MainClass' in params ? params.MainClass : null;
        this.AppConf = 'AppConf' in params ? params.AppConf : null;
        this.IsLocalJars = 'IsLocalJars' in params ? params.IsLocalJars : null;
        this.AppJars = 'AppJars' in params ? params.AppJars : null;
        this.IsLocalFiles = 'IsLocalFiles' in params ? params.IsLocalFiles : null;
        this.AppFiles = 'AppFiles' in params ? params.AppFiles : null;
        this.IsLocalPythonFiles = 'IsLocalPythonFiles' in params ? params.IsLocalPythonFiles : null;
        this.AppPythonFiles = 'AppPythonFiles' in params ? params.AppPythonFiles : null;
        this.CmdArgs = 'CmdArgs' in params ? params.CmdArgs : null;
        this.MaxRetries = 'MaxRetries' in params ? params.MaxRetries : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.IsLocalArchives = 'IsLocalArchives' in params ? params.IsLocalArchives : null;
        this.AppArchives = 'AppArchives' in params ? params.AppArchives : null;
        this.SparkImage = 'SparkImage' in params ? params.SparkImage : null;
        this.SparkImageVersion = 'SparkImageVersion' in params ? params.SparkImageVersion : null;
        this.AppExecutorMaxNumbers = 'AppExecutorMaxNumbers' in params ? params.AppExecutorMaxNumbers : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.IsInherit = 'IsInherit' in params ? params.IsInherit : null;
        this.IsSessionStarted = 'IsSessionStarted' in params ? params.IsSessionStarted : null;

    }
}

/**
 * DescribeTasks request structure.
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned results. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter. The following filters are supported, and the `Name` input parameter must be one of them. Up to 50 `task-id` values can be filtered, while up to 5 other parameters can be filtered in total.
task-id - String - (filter by task ID). `task-id` format: e386471f-139a-4e59-877f-50ece8135b99.
task-state - String - (filter exactly by task status). Valid values: `0` (initial), `1` (running), `2` (succeeded), `-1` (failed).
task-sql-keyword - String - (filter fuzzily by SQL statement keyword, such as `DROP TABLE`).
task-operator- string (filter by sub-UIN)
task-kind - string (filter by task type)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Sorting field. Valid values: `create-time` (default value), `update-time`.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Sorting order. Valid values: `asc` (ascending order), `desc` (descending order). Default value: `asc`.
         * @type {string || null}
         */
        this.Sorting = null;

        /**
         * Start time in the format of `yyyy-mm-dd HH:MM:SS`, which is the current time seven days ago by default.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in the format of `yyyy-mm-dd HH:MM:SS`, which is the current time by default. The time span is (0, 30] days. Data in the last 45 days can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The data engine name for filtering.
         * @type {string || null}
         */
        this.DataEngineName = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.Sorting = 'Sorting' in params ? params.Sorting : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;

    }
}

/**
 * CreateSparkAppTask request structure.
 * @class
 */
class CreateSparkAppTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Spark job name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * The input parameters of the Spark job, separated by space. They are generally used for periodic calls.
         * @type {string || null}
         */
        this.CmdArgs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.CmdArgs = 'CmdArgs' in params ? params.CmdArgs : null;

    }
}

/**
 * DescribeEngineUsageInfo response structure.
 * @class
 */
class DescribeEngineUsageInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total cluster spec.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The used cluster spec.
         * @type {number || null}
         */
        this.Used = null;

        /**
         * The available cluster spec.
         * @type {number || null}
         */
        this.Available = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Used = 'Used' in params ? params.Used : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration format
 * @class
 */
class KVPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configured key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Configured value
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
 * Table configurations
 * @class
 */
class TableBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The database name.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * The table name.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * The data source name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * The table remarks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableComment = null;

        /**
         * The specific type: `table` or `view`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The data format type, such as `hive` and `iceberg`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableFormat = null;

        /**
         * The table creator name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserAlias = null;

        /**
         * The table creator ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserSubUin = null;

        /**
         * The data governance configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DataGovernPolicy || null}
         */
        this.GovernPolicy = null;

        /**
         * Whether database data governance is disabled. Valid values: `true` (disabled) and `false` (not disabled).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbGovernPolicyIsDisable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.TableComment = 'TableComment' in params ? params.TableComment : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TableFormat = 'TableFormat' in params ? params.TableFormat : null;
        this.UserAlias = 'UserAlias' in params ? params.UserAlias : null;
        this.UserSubUin = 'UserSubUin' in params ? params.UserSubUin : null;

        if (params.GovernPolicy) {
            let obj = new DataGovernPolicy();
            obj.deserialize(params.GovernPolicy)
            this.GovernPolicy = obj;
        }
        this.DbGovernPolicyIsDisable = 'DbGovernPolicyIsDisable' in params ? params.DbGovernPolicyIsDisable : null;

    }
}

/**
 * CreateSparkAppTask response structure.
 * @class
 */
class CreateSparkAppTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Batch ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInternalTable request structure.
 * @class
 */
class CreateInternalTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The basic table information.
         * @type {TableBaseInfo || null}
         */
        this.TableBaseInfo = null;

        /**
         * The table fields.
         * @type {Array.<TColumn> || null}
         */
        this.Columns = null;

        /**
         * The table partitions.
         * @type {Array.<TPartition> || null}
         */
        this.Partitions = null;

        /**
         * The table properties.
         * @type {Array.<Property> || null}
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

        if (params.TableBaseInfo) {
            let obj = new TableBaseInfo();
            obj.deserialize(params.TableBaseInfo)
            this.TableBaseInfo = obj;
        }

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new TColumn();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new TPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new Property();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }

    }
}

/**
 * Collection of tasks executed sequentially in batches
 * @class
 */
class TasksInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. Valid values: `SQLTask` (SQL query task), `SparkSQLTask` (Spark SQL query task).
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Fault tolerance policy. `Proceed`: continues to execute subsequent tasks after the current task fails or is canceled. `Terminate`: terminates the execution of subsequent tasks after the current task fails or is canceled, and marks all subsequent tasks as canceled.
         * @type {string || null}
         */
        this.FailureTolerance = null;

        /**
         * Base64-encrypted SQL statements separated by ";". Up to 50 tasks can be submitted at a time, and they will be executed strictly in sequence.
         * @type {string || null}
         */
        this.SQL = null;

        /**
         * Configuration information of the task. Currently, only `SparkSQLTask` tasks are supported.
         * @type {Array.<KVPair> || null}
         */
        this.Config = null;

        /**
         * User-defined parameters of the task
         * @type {Array.<KVPair> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.FailureTolerance = 'FailureTolerance' in params ? params.FailureTolerance : null;
        this.SQL = 'SQL' in params ? params.SQL : null;

        if (params.Config) {
            this.Config = new Array();
            for (let z in params.Config) {
                let obj = new KVPair();
                obj.deserialize(params.Config[z]);
                this.Config.push(obj);
            }
        }

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new KVPair();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * CreateSparkApp request structure.
 * @class
 */
class CreateSparkAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Spark job name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The Spark job type. Valid values: `1` for Spark JAR job and `2` for Spark streaming job.
         * @type {number || null}
         */
        this.AppType = null;

        /**
         * The data engine executing the Spark job.
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * The path of the Spark job package.
         * @type {string || null}
         */
        this.AppFile = null;

        /**
         * The data access policy (CAM role arn).
         * @type {number || null}
         */
        this.RoleArn = null;

        /**
         * The driver size. Valid values: `small` (default, 1 CU), `medium` (2 CUs), `large` (4 CUs), and `xlarge` (8 CUs).
         * @type {string || null}
         */
        this.AppDriverSize = null;

        /**
         * The executor size. Valid values: `small` (default, 1 CU), `medium` (2 CUs), `large` (4 CUs), and `xlarge` (8 CUs).
         * @type {string || null}
         */
        this.AppExecutorSize = null;

        /**
         * Number of Spark job executors
         * @type {number || null}
         */
        this.AppExecutorNums = null;

        /**
         * This field has been disused. Use the `Datasource` field instead.
         * @type {string || null}
         */
        this.Eni = null;

        /**
         * The source of the Spark job package. Valid values: `cos` for COS and `lakefs` for the local system (for use in the console, but this method does not support direct API calls).
         * @type {string || null}
         */
        this.IsLocal = null;

        /**
         * The main class of the Spark job.
         * @type {string || null}
         */
        this.MainClass = null;

        /**
         * Spark configurations separated by line break
         * @type {string || null}
         */
        this.AppConf = null;

        /**
         * The source of the dependency JAR packages of the Spark job. Valid values: `cos` for COS and `lakefs` for the local system (for use in the console, but this method does not support direct API calls).
         * @type {string || null}
         */
        this.IsLocalJars = null;

        /**
         * The dependency JAR packages of the Spark JAR job (JAR packages), separated by comma.
         * @type {string || null}
         */
        this.AppJars = null;

        /**
         * The source of the dependency files of the Spark job. Valid values: `cos` for COS and `lakefs` for the local system (for use in the console, but this method does not support direct API calls).
         * @type {string || null}
         */
        this.IsLocalFiles = null;

        /**
         * The dependency files of the Spark job (files other than JAR and ZIP packages) separated by comma.
         * @type {string || null}
         */
        this.AppFiles = null;

        /**
         * The input parameters of the Spark job, separated by comma.
         * @type {string || null}
         */
        this.CmdArgs = null;

        /**
         * The maximum number of retries, valid for Spark streaming tasks only.
         * @type {number || null}
         */
        this.MaxRetries = null;

        /**
         * The data source name.
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * The source of the PySpark dependencies. Valid values: `cos` for COS and `lakefs` for the local system (for use in the console, but this method does not support direct API calls).
         * @type {string || null}
         */
        this.IsLocalPythonFiles = null;

        /**
         * The PySpark dependencies (Python files), separated by comma, with .py, .zip, and .egg formats supported.
         * @type {string || null}
         */
        this.AppPythonFiles = null;

        /**
         * The source of the dependency archives of the Spark job. Valid values: `cos` for COS and `lakefs` for the local system (for use in the console, but this method does not support direct API calls).
         * @type {string || null}
         */
        this.IsLocalArchives = null;

        /**
         * The dependency archives of the Spark job, separated by comma, with tar.gz, .tgz, and .tar formats supported.
         * @type {string || null}
         */
        this.AppArchives = null;

        /**
         * The Spark image version.
         * @type {string || null}
         */
        this.SparkImage = null;

        /**
         * The Spark image version name.
         * @type {string || null}
         */
        this.SparkImageVersion = null;

        /**
         * The specified executor count (max), which defaults to 1. This parameter applies if the "Dynamic" mode is selected. If the "Dynamic" mode is not selected, the executor count is equal to `AppExecutorNums`.
         * @type {number || null}
         */
        this.AppExecutorMaxNumbers = null;

        /**
         * The ID of the associated Data Lake Compute query script.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Whether to inherit the task resource configuration from the cluster template. Valid values: `0` (default): No; `1`: Yes.
         * @type {number || null}
         */
        this.IsInherit = null;

        /**
         * Whether to run the task with the session SQLs. Valid values: `false` for no and `true` for yes.
         * @type {boolean || null}
         */
        this.IsSessionStarted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.DataEngine = 'DataEngine' in params ? params.DataEngine : null;
        this.AppFile = 'AppFile' in params ? params.AppFile : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.AppDriverSize = 'AppDriverSize' in params ? params.AppDriverSize : null;
        this.AppExecutorSize = 'AppExecutorSize' in params ? params.AppExecutorSize : null;
        this.AppExecutorNums = 'AppExecutorNums' in params ? params.AppExecutorNums : null;
        this.Eni = 'Eni' in params ? params.Eni : null;
        this.IsLocal = 'IsLocal' in params ? params.IsLocal : null;
        this.MainClass = 'MainClass' in params ? params.MainClass : null;
        this.AppConf = 'AppConf' in params ? params.AppConf : null;
        this.IsLocalJars = 'IsLocalJars' in params ? params.IsLocalJars : null;
        this.AppJars = 'AppJars' in params ? params.AppJars : null;
        this.IsLocalFiles = 'IsLocalFiles' in params ? params.IsLocalFiles : null;
        this.AppFiles = 'AppFiles' in params ? params.AppFiles : null;
        this.CmdArgs = 'CmdArgs' in params ? params.CmdArgs : null;
        this.MaxRetries = 'MaxRetries' in params ? params.MaxRetries : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.IsLocalPythonFiles = 'IsLocalPythonFiles' in params ? params.IsLocalPythonFiles : null;
        this.AppPythonFiles = 'AppPythonFiles' in params ? params.AppPythonFiles : null;
        this.IsLocalArchives = 'IsLocalArchives' in params ? params.IsLocalArchives : null;
        this.AppArchives = 'AppArchives' in params ? params.AppArchives : null;
        this.SparkImage = 'SparkImage' in params ? params.SparkImage : null;
        this.SparkImageVersion = 'SparkImageVersion' in params ? params.SparkImageVersion : null;
        this.AppExecutorMaxNumbers = 'AppExecutorMaxNumbers' in params ? params.AppExecutorMaxNumbers : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.IsInherit = 'IsInherit' in params ? params.IsInherit : null;
        this.IsSessionStarted = 'IsSessionStarted' in params ? params.IsSessionStarted : null;

    }
}

/**
 * DescribeEngineUsageInfo request structure.
 * @class
 */
class DescribeEngineUsageInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The data engine ID.
         * @type {string || null}
         */
        this.DataEngineId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataEngineId = 'DataEngineId' in params ? params.DataEngineId : null;

    }
}

/**
 * DescribeForbiddenTablePro request structure.
 * @class
 */
class DescribeForbiddenTableProRequest extends  AbstractModel {
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
 * CreateDataEngine response structure.
 * @class
 */
class CreateDataEngineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the virtual engine.
         * @type {string || null}
         */
        this.DataEngineId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataEngineId = 'DataEngineId' in params ? params.DataEngineId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSparkAppJobs request structure.
 * @class
 */
class DescribeSparkAppJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The returned results are sorted by this field.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Descending or ascending order, such as `desc`.
         * @type {string || null}
         */
        this.Sorting = null;

        /**
         * The filters. The following types are supported, and `Name` of the parameter passed in must be one of them: `spark-job-name` (job name), `spark-job-id` (job ID), `spark-app-type` (job type: `1` for batch, `2` for streaming, and `4` for SQL), `user-name` (creator), and `key-word` (job name or ID keywords for fuzzy search).
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The update start time in the format of yyyy-mm-dd HH:MM:SS.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The update end time in the format of yyyy-mm-dd HH:MM:SS.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The query list offset, which defaults to 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The maximum number of queries allowed in the list, which defaults to 100.
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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.Sorting = 'Sorting' in params ? params.Sorting : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateDataEngine request structure.
 * @class
 */
class CreateDataEngineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The engine type. Valid values: `spark` and `presto`.
         * @type {string || null}
         */
        this.EngineType = null;

        /**
         * The name of the virtual cluster.
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * The cluster type. Valid values: `spark_private`, `presto_private`, `presto_cu`, and `spark_cu`.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * The billing mode. Valid values: `0` (shared engine), `1` (pay-as-you-go), and `2` (monthly subscription).
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * Whether to automatically start the clusters.
         * @type {boolean || null}
         */
        this.AutoResume = null;

        /**
         * The minimum number of clusters.
         * @type {number || null}
         */
        this.MinClusters = null;

        /**
         * The maximum number of clusters.
         * @type {number || null}
         */
        this.MaxClusters = null;

        /**
         * Whether the cluster is the default one.
         * @type {boolean || null}
         */
        this.DefaultDataEngine = null;

        /**
         * The VPC CIDR block.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * The description.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The cluster size.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * The pay mode. Valid value: `0` (postpaid, default) and `1` (prepaid) (currently not available).
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * The resource period. For the postpaid mode, the value is 3600 (default); for the prepaid mode, the value must be in the range of 1–120, representing purchasing the resource for 1–120 months.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * The unit of the resource period. Valid values: `s` (default) for the postpaid mode and `m` for the prepaid mode.
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * The auto-renewal status of the resource. For the postpaid mode, no renewal is required, and the value is fixed to `0`. For the prepaid mode, valid values are `0` (manual), `1` (auto), and `2` (no renewal). If this parameter is set to `0` for a key account in the prepaid mode, auto-renewal applies. It defaults to `0`.
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * The tags to be set for the resource being created.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Whether to automatically suspend clusters. Valid values: `false` (default, no) and `true` (yes).
         * @type {boolean || null}
         */
        this.AutoSuspend = null;

        /**
         * Whether to enable scheduled start and suspension of clusters. Valid values: `0` (disable) and `1` (enable). Note: This policy and the auto-suspension policy are mutually exclusive.
         * @type {number || null}
         */
        this.CrontabResumeSuspend = null;

        /**
         * The complex policy for scheduled start and suspension, including the start/suspension time and suspension policy.
         * @type {CrontabResumeSuspendStrategy || null}
         */
        this.CrontabResumeSuspendStrategy = null;

        /**
         * The type of tasks to be executed by the engine, which defaults to SQL. Valid values: `SQL` and `BATCH`.
         * @type {string || null}
         */
        this.EngineExecType = null;

        /**
         * The max task concurrency of a cluster, which defaults to 5.
         * @type {number || null}
         */
        this.MaxConcurrency = null;

        /**
         * The task queue time limit, which defaults to 0. When the actual queue time exceeds the value set here, scale-out may be triggered. Setting this parameter to 0 represents that scale-out may be triggered immediately after a task queues up.
         * @type {number || null}
         */
        this.TolerableQueueTime = null;

        /**
         * The cluster auto-suspension time, which defaults to 10 min.
         * @type {number || null}
         */
        this.AutoSuspendTime = null;

        /**
         * The resource type. Valid values: `Standard_CU` (standard) and `Memory_CU` (memory).
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * The advanced configurations of clusters.
         * @type {Array.<DataEngineConfigPair> || null}
         */
        this.DataEngineConfigPairs = null;

        /**
         * The version name of cluster image, such as SuperSQL-P 1.1 and SuperSQL-S 3.2. If no value is passed in, a cluster is created using the latest image version.
         * @type {string || null}
         */
        this.ImageVersionName = null;

        /**
         * The primary cluster, which is specified when a failover cluster is created.
         * @type {string || null}
         */
        this.MainClusterName = null;

        /**
         * Whether to enable the scaling feature for a monthly subscribed Spark job cluster.
         * @type {boolean || null}
         */
        this.ElasticSwitch = null;

        /**
         * The upper limit (in CUs) for scaling of the monthly subscribed Spark job cluster.
         * @type {number || null}
         */
        this.ElasticLimit = null;

        /**
         * The session resource configuration template for a Spark job cluster.
         * @type {SessionResourceTemplate || null}
         */
        this.SessionResourceTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.AutoResume = 'AutoResume' in params ? params.AutoResume : null;
        this.MinClusters = 'MinClusters' in params ? params.MinClusters : null;
        this.MaxClusters = 'MaxClusters' in params ? params.MaxClusters : null;
        this.DefaultDataEngine = 'DefaultDataEngine' in params ? params.DefaultDataEngine : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoSuspend = 'AutoSuspend' in params ? params.AutoSuspend : null;
        this.CrontabResumeSuspend = 'CrontabResumeSuspend' in params ? params.CrontabResumeSuspend : null;

        if (params.CrontabResumeSuspendStrategy) {
            let obj = new CrontabResumeSuspendStrategy();
            obj.deserialize(params.CrontabResumeSuspendStrategy)
            this.CrontabResumeSuspendStrategy = obj;
        }
        this.EngineExecType = 'EngineExecType' in params ? params.EngineExecType : null;
        this.MaxConcurrency = 'MaxConcurrency' in params ? params.MaxConcurrency : null;
        this.TolerableQueueTime = 'TolerableQueueTime' in params ? params.TolerableQueueTime : null;
        this.AutoSuspendTime = 'AutoSuspendTime' in params ? params.AutoSuspendTime : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.DataEngineConfigPairs) {
            this.DataEngineConfigPairs = new Array();
            for (let z in params.DataEngineConfigPairs) {
                let obj = new DataEngineConfigPair();
                obj.deserialize(params.DataEngineConfigPairs[z]);
                this.DataEngineConfigPairs.push(obj);
            }
        }
        this.ImageVersionName = 'ImageVersionName' in params ? params.ImageVersionName : null;
        this.MainClusterName = 'MainClusterName' in params ? params.MainClusterName : null;
        this.ElasticSwitch = 'ElasticSwitch' in params ? params.ElasticSwitch : null;
        this.ElasticLimit = 'ElasticLimit' in params ? params.ElasticLimit : null;

        if (params.SessionResourceTemplate) {
            let obj = new SessionResourceTemplate();
            obj.deserialize(params.SessionResourceTemplate)
            this.SessionResourceTemplate = obj;
        }

    }
}

/**
 * ModifySparkAppBatch request structure.
 * @class
 */
class ModifySparkAppBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of the IDs of the Spark job tasks to be modified in batches.
         * @type {Array.<string> || null}
         */
        this.SparkAppId = null;

        /**
         * The engine ID.
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * The driver size.
Valid values for the standard resource type: `small`, `medium`, `large`, and `xlarge`.
Valid values for the memory resource type: `m.small`, `m.medium`, `m.large`, and `m.xlarge`.
         * @type {string || null}
         */
        this.AppDriverSize = null;

        /**
         * The executor size.
Valid values for the standard resource type: `small`, `medium`, `large`, and `xlarge`.
Valid values for the memory resource type: `m.small`, `m.medium`, `m.large`, and `m.xlarge`.
         * @type {string || null}
         */
        this.AppExecutorSize = null;

        /**
         * The executor count. The minimum value is 1 and the maximum value is less than the cluster specification.
         * @type {number || null}
         */
        this.AppExecutorNums = null;

        /**
         * The maximum executor count (in dynamic configuration scenarios). The minimum value is 1 and the maximum value is less than the cluster specification. If you set `ExecutorMaxNumbers` to a value smaller than that of `ExecutorNums`, the value of `ExecutorMaxNumbers` is automatically changed to that of `ExecutorNums`.
         * @type {number || null}
         */
        this.AppExecutorMaxNumbers = null;

        /**
         * Whether to inherit the task resource configuration from the cluster template. Valid values: `0` (default): No; `1`: Yes.
         * @type {number || null}
         */
        this.IsInherit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SparkAppId = 'SparkAppId' in params ? params.SparkAppId : null;
        this.DataEngine = 'DataEngine' in params ? params.DataEngine : null;
        this.AppDriverSize = 'AppDriverSize' in params ? params.AppDriverSize : null;
        this.AppExecutorSize = 'AppExecutorSize' in params ? params.AppExecutorSize : null;
        this.AppExecutorNums = 'AppExecutorNums' in params ? params.AppExecutorNums : null;
        this.AppExecutorMaxNumbers = 'AppExecutorMaxNumbers' in params ? params.AppExecutorMaxNumbers : null;
        this.IsInherit = 'IsInherit' in params ? params.IsInherit : null;

    }
}

/**
 * CreateTask request structure.
 * @class
 */
class CreateTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Computing task. This parameter contains the task type and related configuration information.
         * @type {Task || null}
         */
        this.Task = null;

        /**
         * Database name. If there is a database name in the SQL statement, the database in the SQL statement will be used first; otherwise, the database specified by this parameter will be used (note: when submitting the database creation SQL statement, passed in an empty string for this field).
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Name of the default data source
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * Data engine name. If this parameter is not specified, the task will be submitted to the default engine.
         * @type {string || null}
         */
        this.DataEngineName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Task) {
            let obj = new Task();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;

    }
}

/**
 * ModifySparkApp response structure.
 * @class
 */
class ModifySparkAppResponse extends  AbstractModel {
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
 * Running logs of a Spark SQL batch job
 * @class
 */
class SparkSessionBatchLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * The log step. Valid values: `BEG`, `CS`, `DS`, `DSS`, `DSF`, `FINF`, `RTO`, `CANCEL`, `CT`, `DT`, `DTS`, `DTF`, `FINT`, and `EXCE`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Step = null;

        /**
         * Time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * The log message.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The operation.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SparkSessionBatchLogOperate> || null}
         */
        this.Operate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Step = 'Step' in params ? params.Step : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Operate) {
            this.Operate = new Array();
            for (let z in params.Operate) {
                let obj = new SparkSessionBatchLogOperate();
                obj.deserialize(params.Operate[z]);
                this.Operate.push(obj);
            }
        }

    }
}

/**
 * Spark job details
 * @class
 */
class SparkJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Spark job ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Spark job name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Spark job type. Valid values: `1` (batch job), `2` (streaming job).
         * @type {number || null}
         */
        this.JobType = null;

        /**
         * Engine name
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * This field has been disused. Use the `Datasource` field instead.
         * @type {string || null}
         */
        this.Eni = null;

        /**
         * Whether the program package is uploaded locally. Valid values: `cos`, `lakefs`.
         * @type {string || null}
         */
        this.IsLocal = null;

        /**
         * Program package path
         * @type {string || null}
         */
        this.JobFile = null;

        /**
         * Role ID
         * @type {number || null}
         */
        this.RoleArn = null;

        /**
         * Main class of Spark job execution
         * @type {string || null}
         */
        this.MainClass = null;

        /**
         * Command line parameters of the Spark job separated by space
         * @type {string || null}
         */
        this.CmdArgs = null;

        /**
         * Native Spark configurations separated by line break
         * @type {string || null}
         */
        this.JobConf = null;

        /**
         * Whether the dependency JAR packages are uploaded locally. Valid values: `cos`, `lakefs`.
         * @type {string || null}
         */
        this.IsLocalJars = null;

        /**
         * Dependency JAR packages of the Spark job separated by comma
         * @type {string || null}
         */
        this.JobJars = null;

        /**
         * Whether the dependency file is uploaded locally. Valid values: `cos`, `lakefs`.
         * @type {string || null}
         */
        this.IsLocalFiles = null;

        /**
         * Dependency files of the Spark job separated by comma
         * @type {string || null}
         */
        this.JobFiles = null;

        /**
         * Driver resource size of the Spark job
         * @type {string || null}
         */
        this.JobDriverSize = null;

        /**
         * Executor resource size of the Spark job
         * @type {string || null}
         */
        this.JobExecutorSize = null;

        /**
         * Number of Spark job executors
         * @type {number || null}
         */
        this.JobExecutorNums = null;

        /**
         * Maximum number of retries of the Spark flow task
         * @type {number || null}
         */
        this.JobMaxAttempts = null;

        /**
         * Spark job creator
         * @type {string || null}
         */
        this.JobCreator = null;

        /**
         * Spark job creation time
         * @type {number || null}
         */
        this.JobCreateTime = null;

        /**
         * Spark job update time
         * @type {number || null}
         */
        this.JobUpdateTime = null;

        /**
         * Last task ID of the Spark job
         * @type {string || null}
         */
        this.CurrentTaskId = null;

        /**
         * Last status of the Spark job
         * @type {number || null}
         */
        this.JobStatus = null;

        /**
         * Spark streaming job statistics
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {StreamingStatistics || null}
         */
        this.StreamingStat = null;

        /**
         * Data source name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * PySpark: Dependency upload method. 1: cos; 2: lakefs (this method needs to be used in the console but cannot be called through APIs).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsLocalPythonFiles = null;

        /**
         * Note: This returned value has been disused.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AppPythonFiles = null;

        /**
         * Archives: Dependency upload method. 1: cos; 2: lakefs (this method needs to be used in the console but cannot be called through APIs).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsLocalArchives = null;

        /**
         * Archives: Dependency resources
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobArchives = null;

        /**
         * The Spark image version.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SparkImage = null;

        /**
         * PySpark: Python dependency, which can be in .py, .zip, or .egg format. Multiple files should be separated by comma.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobPythonFiles = null;

        /**
         * Number of tasks running or ready to run under the current job
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskNum = null;

        /**
         * Engine status. -100 (default value): unknown; -2–11: normal.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataEngineStatus = null;

        /**
         * The specified executor count (max), which defaults to 1. This parameter applies if the "Dynamic" mode is selected. If the "Dynamic" mode is not selected, the executor count is equal to `JobExecutorNums`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.JobExecutorMaxNumbers = null;

        /**
         * The image version.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SparkImageVersion = null;

        /**
         * The ID of the associated Data Lake Compute query script.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * `spark_emr_livy` indicates to create an EMR cluster.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataEngineClusterType = null;

        /**
         * `Spark 3.2-EMR` indicates to use the Spark 3.2 image.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataEngineImageVersion = null;

        /**
         * Whether the task resource configuration is inherited from the cluster template. Valid values: `0` (default): No; `1`: Yes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsInherit = null;

        /**
         * Whether the task runs with the session SQLs. Valid values: `false` for no and `true` for yes.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsSessionStarted = null;

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
        this.JobType = 'JobType' in params ? params.JobType : null;
        this.DataEngine = 'DataEngine' in params ? params.DataEngine : null;
        this.Eni = 'Eni' in params ? params.Eni : null;
        this.IsLocal = 'IsLocal' in params ? params.IsLocal : null;
        this.JobFile = 'JobFile' in params ? params.JobFile : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.MainClass = 'MainClass' in params ? params.MainClass : null;
        this.CmdArgs = 'CmdArgs' in params ? params.CmdArgs : null;
        this.JobConf = 'JobConf' in params ? params.JobConf : null;
        this.IsLocalJars = 'IsLocalJars' in params ? params.IsLocalJars : null;
        this.JobJars = 'JobJars' in params ? params.JobJars : null;
        this.IsLocalFiles = 'IsLocalFiles' in params ? params.IsLocalFiles : null;
        this.JobFiles = 'JobFiles' in params ? params.JobFiles : null;
        this.JobDriverSize = 'JobDriverSize' in params ? params.JobDriverSize : null;
        this.JobExecutorSize = 'JobExecutorSize' in params ? params.JobExecutorSize : null;
        this.JobExecutorNums = 'JobExecutorNums' in params ? params.JobExecutorNums : null;
        this.JobMaxAttempts = 'JobMaxAttempts' in params ? params.JobMaxAttempts : null;
        this.JobCreator = 'JobCreator' in params ? params.JobCreator : null;
        this.JobCreateTime = 'JobCreateTime' in params ? params.JobCreateTime : null;
        this.JobUpdateTime = 'JobUpdateTime' in params ? params.JobUpdateTime : null;
        this.CurrentTaskId = 'CurrentTaskId' in params ? params.CurrentTaskId : null;
        this.JobStatus = 'JobStatus' in params ? params.JobStatus : null;

        if (params.StreamingStat) {
            let obj = new StreamingStatistics();
            obj.deserialize(params.StreamingStat)
            this.StreamingStat = obj;
        }
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.IsLocalPythonFiles = 'IsLocalPythonFiles' in params ? params.IsLocalPythonFiles : null;
        this.AppPythonFiles = 'AppPythonFiles' in params ? params.AppPythonFiles : null;
        this.IsLocalArchives = 'IsLocalArchives' in params ? params.IsLocalArchives : null;
        this.JobArchives = 'JobArchives' in params ? params.JobArchives : null;
        this.SparkImage = 'SparkImage' in params ? params.SparkImage : null;
        this.JobPythonFiles = 'JobPythonFiles' in params ? params.JobPythonFiles : null;
        this.TaskNum = 'TaskNum' in params ? params.TaskNum : null;
        this.DataEngineStatus = 'DataEngineStatus' in params ? params.DataEngineStatus : null;
        this.JobExecutorMaxNumbers = 'JobExecutorMaxNumbers' in params ? params.JobExecutorMaxNumbers : null;
        this.SparkImageVersion = 'SparkImageVersion' in params ? params.SparkImageVersion : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.DataEngineClusterType = 'DataEngineClusterType' in params ? params.DataEngineClusterType : null;
        this.DataEngineImageVersion = 'DataEngineImageVersion' in params ? params.DataEngineImageVersion : null;
        this.IsInherit = 'IsInherit' in params ? params.IsInherit : null;
        this.IsSessionStarted = 'IsSessionStarted' in params ? params.IsSessionStarted : null;

    }
}

/**
 * DescribeSparkSessionBatchSqlLog request structure.
 * @class
 */
class DescribeSparkSessionBatchSqlLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a Spark SQL job.
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

    }
}

/**
 * DescribeSparkAppJob response structure.
 * @class
 */
class DescribeSparkAppJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Spark job details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SparkJobInfo || null}
         */
        this.Job = null;

        /**
         * Whether the queried Spark job exists
         * @type {boolean || null}
         */
        this.IsExists = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Job) {
            let obj = new SparkJobInfo();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.IsExists = 'IsExists' in params ? params.IsExists : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserRoles response structure.
 * @class
 */
class DescribeUserRolesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of user roles meeting the enumeration conditions.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The user roles.
         * @type {Array.<UserRole> || null}
         */
        this.UserRoles = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.UserRoles) {
            this.UserRoles = new Array();
            for (let z in params.UserRoles) {
                let obj = new UserRole();
                obj.deserialize(params.UserRoles[z]);
                this.UserRoles.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Engine configurations
 * @class
 */
class DataEngineConfigPair extends  AbstractModel {
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
 * SuspendResumeDataEngine response structure.
 * @class
 */
class SuspendResumeDataEngineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The details of the virtual cluster.
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Statistics of the Spark flow task
 * @class
 */
class StreamingStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Number of data receivers
         * @type {number || null}
         */
        this.Receivers = null;

        /**
         * Number of receivers in service
         * @type {number || null}
         */
        this.NumActiveReceivers = null;

        /**
         * Number of inactive receivers
         * @type {number || null}
         */
        this.NumInactiveReceivers = null;

        /**
         * Number of running batches
         * @type {number || null}
         */
        this.NumActiveBatches = null;

        /**
         * Number of batches to be processed
         * @type {number || null}
         */
        this.NumRetainedCompletedBatches = null;

        /**
         * Number of completed batches
         * @type {number || null}
         */
        this.NumTotalCompletedBatches = null;

        /**
         * Average input speed
         * @type {number || null}
         */
        this.AverageInputRate = null;

        /**
         * Average queue time
         * @type {number || null}
         */
        this.AverageSchedulingDelay = null;

        /**
         * Average processing time
         * @type {number || null}
         */
        this.AverageProcessingTime = null;

        /**
         * Average latency
         * @type {number || null}
         */
        this.AverageTotalDelay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.NumActiveReceivers = 'NumActiveReceivers' in params ? params.NumActiveReceivers : null;
        this.NumInactiveReceivers = 'NumInactiveReceivers' in params ? params.NumInactiveReceivers : null;
        this.NumActiveBatches = 'NumActiveBatches' in params ? params.NumActiveBatches : null;
        this.NumRetainedCompletedBatches = 'NumRetainedCompletedBatches' in params ? params.NumRetainedCompletedBatches : null;
        this.NumTotalCompletedBatches = 'NumTotalCompletedBatches' in params ? params.NumTotalCompletedBatches : null;
        this.AverageInputRate = 'AverageInputRate' in params ? params.AverageInputRate : null;
        this.AverageSchedulingDelay = 'AverageSchedulingDelay' in params ? params.AverageSchedulingDelay : null;
        this.AverageProcessingTime = 'AverageProcessingTime' in params ? params.AverageProcessingTime : null;
        this.AverageTotalDelay = 'AverageTotalDelay' in params ? params.AverageTotalDelay : null;

    }
}

/**
 * GenerateCreateMangedTableSql response structure.
 * @class
 */
class GenerateCreateMangedTableSqlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SQL statements for creating the managed internal table.
         * @type {Execution || null}
         */
        this.Execution = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Execution) {
            let obj = new Execution();
            obj.deserialize(params.Execution)
            this.Execution = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelTask request structure.
 * @class
 */
class CancelTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique task ID
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * The task instance.
 * @class
 */
class TaskResponseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name of the task
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Data volume of the task
         * @type {number || null}
         */
        this.DataAmount = null;

        /**
         * Task ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The compute time in ms.
         * @type {number || null}
         */
        this.UsedTime = null;

        /**
         * Task output path
         * @type {string || null}
         */
        this.OutputPath = null;

        /**
         * Task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The task status. Valid values: `0` (initializing), `1` (executing), `2` (executed), `3` (writing data), `4` (queuing), `-1` (failed), and `-3` (canceled).
         * @type {number || null}
         */
        this.State = null;

        /**
         * SQL statement type of the task, such as DDL and DML.
         * @type {string || null}
         */
        this.SQLType = null;

        /**
         * SQL statement of the task
         * @type {string || null}
         */
        this.SQL = null;

        /**
         * Whether the result has expired
         * @type {boolean || null}
         */
        this.ResultExpired = null;

        /**
         * Number of affected data rows
         * @type {string || null}
         */
        this.RowAffectInfo = null;

        /**
         * Dataset of task results
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataSet = null;

        /**
         * Failure information, such as `errorMessage`. This field has been disused.
         * @type {string || null}
         */
        this.Error = null;

        /**
         * Task progress (%)
         * @type {number || null}
         */
        this.Percentage = null;

        /**
         * Output information of task execution
         * @type {string || null}
         */
        this.OutputMessage = null;

        /**
         * Type of the engine executing the SQL statement
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Task progress details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProgressDetail = null;

        /**
         * Task end time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Compute resource ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataEngineId = null;

        /**
         * Sub-UIN that executes the SQL statement
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Compute resource name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * Whether the import type is local import or COS
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * Import configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InputConf = null;

        /**
         * Number of data entries
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataNumber = null;

        /**
         * Whether the data can be downloaded
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.CanDownload = null;

        /**
         * User alias
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserAlias = null;

        /**
         * Spark application job name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SparkJobName = null;

        /**
         * Spark application job ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SparkJobId = null;

        /**
         * JAR file of the Spark application entry
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SparkJobFile = null;

        /**
         * Spark UI URL
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UiUrl = null;

        /**
         * The task time in ms.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * The program entry parameter for running a task under a Spark job.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CmdArgs = null;

        /**
         * The image version of the cluster.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImageVersion = null;

        /**
         * The driver size.
Valid values for the standard resource type: `small`, `medium`, `large`, and `xlarge`.
Valid values for the memory resource type: `m.small`, `m.medium`, `m.large`, and `m.xlarge`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DriverSize = null;

        /**
         * The executor size.
Valid values for the standard resource type: `small`, `medium`, `large`, and `xlarge`.
Valid values for the memory resource type: `m.small`, `m.medium`, `m.large`, and `m.xlarge`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExecutorSize = null;

        /**
         * The executor count. The minimum value is 1 and the maximum value is less than the cluster specification.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExecutorNums = null;

        /**
         * The maximum executor count (in dynamic mode). The minimum value is 1 and the maximum value is less than the cluster specification. If you set `ExecutorMaxNumbers` to a value smaller than that of `ExecutorNums`, the value of `ExecutorMaxNumbers` is automatically changed to that of `ExecutorNums`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExecutorMaxNumbers = null;

        /**
         * Common task metrics
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {CommonMetrics || null}
         */
        this.CommonMetrics = null;

        /**
         * The Spark task metrics.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {SparkMonitorMetrics || null}
         */
        this.SparkMonitorMetrics = null;

        /**
         * The Presto task metrics.
Note: u200dThis field may returnu200d·nullu200d, indicating that no valid values can be obtained.
         * @type {PrestoMonitorMetrics || null}
         */
        this.PrestoMonitorMetrics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.DataAmount = 'DataAmount' in params ? params.DataAmount : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.UsedTime = 'UsedTime' in params ? params.UsedTime : null;
        this.OutputPath = 'OutputPath' in params ? params.OutputPath : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.State = 'State' in params ? params.State : null;
        this.SQLType = 'SQLType' in params ? params.SQLType : null;
        this.SQL = 'SQL' in params ? params.SQL : null;
        this.ResultExpired = 'ResultExpired' in params ? params.ResultExpired : null;
        this.RowAffectInfo = 'RowAffectInfo' in params ? params.RowAffectInfo : null;
        this.DataSet = 'DataSet' in params ? params.DataSet : null;
        this.Error = 'Error' in params ? params.Error : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;
        this.OutputMessage = 'OutputMessage' in params ? params.OutputMessage : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProgressDetail = 'ProgressDetail' in params ? params.ProgressDetail : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.DataEngineId = 'DataEngineId' in params ? params.DataEngineId : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.InputConf = 'InputConf' in params ? params.InputConf : null;
        this.DataNumber = 'DataNumber' in params ? params.DataNumber : null;
        this.CanDownload = 'CanDownload' in params ? params.CanDownload : null;
        this.UserAlias = 'UserAlias' in params ? params.UserAlias : null;
        this.SparkJobName = 'SparkJobName' in params ? params.SparkJobName : null;
        this.SparkJobId = 'SparkJobId' in params ? params.SparkJobId : null;
        this.SparkJobFile = 'SparkJobFile' in params ? params.SparkJobFile : null;
        this.UiUrl = 'UiUrl' in params ? params.UiUrl : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.CmdArgs = 'CmdArgs' in params ? params.CmdArgs : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;
        this.DriverSize = 'DriverSize' in params ? params.DriverSize : null;
        this.ExecutorSize = 'ExecutorSize' in params ? params.ExecutorSize : null;
        this.ExecutorNums = 'ExecutorNums' in params ? params.ExecutorNums : null;
        this.ExecutorMaxNumbers = 'ExecutorMaxNumbers' in params ? params.ExecutorMaxNumbers : null;

        if (params.CommonMetrics) {
            let obj = new CommonMetrics();
            obj.deserialize(params.CommonMetrics)
            this.CommonMetrics = obj;
        }

        if (params.SparkMonitorMetrics) {
            let obj = new SparkMonitorMetrics();
            obj.deserialize(params.SparkMonitorMetrics)
            this.SparkMonitorMetrics = obj;
        }

        if (params.PrestoMonitorMetrics) {
            let obj = new PrestoMonitorMetrics();
            obj.deserialize(params.PrestoMonitorMetrics)
            this.PrestoMonitorMetrics = obj;
        }

    }
}

/**
 * Properties of database and table
 * @class
 */
class Property extends  AbstractModel {
    constructor(){
        super();

        /**
         * The property key name.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The property value.
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
 * DeleteSparkApp request structure.
 * @class
 */
class DeleteSparkAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Spark job name.
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * DescribeUserRoles request structure.
 * @class
 */
class DescribeUserRolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number limit of enumerated user roles.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The offset for starting enumeration. 
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Fuzzy enumeration by arn.
         * @type {string || null}
         */
        this.Fuzzy = null;

        /**
         * The field for sorting the returned results.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * The sorting order, descending or ascending, such as `desc`.
         * @type {string || null}
         */
        this.Sorting = null;

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
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.Sorting = 'Sorting' in params ? params.Sorting : null;

    }
}

/**
 * SQL statement objects
 * @class
 */
class Execution extends  AbstractModel {
    constructor(){
        super();

        /**
         * The automatically generated SQL statements.
         * @type {string || null}
         */
        this.SQL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SQL = 'SQL' in params ? params.SQL : null;

    }
}

/**
 * Column information of the data table.
 * @class
 */
class Column extends  AbstractModel {
    constructor(){
        super();

        /**
         * Column name, which is case-insensitive and can contain up to 25 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Column type. Valid values:
string|tinyint|smallint|int|bigint|boolean|float|double|decimal|timestamp|date|binary|array<data_type>|map<primitive_type, data_type>|struct<col_name : data_type [COMMENT col_comment], ...>|uniontype<data_type, data_type, ...>.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Class comment.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Length of the entire numeric value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Precision = null;

        /**
         * Length of the decimal part
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Scale = null;

        /**
         * Whether the column is null.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nullable = null;

        /**
         * Field position
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Position = null;

        /**
         * Field creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Field modification time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * Whether the column is the partition field.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsPartition = null;

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
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Precision = 'Precision' in params ? params.Precision : null;
        this.Scale = 'Scale' in params ? params.Scale : null;
        this.Nullable = 'Nullable' in params ? params.Nullable : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.IsPartition = 'IsPartition' in params ? params.IsPartition : null;

    }
}

/**
 * DescribeTaskResult request structure.
 * @class
 */
class DescribeTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The pagination information returned by the last response. This parameter can be omitted for the first response, where the data will be returned from the beginning. The data with a volume set by the `MaxResults` field is returned each time.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Maximum number of returned rows. Value range: 0–1,000. Default value: 1,000.
         * @type {number || null}
         */
        this.MaxResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

    }
}

/**
 * Query list filter parameter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attribute name. If more than one filter exists, the logical relationship between these filters is `OR`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Attribute value. If multiple values exist in one filter, the logical relationship between these values is `OR`.
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
 * DescribeLakeFsDirSummary response structure.
 * @class
 */
class DescribeLakeFsDirSummaryResponse extends  AbstractModel {
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
 * DescribeForbiddenTablePro response structure.
 * @class
 */
class DescribeForbiddenTableProResponse extends  AbstractModel {
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
 * CancelTask response structure.
 * @class
 */
class CancelTaskResponse extends  AbstractModel {
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
 * The data governance rules.
 * @class
 */
class DataGovernPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Governance rule type. Valid values: `Customize` (custom) and `Intelligence` (intelligent).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * The governance engine.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GovernEngine = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.GovernEngine = 'GovernEngine' in params ? params.GovernEngine : null;

    }
}

/**
 * ModifySparkAppBatch response structure.
 * @class
 */
class ModifySparkAppBatchResponse extends  AbstractModel {
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
 * Table partition information
 * @class
 */
class TPartition extends  AbstractModel {
    constructor(){
        super();

        /**
         * The field name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The field type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The field description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * The partition type.
         * @type {string || null}
         */
        this.PartitionType = null;

        /**
         * The partition format.
         * @type {string || null}
         */
        this.PartitionFormat = null;

        /**
         * The separator count of the partition conversion policy.
         * @type {number || null}
         */
        this.PartitionDot = null;

        /**
         * The partition conversion policy.
         * @type {string || null}
         */
        this.Transform = null;

        /**
         * The policy parameters.
         * @type {Array.<string> || null}
         */
        this.TransformArgs = null;

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
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.PartitionType = 'PartitionType' in params ? params.PartitionType : null;
        this.PartitionFormat = 'PartitionFormat' in params ? params.PartitionFormat : null;
        this.PartitionDot = 'PartitionDot' in params ? params.PartitionDot : null;
        this.Transform = 'Transform' in params ? params.Transform : null;
        this.TransformArgs = 'TransformArgs' in params ? params.TransformArgs : null;

    }
}

/**
 * DescribeLakeFsInfo response structure.
 * @class
 */
class DescribeLakeFsInfoResponse extends  AbstractModel {
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
 * CancelSparkSessionBatchSQL response structure.
 * @class
 */
class CancelSparkSessionBatchSQLResponse extends  AbstractModel {
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
 * CreateSparkSessionBatchSQL response structure.
 * @class
 */
class CreateSparkSessionBatchSQLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique identifier of a batch task.
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLakeFsDirSummary request structure.
 * @class
 */
class DescribeLakeFsDirSummaryRequest extends  AbstractModel {
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
 * Permission objects
 * @class
 */
class Policy extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the target database. `*` represents all databases in the current catalog. To grant admin permissions, it must be `*`; to grant data connection permissions, it must be null; to grant other permissions, it can be any database.
         * @type {string || null}
         */
        this.Database = null;

        /**
         * The name of the target data source. To grant admin permission, it must be `*` (all resources at this level); to grant data source and database permissions, it must be `COSDataCatalog` or `*`; to grant table permissions, it can be a custom data source; if it is left empty, `DataLakeCatalog` is used. Note: To grant permissions on a custom data source, the permissions that can be managed in the Data Lake Compute console are subsets of the account permissions granted when you connect the data source to the console.
         * @type {string || null}
         */
        this.Catalog = null;

        /**
         * The name of the target table. `*` represents all tables in the current database. To grant admin permissions, it must be `*`; to grant data connection and database permissions, it must be null; to grant other permissions, it can be any table.
         * @type {string || null}
         */
        this.Table = null;

        /**
         * The target permissions, which vary by permission level. Admin: `ALL` (default); data connection: `CREATE`; database: `ALL`, `CREATE`, `ALTER`, and `DROP`; table: `ALL`, `SELECT`, `INSERT`, `ALTER`, `DELETE`, `DROP`, and `UPDATE`. Note: For table permissions, if a data source other than `COSDataCatalog` is specified, only the `SELECT` permission can be granted here.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * The permission type. Valid values: `ADMIN`, `DATASOURCE`, `DATABASE`, `TABLE`, `VIEW`, `FUNCTION`, `COLUMN`, and `ENGINE`. Note: If it is left empty, `ADMIN` is used.
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * The name of the target function. `*` represents all functions in the current catalog. To grant admin permissions, it must be `*`; to grant data connection permissions, it must be null; to grant other permissions, it can be any function.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Function = null;

        /**
         * The name of the target view. `*` represents all views in the current database. To grant admin permissions, it must be `*`; to grant data connection and database permissions, it must be null; to grant other permissions, it can be any view.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.View = null;

        /**
         * The name of the target column. `*` represents all columns. To grant admin permissions, it must be `*`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Column = null;

        /**
         * The name of the target data engine. `*` represents all engines. To grant admin permissions, it must be `*`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * Whether the grantee is allowed to further grant the permissions. Valid values: `false` (default) and `true` (the grantee can grant permissions gained here to other sub-users).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ReAuth = null;

        /**
         * The permission source, which is not required when input parameters are passed in. Valid values: `USER` (from the user) and `WORKGROUP` (from one or more associated work groups).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Source = null;

        /**
         * The grant mode, which is not required as an input parameter. Valid values: `COMMON` and `SENIOR`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * The operator, which is not required as an input parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * The permission policy creation time, which is not required as an input parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The ID of the work group, which applies only when the value of the `Source` field is `WORKGROUP`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SourceId = null;

        /**
         * The name of the work group, which applies only when the value of the `Source` field is `WORKGROUP`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SourceName = null;

        /**
         * The policy ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
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
        this.Database = 'Database' in params ? params.Database : null;
        this.Catalog = 'Catalog' in params ? params.Catalog : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Function = 'Function' in params ? params.Function : null;
        this.View = 'View' in params ? params.View : null;
        this.Column = 'Column' in params ? params.Column : null;
        this.DataEngine = 'DataEngine' in params ? params.DataEngine : null;
        this.ReAuth = 'ReAuth' in params ? params.ReAuth : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SourceName = 'SourceName' in params ? params.SourceName : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * CreateSparkApp response structure.
 * @class
 */
class CreateSparkAppResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the application.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SparkAppId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SparkAppId = 'SparkAppId' in params ? params.SparkAppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTask response structure.
 * @class
 */
class CreateTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteSparkApp response structure.
 * @class
 */
class DeleteSparkAppResponse extends  AbstractModel {
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
 * CreateTasks request structure.
 * @class
 */
class CreateTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name. If there is a database name in the SQL statement, the database in the SQL statement will be used first; otherwise, the database specified by this parameter will be used (note: when submitting the database creation SQL statement, passed in an empty string for this field).
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * SQL task information
         * @type {TasksInfo || null}
         */
        this.Tasks = null;

        /**
         * Data source name. Default value: DataLakeCatalog.
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * Compute engine name. If this parameter is not specified, the task will be submitted to the default engine.
         * @type {string || null}
         */
        this.DataEngineName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;

        if (params.Tasks) {
            let obj = new TasksInfo();
            obj.deserialize(params.Tasks)
            this.Tasks = obj;
        }
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;

    }
}

/**
 * SuspendResumeDataEngine request structure.
 * @class
 */
class SuspendResumeDataEngineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of a virtual cluster.
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * The operation type: `suspend` or `resume`.
         * @type {string || null}
         */
        this.Operate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.Operate = 'Operate' in params ? params.Operate : null;

    }
}

/**
 * DescribeSparkAppJobs response structure.
 * @class
 */
class DescribeSparkAppJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Detailed list of Spark jobs
         * @type {Array.<SparkJobInfo> || null}
         */
        this.SparkAppJobs = null;

        /**
         * Total number of Spark jobs
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

        if (params.SparkAppJobs) {
            this.SparkAppJobs = new Array();
            for (let z in params.SparkAppJobs) {
                let obj = new SparkJobInfo();
                obj.deserialize(params.SparkAppJobs[z]);
                this.SparkAppJobs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Scheduled start and suspension information
 * @class
 */
class CrontabResumeSuspendStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scheduled start time, such as 8:00 AM every Monday.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResumeTime = null;

        /**
         * The scheduled suspension time, such as 8:00 PM every Monday.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SuspendTime = null;

        /**
         * The suspension setting. Valid values: `0` (suspension after task end, default) and `1` (force suspension).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SuspendStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;
        this.SuspendTime = 'SuspendTime' in params ? params.SuspendTime : null;
        this.SuspendStrategy = 'SuspendStrategy' in params ? params.SuspendStrategy : null;

    }
}

/**
 * CancelSparkSessionBatchSQL request structure.
 * @class
 */
class CancelSparkSessionBatchSQLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique identifier of a batch task.
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

    }
}

/**
 * The task overview.
 * @class
 */
class TasksOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of tasks in queue.
         * @type {number || null}
         */
        this.TaskQueuedCount = null;

        /**
         * The number of initialized tasks.
         * @type {number || null}
         */
        this.TaskInitCount = null;

        /**
         * The number of tasks in progress.
         * @type {number || null}
         */
        this.TaskRunningCount = null;

        /**
         * The total number of tasks in this time range.
         * @type {number || null}
         */
        this.TotalTaskCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskQueuedCount = 'TaskQueuedCount' in params ? params.TaskQueuedCount : null;
        this.TaskInitCount = 'TaskInitCount' in params ? params.TaskInitCount : null;
        this.TaskRunningCount = 'TaskRunningCount' in params ? params.TaskRunningCount : null;
        this.TotalTaskCount = 'TotalTaskCount' in params ? params.TotalTaskCount : null;

    }
}

/**
 * CreateTasks response structure.
 * @class
 */
class CreateTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the current batch of submitted tasks
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * Collection of task IDs arranged in order of execution
         * @type {Array.<string> || null}
         */
        this.TaskIdSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskIdSet = 'TaskIdSet' in params ? params.TaskIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Operation information in the logs of a Spark SQL batch job
 * @class
 */
class SparkSessionBatchLogOperate extends  AbstractModel {
    constructor(){
        super();

        /**
         * The operation message.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * The operation type. Valid values: `COPY`, `LOG`, `UI`, `RESULT`, `List`, and `TAB`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operate = null;

        /**
         * Additional information, such as taskid, sessionid, and sparkui.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<KVPair> || null}
         */
        this.Supplement = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Operate = 'Operate' in params ? params.Operate : null;

        if (params.Supplement) {
            this.Supplement = new Array();
            for (let z in params.Supplement) {
                let obj = new KVPair();
                obj.deserialize(params.Supplement[z]);
                this.Supplement.push(obj);
            }
        }

    }
}

/**
 * CreateSparkSessionBatchSQL request structure.
 * @class
 */
class CreateSparkSessionBatchSQLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the engine for executing the Spark job.
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * The SQL statement to execute.
         * @type {string || null}
         */
        this.ExecuteSQL = null;

        /**
         * The driver size. Valid values: `small` (default, 1 CU), `medium` (2 CUs), `large` (4 CUs), and `xlarge` (8 CUs).
         * @type {string || null}
         */
        this.DriverSize = null;

        /**
         * The executor size. Valid values: `small` (default, 1 CU), `medium` (2 CUs), `large` (4 CUs), and `xlarge` (8 CUs).
         * @type {string || null}
         */
        this.ExecutorSize = null;

        /**
         * The executor count, which defaults to 1.
         * @type {number || null}
         */
        this.ExecutorNumbers = null;

        /**
         * The maximum executor count, which defaults to 1. This parameter applies if the "Dynamic" mode is selected. If the "Dynamic" mode is not selected, the value of this parameter is the same as that of `ExecutorNumbers`.
         * @type {number || null}
         */
        this.ExecutorMaxNumbers = null;

        /**
         * The session timeout period in seconds. Default value: 3600
         * @type {number || null}
         */
        this.TimeoutInSecond = null;

        /**
         * The unique ID of a session. If this parameter is specified, the task will be run using the specified session.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * The name of the session to create.
         * @type {string || null}
         */
        this.SessionName = null;

        /**
         * The session configurations. Valid values: `1.dlc.eni` for user-defined ENI gateway information;
`2.dlc.role.arn` for user-defined roleArn configurations;
and `3.dlc.sql.set.config` for user-defined cluster configurations.
         * @type {Array.<KVPair> || null}
         */
        this.Arguments = null;

        /**
         * Whether to inherit the resource configurations from the cluster. Valid values: `0` for no (default) and `1` for yes.
         * @type {number || null}
         */
        this.IsInherit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.ExecuteSQL = 'ExecuteSQL' in params ? params.ExecuteSQL : null;
        this.DriverSize = 'DriverSize' in params ? params.DriverSize : null;
        this.ExecutorSize = 'ExecutorSize' in params ? params.ExecutorSize : null;
        this.ExecutorNumbers = 'ExecutorNumbers' in params ? params.ExecutorNumbers : null;
        this.ExecutorMaxNumbers = 'ExecutorMaxNumbers' in params ? params.ExecutorMaxNumbers : null;
        this.TimeoutInSecond = 'TimeoutInSecond' in params ? params.TimeoutInSecond : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionName = 'SessionName' in params ? params.SessionName : null;

        if (params.Arguments) {
            this.Arguments = new Array();
            for (let z in params.Arguments) {
                let obj = new KVPair();
                obj.deserialize(params.Arguments[z]);
                this.Arguments.push(obj);
            }
        }
        this.IsInherit = 'IsInherit' in params ? params.IsInherit : null;

    }
}

/**
 * CreateInternalTable response structure.
 * @class
 */
class CreateInternalTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SQL statements for creating the managed internal table.
         * @type {string || null}
         */
        this.Execution = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Execution = 'Execution' in params ? params.Execution : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSparkAppTasks request structure.
 * @class
 */
class DescribeSparkAppTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Spark job ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Paginated query offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Paginated query limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Execution instance ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The update start time in the format of yyyy-MM-dd HH:mm:ss.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The update end time in the format of yyyy-MM-dd HH:mm:ss.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter by this parameter, which can be `task-state`.
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
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

    }
}

/**
 *  SQL query task
 * @class
 */
class SQLTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encrypted SQL statement
         * @type {string || null}
         */
        this.SQL = null;

        /**
         * Task configuration information
         * @type {Array.<KVPair> || null}
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
        this.SQL = 'SQL' in params ? params.SQL : null;

        if (params.Config) {
            this.Config = new Array();
            for (let z in params.Config) {
                let obj = new KVPair();
                obj.deserialize(params.Config[z]);
                this.Config.push(obj);
            }
        }

    }
}

/**
 * UpdateRowFilter response structure.
 * @class
 */
class UpdateRowFilterResponse extends  AbstractModel {
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
 * CreateResultDownload request structure.
 * @class
 */
class CreateResultDownloadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The result query task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The result format.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Whether to re-generate a file to download. This parameter applies only when the last task is `timeout` or `error`.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * ModifyGovernEventRule request structure.
 * @class
 */
class ModifyGovernEventRuleRequest extends  AbstractModel {
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
 * UpdateRowFilter request structure.
 * @class
 */
class UpdateRowFilterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the row filter policy, which can be obtained using the `DescribeUserInfo` or `DescribeWorkGroupInfo` API.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * The new filter policy.
         * @type {Policy || null}
         */
        this.Policy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

        if (params.Policy) {
            let obj = new Policy();
            obj.deserialize(params.Policy)
            this.Policy = obj;
        }

    }
}

/**
 * Table field information
 * @class
 */
class TColumn extends  AbstractModel {
    constructor(){
        super();

        /**
         * The field name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The field type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The field description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * The default field value.
         * @type {string || null}
         */
        this.Default = null;

        /**
         * Whether the field is not null.
         * @type {boolean || null}
         */
        this.NotNull = null;

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
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.NotNull = 'NotNull' in params ? params.NotNull : null;

    }
}

/**
 * DescribeResultDownload request structure.
 * @class
 */
class DescribeResultDownloadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The query task ID.
         * @type {string || null}
         */
        this.DownloadId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadId = 'DownloadId' in params ? params.DownloadId : null;

    }
}

module.exports = {
    DescribeResultDownloadResponse: DescribeResultDownloadResponse,
    DescribeTaskResultResponse: DescribeTaskResultResponse,
    PrestoMonitorMetrics: PrestoMonitorMetrics,
    DescribeSparkAppJobRequest: DescribeSparkAppJobRequest,
    CosPermission: CosPermission,
    CreateResultDownloadResponse: CreateResultDownloadResponse,
    ModifyGovernEventRuleResponse: ModifyGovernEventRuleResponse,
    SparkMonitorMetrics: SparkMonitorMetrics,
    TagInfo: TagInfo,
    SwitchDataEngineRequest: SwitchDataEngineRequest,
    SessionResourceTemplate: SessionResourceTemplate,
    Task: Task,
    TaskResultInfo: TaskResultInfo,
    DescribeSparkAppTasksResponse: DescribeSparkAppTasksResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    CommonMetrics: CommonMetrics,
    UserRole: UserRole,
    DescribeSparkSessionBatchSqlLogResponse: DescribeSparkSessionBatchSqlLogResponse,
    GenerateCreateMangedTableSqlRequest: GenerateCreateMangedTableSqlRequest,
    SwitchDataEngineResponse: SwitchDataEngineResponse,
    DescribeLakeFsInfoRequest: DescribeLakeFsInfoRequest,
    ModifySparkAppRequest: ModifySparkAppRequest,
    DescribeTasksRequest: DescribeTasksRequest,
    CreateSparkAppTaskRequest: CreateSparkAppTaskRequest,
    DescribeEngineUsageInfoResponse: DescribeEngineUsageInfoResponse,
    KVPair: KVPair,
    TableBaseInfo: TableBaseInfo,
    CreateSparkAppTaskResponse: CreateSparkAppTaskResponse,
    CreateInternalTableRequest: CreateInternalTableRequest,
    TasksInfo: TasksInfo,
    CreateSparkAppRequest: CreateSparkAppRequest,
    DescribeEngineUsageInfoRequest: DescribeEngineUsageInfoRequest,
    DescribeForbiddenTableProRequest: DescribeForbiddenTableProRequest,
    CreateDataEngineResponse: CreateDataEngineResponse,
    DescribeSparkAppJobsRequest: DescribeSparkAppJobsRequest,
    CreateDataEngineRequest: CreateDataEngineRequest,
    ModifySparkAppBatchRequest: ModifySparkAppBatchRequest,
    CreateTaskRequest: CreateTaskRequest,
    ModifySparkAppResponse: ModifySparkAppResponse,
    SparkSessionBatchLog: SparkSessionBatchLog,
    SparkJobInfo: SparkJobInfo,
    DescribeSparkSessionBatchSqlLogRequest: DescribeSparkSessionBatchSqlLogRequest,
    DescribeSparkAppJobResponse: DescribeSparkAppJobResponse,
    DescribeUserRolesResponse: DescribeUserRolesResponse,
    DataEngineConfigPair: DataEngineConfigPair,
    SuspendResumeDataEngineResponse: SuspendResumeDataEngineResponse,
    StreamingStatistics: StreamingStatistics,
    GenerateCreateMangedTableSqlResponse: GenerateCreateMangedTableSqlResponse,
    CancelTaskRequest: CancelTaskRequest,
    TaskResponseInfo: TaskResponseInfo,
    Property: Property,
    DeleteSparkAppRequest: DeleteSparkAppRequest,
    DescribeUserRolesRequest: DescribeUserRolesRequest,
    Execution: Execution,
    Column: Column,
    DescribeTaskResultRequest: DescribeTaskResultRequest,
    Filter: Filter,
    DescribeLakeFsDirSummaryResponse: DescribeLakeFsDirSummaryResponse,
    DescribeForbiddenTableProResponse: DescribeForbiddenTableProResponse,
    CancelTaskResponse: CancelTaskResponse,
    DataGovernPolicy: DataGovernPolicy,
    ModifySparkAppBatchResponse: ModifySparkAppBatchResponse,
    TPartition: TPartition,
    DescribeLakeFsInfoResponse: DescribeLakeFsInfoResponse,
    CancelSparkSessionBatchSQLResponse: CancelSparkSessionBatchSQLResponse,
    CreateSparkSessionBatchSQLResponse: CreateSparkSessionBatchSQLResponse,
    DescribeLakeFsDirSummaryRequest: DescribeLakeFsDirSummaryRequest,
    Policy: Policy,
    CreateSparkAppResponse: CreateSparkAppResponse,
    CreateTaskResponse: CreateTaskResponse,
    DeleteSparkAppResponse: DeleteSparkAppResponse,
    CreateTasksRequest: CreateTasksRequest,
    SuspendResumeDataEngineRequest: SuspendResumeDataEngineRequest,
    DescribeSparkAppJobsResponse: DescribeSparkAppJobsResponse,
    CrontabResumeSuspendStrategy: CrontabResumeSuspendStrategy,
    CancelSparkSessionBatchSQLRequest: CancelSparkSessionBatchSQLRequest,
    TasksOverview: TasksOverview,
    CreateTasksResponse: CreateTasksResponse,
    SparkSessionBatchLogOperate: SparkSessionBatchLogOperate,
    CreateSparkSessionBatchSQLRequest: CreateSparkSessionBatchSQLRequest,
    CreateInternalTableResponse: CreateInternalTableResponse,
    DescribeSparkAppTasksRequest: DescribeSparkAppTasksRequest,
    SQLTask: SQLTask,
    UpdateRowFilterResponse: UpdateRowFilterResponse,
    CreateResultDownloadRequest: CreateResultDownloadRequest,
    ModifyGovernEventRuleRequest: ModifyGovernEventRuleRequest,
    UpdateRowFilterRequest: UpdateRowFilterRequest,
    TColumn: TColumn,
    DescribeResultDownloadRequest: DescribeResultDownloadRequest,

}
