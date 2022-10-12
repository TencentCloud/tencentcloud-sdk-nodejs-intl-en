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
 * UploadLog response structure.
 * @class
 */
class UploadLogResponse extends  AbstractModel {
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
 * CreateAlarm response structure.
 * @class
 */
class CreateAlarmResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy ID.
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Alarm policy description
 * @class
 */
class AlarmInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Monitoring object list
         * @type {Array.<AlarmTargetInfo> || null}
         */
        this.AlarmTargets = null;

        /**
         * Monitoring task running time point
         * @type {MonitorTime || null}
         */
        this.MonitorTime = null;

        /**
         * Trigger condition
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * Alarm persistence cycle. An alarm will be triggered only after the corresponding trigger condition is met for the number of times specified by `TriggerCount`. Value range: 1–10.
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * Repeated alarm interval in minutes. Value range: 0–1440.
         * @type {number || null}
         */
        this.AlarmPeriod = null;

        /**
         * List of associated alarm notification templates
         * @type {Array.<string> || null}
         */
        this.AlarmNoticeIds = null;

        /**
         * Enablement status
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Alarm policy ID
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Custom notification template
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MessageTemplate = null;

        /**
         * Custom callback template
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {CallBackInfo || null}
         */
        this.CallBack = null;

        /**
         * Multi-Dimensional analysis settings
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AnalysisDimensional> || null}
         */
        this.Analysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AlarmTargets) {
            this.AlarmTargets = new Array();
            for (let z in params.AlarmTargets) {
                let obj = new AlarmTargetInfo();
                obj.deserialize(params.AlarmTargets[z]);
                this.AlarmTargets.push(obj);
            }
        }

        if (params.MonitorTime) {
            let obj = new MonitorTime();
            obj.deserialize(params.MonitorTime)
            this.MonitorTime = obj;
        }
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.AlarmPeriod = 'AlarmPeriod' in params ? params.AlarmPeriod : null;
        this.AlarmNoticeIds = 'AlarmNoticeIds' in params ? params.AlarmNoticeIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.MessageTemplate = 'MessageTemplate' in params ? params.MessageTemplate : null;

        if (params.CallBack) {
            let obj = new CallBackInfo();
            obj.deserialize(params.CallBack)
            this.CallBack = obj;
        }

        if (params.Analysis) {
            this.Analysis = new Array();
            for (let z in params.Analysis) {
                let obj = new AnalysisDimensional();
                obj.deserialize(params.Analysis[z]);
                this.Analysis.push(obj);
            }
        }

    }
}

/**
 * Log result information
 * @class
 */
class LogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log time in milliseconds
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Log source IP
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Log filename
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * ID of the request package for log reporting
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * Log ID in request package
         * @type {string || null}
         */
        this.PkgLogId = null;

        /**
         * Serialized JSON string of log content
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogJson = null;

        /**
         * Source host name of logs
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.HostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;
        this.LogJson = 'LogJson' in params ? params.LogJson : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

    }
}

/**
 * DeleteAlarmNotice response structure.
 * @class
 */
class DeleteAlarmNoticeResponse extends  AbstractModel {
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
 * DescribeLogHistogram request structure.
 * @class
 */
class DescribeLogHistogramRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the log topic to be queried
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Start time of the log to be queried, which is a Unix timestamp in milliseconds
         * @type {number || null}
         */
        this.From = null;

        /**
         * End time of the log to be queried, which is a Unix timestamp in milliseconds
         * @type {number || null}
         */
        this.To = null;

        /**
         * Query statement
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Time interval in milliseconds
         * @type {number || null}
         */
        this.Interval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * DescribeLogContext request structure.
 * @class
 */
class DescribeLogContextRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID to be queried
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log time in the format of YYYY-mm-dd HH:MM:SS.FFF
         * @type {string || null}
         */
        this.BTime = null;

        /**
         * Log package number
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * Log number in log package
         * @type {number || null}
         */
        this.PkgLogId = null;

        /**
         * Number of previous logs. Default value: 10
         * @type {number || null}
         */
        this.PrevLogs = null;

        /**
         * Number of next logs. Default value: 10
         * @type {number || null}
         */
        this.NextLogs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.BTime = 'BTime' in params ? params.BTime : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;
        this.PrevLogs = 'PrevLogs' in params ? params.PrevLogs : null;
        this.NextLogs = 'NextLogs' in params ? params.NextLogs : null;

    }
}

/**
 * DeleteShipper request structure.
 * @class
 */
class DeleteShipperRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping rule ID
         * @type {string || null}
         */
        this.ShipperId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;

    }
}

/**
 * ModifyTopic request structure.
 * @class
 */
class ModifyTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Tag description list. This parameter is used to bind a tag to a log topic. Up to 10 tag key-value pairs are supported, and they must be unique.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether to start collection for this log topic
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Whether to enable automatic split
         * @type {boolean || null}
         */
        this.AutoSplit = null;

        /**
         * Maximum number of partitions to split into for this topic if automatic split is enabled
         * @type {number || null}
         */
        this.MaxSplitPartitions = null;

        /**
         * Lifecycle in days. Value range: 1–3600 (STANDARD storage); 7–3600 (IA storage). `3640` indicates permanent retention.
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.AutoSplit = 'AutoSplit' in params ? params.AutoSplit : null;
        this.MaxSplitPartitions = 'MaxSplitPartitions' in params ? params.MaxSplitPartitions : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * DeleteLogset response structure.
 * @class
 */
class DeleteLogsetResponse extends  AbstractModel {
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
 * `Parquet` content description
 * @class
 */
class ParquetKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key name
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * Supported data types: string, boolean, int32, int64, float, and double
         * @type {string || null}
         */
        this.KeyType = null;

        /**
         * Assignment information returned upon resolution failure
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.KeyNonExistingField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.KeyType = 'KeyType' in params ? params.KeyType : null;
        this.KeyNonExistingField = 'KeyNonExistingField' in params ? params.KeyNonExistingField : null;

    }
}

/**
 * DescribeShipperTasks response structure.
 * @class
 */
class DescribeShipperTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping task list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ShipperTaskInfo> || null}
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ShipperTaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMachineGroup response structure.
 * @class
 */
class CreateMachineGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeConfigMachineGroups request structure.
 * @class
 */
class DescribeConfigMachineGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * CreateLogset request structure.
 * @class
 */
class CreateLogsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset name, which must be unique
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Tag description list. Up to 10 tag key-value pairs are supported and must be unique.
         * @type {Array.<Tag> || null}
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
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Key-Value pair in log
 * @class
 */
class LogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Log value
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
 * SearchLog response structure.
 * @class
 */
class SearchLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * You can pass through the `Context` value (validity: 1 hour) returned by this API to continue to get more logs.
         * @type {string || null}
         */
        this.Context = null;

        /**
         * Whether to return all raw log query results. If not, you can use `Context` to continue to get logs.
Note: This parameter is valid only when the query statement (`Query`) does not contain an SQL statement.
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * Whether the returned data is the analysis (SQL) result
         * @type {boolean || null}
         */
        this.Analysis = null;

        /**
         * Raw logs that meet the search conditions
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<LogInfo> || null}
         */
        this.Results = null;

        /**
         * Column names of log analysis
This parameter is valid only when `UseNewAnalysis` is `false`.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.ColNames = null;

        /**
         * Log analysis result
This parameter is valid only when `UseNewAnalysis` is `false`.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<LogItems> || null}
         */
        this.AnalysisResults = null;

        /**
         * Log analysis result
This parameter is valid only when `UseNewAnalysis` is `true`.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.AnalysisRecords = null;

        /**
         * Column attributes of log analysis
This parameter is valid only when `UseNewAnalysis` is `true`.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Column> || null}
         */
        this.Columns = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.Analysis = 'Analysis' in params ? params.Analysis : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new LogInfo();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.ColNames = 'ColNames' in params ? params.ColNames : null;

        if (params.AnalysisResults) {
            this.AnalysisResults = new Array();
            for (let z in params.AnalysisResults) {
                let obj = new LogItems();
                obj.deserialize(params.AnalysisResults[z]);
                this.AnalysisResults.push(obj);
            }
        }
        this.AnalysisRecords = 'AnalysisRecords' in params ? params.AnalysisRecords : null;

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new Column();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTopic request structure.
 * @class
 */
class DeleteTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribePartitions request structure.
 * @class
 */
class DescribePartitionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * ModifyAlarm response structure.
 * @class
 */
class ModifyAlarmResponse extends  AbstractModel {
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
 * DescribeShipperTasks request structure.
 * @class
 */
class DescribeShipperTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping rule ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * Query start timestamp in milliseconds, which can be within the last three days
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end timestamp in milliseconds
         * @type {number || null}
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
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeAlarms request structure.
 * @class
 */
class DescribeAlarmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> name

Filter by **alarm policy name**
Type: string

Required: no

<br><li> alarmId

Filter by **alarm policy ID**
Type: string

Required: no

<br><li> topicId

Filter by **log topic ID**

Type: string

Required: no

<br><li> enable

Filter by **enablement status**

Type: string

Note: The valid values of `enable` include `1`, `t`, `T`, `TRUE`, `true`, `True`, `0`, `f`, `F`, `FALSE`, `false`, and `False`. If other values are entered, an “invalid parameter” error will be returned.

Required: no

Each request can have up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
 * MergePartition request structure.
 * @class
 */
class MergePartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Merged `PartitionId`
         * @type {number || null}
         */
        this.PartitionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;

    }
}

/**
 * DescribeShippers response structure.
 * @class
 */
class DescribeShippersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping rule list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ShipperInfo> || null}
         */
        this.Shippers = null;

        /**
         * Total number of results obtained in this query
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

        if (params.Shippers) {
            this.Shippers = new Array();
            for (let z in params.Shippers) {
                let obj = new ShipperInfo();
                obj.deserialize(params.Shippers[z]);
                this.Shippers.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyShipper response structure.
 * @class
 */
class ModifyShipperResponse extends  AbstractModel {
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
 * RetryShipperTask request structure.
 * @class
 */
class RetryShipperTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping rule ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * Shipping task ID
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
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * Callback configuration
 * @class
 */
class CallBackInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * `Body` during callback
         * @type {string || null}
         */
        this.Body = null;

