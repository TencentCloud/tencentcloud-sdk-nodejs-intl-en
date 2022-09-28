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
         * MD5 value of SOL template
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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
    DescribeRedisTopKeyPrefixListRequest: DescribeRedisTopKeyPrefixListRequest,
    DescribeSlowLogUserHostStatsRequest: DescribeSlowLogUserHostStatsRequest,
    DescribeTopSpaceSchemasResponse: DescribeTopSpaceSchemasResponse,
    CreateProxySessionKillTaskResponse: CreateProxySessionKillTaskResponse,
    MySqlProcess: MySqlProcess,
    DescribeRedisTopKeyPrefixListResponse: DescribeRedisTopKeyPrefixListResponse,
    SchemaSpaceData: SchemaSpaceData,
    InstanceConfs: InstanceConfs,
    DescribeDiagDBInstancesRequest: DescribeDiagDBInstancesRequest,
    DescribeUserSqlAdviceResponse: DescribeUserSqlAdviceResponse,
    InstanceInfo: InstanceInfo,
    DescribeSlowLogUserHostStatsResponse: DescribeSlowLogUserHostStatsResponse,
    DescribeDBDiagEventsRequest: DescribeDBDiagEventsRequest,
    DiagHistoryEventItem: DiagHistoryEventItem,
    SlowLogHost: SlowLogHost,
    RedisPreKeySpaceData: RedisPreKeySpaceData,
    DescribeDBDiagEventsResponse: DescribeDBDiagEventsResponse,
    DescribeTopSpaceSchemasRequest: DescribeTopSpaceSchemasRequest,
    DescribeProxySessionKillTasksRequest: DescribeProxySessionKillTasksRequest,
    DescribeMySqlProcessListResponse: DescribeMySqlProcessListResponse,
    DescribeDiagDBInstancesResponse: DescribeDiagDBInstancesResponse,
    DescribeUserSqlAdviceRequest: DescribeUserSqlAdviceRequest,
    CreateProxySessionKillTaskRequest: CreateProxySessionKillTaskRequest,
    DescribeMySqlProcessListRequest: DescribeMySqlProcessListRequest,
    TaskInfo: TaskInfo,
    DescribeProxySessionKillTasksResponse: DescribeProxySessionKillTasksResponse,

}
