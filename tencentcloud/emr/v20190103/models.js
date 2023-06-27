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
 * Other pod information.
 * @class
 */
class PodSpecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The specified information such as pod spec and source for scale-out with pod resources.
         * @type {PodNewSpec || null}
         */
        this.PodSpec = null;

        /**
         * The custom pod permission and parameter.
         * @type {PodNewParameter || null}
         */
        this.PodParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PodSpec) {
            let obj = new PodNewSpec();
            obj.deserialize(params.PodSpec)
            this.PodSpec = obj;
        }

        if (params.PodParameter) {
            let obj = new PodNewParameter();
            obj.deserialize(params.PodParameter)
            this.PodParameter = obj;
        }

    }
}

/**
 * ScaleOutInstance response structure.
 * @class
 */
class ScaleOutInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Order number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * Client token.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Scale-out workflow ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Big order ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Description of Pod storage.
 * @class
 */
class PodVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage type. Valid values: `pvc` and `hostpath`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VolumeType = null;

        /**
         * This field will take effect if `VolumeType` is `pvc`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PersistentVolumeContext || null}
         */
        this.PVCVolume = null;

        /**
         * This field will take effect if `VolumeType` is `hostpath`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {HostVolumeContext || null}
         */
        this.HostVolume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumeType = 'VolumeType' in params ? params.VolumeType : null;

        if (params.PVCVolume) {
            let obj = new PersistentVolumeContext();
            obj.deserialize(params.PVCVolume)
            this.PVCVolume = obj;
        }

        if (params.HostVolume) {
            let obj = new HostVolumeContext();
            obj.deserialize(params.HostVolume)
            this.HostVolume = obj;
        }

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
         * Instance ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateTasks request structure.
 * @class
 */
class TerminateTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of resource IDs of the node to be terminated. The resource ID is in the format of `emr-vm-xxxxxxxx`. A valid resource ID can be queried in the [console](https://console.cloud.tencent.com/emr/static/hardware).
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

    }
}

/**
 * Description of `HostPath` mounting method in the pod
 * @class
 */
class HostVolumeContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * The directory for mounting the host in the pod, which is the mount point of the host in the resource. A specified mount point corresponds to the host path and is used as the data storage directory in the pod.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VolumePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumePath = 'VolumePath' in params ? params.VolumePath : null;

    }
}

/**
 * ScaleOutCluster request structure.
 * @class
 */
class ScaleOutClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The node billing mode. Valid values:
<li>`POSTPAID_BY_HOUR`: The postpaid mode by hour.</li>
<li>`SPOTPAID`: The spot instance mode (for task nodes only).</li>
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * The cluster instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The type and number of nodes to be added.
         * @type {ScaleOutNodeConfig || null}
         */
        this.ScaleOutNodeConfig = null;

        /**
         * A unique random token, which is valid for 5 minutes and needs to be specified by the caller to prevent the client from repeatedly creating resources. An example value is `a9a90aa6-751a-41b6-aad6-fae36063280`.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * The details of the monthly subscription, including the instance period and auto-renewal. It is required if the `InstanceChargeType` is `PREPAID`.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * The [Bootstrap action](https://intl.cloud.tencent.com/document/product/589/35656?from_cn_redirect=1) script settings.
         * @type {Array.<ScriptBootstrapActionConfig> || null}
         */
        this.ScriptBootstrapActionConfig = null;

        /**
         * The services to be deployed for new nodes. By default, new nodes will inherit all services deployed for the current node type. Deployed services include default optional services. This parameter only supports optional services. For example, if `HDFS`, `YARN`, and `Impala` have been deployed for existing task nodes, only `HDFS` and `YARN` are passed in with this parameter if `Impala` is not deployed during the task node scale-out with API.
         * @type {Array.<number> || null}
         */
        this.SoftDeployInfo = null;

        /**
         * The processes to be deployed. All processes for services to be added are deployed by default. Deployed processes can be changed. For example, `HDFS`, `YARN`, and `Impala` have been deployed for current task nodes, and default services are `DataNode`, `NodeManager`, and `ImpalaServer`; if you want to change deployed processes, you can set this parameter to `DataNode,NodeManager,ImpalaServerCoordinator` or `DataNode,NodeManager,ImpalaServerExecutor`.
         * @type {Array.<number> || null}
         */
        this.ServiceNodeInfo = null;

        /**
         * The list of spread placement group IDs. Only one can be specified.
You can call the [DescribeDisasterRecoverGroups](https://intl.cloud.tencent.com/document/product/213/17810?from_cn_redirect=1) API and obtain this parameter from the `DisasterRecoverGroupId` field in the response.
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * The list of tags bound to added nodes.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * The type of resources to add. Valid values: `host` (general CVM resources) and `pod` (resources provided by a TKE or EKS cluster).
         * @type {string || null}
         */
        this.HardwareSourceType = null;

        /**
         * The pod resource information.
         * @type {PodSpecInfo || null}
         */
        this.PodSpecInfo = null;

        /**
         * The server group name selected for ClickHouse cluster scale-out.
         * @type {string || null}
         */
        this.ClickHouseClusterName = null;

        /**
         * The server group type selected for ClickHouse cluster scale-out. Valid values: `new` (create a group) and `old` (select an existing group).
         * @type {string || null}
         */
        this.ClickHouseClusterType = null;

        /**
         * The YARN node label specified for scale-out.
         * @type {string || null}
         */
        this.YarnNodeLabel = null;

        /**
         * Whether to start services after scale-out.
<li>`true`: Yes</li>
<li>`false` (default): No</li>
         * @type {boolean || null}
         */
        this.EnableStartServiceFlag = null;

        /**
         * The spec settings.
         * @type {NodeResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * The ID of the AZ where the instance resides, such as `ap-guangzhou-1`. You can call the [DescribeZones](https://intl.cloud.tencent.com/document/product/213/15707?from_cn_redirect=1) API and obtain this ID from the `Zone` field in the response.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The subnet, which defaults to the subnet used when the cluster is created.
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
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ScaleOutNodeConfig) {
            let obj = new ScaleOutNodeConfig();
            obj.deserialize(params.ScaleOutNodeConfig)
            this.ScaleOutNodeConfig = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

        if (params.ScriptBootstrapActionConfig) {
            this.ScriptBootstrapActionConfig = new Array();
            for (let z in params.ScriptBootstrapActionConfig) {
                let obj = new ScriptBootstrapActionConfig();
                obj.deserialize(params.ScriptBootstrapActionConfig[z]);
                this.ScriptBootstrapActionConfig.push(obj);
            }
        }
        this.SoftDeployInfo = 'SoftDeployInfo' in params ? params.SoftDeployInfo : null;
        this.ServiceNodeInfo = 'ServiceNodeInfo' in params ? params.ServiceNodeInfo : null;
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.HardwareSourceType = 'HardwareSourceType' in params ? params.HardwareSourceType : null;

        if (params.PodSpecInfo) {
            let obj = new PodSpecInfo();
            obj.deserialize(params.PodSpecInfo)
            this.PodSpecInfo = obj;
        }
        this.ClickHouseClusterName = 'ClickHouseClusterName' in params ? params.ClickHouseClusterName : null;
        this.ClickHouseClusterType = 'ClickHouseClusterType' in params ? params.ClickHouseClusterType : null;
        this.YarnNodeLabel = 'YarnNodeLabel' in params ? params.YarnNodeLabel : null;
        this.EnableStartServiceFlag = 'EnableStartServiceFlag' in params ? params.EnableStartServiceFlag : null;

        if (params.ResourceSpec) {
            let obj = new NodeResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * Node disk information
 * @class
 */
class DiskSpecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of disks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The system disk type. Valid values:
<li>`CLOUD_SSD`: Cloud SSD</li>
<li>`CLOUD_PREMIUM`: Premium cloud disk</li>
<li>`CLOUD_BASIC`: Cloud HDD</li>
<li>`LOCAL_BASIC`: Local disk</li>
<li>`LOCAL_SSD`: Local SSD</li>

The data disk type. Valid values:
<li>`CLOUD_SSD`: Cloud SSD</li>
<li>`CLOUD_PREMIUM`: Premium cloud disk</li>
<li>`CLOUD_BASIC`: Cloud HDD</li>
<li>`LOCAL_BASIC`: Local disk</li>
<li>`LOCAL_SSD`: Local SSD</li>
<li>`CLOUD_HSSD`: Enhanced SSD</li>
<li>`CLOUD_THROUGHPUT`: Throughput HDD</li>
<li>CLOUD_TSSD: ulTra SSD</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * The disk capacity in GB.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * DescribeEmrApplicationStatics request structure.
 * @class
 */
class DescribeEmrApplicationStaticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time in the format of timestamp. Unit: seconds.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time in the format of timestamp. Unit: seconds.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Queue name used for filtering
         * @type {Array.<string> || null}
         */
        this.Queues = null;

        /**
         * Username used for filtering
         * @type {Array.<string> || null}
         */
        this.Users = null;

        /**
         * Application type used for filtering
         * @type {Array.<string> || null}
         */
        this.ApplicationTypes = null;

        /**
         * Group field. Valid values: `queue`, `user`, and `applicationType`.
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

        /**
         * Sorting field. Valid values: `sumMemorySeconds`, `sumVCoreSeconds`, `sumHDFSBytesWritten`, and `sumHDFSBytesRead`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Order type. Valid values: `0` (descending) and `1`(ascending).
         * @type {number || null}
         */
        this.IsAsc = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page limit
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Queues = 'Queues' in params ? params.Queues : null;
        this.Users = 'Users' in params ? params.Users : null;
        this.ApplicationTypes = 'ApplicationTypes' in params ? params.ApplicationTypes : null;
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.IsAsc = 'IsAsc' in params ? params.IsAsc : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * User management list filter
 * @class
 */
class UserManagerFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * Pod floating specification
 * @class
 */
class DynamicPodSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum number of CPUs
         * @type {number || null}
         */
        this.RequestCpu = null;

        /**
         * Maximum number of CPUs
         * @type {number || null}
         */
        this.LimitCpu = null;

        /**
         * Minimum memory in MB
         * @type {number || null}
         */
        this.RequestMemory = null;

        /**
         * Maximum memory in MB
         * @type {number || null}
         */
        this.LimitMemory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestCpu = 'RequestCpu' in params ? params.RequestCpu : null;
        this.LimitCpu = 'LimitCpu' in params ? params.LimitCpu : null;
        this.RequestMemory = 'RequestMemory' in params ? params.RequestMemory : null;
        this.LimitMemory = 'LimitMemory' in params ? params.LimitMemory : null;

    }
}

/**
 * COS-related configuration
 * @class
 */
class COSSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS `SecretId`
         * @type {string || null}
         */
        this.CosSecretId = null;

        /**
         * COS `SecrectKey`
         * @type {string || null}
         */
        this.CosSecretKey = null;

        /**
         * COS path to log
         * @type {string || null}
         */
        this.LogOnCosPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosSecretId = 'CosSecretId' in params ? params.CosSecretId : null;
        this.CosSecretKey = 'CosSecretKey' in params ? params.CosSecretKey : null;
        this.LogOnCosPath = 'LogOnCosPath' in params ? params.LogOnCosPath : null;

    }
}

/**
 * Cluster instance information
 * @class
 */
class ClusterInstancesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Cluster ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Title
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ftitle = null;

        /**
         * Cluster name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Region ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * User APPID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * User UIN
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Project ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Cluster `VPCID`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * Instance status code. Value range:
<li>2: cluster running</li>
<li>3: creating cluster.</li>
<li>4: scaling out cluster.</li>
<li>5: adding router node in cluster.</li>
<li>6: installing component in cluster.</li>
<li>7: cluster executing command.</li>
<li>8: restarting service.</li>
<li>9: entering maintenance.</li>
<li>10: suspending service.</li>
<li>11: exiting maintenance.</li>
<li>12: exiting suspension.</li>
<li>13: delivering configuration.</li>
<li>14: terminating cluster.</li>
<li>15: terminating core node.</li>
<li>16: terminating task node.</li>
<li>17: terminating router node.</li>
<li>18: changing webproxy password.</li>
<li>19: isolating cluster.</li>
<li>20: resuming cluster.</li>
<li>21: repossessing cluster.</li>
<li>22: waiting for configuration adjustment.</li>
<li>23: cluster isolated.</li>
<li>24: removing node.</li>
<li>33: waiting for refund.</li>
<li>34: refunded.</li>
<li>301: creation failed.</li>
<li>302: scale-out failed.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Execution duration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RunTime = null;

        /**
         * Cluster product configuration information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {EmrProductConfigOutter || null}
         */
        this.Config = null;

        /**
         * Public IP of master node
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MasterIp = null;

        /**
         * EMR version
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EmrVersion = null;

        /**
         * Billing mode
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * Transaction version
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TradeVersion = null;

        /**
         * Resource order ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ResourceOrderId = null;

        /**
         * Whether this is a paid cluster
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsTradeCluster = null;

        /**
         * Alarm information for cluster error
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AlarmInfo = null;

        /**
         * Whether the new architecture is used
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsWoodpeckerCluster = null;

        /**
         * Metadatabase information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MetaDb = null;

        /**
         * Tag information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Hive metadata
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HiveMetaDb = null;

        /**
         * Cluster type: EMR, CLICKHOUSE, DRUID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceClass = null;

        /**
         * Alias serialization of all nodes in cluster
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AliasInfo = null;

        /**
         * Cluster version ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * Availability zone
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Scenario name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * Scenario-based cluster type
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SceneServiceClass = null;

        /**
         * Scenario-based EMR version
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SceneEmrVersion = null;

        /**
         * Scenario-based cluster type
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * VPC name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Subnet name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * Cluster dependency
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<ClusterExternalServiceInfo> || null}
         */
        this.ClusterExternalServiceInfo = null;

        /**
         * The VPC ID string type of the cluster
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * The subnet ID string type of the cluster
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Node information
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<TopologyInfo> || null}
         */
        this.TopologyInfoList = null;

        /**
         * Multi-AZ cluster
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsMultiZoneCluster = null;

        /**
         * Whether the feature of automatic abnormal node replacement is enabled.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsCvmReplace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Ftitle = 'Ftitle' in params ? params.Ftitle : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.RunTime = 'RunTime' in params ? params.RunTime : null;

        if (params.Config) {
            let obj = new EmrProductConfigOutter();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.MasterIp = 'MasterIp' in params ? params.MasterIp : null;
        this.EmrVersion = 'EmrVersion' in params ? params.EmrVersion : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.TradeVersion = 'TradeVersion' in params ? params.TradeVersion : null;
        this.ResourceOrderId = 'ResourceOrderId' in params ? params.ResourceOrderId : null;
        this.IsTradeCluster = 'IsTradeCluster' in params ? params.IsTradeCluster : null;
        this.AlarmInfo = 'AlarmInfo' in params ? params.AlarmInfo : null;
        this.IsWoodpeckerCluster = 'IsWoodpeckerCluster' in params ? params.IsWoodpeckerCluster : null;
        this.MetaDb = 'MetaDb' in params ? params.MetaDb : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.HiveMetaDb = 'HiveMetaDb' in params ? params.HiveMetaDb : null;
        this.ServiceClass = 'ServiceClass' in params ? params.ServiceClass : null;
        this.AliasInfo = 'AliasInfo' in params ? params.AliasInfo : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SceneName = 'SceneName' in params ? params.SceneName : null;
        this.SceneServiceClass = 'SceneServiceClass' in params ? params.SceneServiceClass : null;
        this.SceneEmrVersion = 'SceneEmrVersion' in params ? params.SceneEmrVersion : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;

        if (params.ClusterExternalServiceInfo) {
            this.ClusterExternalServiceInfo = new Array();
            for (let z in params.ClusterExternalServiceInfo) {
                let obj = new ClusterExternalServiceInfo();
                obj.deserialize(params.ClusterExternalServiceInfo[z]);
                this.ClusterExternalServiceInfo.push(obj);
            }
        }
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;

        if (params.TopologyInfoList) {
            this.TopologyInfoList = new Array();
            for (let z in params.TopologyInfoList) {
                let obj = new TopologyInfo();
                obj.deserialize(params.TopologyInfoList[z]);
                this.TopologyInfoList.push(obj);
            }
        }
        this.IsMultiZoneCluster = 'IsMultiZoneCluster' in params ? params.IsMultiZoneCluster : null;
        this.IsCvmReplace = 'IsCvmReplace' in params ? params.IsCvmReplace : null;

    }
}

/**
 * ScaleOutInstance request structure.
 * @class
 */
class ScaleOutInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time unit of scale-out. Valid values:
<li>s: Second. When `PayMode` is 0, `TimeUnit` can only be `s`.</li>
<li>m: Month. When `PayMode` is 1, `TimeUnit` can only be `m`.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Time span of scale-out, which needs to be used together with `TimeUnit`.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance billing mode. Valid value:
<li>0: Pay-as-you-go.</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Client token.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Bootstrap script settings.
         * @type {Array.<PreExecuteFileSettings> || null}
         */
        this.PreExecutedFileSettings = null;

        /**
         * Number of task nodes to be added.
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * Number of core nodes to be added.
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * Processes unnecessary for scale-out.
         * @type {Array.<number> || null}
         */
        this.UnNecessaryNodeList = null;

        /**
         * Number of router nodes to be added.
         * @type {number || null}
         */
        this.RouterCount = null;

        /**
         * Deployed service.
<li>`SoftDeployInfo` and `ServiceNodeInfo` are in the same group and mutually exclusive with `UnNecessaryNodeList`.</li>
<li>The combination of `SoftDeployInfo` and `ServiceNodeInfo` is recommended.</li>
         * @type {Array.<number> || null}
         */
        this.SoftDeployInfo = null;

        /**
         * Started process.
         * @type {Array.<number> || null}
         */
        this.ServiceNodeInfo = null;

        /**
         * List of spread placement group IDs. Only one can be specified currently.
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * List of tags bound to added nodes.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Resource type selected for scaling. Valid values: `host` (general CVM resource) and `pod` (resource provided by TKE or EKS cluster).
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * Specified information such as pod specification and source for scale-out with pod resources.
         * @type {PodSpec || null}
         */
        this.PodSpec = null;

        /**
         * Server group name selected for ClickHouse cluster scale-out.
         * @type {string || null}
         */
        this.ClickHouseClusterName = null;

        /**
         * Server group type selected for ClickHouse cluster scale-out. Valid values: `new` (create a group) and `old` (select an existing group).
         * @type {string || null}
         */
        this.ClickHouseClusterType = null;

        /**
         * Yarn node label specified for rule-based scale-out.
         * @type {string || null}
         */
        this.YarnNodeLabel = null;

        /**
         * Custom pod permission and parameter
         * @type {PodParameter || null}
         */
        this.PodParameter = null;

        /**
         * Number of master nodes to be added.
When a ClickHouse cluster is scaled, this parameter does not take effect.
When a Kafka cluster is scaled, this parameter does not take effect.
When `HardwareResourceType` is `pod`, this parameter does not take effect.
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * Whether to start the service after scale-out. `true`: Yes; `false`: No.
         * @type {string || null}
         */
        this.StartServiceAfterScaleOut = null;

        /**
         * AZ, which defaults to the primary AZ of the cluster.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Subnet, which defaults to the subnet used when the cluster is created.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Pre-defined configuration set
         * @type {string || null}
         */
        this.ScaleOutServiceConfAssign = null;

        /**
         * Whether to enable auto-renewal. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.AutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.PreExecutedFileSettings) {
            this.PreExecutedFileSettings = new Array();
            for (let z in params.PreExecutedFileSettings) {
                let obj = new PreExecuteFileSettings();
                obj.deserialize(params.PreExecutedFileSettings[z]);
                this.PreExecutedFileSettings.push(obj);
            }
        }
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.UnNecessaryNodeList = 'UnNecessaryNodeList' in params ? params.UnNecessaryNodeList : null;
        this.RouterCount = 'RouterCount' in params ? params.RouterCount : null;
        this.SoftDeployInfo = 'SoftDeployInfo' in params ? params.SoftDeployInfo : null;
        this.ServiceNodeInfo = 'ServiceNodeInfo' in params ? params.ServiceNodeInfo : null;
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.HardwareResourceType = 'HardwareResourceType' in params ? params.HardwareResourceType : null;

        if (params.PodSpec) {
            let obj = new PodSpec();
            obj.deserialize(params.PodSpec)
            this.PodSpec = obj;
        }
        this.ClickHouseClusterName = 'ClickHouseClusterName' in params ? params.ClickHouseClusterName : null;
        this.ClickHouseClusterType = 'ClickHouseClusterType' in params ? params.ClickHouseClusterType : null;
        this.YarnNodeLabel = 'YarnNodeLabel' in params ? params.YarnNodeLabel : null;

        if (params.PodParameter) {
            let obj = new PodParameter();
            obj.deserialize(params.PodParameter)
            this.PodParameter = obj;
        }
        this.MasterCount = 'MasterCount' in params ? params.MasterCount : null;
        this.StartServiceAfterScaleOut = 'StartServiceAfterScaleOut' in params ? params.StartServiceAfterScaleOut : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ScaleOutServiceConfAssign = 'ScaleOutServiceConfAssign' in params ? params.ScaleOutServiceConfAssign : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * Price details by AZ, used for creating the cluster price list
 * @class
 */
class ZoneDetailPriceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Price details by node
         * @type {Array.<NodeDetailPriceResult> || null}
         */
        this.NodeDetailPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.NodeDetailPrice) {
            this.NodeDetailPrice = new Array();
            for (let z in params.NodeDetailPrice) {
                let obj = new NodeDetailPriceResult();
                obj.deserialize(params.NodeDetailPrice[z]);
                this.NodeDetailPrice.push(obj);
            }
        }

    }
}

/**
 * Resource descriptions for container resource scale-out
 * @class
 */
class PodNewSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * The identifier of an external resource provider, such as "cls-a1cd23fa".
         * @type {string || null}
         */
        this.ResourceProviderIdentifier = null;

        /**
         * The type of the external resource provider, such as "tke". Currently, only "tke" is supported.
         * @type {string || null}
         */
        this.ResourceProviderType = null;

        /**
         * The purpose of the resource, which means the node type and can only be "TASK".
         * @type {string || null}
         */
        this.NodeFlag = null;

        /**
         * The number of CPUs.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * The memory size in GB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * The EKS cluster - CPU type. Valid values: `intel` and `amd`.
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * The data directory mounting information of the pod node.
         * @type {Array.<PodVolume> || null}
         */
        this.PodVolumes = null;

        /**
         * Whether the dynamic spec is used. Valid values:
<li>`true`: Yes</li>
<li>`false` (default): No</li>
         * @type {boolean || null}
         */
        this.EnableDynamicSpecFlag = null;

        /**
         * The dynamic spec.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DynamicPodSpec || null}
         */
        this.DynamicPodSpec = null;

        /**
         * The unique VPC ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The unique VPC subnet ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The pod name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PodName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceProviderIdentifier = 'ResourceProviderIdentifier' in params ? params.ResourceProviderIdentifier : null;
        this.ResourceProviderType = 'ResourceProviderType' in params ? params.ResourceProviderType : null;
        this.NodeFlag = 'NodeFlag' in params ? params.NodeFlag : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;

        if (params.PodVolumes) {
            this.PodVolumes = new Array();
            for (let z in params.PodVolumes) {
                let obj = new PodVolume();
                obj.deserialize(params.PodVolumes[z]);
                this.PodVolumes.push(obj);
            }
        }
        this.EnableDynamicSpecFlag = 'EnableDynamicSpecFlag' in params ? params.EnableDynamicSpecFlag : null;

        if (params.DynamicPodSpec) {
            let obj = new DynamicPodSpec();
            obj.deserialize(params.DynamicPodSpec)
            this.DynamicPodSpec = obj;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PodName = 'PodName' in params ? params.PodName : null;

    }
}

/**
 * Resource details
 * @class
 */
class NodeResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * The spec type, such as `S2.MEDIUM8`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * The system disk, which can be up to 1 PCS.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DiskSpecInfo> || null}
         */
        this.SystemDisk = null;

        /**
         * The list of tags to be bound.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * The cloud data disk, which can be up to 15 PCS.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DiskSpecInfo> || null}
         */
        this.DataDisk = null;

        /**
         * The local data disk.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DiskSpecInfo> || null}
         */
        this.LocalDataDisk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.SystemDisk) {
            this.SystemDisk = new Array();
            for (let z in params.SystemDisk) {
                let obj = new DiskSpecInfo();
                obj.deserialize(params.SystemDisk[z]);
                this.SystemDisk.push(obj);
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

        if (params.DataDisk) {
            this.DataDisk = new Array();
            for (let z in params.DataDisk) {
                let obj = new DiskSpecInfo();
                obj.deserialize(params.DataDisk[z]);
                this.DataDisk.push(obj);
            }
        }

        if (params.LocalDataDisk) {
            this.LocalDataDisk = new Array();
            for (let z in params.LocalDataDisk) {
                let obj = new DiskSpecInfo();
                obj.deserialize(params.LocalDataDisk[z]);
                this.LocalDataDisk.push(obj);
            }
        }

    }
}

/**
 * ModifyResourceScheduleConfig response structure.
 * @class
 */
class ModifyResourceScheduleConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `true`: Draft, indicating the resource pool is not refreshed.
         * @type {boolean || null}
         */
        this.IsDraft = null;

        /**
         * Verification error information. If it is not null, the verification fails and thus the configuration fails.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * The response data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Data = null;

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
        this.IsDraft = 'IsDraft' in params ? params.IsDraft : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cluster node topology information
 * @class
 */
class TopologyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * AZ information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Subnet information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<SubnetInfo> || null}
         */
        this.SubnetInfoList = null;

        /**
         * Node information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<ShortNodeInfo> || null}
         */
        this.NodeInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SubnetInfoList) {
            this.SubnetInfoList = new Array();
            for (let z in params.SubnetInfoList) {
                let obj = new SubnetInfo();
                obj.deserialize(params.SubnetInfoList[z]);
                this.SubnetInfoList.push(obj);
            }
        }

        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new ShortNodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }

    }
}

/**
 * Price details by node, used for creating the cluster price list
 * @class
 */
class NodeDetailPriceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The node type. Valid values: `master`, `core`, `task`, `common`, `router`, `mysql`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Price details by node part
         * @type {Array.<PartDetailPriceItem> || null}
         */
        this.PartDetailPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;

        if (params.PartDetailPrice) {
            this.PartDetailPrice = new Array();
            for (let z in params.PartDetailPrice) {
                let obj = new PartDetailPriceItem();
                obj.deserialize(params.PartDetailPrice[z]);
                this.PartDetailPrice.push(obj);
            }
        }

    }
}

/**
 * Tag
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
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
 * Returned cluster list sample
 * @class
 */
class EmrListInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Status description
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster region
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * User APPID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Running time
         * @type {string || null}
         */
        this.RunTime = null;

        /**
         * Cluster IP
         * @type {string || null}
         */
        this.MasterIp = null;

        /**
         * Cluster version
         * @type {string || null}
         */
        this.EmrVersion = null;

        /**
         * Cluster billing mode
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * EMR ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Product ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * Project ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Region
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Subnet ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * VPC ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Region
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Status code
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance tag
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Alarm information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.AlarmInfo = null;

        /**
         * Whether it is a Woodpecker cluster
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.IsWoodpeckerCluster = null;

        /**
         * VPC name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Subnet name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * VPC ID string
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Subnet ID string
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Cluster type
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ClusterClass = null;

        /**
         * Whether it is a multi-AZ cluster
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.IsMultiZoneCluster = null;

        /**
         * Whether it is a manually deployed cluster
Note: This field may return null, indicating that no valid value can be obtained. 
         * @type {boolean || null}
         */
        this.IsHandsCluster = null;

        /**
         * Client component information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SoftDependInfo> || null}
         */
        this.OutSideSoftInfo = null;

        /**
         * Whether the current cluster supports external clients.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsSupportOutsideCluster = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.RunTime = 'RunTime' in params ? params.RunTime : null;
        this.MasterIp = 'MasterIp' in params ? params.MasterIp : null;
        this.EmrVersion = 'EmrVersion' in params ? params.EmrVersion : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AlarmInfo = 'AlarmInfo' in params ? params.AlarmInfo : null;
        this.IsWoodpeckerCluster = 'IsWoodpeckerCluster' in params ? params.IsWoodpeckerCluster : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.ClusterClass = 'ClusterClass' in params ? params.ClusterClass : null;
        this.IsMultiZoneCluster = 'IsMultiZoneCluster' in params ? params.IsMultiZoneCluster : null;
        this.IsHandsCluster = 'IsHandsCluster' in params ? params.IsHandsCluster : null;

        if (params.OutSideSoftInfo) {
            this.OutSideSoftInfo = new Array();
            for (let z in params.OutSideSoftInfo) {
                let obj = new SoftDependInfo();
                obj.deserialize(params.OutSideSoftInfo[z]);
                this.OutSideSoftInfo.push(obj);
            }
        }
        this.IsSupportOutsideCluster = 'IsSupportOutsideCluster' in params ? params.IsSupportOutsideCluster : null;

    }
}

/**
 * AddUsersForUserManager response structure.
 * @class
 */
class AddUsersForUserManagerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user list that is successfully added
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.SuccessUserList = null;

        /**
         * The user list that is not successfully added
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.FailedUserList = null;

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
        this.SuccessUserList = 'SuccessUserList' in params ? params.SuccessUserList : null;
        this.FailedUserList = 'FailedUserList' in params ? params.FailedUserList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EMR product configuration
 * @class
 */
class EmrProductConfigOutter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Software information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SoftInfo = null;

        /**
         * Number of master nodes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MasterNodeSize = null;

        /**
         * Number of core nodes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CoreNodeSize = null;

        /**
         * Number of task nodes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskNodeSize = null;

        /**
         * Number of common nodes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ComNodeSize = null;

        /**
         * Master node resource
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OutterResource || null}
         */
        this.MasterResource = null;

        /**
         * Core node resource
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OutterResource || null}
         */
        this.CoreResource = null;

        /**
         * Task node resource
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OutterResource || null}
         */
        this.TaskResource = null;

        /**
         * Common node resource
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OutterResource || null}
         */
        this.ComResource = null;

        /**
         * Whether COS is used
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.OnCos = null;

        /**
         * Billing mode
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * Number of router nodes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RouterNodeSize = null;

        /**
         * Whether HA is supported
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.SupportHA = null;

        /**
         * Whether secure mode is supported
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.SecurityOn = null;

        /**
         * Security group name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * Whether to enable CBS encryption
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CbsEncrypt = null;

        /**
         * Custom application role
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ApplicationRole = null;

        /**
         * Security groups
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

        /**
         * SSH key ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SoftInfo = 'SoftInfo' in params ? params.SoftInfo : null;
        this.MasterNodeSize = 'MasterNodeSize' in params ? params.MasterNodeSize : null;
        this.CoreNodeSize = 'CoreNodeSize' in params ? params.CoreNodeSize : null;
        this.TaskNodeSize = 'TaskNodeSize' in params ? params.TaskNodeSize : null;
        this.ComNodeSize = 'ComNodeSize' in params ? params.ComNodeSize : null;

        if (params.MasterResource) {
            let obj = new OutterResource();
            obj.deserialize(params.MasterResource)
            this.MasterResource = obj;
        }

        if (params.CoreResource) {
            let obj = new OutterResource();
            obj.deserialize(params.CoreResource)
            this.CoreResource = obj;
        }

        if (params.TaskResource) {
            let obj = new OutterResource();
            obj.deserialize(params.TaskResource)
            this.TaskResource = obj;
        }

        if (params.ComResource) {
            let obj = new OutterResource();
            obj.deserialize(params.ComResource)
            this.ComResource = obj;
        }
        this.OnCos = 'OnCos' in params ? params.OnCos : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.RouterNodeSize = 'RouterNodeSize' in params ? params.RouterNodeSize : null;
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.SecurityOn = 'SecurityOn' in params ? params.SecurityOn : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.CbsEncrypt = 'CbsEncrypt' in params ? params.CbsEncrypt : null;
        this.ApplicationRole = 'ApplicationRole' in params ? params.ApplicationRole : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;
        this.PublicKeyId = 'PublicKeyId' in params ? params.PublicKeyId : null;

    }
}

/**
 * DescribeInstancesList response structure.
 * @class
 */
class DescribeInstancesListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * Cluster instance list.
         * @type {Array.<EmrListInstance> || null}
         */
        this.InstancesList = null;

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
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.InstancesList) {
            this.InstancesList = new Array();
            for (let z in params.InstancesList) {
                let obj = new EmrListInstance();
                obj.deserialize(params.InstancesList[z]);
                this.InstancesList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateTasks response structure.
 * @class
 */
class TerminateTasksResponse extends  AbstractModel {
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
 * Price details by node part, used for creating the cluster price list
 * @class
 */
class PartDetailPriceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type. Valid values: `node` (node); `rootDisk` (system disk); `dataDisk` and `metaDB` (cloud data disk)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Rate (original)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Rate (discounted)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealCost = null;

        /**
         * Total price (discounted)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * Discount
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * Quantity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.GoodsNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RealCost = 'RealCost' in params ? params.RealCost : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;

    }
}

/**
 * Shared component information
 * @class
 */
class DependService extends  AbstractModel {
    constructor(){
        super();

        /**
         * The shared component name.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * The cluster to which the shared component belongs.
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
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Resource description for container resource scale-out
 * @class
 */
class PodSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identifier of external resource provider, such as "cls-a1cd23fa".
         * @type {string || null}
         */
        this.ResourceProviderIdentifier = null;

        /**
         * Type of external resource provider, such as "tke". Currently, only "tke" is supported.
         * @type {string || null}
         */
        this.ResourceProviderType = null;

        /**
         * Purpose of the resource, which means the node type and can only be "TASK".
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Number of CPUs
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size in GB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Mount point of resources for the host. A specified mount point corresponds to the host path and is used as the data storage directory in the pod. (This parameter has been disused)
         * @type {Array.<string> || null}
         */
        this.DataVolumes = null;

        /**
         * EKS cluster - CPU type. Valid values: `intel` and `amd`.
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * Data directory mounting information of the pod node.
         * @type {Array.<PodVolume> || null}
         */
        this.PodVolumes = null;

        /**
         * Whether floating specification is used. `1`: Yes; `0`: No.
         * @type {number || null}
         */
        this.IsDynamicSpec = null;

        /**
         * Floating specification
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DynamicPodSpec || null}
         */
        this.DynamicPodSpec = null;

        /**
         * Unique VPC ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Unique VPC subnet ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * pod name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PodName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceProviderIdentifier = 'ResourceProviderIdentifier' in params ? params.ResourceProviderIdentifier : null;
        this.ResourceProviderType = 'ResourceProviderType' in params ? params.ResourceProviderType : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DataVolumes = 'DataVolumes' in params ? params.DataVolumes : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;

        if (params.PodVolumes) {
            this.PodVolumes = new Array();
            for (let z in params.PodVolumes) {
                let obj = new PodVolume();
                obj.deserialize(params.PodVolumes[z]);
                this.PodVolumes.push(obj);
            }
        }
        this.IsDynamicSpec = 'IsDynamicSpec' in params ? params.IsDynamicSpec : null;

        if (params.DynamicPodSpec) {
            let obj = new DynamicPodSpec();
            obj.deserialize(params.DynamicPodSpec)
            this.DynamicPodSpec = obj;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PodName = 'PodName' in params ? params.PodName : null;

    }
}

/**
 * InquiryPriceRenewInstance response structure.
 * @class
 */
class InquiryPriceRenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * Unit of time for instance renewal.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * How long the instance will be renewed for.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeSpan = null;

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
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateInstance response structure.
 * @class
 */
class InquiryPriceCreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * Time unit of instance purchase duration. Valid values:
<li>s: seconds.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Purchase duration of instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * The price list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ZoneDetailPriceResult> || null}
         */
        this.PriceList = null;

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
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;

        if (params.PriceList) {
            this.PriceList = new Array();
            for (let z in params.PriceList) {
                let obj = new ZoneDetailPriceResult();
                obj.deserialize(params.PriceList[z]);
                this.PriceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartStopServiceOrMonitor request structure.
 * @class
 */
class StartStopServiceOrMonitorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The operation type. Valid values:
<li>StartService: Start service</li>
<li>StopService: Stop service</li>
<li>StartMonitor: Start maintenance</li>
<li>StopMonitor: Stop maintenance</li>
<li>RestartService: Restart service. If this type is selected, "StrategyConfig" is required.</li>
         * @type {string || null}
         */
        this.OpType = null;

        /**
         * The operation scope.
         * @type {OpScope || null}
         */
        this.OpScope = null;

        /**
         * The operation policy.
         * @type {StrategyConfig || null}
         */
        this.StrategyConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OpType = 'OpType' in params ? params.OpType : null;

        if (params.OpScope) {
            let obj = new OpScope();
            obj.deserialize(params.OpScope)
            this.OpScope = obj;
        }

        if (params.StrategyConfig) {
            let obj = new StrategyConfig();
            obj.deserialize(params.StrategyConfig)
            this.StrategyConfig = obj;
        }

    }
}

/**
 * TerminateInstance request structure.
 * @class
 */
class TerminateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID of terminated node. This parameter is reserved and does not need to be configured.
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

    }
}

/**
 * DescribeResourceSchedule request structure.
 * @class
 */
class DescribeResourceScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EMR cluster ID
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Location information of cluster instance
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the availability zone where the instance resides, such as `ap-guangzhou-1`. You can call the [DescribeZones](https://intl.cloud.tencent.com/document/product/213/15707?from_cn_redirect=1) API and obtain this ID from the `Zone` field in the response.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Project ID of the instance. If no ID is passed in, the default project ID is used.
         * @type {number || null}
         */
        this.ProjectId = null;

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

    }
}

/**
 * Custom pod permission and parameter
 * @class
 */
class PodParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of TKE or EKS cluster
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Custom permissions
Example:
{
  "apiVersion": "v1",
  "Clusters": [
    {
      "cluster": {
        "certificate-authority-data": "xxxxxx==",
        "server": "https://xxxxx.com"
      },
      "name": "cls-xxxxx"
    }
  ],
  "contexts": [
    {
      "context": {
        "cluster": "cls-xxxxx",
        "user": "100014xxxxx"
      },
      "name": "cls-a44yhcxxxxxxxxxx"
    }
  ],
  "current-context": "cls-a4xxxx-context-default",
  "kind": "Config",
  "preferences": {},
  "users": [
    {
      "name": "100014xxxxx",
      "user": {
        "client-certificate-data": "xxxxxx",
        "client-key-data": "xxxxxx"
      }
    }
  ]
}
         * @type {string || null}
         */
        this.Config = null;

        /**
         * Custom parameters
Example:
{
    "apiVersion": "apps/v1",
    "kind": "Deployment",
    "metadata": {
      "name": "test-deployment",
      "labels": {
        "app": "test"
      }
    },
    "spec": {
      "replicas": 3,
      "selector": {
        "matchLabels": {
          "app": "test-app"
        }
      },
      "template": {
        "metadata": {
          "annotations": {
            "your-organization.com/department-v1": "test-example-v1",
            "your-organization.com/department-v2": "test-example-v2"
          },
          "labels": {
            "app": "test-app",
            "environment": "production"
          }
        },
        "spec": {
          "nodeSelector": {
            "your-organization/node-test": "test-node"
          },
          "containers": [
            {
              "name": "nginx",
              "image": "nginx:1.14.2",
              "ports": [
                {
                  "containerPort": 80
                }
              ]
            }
          ],
          "affinity": {
            "nodeAffinity": {
              "requiredDuringSchedulingIgnoredDuringExecution": {
                "nodeSelectorTerms": [
                  {
                    "matchExpressions": [
                      {
                        "key": "disk-type",
                        "operator": "In",
                        "values": [
                          "ssd",
                          "sas"
                        ]
                      },
                      {
                        "key": "cpu-num",
                        "operator": "Gt",
                        "values": [
                          "6"
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
         * @type {string || null}
         */
        this.Parameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.Parameter = 'Parameter' in params ? params.Parameter : null;

    }
}

/**
 * Resource description
 * @class
 */
class AllNodeResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * The description of master nodes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NodeResourceSpec || null}
         */
        this.MasterResourceSpec = null;

        /**
         * The description of core nodes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NodeResourceSpec || null}
         */
        this.CoreResourceSpec = null;

        /**
         * The description of task nodes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NodeResourceSpec || null}
         */
        this.TaskResourceSpec = null;

        /**
         * The description of common nodes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NodeResourceSpec || null}
         */
        this.CommonResourceSpec = null;

        /**
         * The number of master nodes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * The number of core nodes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * The number of task nodes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * The number of common nodes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CommonCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MasterResourceSpec) {
            let obj = new NodeResourceSpec();
            obj.deserialize(params.MasterResourceSpec)
            this.MasterResourceSpec = obj;
        }

        if (params.CoreResourceSpec) {
            let obj = new NodeResourceSpec();
            obj.deserialize(params.CoreResourceSpec)
            this.CoreResourceSpec = obj;
        }

        if (params.TaskResourceSpec) {
            let obj = new NodeResourceSpec();
            obj.deserialize(params.TaskResourceSpec)
            this.TaskResourceSpec = obj;
        }

        if (params.CommonResourceSpec) {
            let obj = new NodeResourceSpec();
            obj.deserialize(params.CommonResourceSpec)
            this.CommonResourceSpec = obj;
        }
        this.MasterCount = 'MasterCount' in params ? params.MasterCount : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.CommonCount = 'CommonCount' in params ? params.CommonCount : null;

    }
}

/**
 * DescribeUsersForUserManager request structure.
 * @class
 */
class DescribeUsersForUserManagerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Page size
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * User list query filter
         * @type {UserManagerFilter || null}
         */
        this.UserManagerFilter = null;

        /**
         * Whether the Keytab file information is required. This field is only valid for clusters with Kerberos enabled and defaults to `false`.
         * @type {boolean || null}
         */
        this.NeedKeytabInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.UserManagerFilter) {
            let obj = new UserManagerFilter();
            obj.deserialize(params.UserManagerFilter)
            this.UserManagerFilter = obj;
        }
        this.NeedKeytabInfo = 'NeedKeytabInfo' in params ? params.NeedKeytabInfo : null;

    }
}

/**
 * Restart, stop, or start of service/monitoring configurations
 * @class
 */
class StrategyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * `0`: Disable rolling restart
`1`: Enable rolling restart
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RollingRestartSwitch = null;

        /**
         * The number of nodes to be restarted per batch in rolling restart, with a maximum value of 99,999.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BatchSize = null;

        /**
         * The wait time (in seconds) per batch in rolling restart, with a maximum value of 5 minutes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeWait = null;

        /**
         * The failure handling policy. Valid values: `0` (blocks the process) and `1` (skips).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DealOnFail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RollingRestartSwitch = 'RollingRestartSwitch' in params ? params.RollingRestartSwitch : null;
        this.BatchSize = 'BatchSize' in params ? params.BatchSize : null;
        this.TimeWait = 'TimeWait' in params ? params.TimeWait : null;
        this.DealOnFail = 'DealOnFail' in params ? params.DealOnFail : null;

    }
}

/**
 * StartStopServiceOrMonitor response structure.
 * @class
 */
class StartStopServiceOrMonitorResponse extends  AbstractModel {
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
 * Multi-cloud disk parameters
 * @class
 */
class MultiDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk type
<li>`CLOUD_SSD`: SSD</li>
<li>`CLOUD_PREMIUM`: Premium Cloud Storage</li>
<li>`CLOUD_HSSD`: Enhanced SSD</li>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Cloud disk size
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Number of cloud disks of this type
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * The custom pod permission and parameter.
 * @class
 */
class PodNewParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * The TKE or EKS cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Custom permissions
Examples:
{
  "apiVersion": "v1",
  "clusters": [
    {
      "cluster": {
        "certificate-authority-data": "xxxxxx==",
        "server": "https://xxxxx.com"
      },
      "name": "cls-xxxxx"
    }
  ],
  "contexts": [
    {
      "context": {
        "cluster": "cls-xxxxx",
        "user": "100014xxxxx"
      },
      "name": "cls-a44yhcxxxxxxxxxx"
    }
  ],
  "current-context": "cls-a4xxxx-context-default",
  "kind": "Config",
  "preferences": {},
  "users": [
    {
      "name": "100014xxxxx",
      "user": {
        "client-certificate-data": "xxxxxx",
        "client-key-data": "xxxxxx"
      }
    }
  ]
}
         * @type {string || null}
         */
        this.Config = null;

        /**
         * Custom parameters
Examples:
{
    "apiVersion": "apps/v1",
    "kind": "Deployment",
    "metadata": {
      "name": "test-deployment",
      "labels": {
        "app": "test"
      }
    },
    "spec": {
      "replicas": 3,
      "selector": {
        "matchLabels": {
          "app": "test-app"
        }
      },
      "template": {
        "metadata": {
          "annotations": {
            "your-organization.com/department-v1": "test-example-v1",
            "your-organization.com/department-v2": "test-example-v2"
          },
          "labels": {
            "app": "test-app",
            "environment": "production"
          }
        },
        "spec": {
          "nodeSelector": {
            "your-organization/node-test": "test-node"
          },
          "containers": [
            {
              "name": "nginx",
              "image": "nginx:1.14.2",
              "ports": [
                {
                  "containerPort": 80
                }
              ]
            }
          ],
          "affinity": {
            "nodeAffinity": {
              "requiredDuringSchedulingIgnoredDuringExecution": {
                "nodeSelectorTerms": [
                  {
                    "matchExpressions": [
                      {
                        "key": "disk-type",
                        "operator": "In",
                        "values": [
                          "ssd",
                          "sas"
                        ]
                      },
                      {
                        "key": "cpu-num",
                        "operator": "Gt",
                        "values": [
                          "6"
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
         * @type {string || null}
         */
        this.Parameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.Parameter = 'Parameter' in params ? params.Parameter : null;

    }
}

/**
 * Search field
 * @class
 */
class SearchItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Searchable type
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * Searchable value
         * @type {string || null}
         */
        this.SearchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * Parameter information of each AZ
 * @class
 */
class MultiZoneSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * "master", "standby", "third-party"
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ZoneTag = null;

        /**
         * None
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * None
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * None
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneTag = 'ZoneTag' in params ? params.ZoneTag : null;

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }

        if (params.ResourceSpec) {
            let obj = new NewResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }

    }
}

/**
 * TerminateInstance response structure.
 * @class
 */
class TerminateInstanceResponse extends  AbstractModel {
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
 * InquiryPriceUpdateInstance response structure.
 * @class
 */
class InquiryPriceUpdateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * Time unit of scaling. Valid values:
<li>s: seconds.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Duration of scaling.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Pricing details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PriceDetail> || null}
         */
        this.PriceDetail = null;

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
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;

        if (params.PriceDetail) {
            this.PriceDetail = new Array();
            for (let z in params.PriceDetail) {
                let obj = new PriceDetail();
                obj.deserialize(params.PriceDetail[z]);
                this.PriceDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Client component dependencies
 * @class
 */
class SoftDependInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The component name.
         * @type {string || null}
         */
        this.SoftName = null;

        /**
         * Whether the component is required.
         * @type {boolean || null}
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
        this.SoftName = 'SoftName' in params ? params.SoftName : null;
        this.Required = 'Required' in params ? params.Required : null;

    }
}

/**
 * Description of Pod `PVC` storage method
 * @class
 */
class PersistentVolumeContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disk size in GB.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Disk type. Valid values: `CLOUD_PREMIUM` and `CLOUD_SSD`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Number of disks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskNum = null;

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
        this.DiskNum = 'DiskNum' in params ? params.DiskNum : null;

    }
}

/**
 * The type and number of nodes to be added.
 * @class
 */
class ScaleOutNodeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values of node type:
  <li>MASTER</li>
  <li>TASK</li>
  <li>CORE</li>
  <li>ROUTER</li>
         * @type {string || null}
         */
        this.NodeFlag = null;

        /**
         * The number of nodes.
         * @type {number || null}
         */
        this.NodeCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeFlag = 'NodeFlag' in params ? params.NodeFlag : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;

    }
}

/**
 * DescribeResourceSchedule response structure.
 * @class
 */
class DescribeResourceScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the resource scheduling feature
         * @type {boolean || null}
         */
        this.OpenSwitch = null;

        /**
         * The resource scheduler in service
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Fair Scheduler information
         * @type {string || null}
         */
        this.FSInfo = null;

        /**
         * Capacity Scheduler information
         * @type {string || null}
         */
        this.CSInfo = null;

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
        this.OpenSwitch = 'OpenSwitch' in params ? params.OpenSwitch : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.FSInfo = 'FSInfo' in params ? params.FSInfo : null;
        this.CSInfo = 'CSInfo' in params ? params.CSInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateClusterNodes response structure.
 * @class
 */
class TerminateClusterNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scale-in process ID.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResourceScheduler request structure.
 * @class
 */
class ModifyResourceSchedulerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EMR cluster ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The original scheduler: `fair`
         * @type {string || null}
         */
        this.OldValue = null;

        /**
         * The new scheduler: `capacity`
         * @type {string || null}
         */
        this.NewValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OldValue = 'OldValue' in params ? params.OldValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;

    }
}

/**
 * Login settings
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * The login password of the instance, which contains 8 to 16 uppercase letters, lowercase letters, digits, and special characters (only !@%^*) and cannot start with a special character.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * The key ID. After an instance is associated with a key, you can access it with the private key in the key pair. You can call [DescribeKeyPairs](https://intl.cloud.tencent.com/document/api/213/15699?from_cn_redirect=1) to obtain `PublicKeyId`.
         * @type {string || null}
         */
        this.PublicKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.PublicKeyId = 'PublicKeyId' in params ? params.PublicKeyId : null;

    }
}

/**
 * Resource queried for price
 * @class
 */
class PriceResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target specification
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * Disk type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * Disk type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * System disk size
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * Memory size.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of CPUs.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Disk size.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * List of cloud disks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MultiDisk> || null}
         */
        this.MultiDisks = null;

        /**
         * Number of disks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskCnt = null;

        /**
         * Specification
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Number of disks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskNum = null;

        /**
         * Number of local disks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LocalDiskNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

        if (params.MultiDisks) {
            this.MultiDisks = new Array();
            for (let z in params.MultiDisks) {
                let obj = new MultiDisk();
                obj.deserialize(params.MultiDisks[z]);
                this.MultiDisks.push(obj);
            }
        }
        this.DiskCnt = 'DiskCnt' in params ? params.DiskCnt : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DiskNum = 'DiskNum' in params ? params.DiskNum : null;
        this.LocalDiskNum = 'LocalDiskNum' in params ? params.LocalDiskNum : null;

    }
}

/**
 * Shared self-built component parameters
 * @class
 */
class CustomServiceDefine extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom parameter key
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Custom parameter value
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
 * CreateCluster response structure.
 * @class
 */
class CreateClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Subnet information
 * @class
 */
class SubnetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet information (name)
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * Subnet information (ID)
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * CreateCluster request structure.
 * @class
 */
class CreateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The EMR version, such as `EMR-V2.3.0` that indicates the version 2.3.0 of EMR. You can query the EMR version [here](https://intl.cloud.tencent.com/document/product/589/66338?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ProductVersion = null;

        /**
         * Whether to enable high availability for nodes. Valid values:
<li>`true`: Enable</li>
<li>`false`: Disable</li>
         * @type {boolean || null}
         */
        this.EnableSupportHAFlag = null;

        /**
         * The instance name.
<li>Length limit: 6–36 characters.</li>
<li>Can contain only Chinese characters, letters, digits, hyphens (-), and underscores (_).</li>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * The instance billing mode. Valid values:
<li>`POSTPAID_BY_HOUR`: The postpaid mode by hour.</li>
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * The instance login setting. This parameter allows you to set a login password or key for your purchased node.
<li>If a key is set, the password will be used for login to the native component WebUI only.</li>
<li>If no key is set, the password will be used for login to all purchased nodes and the native component WebUI.</li>
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * The configuration of cluster application scenario and supported components.
         * @type {SceneSoftwareConfig || null}
         */
        this.SceneSoftwareConfig = null;

        /**
         * The details of the monthly subscription, including the instance period and auto-renewal. It is required if `InstanceChargeType` is `PREPAID`.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * The ID of the security group to which the instance belongs, in the format of `sg-xxxxxxxx`. You can call the [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/api/215/15808?from_cn_redirect=1) API and obtain this parameter from the `SecurityGroupId` field in the response.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * The [Bootstrap action](https://intl.cloud.tencent.com/document/product/589/35656?from_cn_redirect=1) script settings.
         * @type {Array.<ScriptBootstrapActionConfig> || null}
         */
        this.ScriptBootstrapActionConfig = null;

        /**
         * A unique random token, which is valid for 5 minutes and needs to be specified by the caller to prevent the client from repeatedly creating resources. An example value is `a9a90aa6-751a-41b6-aad6-fae360632808`.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Whether to enable public IP access for master nodes. Valid values:
<li>`NEED_MASTER_WAN`: Enable public IP for master nodes.</li>
<li>`NOT_NEED_MASTER_WAN`: Disable.</li>The public IP is enabled for master nodes by default.
         * @type {string || null}
         */
        this.NeedMasterWan = null;

        /**
         * Whether to enable remote login over the public network. It is invalid if `SecurityGroupId` is passed in. It is disabled by default. Valid values:
<li>`true`: Enable</li>
<li>`false`: Disable</li>
         * @type {boolean || null}
         */
        this.EnableRemoteLoginFlag = null;

        /**
         * Whether to enable Kerberos authentication. Valid values:
<li>`true`: Enable</li>
<li>`false` (default): Disable</li>
         * @type {boolean || null}
         */
        this.EnableKerberosFlag = null;

        /**
         * [Custom software configuration](https://intl.cloud.tencent.com/document/product/589/35655?from_cn_redirect=1?from_cn_redirect=1)
         * @type {string || null}
         */
        this.CustomConf = null;

        /**
         * The tag description list. This parameter is used to bind a tag to a resource instance.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * The list of spread placement group IDs. Only one can be specified.
You can call the [DescribeDisasterRecoverGroups](https://intl.cloud.tencent.com/document/product/213/17810?from_cn_redirect=1) API and obtain this parameter from the `DisasterRecoverGroupId` field in the response.
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * Whether to enable the cluster-level CBS encryption. Valid values:
<li>`true`: Enable</li>
<li>`false` (default): Disable</li>
         * @type {boolean || null}
         */
        this.EnableCbsEncryptFlag = null;

        /**
         * The metadatabase information. If `MetaType` is `EMR_NEW_META`, `MetaDataJdbcUrl`, `MetaDataUser`, `MetaDataPass`, and `UnifyMetaInstanceId` are not required.
If `MetaType` is `EMR_EXIT_META`, `UnifyMetaInstanceId` is required.
If `MetaType` is `USER_CUSTOM_META`, `MetaDataJdbcUrl`, `MetaDataUser`, and `MetaDataPass` are required.
         * @type {CustomMetaDBInfo || null}
         */
        this.MetaDBInfo = null;

        /**
         * The shared component information.
         * @type {Array.<DependService> || null}
         */
        this.DependService = null;

        /**
         * The node resource specs. A spec is specified for each AZ, with the first spec for the primary AZ, the second for the backup AZ, and the third for the arbitrator AZ. If the multi-AZ mode is not enabled, only one spec is required.
         * @type {Array.<ZoneResourceConfiguration> || null}
         */
        this.ZoneResourceConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductVersion = 'ProductVersion' in params ? params.ProductVersion : null;
        this.EnableSupportHAFlag = 'EnableSupportHAFlag' in params ? params.EnableSupportHAFlag : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.SceneSoftwareConfig) {
            let obj = new SceneSoftwareConfig();
            obj.deserialize(params.SceneSoftwareConfig)
            this.SceneSoftwareConfig = obj;
        }

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.ScriptBootstrapActionConfig) {
            this.ScriptBootstrapActionConfig = new Array();
            for (let z in params.ScriptBootstrapActionConfig) {
                let obj = new ScriptBootstrapActionConfig();
                obj.deserialize(params.ScriptBootstrapActionConfig[z]);
                this.ScriptBootstrapActionConfig.push(obj);
            }
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.NeedMasterWan = 'NeedMasterWan' in params ? params.NeedMasterWan : null;
        this.EnableRemoteLoginFlag = 'EnableRemoteLoginFlag' in params ? params.EnableRemoteLoginFlag : null;
        this.EnableKerberosFlag = 'EnableKerberosFlag' in params ? params.EnableKerberosFlag : null;
        this.CustomConf = 'CustomConf' in params ? params.CustomConf : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;
        this.EnableCbsEncryptFlag = 'EnableCbsEncryptFlag' in params ? params.EnableCbsEncryptFlag : null;

        if (params.MetaDBInfo) {
            let obj = new CustomMetaDBInfo();
            obj.deserialize(params.MetaDBInfo)
            this.MetaDBInfo = obj;
        }

        if (params.DependService) {
            this.DependService = new Array();
            for (let z in params.DependService) {
                let obj = new DependService();
                obj.deserialize(params.DependService[z]);
                this.DependService.push(obj);
            }
        }

        if (params.ZoneResourceConfiguration) {
            this.ZoneResourceConfiguration = new Array();
            for (let z in params.ZoneResourceConfiguration) {
                let obj = new ZoneResourceConfiguration();
                obj.deserialize(params.ZoneResourceConfiguration[z]);
                this.ZoneResourceConfiguration.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterNodes request structure.
 * @class
 */
class DescribeClusterNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster instance ID in the format of emr-xxxxxxxx
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node flag. Valid values:
<li>all: gets the information of nodes in all types except TencentDB information.</li>
<li>master: gets master node information.</li>
<li>core: gets core node information.</li>
<li>task: gets task node information.</li>
<li>common: gets common node information.</li>
<li>router: gets router node information.</li>
<li>db: gets TencentDB information in normal status.</li>
Note: only the above values are supported for the time being. Entering other values will cause errors.
         * @type {string || null}
         */
        this.NodeFlag = null;

        /**
         * Page number. Default value: 0, indicating the first page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results per page. Default value: 100. Maximum value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Resource type. Valid values: all, host, pod. Default value: all
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * Searchable field
         * @type {Array.<SearchItem> || null}
         */
        this.SearchFields = null;

        /**
         * None
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * None
         * @type {number || null}
         */
        this.Asc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NodeFlag = 'NodeFlag' in params ? params.NodeFlag : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.HardwareResourceType = 'HardwareResourceType' in params ? params.HardwareResourceType : null;

        if (params.SearchFields) {
            this.SearchFields = new Array();
            for (let z in params.SearchFields) {
                let obj = new SearchItem();
                obj.deserialize(params.SearchFields[z]);
                this.SearchFields.push(obj);
            }
        }
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Asc = 'Asc' in params ? params.Asc : null;

    }
}

/**
 * Target processes
 * @class
 */
class ComponentBasicRestartInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The process name (required), such as NameNode.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * The target IP list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.IpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

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
         * The product ID. Different product IDs represent different EMR product versions. Valid values:
<li>16: EMR v2.3.0</li>
<li>20: EMR v2.5.0</li>
<li>25: EMR v3.1.0</li>
<li>27: Kafka v1.0.0</li>
<li>30: EMR v2.6.0</li>
<li>33: EMR v3.2.1</li>
<li>34: EMR v3.3.0</li>
<li>36: StarRocks v1.0.0</li>
<li>37: EMR v3.4.0</li>
<li>38: EMR v2.7.0</li>
<li>39: StarRocks v1.1.0</li>
<li>41: Druid v1.1.0</li>
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * List of deployed components. The list of component options varies by EMR product ID (i.e., `ProductId`; for specific meanings, please see the `ProductId` input parameter). For more information, please see [Component Version](https://intl.cloud.tencent.com/document/product/589/20279?from_cn_redirect=1).
Enter an instance value: `hive` or `flink`.
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * Whether to enable high node availability. Valid values:
<li>0: does not enable high availability of node.</li>
<li>1: enables high availability of node.</li>
         * @type {number || null}
         */
        this.SupportHA = null;

        /**
         * Instance name.
<li>Length limit: 6-36 characters.</li>
<li>Only letters, numbers, dashes (-), and underscores (_) are supported.</li>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance billing mode. Valid values:
<li>0: pay-as-you-go.</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Purchase duration of instance, which needs to be used together with `TimeUnit`.
<li>When `TimeUnit` is `s`, this parameter can only be filled with 3600, indicating a pay-as-you-go instance.</li>
<li>When `TimeUnit` is `m`, the number entered in this parameter indicates the purchase duration of the monthly-subscription instance; for example, 1 means one month</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Time unit of instance purchase duration. Valid values:
<li>s: seconds. When `PayMode` is 0, `TimeUnit` can only be `s`.</li>
<li>m: month. When `PayMode` is 1, `TimeUnit` can only be `m`.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Instance login settings. This parameter allows you to set the login password or key for your purchased node.
<li>If the key is set, the password will be only used for login to the native component WebUI.</li>
<li>If the key is not set, the password will be used for login to all purchased nodes and the native component WebUI.</li>
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Configuration information of VPC. This parameter is used to specify the VPC ID, subnet ID, etc.
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * Node resource specification.
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * Parameter required for enabling COS access.
         * @type {COSSettings || null}
         */
        this.COSSettings = null;

        /**
         * Instance location. This parameter is used to specify the AZ, project, and other attributes of the instance.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Security group to which an instance belongs in the format of `sg-xxxxxxxx`. This parameter can be obtained from the `SecurityGroupId` field in the return value of the [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/api/215/15808) API.
         * @type {string || null}
         */
        this.SgId = null;

        /**
         * [Bootstrap action](https://intl.cloud.tencent.com/document/product/589/35656?from_cn_redirect=1) script settings
         * @type {Array.<PreExecuteFileSettings> || null}
         */
        this.PreExecutedFileSettings = null;

        /**
         * Whether auto-renewal is enabled. Valid values:
<li>0: auto-renewal not enabled.</li>
<li>1: auto-renewal enabled.</li>
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * Client token.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Whether to enable public IP access for master node. Valid values:
<li>NEED_MASTER_WAN: enables public IP for master node.</li>
<li>NOT_NEED_MASTER_WAN: does not enable.</li>Public IP is enabled for master node by default.
         * @type {string || null}
         */
        this.NeedMasterWan = null;

        /**
         * Whether to enable remote public network login, i.e., port 22. When `SgId` is not empty, this parameter does not take effect.
         * @type {number || null}
         */
        this.RemoteLoginAtCreate = null;

        /**
         * Whether to enable secure cluster. 0: no; other values: yes.
         * @type {number || null}
         */
        this.CheckSecurity = null;

        /**
         * Accesses to external file system.
         * @type {string || null}
         */
        this.ExtendFsField = null;

        /**
         * Tag description list. This parameter is used to bind a tag to a resource instance.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * List of spread placement group IDs. Only one can be specified currently.
This parameter can be obtained in the `SecurityGroupId` field in the return value of the [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/product/213/15486?from_cn_redirect=1) API.
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * CBS disk encryption at the cluster level. 0: not encrypted, 1: encrypted
         * @type {number || null}
         */
        this.CbsEncrypt = null;

        /**
         * Hive-shared metadatabase type. Valid values:
<li>EMR_DEFAULT_META: the cluster creates one by default.</li>
<li>EMR_EXIST_META: the cluster uses the specified EMR-MetaDB instance.</li>
<li>USER_CUSTOM_META: the cluster uses a custom MetaDB instance.</li>
         * @type {string || null}
         */
        this.MetaType = null;

        /**
         * EMR-MetaDB instance
         * @type {string || null}
         */
        this.UnifyMetaInstanceId = null;

        /**
         * Custom MetaDB instance information
         * @type {CustomMetaInfo || null}
         */
        this.MetaDBInfo = null;

        /**
         * Custom application role.
         * @type {string || null}
         */
        this.ApplicationRole = null;

        /**
         * Scenario-based values:
Hadoop-Kudu
Hadoop-Zookeeper
Hadoop-Presto
Hadoop-Hbase
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * Shared component information
         * @type {Array.<ExternalService> || null}
         */
        this.ExternalService = null;

        /**
         * 
         * @type {number || null}
         */
        this.VersionID = null;

        /**
         * `true` indicates that the multi-AZ deployment mode is enabled. This parameter is available only in cluster creation and cannot be changed after setting.
         * @type {boolean || null}
         */
        this.MultiZone = null;

        /**
         * Node resource specs. The actual number of AZs is set, with the first AZ as the primary AZ, the second as the backup AZ, and the third as the arbitrator AZ. If the multi-AZ mode is not enabled, set the value to `1`.
         * @type {Array.<MultiZoneSetting> || null}
         */
        this.MultiZoneSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Software = 'Software' in params ? params.Software : null;
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }

        if (params.ResourceSpec) {
            let obj = new NewResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }

        if (params.COSSettings) {
            let obj = new COSSettings();
            obj.deserialize(params.COSSettings)
            this.COSSettings = obj;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.SgId = 'SgId' in params ? params.SgId : null;

        if (params.PreExecutedFileSettings) {
            this.PreExecutedFileSettings = new Array();
            for (let z in params.PreExecutedFileSettings) {
                let obj = new PreExecuteFileSettings();
                obj.deserialize(params.PreExecutedFileSettings[z]);
                this.PreExecutedFileSettings.push(obj);
            }
        }
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.NeedMasterWan = 'NeedMasterWan' in params ? params.NeedMasterWan : null;
        this.RemoteLoginAtCreate = 'RemoteLoginAtCreate' in params ? params.RemoteLoginAtCreate : null;
        this.CheckSecurity = 'CheckSecurity' in params ? params.CheckSecurity : null;
        this.ExtendFsField = 'ExtendFsField' in params ? params.ExtendFsField : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;
        this.CbsEncrypt = 'CbsEncrypt' in params ? params.CbsEncrypt : null;
        this.MetaType = 'MetaType' in params ? params.MetaType : null;
        this.UnifyMetaInstanceId = 'UnifyMetaInstanceId' in params ? params.UnifyMetaInstanceId : null;

        if (params.MetaDBInfo) {
            let obj = new CustomMetaInfo();
            obj.deserialize(params.MetaDBInfo)
            this.MetaDBInfo = obj;
        }
        this.ApplicationRole = 'ApplicationRole' in params ? params.ApplicationRole : null;
        this.SceneName = 'SceneName' in params ? params.SceneName : null;

        if (params.ExternalService) {
            this.ExternalService = new Array();
            for (let z in params.ExternalService) {
                let obj = new ExternalService();
                obj.deserialize(params.ExternalService[z]);
                this.ExternalService.push(obj);
            }
        }
        this.VersionID = 'VersionID' in params ? params.VersionID : null;
        this.MultiZone = 'MultiZone' in params ? params.MultiZone : null;

        if (params.MultiZoneSettings) {
            this.MultiZoneSettings = new Array();
            for (let z in params.MultiZoneSettings) {
                let obj = new MultiZoneSetting();
                obj.deserialize(params.MultiZoneSettings[z]);
                this.MultiZoneSettings.push(obj);
            }
        }

    }
}

/**
 * Target resource specification
 * @class
 */
class UpdateInstanceSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Memory capacity in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.CPUCores = null;

        /**
         * Machine resource ID (EMR resource identifier)
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Target machine specification
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.CPUCores = 'CPUCores' in params ? params.CPUCores : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * The bootstrap action.
 * @class
 */
class ScriptBootstrapActionConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The COS URL of the script, in the format of `https://beijing-111111.cos.ap-beijing.myqcloud.com/data/test.sh`. For the COS bucket list, see [Bucket List](https://console.cloud.tencent.com/cos/bucket).
         * @type {string || null}
         */
        this.CosFileURI = null;

        /**
         * The execution time of the bootstrap action script. Valid values:
<li>`resourceAfter`: After node initialization</li>
<li>`clusterAfter`: After cluster start</li>
<li>`clusterBefore`: Before cluster start</li>
         * @type {string || null}
         */
        this.ExecutionMoment = null;

        /**
         * The execution script parameter. The parameter format must comply with standard shell specifications.
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * The script file name.
         * @type {string || null}
         */
        this.CosFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosFileURI = 'CosFileURI' in params ? params.CosFileURI : null;
        this.ExecutionMoment = 'ExecutionMoment' in params ? params.ExecutionMoment : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;

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
         * Cluster filtering policy. Valid values:
<li>clusterList: queries the list of clusters except terminated ones.</li>
<li>monitorManage: queries the list of clusters except those that have been terminated, are being created, or failed to be created.</li>
<li>cloudHardwareManage/componentManage: reserved fields with the same meaning as `monitorManage`.</li>
         * @type {string || null}
         */
        this.DisplayStrategy = null;

        /**
         * Queries by one or more instance IDs in the format of `emr-xxxxxxxx`. For the format of this parameter, please see the `id.N` section in [API Overview](https://intl.cloud.tencent.com/document/api/213/15688). If no instance ID is entered, the list of all instances under this `APPID` will be returned.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Page number. Default value: 0, indicating the first page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results per page. Default value: 10. Maximum value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * ID of the project to which the instance belongs. This parameter can be obtained from the `projectId` field in the return value of the `DescribeProject` API. If this value is -1, the list of all instances will be returned.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Sorting field. Valid values:
<li>clusterId: sorts by cluster ID.</li>
<li>addTime: sorts by instance creation time.</li>
<li>status: sorts by instance status code.</li>
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Sorts according to `OrderField` in ascending or descending order. Valid values:
<li>0: descending order.</li>
<li>1: ascending order.</li>Default value: 0.
         * @type {number || null}
         */
        this.Asc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayStrategy = 'DisplayStrategy' in params ? params.DisplayStrategy : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Asc = 'Asc' in params ? params.Asc : null;

    }
}

