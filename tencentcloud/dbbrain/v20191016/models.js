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
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TencentDB for CynosDB (compatible with MySQL)). Default value: `mysql`.
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
 * Obtain the details of the health score and deduction.
 * @class
 */
class HealthScoreInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Exception details
         * @type {Array.<IssueTypeInfo> || null}
         */
        this.IssueTypes = null;

        /**
         * Total number of the exceptions
         * @type {number || null}
         */
        this.EventsTotalCount = null;

        /**
         * Health score
         * @type {number || null}
         */
        this.HealthScore = null;

        /**
         * Health level, such as "HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK".
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
         * Email configurations
         * @type {ProfileInfo || null}
         */
        this.ProfileInfo = null;

        /**
         * Configuration name, which needs to be unique. For scheduled task reports, the name should be in the format of "scheduler_" + {instanceId}, such as "schduler_cdb-test".
         * @type {string || null}
         */
        this.ProfileName = null;

        /**
         * Configure the instance ID that you need to generate the health report.
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
 * Contact description.
 * @class
 */
class ContactItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Contact ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Contact name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The email address of the contact.
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
 * DescribeHealthScore response structure.
 * @class
 */
class DescribeHealthScoreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health score and deduction for exceptions
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
 * DescribeDiagDBInstances request structure.
 * @class
 */
class DescribeDiagDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is an instance supported by DBbrain. It is fixed to “true”.
         * @type {boolean || null}
         */
        this.IsSupported = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Pagination parameter indicating the offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination parameter indicating the number of entries for each page.
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

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TencentDB for CynosDB (compatible with MySQL)). Default value: `mysql`.
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
 * DescribeAllUserContact response structure.
 * @class
 */
class DescribeAllUserContactResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of contacts.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Contact information.
Note: this field may return `null`, indicating that no valid value is obtained.
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
 * ModifyDiagDBInstanceConf request structure.
 * @class
 */
class ModifyDiagDBInstanceConfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable inspection
         * @type {InstanceConfs || null}
         */
        this.InstanceConfs = null;

        /**
         * Target regions of the request. If the value is `All`, it is applied to all regions.
         * @type {string || null}
         */
        this.Regions = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TencentDB for CynosDB (compatible with MySQL)).
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
         * Start time, such as `2020-11-08T14:00:00+08:00`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as `2020-11-09T14:00:00+08:00`.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Whether to send an email. Valid values: 0 - Yes, 1 - No.
         * @type {number || null}
         */
        this.SendMailFlag = null;

        /**
         * An array of contact IDs to receive the email.
         * @type {Array.<number> || null}
         */
        this.ContactPerson = null;

        /**
         * An array of contact group IDs to receive the email.
         * @type {Array.<number> || null}
         */
        this.ContactGroup = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TencentDB for CynosDB (compatible with MySQL)). Default value: `mysql`.
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
 * Information configured by user, including email configuration.
 * @class
 */
class UserProfile extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configured ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProfileId = null;

        /**
         * Configuration type
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProfileType = null;

        /**
         * Configuration level. Valid values: “User” or “Instance”
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProfileLevel = null;

        /**
         * Configuration name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProfileName = null;

        /**
         * Configuration details
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
         * Contact name, which needs to be unique and can contain 2-60 characters, supporting uppercase and lowercase letters, numbers, and underline “_”. It cannot start with “_”.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Email address, which can contain uppercase and lowercase letters, numbers, and underline “_”, and cannot start with “_”.
         * @type {string || null}
         */
        this.ContactInfo = null;

        /**
         * Service type, which is fixed to “mysql”.
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
 * DescribeAllUserGroup response structure.
 * @class
 */
class DescribeAllUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of contact groups.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Contact group information.
Note: this field may return `null`, indicating that no valid value is obtained.
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

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TencentDB for CynosDB (compatible with MySQL)). Default value: `mysql`.
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
 * DescribeAllUserContact request structure.
 * @class
 */
class DescribeAllUserContactRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service type, which is fixed to “mysql”.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * An array of contact name. Fuzzy search is supported.
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
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TencentDB for CynosDB (compatible with MySQL)). Default value: `mysql`.
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
         * End time, such as "2019-09-11 12:13:14". The interval between the end time and the start time can be up to 2 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TencentDB for CynosDB (compatible with MySQL)). Default value: `mysql`.
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
 * Describe the group information.
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
 * Query the list of instances and return information about the instances.
 * @class
 */
class InstanceInfo extends  AbstractModel {
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
         * The region where the instance belongs
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Health score
         * @type {number || null}
         */
        this.HealthScore = null;

        /**
         * Service
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Number of exceptions
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * Instance type. Valid values: 1: MASTER, 2: DR, 3: RO, 4: SDR
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Number of cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Disk storage in GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Database version
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Private network address
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Private network port
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Access source
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Instance status. Valid values: 0: Delivering, 1: Running, 4: Terminating, 5: Isolated
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Subnet unified ID
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * cdb (TencentDB instance) type
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * cdb (TencentDB instance) initialization flag. Valid values: 0: not initialized, 1: initialized
         * @type {number || null}
         */
        this.InitFlag = null;

        /**
         * Task status
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * Unified VPC ID
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Instance inspection/overview status
         * @type {InstanceConfs || null}
         */
        this.InstanceConf = null;

        /**
         * Resource expiration time
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * Whether it is an instance supported by DBbrain.
         * @type {boolean || null}
         */
        this.IsSupported = null;

        /**
         * The status of instance security audit log. ON: enabled, OFF: disabled.
         * @type {string || null}
         */
        this.SecAuditStatus = null;

        /**
         * The status of instance audit log. ALL_AUDIT: full audit is enabled, RULE_AUDIT: rule audit is enabled, UNBOUND: audit is disabled.
         * @type {string || null}
         */
        this.AuditPolicyStatus = null;

        /**
         * The running status of instance audit log. normal: running, paused: suspension due to arrears
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
         * Start date. It can be as early as 29 days before the current date, and defaults to 6 days before the end date.
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * End date. It can be as early as 29 days before the current date, and defaults to the current date.
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TencentDB for CynosDB (compatible with MySQL)). Default value: `mysql`.
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
 * AddUserContact response structure.
 * @class
 */
class AddUserContactResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The successfully added contact ID
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
 * CreateDBDiagReportTask response structure.
 * @class
 */
class CreateDBDiagReportTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of an async task request, which can be used to query the execution result of an async task.
Note: this field may return `null`, indicating that no valid value is obtained.
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
         * Database name
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
 * CreateMailProfile request structure.
 * @class
 */
class CreateMailProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Email configurations
         * @type {ProfileInfo || null}
         */
        this.ProfileInfo = null;

        /**
         * Configuration level. Valid values: "User" (user-level), "Instance" (instance-level). For database inspection report, it should be `User`; and for scheduled task reports, it should be `Instance`.
         * @type {string || null}
         */
        this.ProfileLevel = null;

        /**
         * Configuration name, which needs to be unique. For database inspection reports, this name can be customize as needed. For scheduled task reports, the name should be in the format of "scheduler_" + {instanceId}, such as "schduler_cdb-test".
         * @type {string || null}
         */
        this.ProfileName = null;

        /**
         * Configuration type. Valid values: "dbScan_mail_configuration" (email configuration of database inspection report), "scheduler_mail_configuration" (email configuration of scheduled task report).
         * @type {string || null}
         */
        this.ProfileType = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TencentDB for CynosDB (compatible with MySQL)).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Instance ID bound to the configuration, which is set when the configuration level is "Instance". Only one instance can be bound at a time.
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
 * Email sending configuration.
 * @class
 */
class MailConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable email sending. Valid values: 0 (No), 1 (Yes).
         * @type {number || null}
         */
        this.SendMail = null;

        /**
         * Region configuration, such as "ap-guangzhou", "ap-shanghai". For the inspection email sending template, configure the region where you need to send the inspection email. For the subscription email sending template, configure the region to which the current subscribed instance belongs.
         * @type {Array.<string> || null}
         */
        this.Region = null;

        /**
         * Sending a report with the specified health level, such as "HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK".
         * @type {Array.<string> || null}
         */
        this.HealthStatus = null;

        /**
         * Contact ID. Either `ContactGroup` or `ContactID` should be passed in.
         * @type {Array.<number> || null}
         */
        this.ContactPerson = null;

        /**
         * Contact group ID. Either `ContactGroup` or `ContactID` should be passed in.
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
         * End time, such as "2019-09-10 12:13:14". The interval between the end time and the start time can be up to 7 days.
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

        /**
         * Database name array.
         * @type {Array.<SchemaItem> || null}
         */
        this.SchemaList = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TencentDB for CynosDB (compatible with MySQL)). Default value: `mysql`.
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
         * Email configuration details
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<UserProfile> || null}
         */
        this.ProfileList = null;

        /**
         * Total number of email templates
Note: this field may return `null`, indicating that no valid values can be obtained.
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
 * Exception information
 * @class
 */
class EventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Diagnosis type
         * @type {string || null}
         */
        this.DiagType = null;

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

        /**
         * Summary
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * Severity, which can be divided into 5 levels: 1: fatal, 2: severe, 3: warning, 4: notice, 5: healthy.
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * Deduction
         * @type {number || null}
         */
        this.ScoreLost = null;

        /**
         * Reserved field
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * The number of alarms
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
 * DescribeMailProfile request structure.
 * @class
 */
class DescribeMailProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration type. Valid values: "dbScan_mail_configuration" (email configuration of database inspection report), "scheduler_mail_configuration" (email configuration of scheduled task report).
         * @type {string || null}
         */
        this.ProfileType = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL). Default value: `mysql`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of results per page in paginated queries. Maximum value: 50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query by the name of email configuration. The name of the regularly sent email configuration should be in the format of "scheduler_"+{instanceId}.
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
 * DescribeHealthScore request structure.
 * @class
 */
class DescribeHealthScoreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The instance ID that needs to obtain the health score
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time to obtain the health score
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Service type. Valid values: `mysql` (TencentDB for MySQL), `cynosdb` (TDSQL-C for MySQL (compatible with MySQL)). Default value: `mysql`.
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
 * Metric information
 * @class
 */
class IssueTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric categories: AVAILABILITY, MAINTAINABILITY, PERFORMANCE, and RELIABILITY
         * @type {string || null}
         */
        this.IssueType = null;

        /**
         * Exception
         * @type {Array.<EventInfo> || null}
         */
        this.Events = null;

        /**
         * Total number of the exceptions
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
 * Instance configuration.
 * @class
 */
class InstanceConfs extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable database inspection. Valid values: Yes/No.
         * @type {string || null}
         */
        this.DailyInspection = null;

        /**
         * Whether to enable instance overview. Valid values: Yes/No.
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
 * DescribeDiagDBInstances response structure.
 * @class
 */
class DescribeDiagDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total Number of Instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Status of all instance inspection. 0: all instance inspection enabled, 1: all instance inspection disabled
         * @type {number || null}
         */
        this.DbScanStatus = null;

        /**
         * Instance related information
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
 * Information configured by user.
 * @class
 */
class ProfileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Language of the email, such as `en`.
         * @type {string || null}
         */
        this.Language = null;

        /**
         * The content of email template.
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
 * DescribeAllUserGroup request structure.
 * @class
 */
class DescribeAllUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service type, which is fixed to “mysql”.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * An array of contact group name. Fuzzy search is supported.
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
         * Timestamp (in seconds) of tablespace data collect points
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

