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
const AbstractModel = require("../../common/abstract_model");

/**
 * DeleteInstanceCustomizedDomain response structure.
 * @class
 */
class DeleteInstanceCustomizedDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * ManageExternalEndpoint request structure.
 * @class
 */
class ManageExternalEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Operation. Valid values: Create, Delete.
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * Task details
 * @class
 */
class TaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Task UUID
         * @type {string || null}
         */
        this.TaskUUID = null;

        /**
         * Task status
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * Task details
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskMessage = null;

        /**
         * Start time of the task
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * End time of the task
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FinishedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskUUID = 'TaskUUID' in params ? params.TaskUUID : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskMessage = 'TaskMessage' in params ? params.TaskMessage : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.FinishedTime = 'FinishedTime' in params ? params.FinishedTime : null;

    }
}

/**
 * DescribeReplicationInstances response structure.
 * @class
 */
class DescribeReplicationInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Replication instance list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ReplicationRegistry> || null}
         */
        this.ReplicationRegistries = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ReplicationRegistries) {
            this.ReplicationRegistries = new Array();
            for (let z in params.ReplicationRegistries) {
                let obj = new ReplicationRegistry();
                obj.deserialize(params.ReplicationRegistries[z]);
                this.ReplicationRegistries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReplicationInstanceCreateTasks response structure.
 * @class
 */
class DescribeReplicationInstanceCreateTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task details
         * @type {Array.<TaskDetail> || null}
         */
        this.TaskDetail = null;

        /**
         * Overall task status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.TaskDetail) {
            this.TaskDetail = new Array();
            for (let z in params.TaskDetail) {
                let obj = new TaskDetail();
                obj.deserialize(params.TaskDetail[z]);
                this.TaskDetail.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Trigger log
 * @class
 */
class WebhookTriggerLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Trigger ID
         * @type {number || null}
         */
        this.TriggerId = null;

        /**
         * Event type
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * Notification type
         * @type {string || null}
         */
        this.NotifyType = null;

        /**
         * Details
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TriggerId = 'TriggerId' in params ? params.TriggerId : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.NotifyType = 'NotifyType' in params ? params.NotifyType : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Private network access information
 * @class
 */
class AccessVpc extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Private network access status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Private network access IP
         * @type {string || null}
         */
        this.AccessIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AccessIp = 'AccessIp' in params ? params.AccessIp : null;

    }
}

/**
 * DeleteRepositoryTags response structure.
 * @class
 */
class DeleteRepositoryTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * ModifyTagRetentionRule request structure.
 * @class
 */
class ModifyTagRetentionRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * ID of the original namespace
         * @type {number || null}
         */
        this.NamespaceId = null;

        /**
         * Retention policy
         * @type {RetentionRule || null}
         */
        this.RetentionRule = null;

        /**
         * Original execution cycle
         * @type {string || null}
         */
        this.CronSetting = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * Whether to disable the rule
         * @type {boolean || null}
         */
        this.Disabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

        if (params.RetentionRule) {
            let obj = new RetentionRule();
            obj.deserialize(params.RetentionRule)
            this.RetentionRule = obj;
        }
        this.CronSetting = 'CronSetting' in params ? params.CronSetting : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;

    }
}

/**
 * ModifyRepository response structure.
 * @class
 */
class ModifyRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DescribeNamespaces response structure.
 * @class
 */
class DescribeNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of namespaces
         * @type {Array.<TcrNamespaceInfo> || null}
         */
        this.NamespaceList = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.NamespaceList) {
            this.NamespaceList = new Array();
            for (let z in params.NamespaceList) {
                let obj = new TcrNamespaceInfo();
                obj.deserialize(params.NamespaceList[z]);
                this.NamespaceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadHelmChart request structure.
 * @class
 */
class DownloadHelmChartRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Helm chart name
         * @type {string || null}
         */
        this.ChartName = null;

        /**
         * Helm chart version
         * @type {string || null}
         */
        this.ChartVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.ChartName = 'ChartName' in params ? params.ChartName : null;
        this.ChartVersion = 'ChartVersion' in params ? params.ChartVersion : null;

    }
}

/**
 * Tag retention rule
 * @class
 */
class RetentionRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported policy. Valid values: latestPushedK: Retain the latest specified number of pushed tags; nDaysSinceLastPush: Retain the tags pushed in the past specified number of days.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Rule value
         * @type {number || null}
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
 * CreateInstance response structure.
 * @class
 */
class CreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enterprise Edition instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstanceToken request structure.
 * @class
 */
class DeleteInstanceTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Access credential ID
         * @type {string || null}
         */
        this.TokenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.TokenId = 'TokenId' in params ? params.TokenId : null;

    }
}

/**
 * ModifyRepository request structure.
 * @class
 */
class ModifyRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Image repository name
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * Brief repository description
         * @type {string || null}
         */
        this.BriefDescription = null;

        /**
         * Detailed repository description
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.BriefDescription = 'BriefDescription' in params ? params.BriefDescription : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Synchronization rule
 * @class
 */
class ReplicationRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of synchronization rule
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Destination namespace
         * @type {string || null}
         */
        this.DestNamespace = null;

        /**
         * Whether to override
         * @type {boolean || null}
         */
        this.Override = null;

        /**
         * Synchronization filters
         * @type {Array.<ReplicationFilter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DestNamespace = 'DestNamespace' in params ? params.DestNamespace : null;
        this.Override = 'Override' in params ? params.Override : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ReplicationFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeWebhookTriggerLog response structure.
 * @class
 */
class DescribeWebhookTriggerLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of logs
         * @type {Array.<WebhookTriggerLog> || null}
         */
        this.Logs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Logs) {
            this.Logs = new Array();
            for (let z in params.Logs) {
                let obj = new WebhookTriggerLog();
                obj.deserialize(params.Logs[z]);
                this.Logs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstance request structure.
 * @class
 */
class ModifyInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Instance specification
         * @type {string || null}
         */
        this.RegistryType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;

    }
}

/**
 * RenewInstance response structure.
 * @class
 */
class RenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enterprise Edition instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImmutableTagRules request structure.
 * @class
 */
class CreateImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Rule
         * @type {ImmutableTagRule || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

        if (params.Rule) {
            let obj = new ImmutableTagRule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * DescribeRepositories response structure.
 * @class
 */
class DescribeRepositoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Repository information list
         * @type {Array.<TcrRepositoryInfo> || null}
         */
        this.RepositoryList = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.RepositoryList) {
            this.RepositoryList = new Array();
            for (let z in params.RepositoryList) {
                let obj = new TcrRepositoryInfo();
                obj.deserialize(params.RepositoryList[z]);
                this.RepositoryList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstanceToken response structure.
 * @class
 */
class DeleteInstanceTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DescribeInstances response structure.
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instances
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Registry> || null}
         */
        this.Registries = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Registries) {
            this.Registries = new Array();
            for (let z in params.Registries) {
                let obj = new Registry();
                obj.deserialize(params.Registries[z]);
                this.Registries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReplicationInstance request structure.
 * @class
 */
class CreateReplicationInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Master instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Region ID of the replication instance
         * @type {number || null}
         */
        this.ReplicationRegionId = null;

        /**
         * Region name of the replication instance
         * @type {string || null}
         */
        this.ReplicationRegionName = null;

        /**
         * Whether to sync TCR cloud tags to the COS Bucket
         * @type {boolean || null}
         */
        this.SyncTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.ReplicationRegionId = 'ReplicationRegionId' in params ? params.ReplicationRegionId : null;
        this.ReplicationRegionName = 'ReplicationRegionName' in params ? params.ReplicationRegionName : null;
        this.SyncTag = 'SyncTag' in params ? params.SyncTag : null;

    }
}

/**
 * ModifyInstanceToken response structure.
 * @class
 */
class ModifyInstanceTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DescribeTagRetentionRules request structure.
 * @class
 */
class DescribeTagRetentionRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * `PageSize` for pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Instance creation process
 * @class
 */
class RegistryCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance creation process type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Instance creation process status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Reasons for transiting to the process
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * ModifyImmutableTagRules response structure.
 * @class
 */
class ModifyImmutableTagRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * Region information
 * @class
 */
class Region extends  AbstractModel {
    constructor(){
        super();

        /**
         * gz
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 1
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * ap-guangzhou
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * alluser
         * @type {string || null}
         */
        this.Status = null;

        /**
         * remark
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * id
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * CreateImageAccelerationService response structure.
 * @class
 */
class CreateImageAccelerationServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMultipleSecurityPolicy response structure.
 * @class
 */
class CreateMultipleSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTagRetentionRule response structure.
 * @class
 */
class CreateTagRetentionRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DescribeRegions response structure.
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of returned results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of regions
         * @type {Array.<Region> || null}
         */
        this.Regions = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Regions) {
            this.Regions = new Array();
            for (let z in params.Regions) {
                let obj = new Region();
                obj.deserialize(params.Regions[z]);
                this.Regions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeChartDownloadInfo response structure.
 * @class
 */
class DescribeChartDownloadInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Presigned URL for download
         * @type {string || null}
         */
        this.PreSignedDownloadURL = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.PreSignedDownloadURL = 'PreSignedDownloadURL' in params ? params.PreSignedDownloadURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExternalEndpointStatus request structure.
 * @class
 */
class DescribeExternalEndpointStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * DeleteRepository response structure.
 * @class
 */
class DeleteRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DescribeInstanceAllNamespaces request structure.
 * @class
 */
class DescribeInstanceAllNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DownloadHelmChart response structure.
 * @class
 */
class DownloadHelmChartResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Temporary token
         * @type {string || null}
         */
        this.TmpToken = null;

        /**
         * Temporary `secretId`
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * Temporary `secretKey`
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * Bucket information
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Chart information
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Start timestamp
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Token expiration timestamp
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TmpToken = 'TmpToken' in params ? params.TmpToken : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ManageReplication request structure.
 * @class
 */
class ManageReplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source instance ID
         * @type {string || null}
         */
        this.SourceRegistryId = null;

        /**
         * Destination instance ID
         * @type {string || null}
         */
        this.DestinationRegistryId = null;

        /**
         * Synchronization rule
         * @type {ReplicationRule || null}
         */
        this.Rule = null;

        /**
         * Rule description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Region ID of the destination instance. For example, `1` represents Guangzhou
         * @type {number || null}
         */
        this.DestinationRegionId = null;

        /**
         * Configuration of the synchronization rule
         * @type {PeerReplicationOption || null}
         */
        this.PeerReplicationOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceRegistryId = 'SourceRegistryId' in params ? params.SourceRegistryId : null;
        this.DestinationRegistryId = 'DestinationRegistryId' in params ? params.DestinationRegistryId : null;

        if (params.Rule) {
            let obj = new ReplicationRule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.DestinationRegionId = 'DestinationRegionId' in params ? params.DestinationRegionId : null;

        if (params.PeerReplicationOption) {
            let obj = new PeerReplicationOption();
            obj.deserialize(params.PeerReplicationOption)
            this.PeerReplicationOption = obj;
        }

    }
}

/**
 * CreateSecurityPolicies request structure.
 * @class
 */
class CreateSecurityPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 192.168.0.0/24
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeleteWebhookTrigger response structure.
 * @class
 */
class DeleteWebhookTriggerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DescribeTagRetentionExecutionTask response structure.
 * @class
 */
class DescribeTagRetentionExecutionTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of tag retention execution tasks
         * @type {Array.<RetentionTask> || null}
         */
        this.RetentionTaskList = null;

        /**
         * Total number of tag retention execution tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.RetentionTaskList) {
            this.RetentionTaskList = new Array();
            for (let z in params.RetentionTaskList) {
                let obj = new RetentionTask();
                obj.deserialize(params.RetentionTaskList[z]);
                this.RetentionTaskList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityPolicy request structure.
 * @class
 */
class ModifySecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * PolicyId
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * Allowed IP, such as `192.168.0.0/24`
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeReplicationInstanceSyncStatus response structure.
 * @class
 */
class DescribeReplicationInstanceSyncStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Synchronization status
         * @type {string || null}
         */
        this.ReplicationStatus = null;

        /**
         * Synchronization completion time
         * @type {string || null}
         */
        this.ReplicationTime = null;

        /**
         * Synchronization log
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ReplicationLog || null}
         */
        this.ReplicationLog = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.ReplicationStatus = 'ReplicationStatus' in params ? params.ReplicationStatus : null;
        this.ReplicationTime = 'ReplicationTime' in params ? params.ReplicationTime : null;

        if (params.ReplicationLog) {
            let obj = new ReplicationLog();
            obj.deserialize(params.ReplicationLog)
            this.ReplicationLog = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstanceCustomizedDomain request structure.
 * @class
 */
class DeleteInstanceCustomizedDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Custom domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * Cloud tag
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud tag key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Cloud tag value
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
 * DescribeImages response structure.
 * @class
 */
class DescribeImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of container images
         * @type {Array.<TcrImageInfo> || null}
         */
        this.ImageInfoList = null;

        /**
         * Total number of container images
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.ImageInfoList) {
            this.ImageInfoList = new Array();
            for (let z in params.ImageInfoList) {
                let obj = new TcrImageInfo();
                obj.deserialize(params.ImageInfoList[z]);
                this.ImageInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInternalEndpoints response structure.
 * @class
 */
class DescribeInternalEndpointsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of private network access addresses
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AccessVpc> || null}
         */
        this.AccessVpcSet = null;

        /**
         * Total number of private network access addresses
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.AccessVpcSet) {
            this.AccessVpcSet = new Array();
            for (let z in params.AccessVpcSet) {
                let obj = new AccessVpc();
                obj.deserialize(params.AccessVpcSet[z]);
                this.AccessVpcSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteImmutableTagRules response structure.
 * @class
 */
class DeleteImmutableTagRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * ModifyTagRetentionRule response structure.
 * @class
 */
class ModifyTagRetentionRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * CreateTagRetentionRule request structure.
 * @class
 */
class CreateTagRetentionRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace ID
         * @type {number || null}
         */
        this.NamespaceId = null;

        /**
         * Retention policy
         * @type {RetentionRule || null}
         */
        this.RetentionRule = null;

        /**
         * Execution cycle. Valid values: manual, daily, weekly, monthly.
         * @type {string || null}
         */
        this.CronSetting = null;

        /**
         * Whether to disable the rule. Default value: false.
         * @type {boolean || null}
         */
        this.Disabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

        if (params.RetentionRule) {
            let obj = new RetentionRule();
            obj.deserialize(params.RetentionRule)
            this.RetentionRule = obj;
        }
        this.CronSetting = 'CronSetting' in params ? params.CronSetting : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;

    }
}

/**
 * Trigger target
 * @class
 */
class WebhookTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Custom headers
         * @type {Array.<Header> || null}
         */
        this.Headers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;

        if (params.Headers) {
            this.Headers = new Array();
            for (let z in params.Headers) {
                let obj = new Header();
                obj.deserialize(params.Headers[z]);
                this.Headers.push(obj);
            }
        }

    }
}

/**
 * DescribeInstanceStatus response structure.
 * @class
 */
class DescribeInstanceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance statuses
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RegistryStatus> || null}
         */
        this.RegistryStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.RegistryStatusSet) {
            this.RegistryStatusSet = new Array();
            for (let z in params.RegistryStatusSet) {
                let obj = new RegistryStatus();
                obj.deserialize(params.RegistryStatusSet[z]);
                this.RegistryStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGCJobs response structure.
 * @class
 */
class DescribeGCJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of GC jobs
         * @type {Array.<GCJobInfo> || null}
         */
        this.Jobs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Jobs) {
            this.Jobs = new Array();
            for (let z in params.Jobs) {
                let obj = new GCJobInfo();
                obj.deserialize(params.Jobs[z]);
                this.Jobs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceToken request structure.
 * @class
 */
class ModifyInstanceTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the long-term access credential of the instance
         * @type {string || null}
         */
        this.TokenId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Whether to enable the long-term access credential of the instance
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Access credential description
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Valid values: 1: Modify the description; 2: Enable/Disable. Default value: 2.
         * @type {number || null}
         */
        this.ModifyFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TokenId = 'TokenId' in params ? params.TokenId : null;
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.ModifyFlag = 'ModifyFlag' in params ? params.ModifyFlag : null;

    }
}

/**
 * CreateNamespace response structure.
 * @class
 */
class CreateNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * ModifyImmutableTagRules request structure.
 * @class
 */
class ModifyImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Rule
         * @type {ImmutableTagRule || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Rule) {
            let obj = new ImmutableTagRule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * DescribeSecurityPolicies response structure.
 * @class
 */
class DescribeSecurityPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance security policy group
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecurityPolicy> || null}
         */
        this.SecurityPolicySet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.SecurityPolicySet) {
            this.SecurityPolicySet = new Array();
            for (let z in params.SecurityPolicySet) {
                let obj = new SecurityPolicy();
                obj.deserialize(params.SecurityPolicySet[z]);
                this.SecurityPolicySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSignature response structure.
 * @class
 */
class CreateSignatureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DeleteRepositoryTags request structure.
 * @class
 */
class DeleteRepositoryTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Repository name
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * List of tags. Up to 20 tags can be returned for a request.
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * Image information
 * @class
 */
class TcrImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hash value
         * @type {string || null}
         */
        this.Digest = null;

        /**
         * Image size in bytes
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Tag name
         * @type {string || null}
         */
        this.ImageVersion = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Artifact type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * KMS signature information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KmsSignature = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Digest = 'Digest' in params ? params.Digest : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.KmsSignature = 'KmsSignature' in params ? params.KmsSignature : null;

    }
}

/**
 * DescribeReplicationInstanceSyncStatus request structure.
 * @class
 */
class DescribeReplicationInstanceSyncStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Master instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Replication instance ID
         * @type {string || null}
         */
        this.ReplicationRegistryId = null;

        /**
         * Region ID of the replication instance
         * @type {number || null}
         */
        this.ReplicationRegionId = null;

        /**
         * Whether to show the synchronization log
         * @type {boolean || null}
         */
        this.ShowReplicationLog = null;

        /**
         * Page offset for log display. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: 5, maximum value: 20.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.ReplicationRegistryId = 'ReplicationRegistryId' in params ? params.ReplicationRegistryId : null;
        this.ReplicationRegionId = 'ReplicationRegionId' in params ? params.ReplicationRegionId : null;
        this.ShowReplicationLog = 'ShowReplicationLog' in params ? params.ShowReplicationLog : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteInstance response structure.
 * @class
 */
class DeleteInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DescribeInstanceAll request structure.
 * @class
 */
class DescribeInstanceAllRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs (if it is empty,
it indicates to get all instances under the current account)
         * @type {Array.<string> || null}
         */
        this.Registryids = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Whether to get the instances in all regions. Default value: False.
         * @type {boolean || null}
         */
        this.AllRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Registryids = 'Registryids' in params ? params.Registryids : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.AllRegion = 'AllRegion' in params ? params.AllRegion : null;

    }
}

/**
 * DescribeInstanceStatus request structure.
 * @class
 */
class DescribeInstanceStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of instance IDs
         * @type {Array.<string> || null}
         */
        this.RegistryIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryIds = 'RegistryIds' in params ? params.RegistryIds : null;

    }
}

/**
 * ModifyWebhookTrigger request structure.
 * @class
 */
class ModifyWebhookTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Trigger parameter
         * @type {WebhookTrigger || null}
         */
        this.Trigger = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.Trigger) {
            let obj = new WebhookTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DeleteReplicationInstance request structure.
 * @class
 */
class DeleteReplicationInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Replica instance ID
         * @type {string || null}
         */
        this.ReplicationRegistryId = null;

        /**
         * Region ID of the replica instance
         * @type {number || null}
         */
        this.ReplicationRegionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.ReplicationRegistryId = 'ReplicationRegistryId' in params ? params.ReplicationRegistryId : null;
        this.ReplicationRegionId = 'ReplicationRegionId' in params ? params.ReplicationRegionId : null;

    }
}

/**
 * DeleteNamespace response structure.
 * @class
 */
class DeleteNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * CreateSignature request structure.
 * @class
 */
class CreateSignatureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Repository name
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * Tag name
         * @type {string || null}
         */
        this.ImageVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;

    }
}

/**
 * CreateSecurityPolicy response structure.
 * @class
 */
class CreateSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRepositories request structure.
 * @class
 */
class DescribeRepositoriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Specified namespace. If this parameter is left empty, image repositories in all namespaces will be queried.
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Specified image repository. If this parameter is left empty, all image repositories in the specified namespace will be queried.
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * Page number, which is used for pagination
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page, which is used for pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sort field. Valid values: -creation_time, -name, -update_time.
         * @type {string || null}
         */
        this.SortBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;

    }
}

/**
 * DescribeTagRetentionExecutionTask request structure.
 * @class
 */
class DescribeTagRetentionExecutionTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * Rule execution ID
         * @type {number || null}
         */
        this.ExecutionId = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * `PageSize` for pagination
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.ExecutionId = 'ExecutionId' in params ? params.ExecutionId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyNamespace response structure.
 * @class
 */
class ModifyNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * TCR namespace description
 * @class
 */
class TcrNamespaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Access level
         * @type {boolean || null}
         */
        this.Public = null;

        /**
         * Namespace ID
         * @type {number || null}
         */
        this.NamespaceId = null;

        /**
         * Cloud tag of the instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TagSpecification || null}
         */
        this.TagSpecification = null;

        /**
         * Namespace metadata
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<KeyValueString> || null}
         */
        this.Metadata = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

        if (params.TagSpecification) {
            let obj = new TagSpecification();
            obj.deserialize(params.TagSpecification)
            this.TagSpecification = obj;
        }

        if (params.Metadata) {
            this.Metadata = new Array();
            for (let z in params.Metadata) {
                let obj = new KeyValueString();
                obj.deserialize(params.Metadata[z]);
                this.Metadata.push(obj);
            }
        }

    }
}

/**
 * DescribeWebhookTriggerLog request structure.
 * @class
 */
class DescribeWebhookTriggerLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Trigger ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * RenewInstance request structure.
 * @class
 */
class RenewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Auto-renewal flag and purchase duration in months for prepayment. Valid values: 0: Manual renewal; 1: Auto-renewal; 2: No renewal and no notification.
         * @type {RegistryChargePrepaid || null}
         */
        this.RegistryChargePrepaid = null;

        /**
         * Valid values: 0: renewal; 1: change from pay-as-you-go to monthly subscription billing
         * @type {number || null}
         */
        this.Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.RegistryChargePrepaid) {
            let obj = new RegistryChargePrepaid();
            obj.deserialize(params.RegistryChargePrepaid)
            this.RegistryChargePrepaid = obj;
        }
        this.Flag = 'Flag' in params ? params.Flag : null;

    }
}

/**
 *  Job scheduling information
 * @class
 */
class Schedule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type. Valid values: Hourly, Daily, Weekly, Custom, Manual, Dryrun, None.
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteTagRetentionRule response structure.
 * @class
 */
class DeleteTagRetentionRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DeleteMultipleSecurityPolicy request structure.
 * @class
 */
class DeleteMultipleSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Security group policy
         * @type {Array.<SecurityPolicy> || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.SecurityGroupPolicySet) {
            this.SecurityGroupPolicySet = new Array();
            for (let z in params.SecurityGroupPolicySet) {
                let obj = new SecurityPolicy();
                obj.deserialize(params.SecurityGroupPolicySet[z]);
                this.SecurityGroupPolicySet.push(obj);
            }
        }

    }
}

/**
 * DescribeImmutableTagRules response structure.
 * @class
 */
class DescribeImmutableTagRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule list
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<ImmutableTagRule> || null}
         */
        this.Rules = null;

        /**
         * Namespace with no rules created
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.EmptyNs = null;

        /**
         * Total rules
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ImmutableTagRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.EmptyNs = 'EmptyNs' in params ? params.EmptyNs : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSignaturePolicy response structure.
 * @class
 */
class CreateSignaturePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * Webhook trigger
 * @class
 */
class WebhookTrigger extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trigger name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Trigger target
         * @type {Array.<WebhookTarget> || null}
         */
        this.Targets = null;

        /**
         * Action to be triggered
         * @type {Array.<string> || null}
         */
        this.EventTypes = null;

        /**
         * Trigger rule
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * Whether to enable the trigger
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Trigger ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Trigger description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * ID of the namespace of the trigger
         * @type {number || null}
         */
        this.NamespaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new WebhookTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.EventTypes = 'EventTypes' in params ? params.EventTypes : null;
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

    }
}

/**
 * Instance status
 * @class
 */
class RegistryStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Instance status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Additional status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RegistryCondition> || null}
         */
        this.Conditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RegistryCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

    }
}

/**
 * Security policy
 * @class
 */
class SecurityPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy index
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The public network IP address of the access source
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * The version of the security policy
         * @type {string || null}
         */
        this.PolicyVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.PolicyVersion = 'PolicyVersion' in params ? params.PolicyVersion : null;

    }
}

/**
 * Synchronization rule filter
 * @class
 */
class ReplicationFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type (`name`, `tag` and `resource`)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * It is left blank by default
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * CreateInstanceToken response structure.
 * @class
 */
class CreateInstanceTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Access credential
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Expiration timestamp of access credential. It is a string of numbers without unit.
         * @type {number || null}
         */
        this.ExpTime = null;

        /**
         * Token ID of long-term access credential. It is not available to temporary access credential.
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.TokenId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Username = 'Username' in params ? params.Username : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.ExpTime = 'ExpTime' in params ? params.ExpTime : null;
        this.TokenId = 'TokenId' in params ? params.TokenId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstance response structure.
 * @class
 */
class ModifyInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * Rule of tag retention task execution
 * @class
 */
class RetentionTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Rule execution ID
         * @type {number || null}
         */
        this.ExecutionId = null;

        /**
         * Task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task execution status. Valid values: Failed, Succeed, Stopped, InProgress.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Total number of tags
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Number of retained tags
         * @type {number || null}
         */
        this.Retained = null;

        /**
         * Application repository
         * @type {string || null}
         */
        this.Repository = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ExecutionId = 'ExecutionId' in params ? params.ExecutionId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Retained = 'Retained' in params ? params.Retained : null;
        this.Repository = 'Repository' in params ? params.Repository : null;

    }
}

/**
 * DescribeImageAccelerateService response structure.
 * @class
 */
class DescribeImageAccelerateServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image acceleration status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * CFS VIP
         * @type {string || null}
         */
        this.CFSVIP = null;

        /**
         * Whether to enable
         * @type {boolean || null}
         */
        this.IsEnable = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.CFSVIP = 'CFSVIP' in params ? params.CFSVIP : null;
        this.IsEnable = 'IsEnable' in params ? params.IsEnable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReplicationInstances request structure.
 * @class
 */
class DescribeReplicationInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: 20, maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteWebhookTrigger request structure.
 * @class
 */
class DeleteWebhookTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Trigger ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteSignaturePolicy response structure.
 * @class
 */
class DeleteSignaturePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * Custom domain name information
 * @class
 */
class CustomizedDomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Domain name creation status. Valid values: SUCCESS, FAILURE, CREATING, DELETING.
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeWebhookTrigger response structure.
 * @class
 */
class DescribeWebhookTriggerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of triggers
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of triggers
         * @type {Array.<WebhookTrigger> || null}
         */
        this.Triggers = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Triggers) {
            this.Triggers = new Array();
            for (let z in params.Triggers) {
                let obj = new WebhookTrigger();
                obj.deserialize(params.Triggers[z]);
                this.Triggers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageManifests request structure.
 * @class
 */
class DescribeImageManifestsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Image repository name
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * Image tag
         * @type {string || null}
         */
        this.ImageVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;

    }
}

/**
 * Instance prepayment mode
 * @class
 */
class RegistryChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance purchase duration in months
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Auto-renewal flag. Valid values: 0: Manual renewal; 1: Auto-renewal; 2: No renewal and no notification.
         * @type {number || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * DeleteSecurityPolicy response structure.
 * @class
 */
class DeleteSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cloud tag
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default value: instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Cloud tag array
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * CreateMultipleSecurityPolicy request structure.
 * @class
 */
class CreateMultipleSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Security group policy
         * @type {Array.<SecurityPolicy> || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.SecurityGroupPolicySet) {
            this.SecurityGroupPolicySet = new Array();
            for (let z in params.SecurityGroupPolicySet) {
                let obj = new SecurityPolicy();
                obj.deserialize(params.SecurityGroupPolicySet[z]);
                this.SecurityGroupPolicySet.push(obj);
            }
        }

    }
}

/**
 * String key-value pair of a common parameter
 * @class
 */
class KeyValueString extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value
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
 * DeleteSecurityPolicy request structure.
 * @class
 */
class DeleteSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Allowlist ID
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * Allowlist version
         * @type {string || null}
         */
        this.PolicyVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.PolicyVersion = 'PolicyVersion' in params ? params.PolicyVersion : null;

    }
}

/**
 * CreateInstance request structure.
 * @class
 */
class CreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enterprise Edition instance name
         * @type {string || null}
         */
        this.RegistryName = null;

        /**
         * Enterprise Edition instance type. Valid values: basic: Basic; standard: Standard; premium: Premium.
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * Cloud tag description
         * @type {TagSpecification || null}
         */
        this.TagSpecification = null;

        /**
         * Instance billing mode. Valid values: 0: Pay-as-you-go billing; 1: Prepaid. Default value: 0.
         * @type {number || null}
         */
        this.RegistryChargeType = null;

        /**
         * Whether to sync TCR cloud tags to the COS bucket
         * @type {boolean || null}
         */
        this.SyncTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryName = 'RegistryName' in params ? params.RegistryName : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;

        if (params.TagSpecification) {
            let obj = new TagSpecification();
            obj.deserialize(params.TagSpecification)
            this.TagSpecification = obj;
        }
        this.RegistryChargeType = 'RegistryChargeType' in params ? params.RegistryChargeType : null;
        this.SyncTag = 'SyncTag' in params ? params.SyncTag : null;

    }
}

/**
 * DescribeInstanceToken request structure.
 * @class
 */
class DescribeInstanceTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateNamespace request structure.
 * @class
 */
class CreateNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name, which can contain 2–30 lowercase letters, digits, and separators (".", "_", and "-") but can neither start or end with a separator nor contain consecutive separators.
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Whether to make public. Valid values: true: Yes; false: No.
         * @type {boolean || null}
         */
        this.IsPublic = null;

        /**
         * Cloud tag description
         * @type {TagSpecification || null}
         */
        this.TagSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;

        if (params.TagSpecification) {
            let obj = new TagSpecification();
            obj.deserialize(params.TagSpecification)
            this.TagSpecification = obj;
        }

    }
}

/**
 * CreateSecurityPolicies response structure.
 * @class
 */
class CreateSecurityPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteReplicationInstance response structure.
 * @class
 */
class DeleteReplicationInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * GC execution information
 * @class
 */
class GCJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Job status
         * @type {string || null}
         */
        this.JobStatus = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Scheduling information
         * @type {Schedule || null}
         */
        this.Schedule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.JobStatus = 'JobStatus' in params ? params.JobStatus : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Schedule) {
            let obj = new Schedule();
            obj.deserialize(params.Schedule)
            this.Schedule = obj;
        }

    }
}

/**
 * Instance information structure
 * @class
 */
