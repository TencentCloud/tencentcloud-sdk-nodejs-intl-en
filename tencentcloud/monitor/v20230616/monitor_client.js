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
const DescribeAlarmNotifyHistoriesRequest = models.DescribeAlarmNotifyHistoriesRequest;
const ListAIWorkbenchArtifactsRequest = models.ListAIWorkbenchArtifactsRequest;
const ListAIWorkbenchMCPsRequest = models.ListAIWorkbenchMCPsRequest;
const DescribeAIWorkbenchAgentResponse = models.DescribeAIWorkbenchAgentResponse;
const CreateAIWorkbenchAgentResponse = models.CreateAIWorkbenchAgentResponse;
const PageByNoParams = models.PageByNoParams;
const DeleteAIWorkbenchAgentRequest = models.DeleteAIWorkbenchAgentRequest;
const ListAIWorkbenchResourceInstancesRequest = models.ListAIWorkbenchResourceInstancesRequest;
const ChannelsReceivers = models.ChannelsReceivers;
const CreateAIWorkbenchTaskResponse = models.CreateAIWorkbenchTaskResponse;
const SessionInfo = models.SessionInfo;
const DescribeAIWorkbenchExecutionRequest = models.DescribeAIWorkbenchExecutionRequest;
const ExecutionInfo = models.ExecutionInfo;
const TriggerAIWorkbenchTaskResponse = models.TriggerAIWorkbenchTaskResponse;
const PageByNoResult = models.PageByNoResult;
const GetAIWorkbenchArtifactDownloadURLResponse = models.GetAIWorkbenchArtifactDownloadURLResponse;
const ListAIWorkbenchResourceMapsRequest = models.ListAIWorkbenchResourceMapsRequest;
const ResourceMapInfo = models.ResourceMapInfo;
const AgentInfo = models.AgentInfo;
const DescribeAIWorkbenchSkillResponse = models.DescribeAIWorkbenchSkillResponse;
const AlarmLable = models.AlarmLable;
const PageByNumResult = models.PageByNumResult;
const Tag = models.Tag;
const ListAIWorkbenchMCPsResponse = models.ListAIWorkbenchMCPsResponse;
const CreateAIWorkbenchAgentRequest = models.CreateAIWorkbenchAgentRequest;
const ListAIWorkbenchSkillsResponse = models.ListAIWorkbenchSkillsResponse;
const DeleteAIWorkbenchTaskRequest = models.DeleteAIWorkbenchTaskRequest;
const CreateAIWorkbenchTaskRequest = models.CreateAIWorkbenchTaskRequest;
const DescribeAIWorkbenchArtifactRequest = models.DescribeAIWorkbenchArtifactRequest;
const ListAIWorkbenchSkillsRequest = models.ListAIWorkbenchSkillsRequest;
const ListAIWorkbenchResourceMapsResponse = models.ListAIWorkbenchResourceMapsResponse;
const ListAIWorkbenchSessionsRequest = models.ListAIWorkbenchSessionsRequest;
const DescribeAIWorkbenchArtifactResponse = models.DescribeAIWorkbenchArtifactResponse;
const CancelAIWorkbenchChatResponse = models.CancelAIWorkbenchChatResponse;
const UpdateAIWorkbenchAgentRequest = models.UpdateAIWorkbenchAgentRequest;
const ListAIWorkbenchArtifactsResponse = models.ListAIWorkbenchArtifactsResponse;
const CancelAIWorkbenchChatRequest = models.CancelAIWorkbenchChatRequest;
const ListAIWorkbenchMessagesRequest = models.ListAIWorkbenchMessagesRequest;
const ListAIWorkbenchAgentsResponse = models.ListAIWorkbenchAgentsResponse;
const ListAIWorkbenchExecutionsResponse = models.ListAIWorkbenchExecutionsResponse;
const DescribeAIWorkbenchAgentRequest = models.DescribeAIWorkbenchAgentRequest;
const DescribeAlarmNotifyHistoriesResponse = models.DescribeAlarmNotifyHistoriesResponse;
const InstructionConfig = models.InstructionConfig;
const DeleteAIWorkbenchTaskResponse = models.DeleteAIWorkbenchTaskResponse;
const ContentBlockInfo = models.ContentBlockInfo;
const ArtifactInfo = models.ArtifactInfo;
const PageByNumParams = models.PageByNumParams;
const GetAIWorkbenchArtifactDownloadURLRequest = models.GetAIWorkbenchArtifactDownloadURLRequest;
const ListAIWorkbenchResourceInstancesResponse = models.ListAIWorkbenchResourceInstancesResponse;
const ListAIWorkbenchExecutionsRequest = models.ListAIWorkbenchExecutionsRequest;
const ListAIWorkbenchAgentsRequest = models.ListAIWorkbenchAgentsRequest;
const NotifyRelatedNotice = models.NotifyRelatedNotice;
const SkillInfo = models.SkillInfo;
const DescribeAIWorkbenchSkillRequest = models.DescribeAIWorkbenchSkillRequest;
const AlarmNotifyHistory = models.AlarmNotifyHistory;
const DescribeAIWorkbenchSessionResponse = models.DescribeAIWorkbenchSessionResponse;
const TaskInfo = models.TaskInfo;
const DescribeAIWorkbenchSessionRequest = models.DescribeAIWorkbenchSessionRequest;
const EnvEntry = models.EnvEntry;
const ListAIWorkbenchSessionsResponse = models.ListAIWorkbenchSessionsResponse;
const ListAIWorkbenchTasksResponse = models.ListAIWorkbenchTasksResponse;
const MessageInfo = models.MessageInfo;
const DescribeAIWorkbenchExecutionResponse = models.DescribeAIWorkbenchExecutionResponse;
const UpdateAIWorkbenchAgentResponse = models.UpdateAIWorkbenchAgentResponse;
const MCPInfo = models.MCPInfo;
const TriggerAIWorkbenchTaskRequest = models.TriggerAIWorkbenchTaskRequest;
const ListAIWorkbenchMessagesResponse = models.ListAIWorkbenchMessagesResponse;
const DeleteAIWorkbenchAgentResponse = models.DeleteAIWorkbenchAgentResponse;
const EnvVar = models.EnvVar;
const ListAIWorkbenchTasksRequest = models.ListAIWorkbenchTasksRequest;
const ResourceInstance = models.ResourceInstance;


