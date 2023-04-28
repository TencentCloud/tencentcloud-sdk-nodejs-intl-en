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
const HealthReportTask = models.HealthReportTask;
const CreateDBDiagReportTaskRequest = models.CreateDBDiagReportTaskRequest;
const TableSpaceTimeSeries = models.TableSpaceTimeSeries;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const DescribeTopSpaceTablesRequest = models.DescribeTopSpaceTablesRequest;
const ScoreItem = models.ScoreItem;
const InstanceConfs = models.InstanceConfs;
const CreateSecurityAuditLogExportTaskRequest = models.CreateSecurityAuditLogExportTaskRequest;
const DescribeDBDiagEventResponse = models.DescribeDBDiagEventResponse;
const DescribeDBDiagEventsResponse = models.DescribeDBDiagEventsResponse;
const DescribeDBDiagReportTasksResponse = models.DescribeDBDiagReportTasksResponse;
const AddUserContactResponse = models.AddUserContactResponse;
const ModifyDiagDBInstanceConfResponse = models.ModifyDiagDBInstanceConfResponse;
const DescribeTopSpaceSchemaTimeSeriesResponse = models.DescribeTopSpaceSchemaTimeSeriesResponse;
const SlowLogTopSqlItem = models.SlowLogTopSqlItem;
const DescribeProxySessionKillTasksRequest = models.DescribeProxySessionKillTasksRequest;
const DescribeMySqlProcessListResponse = models.DescribeMySqlProcessListResponse;
const SessionItem = models.SessionItem;
const HealthStatus = models.HealthStatus;
const DescribeTopSpaceTablesResponse = models.DescribeTopSpaceTablesResponse;
const TaskInfo = models.TaskInfo;
const KillMySqlThreadsResponse = models.KillMySqlThreadsResponse;
const CreateSchedulerMailProfileRequest = models.CreateSchedulerMailProfileRequest;
const ContactItem = models.ContactItem;
const DescribeDBSpaceStatusRequest = models.DescribeDBSpaceStatusRequest;
const TimeSlice = models.TimeSlice;
const DeleteDBDiagReportTasksRequest = models.DeleteDBDiagReportTasksRequest;
const ModifyDiagDBInstanceConfRequest = models.ModifyDiagDBInstanceConfRequest;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const DescribeSecurityAuditLogDownloadUrlsRequest = models.DescribeSecurityAuditLogDownloadUrlsRequest;
const CreateDBDiagReportTaskResponse = models.CreateDBDiagReportTaskResponse;
const ProcessStatistic = models.ProcessStatistic;
const CreateMailProfileResponse = models.CreateMailProfileResponse;
const DescribeSlowLogTimeSeriesStatsRequest = models.DescribeSlowLogTimeSeriesStatsRequest;
const DiagHistoryEventItem = models.DiagHistoryEventItem;
const MySqlProcess = models.MySqlProcess;
const DescribeDBDiagHistoryRequest = models.DescribeDBDiagHistoryRequest;
const CreateKillTaskResponse = models.CreateKillTaskResponse;
const DescribeDBDiagEventsRequest = models.DescribeDBDiagEventsRequest;
const CreateDBDiagReportUrlResponse = models.CreateDBDiagReportUrlResponse;
const CreateKillTaskRequest = models.CreateKillTaskRequest;
const DeleteDBDiagReportTasksResponse = models.DeleteDBDiagReportTasksResponse;
const DescribeProxyProcessStatisticsResponse = models.DescribeProxyProcessStatisticsResponse;
const SlowLogHost = models.SlowLogHost;
const CreateMailProfileRequest = models.CreateMailProfileRequest;
const MonitorFloatMetricSeriesData = models.MonitorFloatMetricSeriesData;
const MailConfiguration = models.MailConfiguration;
const DescribeSlowLogUserHostStatsResponse = models.DescribeSlowLogUserHostStatsResponse;
const TableSpaceData = models.TableSpaceData;
const EventInfo = models.EventInfo;
const DescribeMailProfileRequest = models.DescribeMailProfileRequest;
const DeleteSecurityAuditLogExportTasksResponse = models.DeleteSecurityAuditLogExportTasksResponse;
const KillMySqlThreadsRequest = models.KillMySqlThreadsRequest;
const CreateDBDiagReportUrlRequest = models.CreateDBDiagReportUrlRequest;
const DescribeSecurityAuditLogExportTasksResponse = models.DescribeSecurityAuditLogExportTasksResponse;
const DescribeRedisTopKeyPrefixListRequest = models.DescribeRedisTopKeyPrefixListRequest;
const HealthScoreInfo = models.HealthScoreInfo;
const DescribeTopSpaceTableTimeSeriesResponse = models.DescribeTopSpaceTableTimeSeriesResponse;
const DescribeDBDiagHistoryResponse = models.DescribeDBDiagHistoryResponse;
const DescribeDBDiagEventRequest = models.DescribeDBDiagEventRequest;
const DescribeAllUserContactResponse = models.DescribeAllUserContactResponse;
const MonitorMetric = models.MonitorMetric;
const ProfileInfo = models.ProfileInfo;
const UserProfile = models.UserProfile;
const AddUserContactRequest = models.AddUserContactRequest;
const InstanceBasicInfo = models.InstanceBasicInfo;
const SchemaSpaceData = models.SchemaSpaceData;
const DescribeAllUserContactRequest = models.DescribeAllUserContactRequest;
const DescribeDiagDBInstancesRequest = models.DescribeDiagDBInstancesRequest;
const InstanceInfo = models.InstanceInfo;
const DescribeSecurityAuditLogExportTasksRequest = models.DescribeSecurityAuditLogExportTasksRequest;
const DeleteSecurityAuditLogExportTasksRequest = models.DeleteSecurityAuditLogExportTasksRequest;
const CreateSchedulerMailProfileResponse = models.CreateSchedulerMailProfileResponse;
const DescribeTopSpaceSchemaTimeSeriesRequest = models.DescribeTopSpaceSchemaTimeSeriesRequest;
const DescribeSlowLogTopSqlsRequest = models.DescribeSlowLogTopSqlsRequest;
const DescribeMailProfileResponse = models.DescribeMailProfileResponse;
const DescribeHealthScoreRequest = models.DescribeHealthScoreRequest;
const IssueTypeInfo = models.IssueTypeInfo;
const DescribeDiagDBInstancesResponse = models.DescribeDiagDBInstancesResponse;
const DescribeAllUserGroupRequest = models.DescribeAllUserGroupRequest;
const CreateProxySessionKillTaskRequest = models.CreateProxySessionKillTaskRequest;
const CreateSecurityAuditLogExportTaskResponse = models.CreateSecurityAuditLogExportTaskResponse;
const SchemaItem = models.SchemaItem;
const DescribeSlowLogUserHostStatsRequest = models.DescribeSlowLogUserHostStatsRequest;
const DescribeTopSpaceSchemasResponse = models.DescribeTopSpaceSchemasResponse;
const CreateProxySessionKillTaskResponse = models.CreateProxySessionKillTaskResponse;
const DescribeSlowLogTimeSeriesStatsResponse = models.DescribeSlowLogTimeSeriesStatsResponse;
const DescribeProxyProcessStatisticsRequest = models.DescribeProxyProcessStatisticsRequest;
const MonitorFloatMetric = models.MonitorFloatMetric;
const DescribeRedisTopKeyPrefixListResponse = models.DescribeRedisTopKeyPrefixListResponse;
const DescribeAllUserGroupResponse = models.DescribeAllUserGroupResponse;
const DescribeUserSqlAdviceResponse = models.DescribeUserSqlAdviceResponse;
const DescribeDBSpaceStatusResponse = models.DescribeDBSpaceStatusResponse;
const GroupItem = models.GroupItem;
const RedisPreKeySpaceData = models.RedisPreKeySpaceData;
const DescribeTopSpaceTableTimeSeriesRequest = models.DescribeTopSpaceTableTimeSeriesRequest;
const DescribeDBDiagReportTasksRequest = models.DescribeDBDiagReportTasksRequest;
const MonitorMetricSeriesData = models.MonitorMetricSeriesData;
const SlowLogInfoItem = models.SlowLogInfoItem;
const SecLogExportTaskInfo = models.SecLogExportTaskInfo;
const DescribeHealthScoreResponse = models.DescribeHealthScoreResponse;
const ScoreDetail = models.ScoreDetail;
const DescribeTopSpaceSchemasRequest = models.DescribeTopSpaceSchemasRequest;
const DescribeSlowLogTopSqlsResponse = models.DescribeSlowLogTopSqlsResponse;
const DescribeUserSqlAdviceRequest = models.DescribeUserSqlAdviceRequest;
const DescribeMySqlProcessListRequest = models.DescribeMySqlProcessListRequest;
const DescribeSecurityAuditLogDownloadUrlsResponse = models.DescribeSecurityAuditLogDownloadUrlsResponse;
const DescribeProxySessionKillTasksResponse = models.DescribeProxySessionKillTasksResponse;


