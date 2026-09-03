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
 * Container information.
 * @class
 */
class Container extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * id
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * Image address.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Container status.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ContainerStatus || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.Image = 'Image' in params ? params.Image : null;

        if (params.Status) {
            let obj = new ContainerStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }

    }
}

/**
 * Online service description.
 * @class
 */
class Service extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service group ID.
         * @type {string || null}
         */
        this.ServiceGroupId = null;

        /**
         * Service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Service group name.
         * @type {string || null}
         */
        this.ServiceGroupName = null;

        /**
         * Service description.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceDescription = null;

        /**
         * Service details.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ServiceInfo || null}
         */
        this.ServiceInfo = null;

        /**
         * Cluster ID.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Region.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Namespace.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Billing type.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * Resource group ID for yearly/monthly subscription services. The value is null for pay-as-you-go services.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * Resource group name corresponding to the yearly/monthly subscription service.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceGroupName = null;

        /**
         * Tag of the service.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Name of the ingress where the service is located.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IngressName = null;

        /**
         * Creator.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedBy = null;

        /**
         * Creation time.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Root account.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Sub-account.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubUin = null;

        /**
         * app_id
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Operational status of the service.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessStatus = null;

        /**
         * Deprecated. See the corresponding field in ServiceInfo.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ServiceLimit || null}
         */
        this.ServiceLimit = null;

        /**
         * Deprecated. See the corresponding field in ServiceInfo.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ScheduledAction || null}
         */
        this.ScheduledAction = null;

        /**
         * Cause for service creation failure. The default value of this field is CREATE_SUCCEED upon successful creation.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateFailedReason = null;

        /**
         * Service status.CREATING: creating.CREATE_FAILED: creation failed.Normal: running.Stopped: stopped.Stopping: stopping.Abnormal: error.Pending: starting.Waiting: getting ready.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Billing information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillingInfo = null;

        /**
         * Model weight.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Creation source of the service.AUTO_ML: comes from one-click release of automatic learning.DEFAULT: other sources.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateSource = null;

        /**
         * Version number.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * The latest version number of services under a service group.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestVersion = null;

        /**
         * Resource group category. Valid values: NORMAL (hosting) and SW (half-hosting).Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceGroupSWType = null;

        /**
         * Archiving status of the service. Valid values: Waiting (pending archiving) and Archived (archived).Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ArchiveStatus = null;

        /**
         * Deployment type of the service. Valid values: STANDARD (standard deployment) and DIST (multi-machine distributed deployment). The default value is STANDARD.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeployType = null;

        /**
         * Number of instances per replica. This parameter is valid only when the deployment type is DIST. Default value: 1.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstancePerReplicas = null;

        /**
         * Source for monitoring queries.Enumeration value. May differ from CreateSource in certain scenarios. This field is designed to be compatible.
         * @type {string || null}
         */
        this.MonitorSource = null;

        /**
         * Sub-account name of the service creator.
         * @type {string || null}
         */
        this.SubUinName = null;

        /**
         * Scheduling policy of the service.
         * @type {SchedulingPolicy || null}
         */
        this.SchedulingPolicy = null;

        /**
         * External resource group information, indicating which resources are borrowed from resource groups.
         * @type {Array.<ResourceGroupInfo> || null}
         */
        this.ExternalResourceGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceGroupName = 'ServiceGroupName' in params ? params.ServiceGroupName : null;
        this.ServiceDescription = 'ServiceDescription' in params ? params.ServiceDescription : null;

        if (params.ServiceInfo) {
            let obj = new ServiceInfo();
            obj.deserialize(params.ServiceInfo)
            this.ServiceInfo = obj;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.IngressName = 'IngressName' in params ? params.IngressName : null;
        this.CreatedBy = 'CreatedBy' in params ? params.CreatedBy : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.BusinessStatus = 'BusinessStatus' in params ? params.BusinessStatus : null;

        if (params.ServiceLimit) {
            let obj = new ServiceLimit();
            obj.deserialize(params.ServiceLimit)
            this.ServiceLimit = obj;
        }

        if (params.ScheduledAction) {
            let obj = new ScheduledAction();
            obj.deserialize(params.ScheduledAction)
            this.ScheduledAction = obj;
        }
        this.CreateFailedReason = 'CreateFailedReason' in params ? params.CreateFailedReason : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BillingInfo = 'BillingInfo' in params ? params.BillingInfo : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.CreateSource = 'CreateSource' in params ? params.CreateSource : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.LatestVersion = 'LatestVersion' in params ? params.LatestVersion : null;
        this.ResourceGroupSWType = 'ResourceGroupSWType' in params ? params.ResourceGroupSWType : null;
        this.ArchiveStatus = 'ArchiveStatus' in params ? params.ArchiveStatus : null;
        this.DeployType = 'DeployType' in params ? params.DeployType : null;
        this.InstancePerReplicas = 'InstancePerReplicas' in params ? params.InstancePerReplicas : null;
        this.MonitorSource = 'MonitorSource' in params ? params.MonitorSource : null;
        this.SubUinName = 'SubUinName' in params ? params.SubUinName : null;

        if (params.SchedulingPolicy) {
            let obj = new SchedulingPolicy();
            obj.deserialize(params.SchedulingPolicy)
            this.SchedulingPolicy = obj;
        }

        if (params.ExternalResourceGroups) {
            this.ExternalResourceGroups = new Array();
            for (let z in params.ExternalResourceGroups) {
                let obj = new ResourceGroupInfo();
                obj.deserialize(params.ExternalResourceGroups[z]);
                this.ExternalResourceGroups.push(obj);
            }
        }

    }
}

/**
 * HTTP GET action.
 * @class
 */
class HTTPGetAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP path.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Called port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * Rolling update policy.
 * @class
 */
class RollingUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum unavailability for rolling updates.
         * @type {NumOrPercent || null}
         */
        this.MaxUnavailable = null;

        /**
         * Maximum number of new instances during rolling updates. 
         * @type {NumOrPercent || null}
         */
        this.MaxSurge = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MaxUnavailable) {
            let obj = new NumOrPercent();
            obj.deserialize(params.MaxUnavailable)
            this.MaxUnavailable = obj;
        }

        if (params.MaxSurge) {
            let obj = new NumOrPercent();
            obj.deserialize(params.MaxSurge)
            this.MaxSurge = obj;
        }

    }
}

/**
 * Service shared Elastic Network Interface (ENI) settings.
 * @class
 */
class ServiceEIP extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable access from the TI-ONE private network to external resources.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.EnableEIP = null;

        /**
         * User VPC ID.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * User subnet ID.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableEIP = 'EnableEIP' in params ? params.EnableEIP : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * Summarized information structure for the serviced resource group while an online service is provided.
 * @class
 */
class ResourceGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource group ID.
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * Resource group name.
         * @type {string || null}
         */
        this.ResourceGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;

    }
}

/**
 * Probe check action for execution commands.
 * @class
 */
class ExecAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution command list.
         * @type {Array.<string> || null}
         */
        this.Command = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Command = 'Command' in params ? params.Command : null;

    }
}

/**
 * HPA description.
 * @class
 */
class HorizontalPodAutoscaler extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum number of instances.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * Maximum number of instances.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * Supported."gpu-util": GPU utilization; value range: 10-100. "cpu-util": CPU utilization; value range: 10-100. "memory-util": memory utilization; value range: 10-100. "service-qps": the QPS value of single instances; value range: 1-5000."concurrency-util": the number of concurrent requests of single instances. Value range: 1-100000.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Option> || null}
         */
        this.HpaMetrics = null;

        /**
         * Scale-out cooldown period, in seconds.
         * @type {number || null}
         */
        this.ScaleUpStabilizationWindowSeconds = null;

        /**
         * Scale-in cooldown period, in seconds.
         * @type {number || null}
         */
        this.ScaleDownStabilizationWindowSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinReplicas = 'MinReplicas' in params ? params.MinReplicas : null;
        this.MaxReplicas = 'MaxReplicas' in params ? params.MaxReplicas : null;

        if (params.HpaMetrics) {
            this.HpaMetrics = new Array();
            for (let z in params.HpaMetrics) {
                let obj = new Option();
                obj.deserialize(params.HpaMetrics[z]);
                this.HpaMetrics.push(obj);
            }
        }
        this.ScaleUpStabilizationWindowSeconds = 'ScaleUpStabilizationWindowSeconds' in params ? params.ScaleUpStabilizationWindowSeconds : null;
        this.ScaleDownStabilizationWindowSeconds = 'ScaleDownStabilizationWindowSeconds' in params ? params.ScaleDownStabilizationWindowSeconds : null;

    }
}

