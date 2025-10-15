/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
const CreateTaskResult = models.CreateTaskResult;
const ListDownstreamOpsTasksRequest = models.ListDownstreamOpsTasksRequest;
const RerunTaskInstancesAsyncResponse = models.RerunTaskInstancesAsyncResponse;
const UpdateCodeFileRequest = models.UpdateCodeFileRequest;
const ListAlarmMessages = models.ListAlarmMessages;
const CreateResourceFileRequest = models.CreateResourceFileRequest;
const TaskBaseAttribute = models.TaskBaseAttribute;
const UpdateTaskRequest = models.UpdateTaskRequest;
const ListDownstreamTaskInstancesResponse = models.ListDownstreamTaskInstancesResponse;
const ResourceFolder = models.ResourceFolder;
const UpdateWorkflowFolderResponse = models.UpdateWorkflowFolderResponse;
const UpdateWorkflowFolderRequest = models.UpdateWorkflowFolderRequest;
const ListTaskVersionsRequest = models.ListTaskVersionsRequest;
const GetCodeFileRequest = models.GetCodeFileRequest;
const ResourceFileItem = models.ResourceFileItem;
const UpdateTaskBrief = models.UpdateTaskBrief;
const ListOpsWorkflowsRequest = models.ListOpsWorkflowsRequest;
const CreateWorkflowFolderResponse = models.CreateWorkflowFolderResponse;
const WorkflowInfo = models.WorkflowInfo;
const StopSQLScriptRunResponse = models.StopSQLScriptRunResponse;
const ListOpsTasksResponse = models.ListOpsTasksResponse;
const ListTaskVersionsResponse = models.ListTaskVersionsResponse;
const ResourceFolderPage = models.ResourceFolderPage;
const UpdateOpsTasksOwnerResponse = models.UpdateOpsTasksOwnerResponse;
const ListDownstreamTasksResponse = models.ListDownstreamTasksResponse;
const DeleteWorkflowResponse = models.DeleteWorkflowResponse;
const OpsWorkflows = models.OpsWorkflows;
const ListOpsAlarmRulesResponse = models.ListOpsAlarmRulesResponse;
const CreateCodeFileResponse = models.CreateCodeFileResponse;
const UpdateOpsTasksOwnerRequest = models.UpdateOpsTasksOwnerRequest;
const DeleteResourceFolderResponse = models.DeleteResourceFolderResponse;
const KVMap = models.KVMap;
const ListWorkflowInfo = models.ListWorkflowInfo;
const ListResourceFilesResponse = models.ListResourceFilesResponse;
const ListDownstreamTaskInstancesRequest = models.ListDownstreamTaskInstancesRequest;
const ListTaskInstanceExecutionsRequest = models.ListTaskInstanceExecutionsRequest;
const ListUpstreamOpsTasksResponse = models.ListUpstreamOpsTasksResponse;
const DeleteTaskRequest = models.DeleteTaskRequest;
const UpdateWorkflowResponse = models.UpdateWorkflowResponse;
const NotebookSessionInfo = models.NotebookSessionInfo;
const ListOpsTasksPage = models.ListOpsTasksPage;
const DeleteWorkflowRequest = models.DeleteWorkflowRequest;
const CreateOpsAlarmRuleResponse = models.CreateOpsAlarmRuleResponse;
const DeleteOpsAlarmRuleResponse = models.DeleteOpsAlarmRuleResponse;
const GetTaskRequest = models.GetTaskRequest;
const ModifyAlarmRuleResult = models.ModifyAlarmRuleResult;
const AlarmMessage = models.AlarmMessage;
const ListResourceFilesRequest = models.ListResourceFilesRequest;
const GetOpsAlarmRuleResponse = models.GetOpsAlarmRuleResponse;
const UpdateTaskResult = models.UpdateTaskResult;
const GetResourceFileRequest = models.GetResourceFileRequest;
const UpdateTasksOwner = models.UpdateTasksOwner;
const TaskInstancePage = models.TaskInstancePage;
const GetOpsAsyncJobRequest = models.GetOpsAsyncJobRequest;
const DeleteCodeFolderResponse = models.DeleteCodeFolderResponse;
const PauseOpsTasksAsyncRequest = models.PauseOpsTasksAsyncRequest;
const TaskInstanceExecutions = models.TaskInstanceExecutions;
const UpdateResourceFileResult = models.UpdateResourceFileResult;
const SqlCreateResult = models.SqlCreateResult;
const UpdateResourceFileResponse = models.UpdateResourceFileResponse;
const CreateWorkflowRequest = models.CreateWorkflowRequest;
const AlarmWayWebHook = models.AlarmWayWebHook;
const TaskSchedulingParameter = models.TaskSchedulingParameter;
const CreateAlarmRuleData = models.CreateAlarmRuleData;
const SubmitTaskRequest = models.SubmitTaskRequest;
const InstanceLog = models.InstanceLog;
const GetResourceFileResponse = models.GetResourceFileResponse;
const CreateResourceFileResult = models.CreateResourceFileResult;
const UpdateSQLFolderRequest = models.UpdateSQLFolderRequest;
const BackfillInstance = models.BackfillInstance;
const ListUpstreamTaskInstancesResponse = models.ListUpstreamTaskInstancesResponse;
const CreateSQLFolderRequest = models.CreateSQLFolderRequest;
const UpdateWorkflowRequest = models.UpdateWorkflowRequest;
const KVPair = models.KVPair;
const GetOpsTaskResponse = models.GetOpsTaskResponse;
const SQLScriptConfig = models.SQLScriptConfig;
const JobExecutionDto = models.JobExecutionDto;
const CreateTaskSchedulerConfiguration = models.CreateTaskSchedulerConfiguration;
const CreateCodeFolderResponse = models.CreateCodeFolderResponse;
const ListUpstreamTaskInstancesRequest = models.ListUpstreamTaskInstancesRequest;
const CodeFolderNode = models.CodeFolderNode;
const UpdateOpsAlarmRuleResponse = models.UpdateOpsAlarmRuleResponse;
const UpdateSQLScriptResponse = models.UpdateSQLScriptResponse;
const SQLContentActionResult = models.SQLContentActionResult;
const CreateFolderResult = models.CreateFolderResult;
const SQLStopResult = models.SQLStopResult;
const ListWorkflowsRequest = models.ListWorkflowsRequest;
const RunSQLScriptRequest = models.RunSQLScriptRequest;
const ListDownstreamOpsTasksResponse = models.ListDownstreamOpsTasksResponse;
const TaskInstanceDetail = models.TaskInstanceDetail;
const ListTaskInstancesResponse = models.ListTaskInstancesResponse;
const UpdateResourceFolderResponse = models.UpdateResourceFolderResponse;
const SubmitTaskResult = models.SubmitTaskResult;
const ListSQLScriptRunsRequest = models.ListSQLScriptRunsRequest;
const CreateDataBackfillPlanRequest = models.CreateDataBackfillPlanRequest;
const GetTaskInstanceRequest = models.GetTaskInstanceRequest;
const TaskDependDto = models.TaskDependDto;
const ListUpstreamTasksResponse = models.ListUpstreamTasksResponse;
const DeleteWorkflowFolderRequest = models.DeleteWorkflowFolderRequest;
const ListSQLFolderContentsRequest = models.ListSQLFolderContentsRequest;
const RunSQLScriptResponse = models.RunSQLScriptResponse;
const DeleteSQLScriptRequest = models.DeleteSQLScriptRequest;
const GetOpsAlarmRuleRequest = models.GetOpsAlarmRuleRequest;
const ListTasksResponse = models.ListTasksResponse;
const GetOpsTaskCodeResponse = models.GetOpsTaskCodeResponse;
const ListWorkflowsResponse = models.ListWorkflowsResponse;
const CreateTaskRequest = models.CreateTaskRequest;
const ProjectInstanceStatisticsAlarmInfo = models.ProjectInstanceStatisticsAlarmInfo;
const ListCodeFolderContentsResponse = models.ListCodeFolderContentsResponse;
const GetTaskCodeResponse = models.GetTaskCodeResponse;
const InTaskParameter = models.InTaskParameter;
const DeleteResourceFileResult = models.DeleteResourceFileResult;
const UpdateTaskResponse = models.UpdateTaskResponse;
const DeleteSQLFolderResponse = models.DeleteSQLFolderResponse;
const GetTaskVersionResponse = models.GetTaskVersionResponse;
const ListResourceFoldersResponse = models.ListResourceFoldersResponse;
const GetSQLScriptResponse = models.GetSQLScriptResponse;
const TaskVersionDetail = models.TaskVersionDetail;
const UpdateFolderResult = models.UpdateFolderResult;
const ListAlarmMessagesRequest = models.ListAlarmMessagesRequest;
const UpdateCodeFileResponse = models.UpdateCodeFileResponse;
const GetOpsWorkflowRequest = models.GetOpsWorkflowRequest;
const CreateOpsAlarmRuleRequest = models.CreateOpsAlarmRuleRequest;
const ListSQLScriptRunsResponse = models.ListSQLScriptRunsResponse;
const Task = models.Task;
const NotificationFatigue = models.NotificationFatigue;
const TaskDataRegistry = models.TaskDataRegistry;
const GetTaskInstanceLogRequest = models.GetTaskInstanceLogRequest;
const SetSuccessTaskInstancesAsyncResponse = models.SetSuccessTaskInstancesAsyncResponse;
const TaskCodeResult = models.TaskCodeResult;
const UpdateSQLScriptRequest = models.UpdateSQLScriptRequest;
const SetSuccessTaskInstancesAsyncRequest = models.SetSuccessTaskInstancesAsyncRequest;
const TaskCode = models.TaskCode;
const StopOpsTasksAsyncRequest = models.StopOpsTasksAsyncRequest;
const ListAlarmMessagesResponse = models.ListAlarmMessagesResponse;
const ParamInfo = models.ParamInfo;
const CodeStudioFolderResult = models.CodeStudioFolderResult;
const GetOpsTaskRequest = models.GetOpsTaskRequest;
const DeleteAlarmRuleResult = models.DeleteAlarmRuleResult;
const DeleteTaskResult = models.DeleteTaskResult;
const DeleteResourceFileRequest = models.DeleteResourceFileRequest;
const ListWorkflowFoldersResponse = models.ListWorkflowFoldersResponse;
const CreateSQLScriptResponse = models.CreateSQLScriptResponse;
const AlarmQuietInterval = models.AlarmQuietInterval;
const CodeFile = models.CodeFile;
const ListTasksRequest = models.ListTasksRequest;
const OpsAsyncResponse = models.OpsAsyncResponse;
const CreateWorkflowResult = models.CreateWorkflowResult;
const ListResourceFoldersRequest = models.ListResourceFoldersRequest;
const ResourceFile = models.ResourceFile;
const ListTaskVersions = models.ListTaskVersions;
const OpsWorkflow = models.OpsWorkflow;
const GetWorkflowResponse = models.GetWorkflowResponse;
const ListUpstreamTasksRequest = models.ListUpstreamTasksRequest;
const GetTaskCodeRequest = models.GetTaskCodeRequest;
const GetTaskResponse = models.GetTaskResponse;
const DeleteCodeFolderRequest = models.DeleteCodeFolderRequest;
const KillTaskInstancesAsyncRequest = models.KillTaskInstancesAsyncRequest;
const CodeStudioFileActionResult = models.CodeStudioFileActionResult;
const CreateSQLScriptRequest = models.CreateSQLScriptRequest;
const WorkflowFolder = models.WorkflowFolder;
const ListDataBackfillInstancesRequest = models.ListDataBackfillInstancesRequest;
const UpdateResourceFolderRequest = models.UpdateResourceFolderRequest;
const CodeStudioFolderActionResult = models.CodeStudioFolderActionResult;
const ListOpsWorkflowsResponse = models.ListOpsWorkflowsResponse;
const EventListener = models.EventListener;
const BackfillInstanceCollection = models.BackfillInstanceCollection;
const UpdateSQLFolderResponse = models.UpdateSQLFolderResponse;
const InstanceExecutionPhase = models.InstanceExecutionPhase;
const GetAlarmMessageRequest = models.GetAlarmMessageRequest;
const CreateSQLFolderResponse = models.CreateSQLFolderResponse;
const ListCodeFolderContentsRequest = models.ListCodeFolderContentsRequest;
const GetWorkflowRequest = models.GetWorkflowRequest;
const OpsWorkflowDetail = models.OpsWorkflowDetail;
const DeleteWorkflowResult = models.DeleteWorkflowResult;
const TaskSchedulerConfiguration = models.TaskSchedulerConfiguration;
const GetTaskInstanceResponse = models.GetTaskInstanceResponse;
const ListDataBackfillInstancesResponse = models.ListDataBackfillInstancesResponse;
const ListUpstreamOpsTasksRequest = models.ListUpstreamOpsTasksRequest;
const UpdateOpsAlarmRuleRequest = models.UpdateOpsAlarmRuleRequest;
const ListSQLFolderContentsResponse = models.ListSQLFolderContentsResponse;
const ListWorkflowFoldersRequest = models.ListWorkflowFoldersRequest;
const DependencyConfigPage = models.DependencyConfigPage;
const DeleteFolderResult = models.DeleteFolderResult;
const CreateResourceFileResponse = models.CreateResourceFileResponse;
const TaskConfiguration = models.TaskConfiguration;
const DeleteWorkflowFolderResponse = models.DeleteWorkflowFolderResponse;
const ListTaskInstancesRequest = models.ListTaskInstancesRequest;
const CodeFileConfig = models.CodeFileConfig;
const ListAlarmRulesResult = models.ListAlarmRulesResult;
const DeleteSQLScriptResponse = models.DeleteSQLScriptResponse;
const StopSQLScriptRunRequest = models.StopSQLScriptRunRequest;
const ListOpsTasksRequest = models.ListOpsTasksRequest;
const AlarmRuleData = models.AlarmRuleData;
const CreateCodeFileRequest = models.CreateCodeFileRequest;
const ChildDependencyConfigPage = models.ChildDependencyConfigPage;
const SQLFolderNode = models.SQLFolderNode;
const TaskVersion = models.TaskVersion;
const GetCodeFileResponse = models.GetCodeFileResponse;
const CreateTaskConfiguration = models.CreateTaskConfiguration;
const GetOpsWorkflowResponse = models.GetOpsWorkflowResponse;
const UpdateWorkflowResult = models.UpdateWorkflowResult;
const ListTaskInstanceExecutionsResponse = models.ListTaskInstanceExecutionsResponse;
const ParentDependencyConfigPage = models.ParentDependencyConfigPage;
const SubmitTaskResponse = models.SubmitTaskResponse;
const WorkflowFolderPage = models.WorkflowFolderPage;
const AlarmRuleDetail = models.AlarmRuleDetail;
const RerunTaskInstancesAsyncRequest = models.RerunTaskInstancesAsyncRequest;
const ListTaskInfo = models.ListTaskInfo;
const DataBackfillRange = models.DataBackfillRange;
const CreateTaskResponse = models.CreateTaskResponse;
const WorkflowSchedulerConfiguration = models.WorkflowSchedulerConfiguration;
const GetSQLScriptRequest = models.GetSQLScriptRequest;
const CreateDataBackfillPlanResponse = models.CreateDataBackfillPlanResponse;
const DeleteCodeFileResponse = models.DeleteCodeFileResponse;
const InstanceExecution = models.InstanceExecution;
const TaskInstance = models.TaskInstance;
const TaskOpsInfo = models.TaskOpsInfo;
const DependencyStrategyTask = models.DependencyStrategyTask;
const SQLScript = models.SQLScript;
const CreateTaskBaseAttribute = models.CreateTaskBaseAttribute;
const CreateDataReplenishmentPlan = models.CreateDataReplenishmentPlan;
const KillTaskInstancesAsyncResponse = models.KillTaskInstancesAsyncResponse;
const StopOpsTasksAsyncResponse = models.StopOpsTasksAsyncResponse;
const PauseOpsTasksAsyncResponse = models.PauseOpsTasksAsyncResponse;
const CreateWorkflowResponse = models.CreateWorkflowResponse;
const TimeOutStrategyInfo = models.TimeOutStrategyInfo;
const DeleteTaskResponse = models.DeleteTaskResponse;
const GetTaskInstanceLogResponse = models.GetTaskInstanceLogResponse;
const AlarmGroup = models.AlarmGroup;
const OpsTaskDepend = models.OpsTaskDepend;
const ListDownstreamTasksRequest = models.ListDownstreamTasksRequest;
const OutTaskParameter = models.OutTaskParameter;
const DeleteOpsAlarmRuleRequest = models.DeleteOpsAlarmRuleRequest;
const GetTaskVersionRequest = models.GetTaskVersionRequest;
const GetOpsAsyncJobResponse = models.GetOpsAsyncJobResponse;
const CreateCodeFolderRequest = models.CreateCodeFolderRequest;
const DeleteSQLFolderRequest = models.DeleteSQLFolderRequest;
const DeleteCodeFileRequest = models.DeleteCodeFileRequest;
const DependencyTaskBrief = models.DependencyTaskBrief;
const WorkflowDetail = models.WorkflowDetail;
const UpdateCodeFolderRequest = models.UpdateCodeFolderRequest;
const ResourceFilePage = models.ResourceFilePage;
const WorkflowSchedulerConfigurationInfo = models.WorkflowSchedulerConfigurationInfo;
const ListOpsAlarmRulesRequest = models.ListOpsAlarmRulesRequest;
const CreateWorkflowFolderRequest = models.CreateWorkflowFolderRequest;
const GetAlarmMessageResponse = models.GetAlarmMessageResponse;
const OpsAsyncJobDetail = models.OpsAsyncJobDetail;
const CreateResourceFolderRequest = models.CreateResourceFolderRequest;
const UpdateTaskBaseAttribute = models.UpdateTaskBaseAttribute;
const DeleteResourceFolderRequest = models.DeleteResourceFolderRequest;
const UpdateCodeFolderResponse = models.UpdateCodeFolderResponse;
const GetOpsTaskCodeRequest = models.GetOpsTaskCodeRequest;
const UpdateResourceFileRequest = models.UpdateResourceFileRequest;
const CreateResourceFolderResponse = models.CreateResourceFolderResponse;
const TaskExtParameter = models.TaskExtParameter;
const JobDto = models.JobDto;
const ReconciliationStrategyInfo = models.ReconciliationStrategyInfo;
const DeleteResourceFileResponse = models.DeleteResourceFileResponse;


