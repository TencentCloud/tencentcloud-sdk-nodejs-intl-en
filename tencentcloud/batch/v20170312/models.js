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
 * Custom key-value pair
 * @class
 */
class EventVar extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom key
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Custom value
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
 * Compute environment
 * @class
 */
class AnonymousComputeEnv extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment management type
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * Compute environment's parameters
         * @type {EnvData || null}
         */
        this.EnvData = null;

        /**
         * Data disk mounting option
         * @type {Array.<MountDataDisk> || null}
         */
        this.MountDataDisks = null;

        /**
         * Agent running mode; applicable for Windows
         * @type {AgentRunningMode || null}
         */
        this.AgentRunningMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

        if (params.EnvData) {
            let obj = new EnvData();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }

        if (params.MountDataDisks) {
            this.MountDataDisks = new Array();
            for (let z in params.MountDataDisks) {
                let obj = new MountDataDisk();
                obj.deserialize(params.MountDataDisks[z]);
                this.MountDataDisks.push(obj);
            }
        }

        if (params.AgentRunningMode) {
            let obj = new AgentRunningMode();
            obj.deserialize(params.AgentRunningMode)
            this.AgentRunningMode = obj;
        }

    }
}

/**
 * DeleteComputeEnv response structure.
 * @class
 */
class DeleteComputeEnvResponse extends  AbstractModel {
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
 * Compute environment attributes
 * @class
 */
class ComputeEnvData extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of CVM instance types
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;

    }
}

/**
 * Authentication information
 * @class
 */
class Authentication extends  AbstractModel {
    constructor(){
        super();

        /**
         * Authentication scenario such as COS
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * SecretId
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * SecretKey
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * RetryJobs response structure.
 * @class
 */
class RetryJobsResponse extends  AbstractModel {
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
 * TerminateComputeNode request structure.
 * @class
 */
class TerminateComputeNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Compute node ID
         * @type {string || null}
         */
        this.ComputeNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ComputeNodeId = 'ComputeNodeId' in params ? params.ComputeNodeId : null;

    }
}

/**
 * DescribeTaskLogs request structure.
 * @class
 */
class DescribeTaskLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Set of task instances
         * @type {Array.<number> || null}
         */
        this.TaskInstanceIndexes = null;

        /**
         * The start point of query
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of task instances returned
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskInstanceIndexes = 'TaskInstanceIndexes' in params ? params.TaskInstanceIndexes : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Agent running mode
 * @class
 */
class AgentRunningMode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scenario type. Windows is supported
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * The user that runs the Agent
         * @type {string || null}
         */
        this.User = null;

        /**
         * The session that runs the Agent
         * @type {string || null}
         */
        this.Session = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.User = 'User' in params ? params.User : null;
        this.Session = 'Session' in params ? params.Session : null;

    }
}

/**
 * Compute environment information
 * @class
 */
class EnvData extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM instance type. It cannot be specified together with `InstanceTypes` or `InstanceTypeOptions`.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * CVM image ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * System disk configuration of the instance
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Data disk configuration of the instance
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Information of the VPC configuration. It cannot be specified together with `Zones` and `VirtualPrivateClouds`.
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * Public network bandwidth configuration
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * CVM instance display name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance login settings
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Security groups associated with the instance
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Whether to activate CWPP agent and Cloud Monitor. CWPP agent and Cloud Monitor are activated by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * CVM instance billing method <br><li>`POSTPAID_BY_HOUR` (default): Hourly-billed pay-as-you-go <br><li>`SPOTPAID`: Spot instance <br>
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Market-related options for instances, such as parameters related to spot instances.
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * Types of CVM instances to create (up to 10). The system creates compute nodes of types specified in this list from top to down till the creation is successful. It cannot be specified together with `InstanceType` or `InstanceTypeOptions`. 
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * CVM instance model configuration. It cannot be specified together with `InstanceType` or `InstanceTypes`.
         * @type {InstanceTypeOptions || null}
         */
        this.InstanceTypeOptions = null;

        /**
         * List of availability zones. You can create CVM cross AZs in the same region. It cannot be specified together with `VirtualPrivateCloud` or `VirtualPrivateClouds`.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * List of VPCs (creation of CVM instances across VPCs is supported). It cannot be specified together with `VirtualPrivateCloud` or `Zones`.
         * @type {Array.<VirtualPrivateCloud> || null}
         */
        this.VirtualPrivateClouds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;

        if (params.InstanceTypeOptions) {
            let obj = new InstanceTypeOptions();
            obj.deserialize(params.InstanceTypeOptions)
            this.InstanceTypeOptions = obj;
        }
        this.Zones = 'Zones' in params ? params.Zones : null;

        if (params.VirtualPrivateClouds) {
            this.VirtualPrivateClouds = new Array();
            for (let z in params.VirtualPrivateClouds) {
                let obj = new VirtualPrivateCloud();
                obj.deserialize(params.VirtualPrivateClouds[z]);
                this.VirtualPrivateClouds.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskTemplates request structure.
 * @class
 */
class DescribeTaskTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of task template IDs. It cannot be specified together with `Filters`.
         * @type {Array.<string> || null}
         */
        this.TaskTemplateIds = null;

        /**
         * Filter
<li> `task-template-name` - String - Optional - Task template name.</li>
<li> `tag-key` - String - Optional - Tag key.</li>
<li> `tag-value` - String - Optional - Tag value.</li>
<li> `tag:tag-key` - String - Optional - Tag key-value pair. The tag-key should be replaced by a specified tag key.</li>
It cannot be specified together with `TaskTemplateIds`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of returned items
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
        this.TaskTemplateIds = 'TaskTemplateIds' in params ? params.TaskTemplateIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Notification information
 * @class
 */
class Notification extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMQ topic name which should be valid and associated with a subscription
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Event configuration
         * @type {Array.<EventConfig> || null}
         */
        this.EventConfigs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

        if (params.EventConfigs) {
            this.EventConfigs = new Array();
            for (let z in params.EventConfigs) {
                let obj = new EventConfig();
                obj.deserialize(params.EventConfigs[z]);
                this.EventConfigs.push(obj);
            }
        }

    }
}

/**
 * Describes information on the block device where the operating system is stored, i.e., the system disk.
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * System disk type. For more information about the limits of system disk types, please see [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952?from_cn_redirect=1). Valid values:<br><li>LOCAL_BASIC: local disk<br><li>LOCAL_SSD: local SSD disk<br><li>CLOUD_BASIC: HDD cloud disk<br><li>CLOUD_SSD: SSD cloud disk<br><li>CLOUD_PREMIUM: Premium cloud storage<br><li>CLOUD_BSSD: Balanced SSD<br><br>The disk currently in stock will be used by default.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * System disk ID. System disks whose type is `LOCAL_BASIC` or `LOCAL_SSD` do not have an ID and do not support this parameter.
It is only used as a response parameter for APIs such as `DescribeInstances`, and cannot be used as a request parameter for APIs such as `RunInstances`.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * System disk size; unit: GB; default value: 50 GB.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * ID of the dedicated cluster to which the instance belongs.
         * @type {string || null}
         */
        this.CdcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;

    }
}

/**
 * Task
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application information
         * @type {Application || null}
         */
        this.Application = null;

        /**
         * Task name, which should be unique within a job
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Number of running task instances
         * @type {number || null}
         */
        this.TaskInstanceNum = null;

        /**
         * Compute environment information. One (and only one) parameter must be specified for ComputeEnv and EnvId.
         * @type {AnonymousComputeEnv || null}
         */
        this.ComputeEnv = null;

        /**
         * Compute environment ID. One (and only one) parameter must be specified for ComputeEnv and EnvId.
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Redirection information
         * @type {RedirectInfo || null}
         */
        this.RedirectInfo = null;

        /**
         * Local redirection information
         * @type {RedirectLocalInfo || null}
         */
        this.RedirectLocalInfo = null;

        /**
         * Input mapping
         * @type {Array.<InputMapping> || null}
         */
        this.InputMappings = null;

        /**
         * Output mapping
         * @type {Array.<OutputMapping> || null}
         */
        this.OutputMappings = null;

        /**
         * Output mapping configuration
         * @type {Array.<OutputMappingConfig> || null}
         */
        this.OutputMappingConfigs = null;

        /**
         * Custom environment variable
         * @type {Array.<EnvVar> || null}
         */
        this.EnvVars = null;

        /**
         * Authorization information
         * @type {Array.<Authentication> || null}
         */
        this.Authentications = null;

        /**
         * The processing method after the TaskInstance fails; Value range: `TERMINATE` (default), `INTERRUPT`, `FAST_INTERRUPT`.
         * @type {string || null}
         */
        this.FailedAction = null;

        /**
         * The maximum number of retries after the task fails. Range: 0 - 5. Default value: 0
         * @type {number || null}
         */
        this.MaxRetryCount = null;

        /**
         * Timeout period of the task in seconds. Defaults value: 86400
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * The maximum number of concurrent tasks. Range: 0 - 200000. There is no limit by default.
         * @type {number || null}
         */
        this.MaxConcurrentNum = null;

        /**
         * Restarts the compute node after the task is completed. This is suitable for specifying the compute environment for task execution.
         * @type {boolean || null}
         */
        this.RestartComputeNode = null;

        /**
         * Maximum number of retry attempts after failing to create computing resources such as the CVM in the task launch process. Default: `0`; Maximum: `100`.
         * @type {number || null}
         */
        this.ResourceMaxRetryCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Application) {
            let obj = new Application();
            obj.deserialize(params.Application)
            this.Application = obj;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskInstanceNum = 'TaskInstanceNum' in params ? params.TaskInstanceNum : null;

        if (params.ComputeEnv) {
            let obj = new AnonymousComputeEnv();
            obj.deserialize(params.ComputeEnv)
            this.ComputeEnv = obj;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

        if (params.RedirectInfo) {
            let obj = new RedirectInfo();
            obj.deserialize(params.RedirectInfo)
            this.RedirectInfo = obj;
        }

        if (params.RedirectLocalInfo) {
            let obj = new RedirectLocalInfo();
            obj.deserialize(params.RedirectLocalInfo)
            this.RedirectLocalInfo = obj;
        }

        if (params.InputMappings) {
            this.InputMappings = new Array();
            for (let z in params.InputMappings) {
                let obj = new InputMapping();
                obj.deserialize(params.InputMappings[z]);
                this.InputMappings.push(obj);
            }
        }

        if (params.OutputMappings) {
            this.OutputMappings = new Array();
            for (let z in params.OutputMappings) {
                let obj = new OutputMapping();
                obj.deserialize(params.OutputMappings[z]);
                this.OutputMappings.push(obj);
            }
        }

        if (params.OutputMappingConfigs) {
            this.OutputMappingConfigs = new Array();
            for (let z in params.OutputMappingConfigs) {
                let obj = new OutputMappingConfig();
                obj.deserialize(params.OutputMappingConfigs[z]);
                this.OutputMappingConfigs.push(obj);
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

        if (params.Authentications) {
            this.Authentications = new Array();
            for (let z in params.Authentications) {
                let obj = new Authentication();
                obj.deserialize(params.Authentications[z]);
                this.Authentications.push(obj);
            }
        }
        this.FailedAction = 'FailedAction' in params ? params.FailedAction : null;
        this.MaxRetryCount = 'MaxRetryCount' in params ? params.MaxRetryCount : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.MaxConcurrentNum = 'MaxConcurrentNum' in params ? params.MaxConcurrentNum : null;
        this.RestartComputeNode = 'RestartComputeNode' in params ? params.RestartComputeNode : null;
        this.ResourceMaxRetryCount = 'ResourceMaxRetryCount' in params ? params.ResourceMaxRetryCount : null;

    }
}

/**
 * Information of InstanceTypeConfig available to BatchCompute
 * @class
 */
class InstanceTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Memory size in GB.
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance model.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Availability zone.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance model family.
         * @type {string || null}
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

    }
}