        /**
         * `Headers` during callback
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
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
        this.Body = 'Body' in params ? params.Body : null;
        this.Headers = 'Headers' in params ? params.Headers : null;

    }
}

/**
 * OpenKafkaConsumer response structure.
 * @class
 */
class OpenKafkaConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `TopicId` to be consumed
         * @type {string || null}
         */
        this.TopicID = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicID = 'TopicID' in params ? params.TopicID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Alarm object
 * @class
 */
class AlarmTargetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Logset name
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Query statement
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Monitoring object number
         * @type {number || null}
         */
        this.Number = null;

        /**
         * Offset of the query start time from the alarm execution time in minutes. The value cannot be positive. Value range: -1440–0.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * Offset of the query end time from the alarm execution time in minutes. The value cannot be positive and must be greater than `StartTimeOffset`. Value range: -1440–0.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * DescribeIndex request structure.
 * @class
 */
class DescribeIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeConfigs response structure.
 * @class
 */
class DescribeConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection configuration list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ConfigInfo> || null}
         */
        this.Configs = null;

        /**
         * Total number of filtered items
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

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new ConfigInfo();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLogset response structure.
 * @class
 */
class CreateLogsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMachineGroup response structure.
 * @class
 */
class DeleteMachineGroupResponse extends  AbstractModel {
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
 * Description of the tag pair bound to a resource instance when it is created
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
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
 * DescribeMachineGroups request structure.
 * @class
 */
class DescribeMachineGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> machineGroupName

Filter by **machine group name**.
Type: String

Required: no

<br><li> machineGroupId

Filter by **machine group ID**.
Type: String

Required: no

<br><li> tagKey

Filter by **tag key**.

Type: String

Required: no

<br><li> tag:tagKey

Filter by **tag key-value pair**. The `tagKey` should be replaced with a specified tag key.
Type: String

Required: no


Each request can contain up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100
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
 * Log extraction rule
 * @class
 */
class ExtractRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time field key name. `time_key` and `time_format` must appear in pairs
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * Time field format. For more information, please see the output parameters of the time format description of the `strftime` function in C language
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * Delimiter for delimited log, which is valid only if `log_type` is `delimiter_log`
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Delimiter = null;

        /**
         * Full log matching rule, which is valid only if `log_type` is `fullregex_log`
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogRegex = null;

        /**
         * First-Line matching rule, which is valid only if `log_type` is `multiline_log` or `fullregex_log`
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BeginRegex = null;

        /**
         * Key name of each extracted field. An empty key indicates to discard the field. This parameter is valid only if `log_type` is `delimiter_log`. `json_log` logs use the key of JSON itself
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Keys = null;

        /**
         * Log keys to be filtered and the corresponding regex
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<KeyRegexInfo> || null}
         */
        this.FilterKeyRegex = null;

        /**
         * Whether to upload the logs that failed to be parsed. Valid values: `true`: yes; `false`: no
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.UnMatchUpLoadSwitch = null;

        /**
         * Unmatched log key
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UnMatchLogKey = null;

        /**
         * Size of the data to be rewound in incremental collection mode. Default value: -1 (full collection)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Backtracking = null;

        /**
         * Whether to be encoded in GBK format. Valid values: `0` (No) and `1` (Yes).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsGBK = null;

        /**
         * Whether to be formatted as JSON (standard). Valid values: `0` (No) and `1` (Yes).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.JsonStandard = null;

        /**
         * Syslog protocol. Valid values: `tcp`, `udp`.
This field can be used when you create/modify collection rule configurations.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listening address and port specified by the syslog collection. Format: [ip]:[port]. Example: 127.0.0.1:9000.
This field can be used when you create/modify collection rule configurations.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * `rfc3164`: Resolve logs by using the RFC3164 protocol during the syslog collection.
`rfc5424`: Resolve logs by using the RFC5424 protocol during the syslog collection.
`auto`: Automatically match either the RFC3164 or RFC5424 protocol.
This field can be used when you create/modify collection rule configurations.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ParseProtocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.Delimiter = 'Delimiter' in params ? params.Delimiter : null;
        this.LogRegex = 'LogRegex' in params ? params.LogRegex : null;
        this.BeginRegex = 'BeginRegex' in params ? params.BeginRegex : null;
        this.Keys = 'Keys' in params ? params.Keys : null;

        if (params.FilterKeyRegex) {
            this.FilterKeyRegex = new Array();
            for (let z in params.FilterKeyRegex) {
                let obj = new KeyRegexInfo();
                obj.deserialize(params.FilterKeyRegex[z]);
                this.FilterKeyRegex.push(obj);
            }
        }
        this.UnMatchUpLoadSwitch = 'UnMatchUpLoadSwitch' in params ? params.UnMatchUpLoadSwitch : null;
        this.UnMatchLogKey = 'UnMatchLogKey' in params ? params.UnMatchLogKey : null;
        this.Backtracking = 'Backtracking' in params ? params.Backtracking : null;
        this.IsGBK = 'IsGBK' in params ? params.IsGBK : null;
        this.JsonStandard = 'JsonStandard' in params ? params.JsonStandard : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.ParseProtocol = 'ParseProtocol' in params ? params.ParseProtocol : null;

    }
}

/**
 * Log topic information
 * @class
 */
class TopicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Number of topic partitions
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * Whether index is enabled
         * @type {boolean || null}
         */
        this.Index = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether collection is enabled in the log topic
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Information of tags bound to log topic
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether automatic split is enabled for this topic
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AutoSplit = null;

        /**
         * Maximum number of partitions to split into for this topic if automatic split is enabled
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxSplitPartitions = null;

        /**
         * Log topic storage class
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * Lifecycle in days. Value range: 1-3600 (3640 indicates permanent retention)
Note: This field may return `null`, indicating that no valid value was found.
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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoSplit = 'AutoSplit' in params ? params.AutoSplit : null;
        this.MaxSplitPartitions = 'MaxSplitPartitions' in params ? params.MaxSplitPartitions : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * DescribeConsumer request structure.
 * @class
 */
class DescribeConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID bound to the task
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * Shipping task information
 * @class
 */
class ShipperTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Shipping information ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Start timestamp of the current batch of shipped logs in milliseconds
         * @type {number || null}
         */
        this.RangeStart = null;

        /**
         * End timestamp of the current batch of shipped logs in milliseconds
         * @type {number || null}
         */
        this.RangeEnd = null;

        /**
         * Start timestamp of the current shipping task in milliseconds
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End timestamp of the current shipping task in milliseconds
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Result of the current shipping task. Valid values: `success`, `running`, `failed`
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Result details
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RangeStart = 'RangeStart' in params ? params.RangeStart : null;
        this.RangeEnd = 'RangeEnd' in params ? params.RangeEnd : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ModifyConsumer request structure.
 * @class
 */
class ModifyConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID bound to the task
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Whether the shipping task takes effect (default: no)
         * @type {boolean || null}
         */
        this.Effective = null;

        /**
         * Whether to ship metadata. Default value: `false`
         * @type {boolean || null}
         */
        this.NeedContent = null;

        /**
         * Metadata to ship if `NeedContent` is `true`
         * @type {ConsumerContent || null}
         */
        this.Content = null;

        /**
         * CKafka information
         * @type {Ckafka || null}
         */
        this.Ckafka = null;

        /**
         * Compression mode. Valid values: `0` (no compression), `2` (snappy), `3` (LZ4).
         * @type {number || null}
         */
        this.Compression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Effective = 'Effective' in params ? params.Effective : null;
        this.NeedContent = 'NeedContent' in params ? params.NeedContent : null;

        if (params.Content) {
            let obj = new ConsumerContent();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

        if (params.Ckafka) {
            let obj = new Ckafka();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }
        this.Compression = 'Compression' in params ? params.Compression : null;

    }
}

/**
 * CreateIndex response structure.
 * @class
 */
class CreateIndexResponse extends  AbstractModel {
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
 * DeleteConfigFromMachineGroup response structure.
 * @class
 */
class DeleteConfigFromMachineGroupResponse extends  AbstractModel {
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
 * CreateConsumer response structure.
 * @class
 */
class CreateConsumerResponse extends  AbstractModel {
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
 * ModifyMachineGroup response structure.
 * @class
 */
class ModifyMachineGroupResponse extends  AbstractModel {
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
 * Index rule. At least one of the `FullText`, `KeyValue`, and `Tag` parameters must be valid.
 * @class
 */
class RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full-Text index configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {FullTextInfo || null}
         */
        this.FullText = null;

        /**
         * Key-Value index configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {RuleKeyValueInfo || null}
         */
        this.KeyValue = null;