/**
 * InquiryPriceUpdateInstance request structure.
 * @class
 */
class InquiryPriceUpdateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time unit of scaling. Valid values:
<li>s: seconds. When `PayMode` is 0, `TimeUnit` can only be `s`.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Duration of scaling, which needs to be used together with `TimeUnit`.
<li>When `PayMode` is 0, `TimeSpan` can only be 3,600.</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Target node specification.
         * @type {UpdateInstanceSettings || null}
         */
        this.UpdateSpec = null;

        /**
         * Instance billing mode. Valid values:
<li>0: pay-as-you-go.</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Instance location. This parameter is used to specify the AZ, project, and other attributes of the instance.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Currency.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * The resource ID list for batch configuration change.
         * @type {Array.<string> || null}
         */
        this.ResourceIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;

        if (params.UpdateSpec) {
            let obj = new UpdateInstanceSettings();
            obj.deserialize(params.UpdateSpec)
            this.UpdateSpec = obj;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.ResourceIdList = 'ResourceIdList' in params ? params.ResourceIdList : null;

    }
}

/**
 * TerminateClusterNodes request structure.
 * @class
 */
class TerminateClusterNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The list of resources to be terminated.
         * @type {Array.<string> || null}
         */
        this.CvmInstanceIds = null;

        /**
         * Valid values of node type:
  <li>MASTER</li>
  <li>TASK</li>
  <li>CORE</li>
  <li>ROUTER</li>
         * @type {string || null}
         */
        this.NodeFlag = null;

        /**
         * The graceful scale-in feature. Valid values:
  <li>`true`: Enabled.</li>
  <li>`false`: Disabled.</li>
         * @type {boolean || null}
         */
        this.GraceDownFlag = null;

        /**
         * The graceful scale-in wait time in seconds. Value range: 60–1800.
         * @type {number || null}
         */
        this.GraceDownTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CvmInstanceIds = 'CvmInstanceIds' in params ? params.CvmInstanceIds : null;
        this.NodeFlag = 'NodeFlag' in params ? params.NodeFlag : null;
        this.GraceDownFlag = 'GraceDownFlag' in params ? params.GraceDownFlag : null;
        this.GraceDownTime = 'GraceDownTime' in params ? params.GraceDownTime : null;

    }
}

/**
 * DescribeInstancesList request structure.
 * @class
 */
class DescribeInstancesListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster filtering policy. Valid values: <li>clusterList: Queries the list of clusters excluding terminated ones.</li><li>monitorManage: Queries the list of clusters excluding those terminated, under creation and not successfully created.</li><li>cloudHardwareManage/componentManage: Two reserved values, which have the same implications as those of `monitorManage`.</li>
         * @type {string || null}
         */
        this.DisplayStrategy = null;

        /**
         * Page number. Default value: `0`, indicating the first page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results per page. Default value: `10`; maximum value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sorting field. Valid values: <li>clusterId: Sorting by instance ID. </li><li>addTime: Sorting by instance creation time.</li><li>status: Sorting by instance status code.</li>
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Sort ascending or descending based on `OrderField`. Valid values:<li>0: Descending.</li><li>1: Ascending.</li>Default value: `0`.
         * @type {number || null}
         */
        this.Asc = null;

        /**
         * Custom query
         * @type {Array.<Filters> || null}
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
        this.DisplayStrategy = 'DisplayStrategy' in params ? params.DisplayStrategy : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Asc = 'Asc' in params ? params.Asc : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * Resource details
 * @class
 */
class OutterResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * Specification name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * Disk type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * Disk type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * System disk size
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * Memory size
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of CPUs
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Disk size
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Specification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * Operation scope
 * @class
 */
class OpScope extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of the services to operate on.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ServiceBasicRestartInfo> || null}
         */
        this.ServiceInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServiceInfoList) {
            this.ServiceInfoList = new Array();
            for (let z in params.ServiceInfoList) {
                let obj = new ServiceBasicRestartInfo();
                obj.deserialize(params.ServiceInfoList[z]);
                this.ServiceInfoList.push(obj);
            }
        }

    }
}

/**
 * VPC parameters
 * @class
 */
class VPCSettings extends  AbstractModel {
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
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * List of EMR instance details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClusterInstancesInfo> || null}
         */
        this.ClusterList = null;

        /**
         * List of tag keys associated to an instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

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
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new ClusterInstancesInfo();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUsersForUserManager response structure.
 * @class
 */
class DescribeUsersForUserManagerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * User information list
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<UserManagerUserBriefInfo> || null}
         */
        this.UserManagerUserList = null;

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
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.UserManagerUserList) {
            this.UserManagerUserList = new Array();
            for (let z in params.UserManagerUserList) {
                let obj = new UserManagerUserBriefInfo();
                obj.deserialize(params.UserManagerUserList[z]);
                this.UserManagerUserList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceRenewInstance request structure.
 * @class
 */
class InquiryPriceRenewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * How long the instance will be renewed for, which needs to be used together with `TimeUnit`.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * List of resource IDs of the node to be renewed. The resource ID is in the format of `emr-vm-xxxxxxxx`. A valid resource ID can be queried in the [console](https://console.cloud.tencent.com/emr/static/hardware).
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * Location of the instance. This parameter is used to specify the AZ, project, and other attributes of the instance.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Instance billing mode.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Unit of time for instance renewal.
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Currency.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Whether to change from pay-as-you-go billing to monthly subscription billing. `0`: no; `1`: yes
         * @type {number || null}
         */
        this.ModifyPayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.ModifyPayMode = 'ModifyPayMode' in params ? params.ModifyPayMode : null;

    }
}

/**
 * Output parameters
 * @class
 */
class CdbInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database instance
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Database IP
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Database port
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Database memory specification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Database disk specification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Service flag
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Expiration time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Application time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplyTime = null;

        /**
         * Payment type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * Expiration flag
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ExpireFlag = null;

        /**
         * Database status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Renewal flag
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsAutoRenew = null;

        /**
         * Database string
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * ZoneId
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * RegionId
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RegionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ApplyTime = 'ApplyTime' in params ? params.ApplyTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.ExpireFlag = 'ExpireFlag' in params ? params.ExpireFlag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsAutoRenew = 'IsAutoRenew' in params ? params.IsAutoRenew : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * Pricing details
 * @class
 */
class PriceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The node ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * The price formula
         * @type {string || null}
         */
        this.Formula = null;

        /**
         * The original price
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * The discount price
         * @type {number || null}
         */
        this.DiscountCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Formula = 'Formula' in params ? params.Formula : null;
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;

    }
}

/**
 * Multi-cloud disk parameters
 * @class
 */
class MultiDiskMC extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of cloud disks in this type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Disk type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Cloud disk size
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Volume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Volume = 'Volume' in params ? params.Volume : null;

    }
}

/**
 * AddUsersForUserManager request structure.
 * @class
 */
class AddUsersForUserManagerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster string ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * User information list
         * @type {Array.<UserInfoForUserManager> || null}
         */
        this.UserManagerUserList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.UserManagerUserList) {
            this.UserManagerUserList = new Array();
            for (let z in params.UserManagerUserList) {
                let obj = new UserInfoForUserManager();
                obj.deserialize(params.UserManagerUserList[z]);
                this.UserManagerUserList.push(obj);
            }
        }

    }
}

/**
 * AZ configurations
 * @class
 */
class ZoneResourceConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * The VPC configuration information. This parameter is used to specify the VPC ID, subnet ID and other information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * The instance location. This parameter is used to specify the AZ, project, and other attributes of the instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * The specs of all nodes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AllNodeResourceSpec || null}
         */
        this.AllNodeResourceSpec = null;

        /**
         * For a single AZ, `ZoneTag` can be left out. For a double-AZ mode, `ZoneTag` is set to `master` and `standby` for the first and second AZs, respectively. If there are three AZs, `ZoneTag` is set to `master`, `standby`, and `third-party` for the first, second, and third AZs, respectively. Valid values:
  <li>master</li>
  <li>standby</li>
  <li>third-party</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }

        if (params.AllNodeResourceSpec) {
            let obj = new AllNodeResourceSpec();
            obj.deserialize(params.AllNodeResourceSpec)
            this.AllNodeResourceSpec = obj;
        }
        this.ZoneTag = 'ZoneTag' in params ? params.ZoneTag : null;

    }
}

/**
 * User-created Hive-MetaDB instance information
 * @class
 */
class CustomMetaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * JDBC connection to custom MetaDB instance beginning with `jdbc:mysql://`
         * @type {string || null}
         */
        this.MetaDataJdbcUrl = null;

        /**
         * Custom MetaDB instance username
         * @type {string || null}
         */
        this.MetaDataUser = null;

        /**
         * Custom MetaDB instance password
         * @type {string || null}
         */
        this.MetaDataPass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetaDataJdbcUrl = 'MetaDataJdbcUrl' in params ? params.MetaDataJdbcUrl : null;
        this.MetaDataUser = 'MetaDataUser' in params ? params.MetaDataUser : null;
        this.MetaDataPass = 'MetaDataPass' in params ? params.MetaDataPass : null;

    }
}

/**
 * Yarn application statistics
 * @class
 */
class ApplicationStatics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name
         * @type {string || null}
         */
        this.Queue = null;

        /**
         * Username
         * @type {string || null}
         */
        this.User = null;

        /**
         * Application type
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * `SumMemorySeconds` meaning
         * @type {number || null}
         */
        this.SumMemorySeconds = null;

        /**
         * 
         * @type {number || null}
         */
        this.SumVCoreSeconds = null;

        /**
         * SumHDFSBytesWritten (with unit)
         * @type {string || null}
         */
        this.SumHDFSBytesWritten = null;

        /**
         * SumHDFSBytesRead (with unit)
         * @type {string || null}
         */
        this.SumHDFSBytesRead = null;

        /**
         * Application count
         * @type {number || null}
         */
        this.CountApps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Queue = 'Queue' in params ? params.Queue : null;
        this.User = 'User' in params ? params.User : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.SumMemorySeconds = 'SumMemorySeconds' in params ? params.SumMemorySeconds : null;
        this.SumVCoreSeconds = 'SumVCoreSeconds' in params ? params.SumVCoreSeconds : null;
        this.SumHDFSBytesWritten = 'SumHDFSBytesWritten' in params ? params.SumHDFSBytesWritten : null;
        this.SumHDFSBytesRead = 'SumHDFSBytesRead' in params ? params.SumHDFSBytesRead : null;
        this.CountApps = 'CountApps' in params ? params.CountApps : null;

    }
}

/**
 * InquiryPriceCreateInstance request structure.
 * @class
 */
class InquiryPriceCreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time unit of instance purchase duration. Valid values:
<li>s: seconds. When `PayMode` is 0, `TimeUnit` can only be `s`.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Purchase duration of instance, which needs to be used together with `TimeUnit`.
<li>When `TimeUnit` is `s`, this parameter can only be filled with 3600, indicating a pay-as-you-go instance.</li>
<li>When `TimeUnit` is `m`, the number entered in this parameter indicates the purchase duration of the monthly-subscription instance; for example, 1 means one month</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Currency.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Instance billing mode. Valid values:
<li>0: pay-as-you-go.</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Whether to enable high availability of node. Valid values:
<li>0: does not enable high availability of node.</li>
<li>1: enables high availability of node.</li>
         * @type {number || null}
         */
        this.SupportHA = null;

        /**
         * List of deployed components. Different required components need to be selected for different EMR product IDs (i.e., `ProductId`; for specific meanings, please see the `ProductId` field in the input parameter):
<li>When `ProductId` is 1, the required components include hadoop-2.7.3, knox-1.2.0, and zookeeper-3.4.9</li>
<li>When `ProductId` is 2, the required components include hadoop-2.7.3, knox-1.2.0, and zookeeper-3.4.9</li>
<li>When `ProductId` is 4, the required components include hadoop-2.8.4, knox-1.2.0, and zookeeper-3.4.9</li>
<li>When `ProductId` is 7, the required components include hadoop-3.1.2, knox-1.2.0, and zookeeper-3.4.9</li>
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * Node specification queried for price.
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * Instance location. This parameter is used to specify the AZ, project, and other attributes of the instance.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Configuration information of VPC. This parameter is used to specify the VPC ID, subnet ID, etc.
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * Hive-shared metadatabase type. Valid values:
<li>EMR_DEFAULT_META: the cluster creates one by default.</li>
<li>EMR_EXIST_META: the cluster uses the specified EMR-MetaDB instance.</li>
<li>USER_CUSTOM_META: the cluster uses a custom MetaDB instance.</li>
         * @type {string || null}
         */
        this.MetaType = null;

        /**
         * EMR-MetaDB instance
         * @type {string || null}
         */
        this.UnifyMetaInstanceId = null;

        /**
         * Custom MetaDB instance information
         * @type {CustomMetaInfo || null}
         */
        this.MetaDBInfo = null;

        /**
         * Product ID. Different product IDs represent different EMR product versions. Valid values:
<li>1: EMR v1.3.1.</li>
<li>2: EMR v2.0.1.</li>
<li>4: EMR v2.1.0.</li>
<li>7: EMR v3.0.0.</li>
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * Scenario-based values:
Hadoop-Kudu
Hadoop-Zookeeper
Hadoop-Presto
Hadoop-Hbase
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * Shared component information
         * @type {Array.<ExternalService> || null}
         */
        this.ExternalService = null;

        /**
         * 
         * @type {number || null}
         */
        this.VersionID = null;

        /**
         * AZ specs
         * @type {Array.<MultiZoneSetting> || null}
         */
        this.MultiZoneSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.Software = 'Software' in params ? params.Software : null;

        if (params.ResourceSpec) {
            let obj = new NewResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }
        this.MetaType = 'MetaType' in params ? params.MetaType : null;
        this.UnifyMetaInstanceId = 'UnifyMetaInstanceId' in params ? params.UnifyMetaInstanceId : null;

        if (params.MetaDBInfo) {
            let obj = new CustomMetaInfo();
            obj.deserialize(params.MetaDBInfo)
            this.MetaDBInfo = obj;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.SceneName = 'SceneName' in params ? params.SceneName : null;

        if (params.ExternalService) {
            this.ExternalService = new Array();
            for (let z in params.ExternalService) {
                let obj = new ExternalService();
                obj.deserialize(params.ExternalService[z]);
                this.ExternalService.push(obj);
            }
        }
        this.VersionID = 'VersionID' in params ? params.VersionID : null;

        if (params.MultiZoneSettings) {
            this.MultiZoneSettings = new Array();
            for (let z in params.MultiZoneSettings) {
                let obj = new MultiZoneSetting();
                obj.deserialize(params.MultiZoneSettings[z]);
                this.MultiZoneSettings.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterNodes response structure.
 * @class
 */
class DescribeClusterNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of queried nodes
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * List of node details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<NodeHardwareInfo> || null}
         */
        this.NodeList = null;

        /**
         * List of tag keys owned by user
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Resource type list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.HardwareResourceTypeList = null;

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
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.NodeList) {
            this.NodeList = new Array();
            for (let z in params.NodeList) {
                let obj = new NodeHardwareInfo();
                obj.deserialize(params.NodeList[z]);
                this.NodeList.push(obj);
            }
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.HardwareResourceTypeList = 'HardwareResourceTypeList' in params ? params.HardwareResourceTypeList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResourceScheduleConfig request structure.
 * @class
 */
class ModifyResourceScheduleConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EMR cluster ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Business identifier. `fair`: Edit fair configuration items; `fairPlan`: Edit the execution plan; `capacity`: Edit capacity configuration items.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Modified module information
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Added user information list
 * @class
 */
class UserInfoForUserManager extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * The group to which the user belongs
         * @type {string || null}
         */
        this.UserGroup = null;

        /**
         * 
         * @type {string || null}
         */
        this.PassWord = null;

        /**
         * 
         * @type {string || null}
         */
        this.ReMark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.PassWord = 'PassWord' in params ? params.PassWord : null;
        this.ReMark = 'ReMark' in params ? params.ReMark : null;

    }
}

