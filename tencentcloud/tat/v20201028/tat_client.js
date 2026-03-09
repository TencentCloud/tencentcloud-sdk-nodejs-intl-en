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
const ScheduleSettings = models.ScheduleSettings;
const CreateRegisterCodeResponse = models.CreateRegisterCodeResponse;
const PreviewReplacedCommandContentResponse = models.PreviewReplacedCommandContentResponse;
const CreateCommandResponse = models.CreateCommandResponse;
const DisableInvokerRequest = models.DisableInvokerRequest;
const RegisterInstanceInfo = models.RegisterInstanceInfo;
const AutomationAgentInfo = models.AutomationAgentInfo;
const DisableRegisterCodesRequest = models.DisableRegisterCodesRequest;
const DescribeRegisterInstancesRequest = models.DescribeRegisterInstancesRequest;
const DeleteRegisterCodesRequest = models.DeleteRegisterCodesRequest;
const Invocation = models.Invocation;
const GeneralResourceQuotaSet = models.GeneralResourceQuotaSet;
const RunCommandRequest = models.RunCommandRequest;
const InvokeCommandRequest = models.InvokeCommandRequest;
const DescribeInvocationTasksRequest = models.DescribeInvocationTasksRequest;
const DeleteRegisterInstanceResponse = models.DeleteRegisterInstanceResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const CommandDocument = models.CommandDocument;
const DescribeInvokerRecordsResponse = models.DescribeInvokerRecordsResponse;
const TaskResult = models.TaskResult;
const ModifyInvokerRequest = models.ModifyInvokerRequest;
const InvocationTaskBasicInfo = models.InvocationTaskBasicInfo;
const DeleteCommandsRequest = models.DeleteCommandsRequest;
const EnableInvokerResponse = models.EnableInvokerResponse;
const DescribeQuotasRequest = models.DescribeQuotasRequest;
const EnableInvokerRequest = models.EnableInvokerRequest;
const DefaultParameterConf = models.DefaultParameterConf;
const DescribeScenesResponse = models.DescribeScenesResponse;
const DescribeRegisterInstancesResponse = models.DescribeRegisterInstancesResponse;
const ModifyCommandResponse = models.ModifyCommandResponse;
const RegionInfo = models.RegionInfo;
const DescribeInvokersResponse = models.DescribeInvokersResponse;
const CancelInvocationResponse = models.CancelInvocationResponse;
const DeleteRegisterInstanceRequest = models.DeleteRegisterInstanceRequest;
const DeleteCommandResponse = models.DeleteCommandResponse;
const DisableInvokerResponse = models.DisableInvokerResponse;
const DescribeCommandsResponse = models.DescribeCommandsResponse;
const CreateRegisterCodeRequest = models.CreateRegisterCodeRequest;
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
const ModifyRegisterInstanceResponse = models.ModifyRegisterInstanceResponse;
const InvokerRecord = models.InvokerRecord;
const DescribeRegisterCodesResponse = models.DescribeRegisterCodesResponse;
const DescribeAutomationAgentStatusResponse = models.DescribeAutomationAgentStatusResponse;
const CreateInvokerResponse = models.CreateInvokerResponse;
const CancelInvocationRequest = models.CancelInvocationRequest;
const DescribeRegisterCodesRequest = models.DescribeRegisterCodesRequest;
const DeleteCommandRequest = models.DeleteCommandRequest;
const DeleteCommandsResponse = models.DeleteCommandsResponse;
const Scene = models.Scene;
const DescribeScenesRequest = models.DescribeScenesRequest;
const DeleteRegisterCodesResponse = models.DeleteRegisterCodesResponse;
const DescribeInvokerRecordsRequest = models.DescribeInvokerRecordsRequest;
const DeleteInvokerRequest = models.DeleteInvokerRequest;
const ModifyRegisterInstanceRequest = models.ModifyRegisterInstanceRequest;
const Tag = models.Tag;
const RunCommandResponse = models.RunCommandResponse;
const DisableRegisterCodesResponse = models.DisableRegisterCodesResponse;
const DescribeQuotasResponse = models.DescribeQuotasResponse;
const RegisterCodeInfo = models.RegisterCodeInfo;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const CreateCommandRequest = models.CreateCommandRequest;
const Invoker = models.Invoker;


/**
 * tat client
 * @class
 */
class TatClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tat.intl.tencentcloudapi.com", "2020-10-28", credential, region, profile);
    }
    
    /**
     * Cancel the executed command on one or multiple instances.

* If the command is not delivered to the agent and the task status is in PENDING, DELIVERING, or DELIVER_DELAYED, the state of a task is CANCELLED after cancellation.
* If the command is sent to the agent and the task status is RUNNING, the task status is TERMINATED after cancellation.
     * @param {CancelInvocationRequest} req
     * @param {function(string, CancelInvocationResponse):void} cb
     * @public
     */
    CancelInvocation(req, cb) {
        let resp = new CancelInvocationResponse();
        this.request("CancelInvocation", req, resp, cb);
    }

    /**
     * This API is used to modify managed instance information.
     * @param {ModifyRegisterInstanceRequest} req
     * @param {function(string, ModifyRegisterInstanceResponse):void} cb
     * @public
     */
    ModifyRegisterInstance(req, cb) {
        let resp = new ModifyRegisterInstanceResponse();
        this.request("ModifyRegisterInstance", req, resp, cb);
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
     * This API is used to create a registration code.
     * @param {CreateRegisterCodeRequest} req
     * @param {function(string, CreateRegisterCodeResponse):void} cb
     * @public
     */
    CreateRegisterCode(req, cb) {
        let resp = new CreateRegisterCodeResponse();
        this.request("CreateRegisterCode", req, resp, cb);
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
     * This API is used to delete managed instances.
     * @param {DeleteRegisterInstanceRequest} req
     * @param {function(string, DeleteRegisterInstanceResponse):void} cb
     * @public
     */
    DeleteRegisterInstance(req, cb) {
        let resp = new DeleteRegisterInstanceResponse();
        this.request("DeleteRegisterInstance", req, resp, cb);
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

    /**
     * This API is used to execute batch deletion commands.
     * @param {DeleteCommandsRequest} req
     * @param {function(string, DeleteCommandsResponse):void} cb
     * @public
     */
    DeleteCommands(req, cb) {
        let resp = new DeleteCommandsResponse();
        this.request("DeleteCommands", req, resp, cb);
    }

    /**
     * This API is used to query managed instance information.
     * @param {DescribeRegisterInstancesRequest} req
     * @param {function(string, DescribeRegisterInstancesResponse):void} cb
     * @public
     */
    DescribeRegisterInstances(req, cb) {
        let resp = new DescribeRegisterInstancesResponse();
        this.request("DescribeRegisterInstances", req, resp, cb);
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
     * This API is used to delete registration codes in batches.
     * @param {DeleteRegisterCodesRequest} req
     * @param {function(string, DeleteRegisterCodesResponse):void} cb
     * @public
     */
    DeleteRegisterCodes(req, cb) {
        let resp = new DeleteRegisterCodesResponse();
        this.request("DeleteRegisterCodes", req, resp, cb);
    }

    /**
     * This API is used to query registration code info.
     * @param {DescribeRegisterCodesRequest} req
     * @param {function(string, DescribeRegisterCodesResponse):void} cb
     * @public
     */
    DescribeRegisterCodes(req, cb) {
        let resp = new DescribeRegisterCodesResponse();
        this.request("DescribeRegisterCodes", req, resp, cb);
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
     * This API is used to obtain quota information.
     * @param {DescribeQuotasRequest} req
     * @param {function(string, DescribeQuotasResponse):void} cb
     * @public
     */
    DescribeQuotas(req, cb) {
        let resp = new DescribeQuotasResponse();
        this.request("DescribeQuotas", req, resp, cb);
    }

    /**
     * This API is used to bulk disable registration codes.
     * @param {DisableRegisterCodesRequest} req
     * @param {function(string, DisableRegisterCodesResponse):void} cb
     * @public
     */
    DisableRegisterCodes(req, cb) {
        let resp = new DisableRegisterCodesResponse();
        this.request("DisableRegisterCodes", req, resp, cb);
    }

    /**
     * This API is used to query scenario details.
     * @param {DescribeScenesRequest} req
     * @param {function(string, DescribeScenesResponse):void} cb
     * @public
     */
    DescribeScenes(req, cb) {
        let resp = new DescribeScenesResponse();
        this.request("DescribeScenes", req, resp, cb);
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


}
module.exports = TatClient;
