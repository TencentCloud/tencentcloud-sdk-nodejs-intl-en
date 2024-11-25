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
 * Node information
 * @class
 */
class NativeNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node name
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Machine status
         * @type {string || null}
         */
        this.MachineState = null;

        /**
         * Machine availability zone
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Node billing type. PREPAID: Monthly subscription; POSTPAID_BY_HOUR: Pay-as-you-go (default);
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Machine login status
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.LoginStatus = null;

        /**
         * Whether to enable scale-in protection
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.IsProtectedFromScaleIn = null;

        /**
         * Machine name
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Number of CPU cores (unit: cores)
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Number of GPU cores (unit: cores)
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.GPU = null;

        /**
         * Auto-renewal label
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Node billing mode (deprecated)
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Node memory capacity (unit: `GB`)
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Public network bandwidth configuration
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Model family
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * Node private network IP
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * Model
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Billing expiration time of monthly subscription nodes
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Security group list
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIDs = null;

        /**
         * VPC unique ID
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet unique ID
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * OS name
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OsImage = null;

        /**
         * 
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
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.MachineState = 'MachineState' in params ? params.MachineState : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.LoginStatus = 'LoginStatus' in params ? params.LoginStatus : null;
        this.IsProtectedFromScaleIn = 'IsProtectedFromScaleIn' in params ? params.IsProtectedFromScaleIn : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.GPU = 'GPU' in params ? params.GPU : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Memory = 'Memory' in params ? params.Memory : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.SecurityGroupIDs = 'SecurityGroupIDs' in params ? params.SecurityGroupIDs : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.OsImage = 'OsImage' in params ? params.OsImage : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Health check template rules
 * @class
 */
class HealthCheckTemplateRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check item name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of health check rules
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Fix action
         * @type {string || null}
         */
        this.RepairAction = null;

        /**
         * Fix impact
         * @type {string || null}
         */
        this.RepairEffect = null;

        /**
         * Whether it is recommended to enable check
         * @type {boolean || null}
         */
        this.ShouldEnable = null;

        /**
         * Whether repair is suggested.
         * @type {boolean || null}
         */
        this.ShouldRepair = null;

        /**
         * Severity
         * @type {string || null}
         */
        this.Severity = null;

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
        this.RepairAction = 'RepairAction' in params ? params.RepairAction : null;
        this.RepairEffect = 'RepairEffect' in params ? params.RepairEffect : null;
        this.ShouldEnable = 'ShouldEnable' in params ? params.ShouldEnable : null;
        this.ShouldRepair = 'ShouldRepair' in params ? params.ShouldRepair : null;
        this.Severity = 'Severity' in params ? params.Severity : null;

    }
}

/**
 * Health check rules
 * @class
 */
class HealthCheckPolicyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check rules
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether to check this item
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Whether to enable repair
         * @type {boolean || null}
         */
        this.AutoRepairEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.AutoRepairEnabled = 'AutoRepairEnabled' in params ? params.AutoRepairEnabled : null;

    }
}

/**
 * DeleteHealthCheckPolicy request structure.
 * @class
 */
class DeleteHealthCheckPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Health check policy name
         * @type {string || null}
         */
        this.HealthCheckPolicyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.HealthCheckPolicyName = 'HealthCheckPolicyName' in params ? params.HealthCheckPolicyName : null;

    }
}

/**
 * CreateNodePool response structure.
 * @class
 */
class CreateNodePoolResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

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
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Native node pool creation parameters
 * @class
 */
class CreateNativeNodePoolParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node pool scaling configuration
         * @type {MachineSetScaling || null}
         */
        this.Scaling = null;

        /**
         * Subnet list
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Node billing type. PREPAID: Monthly subscription; POSTPAID_BY_HOUR: Pay-as-you-go (default);
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * System disk configuration
         * @type {Disk || null}
         */
        this.SystemDisk = null;

        /**
         * List of models
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * Security group list
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Automatic upgrade configuration
         * @type {MachineUpgradeSettings || null}
         */
        this.UpgradeSettings = null;

        /**
         * Whether to enable self-healing capability
         * @type {boolean || null}
         */
        this.AutoRepair = null;

        /**
         * Billing configuration of monthly subscription models
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * Management parameter configuration of node pools
         * @type {ManagementConfig || null}
         */
        this.Management = null;

        /**
         * Fault self-healing rule name
         * @type {string || null}
         */
        this.HealthCheckPolicyName = null;

        /**
         * hostname pattern string of native node pools
         * @type {string || null}
         */
        this.HostNamePattern = null;

        /**
         * kubelet custom parameters
         * @type {Array.<string> || null}
         */
        this.KubeletArgs = null;

        /**
         * Predefined script
         * @type {LifecycleConfig || null}
         */
        this.Lifecycle = null;

        /**
         * Runtime root directory
         * @type {string || null}
         */
        this.RuntimeRootDir = null;

        /**
         * Whether to enable Auto Scaling (AS)
         * @type {boolean || null}
         */
        this.EnableAutoscaling = null;

        /**
         * Desired node count
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * Public network bandwidth configuration
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Data disk list of native node pools
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Node pool ssh public key ID array
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Node pool type
         * @type {string || null}
         */
        this.MachineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Scaling) {
            let obj = new MachineSetScaling();
            obj.deserialize(params.Scaling)
            this.Scaling = obj;
        }
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.SystemDisk) {
            let obj = new Disk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.UpgradeSettings) {
            let obj = new MachineUpgradeSettings();
            obj.deserialize(params.UpgradeSettings)
            this.UpgradeSettings = obj;
        }
        this.AutoRepair = 'AutoRepair' in params ? params.AutoRepair : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

        if (params.Management) {
            let obj = new ManagementConfig();
            obj.deserialize(params.Management)
            this.Management = obj;
        }
        this.HealthCheckPolicyName = 'HealthCheckPolicyName' in params ? params.HealthCheckPolicyName : null;
        this.HostNamePattern = 'HostNamePattern' in params ? params.HostNamePattern : null;
        this.KubeletArgs = 'KubeletArgs' in params ? params.KubeletArgs : null;

        if (params.Lifecycle) {
            let obj = new LifecycleConfig();
            obj.deserialize(params.Lifecycle)
            this.Lifecycle = obj;
        }
        this.RuntimeRootDir = 'RuntimeRootDir' in params ? params.RuntimeRootDir : null;
        this.EnableAutoscaling = 'EnableAutoscaling' in params ? params.EnableAutoscaling : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

    }
}