/**
 * 
 * @class
 */
class ResourceSupplyAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.SupplyType = null;

        /**
         * 
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SupplyType = 'SupplyType' in params ? params.SupplyType : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * AuthToken basic information.
 * @class
 */
class AuthTokenBase extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token value.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Token alias.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Token description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Token creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Token status.
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
        this.Value = 'Value' in params ? params.Value : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Resource configuration.
 * @class
 */
class ResourceConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role. For example, PS, WORKER, DRIVER, and EXECUTOR.
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Number of CPU cores, which is required to be configured when resource groups are used. Unit: 1/1000, where 1000 represents 1 core.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size, in MB. This parameter needs to be configured when resource groups are used.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * GPU card type, which is required to be configured when resource groups are used.
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * Number of GPU cards, which is required to be configured when resource groups are used. Unit: 1/100, where 100 represents 1 card.
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * CVM instance specification ID.
CVM instance specification (for postpaid billing). Valid values:
TI.S.LARGE.POST: 4C8G 
TI.S.2XLARGE16.POST:  8C16G 
TI.S.2XLARGE32.POST:  8C32G 
TI.S.4XLARGE32.POST:  16C32G
TI.S.4XLARGE64.POST:  16C64G
TI.S.6XLARGE48.POST:  24C48G
TI.S.6XLARGE96.POST:  24C96G
TI.S.8XLARGE64.POST:  32C64G
TI.S.8XLARGE128.POST : 32C128G
TI.GN10.2XLARGE40.POST: 8C40G V100*1 
TI.GN10.5XLARGE80.POST:  18C80G V100*2 
TI.GN10.10XLARGE160.POST :  32C160G V100*4
TI.GN10.20XLARGE320.POST :  72C320G V100*8
TI.GN7.8XLARGE128.POST: 32C128G T4*1 
TI.GN7.10XLARGE160.POST: 40C160G T4*2 
TI.GN7.20XLARGE320.POST: 80C32
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Number of compute nodes.
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * CVM instance specification name.
CVM instance specification (for postpaid billing). Valid values:
4C8G 
8C16G 
8C32G 
16C32G
6C64G
24C48G
24C96G
32C64G
32C128G
8C40G V100*1 
8C80G V100*2 
32C160G V100*4
72C320G V100*8
32C128G T4*1 
40C160G T4*2 
80C32
         * @type {string || null}
         */
        this.InstanceTypeAlias = null;

        /**
         * RDMA configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RDMAConfig || null}
         */
        this.RDMAConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.InstanceTypeAlias = 'InstanceTypeAlias' in params ? params.InstanceTypeAlias : null;

        if (params.RDMAConfig) {
            let obj = new RDMAConfig();
            obj.deserialize(params.RDMAConfig)
            this.RDMAConfig = obj;
        }

    }
}

/**
 * Public cloud data source structure.
 * @class
 */
class PublicDataSourceFS extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data source ID.
         * @type {string || null}
         */
        this.DataSourceId = null;

        /**
         * Relative subpath to the data source.
         * @type {string || null}
         */
        this.SubPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataSourceId = 'DataSourceId' in params ? params.DataSourceId : null;
        this.SubPath = 'SubPath' in params ? params.SubPath : null;

    }
}

/**
 * Exposed port information.
 * @class
 */
class ExposePortConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 
         * @type {string || null}
         */
        this.ClbId = null;

        /**
         * 
         * @type {string || null}
         */
        this.ClbHost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ClbId = 'ClbId' in params ? params.ClbId : null;
        this.ClbHost = 'ClbHost' in params ? params.ClbHost : null;

    }
}

/**
 * AuthToken data of an online service.
 * @class
 */
class AuthToken extends  AbstractModel {
    constructor(){
        super();

        /**
         * AuthToken basic information.
         * @type {AuthTokenBase || null}
         */
        this.Base = null;

        /**
         * AuthToken throttling array.
         * @type {Array.<AuthTokenLimit> || null}
         */
        this.Limits = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Base) {
            let obj = new AuthTokenBase();
            obj.deserialize(params.Base)
            this.Base = obj;
        }

        if (params.Limits) {
            this.Limits = new Array();
            for (let z in params.Limits) {
                let obj = new AuthTokenLimit();
                obj.deserialize(params.Limits[z]);
                this.Limits.push(obj);
            }
        }

    }
}

/**
 * 
 * @class
 */
class TrainToolConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {boolean || null}
         */
        this.EnableHangMonitor = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.HangMonitorNodes = null;

        /**
         * 
         * @type {number || null}
         */
        this.LogHangTimeoutInMinute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableHangMonitor = 'EnableHangMonitor' in params ? params.EnableHangMonitor : null;
        this.HangMonitorNodes = 'HangMonitorNodes' in params ? params.HangMonitorNodes : null;
        this.LogHangTimeoutInMinute = 'LogHangTimeoutInMinute' in params ? params.LogHangTimeoutInMinute : null;

    }
}

/**
 * Health probe.
 * @class
 */
class HealthProbe extends  AbstractModel {
    constructor(){
        super();

        /**
         * Liveness probe.
         * @type {Probe || null}
         */
        this.LivenessProbe = null;

        /**
         * Readiness probe.
         * @type {Probe || null}
         */
        this.ReadinessProbe = null;

        /**
         * Startup probe.
         * @type {Probe || null}
         */
        this.StartupProbe = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LivenessProbe) {
            let obj = new Probe();
            obj.deserialize(params.LivenessProbe)
            this.LivenessProbe = obj;
        }

        if (params.ReadinessProbe) {
            let obj = new Probe();
            obj.deserialize(params.ReadinessProbe)
            this.ReadinessProbe = obj;
        }

        if (params.StartupProbe) {
            let obj = new Probe();
            obj.deserialize(params.StartupProbe)
            this.StartupProbe = obj;
        }

    }
}

/**
 * Encoded startup command information.
 * @class
 */
class EncodedStartCmdInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Startup command of the task, which is input in base64 format. Note that the complete input of {"StartCmd":"","PsStartCmd":"","WorkerStartCmd":""} is required for conversion.
         * @type {string || null}
         */
        this.StartCmdInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartCmdInfo = 'StartCmdInfo' in params ? params.StartCmdInfo : null;

    }
}

/**
 * Information about Pod calls involving ENIs across tenants.
 * @class
 */
class CrossTenantENIInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod IP address.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrimaryIP = null;

        /**
         * Pod port.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrimaryIP = 'PrimaryIP' in params ? params.PrimaryIP : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * Notebook SSH port configuration.
 * @class
 */
class SSHConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable SSH.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Public key information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * Port number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Login command.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoginCommand = null;

        /**
         * Whether to change the login address.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsAddressChanged = null;

        /**
         * Pod access information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PodSSHInfo || null}
         */
        this.PodSSHInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.LoginCommand = 'LoginCommand' in params ? params.LoginCommand : null;
        this.IsAddressChanged = 'IsAddressChanged' in params ? params.IsAddressChanged : null;

        if (params.PodSSHInfo) {
            let obj = new PodSSHInfo();
            obj.deserialize(params.PodSSHInfo)
            this.PodSSHInfo = obj;
        }

    }
}

/**
 * 
 * @class
 */
class ExposeNetworkConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {SSHConfig || null}
         */
        this.SSHConfig = null;

        /**
         * 
         * @type {ExposePortConfig || null}
         */
        this.ExposePortConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SSHConfig) {
            let obj = new SSHConfig();
            obj.deserialize(params.SSHConfig)
            this.SSHConfig = obj;
        }

        if (params.ExposePortConfig) {
            let obj = new ExposePortConfig();
            obj.deserialize(params.ExposePortConfig)
            this.ExposePortConfig = obj;
        }

    }
}

/**
 * Service scheduling policy configurations.
 * @class
 */
class SchedulingPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable cross-resource-group scheduling.
         * @type {boolean || null}
         */
        this.CrossResourceGroupScheduling = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CrossResourceGroupScheduling = 'CrossResourceGroupScheduling' in params ? params.CrossResourceGroupScheduling : null;

    }
}

/**
 * Check action of a TCP Socket health probe.
 * @class
 */
class TCPSocketAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Called port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * Local disk information.
 * @class
 */
class LocalDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Local path.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LocalPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LocalPath = 'LocalPath' in params ? params.LocalPath : null;

    }
}

/**
 * GooseFSx configurations.
 * @class
 */
class GooseFSx extends  AbstractModel {
    constructor(){
        super();

        /**
         * GooseFSx instance ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Path to mount the GooseFSx instance.
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * Resource information description.
 * @class
 */
class ResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Processor resource, in 1/1000 cores.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory resource, in MB.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Number of GPU card resources, in 0.01 units of GpuType.Gpu=100 indicates the use of "1" GPU card. However, this "1" card could refer to a virtualized 1/4 card or a full physical card, depending on the instance type.Example 1: If the instance type includes 1 virtual GPU card, and each virtual GPU card corresponds to 1/4 of a physical T4 card, then GpuType=T4, Gpu=100, and RealGpu=25.Example 2: If the instance type includes 4 full GPU cards, and each card corresponds to 1 physical T4 card, then GpuType=T4, Gpu=400, and RealGpu=400.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * GPU card model. Valid values: T4 and V100. It only displays the current GPU card model. If multiple types of cards are used simultaneously, see the value of RealGpuDetailSet.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * It is not required for creation or update operations. This field is used for display only.The actual GPU card resources for postpaid instances using fractional GPU cards. This value represents the total number of actual physical GPU cards consumed.RealGpu=100 indicates the consumption of 1 GPU card. Depending on the actual instance type, this may represent: 4 instances each using a 1/4 card, 2 instances each using a 1/2 card, or 1 instance using a full card.
         * @type {number || null}
         */
        this.RealGpu = null;

        /**
         * It is not required for creation or update operations. This field is used for display only. It involves detailed GPU usage information.
         * @type {Array.<GpuDetail> || null}
         */
        this.RealGpuDetailSet = null;

        /**
         * Indicates whether to enable RDMA.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.EnableRDMA = null;

        /**
         * 
         * @type {number || null}
         */
        this.RootDisk = null;

        /**
         * 
         * @type {number || null}
         */
        this.DataDisk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.RealGpu = 'RealGpu' in params ? params.RealGpu : null;

        if (params.RealGpuDetailSet) {
            this.RealGpuDetailSet = new Array();
            for (let z in params.RealGpuDetailSet) {
                let obj = new GpuDetail();
                obj.deserialize(params.RealGpuDetailSet[z]);
                this.RealGpuDetailSet.push(obj);
            }
        }
        this.EnableRDMA = 'EnableRDMA' in params ? params.EnableRDMA : null;
        this.RootDisk = 'RootDisk' in params ? params.RootDisk : null;
        this.DataDisk = 'DataDisk' in params ? params.DataDisk : null;

    }
}

/**
 * External mounting information.
 * @class
 */
class VolumeMount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud File Storage (CFS) configuration information.
         * @type {CFSConfig || null}
         */
        this.CFSConfig = null;

        /**
         * Mounting source type. Valid values: CFS and COS. The default value is CFS.
         * @type {string || null}
         */
        this.VolumeSourceType = null;

        /**
         * Mounting path in the custom container.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MountPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CFSConfig) {
            let obj = new CFSConfig();
            obj.deserialize(params.CFSConfig)
            this.CFSConfig = obj;
        }
        this.VolumeSourceType = 'VolumeSourceType' in params ? params.VolumeSourceType : null;
        this.MountPath = 'MountPath' in params ? params.MountPath : null;

    }
}

/**
 * Data set structure.
 * @class
 */
class DataSetConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data set ID.
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Scheduled transactions and actions.
 * @class
 */
class ScheduledAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to stop the service on schedule. Valid values: true and false. If the value is true, ScheduleStopTime is required. If the value is false, ScheduleStopTime does not take effect.
         * @type {boolean || null}
         */
        this.ScheduleStop = null;

        /**
         * Time to execute the scheduled stop. Format: "2022-01-26T19:46:22+08:00".
         * @type {string || null}
         */
        this.ScheduleStopTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduleStop = 'ScheduleStop' in params ? params.ScheduleStop : null;
        this.ScheduleStopTime = 'ScheduleStopTime' in params ? params.ScheduleStopTime : null;

    }
}

/**
 * DescribeModelServiceGroups response structure.
 * @class
 */
class DescribeModelServiceGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of inference service groups.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Service group information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ServiceGroup> || null}
         */
        this.ServiceGroups = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ServiceGroups) {
            this.ServiceGroups = new Array();
            for (let z in params.ServiceGroups) {
                let obj = new ServiceGroup();
                obj.deserialize(params.ServiceGroups[z]);
                this.ServiceGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RDMA configuration.
 * @class
 */
class RDMAConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable RDMA.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * Inference code information.
 * @class
 */
class InferCodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of Cloud Object Storage (COS) where the inference code is located.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CosPathInfo || null}
         */
        this.CosPathInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CosPathInfo) {
            let obj = new CosPathInfo();
            obj.deserialize(params.CosPathInfo)
            this.CosPathInfo = obj;
        }

    }
}

/**
 * COS path information.
 * @class
 */
class CosPathInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bucket.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Region.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Path list. Only one path is supported.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Paths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Paths = 'Paths' in params ? params.Paths : null;

    }
}

/**
 * Information of the inference service in the cluster.
 * @class
 */
class ServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Expected number of running Pods. The instance is 0 when the stop status is reached.Corresponding relationships under different billing and scaling modes are as follows.PREPAID and POSTPAID_BY_HOUR:Corresponding number of instances in the manual scaling mode.Corresponding number of instances based on the default time-based policy in the auto-scaling mode.HYBRID_PAID:
Corresponding number of instances for postpaid instances in the manual scaling mode.Corresponding number of instances under the default time-based policy for postpaid instances in the auto-scaling mode.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * Image information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * Environment variables.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<EnvVar> || null}
         */
        this.Env = null;

        /**
         * Resource information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ResourceInfo || null}
         */
        this.Resources = null;

        /**
         * Type specifications corresponding to the postpaid instance.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Model information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ModelInfo || null}
         */
        this.ModelInfo = null;

        /**
         * Whether to enable logs.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.LogEnable = null;

        /**
         * Log configurations.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LogConfig || null}
         */
        this.LogConfig = null;

        /**
         * Whether to enable authentication.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AuthorizationEnable = null;

        /**
         * HPA configurations.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {HorizontalPodAutoscaler || null}
         */
        this.HorizontalPodAutoscaler = null;

        /**
         * Description of the service status.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {WorkloadStatus || null}
         */
        this.Status = null;

        /**
         * Weight.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Total resources.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ResourceInfo || null}
         */
        this.ResourceTotal = null;

        /**
         * Number of historical instances.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OldReplicas = null;

        /**
         * This parameter is valid when the billing mode is HYBRID_PAID, and is used to identify the number of prepaid instances in the hybrid billing mode. The default value is 1 if this parameter is left unspecified.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HybridBillingPrepaidReplicas = null;

        /**
         * Number of instances during the historical HYBRID_PAID period. The user restores services.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OldHybridBillingPrepaidReplicas = null;

        /**
         * Whether to enable hot update for the model. By default, hot update is disabled.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ModelHotUpdateEnable = null;

        /**
         * Service specification alias.
         * @type {string || null}
         */
        this.InstanceAlias = null;

        /**
         * Instance quantity adjusting mode. Defaults to manual.Supported valid values: AUTO (automatic), MANUAL (manual).Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ScaleMode = null;

        /**
         * Scheduled scaling task.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CronScaleJob> || null}
         */
        this.CronScaleJobs = null;

        /**
         * Scheduled scaling policy.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ScaleStrategy = null;

        /**
         * Configurations of the scheduled stop.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ScheduledAction || null}
         */
        this.ScheduledAction = null;

        /**
         * Instance list.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PodList = null;

        /**
         * Pod list information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Pod || null}
         */
        this.Pods = null;

        /**
         * Pod list information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Pod> || null}
         */
        this.PodInfos = null;

        /**
         * Configurations related to speed limit and throttling of services.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ServiceLimit || null}
         */
        this.ServiceLimit = null;

        /**
         * Whether to enable model acceleration, which is only valid for models in the StableDiffusion (dynamic acceleration) format.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ModelTurboEnable = null;

        /**
         * Mounting.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VolumeMount || null}
         */
        this.VolumeMount = null;

        /**
         * Inference code information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InferCodeInfo || null}
         */
        this.InferCodeInfo = null;

        /**
         * Service startup command.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Settings of enabling the TI-ONE private network to access external resources.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ServiceEIP || null}
         */
        this.ServiceEIP = null;

        /**
         * Service port, with the default value of 8501.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ServicePort = null;

        /**
         * Graceful exit time limit of the service, in seconds. Default value: 30. Minimum value: 1.
         * @type {number || null}
         */
        this.TerminationGracePeriodSeconds = null;

        /**
         * Command executed before the service instance stops. The instance ends after the command execution is completed or after the execution time exceeds the graceful exit time limit.
         * @type {Array.<string> || null}
         */
        this.PreStopCommand = null;

        /**
         * Whether to enable the gRPC port.
         * @type {boolean || null}
         */
        this.GrpcEnable = null;

        /**
         * Health probe.
         * @type {HealthProbe || null}
         */
        this.HealthProbe = null;

        /**
         * Rolling update configurations.
         * @type {RollingUpdate || null}
         */
        this.RollingUpdate = null;

        /**
         * Number of instances per replica. This parameter is valid only when the deployment type is DIST or ROLE. Default value: 1.
         * @type {number || null}
         */
        this.InstancePerReplicas = null;

        /**
         * Batch data disk mounting configurations.
         * @type {Array.<VolumeMount> || null}
         */
        this.VolumeMounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Replicas = 'Replicas' in params ? params.Replicas : null;

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.Env) {
            this.Env = new Array();
            for (let z in params.Env) {
                let obj = new EnvVar();
                obj.deserialize(params.Env[z]);
                this.Env.push(obj);
            }
        }

        if (params.Resources) {
            let obj = new ResourceInfo();
            obj.deserialize(params.Resources)
            this.Resources = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.ModelInfo) {
            let obj = new ModelInfo();
            obj.deserialize(params.ModelInfo)
            this.ModelInfo = obj;
        }
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;

        if (params.LogConfig) {
            let obj = new LogConfig();
            obj.deserialize(params.LogConfig)
            this.LogConfig = obj;
        }
        this.AuthorizationEnable = 'AuthorizationEnable' in params ? params.AuthorizationEnable : null;

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscaler();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }

        if (params.Status) {
            let obj = new WorkloadStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }
        this.Weight = 'Weight' in params ? params.Weight : null;

        if (params.ResourceTotal) {
            let obj = new ResourceInfo();
            obj.deserialize(params.ResourceTotal)
            this.ResourceTotal = obj;
        }
        this.OldReplicas = 'OldReplicas' in params ? params.OldReplicas : null;
        this.HybridBillingPrepaidReplicas = 'HybridBillingPrepaidReplicas' in params ? params.HybridBillingPrepaidReplicas : null;
        this.OldHybridBillingPrepaidReplicas = 'OldHybridBillingPrepaidReplicas' in params ? params.OldHybridBillingPrepaidReplicas : null;
        this.ModelHotUpdateEnable = 'ModelHotUpdateEnable' in params ? params.ModelHotUpdateEnable : null;
        this.InstanceAlias = 'InstanceAlias' in params ? params.InstanceAlias : null;
        this.ScaleMode = 'ScaleMode' in params ? params.ScaleMode : null;

        if (params.CronScaleJobs) {
            this.CronScaleJobs = new Array();
            for (let z in params.CronScaleJobs) {
                let obj = new CronScaleJob();
                obj.deserialize(params.CronScaleJobs[z]);
                this.CronScaleJobs.push(obj);
            }
        }
        this.ScaleStrategy = 'ScaleStrategy' in params ? params.ScaleStrategy : null;

        if (params.ScheduledAction) {
            let obj = new ScheduledAction();
            obj.deserialize(params.ScheduledAction)
            this.ScheduledAction = obj;
        }
        this.PodList = 'PodList' in params ? params.PodList : null;

        if (params.Pods) {
            let obj = new Pod();
            obj.deserialize(params.Pods)
            this.Pods = obj;
        }

        if (params.PodInfos) {
            this.PodInfos = new Array();
            for (let z in params.PodInfos) {
                let obj = new Pod();
                obj.deserialize(params.PodInfos[z]);
                this.PodInfos.push(obj);
            }
        }

        if (params.ServiceLimit) {
            let obj = new ServiceLimit();
            obj.deserialize(params.ServiceLimit)
            this.ServiceLimit = obj;
        }
        this.ModelTurboEnable = 'ModelTurboEnable' in params ? params.ModelTurboEnable : null;

        if (params.VolumeMount) {
            let obj = new VolumeMount();
            obj.deserialize(params.VolumeMount)
            this.VolumeMount = obj;
        }

        if (params.InferCodeInfo) {
            let obj = new InferCodeInfo();
            obj.deserialize(params.InferCodeInfo)
            this.InferCodeInfo = obj;
        }
        this.Command = 'Command' in params ? params.Command : null;

        if (params.ServiceEIP) {
            let obj = new ServiceEIP();
            obj.deserialize(params.ServiceEIP)
            this.ServiceEIP = obj;
        }
        this.ServicePort = 'ServicePort' in params ? params.ServicePort : null;
        this.TerminationGracePeriodSeconds = 'TerminationGracePeriodSeconds' in params ? params.TerminationGracePeriodSeconds : null;
        this.PreStopCommand = 'PreStopCommand' in params ? params.PreStopCommand : null;
        this.GrpcEnable = 'GrpcEnable' in params ? params.GrpcEnable : null;

        if (params.HealthProbe) {
            let obj = new HealthProbe();
            obj.deserialize(params.HealthProbe)
            this.HealthProbe = obj;
        }

        if (params.RollingUpdate) {
            let obj = new RollingUpdate();
            obj.deserialize(params.RollingUpdate)
            this.RollingUpdate = obj;
        }
        this.InstancePerReplicas = 'InstancePerReplicas' in params ? params.InstancePerReplicas : null;

        if (params.VolumeMounts) {
            this.VolumeMounts = new Array();
            for (let z in params.VolumeMounts) {
                let obj = new VolumeMount();
                obj.deserialize(params.VolumeMounts[z]);
                this.VolumeMounts.push(obj);
            }
        }

    }
}

/**
 * Data configuration.
 * @class
 */
class DataConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mapping path.
         * @type {string || null}
         */
        this.MappingPath = null;

        /**
         * Storage purpose.
Valid values: BUILTIN_CODE, BUILTIN_DATA, BUILTIN_MODEL, USER_DATA, USER_CODE, USER_MODEL, OUTPUT, and OTHER.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataSourceUsage = null;

        /**
         * DATASET, COS, CFS, CFSTurbo, GooseFSx, HDFS, and WEDATA_HDFS
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataSourceType = null;

        /**
         * Data from the data set.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DataSetConfig || null}
         */
        this.DataSetSource = null;

        /**
         * Data from COS.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CosPathInfo || null}
         */
        this.COSSource = null;

        /**
         * Data from CFS.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CFSConfig || null}
         */
        this.CFSSource = null;

        /**
         * Data from HDFS.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {HDFSConfig || null}
         */
        this.HDFSSource = null;

        /**
         * GooseFS data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {GooseFS || null}
         */
        this.GooseFSSource = null;

        /**
         * TurboFS data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CFSTurbo || null}
         */
        this.CFSTurboSource = null;

        /**
         * Information from local disks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LocalDisk || null}
         */
        this.LocalDiskSource = null;

        /**
         * CBS configuration information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CBSConfig || null}
         */
        this.CBSSource = null;

        /**
         * Host path information.
         * @type {HostPath || null}
         */
        this.HostPathSource = null;

        /**
         * 
         * @type {PublicDataSourceFS || null}
         */
        this.PublicDataSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MappingPath = 'MappingPath' in params ? params.MappingPath : null;
        this.DataSourceUsage = 'DataSourceUsage' in params ? params.DataSourceUsage : null;
        this.DataSourceType = 'DataSourceType' in params ? params.DataSourceType : null;

        if (params.DataSetSource) {
            let obj = new DataSetConfig();
            obj.deserialize(params.DataSetSource)
            this.DataSetSource = obj;
        }

        if (params.COSSource) {
            let obj = new CosPathInfo();
            obj.deserialize(params.COSSource)
            this.COSSource = obj;
        }

        if (params.CFSSource) {
            let obj = new CFSConfig();
            obj.deserialize(params.CFSSource)
            this.CFSSource = obj;
        }

        if (params.HDFSSource) {
            let obj = new HDFSConfig();
            obj.deserialize(params.HDFSSource)
            this.HDFSSource = obj;
        }

        if (params.GooseFSSource) {
            let obj = new GooseFS();
            obj.deserialize(params.GooseFSSource)
            this.GooseFSSource = obj;
        }

        if (params.CFSTurboSource) {
            let obj = new CFSTurbo();
            obj.deserialize(params.CFSTurboSource)
            this.CFSTurboSource = obj;
        }

        if (params.LocalDiskSource) {
            let obj = new LocalDisk();
            obj.deserialize(params.LocalDiskSource)
            this.LocalDiskSource = obj;
        }

        if (params.CBSSource) {
            let obj = new CBSConfig();
            obj.deserialize(params.CBSSource)
            this.CBSSource = obj;
        }

        if (params.HostPathSource) {
            let obj = new HostPath();
            obj.deserialize(params.HostPathSource)
            this.HostPathSource = obj;
        }

        if (params.PublicDataSource) {
            let obj = new PublicDataSourceFS();
            obj.deserialize(params.PublicDataSource)
            this.PublicDataSource = obj;
        }

    }
}