/**
 * Additional data
 * @class
 */
class Externals extends  AbstractModel {
    constructor(){
        super();

        /**
         * Release address
Note: This field may return null, indicating that no valid value is found.
         * @type {boolean || null}
         */
        this.ReleaseAddress = null;

        /**
         * Not supported network. Value: <br><li>BASIC: classic network<br><li>VPC1.0: VPC1.0
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.UnsupportNetworks = null;

        /**
         * Attributes of local HDD storage
Note: This field may return null, indicating that no valid value is found.
         * @type {StorageBlock || null}
         */
        this.StorageBlockAttr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReleaseAddress = 'ReleaseAddress' in params ? params.ReleaseAddress : null;
        this.UnsupportNetworks = 'UnsupportNetworks' in params ? params.UnsupportNetworks : null;

        if (params.StorageBlockAttr) {
            let obj = new StorageBlock();
            obj.deserialize(params.StorageBlockAttr)
            this.StorageBlockAttr = obj;
        }

    }
}

/**
 * TerminateComputeNodes response structure.
 * @class
 */
class TerminateComputeNodesResponse extends  AbstractModel {
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
 * DescribeComputeEnvActivities response structure.
 * @class
 */
class DescribeComputeEnvActivitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of activities in the compute environment
         * @type {Array.<Activity> || null}
         */
        this.ActivitySet = null;

        /**
         * Number of activities
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

        if (params.ActivitySet) {
            this.ActivitySet = new Array();
            for (let z in params.ActivitySet) {
                let obj = new Activity();
                obj.deserialize(params.ActivitySet[z]);
                this.ActivitySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Task instance statistical metrics
 * @class
 */
class TaskInstanceMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of submitted tasks
         * @type {number || null}
         */
        this.SubmittedCount = null;

        /**
         * Number of pending tasks
         * @type {number || null}
         */
        this.PendingCount = null;

        /**
         * Number of Runnable tasks
         * @type {number || null}
         */
        this.RunnableCount = null;

        /**
         * Number of starting tasks
         * @type {number || null}
         */
        this.StartingCount = null;

        /**
         * Number of running tasks
         * @type {number || null}
         */
        this.RunningCount = null;

        /**
         * Number of successful tasks
         * @type {number || null}
         */
        this.SucceedCount = null;

        /**
         * Number of failed and interrupted tasks
         * @type {number || null}
         */
        this.FailedInterruptedCount = null;

        /**
         * Number of failed tasks
         * @type {number || null}
         */
        this.FailedCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubmittedCount = 'SubmittedCount' in params ? params.SubmittedCount : null;
        this.PendingCount = 'PendingCount' in params ? params.PendingCount : null;
        this.RunnableCount = 'RunnableCount' in params ? params.RunnableCount : null;
        this.StartingCount = 'StartingCount' in params ? params.StartingCount : null;
        this.RunningCount = 'RunningCount' in params ? params.RunningCount : null;
        this.SucceedCount = 'SucceedCount' in params ? params.SucceedCount : null;
        this.FailedInterruptedCount = 'FailedInterruptedCount' in params ? params.FailedInterruptedCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;

    }
}

/**
 * Task instance log details.
 * @class
 */
class TaskInstanceLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task instance
         * @type {number || null}
         */
        this.TaskInstanceIndex = null;

        /**
         * Standard output log (Base64-encoded, up to 2048 bytes after decompression)
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.StdoutLog = null;

        /**
         * Standard error log (Base64-encoded, up to 2048 bytes after decompression)
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.StderrLog = null;

        /**
         * Standard output redirection path
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.StdoutRedirectPath = null;

        /**
         * Standard error redirection path
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.StderrRedirectPath = null;

        /**
         * Standard output redirection file name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.StdoutRedirectFileName = null;

        /**
         * Standard error redirection file name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.StderrRedirectFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskInstanceIndex = 'TaskInstanceIndex' in params ? params.TaskInstanceIndex : null;
        this.StdoutLog = 'StdoutLog' in params ? params.StdoutLog : null;
        this.StderrLog = 'StderrLog' in params ? params.StderrLog : null;
        this.StdoutRedirectPath = 'StdoutRedirectPath' in params ? params.StdoutRedirectPath : null;
        this.StderrRedirectPath = 'StderrRedirectPath' in params ? params.StderrRedirectPath : null;
        this.StdoutRedirectFileName = 'StdoutRedirectFileName' in params ? params.StdoutRedirectFileName : null;
        this.StderrRedirectFileName = 'StderrRedirectFileName' in params ? params.StderrRedirectFileName : null;

    }
}

/**
 * Data disk mounting option
 * @class
 */
class MountDataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mounting point. A valid path (for Linux) for a drive (for Windows, such as "H:\\")
         * @type {string || null}
         */
        this.LocalPath = null;

        /**
         * File system type. Linux: `EXT3` (default) and `EXT4`. Windows: `NTFS`
         * @type {string || null}
         */
        this.FileSystemType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalPath = 'LocalPath' in params ? params.LocalPath : null;
        this.FileSystemType = 'FileSystemType' in params ? params.FileSystemType : null;

    }
}

/**
 * Task view information
 * @class
 */
class TaskView extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Task status
         * @type {string || null}
         */
        this.TaskState = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * End time
Note: This field may return `null`, indicating that no valid value was found.
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
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskState = 'TaskState' in params ? params.TaskState : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Information on tags
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
Note: This field may return `null`, indicating that no valid value was found.
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
 * DescribeComputeEnv response structure.
 * @class
 */
class DescribeComputeEnvResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Compute environment name
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * Location information
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Compute environment creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * List of compute nodes
         * @type {Array.<ComputeNode> || null}
         */
        this.ComputeNodeSet = null;

        /**
         * Compute node statistical metrics
         * @type {ComputeNodeMetrics || null}
         */
        this.ComputeNodeMetrics = null;

        /**
         * Number of desired compute nodes
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * Compute environment type
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * Compute environment resource type. Values: `CVM`, `CPM` (Bare Metal)
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Next action
         * @type {string || null}
         */
        this.NextAction = null;

        /**
         * Number of compute nodes added to the compute environment
         * @type {number || null}
         */
        this.AttachedComputeNodeCount = null;

        /**
         * Tag list bound to the compute environment.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.EnvName = 'EnvName' in params ? params.EnvName : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.ComputeNodeSet) {
            this.ComputeNodeSet = new Array();
            for (let z in params.ComputeNodeSet) {
                let obj = new ComputeNode();
                obj.deserialize(params.ComputeNodeSet[z]);
                this.ComputeNodeSet.push(obj);
            }
        }

        if (params.ComputeNodeMetrics) {
            let obj = new ComputeNodeMetrics();
            obj.deserialize(params.ComputeNodeMetrics)
            this.ComputeNodeMetrics = obj;
        }
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.NextAction = 'NextAction' in params ? params.NextAction : null;
        this.AttachedComputeNodeCount = 'AttachedComputeNodeCount' in params ? params.AttachedComputeNodeCount : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateJob request structure.
 * @class
 */
class TerminateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * DetachInstances response structure.
 * @class
 */
class DetachInstancesResponse extends  AbstractModel {
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
 * Application information
 * @class
 */
class Application extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task execution command
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Delivery form of the application. Values: `PACKAGE` (package stored in a remote location), `LOCAL` (local computer).
         * @type {string || null}
         */
        this.DeliveryForm = null;

        /**
         * Remote storage path of the application package
         * @type {string || null}
         */
        this.PackagePath = null;

        /**
         * Relevant configuration of the Docker used by the application. In case that the Docker configuration is used, "LOCAL" DeliveryForm means that the application software inside the Docker image is used directly and run in Docker mode; "PACKAGE" DeliveryForm means that the remote application package is run in Docker mode after being injected into the Docker image. To avoid compatibility issues with different versions of Docker, the Docker installation package and relevant dependencies are taken care of by BatchCompute. For custom images where Docker has already been installed, uninstall Docker first and then use the Docker feature.
         * @type {Docker || null}
         */
        this.Docker = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Command = 'Command' in params ? params.Command : null;
        this.DeliveryForm = 'DeliveryForm' in params ? params.DeliveryForm : null;
        this.PackagePath = 'PackagePath' in params ? params.PackagePath : null;

        if (params.Docker) {
            let obj = new Docker();
            obj.deserialize(params.Docker)
            this.Docker = obj;
        }

    }
}

/**
 * Output mapping configuration
 * @class
 */
class OutputMappingConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage type. Only `COS` is supported.
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * Number of concurrent workers
         * @type {number || null}
         */
        this.WorkerNum = null;

        /**
         * Size of a worker part, in MB.
         * @type {number || null}
         */
        this.WorkerPartSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.WorkerNum = 'WorkerNum' in params ? params.WorkerNum : null;
        this.WorkerPartSize = 'WorkerPartSize' in params ? params.WorkerPartSize : null;

    }
}

/**
 * AttachInstances response structure.
 * @class
 */
class AttachInstancesResponse extends  AbstractModel {
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
 * Compute node statistical metrics
 * @class
 */
class ComputeNodeMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of compute nodes that have been submitted
         * @type {number || null}
         */
        this.SubmittedCount = null;

        /**
         * Number of compute nodes that are being created
         * @type {number || null}
         */
        this.CreatingCount = null;

        /**
         * Number of compute nodes that failed to be created
         * @type {number || null}
         */
        this.CreationFailedCount = null;

        /**
         * Number of compute nodes that have been created
         * @type {number || null}
         */
        this.CreatedCount = null;

        /**
         * Number of running compute nodes
         * @type {number || null}
         */
        this.RunningCount = null;

        /**
         * Number of compute nodes that are being terminated
         * @type {number || null}
         */
        this.DeletingCount = null;

        /**
         * Number of exceptional compute nodes
         * @type {number || null}
         */
        this.AbnormalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubmittedCount = 'SubmittedCount' in params ? params.SubmittedCount : null;
        this.CreatingCount = 'CreatingCount' in params ? params.CreatingCount : null;
        this.CreationFailedCount = 'CreationFailedCount' in params ? params.CreationFailedCount : null;
        this.CreatedCount = 'CreatedCount' in params ? params.CreatedCount : null;
        this.RunningCount = 'RunningCount' in params ? params.RunningCount : null;
        this.DeletingCount = 'DeletingCount' in params ? params.DeletingCount : null;
        this.AbnormalCount = 'AbnormalCount' in params ? params.AbnormalCount : null;

    }
}

/**
 * Task statistical metrics
 * @class
 */
class TaskMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of submitted tasks
         * @type {number || null}
         */
        this.SubmittedCount = null;

        /**
         * Number of pending tasks
         * @type {number || null}
         */
        this.PendingCount = null;

        /**
         * Number of Runnable tasks
         * @type {number || null}
         */
        this.RunnableCount = null;

        /**
         * Number of starting tasks
         * @type {number || null}
         */
        this.StartingCount = null;

        /**
         * Number of running tasks
         * @type {number || null}
         */
        this.RunningCount = null;

        /**
         * Number of successful tasks
         * @type {number || null}
         */
        this.SucceedCount = null;

        /**
         * Number of failed and interrupted tasks
         * @type {number || null}
         */
        this.FailedInterruptedCount = null;

        /**
         * Failed count
         * @type {number || null}
         */
        this.FailedCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubmittedCount = 'SubmittedCount' in params ? params.SubmittedCount : null;
        this.PendingCount = 'PendingCount' in params ? params.PendingCount : null;
        this.RunnableCount = 'RunnableCount' in params ? params.RunnableCount : null;
        this.StartingCount = 'StartingCount' in params ? params.StartingCount : null;
        this.RunningCount = 'RunningCount' in params ? params.RunningCount : null;
        this.SucceedCount = 'SucceedCount' in params ? params.SucceedCount : null;
        this.FailedInterruptedCount = 'FailedInterruptedCount' in params ? params.FailedInterruptedCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;

    }
}

