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
const AbstractModel = require("../../common/abstract_model");

/**
 * DescribeAlarmNotifyHistories request structure.
 * @class
 */
class DescribeAlarmNotifyHistoriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Monitoring type
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * Start time, used as a Unix timestamp in seconds.
         * @type {number || null}
         */
        this.QueryBaseTime = null;

        /**
         * Period to query before QueryBaseTime, in seconds.
         * @type {number || null}
         */
        this.QueryBeforeSeconds = null;

        /**
         * Pagination parameter.
         * @type {PageByNoParams || null}
         */
        this.PageParams = null;

        /**
         * Fill in when the monitoring type is MT_QCE. Namespace of the affiliation.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Fill in when the monitoring type is MT_QCE. Alarm policy type
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * Query the notification history of a policy
         * @type {string || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.QueryBaseTime = 'QueryBaseTime' in params ? params.QueryBaseTime : null;
        this.QueryBeforeSeconds = 'QueryBeforeSeconds' in params ? params.QueryBeforeSeconds : null;

        if (params.PageParams) {
            let obj = new PageByNoParams();
            obj.deserialize(params.PageParams)
            this.PageParams = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * ListAIWorkbenchArtifacts request structure.
 * @class
 */
class ListAIWorkbenchArtifactsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * <p>Session ID.</p>
         * @type {Array.<string> || null}
         */
        this.SessionIds = null;

        /**
         * <p>Message content type</p>
         * @type {Array.<string> || null}
         */
        this.MimeTypes = null;

        /**
         * <p>Sorting order</p><p>Enumeration values:</p><ul><li>ASC: ascending order</li><li>DESC: descending order</li></ul>
         * @type {string || null}
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.SessionIds = 'SessionIds' in params ? params.SessionIds : null;
        this.MimeTypes = 'MimeTypes' in params ? params.MimeTypes : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * ListAIWorkbenchMCPs request structure.
 * @class
 */
class ListAIWorkbenchMCPsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * <p>Filter by transmission protocol</p>
         * @type {string || null}
         */
        this.Transport = null;

        /**
         * <p>Search keyword</p>
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * <p>Whether to enable filter</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * <p>Associated mcp</p>
         * @type {Array.<string> || null}
         */
        this.MCPIds = null;

        /**
         * <p>MCP type (built-in/private)</p><p>Enumeration values:</p><ul><li>builtin: platform built-in</li><li>private: user-customized</li></ul>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Transport = 'Transport' in params ? params.Transport : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.MCPIds = 'MCPIds' in params ? params.MCPIds : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeAIWorkbenchAgent response structure.
 * @class
 */
class DescribeAIWorkbenchAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Agent Information</p>
         * @type {AgentInfo || null}
         */
        this.Agent = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new AgentInfo();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAIWorkbenchAgent response structure.
 * @class
 */
class CreateAIWorkbenchAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Agent ID</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Pagination request parameters
 * @class
 */
class PageByNoParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of items per page.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * Page number, starting from 1.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PageNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;

    }
}

/**
 * DeleteAIWorkbenchAgent request structure.
 * @class
 */
class DeleteAIWorkbenchAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Agent ID</p>
         * @type {string || null}
         */
        this.AgentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;

    }
}

/**
 * ListAIWorkbenchResourceInstances request structure.
 * @class
 */
class ListAIWorkbenchResourceInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Resource map ID</p>
         * @type {string || null}
         */
        this.ResourceMapId = null;

        /**
         * <p>Pagination parameters</p>
         * @type {PageByNumParams || null}
         */
        this.PageParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceMapId = 'ResourceMapId' in params ? params.ResourceMapId : null;

        if (params.PageParams) {
            let obj = new PageByNumParams();
            obj.deserialize(params.PageParams)
            this.PageParams = obj;
        }

    }
}

/**
 * Receiver details
 * @class
 */
class ChannelsReceivers extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification channel name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * Recipient.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * Sending result. Valid values: 0, (invalid), 1 (successful), 2 (failed), and 3 (no sending required).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SendStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.SendStatus = 'SendStatus' in params ? params.SendStatus : null;

    }
}

/**
 * CreateAIWorkbenchTask response structure.
 * @class
 */
class CreateAIWorkbenchTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Session entity
 * @class
 */
class SessionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Session ID</p>
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * <p>Agent ID</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * <p>Session title</p>
         * @type {string || null}
         */
        this.Title = null;

        /**
         * <p>Status: active / archived / deleted</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>If the session is triggered by a task, carry the task ID that triggers the session.</p>
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeAIWorkbenchExecution request structure.
 * @class
 */
class DescribeAIWorkbenchExecutionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Execution ID</p>
         * @type {string || null}
         */
        this.ExecutionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecutionId = 'ExecutionId' in params ? params.ExecutionId : null;

    }
}

/**
 * Execution record entity
 * @class
 */
class ExecutionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * <p>Execution ID</p>
         * @type {string || null}
         */
        this.ExecutionId = null;

        /**
         * <p>Agent ID</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * <p>Session ID</p>
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * <p>Trigger type: manual / cron / webhook</p>
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * <p>Status: pending/running/completed/failed/timeout/cancelled</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Execution Abstract</p>
         * @type {string || null}
         */
        this.Summary = null;

        /**
         * <p>Execution time (ms)</p>
         * @type {number || null}
         */
        this.DurationMs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ExecutionId = 'ExecutionId' in params ? params.ExecutionId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Summary = 'Summary' in params ? params.Summary : null;
        this.DurationMs = 'DurationMs' in params ? params.DurationMs : null;

    }
}

/**
 * TriggerAIWorkbenchTask response structure.
 * @class
 */
class TriggerAIWorkbenchTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Execution ID.</p>
         * @type {string || null}
         */
        this.ExecutionId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecutionId = 'ExecutionId' in params ? params.ExecutionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Pagination result parameters
 * @class
 */
class PageByNoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Total number of pages.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Current page number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CurrentPageNo = null;

        /**
         * [Deprecated] Whether it has reached the end.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsEnd = null;

        /**
         * Whether it has traversed to the end.
         * @type {boolean || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.CurrentPageNo = 'CurrentPageNo' in params ? params.CurrentPageNo : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * GetAIWorkbenchArtifactDownloadURL response structure.
 * @class
 */
class GetAIWorkbenchArtifactDownloadURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>COS pre-signed HTTPS download URL</p>
         * @type {string || null}
         */
        this.DownloadURL = null;

        /**
         * <p>URL expiration time (RFC3339 format)</p>
         * @type {string || null}
         */
        this.ExpiredAt = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadURL = 'DownloadURL' in params ? params.DownloadURL : null;
        this.ExpiredAt = 'ExpiredAt' in params ? params.ExpiredAt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAIWorkbenchResourceMaps request structure.
 * @class
 */
class ListAIWorkbenchResourceMapsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * <p>Search by name</p>
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * Resource map entity
 * @class
 */
class ResourceMapInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Resource map ID</p>
         * @type {string || null}
         */
        this.ResourceMapId = null;

        /**
         * <p>Resource map name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Resource map description</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Total number of instances</p>
         * @type {number || null}
         */
        this.InstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceMapId = 'ResourceMapId' in params ? params.ResourceMapId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

    }
}

/**
 * Agent information.
 * @class
 */
class AgentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Agent ID</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * <p>Agent name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Agent description</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Agent Category.</p>
         * @type {string || null}
         */
        this.Category = null;

        /**
         * <p>Status: draft/configured/running/standby/disabled</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>List of associated skill IDs.</p>
         * @type {Array.<string> || null}
         */
        this.SkillIds = null;

        /**
         * <p>Associated resource map ID.</p>
         * @type {string || null}
         */
        this.ResourceMapId = null;

        /**
         * <p>Associated mcp id.</p>
         * @type {Array.<string> || null}
         */
        this.MCPIds = null;

        /**
         * <p>Resource Tag.</p>
         * @type {Array.<Tag> || null}
         */
        this.CamTags = null;

        /**
         * <p>Environment variables required by the agent at runtime</p>
         * @type {Array.<EnvVar> || null}
         */
        this.EnvVars = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SkillIds = 'SkillIds' in params ? params.SkillIds : null;
        this.ResourceMapId = 'ResourceMapId' in params ? params.ResourceMapId : null;
        this.MCPIds = 'MCPIds' in params ? params.MCPIds : null;

        if (params.CamTags) {
            this.CamTags = new Array();
            for (let z in params.CamTags) {
                let obj = new Tag();
                obj.deserialize(params.CamTags[z]);
                this.CamTags.push(obj);
            }
        }

        if (params.EnvVars) {
            this.EnvVars = new Array();
            for (let z in params.EnvVars) {
                let obj = new EnvVar();
                obj.deserialize(params.EnvVars[z]);
                this.EnvVars.push(obj);
            }
        }

    }
}

/**
 * DescribeAIWorkbenchSkill response structure.
 * @class
 */
class DescribeAIWorkbenchSkillResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Skill information.</p>
         * @type {SkillInfo || null}
         */
        this.Skill = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Skill) {
            let obj = new SkillInfo();
            obj.deserialize(params.Skill)
            this.Skill = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Alarming Label
 * @class
 */
class AlarmLable extends  AbstractModel {
    constructor(){
        super();

        /**
         * label name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * label value
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Pagination result parameters
 * @class
 */
class PageByNumResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Total number of data</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * <p>Total number of pages</p>
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * <p>Current page number</p>
         * @type {number || null}
         */
        this.CurrentPageNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.CurrentPageNo = 'CurrentPageNo' in params ? params.CurrentPageNo : null;

    }
}

/**
 * Tag.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ListAIWorkbenchMCPs response structure.
 * @class
 */
class ListAIWorkbenchMCPsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>MCP list</p>
         * @type {Array.<MCPInfo> || null}
         */
        this.MCPs = null;

        /**
         * <p>Pagination result.</p>
         * @type {PageByNumResult || null}
         */
        this.PageResult = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MCPs) {
            this.MCPs = new Array();
            for (let z in params.MCPs) {
                let obj = new MCPInfo();
                obj.deserialize(params.MCPs[z]);
                this.MCPs.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNumResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAIWorkbenchAgent request structure.
 * @class
 */
class CreateAIWorkbenchAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Agent Name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Agent description</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Agent Category</p>
         * @type {string || null}
         */
        this.Category = null;

        /**
         * <p>Agent tag</p>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * <p>Agent prompt content</p>
         * @type {InstructionConfig || null}
         */
        this.Instruction = null;

        /**
         * <p>List of associated skill IDs.</p>
         * @type {Array.<string> || null}
         */
        this.SkillIds = null;

        /**
         * <p>Source: builtin / custom</p>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * <p>Map ID of the associated resource</p>
         * @type {string || null}
         */
        this.ResourceMapId = null;

        /**
         * <p>Associated mcp tool</p>
         * @type {Array.<string> || null}
         */
        this.MCPIds = null;

        /**
         * <p>Resource tag</p>
         * @type {Array.<Tag> || null}
         */
        this.CamTags = null;

        /**
         * <p>agent runtime environment variable</p>
         * @type {Array.<EnvVar> || null}
         */
        this.EnvVars = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

        if (params.Instruction) {
            let obj = new InstructionConfig();
            obj.deserialize(params.Instruction)
            this.Instruction = obj;
        }
        this.SkillIds = 'SkillIds' in params ? params.SkillIds : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.ResourceMapId = 'ResourceMapId' in params ? params.ResourceMapId : null;
        this.MCPIds = 'MCPIds' in params ? params.MCPIds : null;

        if (params.CamTags) {
            this.CamTags = new Array();
            for (let z in params.CamTags) {
                let obj = new Tag();
                obj.deserialize(params.CamTags[z]);
                this.CamTags.push(obj);
            }
        }

        if (params.EnvVars) {
            this.EnvVars = new Array();
            for (let z in params.EnvVars) {
                let obj = new EnvVar();
                obj.deserialize(params.EnvVars[z]);
                this.EnvVars.push(obj);
            }
        }

    }
}