/**
 * DescribeNodePools response structure.
 * @class
 */
class DescribeNodePoolsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node pool list
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<NodePool> || null}
         */
        this.NodePools = null;

        /**
         * Total resources
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.NodePools) {
            this.NodePools = new Array();
            for (let z in params.NodePools) {
                let obj = new NodePool();
                obj.deserialize(params.NodePools[z]);
                this.NodePools.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Third-party node
 * @class
 */
class ExternalNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Third-party node name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Number of CPU cores (unit: cores)
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Node memory capacity (unit: `GB`)
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * kubelet version information of third-party nodes
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.K8SVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.K8SVersion = 'K8SVersion' in params ? params.K8SVersion : null;

    }
}

/**
 * DescribeClusterInstances response structure.
 * @class
 */
class DescribeClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of instances in the cluster
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instances in the cluster
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

        /**
         * Error information collection
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.Errors = null;

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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.Errors = 'Errors' in params ? params.Errors : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ops window settings of managed node pools
 * @class
 */
class AutoUpgradeOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Automatic upgrade start time
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.AutoUpgradeStartTime = null;

        /**
         * Automatic upgrade duration
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * Ops date
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.WeeklyPeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoUpgradeStartTime = 'AutoUpgradeStartTime' in params ? params.AutoUpgradeStartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.WeeklyPeriod = 'WeeklyPeriod' in params ? params.WeeklyPeriod : null;

    }
}

/**
 * Nodes for automatic scaling
 * @class
 */
class AutoscalingAdded extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of nodes being added
         * @type {number || null}
         */
        this.Joining = null;

        /**
         * Number of nodes being initialized
         * @type {number || null}
         */
        this.Initializing = null;

        /**
         * Number of normal nodes
         * @type {number || null}
         */
        this.Normal = null;

        /**
         * Total number of nodes
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Joining = 'Joining' in params ? params.Joining : null;
        this.Initializing = 'Initializing' in params ? params.Initializing : null;
        this.Normal = 'Normal' in params ? params.Normal : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * Cluster's instance information
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node role: MASTER, WORKER, ETCD, MASTER_ETCD, and ALL. Default value: WORKER
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * Cause of instance exception (or initialization)
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.FailedReason = null;

        /**
         * Instance status

- initializing
- running
- failed
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * Whether it is unschedulable
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.Unschedulable = null;

        /**
         * Adding time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Node private network IP
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.LanIP = null;

        /**
         * Resource pool ID

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * Native node parameters
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {NativeNodeInfo || null}
         */
        this.Native = null;

        /**
         * General node parameters
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {RegularNodeInfo || null}
         */
        this.Regular = null;

        /**
         * Super node parameters
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {SuperNodeInfo || null}
         */
        this.Super = null;

        /**
         * Third-party node parameters
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {ExternalNodeInfo || null}
         */
        this.External = null;

        /**
         * Node type

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.NodeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.Unschedulable = 'Unschedulable' in params ? params.Unschedulable : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.LanIP = 'LanIP' in params ? params.LanIP : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;

        if (params.Native) {
            let obj = new NativeNodeInfo();
            obj.deserialize(params.Native)
            this.Native = obj;
        }

        if (params.Regular) {
            let obj = new RegularNodeInfo();
            obj.deserialize(params.Regular)
            this.Regular = obj;
        }

        if (params.Super) {
            let obj = new SuperNodeInfo();
            obj.deserialize(params.Super)
            this.Super = obj;
        }

        if (params.External) {
            let obj = new ExternalNodeInfo();
            obj.deserialize(params.External)
            this.External = obj;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;

    }
}

/**
 * DescribeHealthCheckPolicyBindings request structure.
 * @class
 */
class DescribeHealthCheckPolicyBindingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ·  HealthCheckPolicyName
    Filter by [Health Check Rule Name].
    Type: String
        Required: No
         * @type {Array.<Filter> || null}
         */
        this.Filter = null;

        /**
         * Maximum number of output entries. Default value: 20; maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new Filter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Node statistics list
 * @class
 */
class NodeCountSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Manually managed nodes
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {ManuallyAdded || null}
         */
        this.ManuallyAdded = null;

        /**
         * Automatically managed nodes
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {AutoscalingAdded || null}
         */
        this.AutoscalingAdded = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ManuallyAdded) {
            let obj = new ManuallyAdded();
            obj.deserialize(params.ManuallyAdded)
            this.ManuallyAdded = obj;
        }

        if (params.AutoscalingAdded) {
            let obj = new AutoscalingAdded();
            obj.deserialize(params.AutoscalingAdded)
            this.AutoscalingAdded = obj;
        }

    }
}