/**
 * Shared component information
 * @class
 */
class ExternalService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared component type, which can be EMR or CUSTOM
         * @type {string || null}
         */
        this.ShareType = null;

        /**
         * Custom parameters
         * @type {Array.<CustomServiceDefine> || null}
         */
        this.CustomServiceDefineList = null;

        /**
         * Shared component name
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Shared component cluster
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
        this.ShareType = 'ShareType' in params ? params.ShareType : null;

        if (params.CustomServiceDefineList) {
            this.CustomServiceDefineList = new Array();
            for (let z in params.CustomServiceDefineList) {
                let obj = new CustomServiceDefine();
                obj.deserialize(params.CustomServiceDefineList[z]);
                this.CustomServiceDefineList.push(obj);
            }
        }
        this.Service = 'Service' in params ? params.Service : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Pre-execution script configuration
 * @class
 */
class PreExecuteFileSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS path to script, which has been disused
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Execution script parameter
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * COS bucket name, which has been disused
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * COS region name, which has been disused
         * @type {string || null}
         */
        this.Region = null;

        /**
         * COS domain data, which has been disused
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Execution sequence
         * @type {number || null}
         */
        this.RunOrder = null;

        /**
         * `resourceAfter` or `clusterAfter`
         * @type {string || null}
         */
        this.WhenRun = null;

        /**
         * Script name, which has been disused
         * @type {string || null}
         */
        this.CosFileName = null;

        /**
         * COS address of script
         * @type {string || null}
         */
        this.CosFileURI = null;

        /**
         * COS `SecretId`
         * @type {string || null}
         */
        this.CosSecretId = null;

        /**
         * COS `SecretKey`
         * @type {string || null}
         */
        this.CosSecretKey = null;

        /**
         * COS `appid`, which has been disused
         * @type {string || null}
         */
        this.AppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RunOrder = 'RunOrder' in params ? params.RunOrder : null;
        this.WhenRun = 'WhenRun' in params ? params.WhenRun : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;
        this.CosFileURI = 'CosFileURI' in params ? params.CosFileURI : null;
        this.CosSecretId = 'CosSecretId' in params ? params.CosSecretId : null;
        this.CosSecretKey = 'CosSecretKey' in params ? params.CosSecretKey : null;
        this.AppId = 'AppId' in params ? params.AppId : null;

    }
}

/**
 * Relationship between shared components and the current cluster
 * @class
 */
class ClusterExternalServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dependency. `0`: Other clusters depend on the current cluster. `1`: The current cluster depends on other clusters.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DependType = null;

        /**
         * Shared component
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Sharing cluster
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Sharing cluster status
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ClusterStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DependType = 'DependType' in params ? params.DependType : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;

    }
}

/**
 * Resource description
 * @class
 */
class NewResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Describes master node resource
         * @type {Resource || null}
         */
        this.MasterResourceSpec = null;

        /**
         * Describes core node resource
         * @type {Resource || null}
         */
        this.CoreResourceSpec = null;

        /**
         * Describes task node resource
         * @type {Resource || null}
         */
        this.TaskResourceSpec = null;

        /**
         * Number of master nodes
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * Number of core nodes
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * Number of task nodes
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * Describes common node resource
         * @type {Resource || null}
         */
        this.CommonResourceSpec = null;

        /**
         * Number of common nodes
         * @type {number || null}
         */
        this.CommonCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MasterResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.MasterResourceSpec)
            this.MasterResourceSpec = obj;
        }

        if (params.CoreResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.CoreResourceSpec)
            this.CoreResourceSpec = obj;
        }

        if (params.TaskResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.TaskResourceSpec)
            this.TaskResourceSpec = obj;
        }
        this.MasterCount = 'MasterCount' in params ? params.MasterCount : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;

        if (params.CommonResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.CommonResourceSpec)
            this.CommonResourceSpec = obj;
        }
        this.CommonCount = 'CommonCount' in params ? params.CommonCount : null;

    }
}

/**
 * InquiryPriceScaleOutInstance request structure.
 * @class
 */
class InquiryPriceScaleOutInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time unit of scale-out. Valid value:
<li>s: Second. When `PayMode` is 0, `TimeUnit` can only be `s`.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Time span of scale-out, which needs to be used together with `TimeUnit`.
<li>When `PayMode` is 0, `TimeSpan` can only be 3,600.</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * ID of the AZ where an instance resides.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Instance billing mode. Valid value:
<li>0: Pay-as-you-go.</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of core nodes to be added.
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * Number of task nodes to be added.
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * Currency.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Number of router nodes to be added.
         * @type {number || null}
         */
        this.RouterCount = null;

        /**
         * Number of master nodes to be added.
         * @type {number || null}
         */
        this.MasterCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.RouterCount = 'RouterCount' in params ? params.RouterCount : null;
        this.MasterCount = 'MasterCount' in params ? params.MasterCount : null;

    }
}

/**
 * Resource details
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node specification description, such as CVM.SA2
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * Storage type
Valid values:
<li>4: SSD</li>
<li>5: Premium Cloud Storage</li>
<li>6: Enhanced SSD</li>
<li>11: High-Throughput cloud disk</li>
<li>12: Tremendous SSD</li>
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * Disk type
Valid values:
<li>`CLOUD_SSD`: SSD</li>
<li>`CLOUD_PREMIUM`: Premium Cloud Storage</li>
<li>`CLOUD_BASIC`: HDD</li>
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Memory capacity in MB
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of CPU cores
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Data disk capacity
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * System disk capacity
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * List of cloud disks. When the data disk is a cloud disk, `DiskType` and `DiskSize` are used directly; `MultiDisks` will be used for the excessive part
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MultiDisk> || null}
         */
        this.MultiDisks = null;

        /**
         * List of tags to be bound
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Specification type, such as S2.MEDIUM8
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Number of local disks. This field has been disused.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LocalDiskNum = null;

        /**
         * Number of local disks, such as 2
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;

        if (params.MultiDisks) {
            this.MultiDisks = new Array();
            for (let z in params.MultiDisks) {
                let obj = new MultiDisk();
                obj.deserialize(params.MultiDisks[z]);
                this.MultiDisks.push(obj);
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
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.LocalDiskNum = 'LocalDiskNum' in params ? params.LocalDiskNum : null;
        this.DiskNum = 'DiskNum' in params ? params.DiskNum : null;

    }
}

/**
 * DescribeEmrApplicationStatics response structure.
 * @class
 */
class DescribeEmrApplicationStaticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application statistics
         * @type {Array.<ApplicationStatics> || null}
         */
        this.Statics = null;

        /**
         * Total count
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Available queue name
         * @type {Array.<string> || null}
         */
        this.Queues = null;

        /**
         * Available usernames
         * @type {Array.<string> || null}
         */
        this.Users = null;

        /**
         * Available application type
         * @type {Array.<string> || null}
         */
        this.ApplicationTypes = null;

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

        if (params.Statics) {
            this.Statics = new Array();
            for (let z in params.Statics) {
                let obj = new ApplicationStatics();
                obj.deserialize(params.Statics[z]);
                this.Statics.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Queues = 'Queues' in params ? params.Queues : null;
        this.Users = 'Users' in params ? params.Users : null;
        this.ApplicationTypes = 'ApplicationTypes' in params ? params.ApplicationTypes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The user-created Hive-MetaDB instance information.
 * @class
 */
class CustomMetaDBInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The JDBC URL of the custom metadatabase instance. Example: jdbc:mysql://10.10.10.10:3306/dbname
         * @type {string || null}
         */
        this.MetaDataJdbcUrl = null;

        /**
         * The custom metadatabase instance username.
         * @type {string || null}
         */
        this.MetaDataUser = null;

        /**
         * The custom metadatabase instance password.
         * @type {string || null}
         */
        this.MetaDataPass = null;

        /**
         * The Hive-shared metadatabase type. Valid values:
<li>`EMR_DEFAULT_META`: The cluster creates one by default.</li>
<li>`EMR_EXIST_META`: The cluster uses the specified EMR metadatabase instance.</li>
<li>`USER_CUSTOM_META`: The cluster uses a custom metadatabase instance.</li>
         * @type {string || null}
         */
        this.MetaType = null;

        /**
         * The EMR-MetaDB instance.
         * @type {string || null}
         */
        this.UnifyMetaInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetaDataJdbcUrl = 'MetaDataJdbcUrl' in params ? params.MetaDataJdbcUrl : null;
        this.MetaDataUser = 'MetaDataUser' in params ? params.MetaDataUser : null;
        this.MetaDataPass = 'MetaDataPass' in params ? params.MetaDataPass : null;
        this.MetaType = 'MetaType' in params ? params.MetaType : null;
        this.UnifyMetaInstanceId = 'UnifyMetaInstanceId' in params ? params.UnifyMetaInstanceId : null;

    }
}

/**
 * Brief user information in user management
 * @class
 */
class UserManagerUserBriefInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * The group to which the user belongs
         * @type {string || null}
         */
        this.UserGroup = null;

        /**
         * `Manager` represents an admin, and `NormalUser` represents a general user.
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * Account creation time
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether the corresponding Keytab file of the user is available for download. This parameter applies only to a Kerberos-enabled cluster.
         * @type {boolean || null}
         */
        this.SupportDownLoadKeyTab = null;

        /**
         * Download link of the Keytab file
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DownLoadKeyTabUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SupportDownLoadKeyTab = 'SupportDownLoadKeyTab' in params ? params.SupportDownLoadKeyTab : null;
        this.DownLoadKeyTabUrl = 'DownLoadKeyTabUrl' in params ? params.DownLoadKeyTabUrl : null;

    }
}

/**
 * InquiryPriceScaleOutInstance response structure.
 * @class
 */
class InquiryPriceScaleOutInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original price.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiscountCost = null;

        /**
         * Time unit of scale-out. Valid value:
<li>s: Second.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Node spec queried for price.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PriceResource || null}
         */
        this.PriceSpec = null;

        /**
         * The inquiry results corresponding to the specs specified by the input parameter `MultipleResources`, with the result of the first spec returned by other output parameters.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<EmrPrice> || null}
         */
        this.MultipleEmrPrice = null;

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
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

        if (params.PriceSpec) {
            let obj = new PriceResource();
            obj.deserialize(params.PriceSpec)
            this.PriceSpec = obj;
        }

        if (params.MultipleEmrPrice) {
            this.MultipleEmrPrice = new Array();
            for (let z in params.MultipleEmrPrice) {
                let obj = new EmrPrice();
                obj.deserialize(params.MultipleEmrPrice[z]);
                this.MultipleEmrPrice.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResourceScheduler response structure.
 * @class
 */
class ModifyResourceSchedulerResponse extends  AbstractModel {
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
 * VPC parameters
 * @class
 */
class VirtualPrivateCloud extends  AbstractModel {
    constructor(){
        super();

        /**
         * The VPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The subnet ID.
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * The configuration of cluster application scenario and supported components.
 * @class
 */
class SceneSoftwareConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of deployed components. The list of component options varies by `ProductVersion` (EMR version). For more information, see [Component Version](https://intl.cloud.tencent.com/document/product/589/20279?from_cn_redirect=1).
The instance type, `hive` or `flink`.
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * The scenario name, which defaults to `Hadoop-Default`. For more details, see [here](https://intl.cloud.tencent.com/document/product/589/14624?from_cn_redirect=1). Valid values:
Hadoop-Kudu
Hadoop-Zookeeper
Hadoop-Presto
Hadoop-Hbase
Hadoop-Default
         * @type {string || null}
         */
        this.SceneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Software = 'Software' in params ? params.Software : null;
        this.SceneName = 'SceneName' in params ? params.SceneName : null;

    }
}

/**
 * Node information
 * @class
 */
class ShortNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node type: Master/Core/Task/Router/Common
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Number of nodes
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.NodeSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeSize = 'NodeSize' in params ? params.NodeSize : null;

    }
}

/**
 * EMR inquiry description
 * @class
 */
class EmrPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * The published price.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * The discounted price.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiscountCost = null;

        /**
         * The unit of the billable item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * The queried spec.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PriceResource || null}
         */
        this.PriceSpec = null;

        /**
         * Whether spot instances are supported.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.SupportSpotPaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

        if (params.PriceSpec) {
            let obj = new PriceResource();
            obj.deserialize(params.PriceSpec)
            this.PriceSpec = obj;
        }
        this.SupportSpotPaid = 'SupportSpotPaid' in params ? params.SupportSpotPaid : null;

    }
}

/**
 * Node hardware information
 * @class
 */
class NodeHardwareInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * User `APPID`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Serial number
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * Machine instance ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * Public IP bound to master node
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * Node type. 0: common node; 1: master node;
2: core node; 3: task node
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * Node specification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * Number of node cores
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * Node memory size
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Node memory description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MemDesc = null;

        /**
         * Node region
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Node AZ
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Application time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplyTime = null;

        /**
         * Release time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FreeTime = null;

        /**
         * Disk size
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskSize = null;

        /**
         * Node description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NameTag = null;

        /**
         * Services deployed on node
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Services = null;

        /**
         * Disk type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * System disk size
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * Payment type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * Database IP
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CdbIp = null;

        /**
         * Database port
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CdbPort = null;

        /**
         * Disk capacity
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HwDiskSize = null;

        /**
         * Disk capacity description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HwDiskSizeDesc = null;

        /**
         * Memory capacity
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HwMemSize = null;

        /**
         * Memory capacity description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HwMemSizeDesc = null;

        /**
         * Expiration time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Node resource ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EmrResourceId = null;

        /**
         * Renewal flag
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsAutoRenew = null;

        /**
         * Device flag
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeviceClass = null;

        /**
         * Support for configuration adjustment
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Mutable = null;

        /**
         * Multi-cloud disk
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MultiDiskMC> || null}
         */
        this.MCMultiDisk = null;

        /**
         * Database information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CdbInfo || null}
         */
        this.CdbNodeInfo = null;

        /**
         * Private IP
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Whether this node can be terminated. 1: yes, 0: no
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Destroyable = null;

        /**
         * Tags bound to node
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Wether the node is auto-scaling. 0 means common node. 1 means auto-scaling node.
         * @type {number || null}
         */
        this.AutoFlag = null;

        /**
         * Resource type. Valid values: host, pod
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * Whether floating specification is used. `1`: yes; `0`: no
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsDynamicSpec = null;

        /**
         * Floating specification in JSON string
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DynamicPodSpec = null;

        /**
         * Whether to support billing mode change. `0`: no; `1`: yes
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SupportModifyPayMode = null;

        /**
         * System disk type
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RootStorageType = null;

        /**
         * AZ information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Subnet
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {SubnetInfo || null}
         */
        this.SubnetInfo = null;

        /**
         * Client
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Clients = null;

        /**
         * The current system time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CurrentTime = null;

        /**
         * Whether it is used in a federation. Valid values: `0` (no), `1` (yes).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsFederation = null;

        /**
         * Device name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * Service
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceClient = null;

        /**
         * Enabling instance protection for this instance. Valid values: `true` (enable) and `false` (disable).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.DisableApiTermination = null;

        /**
         * The billing version. Valid values: `0` (original billing) and `1` (new billing)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TradeVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.MemDesc = 'MemDesc' in params ? params.MemDesc : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ApplyTime = 'ApplyTime' in params ? params.ApplyTime : null;
        this.FreeTime = 'FreeTime' in params ? params.FreeTime : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.NameTag = 'NameTag' in params ? params.NameTag : null;
        this.Services = 'Services' in params ? params.Services : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.CdbIp = 'CdbIp' in params ? params.CdbIp : null;
        this.CdbPort = 'CdbPort' in params ? params.CdbPort : null;
        this.HwDiskSize = 'HwDiskSize' in params ? params.HwDiskSize : null;
        this.HwDiskSizeDesc = 'HwDiskSizeDesc' in params ? params.HwDiskSizeDesc : null;
        this.HwMemSize = 'HwMemSize' in params ? params.HwMemSize : null;
        this.HwMemSizeDesc = 'HwMemSizeDesc' in params ? params.HwMemSizeDesc : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.EmrResourceId = 'EmrResourceId' in params ? params.EmrResourceId : null;
        this.IsAutoRenew = 'IsAutoRenew' in params ? params.IsAutoRenew : null;
        this.DeviceClass = 'DeviceClass' in params ? params.DeviceClass : null;
        this.Mutable = 'Mutable' in params ? params.Mutable : null;

        if (params.MCMultiDisk) {
            this.MCMultiDisk = new Array();
            for (let z in params.MCMultiDisk) {
                let obj = new MultiDiskMC();
                obj.deserialize(params.MCMultiDisk[z]);
                this.MCMultiDisk.push(obj);
            }
        }

        if (params.CdbNodeInfo) {
            let obj = new CdbInfo();
            obj.deserialize(params.CdbNodeInfo)
            this.CdbNodeInfo = obj;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Destroyable = 'Destroyable' in params ? params.Destroyable : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoFlag = 'AutoFlag' in params ? params.AutoFlag : null;
        this.HardwareResourceType = 'HardwareResourceType' in params ? params.HardwareResourceType : null;
        this.IsDynamicSpec = 'IsDynamicSpec' in params ? params.IsDynamicSpec : null;
        this.DynamicPodSpec = 'DynamicPodSpec' in params ? params.DynamicPodSpec : null;
        this.SupportModifyPayMode = 'SupportModifyPayMode' in params ? params.SupportModifyPayMode : null;
        this.RootStorageType = 'RootStorageType' in params ? params.RootStorageType : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SubnetInfo) {
            let obj = new SubnetInfo();
            obj.deserialize(params.SubnetInfo)
            this.SubnetInfo = obj;
        }
        this.Clients = 'Clients' in params ? params.Clients : null;
        this.CurrentTime = 'CurrentTime' in params ? params.CurrentTime : null;
        this.IsFederation = 'IsFederation' in params ? params.IsFederation : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ServiceClient = 'ServiceClient' in params ? params.ServiceClient : null;
        this.DisableApiTermination = 'DisableApiTermination' in params ? params.DisableApiTermination : null;
        this.TradeVersion = 'TradeVersion' in params ? params.TradeVersion : null;

    }
}

/**
 * The services to operate on
 * @class
 */
class ServiceBasicRestartInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The service name (required), such as HDFS.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * If it is left empty, all processes will be operated on.
         * @type {Array.<ComponentBasicRestartInfo> || null}
         */
        this.ComponentInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

        if (params.ComponentInfoList) {
            this.ComponentInfoList = new Array();
            for (let z in params.ComponentInfoList) {
                let obj = new ComponentBasicRestartInfo();
                obj.deserialize(params.ComponentInfoList[z]);
                this.ComponentInfoList.push(obj);
            }
        }

    }
}

/**
 * ScaleOutCluster response structure.
 * @class
 */
class ScaleOutClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The client token.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * The scale-out workflow ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Custom query filter of the EMR cluster instance list
 * @class
 */
class Filters extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filters by the field value
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
 * The instance prepayment parameter. It applies only when the billing type is `PREPAID`.

 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * The period of monthly subscription, which defaults to 1 and is expressed in month.
Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether to enable auto-renewal. Valid values:
<li>`true`: Enable</li>
<li>`false` (default): Disable</li>
         * @type {boolean || null}
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

module.exports = {
    PodSpecInfo: PodSpecInfo,
    ScaleOutInstanceResponse: ScaleOutInstanceResponse,
    PodVolume: PodVolume,
    CreateInstanceResponse: CreateInstanceResponse,
    TerminateTasksRequest: TerminateTasksRequest,
    HostVolumeContext: HostVolumeContext,
    ScaleOutClusterRequest: ScaleOutClusterRequest,
    DiskSpecInfo: DiskSpecInfo,
    DescribeEmrApplicationStaticsRequest: DescribeEmrApplicationStaticsRequest,
    UserManagerFilter: UserManagerFilter,
    DynamicPodSpec: DynamicPodSpec,
    COSSettings: COSSettings,
    ClusterInstancesInfo: ClusterInstancesInfo,
    ScaleOutInstanceRequest: ScaleOutInstanceRequest,
    ZoneDetailPriceResult: ZoneDetailPriceResult,
    PodNewSpec: PodNewSpec,
    NodeResourceSpec: NodeResourceSpec,
    ModifyResourceScheduleConfigResponse: ModifyResourceScheduleConfigResponse,
    TopologyInfo: TopologyInfo,
    NodeDetailPriceResult: NodeDetailPriceResult,
    Tag: Tag,
    EmrListInstance: EmrListInstance,
    AddUsersForUserManagerResponse: AddUsersForUserManagerResponse,
    EmrProductConfigOutter: EmrProductConfigOutter,
    DescribeInstancesListResponse: DescribeInstancesListResponse,
    TerminateTasksResponse: TerminateTasksResponse,
    PartDetailPriceItem: PartDetailPriceItem,
    DependService: DependService,
    PodSpec: PodSpec,
    InquiryPriceRenewInstanceResponse: InquiryPriceRenewInstanceResponse,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    StartStopServiceOrMonitorRequest: StartStopServiceOrMonitorRequest,
    TerminateInstanceRequest: TerminateInstanceRequest,
    DescribeResourceScheduleRequest: DescribeResourceScheduleRequest,
    Placement: Placement,
    PodParameter: PodParameter,
    AllNodeResourceSpec: AllNodeResourceSpec,
    DescribeUsersForUserManagerRequest: DescribeUsersForUserManagerRequest,
    StrategyConfig: StrategyConfig,
    StartStopServiceOrMonitorResponse: StartStopServiceOrMonitorResponse,
    MultiDisk: MultiDisk,
    PodNewParameter: PodNewParameter,
    SearchItem: SearchItem,
    MultiZoneSetting: MultiZoneSetting,
    TerminateInstanceResponse: TerminateInstanceResponse,
    InquiryPriceUpdateInstanceResponse: InquiryPriceUpdateInstanceResponse,
    SoftDependInfo: SoftDependInfo,
    PersistentVolumeContext: PersistentVolumeContext,
    ScaleOutNodeConfig: ScaleOutNodeConfig,
    DescribeResourceScheduleResponse: DescribeResourceScheduleResponse,
    TerminateClusterNodesResponse: TerminateClusterNodesResponse,
    ModifyResourceSchedulerRequest: ModifyResourceSchedulerRequest,
    LoginSettings: LoginSettings,
    PriceResource: PriceResource,
    CustomServiceDefine: CustomServiceDefine,
    CreateClusterResponse: CreateClusterResponse,
    SubnetInfo: SubnetInfo,
    CreateClusterRequest: CreateClusterRequest,
    DescribeClusterNodesRequest: DescribeClusterNodesRequest,
    ComponentBasicRestartInfo: ComponentBasicRestartInfo,
    CreateInstanceRequest: CreateInstanceRequest,
    UpdateInstanceSettings: UpdateInstanceSettings,
    ScriptBootstrapActionConfig: ScriptBootstrapActionConfig,
    DescribeInstancesRequest: DescribeInstancesRequest,
    InquiryPriceUpdateInstanceRequest: InquiryPriceUpdateInstanceRequest,
    TerminateClusterNodesRequest: TerminateClusterNodesRequest,
    DescribeInstancesListRequest: DescribeInstancesListRequest,
    OutterResource: OutterResource,
    OpScope: OpScope,
    VPCSettings: VPCSettings,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeUsersForUserManagerResponse: DescribeUsersForUserManagerResponse,
    InquiryPriceRenewInstanceRequest: InquiryPriceRenewInstanceRequest,
    CdbInfo: CdbInfo,
    PriceDetail: PriceDetail,
    MultiDiskMC: MultiDiskMC,
    AddUsersForUserManagerRequest: AddUsersForUserManagerRequest,
    ZoneResourceConfiguration: ZoneResourceConfiguration,
    CustomMetaInfo: CustomMetaInfo,
    ApplicationStatics: ApplicationStatics,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    DescribeClusterNodesResponse: DescribeClusterNodesResponse,
    ModifyResourceScheduleConfigRequest: ModifyResourceScheduleConfigRequest,
    UserInfoForUserManager: UserInfoForUserManager,
    ExternalService: ExternalService,
    PreExecuteFileSettings: PreExecuteFileSettings,
    ClusterExternalServiceInfo: ClusterExternalServiceInfo,
    NewResourceSpec: NewResourceSpec,
    InquiryPriceScaleOutInstanceRequest: InquiryPriceScaleOutInstanceRequest,
    Resource: Resource,
    DescribeEmrApplicationStaticsResponse: DescribeEmrApplicationStaticsResponse,
    CustomMetaDBInfo: CustomMetaDBInfo,
    UserManagerUserBriefInfo: UserManagerUserBriefInfo,
    InquiryPriceScaleOutInstanceResponse: InquiryPriceScaleOutInstanceResponse,
    ModifyResourceSchedulerResponse: ModifyResourceSchedulerResponse,
    VirtualPrivateCloud: VirtualPrivateCloud,
    SceneSoftwareConfig: SceneSoftwareConfig,
    ShortNodeInfo: ShortNodeInfo,
    EmrPrice: EmrPrice,
    NodeHardwareInfo: NodeHardwareInfo,
    ServiceBasicRestartInfo: ServiceBasicRestartInfo,
    ScaleOutClusterResponse: ScaleOutClusterResponse,
    Filters: Filters,
    InstanceChargePrepaid: InstanceChargePrepaid,

}