        /**
         * Metafield index configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {RuleTagInfo || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FullText) {
            let obj = new FullTextInfo();
            obj.deserialize(params.FullText)
            this.FullText = obj;
        }

        if (params.KeyValue) {
            let obj = new RuleKeyValueInfo();
            obj.deserialize(params.KeyValue)
            this.KeyValue = obj;
        }

        if (params.Tag) {
            let obj = new RuleTagInfo();
            obj.deserialize(params.Tag)
            this.Tag = obj;
        }

    }
}

/**
 * DeleteMachineGroup request structure.
 * @class
 */
class DeleteMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * Full-Text index configuration
 * @class
 */
class FullTextInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Case sensitivity
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * Separator of the full-text index. Each character represents a separator;
Supports only English punctuation marks and (\n\t\r);
We recommend you use (@&?|#()='",;:<>[]{}/ \n\t\r\) as separators;
         * @type {string || null}
         */
        this.Tokenizer = null;

        /**
         * Whether Chinese characters are contained
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ContainZH = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;
        this.Tokenizer = 'Tokenizer' in params ? params.Tokenizer : null;
        this.ContainZH = 'ContainZH' in params ? params.ContainZH : null;

    }
}

/**
 * DescribePartitions response structure.
 * @class
 */
class DescribePartitionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition list
         * @type {Array.<PartitionInfo> || null}
         */
        this.Partitions = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new PartitionInfo();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigMachineGroups response structure.
 * @class
 */
class DescribeConfigMachineGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of machine groups bound to the collection rule configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<MachineGroupInfo> || null}
         */
        this.MachineGroups = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MachineGroups) {
            this.MachineGroups = new Array();
            for (let z in params.MachineGroups) {
                let obj = new MachineGroupInfo();
                obj.deserialize(params.MachineGroups[z]);
                this.MachineGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAlarm request structure.
 * @class
 */
class ModifyAlarmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy ID
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * Alarm policy name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Monitoring task running time point
         * @type {MonitorTime || null}
         */
        this.MonitorTime = null;

        /**
         * Trigger condition
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * Alarm persistence cycle. An alarm will be triggered only after the corresponding trigger condition is met for the number of times specified by `TriggerCount`. Value range: 1–10.
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * Repeated alarm interval in minutes. Value range: 0–1440.
         * @type {number || null}
         */
        this.AlarmPeriod = null;

        /**
         * List of associated alarm notification templates
         * @type {Array.<string> || null}
         */
        this.AlarmNoticeIds = null;

        /**
         * Monitoring object list
         * @type {Array.<AlarmTarget> || null}
         */
        this.AlarmTargets = null;

        /**
         * Whether to enable the alarm policy
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Custom alarm content
         * @type {string || null}
         */
        this.MessageTemplate = null;

        /**
         * Custom callback
         * @type {CallBackInfo || null}
         */
        this.CallBack = null;

        /**
         * Multi-Dimensional analysis
         * @type {Array.<AnalysisDimensional> || null}
         */
        this.Analysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.MonitorTime) {
            let obj = new MonitorTime();
            obj.deserialize(params.MonitorTime)
            this.MonitorTime = obj;
        }
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.AlarmPeriod = 'AlarmPeriod' in params ? params.AlarmPeriod : null;
        this.AlarmNoticeIds = 'AlarmNoticeIds' in params ? params.AlarmNoticeIds : null;

        if (params.AlarmTargets) {
            this.AlarmTargets = new Array();
            for (let z in params.AlarmTargets) {
                let obj = new AlarmTarget();
                obj.deserialize(params.AlarmTargets[z]);
                this.AlarmTargets.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.MessageTemplate = 'MessageTemplate' in params ? params.MessageTemplate : null;

        if (params.CallBack) {
            let obj = new CallBackInfo();
            obj.deserialize(params.CallBack)
            this.CallBack = obj;
        }

        if (params.Analysis) {
            this.Analysis = new Array();
            for (let z in params.Analysis) {
                let obj = new AnalysisDimensional();
                obj.deserialize(params.Analysis[z]);
                this.Analysis.push(obj);
            }
        }

    }
}

/**
 * DescribeTopics response structure.
 * @class
 */
class DescribeTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic list
         * @type {Array.<TopicInfo> || null}
         */
        this.Topics = null;

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

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new TopicInfo();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `LogItem` array
 * @class
 */
class LogItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key-Value pair returned in analysis result
         * @type {Array.<LogItem> || null}
         */
        this.Data = null;

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
                let obj = new LogItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * ModifyAlarmNotice request structure.
 * @class
 */
class ModifyAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification group ID
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * Notification group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notification type. Valid values:
<li> `Trigger`: alarm triggered
<li> `Recovery`: alarm cleared
<li> `All`: alarm triggered and alarm cleared
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Notification recipient
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * API callback information (including WeCom)
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }

    }
}

/**
 * Key-Value index configuration
 * @class
 */
class RuleKeyValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Case sensitivity
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * Key-Value pair information of the index to be created. Up to 100 key-value pairs can be configured.
         * @type {Array.<KeyValueInfo> || null}
         */
        this.KeyValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;

        if (params.KeyValues) {
            this.KeyValues = new Array();
            for (let z in params.KeyValues) {
                let obj = new KeyValueInfo();
                obj.deserialize(params.KeyValues[z]);
                this.KeyValues.push(obj);
            }
        }

    }
}

/**
 * CreateAlarm request structure.
 * @class
 */
class CreateAlarmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Monitoring object list
         * @type {Array.<AlarmTarget> || null}
         */
        this.AlarmTargets = null;

        /**
         * Monitoring task running time point
         * @type {MonitorTime || null}
         */
        this.MonitorTime = null;

        /**
         * Trigger condition
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * Alarm persistence cycle. An alarm will be triggered only after the corresponding trigger condition is met for the number of times specified by `TriggerCount`. Value range: 1–10.
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * Repeated alarm interval in minutes. Value range: 0–1440.
         * @type {number || null}
         */
        this.AlarmPeriod = null;

        /**
         * List of associated alarm notification templates
         * @type {Array.<string> || null}
         */
        this.AlarmNoticeIds = null;

        /**
         * Whether to enable the alarm policy. Default value: true
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Custom alarm content
         * @type {string || null}
         */
        this.MessageTemplate = null;

        /**
         * Custom callback
         * @type {CallBackInfo || null}
         */
        this.CallBack = null;

        /**
         * Multi-Dimensional analysis
         * @type {Array.<AnalysisDimensional> || null}
         */
        this.Analysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AlarmTargets) {
            this.AlarmTargets = new Array();
            for (let z in params.AlarmTargets) {
                let obj = new AlarmTarget();
                obj.deserialize(params.AlarmTargets[z]);
                this.AlarmTargets.push(obj);
            }
        }

        if (params.MonitorTime) {
            let obj = new MonitorTime();
            obj.deserialize(params.MonitorTime)
            this.MonitorTime = obj;
        }
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.AlarmPeriod = 'AlarmPeriod' in params ? params.AlarmPeriod : null;
        this.AlarmNoticeIds = 'AlarmNoticeIds' in params ? params.AlarmNoticeIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MessageTemplate = 'MessageTemplate' in params ? params.MessageTemplate : null;

        if (params.CallBack) {
            let obj = new CallBackInfo();
            obj.deserialize(params.CallBack)
            this.CallBack = obj;
        }

        if (params.Analysis) {
            this.Analysis = new Array();
            for (let z in params.Analysis) {
                let obj = new AnalysisDimensional();
                obj.deserialize(params.Analysis[z]);
                this.Analysis.push(obj);
            }
        }

    }
}

/**
 * DeleteExport response structure.
 * @class
 */
class DeleteExportResponse extends  AbstractModel {
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
 * Log topic partition information
 * @class
 */
class PartitionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition ID
         * @type {number || null}
         */
        this.PartitionId = null;

        /**
         * Partition status. Valid values: `readwrite`, `readonly`
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Partition hash start key
         * @type {string || null}
         */
        this.InclusiveBeginKey = null;

        /**
         * Partition hash end key
         * @type {string || null}
         */
        this.ExclusiveEndKey = null;

        /**
         * Partition creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified of read-only partition
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastWriteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InclusiveBeginKey = 'InclusiveBeginKey' in params ? params.InclusiveBeginKey : null;
        this.ExclusiveEndKey = 'ExclusiveEndKey' in params ? params.ExclusiveEndKey : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastWriteTime = 'LastWriteTime' in params ? params.LastWriteTime : null;

    }
}

/**
 * DescribeShippers request structure.
 * @class
 */
class DescribeShippersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> shipperName

Filter by **shipping rule name**.
Type: String

Required: no

<br><li> shipperId

Filter by **shipping rule ID**.
Type: String

Required: no

<br><li> topicId

Filter by **log topic**.

Type: String

Required: no

Each request can contain up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100
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
 * Blocklist path information
 * @class
 */
class ExcludePathInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type. Valid values: `File`, `Path`
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Specific content corresponding to `Type`
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
 * Filter rule for shipped log
 * @class
 */
class FilterRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter rule key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Filter rule
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * Filter rule value
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
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * RetryShipperTask response structure.
 * @class
 */
class RetryShipperTaskResponse extends  AbstractModel {
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
 * SplitPartition request structure.
 * @class
 */
class SplitPartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * ID of the partition to be split
         * @type {number || null}
         */
        this.PartitionId = null;

        /**
         * Partition split hash key position, which is meaningful only if `Number=2` is set
         * @type {string || null}
         */
        this.SplitKey = null;

        /**
         * Number of partitions to split into, which is optional. Default value: 2
         * @type {number || null}
         */
        this.Number = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;
        this.SplitKey = 'SplitKey' in params ? params.SplitKey : null;
        this.Number = 'Number' in params ? params.Number : null;

    }
}

/**
 * Machine group information
 * @class
 */
class MachineGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Machine group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Machine group type
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * List of tags bound to machine group
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether to enable automatic update for the machine group
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AutoUpdate = null;

        /**
         * Update start time. We recommend you update LogListener during off-peak hours.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * Update end time. We recommend you update LogListener during off-peak hours.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * Whether to enable the service log to record the logs generated by the LogListener service itself. After it is enabled, the internal logset `cls_service_logging` and the `loglistener_status`, `loglistener_alarm`, and `loglistener_business` log topics will be created, which will not incur fees.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;

    }
}

/**
 * DescribeLogHistogram response structure.
 * @class
 */
class DescribeLogHistogramResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistical period in milliseconds
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * The number of logs that hit the keywords
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Statistical result details within the period
         * @type {Array.<HistogramInfo> || null}
         */
        this.HistogramInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.HistogramInfos) {
            this.HistogramInfos = new Array();
            for (let z in params.HistogramInfos) {
                let obj = new HistogramInfo();
                obj.deserialize(params.HistogramInfos[z]);
                this.HistogramInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseKafkaConsumer response structure.
 * @class
 */
class CloseKafkaConsumerResponse extends  AbstractModel {
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
 * Metafield index configuration
 * @class
 */
class RuleTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Case sensitivity
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * Field information in the metafield index configuration
         * @type {Array.<KeyValueInfo> || null}
         */
        this.KeyValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;

        if (params.KeyValues) {
            this.KeyValues = new Array();
            for (let z in params.KeyValues) {
                let obj = new KeyValueInfo();
                obj.deserialize(params.KeyValues[z]);
                this.KeyValues.push(obj);
            }
        }

    }
}

/**
 * CreateIndex request structure.
 * @class
 */
class CreateIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Index rule
         * @type {RuleInfo || null}
         */
        this.Rule = null;

        /**
         * Whether to take effect. Default value: true
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Internal field marker of full-text index. Default value: `false`. Valid value: `false`: excluding internal fields; `true`: including internal fields
         * @type {boolean || null}
         */
        this.IncludeInternalFields = null;

        /**
         * Metadata flag. Default value: `0`. Valid value: `0`: full-text index (including the metadata field with key-value index enabled); `1`: full-text index (including all metadata fields); `2`: full-text index (excluding metadata fields).
         * @type {number || null}
         */
        this.MetadataFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

        if (params.Rule) {
            let obj = new RuleInfo();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.IncludeInternalFields = 'IncludeInternalFields' in params ? params.IncludeInternalFields : null;
        this.MetadataFlag = 'MetadataFlag' in params ? params.MetadataFlag : null;

    }
}

/**
 * DeleteConsumer response structure.
 * @class
 */