/**
 * ListAIWorkbenchSkills response structure.
 * @class
 */
class ListAIWorkbenchSkillsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>List of skills</p>
         * @type {Array.<SkillInfo> || null}
         */
        this.Skills = null;

        /**
         * <p>Pagination result</p>
         * @type {PageByNumResult || null}
         */
        this.PageResult = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Skills) {
            this.Skills = new Array();
            for (let z in params.Skills) {
                let obj = new SkillInfo();
                obj.deserialize(params.Skills[z]);
                this.Skills.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNumResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAIWorkbenchTask request structure.
 * @class
 */
class DeleteAIWorkbenchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateAIWorkbenchTask request structure.
 * @class
 */
class CreateAIWorkbenchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task Name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Task description</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Associated Agent ID</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * <p>Prompt Template</p>
         * @type {string || null}
         */
        this.PromptTemplate = null;

        /**
         * <p>Output format: markdown / json</p>
         * @type {string || null}
         */
        this.OutputFormat = null;

        /**
         * <p>Trigger type: manual / cron / webhook</p>
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * <p>Cron expression</p>
         * @type {string || null}
         */
        this.CronExpr = null;

        /**
         * <p>Cron time zone</p>
         * @type {string || null}
         */
        this.CronTimezone = null;

        /**
         * <p>Associated resource map ID</p>
         * @type {string || null}
         */
        this.ResourceMapId = null;

        /**
         * <p>Skill ID list</p>
         * @type {Array.<string> || null}
         */
        this.SkillIds = null;

        /**
         * <p>MCP endpoint ID list</p>
         * @type {Array.<string> || null}
         */
        this.McpEndpointIds = null;

        /**
         * <p>Timeout (seconds)</p>
         * @type {number || null}
         */
        this.TimeoutSec = null;

        /**
         * <p>Retry count</p>
         * @type {number || null}
         */
        this.RetryCount = null;

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.PromptTemplate = 'PromptTemplate' in params ? params.PromptTemplate : null;
        this.OutputFormat = 'OutputFormat' in params ? params.OutputFormat : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.CronExpr = 'CronExpr' in params ? params.CronExpr : null;
        this.CronTimezone = 'CronTimezone' in params ? params.CronTimezone : null;
        this.ResourceMapId = 'ResourceMapId' in params ? params.ResourceMapId : null;
        this.SkillIds = 'SkillIds' in params ? params.SkillIds : null;
        this.McpEndpointIds = 'McpEndpointIds' in params ? params.McpEndpointIds : null;
        this.TimeoutSec = 'TimeoutSec' in params ? params.TimeoutSec : null;
        this.RetryCount = 'RetryCount' in params ? params.RetryCount : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DescribeAIWorkbenchArtifact request structure.
 * @class
 */
class DescribeAIWorkbenchArtifactRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Product ID</p>
         * @type {string || null}
         */
        this.ArtifactId = null;

        /**
         * <p>Whether to download the URL</p><p><code>1</code> = required, <code>0</code> or not passed = not required</p>
         * @type {number || null}
         */
        this.NeedDownloadURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ArtifactId = 'ArtifactId' in params ? params.ArtifactId : null;
        this.NeedDownloadURL = 'NeedDownloadURL' in params ? params.NeedDownloadURL : null;

    }
}

/**
 * ListAIWorkbenchSkills request structure.
 * @class
 */
class ListAIWorkbenchSkillsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * <p>Filter by type</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Search keyword</p>
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * <p>Whether to enable filter</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * <p>Skill ID list filter</p>
         * @type {Array.<string> || null}
         */
        this.SkillIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.SkillIds = 'SkillIds' in params ? params.SkillIds : null;

    }
}

/**
 * ListAIWorkbenchResourceMaps response structure.
 * @class
 */
class ListAIWorkbenchResourceMapsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Resource map list</p>
         * @type {Array.<ResourceMapInfo> || null}
         */
        this.ResourceMaps = null;

        /**
         * <p>Pagination result.</p>
         * @type {PageByNumResult || null}
         */
        this.PageResult = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResourceMaps) {
            this.ResourceMaps = new Array();
            for (let z in params.ResourceMaps) {
                let obj = new ResourceMapInfo();
                obj.deserialize(params.ResourceMaps[z]);
                this.ResourceMaps.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNumResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAIWorkbenchSessions request structure.
 * @class
 */
class ListAIWorkbenchSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * <p>Filter by Agent</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * <p>Search keyword</p>
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * <p>Session ID list filtering</p>
         * @type {Array.<string> || null}
         */
        this.SessionIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.SessionIds = 'SessionIds' in params ? params.SessionIds : null;

    }
}

/**
 * DescribeAIWorkbenchArtifact response structure.
 * @class
 */
class DescribeAIWorkbenchArtifactResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Product information</p>
         * @type {ArtifactInfo || null}
         */
        this.Artifact = null;

        /**
         * <p>COS pre-signed download URL</p>
         * @type {string || null}
         */
        this.DownloadURL = null;

        /**
         * <p>Download URL expiration time (in RFC3339 format)</p>
         * @type {string || null}
         */
        this.DownloadURLExpiredAt = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Artifact) {
            let obj = new ArtifactInfo();
            obj.deserialize(params.Artifact)
            this.Artifact = obj;
        }
        this.DownloadURL = 'DownloadURL' in params ? params.DownloadURL : null;
        this.DownloadURLExpiredAt = 'DownloadURLExpiredAt' in params ? params.DownloadURLExpiredAt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelAIWorkbenchChat response structure.
 * @class
 */
class CancelAIWorkbenchChatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAIWorkbenchAgent request structure.
 * @class
 */
class UpdateAIWorkbenchAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Agent ID</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * <p>Agent name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Agent description</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Agent Category.</p>
         * @type {string || null}
         */
        this.Category = null;

        /**
         * <p>Agent Tag.</p>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * <p>Agent prompt</p>
         * @type {InstructionConfig || null}
         */
        this.Instruction = null;

        /**
         * <p>List of associated skill IDs.</p>
         * @type {Array.<string> || null}
         */
        this.SkillIds = null;

        /**
         * <p>Source</p>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * <p>Status.</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>ID of the associated resource map</p>
         * @type {string || null}
         */
        this.ResourceMapId = null;

        /**
         * <p>Associated mcp</p>
         * @type {Array.<string> || null}
         */
        this.MCPIds = null;

        /**
         * <p>Environment variables required by the agent at runtime</p>
         * @type {Array.<EnvVar> || null}
         */
        this.EnvVars = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

        if (params.Instruction) {
            let obj = new InstructionConfig();
            obj.deserialize(params.Instruction)
            this.Instruction = obj;
        }
        this.SkillIds = 'SkillIds' in params ? params.SkillIds : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ResourceMapId = 'ResourceMapId' in params ? params.ResourceMapId : null;
        this.MCPIds = 'MCPIds' in params ? params.MCPIds : null;

        if (params.EnvVars) {
            this.EnvVars = new Array();
            for (let z in params.EnvVars) {
                let obj = new EnvVar();
                obj.deserialize(params.EnvVars[z]);
                this.EnvVars.push(obj);
            }
        }

    }
}

/**
 * ListAIWorkbenchArtifacts response structure.
 * @class
 */
class ListAIWorkbenchArtifactsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Product list</p>
         * @type {Array.<ArtifactInfo> || null}
         */
        this.Artifacts = null;

        /**
         * <p>Pagination result.</p>
         * @type {PageByNumResult || null}
         */
        this.PageResult = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Artifacts) {
            this.Artifacts = new Array();
            for (let z in params.Artifacts) {
                let obj = new ArtifactInfo();
                obj.deserialize(params.Artifacts[z]);
                this.Artifacts.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNumResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelAIWorkbenchChat request structure.
 * @class
 */
class CancelAIWorkbenchChatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Session id.</p>
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * ListAIWorkbenchMessages request structure.
 * @class
 */
class ListAIWorkbenchMessagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Conversation ID</p>
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * <p>Tag for cursor pagination</p>
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * <p>Window size</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Pull sequence</p>
         * @type {string || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * ListAIWorkbenchAgents response structure.
 * @class
 */
class ListAIWorkbenchAgentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Agent list</p>
         * @type {Array.<AgentInfo> || null}
         */
        this.Agents = null;

        /**
         * <p>Pagination result</p>
         * @type {PageByNumResult || null}
         */
        this.PageResult = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new AgentInfo();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNumResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAIWorkbenchExecutions response structure.
 * @class
 */
class ListAIWorkbenchExecutionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Execution list.</p>
         * @type {Array.<ExecutionInfo> || null}
         */
        this.Executions = null;

        /**
         * <p>Pagination result.</p>
         * @type {PageByNumResult || null}
         */
        this.PageResult = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Executions) {
            this.Executions = new Array();
            for (let z in params.Executions) {
                let obj = new ExecutionInfo();
                obj.deserialize(params.Executions[z]);
                this.Executions.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNumResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAIWorkbenchAgent request structure.
 * @class
 */
class DescribeAIWorkbenchAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Agent ID</p>
         * @type {string || null}
         */
        this.AgentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;

    }
}

/**
 * DescribeAlarmNotifyHistories response structure.
 * @class
 */
class DescribeAlarmNotifyHistoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm history
         * @type {Array.<AlarmNotifyHistory> || null}
         */
        this.AlarmNotifyHistoryList = null;

        /**
         * Pagination condition
         * @type {PageByNoResult || null}
         */
        this.PageResult = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AlarmNotifyHistoryList) {
            this.AlarmNotifyHistoryList = new Array();
            for (let z in params.AlarmNotifyHistoryList) {
                let obj = new AlarmNotifyHistory();
                obj.deserialize(params.AlarmNotifyHistoryList[z]);
                this.AlarmNotifyHistoryList.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNoResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Clone prompt configuration
 * @class
 */
class InstructionConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Role definition</p>
         * @type {string || null}
         */
        this.RolePosition = null;

        /**
         * <p>Core responsibility</p>
         * @type {string || null}
         */
        this.CoreDuty = null;

        /**
         * <p>Core principle</p>
         * @type {string || null}
         */
        this.CoreTruths = null;

        /**
         * <p>Style constraints</p>
         * @type {string || null}
         */
        this.Vibe = null;

        /**
         * <p>Notes</p>
         * @type {string || null}
         */
        this.Boundaries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RolePosition = 'RolePosition' in params ? params.RolePosition : null;
        this.CoreDuty = 'CoreDuty' in params ? params.CoreDuty : null;
        this.CoreTruths = 'CoreTruths' in params ? params.CoreTruths : null;
        this.Vibe = 'Vibe' in params ? params.Vibe : null;
        this.Boundaries = 'Boundaries' in params ? params.Boundaries : null;

    }
}

/**
 * DeleteAIWorkbenchTask response structure.
 * @class
 */
class DeleteAIWorkbenchTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Each ContentBlockInfo corresponds to an AGUI event converted from a downstream ContentBlock.
 * @class
 */
class ContentBlockInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Type.</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Data content.</p>
         * @type {string || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * Product entity
 * @class
 */
class ArtifactInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Product ID</p>
         * @type {string || null}
         */
        this.ArtifactId = null;

        /**
         * <p>Product name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Physical type</p>
         * @type {string || null}
         */
        this.MimeType = null;

        /**
         * <p>File size (byte)</p>
         * @type {number || null}
         */
        this.SizeBytes = null;

        /**
         * <p>Whether it is public</p>
         * @type {boolean || null}
         */
        this.IsGlobal = null;

        /**
         * <p>Creation time (Unix timestamp in seconds).</p>
         * @type {number || null}
         */
        this.CreatedAt = null;

        /**
         * <p>Modification time.</p>
         * @type {number || null}
         */
        this.UpdatedAt = null;

        /**
         * <p>Agent ID that generated the artifact</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * <p>Skill ID that generates the artifact</p>
         * @type {string || null}
         */
        this.SkillId = null;

        /**
         * <p>For parsing calls to the download API</p>
         * @type {string || null}
         */
        this.StoragePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ArtifactId = 'ArtifactId' in params ? params.ArtifactId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MimeType = 'MimeType' in params ? params.MimeType : null;
        this.SizeBytes = 'SizeBytes' in params ? params.SizeBytes : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.SkillId = 'SkillId' in params ? params.SkillId : null;
        this.StoragePath = 'StoragePath' in params ? params.StoragePath : null;

    }
}

