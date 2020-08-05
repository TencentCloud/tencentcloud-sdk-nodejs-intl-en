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
         * Query period in days. The end date is the current date and the query period is 7 days by default.
         * @type {number || null}
         */
        this.RangeDays = null;

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
         * Number of slow logs in specified time range.
         * @type {Array.<TimeSlice> || null}
         */
        this.TimeSeries = null;

        /**
         * Instance CPU utilization monitoring data in specified time range.
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
 * Slow log statistics in specified time range
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
Note: this field may return null, indicating that no valid values can be obtained.
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
Note: this field may return null, indicating that no valid values can be obtained.
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
 * Time series of database table space data
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
         * Monitoring metric data in a unit of time interval.
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
         * Number of returned top tables. Default value: 20. Maximum value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Field used to sort top tables. Valid values: DataLength, IndexLength, TotalLength, DataFree, FragRatio, TableRows, PhysicalFileSize. Default value: PhysicalFileSize.
         * @type {string || null}
         */
        this.SortBy = null;

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
         * Start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * Event details.
         * @type {string || null}
         */
        this.Explanation = null;

        /**
         * Summary.
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * Problem found.
         * @type {string || null}
         */
        this.Problem = null;

        /**
         * Severity, which can be divided into 5 levels: 1: fatal, 2: severe, 3: warning, 4: notice, 5: healthy.
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Suggestion.
         * @type {string || null}
         */
        this.Suggestions = null;

        /**
         * Reserved field.
Note: this field may return null, indicating that no valid values can be obtained.
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
         * End time, such as "2019-09-11 12:13:14".
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * Number of returned top tables. Default value: 20. Maximum value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Field used to sort top tables. Valid values: DataLength, IndexLength, TotalLength, DataFree, FragRatio, TableRows, PhysicalFileSize. Default value: PhysicalFileSize.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Start date. It can be as early as 6 days before the current date, and defaults to 6 days before the end date.
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * End date. It can be as early as 6 days before the current date, and defaults to the current date.
         * @type {string || null}
         */
        this.EndDate = null;

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

    }
}

/**
 * Monitoring metric data in specified time range
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
         * Event ID.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Severity, which can be divided into 5 levels: 1: fatal, 2: severe, 3: warning, 4: notice, 5: healthy.
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * Summary.
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * Diagnosis item.
         * @type {string || null}
         */
        this.DiagItem = null;

        /**
         * Instance ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Reserved field
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Region
Note: this field may return null, indicating that no valid values can be obtained.
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
 * Top slow SQL statements
 * @class
 */
class SlowLogTopSqlItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total SQL lock wait time
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * Maximum lock wait time
         * @type {number || null}
         */
        this.LockTimeMax = null;

        /**
         * Minimum lock wait time
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
         * Total duration
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * Maximum execution time
         * @type {number || null}
         */
        this.QueryTimeMax = null;

        /**
         * Minimum execution time
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
         * SQL with parameter (random)
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * Schema
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * Ratio of total duration
         * @type {number || null}
         */
        this.QueryTimeRatio = null;

        /**
         * Ratio of total SQL lock wait time
         * @type {number || null}
         */
        this.LockTimeRatio = null;

        /**
         * Ratio of total number of scanned rows
         * @type {number || null}
         */
        this.RowsExaminedRatio = null;

        /**
         * Ratio of total number of returned rows
         * @type {number || null}
         */
        this.RowsSentRatio = null;

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
         * Sorting key. Valid values: QueryTime, ExecTimes, RowsSent, LockTime, RowsExamined.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Sorting order. Valid values: ASC (ascending), DESC (descending).
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Database table space statistics.
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
         * Fragmented rate (%).
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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeTopSpaceTableTimeSeriesResponse: DescribeTopSpaceTableTimeSeriesResponse,
    DescribeDBDiagHistoryResponse: DescribeDBDiagHistoryResponse,
    DescribeDBSpaceStatusRequest: DescribeDBSpaceStatusRequest,
    DescribeSlowLogTimeSeriesStatsResponse: DescribeSlowLogTimeSeriesStatsResponse,
    TimeSlice: TimeSlice,
    MonitorFloatMetric: MonitorFloatMetric,
    MonitorMetric: MonitorMetric,
    TableSpaceTimeSeries: TableSpaceTimeSeries,
    DescribeTopSpaceTablesRequest: DescribeTopSpaceTablesRequest,
    DescribeSlowLogTimeSeriesStatsRequest: DescribeSlowLogTimeSeriesStatsRequest,
    DescribeDBDiagEventRequest: DescribeDBDiagEventRequest,
    DescribeDBSpaceStatusResponse: DescribeDBSpaceStatusResponse,
    DescribeDBDiagEventResponse: DescribeDBDiagEventResponse,
    DescribeDBDiagHistoryRequest: DescribeDBDiagHistoryRequest,
    DescribeTopSpaceTableTimeSeriesRequest: DescribeTopSpaceTableTimeSeriesRequest,
    MonitorMetricSeriesData: MonitorMetricSeriesData,
    DiagHistoryEventItem: DiagHistoryEventItem,
    SlowLogTopSqlItem: SlowLogTopSqlItem,
    MonitorFloatMetricSeriesData: MonitorFloatMetricSeriesData,
    DescribeSlowLogTopSqlsRequest: DescribeSlowLogTopSqlsRequest,
    TableSpaceData: TableSpaceData,
    DescribeSlowLogTopSqlsResponse: DescribeSlowLogTopSqlsResponse,
    DescribeTopSpaceTablesResponse: DescribeTopSpaceTablesResponse,

}
