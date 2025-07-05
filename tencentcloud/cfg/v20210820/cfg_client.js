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
const DescribeTaskRequest = models.DescribeTaskRequest;
const DescribeActionFieldConfigListRequest = models.DescribeActionFieldConfigListRequest;
const TaskGroupAction = models.TaskGroupAction;
const ApmServiceInfo = models.ApmServiceInfo;
const TaskGroupInstancesExecuteRules = models.TaskGroupInstancesExecuteRules;
const CreateTaskFromActionRequest = models.CreateTaskFromActionRequest;
const DeleteTaskRequest = models.DeleteTaskRequest;
const DescribeActionLibraryListRequest = models.DescribeActionLibraryListRequest;
const TaskGroup = models.TaskGroup;
const ExecuteTaskResponse = models.ExecuteTaskResponse;
const DescribeActionFieldConfigListResponse = models.DescribeActionFieldConfigListResponse;
const ActionFieldConfigDetail = models.ActionFieldConfigDetail;
const TemplateGroupAction = models.TemplateGroupAction;
const Template = models.Template;
const DescribeTaskExecuteLogsRequest = models.DescribeTaskExecuteLogsRequest;
const DescribeObjectTypeListResponse = models.DescribeObjectTypeListResponse;
const ModifyTaskRunStatusRequest = models.ModifyTaskRunStatusRequest;
const DescribeTemplateResponse = models.DescribeTemplateResponse;
const DescribePolicy = models.DescribePolicy;
const ActionFilter = models.ActionFilter;
const PolicyTriggerLog = models.PolicyTriggerLog;
const DescribeTemplateRequest = models.DescribeTemplateRequest;
const ExecuteTaskInstanceRequest = models.ExecuteTaskInstanceRequest;
const TaskGroupInstance = models.TaskGroupInstance;
const ExecuteTaskRequest = models.ExecuteTaskRequest;
const DescribeTaskListResponse = models.DescribeTaskListResponse;
const ResourceOffline = models.ResourceOffline;
const DescribeTemplateListResponse = models.DescribeTemplateListResponse;
const TaskMonitor = models.TaskMonitor;
const DescribeTemplateListRequest = models.DescribeTemplateListRequest;
const TagWithDescribe = models.TagWithDescribe;
const DescribeObjectTypeListRequest = models.DescribeObjectTypeListRequest;
const DescribeTaskPolicyTriggerLogResponse = models.DescribeTaskPolicyTriggerLogResponse;
const CreateTaskFromTemplateResponse = models.CreateTaskFromTemplateResponse;
const DeleteTaskResponse = models.DeleteTaskResponse;
const ObjectType = models.ObjectType;
const DescribeTaskPolicyTriggerLogRequest = models.DescribeTaskPolicyTriggerLogRequest;
const Task = models.Task;
const TaskReportInfo = models.TaskReportInfo;
const CreateTaskFromTemplateRequest = models.CreateTaskFromTemplateRequest;
const TriggerPolicyRequest = models.TriggerPolicyRequest;
const TaskConfig = models.TaskConfig;
const TriggerPolicyResponse = models.TriggerPolicyResponse;
const DescribeTaskListRequest = models.DescribeTaskListRequest;
const DescribeActionLibraryListResponse = models.DescribeActionLibraryListResponse;
const ObjectTypeJsonParse = models.ObjectTypeJsonParse;
const TaskListItem = models.TaskListItem;
const ExecuteTaskInstanceResponse = models.ExecuteTaskInstanceResponse;
const DescribeTaskExecuteLogsResponse = models.DescribeTaskExecuteLogsResponse;
const TaskGroupConfig = models.TaskGroupConfig;
const TemplateMonitor = models.TemplateMonitor;
const TemplateGroup = models.TemplateGroup;
const TemplatePolicy = models.TemplatePolicy;
const ActionFieldConfigResult = models.ActionFieldConfigResult;
const TaskGroupActionConfig = models.TaskGroupActionConfig;
const ActionLibraryListResult = models.ActionLibraryListResult;
const ModifyTaskRunStatusResponse = models.ModifyTaskRunStatusResponse;
const DescribeTaskResponse = models.DescribeTaskResponse;
const CreateTaskFromActionResponse = models.CreateTaskFromActionResponse;
const TemplateListItem = models.TemplateListItem;
const TagWithCreate = models.TagWithCreate;
const ObjectTypeConfigFields = models.ObjectTypeConfigFields;
const ObjectTypeConfig = models.ObjectTypeConfig;


/**
 * cfg client
 * @class
 */
class CfgClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cfg.intl.tencentcloudapi.com", "2021-08-20", credential, region, profile);
    }
    
    /**
     * This API is used to query the object type list.
     * @param {DescribeObjectTypeListRequest} req
     * @param {function(string, DescribeObjectTypeListResponse):void} cb
     * @public
     */
    DescribeObjectTypeList(req, cb) {
        let resp = new DescribeObjectTypeListResponse();
        this.request("DescribeObjectTypeList", req, resp, cb);
    }

    /**
     * This API is used to create an experiment using a template.
     * @param {CreateTaskFromTemplateRequest} req
     * @param {function(string, CreateTaskFromTemplateResponse):void} cb
     * @public
     */
    CreateTaskFromTemplate(req, cb) {
        let resp = new CreateTaskFromTemplateResponse();
        this.request("CreateTaskFromTemplate", req, resp, cb);
    }

    /**
     * This API is used to query a template library.
     * @param {DescribeTemplateRequest} req
     * @param {function(string, DescribeTemplateResponse):void} cb
     * @public
     */
    DescribeTemplate(req, cb) {
        let resp = new DescribeTemplateResponse();
        this.request("DescribeTemplate", req, resp, cb);
    }

    /**
     * This API is used to trigger the action of the chaos engineering experiment and perform an experiment on the instance.
     * @param {ExecuteTaskInstanceRequest} req
     * @param {function(string, ExecuteTaskInstanceResponse):void} cb
     * @public
     */
    ExecuteTaskInstance(req, cb) {
        let resp = new ExecuteTaskInstanceResponse();
        this.request("ExecuteTaskInstance", req, resp, cb);
    }

    /**
     * This API is used to query the template list.
     * @param {DescribeTemplateListRequest} req
     * @param {function(string, DescribeTemplateListResponse):void} cb
     * @public
     */
    DescribeTemplateList(req, cb) {
        let resp = new DescribeTemplateListResponse();
        this.request("DescribeTemplateList", req, resp, cb);
    }

    /**
     * This API is used to change the task running status.
     * @param {ModifyTaskRunStatusRequest} req
     * @param {function(string, ModifyTaskRunStatusResponse):void} cb
     * @public
     */
    ModifyTaskRunStatus(req, cb) {
        let resp = new ModifyTaskRunStatusResponse();
        this.request("ModifyTaskRunStatus", req, resp, cb);
    }

    /**
     * This API is used to run a task.
     * @param {ExecuteTaskRequest} req
     * @param {function(string, ExecuteTaskResponse):void} cb
     * @public
     */
    ExecuteTask(req, cb) {
        let resp = new ExecuteTaskResponse();
        this.request("ExecuteTask", req, resp, cb);
    }

    /**
     * This API is used to create an experiment with an action.
     * @param {CreateTaskFromActionRequest} req
     * @param {function(string, CreateTaskFromActionResponse):void} cb
     * @public
     */
    CreateTaskFromAction(req, cb) {
        let resp = new CreateTaskFromActionResponse();
        this.request("CreateTaskFromAction", req, resp, cb);
    }

    /**
     * This API is used to trigger the chaos engineering experiment guardrail (two types: trigger and recovery).
     * @param {TriggerPolicyRequest} req
     * @param {function(string, TriggerPolicyResponse):void} cb
     * @public
     */
    TriggerPolicy(req, cb) {
        let resp = new TriggerPolicyResponse();
        this.request("TriggerPolicy", req, resp, cb);
    }

    /**
     * This API is used to query the task list.
     * @param {DescribeTaskListRequest} req
     * @param {function(string, DescribeTaskListResponse):void} cb
     * @public
     */
    DescribeTaskList(req, cb) {
        let resp = new DescribeTaskListResponse();
        this.request("DescribeTaskList", req, resp, cb);
    }

    /**
     * This API is used to obtain the guardrail triggering logs.
     * @param {DescribeTaskPolicyTriggerLogRequest} req
     * @param {function(string, DescribeTaskPolicyTriggerLogResponse):void} cb
     * @public
     */
    DescribeTaskPolicyTriggerLog(req, cb) {
        let resp = new DescribeTaskPolicyTriggerLogResponse();
        this.request("DescribeTaskPolicyTriggerLog", req, resp, cb);
    }

    /**
     * This API is used to obtain all logs generated during an experiment.
     * @param {DescribeTaskExecuteLogsRequest} req
     * @param {function(string, DescribeTaskExecuteLogsResponse):void} cb
     * @public
     */
    DescribeTaskExecuteLogs(req, cb) {
        let resp = new DescribeTaskExecuteLogsResponse();
        this.request("DescribeTaskExecuteLogs", req, resp, cb);
    }

    /**
     * This API is used to delete a task.
     * @param {DeleteTaskRequest} req
     * @param {function(string, DeleteTaskResponse):void} cb
     * @public
     */
    DeleteTask(req, cb) {
        let resp = new DeleteTaskResponse();
        this.request("DeleteTask", req, resp, cb);
    }

    /**
     * This API is used to obtain the action list of Chaotic Fault Generator.
     * @param {DescribeActionLibraryListRequest} req
     * @param {function(string, DescribeActionLibraryListResponse):void} cb
     * @public
     */
    DescribeActionLibraryList(req, cb) {
        let resp = new DescribeActionLibraryListResponse();
        this.request("DescribeActionLibraryList", req, resp, cb);
    }

    /**
     * This API is used to obtain the dynamic configuration parameters of the action field based on action ID, including action-specific parameters and common parameters.
     * @param {DescribeActionFieldConfigListRequest} req
     * @param {function(string, DescribeActionFieldConfigListResponse):void} cb
     * @public
     */
    DescribeActionFieldConfigList(req, cb) {
        let resp = new DescribeActionFieldConfigListResponse();
        this.request("DescribeActionFieldConfigList", req, resp, cb);
    }

    /**
     * This API is used to query a task.
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        let resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }


}
module.exports = CfgClient;