/**
 * monitor client
 * @class
 */
class MonitorClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("monitor.intl.tencentcloudapi.com", "2023-06-16", credential, region, profile);
    }
    
    /**
     * Query execution details.
     * @param {DescribeAIWorkbenchExecutionRequest} req
     * @param {function(string, DescribeAIWorkbenchExecutionResponse):void} cb
     * @public
     */
    DescribeAIWorkbenchExecution(req, cb) {
        let resp = new DescribeAIWorkbenchExecutionResponse();
        this.request("DescribeAIWorkbenchExecution", req, resp, cb);
    }

    /**
     * This API is used to query message list.
     * @param {ListAIWorkbenchMessagesRequest} req
     * @param {function(string, ListAIWorkbenchMessagesResponse):void} cb
     * @public
     */
    ListAIWorkbenchMessages(req, cb) {
        let resp = new ListAIWorkbenchMessagesResponse();
        this.request("ListAIWorkbenchMessages", req, resp, cb);
    }

    /**
     * Query the execution list
     * @param {ListAIWorkbenchExecutionsRequest} req
     * @param {function(string, ListAIWorkbenchExecutionsResponse):void} cb
     * @public
     */
    ListAIWorkbenchExecutions(req, cb) {
        let resp = new ListAIWorkbenchExecutionsResponse();
        this.request("ListAIWorkbenchExecutions", req, resp, cb);
    }

    /**
     * Query the MCP list.
     * @param {ListAIWorkbenchMCPsRequest} req
     * @param {function(string, ListAIWorkbenchMCPsResponse):void} cb
     * @public
     */
    ListAIWorkbenchMCPs(req, cb) {
        let resp = new ListAIWorkbenchMCPsResponse();
        this.request("ListAIWorkbenchMCPs", req, resp, cb);
    }

    /**
     * This API is used to query the task list.
     * @param {ListAIWorkbenchTasksRequest} req
     * @param {function(string, ListAIWorkbenchTasksResponse):void} cb
     * @public
     */
    ListAIWorkbenchTasks(req, cb) {
        let resp = new ListAIWorkbenchTasksResponse();
        this.request("ListAIWorkbenchTasks", req, resp, cb);
    }

    /**
     * Query the list of resource maps
     * @param {ListAIWorkbenchResourceMapsRequest} req
     * @param {function(string, ListAIWorkbenchResourceMapsResponse):void} cb
     * @public
     */
    ListAIWorkbenchResourceMaps(req, cb) {
        let resp = new ListAIWorkbenchResourceMapsResponse();
        this.request("ListAIWorkbenchResourceMaps", req, resp, cb);
    }

    /**
     * Cancel dialogue execution
     * @param {CancelAIWorkbenchChatRequest} req
     * @param {function(string, CancelAIWorkbenchChatResponse):void} cb
     * @public
     */
    CancelAIWorkbenchChat(req, cb) {
        let resp = new CancelAIWorkbenchChatResponse();
        this.request("CancelAIWorkbenchChat", req, resp, cb);
    }

    /**
     * List resource instances.
     * @param {ListAIWorkbenchResourceInstancesRequest} req
     * @param {function(string, ListAIWorkbenchResourceInstancesResponse):void} cb
     * @public
     */
    ListAIWorkbenchResourceInstances(req, cb) {
        let resp = new ListAIWorkbenchResourceInstancesResponse();
        this.request("ListAIWorkbenchResourceInstances", req, resp, cb);
    }

    /**
     * Delete Agent
     * @param {DeleteAIWorkbenchAgentRequest} req
     * @param {function(string, DeleteAIWorkbenchAgentResponse):void} cb
     * @public
     */
    DeleteAIWorkbenchAgent(req, cb) {
        let resp = new DeleteAIWorkbenchAgentResponse();
        this.request("DeleteAIWorkbenchAgent", req, resp, cb);
    }

    /**
     * Query the skill list
     * @param {ListAIWorkbenchSkillsRequest} req
     * @param {function(string, ListAIWorkbenchSkillsResponse):void} cb
     * @public
     */
    ListAIWorkbenchSkills(req, cb) {
        let resp = new ListAIWorkbenchSkillsResponse();
        this.request("ListAIWorkbenchSkills", req, resp, cb);
    }

    /**
     * Query session list
     * @param {ListAIWorkbenchSessionsRequest} req
     * @param {function(string, ListAIWorkbenchSessionsResponse):void} cb
     * @public
     */
    ListAIWorkbenchSessions(req, cb) {
        let resp = new ListAIWorkbenchSessionsResponse();
        this.request("ListAIWorkbenchSessions", req, resp, cb);
    }

    /**
     * Query Agent details.
     * @param {DescribeAIWorkbenchAgentRequest} req
     * @param {function(string, DescribeAIWorkbenchAgentResponse):void} cb
     * @public
     */
    DescribeAIWorkbenchAgent(req, cb) {
        let resp = new DescribeAIWorkbenchAgentResponse();
        this.request("DescribeAIWorkbenchAgent", req, resp, cb);
    }

    /**
     * Query session details
     * @param {DescribeAIWorkbenchSessionRequest} req
     * @param {function(string, DescribeAIWorkbenchSessionResponse):void} cb
     * @public
     */
    DescribeAIWorkbenchSession(req, cb) {
        let resp = new DescribeAIWorkbenchSessionResponse();
        this.request("DescribeAIWorkbenchSession", req, resp, cb);
    }

    /**
     * This API is used to delete a task.
     * @param {DeleteAIWorkbenchTaskRequest} req
     * @param {function(string, DeleteAIWorkbenchTaskResponse):void} cb
     * @public
     */
    DeleteAIWorkbenchTask(req, cb) {
        let resp = new DeleteAIWorkbenchTaskResponse();
        this.request("DeleteAIWorkbenchTask", req, resp, cb);
    }

    /**
     * This API is used to create an Agent.
     * @param {CreateAIWorkbenchAgentRequest} req
     * @param {function(string, CreateAIWorkbenchAgentResponse):void} cb
     * @public
     */
    CreateAIWorkbenchAgent(req, cb) {
        let resp = new CreateAIWorkbenchAgentResponse();
        this.request("CreateAIWorkbenchAgent", req, resp, cb);
    }

    /**
     * Query alarm notification history as needed
     * @param {DescribeAlarmNotifyHistoriesRequest} req
     * @param {function(string, DescribeAlarmNotifyHistoriesResponse):void} cb
     * @public
     */
    DescribeAlarmNotifyHistories(req, cb) {
        let resp = new DescribeAlarmNotifyHistoriesResponse();
        this.request("DescribeAlarmNotifyHistories", req, resp, cb);
    }

    /**
     * Query artifact details.
     * @param {DescribeAIWorkbenchArtifactRequest} req
     * @param {function(string, DescribeAIWorkbenchArtifactResponse):void} cb
     * @public
     */
    DescribeAIWorkbenchArtifact(req, cb) {
        let resp = new DescribeAIWorkbenchArtifactResponse();
        this.request("DescribeAIWorkbenchArtifact", req, resp, cb);
    }

    /**
     * Query the product list
     * @param {ListAIWorkbenchArtifactsRequest} req
     * @param {function(string, ListAIWorkbenchArtifactsResponse):void} cb
     * @public
     */
    ListAIWorkbenchArtifacts(req, cb) {
        let resp = new ListAIWorkbenchArtifactsResponse();
        this.request("ListAIWorkbenchArtifacts", req, resp, cb);
    }

    /**
     * Manually trigger a task.
     * @param {TriggerAIWorkbenchTaskRequest} req
     * @param {function(string, TriggerAIWorkbenchTaskResponse):void} cb
     * @public
     */
    TriggerAIWorkbenchTask(req, cb) {
        let resp = new TriggerAIWorkbenchTaskResponse();
        this.request("TriggerAIWorkbenchTask", req, resp, cb);
    }

    /**
     * Create a task
     * @param {CreateAIWorkbenchTaskRequest} req
     * @param {function(string, CreateAIWorkbenchTaskResponse):void} cb
     * @public
     */
    CreateAIWorkbenchTask(req, cb) {
        let resp = new CreateAIWorkbenchTaskResponse();
        this.request("CreateAIWorkbenchTask", req, resp, cb);
    }

    /**
     * Update an Agent
     * @param {UpdateAIWorkbenchAgentRequest} req
     * @param {function(string, UpdateAIWorkbenchAgentResponse):void} cb
     * @public
     */
    UpdateAIWorkbenchAgent(req, cb) {
        let resp = new UpdateAIWorkbenchAgentResponse();
        this.request("UpdateAIWorkbenchAgent", req, resp, cb);
    }

    /**
     * Query the Agent list.
     * @param {ListAIWorkbenchAgentsRequest} req
     * @param {function(string, ListAIWorkbenchAgentsResponse):void} cb
     * @public
     */
    ListAIWorkbenchAgents(req, cb) {
        let resp = new ListAIWorkbenchAgentsResponse();
        this.request("ListAIWorkbenchAgents", req, resp, cb);
    }

    /**
     * Query skill details
     * @param {DescribeAIWorkbenchSkillRequest} req
     * @param {function(string, DescribeAIWorkbenchSkillResponse):void} cb
     * @public
     */
    DescribeAIWorkbenchSkill(req, cb) {
        let resp = new DescribeAIWorkbenchSkillResponse();
        this.request("DescribeAIWorkbenchSkill", req, resp, cb);
    }

    /**
     * Get the download URL of AI Workbench artifacts.
     * @param {GetAIWorkbenchArtifactDownloadURLRequest} req
     * @param {function(string, GetAIWorkbenchArtifactDownloadURLResponse):void} cb
     * @public
     */
    GetAIWorkbenchArtifactDownloadURL(req, cb) {
        let resp = new GetAIWorkbenchArtifactDownloadURLResponse();
        this.request("GetAIWorkbenchArtifactDownloadURL", req, resp, cb);
    }


}
module.exports = MonitorClient;
