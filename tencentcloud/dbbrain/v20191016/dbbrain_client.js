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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const SchemaSpaceTimeSeries = models.SchemaSpaceTimeSeries;
const DescribeSlowLogUserHostStatsRequest = models.DescribeSlowLogUserHostStatsRequest;
const DescribeSlowLogTimeSeriesStatsRequest = models.DescribeSlowLogTimeSeriesStatsRequest;
const DescribeTopSpaceSchemasResponse = models.DescribeTopSpaceSchemasResponse;
const TimeSlice = models.TimeSlice;
const HealthScoreInfo = models.HealthScoreInfo;
const DescribeTopSpaceTableTimeSeriesResponse = models.DescribeTopSpaceTableTimeSeriesResponse;
const CreateSchedulerMailProfileRequest = models.CreateSchedulerMailProfileRequest;
const ContactItem = models.ContactItem;
const DescribeHealthScoreResponse = models.DescribeHealthScoreResponse;
const DescribeDBDiagHistoryResponse = models.DescribeDBDiagHistoryResponse;
const DescribeDiagDBInstancesRequest = models.DescribeDiagDBInstancesRequest;
const DescribeDBSpaceStatusRequest = models.DescribeDBSpaceStatusRequest;
const DescribeAllUserContactResponse = models.DescribeAllUserContactResponse;
const DescribeTopSpaceSchemasRequest = models.DescribeTopSpaceSchemasRequest;
const ModifyDiagDBInstanceConfRequest = models.ModifyDiagDBInstanceConfRequest;
const MonitorMetric = models.MonitorMetric;
const CreateDBDiagReportTaskRequest = models.CreateDBDiagReportTaskRequest;
const MonitorFloatMetric = models.MonitorFloatMetric;
const ScoreItem = models.ScoreItem;
const AddUserContactRequest = models.AddUserContactRequest;
const DescribeAllUserGroupResponse = models.DescribeAllUserGroupResponse;
const InstanceBasicInfo = models.InstanceBasicInfo;
const SchemaItem = models.SchemaItem;
const CreateMailProfileResponse = models.CreateMailProfileResponse;
const DescribeTopSpaceTablesRequest = models.DescribeTopSpaceTablesRequest;
const ProfileInfo = models.ProfileInfo;
const DescribeAllUserContactRequest = models.DescribeAllUserContactRequest;
const DescribeDBDiagEventRequest = models.DescribeDBDiagEventRequest;
const DescribeUserSqlAdviceResponse = models.DescribeUserSqlAdviceResponse;
const DescribeDBSpaceStatusResponse = models.DescribeDBSpaceStatusResponse;
const DiagHistoryEventItem = models.DiagHistoryEventItem;
const DescribeDBDiagEventResponse = models.DescribeDBDiagEventResponse;
const DescribeDBDiagHistoryRequest = models.DescribeDBDiagHistoryRequest;
const GroupItem = models.GroupItem;
const InstanceInfo = models.InstanceInfo;
const DescribeSlowLogUserHostStatsResponse = models.DescribeSlowLogUserHostStatsResponse;
const DescribeDBDiagReportTasksResponse = models.DescribeDBDiagReportTasksResponse;
const AddUserContactResponse = models.AddUserContactResponse;
const HealthReportTask = models.HealthReportTask;
const DescribeDBDiagReportTasksRequest = models.DescribeDBDiagReportTasksRequest;
const CreateDBDiagReportTaskResponse = models.CreateDBDiagReportTaskResponse;
const MonitorMetricSeriesData = models.MonitorMetricSeriesData;
const ModifyDiagDBInstanceConfResponse = models.ModifyDiagDBInstanceConfResponse;
const CreateDBDiagReportUrlResponse = models.CreateDBDiagReportUrlResponse;
const DescribeTopSpaceSchemaTimeSeriesResponse = models.DescribeTopSpaceSchemaTimeSeriesResponse;
const TableSpaceTimeSeries = models.TableSpaceTimeSeries;
const CreateSchedulerMailProfileResponse = models.CreateSchedulerMailProfileResponse;
const SlowLogTopSqlItem = models.SlowLogTopSqlItem;
const SlowLogHost = models.SlowLogHost;
const CreateMailProfileRequest = models.CreateMailProfileRequest;
const DescribeTopSpaceSchemaTimeSeriesRequest = models.DescribeTopSpaceSchemaTimeSeriesRequest;
const MonitorFloatMetricSeriesData = models.MonitorFloatMetricSeriesData;
const MailConfiguration = models.MailConfiguration;
const DescribeTopSpaceTableTimeSeriesRequest = models.DescribeTopSpaceTableTimeSeriesRequest;
const DescribeSlowLogTopSqlsRequest = models.DescribeSlowLogTopSqlsRequest;
const DescribeMailProfileResponse = models.DescribeMailProfileResponse;
const TableSpaceData = models.TableSpaceData;
const DescribeSlowLogTopSqlsResponse = models.DescribeSlowLogTopSqlsResponse;
const EventInfo = models.EventInfo;
const DescribeMailProfileRequest = models.DescribeMailProfileRequest;
const DescribeHealthScoreRequest = models.DescribeHealthScoreRequest;
const IssueTypeInfo = models.IssueTypeInfo;
const InstanceConfs = models.InstanceConfs;
const DescribeDiagDBInstancesResponse = models.DescribeDiagDBInstancesResponse;
const HealthStatus = models.HealthStatus;
const DescribeUserSqlAdviceRequest = models.DescribeUserSqlAdviceRequest;
const DescribeAllUserGroupRequest = models.DescribeAllUserGroupRequest;
const CreateDBDiagReportUrlRequest = models.CreateDBDiagReportUrlRequest;
const DescribeSlowLogTimeSeriesStatsResponse = models.DescribeSlowLogTimeSeriesStatsResponse;
const ScoreDetail = models.ScoreDetail;
const UserProfile = models.UserProfile;
const SchemaSpaceData = models.SchemaSpaceData;
const DescribeTopSpaceTablesResponse = models.DescribeTopSpaceTablesResponse;