/**
 * Virtual node pool information.
 * @class
 */
class SuperNodePoolInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet list
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Security group list
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * Runtime configuration
 * @class
 */
class RuntimeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Runtime type
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RuntimeType = null;

        /**
         * Runtime version
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RuntimeVersion = null;

        /**
         * Runtime root directory
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RuntimeRootDir = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuntimeType = 'RuntimeType' in params ? params.RuntimeType : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;
        this.RuntimeRootDir = 'RuntimeRootDir' in params ? params.RuntimeRootDir : null;

    }
}

/**
 * Tags in k8s, generally existing as an array
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name in the map list
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value in the map list
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
 * Binding relationship between health check policy and node pool
 * @class
 */
class HealthCheckPolicyBinding extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check policy name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Rule creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Associated node pool array
         * @type {Array.<string> || null}
         */
        this.NodePools = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.NodePools = 'NodePools' in params ? params.NodePools : null;

    }
}

/**
 * CreateHealthCheckPolicy request structure.
 * @class
 */
class CreateHealthCheckPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Health check policy
         * @type {HealthCheckPolicy || null}
         */
        this.HealthCheckPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.HealthCheckPolicy) {
            let obj = new HealthCheckPolicy();
            obj.deserialize(params.HealthCheckPolicy)
            this.HealthCheckPolicy = obj;
        }

    }
}

/**
 * Node custom parameters
 * @class
 */
class InstanceExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * kubelet custom parameters, whose format is ["k1=v1", "k1=v2"], for example ["root-dir=/var/lib/kubelet","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.Kubelet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kubelet = 'Kubelet' in params ? params.Kubelet : null;

    }
}

/**
 * Managed node pool automatic upgrade configuration
 * @class
 */
class MachineUpgradeSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable automatic upgrade
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.AutoUpgrade = null;

        /**
         * Ops window
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {AutoUpgradeOptions || null}
         */
        this.UpgradeOptions = null;

        /**
         * Upgrade item
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.Components = null;

        /**
         * Maximum number of nodes that cannot be upgraded during upgrade
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {IntOrString || null}
         */
        this.MaxUnavailable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoUpgrade = 'AutoUpgrade' in params ? params.AutoUpgrade : null;

        if (params.UpgradeOptions) {
            let obj = new AutoUpgradeOptions();
            obj.deserialize(params.UpgradeOptions)
            this.UpgradeOptions = obj;
        }
        this.Components = 'Components' in params ? params.Components : null;

        if (params.MaxUnavailable) {
            let obj = new IntOrString();
            obj.deserialize(params.MaxUnavailable)
            this.MaxUnavailable = obj;
        }

    }
}

/**
 * Modify native node pool parameters
 * @class
 */
class UpdateNativeNodePoolParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling configuration
         * @type {MachineSetScaling || null}
         */
        this.Scaling = null;

        /**
         * Subnet list
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Security group list
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Automatic upgrade configuration
         * @type {MachineUpgradeSettings || null}
         */
        this.UpgradeSettings = null;

        /**
         * Whether to enable self-healing capability
         * @type {boolean || null}
         */
        this.AutoRepair = null;

        /**
         * Change the node billing type
Currently, only pay-as-you-go to monthly subscription is supported:
- PREPAID

         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Billing configuration of monthly subscription models
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * System disk configuration
         * @type {Disk || null}
         */
        this.SystemDisk = null;

        /**
         * Machine system configuration
         * @type {ManagementConfig || null}
         */
        this.Management = null;

        /**
         * Fault self-healing rule name
         * @type {string || null}
         */
        this.HealthCheckPolicyName = null;

        /**
         * hostname pattern string of native node pools
         * @type {string || null}
         */
        this.HostNamePattern = null;

        /**
         * kubelet custom parameters
         * @type {Array.<string> || null}
         */
        this.KubeletArgs = null;

        /**
         * Predefined script
         * @type {LifecycleConfig || null}
         */
        this.Lifecycle = null;

        /**
         * Runtime root directory
         * @type {string || null}
         */
        this.RuntimeRootDir = null;

        /**
         * Whether to enable Auto Scaling (AS)
         * @type {boolean || null}
         */
        this.EnableAutoscaling = null;

        /**
         * List of models
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * Desired node count
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * Data disk list
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * ssh public key ID array
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Scaling) {
            let obj = new MachineSetScaling();
            obj.deserialize(params.Scaling)
            this.Scaling = obj;
        }
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.UpgradeSettings) {
            let obj = new MachineUpgradeSettings();
            obj.deserialize(params.UpgradeSettings)
            this.UpgradeSettings = obj;
        }
        this.AutoRepair = 'AutoRepair' in params ? params.AutoRepair : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

        if (params.SystemDisk) {
            let obj = new Disk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.Management) {
            let obj = new ManagementConfig();
            obj.deserialize(params.Management)
            this.Management = obj;
        }
        this.HealthCheckPolicyName = 'HealthCheckPolicyName' in params ? params.HealthCheckPolicyName : null;
        this.HostNamePattern = 'HostNamePattern' in params ? params.HostNamePattern : null;
        this.KubeletArgs = 'KubeletArgs' in params ? params.KubeletArgs : null;

        if (params.Lifecycle) {
            let obj = new LifecycleConfig();
            obj.deserialize(params.Lifecycle)
            this.Lifecycle = obj;
        }
        this.RuntimeRootDir = 'RuntimeRootDir' in params ? params.RuntimeRootDir : null;
        this.EnableAutoscaling = 'EnableAutoscaling' in params ? params.EnableAutoscaling : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * Monthly subscription configuration
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing cycle of the pay-as-you-go mode (unit: month):
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Renewal method of the prepayment mode:
- NOTIFY_AND_AUTO_RENEW: Notify the user of expiration and auto-renew (default)
- NOTIFY_AND_MANUAL_RENEW: Notify the user of expiration but do not auto-renew
- DISABLE_NOTIFY_AND_MANUAL_RENEW: Do not notify the user of expiration and do not auto-renew

         * @type {string || null}
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
 * DeleteNodePool response structure.
 * @class
 */
