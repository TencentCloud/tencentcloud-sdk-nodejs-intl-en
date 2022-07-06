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

module.exports = {
    DeleteImmutableTagRulesResponse: DeleteImmutableTagRulesResponse,
    ModifyInstanceResponse: ModifyInstanceResponse,
    TaskDetail: TaskDetail,
    ReplicationRegistry: ReplicationRegistry,
    DescribeReplicationInstanceCreateTasksResponse: DescribeReplicationInstanceCreateTasksResponse,
    DeleteMultipleSecurityPolicyResponse: DeleteMultipleSecurityPolicyResponse,
    DescribeReplicationInstancesRequest: DescribeReplicationInstancesRequest,
    ManageReplicationRequest: ManageReplicationRequest,
    ModifyImmutableTagRulesRequest: ModifyImmutableTagRulesRequest,
    CreateReplicationInstanceResponse: CreateReplicationInstanceResponse,
    CreateInstanceTokenRequest: CreateInstanceTokenRequest,
    ReplicationRule: ReplicationRule,
    CreateMultipleSecurityPolicyRequest: CreateMultipleSecurityPolicyRequest,
    DescribeReplicationInstancesResponse: DescribeReplicationInstancesResponse,
    ModifyInstanceRequest: ModifyInstanceRequest,
    CheckInstanceRequest: CheckInstanceRequest,
    DescribeReplicationInstanceSyncStatusRequest: DescribeReplicationInstanceSyncStatusRequest,
    ModifyImmutableTagRulesResponse: ModifyImmutableTagRulesResponse,
    CreateReplicationInstanceRequest: CreateReplicationInstanceRequest,
    CheckInstanceResponse: CheckInstanceResponse,
    CreateImmutableTagRulesResponse: CreateImmutableTagRulesResponse,
    DescribeImmutableTagRulesRequest: DescribeImmutableTagRulesRequest,
    CreateMultipleSecurityPolicyResponse: CreateMultipleSecurityPolicyResponse,
    DeleteImmutableTagRulesRequest: DeleteImmutableTagRulesRequest,
    ManageReplicationResponse: ManageReplicationResponse,
    DescribeReplicationInstanceCreateTasksRequest: DescribeReplicationInstanceCreateTasksRequest,
    CreateImmutableTagRulesRequest: CreateImmutableTagRulesRequest,
    DescribeReplicationInstanceSyncStatusResponse: DescribeReplicationInstanceSyncStatusResponse,
    ImmutableTagRule: ImmutableTagRule,
    DeleteMultipleSecurityPolicyRequest: DeleteMultipleSecurityPolicyRequest,
    DescribeImmutableTagRulesResponse: DescribeImmutableTagRulesResponse,
    PeerReplicationOption: PeerReplicationOption,
    ReplicationLog: ReplicationLog,
    SecurityPolicy: SecurityPolicy,
    ReplicationFilter: ReplicationFilter,
    CreateInstanceTokenResponse: CreateInstanceTokenResponse,

}
