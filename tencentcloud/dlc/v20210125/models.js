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
         * Filter by compute resource name
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
         * Command line parameters of the Spark job separated by space. They are generally used for periodic calls.
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
 * DescribeSparkAppJob request structure.
 * @class
 */
class DescribeSparkAppJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Spark job ID. If it co-exists with `JobName`, `JobName` will become invalid.
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
 * Task instance
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
         * Computing time in ms
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
         * Task status. Valid values: `0` (initial), `1` (executing), `2` (executed successfully), `-1` (failed to execute), `-3` (canceled).
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
 * CreateSparkApp response structure.
 * @class
 */
class CreateSparkAppResponse extends  AbstractModel {
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
 * Task result information
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
         * Current status of the task. `0`: initial; `1`: task running; `2`: task execution succeeded; `-1`: task execution failed; `-3`: task terminated manually by the user. The task execution result will be returned only if task execution succeeds.
         * @type {number || null}
         */
        this.State = null;

        /**
         * Amount of the data scanned in bytes
         * @type {number || null}
         */
        this.DataAmount = null;

        /**
         * Task execution time in seconds
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
 * DeleteSparkApp request structure.
 * @class
 */
class DeleteSparkAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Spark application name
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
         * Filter by this parameter, which can be `spark-job-name`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Update start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Update end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Query list offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Query list limit
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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Spark application name
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 1: Spark JAR application; 2: Spark streaming application
         * @type {number || null}
         */
        this.AppType = null;

        /**
         * The data engine executing the Spark job
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * Execution entry of the Spark application
         * @type {string || null}
         */
        this.AppFile = null;

        /**
         * Execution role ID of the Spark job
         * @type {number || null}
         */
        this.RoleArn = null;

        /**
         * Driver resource specification of the Spark job. Valid values: `small`, `medium`, `large`, `xlarge`.
         * @type {string || null}
         */
        this.AppDriverSize = null;

        /**
         * Executor resource specification of the Spark job. Valid values: `small`, `medium`, `large`, `xlarge`.
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
         * Whether it is upload locally. Valid values: `cos`, `lakefs`.
         * @type {string || null}
         */
        this.IsLocal = null;

        /**
         * Main class of the Spark JAR job during execution
         * @type {string || null}
         */
        this.MainClass = null;

        /**
         * Spark configurations separated by line break
         * @type {string || null}
         */
        this.AppConf = null;

        /**
         * Whether it is upload locally. Valid values: `cos`, `lakefs`.
         * @type {string || null}
         */
        this.IsLocalJars = null;

        /**
         * Dependency JAR packages of the Spark JAR job separated by comma
         * @type {string || null}
         */
        this.AppJars = null;

        /**
         * Whether it is upload locally. Valid values: `cos`, `lakefs`.
         * @type {string || null}
         */
        this.IsLocalFiles = null;

        /**
         * Dependency resources of the Spark job separated by comma
         * @type {string || null}
         */
        this.AppFiles = null;

        /**
         * Command line parameters of the Spark job
         * @type {string || null}
         */
        this.CmdArgs = null;

        /**
         * This parameter takes effect only for Spark flow tasks.
         * @type {number || null}
         */
        this.MaxRetries = null;

        /**
         * Data source name
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * PySpark: Dependency upload method. 1: cos; 2: lakefs (this method needs to be used in the console but cannot be called through APIs).
         * @type {string || null}
         */
        this.IsLocalPythonFiles = null;

        /**
         * PySpark: Python dependency, which can be in .py, .zip, or .egg format. Multiple files should be separated by comma.
         * @type {string || null}
         */
        this.AppPythonFiles = null;

        /**
         * Archives: Dependency upload method. 1: cos; 2: lakefs (this method needs to be used in the console but cannot be called through APIs).
         * @type {string || null}
         */
        this.IsLocalArchives = null;

        /**
         * Archives: Dependency resources
         * @type {string || null}
         */
        this.AppArchives = null;

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
         * Pagination information returned by the last response. This parameter can be omitted for the first response, where the data will be returned from the beginning. 1,000 rows of data are returned each time.
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
        this.JobPythonFiles = 'JobPythonFiles' in params ? params.JobPythonFiles : null;
        this.TaskNum = 'TaskNum' in params ? params.TaskNum : null;
        this.DataEngineStatus = 'DataEngineStatus' in params ? params.DataEngineStatus : null;

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
         * Update start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Update end time
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
 * ModifySparkApp request structure.
 * @class
 */
class ModifySparkAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Spark application name
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 1: Spark JAR application; 2: Spark streaming application
         * @type {number || null}
         */
        this.AppType = null;

        /**
         * The data engine executing the Spark job
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * Execution entry of the Spark application
         * @type {string || null}
         */
        this.AppFile = null;