/**
 * TerminateComputeNodes request structure.
 * @class
 */
class TerminateComputeNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * List of compute node IDs
         * @type {Array.<string> || null}
         */
        this.ComputeNodeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ComputeNodeIds = 'ComputeNodeIds' in params ? params.ComputeNodeIds : null;

    }
}

/**
 * Describes local disk specifications.
 * @class
 */
class LocalDiskType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of a local disk.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Attributes of a local disk.
         * @type {string || null}
         */
        this.PartitionType = null;

        /**
         * Minimum size of a local disk.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Maximum size of a local disk.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Whether a local disk is required during purchase. Valid values:<br><li>REQUIRED: required<br><li>OPTIONAL: optional
         * @type {string || null}
         */
        this.Required = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.PartitionType = 'PartitionType' in params ? params.PartitionType : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Required = 'Required' in params ? params.Required : null;

    }
}

/**
 * DescribeComputeEnvActivities request structure.
 * @class
 */
class DescribeComputeEnvActivitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of returned items
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter
<li> `compute-node-id` - String - Optional - Filter by the compute node ID.</li>
         * @type {Filter || null}
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            let obj = new Filter();
            obj.deserialize(params.Filters)
            this.Filters = obj;
        }

    }
}

/**
 * CreateTaskTemplate request structure.
 * @class
 */
class CreateTaskTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task template name
         * @type {string || null}
         */
        this.TaskTemplateName = null;

        /**
         * Task template content with the same parameter requirements as the task
         * @type {Task || null}
         */
        this.TaskTemplateInfo = null;

        /**
         * Task template description
         * @type {string || null}
         */
        this.TaskTemplateDescription = null;

        /**
         * Specifies the tags you want to bind to a task template. Each task template supports up to 10 tags.
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
        this.TaskTemplateName = 'TaskTemplateName' in params ? params.TaskTemplateName : null;

        if (params.TaskTemplateInfo) {
            let obj = new Task();
            obj.deserialize(params.TaskTemplateInfo)
            this.TaskTemplateInfo = obj;
        }
        this.TaskTemplateDescription = 'TaskTemplateDescription' in params ? params.TaskTemplateDescription : null;

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
 * DeleteComputeEnv request structure.
 * @class
 */
class DeleteComputeEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * CreateComputeEnv request structure.
 * @class
 */
class CreateComputeEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment information
         * @type {NamedComputeEnv || null}
         */
        this.ComputeEnv = null;

        /**
         * Location information
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * The string used to guarantee the idempotency of the request, which is generated by the user and must be unique for different requests. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.
         * @type {string || null}
         */
        this.ClientToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ComputeEnv) {
            let obj = new NamedComputeEnv();
            obj.deserialize(params.ComputeEnv)
            this.ComputeEnv = obj;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

    }
}

/**
 * DescribeComputeEnvCreateInfo response structure.
 * @class
 */
class DescribeComputeEnvCreateInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Compute environment name
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * Compute environment description
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EnvDescription = null;

        /**
         * Compute environment type. Only `MANAGED` is supported
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * Compute environment parameter
         * @type {EnvData || null}
         */
        this.EnvData = null;

        /**
         * Data disk mounting option
         * @type {Array.<MountDataDisk> || null}
         */
        this.MountDataDisks = null;

        /**
         * Input mapping
         * @type {Array.<InputMapping> || null}
         */
        this.InputMappings = null;

        /**
         * Authorization information
         * @type {Array.<Authentication> || null}
         */
        this.Authentications = null;

        /**
         * Notification information
         * @type {Array.<Notification> || null}
         */
        this.Notifications = null;

        /**
         * Number of desired compute nodes
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * Tag list bound to the compute environment.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.EnvName = 'EnvName' in params ? params.EnvName : null;
        this.EnvDescription = 'EnvDescription' in params ? params.EnvDescription : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

        if (params.EnvData) {
            let obj = new EnvData();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }

        if (params.MountDataDisks) {
            this.MountDataDisks = new Array();
            for (let z in params.MountDataDisks) {
                let obj = new MountDataDisk();
                obj.deserialize(params.MountDataDisks[z]);
                this.MountDataDisks.push(obj);
            }
        }

        if (params.InputMappings) {
            this.InputMappings = new Array();
            for (let z in params.InputMappings) {
                let obj = new InputMapping();
                obj.deserialize(params.InputMappings[z]);
                this.InputMappings.push(obj);
            }
        }

        if (params.Authentications) {
            this.Authentications = new Array();
            for (let z in params.Authentications) {
                let obj = new Authentication();
                obj.deserialize(params.Authentications[z]);
                this.Authentications.push(obj);
            }
        }

        if (params.Notifications) {
            this.Notifications = new Array();
            for (let z in params.Notifications) {
                let obj = new Notification();
                obj.deserialize(params.Notifications[z]);
                this.Notifications.push(obj);
            }
        }
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateJob response structure.
 * @class
 */
class TerminateJobResponse extends  AbstractModel {
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
 * Compute environment creation information
 * @class
 */
class ComputeEnvCreateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Compute environment name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * Compute environment description
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EnvDescription = null;

        /**
         * Compute environment type. Only "MANAGED" type is supported
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * Compute environment parameter
         * @type {EnvData || null}
         */
        this.EnvData = null;

        /**
         * Data disk mounting option
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<MountDataDisk> || null}
         */
        this.MountDataDisks = null;

        /**
         * Input mapping
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<InputMapping> || null}
         */
        this.InputMappings = null;

        /**
         * Authorization information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Authentication> || null}
         */
        this.Authentications = null;

        /**
         * Notification information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Notification> || null}
         */
        this.Notifications = null;

        /**
         * Number of desired compute nodes
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * Tag list of the compute environment.
Note: This field may return `null`, indicating that no valid value was found.
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.EnvName = 'EnvName' in params ? params.EnvName : null;
        this.EnvDescription = 'EnvDescription' in params ? params.EnvDescription : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

        if (params.EnvData) {
            let obj = new EnvData();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }

        if (params.MountDataDisks) {
            this.MountDataDisks = new Array();
            for (let z in params.MountDataDisks) {
                let obj = new MountDataDisk();
                obj.deserialize(params.MountDataDisks[z]);
                this.MountDataDisks.push(obj);
            }
        }

        if (params.InputMappings) {
            this.InputMappings = new Array();
            for (let z in params.InputMappings) {
                let obj = new InputMapping();
                obj.deserialize(params.InputMappings[z]);
                this.InputMappings.push(obj);
            }
        }

        if (params.Authentications) {
            this.Authentications = new Array();
            for (let z in params.Authentications) {
                let obj = new Authentication();
                obj.deserialize(params.Authentications[z]);
                this.Authentications.push(obj);
            }
        }

        if (params.Notifications) {
            this.Notifications = new Array();
            for (let z in params.Notifications) {
                let obj = new Notification();
                obj.deserialize(params.Notifications[z]);
                this.Notifications.push(obj);
            }
        }
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;

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
 * DescribeComputeEnvCreateInfos request structure.
 * @class
 */
class DescribeComputeEnvCreateInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of compute environment IDs, which cannot be specified together with the `Filters` parameter.
         * @type {Array.<string> || null}
         */
        this.EnvIds = null;

        /**
         * Filter conditions
<li> `zone` - String - Optional - Filter by the availability zone.</li>
<li> `env-id` - String - Optional - Filter by the compute environment ID.</li>
<li> `env-name` - String - Optional - Filter by the compute environment name.</li>
It cannot be specified together with `EnvIds`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of returned items
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
        this.EnvIds = 'EnvIds' in params ? params.EnvIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeComputeEnv request structure.
 * @class
 */
class DescribeComputeEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * Options related to bidding requests
 * @class
 */
class InstanceMarketOptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Spot-related options
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {SpotMarketOptions || null}
         */
        this.SpotOptions = null;

        /**
         * Market type. Valid value: `spot`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MarketType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpotOptions) {
            let obj = new SpotMarketOptions();
            obj.deserialize(params.SpotOptions)
            this.SpotOptions = obj;
        }
        this.MarketType = 'MarketType' in params ? params.MarketType : null;

    }
}

/**
 * DescribeTaskTemplates response structure.
 * @class
 */
class DescribeTaskTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of task templates
         * @type {Array.<TaskTemplateView> || null}
         */
        this.TaskTemplateSet = null;

        /**
         * Number of task templates
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

        if (params.TaskTemplateSet) {
            this.TaskTemplateSet = new Array();
            for (let z in params.TaskTemplateSet) {
                let obj = new TaskTemplateView();
                obj.deserialize(params.TaskTemplateSet[z]);
                this.TaskTemplateSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteJob request structure.
 * @class
 */
class DeleteJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * DescribeTaskLogs response structure.
 * @class
 */
class DescribeTaskLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of task instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Set of task instance log details
         * @type {Array.<TaskInstanceLog> || null}
         */
        this.TaskInstanceLogSet = null;

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

        if (params.TaskInstanceLogSet) {
            this.TaskInstanceLogSet = new Array();
            for (let z in params.TaskInstanceLogSet) {
                let obj = new TaskInstanceLog();
                obj.deserialize(params.TaskInstanceLogSet[z]);
                this.TaskInstanceLogSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTaskTemplates request structure.
 * @class
 */
class DeleteTaskTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * This API is used to delete task template information.
         * @type {Array.<string> || null}
         */
        this.TaskTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskTemplateIds = 'TaskTemplateIds' in params ? params.TaskTemplateIds : null;

    }
}

/**
 * DescribeJob response structure.
 * @class
 */
class DescribeJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Job name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Availability zone information
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Job priority
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Job state
         * @type {string || null}
         */
        this.JobState = null;

        /**
         * Creation Date
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task view information
         * @type {Array.<TaskView> || null}
         */
        this.TaskSet = null;

        /**
         * Information of the dependency among tasks
         * @type {Array.<Dependence> || null}
         */
        this.DependenceSet = null;

        /**
         * Task statistical metrics
         * @type {TaskMetrics || null}
         */
        this.TaskMetrics = null;

        /**
         * Task instance statistical metrics
         * @type {TaskInstanceMetrics || null}
         */
        this.TaskInstanceMetrics = null;

        /**
         * Job failure reason
         * @type {string || null}
         */
        this.StateReason = null;

        /**
         * List of tags bound with the job.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Next action
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.NextAction = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.JobState = 'JobState' in params ? params.JobState : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskView();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }

        if (params.DependenceSet) {
            this.DependenceSet = new Array();
            for (let z in params.DependenceSet) {
                let obj = new Dependence();
                obj.deserialize(params.DependenceSet[z]);
                this.DependenceSet.push(obj);
            }
        }

        if (params.TaskMetrics) {
            let obj = new TaskMetrics();
            obj.deserialize(params.TaskMetrics)
            this.TaskMetrics = obj;
        }

        if (params.TaskInstanceMetrics) {
            let obj = new TaskInstanceMetrics();
            obj.deserialize(params.TaskInstanceMetrics)
            this.TaskInstanceMetrics = obj;
        }
        this.StateReason = 'StateReason' in params ? params.StateReason : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.NextAction = 'NextAction' in params ? params.NextAction : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComputeEnvCreateInfo request structure.
 * @class
 */
class DescribeComputeEnvCreateInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * ModifyTaskTemplate request structure.
 * @class
 */
class ModifyTaskTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task template ID
         * @type {string || null}
         */
        this.TaskTemplateId = null;

