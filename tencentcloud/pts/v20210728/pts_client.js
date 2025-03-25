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
const DescribeCronJobsRequest = models.DescribeCronJobsRequest;
const UpdateJobRequest = models.UpdateJobRequest;
const UpdateCronJobResponse = models.UpdateCronJobResponse;
const DescribeSampleMatrixQueryResponse = models.DescribeSampleMatrixQueryResponse;
const DescribeSampleLogsRequest = models.DescribeSampleLogsRequest;
const DeleteJobsRequest = models.DeleteJobsRequest;
const AlertChannelRecord = models.AlertChannelRecord;
const DescribeAlertRecordsRequest = models.DescribeAlertRecordsRequest;
const DeleteAlertChannelResponse = models.DeleteAlertChannelResponse;
const DescribeLabelValuesRequest = models.DescribeLabelValuesRequest;
const AbortCronJobsResponse = models.AbortCronJobsResponse;
const DescribeRequestSummaryResponse = models.DescribeRequestSummaryResponse;
const DescribeScenarioWithJobsRequest = models.DescribeScenarioWithJobsRequest;
const CreateCronJobResponse = models.CreateCronJobResponse;
const RestartCronJobsResponse = models.RestartCronJobsResponse;
const SLAPolicy = models.SLAPolicy;
const DNSConfig = models.DNSConfig;
const ScriptInfo = models.ScriptInfo;
const NormalLog = models.NormalLog;
const UpdateProjectRequest = models.UpdateProjectRequest;
const AbortJobResponse = models.AbortJobResponse;
const Project = models.Project;
const UpdateEnvironmentRequest = models.UpdateEnvironmentRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const Attributes = models.Attributes;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const UpdateScenarioResponse = models.UpdateScenarioResponse;
const File = models.File;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const CustomSample = models.CustomSample;
const CreateProjectRequest = models.CreateProjectRequest;
const AdjustJobSpeedRequest = models.AdjustJobSpeedRequest;
const DescribeRequestSummaryRequest = models.DescribeRequestSummaryRequest;
const HostAlias = models.HostAlias;
const CreateFileResponse = models.CreateFileResponse;
const DeleteProjectsResponse = models.DeleteProjectsResponse;
const GeoRegionsLoadItem = models.GeoRegionsLoadItem;
const UpdateEnvironmentResponse = models.UpdateEnvironmentResponse;
const LabelWithValues = models.LabelWithValues;
const Label = models.Label;
const ProtocolInfo = models.ProtocolInfo;
const VpcLoadDistribution = models.VpcLoadDistribution;
const SamplePair = models.SamplePair;
const CronJob = models.CronJob;
const DescribeLabelValuesResponse = models.DescribeLabelValuesResponse;
const InternalMetricQuery = models.InternalMetricQuery;
const Job = models.Job;
const DescribeAvailableMetricsRequest = models.DescribeAvailableMetricsRequest;
const CopyScenarioResponse = models.CopyScenarioResponse;
const DescribeSampleMatrixQueryRequest = models.DescribeSampleMatrixQueryRequest;
const GenerateTmpKeyResponse = models.GenerateTmpKeyResponse;
const Stage = models.Stage;
const DescribeFilesResponse = models.DescribeFilesResponse;
const DeleteProjectsRequest = models.DeleteProjectsRequest;
const UpdateFileScenarioRelationRequest = models.UpdateFileScenarioRelationRequest;
const ScenarioWithJobs = models.ScenarioWithJobs;
const DeleteJobsResponse = models.DeleteJobsResponse;
const TagSpec = models.TagSpec;
const AdjustJobSpeedResponse = models.AdjustJobSpeedResponse;
const ErrorSummary = models.ErrorSummary;
const CreateProjectResponse = models.CreateProjectResponse;
const DescribeSampleQueryRequest = models.DescribeSampleQueryRequest;
const DescribeSampleMatrixBatchQueryResponse = models.DescribeSampleMatrixBatchQueryResponse;
const DeleteEnvironmentsResponse = models.DeleteEnvironmentsResponse;
const SLALabel = models.SLALabel;
const AlertRecord = models.AlertRecord;
const RequestsPerSecond = models.RequestsPerSecond;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DeleteScenariosResponse = models.DeleteScenariosResponse;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;
const DescribeErrorSummaryRequest = models.DescribeErrorSummaryRequest;
const CopyScenarioRequest = models.CopyScenarioRequest;
const TestData = models.TestData;
const SampleLog = models.SampleLog;
const DomainNameConfig = models.DomainNameConfig;
const DescribeNormalLogsResponse = models.DescribeNormalLogsResponse;
const Notification = models.Notification;
const DescribeSampleBatchQueryRequest = models.DescribeSampleBatchQueryRequest;
const RestartCronJobsRequest = models.RestartCronJobsRequest;
const DeleteScenariosRequest = models.DeleteScenariosRequest;
const CreateAlertChannelResponse = models.CreateAlertChannelResponse;
const MetricInfo = models.MetricInfo;
const CreateAlertChannelRequest = models.CreateAlertChannelRequest;
const AlertRecordStatus = models.AlertRecordStatus;
const DescribeAlertChannelsRequest = models.DescribeAlertChannelsRequest;
const SLARule = models.SLARule;
const DescribeAvailableMetricsResponse = models.DescribeAvailableMetricsResponse;
const DescribeMetricLabelWithValuesResponse = models.DescribeMetricLabelWithValuesResponse;
const FileInfo = models.FileInfo;
const LoadSpec = models.LoadSpec;
const AlertChannel = models.AlertChannel;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const ScriptOrigin = models.ScriptOrigin;
const ScenarioRelatedJobsParams = models.ScenarioRelatedJobsParams;
const Credentials = models.Credentials;
const DescribeAlertChannelsResponse = models.DescribeAlertChannelsResponse;
const CreateCronJobRequest = models.CreateCronJobRequest;
const UpdateJobResponse = models.UpdateJobResponse;
const DescribeCheckSummaryRequest = models.DescribeCheckSummaryRequest;
const Filter = models.Filter;
const DeleteFilesResponse = models.DeleteFilesResponse;
const AggregationLegend = models.AggregationLegend;
const LoadSource = models.LoadSource;
const CustomSampleMatrix = models.CustomSampleMatrix;
const Load = models.Load;
const CreateFileRequest = models.CreateFileRequest;
const RequestSummary = models.RequestSummary;
const DeleteCronJobsRequest = models.DeleteCronJobsRequest;
const DescribeSampleLogsResponse = models.DescribeSampleLogsResponse;
const DescribeCronJobsResponse = models.DescribeCronJobsResponse;
const DescribeNormalLogsRequest = models.DescribeNormalLogsRequest;
const DescribeJobsRequest = models.DescribeJobsRequest;
const DescribeFilesRequest = models.DescribeFilesRequest;
const AbortCronJobsRequest = models.AbortCronJobsRequest;
const DescribeSampleMatrixBatchQueryRequest = models.DescribeSampleMatrixBatchQueryRequest;
const DescribeAlertRecordsResponse = models.DescribeAlertRecordsResponse;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const DescribeSampleQueryResponse = models.DescribeSampleQueryResponse;
const DeleteEnvironmentsRequest = models.DeleteEnvironmentsRequest;
const CreateScenarioRequest = models.CreateScenarioRequest;
const DescribeMetricLabelWithValuesRequest = models.DescribeMetricLabelWithValuesRequest;
const Scenario = models.Scenario;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const UpdateCronJobRequest = models.UpdateCronJobRequest;
const RegionDetail = models.RegionDetail;
const SampleStream = models.SampleStream;
const DescribeCheckSummaryResponse = models.DescribeCheckSummaryResponse;
const DescribeScenariosRequest = models.DescribeScenariosRequest;
const DescribeScenariosResponse = models.DescribeScenariosResponse;
const CreateScenarioResponse = models.CreateScenarioResponse;
const AbortJobRequest = models.AbortJobRequest;
const DeleteFilesRequest = models.DeleteFilesRequest;
const CheckSummary = models.CheckSummary;
const NotificationHook = models.NotificationHook;
const DescribeJobsResponse = models.DescribeJobsResponse;
const GenerateTmpKeyRequest = models.GenerateTmpKeyRequest;
const DescribeSampleBatchQueryResponse = models.DescribeSampleBatchQueryResponse;
const StartJobResponse = models.StartJobResponse;
const UpdateScenarioRequest = models.UpdateScenarioRequest;
const MetricLabelWithValues = models.MetricLabelWithValues;
const DeleteCronJobsResponse = models.DeleteCronJobsResponse;
const StartJobRequest = models.StartJobRequest;
const DescribeScenarioWithJobsResponse = models.DescribeScenarioWithJobsResponse;
const ReactionTimeRange = models.ReactionTimeRange;
const Concurrency = models.Concurrency;
const DeleteAlertChannelRequest = models.DeleteAlertChannelRequest;
const DescribeErrorSummaryResponse = models.DescribeErrorSummaryResponse;
const UpdateProjectResponse = models.UpdateProjectResponse;
const UpdateFileScenarioRelationResponse = models.UpdateFileScenarioRelationResponse;