class DeleteConsumerResponse extends  AbstractModel {
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
 * DescribeTopics request structure.
 * @class
 */
class DescribeTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> `topicName` filters by **log topic name**. Type: String. Required: No<br><li> `logsetName` filters by **logset name**. Type: String. Required: No<br><li> `topicId` filters by **log topic ID**. Type: String. Required: No<br><li> `logsetId` filters by **logset ID**. You can call the `DescribeLogsets` API to query the list of created logsets or log in to the console to view them. You can also call the `CreateLogset` API to create a logset. Type: String. Required: No<br><li> `tagKey` filters by **tag key**. Type: String. Required: No<br><li> `tag:tagKey` filters by **tag key-value pair**. The tagKey should be replaced with a specified tag key, such as “tag:exampleKey”. Type: String. Required: No<br><li> `storageType` filters by **log topic storage type**. Valid values: `hot` (STANDARD storage); `cold`: (IA storage). Type: String. Required: No. Each request can contain up to 10 `Filters` and 100 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
 * GetAlarmLog response structure.
 * @class
 */
class GetAlarmLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `Context` for loading subsequent content
         * @type {string || null}
         */
        this.Context = null;

        /**
         * Whether all log query results are returned
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * Whether the return is the analysis result
         * @type {boolean || null}
         */
        this.Analysis = null;

        /**
         * If `Analysis` is `true`, column name of the analysis result will be returned; otherwise, empty content will be returned.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ColNames = null;

        /**
         * Log query result. If `Analysis` is `True`, `null` may be returned
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<LogInfo> || null}
         */
        this.Results = null;

        /**
         * Log analysis result. If `Analysis` is `False`, `null` may be returned
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<LogItems> || null}
         */
        this.AnalysisResults = null;

        /**
         * New log analysis result, which will be valid if `UseNewAnalysis` is `true`
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AnalysisRecords = null;

        /**
         * Column attribute of log analysis, which will be valid if `UseNewAnalysis` is `true`
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Column> || null}
         */
        this.Columns = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.Analysis = 'Analysis' in params ? params.Analysis : null;
        this.ColNames = 'ColNames' in params ? params.ColNames : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new LogInfo();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }

        if (params.AnalysisResults) {
            this.AnalysisResults = new Array();
            for (let z in params.AnalysisResults) {
                let obj = new LogItems();
                obj.deserialize(params.AnalysisResults[z]);
                this.AnalysisResults.push(obj);
            }
        }
        this.AnalysisRecords = 'AnalysisRecords' in params ? params.AnalysisRecords : null;

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new Column();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTopic request structure.
 * @class
 */
class CreateTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Number of log topic partitions. Default value: 1. Maximum value: 10
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * Tag description list. This parameter is used to bind a tag to a log topic. Up to 10 tag key-value pairs are supported, and a resource can be bound to only one tag key.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether to enable automatic split. Default value: true
         * @type {boolean || null}
         */
        this.AutoSplit = null;

        /**
         * Maximum number of partitions to split into for this topic if automatic split is enabled. Default value: 50
         * @type {number || null}
         */
        this.MaxSplitPartitions = null;

        /**
         * Log topic storage type. Valid values: `hot` (STANDARD storage); `cold` (IA storage). Default value: `hot`.
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * Lifecycle in days. Value range: 1-3600 (3640 indicates permanent retention)
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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoSplit = 'AutoSplit' in params ? params.AutoSplit : null;
        this.MaxSplitPartitions = 'MaxSplitPartitions' in params ? params.MaxSplitPartitions : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * DescribeExports request structure.
 * @class
 */
class DescribeExportsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Monitoring object
 * @class
 */
class AlarmTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Query statement
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Monitoring object number, which is incremental from 1.
         * @type {number || null}
         */
        this.Number = null;

        /**
         * Offset of the query start time from the alarm execution time in minutes. The value cannot be positive. Value range: -1440–0.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * Offset of the query end time from the alarm execution time in minutes. The value cannot be positive and must be greater than `StartTimeOffset`. Value range: -1440–0.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * OpenKafkaConsumer request structure.
 * @class
 */
class OpenKafkaConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `TopicId` created by the CLS console
         * @type {string || null}
         */
        this.FromTopicId = null;

        /**
         * Compression mode. Valid values: `0` (no compression); `2` (snappy); `3` (LZ4)
         * @type {number || null}
         */
        this.Compression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromTopicId = 'FromTopicId' in params ? params.FromTopicId : null;
        this.Compression = 'Compression' in params ? params.Compression : null;

    }
}

/**
 * DeleteConfig response structure.
 * @class
 */
class DeleteConfigResponse extends  AbstractModel {
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
 * ModifyIndex response structure.
 * @class
 */
class ModifyIndexResponse extends  AbstractModel {
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
 * DeleteConsumer request structure.
 * @class
 */
class DeleteConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID bound to the task
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DeleteIndex request structure.
 * @class
 */
class DeleteIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeConsumer response structure.
 * @class
 */
class DescribeConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the shipping task is effective
         * @type {boolean || null}
         */
        this.Effective = null;

        /**
         * Whether log metadata is shipped
         * @type {boolean || null}
         */
        this.NeedContent = null;

        /**
         * Metadata shipped if `NeedContent` is `true`
Note: This field may return `null`, indicating that no valid value was found.
         * @type {ConsumerContent || null}
         */
        this.Content = null;

        /**
         * CKafka information
         * @type {Ckafka || null}
         */
        this.Ckafka = null;

        /**
         * Compression mode. Valid values: `0` (no compression), `2` (snappy), `3` (LZ4).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Compression = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Effective = 'Effective' in params ? params.Effective : null;
        this.NeedContent = 'NeedContent' in params ? params.NeedContent : null;

        if (params.Content) {
            let obj = new ConsumerContent();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

        if (params.Ckafka) {
            let obj = new Ckafka();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }
        this.Compression = 'Compression' in params ? params.Compression : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadLog request structure.
 * @class
 */
class UploadLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic partition where data will be written into by `HashKey` 
         * @type {string || null}
         */
        this.HashKey = null;

        /**
         * Compression type
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.HashKey = 'HashKey' in params ? params.HashKey : null;
        this.CompressType = 'CompressType' in params ? params.CompressType : null;

    }
}

/**
 * ModifyConsumer response structure.
 * @class
 */
class ModifyConsumerResponse extends  AbstractModel {
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
 * DescribeConfigs request structure.
 * @class
 */
class DescribeConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> configName

Filter by fuzzy match of **collection configuration name**
Type: String

Required: no

<br><li> configId

Filter by **collection configuration ID**.
Type: String

Required: no

<br><li> topicId

Filter by **log topic**.

Type: String

Required: no

Each request can contain up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100
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
 * Logset information
 * @class
 */
class LogsetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Logset name
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Tag bound to logset
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Number of log topics in logset
         * @type {number || null}
         */
        this.TopicCount = null;

        /**
         * If `AssumerUin` is not empty, it indicates the service provider who creates the logset
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TopicCount = 'TopicCount' in params ? params.TopicCount : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * DeleteConfig request structure.
 * @class
 */
class DeleteConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection rule configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * Multi-Dimensional analysis dimension
 * @class
 */
class AnalysisDimensional extends  AbstractModel {
    constructor(){
        super();

        /**
         * Analysis name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Type of data being analyzed. Valid values: `query`; `field`; `original`
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Analysis content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Configuration
         * @type {Array.<AlarmAnalysisConfig> || null}
         */
        this.ConfigInfo = null;

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
        this.Content = 'Content' in params ? params.Content : null;

        if (params.ConfigInfo) {
            this.ConfigInfo = new Array();
            for (let z in params.ConfigInfo) {
                let obj = new AlarmAnalysisConfig();
                obj.deserialize(params.ConfigInfo[z]);
                this.ConfigInfo.push(obj);
            }
        }

    }
}

/**
 * CloseKafkaConsumer request structure.
 * @class
 */
class CloseKafkaConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLS topic identifier
         * @type {string || null}
         */
        this.FromTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromTopicId = 'FromTopicId' in params ? params.FromTopicId : null;

    }
}

/**
 * CreateExport request structure.
 * @class
 */
class CreateExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Number of logs to be exported. Maximum value: 50 million
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Search statements for log export. <a href="https://intl.cloud.tencent.com/document/product/614/44061?from_cn_redirect=1" target="_blank">[SQL statements]</a> are not supported.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Start time of the log to be exported, which is a timestamp in milliseconds
         * @type {number || null}
         */
        this.From = null;

        /**
         * End time of the log to be exported, which is a timestamp in milliseconds
         * @type {number || null}
         */
        this.To = null;

        /**
         * Exported log sorting order by time. Valid values: `asc`: ascending; `desc`: descending. Default value: `desc`
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Exported log data format. Valid values: `json`, `csv`. Default value: `json`
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * DescribeAlarmNotices response structure.
 * @class
 */
class DescribeAlarmNoticesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm notification template list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AlarmNotice> || null}
         */
        this.AlarmNotices = null;

        /**
         * Total number of eligible alarm notification templates
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

        if (params.AlarmNotices) {
            this.AlarmNotices = new Array();
            for (let z in params.AlarmNotices) {
                let obj = new AlarmNotice();
                obj.deserialize(params.AlarmNotices[z]);
                this.AlarmNotices.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyConfig request structure.
 * @class
 */
class ModifyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection rule configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Collection rule configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Log collection path containing the filename
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Type of the log to be collected. Valid values: `json_log`: log in JSON format; `delimiter_log`: log in delimited format; `minimalist_log`: minimalist log; `multiline_log`: log in multi-line format; `fullregex_log`: log in full regex format. Default value: `minimalist_log`
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Extraction rule. If `ExtractRule` is set, `LogType` must be set.
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * Collection path blocklist
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * Log topic (TopicId) associated with collection configuration
         * @type {string || null}
         */
        this.Output = null;

        /**
         * Custom parsing string, which is a serialized JSON string
         * @type {string || null}
         */
        this.UserDefineRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.Output = 'Output' in params ? params.Output : null;
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;

    }
}

/**
 * DescribeLogsets response structure.
 * @class
 */
class DescribeLogsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of pages
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Logset list
         * @type {Array.<LogsetInfo> || null}
         */
        this.Logsets = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Logsets) {
            this.Logsets = new Array();
            for (let z in params.Logsets) {
                let obj = new LogsetInfo();
                obj.deserialize(params.Logsets[z]);
                this.Logsets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * JSON type description
 * @class
 */
class JsonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enablement flag
         * @type {boolean || null}
         */
        this.EnableTag = null;

        /**
         * List of metadata. Supported metadata types: __SOURCE__, __FILENAME__, __TIMESTAMP__, __HOSTNAME__.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.MetaFields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableTag = 'EnableTag' in params ? params.EnableTag : null;
        this.MetaFields = 'MetaFields' in params ? params.MetaFields : null;

    }
}

/**
 * CreateShipper request structure.
 * @class
 */
class CreateShipperRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the log topic to which the shipping rule to be created belongs
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Destination bucket in the shipping rule to be created
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Prefix of the shipping directory in the shipping rule to be created
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * Shipping rule name
         * @type {string || null}
         */
        this.ShipperName = null;

        /**
         * Interval between shipping tasks (in sec). Default value: 300. Value range: 300-900
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Maximum size of a file to be shipped, in MB. Default value: 256. Value range: 100-256
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Filter rules for shipped logs. Only logs matching the rules can be shipped. All rules are in the AND relationship, and up to five rules can be added. If the array is empty, no filtering will be performed, and all logs will be shipped.
         * @type {Array.<FilterRuleInfo> || null}
         */
        this.FilterRules = null;

        /**
         * Rules for partitioning logs to be shipped. `strftime` can be used to define the presentation of time format.
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * Compression configuration of shipped log
         * @type {CompressInfo || null}
         */
        this.Compress = null;

        /**
         * Format configuration of shipped log content
         * @type {ContentInfo || null}
         */
        this.Content = null;

        /**
         * Naming a shipping file. Valid values: `0` (by random number); `1` (by shipping time). Default value: `0`.
         * @type {number || null}
         */
        this.FilenameMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.ShipperName = 'ShipperName' in params ? params.ShipperName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new FilterRuleInfo();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.Compress) {
            let obj = new CompressInfo();
            obj.deserialize(params.Compress)
            this.Compress = obj;
        }

        if (params.Content) {
            let obj = new ContentInfo();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.FilenameMode = 'FilenameMode' in params ? params.FilenameMode : null;

    }
}

/**
 * CreateTopic response structure.
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAlarm response structure.
 * @class
 */
class DeleteAlarmResponse extends  AbstractModel {
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
 * Callback address
 * @class
 */
class WebCallback extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback address
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Callback type. Valid values:
<li> WeCom
<li> Http
         * @type {string || null}
         */
        this.CallbackType = null;

        /**
         * Callback method. Valid values:
<li> POST
<li> PUT
Default value: `POST`. This parameter is required if `CallbackType` is `Http`.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Request header
Note: This parameter is disused. To specify request headers, see `CallBack` in <a href="https://intl.cloud.tencent.com/document/product/614/56466?from_cn_redirect=1">CreateAlarmNotice</a>.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.Headers = null;

        /**
         * Request content
Note: This parameter is disused. To specify request content, see `CallBack` in <a href="https://intl.cloud.tencent.com/document/product/614/56466?from_cn_redirect=1">CreateAlarmNotice</a>.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Body = null;

        /**
         * Number
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.CallbackType = 'CallbackType' in params ? params.CallbackType : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Headers = 'Headers' in params ? params.Headers : null;
        this.Body = 'Body' in params ? params.Body : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * DescribeAlarms response structure.
 * @class
 */
class DescribeAlarmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy list
         * @type {Array.<AlarmInfo> || null}
         */
        this.Alarms = null;

        /**
         * Number of eligible alarm policies
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

        if (params.Alarms) {
            this.Alarms = new Array();
            for (let z in params.Alarms) {
                let obj = new AlarmInfo();
                obj.deserialize(params.Alarms[z]);
                this.Alarms.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAlarmNotice response structure.
 * @class
 */
class CreateAlarmNoticeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm template ID
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTopic response structure.
 * @class
 */
class ModifyTopicResponse extends  AbstractModel {
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
 * CreateConfig request structure.
 * @class
 */
class CreateConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Log topic ID (TopicId) of collection configuration
         * @type {string || null}
         */
        this.Output = null;

        /**
         * Log collection path containing the filename
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Type of the log to be collected. Valid values: `json_log`: log in JSON format; `delimiter_log`: log in delimited format; `minimalist_log`: minimalist log; `multiline_log`: log in multi-line format; `fullregex_log`: log in full regex format. Default value: `minimalist_log`
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Extraction rule. If `ExtractRule` is set, `LogType` must be set.
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * Collection path blocklist
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * Custom collection rule, which is a serialized JSON string
         * @type {string || null}
         */
        this.UserDefineRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Output = 'Output' in params ? params.Output : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;

    }
}

/**
 * CreateShipper response structure.
 * @class
 */
class CreateShipperResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping rule ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIndex response structure.
 * @class
 */
class DeleteIndexResponse extends  AbstractModel {
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
 * Alarm configuration for the multidimensional analysis
 * @class
 */
class AlarmAnalysisConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value
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
 * ModifyIndex request structure.
 * @class
 */
class ModifyIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * It does not take effect by default
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Index rule
         * @type {RuleInfo || null}
         */
        this.Rule = null;

        /**
         * Internal field marker of full-text index. Default value: `false`. Valid value: `false`: excluding internal fields; `true`: including internal fields
         * @type {boolean || null}
         */
        this.IncludeInternalFields = null;

        /**
         * Metadata flag. Default value: `0`. Valid value: `0`: full-text index (including the metadata field with key-value index enabled); `1`: full-text index (including all metadata fields); `2`: full-text index (excluding metadata fields).
         * @type {number || null}
         */
        this.MetadataFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rule) {
            let obj = new RuleInfo();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.IncludeInternalFields = 'IncludeInternalFields' in params ? params.IncludeInternalFields : null;
        this.MetadataFlag = 'MetadataFlag' in params ? params.MetadataFlag : null;

    }
}

/**
 * Column attribute of log analysis
 * @class
 */
class Column extends  AbstractModel {
    constructor(){
        super();

        /**
         * Column name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Column attribute
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Compression configuration of shipped log
 * @class
 */
class CompressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compression format. Valid values: `gzip`; `lzop`; `snappy`; `none` (no compression)
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * Index description information of the field for which key-value index needs to be enabled
 * @class
 */
class ValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field type. Valid values: `long`, `text`, `double`
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Separator of fields. Each character represents a separator;
Supports only English punctuation marks and (\n\t\r);
`long` and `double` fields need to be null;
We recommend you use (@&?|#()='",;:<>[]{}/ \n\t\r\\) as separators for `text` fields;
         * @type {string || null}
         */
        this.Tokenizer = null;

        /**
         * Whether the analysis feature is enabled for the field
         * @type {boolean || null}
         */
        this.SqlFlag = null;

        /**
         * Whether Chinese characters are contained
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ContainZH = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Tokenizer = 'Tokenizer' in params ? params.Tokenizer : null;
        this.SqlFlag = 'SqlFlag' in params ? params.SqlFlag : null;
        this.ContainZH = 'ContainZH' in params ? params.ContainZH : null;

    }
}

/**
 * GetAlarmLog request structure.
 * @class
 */
class GetAlarmLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the log to be queried, which is a Unix timestamp in milliseconds
         * @type {number || null}
         */
        this.From = null;

        /**
         * End time of the log to be queried, which is a Unix timestamp in milliseconds
         * @type {number || null}
         */
        this.To = null;

        /**
         * Query statement. Maximum length: 1024
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Number of logs returned in a single query. Maximum value: 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * This field is used to load more logs. Pass through the last `Context` value returned to get more log content.
         * @type {string || null}
         */
        this.Context = null;

        /**
         * Order of the logs sorted by time returned by the log API. Valid values: `asc`: ascending; `desc`: descending. Default value: `desc`
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * If the value is `true`, the new search method will be used, and the response parameters `AnalysisRecords` and `Columns` will be valid. If the value is `false`, the old search method will be used, and `AnalysisResults` and `ColNames` will be valid.
         * @type {boolean || null}
         */
        this.UseNewAnalysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.UseNewAnalysis = 'UseNewAnalysis' in params ? params.UseNewAnalysis : null;

    }
}

/**
 * DeleteShipper response structure.
 * @class
 */
class DeleteShipperResponse extends  AbstractModel {
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
 * Log export information
 * @class
 */
class ExportInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log export task ID
         * @type {string || null}
         */
        this.ExportId = null;

        /**
         * Log export query statement
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Log export filename
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Log file size
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Log export time sorting
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Log export format
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Number of logs to be exported
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Log download status. Valid values: `Processing`, `Completed`, `Failed`, `Expired` (three-day validity period), and `Queuing`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Log export start time
         * @type {number || null}
         */
        this.From = null;

        /**
         * Log export end time
         * @type {number || null}
         */
        this.To = null;

        /**
         * Log export path
         * @type {string || null}
         */
        this.CosPath = null;

        /**
         * Log export creation time
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ExportId = 'ExportId' in params ? params.ExportId : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.CosPath = 'CosPath' in params ? params.CosPath : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * Collection rule configuration information
 * @class
 */
class ConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection rule configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Log formatting method
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogFormat = null;

        /**
         * Log collection path
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Type of the log to be collected. Valid values: `json_log`: log in JSON format; `delimiter_log`: log in delimited format; `minimalist_log`: minimalist log; `multiline_log`: log in multi-line format; `fullregex_log`: log in full regex format. Default value: `minimalist_log`
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Extraction rule. If `ExtractRule` is set, `LogType` must be set
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * Collection path blocklist
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * Log topic ID (TopicId) of collection configuration
         * @type {string || null}
         */
        this.Output = null;

        /**
         * Update time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Custom parsing string
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserDefineRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.LogFormat = 'LogFormat' in params ? params.LogFormat : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.Output = 'Output' in params ? params.Output : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;

    }
}

/**
 * DeleteExport request structure.
 * @class
 */
class DeleteExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log export ID
         * @type {string || null}
         */
        this.ExportId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportId = 'ExportId' in params ? params.ExportId : null;

    }
}

/**
 * SplitPartition response structure.
 * @class
 */
class SplitPartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Split result set
         * @type {Array.<PartitionInfo> || null}
         */
        this.Partitions = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new PartitionInfo();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Log context information
 * @class
 */
class LogContextInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log source device
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Collection path
         * @type {string || null}
         */
        this.Filename = null;

        /**
         * Log content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Log package number
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * Log number in log package
         * @type {number || null}
         */
        this.PkgLogId = null;

        /**
         * Log timestamp
         * @type {number || null}
         */
        this.BTime = null;

        /**
         * Source host name of logs
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.HostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Filename = 'Filename' in params ? params.Filename : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;
        this.BTime = 'BTime' in params ? params.BTime : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

    }
}

/**
 * ModifyShipper request structure.
 * @class
 */
class ModifyShipperRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping rule ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * New destination bucket in shipping rule
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * New destination directory prefix in shipping rule
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * Shipping rule status
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Shipping rule name
         * @type {string || null}
         */
        this.ShipperName = null;

        /**
         * Shipping time interval in seconds. Default value: 300. Value range: 300–900
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Maximum size of a file to be shipped, in MB. Default value: 256. Value range: 100–256
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Filter rules for shipped logs. Only logs matching the rules can be shipped. All rules are in the AND relationship, and up to five rules can be added. If the array is empty, no filtering will be performed, and all logs will be shipped.
         * @type {Array.<FilterRuleInfo> || null}
         */
        this.FilterRules = null;

        /**
         * Partition rule of shipped log, which can be represented in `strftime` time format
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * Compression configuration of shipped log
         * @type {CompressInfo || null}
         */
        this.Compress = null;

        /**
         * Format configuration of shipped log content
         * @type {ContentInfo || null}
         */
        this.Content = null;

        /**
         * Naming a shipping file. Valid values: `0` (by random number), `1` (by shipping time). Default value: `0`.
         * @type {number || null}
         */
        this.FilenameMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ShipperName = 'ShipperName' in params ? params.ShipperName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new FilterRuleInfo();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.Compress) {
            let obj = new CompressInfo();
            obj.deserialize(params.Compress)
            this.Compress = obj;
        }

        if (params.Content) {
            let obj = new ContentInfo();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.FilenameMode = 'FilenameMode' in params ? params.FilenameMode : null;

    }
}

/**
 * DescribeLogContext response structure.
 * @class
 */
class DescribeLogContextResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log context information set
         * @type {Array.<LogContextInfo> || null}
         */
        this.LogContextInfos = null;

        /**
         * Whether the previous logs have been returned
         * @type {boolean || null}
         */
        this.PrevOver = null;

        /**
         * Whether the next logs have been returned
         * @type {boolean || null}
         */
        this.NextOver = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LogContextInfos) {
            this.LogContextInfos = new Array();
            for (let z in params.LogContextInfos) {
                let obj = new LogContextInfo();
                obj.deserialize(params.LogContextInfos[z]);
                this.LogContextInfos.push(obj);
            }
        }
        this.PrevOver = 'PrevOver' in params ? params.PrevOver : null;
        this.NextOver = 'NextOver' in params ? params.NextOver : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateConsumer request structure.
 * @class
 */
class CreateConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID to bind
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Whether to ship log metadata. Default value: `true`
         * @type {boolean || null}
         */
        this.NeedContent = null;

        /**
         * Metadata to ship if `NeedContent` is `true`
         * @type {ConsumerContent || null}
         */
        this.Content = null;

        /**
         * CKafka information
         * @type {Ckafka || null}
         */
        this.Ckafka = null;

        /**
         * Compression mode. Valid values: `0` (no compression), `2` (snappy), `3` (LZ4).
         * @type {number || null}
         */
        this.Compression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.NeedContent = 'NeedContent' in params ? params.NeedContent : null;

        if (params.Content) {
            let obj = new ConsumerContent();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

        if (params.Ckafka) {
            let obj = new Ckafka();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }
        this.Compression = 'Compression' in params ? params.Compression : null;

    }
}

/**
 * Alarm notification template type
 * @class
 */
class AlarmNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm notification template name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Alarm template type. Valid values:
<br><li> `Trigger`: alarm triggered
<br><li> `Recovery`: alarm cleared
<br><li> `All`: alarm triggered and alarm cleared
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Information of the recipient in alarm notification template
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * Callback information of alarm notification template
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

        /**
         * Alarm notification template ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * Creation time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last update time
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyConfig response structure.
 * @class
 */
class ModifyConfigResponse extends  AbstractModel {
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
 * ModifyAlarmNotice response structure.
 * @class
 */
class ModifyAlarmNoticeResponse extends  AbstractModel {
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
 * DescribeMachines response structure.
 * @class
 */
class DescribeMachinesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group of machine status information
         * @type {Array.<MachineInfo> || null}
         */
        this.Machines = null;

        /**
         * Whether to enable the automatic update feature for the machine group
         * @type {number || null}
         */
        this.AutoUpdate = null;

        /**
         * Preset start time of automatic update of machine group
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * Preset end time of automatic update of machine group
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * Latest LogListener version available to the current user
         * @type {string || null}
         */
        this.LatestAgentVersion = null;

        /**
         * Whether to enable the service log
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Machines) {
            this.Machines = new Array();
            for (let z in params.Machines) {
                let obj = new MachineInfo();
                obj.deserialize(params.Machines[z]);
                this.Machines.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.LatestAgentVersion = 'LatestAgentVersion' in params ? params.LatestAgentVersion : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Format configuration of shipped log content
 * @class
 */
class ContentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Content format. Valid values: `json`, `csv`
         * @type {string || null}
         */
        this.Format = null;

        /**
         * CSV format content description
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {CsvInfo || null}
         */
        this.Csv = null;

        /**
         * JSON format content description
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {JsonInfo || null}
         */
        this.Json = null;

        /**
         * `Parquet` format description
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {ParquetInfo || null}
         */
        this.Parquet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;

        if (params.Csv) {
            let obj = new CsvInfo();
            obj.deserialize(params.Csv)
            this.Csv = obj;
        }

        if (params.Json) {
            let obj = new JsonInfo();
            obj.deserialize(params.Json)
            this.Json = obj;
        }

        if (params.Parquet) {
            let obj = new ParquetInfo();
            obj.deserialize(params.Parquet)
            this.Parquet = obj;
        }

    }
}

/**
 * ApplyConfigToMachineGroup response structure.
 * @class
 */
class ApplyConfigToMachineGroupResponse extends  AbstractModel {
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
 * DeleteAlarm request structure.
 * @class
 */
class DeleteAlarmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy ID.
         * @type {string || null}
         */
        this.AlarmId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;

    }
}

/**
 * CreateConfig response structure.
 * @class
 */
class CreateConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Machine group type description
 * @class
 */
class MachineGroupTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group type. Valid values: `ip`: the IP addresses of collection machines are stored in `Values` of the machine group; `label`: the tags of the machines are stored in `Values` of the machine group
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Machine description list
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DeleteConfigFromMachineGroup request structure.
 * @class
 */
class DeleteConfigFromMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Collection configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * Shipping rule
 * @class
 */
class ShipperInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping rule ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Bucket address shipped to
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Shipping prefix directory
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * Shipping rule name
         * @type {string || null}
         */
        this.ShipperName = null;

        /**
         * Shipping time interval in seconds
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Maximum size of shipped file in MB
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Whether it takes effect
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Filter rule for shipped log
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<FilterRuleInfo> || null}
         */
        this.FilterRules = null;

        /**
         * Partition rule of shipped log, which can be represented in `strftime` time format
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * Compression configuration of shipped log
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {CompressInfo || null}
         */
        this.Compress = null;

        /**
         * Format configuration of shipped log content
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ContentInfo || null}
         */
        this.Content = null;

        /**
         * Creation time of shipped log
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Shipping file naming configuration. Valid values: `0` (by random number); `1` (by shipping time). Default value: `0`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FilenameMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.ShipperName = 'ShipperName' in params ? params.ShipperName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new FilterRuleInfo();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.Compress) {
            let obj = new CompressInfo();
            obj.deserialize(params.Compress)
            this.Compress = obj;
        }

        if (params.Content) {
            let obj = new ContentInfo();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.FilenameMode = 'FilenameMode' in params ? params.FilenameMode : null;

    }
}

/**
 * Field information of key value or metafield index
 * @class
 */
class KeyValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * When a key value or metafield index needs to be configured for a field, the metafield `Key` does not need to be prefixed with `__TAG__.` and is consistent with the one when logs are uploaded. `__TAG__.` will be prefixed automatically for display in the console.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Field index description information
         * @type {ValueInfo || null}
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
            let obj = new ValueInfo();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * ModifyMachineGroup request structure.
 * @class
 */
class ModifyMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Machine group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Machine group type
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

        /**
         * Tag list
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether to enable automatic update for the machine group
         * @type {boolean || null}
         */
        this.AutoUpdate = null;

        /**
         * Update start time. We recommend you update LogListener during off-peak hours.
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * Update end time. We recommend you update LogListener during off-peak hours.
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * Whether to enable the service log to record the logs generated by the LogListener service itself. After it is enabled, the internal logset `cls_service_logging` and the `loglistener_status`, `loglistener_alarm`, and `loglistener_business` log topics will be created, which will not incur fees.
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;

    }
}

/**
 * DescribeAlarmNotices request structure.
 * @class
 */
class DescribeAlarmNoticesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <li> name
Filter by **notification group name**.
Type: String
Required: No
<li> alarmNoticeId
Filter by **notification group ID**.
Type: String
Required: No
<li> uid
Filter by **recipient ID**.
Type: String
Required: No
<li> groupId
Filter by **recipient ID**.
Type: String
Required: No

Each request can have up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
 * Alarm notification recipient information
 * @class
 */
class NoticeReceiver extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient type. Valid values:
<br><li> `Uin`: user ID
<br><li> `Group`: user group ID
Currently, other recipient types are not supported.
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * Recipient
         * @type {Array.<number> || null}
         */
        this.ReceiverIds = null;

        /**
         * Notification method
<br><li> `Email`: email
<br><li> `Sms`: SMS
<br><li> `WeChat`: WeChat
<br><li> `Phone`: phone
         * @type {Array.<string> || null}
         */
        this.ReceiverChannels = null;

        /**
         * Start time for allowed message receipt
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time for allowed message receipt
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Index
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.ReceiverIds = 'ReceiverIds' in params ? params.ReceiverIds : null;
        this.ReceiverChannels = 'ReceiverChannels' in params ? params.ReceiverChannels : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * Information of the CKafka instance to ship to
 * @class
 */
class Ckafka extends  AbstractModel {
    constructor(){
        super();

        /**
         * CKafka VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * CKafka Vport
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * CKafka instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * CKafka instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * CKafka topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * CKafka topic name
         * @type {string || null}
         */
        this.TopicName = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * CreateExport response structure.
 * @class
 */
class CreateExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log export ID.
         * @type {string || null}
         */
        this.ExportId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportId = 'ExportId' in params ? params.ExportId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAlarmNotice request structure.
 * @class
 */
class DeleteAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification group ID
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;

    }
}