        /**
         * Task template name
         * @type {string || null}
         */
        this.TaskTemplateName = null;

        /**
         * Task template description
         * @type {string || null}
         */
        this.TaskTemplateDescription = null;

        /**
         * Task template information
         * @type {Task || null}
         */
        this.TaskTemplateInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskTemplateId = 'TaskTemplateId' in params ? params.TaskTemplateId : null;
        this.TaskTemplateName = 'TaskTemplateName' in params ? params.TaskTemplateName : null;
        this.TaskTemplateDescription = 'TaskTemplateDescription' in params ? params.TaskTemplateDescription : null;

        if (params.TaskTemplateInfo) {
            let obj = new Task();
            obj.deserialize(params.TaskTemplateInfo)
            this.TaskTemplateInfo = obj;
        }

    }
}

/**
 * Describes data disk information.
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data disk size (in GB). The minimum adjustment increment is 10 GB. The value range varies by data disk type. For more information on limits, see [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952?from_cn_redirect=1). The default value is 0, indicating that no data disk is purchased. For more information, see the product documentation.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Data disk type. For restrictions on data disk types, refer to [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952?from_cn_redirect=1). Valid values:<br/>
<li>
  LOCAL_BASIC: local disk.<br/>
  <li>
    LOCAL_SSD: local SSD.<br/>
    <li>
      LOCAL_NVME: local NVMe disk, which is closely related to InstanceType, and cannot be specified.<br/>
      <li>
        LOCAL_PRO: local HDD, which is closely related to InstanceType, and cannot be specified.<br/>
        <li>
          CLOUD_BASIC: basic cloud disk.<br/>
          <li>
            CLOUD_PREMIUM: premium cloud disk.<br/>
            <li>
              CLOUD_SSD: cloud SSD.<br />
              <li>
                CLOUD_HSSD: enhanced SSD.<br/>
                <li>
                  CLOUD_TSSD: tremendous SSD.<br/>
                  <li>
                    CLOUD_BSSD: balanced SSD.<br/><br/>Default value: LOCAL_BASIC.<br/><br/>This parameter is invalid for the `ResizeInstanceDisk` API.
                  </li>
                </li>
              </li>
            </li>
          </li>
        </li>
      </li>
    </li>
  </li>
</li>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Data disk ID. Note that it’s not available for `LOCAL_BASIC` and `LOCAL_SSD` disks.
It is only used as a response parameter for APIs such as `DescribeInstances`, and cannot be used as a request parameter for APIs such as `RunInstances`.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Whether a data disk is terminated when the associated CVM instance is terminated. Valid values:
<li>TRUE: The data disk is terminated when the associated CVM instance is terminated. This only supports pay-as-you-go cloud disks that are billed by hour.</li>
<li>
  FALSE: The data disk is retained when the associated CVM instance is terminated.<br/>
  Default value: TRUE.<br/>
  This parameter is currently used only in the `RunInstances` API.
</li>
Note: This field may return null, indicating that no valid value is found.
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * Data disk snapshot ID. The size of the selected data disk snapshot must be smaller than that of the data disk.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Whether a data disk is encrypted. Valid values:
<li>true: encrypted.</li>
<li>
  false: not encrypted.<br/>
  Default value: false.<br/>
  This parameter is currently used only in the `RunInstances` API.
</li>
Note: This field may return null, indicating that no valid value is found.
         * @type {boolean || null}
         */
        this.Encrypt = null;

        /**
         * ID of the custom CMK in the format of UUID or “kms-abcd1234”. This parameter is used to encrypt cloud disks.

Currently, this parameter is only used in the `RunInstances` API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * Cloud disk performance, in MB/s
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ThroughputPerformance = null;

        /**
         * ID of the dedicated cluster to which the instance belongs.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * Burst performance.

 <b>Note: This field is in beta test.</b>
Note: This field may return null, indicating that no valid value is found.
         * @type {boolean || null}
         */
        this.BurstPerformance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.ThroughputPerformance = 'ThroughputPerformance' in params ? params.ThroughputPerformance : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.BurstPerformance = 'BurstPerformance' in params ? params.BurstPerformance : null;

    }
}

/**
 * Compute environment
 * @class
 */
class NamedComputeEnv extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment name
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * Number of desired compute nodes
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * Compute environment description
         * @type {string || null}
         */
        this.EnvDescription = null;

        /**
         * Compute environment management type
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * Compute environment's specific parameters
         * @type {EnvData || null}
         */
        this.EnvData = null;

        /**
         * Data disk mounting option
         * @type {Array.<MountDataDisk> || null}
         */
        this.MountDataDisks = null;

        /**
         * Authorization information
         * @type {Array.<Authentication> || null}
         */
        this.Authentications = null;

        /**
         * Input mapping information
         * @type {Array.<InputMapping> || null}
         */
        this.InputMappings = null;

        /**
         * Agent running mode; applicable for Windows
         * @type {AgentRunningMode || null}
         */
        this.AgentRunningMode = null;

        /**
         * Notification information
         * @type {Array.<Notification> || null}
         */
        this.Notifications = null;

        /**
         * Policy for inactive nodes. Default: `RECREATE`, which means that instance resources will be re-created periodically for compute nodes where instance creation fails or is abnormally returned.
         * @type {string || null}
         */
        this.ActionIfComputeNodeInactive = null;

        /**
         * When the instances are failed to be created or returned because of exceptions, the related compute node will retry to create instances periodically. This parameter specifies the maximum retry attempts. The max value is 100 and the default value is `7`.
         * @type {number || null}
         */
        this.ResourceMaxRetryCount = null;

        /**
         * List of tags to bind with a compute environment. Each compute environment can have up to 10 tags.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Target of the notification
Values: `CMQ`, `TDMQ_CMQ`
`CMQ`: Tencent Cloud CMQ (default)
`TDMQ_CMQ`: Tencent Cloud TDMQ_CMQ.<br/>Note: CMQ has been discontinued. Please use `TDMQ_CMQ`. See [CMQ Queue Migration to TDMQ for CMQ](https://intl.cloud.tencent.com/document/product/406/60860?from_cn_redirect=1)
         * @type {string || null}
         */
        this.NotificationTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvName = 'EnvName' in params ? params.EnvName : null;
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;
        this.EnvDescription = 'EnvDescription' in params ? params.EnvDescription : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

        if (params.EnvData) {
            let obj = new EnvData();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }

        if (params.MountDataDisks) {
            this.MountDataDisks = new Array();
            for (let z in params.MountDataDisks) {
                let obj = new MountDataDisk();
                obj.deserialize(params.MountDataDisks[z]);
                this.MountDataDisks.push(obj);
            }
        }

        if (params.Authentications) {
            this.Authentications = new Array();
            for (let z in params.Authentications) {
                let obj = new Authentication();
                obj.deserialize(params.Authentications[z]);
                this.Authentications.push(obj);
            }
        }

        if (params.InputMappings) {
            this.InputMappings = new Array();
            for (let z in params.InputMappings) {
                let obj = new InputMapping();
                obj.deserialize(params.InputMappings[z]);
                this.InputMappings.push(obj);
            }
        }

        if (params.AgentRunningMode) {
            let obj = new AgentRunningMode();
            obj.deserialize(params.AgentRunningMode)
            this.AgentRunningMode = obj;
        }

        if (params.Notifications) {
            this.Notifications = new Array();
            for (let z in params.Notifications) {
                let obj = new Notification();
                obj.deserialize(params.Notifications[z]);
                this.Notifications.push(obj);
            }
        }
        this.ActionIfComputeNodeInactive = 'ActionIfComputeNodeInactive' in params ? params.ActionIfComputeNodeInactive : null;
        this.ResourceMaxRetryCount = 'ResourceMaxRetryCount' in params ? params.ResourceMaxRetryCount : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.NotificationTarget = 'NotificationTarget' in params ? params.NotificationTarget : null;

    }
}

/**
 * DeleteJob response structure.
 * @class
 */
class DeleteJobResponse extends  AbstractModel {
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
 * Event configuration
 * @class
 */
class EventConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event type. Value range: <br/><li>`JOB_RUNNING`: The job is running, applicable to `SubmitJob`. </li><li>`JOB_SUCCEED`: The job succeeded, applicable to `SubmitJob`. </li><li>`JOB_FAILED`: The job failed, applicable to `SubmitJob`. </li><li>`JOB_FAILED_INTERRUPTED`: The job failed and the instance is retained, applicable to `SubmitJob`. </li><li>`TASK_RUNNING`: The task is running, applicable to `SubmitJob`. </li><li>`TASK_SUCCEED`: The task succeeded, applicable to `SubmitJob`. </li><li>`TASK_FAILED`: The task failed, applicable to `SubmitJob`. </li><li>`TASK_FAILED_INTERRUPTED`: The task failed and the instance is retained, applicable to `SubmitJob`. </li><li>`TASK_INSTANCE_RUNNING`: The task instance is running, applicable to `SubmitJob`. </li><li>`TASK_INSTANCE_SUCCEED`: The task instance succeeded, applicable to `SubmitJob`. </li><li>`TASK_INSTANCE_FAILED`: The task instance failed, applicable to `SubmitJob`. </li><li>`TASK_INSTANCE_FAILED_INTERRUPTED`: The task instance failed and the instance is retained, applicable to `SubmitJob`. </li><li>`COMPUTE_ENV_CREATED`: the compute environment has been created, applicable to "CreateComputeEnv". </li><li>`COMPUTE_ENV_DELETED`: The compute environment has been deleted, applicable to `CreateComputeEnv`. </li><li>`COMPUTE_NODE_CREATED`: The compute node has been created, applicable to `CreateComputeEnv` and `SubmitJob`. </li><li>`COMPUTE_NODE_CREATION_FAILED`: The compute node creation failed, applicable to `CreateComputeEnv` and `SubmitJob`. </li><li>`COMPUTE_NODE_RUNNING`: The compute node is running, applicable to `CreateComputeEnv` and `SubmitJob`. </li><li>`COMPUTE_NODE_ABNORMAL`: The compute node is exceptional, applicable to "CreateComputeEnv" and "SubmitJob". </li><li>`COMPUTE_NODE_DELETING`: The compute node has been deleted, applicable to `CreateComputeEnv` and `SubmitJob`. </li>
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * Custom key-value pair
         * @type {Array.<EventVar> || null}
         */
        this.EventVars = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventName = 'EventName' in params ? params.EventName : null;

        if (params.EventVars) {
            this.EventVars = new Array();
            for (let z in params.EventVars) {
                let obj = new EventVar();
                obj.deserialize(params.EventVars[z]);
                this.EventVars.push(obj);
            }
        }

    }
}

/**
 * Options related to bidding.
 * @class
 */
class SpotMarketOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bidding price
         * @type {string || null}
         */
        this.MaxPrice = null;

        /**
         * Bidding request type. Currently only "one-time" is supported.
         * @type {string || null}
         */
        this.SpotInstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxPrice = 'MaxPrice' in params ? params.MaxPrice : null;
        this.SpotInstanceType = 'SpotInstanceType' in params ? params.SpotInstanceType : null;

    }
}