/**
 * dbbrain client
 * @class
 */
class DbbrainClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dbbrain.intl.tencentcloudapi.com", "2019-10-16", credential, region, profile);
    }
    
    /**
     * This API is used to obtain the email sending configurations, including the email configuration for database inspection and the email sending configuration for regularly generated health reports. Select Guangzhou for Region.
     * @param {DescribeMailProfileRequest} req
     * @param {function(string, DescribeMailProfileResponse):void} cb
     * @public
     */
    DescribeMailProfile(req, cb) {
        let resp = new DescribeMailProfileResponse();
        this.request("DescribeMailProfile", req, resp, cb);
    }

    /**
     * This API is used to create the regular generation time of the health reports and the regular email sending configuration. Pass in the regular generation time of the health reports as a parameter (Monday to Sunday) to set the regular generation time of the health reports, and save the corresponding regular email sending configuration.
     * @param {CreateSchedulerMailProfileRequest} req
     * @param {function(string, CreateSchedulerMailProfileResponse):void} cb
     * @public
     */
    CreateSchedulerMailProfile(req, cb) {
        let resp = new CreateSchedulerMailProfileResponse();
        this.request("CreateSchedulerMailProfile", req, resp, cb);
    }

    /**
     * This API is used to query real-time space statistics of top databases. The return results are sorted by size by default.
     * @param {DescribeTopSpaceSchemasRequest} req
     * @param {function(string, DescribeTopSpaceSchemasResponse):void} cb
     * @public
     */
    DescribeTopSpaceSchemas(req, cb) {
        let resp = new DescribeTopSpaceSchemasResponse();
        this.request("DescribeTopSpaceSchemas", req, resp, cb);
    }

    /**
     * This API is used to query the list of health report generation tasks.
     * @param {DescribeDBDiagReportTasksRequest} req
     * @param {function(string, DescribeDBDiagReportTasksResponse):void} cb
     * @public
     */
    DescribeDBDiagReportTasks(req, cb) {
        let resp = new DescribeDBDiagReportTasksResponse();
        this.request("DescribeDBDiagReportTasks", req, resp, cb);
    }

    /**
     * This API is used to obtain the information of the contact group in the email.
     * @param {DescribeAllUserGroupRequest} req
     * @param {function(string, DescribeAllUserGroupResponse):void} cb
     * @public
     */
    DescribeAllUserGroup(req, cb) {
        let resp = new DescribeAllUserGroupResponse();
        this.request("DescribeAllUserGroup", req, resp, cb);
    }

    /**
     * This API is used to get the slow log statistics histogram.
     * @param {DescribeSlowLogTimeSeriesStatsRequest} req
     * @param {function(string, DescribeSlowLogTimeSeriesStatsResponse):void} cb
     * @public
     */
    DescribeSlowLogTimeSeriesStats(req, cb) {
        let resp = new DescribeSlowLogTimeSeriesStatsResponse();
        this.request("DescribeSlowLogTimeSeriesStats", req, resp, cb);
    }

    /**
     * This API is used to obtain the statistical distribution chart of slow log source addresses.
     * @param {DescribeSlowLogUserHostStatsRequest} req
     * @param {function(string, DescribeSlowLogUserHostStatsResponse):void} cb
     * @public
     */
    DescribeSlowLogUserHostStats(req, cb) {
        let resp = new DescribeSlowLogUserHostStatsResponse();
        this.request("DescribeSlowLogUserHostStats", req, resp, cb);
    }

    /**
     * This API is used to query real-time space statistics of top tables of an instance. The return results are sorted by size by default.
     * @param {DescribeTopSpaceTablesRequest} req
     * @param {function(string, DescribeTopSpaceTablesResponse):void} cb
     * @public
     */
    DescribeTopSpaceTables(req, cb) {
        let resp = new DescribeTopSpaceTablesResponse();
        this.request("DescribeTopSpaceTables", req, resp, cb);
    }

    /**
     * This API is used to query the overview of instance space usage during a specified time period, including disk usage growth (MB), available disk space (MB), total disk space (MB), and estimated number of available days.
     * @param {DescribeDBSpaceStatusRequest} req
     * @param {function(string, DescribeDBSpaceStatusResponse):void} cb
     * @public
     */
    DescribeDBSpaceStatus(req, cb) {
        let resp = new DescribeDBSpaceStatusResponse();
        this.request("DescribeDBSpaceStatus", req, resp, cb);
    }

    /**
     * This API is used to create the email configuration. The input parameter `ProfileType` represents the type of the email configuration. Valid values: `dbScan_mail_configuration` (email configuration of database inspection report) and `scheduler_mail_configuration` (email sending configuration of regularly generated health report). Select Guangzhou for Region, regardless of the region where the instance belongs.
     * @param {CreateMailProfileRequest} req
     * @param {function(string, CreateMailProfileResponse):void} cb
     * @public
     */
    CreateMailProfile(req, cb) {
        let resp = new CreateMailProfileResponse();
        this.request("CreateMailProfile", req, resp, cb);
    }

    /**
     * This API is used to obtain the health score and deduction for exceptions in the specified time period (30 minutes) based on the instance ID.
     * @param {DescribeHealthScoreRequest} req
     * @param {function(string, DescribeHealthScoreResponse):void} cb
     * @public
     */
    DescribeHealthScore(req, cb) {
        let resp = new DescribeHealthScoreResponse();
        this.request("DescribeHealthScore", req, resp, cb);
    }

    /**
     * This API is used to get and sort the top slow SQL statements in a specified time period by the aggregation mode of SQL template plus schema.
     * @param {DescribeSlowLogTopSqlsRequest} req
     * @param {function(string, DescribeSlowLogTopSqlsResponse):void} cb
     * @public
     */
    DescribeSlowLogTopSqls(req, cb) {
        let resp = new DescribeSlowLogTopSqlsResponse();
        this.request("DescribeSlowLogTopSqls", req, resp, cb);
    }

    /**
     * This API is used to obtain the information of the contact in the email.
     * @param {DescribeAllUserContactRequest} req
     * @param {function(string, DescribeAllUserContactResponse):void} cb
     * @public
     */
    DescribeAllUserContact(req, cb) {
        let resp = new DescribeAllUserContactResponse();
        this.request("DescribeAllUserContact", req, resp, cb);
    }

    /**
     * This API is used to get the details of an instance exception diagnosis event.
     * @param {DescribeDBDiagEventRequest} req
     * @param {function(string, DescribeDBDiagEventResponse):void} cb
     * @public
     */
    DescribeDBDiagEvent(req, cb) {
        let resp = new DescribeDBDiagEventResponse();
        this.request("DescribeDBDiagEvent", req, resp, cb);
    }

    /**
     * This API is used to get the list of instance diagnosis events.
     * @param {DescribeDBDiagHistoryRequest} req
     * @param {function(string, DescribeDBDiagHistoryResponse):void} cb
     * @public
     */
    DescribeDBDiagHistory(req, cb) {
        let resp = new DescribeDBDiagHistoryResponse();
        this.request("DescribeDBDiagHistory", req, resp, cb);
    }

    /**
     * This API is used to create a health report and send it via email as configured.
     * @param {CreateDBDiagReportTaskRequest} req
     * @param {function(string, CreateDBDiagReportTaskResponse):void} cb
     * @public
     */
    CreateDBDiagReportTask(req, cb) {
        let resp = new CreateDBDiagReportTaskResponse();
        this.request("CreateDBDiagReportTask", req, resp, cb);
    }

    /**
     * This API is used to obtain the instance information list. Select Guangzhou for Region.
     * @param {DescribeDiagDBInstancesRequest} req
     * @param {function(string, DescribeDiagDBInstancesResponse):void} cb
     * @public
     */
    DescribeDiagDBInstances(req, cb) {
        let resp = new DescribeDiagDBInstancesResponse();
        this.request("DescribeDiagDBInstances", req, resp, cb);
    }

    /**
     * This API is used to add the contact name and email.. The return value is the successfully added contact ID. Select Guangzhou for Region.
     * @param {AddUserContactRequest} req
     * @param {function(string, AddUserContactResponse):void} cb
     * @public
     */
    AddUserContact(req, cb) {
        let resp = new AddUserContactResponse();
        this.request("AddUserContact", req, resp, cb);
    }

    /**
     * This API is used to query the daily space data of top databases consuming the most instance space. The data is daily collected by DBbrain during a specified time period. The return results are sorted by size by default.
     * @param {DescribeTopSpaceSchemaTimeSeriesRequest} req
     * @param {function(string, DescribeTopSpaceSchemaTimeSeriesResponse):void} cb
     * @public
     */
    DescribeTopSpaceSchemaTimeSeries(req, cb) {
        let resp = new DescribeTopSpaceSchemaTimeSeriesResponse();
        this.request("DescribeTopSpaceSchemaTimeSeries", req, resp, cb);
    }

    /**
     * This API is used to obtain SQL statement optimization suggestions.
     * @param {DescribeUserSqlAdviceRequest} req
     * @param {function(string, DescribeUserSqlAdviceResponse):void} cb
     * @public
     */
    DescribeUserSqlAdvice(req, cb) {
        let resp = new DescribeUserSqlAdviceResponse();
        this.request("DescribeUserSqlAdvice", req, resp, cb);
    }

    /**
     * This API is used to query the daily space data of top tables consuming the most instance space. The data is daily collected by DBbrain during a specified time period. The return results are sorted by size by default.
     * @param {DescribeTopSpaceTableTimeSeriesRequest} req
     * @param {function(string, DescribeTopSpaceTableTimeSeriesResponse):void} cb
     * @public
     */
    DescribeTopSpaceTableTimeSeries(req, cb) {
        let resp = new DescribeTopSpaceTableTimeSeriesResponse();
        this.request("DescribeTopSpaceTableTimeSeries", req, resp, cb);
    }

    /**
     * This API is used to enable/disable instance inspection.
     * @param {ModifyDiagDBInstanceConfRequest} req
     * @param {function(string, ModifyDiagDBInstanceConfResponse):void} cb
     * @public
     */
    ModifyDiagDBInstanceConf(req, cb) {
        let resp = new ModifyDiagDBInstanceConfResponse();
        this.request("ModifyDiagDBInstanceConf", req, resp, cb);
    }

    /**
     * This API is used to create a URL for a health report.
     * @param {CreateDBDiagReportUrlRequest} req
     * @param {function(string, CreateDBDiagReportUrlResponse):void} cb
     * @public
     */
    CreateDBDiagReportUrl(req, cb) {
        let resp = new CreateDBDiagReportUrlResponse();
        this.request("CreateDBDiagReportUrl", req, resp, cb);
    }


}
module.exports = DbbrainClient;