class Registry extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.RegistryName = null;

        /**
         * Instance specification
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * Instance status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Public access URL of the instance
         * @type {string || null}
         */
        this.PublicDomain = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Whether to enable anonymity
         * @type {boolean || null}
         */
        this.EnableAnonymous = null;

        /**
         * Token validity period
         * @type {number || null}
         */
        this.TokenValidTime = null;

        /**
         * Internal access address of the instance
         * @type {string || null}
         */
        this.InternalEndpoint = null;

        /**
         * Cloud tag of the instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TagSpecification || null}
         */
        this.TagSpecification = null;

        /**
         * Instance expiration time (for prepayment)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpiredAt = null;

        /**
         * Instance billing mode. Valid values: 0: Postpayment; 1: Prepayment.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PayMod = null;

        /**
         * Prepayment renewal flag. Valid values: 0: Manual renewal; 1: Auto-renewal; 2: No renewal and no notification.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RegistryName = 'RegistryName' in params ? params.RegistryName : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PublicDomain = 'PublicDomain' in params ? params.PublicDomain : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.EnableAnonymous = 'EnableAnonymous' in params ? params.EnableAnonymous : null;
        this.TokenValidTime = 'TokenValidTime' in params ? params.TokenValidTime : null;
        this.InternalEndpoint = 'InternalEndpoint' in params ? params.InternalEndpoint : null;

        if (params.TagSpecification) {
            let obj = new TagSpecification();
            obj.deserialize(params.TagSpecification)
            this.TagSpecification = obj;
        }
        this.ExpiredAt = 'ExpiredAt' in params ? params.ExpiredAt : null;
        this.PayMod = 'PayMod' in params ? params.PayMod : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * DescribeChartDownloadInfo request structure.
 * @class
 */
class DescribeChartDownloadInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Chart name
         * @type {string || null}
         */
        this.ChartName = null;

        /**
         * Chart version
         * @type {string || null}
         */
        this.ChartVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.ChartName = 'ChartName' in params ? params.ChartName : null;
        this.ChartVersion = 'ChartVersion' in params ? params.ChartVersion : null;

    }
}

/**
 * DescribeExternalEndpointStatus response structure.
 * @class
 */
class DescribeExternalEndpointStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public network access status. Valid values: Opening, Opened, Closed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Reason
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckInstance response structure.
 * @class
 */
class CheckInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Verification result. true: valid, false: invalid
         * @type {boolean || null}
         */
        this.IsValidated = null;

        /**
         * ID of the region where the instance is located.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.IsValidated = 'IsValidated' in params ? params.IsValidated : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstances request structure.
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs (if it is empty,
it indicates to get all instances under the current account)
         * @type {Array.<string> || null}
         */
        this.Registryids = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Whether to get the instances in all regions. Default value: False.
         * @type {boolean || null}
         */
        this.AllRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Registryids = 'Registryids' in params ? params.Registryids : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.AllRegion = 'AllRegion' in params ? params.AllRegion : null;

    }
}

/**
 * DescribeImmutableTagRules request structure.
 * @class
 */
class DescribeImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * Filter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attribute name. If more than one filter exists, the logical relationship between these filters is `AND`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Attribute value. If multiple values exist in one filter, the logical relationship between these values is `OR`.
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Tag retention rule execution
 * @class
 */
class RetentionExecution extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution ID
         * @type {number || null}
         */
        this.ExecutionId = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * Execution start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Execution end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Execution status. Valid values: Failed, Succeed, Stopped, InProgress.
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecutionId = 'ExecutionId' in params ? params.ExecutionId : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ManageReplication response structure.
 * @class
 */
class ManageReplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DescribeReplicationInstanceCreateTasks request structure.
 * @class
 */
class DescribeReplicationInstanceCreateTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication instance ID
         * @type {string || null}
         */
        this.ReplicationRegistryId = null;

        /**
         * Region ID of the replication instance
         * @type {number || null}
         */
        this.ReplicationRegionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicationRegistryId = 'ReplicationRegistryId' in params ? params.ReplicationRegistryId : null;
        this.ReplicationRegionId = 'ReplicationRegionId' in params ? params.ReplicationRegionId : null;

    }
}

/**
 * DeleteSignaturePolicy request structure.
 * @class
 */
class DeleteSignaturePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

    }
}

/**
 * ModifySecurityPolicy response structure.
 * @class
 */
class ModifySecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstance request structure.
 * @class
 */
class DeleteInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Whether to delete the bucket. Default value: false.
         * @type {boolean || null}
         */
        this.DeleteBucket = null;

        /**
         * Whether to enable the `dryRun` mode. Default value: false.
         * @type {boolean || null}
         */
        this.DryRun = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.DeleteBucket = 'DeleteBucket' in params ? params.DeleteBucket : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * DescribeImageManifests response structure.
 * @class
 */
class DescribeImageManifestsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image manifest information
         * @type {string || null}
         */
        this.Manifest = null;

        /**
         * Image configuration information
         * @type {string || null}
         */
        this.Config = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Manifest = 'Manifest' in params ? params.Manifest : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebhookTrigger request structure.
 * @class
 */
class DescribeWebhookTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * Tag immutability rule
 * @class
 */
class ImmutableTagRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Repository matching rule
         * @type {string || null}
         */
        this.RepositoryPattern = null;

        /**
         * Tag matching rule
         * @type {string || null}
         */
        this.TagPattern = null;

        /**
         * repoMatches or repoExcludes
         * @type {string || null}
         */
        this.RepositoryDecoration = null;

        /**
         * matches or excludes
         * @type {string || null}
         */
        this.TagDecoration = null;

        /**
         * Disabling rule
         * @type {boolean || null}
         */
        this.Disabled = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NsName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepositoryPattern = 'RepositoryPattern' in params ? params.RepositoryPattern : null;
        this.TagPattern = 'TagPattern' in params ? params.TagPattern : null;
        this.RepositoryDecoration = 'RepositoryDecoration' in params ? params.RepositoryDecoration : null;
        this.TagDecoration = 'TagDecoration' in params ? params.TagDecoration : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.NsName = 'NsName' in params ? params.NsName : null;

    }
}

/**
 * Header KV
 * @class
 */
class Header extends  AbstractModel {
    constructor(){
        super();

        /**
         * Header Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Header Values
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Tag retention policy
 * @class
 */
class RetentionPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag retention policy ID
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * List of rules
         * @type {Array.<RetentionRule> || null}
         */
        this.RetentionRuleList = null;

        /**
         * Regular execution mode
         * @type {string || null}
         */
        this.CronSetting = null;

        /**
         * Whether to enable the rule
         * @type {boolean || null}
         */
        this.Disabled = null;

        /**
         * The execution time of the next task based on the current time and `cronSetting`, which is for reference only
         * @type {string || null}
         */
        this.NextExecutionTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

        if (params.RetentionRuleList) {
            this.RetentionRuleList = new Array();
            for (let z in params.RetentionRuleList) {
                let obj = new RetentionRule();
                obj.deserialize(params.RetentionRuleList[z]);
                this.RetentionRuleList.push(obj);
            }
        }
        this.CronSetting = 'CronSetting' in params ? params.CronSetting : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.NextExecutionTime = 'NextExecutionTime' in params ? params.NextExecutionTime : null;

    }
}

/**
 * CreateSecurityPolicy request structure.
 * @class
 */
class CreateSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 192.168.0.0/24
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * CreateWebhookTrigger request structure.
 * @class
 */
class CreateWebhookTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Trigger parameter
         * @type {WebhookTrigger || null}
         */
        this.Trigger = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.Trigger) {
            let obj = new WebhookTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DeleteImageAccelerateService response structure.
 * @class
 */
class DeleteImageAccelerateServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DescribeInstanceCustomizedDomain response structure.
 * @class
 */
class DescribeInstanceCustomizedDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of domain names
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CustomizedDomainInfo> || null}
         */
        this.DomainInfoList = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.DomainInfoList) {
            this.DomainInfoList = new Array();
            for (let z in params.DomainInfoList) {
                let obj = new CustomizedDomainInfo();
                obj.deserialize(params.DomainInfoList[z]);
                this.DomainInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImageAccelerationService request structure.
 * @class
 */
class CreateImageAccelerationServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * ID of the VPC where the CFS file system to be created resides
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the subnet where the CFS file system to be created resides
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Storage class of the CFS file system to be created. Valid values: SD: Standard; HP: High-Performance.
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * AZ name, such as `ap-beijing-1`. For more information, see the list of regions and AZs in Overview.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Cloud tag description
         * @type {TagSpecification || null}
         */
        this.TagSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.TagSpecification) {
            let obj = new TagSpecification();
            obj.deserialize(params.TagSpecification)
            this.TagSpecification = obj;
        }

    }
}