/**
 * Describes login settings of an instance.
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Login password of the instance. <br><li>Linux instances: 8-16 characters, containing at least two of the following categories: [a-z, A-Z], [0-9] and [()`~!@#$%^&*-+=|{}[]:;',.?/]. <br><li>Windows instances: 12-16 characters, containing at least three of the following categories: [a-z], [A-Z], [0-9] and [()`~!@#$%^&*-+={}[]:;',.?/]. <br><br>If this parameter is not specified, a random password will be generated and sent to you via the Message Center.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * List of key IDs. After an instance is associated with a key, you can access the instance with the private key in the key pair. You can call `DescribeKeyPairs` to obtain `KeyId`. Key and password cannot be specified at the same time. Windows instances do not support keys. Currently, you can only specify one key when purchasing an instance.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Whether to keep the original settings of an image. Values: `TRUE` (default), `FALSE`. It cannot be specified together with `Password` or `KeyIds.N`. You can specify this parameter as `TRUE` only when you create an instance using a custom image, a shared image, or an imported image. 
         * @type {string || null}
         */
        this.KeepImageLogin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.KeepImageLogin = 'KeepImageLogin' in params ? params.KeepImageLogin : null;

    }
}

/**
 * DetachInstances request structure.
 * @class
 */
class DetachInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * List of instance IDs
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Describes information of an instance
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Image ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Instance login settings.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

    }
}

/**
 * Output mapping
 * @class
 */
class OutputMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source path
         * @type {string || null}
         */
        this.SourcePath = null;

        /**
         * Destination path
         * @type {string || null}
         */
        this.DestinationPath = null;

        /**
         * Output mapping options
Note: This field may return `null`, indicating that no valid value was found.
         * @type {OutputMappingOption || null}
         */
        this.OutputMappingOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourcePath = 'SourcePath' in params ? params.SourcePath : null;
        this.DestinationPath = 'DestinationPath' in params ? params.DestinationPath : null;

        if (params.OutputMappingOption) {
            let obj = new OutputMappingOption();
            obj.deserialize(params.OutputMappingOption)
            this.OutputMappingOption = obj;
        }

    }
}

/**
 * Describes the configuration of enhanced services, such as Cloud Security and Cloud Monitor.
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enables cloud security service. If this parameter is not specified, the cloud security service will be enabled by default.
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * Enables cloud monitor service. If this parameter is not specified, the cloud monitor service will be enabled by default.
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

        /**
         * Whether to enable the TAT service. If this parameter is not specified, the TAT service is enabled for public images and disabled for other images by default.
         * @type {RunAutomationServiceEnabled || null}
         */
        this.AutomationService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new RunSecurityServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new RunMonitorServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

        if (params.AutomationService) {
            let obj = new RunAutomationServiceEnabled();
            obj.deserialize(params.AutomationService)
            this.AutomationService = obj;
        }

    }
}

/**
 * Describes the TAT service information.
 * @class
 */
class RunAutomationServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the TAT service. Valid values: <br><li>`TRUE`: yes;<br><li>`FALSE`: no<br><br>Default: `FALSE`.
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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DescribeJobSubmitInfo response structure.
 * @class
 */
class DescribeJobSubmitInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Job name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Job description
         * @type {string || null}
         */
        this.JobDescription = null;

        /**
         * Job priority. Tasks (Task) and task instances (TaskInstance) inherit the job priority
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Information of tasks in the job
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

        /**
         * Dependency information
         * @type {Array.<Dependence> || null}
         */
        this.Dependences = null;

        /**
         * List of tags bound with the job.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.JobDescription = 'JobDescription' in params ? params.JobDescription : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }

        if (params.Dependences) {
            this.Dependences = new Array();
            for (let z in params.Dependences) {
                let obj = new Dependence();
                obj.deserialize(params.Dependences[z]);
                this.Dependences.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComputeEnvCreateInfos response structure.
 * @class
 */
class DescribeComputeEnvCreateInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of compute environments
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of compute environment creation information
         * @type {Array.<ComputeEnvCreateInfo> || null}
         */
        this.ComputeEnvCreateInfoSet = null;

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

        if (params.ComputeEnvCreateInfoSet) {
            this.ComputeEnvCreateInfoSet = new Array();
            for (let z in params.ComputeEnvCreateInfoSet) {
                let obj = new ComputeEnvCreateInfo();
                obj.deserialize(params.ComputeEnvCreateInfoSet[z]);
                this.ComputeEnvCreateInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes information related to the Cloud Security service.
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable [Cloud Security](https://intl.cloud.tencent.com/document/product/296?from_cn_redirect=1). Valid values: <br><li>TRUE: enable Cloud Security <br><li>FALSE: do not enable Cloud Security <br><br>Default value: TRUE.
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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DescribeJob request structure.
 * @class
 */
class DescribeJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * Redirection information

 * @class
 */
class RedirectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Standard output redirection path
         * @type {string || null}
         */
        this.StdoutRedirectPath = null;

        /**
         * Standard error redirection path
         * @type {string || null}
         */
        this.StderrRedirectPath = null;

        /**
         * Standard output redirection file name, which supports three placeholders: `${BATCH_JOB_ID}`, `${BATCH_TASK_NAME}`, and `${BATCH_TASK_INSTANCE_INDEX}`
         * @type {string || null}
         */
        this.StdoutRedirectFileName = null;

        /**
         * Standard error redirection file name, which supports three placeholders: `${BATCH_JOB_ID}`, `${BATCH_TASK_NAME}`, and `${BATCH_TASK_INSTANCE_INDEX}`
         * @type {string || null}
         */
        this.StderrRedirectFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StdoutRedirectPath = 'StdoutRedirectPath' in params ? params.StdoutRedirectPath : null;
        this.StderrRedirectPath = 'StderrRedirectPath' in params ? params.StderrRedirectPath : null;
        this.StdoutRedirectFileName = 'StdoutRedirectFileName' in params ? params.StdoutRedirectFileName : null;
        this.StderrRedirectFileName = 'StderrRedirectFileName' in params ? params.StderrRedirectFileName : null;

    }
}

/**
 * DescribeInstanceCategories response structure.
 * @class
 */
class DescribeInstanceCategoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of CVM instance categories
         * @type {Array.<InstanceCategoryItem> || null}
         */
        this.InstanceCategorySet = null;

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

        if (params.InstanceCategorySet) {
            this.InstanceCategorySet = new Array();
            for (let z in params.InstanceCategorySet) {
                let obj = new InstanceCategoryItem();
                obj.deserialize(params.InstanceCategorySet[z]);
                this.InstanceCategorySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskTemplate response structure.
 * @class
 */
class ModifyTaskTemplateResponse extends  AbstractModel {
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
 * Input mapping
 * @class
 */
class InputMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source path
         * @type {string || null}
         */
        this.SourcePath = null;

        /**
         * Destination path
         * @type {string || null}
         */
        this.DestinationPath = null;

        /**
         * Mounting configuration item parameter
         * @type {string || null}
         */
        this.MountOptionParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourcePath = 'SourcePath' in params ? params.SourcePath : null;
        this.DestinationPath = 'DestinationPath' in params ? params.DestinationPath : null;
        this.MountOptionParameter = 'MountOptionParameter' in params ? params.MountOptionParameter : null;

    }
}

/**
 * Local redirection information
 * @class
 */
class RedirectLocalInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Standard output redirection local path
         * @type {string || null}
         */
        this.StdoutLocalPath = null;

        /**
         * Standard error redirection local path
         * @type {string || null}
         */
        this.StderrLocalPath = null;

        /**
         * Standard output redirection local file name, which supports three placeholders: `${BATCH_JOB_ID}`, `${BATCH_TASK_NAME}`, and `${BATCH_TASK_INSTANCE_INDEX}`
         * @type {string || null}
         */
        this.StdoutLocalFileName = null;

        /**
         * Standard error redirection local file name, which supports three placeholders: `${BATCH_JOB_ID}`, `${BATCH_TASK_NAME}`, and `${BATCH_TASK_INSTANCE_INDEX}`
         * @type {string || null}
         */
        this.StderrLocalFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StdoutLocalPath = 'StdoutLocalPath' in params ? params.StdoutLocalPath : null;
        this.StderrLocalPath = 'StderrLocalPath' in params ? params.StderrLocalPath : null;
        this.StdoutLocalFileName = 'StdoutLocalFileName' in params ? params.StdoutLocalFileName : null;
        this.StderrLocalFileName = 'StderrLocalFileName' in params ? params.StderrLocalFileName : null;

    }
}

/**
 * DescribeJobSubmitInfo request structure.
 * @class
 */
class DescribeJobSubmitInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * Dependency
 * @class
 */
class Dependence extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dependency start task name 
         * @type {string || null}
         */
        this.StartTask = null;

        /**
         * Dependency end task name 
         * @type {string || null}
         */
        this.EndTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTask = 'StartTask' in params ? params.StartTask : null;
        this.EndTask = 'EndTask' in params ? params.EndTask : null;

    }
}

/**
 * > Key-value pair filters used for conditional queries, such as filtering results by ID, name, and state.
> * If there are multiple `Filter` parameters, they are evaluated using the logical `AND` operator.
> * If a `Filter` contains multiple `Values`, they are evaluated using the logical `OR` operator.
>
> Take [DescribeInstances](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) as an example. You can use the following filters to query the instances in availability zone (`zone`) Guangzhou Zone 1 ***and*** whose billing plan (`instance-charge-type`) is pay-as-you-go:
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=POSTPAID_BY_HOUR
```
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter values.
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
 * CreateComputeEnv response structure.
 * @class
 */
class CreateComputeEnvResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Docker container information
 * @class
 */
class Docker extends  AbstractModel {
    constructor(){
        super();

        /**
         * Docker Hub username or Tencent Registry username
         * @type {string || null}
         */
        this.User = null;

        /**
         * Docker Hub password or Tencent Registry password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * For Docker Hub, enter "[user/repo]:[tag]"; for Tencent Registry, enter "ccr.ccs.tencentyun.com/[namespace/repo]:[tag]"
         * @type {string || null}
         */
        this.Image = null;

        /**
         * For Docker Hub, this can be left blank, but please ensure public network access is present. For Tencent Registry, the server address is "ccr.ccs.tencentyun.com"
         * @type {string || null}
         */
        this.Server = null;

        /**
         * Maximum retry attempts to load docket images. Range: 0 - 10. Default: `0`
         * @type {number || null}
         */
        this.MaxRetryCount = null;

        /**
         * Docker image loading timeout period (in seconds). Range: 1 - 360
         * @type {number || null}
         */
        this.DelayOnRetry = null;

        /**
         * Docker command execution parameter
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.DockerRunOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Server = 'Server' in params ? params.Server : null;
        this.MaxRetryCount = 'MaxRetryCount' in params ? params.MaxRetryCount : null;
        this.DelayOnRetry = 'DelayOnRetry' in params ? params.DelayOnRetry : null;
        this.DockerRunOption = 'DockerRunOption' in params ? params.DockerRunOption : null;

    }
}

/**
 * ModifyComputeEnv response structure.
 * @class
 */
class ModifyComputeEnvResponse extends  AbstractModel {
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
 * Placement of an instance, including its availability zone, project, host (for CDH products only), master host IP, etc.
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the availability zone where the instance resides. You can call the [DescribeZones](https://intl.cloud.tencent.com/document/product/213/35071) API and obtain the ID in the returned `Zone` field.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * ID of the project to which the instance belongs. This parameter can be obtained from the `projectId` returned by [DescribeProject](https://intl.cloud.tencent.com/document/api/651/78725?from_cn_redirect=1). If this is left empty, the default project is used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * ID list of CDHs from which the instance can be created. If you have purchased CDHs and specify this parameter, the instances you purchase will be randomly deployed on the CDHs.
         * @type {Array.<string> || null}
         */
        this.HostIds = null;

        /**
         * The ID of the CDH to which the instance belongs, only used as an output parameter.
         * @type {string || null}
         */
        this.HostId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.HostIds = 'HostIds' in params ? params.HostIds : null;
        this.HostId = 'HostId' in params ? params.HostId : null;

    }
}

/**
 * Compute node
 * @class
 */
class ComputeNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute node ID
         * @type {string || null}
         */
        this.ComputeNodeId = null;

        /**
         * Compute node instance ID. In a CVM scenario, this parameter is the CVM InstanceId
         * @type {string || null}
         */
        this.ComputeNodeInstanceId = null;

        /**
         * Compute node state
         * @type {string || null}
         */
        this.ComputeNodeState = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size in GiB
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * Resource creation time
         * @type {string || null}
         */
        this.ResourceCreatedTime = null;

        /**
         * Available capacity of the compute node when running TaskInstance. 0 means that the compute node is busy.
         * @type {number || null}
         */
        this.TaskInstanceNumAvailable = null;

        /**
         * BatchCompute Agent version
         * @type {string || null}
         */
        this.AgentVersion = null;

        /**
         * Private IP of the instance
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Public IP of the instance
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * Compute environment resource type. Values: `CVM`, `CPM` (Bare Metal)
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Source of compute environment resources. <br>`BATCH_CREATED`: Instances created by BatchCompute.<br>
`USER_ATTACHED`: Instances added to the compute environment by the user.
         * @type {string || null}
         */
        this.ResourceOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComputeNodeId = 'ComputeNodeId' in params ? params.ComputeNodeId : null;
        this.ComputeNodeInstanceId = 'ComputeNodeInstanceId' in params ? params.ComputeNodeInstanceId : null;
        this.ComputeNodeState = 'ComputeNodeState' in params ? params.ComputeNodeState : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.ResourceCreatedTime = 'ResourceCreatedTime' in params ? params.ResourceCreatedTime : null;
        this.TaskInstanceNumAvailable = 'TaskInstanceNumAvailable' in params ? params.TaskInstanceNumAvailable : null;
        this.AgentVersion = 'AgentVersion' in params ? params.AgentVersion : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceOrigin = 'ResourceOrigin' in params ? params.ResourceOrigin : null;

    }
}