class DeleteNodePoolResponse extends  AbstractModel {
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
 * The type of resources the label is bound to. Type currently supported: "cluster".
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
 * Node pool AS configuration
 * @class
 */
class MachineSetScaling extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node pool minimum replica count
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * Node pool maximum replica count
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * Node pool scaling policy. ZoneEquality: Scatter across multiple availability zones; ZonePriority: Prioritize preferred availability zones;
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CreatePolicy = null;

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
        this.CreatePolicy = 'CreatePolicy' in params ? params.CreatePolicy : null;

    }
}

/**
 * ModifyNodePool request structure.
 * @class
 */
class ModifyNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * Node pool name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Node Labels
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Node taint
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * Node tags
         * @type {Array.<TagSpecification> || null}
         */
        this.Tags = null;

        /**
         * Whether to enable deletion protection
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * Whether the node is unschedulable
         * @type {boolean || null}
         */
        this.Unschedulable = null;

        /**
         * Native node pool update parameters
         * @type {UpdateNativeNodePoolParam || null}
         */
        this.Native = null;

        /**
         * Node annotation list
         * @type {Array.<Annotation> || null}
         */
        this.Annotations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagSpecification();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.Unschedulable = 'Unschedulable' in params ? params.Unschedulable : null;

        if (params.Native) {
            let obj = new UpdateNativeNodePoolParam();
            obj.deserialize(params.Native)
            this.Native = obj;
        }

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new Annotation();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }

    }
}

/**
 * Annotations in k8s, generally existing as an array
 * @class
 */
class Annotation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name in the map list
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value in the map list
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
 * DescribeClusterInstances request structure.
 * @class
 */
class DescribeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Offset. Default value: 0. For more information on Offset, see the relevant sections in API [Overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20, maximum value: 100. For more information on Limit, see the relevant sections in API [Overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter criteria list:
InstanceIds (Instance ID), InstanceType (Instance type: Regular, Native, Virtual, External), VagueIpAddress (Fuzzy matching IP), Labels (k8s node label), NodePoolNames (Node pool name), VagueInstanceName (Fuzzy matching node name), InstanceStates (Node status), Unschedulable (Cordoning status), NodePoolIds (Node pool ID)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Sorting information
         * @type {SortBy || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
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

        if (params.SortBy) {
            let obj = new SortBy();
            obj.deserialize(params.SortBy)
            this.SortBy = obj;
        }

    }
}

/**
 * DeleteHealthCheckPolicy response structure.
 * @class
 */
class DeleteHealthCheckPolicyResponse extends  AbstractModel {
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
 * List of tag descriptions. By specifying this parameter, you can bind tags to corresponding resource instances at the same time. Currently, only tags can be bound to cloud host instances.
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type of resources the label is bound to. Type currently supported: "cluster".

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Tag pair list

Note: This field may return "null", indicating that no valid value can be obtained.
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
 * Custom script for node pools
 * @class
 */
class LifecycleConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom script before node initialization
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.PreInit = null;

        /**
         * Custom script after node initialization
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.PostInit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PreInit = 'PreInit' in params ? params.PreInit : null;
        this.PostInit = 'PostInit' in params ? params.PostInit : null;

    }
}

/**
 * ModifyNodePool response structure.
 * @class
 */
class ModifyNodePoolResponse extends  AbstractModel {
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
 * General node pool information
 * @class
 */
class RegularNodePoolInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * LaunchConfigurationId configuration
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * Auto-scaling group ID
         * @type {string || null}
         */
        this.AutoscalingGroupId = null;

        /**
         * NodeCountSummary node list
         * @type {NodeCountSummary || null}
         */
        this.NodeCountSummary = null;

        /**
         * Status information
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.AutoscalingGroupStatus = null;

        /**
         * Maximum number of nodes
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.MaxNodesNum = null;

        /**
         * Minimum number of nodes
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.MinNodesNum = null;

        /**
         * Desired number of nodes
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.DesiredNodesNum = null;

        /**
         * Node pool osName
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.NodePoolOs = null;

        /**
         * Node configuration
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.AutoscalingGroupId = 'AutoscalingGroupId' in params ? params.AutoscalingGroupId : null;

        if (params.NodeCountSummary) {
            let obj = new NodeCountSummary();
            obj.deserialize(params.NodeCountSummary)
            this.NodeCountSummary = obj;
        }
        this.AutoscalingGroupStatus = 'AutoscalingGroupStatus' in params ? params.AutoscalingGroupStatus : null;
        this.MaxNodesNum = 'MaxNodesNum' in params ? params.MaxNodesNum : null;
        this.MinNodesNum = 'MinNodesNum' in params ? params.MinNodesNum : null;
        this.DesiredNodesNum = 'DesiredNodesNum' in params ? params.DesiredNodesNum : null;
        this.NodePoolOs = 'NodePoolOs' in params ? params.NodePoolOs : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

    }
}

/**
 * kubernetes Taint
 * @class
 */
class Taint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key of Taint
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value of Taint
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Effect of Taint
         * @type {string || null}
         */
        this.Effect = null;

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
        this.Effect = 'Effect' in params ? params.Effect : null;

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
         * Attribute name. If more than one Filter exists, the logical relation between these Filters is `AND`.
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
 * DescribeHealthCheckPolicies request structure.
 * @class
 */
class DescribeHealthCheckPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ·  HealthCheckPolicyName
    Filter by [Health Check Policy Name].
    Type: String
        Required: No
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Maximum number of output entries. Default value: 20; maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeHealthCheckTemplate response structure.
 * @class
 */
class DescribeHealthCheckTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check policy template
         * @type {HealthCheckTemplate || null}
         */
        this.HealthCheckTemplate = null;

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

        if (params.HealthCheckTemplate) {
            let obj = new HealthCheckTemplate();
            obj.deserialize(params.HealthCheckTemplate)
            this.HealthCheckTemplate = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNodePool request structure.
 * @class
 */
class CreateNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Node pool name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Node pool type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Node Labels
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Node taint
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * Node tags
         * @type {Array.<TagSpecification> || null}
         */
        this.Tags = null;

        /**
         * Whether to enable deletion protection
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * Whether the node is unschedulable by default
         * @type {boolean || null}
         */
        this.Unschedulable = null;

        /**
         * Native node pool creation parameters
         * @type {CreateNativeNodePoolParam || null}
         */
        this.Native = null;

        /**
         * Node Annotation List
         * @type {Array.<Annotation> || null}
         */
        this.Annotations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagSpecification();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.Unschedulable = 'Unschedulable' in params ? params.Unschedulable : null;

        if (params.Native) {
            let obj = new CreateNativeNodePoolParam();
            obj.deserialize(params.Native)
            this.Native = obj;
        }

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new Annotation();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }

    }
}

/**
 * General node information
 * @class
 */
class RegularNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node configuration
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Auto scaling group ID
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.AutoscalingGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }
        this.AutoscalingGroupId = 'AutoscalingGroupId' in params ? params.AutoscalingGroupId : null;

    }
}