/**
 * DescribeNamespaces request structure.
 * @class
 */
class DescribeNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Specified namespace. If this parameter is left empty, all namespaces will be queried.
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page offset (page number from which to return the results)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether to list all namespaces
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * Filters
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Whether to query only namespaces for which the KMS image signature is enabled
         * @type {boolean || null}
         */
        this.KmsSignPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.All = 'All' in params ? params.All : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.KmsSignPolicy = 'KmsSignPolicy' in params ? params.KmsSignPolicy : null;

    }
}

/**
 * DeleteMultipleSecurityPolicy response structure.
 * @class
 */
class DeleteMultipleSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ManageInternalEndpoint response structure.
 * @class
 */
class ManageInternalEndpointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstanceCustomizedDomain request structure.
 * @class
 */
class CreateInstanceCustomizedDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Custom domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * CreateTagRetentionExecution response structure.
 * @class
 */
class CreateTagRetentionExecutionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * CheckInstanceName response structure.
 * @class
 */
class CheckInstanceNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Verification result. Valid values: true: Valid; false: Invalid.
         * @type {boolean || null}
         */
        this.IsValidated = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.IsValidated = 'IsValidated' in params ? params.IsValidated : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteImageAccelerateService request structure.
 * @class
 */
class DeleteImageAccelerateServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * DescribeTagRetentionRules response structure.
 * @class
 */
class DescribeTagRetentionRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of tag retention policies
         * @type {Array.<RetentionPolicy> || null}
         */
        this.RetentionPolicyList = null;

        /**
         * Total number of tag retention policies
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.RetentionPolicyList) {
            this.RetentionPolicyList = new Array();
            for (let z in params.RetentionPolicyList) {
                let obj = new RetentionPolicy();
                obj.deserialize(params.RetentionPolicyList[z]);
                this.RetentionPolicyList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions request structure.
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * ManageExternalEndpoint response structure.
 * @class
 */
class ManageExternalEndpointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceAll response structure.
 * @class
 */
class DescribeInstanceAllResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instances
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Registry> || null}
         */
        this.Registries = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Registries) {
            this.Registries = new Array();
            for (let z in params.Registries) {
                let obj = new Registry();
                obj.deserialize(params.Registries[z]);
                this.Registries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReplicationInstance response structure.
 * @class
 */
class CreateReplicationInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enterprise Registry Instance ID
         * @type {string || null}
         */
        this.ReplicationRegistryId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.ReplicationRegistryId = 'ReplicationRegistryId' in params ? params.ReplicationRegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstanceToken request structure.
 * @class
 */
class CreateInstanceTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Access credential type. Values: `longterm` and `temp` (default, valid for one hour)
         * @type {string || null}
         */
        this.TokenType = null;

        /**
         * Description of the long-term access credential
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.TokenType = 'TokenType' in params ? params.TokenType : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * CreateInstanceCustomizedDomain response structure.
 * @class
 */
class CreateInstanceCustomizedDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * Parameters for cross-account synchronization
 * @class
 */
class PeerReplicationOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of the destination instance
         * @type {string || null}
         */
        this.PeerRegistryUin = null;

        /**
         * Permanent access Token for the destination instance
         * @type {string || null}
         */
        this.PeerRegistryToken = null;

        /**
         * Whether to enable cross-account synchronization
         * @type {boolean || null}
         */
        this.EnablePeerReplication = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PeerRegistryUin = 'PeerRegistryUin' in params ? params.PeerRegistryUin : null;
        this.PeerRegistryToken = 'PeerRegistryToken' in params ? params.PeerRegistryToken : null;
        this.EnablePeerReplication = 'EnablePeerReplication' in params ? params.EnablePeerReplication : null;

    }
}

/**
 * DescribeSecurityPolicies request structure.
 * @class
 */
class DescribeSecurityPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * ID of Enterprise Registry replication instance
 * @class
 */
class ReplicationRegistry extends  AbstractModel {
    constructor(){
        super();

        /**
         * Master instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Replication instance ID
         * @type {string || null}
         */
        this.ReplicationRegistryId = null;

        /**
         * Region ID of the replication instance
         * @type {number || null}
         */
        this.ReplicationRegionId = null;

        /**
         * Region name of the replication instance
         * @type {string || null}
         */
        this.ReplicationRegionName = null;

        /**
         * Status of the replication instance
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.ReplicationRegistryId = 'ReplicationRegistryId' in params ? params.ReplicationRegistryId : null;
        this.ReplicationRegionId = 'ReplicationRegionId' in params ? params.ReplicationRegionId : null;
        this.ReplicationRegionName = 'ReplicationRegionName' in params ? params.ReplicationRegionName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;

    }
}

/**
 * DescribeInternalEndpoints request structure.
 * @class
 */
class DescribeInternalEndpointsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * CheckInstance request structure.
 * @class
 */
class CheckInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be verified.
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * ModifyNamespace request structure.
 * @class
 */
class ModifyNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Access level. Valid values: True: Public; False: Private.
         * @type {boolean || null}
         */
        this.IsPublic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;

    }
}

/**
 * CreateRepository request structure.
 * @class
 */
class CreateRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Repository name
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * Brief repository description
         * @type {string || null}
         */
        this.BriefDescription = null;

        /**
         * Detailed repository description
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.BriefDescription = 'BriefDescription' in params ? params.BriefDescription : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeleteImage response structure.
 * @class
 */
class DeleteImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * DescribeImageAccelerateService request structure.
 * @class
 */
class DescribeImageAccelerateServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * DeleteNamespace request structure.
 * @class
 */
class DeleteNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

    }
}

/**
 * DescribeImages request structure.
 * @class
 */
class DescribeImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Image repository name
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * Image tag specified for fuzzy search
         * @type {string || null}
         */
        this.ImageVersion = null;

        /**
         * Number of entries per page, which is used for pagination. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number. Default value: 1.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Image digest specified for search
         * @type {string || null}
         */
        this.Digest = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Digest = 'Digest' in params ? params.Digest : null;

    }
}

/**
 * DescribeGCJobs request structure.
 * @class
 */
class DescribeGCJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * DescribeTagRetentionExecution request structure.
 * @class
 */
class DescribeTagRetentionExecutionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * `PageSize` for pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateRepository response structure.
 * @class
 */
class CreateRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * CheckInstanceName request structure.
 * @class
 */
class CheckInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the instance to be created
         * @type {string || null}
         */
        this.RegistryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryName = 'RegistryName' in params ? params.RegistryName : null;

    }
}

/**
 * DescribeInstanceToken response structure.
 * @class
 */
class DescribeInstanceTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of long-term access credentials
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of long-term access credentials
         * @type {Array.<TcrInstanceToken> || null}
         */
        this.Tokens = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tokens) {
            this.Tokens = new Array();
            for (let z in params.Tokens) {
                let obj = new TcrInstanceToken();
                obj.deserialize(params.Tokens[z]);
                this.Tokens.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceCustomizedDomain request structure.
 * @class
 */
class DescribeInstanceCustomizedDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Pagination limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeTagRetentionExecution response structure.
 * @class
 */
class DescribeTagRetentionExecutionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of tag retention execution records
         * @type {Array.<RetentionExecution> || null}
         */
        this.RetentionExecutionList = null;

        /**
         * Total number of tag retention execution records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.RetentionExecutionList) {
            this.RetentionExecutionList = new Array();
            for (let z in params.RetentionExecutionList) {
                let obj = new RetentionExecution();
                obj.deserialize(params.RetentionExecutionList[z]);
                this.RetentionExecutionList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteImmutableTagRules request structure.
 * @class
 */
class DeleteImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * CreateWebhookTrigger response structure.
 * @class
 */
class CreateWebhookTriggerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Newly created trigger
         * @type {WebhookTrigger || null}
         */
        this.Trigger = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Trigger) {
            let obj = new WebhookTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSignaturePolicy request structure.
 * @class
 */
class CreateSignaturePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Policy name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * KMS key
         * @type {string || null}
         */
        this.KmsId = null;

        /**
         * Region of the KMS key
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * Custom domain name. If this parameter is left empty, the default domain name of the TCR instance will be used to generate the signature.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Whether to disable the signing policy. Default value: false.
         * @type {boolean || null}
         */
        this.Disabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.KmsId = 'KmsId' in params ? params.KmsId : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;

    }
}

