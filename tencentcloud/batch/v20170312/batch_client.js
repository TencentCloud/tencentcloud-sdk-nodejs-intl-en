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
const EventVar = models.EventVar;
const AnonymousComputeEnv = models.AnonymousComputeEnv;
const DeleteComputeEnvResponse = models.DeleteComputeEnvResponse;
const ComputeEnvData = models.ComputeEnvData;
const Authentication = models.Authentication;
const RetryJobsResponse = models.RetryJobsResponse;
const TerminateComputeNodeRequest = models.TerminateComputeNodeRequest;
const DescribeTaskLogsRequest = models.DescribeTaskLogsRequest;
const AgentRunningMode = models.AgentRunningMode;
const EnvData = models.EnvData;
const DescribeTaskTemplatesRequest = models.DescribeTaskTemplatesRequest;
const Notification = models.Notification;
const SystemDisk = models.SystemDisk;
const Task = models.Task;
const InstanceTypeConfig = models.InstanceTypeConfig;
const Externals = models.Externals;
const TerminateComputeNodesResponse = models.TerminateComputeNodesResponse;
const DescribeComputeEnvActivitiesResponse = models.DescribeComputeEnvActivitiesResponse;
const TaskInstanceMetrics = models.TaskInstanceMetrics;
const TaskInstanceLog = models.TaskInstanceLog;
const MountDataDisk = models.MountDataDisk;
const TaskView = models.TaskView;
const Tag = models.Tag;
const DescribeComputeEnvResponse = models.DescribeComputeEnvResponse;
const TerminateJobRequest = models.TerminateJobRequest;
const DetachInstancesResponse = models.DetachInstancesResponse;
const Application = models.Application;
const OutputMappingConfig = models.OutputMappingConfig;
const AttachInstancesResponse = models.AttachInstancesResponse;
const ComputeNodeMetrics = models.ComputeNodeMetrics;
const TaskMetrics = models.TaskMetrics;
const TerminateComputeNodesRequest = models.TerminateComputeNodesRequest;
const LocalDiskType = models.LocalDiskType;
const DescribeComputeEnvActivitiesRequest = models.DescribeComputeEnvActivitiesRequest;
const CreateTaskTemplateRequest = models.CreateTaskTemplateRequest;
const DeleteComputeEnvRequest = models.DeleteComputeEnvRequest;
const CreateComputeEnvRequest = models.CreateComputeEnvRequest;
const DescribeComputeEnvCreateInfoResponse = models.DescribeComputeEnvCreateInfoResponse;
const TerminateJobResponse = models.TerminateJobResponse;
const ComputeEnvCreateInfo = models.ComputeEnvCreateInfo;
const DescribeComputeEnvCreateInfosRequest = models.DescribeComputeEnvCreateInfosRequest;
const DescribeComputeEnvRequest = models.DescribeComputeEnvRequest;
const InstanceMarketOptionsRequest = models.InstanceMarketOptionsRequest;
const DescribeTaskTemplatesResponse = models.DescribeTaskTemplatesResponse;
const DeleteJobRequest = models.DeleteJobRequest;
const DescribeTaskLogsResponse = models.DescribeTaskLogsResponse;
const DeleteTaskTemplatesRequest = models.DeleteTaskTemplatesRequest;
const DescribeJobResponse = models.DescribeJobResponse;
const DescribeComputeEnvCreateInfoRequest = models.DescribeComputeEnvCreateInfoRequest;
const ModifyTaskTemplateRequest = models.ModifyTaskTemplateRequest;
const DataDisk = models.DataDisk;
const NamedComputeEnv = models.NamedComputeEnv;
const DeleteJobResponse = models.DeleteJobResponse;
const EventConfig = models.EventConfig;
const SpotMarketOptions = models.SpotMarketOptions;
const LoginSettings = models.LoginSettings;
const DetachInstancesRequest = models.DetachInstancesRequest;
const Instance = models.Instance;
const OutputMapping = models.OutputMapping;
const EnhancedService = models.EnhancedService;
const RunAutomationServiceEnabled = models.RunAutomationServiceEnabled;
const DescribeJobSubmitInfoResponse = models.DescribeJobSubmitInfoResponse;
const DescribeComputeEnvCreateInfosResponse = models.DescribeComputeEnvCreateInfosResponse;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DescribeJobRequest = models.DescribeJobRequest;
const RedirectInfo = models.RedirectInfo;
const DescribeInstanceCategoriesResponse = models.DescribeInstanceCategoriesResponse;
const ModifyTaskTemplateResponse = models.ModifyTaskTemplateResponse;
const InputMapping = models.InputMapping;
const RedirectLocalInfo = models.RedirectLocalInfo;
const DescribeJobSubmitInfoRequest = models.DescribeJobSubmitInfoRequest;
const Dependence = models.Dependence;
const Filter = models.Filter;
const CreateComputeEnvResponse = models.CreateComputeEnvResponse;
const Docker = models.Docker;
const ModifyComputeEnvResponse = models.ModifyComputeEnvResponse;
const Placement = models.Placement;
const ComputeNode = models.ComputeNode;
const ItemPrice = models.ItemPrice;
const InstanceTypeQuotaItem = models.InstanceTypeQuotaItem;
const CreateTaskTemplateResponse = models.CreateTaskTemplateResponse;
const StorageBlock = models.StorageBlock;
const DescribeJobsRequest = models.DescribeJobsRequest;
const TaskTemplateView = models.TaskTemplateView;
const InstanceTypeOptions = models.InstanceTypeOptions;
const DeleteTaskTemplatesResponse = models.DeleteTaskTemplatesResponse;
const DescribeCvmZoneInstanceConfigInfosRequest = models.DescribeCvmZoneInstanceConfigInfosRequest;
const TerminateTaskInstanceRequest = models.TerminateTaskInstanceRequest;
const TerminateTaskInstanceResponse = models.TerminateTaskInstanceResponse;
const RetryJobsRequest = models.RetryJobsRequest;
const TaskInstanceView = models.TaskInstanceView;
const DescribeAvailableCvmInstanceTypesResponse = models.DescribeAvailableCvmInstanceTypesResponse;
const DescribeTaskResponse = models.DescribeTaskResponse;
const InstanceCategoryItem = models.InstanceCategoryItem;
const ComputeEnvView = models.ComputeEnvView;
const DescribeComputeEnvsResponse = models.DescribeComputeEnvsResponse;
const DescribeTaskRequest = models.DescribeTaskRequest;
const AttachInstancesRequest = models.AttachInstancesRequest;
const DescribeComputeEnvsRequest = models.DescribeComputeEnvsRequest;
const DescribeCvmZoneInstanceConfigInfosResponse = models.DescribeCvmZoneInstanceConfigInfosResponse;
const OutputMappingOption = models.OutputMappingOption;
const DescribeJobsResponse = models.DescribeJobsResponse;
const Activity = models.Activity;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const TerminateComputeNodeResponse = models.TerminateComputeNodeResponse;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const DescribeAvailableCvmInstanceTypesRequest = models.DescribeAvailableCvmInstanceTypesRequest;
const DescribeInstanceCategoriesRequest = models.DescribeInstanceCategoriesRequest;
const ModifyComputeEnvRequest = models.ModifyComputeEnvRequest;
const InternetAccessible = models.InternetAccessible;
const JobView = models.JobView;
const EnvVar = models.EnvVar;


