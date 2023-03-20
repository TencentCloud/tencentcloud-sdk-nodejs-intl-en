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
const DescribeResultDownloadResponse = models.DescribeResultDownloadResponse;
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const CreateSparkAppTaskRequest = models.CreateSparkAppTaskRequest;
const SuspendResumeDataEngineResponse = models.SuspendResumeDataEngineResponse;
const KVPair = models.KVPair;
const TableBaseInfo = models.TableBaseInfo;
const GenerateCreateMangedTableSqlResponse = models.GenerateCreateMangedTableSqlResponse;
const CreateInternalTableRequest = models.CreateInternalTableRequest;
const Task = models.Task;
const DescribeSparkAppJobRequest = models.DescribeSparkAppJobRequest;
const TasksInfo = models.TasksInfo;
const CreateSparkAppTaskResponse = models.CreateSparkAppTaskResponse;
const CancelTaskRequest = models.CancelTaskRequest;
const TaskResponseInfo = models.TaskResponseInfo;
const CreateTasksRequest = models.CreateTasksRequest;
const CreateTaskResponse = models.CreateTaskResponse;
const DeleteSparkAppResponse = models.DeleteSparkAppResponse;
const CreateResultDownloadResponse = models.CreateResultDownloadResponse;
const CreateSparkAppResponse = models.CreateSparkAppResponse;
const SuspendResumeDataEngineRequest = models.SuspendResumeDataEngineRequest;
const TaskResultInfo = models.TaskResultInfo;
const DescribeSparkAppJobsResponse = models.DescribeSparkAppJobsResponse;
const TasksOverview = models.TasksOverview;
const DeleteSparkAppRequest = models.DeleteSparkAppRequest;
const Execution = models.Execution;
const DescribeSparkAppJobsRequest = models.DescribeSparkAppJobsRequest;
const CreateTasksResponse = models.CreateTasksResponse;
const DescribeTasksResponse = models.DescribeTasksResponse;
const CreateSparkAppRequest = models.CreateSparkAppRequest;
const DescribeSparkAppTasksResponse = models.DescribeSparkAppTasksResponse;
const Column = models.Column;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const Filter = models.Filter;
const CreateTaskRequest = models.CreateTaskRequest;
const ModifySparkAppResponse = models.ModifySparkAppResponse;
const CreateInternalTableResponse = models.CreateInternalTableResponse;
const SparkJobInfo = models.SparkJobInfo;
const DescribeSparkAppTasksRequest = models.DescribeSparkAppTasksRequest;
const Property = models.Property;
const GenerateCreateMangedTableSqlRequest = models.GenerateCreateMangedTableSqlRequest;
const CancelTaskResponse = models.CancelTaskResponse;
const DataGovernPolicy = models.DataGovernPolicy;
const ModifyGovernEventRuleResponse = models.ModifyGovernEventRuleResponse;
const SQLTask = models.SQLTask;
const CreateResultDownloadRequest = models.CreateResultDownloadRequest;
const DescribeSparkAppJobResponse = models.DescribeSparkAppJobResponse;
const ModifySparkAppRequest = models.ModifySparkAppRequest;
const StreamingStatistics = models.StreamingStatistics;
const ModifyGovernEventRuleRequest = models.ModifyGovernEventRuleRequest;
const TPartition = models.TPartition;
const TColumn = models.TColumn;
const DescribeResultDownloadRequest = models.DescribeResultDownloadRequest;


/**
 * dlc client
 * @class
 */
class DlcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dlc.tencentcloudapi.com", "2021-01-25", credential, region, profile);
    }
    
    /**
     * This API is used to create a SQL query task. (We recommend you use the `CreateTasks` API instead.)
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * This API is used to suspend or resume a data engine.
     * @param {SuspendResumeDataEngineRequest} req
     * @param {function(string, SuspendResumeDataEngineResponse):void} cb
     * @public
     */
    SuspendResumeDataEngine(req, cb) {
        let resp = new SuspendResumeDataEngineResponse();
        this.request("SuspendResumeDataEngine", req, resp, cb);
    }

    /**
     * This API is used to query the list of tasks.
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * This API is used to query the result of a task.
     * @param {DescribeTaskResultRequest} req
     * @param {function(string, DescribeTaskResultResponse):void} cb
     * @public
     */
    DescribeTaskResult(req, cb) {
        let resp = new DescribeTaskResultResponse();
        this.request("DescribeTaskResult", req, resp, cb);
    }

    /**
     * This API is used to delete a Spark application.
     * @param {DeleteSparkAppRequest} req
     * @param {function(string, DeleteSparkAppResponse):void} cb
     * @public
     */
    DeleteSparkApp(req, cb) {
        let resp = new DeleteSparkAppResponse();
        this.request("DeleteSparkApp", req, resp, cb);
    }

    /**
     * This API is used to update a Spark application.
     * @param {ModifySparkAppRequest} req
     * @param {function(string, ModifySparkAppResponse):void} cb
     * @public
     */
    ModifySparkApp(req, cb) {
        let resp = new ModifySparkAppResponse();
        this.request("ModifySparkApp", req, resp, cb);
    }

    /**
     * This API is used to create a managed internal table. It has been disused.
     * @param {CreateInternalTableRequest} req
     * @param {function(string, CreateInternalTableResponse):void} cb
     * @public
     */
    CreateInternalTable(req, cb) {
        let resp = new CreateInternalTableResponse();
        this.request("CreateInternalTable", req, resp, cb);
    }

    /**
     * This API is used to create a query result download task.
     * @param {CreateResultDownloadRequest} req
     * @param {function(string, CreateResultDownloadResponse):void} cb
     * @public
     */
    CreateResultDownload(req, cb) {
        let resp = new CreateResultDownloadResponse();
        this.request("CreateResultDownload", req, resp, cb);
    }

    /**
     * This API is used to generate SQL statements for creating a managed table.
     * @param {GenerateCreateMangedTableSqlRequest} req
     * @param {function(string, GenerateCreateMangedTableSqlResponse):void} cb
     * @public
     */
    GenerateCreateMangedTableSql(req, cb) {
        let resp = new GenerateCreateMangedTableSqlResponse();
        this.request("GenerateCreateMangedTableSql", req, resp, cb);
    }

    /**
     * This API is used to query the list of running task instances of a Spark application.
     * @param {DescribeSparkAppTasksRequest} req
     * @param {function(string, DescribeSparkAppTasksResponse):void} cb
     * @public
     */
    DescribeSparkAppTasks(req, cb) {
        let resp = new DescribeSparkAppTasksResponse();
        this.request("DescribeSparkAppTasks", req, resp, cb);
    }

    /**
     * This API is used to get the list of Spark applications.
     * @param {DescribeSparkAppJobsRequest} req
     * @param {function(string, DescribeSparkAppJobsResponse):void} cb
     * @public
     */
    DescribeSparkAppJobs(req, cb) {
        let resp = new DescribeSparkAppJobsResponse();
        this.request("DescribeSparkAppJobs", req, resp, cb);
    }

    /**
     * This API is used to change data governance event thresholds.
     * @param {ModifyGovernEventRuleRequest} req
     * @param {function(string, ModifyGovernEventRuleResponse):void} cb
     * @public
     */
    ModifyGovernEventRule(req, cb) {
        let resp = new ModifyGovernEventRuleResponse();
        this.request("ModifyGovernEventRule", req, resp, cb);
    }

    /**
     * This API is used to create a Spark application.
     * @param {CreateSparkAppRequest} req
     * @param {function(string, CreateSparkAppResponse):void} cb
     * @public
     */
    CreateSparkApp(req, cb) {
        let resp = new CreateSparkAppResponse();
        this.request("CreateSparkApp", req, resp, cb);
    }

    /**
     * This API is used to cancel a task.
     * @param {CancelTaskRequest} req
     * @param {function(string, CancelTaskResponse):void} cb
     * @public
     */
    CancelTask(req, cb) {
        let resp = new CancelTaskResponse();
        this.request("CancelTask", req, resp, cb);
    }

    /**
     * This API is used to create tasks in batches.
     * @param {CreateTasksRequest} req
     * @param {function(string, CreateTasksResponse):void} cb
     * @public
     */
    CreateTasks(req, cb) {
        let resp = new CreateTasksResponse();
        this.request("CreateTasks", req, resp, cb);
    }

    /**
     * This API is used to query a specific Spark application.
     * @param {DescribeSparkAppJobRequest} req
     * @param {function(string, DescribeSparkAppJobResponse):void} cb
     * @public
     */
    DescribeSparkAppJob(req, cb) {
        let resp = new DescribeSparkAppJobResponse();
        this.request("DescribeSparkAppJob", req, resp, cb);
    }

    /**
     * This API is used to create a Spark task.
     * @param {CreateSparkAppTaskRequest} req
     * @param {function(string, CreateSparkAppTaskResponse):void} cb
     * @public
     */
    CreateSparkAppTask(req, cb) {
        let resp = new CreateSparkAppTaskResponse();
        this.request("CreateSparkAppTask", req, resp, cb);
    }

    /**
     * This API is used to get a query result download task.
     * @param {DescribeResultDownloadRequest} req
     * @param {function(string, DescribeResultDownloadResponse):void} cb
     * @public
     */
    DescribeResultDownload(req, cb) {
        let resp = new DescribeResultDownloadResponse();
        this.request("DescribeResultDownload", req, resp, cb);
    }


}
module.exports = DlcClient;