/**
 * Describes pricing information.
 * @class
 */
class ItemPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * The original unit price for pay-as-you-go mode in USD. <br><li>When a billing tier is returned, it indicates the price fo the returned billing tier. For example, if `UnitPriceSecondStep` is returned, it refers to the unit price for the usage between 0 to 96 hours. Otherwise, it refers to that the unit price for unlimited usage.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Billing unit for pay-as-you-go mode. Valid values: <br><li>HOUR: billed on an hourly basis. It's used for hourly postpaid instances (`POSTPAID_BY_HOUR`). <br><li>GB: bill by traffic in GB. It's used for postpaid products that are billed by the hourly traffic (`TRAFFIC_POSTPAID_BY_HOUR`).
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ChargeUnit = null;

        /**
         * The original price of a pay-in-advance instance, in USD.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount price of a prepaid instance, in USD.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Percentage of the original price. For example, if you enter "20.0", the discounted price will be 20% of the original price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * The discounted unit price for pay-as-you-go mode in USD. <br><li>When a billing tier is returned, it indicates the price fo the returned billing tier. For example, if `UnitPriceSecondStep` is returned, it refers to the unit price for the usage between 0 to 96 hours. Otherwise, it refers to that the unit price for unlimited usage.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * Original unit price for the usage between 96 to 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceSecondStep = null;

        /**
         * Discounted unit price for the usage between 96 to 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscountSecondStep = null;

        /**
         * Original unit price for the usage after 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceThirdStep = null;

        /**
         * Discounted unit price for the usage after 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscountThirdStep = null;

        /**
         * Original 3-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OriginalPriceThreeYear = null;

        /**
         * Discounted 3-year upfront payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountPriceThreeYear = null;

        /**
         * Discount for 3-year upfront payment. For example, 20.0 indicates 80% off.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountThreeYear = null;

        /**
         * Original 5-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OriginalPriceFiveYear = null;

        /**
         * Discounted 5-year upfront payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountPriceFiveYear = null;

        /**
         * Discount for 5-year upfront payment. For example, 20.0 indicates 80% off.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountFiveYear = null;

        /**
         * Original 1-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OriginalPriceOneYear = null;

        /**
         * Discounted 1-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountPriceOneYear = null;

        /**
         * Discount for 1-year upfront payment. For example, 20.0 indicates 80% off.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountOneYear = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.ChargeUnit = 'ChargeUnit' in params ? params.ChargeUnit : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.UnitPriceSecondStep = 'UnitPriceSecondStep' in params ? params.UnitPriceSecondStep : null;
        this.UnitPriceDiscountSecondStep = 'UnitPriceDiscountSecondStep' in params ? params.UnitPriceDiscountSecondStep : null;
        this.UnitPriceThirdStep = 'UnitPriceThirdStep' in params ? params.UnitPriceThirdStep : null;
        this.UnitPriceDiscountThirdStep = 'UnitPriceDiscountThirdStep' in params ? params.UnitPriceDiscountThirdStep : null;
        this.OriginalPriceThreeYear = 'OriginalPriceThreeYear' in params ? params.OriginalPriceThreeYear : null;
        this.DiscountPriceThreeYear = 'DiscountPriceThreeYear' in params ? params.DiscountPriceThreeYear : null;
        this.DiscountThreeYear = 'DiscountThreeYear' in params ? params.DiscountThreeYear : null;
        this.OriginalPriceFiveYear = 'OriginalPriceFiveYear' in params ? params.OriginalPriceFiveYear : null;
        this.DiscountPriceFiveYear = 'DiscountPriceFiveYear' in params ? params.DiscountPriceFiveYear : null;
        this.DiscountFiveYear = 'DiscountFiveYear' in params ? params.DiscountFiveYear : null;
        this.OriginalPriceOneYear = 'OriginalPriceOneYear' in params ? params.OriginalPriceOneYear : null;
        this.DiscountPriceOneYear = 'DiscountPriceOneYear' in params ? params.DiscountPriceOneYear : null;
        this.DiscountOneYear = 'DiscountOneYear' in params ? params.DiscountOneYear : null;

    }
}

/**
 * Describes instance model quota.
 * @class
 */
class InstanceTypeQuotaItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Availability zone.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance model.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Instance billing plan. Valid values: <br><li>POSTPAID_BY_HOUR: pay after use. You are billed for your traffic by the hour.<br><li>`CDHPAID`: [`CDH`](https://intl.cloud.tencent.com/document/product/416?from_cn_redirect=1) billing plan. Applicable to `CDH` only, not the instances on the host.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * ENI type. For example, 25 represents an ENI of 25 GB.
         * @type {number || null}
         */
        this.NetworkCard = null;

        /**
         * Additional data.
Note: This field may return null, indicating that no valid value is found.
         * @type {Externals || null}
         */
        this.Externals = null;

        /**
         * Number of CPU cores of an instance model.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance memory capacity; unit: `GB`.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance model family.
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * Model name.
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * List of local disk specifications. If the parameter returns null, it means that local disks cannot be created.
         * @type {Array.<LocalDiskType> || null}
         */
        this.LocalDiskTypeList = null;

        /**
         * Whether an instance model is available. Valid values: <br><li>SELL: available <br><li>SOLD_OUT: sold out
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Price of an instance model.
         * @type {ItemPrice || null}
         */
        this.Price = null;

        /**
         * Details of out-of-stock items
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.SoldOutReason = null;

        /**
         * Private network bandwidth, in Gbps.
         * @type {number || null}
         */
        this.InstanceBandwidth = null;

        /**
         * The max packet sending and receiving capability (in 10k PPS).
         * @type {number || null}
         */
        this.InstancePps = null;

        /**
         * Number of local storage blocks.
         * @type {number || null}
         */
        this.StorageBlockAmount = null;

        /**
         * CPU type.
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * Number of GPUs of the instance.
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * Number of FPGAs of the instance.
         * @type {number || null}
         */
        this.Fpga = null;

        /**
         * Descriptive information of the instance.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 
         * @type {number || null}
         */
        this.GpuCount = null;

        /**
         * CPU clock rate of the instance
         * @type {string || null}
         */
        this.Frequency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.NetworkCard = 'NetworkCard' in params ? params.NetworkCard : null;

        if (params.Externals) {
            let obj = new Externals();
            obj.deserialize(params.Externals)
            this.Externals = obj;
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;

        if (params.LocalDiskTypeList) {
            this.LocalDiskTypeList = new Array();
            for (let z in params.LocalDiskTypeList) {
                let obj = new LocalDiskType();
                obj.deserialize(params.LocalDiskTypeList[z]);
                this.LocalDiskTypeList.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Price) {
            let obj = new ItemPrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.SoldOutReason = 'SoldOutReason' in params ? params.SoldOutReason : null;
        this.InstanceBandwidth = 'InstanceBandwidth' in params ? params.InstanceBandwidth : null;
        this.InstancePps = 'InstancePps' in params ? params.InstancePps : null;
        this.StorageBlockAmount = 'StorageBlockAmount' in params ? params.StorageBlockAmount : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.Fpga = 'Fpga' in params ? params.Fpga : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.GpuCount = 'GpuCount' in params ? params.GpuCount : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;

    }
}

/**
 * CreateTaskTemplate response structure.
 * @class
 */
class CreateTaskTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task template ID
         * @type {string || null}
         */
        this.TaskTemplateId = null;

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
        this.TaskTemplateId = 'TaskTemplateId' in params ? params.TaskTemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information on local HDD storage.
 * @class
 */
class StorageBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * Local HDD storage type. Value: LOCAL_PRO.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Minimum capacity of local HDD storage
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Maximum capacity of local HDD storage
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * DescribeJobs request structure.
 * @class
 */
class DescribeJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of job IDs. It cannot be specified together with `Filters`.
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * Filter
<li> `job-id` - String - Optional - Filter by the job ID.</li>
<li> `job-name` - String - Optional - Filter by the job name.</li>
<li> `job-state` - String - Optional - Filter by the job state.</li>
<li> `zone` - String - Optional - Filter by the availability zone.</li>
<li> `tag-key` - String - Optional - Tag key.</li>
<li> `tag-value` - String - Optional - Tag value.</li>
<li> `tag:tag-key` - String - Optional - Filter by the tag key-value pair. The tag-key should be replaced by a specified tag key.</li>
It cannot be specified together with `JobIds`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of returned items
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
        this.JobIds = 'JobIds' in params ? params.JobIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Task template information
 * @class
 */
class TaskTemplateView extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task template ID
         * @type {string || null}
         */
        this.TaskTemplateId = null;

        /**
         * Task template name
         * @type {string || null}
         */
        this.TaskTemplateName = null;

        /**
         * Task template description
         * @type {string || null}
         */
        this.TaskTemplateDescription = null;

        /**
         * Task template information
         * @type {Task || null}
         */
        this.TaskTemplateInfo = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Tag list bound to the task template.
Note: This field may return `null`, indicating that no valid value was found.
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
        this.TaskTemplateId = 'TaskTemplateId' in params ? params.TaskTemplateId : null;
        this.TaskTemplateName = 'TaskTemplateName' in params ? params.TaskTemplateName : null;
        this.TaskTemplateDescription = 'TaskTemplateDescription' in params ? params.TaskTemplateDescription : null;

        if (params.TaskTemplateInfo) {
            let obj = new Task();
            obj.deserialize(params.TaskTemplateInfo)
            this.TaskTemplateInfo = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
 * Instance model configuration.
 * @class
 */
class InstanceTypeOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Memory size in GB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance model category. Values: `ALL` (default), `GENERAL`, `GENERAL_2`, `GENERAL_3`, `COMPUTE`, `COMPUTE_2`, and `COMPUTE_3`. 
         * @type {Array.<string> || null}
         */
        this.InstanceCategories = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceCategories = 'InstanceCategories' in params ? params.InstanceCategories : null;

    }
}

/**
 * DeleteTaskTemplates response structure.
 * @class
 */
class DeleteTaskTemplatesResponse extends  AbstractModel {
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
 * DescribeCvmZoneInstanceConfigInfos request structure.
 * @class
 */
class DescribeCvmZoneInstanceConfigInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter.
<li> zone - String - Required: No - (Filter) Filter by availability zone.</li>
<li> instance-family - String - Required: No - (Filter) Filter by model family such as S1, I1, and M1.</li>
<li> instance-type - String - Required: No - (Filter) Filter by model.</li>
<li> instance-charge-type - String - Required: No - (Filter) Filter by instance billing method. ( POSTPAID_BY_HOUR: pay-as-you-go | SPOTPAID: bidding.)  </li>
         * @type {Array.<Filter> || null}
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * TerminateTaskInstance request structure.
 * @class
 */
class TerminateTaskInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Task instance index
         * @type {number || null}
         */
        this.TaskInstanceIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskInstanceIndex = 'TaskInstanceIndex' in params ? params.TaskInstanceIndex : null;

    }
}