/**
 * wedata client
 * @class
 */
class WedataClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("wedata.intl.tencentcloudapi.com", "2025-08-06", credential, region, profile);
    }
    
    /**
     * This API is used to create a resource file folder.
     * @param {CreateResourceFolderRequest} req
     * @param {function(string, CreateResourceFolderResponse):void} cb
     * @public
     */
    CreateResourceFolder(req, cb) {
        let resp = new CreateResourceFolderResponse();
        this.request("CreateResourceFolder", req, resp, cb);
    }

    /**
     * This API is used to create a task.
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * Get Workflows under a Project by Project ID.
     * @param {ListOpsWorkflowsRequest} req
     * @param {function(string, ListOpsWorkflowsResponse):void} cb
     * @public
     */
    ListOpsWorkflows(req, cb) {
        let resp = new ListOpsWorkflowsResponse();
        this.request("ListOpsWorkflows", req, resp, cb);
    }

    /**
     * This API is used to create an SQL folder
     * @param {CreateSQLFolderRequest} req
     * @param {function(string, CreateSQLFolderResponse):void} cb
     * @public
     */
    CreateSQLFolder(req, cb) {
        let resp = new CreateSQLFolderResponse();
        this.request("CreateSQLFolder", req, resp, cb);
    }

    /**
     * This API is used to rename a code folder.
     * @param {UpdateCodeFolderRequest} req
     * @param {function(string, UpdateCodeFolderResponse):void} cb
     * @public
     */
    UpdateCodeFolder(req, cb) {
        let resp = new UpdateCodeFolderResponse();
        this.request("UpdateCodeFolder", req, resp, cb);
    }

    /**
     * This API is used to search the alarm information list.
     * @param {ListAlarmMessagesRequest} req
     * @param {function(string, ListAlarmMessagesResponse):void} cb
     * @public
     */
    ListAlarmMessages(req, cb) {
        let resp = new ListAlarmMessagesResponse();
        this.request("ListAlarmMessages", req, resp, cb);
    }

    /**
     * This API is used to retrieve workflow information.
     * @param {GetWorkflowRequest} req
     * @param {function(string, GetWorkflowResponse):void} cb
     * @public
     */
    GetWorkflow(req, cb) {
        let resp = new GetWorkflowResponse();
        this.request("GetWorkflow", req, resp, cb);
    }

    /**
     * This API is used to get the direct upstream of an instance.
     * @param {ListDownstreamTaskInstancesRequest} req
     * @param {function(string, ListDownstreamTaskInstancesResponse):void} cb
     * @public
     */
    ListDownstreamTaskInstances(req, cb) {
        let resp = new ListDownstreamTaskInstancesResponse();
        this.request("ListDownstreamTaskInstances", req, resp, cb);
    }

    /**
     * This API is used to update a workflow including basic information and workflow parameters.
     * @param {UpdateWorkflowRequest} req
     * @param {function(string, UpdateWorkflowResponse):void} cb
     * @public
     */
    UpdateWorkflow(req, cb) {
        let resp = new UpdateWorkflowResponse();
        this.request("UpdateWorkflow", req, resp, cb);
    }

    /**
     * This API is used to retrieve the direct upstream task.
     * @param {ListUpstreamTasksRequest} req
     * @param {function(string, ListUpstreamTasksResponse):void} cb
     * @public
     */
    ListUpstreamTasks(req, cb) {
        let resp = new ListUpstreamTasksResponse();
        this.request("ListUpstreamTasks", req, resp, cb);
    }

    /**
     * This API is used to list task versions.
     * @param {GetTaskVersionRequest} req
     * @param {function(string, GetTaskVersionResponse):void} cb
     * @public
     */
    GetTaskVersion(req, cb) {
        let resp = new GetTaskVersionResponse();
        this.request("GetTaskVersion", req, resp, cb);
    }

    /**
     * This API is used to create a data backfill plan.
     * @param {CreateDataBackfillPlanRequest} req
     * @param {function(string, CreateDataBackfillPlanResponse):void} cb
     * @public
     */
    CreateDataBackfillPlan(req, cb) {
        let resp = new CreateDataBackfillPlanResponse();
        this.request("CreateDataBackfillPlan", req, resp, cb);
    }

    /**
     * This API is used to retrieve the content list of an sql folder
     * @param {ListSQLFolderContentsRequest} req
     * @param {function(string, ListSQLFolderContentsResponse):void} cb
     * @public
     */
    ListSQLFolderContents(req, cb) {
        let resp = new ListSQLFolderContentsResponse();
        this.request("ListSQLFolderContents", req, resp, cb);
    }

    /**
     * This API is used to run an SQL script.
     * @param {RunSQLScriptRequest} req
     * @param {function(string, RunSQLScriptResponse):void} cb
     * @public
     */
    RunSQLScript(req, cb) {
        let resp = new RunSQLScriptResponse();
        this.request("RunSQLScript", req, resp, cb);
    }

    /**
     * This API is used to create a code folder.
     * @param {CreateCodeFolderRequest} req
     * @param {function(string, CreateCodeFolderResponse):void} cb
     * @public
     */
    CreateCodeFolder(req, cb) {
        let resp = new CreateCodeFolderResponse();
        this.request("CreateCodeFolder", req, resp, cb);
    }

    /**
     * This API is used to retrieve task direct upstream.
     * @param {ListUpstreamOpsTasksRequest} req
     * @param {function(string, ListUpstreamOpsTasksResponse):void} cb
     * @public
     */
    ListUpstreamOpsTasks(req, cb) {
        let resp = new ListUpstreamOpsTasksResponse();
        this.request("ListUpstreamOpsTasks", req, resp, cb);
    }

    /**
     * This API is used to add an SQL script.
     * @param {CreateSQLScriptRequest} req
     * @param {function(string, CreateSQLScriptResponse):void} cb
     * @public
     */
    CreateSQLScript(req, cb) {
        let resp = new CreateSQLScriptResponse();
        this.request("CreateSQLScript", req, resp, cb);
    }

    /**
     * This API is used to pause tasks in batches asynchronously.
     * @param {PauseOpsTasksAsyncRequest} req
     * @param {function(string, PauseOpsTasksAsyncResponse):void} cb
     * @public
     */
    PauseOpsTasksAsync(req, cb) {
        let resp = new PauseOpsTasksAsyncResponse();
        this.request("PauseOpsTasksAsync", req, resp, cb);
    }

    /**
     * This API is used to query async operation details in Ops center.
     * @param {GetOpsAsyncJobRequest} req
     * @param {function(string, GetOpsAsyncJobResponse):void} cb
     * @public
     */
    GetOpsAsyncJob(req, cb) {
        let resp = new GetOpsAsyncJobResponse();
        this.request("GetOpsAsyncJob", req, resp, cb);
    }

    /**
     * This API is used to update a code file.
     * @param {UpdateCodeFileRequest} req
     * @param {function(string, UpdateCodeFileResponse):void} cb
     * @public
     */
    UpdateCodeFile(req, cb) {
        let resp = new UpdateCodeFileResponse();
        this.request("UpdateCodeFile", req, resp, cb);
    }

    /**
     * This API is used to modify the task owner.
     * @param {UpdateOpsTasksOwnerRequest} req
     * @param {function(string, UpdateOpsTasksOwnerResponse):void} cb
     * @public
     */
    UpdateOpsTasksOwner(req, cb) {
        let resp = new UpdateOpsTasksOwnerResponse();
        this.request("UpdateOpsTasksOwner", req, resp, cb);
    }

    /**
     * Deletes alarm rules
     * @param {DeleteOpsAlarmRuleRequest} req
     * @param {function(string, DeleteOpsAlarmRuleResponse):void} cb
     * @public
     */
    DeleteOpsAlarmRule(req, cb) {
        let resp = new DeleteOpsAlarmRuleResponse();
        this.request("DeleteOpsAlarmRule", req, resp, cb);
    }

    /**
     * This API is used to query alert information details.
     * @param {GetAlarmMessageRequest} req
     * @param {function(string, GetAlarmMessageResponse):void} cb
     * @public
     */
    GetAlarmMessage(req, cb) {
        let resp = new GetAlarmMessageResponse();
        this.request("GetAlarmMessage", req, resp, cb);
    }

    /**
     * This API is used to retrieve task direct downstream details.
     * @param {ListDownstreamOpsTasksRequest} req
     * @param {function(string, ListDownstreamOpsTasksResponse):void} cb
     * @public
     */
    ListDownstreamOpsTasks(req, cb) {
        let resp = new ListDownstreamOpsTasksResponse();
        this.request("ListDownstreamOpsTasks", req, resp, cb);
    }

    /**
     * This API is used to list saved task versions.
     * @param {ListTaskVersionsRequest} req
     * @param {function(string, ListTaskVersionsResponse):void} cb
     * @public
     */
    ListTaskVersions(req, cb) {
        let resp = new ListTaskVersionsResponse();
        this.request("ListTaskVersions", req, resp, cb);
    }

    /**
     * This API is used to batch rerun instances asynchronously.
     * @param {RerunTaskInstancesAsyncRequest} req
     * @param {function(string, RerunTaskInstancesAsyncResponse):void} cb
     * @public
     */
    RerunTaskInstancesAsync(req, cb) {
        let resp = new RerunTaskInstancesAsyncResponse();
        this.request("RerunTaskInstancesAsync", req, resp, cb);
    }

    /**
     * This API is used to asynchronously deactivate tasks in batch.
     * @param {StopOpsTasksAsyncRequest} req
     * @param {function(string, StopOpsTasksAsyncResponse):void} cb
     * @public
     */
    StopOpsTasksAsync(req, cb) {
        let resp = new StopOpsTasksAsyncResponse();
        this.request("StopOpsTasksAsync", req, resp, cb);
    }

    /**
     * This API is used to delete a code file.
     * @param {DeleteCodeFileRequest} req
     * @param {function(string, DeleteCodeFileResponse):void} cb
     * @public
     */
    DeleteCodeFile(req, cb) {
        let resp = new DeleteCodeFileResponse();
        this.request("DeleteCodeFile", req, resp, cb);
    }

    /**
     * This API is used to delete an orchestration space task.
     * @param {DeleteTaskRequest} req
     * @param {function(string, DeleteTaskResponse):void} cb
     * @public
     */
    DeleteTask(req, cb) {
        let resp = new DeleteTaskResponse();
        this.request("DeleteTask", req, resp, cb);
    }

    /**
     * This API is used to query script details.
     * @param {GetSQLScriptRequest} req
     * @param {function(string, GetSQLScriptResponse):void} cb
     * @public
     */
    GetSQLScript(req, cb) {
        let resp = new GetSQLScriptResponse();
        this.request("GetSQLScript", req, resp, cb);
    }

    /**
     * This API is used to obtain task code.
     * @param {GetTaskCodeRequest} req
     * @param {function(string, GetTaskCodeResponse):void} cb
     * @public
     */
    GetTaskCode(req, cb) {
        let resp = new GetTaskCodeResponse();
        this.request("GetTaskCode", req, resp, cb);
    }

    /**
     * This API is used to get folder content.
     * @param {ListCodeFolderContentsRequest} req
     * @param {function(string, ListCodeFolderContentsResponse):void} cb
     * @public
     */
    ListCodeFolderContents(req, cb) {
        let resp = new ListCodeFolderContentsResponse();
        this.request("ListCodeFolderContents", req, resp, cb);
    }

    /**
     * This API is used to create a resource file.
     * @param {CreateResourceFileRequest} req
     * @param {function(string, CreateResourceFileResponse):void} cb
     * @public
     */
    CreateResourceFile(req, cb) {
        let resp = new CreateResourceFileResponse();
        this.request("CreateResourceFile", req, resp, cb);
    }

    /**
     * This API is used to rename an SQL folder.
     * @param {UpdateSQLFolderRequest} req
     * @param {function(string, UpdateSQLFolderResponse):void} cb
     * @public
     */
    UpdateSQLFolder(req, cb) {
        let resp = new UpdateSQLFolderResponse();
        this.request("UpdateSQLFolder", req, resp, cb);
    }

    /**
     * This API is used to query SQL run history.
     * @param {ListSQLScriptRunsRequest} req
     * @param {function(string, ListSQLScriptRunsResponse):void} cb
     * @public
     */
    ListSQLScriptRuns(req, cb) {
        let resp = new ListSQLScriptRunsResponse();
        this.request("ListSQLScriptRuns", req, resp, cb);
    }

    /**
     * Modifies alarm rules
     * @param {UpdateOpsAlarmRuleRequest} req
     * @param {function(string, UpdateOpsAlarmRuleResponse):void} cb
     * @public
     */
    UpdateOpsAlarmRule(req, cb) {
        let resp = new UpdateOpsAlarmRuleResponse();
        this.request("UpdateOpsAlarmRule", req, resp, cb);
    }

    /**
     * This API is used to query the alarm rule list.
     * @param {ListOpsAlarmRulesRequest} req
     * @param {function(string, ListOpsAlarmRulesResponse):void} cb
     * @public
     */
    ListOpsAlarmRules(req, cb) {
        let resp = new ListOpsAlarmRulesResponse();
        this.request("ListOpsAlarmRules", req, resp, cb);
    }

    /**
     * This API is used to query alert rule information based on alarm rule id or name.
     * @param {GetOpsAlarmRuleRequest} req
     * @param {function(string, GetOpsAlarmRuleResponse):void} cb
     * @public
     */
    GetOpsAlarmRule(req, cb) {
        let resp = new GetOpsAlarmRuleResponse();
        this.request("GetOpsAlarmRule", req, resp, cb);
    }

    /**
     * This API is used to query the resource file folder list.
     * @param {ListResourceFoldersRequest} req
     * @param {function(string, ListResourceFoldersResponse):void} cb
     * @public
     */
    ListResourceFolders(req, cb) {
        let resp = new ListResourceFoldersResponse();
        this.request("ListResourceFolders", req, resp, cb);
    }

    /**
     * This API is used to query the list of workflows.
     * @param {ListWorkflowsRequest} req
     * @param {function(string, ListWorkflowsResponse):void} cb
     * @public
     */
    ListWorkflows(req, cb) {
        let resp = new ListWorkflowsResponse();
        this.request("ListWorkflows", req, resp, cb);
    }

    /**
     * Obtaining Task Details
     * @param {GetOpsTaskRequest} req
     * @param {function(string, GetOpsTaskResponse):void} cb
     * @public
     */
    GetOpsTask(req, cb) {
        let resp = new GetOpsTaskResponse();
        this.request("GetOpsTask", req, resp, cb);
    }

    /**
     * This API is used to batch configure instances asynchronously.
     * @param {SetSuccessTaskInstancesAsyncRequest} req
     * @param {function(string, SetSuccessTaskInstancesAsyncResponse):void} cb
     * @public
     */
    SetSuccessTaskInstancesAsync(req, cb) {
        let resp = new SetSuccessTaskInstancesAsyncResponse();
        this.request("SetSuccessTaskInstancesAsync", req, resp, cb);
    }

    /**
     * This API is used to update a resource file.
     * @param {UpdateResourceFileRequest} req
     * @param {function(string, UpdateResourceFileResponse):void} cb
     * @public
     */
    UpdateResourceFile(req, cb) {
        let resp = new UpdateResourceFileResponse();
        this.request("UpdateResourceFile", req, resp, cb);
    }

    /**
     * This API is used to obtain instance lists.
     * @param {ListTaskInstancesRequest} req
     * @param {function(string, ListTaskInstancesResponse):void} cb
     * @public
     */
    ListTaskInstances(req, cb) {
        let resp = new ListTaskInstancesResponse();
        this.request("ListTaskInstances", req, resp, cb);
    }

    /**
     * This API is used to obtain workflow scheduling details based on the workflow id.
     * @param {GetOpsWorkflowRequest} req
     * @param {function(string, GetOpsWorkflowResponse):void} cb
     * @public
     */
    GetOpsWorkflow(req, cb) {
        let resp = new GetOpsWorkflowResponse();
        this.request("GetOpsWorkflow", req, resp, cb);
    }

    /**
     * This API is used to retrieve task code.
     * @param {GetOpsTaskCodeRequest} req
     * @param {function(string, GetOpsTaskCodeResponse):void} cb
     * @public
     */
    GetOpsTaskCode(req, cb) {
        let resp = new GetOpsTaskCodeResponse();
        this.request("GetOpsTaskCode", req, resp, cb);
    }

    /**
     * This API is used to set alarm rules.
     * @param {CreateOpsAlarmRuleRequest} req
     * @param {function(string, CreateOpsAlarmRuleResponse):void} cb
     * @public
     */
    CreateOpsAlarmRule(req, cb) {
        let resp = new CreateOpsAlarmRuleResponse();
        this.request("CreateOpsAlarmRule", req, resp, cb);
    }

    /**
     * This API is used to retrieve all instances of a single backfill.
     * @param {ListDataBackfillInstancesRequest} req
     * @param {function(string, ListDataBackfillInstancesResponse):void} cb
     * @public
     */
    ListDataBackfillInstances(req, cb) {
        let resp = new ListDataBackfillInstancesResponse();
        this.request("ListDataBackfillInstances", req, resp, cb);
    }

    /**
     * This API is used to get the direct upstream of an instance.
     * @param {ListUpstreamTaskInstancesRequest} req
     * @param {function(string, ListUpstreamTaskInstancesResponse):void} cb
     * @public
     */
    ListUpstreamTaskInstances(req, cb) {
        let resp = new ListUpstreamTaskInstancesResponse();
        this.request("ListUpstreamTaskInstances", req, resp, cb);
    }

    /**
     * This API is used to query the folder list.
     * @param {ListWorkflowFoldersRequest} req
     * @param {function(string, ListWorkflowFoldersResponse):void} cb
     * @public
     */
    ListWorkflowFolders(req, cb) {
        let resp = new ListWorkflowFoldersResponse();
        this.request("ListWorkflowFolders", req, resp, cb);
    }

    /**
     * This API is used to delete a resource file.
     * @param {DeleteResourceFileRequest} req
     * @param {function(string, DeleteResourceFileResponse):void} cb
     * @public
     */
    DeleteResourceFile(req, cb) {
        let resp = new DeleteResourceFileResponse();
        this.request("DeleteResourceFile", req, resp, cb);
    }

    /**
     * This API is used to create a code file.
     * @param {CreateCodeFileRequest} req
     * @param {function(string, CreateCodeFileResponse):void} cb
     * @public
     */
    CreateCodeFile(req, cb) {
        let resp = new CreateCodeFileResponse();
        this.request("CreateCodeFile", req, resp, cb);
    }

    /**
     * This API is used to retrieve task details.
     * @param {GetTaskRequest} req
     * @param {function(string, GetTaskResponse):void} cb
     * @public
     */
    GetTask(req, cb) {
        let resp = new GetTaskResponse();
        this.request("GetTask", req, resp, cb);
    }

    /**
     * This API is used to submit a task.
     * @param {SubmitTaskRequest} req
     * @param {function(string, SubmitTaskResponse):void} cb
     * @public
     */
    SubmitTask(req, cb) {
        let resp = new SubmitTaskResponse();
        this.request("SubmitTask", req, resp, cb);
    }

    /**
     * This API is used to obtain instance lists.
     * @param {GetTaskInstanceLogRequest} req
     * @param {function(string, GetTaskInstanceLogResponse):void} cb
     * @public
     */
    GetTaskInstanceLog(req, cb) {
        let resp = new GetTaskInstanceLogResponse();
        this.request("GetTaskInstanceLog", req, resp, cb);
    }

    /**
     * This API is used to view resource file list
     * @param {ListResourceFilesRequest} req
     * @param {function(string, ListResourceFilesResponse):void} cb
     * @public
     */
    ListResourceFiles(req, cb) {
        let resp = new ListResourceFilesResponse();
        this.request("ListResourceFiles", req, resp, cb);
    }

    /**
     * This API is used to update a task.
     * @param {UpdateTaskRequest} req
     * @param {function(string, UpdateTaskResponse):void} cb
     * @public
     */
    UpdateTask(req, cb) {
        let resp = new UpdateTaskResponse();
        this.request("UpdateTask", req, resp, cb);
    }

    /**
     * Deletes a workflow
     * @param {DeleteWorkflowRequest} req
     * @param {function(string, DeleteWorkflowResponse):void} cb
     * @public
     */
    DeleteWorkflow(req, cb) {
        let resp = new DeleteWorkflowResponse();
        this.request("DeleteWorkflow", req, resp, cb);
    }

    /**
     * This API is used to obtain resource file details.
     * @param {GetResourceFileRequest} req
     * @param {function(string, GetResourceFileResponse):void} cb
     * @public
     */
    GetResourceFile(req, cb) {
        let resp = new GetResourceFileResponse();
        this.request("GetResourceFile", req, resp, cb);
    }

    /**
     * This API is used to delete folders in data exploration.
     * @param {DeleteCodeFolderRequest} req
     * @param {function(string, DeleteCodeFolderResponse):void} cb
     * @public
     */
    DeleteCodeFolder(req, cb) {
        let resp = new DeleteCodeFolderResponse();
        this.request("DeleteCodeFolder", req, resp, cb);
    }

    /**
     * This API is used to delete a resource folder.
     * @param {DeleteResourceFolderRequest} req
     * @param {function(string, DeleteResourceFolderResponse):void} cb
     * @public
     */
    DeleteResourceFolder(req, cb) {
        let resp = new DeleteResourceFolderResponse();
        this.request("DeleteResourceFolder", req, resp, cb);
    }

    /**
     * This API is used to create workflow.
     * @param {CreateWorkflowRequest} req
     * @param {function(string, CreateWorkflowResponse):void} cb
     * @public
     */
    CreateWorkflow(req, cb) {
        let resp = new CreateWorkflowResponse();
        this.request("CreateWorkflow", req, resp, cb);
    }

    /**
     * This API is used to terminate instances in batches asynchronously.
     * @param {KillTaskInstancesAsyncRequest} req
     * @param {function(string, KillTaskInstancesAsyncResponse):void} cb
     * @public
     */
    KillTaskInstancesAsync(req, cb) {
        let resp = new KillTaskInstancesAsyncResponse();
        this.request("KillTaskInstancesAsync", req, resp, cb);
    }

    /**
     * This API is used to delete a data development folder
     * @param {DeleteWorkflowFolderRequest} req
     * @param {function(string, DeleteWorkflowFolderResponse):void} cb
     * @public
     */
    DeleteWorkflowFolder(req, cb) {
        let resp = new DeleteWorkflowFolderResponse();
        this.request("DeleteWorkflowFolder", req, resp, cb);
    }

    /**
     * This API is used to query pagination information of tasks.
     * @param {ListTasksRequest} req
     * @param {function(string, ListTasksResponse):void} cb
     * @public
     */
    ListTasks(req, cb) {
        let resp = new ListTasksResponse();
        this.request("ListTasks", req, resp, cb);
    }

    /**
     * This API is used to query the details of a scheduling instance.
     * @param {ListTaskInstanceExecutionsRequest} req
     * @param {function(string, ListTaskInstanceExecutionsResponse):void} cb
     * @public
     */
    ListTaskInstanceExecutions(req, cb) {
        let resp = new ListTaskInstanceExecutionsResponse();
        this.request("ListTaskInstanceExecutions", req, resp, cb);
    }

    /**
     * This API is used to view code file details.
     * @param {GetCodeFileRequest} req
     * @param {function(string, GetCodeFileResponse):void} cb
     * @public
     */
    GetCodeFile(req, cb) {
        let resp = new GetCodeFileResponse();
        this.request("GetCodeFile", req, resp, cb);
    }

    /**
     * This API is used to create a workflow folder.
     * @param {CreateWorkflowFolderRequest} req
     * @param {function(string, CreateWorkflowFolderResponse):void} cb
     * @public
     */
    CreateWorkflowFolder(req, cb) {
        let resp = new CreateWorkflowFolderResponse();
        this.request("CreateWorkflowFolder", req, resp, cb);
    }

    /**
     * This API is used to delete a SQL folder.
     * @param {DeleteSQLFolderRequest} req
     * @param {function(string, DeleteSQLFolderResponse):void} cb
     * @public
     */
    DeleteSQLFolder(req, cb) {
        let resp = new DeleteSQLFolderResponse();
        this.request("DeleteSQLFolder", req, resp, cb);
    }

    /**
     * This API is used to delete an SQL script.
     * @param {DeleteSQLScriptRequest} req
     * @param {function(string, DeleteSQLScriptResponse):void} cb
     * @public
     */
    DeleteSQLScript(req, cb) {
        let resp = new DeleteSQLScriptResponse();
        this.request("DeleteSQLScript", req, resp, cb);
    }

    /**
     * This API is used to update a workflow folder
     * @param {UpdateWorkflowFolderRequest} req
     * @param {function(string, UpdateWorkflowFolderResponse):void} cb
     * @public
     */
    UpdateWorkflowFolder(req, cb) {
        let resp = new UpdateWorkflowFolderResponse();
        this.request("UpdateWorkflowFolder", req, resp, cb);
    }

    /**
     * This API is used to obtain the task list based on the project id.
     * @param {ListOpsTasksRequest} req
     * @param {function(string, ListOpsTasksResponse):void} cb
     * @public
     */
    ListOpsTasks(req, cb) {
        let resp = new ListOpsTasksResponse();
        this.request("ListOpsTasks", req, resp, cb);
    }

    /**
     * This API is used to stop running an SQL script.
     * @param {StopSQLScriptRunRequest} req
     * @param {function(string, StopSQLScriptRunResponse):void} cb
     * @public
     */
    StopSQLScriptRun(req, cb) {
        let resp = new StopSQLScriptRunResponse();
        this.request("StopSQLScriptRun", req, resp, cb);
    }

    /**
     * This API is used to retrieve the direct downstream task details.
     * @param {ListDownstreamTasksRequest} req
     * @param {function(string, ListDownstreamTasksResponse):void} cb
     * @public
     */
    ListDownstreamTasks(req, cb) {
        let resp = new ListDownstreamTasksResponse();
        this.request("ListDownstreamTasks", req, resp, cb);
    }

    /**
     * This API is used to update a resource folder.
     * @param {UpdateResourceFolderRequest} req
     * @param {function(string, UpdateResourceFolderResponse):void} cb
     * @public
     */
    UpdateResourceFolder(req, cb) {
        let resp = new UpdateResourceFolderResponse();
        this.request("UpdateResourceFolder", req, resp, cb);
    }

    /**
     * This API is used to save the script content for data exploration.
     * @param {UpdateSQLScriptRequest} req
     * @param {function(string, UpdateSQLScriptResponse):void} cb
     * @public
     */
    UpdateSQLScript(req, cb) {
        let resp = new UpdateSQLScriptResponse();
        this.request("UpdateSQLScript", req, resp, cb);
    }

    /**
     * This API is used to query the details of a scheduling instance.
     * @param {GetTaskInstanceRequest} req
     * @param {function(string, GetTaskInstanceResponse):void} cb
     * @public
     */
    GetTaskInstance(req, cb) {
        let resp = new GetTaskInstanceResponse();
        this.request("GetTaskInstance", req, resp, cb);
    }


}
module.exports = WedataClient;
