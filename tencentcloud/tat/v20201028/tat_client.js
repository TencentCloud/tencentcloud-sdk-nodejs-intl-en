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
const ScheduleSettings = models.ScheduleSettings;
const InvocationTaskBasicInfo = models.InvocationTaskBasicInfo;
const PreviewReplacedCommandContentResponse = models.PreviewReplacedCommandContentResponse;
const CreateCommandResponse = models.CreateCommandResponse;
const DisableInvokerRequest = models.DisableInvokerRequest;
const AutomationAgentInfo = models.AutomationAgentInfo;
const RunCommandRequest = models.RunCommandRequest;
const Invoker = models.Invoker;
const DescribeInvocationTasksRequest = models.DescribeInvocationTasksRequest;
const Invocation = models.Invocation;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const CommandDocument = models.CommandDocument;
const DescribeInvokerRecordsResponse = models.DescribeInvokerRecordsResponse;
const TaskResult = models.TaskResult;
const ModifyInvokerRequest = models.ModifyInvokerRequest;
const EnableInvokerResponse = models.EnableInvokerResponse;
const EnableInvokerRequest = models.EnableInvokerRequest;
const ModifyCommandResponse = models.ModifyCommandResponse;
const RegionInfo = models.RegionInfo;
const DescribeInvokersResponse = models.DescribeInvokersResponse;
const CancelInvocationResponse = models.CancelInvocationResponse;
const DeleteCommandResponse = models.DeleteCommandResponse;
const DisableInvokerResponse = models.DisableInvokerResponse;
const DescribeCommandsResponse = models.DescribeCommandsResponse;
const CreateInvokerRequest = models.CreateInvokerRequest;
const DescribeAutomationAgentStatusRequest = models.DescribeAutomationAgentStatusRequest;
const InvokeCommandResponse = models.InvokeCommandResponse;
const ModifyCommandRequest = models.ModifyCommandRequest;
const DescribeInvokersRequest = models.DescribeInvokersRequest;
const DescribeCommandsRequest = models.DescribeCommandsRequest;
const DeleteInvokerResponse = models.DeleteInvokerResponse;
const DescribeInvocationsRequest = models.DescribeInvocationsRequest;
const Filter = models.Filter;
const DescribeInvocationsResponse = models.DescribeInvocationsResponse;
const DescribeInvocationTasksResponse = models.DescribeInvocationTasksResponse;
const Command = models.Command;
const PreviewReplacedCommandContentRequest = models.PreviewReplacedCommandContentRequest;
const InvocationTask = models.InvocationTask;
const ModifyInvokerResponse = models.ModifyInvokerResponse;
const InvokerRecord = models.InvokerRecord;
const DescribeAutomationAgentStatusResponse = models.DescribeAutomationAgentStatusResponse;
const CreateInvokerResponse = models.CreateInvokerResponse;
const CancelInvocationRequest = models.CancelInvocationRequest;
const DeleteCommandRequest = models.DeleteCommandRequest;
const DeleteInvokerRequest = models.DeleteInvokerRequest;
const InvokeCommandRequest = models.InvokeCommandRequest;
const DescribeInvokerRecordsRequest = models.DescribeInvokerRecordsRequest;
const Tag = models.Tag;
const RunCommandResponse = models.RunCommandResponse;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const CreateCommandRequest = models.CreateCommandRequest;


/**
 * tat client
 * @class
 */
class TatClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tat.tencentcloudapi.com", "2020-10-28", credential, region, profile);
    }
    
    /**
     * This API is used to enable an invoker.
     * @param {EnableInvokerRequest} req
     * @param {function(string, EnableInvokerResponse):void} cb
     * @public
     */
    EnableInvoker(req, cb) {
        let resp = new EnableInvokerResponse();
        this.request("EnableInvoker", req, resp, cb);
    }

    /**
     * This API is used to delete an invoker.
     * @param {DeleteInvokerRequest} req
     * @param {function(string, DeleteInvokerResponse):void} cb
     * @public
     */
    DeleteInvoker(req, cb) {
        let resp = new DeleteInvokerResponse();
        this.request("DeleteInvoker", req, resp, cb);
    }

    /**
     * This API is used to query command details.
     * @param {DescribeCommandsRequest} req
     * @param {function(string, DescribeCommandsResponse):void} cb
     * @public
     */
    DescribeCommands(req, cb) {
        let resp = new DescribeCommandsResponse();
        this.request("DescribeCommands", req, resp, cb);
    }

    /**
     * This API is used to query execution activity details.
     * @param {DescribeInvocationsRequest} req
     * @param {function(string, DescribeInvocationsResponse):void} cb
     * @public
     */
    DescribeInvocations(req, cb) {
        let resp = new DescribeInvocationsResponse();
        this.request("DescribeInvocations", req, resp, cb);
    }

    /**
     * This API is used to cancel the command executed on one or more CVM instances.

* If the command has not been delivered to the TAT agent, the task status is `PENDING`, `DELIVERING`, or `DELIVER_DELAYED`, and will be `CANCELLED` after the command is canceled.
* If the command has been delivered to the TAT agent, the task status is `RUNNING`, and will be `TERMINATED` after the command is canceled.
     * @param {CancelInvocationRequest} req
     * @param {function(string, CancelInvocationResponse):void} cb
     * @public
     */
    CancelInvocation(req, cb) {
        let resp = new CancelInvocationResponse();
        this.request("CancelInvocation", req, resp, cb);
    }

    /**
     * This API is used to query execution task details.
     * @param {DescribeInvocationTasksRequest} req
     * @param {function(string, DescribeInvocationTasksResponse):void} cb
     * @public
     */
    DescribeInvocationTasks(req, cb) {
        let resp = new DescribeInvocationTasksResponse();
        this.request("DescribeInvocationTasks", req, resp, cb);
    }

    /**
     * This API is used to create an invoker.
     * @param {CreateInvokerRequest} req
     * @param {function(string, CreateInvokerResponse):void} cb
     * @public
     */
    CreateInvoker(req, cb) {
        let resp = new CreateInvokerResponse();
        this.request("CreateInvoker", req, resp, cb);
    }

    /**
     * This API is used to query the execution history of an invoker.
     * @param {DescribeInvokerRecordsRequest} req
     * @param {function(string, DescribeInvokerRecordsResponse):void} cb
     * @public
     */
    DescribeInvokerRecords(req, cb) {
        let resp = new DescribeInvokerRecordsResponse();
        this.request("DescribeInvokerRecords", req, resp, cb);
    }

    /**
     * This API is used to query the list of regions that supports TAT.
If the `RegionState` is `AVAILABLE`, it means that TAT is available in the region. If no value is returned, TAT is not available in the region.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This API is used to disable an invoker.
     * @param {DisableInvokerRequest} req
     * @param {function(string, DisableInvokerResponse):void} cb
     * @public
     */
    DisableInvoker(req, cb) {
        let resp = new DisableInvokerResponse();
        this.request("DisableInvoker", req, resp, cb);
    }

    /**
     * This API is used to modify an invoker.
     * @param {ModifyInvokerRequest} req
     * @param {function(string, ModifyInvokerResponse):void} cb
     * @public
     */
    ModifyInvoker(req, cb) {
        let resp = new ModifyInvokerResponse();
        this.request("ModifyInvoker", req, resp, cb);
    }

    /**
     * This API is used to create a command.
     * @param {CreateCommandRequest} req
     * @param {function(string, CreateCommandResponse):void} cb
     * @public
     */
    CreateCommand(req, cb) {
        let resp = new CreateCommandResponse();
        this.request("CreateCommand", req, resp, cb);
    }

    /**
     * This API is used to delete a command.
Commands bound to an invoker cannot be deleted.
     * @param {DeleteCommandRequest} req
     * @param {function(string, DeleteCommandResponse):void} cb
     * @public
     */
    DeleteCommand(req, cb) {
        let resp = new DeleteCommandResponse();
        this.request("DeleteCommand", req, resp, cb);
    }

    /**
     * This API is used to modify a command.
     * @param {ModifyCommandRequest} req
     * @param {function(string, ModifyCommandResponse):void} cb
     * @public
     */
    ModifyCommand(req, cb) {
        let resp = new ModifyCommandResponse();
        this.request("ModifyCommand", req, resp, cb);
    }

    /**
     * This API is used to query the status of the TAT agent.
     * @param {DescribeAutomationAgentStatusRequest} req
     * @param {function(string, DescribeAutomationAgentStatusResponse):void} cb
     * @public
     */
    DescribeAutomationAgentStatus(req, cb) {
        let resp = new DescribeAutomationAgentStatusResponse();
        this.request("DescribeAutomationAgentStatus", req, resp, cb);
    }

    /**
     * This API is used to preview the command with custom parameters. The command is not executed.
     * @param {PreviewReplacedCommandContentRequest} req
     * @param {function(string, PreviewReplacedCommandContentResponse):void} cb
     * @public
     */
    PreviewReplacedCommandContent(req, cb) {
        let resp = new PreviewReplacedCommandContentResponse();
        this.request("PreviewReplacedCommandContent", req, resp, cb);
    }

    /**
     * This API is used to execute a command and returns the execution activity ID (inv-xxxxxxxx) on success. Each execution has one or more execution tasks (invt-xxxxxxxx) and each execution task indicates an execution record on a CVM or Lighthouse instance.

* If the agent is not installed on the instance or is offline, an error is returned.
* If the command type is not supported by the agent runtime environment, an error is returned.
* The specified instance needs to be in a VPC network.
* The specified instance needs to be in the `RUNNING` status.
* Only one type of instances (CVM or Lighthouse) can be specified in a single request.
     * @param {RunCommandRequest} req
     * @param {function(string, RunCommandResponse):void} cb
     * @public
     */
    RunCommand(req, cb) {
        let resp = new RunCommandResponse();
        this.request("RunCommand", req, resp, cb);
    }

    /**
     * This API is used to query invoker details.
     * @param {DescribeInvokersRequest} req
     * @param {function(string, DescribeInvokersResponse):void} cb
     * @public
     */
    DescribeInvokers(req, cb) {
        let resp = new DescribeInvokersResponse();
        this.request("DescribeInvokers", req, resp, cb);
    }

    /**
     * This API is used to trigger a command on the specified instance and returns the execution activity ID (inv-xxxxxxxx) on success. Each execution activity has one or more execution tasks (invt-xxxxxxxx) and each execution task indicates an execution record on a CVM or Lighthouse instance.

* If the agent is not installed on the instance or is offline, an error is returned.
* If the command type is not supported by the agent runtime environment, an error is returned.
* The specified instance needs to be in a VPC network.
* The specified instance needs to be in the RUNNING status.
* Only one type of instances (CVM or Lighthouse) can be specified in a single request.
     * @param {InvokeCommandRequest} req
     * @param {function(string, InvokeCommandResponse):void} cb
     * @public
     */
    InvokeCommand(req, cb) {
        let resp = new InvokeCommandResponse();
        this.request("InvokeCommand", req, resp, cb);
    }


}
module.exports = TatClient;