/**
 * dbbrain client
 * @class
 */
class DbbrainClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dbbrain.tencentcloudapi.com", "2021-05-27", credential, region, profile);
    }
    
    /**
     * This API is used to query the download link of a security audit log export file. Currently, log file download only provides a Tencent Cloud private network address. Download it by using a CVM instance in the Guangzhou region.
     * @param {DescribeSecurityAuditLogDownloadUrlsRequest} req
     * @param {function(string, DescribeSecurityAuditLogDownloadUrlsResponse):void} cb
     * @public
     */
    DescribeSecurityAuditLogDownloadUrls(req, cb) {
        let resp = new DescribeSecurityAuditLogDownloadUrlsResponse();
        this.request("DescribeSecurityAuditLogDownloadUrls", req, resp, cb);
    }

    /**
     * This API is used to delete health report generation tasks by task ID.
     * @param {DeleteDBDiagReportTasksRequest} req
     * @param {function(string, DeleteDBDiagReportTasksResponse):void} cb
     * @public
     */
    DeleteDBDiagReportTasks(req, cb) {
        let resp = new DeleteDBDiagReportTasksResponse();
        this.request("DeleteDBDiagReportTasks", req, resp, cb);
    }

    /**
     * This API is used to get the email sending configuration, including the email configuration for database inspection and the email sending configuration for scheduled task health reports.
     * @param {DescribeMailProfileRequest} req
     * @param {function(string, DescribeMailProfileResponse):void} cb
     * @public
     */
    DescribeMailProfile(req, cb) {
        let resp = new DescribeMailProfileResponse();
        this.request("DescribeMailProfile", req, resp, cb);
    }

    /**
     * This API is used to create the regular generation time of health reports and the regular email sending configuration. Pass in the regular generation time of health reports as a parameter (Monday to Sunday) to set the regular generation time, and save the corresponding regular email sending configuration.
     * @param {CreateSchedulerMailProfileRequest} req
     * @param {function(string, CreateSchedulerMailProfileResponse):void} cb
     * @public
     */
    CreateSchedulerMailProfile(req, cb) {
        let resp = new CreateSchedulerMailProfileResponse();
        this.request("CreateSchedulerMailProfile", req, resp, cb);
    }

    /**
     * This API is used to get the real-time space statistics of top databases of an instance. The returned results are sorted by size by default.
     * @param {DescribeTopSpaceSchemasRequest} req
     * @param {function(string, DescribeTopSpaceSchemasResponse):void} cb
     * @public
     */
    DescribeTopSpaceSchemas(req, cb) {
        let resp = new DescribeTopSpaceSchemasResponse();
        this.request("DescribeTopSpaceSchemas", req, resp, cb);
    }

    /**
     * This API is used to query the real-time thread list of a relational database.
     * @param {DescribeMySqlProcessListRequest} req
     * @param {function(string, DescribeMySqlProcessListResponse):void} cb
     * @public
     */
    DescribeMySqlProcessList(req, cb) {
        let resp = new DescribeMySqlProcessListResponse();
        this.request("DescribeMySqlProcessList", req, resp, cb);
    }

    /**
     * This API is used to create an async task of killing all proxy node connection sessions and is currently supported only for Redis. The async task ID is the returned value, which can be passed to the API `DescribeProxySessionKillTasks` as a parameter to query the execution status of the session killing task.
     * @param {CreateProxySessionKillTaskRequest} req
     * @param {function(string, CreateProxySessionKillTaskResponse):void} cb
     * @public
     */
    CreateProxySessionKillTask(req, cb) {
        let resp = new CreateProxySessionKillTaskResponse();
        this.request("CreateProxySessionKillTask", req, resp, cb);
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
     * This API is used to get the information of the recipient group in the email.
     * @param {DescribeAllUserGroupRequest} req
     * @param {function(string, DescribeAllUserGroupResponse):void} cb
     * @public
     */
    DescribeAllUserGroup(req, cb) {
        let resp = new DescribeAllUserGroupResponse();
        this.request("DescribeAllUserGroup", req, resp, cb);
    }

    /**
     * This API is used to obtain the diagnosis event list in a specified time period by risk level, instance ID, etc.
     * @param {DescribeDBDiagEventsRequest} req
     * @param {function(string, DescribeDBDiagEventsResponse):void} cb
     * @public
     */
    DescribeDBDiagEvents(req, cb) {
        let resp = new DescribeDBDiagEventsResponse();
        this.request("DescribeDBDiagEvents", req, resp, cb);
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
     * This API is used to get the statistical distribution chart of slow log source addresses.
     * @param {DescribeSlowLogUserHostStatsRequest} req
     * @param {function(string, DescribeSlowLogUserHostStatsResponse):void} cb
     * @public
     */
    DescribeSlowLogUserHostStats(req, cb) {
        let resp = new DescribeSlowLogUserHostStatsResponse();
        this.request("DescribeSlowLogUserHostStats", req, resp, cb);
    }

    /**
     * This API is used to get the real-time space statistics of top tables of an instance. The returned results are sorted by size by default.
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
     * This API is used to create the email configuration. The input parameter `ProfileType` represents the type of the email configuration. Valid values: `dbScan_mail_configuration` (email configuration of database inspection report) and `scheduler_mail_configuration` (email sending configuration of scheduled task health report). Always select Guangzhou for `Region`, regardless of the region where the instance resides.
     * @param {CreateMailProfileRequest} req
     * @param {function(string, CreateMailProfileResponse):void} cb
     * @public
     */
    CreateMailProfile(req, cb) {
        let resp = new CreateMailProfileResponse();
        this.request("CreateMailProfile", req, resp, cb);
    }

    /**
     * This API is used to get the health score and deduction for exceptions in the specified time period (30 minutes) based on the instance ID.
     * @param {DescribeHealthScoreRequest} req
     * @param {function(string, DescribeHealthScoreResponse):void} cb
     * @public
     */
    DescribeHealthScore(req, cb) {
        let resp = new DescribeHealthScoreResponse();
        this.request("DescribeHealthScore", req, resp, cb);
    }

    /**
     * This API is used to create a security audit log export task.
     * @param {CreateSecurityAuditLogExportTaskRequest} req
     * @param {function(string, CreateSecurityAuditLogExportTaskResponse):void} cb
     * @public
     */
    CreateSecurityAuditLogExportTask(req, cb) {
        let resp = new CreateSecurityAuditLogExportTaskResponse();
        this.request("CreateSecurityAuditLogExportTask", req, resp, cb);
    }

    /**
     * This API is used to delete a security audit log export task.
     * @param {DeleteSecurityAuditLogExportTasksRequest} req
     * @param {function(string, DeleteSecurityAuditLogExportTasksResponse):void} cb
     * @public
     */
    DeleteSecurityAuditLogExportTasks(req, cb) {
        let resp = new DeleteSecurityAuditLogExportTasksResponse();
        this.request("DeleteSecurityAuditLogExportTasks", req, resp, cb);
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
     * This API is used to query the list of security audit log export tasks.
     * @param {DescribeSecurityAuditLogExportTasksRequest} req
     * @param {function(string, DescribeSecurityAuditLogExportTasksResponse):void} cb
     * @public
     */
    DescribeSecurityAuditLogExportTasks(req, cb) {
        let resp = new DescribeSecurityAuditLogExportTasksResponse();
        this.request("DescribeSecurityAuditLogExportTasks", req, resp, cb);
    }

    /**
     * This API is used to get the information of the recipient in the email.
     * @param {DescribeAllUserContactRequest} req
     * @param {function(string, DescribeAllUserContactResponse):void} cb
     * @public
     */
    DescribeAllUserContact(req, cb) {
        let resp = new DescribeAllUserContactResponse();
        this.request("DescribeAllUserContact", req, resp, cb);
    }

    /**
     * This API is used to query the list of top key prefixes for Redis instances.
     * @param {DescribeRedisTopKeyPrefixListRequest} req
     * @param {function(string, DescribeRedisTopKeyPrefixListResponse):void} cb
     * @public
     */
    DescribeRedisTopKeyPrefixList(req, cb) {
        let resp = new DescribeRedisTopKeyPrefixListResponse();
        this.request("DescribeRedisTopKeyPrefixList", req, resp, cb);
    }

    /**
     * This API is used to obtain the slow query log details of a SQL template in a specified time period.
     * @param {DescribeSlowLogsRequest} req
     * @param {function(string, DescribeSlowLogsResponse):void} cb
     * @public
     */
    DescribeSlowLogs(req, cb) {
        let resp = new DescribeSlowLogsResponse();
        this.request("DescribeSlowLogs", req, resp, cb);
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
     * This API is used to get the session statistics of a single proxy under the current instance, and can only be called in particular environments.
     * @param {DescribeProxyProcessStatisticsRequest} req
     * @param {function(string, DescribeProxyProcessStatisticsResponse):void} cb
     * @public
     */
    DescribeProxyProcessStatistics(req, cb) {
        let resp = new DescribeProxyProcessStatisticsResponse();
        this.request("DescribeProxyProcessStatistics", req, resp, cb);
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
     * This API is used to get the instance information list. Please always select Guangzhou for `Region`.
     * @param {DescribeDiagDBInstancesRequest} req
     * @param {function(string, DescribeDiagDBInstancesResponse):void} cb
     * @public
     */
    DescribeDiagDBInstances(req, cb) {
        let resp = new DescribeDiagDBInstancesResponse();
        this.request("DescribeDiagDBInstances", req, resp, cb);
    }

    /**
     * This API is used to add the recipient name and email. The returned value is the ID of the successfully added recipient.
     * @param {AddUserContactRequest} req
     * @param {function(string, AddUserContactResponse):void} cb
     * @public
     */
    AddUserContact(req, cb) {
        let resp = new AddUserContactResponse();
        this.request("AddUserContact", req, resp, cb);
    }

    /**
     * This API is used to get the daily space data of top databases consuming the most instance space. The data is daily collected by DBbrain during a specified time period. The returned results are sorted by size by default.
     * @param {DescribeTopSpaceSchemaTimeSeriesRequest} req
     * @param {function(string, DescribeTopSpaceSchemaTimeSeriesResponse):void} cb
     * @public
     */
    DescribeTopSpaceSchemaTimeSeries(req, cb) {
        let resp = new DescribeTopSpaceSchemaTimeSeriesResponse();
        this.request("DescribeTopSpaceSchemaTimeSeries", req, resp, cb);
    }

    /**
     * This API is used to create a session killing task.
     * @param {CreateKillTaskRequest} req
     * @param {function(string, CreateKillTaskResponse):void} cb
     * @public
     */
    CreateKillTask(req, cb) {
        let resp = new CreateKillTaskResponse();
        this.request("CreateKillTask", req, resp, cb);
    }

    /**
     * This API is used to get SQL statement optimization suggestions. It is free of charge for a limited time and will be charged after DBbrain is commercialized.
     * @param {DescribeUserSqlAdviceRequest} req
     * @param {function(string, DescribeUserSqlAdviceResponse):void} cb
     * @public
     */
    DescribeUserSqlAdvice(req, cb) {
        let resp = new DescribeUserSqlAdviceResponse();
        this.request("DescribeUserSqlAdvice", req, resp, cb);
    }

    /**
     * This API is used to get the daily space data of top tables consuming the most instance space. The data is daily collected by DBbrain during a specified time period. The returned results are sorted by size by default.
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
     * This API is used to interrupt the current session by session ID. It needs to be called twice to commit the session interruption task in two stages. In the pre-commit stage, the stage value is `Prepare`, and the returned value is `SqlExecId`. In the commit stage, the stage value is `Commit`, and `SqlExecId` will be passed in as a parameter. Then, the session process will be terminated.
     * @param {KillMySqlThreadsRequest} req
     * @param {function(string, KillMySqlThreadsResponse):void} cb
     * @public
     */
    KillMySqlThreads(req, cb) {
        let resp = new KillMySqlThreadsResponse();
        this.request("KillMySqlThreads", req, resp, cb);
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

    /**
     * This API is used to query the result of the session killing task executed by the Redis proxy node. The async task ID (an input parameter) is obtained after the API `CreateProxySessionKillTask` is successfully called. Currently, the only valid value of `product` is `redis`.
     * @param {DescribeProxySessionKillTasksRequest} req
     * @param {function(string, DescribeProxySessionKillTasksResponse):void} cb
     * @public
     */
    DescribeProxySessionKillTasks(req, cb) {
        let resp = new DescribeProxySessionKillTasksResponse();
        this.request("DescribeProxySessionKillTasks", req, resp, cb);
    }


}
module.exports = DbbrainClient;