/**
 * DescribeHealthCheckPolicyBindings response structure.
 * @class
 */
class DescribeHealthCheckPolicyBindingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check rule array
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<HealthCheckPolicyBinding> || null}
         */
        this.HealthCheckPolicyBindings = null;

        /**
         * Number of health check rules
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.HealthCheckPolicyBindings) {
            this.HealthCheckPolicyBindings = new Array();
            for (let z in params.HealthCheckPolicyBindings) {
                let obj = new HealthCheckPolicyBinding();
                obj.deserialize(params.HealthCheckPolicyBindings[z]);
                this.HealthCheckPolicyBindings.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Native node pool information
 * @class
 */
class NativeNodePoolInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling configuration
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {MachineSetScaling || null}
         */
        this.Scaling = null;

        /**
         * Subnet list
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Security group list
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Automatic upgrade configuration
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {MachineUpgradeSettings || null}
         */
        this.UpgradeSettings = null;

        /**
         * Whether to enable self-healing capability
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.AutoRepair = null;

        /**
         * Node billing type
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Billing configuration of monthly subscription models
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * System disk configuration
         * @type {Disk || null}
         */
        this.SystemDisk = null;

        /**
         * Key ID list
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Machine system configuration
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {ManagementConfig || null}
         */
        this.Management = null;

        /**
         * Fault self-healing rule name
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.HealthCheckPolicyName = null;

        /**
         * hostname pattern string of native node pools
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.HostNamePattern = null;

        /**
         * kubelet custom parameters
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.KubeletArgs = null;

        /**
         * Predefined script
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {LifecycleConfig || null}
         */
        this.Lifecycle = null;

        /**
         * Runtime root directory
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RuntimeRootDir = null;

        /**
         * Whether to enable Auto Scaling (AS)
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.EnableAutoscaling = null;

        /**
         * List of models
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * Desired node count
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * Number of ready machines
         * @type {number || null}
         */
        this.ReadyReplicas = null;

        /**
         * Public network bandwidth configuration
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Data disk of native node pools
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Native node models: Native, NativeCVM
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.MachineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Scaling) {
            let obj = new MachineSetScaling();
            obj.deserialize(params.Scaling)
            this.Scaling = obj;
        }
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.UpgradeSettings) {
            let obj = new MachineUpgradeSettings();
            obj.deserialize(params.UpgradeSettings)
            this.UpgradeSettings = obj;
        }
        this.AutoRepair = 'AutoRepair' in params ? params.AutoRepair : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

        if (params.SystemDisk) {
            let obj = new Disk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

        if (params.Management) {
            let obj = new ManagementConfig();
            obj.deserialize(params.Management)
            this.Management = obj;
        }
        this.HealthCheckPolicyName = 'HealthCheckPolicyName' in params ? params.HealthCheckPolicyName : null;
        this.HostNamePattern = 'HostNamePattern' in params ? params.HostNamePattern : null;
        this.KubeletArgs = 'KubeletArgs' in params ? params.KubeletArgs : null;

        if (params.Lifecycle) {
            let obj = new LifecycleConfig();
            obj.deserialize(params.Lifecycle)
            this.Lifecycle = obj;
        }
        this.RuntimeRootDir = 'RuntimeRootDir' in params ? params.RuntimeRootDir : null;
        this.EnableAutoscaling = 'EnableAutoscaling' in params ? params.EnableAutoscaling : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.ReadyReplicas = 'ReadyReplicas' in params ? params.ReadyReplicas : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

    }
}

/**
 * DescribeNodePools request structure.
 * @class
 */
class DescribeNodePoolsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Query filter criteria:
·  NodePoolsName
    Filter by [Node Pool Name].
    Type: String
        Required: No



·  NodePoolsId
    Filter by [Node Pool id].
    Type: String
        Required: No



·  tags
    Filter by [Tag Key-value Pairs].
    Type: String
        Required: No



·  tag:tag-key
    Filter by [Tag Key-value Pairs].
    Type: String
        Required: No
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: 20; maximum value: 100.
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
 * Node pool information
 * @class
 */
class NodePool extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * Node tags
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<TagSpecification> || null}
         */
        this.Tags = null;

        /**
         * Node taint

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * Whether to enable deletion protection
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * Whether the node is unschedulable
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.Unschedulable = null;

        /**
         * Node pool type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Node Labels
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Node pool status
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Node pool name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Native node pool parameters
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {NativeNodePoolInfo || null}
         */
        this.Native = null;

        /**
         * Node annotation list

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<Annotation> || null}
         */
        this.Annotations = null;

        /**
         * Super node pool parameter, which has a value only when Type equals Super
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {SuperNodePoolInfo || null}
         */
        this.Super = null;

        /**
         * General node pool parameter, which has a value only when Type equals Regular
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {RegularNodePoolInfo || null}
         */
        this.Regular = null;

        /**
         * Third-party node pool parameter, which has a value only when Type equals External
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {ExternalNodePoolInfo || null}
         */
        this.External = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagSpecification();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.Unschedulable = 'Unschedulable' in params ? params.Unschedulable : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.LifeState = 'LifeState' in params ? params.LifeState : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Native) {
            let obj = new NativeNodePoolInfo();
            obj.deserialize(params.Native)
            this.Native = obj;
        }

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new Annotation();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }

        if (params.Super) {
            let obj = new SuperNodePoolInfo();
            obj.deserialize(params.Super)
            this.Super = obj;
        }

        if (params.Regular) {
            let obj = new RegularNodePoolInfo();
            obj.deserialize(params.Regular)
            this.Regular = obj;
        }

        if (params.External) {
            let obj = new ExternalNodePoolInfo();
            obj.deserialize(params.External)
            this.External = obj;
        }

    }
}

/**
 * DeleteNodePool request structure.
 * @class
 */
class DeleteNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;

    }
}

/**
 * Describes the configuration and related information of K8s cluster.
 * @class
 */
class InstanceAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * When the node is in the podCIDR size customization mode, you can specify the upper limit of the number of pods running on the node.
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.DesiredPodNumber = null;

        /**
         * base64 encoded user script, executed before initializing the node and currently effective only for adding existing nodes
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.PreStartUserScript = null;

        /**
         * Runtime description
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {RuntimeConfig || null}
         */
        this.RuntimeConfig = null;

        /**
         * Base64-encoded user script. This script is executed after the k8s components start running. Users must ensure the reenterable and retry logic of the script. The script and the log files generated by it can be viewed at the /data/ccs_userscript/ path of the node. If a node must be initialized before joining the scheduling, it can be used in conjunction with the unschedulable parameter. After initializing with userScript, add the command `kubectl uncordon nodename --kubeconfig=/root/.kube/config` to add the node to scheduling.

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UserScript = null;

        /**
         * Node-related custom parameter information.

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {InstanceExtraArgs || null}
         */
        this.ExtraArgs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DesiredPodNumber = 'DesiredPodNumber' in params ? params.DesiredPodNumber : null;
        this.PreStartUserScript = 'PreStartUserScript' in params ? params.PreStartUserScript : null;

        if (params.RuntimeConfig) {
            let obj = new RuntimeConfig();
            obj.deserialize(params.RuntimeConfig)
            this.RuntimeConfig = obj;
        }
        this.UserScript = 'UserScript' in params ? params.UserScript : null;

        if (params.ExtraArgs) {
            let obj = new InstanceExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }

    }
}

/**
 * Numerical structure
 * @class
 */