/**
 * Input parameter for paginating by which page
 * @class
 */
class PageByNumParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * <p>Page number, starting from 1</p>
         * @type {number || null}
         */
        this.PageNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;

    }
}

/**
 * GetAIWorkbenchArtifactDownloadURL request structure.
 * @class
 */
class GetAIWorkbenchArtifactDownloadURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Session ID.</p>
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * <p>Artifact ID</p>
         * @type {string || null}
         */
        this.ArtifactId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ArtifactId = 'ArtifactId' in params ? params.ArtifactId : null;

    }
}

/**
 * ListAIWorkbenchResourceInstances response structure.
 * @class
 */
class ListAIWorkbenchResourceInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Resource instance list</p>
         * @type {Array.<ResourceInstance> || null}
         */
        this.Instances = null;

        /**
         * <p>Pagination result</p>
         * @type {PageByNumResult || null}
         */
        this.PageResult = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new ResourceInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNumResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAIWorkbenchExecutions request structure.
 * @class
 */
class ListAIWorkbenchExecutionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * <p>Filter by Agent</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * <p>Filter by status</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Execution ID list filter</p>
         * @type {Array.<string> || null}
         */
        this.ExecutionIds = null;

        /**
         * <p>Task ID.</p>
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * <p>Trigger mode</p>
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * <p>Key value</p>
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ExecutionIds = 'ExecutionIds' in params ? params.ExecutionIds : null;
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * ListAIWorkbenchAgents request structure.
 * @class
 */
class ListAIWorkbenchAgentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * <p>Status filtering</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Category filtering</p>
         * @type {string || null}
         */
        this.Category = null;

        /**
         * <p>Search keyword</p>
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * <p>Filter by source</p>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * <p>Agent ID list filtering</p>
         * @type {Array.<string> || null}
         */
        this.AgentIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.AgentIds = 'AgentIds' in params ? params.AgentIds : null;

    }
}

/**
 * Notification template information associated with notification history
 * @class
 */
class NotifyRelatedNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification template ID
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * Name of the notification template
         * @type {string || null}
         */
        this.NoticeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.NoticeName = 'NoticeName' in params ? params.NoticeName : null;

    }
}

/**
 * Skill entity
 * @class
 */
class SkillInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Skill ID</p>
         * @type {string || null}
         */
        this.SkillId = null;

        /**
         * <p>Skill name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Skill description.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SkillId = 'SkillId' in params ? params.SkillId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DescribeAIWorkbenchSkill request structure.
 * @class
 */
class DescribeAIWorkbenchSkillRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Skill ID</p>
         * @type {string || null}
         */
        this.SkillId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SkillId = 'SkillId' in params ? params.SkillId : null;

    }
}

/**
 * Notification history for each alert
 * @class
 */
class AlarmNotifyHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique notification ID.
         * @type {string || null}
         */
        this.NotifyId = null;

        /**
         * Alert policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Alarm cycle iD
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Notification time in Unix timestamp (in seconds).
         * @type {number || null}
         */
        this.NotifyTime = null;

        /**
         * Trigger time in Unix timestamp (in seconds).
         * @type {number || null}
         */
        this.TriggerTime = null;

        /**
         * Alarm severity level. Valid values: None, Note, Warn, and Serious.
         * @type {string || null}
         */
        this.TriggerLevel = null;

        /**
         * alert content
         * @type {string || null}
         */
        this.AlarmContent = null;

        /**
         * Alarm object
         * @type {string || null}
         */
        this.AlarmObject = null;

        /**
         * Alarm notification channel collection involved this time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ChannelSet = null;

        /**
         * Recipient information of the channel
         * @type {Array.<ChannelsReceivers> || null}
         */
        this.ChannelsReceivers = null;

        /**
         * Alarm policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Prometheus Instance ID, valid only when MT_PROME
         * @type {string || null}
         */
        this.PromeInstanceID = null;

        /**
         * Region of the Prometheus Instance. Valid at that time only for MT_PROME.
         * @type {string || null}
         */
        this.PromeInstanceRegion = null;

        /**
         * Notification template related configuration information
         * @type {Array.<NotifyRelatedNotice> || null}
         */
        this.Notices = null;

        /**
         * Alarm trigger status. Valid values: Trigger and Recovery.
         * @type {string || null}
         */
        this.TriggerStatus = null;

        /**
         * Console page address related to the present Prometheus notification history, valid only when MR_PROME
         * @type {string || null}
         */
        this.PromeConsoleURL = null;

        /**
         * Alarm label
         * @type {Array.<AlarmLable> || null}
         */
        this.Labels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotifyId = 'NotifyId' in params ? params.NotifyId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.NotifyTime = 'NotifyTime' in params ? params.NotifyTime : null;
        this.TriggerTime = 'TriggerTime' in params ? params.TriggerTime : null;
        this.TriggerLevel = 'TriggerLevel' in params ? params.TriggerLevel : null;
        this.AlarmContent = 'AlarmContent' in params ? params.AlarmContent : null;
        this.AlarmObject = 'AlarmObject' in params ? params.AlarmObject : null;
        this.ChannelSet = 'ChannelSet' in params ? params.ChannelSet : null;

        if (params.ChannelsReceivers) {
            this.ChannelsReceivers = new Array();
            for (let z in params.ChannelsReceivers) {
                let obj = new ChannelsReceivers();
                obj.deserialize(params.ChannelsReceivers[z]);
                this.ChannelsReceivers.push(obj);
            }
        }
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.PromeInstanceID = 'PromeInstanceID' in params ? params.PromeInstanceID : null;
        this.PromeInstanceRegion = 'PromeInstanceRegion' in params ? params.PromeInstanceRegion : null;

        if (params.Notices) {
            this.Notices = new Array();
            for (let z in params.Notices) {
                let obj = new NotifyRelatedNotice();
                obj.deserialize(params.Notices[z]);
                this.Notices.push(obj);
            }
        }
        this.TriggerStatus = 'TriggerStatus' in params ? params.TriggerStatus : null;
        this.PromeConsoleURL = 'PromeConsoleURL' in params ? params.PromeConsoleURL : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new AlarmLable();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

    }
}

/**
 * DescribeAIWorkbenchSession response structure.
 * @class
 */
class DescribeAIWorkbenchSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Session information</p>
         * @type {SessionInfo || null}
         */
        this.Session = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Session) {
            let obj = new SessionInfo();
            obj.deserialize(params.Session)
            this.Session = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Task entity
 * @class
 */
class TaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * <p>Task name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Task description</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Associated Agent ID</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * <p>Prompt Template</p>
         * @type {string || null}
         */
        this.PromptTemplate = null;

        /**
         * <p>Output format: markdown / json</p>
         * @type {string || null}
         */
        this.OutputFormat = null;

        /**
         * <p>Trigger type: manual / cron / webhook</p>
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * <p>Cron expression</p>
         * @type {string || null}
         */
        this.CronExpr = null;

        /**
         * <p>Cron time zone</p>
         * @type {string || null}
         */
        this.CronTimezone = null;

        /**
         * <p>List of associated skill IDs.</p>
         * @type {Array.<string> || null}
         */
        this.SkillIds = null;

        /**
         * <p>Associated MCP endpoint ID list</p>
         * @type {Array.<string> || null}
         */
        this.McpEndpointIds = null;

        /**
         * <p>Timeout (seconds)</p>
         * @type {number || null}
         */
        this.TimeoutSec = null;

        /**
         * <p>Retry count</p>
         * @type {number || null}
         */
        this.RetryCount = null;

        /**
         * <p>Notification id</p>
         * @type {Array.<string> || null}
         */
        this.NotifyIds = null;

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.PromptTemplate = 'PromptTemplate' in params ? params.PromptTemplate : null;
        this.OutputFormat = 'OutputFormat' in params ? params.OutputFormat : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.CronExpr = 'CronExpr' in params ? params.CronExpr : null;
        this.CronTimezone = 'CronTimezone' in params ? params.CronTimezone : null;
        this.SkillIds = 'SkillIds' in params ? params.SkillIds : null;
        this.McpEndpointIds = 'McpEndpointIds' in params ? params.McpEndpointIds : null;
        this.TimeoutSec = 'TimeoutSec' in params ? params.TimeoutSec : null;
        this.RetryCount = 'RetryCount' in params ? params.RetryCount : null;
        this.NotifyIds = 'NotifyIds' in params ? params.NotifyIds : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DescribeAIWorkbenchSession request structure.
 * @class
 */
class DescribeAIWorkbenchSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Session ID</p>
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * Environment variable entry
 * @class
 */
class EnvEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Environment variable value</p>
         * @type {string || null}
         */
        this.Value = null;

        /**
         * <p>Whether to mask</p>
         * @type {boolean || null}
         */
        this.Sensitive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Value = 'Value' in params ? params.Value : null;
        this.Sensitive = 'Sensitive' in params ? params.Sensitive : null;

    }
}