/**
 * DeleteTagRetentionRule request structure.
 * @class
 */
class DeleteTagRetentionRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Tag retention rule ID
         * @type {number || null}
         */
        this.RetentionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;

    }
}

/**
 * TCR image repository information
 * @class
 */
class TcrRepositoryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Repository name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Creation time, such as `2006-01-02 15:04:05.999999999 -0700 MST`
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Whether to make public
         * @type {boolean || null}
         */
        this.Public = null;

        /**
         * Detailed repository description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Brief description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BriefDescription = null;

        /**
         * Update time, such as `2006-01-02 15:04:05.999999999 -0700 MST`
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.BriefDescription = 'BriefDescription' in params ? params.BriefDescription : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Instance login token
 * @class
 */
class TcrInstanceToken extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Token description
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * ID of the instance of the token
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Token status
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Token creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Token expiration timestamp
         * @type {number || null}
         */
        this.ExpiredAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.ExpiredAt = 'ExpiredAt' in params ? params.ExpiredAt : null;

    }
}

/**
 * DeleteRepository request structure.
 * @class
 */
class DeleteRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Image repository name
         * @type {string || null}
         */
        this.RepositoryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;

    }
}

/**
 * DeleteImage request structure.
 * @class
 */
class DeleteImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Image repository name
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * Image tag
         * @type {string || null}
         */
        this.ImageVersion = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

    }
}

/**
 * CreateTagRetentionExecution request structure.
 * @class
 */
class CreateTagRetentionExecutionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Tag retention rule ID
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * Whether the execution is simulated. Default value: false (not simulated)
         * @type {boolean || null}
         */
        this.DryRun = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * Synchronization log
 * @class
 */
class ReplicationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Path of the source resource
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Path of the destination resource
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Destination = null;

        /**
         * Synchronization status
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Start time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Destination = 'Destination' in params ? params.Destination : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeInstanceAllNamespaces response structure.
 * @class
 */
class DescribeInstanceAllNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * ManageInternalEndpoint request structure.
 * @class
 */
class ManageInternalEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Create/Delete
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * ID of the VPC to be connected to
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the subnet to be connected to
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ID of the requested region, which is used as the region of the replica instance
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Name of the requested region, which is used as the region of the replica instance
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

    }
}

/**
 * ModifyWebhookTrigger response structure.
 * @class
 */
class ModifyWebhookTriggerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * CreateImmutableTagRules response structure.
 * @class
 */
class CreateImmutableTagRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

