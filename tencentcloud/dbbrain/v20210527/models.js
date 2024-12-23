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
 * Time series of database space data
 * @class
 */
class SchemaSpaceTimeSeries extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.TableSchema = null;

        /**
         * Space metric value in a unit of time interval
         * @type {MonitorMetricSeriesData || null}
         */
        this.SeriesData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;

        if (params.SeriesData) {
            let obj = new MonitorMetricSeriesData();
            obj.deserialize(params.SeriesData)
            this.SeriesData = obj;
        }

    }
}

/**
 * Details of the source users of slow logs
 * @class
 */
class SlowLogUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Percentage of the number of slow logs from this source username to the total number of slow logs
         * @type {number || null}
         */
        this.Ratio = null;

        /**
         * Number of slow logs from this source username
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeRedisTopKeyPrefixList request structure.
 * @class
 */
class DescribeRedisTopKeyPrefixListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Date for query, such as `2021-05-27`. You can select a date as early as in the last 30 days for query.
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Service type. Valid value: `redis` (TencentDB for Redis).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * The number of queried items. Default value: `20`. Max value: `100`.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Details of the health report task.
 * @class
 */
class HealthReportTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID.
         * @type {number || null}
         */
        this.AsyncRequestId = null;

        /**
         * Source that triggers the task. Valid values: `DAILY_INSPECTION` (instance inspection), `SCHEDULED` (scheduled task), and `MANUAL` (manual trigger).
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Task progress in %.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Task creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Basic information of the instance to which the task belongs.
         * @type {InstanceBasicInfo || null}
         */
        this.InstanceInfo = null;

        /**
         * Health information in health report.
         * @type {HealthStatus || null}
         */
        this.HealthStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.InstanceInfo) {
            let obj = new InstanceBasicInfo();
            obj.deserialize(params.InstanceInfo)
            this.InstanceInfo = obj;
        }

        if (params.HealthStatus) {
            let obj = new HealthStatus();
            obj.deserialize(params.HealthStatus)
            this.HealthStatus = obj;
        }

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
         * Audit is successfully enabled only when the value of this parameter is `0`.
         * @type {number || null}
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
 * CreateDBDiagReportTask request structure.
 * @class
 */
class CreateDBDiagReportTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time, such as "2020-11-08T14:00:00+08:00".
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as "2020-11-09T14:00:00+08:00".
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Whether to send an email. Valid values: `0` (yes), `1` (no).
         * @type {number || null}
         */
        this.SendMailFlag = null;

        /**
         * Array of the IDs of recipients to receive email.
         * @type {Array.<number> || null}
         */
        this.ContactPerson = null;

        /**
         * Array of IDs of recipient groups to receive email.
         * @type {Array.<number> || null}
         */
        this.ContactGroup = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

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
        this.SendMailFlag = 'SendMailFlag' in params ? params.SendMailFlag : null;
        this.ContactPerson = 'ContactPerson' in params ? params.ContactPerson : null;
        this.ContactGroup = 'ContactGroup' in params ? params.ContactGroup : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Time series of database tablespace data
 * @class
 */
class TableSpaceTimeSeries extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table name.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Database name.
         * @type {string || null}
         */
        this.TableSchema = null;

        /**
         * Database table storage engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Space metric value in a unit of time interval
         * @type {MonitorFloatMetricSeriesData || null}
         */
        this.SeriesData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;
        this.Engine = 'Engine' in params ? params.Engine : null;

        if (params.SeriesData) {
            let obj = new MonitorFloatMetricSeriesData();
            obj.deserialize(params.SeriesData)
            this.SeriesData = obj;
        }

    }
}

/**
 * DescribeSlowLogs request structure.
 * @class
 */
class DescribeSlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * MD5 value of a SQL template
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * Start time in the format of "2019-09-10 12:13:14".
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in the format of "2019-09-11 10:13:14". The interval between the end time and the start time can be up to 7 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of queried items. Default value: `20`. Max value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Database list
         * @type {Array.<string> || null}
         */
        this.DB = null;

        /**
         * Keyword
         * @type {Array.<string> || null}
         */
        this.Key = null;

        /**
         * User
         * @type {Array.<string> || null}
         */
        this.User = null;

        /**
         * IP
         * @type {Array.<string> || null}
         */
        this.Ip = null;

        /**
         * Duration range. The left and right borders of the range are the zeroth and first element of the array, respectively.
         * @type {Array.<number> || null}
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
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.DB = 'DB' in params ? params.DB : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.User = 'User' in params ? params.User : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * DescribeTopSpaceTables request structure.
 * @class
 */
class DescribeTopSpaceTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of returned top tables. Maximum value: `100`. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Field used to sort top tables. Valid values: `DataLength`, `IndexLength`, `TotalLength`, `DataFree`, `FragRatio`, `TableRows`, `PhysicalFileSize` (only supported for TencentDB for MySQL instances). For TencentDB for MySQL instances, the default value is `PhysicalFileSize`. For other database instances, the default value is `TotalLength`.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Diagnosis deduction item.
 * @class
 */
class ScoreItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Exception diagnosis item name.
         * @type {string || null}
         */
        this.DiagItem = null;

        /**
         * Diagnosis item type. Valid values: `Availability`, `Maintainability`, `Performance`, `Reliability`.
         * @type {string || null}
         */
        this.IssueType = null;

        /**
         * Health level. Valid values: `Healthy`, `Reminder`, `Alarm`, `Severe`, `Critical`.
         * @type {string || null}
         */
        this.TopSeverity = null;

        /**
         * Number of occurrences of this exception diagnosis item.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Deducted scores.
         * @type {number || null}
         */
        this.ScoreLost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiagItem = 'DiagItem' in params ? params.DiagItem : null;
        this.IssueType = 'IssueType' in params ? params.IssueType : null;
        this.TopSeverity = 'TopSeverity' in params ? params.TopSeverity : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ScoreLost = 'ScoreLost' in params ? params.ScoreLost : null;

    }
}

/**
 * CreateRedisBigKeyAnalysisTask response structure.
 * @class
 */
class CreateRedisBigKeyAnalysisTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
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
 * CreateSecurityAuditLogExportTask request structure.
 * @class
 */
class CreateSecurityAuditLogExportTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security audit group ID.
         * @type {string || null}
         */
        this.SecAuditGroupId = null;

        /**
         * Exported log start time, such as 2020-12-28 00:00:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Exported log end time, such as 2020-12-28 01:00:00.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Service type. Valid value: `mysql` (TencentDB for MySQL).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * List of log risk levels. Valid values: `0` (no risk), `1` (low risk), `2` (medium risk), `3` (high risk).
         * @type {Array.<number> || null}
         */
        this.DangerLevels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecAuditGroupId = 'SecAuditGroupId' in params ? params.SecAuditGroupId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.DangerLevels = 'DangerLevels' in params ? params.DangerLevels : null;

    }
}

/**
 * DescribeDBDiagEvent response structure.
 * @class
 */
class DescribeDBDiagEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Diagnosis item.
         * @type {string || null}
         */
        this.DiagItem = null;

        /**
         * Diagnosis type.
         * @type {string || null}
         */
        this.DiagType = null;

        /**
         * Event ID.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Diagnosis event details. If there is no additional explanation information, the output will be empty.
         * @type {string || null}
         */
        this.Explanation = null;

        /**
         * Diagnosis summary.
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * Found problem.
         * @type {string || null}
         */
        this.Problem = null;

        /**
         * Severity, which can be divided into 5 levels: `1` (Critical), `2` (Severe), `3` (Alarm), `4` (Reminder), `5` (healthy).
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Suggestions. If there are no suggestions, the output will be empty.
         * @type {string || null}
         */
        this.Suggestions = null;

        /**
         * Reserved field.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * End time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiagItem = 'DiagItem' in params ? params.DiagItem : null;
        this.DiagType = 'DiagType' in params ? params.DiagType : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Explanation = 'Explanation' in params ? params.Explanation : null;
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.Problem = 'Problem' in params ? params.Problem : null;
        this.Severity = 'Severity' in params ? params.Severity : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Suggestions = 'Suggestions' in params ? params.Suggestions : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagEvents response structure.
 * @class
 */
class DescribeDBDiagEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of diagnosis events.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Diagnosis event list.
         * @type {Array.<DiagHistoryEventItem> || null}
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
                let obj = new DiagHistoryEventItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagReportTasks response structure.
 * @class
 */
class DescribeDBDiagReportTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of tasks.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of tasks.
         * @type {Array.<HealthReportTask> || null}
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
                let obj = new HealthReportTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddUserContact response structure.
 * @class
 */
class AddUserContactResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the successfully added recipient.
         * @type {number || null}
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
 * Instance details
 * @class
 */
class AuditInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * appId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Audit status. Valid values: `0` (Not enabled), `1` (Enabled).
         * @type {number || null}
         */
        this.AuditStatus = null;

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
         * The region where the instance resides
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Resource tags
         * @type {Array.<string> || null}
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ResourceTags = 'ResourceTags' in params ? params.ResourceTags : null;

    }
}

/**
 * ModifyDiagDBInstanceConf response structure.
 * @class
 */