class IntOrString extends  AbstractModel {
    constructor(){
        super();

        /**
         * Numerical type, 0: int, 1: string
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Integer
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.IntVal = null;

        /**
         * String
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.StrVal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.IntVal = 'IntVal' in params ? params.IntVal : null;
        this.StrVal = 'StrVal' in params ? params.StrVal : null;

    }
}

/**
 * Third-party node pool information
 * @class
 */
class ExternalNodePoolInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Third-party node runtime configuration
         * @type {RuntimeConfig || null}
         */
        this.RuntimeConfig = null;

        /**
         * Number of nodes
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.NodesNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuntimeConfig) {
            let obj = new RuntimeConfig();
            obj.deserialize(params.RuntimeConfig)
            this.RuntimeConfig = obj;
        }
        this.NodesNum = 'NodesNum' in params ? params.NodesNum : null;

    }
}

/**
 * DescribeHealthCheckTemplate request structure.
 * @class
 */
class DescribeHealthCheckTemplateRequest extends  AbstractModel {
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
 * DescribeHealthCheckPolicies response structure.
 * @class
 */
class DescribeHealthCheckPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check policy array
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<HealthCheckPolicy> || null}
         */
        this.HealthCheckPolicies = null;

        /**
         * Total number of arrays
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.HealthCheckPolicies) {
            this.HealthCheckPolicies = new Array();
            for (let z in params.HealthCheckPolicies) {
                let obj = new HealthCheckPolicy();
                obj.deserialize(params.HealthCheckPolicies[z]);
                this.HealthCheckPolicies.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Health check template
 * @class
 */
class HealthCheckTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check item
         * @type {Array.<HealthCheckTemplateRule> || null}
         */
        this.Rules = null;

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
                let obj = new HealthCheckTemplateRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * Public network bandwidth
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bandwidth
         * @type {number || null}
         */
        this.MaxBandwidthOut = null;

        /**
         * Network billing method
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * Bandwidth package ID
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
        this.MaxBandwidthOut = 'MaxBandwidthOut' in params ? params.MaxBandwidthOut : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

    }
}

/**
 * ModifyHealthCheckPolicy request structure.
 * @class
 */
class ModifyHealthCheckPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Health check policy
         * @type {HealthCheckPolicy || null}
         */
        this.HealthCheckPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.HealthCheckPolicy) {
            let obj = new HealthCheckPolicy();
            obj.deserialize(params.HealthCheckPolicy)
            this.HealthCheckPolicy = obj;
        }

    }
}

/**
 * Super Node Information
 * @class
 */
class SuperNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Auto-renewal label
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Resource type
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * CPU specification of nodes (unit: cores).
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Total number of CPUs of Pods on nodes (unit: cores).
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.UsedCPU = null;

        /**
         * Memory specification of nodes (unit: Gi).
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Total memory of Pods on nodes (unit: Gi).
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.UsedMemory = null;

        /**
         * Availability zone

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Unique VPC ID
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet unique ID
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Effective time
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ActiveAt = null;

        /**
         * Expiration time

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ExpireAt = null;

        /**
         * Maximum schedulable CPU specification for a single Pod
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.MaxCPUScheduledPod = null;

        /**
         * Instance attributes
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.InstanceAttribute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.UsedCPU = 'UsedCPU' in params ? params.UsedCPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.UsedMemory = 'UsedMemory' in params ? params.UsedMemory : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ActiveAt = 'ActiveAt' in params ? params.ActiveAt : null;
        this.ExpireAt = 'ExpireAt' in params ? params.ExpireAt : null;
        this.MaxCPUScheduledPod = 'MaxCPUScheduledPod' in params ? params.MaxCPUScheduledPod : null;
        this.InstanceAttribute = 'InstanceAttribute' in params ? params.InstanceAttribute : null;

    }
}

/**
 * Nodes manually added
 * @class
 */
class ManuallyAdded extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of nodes being added
         * @type {number || null}
         */
        this.Joining = null;

        /**
         * Number of nodes being initialized
         * @type {number || null}
         */
        this.Initializing = null;

        /**
         * Number of normal nodes
         * @type {number || null}
         */
        this.Normal = null;

        /**
         * Total number of nodes
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Joining = 'Joining' in params ? params.Joining : null;
        this.Initializing = 'Initializing' in params ? params.Initializing : null;
        this.Normal = 'Normal' in params ? params.Normal : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * Management configuration of managed node pools
 * @class
 */
class ManagementConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * dns configuration
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.Nameservers = null;

        /**
         * hosts configuration
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * Kernel parameter configuration
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.KernelArgs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Nameservers = 'Nameservers' in params ? params.Nameservers : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;
        this.KernelArgs = 'KernelArgs' in params ? params.KernelArgs : null;

    }
}

/**
 * ModifyHealthCheckPolicy response structure.
 * @class
 */
class ModifyHealthCheckPolicyResponse extends  AbstractModel {
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
 * Sorting information
 * @class
 */
class SortBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sorting metrics
         * @type {string || null}
         */
        this.FieldName = null;

        /**
         * Sorting method
         * @type {string || null}
         */
        this.OrderType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FieldName = 'FieldName' in params ? params.FieldName : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;

    }
}

/**
 * Health check rules
 * @class
 */
class HealthCheckPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check policy name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of health check policy rules
         * @type {Array.<HealthCheckPolicyRule> || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new HealthCheckPolicyRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * Node system disk and data disk configuration
 * @class
 */
class Disk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk type
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Cloud disk size (GB)
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Whether to automatically format and mount disks.
         * @type {boolean || null}
         */
        this.AutoFormatAndMount = null;

        /**
         * File system
         * @type {string || null}
         */
        this.FileSystem = null;

        /**
         * Mounting directory
         * @type {string || null}
         */
        this.MountTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.AutoFormatAndMount = 'AutoFormatAndMount' in params ? params.AutoFormatAndMount : null;
        this.FileSystem = 'FileSystem' in params ? params.FileSystem : null;
        this.MountTarget = 'MountTarget' in params ? params.MountTarget : null;

    }
}

/**
 * CreateHealthCheckPolicy response structure.
 * @class
 */
class CreateHealthCheckPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check policy name
         * @type {string || null}
         */
        this.HealthCheckPolicyName = null;

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
        this.HealthCheckPolicyName = 'HealthCheckPolicyName' in params ? params.HealthCheckPolicyName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes the configuration and related information of k8s node data disk.
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk type
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * File system (ext3/ext4/xfs).

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.FileSystem = null;

        /**
         * Cloud disk size (GB)

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Whether to automatically format and mount disks.

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.AutoFormatAndMount = null;

        /**
         * Mount device name or partition name
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DiskPartition = null;

        /**
         * Mounting directory

Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.MountTarget = null;

        /**
         * This parameter is used to create an encrypted cloud disk, with the value fixed as ENCRYPT.
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Encrypt = null;

        /**
         * Custom key for purchasing encrypted disks. When this parameter is input, the Encrypt input parameter cannot be left empty.
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * Snapshot ID. If it is input, a cloud disk will be created based on this snapshot. The snapshot must be a data disk snapshot.
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Cloud disk performance (unit: MB/s), which can be used to purchase additional performance for cloud disks.
Note: This field may return "null", indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ThroughputPerformance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.FileSystem = 'FileSystem' in params ? params.FileSystem : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.AutoFormatAndMount = 'AutoFormatAndMount' in params ? params.AutoFormatAndMount : null;
        this.DiskPartition = 'DiskPartition' in params ? params.DiskPartition : null;
        this.MountTarget = 'MountTarget' in params ? params.MountTarget : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.ThroughputPerformance = 'ThroughputPerformance' in params ? params.ThroughputPerformance : null;

    }
}

module.exports = {
    NativeNodeInfo: NativeNodeInfo,
    HealthCheckTemplateRule: HealthCheckTemplateRule,
    HealthCheckPolicyRule: HealthCheckPolicyRule,
    DeleteHealthCheckPolicyRequest: DeleteHealthCheckPolicyRequest,
    CreateNodePoolResponse: CreateNodePoolResponse,
    CreateNativeNodePoolParam: CreateNativeNodePoolParam,
    DescribeNodePoolsResponse: DescribeNodePoolsResponse,
    ExternalNodeInfo: ExternalNodeInfo,
    DescribeClusterInstancesResponse: DescribeClusterInstancesResponse,
    AutoUpgradeOptions: AutoUpgradeOptions,
    AutoscalingAdded: AutoscalingAdded,
    Instance: Instance,
    DescribeHealthCheckPolicyBindingsRequest: DescribeHealthCheckPolicyBindingsRequest,
    NodeCountSummary: NodeCountSummary,
    SuperNodePoolInfo: SuperNodePoolInfo,
    RuntimeConfig: RuntimeConfig,
    Label: Label,
    HealthCheckPolicyBinding: HealthCheckPolicyBinding,
    CreateHealthCheckPolicyRequest: CreateHealthCheckPolicyRequest,
    InstanceExtraArgs: InstanceExtraArgs,
    MachineUpgradeSettings: MachineUpgradeSettings,
    UpdateNativeNodePoolParam: UpdateNativeNodePoolParam,
    InstanceChargePrepaid: InstanceChargePrepaid,
    DeleteNodePoolResponse: DeleteNodePoolResponse,
    Tag: Tag,
    MachineSetScaling: MachineSetScaling,
    ModifyNodePoolRequest: ModifyNodePoolRequest,
    Annotation: Annotation,
    DescribeClusterInstancesRequest: DescribeClusterInstancesRequest,
    DeleteHealthCheckPolicyResponse: DeleteHealthCheckPolicyResponse,
    TagSpecification: TagSpecification,
    LifecycleConfig: LifecycleConfig,
    ModifyNodePoolResponse: ModifyNodePoolResponse,
    RegularNodePoolInfo: RegularNodePoolInfo,
    Taint: Taint,
    Filter: Filter,
    DescribeHealthCheckPoliciesRequest: DescribeHealthCheckPoliciesRequest,
    DescribeHealthCheckTemplateResponse: DescribeHealthCheckTemplateResponse,
    CreateNodePoolRequest: CreateNodePoolRequest,
    RegularNodeInfo: RegularNodeInfo,
    DescribeHealthCheckPolicyBindingsResponse: DescribeHealthCheckPolicyBindingsResponse,
    NativeNodePoolInfo: NativeNodePoolInfo,
    DescribeNodePoolsRequest: DescribeNodePoolsRequest,
    NodePool: NodePool,
    DeleteNodePoolRequest: DeleteNodePoolRequest,
    InstanceAdvancedSettings: InstanceAdvancedSettings,
    IntOrString: IntOrString,
    ExternalNodePoolInfo: ExternalNodePoolInfo,
    DescribeHealthCheckTemplateRequest: DescribeHealthCheckTemplateRequest,
    DescribeHealthCheckPoliciesResponse: DescribeHealthCheckPoliciesResponse,
    HealthCheckTemplate: HealthCheckTemplate,
    InternetAccessible: InternetAccessible,
    ModifyHealthCheckPolicyRequest: ModifyHealthCheckPolicyRequest,
    SuperNodeInfo: SuperNodeInfo,
    ManuallyAdded: ManuallyAdded,
    ManagementConfig: ManagementConfig,
    ModifyHealthCheckPolicyResponse: ModifyHealthCheckPolicyResponse,
    SortBy: SortBy,
    HealthCheckPolicy: HealthCheckPolicy,
    Disk: Disk,
    CreateHealthCheckPolicyResponse: CreateHealthCheckPolicyResponse,
    DataDisk: DataDisk,

}