module.exports = {
    DescribeSlowLogTimeSeriesStatsRequest: DescribeSlowLogTimeSeriesStatsRequest,
    HealthScoreInfo: HealthScoreInfo,
    DescribeTopSpaceTableTimeSeriesResponse: DescribeTopSpaceTableTimeSeriesResponse,
    CreateSchedulerMailProfileRequest: CreateSchedulerMailProfileRequest,
    ContactItem: ContactItem,
    DescribeHealthScoreResponse: DescribeHealthScoreResponse,
    DescribeDBDiagHistoryResponse: DescribeDBDiagHistoryResponse,
    DescribeDiagDBInstancesRequest: DescribeDiagDBInstancesRequest,
    DescribeDBSpaceStatusRequest: DescribeDBSpaceStatusRequest,
    DescribeAllUserContactResponse: DescribeAllUserContactResponse,
    TimeSlice: TimeSlice,
    ModifyDiagDBInstanceConfRequest: ModifyDiagDBInstanceConfRequest,
    MonitorMetric: MonitorMetric,
    CreateDBDiagReportTaskRequest: CreateDBDiagReportTaskRequest,
    MonitorFloatMetric: MonitorFloatMetric,
    UserProfile: UserProfile,
    AddUserContactRequest: AddUserContactRequest,
    DescribeAllUserGroupResponse: DescribeAllUserGroupResponse,
    SchemaItem: SchemaItem,
    CreateMailProfileResponse: CreateMailProfileResponse,
    DescribeTopSpaceTablesRequest: DescribeTopSpaceTablesRequest,
    DescribeAllUserContactRequest: DescribeAllUserContactRequest,
    DescribeDBDiagEventRequest: DescribeDBDiagEventRequest,
    DescribeDBSpaceStatusResponse: DescribeDBSpaceStatusResponse,
    DescribeDBDiagEventResponse: DescribeDBDiagEventResponse,
    DescribeDBDiagHistoryRequest: DescribeDBDiagHistoryRequest,
    GroupItem: GroupItem,
    InstanceInfo: InstanceInfo,
    DescribeTopSpaceTableTimeSeriesRequest: DescribeTopSpaceTableTimeSeriesRequest,
    AddUserContactResponse: AddUserContactResponse,
    CreateDBDiagReportTaskResponse: CreateDBDiagReportTaskResponse,
    MonitorMetricSeriesData: MonitorMetricSeriesData,
    ModifyDiagDBInstanceConfResponse: ModifyDiagDBInstanceConfResponse,
    DiagHistoryEventItem: DiagHistoryEventItem,
    TableSpaceTimeSeries: TableSpaceTimeSeries,
    CreateSchedulerMailProfileResponse: CreateSchedulerMailProfileResponse,
    SlowLogTopSqlItem: SlowLogTopSqlItem,
    CreateMailProfileRequest: CreateMailProfileRequest,
    MonitorFloatMetricSeriesData: MonitorFloatMetricSeriesData,
    MailConfiguration: MailConfiguration,
    DescribeSlowLogTopSqlsRequest: DescribeSlowLogTopSqlsRequest,
    DescribeMailProfileResponse: DescribeMailProfileResponse,
    TableSpaceData: TableSpaceData,
    DescribeSlowLogTopSqlsResponse: DescribeSlowLogTopSqlsResponse,
    EventInfo: EventInfo,
    DescribeMailProfileRequest: DescribeMailProfileRequest,
    DescribeHealthScoreRequest: DescribeHealthScoreRequest,
    IssueTypeInfo: IssueTypeInfo,
    InstanceConfs: InstanceConfs,
    DescribeDiagDBInstancesResponse: DescribeDiagDBInstancesResponse,
    ProfileInfo: ProfileInfo,
    DescribeAllUserGroupRequest: DescribeAllUserGroupRequest,
    DescribeSlowLogTimeSeriesStatsResponse: DescribeSlowLogTimeSeriesStatsResponse,
    DescribeTopSpaceTablesResponse: DescribeTopSpaceTablesResponse,

}