/**
 * GPU details.
 * @class
 */
class GpuDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * GPU card type. Enumeration values: V100, A100, T4.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * GPU card quantity, in 1/100 cards. For example, 100 represents 1 card.Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Parameters for configuring CFSTurbo.
 * @class
 */
class CFSTurbo extends  AbstractModel {
    constructor(){
        super();

        /**
         * CFSTurbo instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * CFSTurbo path.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * GooseFS configuration parameters.
 * @class
 */
class GooseFS extends  AbstractModel {
    constructor(){
        super();

        /**
         * GooseFS instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * GooseFS type, including GooseFS and GooseFSx.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Path to mount the GooseFSx instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * GooseFS namespace.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NameSpace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.NameSpace = 'NameSpace' in params ? params.NameSpace : null;

    }
}

/**
 * Scheduled scaling task.
 * @class
 */
class CronScaleJob extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cron expression, which identifies the task execution time, and is accurate to minutes.
         * @type {string || null}
         */
        this.Schedule = null;

        /**
         * Scheduled task name.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Number of target instances.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TargetReplicas = null;

        /**
         * Minimum target.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * Maximum target.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * Exception periods, defined by Cron expressions, during which tasks are not executed. Up to 3 Cron expressions are supported.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ExcludeDates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Schedule = 'Schedule' in params ? params.Schedule : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TargetReplicas = 'TargetReplicas' in params ? params.TargetReplicas : null;
        this.MinReplicas = 'MinReplicas' in params ? params.MinReplicas : null;
        this.MaxReplicas = 'MaxReplicas' in params ? params.MaxReplicas : null;
        this.ExcludeDates = 'ExcludeDates' in params ? params.ExcludeDates : null;

    }
}

/**
 * Filter.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter field name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter field values.
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Whether to enable reverse query.
         * @type {boolean || null}
         */
        this.Negative = null;

        /**
         * Whether to enable fuzzy matching.
         * @type {boolean || null}
         */
        this.Fuzzy = null;

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
        this.Negative = 'Negative' in params ? params.Negative : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * Key-value pair.
 * @class
 */
class Option extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Metric value.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Tencent Cloud tag description.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * Probe action.
 * @class
 */
class ProbeAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP GET action.
         * @type {HTTPGetAction || null}
         */
        this.HTTPGet = null;

        /**
         * Executes check command action.
         * @type {ExecAction || null}
         */
        this.Exec = null;

        /**
         * TCP Socket check action.
         * @type {TCPSocketAction || null}
         */
        this.TCPSocket = null;

        /**
         * Probe type. The default value is HTTPGet. Valid values: HTTPGet, Exec, and TCPSocket.
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HTTPGet) {
            let obj = new HTTPGetAction();
            obj.deserialize(params.HTTPGet)
            this.HTTPGet = obj;
        }

        if (params.Exec) {
            let obj = new ExecAction();
            obj.deserialize(params.Exec)
            this.Exec = obj;
        }

        if (params.TCPSocket) {
            let obj = new TCPSocketAction();
            obj.deserialize(params.TCPSocket)
            this.TCPSocket = obj;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * CFS storage configurations.
 * @class
 */
class CFSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * CFS instance ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Storage path.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Mounting type of CFS. Valid values: STORAGE and SOURCE, which respectively indicate the storage expansion mode and the data source mode. The default value is STORAGE.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MountType = null;

        /**
         * Protocol. Valid values: NFS and TURBO.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.MountType = 'MountType' in params ? params.MountType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * Model description information.
 * @class
 */
class ModelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The model version ID is returned by the DescribeTrainingModelVersion API when querying the model.Enter the task ID of the Automated Machine Learning (AutoML) model.
         * @type {string || null}
         */
        this.ModelVersionId = null;

        /**
         * Model ID.
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * Model name.
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * Model version.
         * @type {string || null}
         */
        this.ModelVersion = null;

        /**
         * Model source.
         * @type {string || null}
         */
        this.ModelSource = null;

        /**
         * COS path information.
         * @type {CosPathInfo || null}
         */
        this.CosPathInfo = null;

        /**
         * GooseFSx configuration. This parameter takes effect if ModelSource is GooseFSx.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {GooseFSx || null}
         */
        this.GooseFSx = null;

        /**
         * Algorithm framework corresponding to the model (reserved field).Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AlgorithmFramework = null;

        /**
         * Default: NORMAL; accelerated model: ACCELERATE; automatic learning model: AUTO_ML.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModelType = null;

        /**
         * Model format.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModelFormat = null;

        /**
         * Whether it is a private LLM.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsPrivateModel = null;

        /**
         * Model category. Valid values: MultiModal (multi-modal) and LLM (text LLM).
         * @type {string || null}
         */
        this.ModelCategory = null;

        /**
         * Data source configurations.
         * @type {PublicDataSourceFS || null}
         */
        this.PublicDataSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelVersionId = 'ModelVersionId' in params ? params.ModelVersionId : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.ModelVersion = 'ModelVersion' in params ? params.ModelVersion : null;
        this.ModelSource = 'ModelSource' in params ? params.ModelSource : null;

        if (params.CosPathInfo) {
            let obj = new CosPathInfo();
            obj.deserialize(params.CosPathInfo)
            this.CosPathInfo = obj;
        }

        if (params.GooseFSx) {
            let obj = new GooseFSx();
            obj.deserialize(params.GooseFSx)
            this.GooseFSx = obj;
        }
        this.AlgorithmFramework = 'AlgorithmFramework' in params ? params.AlgorithmFramework : null;
        this.ModelType = 'ModelType' in params ? params.ModelType : null;
        this.ModelFormat = 'ModelFormat' in params ? params.ModelFormat : null;
        this.IsPrivateModel = 'IsPrivateModel' in params ? params.IsPrivateModel : null;
        this.ModelCategory = 'ModelCategory' in params ? params.ModelCategory : null;

        if (params.PublicDataSource) {
            let obj = new PublicDataSourceFS();
            obj.deserialize(params.PublicDataSource)
            this.PublicDataSource = obj;
        }

    }
}

/**
 * CBS storage configuration.
 * @class
 */
class CBSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage size.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VolumeSizeInGB = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumeSizeInGB = 'VolumeSizeInGB' in params ? params.VolumeSizeInGB : null;

    }
}

/**
 * Percentage or quantity.
 * @class
 */
class NumOrPercent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: Num and Percent, which indicate quantity and percentage respectively. The default value is Num.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Numeric value.
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Code repository configuration.
 * @class
 */
class CodeRepoConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Code repository ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Target address for the code repository download.
         * @type {string || null}
         */
        this.TargetPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TargetPath = 'TargetPath' in params ? params.TargetPath : null;

    }
}

/**
 * Information about Pod access over SSH.
 * @class
 */
class PodSSHInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address of the Pod.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * SSH port of the Pod.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * SSH access command.
         * @type {string || null}
         */
        this.LoginCommand = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.LoginCommand = 'LoginCommand' in params ? params.LoginCommand : null;

    }
}

/**
 * Pod information display.
 * @class
 */