        /**
         * Execution role ID of the Spark job
         * @type {number || null}
         */
        this.RoleArn = null;

        /**
         * Driver resource specification of the Spark job. Valid values: `small`, `medium`, `large`, `xlarge`.
         * @type {string || null}
         */
        this.AppDriverSize = null;

        /**
         * Executor resource specification of the Spark job. Valid values: `small`, `medium`, `large`, `xlarge`.
         * @type {string || null}
         */
        this.AppExecutorSize = null;

        /**
         * Number of Spark job executors
         * @type {number || null}
         */
        this.AppExecutorNums = null;

        /**
         * Spark application ID
         * @type {string || null}
         */
        this.SparkAppId = null;

        /**
         * This field has been disused. Use the `Datasource` field instead.
         * @type {string || null}
         */
        this.Eni = null;

        /**
         * Whether it is uploaded locally. Valid values: `cos`, `lakefs`.
         * @type {string || null}
         */
        this.IsLocal = null;

        /**
         * Main class of the Spark JAR job during execution
         * @type {string || null}
         */
        this.MainClass = null;

        /**
         * Spark configurations separated by line break
         * @type {string || null}
         */
        this.AppConf = null;

        /**
         * JAR resource dependency upload method. 1: cos; 2: lakefs (this method needs to be used in the console but cannot be called through APIs).
         * @type {string || null}
         */
        this.IsLocalJars = null;

        /**
         * Dependency JAR packages of the Spark JAR job separated by comma
         * @type {string || null}
         */
        this.AppJars = null;

        /**
         * File resource dependency upload method. 1: cos; 2: lakefs (this method needs to be used in the console but cannot be called through APIs).
         * @type {string || null}
         */
        this.IsLocalFiles = null;

        /**
         * Dependency resources of the Spark job separated by comma
         * @type {string || null}
         */
        this.AppFiles = null;

        /**
         * PySpark: Dependency upload method. 1: cos; 2: lakefs (this method needs to be used in the console but cannot be called through APIs).
         * @type {string || null}
         */
        this.IsLocalPythonFiles = null;

        /**
         * PySpark: Python dependency, which can be in .py, .zip, or .egg format. Multiple files should be separated by comma.
         * @type {string || null}
         */
        this.AppPythonFiles = null;

        /**
         * Command line parameters of the Spark job
         * @type {string || null}
         */
        this.CmdArgs = null;

        /**
         * This parameter takes effect only for Spark flow tasks.
         * @type {number || null}
         */
        this.MaxRetries = null;

        /**
         * Data source name
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * Archives: Dependency upload method. 1: cos; 2: lakefs (this method needs to be used in the console but cannot be called through APIs).
         * @type {string || null}
         */
        this.IsLocalArchives = null;

        /**
         * Archives: Dependency resources
         * @type {string || null}
         */
        this.AppArchives = null;

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

    }
}

module.exports = {
    DescribeTaskResultResponse: DescribeTaskResultResponse,
    DescribeTasksRequest: DescribeTasksRequest,
    CreateSparkAppTaskRequest: CreateSparkAppTaskRequest,
    KVPair: KVPair,
    StreamingStatistics: StreamingStatistics,
    Task: Task,
    DescribeSparkAppJobRequest: DescribeSparkAppJobRequest,
    TasksInfo: TasksInfo,
    CreateSparkAppTaskResponse: CreateSparkAppTaskResponse,
    CancelTaskRequest: CancelTaskRequest,
    TaskResponseInfo: TaskResponseInfo,
    CreateTasksRequest: CreateTasksRequest,
    CreateTaskResponse: CreateTaskResponse,
    DeleteSparkAppResponse: DeleteSparkAppResponse,
    CreateSparkAppResponse: CreateSparkAppResponse,
    TaskResultInfo: TaskResultInfo,
    DescribeSparkAppJobsResponse: DescribeSparkAppJobsResponse,
    DeleteSparkAppRequest: DeleteSparkAppRequest,
    DescribeSparkAppJobsRequest: DescribeSparkAppJobsRequest,
    CreateTasksResponse: CreateTasksResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    CreateSparkAppRequest: CreateSparkAppRequest,
    DescribeSparkAppTasksResponse: DescribeSparkAppTasksResponse,
    Column: Column,
    DescribeTaskResultRequest: DescribeTaskResultRequest,
    Filter: Filter,
    CreateTaskRequest: CreateTaskRequest,
    ModifySparkAppResponse: ModifySparkAppResponse,
    SparkJobInfo: SparkJobInfo,
    DescribeSparkAppTasksRequest: DescribeSparkAppTasksRequest,
    CancelTaskResponse: CancelTaskResponse,
    SQLTask: SQLTask,
    DescribeSparkAppJobResponse: DescribeSparkAppJobResponse,
    ModifySparkAppRequest: ModifySparkAppRequest,

}