/**
 * batch client
 * @class
 */
class BatchClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("batch.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * This API is used to query compute environment details.
     * @param {DescribeComputeEnvRequest} req
     * @param {function(string, DescribeComputeEnvResponse):void} cb
     * @public
     */
    DescribeComputeEnv(req, cb) {
        let resp = new DescribeComputeEnvResponse();
        this.request("DescribeComputeEnv", req, resp, cb);
    }

    /**
     * This API is used to create a task template.
     * @param {CreateTaskTemplateRequest} req
     * @param {function(string, CreateTaskTemplateResponse):void} cb
     * @public
     */
    CreateTaskTemplate(req, cb) {
        let resp = new CreateTaskTemplateResponse();
        this.request("CreateTaskTemplate", req, resp, cb);
    }

    /**
     * This API is used to terminate a compute node.
Termination is allowed for nodes in the CREATED, CREATION_FAILED, RUNNING or ABNORMAL state.
     * @param {TerminateComputeNodeRequest} req
     * @param {function(string, TerminateComputeNodeResponse):void} cb
     * @public
     */
    TerminateComputeNode(req, cb) {
        let resp = new TerminateComputeNodeResponse();
        this.request("TerminateComputeNode", req, resp, cb);
    }

    /**
     * This API is used to query the overview information of several jobs.
     * @param {DescribeJobsRequest} req
     * @param {function(string, DescribeJobsResponse):void} cb
     * @public
     */
    DescribeJobs(req, cb) {
        let resp = new DescribeJobsResponse();
        this.request("DescribeJobs", req, resp, cb);
    }

    /**
     * This API is used to view the information of available CVM model configurations.
     * @param {DescribeAvailableCvmInstanceTypesRequest} req
     * @param {function(string, DescribeAvailableCvmInstanceTypesResponse):void} cb
     * @public
     */
    DescribeAvailableCvmInstanceTypes(req, cb) {
        let resp = new DescribeAvailableCvmInstanceTypesResponse();
        this.request("DescribeAvailableCvmInstanceTypes", req, resp, cb);
    }

    /**
     * This API is used to add existing instances to the compute environment.
Requirements: <br/>
1. The instance is not in the batch compute system.<br/>
2. The instance is in “Running” status.<br/>
3. Spot instances are not supported.<b/>

For instances added to the compute environment, their UserData will be reset, and the operating systems will be reinstalled.
     * @param {AttachInstancesRequest} req
     * @param {function(string, AttachInstancesResponse):void} cb
     * @public
     */
    AttachInstances(req, cb) {
        let resp = new AttachInstancesResponse();
        this.request("AttachInstances", req, resp, cb);
    }

    /**
     * This API is used to create a compute environment.
     * @param {CreateComputeEnvRequest} req
     * @param {function(string, CreateComputeEnvResponse):void} cb
     * @public
     */
    CreateComputeEnv(req, cb) {
        let resp = new CreateComputeEnvResponse();
        this.request("CreateComputeEnv", req, resp, cb);
    }

    /**
     * This API is used to delete a compute environment.
     * @param {DeleteComputeEnvRequest} req
     * @param {function(string, DeleteComputeEnvResponse):void} cb
     * @public
     */
    DeleteComputeEnv(req, cb) {
        let resp = new DeleteComputeEnvResponse();
        this.request("DeleteComputeEnv", req, resp, cb);
    }

    /**
     * This API is used to remove instances that from compute environment. 
     * @param {DetachInstancesRequest} req
     * @param {function(string, DetachInstancesResponse):void} cb
     * @public
     */
    DetachInstances(req, cb) {
        let resp = new DetachInstancesResponse();
        this.request("DetachInstances", req, resp, cb);
    }

    /**
     * This API is used to get the standard outputs and standard error logs of multiple task instances.
     * @param {DescribeTaskLogsRequest} req
     * @param {function(string, DescribeTaskLogsResponse):void} cb
     * @public
     */
    DescribeTaskLogs(req, cb) {
        let resp = new DescribeTaskLogsResponse();
        this.request("DescribeTaskLogs", req, resp, cb);
    }

    /**
     * This API is used to terminate a job.
Termination is prohibited if a job is in the `SUBMITTED` state and does not take effect if it is in the `SUCCEED` state.
Job termination is an asynchronous process, and the time it takes to complete the entire process is directly proportional to the total number of tasks. The effect of terminating a job is equivalent to performing the TerminateTaskInstance operation on all the task instances contained in the job. For more information on the specific effect and usage, see TerminateTaskInstance.
     * @param {TerminateJobRequest} req
     * @param {function(string, TerminateJobResponse):void} cb
     * @public
     */
    TerminateJob(req, cb) {
        let resp = new TerminateJobResponse();
        this.request("TerminateJob", req, resp, cb);
    }

    /**
     * This API is used to query the details of a specified task, including information of the task instances inside the task.
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        let resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }

    /**
     * This API is used to get the model configuration information of the availability zone of BatchCompute.
     * @param {DescribeCvmZoneInstanceConfigInfosRequest} req
     * @param {function(string, DescribeCvmZoneInstanceConfigInfosResponse):void} cb
     * @public
     */
    DescribeCvmZoneInstanceConfigInfos(req, cb) {
        let resp = new DescribeCvmZoneInstanceConfigInfosResponse();
        this.request("DescribeCvmZoneInstanceConfigInfos", req, resp, cb);
    }

    /**
     * This API is used to query the details of a job, including internal task (`Task`) and dependency (`Dependence`) information.
     * @param {DescribeJobRequest} req
     * @param {function(string, DescribeJobResponse):void} cb
     * @public
     */
    DescribeJob(req, cb) {
        let resp = new DescribeJobResponse();
        this.request("DescribeJob", req, resp, cb);
    }

    /**
     * This API is used to terminate compute nodes in batches. It is not allowed to repeatedly terminate the same node.
     * @param {TerminateComputeNodesRequest} req
     * @param {function(string, TerminateComputeNodesResponse):void} cb
     * @public
     */
    TerminateComputeNodes(req, cb) {
        let resp = new TerminateComputeNodesResponse();
        this.request("TerminateComputeNodes", req, resp, cb);
    }

    /**
     * This API is used to query the information of task templates.
     * @param {DescribeTaskTemplatesRequest} req
     * @param {function(string, DescribeTaskTemplatesResponse):void} cb
     * @public
     */
    DescribeTaskTemplates(req, cb) {
        let resp = new DescribeTaskTemplatesResponse();
        this.request("DescribeTaskTemplates", req, resp, cb);
    }

    /**
     * Currently, CVM instance families are classified into different category, and each category contains several instance families. This API is used to query the instance category information.
     * @param {DescribeInstanceCategoriesRequest} req
     * @param {function(string, DescribeInstanceCategoriesResponse):void} cb
     * @public
     */
    DescribeInstanceCategories(req, cb) {
        let resp = new DescribeInstanceCategoriesResponse();
        this.request("DescribeInstanceCategories", req, resp, cb);
    }

    /**
     * This API is used to delete task template information.
     * @param {DeleteTaskTemplatesRequest} req
     * @param {function(string, DeleteTaskTemplatesResponse):void} cb
     * @public
     */
    DeleteTaskTemplates(req, cb) {
        let resp = new DeleteTaskTemplatesResponse();
        this.request("DeleteTaskTemplates", req, resp, cb);
    }

    /**
     * This API is used to terminate a task instance.
`SUCCEED` and `FAILED` task instances: No action
`SUBMITTED`, `PENDING`, and `RUNNABLE` task instances: Change status to `FAILED`.
`STARTING`, `RUNNING` and `FAILED_INTERRUPTED` task instances: If `EnvId` is not specified, the CVM instance is terminated, and then the task status goes to `FAILED`. If `EnvId` is specified, the task instance changes to `FAILED`, then the related CVM instance is restarted. 
`FAILED_INTERRUPTED` task instances: The related resources and quotas will be released only after the termination actually succeeds.
     * @param {TerminateTaskInstanceRequest} req
     * @param {function(string, TerminateTaskInstanceResponse):void} cb
     * @public
     */
    TerminateTaskInstance(req, cb) {
        let resp = new TerminateTaskInstanceResponse();
        this.request("TerminateTaskInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a compute environment.
     * @param {ModifyComputeEnvRequest} req
     * @param {function(string, ModifyComputeEnvResponse):void} cb
     * @public
     */
    ModifyComputeEnv(req, cb) {
        let resp = new ModifyComputeEnvResponse();
        this.request("ModifyComputeEnv", req, resp, cb);
    }

    /**
     * This API is used to query the submission information of the specified job, with the return including the job submission information used as input parameters in the JobId and SubmitJob APIs.
     * @param {DescribeJobSubmitInfoRequest} req
     * @param {function(string, DescribeJobSubmitInfoResponse):void} cb
     * @public
     */
    DescribeJobSubmitInfo(req, cb) {
        let resp = new DescribeJobSubmitInfoResponse();
        this.request("DescribeJobSubmitInfo", req, resp, cb);
    }

    /**
     * This API is used to query the compute environment creation information.
     * @param {DescribeComputeEnvCreateInfoRequest} req
     * @param {function(string, DescribeComputeEnvCreateInfoResponse):void} cb
     * @public
     */
    DescribeComputeEnvCreateInfo(req, cb) {
        let resp = new DescribeComputeEnvCreateInfoResponse();
        this.request("DescribeComputeEnvCreateInfo", req, resp, cb);
    }

    /**
     * This API is used to query the information of activities in the compute environment.
     * @param {DescribeComputeEnvActivitiesRequest} req
     * @param {function(string, DescribeComputeEnvActivitiesResponse):void} cb
     * @public
     */
    DescribeComputeEnvActivities(req, cb) {
        let resp = new DescribeComputeEnvActivitiesResponse();
        this.request("DescribeComputeEnvActivities", req, resp, cb);
    }

    /**
     * This API is used to view the list of information of compute environment creation, including name, description, type, environment parameters, notifications, and number of desired nodes.
     * @param {DescribeComputeEnvCreateInfosRequest} req
     * @param {function(string, DescribeComputeEnvCreateInfosResponse):void} cb
     * @public
     */
    DescribeComputeEnvCreateInfos(req, cb) {
        let resp = new DescribeComputeEnvCreateInfosResponse();
        this.request("DescribeComputeEnvCreateInfos", req, resp, cb);
    }

    /**
     * This API is used to delete a job.
When a job is deleted, all related information is deleted and the job cannot be queried.
To delete a job, the job and all its task instances must be in SUCCEED or FAILED status.
     * @param {DeleteJobRequest} req
     * @param {function(string, DeleteJobResponse):void} cb
     * @public
     */
    DeleteJob(req, cb) {
        let resp = new DeleteJobResponse();
        this.request("DeleteJob", req, resp, cb);
    }

    /**
     * This API is used to get the list of compute environments.
     * @param {DescribeComputeEnvsRequest} req
     * @param {function(string, DescribeComputeEnvsResponse):void} cb
     * @public
     */
    DescribeComputeEnvs(req, cb) {
        let resp = new DescribeComputeEnvsResponse();
        this.request("DescribeComputeEnvs", req, resp, cb);
    }

    /**
     * This API is used to modify a task template.
     * @param {ModifyTaskTemplateRequest} req
     * @param {function(string, ModifyTaskTemplateResponse):void} cb
     * @public
     */
    ModifyTaskTemplate(req, cb) {
        let resp = new ModifyTaskTemplateResponse();
        this.request("ModifyTaskTemplate", req, resp, cb);
    }

    /**
     * This API is used to retry the failed task instances in a job.
Job retry is supported only if a job is in the "FAILED" state. After the retry operation succeeds, the job will retry the failing task instances in each task in turn according to the task dependencies specified in the "DAG". The history information of the task instances will be reset, the instances will participate in subsequent scheduling and execution as if they are run for the first time.
     * @param {RetryJobsRequest} req
     * @param {function(string, RetryJobsResponse):void} cb
     * @public
     */
    RetryJobs(req, cb) {
        let resp = new RetryJobsResponse();
        this.request("RetryJobs", req, resp, cb);
    }


}
module.exports = BatchClient;