module.exports = {
    DeleteInstanceCustomizedDomainResponse: DeleteInstanceCustomizedDomainResponse,
    ManageExternalEndpointRequest: ManageExternalEndpointRequest,
    TaskDetail: TaskDetail,
    DescribeReplicationInstancesResponse: DescribeReplicationInstancesResponse,
    DescribeReplicationInstanceCreateTasksResponse: DescribeReplicationInstanceCreateTasksResponse,
    WebhookTriggerLog: WebhookTriggerLog,
    AccessVpc: AccessVpc,
    DeleteRepositoryTagsResponse: DeleteRepositoryTagsResponse,
    ModifyTagRetentionRuleRequest: ModifyTagRetentionRuleRequest,
    ModifyRepositoryResponse: ModifyRepositoryResponse,
    DescribeNamespacesResponse: DescribeNamespacesResponse,
    DownloadHelmChartRequest: DownloadHelmChartRequest,
    RetentionRule: RetentionRule,
    CreateInstanceResponse: CreateInstanceResponse,
    DeleteInstanceTokenRequest: DeleteInstanceTokenRequest,
    ModifyRepositoryRequest: ModifyRepositoryRequest,
    ReplicationRule: ReplicationRule,
    DescribeWebhookTriggerLogResponse: DescribeWebhookTriggerLogResponse,
    ModifyInstanceRequest: ModifyInstanceRequest,
    RenewInstanceResponse: RenewInstanceResponse,
    CreateImmutableTagRulesRequest: CreateImmutableTagRulesRequest,
    DescribeRepositoriesResponse: DescribeRepositoriesResponse,
    DeleteInstanceTokenResponse: DeleteInstanceTokenResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    CreateReplicationInstanceRequest: CreateReplicationInstanceRequest,
    ModifyInstanceTokenResponse: ModifyInstanceTokenResponse,
    DescribeTagRetentionRulesRequest: DescribeTagRetentionRulesRequest,
    RegistryCondition: RegistryCondition,
    ModifyImmutableTagRulesResponse: ModifyImmutableTagRulesResponse,
    Region: Region,
    CreateImageAccelerationServiceResponse: CreateImageAccelerationServiceResponse,
    CreateMultipleSecurityPolicyResponse: CreateMultipleSecurityPolicyResponse,
    CreateTagRetentionRuleResponse: CreateTagRetentionRuleResponse,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DescribeChartDownloadInfoResponse: DescribeChartDownloadInfoResponse,
    DescribeExternalEndpointStatusRequest: DescribeExternalEndpointStatusRequest,
    DeleteRepositoryResponse: DeleteRepositoryResponse,
    DescribeInstanceAllNamespacesRequest: DescribeInstanceAllNamespacesRequest,
    DownloadHelmChartResponse: DownloadHelmChartResponse,
    ManageReplicationRequest: ManageReplicationRequest,
    CreateSecurityPoliciesRequest: CreateSecurityPoliciesRequest,
    DeleteWebhookTriggerResponse: DeleteWebhookTriggerResponse,
    DescribeTagRetentionExecutionTaskResponse: DescribeTagRetentionExecutionTaskResponse,
    ModifySecurityPolicyRequest: ModifySecurityPolicyRequest,
    DescribeReplicationInstanceSyncStatusResponse: DescribeReplicationInstanceSyncStatusResponse,
    DeleteInstanceCustomizedDomainRequest: DeleteInstanceCustomizedDomainRequest,
    Tag: Tag,
    DescribeImagesResponse: DescribeImagesResponse,
    DescribeInternalEndpointsResponse: DescribeInternalEndpointsResponse,
    DeleteImmutableTagRulesResponse: DeleteImmutableTagRulesResponse,
    ModifyTagRetentionRuleResponse: ModifyTagRetentionRuleResponse,
    CreateTagRetentionRuleRequest: CreateTagRetentionRuleRequest,
    WebhookTarget: WebhookTarget,
    DescribeInstanceStatusResponse: DescribeInstanceStatusResponse,
    DescribeGCJobsResponse: DescribeGCJobsResponse,
    ModifyInstanceTokenRequest: ModifyInstanceTokenRequest,
    CreateNamespaceResponse: CreateNamespaceResponse,
    ModifyImmutableTagRulesRequest: ModifyImmutableTagRulesRequest,
    DescribeSecurityPoliciesResponse: DescribeSecurityPoliciesResponse,
    CreateSignatureResponse: CreateSignatureResponse,
    DeleteRepositoryTagsRequest: DeleteRepositoryTagsRequest,
    TcrImageInfo: TcrImageInfo,
    DescribeReplicationInstanceSyncStatusRequest: DescribeReplicationInstanceSyncStatusRequest,
    DeleteInstanceResponse: DeleteInstanceResponse,
    DescribeInstanceAllRequest: DescribeInstanceAllRequest,
    DescribeInstanceStatusRequest: DescribeInstanceStatusRequest,
    ModifyWebhookTriggerRequest: ModifyWebhookTriggerRequest,
    DeleteReplicationInstanceRequest: DeleteReplicationInstanceRequest,
    DeleteNamespaceResponse: DeleteNamespaceResponse,
    CreateSignatureRequest: CreateSignatureRequest,
    CreateSecurityPolicyResponse: CreateSecurityPolicyResponse,
    DescribeRepositoriesRequest: DescribeRepositoriesRequest,
    DescribeTagRetentionExecutionTaskRequest: DescribeTagRetentionExecutionTaskRequest,
    ModifyNamespaceResponse: ModifyNamespaceResponse,
    TcrNamespaceInfo: TcrNamespaceInfo,
    DescribeWebhookTriggerLogRequest: DescribeWebhookTriggerLogRequest,
    RenewInstanceRequest: RenewInstanceRequest,
    Schedule: Schedule,
    DeleteTagRetentionRuleResponse: DeleteTagRetentionRuleResponse,
    DeleteMultipleSecurityPolicyRequest: DeleteMultipleSecurityPolicyRequest,
    DescribeImmutableTagRulesResponse: DescribeImmutableTagRulesResponse,
    CreateSignaturePolicyResponse: CreateSignaturePolicyResponse,
    WebhookTrigger: WebhookTrigger,
    RegistryStatus: RegistryStatus,
    SecurityPolicy: SecurityPolicy,
    ReplicationFilter: ReplicationFilter,
    CreateInstanceTokenResponse: CreateInstanceTokenResponse,
    ModifyInstanceResponse: ModifyInstanceResponse,
    RetentionTask: RetentionTask,
    DescribeImageAccelerateServiceResponse: DescribeImageAccelerateServiceResponse,
    DescribeReplicationInstancesRequest: DescribeReplicationInstancesRequest,
    DeleteWebhookTriggerRequest: DeleteWebhookTriggerRequest,
    DeleteSignaturePolicyResponse: DeleteSignaturePolicyResponse,
    CustomizedDomainInfo: CustomizedDomainInfo,
    DescribeWebhookTriggerResponse: DescribeWebhookTriggerResponse,
    DescribeImageManifestsRequest: DescribeImageManifestsRequest,
    RegistryChargePrepaid: RegistryChargePrepaid,
    DeleteSecurityPolicyResponse: DeleteSecurityPolicyResponse,
    TagSpecification: TagSpecification,
    CreateMultipleSecurityPolicyRequest: CreateMultipleSecurityPolicyRequest,
    KeyValueString: KeyValueString,
    DeleteSecurityPolicyRequest: DeleteSecurityPolicyRequest,
    CreateInstanceRequest: CreateInstanceRequest,
    DescribeInstanceTokenRequest: DescribeInstanceTokenRequest,
    CreateNamespaceRequest: CreateNamespaceRequest,
    CreateSecurityPoliciesResponse: CreateSecurityPoliciesResponse,
    DeleteReplicationInstanceResponse: DeleteReplicationInstanceResponse,
    GCJobInfo: GCJobInfo,
    Registry: Registry,
    DescribeChartDownloadInfoRequest: DescribeChartDownloadInfoRequest,
    DescribeExternalEndpointStatusResponse: DescribeExternalEndpointStatusResponse,
    CheckInstanceResponse: CheckInstanceResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    DescribeImmutableTagRulesRequest: DescribeImmutableTagRulesRequest,
    Filter: Filter,
    RetentionExecution: RetentionExecution,
    ManageReplicationResponse: ManageReplicationResponse,
    DescribeReplicationInstanceCreateTasksRequest: DescribeReplicationInstanceCreateTasksRequest,
    DeleteSignaturePolicyRequest: DeleteSignaturePolicyRequest,
    ModifySecurityPolicyResponse: ModifySecurityPolicyResponse,
    DeleteInstanceRequest: DeleteInstanceRequest,
    DescribeImageManifestsResponse: DescribeImageManifestsResponse,
    DescribeWebhookTriggerRequest: DescribeWebhookTriggerRequest,
    ImmutableTagRule: ImmutableTagRule,
    Header: Header,
    RetentionPolicy: RetentionPolicy,
    CreateSecurityPolicyRequest: CreateSecurityPolicyRequest,
    CreateWebhookTriggerRequest: CreateWebhookTriggerRequest,
    DeleteImageAccelerateServiceResponse: DeleteImageAccelerateServiceResponse,
    DescribeInstanceCustomizedDomainResponse: DescribeInstanceCustomizedDomainResponse,
    CreateImageAccelerationServiceRequest: CreateImageAccelerationServiceRequest,
    DescribeNamespacesRequest: DescribeNamespacesRequest,
    DeleteMultipleSecurityPolicyResponse: DeleteMultipleSecurityPolicyResponse,
    ManageInternalEndpointResponse: ManageInternalEndpointResponse,
    CreateInstanceCustomizedDomainRequest: CreateInstanceCustomizedDomainRequest,
    CreateTagRetentionExecutionResponse: CreateTagRetentionExecutionResponse,
    CheckInstanceNameResponse: CheckInstanceNameResponse,
    DeleteImageAccelerateServiceRequest: DeleteImageAccelerateServiceRequest,
    DescribeTagRetentionRulesResponse: DescribeTagRetentionRulesResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    ManageExternalEndpointResponse: ManageExternalEndpointResponse,
    DescribeInstanceAllResponse: DescribeInstanceAllResponse,
    CreateReplicationInstanceResponse: CreateReplicationInstanceResponse,
    CreateInstanceTokenRequest: CreateInstanceTokenRequest,
    CreateInstanceCustomizedDomainResponse: CreateInstanceCustomizedDomainResponse,
    PeerReplicationOption: PeerReplicationOption,
    DescribeSecurityPoliciesRequest: DescribeSecurityPoliciesRequest,
    ReplicationRegistry: ReplicationRegistry,
    DescribeInternalEndpointsRequest: DescribeInternalEndpointsRequest,
    CheckInstanceRequest: CheckInstanceRequest,
    ModifyNamespaceRequest: ModifyNamespaceRequest,
    CreateRepositoryRequest: CreateRepositoryRequest,
    DeleteImageResponse: DeleteImageResponse,
    DescribeImageAccelerateServiceRequest: DescribeImageAccelerateServiceRequest,
    DeleteNamespaceRequest: DeleteNamespaceRequest,
    DescribeImagesRequest: DescribeImagesRequest,
    DescribeGCJobsRequest: DescribeGCJobsRequest,
    DescribeTagRetentionExecutionRequest: DescribeTagRetentionExecutionRequest,
    CreateRepositoryResponse: CreateRepositoryResponse,
    CheckInstanceNameRequest: CheckInstanceNameRequest,
    DescribeInstanceTokenResponse: DescribeInstanceTokenResponse,
    DescribeInstanceCustomizedDomainRequest: DescribeInstanceCustomizedDomainRequest,
    DescribeTagRetentionExecutionResponse: DescribeTagRetentionExecutionResponse,
    DeleteImmutableTagRulesRequest: DeleteImmutableTagRulesRequest,
    CreateWebhookTriggerResponse: CreateWebhookTriggerResponse,
    CreateSignaturePolicyRequest: CreateSignaturePolicyRequest,
    DeleteTagRetentionRuleRequest: DeleteTagRetentionRuleRequest,
    TcrRepositoryInfo: TcrRepositoryInfo,
    TcrInstanceToken: TcrInstanceToken,
    DeleteRepositoryRequest: DeleteRepositoryRequest,
    DeleteImageRequest: DeleteImageRequest,
    CreateTagRetentionExecutionRequest: CreateTagRetentionExecutionRequest,
    ReplicationLog: ReplicationLog,
    DescribeInstanceAllNamespacesResponse: DescribeInstanceAllNamespacesResponse,
    ManageInternalEndpointRequest: ManageInternalEndpointRequest,
    ModifyWebhookTriggerResponse: ModifyWebhookTriggerResponse,
    CreateImmutableTagRulesResponse: CreateImmutableTagRulesResponse,

}