/**
 * TerminateTaskInstance response structure.
 * @class
 */
class TerminateTaskInstanceResponse extends  AbstractModel {
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
 * RetryJobs request structure.
 * @class
 */
class RetryJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of job IDs.
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobIds = 'JobIds' in params ? params.JobIds : null;

    }
}

/**
 * Task instance view information
 * @class
 */
class TaskInstanceView extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task instance index
         * @type {number || null}
         */
        this.TaskInstanceIndex = null;

        /**
         * Task instance state
         * @type {string || null}
         */
        this.TaskInstanceState = null;

        /**
         * Exit code after application execution is completed
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ExitCode = null;

        /**
         * Task instance state reason. If the task instance fails, the reason for the failure will be logged.
         * @type {string || null}
         */
        this.StateReason = null;

        /**
         * The `InstanceId` of the compute node (e.g., CVM instance) where the task instance is running. This field is empty if the task instance is not running or has already been completed and will change when the task instance is retried.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ComputeNodeInstanceId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Start time
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.LaunchTime = null;

        /**
         * Running start time
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.RunningTime = null;

        /**
         * Task end time
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Redirection information
         * @type {RedirectInfo || null}
         */
        this.RedirectInfo = null;

        /**
         * Task instance state reason details. If the task instance fails, the reason for the failure will be logged
         * @type {string || null}
         */
        this.StateDetailedReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskInstanceIndex = 'TaskInstanceIndex' in params ? params.TaskInstanceIndex : null;
        this.TaskInstanceState = 'TaskInstanceState' in params ? params.TaskInstanceState : null;
        this.ExitCode = 'ExitCode' in params ? params.ExitCode : null;
        this.StateReason = 'StateReason' in params ? params.StateReason : null;
        this.ComputeNodeInstanceId = 'ComputeNodeInstanceId' in params ? params.ComputeNodeInstanceId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LaunchTime = 'LaunchTime' in params ? params.LaunchTime : null;
        this.RunningTime = 'RunningTime' in params ? params.RunningTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.RedirectInfo) {
            let obj = new RedirectInfo();
            obj.deserialize(params.RedirectInfo)
            this.RedirectInfo = obj;
        }
        this.StateDetailedReason = 'StateDetailedReason' in params ? params.StateDetailedReason : null;

    }
}

/**
 * DescribeAvailableCvmInstanceTypes response structure.
 * @class
 */
class DescribeAvailableCvmInstanceTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of model configurations
         * @type {Array.<InstanceTypeConfig> || null}
         */
        this.InstanceTypeConfigSet = null;

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

        if (params.InstanceTypeConfigSet) {
            this.InstanceTypeConfigSet = new Array();
            for (let z in params.InstanceTypeConfigSet) {
                let obj = new InstanceTypeConfig();
                obj.deserialize(params.InstanceTypeConfigSet[z]);
                this.InstanceTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTask response structure.
 * @class
 */
class DescribeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Task status
         * @type {string || null}
         */
        this.TaskState = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Total number of task instances
         * @type {number || null}
         */
        this.TaskInstanceTotalCount = null;

        /**
         * Task instance information
         * @type {Array.<TaskInstanceView> || null}
         */
        this.TaskInstanceSet = null;

        /**
         * Task instance statistical metrics
         * @type {TaskInstanceMetrics || null}
         */
        this.TaskInstanceMetrics = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskState = 'TaskState' in params ? params.TaskState : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskInstanceTotalCount = 'TaskInstanceTotalCount' in params ? params.TaskInstanceTotalCount : null;

        if (params.TaskInstanceSet) {
            this.TaskInstanceSet = new Array();
            for (let z in params.TaskInstanceSet) {
                let obj = new TaskInstanceView();
                obj.deserialize(params.TaskInstanceSet[z]);
                this.TaskInstanceSet.push(obj);
            }
        }

        if (params.TaskInstanceMetrics) {
            let obj = new TaskInstanceMetrics();
            obj.deserialize(params.TaskInstanceMetrics)
            this.TaskInstanceMetrics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of instance categories
 * @class
 */
class InstanceCategoryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type name
         * @type {string || null}
         */
        this.InstanceCategory = null;

        /**
         * List of instance families
         * @type {Array.<string> || null}
         */
        this.InstanceFamilySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceCategory = 'InstanceCategory' in params ? params.InstanceCategory : null;
        this.InstanceFamilySet = 'InstanceFamilySet' in params ? params.InstanceFamilySet : null;

    }
}

/**
 * Compute environment information
 * @class
 */
class ComputeEnvView extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Compute environment name
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * Location information
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Compute node statistical metrics
         * @type {ComputeNodeMetrics || null}
         */
        this.ComputeNodeMetrics = null;

        /**
         * Compute environment type
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * Number of desired compute nodes
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * Compute environment resource type. Values: `CVM`, `CPM` (Bare Metal)
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Next action
         * @type {string || null}
         */
        this.NextAction = null;

        /**
         * Number of compute nodes added to the compute environment
         * @type {number || null}
         */
        this.AttachedComputeNodeCount = null;

        /**
         * Tag list bound to the compute environment.
Note: This field may return `null`, indicating that no valid value was found.
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.EnvName = 'EnvName' in params ? params.EnvName : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.ComputeNodeMetrics) {
            let obj = new ComputeNodeMetrics();
            obj.deserialize(params.ComputeNodeMetrics)
            this.ComputeNodeMetrics = obj;
        }
        this.EnvType = 'EnvType' in params ? params.EnvType : null;
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.NextAction = 'NextAction' in params ? params.NextAction : null;
        this.AttachedComputeNodeCount = 'AttachedComputeNodeCount' in params ? params.AttachedComputeNodeCount : null;

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
 * DescribeComputeEnvs response structure.
 * @class
 */
class DescribeComputeEnvsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of compute environments
         * @type {Array.<ComputeEnvView> || null}
         */
        this.ComputeEnvSet = null;

        /**
         * Number of compute environments
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

        if (params.ComputeEnvSet) {
            this.ComputeEnvSet = new Array();
            for (let z in params.ComputeEnvSet) {
                let obj = new ComputeEnvView();
                obj.deserialize(params.ComputeEnvSet[z]);
                this.ComputeEnvSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTask request structure.
 * @class
 */
class DescribeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 100. Maximum value: 1,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter as detailed below:
<li> `task-instance-type` - String - Optional - Filter by the task instance state. (`SUBMITTED`, `PENDING`, `RUNNABLE`, `STARTING`, `RUNNING`, `SUCCEED`, `FAILED`, `FAILED_INTERRUPTED`).</li>
         * @type {Array.<Filter> || null}
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
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

    }
}

/**
 * AttachInstances request structure.
 * @class
 */
class AttachInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * List of instances that added to the compute environment
         * @type {Array.<Instance> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * DescribeComputeEnvs request structure.
 * @class
 */
class DescribeComputeEnvsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of compute environment IDs, which cannot be specified together with the `Filters` parameter.
         * @type {Array.<string> || null}
         */
        this.EnvIds = null;

        /**
         * Filters
<li> `zone` - String - Optional - Availability zone.</li>
<li> `env-id` - String - Optional - Compute environment ID.</li>
<li> `env-name` - String - Optional - Compute environment name.</li>
<li> `resource-type` - String - Optional - Compute resource type (`CVM` or `CPM`).</li>
<li> `tag-key` - String - Optional - Tag key.</li>
</li>`tag-value` - String - Optional - Tag value.</li>
<li> `tag:tag-key` - String - Optional - Tag key-value pair. Replace `tag-key` with the actual tag key.</li>
It cannot be specified together with `EnvIds`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of returned items
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
        this.EnvIds = 'EnvIds' in params ? params.EnvIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeCvmZoneInstanceConfigInfos response structure.
 * @class
 */
class DescribeCvmZoneInstanceConfigInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of model configurations in the availability zone.
         * @type {Array.<InstanceTypeQuotaItem> || null}
         */
        this.InstanceTypeQuotaSet = null;

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

        if (params.InstanceTypeQuotaSet) {
            this.InstanceTypeQuotaSet = new Array();
            for (let z in params.InstanceTypeQuotaSet) {
                let obj = new InstanceTypeQuotaItem();
                obj.deserialize(params.InstanceTypeQuotaSet[z]);
                this.InstanceTypeQuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Output mapping options
 * @class
 */
class OutputMappingOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * The mapped output workspace on the container side for the instance.
`BATCH_WORKSPACE` (Default): The workspace is the workspace defined for the usage of Batch Compute. Batch Compute ensures the isolation between jobs.
`GLOBAL_WORKSPACE`: The workspace is the instance OS space..
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Workspace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Workspace = 'Workspace' in params ? params.Workspace : null;

    }
}

/**
 * DescribeJobs response structure.
 * @class
 */
class DescribeJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of jobs
         * @type {Array.<JobView> || null}
         */
        this.JobSet = null;

        /**
         * Number of matched jobs
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

        if (params.JobSet) {
            this.JobSet = new Array();
            for (let z in params.JobSet) {
                let obj = new JobView();
                obj.deserialize(params.JobSet[z]);
                this.JobSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of the creation/termination activity of a compute node
 * @class
 */
class Activity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * Compute node ID
         * @type {string || null}
         */
        this.ComputeNodeId = null;

        /**
         * Activity type. Values: `CREATE_COMPUTE_NODE`, `TERMINATE_COMPUTE_NODE`
         * @type {string || null}
         */
        this.ComputeNodeActivityType = null;

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Cause of the activity
         * @type {string || null}
         */
        this.Cause = null;

        /**
         * Activity state
         * @type {string || null}
         */
        this.ActivityState = null;

        /**
         * Reason of going to this state
         * @type {string || null}
         */
        this.StateReason = null;

        /**
         * Activity start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Activity end time
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * CVM instance ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.ComputeNodeId = 'ComputeNodeId' in params ? params.ComputeNodeId : null;
        this.ComputeNodeActivityType = 'ComputeNodeActivityType' in params ? params.ComputeNodeActivityType : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Cause = 'Cause' in params ? params.Cause : null;
        this.ActivityState = 'ActivityState' in params ? params.ActivityState : null;
        this.StateReason = 'StateReason' in params ? params.StateReason : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Describes information related to the Cloud Monitor service.
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable [Cloud Monitor](https://intl.cloud.tencent.com/document/product/248?from_cn_redirect=1). Valid values: <br><li>TRUE: enable Cloud Monitor <br><li>FALSE: do not enable Cloud Monitor <br><br>Default value: TRUE.
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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * TerminateComputeNode response structure.
 * @class
 */
class TerminateComputeNodeResponse extends  AbstractModel {
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
 * Describes information on VPC, including subnets, IP addresses, etc.
 * @class
 */
class VirtualPrivateCloud extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID in the format of `vpc-xxx`. To obtain valid VPC IDs, you can log in to the [console](https://console.cloud.tencent.com/vpc/vpc?rid=1) or call the [DescribeVpcEx](https://intl.cloud.tencent.com/document/api/215/1372?from_cn_redirect=1) API and look for the `unVpcId` fields in the response. If you specify `DEFAULT` for both `VpcId` and `SubnetId` when creating an instance, the default VPC will be used.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID in the format `subnet-xxx`. To obtain valid subnet IDs, you can log in to the [console](https://console.cloud.tencent.com/vpc/subnet?rid=1) or call [DescribeSubnets](https://intl.cloud.tencent.com/document/api/215/15784?from_cn_redirect=1) and look for the `unSubnetId` fields in the response. If you specify `DEFAULT` for both `SubnetId` and `VpcId` when creating an instance, the default VPC will be used.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Whether it is used as a public gateway. A public gateway can only be used normally when an instance has a public IP address and is in a VPC. Valid values:<li>true: It is used as a public gateway.</li><li>false: It is not used as a public gateway.</li>Default value: false.
         * @type {boolean || null}
         */
        this.AsVpcGateway = null;

        /**
         * Array of VPC subnet IPs. You can use this parameter when creating instances or modifying VPC attributes of instances. Currently you can specify multiple IPs in one subnet only when creating multiple instances at the same time.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Number of IPv6 addresses randomly generated for the ENI.
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

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
        this.AsVpcGateway = 'AsVpcGateway' in params ? params.AsVpcGateway : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * DescribeAvailableCvmInstanceTypes request structure.
 * @class
 */
class DescribeAvailableCvmInstanceTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter.
<li> zone - String - Required: No - (Filter) Filter by availability zone.</li>
<li> instance-family - String - Required: No - (Filter) Filter by model family such as S1, I1, and M1.</li>
         * @type {Array.<Filter> || null}
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeInstanceCategories request structure.
 * @class
 */
class DescribeInstanceCategoriesRequest extends  AbstractModel {
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
 * ModifyComputeEnv request structure.
 * @class
 */
class ModifyComputeEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compute environment ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * Number of desired compute nodes
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * Compute environment name
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * Compute environment description
         * @type {string || null}
         */
        this.EnvDescription = null;

        /**
         * Compute environment attributes
         * @type {ComputeEnvData || null}
         */
        this.EnvData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;
        this.EnvName = 'EnvName' in params ? params.EnvName : null;
        this.EnvDescription = 'EnvDescription' in params ? params.EnvDescription : null;

        if (params.EnvData) {
            let obj = new ComputeEnvData();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }

    }
}

/**
 * Describes the accessibility of an instance in the public network, including its network billing method, maximum bandwidth, etc.
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network connection billing plan. Valid value: <br><li>TRAFFIC_POSTPAID_BY_HOUR: pay after use. You are billed for your traffic, by the hour.
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * The maximum outbound bandwidth of the public network, in Mbps. The default value is 0 Mbps. The upper limit of bandwidth varies for different models. For more information, see [Purchase Network Bandwidth](https://intl.cloud.tencent.com/document/product/213/12523?from_cn_redirect=1).
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Whether to allocate a public IP address. Valid values:<br><li>true: Allocate a public IP address.</li><li>false: Do not allocate a public IP address.</li><br>When the public network bandwidth is greater than 0 Mbps, you can choose whether to enable the public IP address. The public IP address is enabled by default. When the public network bandwidth is 0, allocating the public IP address is not supported. This parameter is only used as an input parameter in the RunInstances API.
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

        /**
         * Bandwidth package ID. To obatin the IDs, you can call [`DescribeBandwidthPackages`](https://intl.cloud.tencent.com/document/api/215/19209?from_cn_redirect=1) and look for the `BandwidthPackageId` fields in the response.
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.PublicIpAssigned = 'PublicIpAssigned' in params ? params.PublicIpAssigned : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

    }
}

/**
 * Job information
 * @class
 */
class JobView extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Job name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Job state
         * @type {string || null}
         */
        this.JobState = null;

        /**
         * Job priority
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Location information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * End time
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task statistical metrics
         * @type {TaskMetrics || null}
         */
        this.TaskMetrics = null;

        /**
         * List of tags bound with the job.
Note: This field may return `null`, indicating that no valid value was found.
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.JobState = 'JobState' in params ? params.JobState : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.TaskMetrics) {
            let obj = new TaskMetrics();
            obj.deserialize(params.TaskMetrics)
            this.TaskMetrics = obj;
        }

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
 * Environment variable
 * @class
 */
class EnvVar extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment variable name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Environment variable value
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

module.exports = {
    EventVar: EventVar,
    AnonymousComputeEnv: AnonymousComputeEnv,
    DeleteComputeEnvResponse: DeleteComputeEnvResponse,
    ComputeEnvData: ComputeEnvData,
    Authentication: Authentication,
    RetryJobsResponse: RetryJobsResponse,
    TerminateComputeNodeRequest: TerminateComputeNodeRequest,
    DescribeTaskLogsRequest: DescribeTaskLogsRequest,
    AgentRunningMode: AgentRunningMode,
    EnvData: EnvData,
    DescribeTaskTemplatesRequest: DescribeTaskTemplatesRequest,
    Notification: Notification,
    SystemDisk: SystemDisk,
    Task: Task,
    InstanceTypeConfig: InstanceTypeConfig,
    Externals: Externals,
    TerminateComputeNodesResponse: TerminateComputeNodesResponse,
    DescribeComputeEnvActivitiesResponse: DescribeComputeEnvActivitiesResponse,
    TaskInstanceMetrics: TaskInstanceMetrics,
    TaskInstanceLog: TaskInstanceLog,
    MountDataDisk: MountDataDisk,
    TaskView: TaskView,
    Tag: Tag,
    DescribeComputeEnvResponse: DescribeComputeEnvResponse,
    TerminateJobRequest: TerminateJobRequest,
    DetachInstancesResponse: DetachInstancesResponse,
    Application: Application,
    OutputMappingConfig: OutputMappingConfig,
    AttachInstancesResponse: AttachInstancesResponse,
    ComputeNodeMetrics: ComputeNodeMetrics,
    TaskMetrics: TaskMetrics,
    TerminateComputeNodesRequest: TerminateComputeNodesRequest,
    LocalDiskType: LocalDiskType,
    DescribeComputeEnvActivitiesRequest: DescribeComputeEnvActivitiesRequest,
    CreateTaskTemplateRequest: CreateTaskTemplateRequest,
    DeleteComputeEnvRequest: DeleteComputeEnvRequest,
    CreateComputeEnvRequest: CreateComputeEnvRequest,
    DescribeComputeEnvCreateInfoResponse: DescribeComputeEnvCreateInfoResponse,
    TerminateJobResponse: TerminateJobResponse,
    ComputeEnvCreateInfo: ComputeEnvCreateInfo,
    DescribeComputeEnvCreateInfosRequest: DescribeComputeEnvCreateInfosRequest,
    DescribeComputeEnvRequest: DescribeComputeEnvRequest,
    InstanceMarketOptionsRequest: InstanceMarketOptionsRequest,
    DescribeTaskTemplatesResponse: DescribeTaskTemplatesResponse,
    DeleteJobRequest: DeleteJobRequest,
    DescribeTaskLogsResponse: DescribeTaskLogsResponse,
    DeleteTaskTemplatesRequest: DeleteTaskTemplatesRequest,
    DescribeJobResponse: DescribeJobResponse,
    DescribeComputeEnvCreateInfoRequest: DescribeComputeEnvCreateInfoRequest,
    ModifyTaskTemplateRequest: ModifyTaskTemplateRequest,
    DataDisk: DataDisk,
    NamedComputeEnv: NamedComputeEnv,
    DeleteJobResponse: DeleteJobResponse,
    EventConfig: EventConfig,
    SpotMarketOptions: SpotMarketOptions,
    LoginSettings: LoginSettings,
    DetachInstancesRequest: DetachInstancesRequest,
    Instance: Instance,
    OutputMapping: OutputMapping,
    EnhancedService: EnhancedService,
    RunAutomationServiceEnabled: RunAutomationServiceEnabled,
    DescribeJobSubmitInfoResponse: DescribeJobSubmitInfoResponse,
    DescribeComputeEnvCreateInfosResponse: DescribeComputeEnvCreateInfosResponse,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DescribeJobRequest: DescribeJobRequest,
    RedirectInfo: RedirectInfo,
    DescribeInstanceCategoriesResponse: DescribeInstanceCategoriesResponse,
    ModifyTaskTemplateResponse: ModifyTaskTemplateResponse,
    InputMapping: InputMapping,
    RedirectLocalInfo: RedirectLocalInfo,
    DescribeJobSubmitInfoRequest: DescribeJobSubmitInfoRequest,
    Dependence: Dependence,
    Filter: Filter,
    CreateComputeEnvResponse: CreateComputeEnvResponse,
    Docker: Docker,
    ModifyComputeEnvResponse: ModifyComputeEnvResponse,
    Placement: Placement,
    ComputeNode: ComputeNode,
    ItemPrice: ItemPrice,
    InstanceTypeQuotaItem: InstanceTypeQuotaItem,
    CreateTaskTemplateResponse: CreateTaskTemplateResponse,
    StorageBlock: StorageBlock,
    DescribeJobsRequest: DescribeJobsRequest,
    TaskTemplateView: TaskTemplateView,
    InstanceTypeOptions: InstanceTypeOptions,
    DeleteTaskTemplatesResponse: DeleteTaskTemplatesResponse,
    DescribeCvmZoneInstanceConfigInfosRequest: DescribeCvmZoneInstanceConfigInfosRequest,
    TerminateTaskInstanceRequest: TerminateTaskInstanceRequest,
    TerminateTaskInstanceResponse: TerminateTaskInstanceResponse,
    RetryJobsRequest: RetryJobsRequest,
    TaskInstanceView: TaskInstanceView,
    DescribeAvailableCvmInstanceTypesResponse: DescribeAvailableCvmInstanceTypesResponse,
    DescribeTaskResponse: DescribeTaskResponse,
    InstanceCategoryItem: InstanceCategoryItem,
    ComputeEnvView: ComputeEnvView,
    DescribeComputeEnvsResponse: DescribeComputeEnvsResponse,
    DescribeTaskRequest: DescribeTaskRequest,
    AttachInstancesRequest: AttachInstancesRequest,
    DescribeComputeEnvsRequest: DescribeComputeEnvsRequest,
    DescribeCvmZoneInstanceConfigInfosResponse: DescribeCvmZoneInstanceConfigInfosResponse,
    OutputMappingOption: OutputMappingOption,
    DescribeJobsResponse: DescribeJobsResponse,
    Activity: Activity,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    TerminateComputeNodeResponse: TerminateComputeNodeResponse,
    VirtualPrivateCloud: VirtualPrivateCloud,
    DescribeAvailableCvmInstanceTypesRequest: DescribeAvailableCvmInstanceTypesRequest,
    DescribeInstanceCategoriesRequest: DescribeInstanceCategoriesRequest,
    ModifyComputeEnvRequest: ModifyComputeEnvRequest,
    InternetAccessible: InternetAccessible,
    JobView: JobView,
    EnvVar: EnvVar,

}