class Pod extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod name.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Unique ID of the Pod.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * Service payment mode.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * Pod status.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Phase = null;

        /**
         * Pod IP address.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Pod creation time.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Container list.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Container || null}
         */
        this.Containers = null;

        /**
         * Container list.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Container> || null}
         */
        this.ContainerInfos = null;

        /**
         * Container calling information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CrossTenantENIInfo || null}
         */
        this.CrossTenantENIInfo = null;

        /**
         * Instance status information.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Instance scheduling start time.
         * @type {string || null}
         */
        this.StartScheduleTime = null;

        /**
         * Supplemental instance status information.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Node IP address of the current instance.
         * @type {string || null}
         */
        this.NodeIP = null;

        /**
         * Node ID of the current instance.
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * Resource group ID to which the instance belonged.
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * Resource group name.
         * @type {string || null}
         */
        this.ResourceGroupName = null;

        /**
         * Resource usage information of the instance.
         * @type {ResourceInfo || null}
         */
        this.ResourceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.Phase = 'Phase' in params ? params.Phase : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Containers) {
            let obj = new Container();
            obj.deserialize(params.Containers)
            this.Containers = obj;
        }

        if (params.ContainerInfos) {
            this.ContainerInfos = new Array();
            for (let z in params.ContainerInfos) {
                let obj = new Container();
                obj.deserialize(params.ContainerInfos[z]);
                this.ContainerInfos.push(obj);
            }
        }

        if (params.CrossTenantENIInfo) {
            let obj = new CrossTenantENIInfo();
            obj.deserialize(params.CrossTenantENIInfo)
            this.CrossTenantENIInfo = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.StartScheduleTime = 'StartScheduleTime' in params ? params.StartScheduleTime : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.NodeIP = 'NodeIP' in params ? params.NodeIP : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;

        if (params.ResourceInfo) {
            let obj = new ResourceInfo();
            obj.deserialize(params.ResourceInfo)
            this.ResourceInfo = obj;
        }

    }
}

/**
 * DescribeModelServiceGroups request structure.
 * @class
 */
class DescribeModelServiceGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. The default value is 20, and the maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The sorting order of the output list. Valid values: ASC (ascending order) and DESC (descending order).
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Field to sort by. Valid values: CreateTime and UpdateTime.
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Pagination parameters. Supported filterable field names include:["ClusterId", "ServiceId", "ServiceGroupName", "ServiceGroupId","Status","CreatedBy","ModelVersionId"]
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Tag filtering parameters.
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * Service classification.
         * @type {string || null}
         */
        this.ServiceCategory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.ServiceCategory = 'ServiceCategory' in params ? params.ServiceCategory : null;

    }
}

/**
 * Information of a service group for an online service.
 * @class
 */
class ServiceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service group ID.
         * @type {string || null}
         */
        this.ServiceGroupId = null;

        /**
         * Service group name.
         * @type {string || null}
         */
        this.ServiceGroupName = null;

        /**
         * Creator.
         * @type {string || null}
         */
        this.CreatedBy = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Root account.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Total number of services in the service group.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ServiceCount = null;

        /**
         * Number of running services in the service group.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RunningServiceCount = null;

        /**
         * Service description.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Service> || null}
         */
        this.Services = null;

        /**
         * Service group status, which aligns with service status.CREATING: creating.CREATE_FAILED: creation failed.Normal: running.Stopped: stopped.Stopping: stopping.Abnormal: error.Pending: starting.Waiting: getting ready.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Service group tags.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * The latest version in the service group.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestVersion = null;

        /**
         * Operational status of the service.CREATING: creating.CREATE_FAILED: creation failed.ARREARS_STOP: service suspended due to overdue payments.BILLING: billing.WHITELIST_USING: allowlist feature is in trial.WHITELIST_STOP: insufficient allowlist quota.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessStatus = null;

        /**
         * Billing information of the service.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillingInfo = null;

        /**
         * Creation source of the service.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateSource = null;

        /**
         * Weight update status of the service group.UPDATING: updating.UPDATED: updated successfully.UPDATE FAILED: failed to update.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WeightUpdateStatus = null;

        /**
         * Number of running Pods in the service group.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReplicasCount = null;

        /**
         * Expected number of Pods under the service group.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AvailableReplicasCount = null;

        /**
         * Service group's subuin.
         * @type {string || null}
         */
        this.SubUin = null;

        /**
         * Service group's app_id.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Whether to enable authentication.
         * @type {boolean || null}
         */
        this.AuthorizationEnable = null;

        /**
         * List of throttling authentication tokens.
         * @type {Array.<AuthToken> || null}
         */
        this.AuthTokens = null;

        /**
         * Field for monitoring creation source.
         * @type {string || null}
         */
        this.MonitorSource = null;

        /**
         * Nickname of the sub-user.
         * @type {string || null}
         */
        this.SubUinName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;
        this.ServiceGroupName = 'ServiceGroupName' in params ? params.ServiceGroupName : null;
        this.CreatedBy = 'CreatedBy' in params ? params.CreatedBy : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ServiceCount = 'ServiceCount' in params ? params.ServiceCount : null;
        this.RunningServiceCount = 'RunningServiceCount' in params ? params.RunningServiceCount : null;

        if (params.Services) {
            this.Services = new Array();
            for (let z in params.Services) {
                let obj = new Service();
                obj.deserialize(params.Services[z]);
                this.Services.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.LatestVersion = 'LatestVersion' in params ? params.LatestVersion : null;
        this.BusinessStatus = 'BusinessStatus' in params ? params.BusinessStatus : null;
        this.BillingInfo = 'BillingInfo' in params ? params.BillingInfo : null;
        this.CreateSource = 'CreateSource' in params ? params.CreateSource : null;
        this.WeightUpdateStatus = 'WeightUpdateStatus' in params ? params.WeightUpdateStatus : null;
        this.ReplicasCount = 'ReplicasCount' in params ? params.ReplicasCount : null;
        this.AvailableReplicasCount = 'AvailableReplicasCount' in params ? params.AvailableReplicasCount : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AuthorizationEnable = 'AuthorizationEnable' in params ? params.AuthorizationEnable : null;

        if (params.AuthTokens) {
            this.AuthTokens = new Array();
            for (let z in params.AuthTokens) {
                let obj = new AuthToken();
                obj.deserialize(params.AuthTokens[z]);
                this.AuthTokens.push(obj);
            }
        }
        this.MonitorSource = 'MonitorSource' in params ? params.MonitorSource : null;
        this.SubUinName = 'SubUinName' in params ? params.SubUinName : null;

    }
}

/**
 * Container status.
 * @class
 */
class ContainerStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of restarts.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RestartCount = null;

        /**
         * Status.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Whether it is ready.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Ready = null;

        /**
         * Status reason.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * Container error message.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;
        this.State = 'State' in params ? params.State : null;
        this.Ready = 'Ready' in params ? params.Ready : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Configurations related to throttling and speed limit of services.
 * @class
 */
class ServiceLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable throttling and speed limit at the instance level. Valid values: true and false. If the value is true, InstanceRpsLimit is required. If the value is false, InstanceRpsLimit does not take effect.
         * @type {boolean || null}
         */
        this.EnableInstanceRpsLimit = null;

        /**
         * Speed limit for the requests per second (RPS) of each service instance. 0 indicates no throttling.
         * @type {number || null}
         */
        this.InstanceRpsLimit = null;

        /**
         * Whether to enable the maximum concurrency quantity limit for a single instance. Valid values: true and false. If the value is true, InstanceReqLimit is required. If the value is false, InstanceReqLimit does not take effect.
         * @type {boolean || null}
         */
        this.EnableInstanceReqLimit = null;

        /**
         * Maximum concurrency for each service instance.
         * @type {number || null}
         */
        this.InstanceReqLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableInstanceRpsLimit = 'EnableInstanceRpsLimit' in params ? params.EnableInstanceRpsLimit : null;
        this.InstanceRpsLimit = 'InstanceRpsLimit' in params ? params.InstanceRpsLimit : null;
        this.EnableInstanceReqLimit = 'EnableInstanceReqLimit' in params ? params.EnableInstanceReqLimit : null;
        this.InstanceReqLimit = 'InstanceReqLimit' in params ? params.InstanceReqLimit : null;

    }
}

/**
 * Image description information.
 * @class
 */
class ImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image type. Valid values: TCR ( which indicates a Tencent Container Registry (TCR) image), CCR (which indicates a TCR Personal Edition image), PreSet (which indicates a platform preset image), and CUSTOM (which indicates a third-party custom image).
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * Image address.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Region corresponding to the TCR image.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegistryRegion = null;

        /**
         * Instance ID corresponding to the TCR image.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Whether to allow exporting all content.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AllowSaveAllContent = null;

        /**
         * Image name.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * Whether to support data generation.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.SupportDataPipeline = null;

        /**
         * 
         * @type {ImageSecret || null}
         */
        this.ImageSecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RegistryRegion = 'RegistryRegion' in params ? params.RegistryRegion : null;
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.AllowSaveAllContent = 'AllowSaveAllContent' in params ? params.AllowSaveAllContent : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.SupportDataPipeline = 'SupportDataPipeline' in params ? params.SupportDataPipeline : null;

        if (params.ImageSecret) {
            let obj = new ImageSecret();
            obj.deserialize(params.ImageSecret)
            this.ImageSecret = obj;
        }

    }
}

/**
 * Probe structure information.
 * @class
 */
class Probe extends  AbstractModel {
    constructor(){
        super();

        /**
         * Probe action.
         * @type {ProbeAction || null}
         */
        this.ProbeAction = null;

        /**
         * Delay in waiting for a service startup.
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * Polling check interval.
         * @type {number || null}
         */
        this.PeriodSeconds = null;

        /**
         * Check timeout duration.
         * @type {number || null}
         */
        this.TimeoutSeconds = null;

        /**
         * Number of acknowledged failed detections.
         * @type {number || null}
         */
        this.FailureThreshold = null;

        /**
         * Number of acknowledged successful detections. The default values for readiness, liveness, and startup statuses are 3, 1, and 1.
         * @type {number || null}
         */
        this.SuccessThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProbeAction) {
            let obj = new ProbeAction();
            obj.deserialize(params.ProbeAction)
            this.ProbeAction = obj;
        }
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.PeriodSeconds = 'PeriodSeconds' in params ? params.PeriodSeconds : null;
        this.TimeoutSeconds = 'TimeoutSeconds' in params ? params.TimeoutSeconds : null;
        this.FailureThreshold = 'FailureThreshold' in params ? params.FailureThreshold : null;
        this.SuccessThreshold = 'SuccessThreshold' in params ? params.SuccessThreshold : null;

    }
}

/**
 * AuthToken throttling information.
 * @class
 */
class AuthTokenLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * Frequency limit policy. Valid values: PerMinute (frequency limit per minute) and PerDay (daily frequency limit).
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * Upper limit.
         * @type {number || null}
         */
        this.Max = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Max = 'Max' in params ? params.Max : null;

    }
}

/**
 * CreateTrainingTask response structure.
 * @class
 */
class CreateTrainingTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Training task ID.
         * @type {string || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 
 * @class
 */
class ImageSecret extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 
         * @type {string || null}
         */
        this.SecretId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;

    }
}

/**
 * Host path mounting configuration.
 * @class
 */
class HostPath extends  AbstractModel {
    constructor(){
        super();

        /**
         * Host path to be mounted.
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * Tag filtering parameters.
 * @class
 */
class TagFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Multiple tag values.
         * @type {Array.<string> || null}
         */
        this.TagValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValues = 'TagValues' in params ? params.TagValues : null;

    }
}

/**
 * Workload status.
 * @class
 */
class WorkloadStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of current instances.
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * Number of updated instances.
         * @type {number || null}
         */
        this.UpdatedReplicas = null;

        /**
         * Number of ready instances.
         * @type {number || null}
         */
        this.ReadyReplicas = null;

        /**
         * Number of available instances.
         * @type {number || null}
         */
        this.AvailableReplicas = null;

        /**
         * Number of unavailable instances.
         * @type {number || null}
         */
        this.UnavailableReplicas = null;

        /**
         * Normal: running.Abnormal: service abnormalities, such as container startup failure.Waiting: service waiting, such as container image pulling.Stopped: stopped.Pending: starting.Stopping: stopping.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Workload status information.
         * @type {Array.<StatefulSetCondition> || null}
         */
        this.StatefulSetCondition = null;

        /**
         * Status information of workload history.
         * @type {Array.<StatefulSetCondition> || null}
         */
        this.Conditions = null;

        /**
         * Display the reason when the status is abnormal.Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.UpdatedReplicas = 'UpdatedReplicas' in params ? params.UpdatedReplicas : null;
        this.ReadyReplicas = 'ReadyReplicas' in params ? params.ReadyReplicas : null;
        this.AvailableReplicas = 'AvailableReplicas' in params ? params.AvailableReplicas : null;
        this.UnavailableReplicas = 'UnavailableReplicas' in params ? params.UnavailableReplicas : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.StatefulSetCondition) {
            this.StatefulSetCondition = new Array();
            for (let z in params.StatefulSetCondition) {
                let obj = new StatefulSetCondition();
                obj.deserialize(params.StatefulSetCondition[z]);
                this.StatefulSetCondition.push(obj);
            }
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new StatefulSetCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * CreateTrainingTask request structure.
 * @class
 */
class CreateTrainingTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Training task name. The name cannot exceed 60 characters in length, and can contain only Chinese characters, letters, digits, underscores (_), and hyphens (-). It must start with a Chinese character, letter, or digit.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Billing mode. For example, PREPAID indicates yearly/monthly subscription (resource group).
POSTPAID_BY_HOUR indicates pay-as-you-go mode.
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * Resource configuration. Specify the CVM instance specification ID and number of nodes. The API for querying the CVM instance specification ID is DescribeBillingSpecsPrice. For example, [{"Role":"WORKER", "InstanceType": "TI.S.MEDIUM.POST", "InstanceNum": 1}].
         * @type {Array.<ResourceConfigInfo> || null}
         */
        this.ResourceConfigInfos = null;

        /**
         * TI Workspace ID. Used solely for the "Workspace" allowlist feature. To use this feature, please contact a TI administrator to enable allowlisting.
         * @type {string || null}
         */
        this.TiProjectId = null;

        /**
         * Training framework name, which can be queried via the DescribeTrainingFrameworks API. For example, SPARK, PYSPARK, TENSORFLOW, and PYTORCH.
         * @type {string || null}
         */
        this.FrameworkName = null;

        /**
         * Training framework version, which can be queried via the DescribeTrainingFrameworks API. For example, 1.15 and 1.9.
         * @type {string || null}
         */
        this.FrameworkVersion = null;

        /**
         * Training framework environment, which can be queried via the DescribeTrainingFrameworks API. For example, tf1.15-py3.7-cpu and torch1.9-py3.8-cuda11.1-gpu.
         * @type {string || null}
         */
        this.FrameworkEnvironment = null;

        /**
         * ID of the prepaid dedicated resource group, which can be queried via the DescribeBillingResourceGroups API.
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * Tag configuration.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Custom image information.
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * COS code package path.
         * @type {CosPathInfo || null}
         */
        this.CodePackagePath = null;

        /**
         * Task startup command. Specify this parameter based on the task training mode. If the configuration fails due to special characters, use the EncodedStartCmdInfo parameter instead.
         * @type {StartCmdInfo || null}
         */
        this.StartCmdInfo = null;

        /**
         * Training mode, which can be queried via the DescribeTrainingFrameworks API. For example, PS_WORKER, DDP, MPI, and HOROVOD.
         * @type {string || null}
         */
        this.TrainingMode = null;

        /**
         * Data configurations. This parameter depends on the DataSource field. The maximum number of configurations is 10.
         * @type {Array.<DataConfig> || null}
         */
        this.DataConfigs = null;

        /**
         * VPC Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * COS training output path.
         * @type {CosPathInfo || null}
         */
        this.Output = null;

        /**
         * CLS logging configuration.
         * @type {LogConfig || null}
         */
        this.LogConfig = null;

        /**
         * Tuning parameters. The value of this parameter cannot exceed 2048 characters in length.
         * @type {string || null}
         */
        this.TuningParameters = null;

        /**
         * Indicates whether to report logs.
         * @type {boolean || null}
         */
        this.LogEnable = null;

        /**
         * Remarks. The value of this parameter cannot exceed 1024 characters.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Data source. For example, DATASET, COS, CFS, CFSTurbo, HDFS, and GooseFSx.
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * Callback URL. This parameter is used for the asynchronous callback to create, start, or stop training tasks. For the callback format and content, see [[TI-ONE API Callback Description]](https://www.tencentcloud.com/document/product/851/84292?from_cn_redirect=1).
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * Encoded task startup command. If StartCmdInfo is also configured, only this parameter takes effect.
         * @type {EncodedStartCmdInfo || null}
         */
        this.EncodedStartCmdInfo = null;

        /**
         * Code repository configuration.
         * @type {Array.<CodeRepoConfig> || null}
         */
        this.CodeRepos = null;

        /**
         * Network exposure configuration.
         * @type {ExposeNetworkConfig || null}
         */
        this.ExposeNetworkConfig = null;

        /**
         * Environment Variables.
         * @type {Array.<EnvVar> || null}
         */
        this.Envs = null;

        /**
         * Train tool configuration.
         * @type {TrainToolConfig || null}
         */
        this.TrainToolConfig = null;

        /**
         * Training Diagnostic Tool Configuration.
         * @type {ResourceSupplyAttribute || null}
         */
        this.ResourceSupplyAttribute = null;

        /**
         * Queue ID.
         * @type {Array.<string> || null}
         */
        this.Queues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

        if (params.ResourceConfigInfos) {
            this.ResourceConfigInfos = new Array();
            for (let z in params.ResourceConfigInfos) {
                let obj = new ResourceConfigInfo();
                obj.deserialize(params.ResourceConfigInfos[z]);
                this.ResourceConfigInfos.push(obj);
            }
        }
        this.TiProjectId = 'TiProjectId' in params ? params.TiProjectId : null;
        this.FrameworkName = 'FrameworkName' in params ? params.FrameworkName : null;
        this.FrameworkVersion = 'FrameworkVersion' in params ? params.FrameworkVersion : null;
        this.FrameworkEnvironment = 'FrameworkEnvironment' in params ? params.FrameworkEnvironment : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.CodePackagePath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.CodePackagePath)
            this.CodePackagePath = obj;
        }

        if (params.StartCmdInfo) {
            let obj = new StartCmdInfo();
            obj.deserialize(params.StartCmdInfo)
            this.StartCmdInfo = obj;
        }
        this.TrainingMode = 'TrainingMode' in params ? params.TrainingMode : null;

        if (params.DataConfigs) {
            this.DataConfigs = new Array();
            for (let z in params.DataConfigs) {
                let obj = new DataConfig();
                obj.deserialize(params.DataConfigs[z]);
                this.DataConfigs.push(obj);
            }
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.Output) {
            let obj = new CosPathInfo();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

        if (params.LogConfig) {
            let obj = new LogConfig();
            obj.deserialize(params.LogConfig)
            this.LogConfig = obj;
        }
        this.TuningParameters = 'TuningParameters' in params ? params.TuningParameters : null;
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.EncodedStartCmdInfo) {
            let obj = new EncodedStartCmdInfo();
            obj.deserialize(params.EncodedStartCmdInfo)
            this.EncodedStartCmdInfo = obj;
        }

        if (params.CodeRepos) {
            this.CodeRepos = new Array();
            for (let z in params.CodeRepos) {
                let obj = new CodeRepoConfig();
                obj.deserialize(params.CodeRepos[z]);
                this.CodeRepos.push(obj);
            }
        }

        if (params.ExposeNetworkConfig) {
            let obj = new ExposeNetworkConfig();
            obj.deserialize(params.ExposeNetworkConfig)
            this.ExposeNetworkConfig = obj;
        }

        if (params.Envs) {
            this.Envs = new Array();
            for (let z in params.Envs) {
                let obj = new EnvVar();
                obj.deserialize(params.Envs[z]);
                this.Envs.push(obj);
            }
        }

        if (params.TrainToolConfig) {
            let obj = new TrainToolConfig();
            obj.deserialize(params.TrainToolConfig)
            this.TrainToolConfig = obj;
        }

        if (params.ResourceSupplyAttribute) {
            let obj = new ResourceSupplyAttribute();
            obj.deserialize(params.ResourceSupplyAttribute)
            this.ResourceSupplyAttribute = obj;
        }
        this.Queues = 'Queues' in params ? params.Queues : null;

    }
}

/**
 * Environment variables.
 * @class
 */
class EnvVar extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment variable key.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Environment variable value.Note: This field may return null, indicating that no valid values can be obtained.
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
 * Instance status.
 * @class
 */
class StatefulSetCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Reason.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * Status of the condition, True, False or Unknown.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Type.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Last update time.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastTransitionTime = null;

        /**
         * Last update time.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastUpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.LastTransitionTime = 'LastTransitionTime' in params ? params.LastTransitionTime : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;

    }
}

/**
 * Startup command information.
 * @class
 */
class StartCmdInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Startup command.
         * @type {string || null}
         */
        this.StartCmd = null;

        /**
         * Startup command for ps nodes.
         * @type {string || null}
         */
        this.PsStartCmd = null;

        /**
         * Startup command for Worker nodes.
         * @type {string || null}
         */
        this.WorkerStartCmd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartCmd = 'StartCmd' in params ? params.StartCmd : null;
        this.PsStartCmd = 'PsStartCmd' in params ? params.PsStartCmd : null;
        this.WorkerStartCmd = 'WorkerStartCmd' in params ? params.WorkerStartCmd : null;

    }
}

/**
 * Log configurations.
 * @class
 */
class LogConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logs should be shipped to a Cloud Log Service (CLS) log set.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Logs should be shipped to a CLS topic.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * HDFS parameter configuration.
 * @class
 */
class HDFSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster instance ID, such as emr-xxxxxxxx.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Path.
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

module.exports = {
    Container: Container,
    Service: Service,
    HTTPGetAction: HTTPGetAction,
    RollingUpdate: RollingUpdate,
    ServiceEIP: ServiceEIP,
    ResourceGroupInfo: ResourceGroupInfo,
    ExecAction: ExecAction,
    HorizontalPodAutoscaler: HorizontalPodAutoscaler,
    ResourceSupplyAttribute: ResourceSupplyAttribute,
    AuthTokenBase: AuthTokenBase,
    ResourceConfigInfo: ResourceConfigInfo,
    PublicDataSourceFS: PublicDataSourceFS,
    ExposePortConfig: ExposePortConfig,
    AuthToken: AuthToken,
    TrainToolConfig: TrainToolConfig,
    HealthProbe: HealthProbe,
    EncodedStartCmdInfo: EncodedStartCmdInfo,
    CrossTenantENIInfo: CrossTenantENIInfo,
    SSHConfig: SSHConfig,
    ExposeNetworkConfig: ExposeNetworkConfig,
    SchedulingPolicy: SchedulingPolicy,
    TCPSocketAction: TCPSocketAction,
    LocalDisk: LocalDisk,
    GooseFSx: GooseFSx,
    ResourceInfo: ResourceInfo,
    VolumeMount: VolumeMount,
    DataSetConfig: DataSetConfig,
    ScheduledAction: ScheduledAction,
    DescribeModelServiceGroupsResponse: DescribeModelServiceGroupsResponse,
    RDMAConfig: RDMAConfig,
    InferCodeInfo: InferCodeInfo,
    CosPathInfo: CosPathInfo,
    ServiceInfo: ServiceInfo,
    DataConfig: DataConfig,
    GpuDetail: GpuDetail,
    CFSTurbo: CFSTurbo,
    GooseFS: GooseFS,
    CronScaleJob: CronScaleJob,
    Filter: Filter,
    Option: Option,
    Tag: Tag,
    ProbeAction: ProbeAction,
    CFSConfig: CFSConfig,
    ModelInfo: ModelInfo,
    CBSConfig: CBSConfig,
    NumOrPercent: NumOrPercent,
    CodeRepoConfig: CodeRepoConfig,
    PodSSHInfo: PodSSHInfo,
    Pod: Pod,
    DescribeModelServiceGroupsRequest: DescribeModelServiceGroupsRequest,
    ServiceGroup: ServiceGroup,
    ContainerStatus: ContainerStatus,
    ServiceLimit: ServiceLimit,
    ImageInfo: ImageInfo,
    Probe: Probe,
    AuthTokenLimit: AuthTokenLimit,
    CreateTrainingTaskResponse: CreateTrainingTaskResponse,
    ImageSecret: ImageSecret,
    HostPath: HostPath,
    TagFilter: TagFilter,
    WorkloadStatus: WorkloadStatus,
    CreateTrainingTaskRequest: CreateTrainingTaskRequest,
    EnvVar: EnvVar,
    StatefulSetCondition: StatefulSetCondition,
    StartCmdInfo: StartCmdInfo,
    LogConfig: LogConfig,
    HDFSConfig: HDFSConfig,

}