/**
 * ListAIWorkbenchSessions response structure.
 * @class
 */
class ListAIWorkbenchSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Session list</p>
         * @type {Array.<SessionInfo> || null}
         */
        this.Sessions = null;

        /**
         * <p>Pagination result</p>
         * @type {PageByNumResult || null}
         */
        this.PageResult = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Sessions) {
            this.Sessions = new Array();
            for (let z in params.Sessions) {
                let obj = new SessionInfo();
                obj.deserialize(params.Sessions[z]);
                this.Sessions.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNumResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAIWorkbenchTasks response structure.
 * @class
 */
class ListAIWorkbenchTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task List</p>
         * @type {Array.<TaskInfo> || null}
         */
        this.Tasks = null;

        /**
         * <p>Pagination result</p>
         * @type {PageByNumResult || null}
         */
        this.PageResult = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNumResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Message entity
 * @class
 */
class MessageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Entity id</p>
         * @type {string || null}
         */
        this.EntryId = null;

        /**
         * <p>Conversation ID</p>
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * <p>Role: user / assistant</p>
         * @type {string || null}
         */
        this.Role = null;

        /**
         * <p>Message content</p>
         * @type {string || null}
         */
        this.Content = null;

        /**
         * <p>Status.</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Block content.</p>
         * @type {Array.<ContentBlockInfo> || null}
         */
        this.ContentBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntryId = 'EntryId' in params ? params.EntryId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.ContentBlocks) {
            this.ContentBlocks = new Array();
            for (let z in params.ContentBlocks) {
                let obj = new ContentBlockInfo();
                obj.deserialize(params.ContentBlocks[z]);
                this.ContentBlocks.push(obj);
            }
        }

    }
}

/**
 * DescribeAIWorkbenchExecution response structure.
 * @class
 */
class DescribeAIWorkbenchExecutionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Execution Record</p>
         * @type {ExecutionInfo || null}
         */
        this.Execution = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Execution) {
            let obj = new ExecutionInfo();
            obj.deserialize(params.Execution)
            this.Execution = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAIWorkbenchAgent response structure.
 * @class
 */
class UpdateAIWorkbenchAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Agent information after the update</p>
         * @type {AgentInfo || null}
         */
        this.Agent = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agent) {
            let obj = new AgentInfo();
            obj.deserialize(params.Agent)
            this.Agent = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MCP entity
 * @class
 */
class MCPInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>mcp ID</p>
         * @type {string || null}
         */
        this.MCPId = null;

        /**
         * <p>MCP name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>MCP description</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>MCP URL</p>
         * @type {string || null}
         */
        this.Url = null;

        /**
         * <p>Transport protocol: sse / streamable_http / stdio</p>
         * @type {string || null}
         */
        this.Transport = null;

        /**
         * <p>Authentication type: none / bearer / basic / api_key</p>
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * <p>Authentication key (masked in the response)</p>
         * @type {string || null}
         */
        this.AuthSecret = null;

        /**
         * <p>Timeout (s)</p>
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * <p>Retry count</p>
         * @type {number || null}
         */
        this.RetryCount = null;

        /**
         * <p>Request header JSON</p>
         * @type {string || null}
         */
        this.Headers = null;

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MCPId = 'MCPId' in params ? params.MCPId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Transport = 'Transport' in params ? params.Transport : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.AuthSecret = 'AuthSecret' in params ? params.AuthSecret : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.RetryCount = 'RetryCount' in params ? params.RetryCount : null;
        this.Headers = 'Headers' in params ? params.Headers : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * TriggerAIWorkbenchTask request structure.
 * @class
 */
class TriggerAIWorkbenchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ListAIWorkbenchMessages response structure.
 * @class
 */
class ListAIWorkbenchMessagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Message list.</p>
         * @type {Array.<MessageInfo> || null}
         */
        this.Messages = null;

        /**
         * <p>Next cursor</p>
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * <p>Is there a follow-up?</p>
         * @type {boolean || null}
         */
        this.HasMore = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Messages) {
            this.Messages = new Array();
            for (let z in params.Messages) {
                let obj = new MessageInfo();
                obj.deserialize(params.Messages[z]);
                this.Messages.push(obj);
            }
        }
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;
        this.HasMore = 'HasMore' in params ? params.HasMore : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAIWorkbenchAgent response structure.
 * @class
 */
class DeleteAIWorkbenchAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Environment variables required by the agent at runtime
 * @class
 */
class EnvVar extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Environment variable key</p>
         * @type {string || null}
         */
        this.Key = null;

        /**
         * <p>Environment variable value</p>
         * @type {EnvEntry || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;

        if (params.Value) {
            let obj = new EnvEntry();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * ListAIWorkbenchTasks request structure.
 * @class
 */
class ListAIWorkbenchTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * <p>Filter by Agent</p>
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * <p>Filter by trigger type</p>
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * <p>Search keyword</p>
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * <p>Task ID list filter</p>
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * <p>Whether to enable filter criteria</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * Resource instance
 * @class
 */
class ResourceInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID</p>
         * @type {string || null}
         */
        this.Id = null;

        /**
         * <p>Service name</p>
         * @type {string || null}
         */
        this.Service = null;

        /**
         * <p>Region.</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>Ready?</p>
         * @type {boolean || null}
         */
        this.IsReady = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.IsReady = 'IsReady' in params ? params.IsReady : null;

    }
}