/**
 * pts client
 * @class
 */
class PtsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("pts.intl.tencentcloudapi.com", "2021-07-28", credential, region, profile);
    }
    
    /**
     * This API is used to query scenarios with executed jobs.
     * @param {DescribeScenarioWithJobsRequest} req
     * @param {function(string, DescribeScenarioWithJobsResponse):void} cb
     * @public
     */
    DescribeScenarioWithJobs(req, cb) {
        let resp = new DescribeScenarioWithJobsResponse();
        this.request("DescribeScenarioWithJobs", req, resp, cb);
    }

    /**
     * This API is used to delete environments.
     * @param {DeleteEnvironmentsRequest} req
     * @param {function(string, DeleteEnvironmentsResponse):void} cb
     * @public
     */
    DeleteEnvironments(req, cb) {
        let resp = new DeleteEnvironmentsResponse();
        this.request("DeleteEnvironments", req, resp, cb);
    }

    /**
     * This API is used to update a job.
     * @param {UpdateJobRequest} req
     * @param {function(string, UpdateJobResponse):void} cb
     * @public
     */
    UpdateJob(req, cb) {
        let resp = new UpdateJobResponse();
        this.request("UpdateJob", req, resp, cb);
    }

    /**
     * This API is used to update a cron job.
     * @param {UpdateCronJobRequest} req
     * @param {function(string, UpdateCronJobResponse):void} cb
     * @public
     */
    UpdateCronJob(req, cb) {
        let resp = new UpdateCronJobResponse();
        this.request("UpdateCronJob", req, resp, cb);
    }

    /**
     * This API is used to create and start test job.
     * @param {StartJobRequest} req
     * @param {function(string, StartJobResponse):void} cb
     * @public
     */
    StartJob(req, cb) {
        let resp = new StartJobResponse();
        this.request("StartJob", req, resp, cb);
    }

    /**
     * This API is used to update a scenario.
     * @param {UpdateScenarioRequest} req
     * @param {function(string, UpdateScenarioResponse):void} cb
     * @public
     */
    UpdateScenario(req, cb) {
        let resp = new UpdateScenarioResponse();
        this.request("UpdateScenario", req, resp, cb);
    }

    /**
     * This API is used to query file list.
     * @param {DescribeFilesRequest} req
     * @param {function(string, DescribeFilesResponse):void} cb
     * @public
     */
    DescribeFiles(req, cb) {
        let resp = new DescribeFilesResponse();
        this.request("DescribeFiles", req, resp, cb);
    }

    /**
     * This API is used to delete projects.
     * @param {DeleteProjectsRequest} req
     * @param {function(string, DeleteProjectsResponse):void} cb
     * @public
     */
    DeleteProjects(req, cb) {
        let resp = new DeleteProjectsResponse();
        this.request("DeleteProjects", req, resp, cb);
    }

    /**
     * This API is used to query metrics and return metric content at a specific time point.
     * @param {DescribeSampleQueryRequest} req
     * @param {function(string, DescribeSampleQueryResponse):void} cb
     * @public
     */
    DescribeSampleQuery(req, cb) {
        let resp = new DescribeSampleQueryResponse();
        this.request("DescribeSampleQuery", req, resp, cb);
    }

    /**
     * This API is used to query job list.
     * @param {DescribeJobsRequest} req
     * @param {function(string, DescribeJobsResponse):void} cb
     * @public
     */
    DescribeJobs(req, cb) {
        let resp = new DescribeJobsResponse();
        this.request("DescribeJobs", req, resp, cb);
    }

    /**
     * This API is used to create a scenario.
     * @param {CreateScenarioRequest} req
     * @param {function(string, CreateScenarioResponse):void} cb
     * @public
     */
    CreateScenario(req, cb) {
        let resp = new CreateScenarioResponse();
        this.request("CreateScenario", req, resp, cb);
    }

    /**
     * This API is used to delete files.
     * @param {DeleteFilesRequest} req
     * @param {function(string, DeleteFilesResponse):void} cb
     * @public
     */
    DeleteFiles(req, cb) {
        let resp = new DeleteFilesResponse();
        this.request("DeleteFiles", req, resp, cb);
    }

    /**
     * This API is used to query region list.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This API is used to query checkpoint summary information.
     * @param {DescribeCheckSummaryRequest} req
     * @param {function(string, DescribeCheckSummaryResponse):void} cb
     * @public
     */
    DescribeCheckSummary(req, cb) {
        let resp = new DescribeCheckSummaryResponse();
        this.request("DescribeCheckSummary", req, resp, cb);
    }

    /**
     * This API is used to batch query metric matrices.
     * @param {DescribeSampleMatrixBatchQueryRequest} req
     * @param {function(string, DescribeSampleMatrixBatchQueryResponse):void} cb
     * @public
     */
    DescribeSampleMatrixBatchQuery(req, cb) {
        let resp = new DescribeSampleMatrixBatchQueryResponse();
        this.request("DescribeSampleMatrixBatchQuery", req, resp, cb);
    }

    /**
     * This API is used to query metric matrix.
     * @param {DescribeSampleMatrixQueryRequest} req
     * @param {function(string, DescribeSampleMatrixQueryResponse):void} cb
     * @public
     */
    DescribeSampleMatrixQuery(req, cb) {
        let resp = new DescribeSampleMatrixQueryResponse();
        this.request("DescribeSampleMatrixQuery", req, resp, cb);
    }

    /**
     * This API is used to query request summary information.
     * @param {DescribeRequestSummaryRequest} req
     * @param {function(string, DescribeRequestSummaryResponse):void} cb
     * @public
     */
    DescribeRequestSummary(req, cb) {
        let resp = new DescribeRequestSummaryResponse();
        this.request("DescribeRequestSummary", req, resp, cb);
    }

    /**
     * This API is used to delete scenarios.
     * @param {DeleteScenariosRequest} req
     * @param {function(string, DeleteScenariosResponse):void} cb
     * @public
     */
    DeleteScenarios(req, cb) {
        let resp = new DeleteScenariosResponse();
        this.request("DeleteScenarios", req, resp, cb);
    }

    /**
     * The API is used to query project list.
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }

    /**
     * This API is used to query alert records.
     * @param {DescribeAlertRecordsRequest} req
     * @param {function(string, DescribeAlertRecordsResponse):void} cb
     * @public
     */
    DescribeAlertRecords(req, cb) {
        let resp = new DescribeAlertRecordsResponse();
        this.request("DescribeAlertRecords", req, resp, cb);
    }

    /**
     * This API is used to query metrics in batch and return metric content at a specific time point.
     * @param {DescribeSampleBatchQueryRequest} req
     * @param {function(string, DescribeSampleBatchQueryResponse):void} cb
     * @public
     */
    DescribeSampleBatchQuery(req, cb) {
        let resp = new DescribeSampleBatchQueryResponse();
        this.request("DescribeSampleBatchQuery", req, resp, cb);
    }

    /**
     * This API is used to query alert recipient groups.
     * @param {DescribeAlertChannelsRequest} req
     * @param {function(string, DescribeAlertChannelsResponse):void} cb
     * @public
     */
    DescribeAlertChannels(req, cb) {
        let resp = new DescribeAlertChannelsResponse();
        this.request("DescribeAlertChannels", req, resp, cb);
    }

    /**
     * This API is used to query all supported metrics.
     * @param {DescribeAvailableMetricsRequest} req
     * @param {function(string, DescribeAvailableMetricsResponse):void} cb
     * @public
     */
    DescribeAvailableMetrics(req, cb) {
        let resp = new DescribeAvailableMetricsResponse();
        this.request("DescribeAvailableMetrics", req, resp, cb);
    }

    /**
     * This API is used to query label values.
     * @param {DescribeLabelValuesRequest} req
     * @param {function(string, DescribeLabelValuesResponse):void} cb
     * @public
     */
    DescribeLabelValues(req, cb) {
        let resp = new DescribeLabelValuesResponse();
        this.request("DescribeLabelValues", req, resp, cb);
    }

    /**
     * This API is used to stop cron jobs.
     * @param {AbortCronJobsRequest} req
     * @param {function(string, AbortCronJobsResponse):void} cb
     * @public
     */
    AbortCronJobs(req, cb) {
        let resp = new AbortCronJobsResponse();
        this.request("AbortCronJobs", req, resp, cb);
    }

    /**
     * This API is used to update relation between files and scenarios.
     * @param {UpdateFileScenarioRelationRequest} req
     * @param {function(string, UpdateFileScenarioRelationResponse):void} cb
     * @public
     */
    UpdateFileScenarioRelation(req, cb) {
        let resp = new UpdateFileScenarioRelationResponse();
        this.request("UpdateFileScenarioRelation", req, resp, cb);
    }

    /**
     * This API is used to restart cron jobs that have been aborted.
     * @param {RestartCronJobsRequest} req
     * @param {function(string, RestartCronJobsResponse):void} cb
     * @public
     */
    RestartCronJobs(req, cb) {
        let resp = new RestartCronJobsResponse();
        this.request("RestartCronJobs", req, resp, cb);
    }

    /**
     * This API is used to update environments.
     * @param {UpdateEnvironmentRequest} req
     * @param {function(string, UpdateEnvironmentResponse):void} cb
     * @public
     */
    UpdateEnvironment(req, cb) {
        let resp = new UpdateEnvironmentResponse();
        this.request("UpdateEnvironment", req, resp, cb);
    }

    /**
     * This API is used to create an alert recipient group.
     * @param {CreateAlertChannelRequest} req
     * @param {function(string, CreateAlertChannelResponse):void} cb
     * @public
     */
    CreateAlertChannel(req, cb) {
        let resp = new CreateAlertChannelResponse();
        this.request("CreateAlertChannel", req, resp, cb);
    }

    /**
     * This API is used to query the environment list.
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        let resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
    }

    /**
     * This API is used to delete jobs.
     * @param {DeleteJobsRequest} req
     * @param {function(string, DeleteJobsResponse):void} cb
     * @public
     */
    DeleteJobs(req, cb) {
        let resp = new DeleteJobsResponse();
        this.request("DeleteJobs", req, resp, cb);
    }

    /**
     * This API is used to query error summary information.
     * @param {DescribeErrorSummaryRequest} req
     * @param {function(string, DescribeErrorSummaryResponse):void} cb
     * @public
     */
    DescribeErrorSummary(req, cb) {
        let resp = new DescribeErrorSummaryResponse();
        this.request("DescribeErrorSummary", req, resp, cb);
    }

    /**
     * This API is used to query logs in performance testing, including engine logs and console logs.
     * @param {DescribeNormalLogsRequest} req
     * @param {function(string, DescribeNormalLogsResponse):void} cb
     * @public
     */
    DescribeNormalLogs(req, cb) {
        let resp = new DescribeNormalLogsResponse();
        this.request("DescribeNormalLogs", req, resp, cb);
    }

    /**
     * This API is used to copy a scenario.
     * @param {CopyScenarioRequest} req
     * @param {function(string, CopyScenarioResponse):void} cb
     * @public
     */
    CopyScenario(req, cb) {
        let resp = new CopyScenarioResponse();
        this.request("CopyScenario", req, resp, cb);
    }

    /**
     * This API is used to query sampled request logs.
     * @param {DescribeSampleLogsRequest} req
     * @param {function(string, DescribeSampleLogsResponse):void} cb
     * @public
     */
    DescribeSampleLogs(req, cb) {
        let resp = new DescribeSampleLogsResponse();
        this.request("DescribeSampleLogs", req, resp, cb);
    }

    /**
     * This API is used to create an environment.
     * @param {CreateEnvironmentRequest} req
     * @param {function(string, CreateEnvironmentResponse):void} cb
     * @public
     */
    CreateEnvironment(req, cb) {
        let resp = new CreateEnvironmentResponse();
        this.request("CreateEnvironment", req, resp, cb);
    }

    /**
     * This API is used to query scenario list.
     * @param {DescribeScenariosRequest} req
     * @param {function(string, DescribeScenariosResponse):void} cb
     * @public
     */
    DescribeScenarios(req, cb) {
        let resp = new DescribeScenariosResponse();
        this.request("DescribeScenarios", req, resp, cb);
    }

    /**
     * This API is used to delete cron jobs.
     * @param {DeleteCronJobsRequest} req
     * @param {function(string, DeleteCronJobsResponse):void} cb
     * @public
     */
    DeleteCronJobs(req, cb) {
        let resp = new DeleteCronJobsResponse();
        this.request("DeleteCronJobs", req, resp, cb);
    }

    /**
     * This API is used to list cron jobs, selecting all by default if a non-mandatory array parameter is empty.
     * @param {DescribeCronJobsRequest} req
     * @param {function(string, DescribeCronJobsResponse):void} cb
     * @public
     */
    DescribeCronJobs(req, cb) {
        let resp = new DescribeCronJobsResponse();
        this.request("DescribeCronJobs", req, resp, cb);
    }

    /**
     * This API is used to delete an alert recipient group.
     * @param {DeleteAlertChannelRequest} req
     * @param {function(string, DeleteAlertChannelResponse):void} cb
     * @public
     */
    DeleteAlertChannel(req, cb) {
        let resp = new DeleteAlertChannelResponse();
        this.request("DeleteAlertChannel", req, resp, cb);
    }

    /**
     * This API is used to create a file.
     * @param {CreateFileRequest} req
     * @param {function(string, CreateFileResponse):void} cb
     * @public
     */
    CreateFile(req, cb) {
        let resp = new CreateFileResponse();
        this.request("CreateFile", req, resp, cb);
    }

    /**
     * This API is used to adjust the target RPS of a job.
     * @param {AdjustJobSpeedRequest} req
     * @param {function(string, AdjustJobSpeedResponse):void} cb
     * @public
     */
    AdjustJobSpeed(req, cb) {
        let resp = new AdjustJobSpeedResponse();
        this.request("AdjustJobSpeed", req, resp, cb);
    }

    /**
     * This API is used to create a project.
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * This API is used to stop test job.
     * @param {AbortJobRequest} req
     * @param {function(string, AbortJobResponse):void} cb
     * @public
     */
    AbortJob(req, cb) {
        let resp = new AbortJobResponse();
        this.request("AbortJob", req, resp, cb);
    }

    /**
     * This API is used to update a project.
     * @param {UpdateProjectRequest} req
     * @param {function(string, UpdateProjectResponse):void} cb
     * @public
     */
    UpdateProject(req, cb) {
        let resp = new UpdateProjectResponse();
        this.request("UpdateProject", req, resp, cb);
    }

    /**
     * This API is used to generate temporary COS credentials.
     * @param {GenerateTmpKeyRequest} req
     * @param {function(string, GenerateTmpKeyResponse):void} cb
     * @public
     */
    GenerateTmpKey(req, cb) {
        let resp = new GenerateTmpKeyResponse();
        this.request("GenerateTmpKey", req, resp, cb);
    }

    /**
     * This API is used to query all labels and values of metrics
     * @param {DescribeMetricLabelWithValuesRequest} req
     * @param {function(string, DescribeMetricLabelWithValuesResponse):void} cb
     * @public
     */
    DescribeMetricLabelWithValues(req, cb) {
        let resp = new DescribeMetricLabelWithValuesResponse();
        this.request("DescribeMetricLabelWithValues", req, resp, cb);
    }

    /**
     * This API is used to create a cron job.
     * @param {CreateCronJobRequest} req
     * @param {function(string, CreateCronJobResponse):void} cb
     * @public
     */
    CreateCronJob(req, cb) {
        let resp = new CreateCronJobResponse();
        this.request("CreateCronJob", req, resp, cb);
    }


}
module.exports = PtsClient;