class ModifyDiagDBInstanceConfResponse extends  AbstractModel {
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
 * DescribeTopSpaceSchemaTimeSeries response structure.
 * @class
 */
class DescribeTopSpaceSchemaTimeSeriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time series list of the returned space statistics of top databases.
         * @type {Array.<SchemaSpaceTimeSeries> || null}
         */
        this.TopSpaceSchemaTimeSeries = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopSpaceSchemaTimeSeries) {
            this.TopSpaceSchemaTimeSeries = new Array();
            for (let z in params.TopSpaceSchemaTimeSeries) {
                let obj = new SchemaSpaceTimeSeries();
                obj.deserialize(params.TopSpaceSchemaTimeSeries[z]);
                this.TopSpaceSchemaTimeSeries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Top slow SQL statements
 * @class
 */
class SlowLogTopSqlItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total SQL lock wait time in seconds.
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * Maximum lock wait time in seconds
         * @type {number || null}
         */
        this.LockTimeMax = null;

        /**
         * Minimum lock wait time in seconds
         * @type {number || null}
         */
        this.LockTimeMin = null;

        /**
         * Total number of scanned rows
         * @type {number || null}
         */
        this.RowsExamined = null;

        /**
         * Maximum number of scanned rows
         * @type {number || null}
         */
        this.RowsExaminedMax = null;

        /**
         * Minimum number of scanned rows
         * @type {number || null}
         */
        this.RowsExaminedMin = null;

        /**
         * Total duration in seconds
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * Maximum execution time in seconds
         * @type {number || null}
         */
        this.QueryTimeMax = null;

        /**
         * Minimum execution time in seconds
         * @type {number || null}
         */
        this.QueryTimeMin = null;

        /**
         * Total number of returned rows
         * @type {number || null}
         */
        this.RowsSent = null;

        /**
         * Maximum number of returned rows
         * @type {number || null}
         */
        this.RowsSentMax = null;

        /**
         * Minimum number of returned rows
         * @type {number || null}
         */
        this.RowsSentMin = null;

        /**
         * Number of executions
         * @type {number || null}
         */
        this.ExecTimes = null;

        /**
         * SQL template
         * @type {string || null}
         */
        this.SqlTemplate = null;

        /**
         * SQL statements with parameter (random)
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * Ratio of the total duration in %
         * @type {number || null}
         */
        this.QueryTimeRatio = null;

        /**
         * Ratio of the total SQL lock wait time in %
         * @type {number || null}
         */
        this.LockTimeRatio = null;

        /**
         * Ratio of total number of scanned rows in %
         * @type {number || null}
         */
        this.RowsExaminedRatio = null;

        /**
         * Ratio of total number of returned rows in %
         * @type {number || null}
         */
        this.RowsSentRatio = null;

        /**
         * Average execution time in seconds
         * @type {number || null}
         */
        this.QueryTimeAvg = null;

        /**
         * Average number of returned rows
         * @type {number || null}
         */
        this.RowsSentAvg = null;

        /**
         * Average lock wait time in seconds
         * @type {number || null}
         */
        this.LockTimeAvg = null;

        /**
         * Average number of scanned rows
         * @type {number || null}
         */
        this.RowsExaminedAvg = null;

        /**
         * MD5 value of the SQL template
         * @type {string || null}
         */
        this.Md5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LockTime = 'LockTime' in params ? params.LockTime : null;
        this.LockTimeMax = 'LockTimeMax' in params ? params.LockTimeMax : null;
        this.LockTimeMin = 'LockTimeMin' in params ? params.LockTimeMin : null;
        this.RowsExamined = 'RowsExamined' in params ? params.RowsExamined : null;
        this.RowsExaminedMax = 'RowsExaminedMax' in params ? params.RowsExaminedMax : null;
        this.RowsExaminedMin = 'RowsExaminedMin' in params ? params.RowsExaminedMin : null;
        this.QueryTime = 'QueryTime' in params ? params.QueryTime : null;
        this.QueryTimeMax = 'QueryTimeMax' in params ? params.QueryTimeMax : null;
        this.QueryTimeMin = 'QueryTimeMin' in params ? params.QueryTimeMin : null;
        this.RowsSent = 'RowsSent' in params ? params.RowsSent : null;
        this.RowsSentMax = 'RowsSentMax' in params ? params.RowsSentMax : null;
        this.RowsSentMin = 'RowsSentMin' in params ? params.RowsSentMin : null;
        this.ExecTimes = 'ExecTimes' in params ? params.ExecTimes : null;
        this.SqlTemplate = 'SqlTemplate' in params ? params.SqlTemplate : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.Schema = 'Schema' in params ? params.Schema : null;
        this.QueryTimeRatio = 'QueryTimeRatio' in params ? params.QueryTimeRatio : null;
        this.LockTimeRatio = 'LockTimeRatio' in params ? params.LockTimeRatio : null;
        this.RowsExaminedRatio = 'RowsExaminedRatio' in params ? params.RowsExaminedRatio : null;
        this.RowsSentRatio = 'RowsSentRatio' in params ? params.RowsSentRatio : null;
        this.QueryTimeAvg = 'QueryTimeAvg' in params ? params.QueryTimeAvg : null;
        this.RowsSentAvg = 'RowsSentAvg' in params ? params.RowsSentAvg : null;
        this.LockTimeAvg = 'LockTimeAvg' in params ? params.LockTimeAvg : null;
        this.RowsExaminedAvg = 'RowsExaminedAvg' in params ? params.RowsExaminedAvg : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

    }
}

/**
 * DescribeAuditInstanceList response structure.
 * @class
 */
class DescribeAuditInstanceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of eligible instances.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance details
         * @type {Array.<AuditInstance> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AuditInstance();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxySessionKillTasks request structure.
 * @class
 */
class DescribeProxySessionKillTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The async session killing task ID, which is obtained after the API `CreateProxySessionKillTask` is successfully called.
         * @type {Array.<number> || null}
         */
        this.AsyncRequestIds = null;

        /**
         * Service type. Valid value: `redis` (TencentDB for Redis).
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AsyncRequestIds = 'AsyncRequestIds' in params ? params.AsyncRequestIds : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CreateRedisBigKeyAnalysisTask request structure.
 * @class
 */
class CreateRedisBigKeyAnalysisTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Service type. Valid value: `redis` (TencentDB for Redis).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * The list of the serial numbers of shard nodes. When the list is empty, all shard nodes will be selected.
         * @type {Array.<number> || null}
         */
        this.ShardIds = null;

        /**
         * The list of separators of top key prefixes.
Currently, the following separators are supported: ",", ";", ":", "_", "-", "+", "@", "=", "|", "#", ".". When the list is empty, all separators will be selected by default.
         * @type {Array.<string> || null}
         */
        this.KeyDelimiterList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.ShardIds = 'ShardIds' in params ? params.ShardIds : null;
        this.KeyDelimiterList = 'KeyDelimiterList' in params ? params.KeyDelimiterList : null;

    }
}

/**
 * DescribeMySqlProcessList response structure.
 * @class
 */
class DescribeMySqlProcessListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of real-time threads.
         * @type {Array.<MySqlProcess> || null}
         */
        this.ProcessList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProcessList) {
            this.ProcessList = new Array();
            for (let z in params.ProcessList) {
                let obj = new MySqlProcess();
                obj.deserialize(params.ProcessList[z]);
                this.ProcessList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Access source details of the real-time session
 * @class
 */
class SessionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access source
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * The number of active connections from the current access source
         * @type {string || null}
         */
        this.ActiveConn = null;

        /**
         * The total number of connections from the current access source
         * @type {number || null}
         */
        this.AllConn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ActiveConn = 'ActiveConn' in params ? params.ActiveConn : null;
        this.AllConn = 'AllConn' in params ? params.AllConn : null;

    }
}

/**
 * Instance health status.
 * @class
 */
class HealthStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health score out of 100 points.
         * @type {number || null}
         */
        this.HealthScore = null;

        /**
         * Health level. Valid values: `HEALTH` (healthy), `SUB_HEALTH` (sub-healthy), `RISK` (dangerous), and `HIGH_RISK` (high-risk).
         * @type {string || null}
         */
        this.HealthLevel = null;

        /**
         * Total deducted scores.
         * @type {number || null}
         */
        this.ScoreLost = null;

        /**
         * Deduction details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ScoreDetail> || null}
         */
        this.ScoreDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HealthScore = 'HealthScore' in params ? params.HealthScore : null;
        this.HealthLevel = 'HealthLevel' in params ? params.HealthLevel : null;
        this.ScoreLost = 'ScoreLost' in params ? params.ScoreLost : null;

        if (params.ScoreDetails) {
            this.ScoreDetails = new Array();
            for (let z in params.ScoreDetails) {
                let obj = new ScoreDetail();
                obj.deserialize(params.ScoreDetails[z]);
                this.ScoreDetails.push(obj);
            }
        }

    }
}

/**
 * DescribeTopSpaceTables response structure.
 * @class
 */
class DescribeTopSpaceTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the returned space statistics of top tables.
         * @type {Array.<TableSpaceData> || null}
         */
        this.TopSpaceTables = null;

        /**
         * Timestamp (in seconds) of tablespace data collection points
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopSpaceTables) {
            this.TopSpaceTables = new Array();
            for (let z in params.TopSpaceTables) {
                let obj = new TableSpaceData();
                obj.deserialize(params.TopSpaceTables[z]);
                this.TopSpaceTables.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information about Redis session killing task status
 * @class
 */
class TaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID.
         * @type {number || null}
         */
        this.AsyncRequestId = null;

        /**
         * List of all proxies of the current instance.
         * @type {Array.<string> || null}
         */
        this.InstProxyList = null;

        /**
         * Total number of proxies of the current instance.
         * @type {number || null}
         */
        this.InstProxyCount = null;

        /**
         * Task creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task status. Valid values: `created` (create), `chosen` (to be executed), `running` (being executed), `failed` (failed), and `finished` (completed).
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * IDs of the proxies that have completed the session killing tasks.
         * @type {Array.<string> || null}
         */
        this.FinishedProxyList = null;

        /**
         * IDs of the proxies that failed to execute the session killing tasks.
         * @type {Array.<string> || null}
         */
        this.FailedProxyList = null;

        /**
         * Task end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task progress.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Instance ID.
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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.InstProxyList = 'InstProxyList' in params ? params.InstProxyList : null;
        this.InstProxyCount = 'InstProxyCount' in params ? params.InstProxyCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.FinishedProxyList = 'FinishedProxyList' in params ? params.FinishedProxyList : null;
        this.FailedProxyList = 'FailedProxyList' in params ? params.FailedProxyList : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * KillMySqlThreads response structure.
 * @class
 */
class KillMySqlThreadsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the MySQL sessions that have been killed.
         * @type {Array.<number> || null}
         */
        this.Threads = null;

        /**
         * Execution ID, which is output in the `Prepare` stage and used to specify the ID of the session to be killed in the `Commit` stage.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SqlExecId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Threads = 'Threads' in params ? params.Threads : null;
        this.SqlExecId = 'SqlExecId' in params ? params.SqlExecId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSchedulerMailProfile request structure.
 * @class
 */
class CreateSchedulerMailProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value range: 1-7, representing Monday to Sunday respectively.
         * @type {Array.<number> || null}
         */
        this.WeekConfiguration = null;

        /**
         * Email configuration.
         * @type {ProfileInfo || null}
         */
        this.ProfileInfo = null;

        /**
         * Configuration name, which needs to be unique. For scheduled task emails, the name should be in the format of "scheduler_" + {instanceId}, such as "schduler_cdb-test".
         * @type {string || null}
         */
        this.ProfileName = null;

        /**
         * ID of the instance for which to configure subscription.
         * @type {string || null}
         */
        this.BindInstanceId = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WeekConfiguration = 'WeekConfiguration' in params ? params.WeekConfiguration : null;

        if (params.ProfileInfo) {
            let obj = new ProfileInfo();
            obj.deserialize(params.ProfileInfo)
            this.ProfileInfo = obj;
        }
        this.ProfileName = 'ProfileName' in params ? params.ProfileName : null;
        this.BindInstanceId = 'BindInstanceId' in params ? params.BindInstanceId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Recipient description.
 * @class
 */
class ContactItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Recipient name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Recipient email.
         * @type {string || null}
         */
        this.Mail = null;

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
        this.Mail = 'Mail' in params ? params.Mail : null;

    }
}

/**
 * DescribeDBSpaceStatus request structure.
 * @class
 */
class DescribeDBSpaceStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Query period in days. The end date is the current date, and the query period is 7 days by default.
         * @type {number || null}
         */
        this.RangeDays = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RangeDays = 'RangeDays' in params ? params.RangeDays : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Slow log statistics in the specified time range
 * @class
 */
class TimeSlice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Statistics start time
         * @type {number || null}
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * DeleteDBDiagReportTasks request structure.
 * @class
 */
class DeleteDBDiagReportTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of tasks to be deleted
         * @type {Array.<number> || null}
         */
        this.AsyncRequestIds = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestIds = 'AsyncRequestIds' in params ? params.AsyncRequestIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * ModifyDiagDBInstanceConf request structure.
 * @class
 */
class ModifyDiagDBInstanceConfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance configuration, including inspection and overview switch.
         * @type {InstanceConfs || null}
         */
        this.InstanceConfs = null;

        /**
         * Target regions of the request. If the value is `All`, it is applied to all regions.
         * @type {string || null}
         */
        this.Regions = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * ID of the instance to modify.
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

        if (params.InstanceConfs) {
            let obj = new InstanceConfs();
            obj.deserialize(params.InstanceConfs)
            this.InstanceConfs = obj;
        }
        this.Regions = 'Regions' in params ? params.Regions : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeSlowLogs response structure.
 * @class
 */
class DescribeSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow log details
         * @type {Array.<SlowLogInfoItem> || null}
         */
        this.Rows = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new SlowLogInfoItem();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityAuditLogDownloadUrls request structure.
 * @class
 */
class DescribeSecurityAuditLogDownloadUrlsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security audit group ID.
         * @type {string || null}
         */
        this.SecAuditGroupId = null;

        /**
         * Async task Id.
         * @type {number || null}
         */
        this.AsyncRequestId = null;

        /**
         * Service type. Valid value: `mysql` (TencentDB for MySQL).
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecAuditGroupId = 'SecAuditGroupId' in params ? params.SecAuditGroupId : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CreateDBDiagReportTask response structure.
 * @class
 */
class CreateDBDiagReportTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Real-time session statistics.
 * @class
 */
class ProcessStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of session details
         * @type {Array.<SessionItem> || null}
         */
        this.Items = null;

        /**
         * The total number of connections
         * @type {number || null}
         */
        this.AllConnSum = null;

        /**
         * The total number of active connections
         * @type {number || null}
         */
        this.ActiveConnSum = null;

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
                let obj = new SessionItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.AllConnSum = 'AllConnSum' in params ? params.AllConnSum : null;
        this.ActiveConnSum = 'ActiveConnSum' in params ? params.ActiveConnSum : null;

    }
}

/**
 * CreateMailProfile response structure.
 * @class
 */
class CreateMailProfileResponse extends  AbstractModel {
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
 * DescribeSlowLogTimeSeriesStats request structure.
 * @class
 */
class DescribeSlowLogTimeSeriesStatsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time, such as "2019-09-10 12:13:14".
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as "2019-09-10 12:13:14". The interval between the end time and the start time can be up to 7 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

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
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Instance diagnosis event
 * @class
 */
class DiagHistoryEventItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Diagnosis type.
         * @type {string || null}
         */
        this.DiagType = null;

        /**
         * End time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Unique event ID.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Severity, which can be divided into 5 levels: 1: fatal, 2: severe, 3: warning, 4: notice, 5: healthy.
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * Diagnosis summary.
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * Diagnosis item description.
         * @type {string || null}
         */
        this.DiagItem = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Reserved field.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiagType = 'DiagType' in params ? params.DiagType : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Severity = 'Severity' in params ? params.Severity : null;
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.DiagItem = 'DiagItem' in params ? params.DiagItem : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * Relational database thread
 * @class
 */
class MySqlProcess extends  AbstractModel {
    constructor(){
        super();

        /**
         * Thread ID.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Thread operation account name.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Thread operation host address.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Thread operation database.
         * @type {string || null}
         */
        this.DB = null;

        /**
         * Thread operation status.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Thread execution type.
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Thread operation duration in seconds.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Thread operation statement.
         * @type {string || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.User = 'User' in params ? params.User : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DB = 'DB' in params ? params.DB : null;
        this.State = 'State' in params ? params.State : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Info = 'Info' in params ? params.Info : null;

    }
}

/**
 * DescribeDBDiagHistory request structure.
 * @class
 */
class DescribeDBDiagHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time, such as "2019-09-10 12:13:14".
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as "2019-09-11 12:13:14". The interval between the end time and the start time can be up to 2 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

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
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CreateKillTask response structure.
 * @class
 */
class CreateKillTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. `1` is returned if the session killing task is successfully created.
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
 * Instance details
 * @class
 */
class AuditInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit status. Valid values: `ON` (Enabled), `OFF` (Not enabled).
         * @type {string || null}
         */
        this.AuditStatus = null;

        /**
         * Audit log size. This parameter is only used for the free trial edition of Database Audit.
         * @type {number || null}
         */
        this.BillingAmount = null;

        /**
         * Billing confirmation status. Valid values: `0` (Unconfirmed), `1` (Confirmed).
         * @type {number || null}
         */
        this.BillingConfirmed = null;

        /**
         * Infrequent access storage period
         * @type {number || null}
         */
        this.ColdLogExpireDay = null;

        /**
         * Storage size of infrequently accessed logs in MB
         * @type {number || null}
         */
        this.ColdLogSize = null;

        /**
         * Storage period of frequently accessed logs in days
         * @type {number || null}
         */
        this.HotLogExpireDay = null;

        /**
         * Storage size of frequently accessed logs in MB
         * @type {number || null}
         */
        this.HotLogSize = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Log retention period in days, which is the sum of the frequent and infrequent access storage periods.
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance details
         * @type {AuditInstanceInfo || null}
         */
        this.InstanceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.BillingAmount = 'BillingAmount' in params ? params.BillingAmount : null;
        this.BillingConfirmed = 'BillingConfirmed' in params ? params.BillingConfirmed : null;
        this.ColdLogExpireDay = 'ColdLogExpireDay' in params ? params.ColdLogExpireDay : null;
        this.ColdLogSize = 'ColdLogSize' in params ? params.ColdLogSize : null;
        this.HotLogExpireDay = 'HotLogExpireDay' in params ? params.HotLogExpireDay : null;
        this.HotLogSize = 'HotLogSize' in params ? params.HotLogSize : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.InstanceInfo) {
            let obj = new AuditInstanceInfo();
            obj.deserialize(params.InstanceInfo)
            this.InstanceInfo = obj;
        }

    }
}

/**
 * DescribeDBDiagEvents request structure.
 * @class
 */
class DescribeDBDiagEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time in the format of “2021-05-27 00:00:00”. The earliest time that can be queried is 30 days before the current time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in the format of "2021-05-27 01:00:00". The interval between the end time and the start time can be up to 7 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Risk level list. Valid values in descending order of severity: `1` (critical), `2` (serious), `3` (alarm), `4` (warning), `5` (healthy).
         * @type {Array.<number> || null}
         */
        this.Severities = null;

        /**
         * Instance ID list.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 50.
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Severities = 'Severities' in params ? params.Severities : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateDBDiagReportUrl response structure.
 * @class
 */
class CreateDBDiagReportUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health report URL.
         * @type {string || null}
         */
        this.ReportUrl = null;

        /**
         * Expiration timestamp of the health report URL (in seconds).
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReportUrl = 'ReportUrl' in params ? params.ReportUrl : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Deduction details.
 * @class
 */
class ScoreDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deduction item type. Valid values: `Availability`, `Maintainability`, `Performance`, `Reliability`.
         * @type {string || null}
         */
        this.IssueType = null;

        /**
         * Total deducted scores.
         * @type {number || null}
         */
        this.ScoreLost = null;

        /**
         * Upper limit of the deducted scores.
         * @type {number || null}
         */
        this.ScoreLostMax = null;

        /**
         * List of deduction items.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ScoreItem> || null}
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
        this.IssueType = 'IssueType' in params ? params.IssueType : null;
        this.ScoreLost = 'ScoreLost' in params ? params.ScoreLost : null;
        this.ScoreLostMax = 'ScoreLostMax' in params ? params.ScoreLostMax : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ScoreItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

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
         * Service type. Valid values: `dcdb` (TDSQL for MySQL), `mariadb` (TencentDB for MariaDB).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Use the value of `u200cProduct` for this parameter, such as `dcdb` and `mariadb`.
         * @type {string || null}
         */
        this.NodeRequestType = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Total log retention period in days. Valid values: `7`, `30`, `90`, `180`, `365`, `1095`, `1825`.
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * Storage period of frequently accessed logs in days. Valid values: `7`, `30`, `90`, `180`, `365`, `1095`, `1825`.
         * @type {number || null}
         */
        this.HotLogExpireDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.NodeRequestType = 'NodeRequestType' in params ? params.NodeRequestType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.HotLogExpireDay = 'HotLogExpireDay' in params ? params.HotLogExpireDay : null;

    }
}

/**
 * CreateKillTask request structure.
 * @class
 */
class CreateKillTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance associated with the session killing task.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Task duration in seconds. Pass in `-1` to stop the task manually.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Client IP, which is a task filter.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Database name, which is a task filter. Multiple database names are separated by comma.
         * @type {string || null}
         */
        this.DB = null;

        /**
         * Related command, which is a task filter. Multiple commands are separated by comma.
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Task filter. Filtering by single filter prefix is supported.
         * @type {string || null}
         */
        this.Info = null;

        /**
         * User type, which is a task filter.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Session duration in seconds, which is a task filter.
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DB = 'DB' in params ? params.DB : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.User = 'User' in params ? params.User : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DeleteDBDiagReportTasks response structure.
 * @class
 */
class DeleteDBDiagReportTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task deletion status (`0`: Successful)
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
 * DescribeProxyProcessStatistics response structure.
 * @class
 */
class DescribeProxyProcessStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Real-time session statistics.
         * @type {ProcessStatistic || null}
         */
        this.ProcessStatistics = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProcessStatistics) {
            let obj = new ProcessStatistic();
            obj.deserialize(params.ProcessStatistics)
            this.ProcessStatistics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of slow log source addresses.
 * @class
 */
class SlowLogHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source addresses.
         * @type {string || null}
         */
        this.UserHost = null;

        /**
         * Proportion (in %) of slow logs from this source address to the total number of slow logs.
         * @type {number || null}
         */
        this.Ratio = null;

        /**
         * Number of slow logs from this source address.
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
        this.UserHost = 'UserHost' in params ? params.UserHost : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * CreateMailProfile request structure.
 * @class
 */
class CreateMailProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Email configuration.
         * @type {ProfileInfo || null}
         */
        this.ProfileInfo = null;

        /**
         * Configuration level. Valid values: `User` (user-level), `Instance` (instance-level). For database inspection emails, it should be `User`. For scheduled task emails, it should be `Instance`.
         * @type {string || null}
         */
        this.ProfileLevel = null;

        /**
         * Configuration name, which needs to be unique. For database inspection emails, this name can be customized as needed. For scheduled task emails, the name should be in the format of "scheduler_" + {instanceId}, such as "schduler_cdb-test".
         * @type {string || null}
         */
        this.ProfileName = null;

        /**
         * Configuration type. Valid values: `dbScan_mail_configuration` (email configuration of the database inspection report), `scheduler_mail_configuration` (email configuration of the scheduled task report).
         * @type {string || null}
         */
        this.ProfileType = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Instance ID bound with the configuration, which is set when the configuration level is `Instance`. Only one instance can be bound at a time. When the configuration level is `User`, leave this parameter empty.
         * @type {Array.<string> || null}
         */
        this.BindInstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProfileInfo) {
            let obj = new ProfileInfo();
            obj.deserialize(params.ProfileInfo)
            this.ProfileInfo = obj;
        }
        this.ProfileLevel = 'ProfileLevel' in params ? params.ProfileLevel : null;
        this.ProfileName = 'ProfileName' in params ? params.ProfileName : null;
        this.ProfileType = 'ProfileType' in params ? params.ProfileType : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.BindInstanceIds = 'BindInstanceIds' in params ? params.BindInstanceIds : null;

    }
}

/**
 * Monitoring metric value in float type in a unit of time interval
 * @class
 */
class MonitorFloatMetricSeriesData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Monitoring metric.
         * @type {Array.<MonitorFloatMetric> || null}
         */
        this.Series = null;

        /**
         * Timestamp corresponding to monitoring metric.
         * @type {Array.<number> || null}
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Series) {
            this.Series = new Array();
            for (let z in params.Series) {
                let obj = new MonitorFloatMetric();
                obj.deserialize(params.Series[z]);
                this.Series.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * Email sending configuration
 * @class
 */
class MailConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable email sending. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.SendMail = null;

        /**
         * Region configuration, such as "ap-guangzhou" and "ap-shanghai". For the inspection email sending template, configure the region where you need to send the inspection email. For the subscription email sending template, configure the region where the current subscribed instance resides.
         * @type {Array.<string> || null}
         */
        this.Region = null;

        /**
         * Sends a report with the specified health level, such as `HEALTH`, `SUB_HEALTH`, `RISK`, and `HIGH_RISK`.
         * @type {Array.<string> || null}
         */
        this.HealthStatus = null;

        /**
         * Recipient ID. Either `ContactPerson` or `ContactGroup` should be passed in.
         * @type {Array.<number> || null}
         */
        this.ContactPerson = null;

        /**
         * Recipient group ID. Either `ContactPerson` or `ContactGroup` should be passed in.
         * @type {Array.<number> || null}
         */
        this.ContactGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SendMail = 'SendMail' in params ? params.SendMail : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.ContactPerson = 'ContactPerson' in params ? params.ContactPerson : null;
        this.ContactGroup = 'ContactGroup' in params ? params.ContactGroup : null;

    }
}

/**
 * DescribeSlowLogUserHostStats response structure.
 * @class
 */
class DescribeSlowLogUserHostStatsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of source addresses.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Detailed list of the proportion of slow logs from each source address.
         * @type {Array.<SlowLogHost> || null}
         */
        this.Items = null;

        /**
         * Detailed list of the percentages of slow logs from different source usernames
         * @type {Array.<SlowLogUser> || null}
         */
        this.UserNameItems = null;

        /**
         * The number of source users
         * @type {number || null}
         */
        this.UserTotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new SlowLogHost();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

        if (params.UserNameItems) {
            this.UserNameItems = new Array();
            for (let z in params.UserNameItems) {
                let obj = new SlowLogUser();
                obj.deserialize(params.UserNameItems[z]);
                this.UserNameItems.push(obj);
            }
        }
        this.UserTotalCount = 'UserTotalCount' in params ? params.UserTotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database tablespace statistics.
 * @class
 */
class TableSpaceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table name.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Database name.
         * @type {string || null}
         */
        this.TableSchema = null;

        /**
         * Database table storage engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Data space in MB.
         * @type {number || null}
         */
        this.DataLength = null;

        /**
         * Index space in MB.
         * @type {number || null}
         */
        this.IndexLength = null;

        /**
         * Fragmented space in MB.
         * @type {number || null}
         */
        this.DataFree = null;

        /**
         * Total space usage in MB.
         * @type {number || null}
         */
        this.TotalLength = null;

        /**
         * Fragmentation rate in %.
         * @type {number || null}
         */
        this.FragRatio = null;

        /**
         * Number of rows.
         * @type {number || null}
         */
        this.TableRows = null;

        /**
         * Size in MB of the physical file exclusive to a table.
         * @type {number || null}
         */
        this.PhysicalFileSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.DataLength = 'DataLength' in params ? params.DataLength : null;
        this.IndexLength = 'IndexLength' in params ? params.IndexLength : null;
        this.DataFree = 'DataFree' in params ? params.DataFree : null;
        this.TotalLength = 'TotalLength' in params ? params.TotalLength : null;
        this.FragRatio = 'FragRatio' in params ? params.FragRatio : null;
        this.TableRows = 'TableRows' in params ? params.TableRows : null;
        this.PhysicalFileSize = 'PhysicalFileSize' in params ? params.PhysicalFileSize : null;

    }
}

/**
 * Exception information.
 * @class
 */
class EventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Diagnosis type.
         * @type {string || null}
         */
        this.DiagType = null;

        /**
         * Start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Summary.
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * Severity, which can be divided into 5 levels: `1` (Critical), `2` (Severe), `3` (Alarm), `4` (Reminder), `5` (Healthy).
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * Deduction.
         * @type {number || null}
         */
        this.ScoreLost = null;

        /**
         * Reserved field.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Number of alarms.
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
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.DiagType = 'DiagType' in params ? params.DiagType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.Severity = 'Severity' in params ? params.Severity : null;
        this.ScoreLost = 'ScoreLost' in params ? params.ScoreLost : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * Query condition of the instance list
 * @class
 */
class AuditInstanceFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value
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
 * DescribeMailProfile request structure.
 * @class
 */
class DescribeMailProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration type. Valid values: `dbScan_mail_configuration` (email configuration of the database inspection report), `scheduler_mail_configuration` (email configuration of the scheduled task report).
         * @type {string || null}
         */
        this.ProfileType = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Pagination offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results per page in paginated queries. Maximum value: `50`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query by email configuration name. The name of the scheduled task email configuration should be in the format of "scheduler_"+{instanceId}.
         * @type {string || null}
         */
        this.ProfileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProfileType = 'ProfileType' in params ? params.ProfileType : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProfileName = 'ProfileName' in params ? params.ProfileName : null;

    }
}

/**
 * DeleteSecurityAuditLogExportTasks response structure.
 * @class
 */
class DeleteSecurityAuditLogExportTasksResponse extends  AbstractModel {
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
 * KillMySqlThreads request structure.
 * @class
 */
class KillMySqlThreadsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The stage of a session killing task. Valid values: `Prepare` (preparation stage), `Commit` (commit stage).
         * @type {string || null}
         */
        this.Stage = null;

        /**
         * List of IDs of the MySQL sessions to be killed. This parameter is used in the `Prepare` stage.
         * @type {Array.<number> || null}
         */
        this.Threads = null;

        /**
         * Execution ID. This parameter is used in the `Commit` stage.
         * @type {string || null}
         */
        this.SqlExecId = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Whether to record the thread killing history. The default value is `true`, indicating “yes”. You can set it to `false` (“no”) to speed up the killing process.
         * @type {boolean || null}
         */
        this.RecordHistory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Stage = 'Stage' in params ? params.Stage : null;
        this.Threads = 'Threads' in params ? params.Threads : null;
        this.SqlExecId = 'SqlExecId' in params ? params.SqlExecId : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.RecordHistory = 'RecordHistory' in params ? params.RecordHistory : null;

    }
}

/**
 * CreateDBDiagReportUrl request structure.
 * @class
 */
class CreateDBDiagReportUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Health report task ID, which can be queried through `DescribeDBDiagReportTasks`.
         * @type {number || null}
         */
        this.AsyncRequestId = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeSecurityAuditLogExportTasks response structure.
 * @class
 */
class DescribeSecurityAuditLogExportTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of security audit log export tasks.
         * @type {Array.<SecLogExportTaskInfo> || null}
         */
        this.Tasks = null;

        /**
         * Total numbers of security audit log export tasks.
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new SecLogExportTaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * Service type. Valid values: `dcdb` (TDSQL for MySQL), `mariadb` (TencentDB for MariaDB).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Use the value of `u200cProduct` for this parameter, such as `dcdb` and `mariadb`.
         * @type {string || null}
         */
        this.NodeRequestType = null;

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
        this.Product = 'Product' in params ? params.Product : null;
        this.NodeRequestType = 'NodeRequestType' in params ? params.NodeRequestType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Instance configuration.
 * @class
 */
class InstanceConfs extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable database inspection. Valid values: Yes, No.
         * @type {string || null}
         */
        this.DailyInspection = null;

        /**
         * Whether to enable instance overview. Valid values: Yes, No.
         * @type {string || null}
         */
        this.OverviewDisplay = null;

        /**
         * Custom big key analysis separator for Redis only
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.KeyDelimiters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DailyInspection = 'DailyInspection' in params ? params.DailyInspection : null;
        this.OverviewDisplay = 'OverviewDisplay' in params ? params.OverviewDisplay : null;
        this.KeyDelimiters = 'KeyDelimiters' in params ? params.KeyDelimiters : null;

    }
}

/**
 * Details of the obtained health score.
 * @class
 */
class HealthScoreInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Exception details.
         * @type {Array.<IssueTypeInfo> || null}
         */
        this.IssueTypes = null;

        /**
         * Total number of exceptions.
         * @type {number || null}
         */
        this.EventsTotalCount = null;

        /**
         * Health score.
         * @type {number || null}
         */
        this.HealthScore = null;

        /**
         * Health level, such as `HEALTH`, `SUB_HEALTH`, `RISK`, and `HIGH_RISK`.
         * @type {string || null}
         */
        this.HealthLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IssueTypes) {
            this.IssueTypes = new Array();
            for (let z in params.IssueTypes) {
                let obj = new IssueTypeInfo();
                obj.deserialize(params.IssueTypes[z]);
                this.IssueTypes.push(obj);
            }
        }
        this.EventsTotalCount = 'EventsTotalCount' in params ? params.EventsTotalCount : null;
        this.HealthScore = 'HealthScore' in params ? params.HealthScore : null;
        this.HealthLevel = 'HealthLevel' in params ? params.HealthLevel : null;

    }
}

/**
 * DescribeTopSpaceTableTimeSeries response structure.
 * @class
 */
class DescribeTopSpaceTableTimeSeriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time series list of the returned space statistics of top tables.
         * @type {Array.<TableSpaceTimeSeries> || null}
         */
        this.TopSpaceTableTimeSeries = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopSpaceTableTimeSeries) {
            this.TopSpaceTableTimeSeries = new Array();
            for (let z in params.TopSpaceTableTimeSeries) {
                let obj = new TableSpaceTimeSeries();
                obj.deserialize(params.TopSpaceTableTimeSeries[z]);
                this.TopSpaceTableTimeSeries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagHistory response structure.
 * @class
 */
class DescribeDBDiagHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event description.
         * @type {Array.<DiagHistoryEventItem> || null}
         */
        this.Events = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new DiagHistoryEventItem();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagEvent request structure.
 * @class
 */
class DescribeDBDiagEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Event ID, which can be obtained through the `DescribeDBDiagHistory` API.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeAllUserContact response structure.
 * @class
 */
class DescribeAllUserContactResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of recipients.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Recipient information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ContactItem> || null}
         */
        this.Contacts = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Contacts) {
            this.Contacts = new Array();
            for (let z in params.Contacts) {
                let obj = new ContactItem();
                obj.deserialize(params.Contacts[z]);
                this.Contacts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Monitoring data
 * @class
 */
class MonitorMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Metric unit.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Metric value.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
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
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Information configured by the user.
 * @class
 */
class ProfileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Email language, such as `en`.
         * @type {string || null}
         */
        this.Language = null;

        /**
         * Email template content.
         * @type {MailConfiguration || null}
         */
        this.MailConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Language = 'Language' in params ? params.Language : null;

        if (params.MailConfiguration) {
            let obj = new MailConfiguration();
            obj.deserialize(params.MailConfiguration)
            this.MailConfiguration = obj;
        }

    }
}

/**
 * Information configured by user, including email configuration.
 * @class
 */
class UserProfile extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configured ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProfileId = null;

        /**
         * Configuration type. Valid values: `dbScan_mail_configuration` (email configuration of the database inspection report), `scheduler_mail_configuration` (email configuration of the scheduled task report).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProfileType = null;

        /**
         * Configuration level. Valid values: `User` (user-level), `Instance` (instance-level). For database inspection emails, it should be `User`. For scheduled task emails, it should be `Instance`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProfileLevel = null;

        /**
         * Configuration name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProfileName = null;

        /**
         * Configuration details.
         * @type {ProfileInfo || null}
         */
        this.ProfileInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProfileId = 'ProfileId' in params ? params.ProfileId : null;
        this.ProfileType = 'ProfileType' in params ? params.ProfileType : null;
        this.ProfileLevel = 'ProfileLevel' in params ? params.ProfileLevel : null;
        this.ProfileName = 'ProfileName' in params ? params.ProfileName : null;

        if (params.ProfileInfo) {
            let obj = new ProfileInfo();
            obj.deserialize(params.ProfileInfo)
            this.ProfileInfo = obj;
        }

    }
}

/**
 * AddUserContact request structure.
 * @class
 */
class AddUserContactRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient name, which can contain up to 20 letters, digits, spaces, and symbols `!@#$%^&*()_+-=()` and cannot begin with an underscore.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Email address, which can contain letters, digits, underscores, and the @ symbol, cannot begin with an underscore, and must be unique.
         * @type {string || null}
         */
        this.ContactInfo = null;

        /**
         * Service type, which is fixed to `mysql`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ContactInfo = 'ContactInfo' in params ? params.ContactInfo : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Basic instance information.
 * @class
 */
class InstanceBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Private IP of the instance.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Private port of the instance.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Instance service.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Instance engine version.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;

    }
}

/**
 * Database space statistics.
 * @class
 */
class SchemaSpaceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name.
         * @type {string || null}
         */
        this.TableSchema = null;

        /**
         * Data space in MB.
         * @type {number || null}
         */
        this.DataLength = null;

        /**
         * Index space in MB.
         * @type {number || null}
         */
        this.IndexLength = null;

        /**
         * Fragmented space in MB.
         * @type {number || null}
         */
        this.DataFree = null;

        /**
         * Total space usage in MB.
         * @type {number || null}
         */
        this.TotalLength = null;

        /**
         * Fragmentation rate in %.
         * @type {number || null}
         */
        this.FragRatio = null;

        /**
         * Number of rows.
         * @type {number || null}
         */
        this.TableRows = null;

        /**
         * Total size in MB of physical files exclusive to all tables in the database.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PhysicalFileSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;
        this.DataLength = 'DataLength' in params ? params.DataLength : null;
        this.IndexLength = 'IndexLength' in params ? params.IndexLength : null;
        this.DataFree = 'DataFree' in params ? params.DataFree : null;
        this.TotalLength = 'TotalLength' in params ? params.TotalLength : null;
        this.FragRatio = 'FragRatio' in params ? params.FragRatio : null;
        this.TableRows = 'TableRows' in params ? params.TableRows : null;
        this.PhysicalFileSize = 'PhysicalFileSize' in params ? params.PhysicalFileSize : null;

    }
}

/**
 * DescribeAllUserContact request structure.
 * @class
 */
class DescribeAllUserContactRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service type, which is fixed to `mysql`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Array of recipient names. Fuzzy search is supported.
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
        this.Product = 'Product' in params ? params.Product : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * DescribeDiagDBInstances request structure.
 * @class
 */
class DescribeDiagDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is an instance supported by DBbrain. It is fixed to `true`.
         * @type {boolean || null}
         */
        this.IsSupported = null;

        /**
         * Service type. Valid values: mysql (TencentDB for MySQL), cynosdb (TDSQL-C for MySQL). Default value: mysql.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Pagination parameter indicating the offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination parameter. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query by instance name.
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * Query by instance ID.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Query by region.
         * @type {Array.<string> || null}
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsSupported = 'IsSupported' in params ? params.IsSupported : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Regions = 'Regions' in params ? params.Regions : null;

    }
}

/**
 * Queries the list of instances and returns their information.
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Health score.
         * @type {number || null}
         */
        this.HealthScore = null;

        /**
         * Service.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Number of exceptions.
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * Instance type. Valid values: 1 (MASTER), 2 (DR), 3 (RO), 4 (SDR)
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Number of cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory in MB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Disk storage in GB.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Database version.
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Private network address.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Private network port.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Access source.
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Instance status. Valid values: 0 (delivering), 1 (running), 4 (terminating), 5 (isolated)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Unified subnet ID.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * TencentDB instance type.
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * TencentDB instance initialization flag. Valid values: 0 (not initialized), 1 (initialized).
         * @type {number || null}
         */
        this.InitFlag = null;

        /**
         * Task status.
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * Unified VPC ID.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Instance inspection/overview status.
         * @type {InstanceConfs || null}
         */
        this.InstanceConf = null;

        /**
         * Resource expiration time.
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * Whether it is an instance supported by DBbrain.
         * @type {boolean || null}
         */
        this.IsSupported = null;

        /**
         * Status of instance security audit log. Valid values: ON (enabled), OFF (disabled).
         * @type {string || null}
         */
        this.SecAuditStatus = null;

        /**
         * Status of instance audit log. Valid values: ALL_AUDIT (full audit is enabled), RULE_AUDIT (rule audit is enabled), UNBOUND (audit is disabled).
         * @type {string || null}
         */
        this.AuditPolicyStatus = null;

        /**
         * Running status of instance audit log. Valid values: normal (running), paused (suspension due to overdue payment).
         * @type {string || null}
         */
        this.AuditRunningStatus = null;

        /**
         * Private VIP 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InternalVip = null;

        /**
         * Private network port 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InternalVport = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Cluster ID. This field is only required for cluster database products like TDSQL-C. 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name. This field is only required for cluster database products like TDSQL-C. 
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.HealthScore = 'HealthScore' in params ? params.HealthScore : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.InitFlag = 'InitFlag' in params ? params.InitFlag : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;

        if (params.InstanceConf) {
            let obj = new InstanceConfs();
            obj.deserialize(params.InstanceConf)
            this.InstanceConf = obj;
        }
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.IsSupported = 'IsSupported' in params ? params.IsSupported : null;
        this.SecAuditStatus = 'SecAuditStatus' in params ? params.SecAuditStatus : null;
        this.AuditPolicyStatus = 'AuditPolicyStatus' in params ? params.AuditPolicyStatus : null;
        this.AuditRunningStatus = 'AuditRunningStatus' in params ? params.AuditRunningStatus : null;
        this.InternalVip = 'InternalVip' in params ? params.InternalVip : null;
        this.InternalVport = 'InternalVport' in params ? params.InternalVport : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * DescribeAuditInstanceList request structure.
 * @class
 */
class DescribeAuditInstanceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service type. Valid values: `dcdb` (TDSQL for MySQL), `mariadb` (TencentDB for MariaDB).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Use the value of `Product` for this parameter, such as `dcdb` and `mariadb`.
         * @type {string || null}
         */
        this.NodeRequestType = null;

        /**
         * Audit status. Valid values: `0` (Not enabled), `1` (Enabled). Default value: `0`.
         * @type {number || null}
         */
        this.AuditSwitch = null;

        /**
         * The offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of queried items. Default value: `20`. Max value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters for querying instances
         * @type {Array.<AuditInstanceFilter> || null}
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
        this.Product = 'Product' in params ? params.Product : null;
        this.NodeRequestType = 'NodeRequestType' in params ? params.NodeRequestType : null;
        this.AuditSwitch = 'AuditSwitch' in params ? params.AuditSwitch : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AuditInstanceFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeSecurityAuditLogExportTasks request structure.
 * @class
 */
class DescribeSecurityAuditLogExportTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security audit group ID.
         * @type {string || null}
         */
        this.SecAuditGroupId = null;

        /**
         * Service type. Valid value: `mysql` (TencentDB for MySQL).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * List of log export task IDs.
         * @type {Array.<number> || null}
         */
        this.AsyncRequestIds = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecAuditGroupId = 'SecAuditGroupId' in params ? params.SecAuditGroupId : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.AsyncRequestIds = 'AsyncRequestIds' in params ? params.AsyncRequestIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteSecurityAuditLogExportTasks request structure.
 * @class
 */
class DeleteSecurityAuditLogExportTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security audit group ID.
         * @type {string || null}
         */
        this.SecAuditGroupId = null;

        /**
         * List of log export task IDs. This API will ignore task IDs that do not exist or have been deleted.
         * @type {Array.<number> || null}
         */
        this.AsyncRequestIds = null;

        /**
         * Service type. Valid value: `mysql` (TencentDB for MySQL).
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecAuditGroupId = 'SecAuditGroupId' in params ? params.SecAuditGroupId : null;
        this.AsyncRequestIds = 'AsyncRequestIds' in params ? params.AsyncRequestIds : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CreateSchedulerMailProfile response structure.
 * @class
 */
class CreateSchedulerMailProfileResponse extends  AbstractModel {
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
 * DescribeTopSpaceSchemaTimeSeries request structure.
 * @class
 */
class DescribeTopSpaceSchemaTimeSeriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of returned top databases. Maximum value: `100`. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Field used to sort top databases. Valid values: `DataLength`, `IndexLength`, `TotalLength`, `DataFree`, `FragRatio`, `TableRows`, `PhysicalFileSize` (supported only by TencentDB for MySQL instances). For TencentDB for MySQL instances, the default value is `PhysicalFileSize`. For other database instances, the default value is `TotalLength`.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Start date, such as "2021-01-01". It can be as early as 29 days before the current date and is 6 days before the end date by default.
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * End date, such as "2021-01-01". It can be as early as 29 days before the current date and is the current date by default.
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Product = 'Product' in params ? params.Product : null;

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
         * Service type. Valid values: `dcdb` (TDSQL for MySQL), `mariadb` (TencentDB for MariaDB).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Use the value of `u200cProduct` for this parameter, such as `dcdb` and `mariadb`.
         * @type {string || null}
         */
        this.NodeRequestType = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Total log retention period in days. Valid values: `7`, `30`, `90`, `180`, `365`, `1095`, `1825`.
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * Storage period of frequently accessed logs in days. Valid values: `7`, `30`, `90`, `180`, `365`, `1095`, `1825`.
         * @type {number || null}
         */
        this.HotLogExpireDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.NodeRequestType = 'NodeRequestType' in params ? params.NodeRequestType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.HotLogExpireDay = 'HotLogExpireDay' in params ? params.HotLogExpireDay : null;

    }
}

/**
 * DescribeSlowLogTopSqls request structure.
 * @class
 */
class DescribeSlowLogTopSqlsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time, such as "2019-09-10 12:13:14".
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in the format of "2019-09-11 10:13:14". The interval between the end time and the start time can be up to 7 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Sorting key. Valid values: `QueryTime`, `ExecTimes`, `RowsSent`, `LockTime`, `RowsExamined`. Default value: `QueryTime`.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Sorting order. Valid values: `ASC` (ascending), `DESC` (descending). Default value: `DESC`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Number of returned results. Default value: `20`. Maximum value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Database name array.
         * @type {Array.<SchemaItem> || null}
         */
        this.SchemaList = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.SchemaList) {
            this.SchemaList = new Array();
            for (let z in params.SchemaList) {
                let obj = new SchemaItem();
                obj.deserialize(params.SchemaList[z]);
                this.SchemaList.push(obj);
            }
        }
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeMailProfile response structure.
 * @class
 */
class DescribeMailProfileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Email configuration details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserProfile> || null}
         */
        this.ProfileList = null;

        /**
         * Total number of the configured emails.
Note: This field may return null, indicating that no valid values can be obtained.
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

        if (params.ProfileList) {
            this.ProfileList = new Array();
            for (let z in params.ProfileList) {
                let obj = new UserProfile();
                obj.deserialize(params.ProfileList[z]);
                this.ProfileList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHealthScore request structure.
 * @class
 */
class DescribeHealthScoreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID for which to get the health score.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time to get the health score in the format of `2019-09-10 12:13:14`.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Metric information.
 * @class
 */
class IssueTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric categories. Valid values: `AVAILABILITY`, `MAINTAINABILITY`, `PERFORMANCE`, and `RELIABILITY`.
         * @type {string || null}
         */
        this.IssueType = null;

        /**
         * Exception.
         * @type {Array.<EventInfo> || null}
         */
        this.Events = null;

        /**
         * Total number of exceptions.
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IssueType = 'IssueType' in params ? params.IssueType : null;

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new EventInfo();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeDiagDBInstances response structure.
 * @class
 */
class DescribeDiagDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Status of all instance inspection. 0: all instance inspection enabled, 1: all instance inspection disabled.
         * @type {number || null}
         */
        this.DbScanStatus = null;

        /**
         * Instance information.
         * @type {Array.<InstanceInfo> || null}
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
        this.DbScanStatus = 'DbScanStatus' in params ? params.DbScanStatus : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAllUserGroup request structure.
 * @class
 */
class DescribeAllUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service type, which is fixed to `mysql`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Array of recipient group names. Fuzzy search is supported.
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
        this.Product = 'Product' in params ? params.Product : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * CreateProxySessionKillTask request structure.
 * @class
 */
class CreateProxySessionKillTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Service type. Valid value: `redis` (TencentDB for Redis).
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CreateSecurityAuditLogExportTask response structure.
 * @class
 */
class CreateSecurityAuditLogExportTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log export task Id.
         * @type {number || null}
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
 * `SchemaItem` array
 * @class
 */
class SchemaItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.Schema = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Schema = 'Schema' in params ? params.Schema : null;

    }
}

/**
 * DescribeSlowLogUserHostStats request structure.
 * @class
 */
class DescribeSlowLogUserHostStatsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time of the time range in the format of yyyy-MM-dd HH:mm:ss, such as 2019-09-10 12:13:14.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the time range in the format of yyyy-MM-dd HH:mm:ss, such as 2019-09-10 12:13:14.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Service type. Valid values: mysql (TencentDB for MySQL), cynosdb (TDSQL-C for MySQL). Default value: mysql.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * MD5 value of the SQL template
         * @type {string || null}
         */
        this.Md5 = null;

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
        this.Product = 'Product' in params ? params.Product : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

    }
}

/**
 * DescribeTopSpaceSchemas response structure.
 * @class
 */
class DescribeTopSpaceSchemasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the returned space statistics of top databases.
         * @type {Array.<SchemaSpaceData> || null}
         */
        this.TopSpaceSchemas = null;

        /**
         * Timestamp (in seconds) of database space data collection points
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopSpaceSchemas) {
            this.TopSpaceSchemas = new Array();
            for (let z in params.TopSpaceSchemas) {
                let obj = new SchemaSpaceData();
                obj.deserialize(params.TopSpaceSchemas[z]);
                this.TopSpaceSchemas.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProxySessionKillTask response structure.
 * @class
 */
class CreateProxySessionKillTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID that is returned after the session killing task is created.
         * @type {number || null}
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
 * DescribeSlowLogTimeSeriesStats response structure.
 * @class
 */
class DescribeSlowLogTimeSeriesStatsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time range in seconds in histogram.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Number of slow logs in the specified time range.
         * @type {Array.<TimeSlice> || null}
         */
        this.TimeSeries = null;

        /**
         * Instance CPU utilization monitoring data in the specified time range.
         * @type {MonitorMetricSeriesData || null}
         */
        this.SeriesData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;

        if (params.TimeSeries) {
            this.TimeSeries = new Array();
            for (let z in params.TimeSeries) {
                let obj = new TimeSlice();
                obj.deserialize(params.TimeSeries[z]);
                this.TimeSeries.push(obj);
            }
        }

        if (params.SeriesData) {
            let obj = new MonitorMetricSeriesData();
            obj.deserialize(params.SeriesData)
            this.SeriesData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxyProcessStatistics request structure.
 * @class
 */
class DescribeProxyProcessStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The proxy ID you want to query under the instance
         * @type {string || null}
         */
        this.InstanceProxyId = null;

        /**
         * Number of returned results.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Service type. Valid value: `redis` (TencentDB for Redis).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sort by field. Valid values: `AllConn`, `ActiveConn`, `Ip`.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Sorting order. Valid values: `DESC`, `ASC`.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceProxyId = 'InstanceProxyId' in params ? params.InstanceProxyId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * Monitoring data in float type
 * @class
 */
class MonitorFloatMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Metric unit.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Metric value.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
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
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeRedisTopKeyPrefixList response structure.
 * @class
 */
class DescribeRedisTopKeyPrefixListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of top key prefixes
         * @type {Array.<RedisPreKeySpaceData> || null}
         */
        this.Items = null;

        /**
         * Data collection timestamp in seconds
         * @type {number || null}
         */
        this.Timestamp = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new RedisPreKeySpaceData();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAllUserGroup response structure.
 * @class
 */
class DescribeAllUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of groups.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Group information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GroupItem> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new GroupItem();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserSqlAdvice response structure.
 * @class
 */
class DescribeUserSqlAdviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SQL statement optimization suggestions, which can be parsed into JSON arrays. If there is no need for optimization, the output will be empty.
         * @type {string || null}
         */
        this.Advices = null;

        /**
         * Notes of SQL statement optimization suggestions, which can be parsed into String arrays. If there is no need for optimization, the output will be empty.
         * @type {string || null}
         */
        this.Comments = null;

        /**
         * SQL statement.
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * Database name.
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * DDL information of related tables, which can be parsed into JSON arrays.
         * @type {string || null}
         */
        this.Tables = null;

        /**
         * SQL execution plan, which can be parsed into JSON arrays. If there is no need for optimization, the output will be empty.
         * @type {string || null}
         */
        this.SqlPlan = null;

        /**
         * Cost saving details after SQL statement optimization, which can be parsed into JSON arrays. If there is no need for optimization, the output will be empty.
         * @type {string || null}
         */
        this.Cost = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Advices = 'Advices' in params ? params.Advices : null;
        this.Comments = 'Comments' in params ? params.Comments : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.Schema = 'Schema' in params ? params.Schema : null;
        this.Tables = 'Tables' in params ? params.Tables : null;
        this.SqlPlan = 'SqlPlan' in params ? params.SqlPlan : null;
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSpaceStatus response structure.
 * @class
 */
class DescribeDBSpaceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disk usage growth in MB.
         * @type {number || null}
         */
        this.Growth = null;

        /**
         * Available disk space in MB.
         * @type {number || null}
         */
        this.Remain = null;

        /**
         * Total disk space in MB.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Estimated number of available days.
         * @type {number || null}
         */
        this.AvailableDays = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Growth = 'Growth' in params ? params.Growth : null;
        this.Remain = 'Remain' in params ? params.Remain : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.AvailableDays = 'AvailableDays' in params ? params.AvailableDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes the group information.
 * @class
 */
class GroupItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Group name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Number of group members.
         * @type {number || null}
         */
        this.MemberCount = null;

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
        this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;

    }
}

/**
 * Space information of Redis key prefixes
 * @class
 */
class RedisPreKeySpaceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Average element length
         * @type {number || null}
         */
        this.AveElementSize = null;

        /**
         * Total memory usage in bytes
         * @type {number || null}
         */
        this.Length = null;

        /**
         * Key prefix
         * @type {string || null}
         */
        this.KeyPreIndex = null;

        /**
         * The number of elements
         * @type {number || null}
         */
        this.ItemCount = null;

        /**
         * The number of keys
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The max element length
         * @type {number || null}
         */
        this.MaxElementSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AveElementSize = 'AveElementSize' in params ? params.AveElementSize : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.KeyPreIndex = 'KeyPreIndex' in params ? params.KeyPreIndex : null;
        this.ItemCount = 'ItemCount' in params ? params.ItemCount : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.MaxElementSize = 'MaxElementSize' in params ? params.MaxElementSize : null;

    }
}

/**
 * DescribeTopSpaceTableTimeSeries request structure.
 * @class
 */
class DescribeTopSpaceTableTimeSeriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of returned top tables. Maximum value: `100`. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Field used to sort top tables. Valid values: `DataLength`, `IndexLength`, `TotalLength`, `DataFree`, `FragRatio`, `TableRows`, `PhysicalFileSize`. Default value: `PhysicalFileSize`.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Start date, such as "2021-01-01". It can be as early as 29 days before the current date and is 6 days before the end date by default.
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * End date, such as "2021-01-01". It can be as early as 29 days before the current date and is the current date by default.
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeDBDiagReportTasks request structure.
 * @class
 */
class DescribeDBDiagReportTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the first task in the format of yyyy-MM-dd HH:mm:ss, such as 2019-09-10 12:13:14. It is used for queries by time range.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the last task in the format of yyyy-MM-dd HH:mm:ss, such as 2019-09-10 12:13:14. It is used for queries by time range.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Array of instance IDs, which is used to filter the task list of the specified instance.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Source that triggers the task. Valid values: `DAILY_INSPECTION` (instance inspection), `SCHEDULED` (scheduled task), and `MANUAL` (manual trigger).
         * @type {Array.<string> || null}
         */
        this.Sources = null;

        /**
         * Health level. Valid values: `HEALTH` (healthy), `SUB_HEALTH` (suboptimal), `RISK` (risky), and `HIGH_RISK` (critical).
         * @type {string || null}
         */
        this.HealthLevels = null;

        /**
         * Task status. Valid values: `created` (created), `chosen` (to be executed), `running` (being executed), `failed` (failed), and `finished` (completed).
         * @type {string || null}
         */
        this.TaskStatuses = null;

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
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Sources = 'Sources' in params ? params.Sources : null;
        this.HealthLevels = 'HealthLevels' in params ? params.HealthLevels : null;
        this.TaskStatuses = 'TaskStatuses' in params ? params.TaskStatuses : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Monitoring metric value in a unit of time interval
 * @class
 */
class MonitorMetricSeriesData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Monitoring metric.
         * @type {Array.<MonitorMetric> || null}
         */
        this.Series = null;

        /**
         * Timestamp corresponding to monitoring metric.
         * @type {Array.<number> || null}
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Series) {
            this.Series = new Array();
            for (let z in params.Series) {
                let obj = new MonitorMetric();
                obj.deserialize(params.Series[z]);
                this.Series.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * Slow log details
 * @class
 */
class SlowLogInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow log start time
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * SQL statement
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * Database
         * @type {string || null}
         */
        this.Database = null;

        /**
         * User source
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * IP source
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserHost = null;

        /**
         * Execution time in seconds
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * Lock time in seconds
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * Number of scanned rows
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RowsExamined = null;

        /**
         * Number of returned rows
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RowsSent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserHost = 'UserHost' in params ? params.UserHost : null;
        this.QueryTime = 'QueryTime' in params ? params.QueryTime : null;
        this.LockTime = 'LockTime' in params ? params.LockTime : null;
        this.RowsExamined = 'RowsExamined' in params ? params.RowsExamined : null;
        this.RowsSent = 'RowsSent' in params ? params.RowsSent : null;

    }
}

/**
 * Security audit log export task information.
 * @class
 */
class SecLogExportTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task Id.
         * @type {number || null}
         */
        this.AsyncRequestId = null;

        /**
         * Task start time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task status.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task progress.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Exported log start time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogStartTime = null;

        /**
         * Exported log end time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogEndTime = null;

        /**
         * Total size of log files in KB.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

        /**
         * List of risk levels. Valid values: `0` (no risk), `1` (low risk), `2` (medium risk), `3` (high risk).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.DangerLevels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.LogStartTime = 'LogStartTime' in params ? params.LogStartTime : null;
        this.LogEndTime = 'LogEndTime' in params ? params.LogEndTime : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.DangerLevels = 'DangerLevels' in params ? params.DangerLevels : null;

    }
}

/**
 * DescribeHealthScore response structure.
 * @class
 */
class DescribeHealthScoreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health score and deduction for exceptions.
         * @type {HealthScoreInfo || null}
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

        if (params.Data) {
            let obj = new HealthScoreInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * If `0` is returned, audit is successfully disabled; otherwise, an exception will be returned, indicating that audit has failed to be disabled.
         * @type {number || null}
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
 * DescribeTopSpaceSchemas request structure.
 * @class
 */
class DescribeTopSpaceSchemasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of returned top databases. Maximum value: 100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Field used to sort top databases. Valid values: DataLength, IndexLength, TotalLength, DataFree, FragRatio, TableRows, PhysicalFileSize (supported only by TencentDB for MySQL instances). For TencentDB for MySQL instances, the default value is `PhysicalFileSize`. For other database instances, the default value is `TotalLength`.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Service type. Valid values: mysql (TencentDB for MySQL), cynosdb (TDSQL-C for MySQL). Default value: mysql.
         * @type {string || null}
         */
        this.Product = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeSlowLogTopSqls response structure.
 * @class
 */
class DescribeSlowLogTopSqlsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of top slow SQL statements
         * @type {Array.<SlowLogTopSqlItem> || null}
         */
        this.Rows = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new SlowLogTopSqlItem();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
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
         * Audit configuration modification result. If `0` is returned, the modification is successful; otherwise, an exception will be returned, indicating that the modification failed.
         * @type {number || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Success = 'Success' in params ? params.Success : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserSqlAdvice request structure.
 * @class
 */
class DescribeUserSqlAdviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * SQL statement.
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * Database name.
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL), `dbbrain-mysql` (self-built MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.Schema = 'Schema' in params ? params.Schema : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeMySqlProcessList request structure.
 * @class
 */
class DescribeMySqlProcessListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Thread ID, which is used to filter the thread list.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Thread operation account name, which is used to filter the thread list.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Thread operation host address, which is used to filter the thread list.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Thread operation database, which is used to filter the thread list.
         * @type {string || null}
         */
        this.DB = null;

        /**
         * Thread operation status, which is used to filter the thread list.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Thread execution type, which is used to filter the thread list.
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Minimum operation duration of the thread in seconds, which is used to filter the list of threads whose operation duration is greater than this value.
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Thread operation statement, which is used to filter the thread list.
         * @type {string || null}
         */
        this.Info = null;

        /**
         * Number of returned results. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Service type. Valid values: mysql (TencentDB for MySQL), cynosdb (TDSQL-C for MySQL). Default value: mysql.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.User = 'User' in params ? params.User : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DB = 'DB' in params ? params.DB : null;
        this.State = 'State' in params ? params.State : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeSecurityAuditLogDownloadUrls response structure.
 * @class
 */
class DescribeSecurityAuditLogDownloadUrlsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of COS URLs of the export results. If the result set is large, it may be divided into multiple URLs for download.
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxySessionKillTasks response structure.
 * @class
 */
class DescribeProxySessionKillTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session killing task details.
         * @type {Array.<TaskInfo> || null}
         */
        this.Tasks = null;

        /**
         * Total number of tasks.
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SchemaSpaceTimeSeries: SchemaSpaceTimeSeries,
    SlowLogUser: SlowLogUser,
    DescribeRedisTopKeyPrefixListRequest: DescribeRedisTopKeyPrefixListRequest,
    HealthReportTask: HealthReportTask,
    OpenAuditServiceResponse: OpenAuditServiceResponse,
    CreateDBDiagReportTaskRequest: CreateDBDiagReportTaskRequest,
    TableSpaceTimeSeries: TableSpaceTimeSeries,
    DescribeSlowLogsRequest: DescribeSlowLogsRequest,
    DescribeTopSpaceTablesRequest: DescribeTopSpaceTablesRequest,
    ScoreItem: ScoreItem,
    CreateRedisBigKeyAnalysisTaskResponse: CreateRedisBigKeyAnalysisTaskResponse,
    CreateSecurityAuditLogExportTaskRequest: CreateSecurityAuditLogExportTaskRequest,
    DescribeDBDiagEventResponse: DescribeDBDiagEventResponse,
    DescribeDBDiagEventsResponse: DescribeDBDiagEventsResponse,
    DescribeDBDiagReportTasksResponse: DescribeDBDiagReportTasksResponse,
    AddUserContactResponse: AddUserContactResponse,
    AuditInstanceInfo: AuditInstanceInfo,
    ModifyDiagDBInstanceConfResponse: ModifyDiagDBInstanceConfResponse,
    DescribeTopSpaceSchemaTimeSeriesResponse: DescribeTopSpaceSchemaTimeSeriesResponse,
    SlowLogTopSqlItem: SlowLogTopSqlItem,
    DescribeAuditInstanceListResponse: DescribeAuditInstanceListResponse,
    DescribeProxySessionKillTasksRequest: DescribeProxySessionKillTasksRequest,
    CreateRedisBigKeyAnalysisTaskRequest: CreateRedisBigKeyAnalysisTaskRequest,
    DescribeMySqlProcessListResponse: DescribeMySqlProcessListResponse,
    SessionItem: SessionItem,
    HealthStatus: HealthStatus,
    DescribeTopSpaceTablesResponse: DescribeTopSpaceTablesResponse,
    TaskInfo: TaskInfo,
    KillMySqlThreadsResponse: KillMySqlThreadsResponse,
    CreateSchedulerMailProfileRequest: CreateSchedulerMailProfileRequest,
    ContactItem: ContactItem,
    DescribeDBSpaceStatusRequest: DescribeDBSpaceStatusRequest,
    TimeSlice: TimeSlice,
    DeleteDBDiagReportTasksRequest: DeleteDBDiagReportTasksRequest,
    ModifyDiagDBInstanceConfRequest: ModifyDiagDBInstanceConfRequest,
    DescribeSlowLogsResponse: DescribeSlowLogsResponse,
    DescribeSecurityAuditLogDownloadUrlsRequest: DescribeSecurityAuditLogDownloadUrlsRequest,
    CreateDBDiagReportTaskResponse: CreateDBDiagReportTaskResponse,
    ProcessStatistic: ProcessStatistic,
    CreateMailProfileResponse: CreateMailProfileResponse,
    DescribeSlowLogTimeSeriesStatsRequest: DescribeSlowLogTimeSeriesStatsRequest,
    DiagHistoryEventItem: DiagHistoryEventItem,
    MySqlProcess: MySqlProcess,
    DescribeDBDiagHistoryRequest: DescribeDBDiagHistoryRequest,
    CreateKillTaskResponse: CreateKillTaskResponse,
    AuditInstance: AuditInstance,
    DescribeDBDiagEventsRequest: DescribeDBDiagEventsRequest,
    CreateDBDiagReportUrlResponse: CreateDBDiagReportUrlResponse,
    ScoreDetail: ScoreDetail,
    OpenAuditServiceRequest: OpenAuditServiceRequest,
    CreateKillTaskRequest: CreateKillTaskRequest,
    DeleteDBDiagReportTasksResponse: DeleteDBDiagReportTasksResponse,
    DescribeProxyProcessStatisticsResponse: DescribeProxyProcessStatisticsResponse,
    SlowLogHost: SlowLogHost,
    CreateMailProfileRequest: CreateMailProfileRequest,
    MonitorFloatMetricSeriesData: MonitorFloatMetricSeriesData,
    MailConfiguration: MailConfiguration,
    DescribeSlowLogUserHostStatsResponse: DescribeSlowLogUserHostStatsResponse,
    TableSpaceData: TableSpaceData,
    EventInfo: EventInfo,
    AuditInstanceFilter: AuditInstanceFilter,
    DescribeMailProfileRequest: DescribeMailProfileRequest,
    DeleteSecurityAuditLogExportTasksResponse: DeleteSecurityAuditLogExportTasksResponse,
    KillMySqlThreadsRequest: KillMySqlThreadsRequest,
    CreateDBDiagReportUrlRequest: CreateDBDiagReportUrlRequest,
    DescribeSecurityAuditLogExportTasksResponse: DescribeSecurityAuditLogExportTasksResponse,
    CloseAuditServiceRequest: CloseAuditServiceRequest,
    InstanceConfs: InstanceConfs,
    HealthScoreInfo: HealthScoreInfo,
    DescribeTopSpaceTableTimeSeriesResponse: DescribeTopSpaceTableTimeSeriesResponse,
    DescribeDBDiagHistoryResponse: DescribeDBDiagHistoryResponse,
    DescribeDBDiagEventRequest: DescribeDBDiagEventRequest,
    DescribeAllUserContactResponse: DescribeAllUserContactResponse,
    MonitorMetric: MonitorMetric,
    ProfileInfo: ProfileInfo,
    UserProfile: UserProfile,
    AddUserContactRequest: AddUserContactRequest,
    InstanceBasicInfo: InstanceBasicInfo,
    SchemaSpaceData: SchemaSpaceData,
    DescribeAllUserContactRequest: DescribeAllUserContactRequest,
    DescribeDiagDBInstancesRequest: DescribeDiagDBInstancesRequest,
    InstanceInfo: InstanceInfo,
    DescribeAuditInstanceListRequest: DescribeAuditInstanceListRequest,
    DescribeSecurityAuditLogExportTasksRequest: DescribeSecurityAuditLogExportTasksRequest,
    DeleteSecurityAuditLogExportTasksRequest: DeleteSecurityAuditLogExportTasksRequest,
    CreateSchedulerMailProfileResponse: CreateSchedulerMailProfileResponse,
    DescribeTopSpaceSchemaTimeSeriesRequest: DescribeTopSpaceSchemaTimeSeriesRequest,
    ModifyAuditServiceRequest: ModifyAuditServiceRequest,
    DescribeSlowLogTopSqlsRequest: DescribeSlowLogTopSqlsRequest,
    DescribeMailProfileResponse: DescribeMailProfileResponse,
    DescribeHealthScoreRequest: DescribeHealthScoreRequest,
    IssueTypeInfo: IssueTypeInfo,
    DescribeDiagDBInstancesResponse: DescribeDiagDBInstancesResponse,
    DescribeAllUserGroupRequest: DescribeAllUserGroupRequest,
    CreateProxySessionKillTaskRequest: CreateProxySessionKillTaskRequest,
    CreateSecurityAuditLogExportTaskResponse: CreateSecurityAuditLogExportTaskResponse,
    SchemaItem: SchemaItem,
    DescribeSlowLogUserHostStatsRequest: DescribeSlowLogUserHostStatsRequest,
    DescribeTopSpaceSchemasResponse: DescribeTopSpaceSchemasResponse,
    CreateProxySessionKillTaskResponse: CreateProxySessionKillTaskResponse,
    DescribeSlowLogTimeSeriesStatsResponse: DescribeSlowLogTimeSeriesStatsResponse,
    DescribeProxyProcessStatisticsRequest: DescribeProxyProcessStatisticsRequest,
    MonitorFloatMetric: MonitorFloatMetric,
    DescribeRedisTopKeyPrefixListResponse: DescribeRedisTopKeyPrefixListResponse,
    DescribeAllUserGroupResponse: DescribeAllUserGroupResponse,
    DescribeUserSqlAdviceResponse: DescribeUserSqlAdviceResponse,
    DescribeDBSpaceStatusResponse: DescribeDBSpaceStatusResponse,
    GroupItem: GroupItem,
    RedisPreKeySpaceData: RedisPreKeySpaceData,
    DescribeTopSpaceTableTimeSeriesRequest: DescribeTopSpaceTableTimeSeriesRequest,
    DescribeDBDiagReportTasksRequest: DescribeDBDiagReportTasksRequest,
    MonitorMetricSeriesData: MonitorMetricSeriesData,
    SlowLogInfoItem: SlowLogInfoItem,
    SecLogExportTaskInfo: SecLogExportTaskInfo,
    DescribeHealthScoreResponse: DescribeHealthScoreResponse,
    CloseAuditServiceResponse: CloseAuditServiceResponse,
    DescribeTopSpaceSchemasRequest: DescribeTopSpaceSchemasRequest,
    DescribeSlowLogTopSqlsResponse: DescribeSlowLogTopSqlsResponse,
    ModifyAuditServiceResponse: ModifyAuditServiceResponse,
    DescribeUserSqlAdviceRequest: DescribeUserSqlAdviceRequest,
    DescribeMySqlProcessListRequest: DescribeMySqlProcessListRequest,
    DescribeSecurityAuditLogDownloadUrlsResponse: DescribeSecurityAuditLogDownloadUrlsResponse,
    DescribeProxySessionKillTasksResponse: DescribeProxySessionKillTasksResponse,

}