/**
 * DeleteLogset request structure.
 * @class
 */
class DeleteLogsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * Machine status information
 * @class
 */
class MachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Machine status. Valid values: `0`: exceptional; `1`: normal
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Machine disconnection time. If the value is empty, the machine is normal. If the machine is exceptional, a specific value will be returned.
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * Whether to enable automatic update for the machine. Valid values: `0`: no; `1`: yes
         * @type {number || null}
         */
        this.AutoUpdate = null;

        /**
         * Current machine version number
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Machine update feature status
         * @type {number || null}
         */
        this.UpdateStatus = null;

        /**
         * Machine update result flag
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Machine update result information
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.UpdateStatus = 'UpdateStatus' in params ? params.UpdateStatus : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * ModifyLogset response structure.
 * @class
 */
class ModifyLogsetResponse extends  AbstractModel {
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
 * Monitoring task execution time point in alarm policy
 * @class
 */
class MonitorTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values:
<br><li> `Period`: periodic execution
<br><li> `Fixed`: scheduled execution
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Execution interval or scheduled time point in minutes. Value range: 1–1440.
         * @type {number || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * SearchLog request structure.
 * @class
 */
class SearchLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the log topic to be searched
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Start time of the log to be searched, which is a Unix timestamp in milliseconds
         * @type {number || null}
         */
        this.From = null;

        /**
         * End time of the log to be searched, which is a Unix timestamp in milliseconds
         * @type {number || null}
         */
        this.To = null;

        /**
         * Statement for search and analysis. Maximum length: 12 KB
A statement is in the format of <a href="https://intl.cloud.tencent.com/document/product/614/47044?from_cn_redirect=1" target="_blank">[search rule]</a> | <a href="https://intl.cloud.tencent.com/document/product/614/44061?from_cn_redirect=1" target="_blank">[SQL statement]</a>. You can omit the pipe symbol <code> | </code> and SQL statement when log analysis is not required.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * The number of raw logs returned by a single query. Maximum value: 1000. You need to use `Context` to continue to get logs.
Notes:
* This parameter is valid only when the query statement (`Query`) does not contain an SQL statement.
* To limit the number of analysis results, see <a href="https://intl.cloud.tencent.com/document/product/614/58977?from_cn_redirect=1" target="_blank">SQL LIMIT Syntax</a>.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * You can pass through the `Context` value (validity: an hour) returned by the API last time to continue to get logs (up to 10,000 raw logs).
Notes:
* Do not modify any other parameters while passing through the `Context` parameter.
* This parameter is valid only when the query statement (`Query`) does not contain an SQL statement.
* To continue to get analysis results, see <a href="https://intl.cloud.tencent.com/document/product/614/58977?from_cn_redirect=1" target="_blank">SQL LIMIT Syntax</a>.
         * @type {string || null}
         */
        this.Context = null;

        /**
         * Time order of the logs returned. Valid values: `asc` (ascending); `desc`: (descending). Default value: `desc`
Notes:
* This parameter is valid only when the query statement (`Query`) does not contain an SQL statement.
* To sort the analysis results, see <a href="https://intl.cloud.tencent.com/document/product/614/58978?from_cn_redirect=1" target="_blank">SQL ORDER BY Syntax</a>.
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * If the value is `true`, the new response method will be used, and the output parameters `AnalysisRecords` and `Columns` will be valid.
If the value is `false`, the old response method will be used, and the output parameters `AnalysisResults` and `ColNames` will be valid.
The two response methods differ slightly in terms of encoding format. You are advised to use the new method (`true`).
         * @type {boolean || null}
         */
        this.UseNewAnalysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.UseNewAnalysis = 'UseNewAnalysis' in params ? params.UseNewAnalysis : null;

    }
}

/**
 * CreateMachineGroup request structure.
 * @class
 */
class CreateMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group name, which must be unique
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Type of the machine group to be created. Valid values: `ip`: use the IP string list in `Values` to create a machine group; `label`: use the tag string list in `Values` to create a machine group
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

        /**
         * Tag description list. This parameter is used to bind a tag to a machine group. Up to 10 tag key-value pairs are supported, and a resource can be bound to only one tag key.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether to enable automatic update for the machine group
         * @type {boolean || null}
         */
        this.AutoUpdate = null;

        /**
         * Update start time. We recommend you update LogListener during off-peak hours.
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * Update end time. We recommend you update LogListener during off-peak hours.
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * Whether to enable the service log to record the logs generated by the LogListener service itself. After it is enabled, the internal logset `cls_service_logging` and the `loglistener_status`, `loglistener_alarm`, and `loglistener_business` log topics will be created, which will not incur fees
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;

    }
}

/**
 * DescribeExports response structure.
 * @class
 */
class DescribeExportsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of exported logs
         * @type {Array.<ExportInfo> || null}
         */
        this.Exports = null;

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

        if (params.Exports) {
            this.Exports = new Array();
            for (let z in params.Exports) {
                let obj = new ExportInfo();
                obj.deserialize(params.Exports[z]);
                this.Exports.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyConfigToMachineGroup request structure.
 * @class
 */
class ApplyConfigToMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Machine group ID
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
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeMachineGroupConfigs response structure.
 * @class
 */
class DescribeMachineGroupConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection rule configuration list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ConfigInfo> || null}
         */
        this.Configs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new ConfigInfo();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CSV content description
 * @class
 */
class CsvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to print `key` on the first row of the CSV file
         * @type {boolean || null}
         */
        this.PrintKey = null;

        /**
         * Names of keys
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Keys = null;

        /**
         * Field delimiter
         * @type {string || null}
         */
        this.Delimiter = null;

        /**
         * Escape character used to enclose any field delimiter in field content. You can enter only a single quotation mark, double quotation mark, or an empty string.
         * @type {string || null}
         */
        this.EscapeChar = null;

        /**
         * Content used to populate non-existing fields
         * @type {string || null}
         */
        this.NonExistingField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrintKey = 'PrintKey' in params ? params.PrintKey : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Delimiter = 'Delimiter' in params ? params.Delimiter : null;
        this.EscapeChar = 'EscapeChar' in params ? params.EscapeChar : null;
        this.NonExistingField = 'NonExistingField' in params ? params.NonExistingField : null;

    }
}

/**
 * CreateAlarmNotice request structure.
 * @class
 */
class CreateAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notification type. Valid values:
<li> `Trigger`: alarm triggered
<li> `Recovery`: alarm cleared
<li> `All`: alarm triggered and alarm cleared
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Notification recipient
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * API callback information (including WeCom)
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

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

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }

    }
}

/**
 * DescribeIndex response structure.
 * @class
 */
class DescribeIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Whether it takes effect
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Index configuration information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {RuleInfo || null}
         */
        this.Rule = null;

        /**
         * Index modification time. The default value is the index creation time.
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Internal field marker of full-text index. Default value: `false`. Valid value: `false`: excluding internal fields; `true`: including internal fields
Note: This field may return `null`, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.IncludeInternalFields = null;

        /**
         * Metadata flag. Default value: `0`. Valid value: `0`: full-text index (including the metadata field with key-value index enabled); `1`: full-text index (including all metadata fields); `2`: full-text index (excluding metadata fields).
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.MetadataFlag = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rule) {
            let obj = new RuleInfo();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.IncludeInternalFields = 'IncludeInternalFields' in params ? params.IncludeInternalFields : null;
        this.MetadataFlag = 'MetadataFlag' in params ? params.MetadataFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Histogram details
 * @class
 */
class HistogramInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of logs within the statistical period
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Unix timestamp rounded by `period`, in milliseconds
         * @type {number || null}
         */
        this.BTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.BTime = 'BTime' in params ? params.BTime : null;

    }
}

/**
 * DescribeMachineGroupConfigs request structure.
 * @class
 */
class DescribeMachineGroupConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * ModifyLogset request structure.
 * @class
 */
class ModifyLogsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Logset name
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Tag key-value pair bound to logset. Up to 10 tag key-value pairs are supported, and a resource can be bound to only one tag key at any time.
         * @type {Array.<Tag> || null}
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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeMachineGroups response structure.
 * @class
 */
class DescribeMachineGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group information list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<MachineGroupInfo> || null}
         */
        this.MachineGroups = null;

        /**
         * Total number of pages
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

        if (params.MachineGroups) {
            this.MachineGroups = new Array();
            for (let z in params.MachineGroups) {
                let obj = new MachineGroupInfo();
                obj.deserialize(params.MachineGroups[z]);
                this.MachineGroups.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogsets request structure.
 * @class
 */
class DescribeLogsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> logsetName

Filter by **logset name**.
Type: String

Required: no

<br><li> logsetId

Filter by **logset ID**.
Type: String

Required: no

<br><li> tagKey

Filter by **tag key**.

Type: String

Required: no

<br><li> tag:tagKey

Filter by **tag key-value pair**. The `tagKey` should be replaced with a specified tag key.
Type: String

Required: no


Each request can contain up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100
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
 * `Parquet` contents
 * @class
 */
class ParquetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * `ParquetKeyInfo` array
         * @type {Array.<ParquetKeyInfo> || null}
         */
        this.ParquetKeyInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ParquetKeyInfo) {
            this.ParquetKeyInfo = new Array();
            for (let z in params.ParquetKeyInfo) {
                let obj = new ParquetKeyInfo();
                obj.deserialize(params.ParquetKeyInfo[z]);
                this.ParquetKeyInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteTopic response structure.
 * @class
 */
class DeleteTopicResponse extends  AbstractModel {
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
 * Filter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field to be filtered
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value to be filtered
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Shipping content
 * @class
 */
class ConsumerContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to ship tag information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.EnableTag = null;

        /**
         * List of metadata to ship. Supported metadata types: \_\_SOURCE\_\_, \_\_FILENAME\_\_, \_\_TIMESTAMP\_\_, \_\_HOSTNAME\_\_, and \_\_PKGID\_\_.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.MetaFields = null;

        /**
         * This parameter is required if `EnableTag` is `true`, and is used to specify whether the tag information is JSON tiled. Valid values: `true` (not tiled); `false` (tiled)
Note: This field may return `null`, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.TagJsonNotTiled = null;

        /**
         * Shipping timestamp precision in seconds (default) or milliseconds
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimestampAccuracy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableTag = 'EnableTag' in params ? params.EnableTag : null;
        this.MetaFields = 'MetaFields' in params ? params.MetaFields : null;
        this.TagJsonNotTiled = 'TagJsonNotTiled' in params ? params.TagJsonNotTiled : null;
        this.TimestampAccuracy = 'TimestampAccuracy' in params ? params.TimestampAccuracy : null;

    }
}

/**
 * DescribeMachines request structure.
 * @class
 */
class DescribeMachinesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the machine group to be queried
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * Log keys to be filtered and the corresponding regex
 * @class
 */
class KeyRegexInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log key to be filtered
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Filter rule regex corresponding to key
         * @type {string || null}
         */
        this.Regex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Regex = 'Regex' in params ? params.Regex : null;

    }
}

/**
 * MergePartition response structure.
 * @class
 */
class MergePartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Merge result set
         * @type {Array.<PartitionInfo> || null}
         */
        this.Partitions = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new PartitionInfo();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    UploadLogResponse: UploadLogResponse,
    CreateAlarmResponse: CreateAlarmResponse,
    AlarmInfo: AlarmInfo,
    LogInfo: LogInfo,
    DeleteAlarmNoticeResponse: DeleteAlarmNoticeResponse,
    DescribeLogHistogramRequest: DescribeLogHistogramRequest,
    DescribeLogContextRequest: DescribeLogContextRequest,
    DeleteShipperRequest: DeleteShipperRequest,
    ModifyTopicRequest: ModifyTopicRequest,
    DeleteLogsetResponse: DeleteLogsetResponse,
    ParquetKeyInfo: ParquetKeyInfo,
    DescribeShipperTasksResponse: DescribeShipperTasksResponse,
    CreateMachineGroupResponse: CreateMachineGroupResponse,
    DescribeConfigMachineGroupsRequest: DescribeConfigMachineGroupsRequest,
    CreateLogsetRequest: CreateLogsetRequest,
    LogItem: LogItem,
    SearchLogResponse: SearchLogResponse,
    DeleteTopicRequest: DeleteTopicRequest,
    DescribePartitionsRequest: DescribePartitionsRequest,
    ModifyAlarmResponse: ModifyAlarmResponse,
    DescribeShipperTasksRequest: DescribeShipperTasksRequest,
    DescribeAlarmsRequest: DescribeAlarmsRequest,
    MergePartitionRequest: MergePartitionRequest,
    DescribeShippersResponse: DescribeShippersResponse,
    ModifyShipperResponse: ModifyShipperResponse,
    RetryShipperTaskRequest: RetryShipperTaskRequest,
    CallBackInfo: CallBackInfo,
    OpenKafkaConsumerResponse: OpenKafkaConsumerResponse,
    AlarmTargetInfo: AlarmTargetInfo,
    DescribeIndexRequest: DescribeIndexRequest,
    DescribeConfigsResponse: DescribeConfigsResponse,
    CreateLogsetResponse: CreateLogsetResponse,
    DeleteMachineGroupResponse: DeleteMachineGroupResponse,
    Tag: Tag,
    DescribeMachineGroupsRequest: DescribeMachineGroupsRequest,
    ExtractRuleInfo: ExtractRuleInfo,
    TopicInfo: TopicInfo,
    DescribeConsumerRequest: DescribeConsumerRequest,
    ShipperTaskInfo: ShipperTaskInfo,
    ModifyConsumerRequest: ModifyConsumerRequest,
    CreateIndexResponse: CreateIndexResponse,
    DeleteConfigFromMachineGroupResponse: DeleteConfigFromMachineGroupResponse,
    CreateConsumerResponse: CreateConsumerResponse,
    ModifyMachineGroupResponse: ModifyMachineGroupResponse,
    RuleInfo: RuleInfo,
    DeleteMachineGroupRequest: DeleteMachineGroupRequest,
    FullTextInfo: FullTextInfo,
    DescribePartitionsResponse: DescribePartitionsResponse,
    DescribeConfigMachineGroupsResponse: DescribeConfigMachineGroupsResponse,
    ModifyAlarmRequest: ModifyAlarmRequest,
    DescribeTopicsResponse: DescribeTopicsResponse,
    LogItems: LogItems,
    ModifyAlarmNoticeRequest: ModifyAlarmNoticeRequest,
    RuleKeyValueInfo: RuleKeyValueInfo,
    CreateAlarmRequest: CreateAlarmRequest,
    DeleteExportResponse: DeleteExportResponse,
    PartitionInfo: PartitionInfo,
    DescribeShippersRequest: DescribeShippersRequest,
    ExcludePathInfo: ExcludePathInfo,
    FilterRuleInfo: FilterRuleInfo,
    RetryShipperTaskResponse: RetryShipperTaskResponse,
    SplitPartitionRequest: SplitPartitionRequest,
    MachineGroupInfo: MachineGroupInfo,
    DescribeLogHistogramResponse: DescribeLogHistogramResponse,
    CloseKafkaConsumerResponse: CloseKafkaConsumerResponse,
    RuleTagInfo: RuleTagInfo,
    CreateIndexRequest: CreateIndexRequest,
    DeleteConsumerResponse: DeleteConsumerResponse,
    DescribeTopicsRequest: DescribeTopicsRequest,
    GetAlarmLogResponse: GetAlarmLogResponse,
    CreateTopicRequest: CreateTopicRequest,
    DescribeExportsRequest: DescribeExportsRequest,
    AlarmTarget: AlarmTarget,
    OpenKafkaConsumerRequest: OpenKafkaConsumerRequest,
    DeleteConfigResponse: DeleteConfigResponse,
    ModifyIndexResponse: ModifyIndexResponse,
    DeleteConsumerRequest: DeleteConsumerRequest,
    DeleteIndexRequest: DeleteIndexRequest,
    DescribeConsumerResponse: DescribeConsumerResponse,
    UploadLogRequest: UploadLogRequest,
    ModifyConsumerResponse: ModifyConsumerResponse,
    DescribeConfigsRequest: DescribeConfigsRequest,
    LogsetInfo: LogsetInfo,
    DeleteConfigRequest: DeleteConfigRequest,
    AnalysisDimensional: AnalysisDimensional,
    CloseKafkaConsumerRequest: CloseKafkaConsumerRequest,
    CreateExportRequest: CreateExportRequest,
    DescribeAlarmNoticesResponse: DescribeAlarmNoticesResponse,
    ModifyConfigRequest: ModifyConfigRequest,
    DescribeLogsetsResponse: DescribeLogsetsResponse,
    JsonInfo: JsonInfo,
    CreateShipperRequest: CreateShipperRequest,
    CreateTopicResponse: CreateTopicResponse,
    DeleteAlarmResponse: DeleteAlarmResponse,
    WebCallback: WebCallback,
    DescribeAlarmsResponse: DescribeAlarmsResponse,
    CreateAlarmNoticeResponse: CreateAlarmNoticeResponse,
    ModifyTopicResponse: ModifyTopicResponse,
    CreateConfigRequest: CreateConfigRequest,
    CreateShipperResponse: CreateShipperResponse,
    DeleteIndexResponse: DeleteIndexResponse,
    AlarmAnalysisConfig: AlarmAnalysisConfig,
    ModifyIndexRequest: ModifyIndexRequest,
    Column: Column,
    CompressInfo: CompressInfo,
    ValueInfo: ValueInfo,
    GetAlarmLogRequest: GetAlarmLogRequest,
    DeleteShipperResponse: DeleteShipperResponse,
    ExportInfo: ExportInfo,
    ConfigInfo: ConfigInfo,
    DeleteExportRequest: DeleteExportRequest,
    SplitPartitionResponse: SplitPartitionResponse,
    LogContextInfo: LogContextInfo,
    ModifyShipperRequest: ModifyShipperRequest,
    DescribeLogContextResponse: DescribeLogContextResponse,
    CreateConsumerRequest: CreateConsumerRequest,
    AlarmNotice: AlarmNotice,
    ModifyConfigResponse: ModifyConfigResponse,
    ModifyAlarmNoticeResponse: ModifyAlarmNoticeResponse,
    DescribeMachinesResponse: DescribeMachinesResponse,
    ContentInfo: ContentInfo,
    ApplyConfigToMachineGroupResponse: ApplyConfigToMachineGroupResponse,
    DeleteAlarmRequest: DeleteAlarmRequest,
    CreateConfigResponse: CreateConfigResponse,
    MachineGroupTypeInfo: MachineGroupTypeInfo,
    DeleteConfigFromMachineGroupRequest: DeleteConfigFromMachineGroupRequest,
    ShipperInfo: ShipperInfo,
    KeyValueInfo: KeyValueInfo,
    ModifyMachineGroupRequest: ModifyMachineGroupRequest,
    DescribeAlarmNoticesRequest: DescribeAlarmNoticesRequest,
    NoticeReceiver: NoticeReceiver,
    Ckafka: Ckafka,
    CreateExportResponse: CreateExportResponse,
    DeleteAlarmNoticeRequest: DeleteAlarmNoticeRequest,
    DeleteLogsetRequest: DeleteLogsetRequest,
    MachineInfo: MachineInfo,
    ModifyLogsetResponse: ModifyLogsetResponse,
    MonitorTime: MonitorTime,
    SearchLogRequest: SearchLogRequest,
    CreateMachineGroupRequest: CreateMachineGroupRequest,
    DescribeExportsResponse: DescribeExportsResponse,
    ApplyConfigToMachineGroupRequest: ApplyConfigToMachineGroupRequest,
    DescribeMachineGroupConfigsResponse: DescribeMachineGroupConfigsResponse,
    CsvInfo: CsvInfo,
    CreateAlarmNoticeRequest: CreateAlarmNoticeRequest,
    DescribeIndexResponse: DescribeIndexResponse,
    HistogramInfo: HistogramInfo,
    DescribeMachineGroupConfigsRequest: DescribeMachineGroupConfigsRequest,
    ModifyLogsetRequest: ModifyLogsetRequest,
    DescribeMachineGroupsResponse: DescribeMachineGroupsResponse,
    DescribeLogsetsRequest: DescribeLogsetsRequest,
    ParquetInfo: ParquetInfo,
    DeleteTopicResponse: DeleteTopicResponse,
    Filter: Filter,
    ConsumerContent: ConsumerContent,
    DescribeMachinesRequest: DescribeMachinesRequest,
    KeyRegexInfo: KeyRegexInfo,
    MergePartitionResponse: MergePartitionResponse,

}