module.exports = {
    DescribeAlarmNotifyHistoriesRequest: DescribeAlarmNotifyHistoriesRequest,
    ListAIWorkbenchArtifactsRequest: ListAIWorkbenchArtifactsRequest,
    ListAIWorkbenchMCPsRequest: ListAIWorkbenchMCPsRequest,
    DescribeAIWorkbenchAgentResponse: DescribeAIWorkbenchAgentResponse,
    CreateAIWorkbenchAgentResponse: CreateAIWorkbenchAgentResponse,
    PageByNoParams: PageByNoParams,
    DeleteAIWorkbenchAgentRequest: DeleteAIWorkbenchAgentRequest,
    ListAIWorkbenchResourceInstancesRequest: ListAIWorkbenchResourceInstancesRequest,
    ChannelsReceivers: ChannelsReceivers,
    CreateAIWorkbenchTaskResponse: CreateAIWorkbenchTaskResponse,
    SessionInfo: SessionInfo,
    DescribeAIWorkbenchExecutionRequest: DescribeAIWorkbenchExecutionRequest,
    ExecutionInfo: ExecutionInfo,
    TriggerAIWorkbenchTaskResponse: TriggerAIWorkbenchTaskResponse,
    PageByNoResult: PageByNoResult,
    GetAIWorkbenchArtifactDownloadURLResponse: GetAIWorkbenchArtifactDownloadURLResponse,
    ListAIWorkbenchResourceMapsRequest: ListAIWorkbenchResourceMapsRequest,
    ResourceMapInfo: ResourceMapInfo,
    AgentInfo: AgentInfo,
    DescribeAIWorkbenchSkillResponse: DescribeAIWorkbenchSkillResponse,
    AlarmLable: AlarmLable,
    PageByNumResult: PageByNumResult,
    Tag: Tag,
    ListAIWorkbenchMCPsResponse: ListAIWorkbenchMCPsResponse,
    CreateAIWorkbenchAgentRequest: CreateAIWorkbenchAgentRequest,
    ListAIWorkbenchSkillsResponse: ListAIWorkbenchSkillsResponse,
    DeleteAIWorkbenchTaskRequest: DeleteAIWorkbenchTaskRequest,
    CreateAIWorkbenchTaskRequest: CreateAIWorkbenchTaskRequest,
    DescribeAIWorkbenchArtifactRequest: DescribeAIWorkbenchArtifactRequest,
    ListAIWorkbenchSkillsRequest: ListAIWorkbenchSkillsRequest,
    ListAIWorkbenchResourceMapsResponse: ListAIWorkbenchResourceMapsResponse,
    ListAIWorkbenchSessionsRequest: ListAIWorkbenchSessionsRequest,
    DescribeAIWorkbenchArtifactResponse: DescribeAIWorkbenchArtifactResponse,
    CancelAIWorkbenchChatResponse: CancelAIWorkbenchChatResponse,
    UpdateAIWorkbenchAgentRequest: UpdateAIWorkbenchAgentRequest,
    ListAIWorkbenchArtifactsResponse: ListAIWorkbenchArtifactsResponse,
    CancelAIWorkbenchChatRequest: CancelAIWorkbenchChatRequest,
    ListAIWorkbenchMessagesRequest: ListAIWorkbenchMessagesRequest,
    ListAIWorkbenchAgentsResponse: ListAIWorkbenchAgentsResponse,
    ListAIWorkbenchExecutionsResponse: ListAIWorkbenchExecutionsResponse,
    DescribeAIWorkbenchAgentRequest: DescribeAIWorkbenchAgentRequest,
    DescribeAlarmNotifyHistoriesResponse: DescribeAlarmNotifyHistoriesResponse,
    InstructionConfig: InstructionConfig,
    DeleteAIWorkbenchTaskResponse: DeleteAIWorkbenchTaskResponse,
    ContentBlockInfo: ContentBlockInfo,
    ArtifactInfo: ArtifactInfo,
    PageByNumParams: PageByNumParams,
    GetAIWorkbenchArtifactDownloadURLRequest: GetAIWorkbenchArtifactDownloadURLRequest,
    ListAIWorkbenchResourceInstancesResponse: ListAIWorkbenchResourceInstancesResponse,
    ListAIWorkbenchExecutionsRequest: ListAIWorkbenchExecutionsRequest,
    ListAIWorkbenchAgentsRequest: ListAIWorkbenchAgentsRequest,
    NotifyRelatedNotice: NotifyRelatedNotice,
    SkillInfo: SkillInfo,
    DescribeAIWorkbenchSkillRequest: DescribeAIWorkbenchSkillRequest,
    AlarmNotifyHistory: AlarmNotifyHistory,
    DescribeAIWorkbenchSessionResponse: DescribeAIWorkbenchSessionResponse,
    TaskInfo: TaskInfo,
    DescribeAIWorkbenchSessionRequest: DescribeAIWorkbenchSessionRequest,
    EnvEntry: EnvEntry,
    ListAIWorkbenchSessionsResponse: ListAIWorkbenchSessionsResponse,
    ListAIWorkbenchTasksResponse: ListAIWorkbenchTasksResponse,
    MessageInfo: MessageInfo,
    DescribeAIWorkbenchExecutionResponse: DescribeAIWorkbenchExecutionResponse,
    UpdateAIWorkbenchAgentResponse: UpdateAIWorkbenchAgentResponse,
    MCPInfo: MCPInfo,
    TriggerAIWorkbenchTaskRequest: TriggerAIWorkbenchTaskRequest,
    ListAIWorkbenchMessagesResponse: ListAIWorkbenchMessagesResponse,
    DeleteAIWorkbenchAgentResponse: DeleteAIWorkbenchAgentResponse,
    EnvVar: EnvVar,
    ListAIWorkbenchTasksRequest: ListAIWorkbenchTasksRequest,
    ResourceInstance: ResourceInstance,

}
