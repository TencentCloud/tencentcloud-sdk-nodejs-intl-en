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
 * AddNodeResourceConfig request structure.
 * @class
 */
class AddNodeResourceConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node type. Valid values: CORE, TASK, and ROUTER.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource details.
         * @type {Resource || null}
         */
        this.ResourceConfig = null;

        /**
         * Payment mode.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Whether default configuration applies. Valid values: DEFAULT and BACKUP. If it is not specified, the default configuration does not apply.
         * @type {string || null}
         */
        this.IsDefault = null;

        /**
         * Region ID.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * When multiple specifications are added, details of the first specifications are in the ResourceConfig parameter, and those of the second to n-th are in the MultipleResourceConfig parameter.
         * @type {Array.<Resource> || null}
         */
        this.MultipleResourceConfig = null;

        /**
         * Type. Valid values: ComputeResource and EMR. Default value: EMR.
         * @type {string || null}
         */
        this.ResourceBaseType = null;

        /**
         * Computing resource ID.
         * @type {string || null}
         */
        this.ComputeResourceId = null;

        /**
         * Hardware type.
         * @type {string || null}
         */
        this.HardwareResourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.ResourceConfig) {
            let obj = new Resource();
            obj.deserialize(params.ResourceConfig)
            this.ResourceConfig = obj;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.MultipleResourceConfig) {
            this.MultipleResourceConfig = new Array();
            for (let z in params.MultipleResourceConfig) {
                let obj = new Resource();
                obj.deserialize(params.MultipleResourceConfig[z]);
                this.MultipleResourceConfig.push(obj);
            }
        }
        this.ResourceBaseType = 'ResourceBaseType' in params ? params.ResourceBaseType : null;
        this.ComputeResourceId = 'ComputeResourceId' in params ? params.ComputeResourceId : null;
        this.HardwareResourceType = 'HardwareResourceType' in params ? params.HardwareResourceType : null;

    }
}

/**
 * YARN resource scheduling history.
 * @class
 */
class SchedulerTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scheduler type.
         * @type {string || null}
         */
        this.SchedulerName = null;

        /**
         * Operation type.
         * @type {string || null}
         */
        this.OperatorName = null;

        /**
         * Start time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * End time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Status.
         * @type {number || null}
         */
        this.State = null;

        /**
         * Details.
         * @type {Array.<SchedulerTaskDetail> || null}
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SchedulerName = 'SchedulerName' in params ? params.SchedulerName : null;
        this.OperatorName = 'OperatorName' in params ? params.OperatorName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.State = 'State' in params ? params.State : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new SchedulerTaskDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

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
         * 
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Resource ID list for nodes pending termination. Resource ID format: emr-vm-xxxxxxxx. You can query valid resource IDs by logging in to the [console](https://console.cloud.tencent.com/emr).
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
 * DescribeEMREventList response structure.
 * @class
 */
class DescribeEMREventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event details list.
         * @type {Array.<EMREventListItem> || null}
         */
        this.EventList = null;

        /**
         * Total number of compliant events.
         * @type {number || null}
         */
        this.TotalNum = null;

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

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new EMREventListItem();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Node disk information.
 * @class
 */
class DiskSpecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of disks.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * System disk type. Valid values:
<li>CLOUD_SSD: Cloud SSD</li>
<li>CLOUD_PREMIUM: Premium Disk</li>
<li>CLOUD_BASIC: Cloud Basic Disk</li>
<li>LOCAL_BASIC: Local Basic Disk</li>
<li>LOCAL_SSD: Local SSD</li>

Data disk type. Valid values:
<li>CLOUD_SSD: Cloud SSD</li>
<li>CLOUD_PREMIUM: Premium Disk</li>
<li>CLOUD_BASIC: Cloud Basic Disk</li>
<li>LOCAL_BASIC: Local Basic Disk</li>
<li>LOCAL_SSD: Local SSD</li>

<li>CLOUD_HSSD: Enhanced SSD</li>
<li>CLOUD_THROUGHPUT: Throughput-Optimized Cloud Disk</li>
<li>CLOUD_TSSD: Tremendous SSD</li>
<li>CLOUD_BIGDATA: Big Data Cloud Disk</li>
<li>CLOUD_HIGHIO: High-IO Cloud Disk</li>
<li>CLOUD_BSSD: Balanced SSD</li>
<li>REMOTE_SSD: Remote SSD Disk</li>

         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Data capacity (GB).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Additional performance.
         * @type {number || null}
         */
        this.ExtraPerformance = null;

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
        this.ExtraPerformance = 'ExtraPerformance' in params ? params.ExtraPerformance : null;

    }
}

/**
 * Instance specification family.
 * @class
 */
class NodeSpecFamily extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance specification.
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * Instance specification name.
         * @type {string || null}
         */
        this.FamilyName = null;

        /**
         * Sorting order.
         * @type {number || null}
         */
        this.Order = null;

        /**
         * List of instance types.
         * @type {Array.<NodeSpecInstanceType> || null}
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
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.FamilyName = 'FamilyName' in params ? params.FamilyName : null;
        this.Order = 'Order' in params ? params.Order : null;

        if (params.InstanceTypes) {
            this.InstanceTypes = new Array();
            for (let z in params.InstanceTypes) {
                let obj = new NodeSpecInstanceType();
                obj.deserialize(params.InstanceTypes[z]);
                this.InstanceTypes.push(obj);
            }
        }

    }
}

/**
 * Key-value pair, which is mainly for filtering.
 * @class
 */
class KeyValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value.
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
 * DescribeEMREventList request structure.
 * @class
 */
class DescribeEMREventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time for event query.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time for event query.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Event-triggered IP address.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Service role of the affected event.
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Event name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Offset of the event list.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit of the event list.
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
        this.Host = 'Host' in params ? params.Host : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeTrinoQueryInfo response structure.
 * @class
 */
class DescribeTrinoQueryInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number, which is used for pagination query.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of query results.
         * @type {Array.<TrinoQueryInfo> || null}
         */
        this.QueryInfoList = null;

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

        if (params.QueryInfoList) {
            this.QueryInfoList = new Array();
            for (let z in params.QueryInfoList) {
                let obj = new TrinoQueryInfo();
                obj.deserialize(params.QueryInfoList[z]);
                this.QueryInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Spark query details.
 * @class
 */
class SparkQuery extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution statement.
         * @type {string || null}
         */
        this.Statement = null;

        /**
         * Execution duration (ms).
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Execution status.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Query ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Number of scanned partitions.
         * @type {number || null}
         */
        this.ScanPartitionNum = null;

        /**
         * Total number of scanned rows.
         * @type {number || null}
         */
        this.ScanRowNum = null;

        /**
         * Total number of scanned files.
         * @type {number || null}
         */
        this.ScanFileNum = null;

        /**
         * Total scanned and queried data volume (bytes).
         * @type {number || null}
         */
        this.ScanTotalData = null;

        /**
         * Application ID.
         * @type {Array.<string> || null}
         */
        this.ApplicationId = null;

        /**
         * Total number of output rows.
         * @type {number || null}
         */
        this.OutputRowNum = null;

        /**
         * Total number of output files.
         * @type {number || null}
         */
        this.OutputFileNum = null;

        /**
         * Number of output partitions.
         * @type {number || null}
         */
        this.OutputPartitionNum = null;

        /**
         * Total output data volume (bytes).
         * @type {number || null}
         */
        this.OutputTotalData = null;

        /**
         * Start time.
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * End time.
         * @type {number || null}
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
        this.Statement = 'Statement' in params ? params.Statement : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.ScanPartitionNum = 'ScanPartitionNum' in params ? params.ScanPartitionNum : null;
        this.ScanRowNum = 'ScanRowNum' in params ? params.ScanRowNum : null;
        this.ScanFileNum = 'ScanFileNum' in params ? params.ScanFileNum : null;
        this.ScanTotalData = 'ScanTotalData' in params ? params.ScanTotalData : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.OutputRowNum = 'OutputRowNum' in params ? params.OutputRowNum : null;
        this.OutputFileNum = 'OutputFileNum' in params ? params.OutputFileNum : null;
        this.OutputPartitionNum = 'OutputPartitionNum' in params ? params.OutputPartitionNum : null;
        this.OutputTotalData = 'OutputTotalData' in params ? params.OutputTotalData : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Pod floating specifications
 * @class
 */
class DynamicPodSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum number of required CPU cores.
         * @type {number || null}
         */
        this.RequestCpu = null;

        /**
         * Maximum number of required CPU cores.
         * @type {number || null}
         */
        this.LimitCpu = null;

        /**
         * Minimum required memory capacity (MB).
         * @type {number || null}
         */
        this.RequestMemory = null;

        /**
         * Maximum required memory capacity (MB).
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
 * Custom image information.
 * @class
 */
class CustomImage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image source. Valid values: tcr (public image), ccrPersonal (custom image), and ccrAllPersonal (shared image).
         * @type {string || null}
         */
        this.ImageSourceType = null;

        /**
         * Image information.
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * Key used for obtaining an image.
         * @type {ImagePullSecret || null}
         */
        this.ImagePullSecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageSourceType = 'ImageSourceType' in params ? params.ImageSourceType : null;

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.ImagePullSecret) {
            let obj = new ImagePullSecret();
            obj.deserialize(params.ImagePullSecret)
            this.ImagePullSecret = obj;
        }

    }
}

/**
 * DescribeDynamicInstanceDetail response structure.
 * @class
 */
class DescribeDynamicInstanceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Ray cluster name.</p>
         * @type {string || null}
         */
        this.RayClusterName = null;

        /**
         * <p>Ray cluster ID.</p>
         * @type {number || null}
         */
        this.RayClusterId = null;

        /**
         * <p>Creation type.</p><p>Enumeration values:</p><ul><li>1: form creation</li><li>2: YAML creation</li></ul>
         * @type {number || null}
         */
        this.SubmitType = null;

        /**
         * <p>Namespace.</p>
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * <p>labels</p>
         * @type {Array.<NameValue> || null}
         */
        this.Labels = null;

        /**
         * <p>Tolerations</p>
         * @type {Array.<Toleration> || null}
         */
        this.Tolerations = null;

        /**
         * <p>Environment variable.</p>
         * @type {Array.<NameValue> || null}
         */
        this.Env = null;

        /**
         * <p>Whether to rely on external Kerberos components.</p>
         * @type {boolean || null}
         */
        this.SupportExternalKerberosService = null;

        /**
         * <p>Dependent Kerberos cluster.</p>
         * @type {string || null}
         */
        this.KerberosCluster = null;

        /**
         * <p>token</p>
         * @type {string || null}
         */
        this.Token = null;

        /**
         * <p>HeadGroup</p>
         * @type {DynamicInstanceGroupSpec || null}
         */
        this.HeadGroupSpec = null;

        /**
         * <p>WorkerGroup</p>
         * @type {Array.<DynamicInstanceGroupSpec> || null}
         */
        this.WorkerGroupSpecs = null;

        /**
         * <p>Whether to enable storage configuration.</p>
         * @type {boolean || null}
         */
        this.StorageConfigEnabled = null;

        /**
         * <p>Redis instance information.</p>
         * @type {RedisInstance || null}
         */
        this.RedisInstance = null;

        /**
         * <p>Image information.</p>
         * @type {CustomImage || null}
         */
        this.CustomImage = null;

        /**
         * <p>Dashboard link.</p>
         * @type {string || null}
         */
        this.DashboardUrl = null;

        /**
         * <p>Total number of Pods.</p>
         * @type {number || null}
         */
        this.TotalPodCount = null;

        /**
         * <p>Whether to support high availability.</p>
         * @type {boolean || null}
         */
        this.HighAvailability = null;

        /**
         * <p>Storage information.</p>
         * @type {PersistentVolume || null}
         */
        this.PersistentVolume = null;

        /**
         * <p>rayClusterYamlJson</p>
         * @type {string || null}
         */
        this.RayClusterYaml = null;

        /**
         * <p>Image information.</p>
         * @type {ImageInfoV2 || null}
         */
        this.ImageInfoV2 = null;

        /**
         * <p>Whether to enable log collection.</p>
         * @type {boolean || null}
         */
        this.EnableHistoryServer = null;

        /**
         * <p>TensorBoard link.</p>
         * @type {string || null}
         */
        this.TensorBoardUrl = null;

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
        this.RayClusterName = 'RayClusterName' in params ? params.RayClusterName : null;
        this.RayClusterId = 'RayClusterId' in params ? params.RayClusterId : null;
        this.SubmitType = 'SubmitType' in params ? params.SubmitType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new NameValue();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Tolerations) {
            this.Tolerations = new Array();
            for (let z in params.Tolerations) {
                let obj = new Toleration();
                obj.deserialize(params.Tolerations[z]);
                this.Tolerations.push(obj);
            }
        }

        if (params.Env) {
            this.Env = new Array();
            for (let z in params.Env) {
                let obj = new NameValue();
                obj.deserialize(params.Env[z]);
                this.Env.push(obj);
            }
        }
        this.SupportExternalKerberosService = 'SupportExternalKerberosService' in params ? params.SupportExternalKerberosService : null;
        this.KerberosCluster = 'KerberosCluster' in params ? params.KerberosCluster : null;
        this.Token = 'Token' in params ? params.Token : null;

        if (params.HeadGroupSpec) {
            let obj = new DynamicInstanceGroupSpec();
            obj.deserialize(params.HeadGroupSpec)
            this.HeadGroupSpec = obj;
        }

        if (params.WorkerGroupSpecs) {
            this.WorkerGroupSpecs = new Array();
            for (let z in params.WorkerGroupSpecs) {
                let obj = new DynamicInstanceGroupSpec();
                obj.deserialize(params.WorkerGroupSpecs[z]);
                this.WorkerGroupSpecs.push(obj);
            }
        }
        this.StorageConfigEnabled = 'StorageConfigEnabled' in params ? params.StorageConfigEnabled : null;

        if (params.RedisInstance) {
            let obj = new RedisInstance();
            obj.deserialize(params.RedisInstance)
            this.RedisInstance = obj;
        }

        if (params.CustomImage) {
            let obj = new CustomImage();
            obj.deserialize(params.CustomImage)
            this.CustomImage = obj;
        }
        this.DashboardUrl = 'DashboardUrl' in params ? params.DashboardUrl : null;
        this.TotalPodCount = 'TotalPodCount' in params ? params.TotalPodCount : null;
        this.HighAvailability = 'HighAvailability' in params ? params.HighAvailability : null;

        if (params.PersistentVolume) {
            let obj = new PersistentVolume();
            obj.deserialize(params.PersistentVolume)
            this.PersistentVolume = obj;
        }
        this.RayClusterYaml = 'RayClusterYaml' in params ? params.RayClusterYaml : null;

        if (params.ImageInfoV2) {
            let obj = new ImageInfoV2();
            obj.deserialize(params.ImageInfoV2)
            this.ImageInfoV2 = obj;
        }
        this.EnableHistoryServer = 'EnableHistoryServer' in params ? params.EnableHistoryServer : null;
        this.TensorBoardUrl = 'TensorBoardUrl' in params ? params.TensorBoardUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Image and driver configuration for the GPU specification.
 * @class
 */
class GpuImageDriverSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Image ID.</p>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * <p>Driver name.</p>
         * @type {string || null}
         */
        this.DriverName = null;

        /**
         * <p>Driver version.</p>
         * @type {string || null}
         */
        this.DriverVersion = null;

        /**
         * <p>CUDA name.</p>
         * @type {string || null}
         */
        this.CUDAName = null;

        /**
         * <p>CUDA version.</p>
         * @type {string || null}
         */
        this.CUDAVersion = null;

        /**
         * <p>CUDNN name.</p>
         * @type {string || null}
         */
        this.CUDNNName = null;

        /**
         * <p>CUDNN version.</p>
         * @type {string || null}
         */
        this.CUDNNVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.DriverName = 'DriverName' in params ? params.DriverName : null;
        this.DriverVersion = 'DriverVersion' in params ? params.DriverVersion : null;
        this.CUDAName = 'CUDAName' in params ? params.CUDAName : null;
        this.CUDAVersion = 'CUDAVersion' in params ? params.CUDAVersion : null;
        this.CUDNNName = 'CUDNNName' in params ? params.CUDNNName : null;
        this.CUDNNVersion = 'CUDNNVersion' in params ? params.CUDNNVersion : null;

    }
}

/**
 * ResetYarnConfig request structure.
 * @class
 */
class ResetYarnConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * English ID of the EMR cluster.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Alias of the configuration to be reset. Valid values:

- capacityLabel: resets the tag management configuration.
- fair: resets the fair scheduling configuration.
- capacity: resets the capacity scheduling configuration.
         * @type {string || null}
         */
        this.Key = null;

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

    }
}

/**
 * Advanced settings of computing resources.
 * @class
 */
class ComputeResourceAdvanceParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Node Label array.</p>
         * @type {Array.<TkeLabel> || null}
         */
        this.Labels = null;

        /**
         * <p>Node taint.</p>
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * <p>Base64-encoded user script, which is executed before node initialization.</p>
         * @type {string || null}
         */
        this.PreStartUserScript = null;

        /**
         * <p>Base64-encoded user script, which is executed after the Kubernetes component starts. You need to guarantee the script reentrancy and retry logic. The script and generated log files can be viewed in the /data/ccs_userscript/ directory on the node.</p>
         * @type {string || null}
         */
        this.UserScript = null;

        /**
         * <p>Node group ID.</p>
         * @type {string || null}
         */
        this.TkeClusterNodePool = null;

        /**
         * <p>Mode of joining a node pool.</p><p>Enumeration values:</p><ul><li>Inherit: inherits the configuration from the node pool.</li><li>OnlyJoin: joins the node pool only without inheriting the configuration.</li></ul><p>Default value: Inherit.</p>
         * @type {string || null}
         */
        this.NodePoolJoinMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new TkeLabel();
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
        this.PreStartUserScript = 'PreStartUserScript' in params ? params.PreStartUserScript : null;
        this.UserScript = 'UserScript' in params ? params.UserScript : null;
        this.TkeClusterNodePool = 'TkeClusterNodePool' in params ? params.TkeClusterNodePool : null;
        this.NodePoolJoinMode = 'NodePoolJoinMode' in params ? params.NodePoolJoinMode : null;

    }
}

/**
 * Service deployment information.
 * @class
 */
class ServiceDeployInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service name.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * List of role deployment information.
         * @type {Array.<ComponentDeployInfo> || null}
         */
        this.ComponentDeployInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

        if (params.ComponentDeployInfoList) {
            this.ComponentDeployInfoList = new Array();
            for (let z in params.ComponentDeployInfoList) {
                let obj = new ComponentDeployInfo();
                obj.deserialize(params.ComponentDeployInfoList[z]);
                this.ComponentDeployInfoList.push(obj);
            }
        }

    }
}

/**
 * DescribeServiceNodeInfos response structure.
 * @class
 */
class DescribeServiceNodeInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * Process information.
         * @type {Array.<ServiceNodeDetailInfo> || null}
         */
        this.ServiceNodeList = null;

        /**
         * Alias serialization of all nodes in the cluster.
         * @type {string || null}
         */
        this.AliasInfo = null;

        /**
         * List of supported flag nodes.
         * @type {Array.<string> || null}
         */
        this.SupportNodeFlagFilterList = null;

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
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.ServiceNodeList) {
            this.ServiceNodeList = new Array();
            for (let z in params.ServiceNodeList) {
                let obj = new ServiceNodeDetailInfo();
                obj.deserialize(params.ServiceNodeList[z]);
                this.ServiceNodeList.push(obj);
            }
        }
        this.AliasInfo = 'AliasInfo' in params ? params.AliasInfo : null;
        this.SupportNodeFlagFilterList = 'SupportNodeFlagFilterList' in params ? params.SupportNodeFlagFilterList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttachDisks request structure.
 * @class
 */
class AttachDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the EMR cluster.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID of the cloud disk to be mounted.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Mounting mode. Valid values:
AUTO_RENEW: auto-renewal
ALIGN_DEADLINE: automatic alignment with the expiration time
         * @type {string || null}
         */
        this.AlignType = null;

        /**
         * ID list of the CVM instances to which disks are to be mounted.
         * @type {Array.<string> || null}
         */
        this.CvmInstanceIds = null;

        /**
         * Whether to mount newly purchased cloud disks.
         * @type {boolean || null}
         */
        this.CreateDisk = null;

        /**
         * Specifications of newly purchased cloud disks.
         * @type {NodeSpecDiskV2 || null}
         */
        this.DiskSpec = null;

        /**
         * Optional parameter. If this parameter is not passed, only the mounting operation is performed. If True is passed, the cloud disk is set to be terminated with the CVM upon successful mounting. This parameter is applicable only to pay-as-you-go cloud disks.
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * Name list of services that can be configured when a new disk is mounted.
         * @type {Array.<string> || null}
         */
        this.SelectiveConfServices = null;

        /**
         * Disk billing type. Valid values: 1 (monthly subscription) and 3 (committed use).
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * Disk committed use and purchase duration. Valid values: 12, 24, 36, 48, and 60.
         * @type {number || null}
         */
        this.UnderWriteDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.AlignType = 'AlignType' in params ? params.AlignType : null;
        this.CvmInstanceIds = 'CvmInstanceIds' in params ? params.CvmInstanceIds : null;
        this.CreateDisk = 'CreateDisk' in params ? params.CreateDisk : null;

        if (params.DiskSpec) {
            let obj = new NodeSpecDiskV2();
            obj.deserialize(params.DiskSpec)
            this.DiskSpec = obj;
        }
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.SelectiveConfServices = 'SelectiveConfServices' in params ? params.SelectiveConfServices : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.UnderWriteDuration = 'UnderWriteDuration' in params ? params.UnderWriteDuration : null;

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
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value.
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
 * Mapping between the cluster ID and flow ID.
 * @class
 */
class ClusterIDToFlowID extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Flow ID.
         * @type {number || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

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
         * List of successfully added users.
         * @type {Array.<string> || null}
         */
        this.SuccessUserList = null;

        /**
         * List of users failed to be added.
         * @type {Array.<string> || null}
         */
        this.FailedUserList = null;

        /**
         * Flow ID. If the value is greater than 0, the flow is started; if the value is 0, no flow is started.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.SuccessUserList = 'SuccessUserList' in params ? params.SuccessUserList : null;
        this.FailedUserList = 'FailedUserList' in params ? params.FailedUserList : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteNodeResourceConfig request structure.
 * @class
 */
class DeleteNodeResourceConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node configuration ID.
         * @type {number || null}
         */
        this.ResourceConfigId = null;

        /**
         * Node type. Valid values: CORE, TASK, and ROUTER.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Type. Valid values: ComputeResource and EMR. Default value: EMR.
         * @type {string || null}
         */
        this.ResourceBaseType = null;

        /**
         * Computing resource ID.
         * @type {string || null}
         */
        this.ComputeResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceConfigId = 'ResourceConfigId' in params ? params.ResourceConfigId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceBaseType = 'ResourceBaseType' in params ? params.ResourceBaseType : null;
        this.ComputeResourceId = 'ComputeResourceId' in params ? params.ComputeResourceId : null;

    }
}

/**
 * Dynamically generated change details.
 * @class
 */
class DiffHeader extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * ID, which is used by the frontend.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;

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
 * DescribeSparkQueries response structure.
 * @class
 */
class DescribeSparkQueriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Result list.
         * @type {Array.<SparkQuery> || null}
         */
        this.Results = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new SparkQuery();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InstallSoftware request structure.
 * @class
 */
class InstallSoftwareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Cluster ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Component version, for example, presto-0.161. You can view the components that can be installed on the current cluster via InstallSoftWareInfo.</p>
         * @type {Array.<string> || null}
         */
        this.SoftInfo = null;

        /**
         * <p>If you use a monthly subscription cluster and need to purchase a CDB, determine whether to enable auto-renewal for the CDB. Default value: AUTO_RENEW. If auto-renewal is disabled for the newly-added CDB, fill in NOT_AUTO_RENEW.</p>
         * @type {string || null}
         */
        this.CdbAutoRenew = null;

        /**
         * <p>Hive shared metadata database type. Valid values:</p><li>EMR_NEW_META: created by the cluster by default</li><li>EMR_EXIT_METE: EMR-MetaDB specified by the cluster</li><li>USER_CUSTOM_META: custom MetaDB used by the cluster</li>
         * @type {string || null}
         */
        this.MetaType = null;

        /**
         * <p>EMR-MetaDB instance.</p>
         * @type {string || null}
         */
        this.UnifyMetaInstanceId = null;

        /**
         * <p>Custom MetaDB information.</p>
         * @type {CustomMetaInfo || null}
         */
        this.MetaDBInfo = null;

        /**
         * <p>Shared component information.</p>
         * @type {Array.<ExternalService> || null}
         */
        this.ExternalService = null;

        /**
         * <p>Tag information.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Pod specification information of the role.</p>
         * @type {Array.<CloudResource> || null}
         */
        this.CloudResources = null;

        /**
         * <p>Custom deployment information.</p>
         * @type {Array.<ServiceDeployInfo> || null}
         */
        this.ServiceDeployInfoList = null;

        /**
         * <p>Database version.</p>
         * @type {string || null}
         */
        this.DefaultMetaVersion = null;

        /**
         * <p>Whether to enable audit.</p>
         * @type {number || null}
         */
        this.NeedCdbAudit = null;

        /**
         * <p>Additional container configuration.</p>
         * @type {ContainerExtraConf || null}
         */
        this.ContainerExtraConf = null;

        /**
         * <p>Whether to forcibly check the validity of custom components. Currently, it is available only for the Terraform side.</p>
         * @type {boolean || null}
         */
        this.CheckServiceDeployInfo = null;

        /**
         * <p>Custom MetaDB information.</p>
         * @type {Array.<CustomMetaDBInfo> || null}
         */
        this.MetaDBGroupInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SoftInfo = 'SoftInfo' in params ? params.SoftInfo : null;
        this.CdbAutoRenew = 'CdbAutoRenew' in params ? params.CdbAutoRenew : null;
        this.MetaType = 'MetaType' in params ? params.MetaType : null;
        this.UnifyMetaInstanceId = 'UnifyMetaInstanceId' in params ? params.UnifyMetaInstanceId : null;

        if (params.MetaDBInfo) {
            let obj = new CustomMetaInfo();
            obj.deserialize(params.MetaDBInfo)
            this.MetaDBInfo = obj;
        }

        if (params.ExternalService) {
            this.ExternalService = new Array();
            for (let z in params.ExternalService) {
                let obj = new ExternalService();
                obj.deserialize(params.ExternalService[z]);
                this.ExternalService.push(obj);
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

        if (params.CloudResources) {
            this.CloudResources = new Array();
            for (let z in params.CloudResources) {
                let obj = new CloudResource();
                obj.deserialize(params.CloudResources[z]);
                this.CloudResources.push(obj);
            }
        }

        if (params.ServiceDeployInfoList) {
            this.ServiceDeployInfoList = new Array();
            for (let z in params.ServiceDeployInfoList) {
                let obj = new ServiceDeployInfo();
                obj.deserialize(params.ServiceDeployInfoList[z]);
                this.ServiceDeployInfoList.push(obj);
            }
        }
        this.DefaultMetaVersion = 'DefaultMetaVersion' in params ? params.DefaultMetaVersion : null;
        this.NeedCdbAudit = 'NeedCdbAudit' in params ? params.NeedCdbAudit : null;

        if (params.ContainerExtraConf) {
            let obj = new ContainerExtraConf();
            obj.deserialize(params.ContainerExtraConf)
            this.ContainerExtraConf = obj;
        }
        this.CheckServiceDeployInfo = 'CheckServiceDeployInfo' in params ? params.CheckServiceDeployInfo : null;

        if (params.MetaDBGroupInfo) {
            this.MetaDBGroupInfo = new Array();
            for (let z in params.MetaDBGroupInfo) {
                let obj = new CustomMetaDBInfo();
                obj.deserialize(params.MetaDBGroupInfo[z]);
                this.MetaDBGroupInfo.push(obj);
            }
        }

    }
}

/**
 * CFS volume.
 * @class
 */
class CFSVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage volume name.
         * @type {string || null}
         */
        this.VolumeName = null;

        /**
         * File system ID.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * CFSId
         * @type {string || null}
         */
        this.FSId = null;

        /**
         * Mount point IP address.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * CFS subdirectory.
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
        this.VolumeName = 'VolumeName' in params ? params.VolumeName : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FSId = 'FSId' in params ? params.FSId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.SubPath = 'SubPath' in params ? params.SubPath : null;

    }
}

/**
 * DescribeInspectionTaskResult request structure.
 * @class
 */
class DescribeInspectionTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * <p>Original price (CNY).</p>
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * <p>Discounted price (CNY).</p>
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * <p>Time unit for purchasing instances. Valid values:</p><li>s: second</li><li>m: Month</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * <p>Instance purchase duration.</p>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * <p>Price list.</p>
         * @type {Array.<ZoneDetailPriceResult> || null}
         */
        this.PriceList = null;

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
 * DescribeHDFSStorageInfo request structure.
 * @class
 */
class DescribeHDFSStorageInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time for obtaining queried information (s).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time for obtaining queried information (s).
         * @type {number || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Automatic scaling rule based on load metrics.
 * @class
 */
class LoadAutoScaleStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID.
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * Rule name.
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * Cooldown time for a rule to take effect.
         * @type {number || null}
         */
        this.CalmDownTime = null;

        /**
         * Scaling action. Valid values: 1 (scale-out) and 2 (scale-in).
         * @type {number || null}
         */
        this.ScaleAction = null;

        /**
         * Number of scaling items each time the rule takes effect.
         * @type {number || null}
         */
        this.ScaleNum = null;

        /**
         * Metric processing method. Valid values: 1 (MAX), 2 (MIN), and 3 (AVG).
         * @type {number || null}
         */
        this.ProcessMethod = null;

        /**
         * Rule priority, which is invalid during addition. By default, the auto-increment rule is used.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Rule status. Valid values: 1 (enabled) and 3 (disabled).
         * @type {number || null}
         */
        this.StrategyStatus = null;

        /**
         * YARN node label specified for the rule-based scale-out.
         * @type {string || null}
         */
        this.YarnNodeLabel = null;

        /**
         * Effective time of the rule.
         * @type {string || null}
         */
        this.PeriodValid = null;

        /**
         * Graceful scale-in switch.
         * @type {boolean || null}
         */
        this.GraceDownFlag = null;

        /**
         * Graceful scale-in wait time.
         * @type {number || null}
         */
        this.GraceDownTime = null;

        /**
         * Whether to enable task protection.
         * @type {boolean || null}
         */
        this.GraceDownProtectFlag = null;

        /**
         * Bound tag list.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Preset configuration group.
         * @type {string || null}
         */
        this.ConfigGroupAssigned = null;

        /**
         * Calculation method for scaled‑out resources. Valid values: "DEFAULT", "INSTANCE", "CPU", and "MEMORYGB".
"DEFAULT" indicates the default calculation method, which is identical to "INSTANCE".
"INSTANCE" indicates the calculation method based on nodes. This is the default method.
"CPU" indicates the calculation method based on the number of cores of the machine.
"MEMORYGB" indicates the calculation method based on the memory size of the machine.
         * @type {string || null}
         */
        this.MeasureMethod = null;

        /**
         * List of node deployment services, for example, ["HDFS-3.1.2","YARN-3.1.2"].
         * @type {Array.<string> || null}
         */
        this.SoftDeployDesc = null;

        /**
         * Startup process list, for example, ["NodeManager"].
         * @type {string || null}
         */
        this.ServiceNodeDesc = null;

        /**
         * Startup process list.
         * @type {Array.<number> || null}
         */
        this.ServiceNodeInfo = null;

        /**
         * List of services deployed on the node. Valid values: HDFS and YARN. For details, see [Mapping Table for Component Names](https://www.tencentcloud.com/document/product/589/98760?from_cn_redirect=1).
         * @type {Array.<number> || null}
         */
        this.SoftDeployInfo = null;

        /**
         * Multi-metric triggering condition.
         * @type {LoadMetricsConditions || null}
         */
        this.LoadMetricsConditions = null;

        /**
         * Scaling group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Soft. Example value: yarn.
         * @type {string || null}
         */
        this.Soft = null;

        /**
         * Task protection time.
         * @type {number || null}
         */
        this.GraceDownProtectTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.CalmDownTime = 'CalmDownTime' in params ? params.CalmDownTime : null;
        this.ScaleAction = 'ScaleAction' in params ? params.ScaleAction : null;
        this.ScaleNum = 'ScaleNum' in params ? params.ScaleNum : null;
        this.ProcessMethod = 'ProcessMethod' in params ? params.ProcessMethod : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.StrategyStatus = 'StrategyStatus' in params ? params.StrategyStatus : null;
        this.YarnNodeLabel = 'YarnNodeLabel' in params ? params.YarnNodeLabel : null;
        this.PeriodValid = 'PeriodValid' in params ? params.PeriodValid : null;
        this.GraceDownFlag = 'GraceDownFlag' in params ? params.GraceDownFlag : null;
        this.GraceDownTime = 'GraceDownTime' in params ? params.GraceDownTime : null;
        this.GraceDownProtectFlag = 'GraceDownProtectFlag' in params ? params.GraceDownProtectFlag : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ConfigGroupAssigned = 'ConfigGroupAssigned' in params ? params.ConfigGroupAssigned : null;
        this.MeasureMethod = 'MeasureMethod' in params ? params.MeasureMethod : null;
        this.SoftDeployDesc = 'SoftDeployDesc' in params ? params.SoftDeployDesc : null;
        this.ServiceNodeDesc = 'ServiceNodeDesc' in params ? params.ServiceNodeDesc : null;
        this.ServiceNodeInfo = 'ServiceNodeInfo' in params ? params.ServiceNodeInfo : null;
        this.SoftDeployInfo = 'SoftDeployInfo' in params ? params.SoftDeployInfo : null;

        if (params.LoadMetricsConditions) {
            let obj = new LoadMetricsConditions();
            obj.deserialize(params.LoadMetricsConditions)
            this.LoadMetricsConditions = obj;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Soft = 'Soft' in params ? params.Soft : null;
        this.GraceDownProtectTime = 'GraceDownProtectTime' in params ? params.GraceDownProtectTime : null;

    }
}

/**
 * DescribeMetaDBInfo response structure.
 * @class
 */
class DescribeMetaDBInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Custom database data.</p>
         * @type {Array.<CustomMetaDBInfo> || null}
         */
        this.MetaDBGroupInfo = null;

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

        if (params.MetaDBGroupInfo) {
            this.MetaDBGroupInfo = new Array();
            for (let z in params.MetaDBGroupInfo) {
                let obj = new CustomMetaDBInfo();
                obj.deserialize(params.MetaDBGroupInfo[z]);
                this.MetaDBGroupInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WebUI access information.
 * @class
 */
class WebUIInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Access address, which may be left empty.</p>
         * @type {string || null}
         */
        this.Url = null;

        /**
         * <p>WebUI status. Valid values:<br>-1: indicates that the current service does not have WebUI;<br>0: indicates that the current service has WebUI but does not have the KNOX service installed;<br>1: indicates that the current service has WebUI and has the KNOX service installed, but it does not have public network access enabled for the KNOX service;<br>2: indicates that the current service has WebUI, has the KNOX service installed, and has public network access enabled.</p>
         * @type {number || null}
         */
        this.WebUIStatus = null;

        /**
         * <p>Service name.</p>
         * @type {string || null}
         */
        this.ServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.WebUIStatus = 'WebUIStatus' in params ? params.WebUIStatus : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * Serverless HBase prepaid settings.
 * @class
 */
class PrePaySetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time.
         * @type {Period || null}
         */
        this.Period = null;

        /**
         * Auto-renewal flag. Valid values: 0 (notifies before expiration but does not trigger auto-renewal), 1 (notifies before expiration and triggers auto-renewal), and 2 (does not notify before expiration and does not trigger auto-renewal).
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Period) {
            let obj = new Period();
            obj.deserialize(params.Period)
            this.Period = obj;
        }
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * DescribeGlobalConfig response structure.
 * @class
 */
class DescribeGlobalConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the resource scheduling feature is enabled.
         * @type {boolean || null}
         */
        this.EnableResourceSchedule = null;

        /**
         * Currently effective resource scheduler.
         * @type {string || null}
         */
        this.ActiveScheduler = null;

        /**
         * Information of the fair scheduler.
         * @type {CapacityGlobalConfig || null}
         */
        this.CapacityGlobalConfig = null;

        /**
         * Information of the capacity scheduler.
         * @type {FairGlobalConfig || null}
         */
        this.FairGlobalConfig = null;

        /**
         * Latest resource scheduler.
         * @type {string || null}
         */
        this.Scheduler = null;

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
        this.EnableResourceSchedule = 'EnableResourceSchedule' in params ? params.EnableResourceSchedule : null;
        this.ActiveScheduler = 'ActiveScheduler' in params ? params.ActiveScheduler : null;

        if (params.CapacityGlobalConfig) {
            let obj = new CapacityGlobalConfig();
            obj.deserialize(params.CapacityGlobalConfig)
            this.CapacityGlobalConfig = obj;
        }

        if (params.FairGlobalConfig) {
            let obj = new FairGlobalConfig();
            obj.deserialize(params.FairGlobalConfig)
            this.FairGlobalConfig = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Pod custom permission and parameter.
 * @class
 */
class PodParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * TKE or EKS cluster ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Custom permission.
Example:
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
         * Custom parameter.
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
 * Resource description.
 * @class
 */
class AllNodeResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Description of Master node resources.
         * @type {NodeResourceSpec || null}
         */
        this.MasterResourceSpec = null;

        /**
         * Description of Core node resources.
         * @type {NodeResourceSpec || null}
         */
        this.CoreResourceSpec = null;

        /**
         * Description of Task node resources.
         * @type {NodeResourceSpec || null}
         */
        this.TaskResourceSpec = null;

        /**
         * Description of Common node resources.
         * @type {NodeResourceSpec || null}
         */
        this.CommonResourceSpec = null;

        /**
         * Number of Master nodes.
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * Number of Core nodes.
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * Number of Task nodes.
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * Number of Common nodes.
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
 * Kubernetes Taint
 * @class
 */
class Taint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Taint Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Taint Value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Taint Effect
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
 * Configuration for restarting services/stopping services/starting services/monitoring data.
 * @class
 */
class StrategyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: disables rolling restart.
1: enables rolling start.
         * @type {number || null}
         */
        this.RollingRestartSwitch = null;

        /**
         * Number of instances to restart per batch for rolling restart. Maximum value: 99999.
         * @type {number || null}
         */
        this.BatchSize = null;

        /**
         * Stop and wait time for rolling restart per batch. Maximum interval: 5 minutes. Unit: seconds.
         * @type {number || null}
         */
        this.TimeWait = null;

        /**
         * Operation failure processing policy. Valid values: 0 (blocking upon the failure) and 1 (automatically skipping the failure).
         * @type {number || null}
         */
        this.DealOnFail = null;

        /**
         * Parameters required in the instruction.
         * @type {Array.<Arg> || null}
         */
        this.Args = null;

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

        if (params.Args) {
            this.Args = new Array();
            for (let z in params.Args) {
                let obj = new Arg();
                obj.deserialize(params.Args[z]);
                this.Args.push(obj);
            }
        }

    }
}

/**
 * ModifyResource request structure.
 * @class
 */
class ModifyResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Billing type.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Changed CPU.
         * @type {number || null}
         */
        this.NewCpu = null;

        /**
         * Changed memory.
         * @type {number || null}
         */
        this.NewMem = null;

        /**
         * Token
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Changed machine specifications.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Node ID list.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.NewCpu = 'NewCpu' in params ? params.NewCpu : null;
        this.NewMem = 'NewMem' in params ? params.NewMem : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ResourceIdList = 'ResourceIdList' in params ? params.ResourceIdList : null;

    }
}

/**
 * Key used for obtaining an image.
 * @class
 */
class ImagePullSecret extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace of the source key.
         * @type {string || null}
         */
        this.SourceNamespace = null;

        /**
         * Key name list.
         * @type {Array.<string> || null}
         */
        this.SecretNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceNamespace = 'SourceNamespace' in params ? params.SourceNamespace : null;
        this.SecretNames = 'SecretNames' in params ? params.SecretNames : null;

    }
}

/**
 * DescribeBootScript response structure.
 * @class
 */
class DescribeBootScriptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bootstrap script details.
         * @type {DescribeBootScriptRsp || null}
         */
        this.Detail = null;

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

        if (params.Detail) {
            let obj = new DescribeBootScriptRsp();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Description of the Pod storage device.
 * @class
 */
class PodVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage type. Valid values: "pvc" and "hostpath".
         * @type {string || null}
         */
        this.VolumeType = null;

        /**
         * When VolumeType is set to "pvc", this parameter takes effect.
         * @type {PersistentVolumeContext || null}
         */
        this.PVCVolume = null;

        /**
         * When VolumeType is set to "hostpath", this parameter takes effect.
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
 * Multi-cloud disk parameter.
 * @class
 */
class MultiDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk type. Valid values:
<li>CLOUD_SSD: Cloud SSD</li>
<li>CLOUD_PREMIUM: Premium Disk</li>
<li>CLOUD_HSSD: Enhanced SSD</li>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Cloud disk size.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Number of cloud disks of this type.
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
 * DescribeHBaseTableRequestMetric request structure.
 * @class
 */
class DescribeHBaseTableRequestMetricRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * HBase table name.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * HBase RegionServer service.
         * @type {string || null}
         */
        this.RegionServer = null;

        /**
         * Specifies the data monitoring granularity to be obtained.
         * @type {string || null}
         */
        this.Downsample = null;

        /**
         * Specifies the start timestamp of the monitoring data to be queried.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Specifies the end timestamp of the monitoring data to be queried.
         * @type {number || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.RegionServer = 'RegionServer' in params ? params.RegionServer : null;
        this.Downsample = 'Downsample' in params ? params.Downsample : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Node disk type.
 * @class
 */
class NodeSpecDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Disk type.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Specified disk size.
         * @type {number || null}
         */
        this.DefaultDiskSize = null;

        /**
         * Whether it is a special data disk, for example, a single-replica disk.
         * @type {boolean || null}
         */
        this.IsSpecialDisk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DefaultDiskSize = 'DefaultDiskSize' in params ? params.DefaultDiskSize : null;
        this.IsSpecialDisk = 'IsSpecialDisk' in params ? params.IsSpecialDisk : null;

    }
}

/**
 * ModifyInspectionSettings response structure.
 * @class
 */
class ModifyInspectionSettingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value description.
         * @type {string || null}
         */
        this.Info = null;

        /**
         * ID of the successfully modified inspection task.
         * @type {string || null}
         */
        this.JobId = null;

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
        this.Info = 'Info' in params ? params.Info : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * <p>Node billing mode. Valid values:</p><li>PREPAID: prepaid, that is, yearly/monthly subscription</li><li>POSTPAID_BY_HOUR: pay-as-you-go on an hourly basis</li><li>SPOTPAID: spot billing (for Task nodes only)</li>
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * <p>Cluster ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Type and number of nodes for the scale-out.</p>
         * @type {ScaleOutNodeConfig || null}
         */
        this.ScaleOutNodeConfig = null;

        /**
         * <p>Unique random identifier, which is valid for five minutes and needs to be specified by the caller. This prevents the client from repeatedly creating resources. Example value: a9a90aa6-<strong><strong>-</strong></strong>-****-fae36063280.</p>
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * <p>Parameter settings related to yearly/monthly subscription. This parameter can be used to specify the purchase duration of a yearly/monthly subscription instance, whether to enable auto-renewal, and other attributes. This parameter is required if the billing mode of the specified instance is prepaid.</p>
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * <p><a href="https://www.tencentcloud.com/document/product/589/35656?from_cn_redirect=1">Bootstrap operation</a> script settings.</p>
         * @type {Array.<ScriptBootstrapActionConfig> || null}
         */
        this.ScriptBootstrapActionConfig = null;

        /**
         * <p>To scale out deployment services, new nodes will inherit the services deployed on the current node type by default. The deployment service includes default optional services. This parameter is supported only when optional services are used. For example, if existing task nodes have HDFS, YARN, and impala deployed, when using the API to scale out Task nodes without deploying impala, fill in only HDFS and YARN for the deployment service. For details, see <a href="https://www.tencentcloud.com/document/product/589/98760?from_cn_redirect=1">Component Name Mapping Table</a>.</p>
         * @type {Array.<number> || null}
         */
        this.SoftDeployInfo = null;

        /**
         * <p>Deployment processes. By default, all processes of the scaled‑out service are deployed. Deployment processes can be modified. For example, if the deployed services for the current task node are HDFS, YARN, and impala, the default deployment services are DataNode, NodeManager, and ImpalaServer. If you need to modify deployment process information, the deployment processes can be DataNode, NodeManager, and ImpalaServerCoordinator or DataNode, NodeManager, and ImpalaServerExecutor. For details, see <a href="https://www.tencentcloud.com/document/product/589/98760?from_cn_redirect=1">Process Name Mapping Table</a>.</p>
         * @type {Array.<number> || null}
         */
        this.ServiceNodeInfo = null;

        /**
         * <p>List of dispersed placement group IDs. Currently, only one ID can be specified.<br>This parameter can be obtained by calling the DisasterRecoverGroupId field in the response result of <a href="https://www.tencentcloud.com/document/product/213/17810?from_cn_redirect=1">DescribeDisasterRecoverGroups</a>.</p>
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * <p>List of tags bound to nodes for the scale-out.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Resource type selected for the scale-out. Valid values: &quot;HOST&quot;, &quot;POD&quot;, and &quot;MNode&quot;. HOST indicates ordinary CVM resources, POD indicates resources provided by a TKE cluster or an EKS cluster, and MNode indicates fully managed resources.</p>
         * @type {string || null}
         */
        this.HardwareSourceType = null;

        /**
         * <p>Pod-related resource information.</p>
         * @type {PodSpecInfo || null}
         */
        this.PodSpecInfo = null;

        /**
         * <p>Machine group name selected for the ClickHouse cluster scale-out.</p>
         * @type {string || null}
         */
        this.ClickHouseClusterName = null;

        /**
         * <p>Machine group type selected for the ClickHouse cluster scale-out. Valid values: new (adds a group) and old (selects an existing group).</p>
         * @type {string || null}
         */
        this.ClickHouseClusterType = null;

        /**
         * <p>YARN node label specified for the scale-out.</p>
         * @type {string || null}
         */
        this.YarnNodeLabel = null;

        /**
         * <p>Whether to start the service after a scale-out. Default value: false. Valid values:</p><li>true: yes</li><li>false: no</li>
         * @type {boolean || null}
         */
        this.EnableStartServiceFlag = null;

        /**
         * <p>Specification settings.</p>
         * @type {NodeResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * <p>AZ to which the instance belongs, for example, ap-guangzhou-1. This parameter can be obtained from the Zone field in the response of <a href="https://www.tencentcloud.com/document/product/213/15707?from_cn_redirect=1">DescribeZones</a>.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Subnet. The subnet used during cluster creation is selected by default.</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Configuration group specified for the scale-out.</p>
         * @type {Array.<ScaleOutServiceConfGroupsInfo> || null}
         */
        this.ScaleOutServiceConfGroupsInfo = null;

        /**
         * <p>Node flag information, which is currently only provided for the Terraform platform.</p>
         * @type {NodeMark || null}
         */
        this.NodeMarks = null;

        /**
         * <p>Name of the compute group specified for the scale-out.</p>
         * @type {string || null}
         */
        this.WarehouseName = null;

        /**
         * <p>Partition of a partition placement group.</p>
         * @type {number || null}
         */
        this.PartitionNumber = null;

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

        if (params.ScaleOutServiceConfGroupsInfo) {
            this.ScaleOutServiceConfGroupsInfo = new Array();
            for (let z in params.ScaleOutServiceConfGroupsInfo) {
                let obj = new ScaleOutServiceConfGroupsInfo();
                obj.deserialize(params.ScaleOutServiceConfGroupsInfo[z]);
                this.ScaleOutServiceConfGroupsInfo.push(obj);
            }
        }

        if (params.NodeMarks) {
            let obj = new NodeMark();
            obj.deserialize(params.NodeMarks)
            this.NodeMarks = obj;
        }
        this.WarehouseName = 'WarehouseName' in params ? params.WarehouseName : null;
        this.PartitionNumber = 'PartitionNumber' in params ? params.PartitionNumber : null;

    }
}

/**
 * Node deployment configuration information, which is provided for the Terraform team.
 * @class
 */
class ServiceDeploy extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Component name.</p>
         * @type {string || null}
         */
        this.SoftwareName = null;

        /**
         * <p>Role name under the component.</p>
         * @type {Array.<string> || null}
         */
        this.Roles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SoftwareName = 'SoftwareName' in params ? params.SoftwareName : null;
        this.Roles = 'Roles' in params ? params.Roles : null;

    }
}

/**
 * DescribeHiveQueries request structure.
 * @class
 */
class DescribeHiveQueriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time (s).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time (s). The difference between the values of EndTime and StartTime cannot exceed 86,400 seconds (one day).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Starting offset for pages, starting from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Value range: [1, 100].
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Execution status, for example, ERROR.
         * @type {Array.<string> || null}
         */
        this.State = null;

        /**
         * Time point earlier than the end time.
         * @type {number || null}
         */
        this.EndTimeGte = null;

        /**
         * Time point later than the end time.
         * @type {number || null}
         */
        this.EndTimeLte = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.State = 'State' in params ? params.State : null;
        this.EndTimeGte = 'EndTimeGte' in params ? params.EndTimeGte : null;
        this.EndTimeLte = 'EndTimeLte' in params ? params.EndTimeLte : null;

    }
}

/**
 * Response result of the user group.
 * @class
 */
class ResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group name.
         * @type {string || null}
         */
        this.Item = null;

        /**
         * Whether the user group is created successfully.
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * If the creation fails, specify the reason for the failure.
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
        this.Item = 'Item' in params ? params.Item : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

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
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DAG information.
 * @class
 */
class DAGInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query ID.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * DAG type. Only StarRocks is supported currently.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Returned JSON string of the DAG.
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * AddMetricScaleStrategy response structure.
 * @class
 */
class AddMetricScaleStrategyResponse extends  AbstractModel {
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
 * DescribeNodeResourceConfigFast request structure.
 * @class
 */
class DescribeNodeResourceConfigFastRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node type. Valid values: CORE, TASK, ROUTER, and ALL.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Billing type.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * AZ ID.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Type. Valid values: ComputeResource and EMR. Default value: EMR.
         * @type {string || null}
         */
        this.ResourceBaseType = null;

        /**
         * Computing resource ID.
         * @type {string || null}
         */
        this.ComputeResourceId = null;

        /**
         * Hardware type.
         * @type {string || null}
         */
        this.HardwareResourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ResourceBaseType = 'ResourceBaseType' in params ? params.ResourceBaseType : null;
        this.ComputeResourceId = 'ComputeResourceId' in params ? params.ComputeResourceId : null;
        this.HardwareResourceType = 'HardwareResourceType' in params ? params.HardwareResourceType : null;

    }
}

/**
 * Specifications management, which includes the specifications type description.
 * @class
 */
class NodeResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Configuration ID.</p>
         * @type {number || null}
         */
        this.ResourceConfigId = null;

        /**
         * <p>Resource</p>
         * @type {Resource || null}
         */
        this.Resource = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * <p>Whether the default configuration applies. Valid values: DEFAULT and BACKUP.</p>
         * @type {string || null}
         */
        this.IsDefault = null;

        /**
         * <p>Remaining of this type.</p>
         * @type {number || null}
         */
        this.MaxResourceNum = null;

        /**
         * <p>Supported committed use duration.</p>
         * @type {Array.<number> || null}
         */
        this.PrepaidUnderwritePeriods = null;

        /**
         * <p>Number of quotas.</p>
         * @type {number || null}
         */
        this.QuotaNum = null;

        /**
         * <p>Quota unit.</p>
         * @type {string || null}
         */
        this.QuotaUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceConfigId = 'ResourceConfigId' in params ? params.ResourceConfigId : null;

        if (params.Resource) {
            let obj = new Resource();
            obj.deserialize(params.Resource)
            this.Resource = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.MaxResourceNum = 'MaxResourceNum' in params ? params.MaxResourceNum : null;
        this.PrepaidUnderwritePeriods = 'PrepaidUnderwritePeriods' in params ? params.PrepaidUnderwritePeriods : null;
        this.QuotaNum = 'QuotaNum' in params ? params.QuotaNum : null;
        this.QuotaUnit = 'QuotaUnit' in params ? params.QuotaUnit : null;

    }
}

/**
 * Insight result item.
 * @class
 */
class InsightResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * When Type is set to HIVE, the value is the Hive query ID; when Type is set to MAPREDUCE, SPARK or TEZ, the value is YarnAppID.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Insight application type. Valid values: HIVE, SPARK, MAPREDUCE, and TEZ.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Insight rule ID.
HIVE-ScanManyMeta: excessively large amount of scanned metadata
HIVE-ScanManyPartition: large table scan
HIVE-SlowCompile: excessively long compilation durationHIVE-UnSuitableConfig: improper parameter
MAPREDUCE-MapperDataSkew: Map data skew
MAPREDUCE-MapperMemWaste: MapMemory resource waste
MAPREDUCE-MapperSlowTask: Map slow task
MAPREDUCE-MapperTaskGC:MapperTaskGC
MAPREDUCE-MemExceeded: peak memory exceeded
MAPREDUCE-ReducerDataSkew: Reduce data skew
MAPREDUCE-ReducerMemWaste: ReduceMemory resource waste
MAPREDUCE-ReducerSlowTask: Reduce slow task
MAPREDUCE-ReducerTaskGC:ReducerTaskGC
MAPREDUCE-SchedulingDelay: scheduling delay
SPARK-CpuWaste: CPU resource waste
SPARK-DataSkew: data skew
SPARK-ExecutorGC:ExecutorGC
SPARK-MemExceeded: peak memory exceeded
SPARK-MemWaste: Memory resource waste
SPARK-ScheduleOverhead:ScheduleOverhead
SPARK-ScheduleSkew: scheduling skew
SPARK-SlowTask: slow task
TEZ-DataSkew: data skew
TEZ-MapperDataSkew: Map data skew
TEZ-ReducerDataSkew: Reduce data skew
TEZ-TezMemWaste: Memory resource waste
TEZ-TezSlowTask: slow task
TEZ-TezTaskGC:TasksGC
         * @type {string || null}
         */
        this.RuleID = null;

        /**
         * Insight rule name. Refer to the description of RuleID.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Insight rule interpretation.
         * @type {string || null}
         */
        this.RuleExplain = null;

        /**
         * Details.
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * Recommended message.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Insight anomaly metric value. For insight items of the same type, a larger value indicates higher severity. Insight items of different types are not comparable.
         * @type {number || null}
         */
        this.Value = null;

        /**
         * Scheduling task execution ID.
         * @type {string || null}
         */
        this.ScheduleTaskExecID = null;

        /**
         * Scheduling flow (DAG).
         * @type {string || null}
         */
        this.ScheduleFlowName = null;

        /**
         * Task node in the scheduling flow.
         * @type {string || null}
         */
        this.ScheduleTaskName = null;

        /**
         * Some core configurations of the YARN task.
         * @type {string || null}
         */
        this.JobConf = null;

        /**
         * Insight into structured information.
         * @type {string || null}
         */
        this.Context = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleExplain = 'RuleExplain' in params ? params.RuleExplain : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ScheduleTaskExecID = 'ScheduleTaskExecID' in params ? params.ScheduleTaskExecID : null;
        this.ScheduleFlowName = 'ScheduleFlowName' in params ? params.ScheduleFlowName : null;
        this.ScheduleTaskName = 'ScheduleTaskName' in params ? params.ScheduleTaskName : null;
        this.JobConf = 'JobConf' in params ? params.JobConf : null;
        this.Context = 'Context' in params ? params.Context : null;

    }
}

/**
 * DescribeSLInstanceList response structure.
 * @class
 */
class DescribeSLInstanceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of instances that meet the criteria.	
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * Instance information list. If pagination is applied, only the current page's instance information list is displayed.
         * @type {Array.<SLInstanceInfo> || null}
         */
        this.InstancesList = null;

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
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.InstancesList) {
            this.InstancesList = new Array();
            for (let z in params.InstancesList) {
                let obj = new SLInstanceInfo();
                obj.deserialize(params.InstancesList[z]);
                this.InstancesList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDynamicInstance response structure.
 * @class
 */
class ModifyDynamicInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Asynchronous flow ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServiceConfGroupInfos request structure.
 * @class
 */
class DescribeServiceConfGroupInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Component name.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Configuration group name.
         * @type {string || null}
         */
        this.ConfGroupName = null;

        /**
         * Page number, starting from 1.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ConfGroupName = 'ConfGroupName' in params ? params.ConfGroupName : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

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
         * Time unit for the configuration change. Valid values:
<li>s: second. When PayMode is set to 0, TimeUnit can only be set to s.</li>
<li>m: month. When PayMode is set to 1, TimeUnit can only be set to m.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Configuration change duration, which is used together with TimeUnit.
<li>When TimeUnit is set to s, this parameter can only be set to 3600, indicating a pay-as-you-go instance.</li>
<li>When TimeUnit is set to m, the number entered for this parameter indicates the purchase duration of a yearly/monthly subscription instance. For example, the value 1 indicates one month.</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Instance billing mode. Valid values:
<li>0: pay-as-you-go</li>
<li>1: monthly subscription</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 
         * @type {UpdateInstanceSettings || null}
         */
        this.UpdateSpec = null;

        /**
         * 
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Currency type. Valid values:
<li>CNY: RMB</li>
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * ID list of resources modified in batches.
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
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.UpdateSpec) {
            let obj = new UpdateInstanceSettings();
            obj.deserialize(params.UpdateSpec)
            this.UpdateSpec = obj;
        }

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
 * DescribeDynamicInstanceDetail request structure.
 * @class
 */
class DescribeDynamicInstanceDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>EMR cluster ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Ray cluster ID.</p>
         * @type {number || null}
         */
        this.RayClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RayClusterId = 'RayClusterId' in params ? params.RayClusterId : null;

    }
}

/**
 * AttachDisks response structure.
 * @class
 */
class AttachDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Weekly repetition task policy for scheduled scale-outs.
 * @class
 */
class WeekRepeatStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specific time for repetition task execution, for example, 01:02:00.
         * @type {string || null}
         */
        this.ExecuteAtTimeOfDay = null;

        /**
         * Description of the day within a week. For example, [1,3,4] indicates Monday, Wednesday, and Thursday.
         * @type {Array.<number> || null}
         */
        this.DaysOfWeek = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecuteAtTimeOfDay = 'ExecuteAtTimeOfDay' in params ? params.ExecuteAtTimeOfDay : null;
        this.DaysOfWeek = 'DaysOfWeek' in params ? params.DaysOfWeek : null;

    }
}

/**
 * CLB settings for container cluster Pod service.
 * @class
 */
class CLBSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB type. Valid values: PUBLIC_IP (supports public network CLB) and INTERNAL_IP (supports private network CLB).
         * @type {string || null}
         */
        this.CLBType = null;

        /**
         * Settings for VPC and subnet information.
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CLBType = 'CLBType' in params ? params.CLBType : null;

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }

    }
}

/**
 * DescribeSparkQueries request structure.
 * @class
 */
class DescribeSparkQueriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Starting offset for pages, starting from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Value range: [1, 100].
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Execution status. Valid values: RUNNING, COMPLETED, and FAILED.
         * @type {Array.<string> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Serverless HBase monthly subscription duration.
 * @class
 */
class Period extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time span.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Time unit. "m" stands for month(s).
         * @type {string || null}
         */
        this.TimeUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

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
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start timestamp (s).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End timestamp (s).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Filtered queue name.
         * @type {Array.<string> || null}
         */
        this.Queues = null;

        /**
         * Filtered username.
         * @type {Array.<string> || null}
         */
        this.Users = null;

        /**
         * Filtered job type.
         * @type {Array.<string> || null}
         */
        this.ApplicationTypes = null;

        /**
         * Grouping field. Valid values: queue, user, and applicationType.
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

        /**
         * Sorting field. Valid values: sumMemorySeconds, sumVCoreSeconds, sumHDFSBytesWritten, and sumHDFSBytesRead.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: 0 (descending) and 1 (ascending).
         * @type {number || null}
         */
        this.IsAsc = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Value range: [10, 100].
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
 * DescribeUsersForUserManager response structure.
 * @class
 */
class DescribeUsersForUserManagerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * User information list.
         * @type {Array.<UserManagerUserBriefInfo> || null}
         */
        this.UserManagerUserList = null;

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
 * DescribeResourceScheduleDiffDetail request structure.
 * @class
 */
class DescribeResourceScheduleDiffDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * English ID of the EMR cluster.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Scheduler for the queried change details. Valid values: fair and capacity. If this parameter is not passed or an empty value is passed, the latest scheduler is used.
         * @type {string || null}
         */
        this.Scheduler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;

    }
}

/**
 * Response parameter.
 * @class
 */
class CdbInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database instance.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Database IP address.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Database port.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Database memory specifications.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Database disk specifications.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Service flag.
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Expiration time.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Application time.
         * @type {string || null}
         */
        this.ApplyTime = null;

        /**
         * Payment type.
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * Expiration flag.
         * @type {boolean || null}
         */
        this.ExpireFlag = null;

        /**
         * Database status.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Renewal flag.
         * @type {number || null}
         */
        this.IsAutoRenew = null;

        /**
         * Database string.
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * ZoneId
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * RegionId
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
 * Price details.
 * @class
 */
class PriceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Price calculation formula.
         * @type {string || null}
         */
        this.Formula = null;

        /**
         * Original price.
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price.
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
 * DescribeSLInstance request structure.
 * @class
 */
class DescribeSLInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance unique identifier (string).
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
 * ModifyAutoRenewFlag request structure.
 * @class
 */
class ModifyAutoRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance ID.
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * NOTIFY_AND_MANUAL_RENEW: The system sends notifications of the upcoming expiration but does not trigger auto‑renewal. NOTIFY_AND_AUTO_RENEW: The system sends notifications of the upcoming expiration and triggers auto‑renewal. DISABLE_NOTIFY_AND_MANUAL_RENEW: The system does not notify before expiration and does not trigger auto-renewal.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Computing resource ID.
         * @type {string || null}
         */
        this.ComputeResourceId = null;

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
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ComputeResourceId = 'ComputeResourceId' in params ? params.ComputeResourceId : null;

    }
}

/**
 * AddNodeResourceConfig response structure.
 * @class
 */
class AddNodeResourceConfigResponse extends  AbstractModel {
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
 * List of added user information.
 * @class
 */
class UserInfoForUserManager extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Group to which the user belongs.
         * @type {string || null}
         */
        this.UserGroup = null;

        /**
         * Password.
         * @type {string || null}
         */
        this.PassWord = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.ReMark = null;

        /**
         * User subgroup.
         * @type {Array.<string> || null}
         */
        this.Groups = null;

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
        this.Groups = 'Groups' in params ? params.Groups : null;

    }
}

/**
 * Tag selector.
 * @class
 */
class LabelSelector extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Tag exact match condition.</p>
         * @type {Array.<StringMap> || null}
         */
        this.MatchLabels = null;

        /**
         * <p>Tag expression match condition.</p>
         * @type {Array.<LabelSelectorRequirement> || null}
         */
        this.MatchExpressions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchLabels) {
            this.MatchLabels = new Array();
            for (let z in params.MatchLabels) {
                let obj = new StringMap();
                obj.deserialize(params.MatchLabels[z]);
                this.MatchLabels.push(obj);
            }
        }

        if (params.MatchExpressions) {
            this.MatchExpressions = new Array();
            for (let z in params.MatchExpressions) {
                let obj = new LabelSelectorRequirement();
                obj.deserialize(params.MatchExpressions[z]);
                this.MatchExpressions.push(obj);
            }
        }

    }
}

/**
 * DeleteAutoScaleStrategy response structure.
 * @class
 */
class DeleteAutoScaleStrategyResponse extends  AbstractModel {
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
 * Component restart policy.
 * @class
 */
class RestartPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Restart policy name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Policy display name.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Policy description.
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * Optional range for the number of nodes restarted in batches.
         * @type {Array.<number> || null}
         */
        this.BatchSizeRange = null;

        /**
         * Whether it is the default policy.
         * @type {string || null}
         */
        this.IsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Describe = 'Describe' in params ? params.Describe : null;
        this.BatchSizeRange = 'BatchSizeRange' in params ? params.BatchSizeRange : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * Mapping between the current cluster and the shared component.
 * @class
 */
class ClusterExternalServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dependency relationship. Valid values: 0 (being depended on by other clusters) and 1 (depending on other clusters).
         * @type {number || null}
         */
        this.DependType = null;

        /**
         * Shared component.
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Shared cluster.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Shared cluster status.
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
 * External client component dependency information.
 * @class
 */
class SoftDependInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Component name.
         * @type {string || null}
         */
        this.SoftName = null;

        /**
         * Whether it is required.
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
 * Selection criteria for forcibly scheduled Pod nodes.
 * @class
 */
class NodeSelector extends  AbstractModel {
    constructor(){
        super();

        /**
         * Selection criteria for forcibly scheduled Pod nodes.
         * @type {Array.<NodeSelectorTerm> || null}
         */
        this.NodeSelectorTerms = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodeSelectorTerms) {
            this.NodeSelectorTerms = new Array();
            for (let z in params.NodeSelectorTerms) {
                let obj = new NodeSelectorTerm();
                obj.deserialize(params.NodeSelectorTerms[z]);
                this.NodeSelectorTerms.push(obj);
            }
        }

    }
}

/**
 * User-defined database information.
 * @class
 */
class CustomMetaDBInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Custom MetaDB JDBC connection, for example: jdbc:mysql://10.10.10.10:3306/dbname.</p>
         * @type {string || null}
         */
        this.MetaDataJdbcUrl = null;

        /**
         * <p>Custom MetaDB username.</p>
         * @type {string || null}
         */
        this.MetaDataUser = null;

        /**
         * <p>Custom MetaDB password.</p>
         * @type {string || null}
         */
        this.MetaDataPass = null;

        /**
         * <p>Hive shared metadata database type. Valid values:</p><li>EMR_DEFAULT_META: created by the cluster by default</li><li>EMR_EXIST_META: EMR-MetaDB specified by the cluster</li><li>USER_CUSTOM_META: custom MetaDB used by the cluster</li>
         * @type {string || null}
         */
        this.MetaType = null;

        /**
         * <p>EMR-MetaDB instance.</p>
         * @type {string || null}
         */
        this.UnifyMetaInstanceId = null;

        /**
         * <p>Component.</p>
         * @type {Array.<string> || null}
         */
        this.Components = null;

        /**
         * <p>MetaDB version.</p>
         * @type {string || null}
         */
        this.DefaultMetaVersion = null;

        /**
         * <p>CDBId</p>
         * @type {string || null}
         */
        this.LinkInstanceId = null;

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
        this.Components = 'Components' in params ? params.Components : null;
        this.DefaultMetaVersion = 'DefaultMetaVersion' in params ? params.DefaultMetaVersion : null;
        this.LinkInstanceId = 'LinkInstanceId' in params ? params.LinkInstanceId : null;

    }
}

/**
 * DescribeStarRocksQueryInfo response structure.
 * @class
 */
class DescribeStarRocksQueryInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number, which is used for pagination query.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * StarRocks query information list.
         * @type {Array.<StarRocksQueryInfo> || null}
         */
        this.StarRocksQueryInfoList = null;

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

        if (params.StarRocksQueryInfoList) {
            this.StarRocksQueryInfoList = new Array();
            for (let z in params.StarRocksQueryInfoList) {
                let obj = new StarRocksQueryInfo();
                obj.deserialize(params.StarRocksQueryInfoList[z]);
                this.StarRocksQueryInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Task step details.
 * @class
 */
class StageInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step.
         * @type {string || null}
         */
        this.Stage = null;

        /**
         * Step name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether it is displayed.
         * @type {boolean || null}
         */
        this.IsShow = null;

        /**
         * Whether it is a sub-flow.
         * @type {boolean || null}
         */
        this.IsSubFlow = null;

        /**
         * Sub-flow tag.
         * @type {string || null}
         */
        this.SubFlowFlag = null;

        /**
         * Step running status. Valid values: 0 (not started), 1 (in progress), 2 (completed), 3 (partially completed), and -1 (failed).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Step running status description.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Running progress.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Start time.
         * @type {string || null}
         */
        this.Starttime = null;

        /**
         * End time.
         * @type {string || null}
         */
        this.Endtime = null;

        /**
         * Whether detailed information is included.
         * @type {boolean || null}
         */
        this.HadWoodDetail = null;

        /**
         * Wood sub-flow ID.
         * @type {number || null}
         */
        this.WoodJobId = null;

        /**
         * Multi-language version key.
         * @type {string || null}
         */
        this.LanguageKey = null;

        /**
         * Reason for the stage failure.
         * @type {string || null}
         */
        this.FailedReason = null;

        /**
         * Step duration.
         * @type {string || null}
         */
        this.TimeConsuming = null;

        /**
         * ID used by the frontend.
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
        this.Stage = 'Stage' in params ? params.Stage : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IsShow = 'IsShow' in params ? params.IsShow : null;
        this.IsSubFlow = 'IsSubFlow' in params ? params.IsSubFlow : null;
        this.SubFlowFlag = 'SubFlowFlag' in params ? params.SubFlowFlag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Starttime = 'Starttime' in params ? params.Starttime : null;
        this.Endtime = 'Endtime' in params ? params.Endtime : null;
        this.HadWoodDetail = 'HadWoodDetail' in params ? params.HadWoodDetail : null;
        this.WoodJobId = 'WoodJobId' in params ? params.WoodJobId : null;
        this.LanguageKey = 'LanguageKey' in params ? params.LanguageKey : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;
        this.TimeConsuming = 'TimeConsuming' in params ? params.TimeConsuming : null;
        this.Id = 'Id' in params ? params.Id : null;

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
 * Cluster application scenario and supported deployment component information.
 * @class
 */
class SceneSoftwareConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of deployed components. Different EMR product versions (ProductVersion) have different optional component lists. For details about how to query the optional component lists for different product versions, see [Component Version](https://www.tencentcloud.com/document/product/589/20279?from_cn_redirect=1).
Example values: hive and flink.
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * Default Hadoop-Default. For details about the scenario-based values, see [Scenario Query](https://www.tencentcloud.com/document/product/589/14624?from_cn_redirect=1):
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
 * Node information.
 * @class
 */
class ShortNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node type. Valid values: Master/Core/Task/Router/Common.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Number of nodes.
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
 * Key and value.
 * @class
 */
class NameValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * value
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
 * DescribeAutoScaleRecords request structure.
 * @class
 */
class DescribeAutoScaleRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Record filter parameter, which can only be "StartTime", "EndTime", "StrategyName", "ActionStatus", or "ScaleAction".
Time format. Either 2006-01-02 15:04:05 or 2006/01/02 15:04:05 for StartTime and EndTime.
ActionStatus: 0 (INITED), 1 (SUCCESS), 2 (FAILED), 3 (LIMITED_SUCCESSED), 4 (IN_PROCESS), and 5 (IN_RETRY).
ScaleAction: 1 (scale-out) and 2 (scale-in).

         * @type {Array.<KeyValue> || null}
         */
        this.Filters = null;

        /**
         * Pagination parameter.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Whether it is an auto scaling (0) or managed scaling (1) operation.
         * @type {number || null}
         */
        this.RecordSource = null;

        /**
         * Whether to sort data in ascending order. Valid values: 1 (yes) and 0 (no).
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new KeyValue();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.RecordSource = 'RecordSource' in params ? params.RecordSource : null;
        this.Asc = 'Asc' in params ? params.Asc : null;

    }
}

/**
 * DescribeHBaseTableRequestMetric response structure.
 * @class
 */
class DescribeHBaseTableRequestMetricResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Package structure returned by the HBase monitoring metric.
         * @type {Array.<HBaseMetricData> || null}
         */
        this.MetricDataList = null;

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

        if (params.MetricDataList) {
            this.MetricDataList = new Array();
            for (let z in params.MetricDataList) {
                let obj = new HBaseMetricData();
                obj.deserialize(params.MetricDataList[z]);
                this.MetricDataList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Tolerations
 * @class
 */
class Toleration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Operator.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Taint repel effect.
         * @type {string || null}
         */
        this.Effect = null;

        /**
         * Eviction wait time.
         * @type {number || null}
         */
        this.TolerationSeconds = null;

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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Effect = 'Effect' in params ? params.Effect : null;
        this.TolerationSeconds = 'TolerationSeconds' in params ? params.TolerationSeconds : null;

    }
}

/**
 * DescribeEmrOverviewMetrics request structure.
 * @class
 */
class DescribeEmrOverviewMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * End time.
         * @type {number || null}
         */
        this.End = null;

        /**
         * Metric name. Valid values: NODE.CPU (average CPU utilization and number of cores of the node), NODE.CPU.SLHBASE (average CPU utilization and total number of CPU cores of the Serverless instance), and HDFS.NN.CAPACITY (storage capacity utilization and total capacity).
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Granularity, for example, 30s-max, 1m-max, and 1h-max.
         * @type {string || null}
         */
        this.Downsample = null;

        /**
         * Start time, which is not required for pie charts.
         * @type {number || null}
         */
        this.Start = null;

        /**
         * Aggregation method, which is reserved for scale-out purposes. Currently, this parameter does not need to be passed.
         * @type {string || null}
         */
        this.Aggregator = null;

        /**
         * Specific type of metrics to be queried, for example, "{"type":"CapacityTotal|CapacityRemaining"}".
         * @type {string || null}
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
        this.End = 'End' in params ? params.End : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Downsample = 'Downsample' in params ? params.Downsample : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.Aggregator = 'Aggregator' in params ? params.Aggregator : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * ModifyResource response structure.
 * @class
 */
class ModifyResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow trace ID.
         * @type {string || null}
         */
        this.TraceId = null;

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
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Pod-related information.
 * @class
 */
class PodSpecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod specifications and source information, which are specified when Pod resources are used for the scale-out.
         * @type {PodNewSpec || null}
         */
        this.PodSpec = null;

        /**
         * Pod custom permission and parameter.
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
 * ModifyUserGroup response structure.
 * @class
 */
class ModifyUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Flow ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHDFSStorageInfo response structure.
 * @class
 */
class DescribeHDFSStorageInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sampling time.
         * @type {number || null}
         */
        this.SampleTime = null;

        /**
         * HDFS storage details.
         * @type {Array.<StorageSummaryDistribution> || null}
         */
        this.StorageSummaryDistribution = null;

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
        this.SampleTime = 'SampleTime' in params ? params.SampleTime : null;

        if (params.StorageSummaryDistribution) {
            this.StorageSummaryDistribution = new Array();
            for (let z in params.StorageSummaryDistribution) {
                let obj = new StorageSummaryDistribution();
                obj.deserialize(params.StorageSummaryDistribution[z]);
                this.StorageSummaryDistribution.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGlobalConfig response structure.
 * @class
 */
class ModifyGlobalConfigResponse extends  AbstractModel {
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
 * CreateGroupsSTD response structure.
 * @class
 */
class CreateGroupsSTDResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response result of each user group.
         * @type {Array.<ResultItem> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResultItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Description of the Pod HostPath mounting method.
 * @class
 */
class HostVolumeContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * Directory for mounting the host in the Pod. As the mount point of the host in the resource, a specified mount point corresponds to the host path and is used as the data storage directory in the Pod.
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
 * Hive query details.
 * @class
 */
class HiveQuery extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query statement.
         * @type {string || null}
         */
        this.Statement = null;

        /**
         * Execution duration.
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * Start time (ms).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time (ms).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Status.
         * @type {string || null}
         */
        this.State = null;

        /**
         * User.
         * @type {string || null}
         */
        this.User = null;

        /**
         * APPID list.
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * Execution engine.
         * @type {string || null}
         */
        this.ExecutionEngine = null;

        /**
         * Query ID.
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
        this.Statement = 'Statement' in params ? params.Statement : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.State = 'State' in params ? params.State : null;
        this.User = 'User' in params ? params.User : null;
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.ExecutionEngine = 'ExecutionEngine' in params ? params.ExecutionEngine : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Global configuration of the fair scheduler in resource scheduling.
 * @class
 */
class FairGlobalConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Program upper limit</p> on the corresponding page.
         * @type {number || null}
         */
        this.UserMaxAppsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserMaxAppsDefault = 'UserMaxAppsDefault' in params ? params.UserMaxAppsDefault : null;

    }
}

/**
 * Resource description, which is used during a container resource scale-out.
 * @class
 */
class PodNewSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identifier of the external resource provider, for example, "cls-a1cd23fa".
         * @type {string || null}
         */
        this.ResourceProviderIdentifier = null;

        /**
         * Type of the external resource provider, for example, "tke". Currently, only "tke" is supported.
         * @type {string || null}
         */
        this.ResourceProviderType = null;

        /**
         * Purpose of the resource, that is, the node type. Currently only "TASK" is supported.
         * @type {string || null}
         */
        this.NodeFlag = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size (GB).
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * CPU type for the EKS cluster, currently supporting intel and amd.
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * Mounting information of the node data directory on Pod.
         * @type {Array.<PodVolume> || null}
         */
        this.PodVolumes = null;

        /**
         * Whether it is a floating specification. Default: false. Valid values:
<li>true: yes</li>
<li>false: no</li>
         * @type {boolean || null}
         */
        this.EnableDynamicSpecFlag = null;

        /**
         * Floating specification.
         * @type {DynamicPodSpec || null}
         */
        this.DynamicPodSpec = null;

        /**
         * Unique ID of the VPC.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Unique ID of the VPC subnet.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * pod name
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * Other account authorization information.
         * @type {OtherAccountInfo || null}
         */
        this.OtherAccountInfo = null;

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

        if (params.OtherAccountInfo) {
            let obj = new OtherAccountInfo();
            obj.deserialize(params.OtherAccountInfo)
            this.OtherAccountInfo = obj;
        }

    }
}

/**
 * EMR product configuration.
 * @class
 */
class EmrProductConfigDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Software information.
         * @type {Array.<string> || null}
         */
        this.SoftInfo = null;

        /**
         * Number of Master nodes.
         * @type {number || null}
         */
        this.MasterNodeSize = null;

        /**
         * Number of Core nodes.
         * @type {number || null}
         */
        this.CoreNodeSize = null;

        /**
         * Number of Task nodes.
         * @type {number || null}
         */
        this.TaskNodeSize = null;

        /**
         * Number of Common nodes.
         * @type {number || null}
         */
        this.ComNodeSize = null;

        /**
         * Master node resources.
         * @type {ResourceDetail || null}
         */
        this.MasterResource = null;

        /**
         * Core node resources.
         * @type {ResourceDetail || null}
         */
        this.CoreResource = null;

        /**
         * Task node resources.
         * @type {ResourceDetail || null}
         */
        this.TaskResource = null;

        /**
         * Common node resources.
         * @type {ResourceDetail || null}
         */
        this.ComResource = null;

        /**
         * Whether COS is used.
         * @type {boolean || null}
         */
        this.OnCos = null;

        /**
         * Charge type.
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * Number of Router nodes.
         * @type {number || null}
         */
        this.RouterNodeSize = null;

        /**
         * Whether HA is supported.
         * @type {boolean || null}
         */
        this.SupportHA = null;

        /**
         * Whether security mode is supported.
         * @type {boolean || null}
         */
        this.SecurityOn = null;

        /**
         * Security group name.
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * Whether CBS encryption is enabled.
         * @type {number || null}
         */
        this.CbsEncrypt = null;

        /**
         * Custom application role.
         * @type {string || null}
         */
        this.ApplicationRole = null;

        /**
         * Security group.
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

        /**
         * SSH key ID.
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
            let obj = new ResourceDetail();
            obj.deserialize(params.MasterResource)
            this.MasterResource = obj;
        }

        if (params.CoreResource) {
            let obj = new ResourceDetail();
            obj.deserialize(params.CoreResource)
            this.CoreResource = obj;
        }

        if (params.TaskResource) {
            let obj = new ResourceDetail();
            obj.deserialize(params.TaskResource)
            this.TaskResource = obj;
        }

        if (params.ComResource) {
            let obj = new ResourceDetail();
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
 * External access settings for the container cluster.
 * @class
 */
class ExternalAccess extends  AbstractModel {
    constructor(){
        super();

        /**
         * External access type. Currently, only CLB fields are supported.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * CLB configuration information.
         * @type {CLBSetting || null}
         */
        this.CLBServer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CLBServer) {
            let obj = new CLBSetting();
            obj.deserialize(params.CLBServer)
            this.CLBServer = obj;
        }

    }
}

/**
 * Mount volume.
 * @class
 */
class VolumeMount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount volume name.
         * @type {string || null}
         */
        this.MountName = null;

        /**
         * Mount path.
         * @type {string || null}
         */
        this.MountPath = null;

        /**
         * Mount type.
         * @type {string || null}
         */
        this.SubPathMode = null;

        /**
         * Sub-path.
         * @type {string || null}
         */
        this.SubPath = null;

        /**
         * Mounting mode. Valid values: ReadWrite and OnlyRead.
         * @type {string || null}
         */
        this.MountMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountName = 'MountName' in params ? params.MountName : null;
        this.MountPath = 'MountPath' in params ? params.MountPath : null;
        this.SubPathMode = 'SubPathMode' in params ? params.SubPathMode : null;
        this.SubPath = 'SubPath' in params ? params.SubPath : null;
        this.MountMode = 'MountMode' in params ? params.MountMode : null;

    }
}

/**
 * AZ configuration description.
 * @class
 */
class ZoneSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ name.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ VPC and subnet.
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * Number of AZ nodes.
         * @type {number || null}
         */
        this.NodeNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;

    }
}

/**
 * Trino query information.
 * @class
 */
class TrinoQueryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * catalog
         * @type {string || null}
         */
        this.Catalog = null;

        /**
         * Submission IP address.
         * @type {string || null}
         */
        this.ClientIpAddr = null;

        /**
         * Number of segments.
         * @type {string || null}
         */
        this.CompletedSplits = null;

        /**
         * CPU time.
         * @type {number || null}
         */
        this.CpuTime = null;

        /**
         * Cumulative memory.
         * @type {number || null}
         */
        this.CumulativeMemory = null;

        /**
         * Execution duration.
         * @type {number || null}
         */
        this.DurationMillis = null;

        /**
         * End time (s).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Query ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Internal transmission volume.
         * @type {number || null}
         */
        this.InternalNetworkBytes = null;

        /**
         * Number of output bytes.
         * @type {number || null}
         */
        this.OutputBytes = null;

        /**
         * Peak memory.
         * @type {number || null}
         */
        this.PeakUserMemoryBytes = null;

        /**
         * Physical input volume.
         * @type {number || null}
         */
        this.PhysicalInputBytes = null;

        /**
         * Processed input volume.
         * @type {number || null}
         */
        this.ProcessedInputBytes = null;

        /**
         * Compilation duration.
         * @type {number || null}
         */
        this.SqlCompileTime = null;

        /**
         * Start time (s).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Execution status.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Execution statement.
         * @type {string || null}
         */
        this.Statement = null;

        /**
         * Submission user.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Number of bytes written.
         * @type {number || null}
         */
        this.WrittenBytes = null;

        /**
         * Error log.
         * @type {string || null}
         */
        this.ErrorMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Catalog = 'Catalog' in params ? params.Catalog : null;
        this.ClientIpAddr = 'ClientIpAddr' in params ? params.ClientIpAddr : null;
        this.CompletedSplits = 'CompletedSplits' in params ? params.CompletedSplits : null;
        this.CpuTime = 'CpuTime' in params ? params.CpuTime : null;
        this.CumulativeMemory = 'CumulativeMemory' in params ? params.CumulativeMemory : null;
        this.DurationMillis = 'DurationMillis' in params ? params.DurationMillis : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.InternalNetworkBytes = 'InternalNetworkBytes' in params ? params.InternalNetworkBytes : null;
        this.OutputBytes = 'OutputBytes' in params ? params.OutputBytes : null;
        this.PeakUserMemoryBytes = 'PeakUserMemoryBytes' in params ? params.PeakUserMemoryBytes : null;
        this.PhysicalInputBytes = 'PhysicalInputBytes' in params ? params.PhysicalInputBytes : null;
        this.ProcessedInputBytes = 'ProcessedInputBytes' in params ? params.ProcessedInputBytes : null;
        this.SqlCompileTime = 'SqlCompileTime' in params ? params.SqlCompileTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.State = 'State' in params ? params.State : null;
        this.Statement = 'Statement' in params ? params.Statement : null;
        this.User = 'User' in params ? params.User : null;
        this.WrittenBytes = 'WrittenBytes' in params ? params.WrittenBytes : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

    }
}

/**
 * Sampling sequence.
 * @class
 */
class Dps extends  AbstractModel {
    constructor(){
        super();

        /**
         * Timestamp.
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * Sampling value.
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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Return of the HBase TableMetric overview.
 * @class
 */
class OverviewRow extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table name.
         * @type {string || null}
         */
        this.Table = null;

        /**
         * Number of read requests.
         * @type {number || null}
         */
        this.ReadRequestCount = null;

        /**
         * Number of write requests.
         * @type {number || null}
         */
        this.WriteRequestCount = null;

        /**
         * Size of the current MemStore.
         * @type {number || null}
         */
        this.MemstoreSize = null;

        /**
         * Size of the StoreFile in the current region.
         * @type {number || null}
         */
        this.StoreFileSize = null;

        /**
         * Regions. Click to jump.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Number of StoreFiles.
         * @type {number || null}
         */
        this.StoreFileNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Table = 'Table' in params ? params.Table : null;
        this.ReadRequestCount = 'ReadRequestCount' in params ? params.ReadRequestCount : null;
        this.WriteRequestCount = 'WriteRequestCount' in params ? params.WriteRequestCount : null;
        this.MemstoreSize = 'MemstoreSize' in params ? params.MemstoreSize : null;
        this.StoreFileSize = 'StoreFileSize' in params ? params.StoreFileSize : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.StoreFileNum = 'StoreFileNum' in params ? params.StoreFileNum : null;

    }
}

/**
 * ModifySLInstanceBasic request structure.
 * @class
 */
class ModifySLInstanceBasicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.ClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * Default settings of resource scheduling.
 * @class
 */
class DefaultSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name, which is used as the key for request parameters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Prompt.
         * @type {string || null}
         */
        this.Prompt = null;

        /**
         * Key, which is used to display the configuration items in the configuration file.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Name value.
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
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Prompt = 'Prompt' in params ? params.Prompt : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * COS related configuration.
 * @class
 */
class COSSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS SecretId
         * @type {string || null}
         */
        this.CosSecretId = null;

        /**
         * COS SecrectKey
         * @type {string || null}
         */
        this.CosSecretKey = null;

        /**
         * Log storage path on COS.
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
 * CreateSLInstance request structure.
 * @class
 */
class CreateSLInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance billing mode. Valid values: 0 (postpaid, that is, pay-as-you-go) and 1 (prepaid, that is, yearly/monthly subscription).
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Instance storage type. Valid values: CLOUD_HSSD (Enhanced SSD) and CLOUD_BSSD (Balanced SSD).
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Disk capacity of a single node of the instance (GB). The disk capacity of a single node should be greater than or equal to 100 and less than or equal to 250 x the number of CPU cores. The capacity adjustment step is 100.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Instance node specifications. Valid values: 4C16G, 8C32G, 16C64G, and 32C128G. The value is case-insensitive.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Detailed configuration of the instance AZ, including the region name, VPC information, and number of nodes. Currently, multiple AZs are supported. The number of AZs must be 1 or 3, and the total number of nodes across all AZs must be greater than or equal to 3 and less than or equal to 50.
         * @type {Array.<ZoneSetting> || null}
         */
        this.ZoneSettings = null;

        /**
         * List of tags to be bound to the instance.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Prepaid parameter.
         * @type {PrePaySetting || null}
         */
        this.PrePaySetting = null;

        /**
         * Unique random identifier with a time-to-live of 5 minutes, which needs to be specified by the caller to prevent the client from repeatedly creating resources, for example, a9a90aa6-****-****-****-fae360632808.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Deployment mode.
         * @type {string || null}
         */
        this.DeploymentMode = null;

        /**
         * Service username, which is optional for services without the need to set usernames. The value can contain 8 to 16 characters, including uppercase letters, lowercase letters, and digits.
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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;

        if (params.ZoneSettings) {
            this.ZoneSettings = new Array();
            for (let z in params.ZoneSettings) {
                let obj = new ZoneSetting();
                obj.deserialize(params.ZoneSettings[z]);
                this.ZoneSettings.push(obj);
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

        if (params.PrePaySetting) {
            let obj = new PrePaySetting();
            obj.deserialize(params.PrePaySetting)
            this.PrePaySetting = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DeploymentMode = 'DeploymentMode' in params ? params.DeploymentMode : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

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
         * <p>Time unit for the scale-out. Valid values:</p><li>s: indicates seconds. When PayMode is set to 0, TimeUnit can only be set to s.</li><li>m: indicates months. When PayMode is set to 1, TimeUnit can only be set to m.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * <p>Scale-out duration, which is used together with TimeUnit.</p><li>When TimeUnit is set to s, this parameter can only be set to 3600, indicating a pay-as-you-go instance.</li><li>When TimeUnit is set to m, the value set for this parameter indicates the subscription duration of the instance. For example, 1 indicates a one-month subscription.</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Instance billing mode. Valid values:</p><li>0: pay-as-you-go</li><li>1: yearly/monthly subscription</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * <p>Unique random identifier, which is valid for five minutes and needs to be specified by the caller. This prevents the client from repeatedly creating resources. Example value: a9a90aa6-<strong><strong>-</strong></strong>-****-fae36063280.</p>
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * <p>Bootstrap script settings.</p>
         * @type {Array.<PreExecuteFileSettings> || null}
         */
        this.PreExecutedFileSettings = null;

        /**
         * <p>Number of Task nodes to be scaled out.</p>
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * <p>Number of scale-out Core nodes.</p>
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * <p>Processes, which are not required during the scale-out.</p>
         * @type {Array.<number> || null}
         */
        this.UnNecessaryNodeList = null;

        /**
         * <p>Number of Router nodes to be scaled out.</p>
         * @type {number || null}
         */
        this.RouterCount = null;

        /**
         * <p>Deployed service.</p><li>SoftDeployInfo and ServiceNodeInfo are parameters in the same group and are mutually exclusive with UnNecessaryNodeList.</li><li>It is recommended to use SoftDeployInfo and ServiceNodeInfo together.</li>
         * @type {Array.<number> || null}
         */
        this.SoftDeployInfo = null;

        /**
         * <p>Started process.</p>
         * @type {Array.<number> || null}
         */
        this.ServiceNodeInfo = null;

        /**
         * <p>List of dispersed placement group IDs. Currently, only one ID is supported.</p>
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * <p>List of tags bound to nodes for the scale-out.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Resource type selected for the scale-out. Valid values: &quot;HOST&quot;, &quot;POD&quot;, and &quot;MNode&quot;. HOST indicates ordinary CVM resources, POD indicates resources provided by a TKE cluster or an EKS cluster, and MNode indicates fully managed resources.</p>
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * <p>Pod specifications and source information, which are specified when Pod resources are used for the scale-out.</p>
         * @type {PodSpec || null}
         */
        this.PodSpec = null;

        /**
         * <p>Machine group name selected for the ClickHouse cluster scale-out.</p>
         * @type {string || null}
         */
        this.ClickHouseClusterName = null;

        /**
         * <p>Machine group type selected for the ClickHouse cluster scale-out. Valid values: new (adds a group) and old (selects an existing group).</p>
         * @type {string || null}
         */
        this.ClickHouseClusterType = null;

        /**
         * <p>YARN node label specified for the rule-based scale-out.</p>
         * @type {string || null}
         */
        this.YarnNodeLabel = null;

        /**
         * <p>Pod custom permission and parameter.</p>
         * @type {PodParameter || null}
         */
        this.PodParameter = null;

        /**
         * <p>Number of Master nodes for the scale-out.<br>When a ClickHouse cluster is used for the scale-out, this parameter does not take effect.<br>When a Kafka cluster is used for the scale-out, this parameter does not take effect.<br>When HardwareResourceType is set to POD, this parameter does not take effect.</p>
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * <p>Whether the service is started after the scale-out. Valid values: true (yes) and false (no).</p>
         * @type {string || null}
         */
        this.StartServiceAfterScaleOut = null;

        /**
         * <p>AZ. The primary AZ of the cluster is selected by default.</p>
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * <p>Subnet. The subnet used during cluster creation is selected by default.</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Preset configuration group.</p>
         * @type {string || null}
         */
        this.ScaleOutServiceConfAssign = null;

        /**
         * <p>Auto-renewal. Valid values: 0 (disabled) and 1 (enabled).</p>
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * <p>Type. Valid values: ComputeResource and EMR. Default value: EMR. If this parameter is set to EMR, InstanceId takes effect. If this parameter is set to ComputeResource, ComputeResourceId is used.</p>
         * @type {string || null}
         */
        this.ResourceBaseType = null;

        /**
         * <p>Computing resource ID.</p>
         * @type {string || null}
         */
        this.ComputeResourceId = null;

        /**
         * <p>Advanced settings of computing resources.</p>
         * @type {ComputeResourceAdvanceParams || null}
         */
        this.ComputeResourceAdvanceParams = null;

        /**
         * <p>Node tag information, which is currently only provided for the Terraform platform.</p>
         * @type {NodeMark || null}
         */
        this.NodeMarks = null;

        /**
         * <p>Compute group specified for the scale-out.</p>
         * @type {string || null}
         */
        this.WarehouseName = null;

        /**
         * <p>Partition of a partition placement group.</p>
         * @type {number || null}
         */
        this.PartitionNumber = null;

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
        this.ResourceBaseType = 'ResourceBaseType' in params ? params.ResourceBaseType : null;
        this.ComputeResourceId = 'ComputeResourceId' in params ? params.ComputeResourceId : null;

        if (params.ComputeResourceAdvanceParams) {
            let obj = new ComputeResourceAdvanceParams();
            obj.deserialize(params.ComputeResourceAdvanceParams)
            this.ComputeResourceAdvanceParams = obj;
        }

        if (params.NodeMarks) {
            let obj = new NodeMark();
            obj.deserialize(params.NodeMarks)
            this.NodeMarks = obj;
        }
        this.WarehouseName = 'WarehouseName' in params ? params.WarehouseName : null;
        this.PartitionNumber = 'PartitionNumber' in params ? params.PartitionNumber : null;

    }
}

/**
 * Kyuubi query information.
 * @class
 */
class KyuubiQueryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Submission IP address.
         * @type {string || null}
         */
        this.ClientIP = null;

        /**
         * Execution duration.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Engine Id
         * @type {string || null}
         */
        this.EngineID = null;

        /**
         * Computing engine.
         * @type {string || null}
         */
        this.EngineType = null;

        /**
         * ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Session Id
         * @type {string || null}
         */
        this.SessionID = null;

        /**
         * Start time.
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * Execution status.
         * @type {string || null}
         */
        this.ExecutionState = null;

        /**
         * Execution statement.
         * @type {string || null}
         */
        this.ExecutionStatement = null;

        /**
         * Statement Id
         * @type {string || null}
         */
        this.StatementID = null;

        /**
         * Submission user.
         * @type {string || null}
         */
        this.User = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.EngineID = 'EngineID' in params ? params.EngineID : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.SessionID = 'SessionID' in params ? params.SessionID : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.ExecutionState = 'ExecutionState' in params ? params.ExecutionState : null;
        this.ExecutionStatement = 'ExecutionStatement' in params ? params.ExecutionStatement : null;
        this.StatementID = 'StatementID' in params ? params.StatementID : null;
        this.User = 'User' in params ? params.User : null;

    }
}

/**
 * ModifyAutoScaleStrategy request structure.
 * @class
 */
class ModifyAutoScaleStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Automatic scaling rule type. Valid values: 1 (scaling by load metric) and 2 (scaling by time).
         * @type {number || null}
         */
        this.StrategyType = null;

        /**
         * Metric for load-based scaling.
         * @type {Array.<LoadAutoScaleStrategy> || null}
         */
        this.LoadAutoScaleStrategies = null;

        /**
         * Time-based scaling rule.
         * @type {Array.<TimeAutoScaleStrategy> || null}
         */
        this.TimeAutoScaleStrategies = null;

        /**
         * Scaling group ID.
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;

        if (params.LoadAutoScaleStrategies) {
            this.LoadAutoScaleStrategies = new Array();
            for (let z in params.LoadAutoScaleStrategies) {
                let obj = new LoadAutoScaleStrategy();
                obj.deserialize(params.LoadAutoScaleStrategies[z]);
                this.LoadAutoScaleStrategies.push(obj);
            }
        }

        if (params.TimeAutoScaleStrategies) {
            this.TimeAutoScaleStrategies = new Array();
            for (let z in params.TimeAutoScaleStrategies) {
                let obj = new TimeAutoScaleStrategy();
                obj.deserialize(params.TimeAutoScaleStrategies[z]);
                this.TimeAutoScaleStrategies.push(obj);
            }
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 
 * @class
 */
class ConfSubContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 
         * @type {string || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Params = 'Params' in params ? params.Params : null;

    }
}

/**
 * DescribeGroupsSTD request structure.
 * @class
 */
class DescribeGroupsSTDRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster name.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Description key-value pair filter, which is used for conditional filter queries.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Description order, which is used for sorting.
         * @type {Order || null}
         */
        this.OrderFields = null;

        /**
         * Number of returned items.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination parameter.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            let obj = new Order();
            obj.deserialize(params.OrderFields)
            this.OrderFields = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeKyuubiQueryInfo response structure.
 * @class
 */
class DescribeKyuubiQueryInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number, which is used for pagination query.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Kyuubi query information list.
         * @type {Array.<KyuubiQueryInfo> || null}
         */
        this.KyuubiQueryInfoList = null;

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

        if (params.KyuubiQueryInfoList) {
            this.KyuubiQueryInfoList = new Array();
            for (let z in params.KyuubiQueryInfoList) {
                let obj = new KyuubiQueryInfo();
                obj.deserialize(params.KyuubiQueryInfoList[z]);
                this.KyuubiQueryInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Dynamically generated change details.
 * @class
 */
class DiffDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tab page header.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Number of change items.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Detailed data to be rendered.
         * @type {Array.<DiffDetailItem> || null}
         */
        this.Rows = null;

        /**
         * Header information to be rendered.
         * @type {Array.<DiffHeader> || null}
         */
        this.Header = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Count = 'Count' in params ? params.Count : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new DiffDetailItem();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }

        if (params.Header) {
            this.Header = new Array();
            for (let z in params.Header) {
                let obj = new DiffHeader();
                obj.deserialize(params.Header[z]);
                this.Header.push(obj);
            }
        }

    }
}

/**
 * Disk information.
 * @class
 */
class Disk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data disk type, which is available when an EMR container cluster is created. Valid values:
<li>CLOUD_SSD: SSD Cloud Disk</li>
<li>CLOUD_PREMIUM: Premium Disk</li>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Single block size (GB).
         * @type {number || null}
         */
        this.DiskCapacity = null;

        /**
         * Number of data disks.
         * @type {number || null}
         */
        this.DiskNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskCapacity = 'DiskCapacity' in params ? params.DiskCapacity : null;
        this.DiskNumber = 'DiskNumber' in params ? params.DiskNumber : null;

    }
}

/**
 * Rule for time-based scaling.
 * @class
 */
class TimeAutoScaleStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy name, which is unique within one cluster.
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * Cooldown time after the policy is triggered, during which auto scaling cannot be triggered.
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * Scaling action. Valid values: 1 (scale-out) and 2 (scale-in).
         * @type {number || null}
         */
        this.ScaleAction = null;

        /**
         * Number of scaling operations.
         * @type {number || null}
         */
        this.ScaleNum = null;

        /**
         * (Required) Rule status. Valid values: 1 (valid), 2 (invalid), and 3 (suspended).
         * @type {number || null}
         */
        this.StrategyStatus = null;

        /**
         * Rule priority. A smaller value indicates a higher priority.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * When multiple rules are triggered at the same time and some are not really executed, retries are performed within this time range.
         * @type {number || null}
         */
        this.RetryValidTime = null;

        /**
         * Time scaling repetition policy.
         * @type {RepeatStrategy || null}
         */
        this.RepeatStrategy = null;

        /**
         * Unique policy ID.
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * Graceful scale-in switch.
         * @type {boolean || null}
         */
        this.GraceDownFlag = null;

        /**
         * Graceful scale-in wait time.
         * @type {number || null}
         */
        this.GraceDownTime = null;

        /**
         * Whether to enable task protection.
         * @type {boolean || null}
         */
        this.GraceDownProtectFlag = null;

        /**
         * Bound tag list.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Preset configuration group.
         * @type {string || null}
         */
        this.ConfigGroupAssigned = null;

        /**
         * Calculation method for scaled‑out resources. Valid values: "DEFAULT", "INSTANCE", "CPU", and "MEMORYGB".
"DEFAULT" indicates the default calculation method, which is identical to "INSTANCE".
"INSTANCE" indicates the calculation method based on nodes. This is the default method.
"CPU" indicates the calculation method based on the number of cores of the machine.
"MEMORYGB" indicates the calculation method based on the memory size of the machine.
         * @type {string || null}
         */
        this.MeasureMethod = null;

        /**
         * Termination policy. "DEFAULT" indicates the default policy with which the scale-in is triggered by using scale-in rules. "TIMING" indicates scheduled termination.
         * @type {string || null}
         */
        this.TerminatePolicy = null;

        /**
         * Maximum usage time. The minimum value is 1 hour, and the maximum value is 24 hours.
         * @type {number || null}
         */
        this.MaxUse = null;

        /**
         * List of services deployed on the node. Valid values: HDFS and YARN. For details, see [Mapping Table for Component Names](https://www.tencentcloud.com/document/product/589/98760?from_cn_redirect=1).
         * @type {Array.<number> || null}
         */
        this.SoftDeployInfo = null;

        /**
         * Startup process list.
         * @type {Array.<number> || null}
         */
        this.ServiceNodeInfo = null;

        /**
         * Compensatory scale-out. Valid values: 0 (disabled) and 1 (enabled).
         * @type {number || null}
         */
        this.CompensateFlag = null;

        /**
         * Scaling group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Pod tag for the graceful scale-in business. Nodes are scaled in when the Pod mentioned above is not found on the node or the graceful scale-in time has elapsed.
         * @type {Array.<TkeLabel> || null}
         */
        this.GraceDownLabel = null;

        /**
         * Task protection time.
         * @type {number || null}
         */
        this.GraceDownProtectTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.ScaleAction = 'ScaleAction' in params ? params.ScaleAction : null;
        this.ScaleNum = 'ScaleNum' in params ? params.ScaleNum : null;
        this.StrategyStatus = 'StrategyStatus' in params ? params.StrategyStatus : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RetryValidTime = 'RetryValidTime' in params ? params.RetryValidTime : null;

        if (params.RepeatStrategy) {
            let obj = new RepeatStrategy();
            obj.deserialize(params.RepeatStrategy)
            this.RepeatStrategy = obj;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.GraceDownFlag = 'GraceDownFlag' in params ? params.GraceDownFlag : null;
        this.GraceDownTime = 'GraceDownTime' in params ? params.GraceDownTime : null;
        this.GraceDownProtectFlag = 'GraceDownProtectFlag' in params ? params.GraceDownProtectFlag : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ConfigGroupAssigned = 'ConfigGroupAssigned' in params ? params.ConfigGroupAssigned : null;
        this.MeasureMethod = 'MeasureMethod' in params ? params.MeasureMethod : null;
        this.TerminatePolicy = 'TerminatePolicy' in params ? params.TerminatePolicy : null;
        this.MaxUse = 'MaxUse' in params ? params.MaxUse : null;
        this.SoftDeployInfo = 'SoftDeployInfo' in params ? params.SoftDeployInfo : null;
        this.ServiceNodeInfo = 'ServiceNodeInfo' in params ? params.ServiceNodeInfo : null;
        this.CompensateFlag = 'CompensateFlag' in params ? params.CompensateFlag : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.GraceDownLabel) {
            this.GraceDownLabel = new Array();
            for (let z in params.GraceDownLabel) {
                let obj = new TkeLabel();
                obj.deserialize(params.GraceDownLabel[z]);
                this.GraceDownLabel.push(obj);
            }
        }
        this.GraceDownProtectTime = 'GraceDownProtectTime' in params ? params.GraceDownProtectTime : null;

    }
}

/**
 * DescribeBootScript request structure.
 * @class
 */
class DescribeBootScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EMR instance SN.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Bootstrap script type. Valid values: resourceAfter, clusterAfter, and clusterBefore. If this field is left empty, all timings are included.
         * @type {string || null}
         */
        this.BootType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BootType = 'BootType' in params ? params.BootType : null;

    }
}

/**
 * EMR product configuration.
 * @class
 */
class EmrProductConfigOutter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Software information.
         * @type {Array.<string> || null}
         */
        this.SoftInfo = null;

        /**
         * Number of Master nodes.
         * @type {number || null}
         */
        this.MasterNodeSize = null;

        /**
         * Number of Core nodes.
         * @type {number || null}
         */
        this.CoreNodeSize = null;

        /**
         * Number of Task nodes.
         * @type {number || null}
         */
        this.TaskNodeSize = null;

        /**
         * Number of Common nodes.
         * @type {number || null}
         */
        this.ComNodeSize = null;

        /**
         * Master node resources.
         * @type {OutterResource || null}
         */
        this.MasterResource = null;

        /**
         * Core node resources.
         * @type {OutterResource || null}
         */
        this.CoreResource = null;

        /**
         * Task node resources.
         * @type {OutterResource || null}
         */
        this.TaskResource = null;

        /**
         * Common node resources.
         * @type {OutterResource || null}
         */
        this.ComResource = null;

        /**
         * Whether COS is used.
         * @type {boolean || null}
         */
        this.OnCos = null;

        /**
         * Charge type.
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * Number of Router nodes.
         * @type {number || null}
         */
        this.RouterNodeSize = null;

        /**
         * Whether HA is supported.
         * @type {boolean || null}
         */
        this.SupportHA = null;

        /**
         * Whether security mode is supported.
         * @type {boolean || null}
         */
        this.SecurityOn = null;

        /**
         * Initial security group ID of the cluster.
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * Whether CBS encryption is enabled.
         * @type {number || null}
         */
        this.CbsEncrypt = null;

        /**
         * Custom application role.
         * @type {string || null}
         */
        this.ApplicationRole = null;

        /**
         * Security group ID.
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

        /**
         * SSH key ID.
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
 * Host path.
 * @class
 */
class HostPathVolumeSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Host path.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Host path type. Default value: DirectoryOrCreate.
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
        this.Path = 'Path' in params ? params.Path : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Operation log description.
 * @class
 */
class OperationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>EMR instance ID.</p>
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * <p>Operation name.</p>
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * <p>Operation type.</p>
         * @type {number || null}
         */
        this.OperationType = null;

        /**
         * <p>User type.</p>
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * <p>Operator.</p>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * <p>Operation time.</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Operation object.</p>
         * @type {string || null}
         */
        this.Operand = null;

        /**
         * <p>Operation details.</p>
         * @type {string || null}
         */
        this.OperationDesc = null;

        /**
         * <p>Security level.</p>
         * @type {string || null}
         */
        this.SecurityLevel = null;

        /**
         * <p>Operator name.</p>
         * @type {string || null}
         */
        this.OperatorName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Operand = 'Operand' in params ? params.Operand : null;
        this.OperationDesc = 'OperationDesc' in params ? params.OperationDesc : null;
        this.SecurityLevel = 'SecurityLevel' in params ? params.SecurityLevel : null;
        this.OperatorName = 'OperatorName' in params ? params.OperatorName : null;

    }
}

/**
 * DescribeServiceConfGroupInfos response structure.
 * @class
 */
class DescribeServiceConfGroupInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of entries in the list.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Configuration item key-value list.
         * @type {Array.<ConfigurationItem> || null}
         */
        this.ConfItemKVList = null;

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

        if (params.ConfItemKVList) {
            this.ConfItemKVList = new Array();
            for (let z in params.ConfItemKVList) {
                let obj = new ConfigurationItem();
                obj.deserialize(params.ConfItemKVList[z]);
                this.ConfItemKVList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Resource description, which is used during a container resource scale-out.
 * @class
 */
class PodSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identifier of the external resource provider, for example, "cls-a1cd23fa".
         * @type {string || null}
         */
        this.ResourceProviderIdentifier = null;

        /**
         * Type of the external resource provider, for example, "tke". Currently, only "tke" is supported.
         * @type {string || null}
         */
        this.ResourceProviderType = null;

        /**
         * Purpose of the resource, that is, the node type. Currently only "TASK" is supported.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size (GB).
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * The mount point of the resource to the host. The specified mount point corresponds to the path on the host, and this mount point is used as the data storage directory in the Pod. This parameter has been deprecated.
         * @type {Array.<string> || null}
         */
        this.DataVolumes = null;

        /**
         * CPU type for the EKS cluster, currently supporting intel and amd.
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * Mounting information of the node data directory on Pod.
         * @type {Array.<PodVolume> || null}
         */
        this.PodVolumes = null;

        /**
         * Whether it is a floating specification. Valid values: 1 (yes) and 0 (no).
         * @type {number || null}
         */
        this.IsDynamicSpec = null;

        /**
         * Floating specification.
         * @type {DynamicPodSpec || null}
         */
        this.DynamicPodSpec = null;

        /**
         * Unique ID of the VPC.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Unique ID of the VPC subnet.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * pod name
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
 * DescribeInstanceOplog request structure.
 * @class
 */
class DescribeInstanceOplogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EMR instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Start time timestamp.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time timestamp.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Search criteria array.
         * @type {Array.<SearchItem> || null}
         */
        this.SearchFields = null;

        /**
         * Cluster, node, and component.
         * @type {string || null}
         */
        this.Operand = null;

        /**
         * Low-risk, medium-risk, and high-risk.
         * @type {string || null}
         */
        this.SecurityLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.SearchFields) {
            this.SearchFields = new Array();
            for (let z in params.SearchFields) {
                let obj = new SearchItem();
                obj.deserialize(params.SearchFields[z]);
                this.SearchFields.push(obj);
            }
        }
        this.Operand = 'Operand' in params ? params.Operand : null;
        this.SecurityLevel = 'SecurityLevel' in params ? params.SecurityLevel : null;

    }
}

/**
 * Specifies the inspection task configuration to be set.
 * @class
 */
class InspectionTaskSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique identifier for the inspection task.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Inspection task group name.
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Inspection task name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Inspection task parameter settings.
         * @type {Array.<TaskSettings> || null}
         */
        this.TaskSettings = null;

        /**
         * Whether it is selected. Valid values: "true" and "false".
         * @type {string || null}
         */
        this.Selected = null;

        /**
         * Whether monitoring is enabled.
         * @type {string || null}
         */
        this.Enable = null;

        /**
         * Event JSON template.
         * @type {string || null}
         */
        this.SettingsJson = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.TaskSettings) {
            this.TaskSettings = new Array();
            for (let z in params.TaskSettings) {
                let obj = new TaskSettings();
                obj.deserialize(params.TaskSettings[z]);
                this.TaskSettings.push(obj);
            }
        }
        this.Selected = 'Selected' in params ? params.Selected : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.SettingsJson = 'SettingsJson' in params ? params.SettingsJson : null;

    }
}

/**
 * User group information.
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * User list.
         * @type {Array.<string> || null}
         */
        this.Users = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Users = 'Users' in params ? params.Users : null;

    }
}

/**
 * ModifyYarnDeploy request structure.
 * @class
 */
class ModifyYarnDeployRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Scheduler after switching. The values are fair and capacity.
         * @type {string || null}
         */
        this.NewScheduler = null;

        /**
         * Currently used scheduler. The values are fair and capacity.
         * @type {string || null}
         */
        this.OldScheduler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NewScheduler = 'NewScheduler' in params ? params.NewScheduler : null;
        this.OldScheduler = 'OldScheduler' in params ? params.OldScheduler : null;

    }
}

/**
 * DescribeClusterFlowStatusDetail request structure.
 * @class
 */
class DescribeClusterFlowStatusDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EMR instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Process-related parameters.
         * @type {FlowParam || null}
         */
        this.FlowParam = null;

        /**
         * Whether additional task information is returned.
Default value: false.
         * @type {boolean || null}
         */
        this.NeedExtraDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FlowParam) {
            let obj = new FlowParam();
            obj.deserialize(params.FlowParam)
            this.FlowParam = obj;
        }
        this.NeedExtraDetail = 'NeedExtraDetail' in params ? params.NeedExtraDetail : null;

    }
}

/**
 * Subnet information.
 * @class
 */
class SubnetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet information (name).
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * Subnet information (ID).
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
 * DescribeDAGInfo response structure.
 * @class
 */
class DescribeDAGInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number, which is used for pagination query.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * StarRocks query information list.
         * @type {Array.<DAGInfo> || null}
         */
        this.DAGInfoList = null;

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

        if (params.DAGInfoList) {
            this.DAGInfoList = new Array();
            for (let z in params.DAGInfoList) {
                let obj = new DAGInfo();
                obj.deserialize(params.DAGInfoList[z]);
                this.DAGInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHiveQueries response structure.
 * @class
 */
class DescribeHiveQueriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Result list.
         * @type {Array.<HiveQuery> || null}
         */
        this.Results = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new HiveQuery();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDynamicInstance request structure.
 * @class
 */
class CreateDynamicInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>EMR cluster ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Name of the service that supports DynamicInstance.</p>
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * <p>DynamicInstance type.</p><p>Enumeration values:</p><ul><li>RayCluster: RayCluster type</li></ul>
         * @type {string || null}
         */
        this.DynamicInstanceType = null;

        /**
         * <p>Form creation information.</p>
         * @type {DynamicInstanceForm || null}
         */
        this.DynamicInstanceForm = null;

        /**
         * <p>YAML creation information.</p>
         * @type {string || null}
         */
        this.DynamicInstanceYaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.DynamicInstanceType = 'DynamicInstanceType' in params ? params.DynamicInstanceType : null;

        if (params.DynamicInstanceForm) {
            let obj = new DynamicInstanceForm();
            obj.deserialize(params.DynamicInstanceForm)
            this.DynamicInstanceForm = obj;
        }
        this.DynamicInstanceYaml = 'DynamicInstanceYaml' in params ? params.DynamicInstanceYaml : null;

    }
}

/**
 * Searching field.
 * @class
 */
class SearchItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Searchable type.
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * Searchable value.
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
 * Disk.
 * @class
 */
class DiskHealthIssue extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Disk ID.</p>
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * <p>Mounted directory.</p>
         * @type {string || null}
         */
        this.MountDir = null;

        /**
         * <p>Device path.</p>
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * <p>Exception type.</p>
         * @type {number || null}
         */
        this.CheckType = null;

        /**
         * <p>Priority.</p>
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * <p>Status.</p>
         * @type {number || null}
         */
        this.State = null;

        /**
         * <p>Probe source.</p>
         * @type {string || null}
         */
        this.DetectSource = null;

        /**
         * <p>First probe time.</p>
         * @type {string || null}
         */
        this.FirstDetectTime = null;

        /**
         * <p>Latest probe time.</p>
         * @type {string || null}
         */
        this.LastDetectTime = null;

        /**
         * <p>Probe information.</p>
         * @type {string || null}
         */
        this.DetectDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.MountDir = 'MountDir' in params ? params.MountDir : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.CheckType = 'CheckType' in params ? params.CheckType : null;
        this.Severity = 'Severity' in params ? params.Severity : null;
        this.State = 'State' in params ? params.State : null;
        this.DetectSource = 'DetectSource' in params ? params.DetectSource : null;
        this.FirstDetectTime = 'FirstDetectTime' in params ? params.FirstDetectTime : null;
        this.LastDetectTime = 'LastDetectTime' in params ? params.LastDetectTime : null;
        this.DetectDetail = 'DetectDetail' in params ? params.DetectDetail : null;

    }
}

/**
 * Common string map.
 * @class
 */
class StringMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Key.</p>
         * @type {string || null}
         */
        this.Key = null;

        /**
         * <p>Value.</p>
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
 * CreateCluster request structure.
 * @class
 */
class CreateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>EMR product version name, for example, EMR-V2.3.0 (EMR 2.3.0). Currently, product version names can be queried. For details, see <a href="https://www.tencentcloud.com/document/product/589/66338?from_cn_redirect=1">Product Version Name</a>.</p>
         * @type {string || null}
         */
        this.ProductVersion = null;

        /**
         * <p>Whether to enable high availability for the node. Valid values:</p><li>true: yes</li><li>false: no</li>
         * @type {boolean || null}
         */
        this.EnableSupportHAFlag = null;

        /**
         * <p>Instance name.</p><li>The value can contain 6 to 36 characters.</li><li>Only Chinese characters, letters, digits, hyphens (-), and underscores (_) are allowed.</li>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * <p>Instance billing mode. Valid values:</p><li>PREPAID: prepaid, that is, yearly/monthly subscription</li><li>POSTPAID_BY_HOUR: pay-as-you-go on an hourly basis</li>
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * <p>Instance login settings. This parameter is used to set the login method for the purchased node, either the password or key.</p><li>When a key is set, the password is only used to log in to the native WebUI shortcut entry for the component.</li><li>When no key is set, the password is used to log in to the purchased node as well as the native WebUI shortcut entry for the component.</li>
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * <p>Cluster application scenario and supported deployment component configuration.</p>
         * @type {SceneSoftwareConfig || null}
         */
        this.SceneSoftwareConfig = null;

        /**
         * <p>Parameter settings related to yearly/monthly subscription. This parameter can be used to specify the purchase duration of a yearly/monthly subscription instance, whether to enable auto-renewal, and other attributes. This parameter is required if the billing mode of the specified instance is prepaid.</p>
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * <p>ID of the security group to which the instance belongs, for example, sg-xxxxxxxx. This parameter can be obtained by calling the SecurityGroupId field in the response result of <a href="https://www.tencentcloud.com/document/api/215/15808?from_cn_redirect=1">DescribeSecurityGroups</a>.</p>
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * <p><a href="https://www.tencentcloud.com/document/product/589/35656?from_cn_redirect=1">Bootstrap operation</a> script settings.</p>
         * @type {Array.<ScriptBootstrapActionConfig> || null}
         */
        this.ScriptBootstrapActionConfig = null;

        /**
         * <p>Unique random identifier with a time-to-live of 5 minutes, which needs to be specified by the caller to prevent the client from repeatedly creating resources, for example, a9a90aa6-<strong><strong>-</strong></strong>-****-fae360632808.</p>
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * <p>Whether to enable public network access for the cluster Master node. Valid values:</p><li>NEED_MASTER_WAN: yes</li><li>NOT_NEED_MASTER_WAN: no</li>By default, public network access is enabled for the cluster Master node.
         * @type {string || null}
         */
        this.NeedMasterWan = null;

        /**
         * <p>Whether to enable remote login in the public network. (When SecurityGroupId is not empty, this parameter is invalid.) If this parameter is left empty, it is disabled by default. Valid values:</p><li>true: enable</li><li>false: disable</li>
         * @type {boolean || null}
         */
        this.EnableRemoteLoginFlag = null;

        /**
         * <p>Whether to enable Kerberos authentication. It is disabled by default. Valid values:</p><li>true: enabled</li><li>false: disabled</li>
         * @type {boolean || null}
         */
        this.EnableKerberosFlag = null;

        /**
         * <p><a href="https://www.tencentcloud.com/document/product/589/35655?from_cn_redirect=1?from_cn_redirect=1">Custom software configuration.</a></p>
         * @type {string || null}
         */
        this.CustomConf = null;

        /**
         * <p>List of tag descriptions. When this parameter is specified, tags are bound to the corresponding instance.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>List of dispersed placement group IDs. Currently, only one ID can be specified.<br>This parameter can be obtained by calling the DisasterRecoverGroupId field in the response result of <a href="https://www.tencentcloud.com/document/product/213/17810?from_cn_redirect=1">DescribeDisasterRecoverGroups</a>.</p>
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * <p>Whether to enable cluster-level CBS encryption. It is not encrypted by default. Valid values:</p><li>true: encrypted</li><li>false: not encrypted</li>
         * @type {boolean || null}
         */
        this.EnableCbsEncryptFlag = null;

        /**
         * <p>MetaDB information. When MetaType is set to EMR_NEW_META, MetaDataJdbcUrl, MetaDataUser, MetaDataPass, and UnifyMetaInstanceId can be left empty.<br>When MetaType is set to EMR_EXIT_META, set UnifyMetaInstanceId.<br>When MetaType is set to USER_CUSTOM_META, set MetaDataJdbcUrl, MetaDataUser, and MetaDataPass.</p>
         * @type {CustomMetaDBInfo || null}
         */
        this.MetaDBInfo = null;

        /**
         * <p>Shared component information.</p>
         * @type {Array.<DependService> || null}
         */
        this.DependService = null;

        /**
         * <p>Specifications of node resources. Set one for each AZ. The first is the primary AZ, the second is the secondary AZ, and the third is the arbitration AZ. If cross-AZ is disabled, the length only needs to be 1.</p>
         * @type {Array.<ZoneResourceConfiguration> || null}
         */
        this.ZoneResourceConfiguration = null;

        /**
         * <p>COS bucket path, which is used when a StarRocks compute-storage separation cluster is created.</p>
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * <p>Node flag information, which is currently only provided for the Terraform platform.</p>
         * @type {Array.<NodeMark> || null}
         */
        this.NodeMarks = null;

        /**
         * <p>clb id</p>
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * <p>Database version. Valid values: mysql8/tdsql8/mysql5.</p>
         * @type {string || null}
         */
        this.DefaultMetaVersion = null;

        /**
         * <p>Whether database audit is enabled.</p>
         * @type {number || null}
         */
        this.NeedCdbAudit = null;

        /**
         * <p>Source IP address, which is specified in the security group.</p>
         * @type {string || null}
         */
        this.SgIP = null;

        /**
         * <p>Partition of a partition placement group.</p>
         * @type {number || null}
         */
        this.PartitionNumber = null;

        /**
         * <p>Service UI address.</p><p>Enumeration values:</p><ul><li>0: Service UI address. Only one service UI address is returned.</li><li>1: Service UI address. If the service has multiple UI addresses, all results are returned, such as Impalad, StateStore, and Catalogd of Impala.</li></ul><p>Default value: 0.</p>
         * @type {number || null}
         */
        this.WebUiVersion = null;

        /**
         * <p>Whether the system disk is encrypted.</p>
         * @type {boolean || null}
         */
        this.EnableCbsSysEncryptFlag = null;

        /**
         * <p>Custom MetaDB data.</p>
         * @type {Array.<CustomMetaDBInfo> || null}
         */
        this.MetaDBGroupInfo = null;

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
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;

        if (params.NodeMarks) {
            this.NodeMarks = new Array();
            for (let z in params.NodeMarks) {
                let obj = new NodeMark();
                obj.deserialize(params.NodeMarks[z]);
                this.NodeMarks.push(obj);
            }
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.DefaultMetaVersion = 'DefaultMetaVersion' in params ? params.DefaultMetaVersion : null;
        this.NeedCdbAudit = 'NeedCdbAudit' in params ? params.NeedCdbAudit : null;
        this.SgIP = 'SgIP' in params ? params.SgIP : null;
        this.PartitionNumber = 'PartitionNumber' in params ? params.PartitionNumber : null;
        this.WebUiVersion = 'WebUiVersion' in params ? params.WebUiVersion : null;
        this.EnableCbsSysEncryptFlag = 'EnableCbsSysEncryptFlag' in params ? params.EnableCbsSysEncryptFlag : null;

        if (params.MetaDBGroupInfo) {
            this.MetaDBGroupInfo = new Array();
            for (let z in params.MetaDBGroupInfo) {
                let obj = new CustomMetaDBInfo();
                obj.deserialize(params.MetaDBGroupInfo[z]);
                this.MetaDBGroupInfo.push(obj);
            }
        }

    }
}

/**
 * CreateSLInstance response structure.
 * @class
 */
class CreateSLInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance unique identifier (string).
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Image information.
 * @class
 */
class ImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * TCR instance ID.
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Namespace.
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Image repository name.
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * Image version.
         * @type {string || null}
         */
        this.ImageVersion = null;

        /**
         * Image pull policy.
         * @type {string || null}
         */
        this.ImagePullPolicy = null;

        /**
         * Image address.
         * @type {string || null}
         */
        this.Image = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;
        this.ImagePullPolicy = 'ImagePullPolicy' in params ? params.ImagePullPolicy : null;
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * Serverless Instance
 * @class
 */
class SLInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * EMR Instance Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * EMR Numeric Instance Id
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * Instance Name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Region id
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Zone Name
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Pay Mode
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Disk Type
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Disk Size
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Node Type
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Node Number
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Expire Time
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Isolate Time
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * Create Time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Auto Renew Flag
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * EMR Numeric Instance Status
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Zone Setting
         * @type {Array.<ZoneSetting> || null}
         */
        this.ZoneSettings = null;

        /**
         * Bound Tags
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Deploy Role
         * @type {string || null}
         */
        this.DeployRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.ZoneSettings) {
            this.ZoneSettings = new Array();
            for (let z in params.ZoneSettings) {
                let obj = new ZoneSetting();
                obj.deserialize(params.ZoneSettings[z]);
                this.ZoneSettings.push(obj);
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
        this.DeployRole = 'DeployRole' in params ? params.DeployRole : null;

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
         * Total number of queried nodes.
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * Node detailed information list.
         * @type {Array.<NodeHardwareInfo> || null}
         */
        this.NodeList = null;

        /**
         * List of all tag keys for the user.
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Resource type list.
         * @type {Array.<string> || null}
         */
        this.HardwareResourceTypeList = null;

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
 * TerminateInstance response structure.
 * @class
 */
class TerminateInstanceResponse extends  AbstractModel {
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
 * ModifyBootScript response structure.
 * @class
 */
class ModifyBootScriptResponse extends  AbstractModel {
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
 * Specifies the tags to be forcibly modified.
 * @class
 */
class ModifyResourceTags extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID or CVM ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Six-segment resource expression.
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Resource prefix.
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * ap-beijing
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * emr
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * List of deleted tags.
         * @type {Array.<Tag> || null}
         */
        this.DeleteTags = null;

        /**
         * List of added tags.
         * @type {Array.<Tag> || null}
         */
        this.AddTags = null;

        /**
         * List of modified tags.
         * @type {Array.<Tag> || null}
         */
        this.ModifyTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new Tag();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }

        if (params.AddTags) {
            this.AddTags = new Array();
            for (let z in params.AddTags) {
                let obj = new Tag();
                obj.deserialize(params.AddTags[z]);
                this.AddTags.push(obj);
            }
        }

        if (params.ModifyTags) {
            this.ModifyTags = new Array();
            for (let z in params.ModifyTags) {
                let obj = new Tag();
                obj.deserialize(params.ModifyTags[z]);
                this.ModifyTags.push(obj);
            }
        }

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
         * Whether the resource scheduling feature is enabled.
         * @type {boolean || null}
         */
        this.OpenSwitch = null;

        /**
         * Resource scheduler in use.
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Information of the fair scheduler.
         * @type {string || null}
         */
        this.FSInfo = null;

        /**
         * Information of the capacity scheduler.
         * @type {string || null}
         */
        this.CSInfo = null;

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
        this.OpenSwitch = 'OpenSwitch' in params ? params.OpenSwitch : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.FSInfo = 'FSInfo' in params ? params.FSInfo : null;
        this.CSInfo = 'CSInfo' in params ? params.CSInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyServiceParamsByExportConfs request structure.
 * @class
 */
class ModifyServiceParamsByExportConfsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 
         * @type {Array.<ExportConfMeta> || null}
         */
        this.ExportConfParamList = null;

        /**
         * <p>ip</p>
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * 
         * @type {string || null}
         */
        this.ConfGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ExportConfParamList) {
            this.ExportConfParamList = new Array();
            for (let z in params.ExportConfParamList) {
                let obj = new ExportConfMeta();
                obj.deserialize(params.ExportConfParamList[z]);
                this.ExportConfParamList.push(obj);
            }
        }
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.ConfGroupName = 'ConfGroupName' in params ? params.ConfGroupName : null;

    }
}

/**
 * Event details list.
 * @class
 */
class EMREventListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address of the affected event.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Service role of the affected event.
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Event name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Event alarm details.
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * Event occurrence time.
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * Tag selector matching expression.
 * @class
 */
class LabelSelectorRequirement extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Key.</p>
         * @type {string || null}
         */
        this.Key = null;

        /**
         * <p>Matching operation.</p>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * <p>Value.</p>
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeKyuubiQueryInfo request structure.
 * @class
 */
class DescribeKyuubiQueryInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time for obtaining queried information (s).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time for obtaining queried information (s).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number of entries per page for pagination query. Minimum value: 1. Maximum value: 100. 
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number for pagination queries, starting from 1.
         * @type {number || null}
         */
        this.Page = null;

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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Page = 'Page' in params ? params.Page : null;

    }
}

/**
 * GooseFSVolume
 * @class
 */
class GooseFSVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Storage volume name.</p>
         * @type {string || null}
         */
        this.VolumeName = null;

        /**
         * <p>GooseFS instance ID.</p>
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * <p>GooseFS namespace.</p>
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * <p>Mount path in the namespace.</p>
         * @type {string || null}
         */
        this.SubPath = null;

        /**
         * <p>FuseVERSION description.</p>
         * @type {string || null}
         */
        this.FuseVersion = null;

        /**
         * <p>Client version description, for example, GOOSE-1.5.2.</p>
         * @type {string || null}
         */
        this.ClientVersion = null;

        /**
         * <p>Default mount parameter.</p>
         * @type {string || null}
         */
        this.MountOptions = null;

        /**
         * <p>Default JVM parameter.</p>
         * @type {string || null}
         */
        this.JvmOptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumeName = 'VolumeName' in params ? params.VolumeName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.SubPath = 'SubPath' in params ? params.SubPath : null;
        this.FuseVersion = 'FuseVersion' in params ? params.FuseVersion : null;
        this.ClientVersion = 'ClientVersion' in params ? params.ClientVersion : null;
        this.MountOptions = 'MountOptions' in params ? params.MountOptions : null;
        this.JvmOptions = 'JvmOptions' in params ? params.JvmOptions : null;

    }
}

/**
 * DescribeNodeResourceConfigFast response structure.
 * @class
 */
class DescribeNodeResourceConfigFastResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value of the DescribeResourceConfig API.
         * @type {Array.<DescribeResourceConfig> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DescribeResourceConfig();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInsightList response structure.
 * @class
 */
class DescribeInsightListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number, which is used for pagination query.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Insight result array.
         * @type {Array.<InsightResult> || null}
         */
        this.ResultList = null;

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

        if (params.ResultList) {
            this.ResultList = new Array();
            for (let z in params.ResultList) {
                let obj = new InsightResult();
                obj.deserialize(params.ResultList[z]);
                this.ResultList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutoScaleRecords response structure.
 * @class
 */
class DescribeAutoScaleRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of scaling records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Record list.
         * @type {Array.<AutoScaleRecord> || null}
         */
        this.RecordList = null;

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

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new AutoScaleRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Kubernetes Label
 * @class
 */
class TkeLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Label Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Label Value
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
 * Global parameter information of all scaling groups in the cluster.
 * @class
 */
class GroupGlobalConfs extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group information.
         * @type {AutoScaleResourceConf || null}
         */
        this.GroupGlobalConf = null;

        /**
         * Number of nodes scaled out in the current scaling group.
         * @type {number || null}
         */
        this.CurrentNodes = null;

        /**
         * Number of postpaid nodes scaled out in the current scaling group.
         * @type {number || null}
         */
        this.CurrentPostPaidNodes = null;

        /**
         * Number of spot instance nodes scaled out in the current scaling group.
         * @type {number || null}
         */
        this.CurrentSpotPaidNodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GroupGlobalConf) {
            let obj = new AutoScaleResourceConf();
            obj.deserialize(params.GroupGlobalConf)
            this.GroupGlobalConf = obj;
        }
        this.CurrentNodes = 'CurrentNodes' in params ? params.CurrentNodes : null;
        this.CurrentPostPaidNodes = 'CurrentPostPaidNodes' in params ? params.CurrentPostPaidNodes : null;
        this.CurrentSpotPaidNodes = 'CurrentSpotPaidNodes' in params ? params.CurrentSpotPaidNodes : null;

    }
}

/**
 * DescribeInspectionTaskResult response structure.
 * @class
 */
class DescribeInspectionTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Inspection task record encoded in Base64 format.
         * @type {string || null}
         */
        this.InspectionResultInfo = null;

        /**
         * The total number of records.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Category information encoded in Base64 format. Valid values: {"FixedTime": "fixed time" and "RealTime": "real time"}.
         * @type {string || null}
         */
        this.TypeInfo = null;

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
        this.InspectionResultInfo = 'InspectionResultInfo' in params ? params.InspectionResultInfo : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TypeInfo = 'TypeInfo' in params ? params.TypeInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Operation process scope.
 * @class
 */
class ComponentBasicRestartInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Required) Process name, for example, NameNode.
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * List of operation IP addresses.
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
         * <p>Product ID. Different product IDs indicate different EMR product versions. Valid values:<br>51: STARROCKS-V1.4.0<br>54: STARROCKS-V2.0.0<br>27: KAFKA-V1.0.0<br>50: KAFKA-V2.0.0<br>16: EMR-V2.3.0<br>20: EMR-V2.5.0<br>30: EMR-V2.6.0<br>38: EMR-V2.7.0<br>25: EMR-V3.1.0<br>33: EMR-V3.2.1<br>34: EMR-V3.3.0<br>37: EMR-V3.4.0<br>44: EMR-V3.5.0<br>53: EMR-V3.6.0<br>58: EMR-3.6.1<br>59: EMR-serverless-1.0.0<br>60: EMR-TKE-1.1.0<br>61: SR-V2.1.0<br>62: SR-V2.1.0-SharedData<br>63: SR-V2.1.0.tlinux<br>64: unified metadata management project<br>65: EMR-TKE-AI-1.0.0<br>66: RSS-1.0.0<br>67: SR-V2.2.0<br>68: SR-V2.2.0.tlinux<br>69: EMR-AI-1.1.0<br>70: SR-V2.2.1<br>71: EMR-3.7.0<br>72: EMR-serverless-1.0.1<br>73: KAFKA-2.0.1<br>74: SR-V2.2.2<br>75: EMR-TKE-AI-1.1.0<br>76: EMR-V3.7.1<br>77: SERVERLESS-TCBASE-1.0.0<br>78: EMR-V3.6.2<br>79: STARROCKS-V2.2.2<br>80: EMR-AI-V1.1.1</p>
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * <p>List of deployed components. Different EMR product IDs correspond to different optional component lists (ProductId: For details about its meaning, see the ProductId request parameter). For details about how to query optional component lists for different product versions, see <a href="https://www.tencentcloud.com/document/product/589/20279?from_cn_redirect=1">Component Version</a>.<br>Example values: hive and flink.</p>
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * <p>Whether to enable high availability for the node. Valid values:</p><li>0: disables high availability for the node.</li><li>1: enables high availability for the node.</li>
         * @type {number || null}
         */
        this.SupportHA = null;

        /**
         * <p>Instance name.</p><li>The value can contain 6 to 36 characters.</li><li>Only Chinese characters, letters, digits, hyphens (-), and underscores (_) are allowed.</li>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * <p>Instance billing mode. Valid values:</p><li>0: pay-as-you-go</li><li>1: yearly/monthly subscription</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * <p>Instance purchase duration, which is used together with TimeUnit.</p><li>When TimeUnit is set to s, this parameter can only be set to 3600, indicating a pay-as-you-go instance.</li><li>When TimeUnit is set to m, the value set for this parameter indicates the subscription duration of the instance. For example, 1 indicates a one-month subscription.</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * <p>Time unit for purchasing instances. Valid values:</p><li>s: indicates seconds. When PayMode is set to 0, TimeUnit can only be set to s.</li><li>m: indicates months. When PayMode is set to 1, TimeUnit can only be set to m.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * <p>Instance login settings. This parameter is used to set the login method for the purchased node, either the password or key.</p><li>When a key is set, the password is only used to log in to the native WebUI shortcut entry for the component.</li><li>When no key is set, the password is used to log in to the purchased node as well as the native WebUI shortcut entry for the component.</li>
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * <p>VPC-related information configuration. This parameter can be used to specify the VPC ID, subnet ID, and so on.</p>
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * <p>Node resource specifications.</p>
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * <p>Specifies the parameters to be set for enabling COS access.</p>
         * @type {COSSettings || null}
         */
        this.COSSettings = null;

        /**
         * <p>Location of the instance. This parameter can be used to specify attributes such as the AZ and associated project of the instance.</p>
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * <p>ID of the security group to which the instance belongs, for example, sg-xxxxxxxx. This parameter can be obtained by calling the SecurityGroupId field in the response result of <a href="https://www.tencentcloud.com/document/api/215/15808?from_cn_redirect=1">DescribeSecurityGroups</a>.</p>
         * @type {string || null}
         */
        this.SgId = null;

        /**
         * <p><a href="https://www.tencentcloud.com/document/product/589/35656?from_cn_redirect=1">Bootstrap operation</a> script settings.</p>
         * @type {Array.<PreExecuteFileSettings> || null}
         */
        this.PreExecutedFileSettings = null;

        /**
         * <p>Whether a yearly/monthly subscription instance is automatically renewed. Valid values:</p><li>0: no</li><li>1: yes</li>
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * <p>Unique random identifier, which is valid for five minutes and needs to be specified by the caller. This prevents the client from repeatedly creating resources. Example value: a9a90aa6-<strong><strong>-</strong></strong>-****-fae36063280.</p>
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * <p>Whether to enable public network access for the cluster Master node. Valid values:</p><li>NEED_MASTER_WAN: yes</li><li>NOT_NEED_MASTER_WAN: no</li>By default, public network access is enabled for the cluster Master node.
         * @type {string || null}
         */
        this.NeedMasterWan = null;

        /**
         * <p>Whether to enable remote public network login, that is, port 22. If SgId is passed, this parameter is invalid.</p>
         * @type {number || null}
         */
        this.RemoteLoginAtCreate = null;

        /**
         * <p>Whether the security cluster is enabled. Valid values: 0 (no) and values other than 0 (yes).</p>
         * @type {number || null}
         */
        this.CheckSecurity = null;

        /**
         * <p>Specifies the external file system to be accessed.</p>
         * @type {string || null}
         */
        this.ExtendFsField = null;

        /**
         * <p>List of tag descriptions. When this parameter is specified, tags are bound to the corresponding instance.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>List of dispersed placement group IDs. Currently, only one ID can be specified.<br>This parameter can be obtained by calling the SecurityGroupId field in the response result of <a href="https://www.tencentcloud.com/document/product/213/15486?from_cn_redirect=1">DescribeSecurityGroups</a>.</p>
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * <p>CBS encryption disk at the cluster level. Valid values: 0 (not encrypted) and 1 (encrypted). Default value: 0.</p>
         * @type {number || null}
         */
        this.CbsEncrypt = null;

        /**
         * <p>Hive shared metadata database type. Valid values:</p><li>EMR_DEFAULT_META: created by the cluster by default</li><li>EMR_EXIST_META: EMR-MetaDB specified by the cluster</li><li>USER_CUSTOM_META: custom MetaDB used by the cluster</li>
         * @type {string || null}
         */
        this.MetaType = null;

        /**
         * <p>EMR-MetaDB instance.</p>
         * @type {string || null}
         */
        this.UnifyMetaInstanceId = null;

        /**
         * <p>Custom MetaDB information.</p>
         * @type {CustomMetaInfo || null}
         */
        this.MetaDBInfo = null;

        /**
         * <p>Custom application role.</p>
         * @type {string || null}
         */
        this.ApplicationRole = null;

        /**
         * <p>Scenario-based values:<br>Hadoop-Kudu<br>Hadoop-Zookeeper<br>Hadoop-Presto<br>Hadoop-Hbase</p>
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * <p>Shared component information.</p>
         * @type {Array.<ExternalService> || null}
         */
        this.ExternalService = null;

        /**
         * <p>If this parameter is set to 0, MultiZone, MultiDeployStrategy, and MultiZoneSettings are disabled. If this parameter is set to 1, ResourceSpec is deprecated and MultiZoneSettings is used.</p>
         * @type {number || null}
         */
        this.VersionID = null;

        /**
         * <p>true: indicates that cross-AZ deployment is enabled. It is only a user parameter for cluster creation and cannot be adjusted subsequently.</p>
         * @type {boolean || null}
         */
        this.MultiZone = null;

        /**
         * <p>Specifications of node resources. Set one for each AZ. The first is the primary AZ, the second is the secondary AZ, and the third is the arbitration AZ. If cross-AZ is disabled, the length only needs to be 1.</p>
         * @type {Array.<MultiZoneSetting> || null}
         */
        this.MultiZoneSettings = null;

        /**
         * <p>COS bucket path, which is used when a StarRocks compute-storage separation cluster is created.</p>
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * <p>Node flag information, which is currently only provided for the Terraform platform.</p>
         * @type {Array.<NodeMark> || null}
         */
        this.NodeMarks = null;

        /**
         * <p>CLB id</p>
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * <p>Database type. Valid values: mysql8/tdsql8.</p>
         * @type {string || null}
         */
        this.DefaultMetaVersion = null;

        /**
         * <p>Whether to enable audit. Valid values: 0 (no) and 1 (yes).</p>
         * @type {number || null}
         */
        this.NeedCdbAudit = null;

        /**
         * <p>Source IP address, which is specified in the security group.</p>
         * @type {string || null}
         */
        this.SgIP = null;

        /**
         * <p>Partition of a partition placement group.</p>
         * @type {number || null}
         */
        this.PartitionNumber = null;

        /**
         * <p>Service UI address.</p><p>Enumeration values:</p><ul><li>0: Service UI address. Only one service UI address is returned.</li><li>1: Service UI address. If the service has multiple UI addresses, all results are returned, such as Impalad, StateStore, and Catalogd of Impala.</li></ul><p>Default value: 0.</p>
         * @type {number || null}
         */
        this.WebUiVersion = null;

        /**
         * <p>Whether to enable cluster-level CBS system disk encryption. Valid values: 0 (no) and 1 (yes).</p>
         * @type {number || null}
         */
        this.CbsSysEncrypt = null;

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
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;

        if (params.NodeMarks) {
            this.NodeMarks = new Array();
            for (let z in params.NodeMarks) {
                let obj = new NodeMark();
                obj.deserialize(params.NodeMarks[z]);
                this.NodeMarks.push(obj);
            }
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.DefaultMetaVersion = 'DefaultMetaVersion' in params ? params.DefaultMetaVersion : null;
        this.NeedCdbAudit = 'NeedCdbAudit' in params ? params.NeedCdbAudit : null;
        this.SgIP = 'SgIP' in params ? params.SgIP : null;
        this.PartitionNumber = 'PartitionNumber' in params ? params.PartitionNumber : null;
        this.WebUiVersion = 'WebUiVersion' in params ? params.WebUiVersion : null;
        this.CbsSysEncrypt = 'CbsSysEncrypt' in params ? params.CbsSysEncrypt : null;

    }
}

/**
 * Dynamically generated change detailed items.
 * @class
 */
class DiffDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attribute.
         * @type {string || null}
         */
        this.Attribute = null;

        /**
         * Effective item.
         * @type {string || null}
         */
        this.InEffect = null;

        /**
         * Pending effective.
         * @type {string || null}
         */
        this.PendingEffectiveness = null;

        /**
         * Operation.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Queue.
         * @type {string || null}
         */
        this.Queue = null;

        /**
         * Configuration set.
         * @type {string || null}
         */
        this.ConfigSet = null;

        /**
         * Tag.
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * Current position.
         * @type {string || null}
         */
        this.InEffectIndex = null;

        /**
         * Position to be effective.
         * @type {string || null}
         */
        this.PendingEffectIndex = null;

        /**
         * Plan mode name.
         * @type {string || null}
         */
        this.PlanName = null;

        /**
         * Tag.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Placement rule.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Username.
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
        this.Attribute = 'Attribute' in params ? params.Attribute : null;
        this.InEffect = 'InEffect' in params ? params.InEffect : null;
        this.PendingEffectiveness = 'PendingEffectiveness' in params ? params.PendingEffectiveness : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Queue = 'Queue' in params ? params.Queue : null;
        this.ConfigSet = 'ConfigSet' in params ? params.ConfigSet : null;
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.InEffectIndex = 'InEffectIndex' in params ? params.InEffectIndex : null;
        this.PendingEffectIndex = 'PendingEffectIndex' in params ? params.PendingEffectIndex : null;
        this.PlanName = 'PlanName' in params ? params.PlanName : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * Advanced settings of the auto-scaling group.
 * @class
 */
class AutoScaleGroupAdvanceAttrs extends  AbstractModel {
    constructor(){
        super();

        /**
         * Advanced settings of computing resources.
         * @type {ComputeResourceAdvanceParams || null}
         */
        this.ComputeResourceAdvanceParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ComputeResourceAdvanceParams) {
            let obj = new ComputeResourceAdvanceParams();
            obj.deserialize(params.ComputeResourceAdvanceParams)
            this.ComputeResourceAdvanceParams = obj;
        }

    }
}

/**
 * Bootstrap addition.
 * @class
 */
class ScriptBootstrapActionConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS address of the script. Format: https://beijing-111111.cos.ap-beijing.myqcloud.com/data/test.sh. To query the COS bucket list, refer to [Bucket List](https://console.cloud.tencent.com/cos/bucket).
         * @type {string || null}
         */
        this.CosFileURI = null;

        /**
         * Time range for the bootstrap script execution.
<li>resourceAfter: after node initialization</li>
<li>clusterAfter: after cluster startup</li>
<li>clusterBefore: before cluster startup</li>
         * @type {string || null}
         */
        this.ExecutionMoment = null;

        /**
         * Execution script parameters. For the parameter format, follow standard Shell specifications.
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * Script file name.
         * @type {string || null}
         */
        this.CosFileName = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * InstallSoftware response structure.
 * @class
 */
class InstallSoftwareResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Verification error information.</p>
         * @type {Array.<string> || null}
         */
        this.ErrorMessages = null;

        /**
         * <p>Flow ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.ErrorMessages = 'ErrorMessages' in params ? params.ErrorMessages : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Pod node option set.
 * @class
 */
class NodeSelectorTerm extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node option expression set.
         * @type {Array.<NodeSelectorRequirement> || null}
         */
        this.MatchExpressions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchExpressions) {
            this.MatchExpressions = new Array();
            for (let z in params.MatchExpressions) {
                let obj = new NodeSelectorRequirement();
                obj.deserialize(params.MatchExpressions[z]);
                this.MatchExpressions.push(obj);
            }
        }

    }
}

/**
 * ModifyUsersOfGroupSTD request structure.
 * @class
 */
class ModifyUsersOfGroupSTDRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Cluster name.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>User group name.</p>
         * @type {string || null}
         */
        this.Group = null;

        /**
         * <p>User list.</p>
         * @type {Array.<string> || null}
         */
        this.Users = null;

        /**
         * <p>User group description.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Enumeration class. Valid values: ADD, DELETE, and SYNC.</p><p>Enumeration class description:</p><ul><li>ADD: Users added in batches. Adding the same user for multiple times does not trigger an error.</li><li>DELETE: Users deleted from the user group in batches. Deleting a non-existing user does not trigger an error.</li><li>SYNC: Used to synchronize the entire user group. If the list is empty, the entire user group is cleared.<br>Default value: SYNC.</li></ul>
         * @type {string || null}
         */
        this.OperateAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Users = 'Users' in params ? params.Users : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.OperateAction = 'OperateAction' in params ? params.OperateAction : null;

    }
}

/**
 * List of key-value pairs.
 * @class
 */
class ItemSeq extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag name.
         * @type {Array.<Item> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Item();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * Resource details.
 * @class
 */
class OutterResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifications.
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * Specifications name.
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * Hard disk type.
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * Hard disk type.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * System disk size.
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * Memory size.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Hard disk size.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Specifications.
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
 * Option for the Pod toleration scheduling node.
 * @class
 */
class PreferredSchedulingTerm extends  AbstractModel {
    constructor(){
        super();

        /**
         * Weight. Value range: 1–100.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Node selection expression.
         * @type {NodeSelectorTerm || null}
         */
        this.Preference = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Weight = 'Weight' in params ? params.Weight : null;

        if (params.Preference) {
            let obj = new NodeSelectorTerm();
            obj.deserialize(params.Preference)
            this.Preference = obj;
        }

    }
}

/**
 * DeleteAutoScaleStrategy request structure.
 * @class
 */
class DeleteAutoScaleStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Automatic scaling rule type. Valid values: 1 (scaling by load metric) and 2 (scaling by time rule).
         * @type {number || null}
         */
        this.StrategyType = null;

        /**
         * Rule ID.
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * Scaling group ID.
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

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
         * Total number of instances that meet the criteria.
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * Cluster list.
         * @type {Array.<EmrListInstance> || null}
         */
        this.InstancesList = null;

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
 * 
 * @class
 */
class ExportConfMeta extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 
         * @type {string || null}
         */
        this.Classification = null;

        /**
         * 
         * @type {string || null}
         */
        this.ServiceVersion = null;

        /**
         * 
         * @type {string || null}
         */
        this.Properties = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.Classification = 'Classification' in params ? params.Classification : null;
        this.ServiceVersion = 'ServiceVersion' in params ? params.ServiceVersion : null;
        this.Properties = 'Properties' in params ? params.Properties : null;

    }
}

/**
 * AZ configuration information.
 * @class
 */
class ZoneResourceConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC-related information configuration. This parameter can be used to specify the VPC ID and subnet ID.
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * Location of the instance. This parameter can be used to specify attributes such as the AZ and associated project of the instance.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Specifications of all node resources.
         * @type {AllNodeResourceSpec || null}
         */
        this.AllNodeResourceSpec = null;

        /**
         * In single-AZ deployment, ZoneTag can be left empty. In dual-AZ deployment mode, select master for the first AZ's ZoneTag and standby for the second. In three-AZ deployment mode, select master for the first AZ's ZoneTag, standby for the second, and third-party for the third. Valid values:
  <li>master</li>
  <li>standby</li>
  <li>third-party</li>
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
 * Context of the rule for executing auto scaling once.
 * @class
 */
class NotRepeatStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Exact time when the task was executed. Format: "2020-07-13 00:00:00".
         * @type {string || null}
         */
        this.ExecuteAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecuteAt = 'ExecuteAt' in params ? params.ExecuteAt : null;

    }
}

/**
 * Configuration item (configuration management page).
 * @class
 */
class ConfigurationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration item name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Configuration item value.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Name of the configuration file where the configuration items are located.
         * @type {string || null}
         */
        this.InFile = null;

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
        this.InFile = 'InFile' in params ? params.InFile : null;

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
         * <p>Time unit for purchasing instances. Valid values:</p><li>s: indicates seconds. When PayMode is set to 0, TimeUnit can only be set to s.</li><li>m: indicates months. When PayMode is set to 1, TimeUnit can only be set to m.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * <p>Instance purchase duration, which is used together with TimeUnit.</p><li>When TimeUnit is set to s, this parameter can only be set to 3600, indicating a pay-as-you-go instance.</li><li>When TimeUnit is set to m, the value set for this parameter indicates the subscription duration of the instance. For example, 1 indicates a one-month subscription.</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * <p>Currency type. Valid values:</p><li>CNY: RMB</li>
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * <p>Instance billing mode. Valid values:</p><li>0: pay-as-you-go</li><li>1: yearly/monthly subscription</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * <p>Whether to enable high availability for the node. Valid values:</p><li>0: no</li><li>1: yes</li>
         * @type {number || null}
         */
        this.SupportHA = null;

        /**
         * <p>List of deployed components. For different EMR product IDs, different required component lists need to be set (ProductId: For details about its meaning, see the ProductId parameter). Valid values: <li>When ProductId is set to 2 (EMR-V2.0.1), the required components include hdfs-2.7.3, yarn-2.7.3, zookeeper-3.4.9, and knox-1.2.0.</li><li>When ProductId is set to 16 (EMR-V2.3.0), the required components include hdfs-2.8.5, yarn-2.8.5, zookeeper-3.5.5, and knox-1.2.0.</li><li>When ProductId is set to 20 (EMR-V2.5.0), the required components include hdfs-2.8.5, yarn-2.8.5, zookeeper-3.6.1, and knox-1.2.0.</li><li>When ProductId is set to 30 (EMR-V2.6.0), the required components include hdfs-2.8.5, yarn-2.8.5, zookeeper-3.6.1, openldap-2.4.44, and knox-1.2.0.</li><li>When ProductId is set to 38 (EMR-V2.7.0), the required components include hdfs-2.8.5, yarn-2.8.5, zookeeper-3.6.3, openldap-2.4.44, and knox-1.6.1.</li><li>When ProductId is set to 57 (EMR-V2.8.0), the required components include hdfs-2.8.5, yarn-2.8.5, zookeeper-3.6.3, openldap-2.4.44, and knox-1.6.1.</li><li>When ProductId is set to 7 (EMR-V3.0.0), the required components include hdfs-3.1.2, yarn-3.1.2, zookeeper-3.4.9, and knox-1.2.0.</li><li>When ProductId is set to 25 (EMR-V3.1.0), the required components include hdfs-3.1.2, yarn-3.1.2, zookeeper-3.6.1, and knox-1.2.0.</li><li>When ProductId is set to 31 (EMR-V3.1.1), the required components include hdfs-3.1.2, yarn-3.1.2, zookeeper-3.6.1, and knox-1.2.0.</li><li>When ProductId is set to 28 (EMR-V3.2.0), the required components include hdfs-3.2.2, yarn-3.2.2, zookeeper-3.6.1, and knox-1.2.0.</li><li>When ProductId is set to 33 (EMR-V3.2.1), the required components include hdfs-3.2.2, yarn-3.2.2, zookeeper-3.6.1, openldap-2.4.44, and knox-1.2.0.</li><li>When ProductId is set to 34 (EMR-V3.3.0), the required components include hdfs-3.2.2, yarn-3.2.2, zookeeper-3.6.1, openldap-2.4.44, and knox-1.2.0.</li><li>When ProductId is set to 37 (EMR-V3.4.0), the required components include hdfs-3.2.2, yarn-3.2.2, zookeeper-3.6.3, openldap-2.4.44, and knox-1.6.1.</li><li>When ProductId is set to 44 (EMR-V3.5.0), the required components include hdfs-3.2.2, yarn-3.2.2, zookeeper-3.6.3, openldap-2.4.44, and knox-1.6.1.</li><li>When ProductId is set to 53 (EMR-V3.6.0), the required components include hdfs-3.2.2, yarn-3.2.2, zookeeper-3.6.3, openldap-2.4.44, and knox-1.6.1.</li><li>When ProductId is set to 58 (EMR-V3.6.1), the required components include hdfs-3.2.2, yarn-3.2.2, zookeeper-3.6.3, openldap-2.4.46, and knox-1.6.1.</li><li>When ProductId is set to 47 (EMR-V4.0.0), the required components include hdfs-3.2.2, yarn-3.2.2, zookeeper-3.6.3, openldap-2.4.44, and knox-1.6.1.</li></p>
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * <p>Node specifications for price inquiry.</p>
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * <p>Location of the instance. This parameter can be used to specify attributes such as the AZ and associated project of the instance.</p>
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * <p>VPC-related information configuration. This parameter can be used to specify the VPC ID, subnet ID, and so on.</p>
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * <p>Hive shared metadata database type. Valid values:</p><li>EMR_NEW_META: created by the cluster by default</li><li>EMR_EXIT_METE: EMR-MetaDB specified by the cluster</li><li>USER_CUSTOM_META: custom MetaDB used by the cluster</li>
         * @type {string || null}
         */
        this.MetaType = null;

        /**
         * <p>EMR-MetaDB instance.</p>
         * @type {string || null}
         */
        this.UnifyMetaInstanceId = null;

        /**
         * <p>Custom MetaDB information.</p>
         * @type {CustomMetaInfo || null}
         */
        this.MetaDBInfo = null;

        /**
         * <p>Product ID. Different product IDs indicate different EMR product versions. Valid values: <li>2: EMR-V2.0.1</li><li>16: EMR-V2.3.0</li><li>20: EMR-V2.5.0</li><li>30: EMR-V2.6.0</li><li>38: EMR-V2.7.0</li><li>57: EMR-V2.8.0</li><li>7: EMR-V3.0.0</li><li>25: EMR-V3.1.0</li><li>31: EMR-V3.1.1</li><li>28: EMR-V3.2.0</li><li>33: EMR-V3.2.1</li><li>34: EMR-V3.3.0</li><li>37: EMR-V3.4.0</li><li>44: EMR-V3.5.0</li><li>53: EMR-V3.6.0</li><li>58: EMR-V3.6.1</li><li>47: EMR-V4.0.0</li></p>
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * <p>Scenario-based values: Hadoop-Kudu, Hadoop-Zookeeper, Hadoop-Presto, and Hadoop-Hbase.</p>
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * <p>Shared component information.</p>
         * @type {Array.<ExternalService> || null}
         */
        this.ExternalService = null;

        /**
         * <p>Default value: 0. It is changed to 1 after the cross-AZ feature is supported.</p>
         * @type {number || null}
         */
        this.VersionID = null;

        /**
         * <p>Specification information of the AZ.</p>
         * @type {Array.<MultiZoneSetting> || null}
         */
        this.MultiZoneSettings = null;

        /**
         * <p>Database version.</p>
         * @type {string || null}
         */
        this.DefaultMetaVersion = null;

        /**
         * <p>Whether to enable audit. Valid values: 0 (no) and 1 (yes).</p>
         * @type {number || null}
         */
        this.NeedCdbAudit = null;

        /**
         * <p>Custom database data.</p>
         * @type {Array.<CustomMetaDBInfo> || null}
         */
        this.MetaDBGroupInfo = null;

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
        this.DefaultMetaVersion = 'DefaultMetaVersion' in params ? params.DefaultMetaVersion : null;
        this.NeedCdbAudit = 'NeedCdbAudit' in params ? params.NeedCdbAudit : null;

        if (params.MetaDBGroupInfo) {
            this.MetaDBGroupInfo = new Array();
            for (let z in params.MetaDBGroupInfo) {
                let obj = new CustomMetaDBInfo();
                obj.deserialize(params.MetaDBGroupInfo[z]);
                this.MetaDBGroupInfo.push(obj);
            }
        }

    }
}

/**
 * DescribeSLInstance response structure.
 * @class
 */
class DescribeSLInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Character string identifier of the instance.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance billing mode. Valid values: 0 (postpaid, that is, pay-as-you-go) and 1 (prepaid, that is, yearly/monthly subscription).
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Instance storage type.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Instance single-node disk capacity (GB).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Instance node specifications.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Detailed configuration of the instance AZ, including the AZ name, VPC information, and number of nodes.
         * @type {Array.<ZoneSetting> || null}
         */
        this.ZoneSettings = null;

        /**
         * List of tags bound to the instance.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Numeric identifier of the instance.
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * Instance region ID.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Primary AZ of the instance.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance expiration time. For postpaid instances, 0000-00-00 00:00:00 is returned.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Instance isolation time. For instances that are not isolated, 0000-00-00 00:00:00 is returned.
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * Instance creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance status code. Valid values: -2 ("TERMINATED"), 2 ("RUNNING"), 14 ("TERMINATING"), 19 ("ISOLATING"), 22 ("ADJUSTING"), and 201 ("ISOLATED").
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Auto-renewal flag. Valid values: 0 (notifies before expiration but does not trigger auto-renewal), 1 (notifies before expiration and triggers auto-renewal), and 2 (does not notify before expiration and does not trigger auto-renewal). If the business does not support renewal, the value is 0.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Total number of instance nodes.
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Serverless Instance infomation
         * @type {Array.<SLInstance> || null}
         */
        this.SLInstance = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;

        if (params.ZoneSettings) {
            this.ZoneSettings = new Array();
            for (let z in params.ZoneSettings) {
                let obj = new ZoneSetting();
                obj.deserialize(params.ZoneSettings[z]);
                this.ZoneSettings.push(obj);
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;

        if (params.SLInstance) {
            this.SLInstance = new Array();
            for (let z in params.SLInstance) {
                let obj = new SLInstance();
                obj.deserialize(params.SLInstance[z]);
                this.SLInstance.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CBS storage volume.
 * @class
 */
class CBSVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage volume name.
         * @type {string || null}
         */
        this.VolumeName = null;

        /**
         * CBS disk type.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * CBS disk size (GB).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Number of CBS disks.
         * @type {number || null}
         */
        this.DiskCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumeName = 'VolumeName' in params ? params.VolumeName : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;

    }
}

/**
 * Tag information.
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value.
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
 * Bootstrap script response package.
 * @class
 */
class DescribeBootScriptRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom script file when resource initialization ends.
         * @type {Array.<PreExecuteFileSetting> || null}
         */
        this.ResourceAfter = null;

        /**
         * Custom script file before cluster startup.
         * @type {Array.<PreExecuteFileSetting> || null}
         */
        this.ClusterBefore = null;

        /**
         * Custom script file after cluster startup.
         * @type {Array.<PreExecuteFileSetting> || null}
         */
        this.ClusterAfter = null;

        /**
         * Custom script before service decommissioning.
         * @type {Array.<PreExecuteFileSetting> || null}
         */
        this.ServiceBefore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResourceAfter) {
            this.ResourceAfter = new Array();
            for (let z in params.ResourceAfter) {
                let obj = new PreExecuteFileSetting();
                obj.deserialize(params.ResourceAfter[z]);
                this.ResourceAfter.push(obj);
            }
        }

        if (params.ClusterBefore) {
            this.ClusterBefore = new Array();
            for (let z in params.ClusterBefore) {
                let obj = new PreExecuteFileSetting();
                obj.deserialize(params.ClusterBefore[z]);
                this.ClusterBefore.push(obj);
            }
        }

        if (params.ClusterAfter) {
            this.ClusterAfter = new Array();
            for (let z in params.ClusterAfter) {
                let obj = new PreExecuteFileSetting();
                obj.deserialize(params.ClusterAfter[z]);
                this.ClusterAfter.push(obj);
            }
        }

        if (params.ServiceBefore) {
            this.ServiceBefore = new Array();
            for (let z in params.ServiceBefore) {
                let obj = new PreExecuteFileSetting();
                obj.deserialize(params.ServiceBefore[z]);
                this.ServiceBefore.push(obj);
            }
        }

    }
}

/**
 * ModifySLInstance response structure.
 * @class
 */
class ModifySLInstanceResponse extends  AbstractModel {
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
 * ModifyGlobalConfig request structure.
 * @class
 */
class ModifyGlobalConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * English ID of the EMR cluster.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of modified configurations. Key values have a one-to-one correspondence with the response parameters of the `DescribeGlobalConfig` API and are case-insensitive (If an error occurs indicating that the key cannot be found, refer to the response parameters). Valid values:
1. enableResourceSchedule: Whether to enable or disable resource scheduling. When it is disabled, a synchronization option with Key set to sync is available. Valid values: true and false.
2. scheduler: Scheduler type.
2. enableLabel: Whether to enable or disable the tag. Valid values: true and false.
2. labelDir: Tag directory.
3. queueMappingOverride: Whether to overwrite user-specified queue. Valid values: true and false.
4. userMaxAppsDefault: Program upper limit.
5. Dynamic configuration item: Name field in DefaultSettings returned by the `DescribeGlobalConfig` API.
The values are strings. For **whether to overwrite the user-specified queue** and **program upper limit**, null in the JSON specifications means clearing the value of this configuration. Individual configuration items can be modified. For **dynamic configurations**, pass all values to overwrite the existing ones.
         * @type {Array.<Item> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Item();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * DescribeHBaseTableStoreSizeMetric response structure.
 * @class
 */
class DescribeHBaseTableStoreSizeMetricResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Package structure returned by the HBase monitoring metric.
         * @type {Array.<HBaseMetricData> || null}
         */
        this.MetricDataList = null;

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

        if (params.MetricDataList) {
            this.MetricDataList = new Array();
            for (let z in params.MetricDataList) {
                let obj = new HBaseMetricData();
                obj.deserialize(params.MetricDataList[z]);
                this.MetricDataList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HBase monitoring data structure.
 * @class
 */
class HBaseMetricData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name, for example, read_request_rate.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Metric description, for example, read request rate.
         * @type {string || null}
         */
        this.MetricDesc = null;

        /**
         * Timestamp array.
         * @type {Array.<number> || null}
         */
        this.Timestamps = null;

        /**
         * Numeric array.
         * @type {Array.<number> || null}
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.MetricDesc = 'MetricDesc' in params ? params.MetricDesc : null;
        this.Timestamps = 'Timestamps' in params ? params.Timestamps : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Load metric condition.
 * @class
 */
class LoadMetricsCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule statistics cycle. One, three, and five minutes are supported.
         * @type {number || null}
         */
        this.StatisticPeriod = null;

        /**
         * Number of triggering times. Scaling begins only after it has been triggered continuously for more than TriggerThreshold times.
         * @type {number || null}
         */
        this.TriggerThreshold = null;

        /**
         * Scaling load metric.
         * @type {string || null}
         */
        this.LoadMetrics = null;

        /**
         * Rule metadata record ID.
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * Triggering condition.
         * @type {Array.<TriggerCondition> || null}
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
        this.StatisticPeriod = 'StatisticPeriod' in params ? params.StatisticPeriod : null;
        this.TriggerThreshold = 'TriggerThreshold' in params ? params.TriggerThreshold : null;
        this.LoadMetrics = 'LoadMetrics' in params ? params.LoadMetrics : null;
        this.MetricId = 'MetricId' in params ? params.MetricId : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new TriggerCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

    }
}

/**
 * SetNodeResourceConfigDefault response structure.
 * @class
 */
class SetNodeResourceConfigDefaultResponse extends  AbstractModel {
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
 * Table schema information.
 * @class
 */
class TableSchemaItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Column identifier.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether it is sortable by this column.
         * @type {boolean || null}
         */
        this.Sortable = null;

        /**
         * Whether it is filterable.
         * @type {boolean || null}
         */
        this.WithFilter = null;

        /**
         * Filtered candidate set.
         * @type {Array.<string> || null}
         */
        this.Candidates = null;

        /**
         * Whether it is clickable.
         * @type {boolean || null}
         */
        this.Clickable = null;

        /**
         * Display name.
         * @type {string || null}
         */
        this.Title = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Sortable = 'Sortable' in params ? params.Sortable : null;
        this.WithFilter = 'WithFilter' in params ? params.WithFilter : null;
        this.Candidates = 'Candidates' in params ? params.Candidates : null;
        this.Clickable = 'Clickable' in params ? params.Clickable : null;
        this.Title = 'Title' in params ? params.Title : null;

    }
}

/**
 * DescribeDynamicInstanceList request structure.
 * @class
 */
class DescribeDynamicInstanceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>EMR cluster ID.</p>
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
 * ModifyInstanceBasic response structure.
 * @class
 */
class ModifyInstanceBasicResponse extends  AbstractModel {
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
 * Key-value pair filter, which is mainly for condition filtering and query.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fields to be filtered.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value of the field.
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
 * Architecture information.
 * @class
 */
class ArchitectureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Architecture type.</p>
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * <p>Architecture type name.</p>
         * @type {string || null}
         */
        this.ArchitectureName = null;

        /**
         * <p>Architecture type display order.</p>
         * @type {number || null}
         */
        this.Order = null;

        /**
         * <p>Instance specification families included in the architecture.</p>
         * @type {Array.<string> || null}
         */
        this.InstanceFamilies = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.ArchitectureName = 'ArchitectureName' in params ? params.ArchitectureName : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.InstanceFamilies = 'InstanceFamilies' in params ? params.InstanceFamilies : null;

    }
}

/**
 * DescribeTrinoQueryInfo request structure.
 * @class
 */
class DescribeTrinoQueryInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time for obtaining queried information (s).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time for obtaining queried information (s).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number of entries per page for pagination query. Minimum value: 1. Maximum value: 100.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number for pagination queries, starting from 1.
         * @type {number || null}
         */
        this.Page = null;

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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Page = 'Page' in params ? params.Page : null;

    }
}

/**
 * Response parameters of the DescribeResourceConfig API.
 * @class
 */
class DescribeResourceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification management type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Specification management data.
         * @type {Array.<NodeResource> || null}
         */
        this.ResourceData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.ResourceData) {
            this.ResourceData = new Array();
            for (let z in params.ResourceData) {
                let obj = new NodeResource();
                obj.deserialize(params.ResourceData[z]);
                this.ResourceData.push(obj);
            }
        }

    }
}

/**
 * DescribeSparkApplications response structure.
 * @class
 */
class DescribeSparkApplicationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned items.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Spark application list.
         * @type {Array.<SparkApplicationsList> || null}
         */
        this.ResultList = null;

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

        if (params.ResultList) {
            this.ResultList = new Array();
            for (let z in params.ResultList) {
                let obj = new SparkApplicationsList();
                obj.deserialize(params.ResultList[z]);
                this.ResultList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Scheduling topology distribution.
 * @class
 */
class TopologySpreadConstraint extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Maximum deviation value.</p>
         * @type {number || null}
         */
        this.MaxSkew = null;

        /**
         * <p>Topology domain key.</p>
         * @type {string || null}
         */
        this.TopologyKey = null;

        /**
         * <p>Handling policy, which is used when constraints are not met.</p>
         * @type {string || null}
         */
        this.WhenUnsatisfiable = null;

        /**
         * <p>Tag selector.</p>
         * @type {LabelSelector || null}
         */
        this.LabelSelector = null;

        /**
         * <p>Minimum number of topology domains.</p>
         * @type {number || null}
         */
        this.MinDomains = null;

        /**
         * <p>Node affinity policy.</p>
         * @type {string || null}
         */
        this.NodeAffinityPolicy = null;

        /**
         * <p>Node taint policy.</p>
         * @type {string || null}
         */
        this.NodeTaintsPolicy = null;

        /**
         * <p>List of tag keys to be matched.</p>
         * @type {Array.<string> || null}
         */
        this.MatchLabelKeys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxSkew = 'MaxSkew' in params ? params.MaxSkew : null;
        this.TopologyKey = 'TopologyKey' in params ? params.TopologyKey : null;
        this.WhenUnsatisfiable = 'WhenUnsatisfiable' in params ? params.WhenUnsatisfiable : null;

        if (params.LabelSelector) {
            let obj = new LabelSelector();
            obj.deserialize(params.LabelSelector)
            this.LabelSelector = obj;
        }
        this.MinDomains = 'MinDomains' in params ? params.MinDomains : null;
        this.NodeAffinityPolicy = 'NodeAffinityPolicy' in params ? params.NodeAffinityPolicy : null;
        this.NodeTaintsPolicy = 'NodeTaintsPolicy' in params ? params.NodeTaintsPolicy : null;
        this.MatchLabelKeys = 'MatchLabelKeys' in params ? params.MatchLabelKeys : null;

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
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Order number.</p>
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * <p>Client token.</p>
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * <p>Scale-out flow ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * <p>Large order number.</p>
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * <p>TraceId for the scale-out.</p>
         * @type {string || null}
         */
        this.TraceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUserManagerPwd response structure.
 * @class
 */
class ModifyUserManagerPwdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Flow ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateDynamicInstances request structure.
 * @class
 */
class TerminateDynamicInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>EMR cluster ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>DynamicInstance type.</p><p>Enumeration values:</p><ul><li>RayCluster: RayCluster type</li></ul>
         * @type {string || null}
         */
        this.DynamicInstanceType = null;

        /**
         * <p>YAML creation information.</p>
         * @type {Array.<number> || null}
         */
        this.DynamicInstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DynamicInstanceType = 'DynamicInstanceType' in params ? params.DynamicInstanceType : null;
        this.DynamicInstanceIds = 'DynamicInstanceIds' in params ? params.DynamicInstanceIds : null;

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
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServiceNodeInfos request structure.
 * @class
 */
class DescribeServiceNodeInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Searching field.
         * @type {string || null}
         */
        this.SearchText = null;

        /**
         * 'Configuration status. Valid values: -2 (configuration failed), -1 (configuration expired), 1 (synchronized)', and -99 '(all)'.
         * @type {number || null}
         */
        this.ConfStatus = null;

        /**
         * Filter criterion, which specifies the maintenance status. Valid values:
0: all statuses
1: normal mode
2: maintenance mode

         * @type {number || null}
         */
        this.MaintainStateId = null;

        /**
         * Filter criterion, which specifies the operation status. Valid values:
0: all statuses
1: started
2: stopped.
         * @type {number || null}
         */
        this.OperatorStateId = null;

        /**
         * Filter criterion, which specifies the health status. Valid values:
"0": unavailable
"1": good
-2: unknown
-99: all statuses
-3: potential risk
-4: undetected
         * @type {string || null}
         */
        this.HealthStateId = null;

        /**
         * Service component name, which must be specified by using uppercase letters (for example, YARN). Select either the service component name or ServiceGroupType in an API call and ensure that the selected item is required.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Node name. Valid values: master, core, task, common, and router.
         * @type {string || null}
         */
        this.NodeTypeName = null;

        /**
         * Filter criterion, which specifies whether the data node is in maintenance. Valid values:
0: all statuses
1: maintenance status
         * @type {number || null}
         */
        this.DataNodeMaintenanceId = null;

        /**
         * Searchable fields (Currently, SearchType: ipv4 is supported).
         * @type {Array.<SearchItem> || null}
         */
        this.SearchFields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchText = 'SearchText' in params ? params.SearchText : null;
        this.ConfStatus = 'ConfStatus' in params ? params.ConfStatus : null;
        this.MaintainStateId = 'MaintainStateId' in params ? params.MaintainStateId : null;
        this.OperatorStateId = 'OperatorStateId' in params ? params.OperatorStateId : null;
        this.HealthStateId = 'HealthStateId' in params ? params.HealthStateId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.NodeTypeName = 'NodeTypeName' in params ? params.NodeTypeName : null;
        this.DataNodeMaintenanceId = 'DataNodeMaintenanceId' in params ? params.DataNodeMaintenanceId : null;

        if (params.SearchFields) {
            this.SearchFields = new Array();
            for (let z in params.SearchFields) {
                let obj = new SearchItem();
                obj.deserialize(params.SearchFields[z]);
                this.SearchFields.push(obj);
            }
        }

    }
}

/**
 * DescribeHBaseTableStoreSizeMetric request structure.
 * @class
 */
class DescribeHBaseTableStoreSizeMetricRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * HBase table name.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * HBase RegionServer service.
         * @type {string || null}
         */
        this.RegionServer = null;

        /**
         * Specifies the data monitoring granularity to be obtained.
         * @type {string || null}
         */
        this.Downsample = null;

        /**
         * Specifies the start timestamp of the monitoring data to be queried.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Specifies the end timestamp of the monitoring data to be queried.
         * @type {number || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.RegionServer = 'RegionServer' in params ? params.RegionServer : null;
        this.Downsample = 'Downsample' in params ? params.Downsample : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * 
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * 
         * @type {Array.<ClusterInstancesInfo> || null}
         */
        this.ClusterList = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

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
 * Price inquiry result.
 * @class
 */
class PriceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original price.
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price.
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
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;

    }
}

/**
 * TerminateDynamicInstances response structure.
 * @class
 */
class TerminateDynamicInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Asynchronous flow ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * User management list filter.
 * @class
 */
class UserManagerFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User source.
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * Group name.
         * @type {string || null}
         */
        this.Groups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.Groups = 'Groups' in params ? params.Groups : null;

    }
}

/**
 * Specifies the context structure in which the configuration needs to be exported.
 * @class
 */
class ExportConfContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Service configuration.</p>
         * @type {number || null}
         */
        this.ServiceType = null;

        /**
         * <p>File name.</p>
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * <p>Service name.</p>
         * @type {string || null}
         */
        this.ServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * DescribeInstanceOplog response structure.
 * @class
 */
class DescribeInstanceOplogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of operation logs.
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * Operation log list.
         * @type {Array.<OperationLog> || null}
         */
        this.LogList = null;

        /**
         * Operation object option array.
         * @type {Array.<string> || null}
         */
        this.OperandList = null;

        /**
         * Security-level filtering array.
         * @type {Array.<string> || null}
         */
        this.SecurityLevelList = null;

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
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.LogList) {
            this.LogList = new Array();
            for (let z in params.LogList) {
                let obj = new OperationLog();
                obj.deserialize(params.LogList[z]);
                this.LogList.push(obj);
            }
        }
        this.OperandList = 'OperandList' in params ? params.OperandList : null;
        this.SecurityLevelList = 'SecurityLevelList' in params ? params.SecurityLevelList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Price list for cluster creation, which contains price details in different AZs.
 * @class
 */
class ZoneDetailPriceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Price details for different nodes.
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
 * DescribeAutoScaleGroupGlobalConf request structure.
 * @class
 */
class DescribeAutoScaleGroupGlobalConfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
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
 * Pre-execution script configuration.
 * @class
 */
class PreExecuteFileSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * Script path on COS.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Script execution parameter.
         * @type {string || null}
         */
        this.Args = null;

        /**
         * COS bucket name.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * COS region name.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * COS domain data.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Execution order.
         * @type {number || null}
         */
        this.RunOrder = null;

        /**
         * Whether resourceAfter or clusterAfter is used.
         * @type {string || null}
         */
        this.WhenRun = null;

        /**
         * Script file name.
         * @type {string || null}
         */
        this.CosFileName = null;

        /**
         * Script's COS address.
         * @type {string || null}
         */
        this.CosFileURI = null;

        /**
         * COS SecretId.
         * @type {string || null}
         */
        this.CosSecretId = null;

        /**
         * COS SecretKey.
         * @type {string || null}
         */
        this.CosSecretKey = null;

        /**
         * COS APPID.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;

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
         * Verification error information. If it is not empty, it means that verification fails and configuration is not successful.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * Returned data.
         * @type {string || null}
         */
        this.Data = null;

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
        this.IsDraft = 'IsDraft' in params ? params.IsDraft : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Node price details, which are used to create the cluster price list.
 * @class
 */
class NodeDetailPriceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node type. Valid values: master, core, task, common, router, and mysql.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Price details for each component of the node.
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
 * DescribeDynamicInstanceList response structure.
 * @class
 */
class DescribeDynamicInstanceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Ray cluster list.</p>
         * @type {Array.<RayCluster> || null}
         */
        this.DynamicInstanceList = null;

        /**
         * <p>Service access URL.</p>
         * @type {Array.<WebUIInfo> || null}
         */
        this.WebUIInfos = null;

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

        if (params.DynamicInstanceList) {
            this.DynamicInstanceList = new Array();
            for (let z in params.DynamicInstanceList) {
                let obj = new RayCluster();
                obj.deserialize(params.DynamicInstanceList[z]);
                this.DynamicInstanceList.push(obj);
            }
        }

        if (params.WebUIInfos) {
            this.WebUIInfos = new Array();
            for (let z in params.WebUIInfos) {
                let obj = new WebUIInfo();
                obj.deserialize(params.WebUIInfos[z]);
                this.WebUIInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Response example for the cluster list.
 * @class
 */
class EmrListInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Common status. Valid values: cluster in production, cluster running, cluster creating, cluster disabled, and cluster deleted.
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Cluster name.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster region.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * User APPID.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Running time.
         * @type {string || null}
         */
        this.RunTime = null;

        /**
         * Cluster IP address.
         * @type {string || null}
         */
        this.MasterIp = null;

        /**
         * Cluster version.
         * @type {string || null}
         */
        this.EmrVersion = null;

        /**
         * Cluster billing type.
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * emr ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Product ID.
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Region.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Subnet ID.
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * Network ID.
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Status code. Valid values: -2 (cluster deleted), -1 (cluster disabled), 0 (cluster in production), 2 (cluster running), 3 (cluster creating).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance tag.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Alarm information.
         * @type {string || null}
         */
        this.AlarmInfo = null;

        /**
         * Whether it is a Woodpecker cluster.
         * @type {number || null}
         */
        this.IsWoodpeckerCluster = null;

        /**
         * VPC.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Subnet.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * VPC ID (string).
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Subnet (string).
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Cluster type.
         * @type {string || null}
         */
        this.ClusterClass = null;

        /**
         * Whether it is a cross-AZ cluster.
         * @type {boolean || null}
         */
        this.IsMultiZoneCluster = null;

        /**
         * Whether it is a manually created cluster.
         * @type {boolean || null}
         */
        this.IsHandsCluster = null;

        /**
         * External client component information.
         * @type {Array.<SoftDependInfo> || null}
         */
        this.OutSideSoftInfo = null;

        /**
         * Whether the current cluster's scenarios support external clients.
         * @type {boolean || null}
         */
        this.IsSupportOutsideCluster = null;

        /**
         * Whether the cluster is used in a dedicated cluster scenario.
         * @type {boolean || null}
         */
        this.IsDedicatedCluster = null;

        /**
         * Whether cloning is supported for the cluster.
         * @type {boolean || null}
         */
        this.IsSupportClone = null;

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
        this.IsDedicatedCluster = 'IsDedicatedCluster' in params ? params.IsDedicatedCluster : null;
        this.IsSupportClone = 'IsSupportClone' in params ? params.IsSupportClone : null;

    }
}

/**
 * DescribeResourceScheduleDiffDetail response structure.
 * @class
 */
class DescribeResourceScheduleDiffDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Change item details.
         * @type {Array.<DiffDetail> || null}
         */
        this.Details = null;

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

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new DiffDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeYarnQueue response structure.
 * @class
 */
class DescribeYarnQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue information. It is a JSON string into which an object is converted. The corresponding Golang structure is as follows. For example, the first field `Name` of `QueueWithConfigSetForFairScheduler: ```Name                         string                               `json:"name"` //queue name ```  - `Name: field name - `string`: field type - `json:"name`:  indicates the corresponding `json key` during serialization/deserialization. Below, `json key` is used for referring.- `//`: the following comment content corresponds to the Name field seen on the page. Fields with types starting with `*` indicate that the value may be null under JSON specifications. Different languages need to be received through a type that can express null, such as Java's wrapper types. Fields with types starting with `[]` indicate an array type, which is used when `json key` calls `ModifyYarnQueueV2` API. - fair scheduler```type QueueWithConfigSetForFairScheduler struct {	Name                         string                               `json:"name"` //queue name MyId                         string                  `json:"myId"` // queue id, used for editing, deleting, and cloning	ParentId                     string                  `json:"parentId"`  // Parent queue Id	Type                         *string                              `json:"type"` // queue affinity. Parent or empty. Setting to be a parent or empty can be performed only when it is confirmed that a queue is a parent queue and has no subqueues. The queue is normally used to support the placement policy nestedUserQueue	AclSubmitApps                *AclForYarnQueue                     `json:"aclSubmitApps"` // submission access control	AclAdministerApps            *AclForYarnQueue                     `json:"aclAdministerApps"` // management access control	MinSharePreemptionTimeout    *int                                 `json:"minSharePreemptionTimeout"` // minimum share preemption timeout period	FairSharePreemptionTimeout   *int                                 `json:"fairSharePreemptionTimeout"` // fair share preemption timeout period	FairSharePreemptionThreshold *float32                             `json:"fairSharePreemptionThreshold"` // fair share preemption threshold. Value range (0, 1]	AllowPreemptionFrom          *bool                                `json:"allowPreemptionFrom"`                                        // preemption mode	SchedulingPolicy             *string                              `json:"schedulingPolicy"`  // scheduling policy with the valid values of drf, fair, and fifo	IsDefault                    *bool                                `json:"isDefault"` // whether it is the root.default queue	IsRoot                       *bool                                `json:"isRoot"` // whether it is the root queue	ConfigSets                   []ConfigSetForFairScheduler          `json:"configSets"` // configuration set settings	Children                     []QueueWithConfigSetForFairScheduler `json:"queues"` // subqueue information. recursive}type AclForYarnQueue struct {	User  *string `json:"user"` //username	Group *string `json:"group"`//group name}type ConfigSetForFairScheduler struct {	Name              string        `json:"name"` // configuration set name	MinResources      *YarnResource `json:"minResources"` // minimum resource amount	MaxResources      *YarnResource `json:"maxResources"` // maximum resource amount	MaxChildResources *YarnResource `json:"maxChildResources"` //. The maximum number of resources that can be allocated to undefined subqueues	MaxRunningApps    *int          `json:"maxRunningApps"` // the maximum number of apps that can run concurrently	Weight            *float32      `json:"weight"`                   // Weight	MaxAMShare        *float32      `json:"maxAMShare"` // App Master maximum share}type YarnResource struct {	Vcores *int `json:"vcores"`	Memory *int `json:"memory"`	Type *string `json:"type"` // when the value is `percent`, it indicates usage as a percentage, otherwise an absolute value is used indeed}```- Capacity scheduler```type QueueForCapacitySchedulerV3 struct {	Name                       string                `json:"name"` // queue name	MyId                       string                `json:"myId"` // queue id, used in the case of editing, deleting, or cloning	ParentId                   string                `json:"parentId"` // parent queue id 	Configs                    []ConfigForCapacityV3 `json:"configs"` //configuration set settings	State                      *string         `json:"state"` // resource pool status	DefaultNodeLabelExpression *string               `json:"default-node-label-expression"` // default tag expression	AclSubmitApps              *AclForYarnQueue      `json:"acl_submit_applications"` // submission access control 	AclAdminQueue              *AclForYarnQueue      `json:"acl_administer_queue"` //management access control	MaxAllocationMB *int32 `json:"maximum-allocation-mb"` // maximum Memory allocated to Container	MaxAllocationVcores *int32                         `json:"maximum-allocation-vcores"` // the maximum number of Vcores for Container	IsDefault           *bool                          `json:"isDefault"`// whether it is the root.default queue	IsRoot              *bool                          `json:"isRoot"` // whether it is the root queue	Queues              []*QueueForCapacitySchedulerV3 `json:"queues"`//subqueue information. Recursive}type ConfigForCapacityV3 struct {	Name                string          `json:"configName"` // configuration set name	Labels              []CapacityLabel `json:"labels"` // tag information	MinUserLimitPercent *int32          `json:"minimum-user-limit-percent"` // minimum user capacity	UserLimitFactor     *float32        `json:"user-limit-factor" valid:"rangeExcludeLeft(0|)"`  // user resource factor	MaxApps *int32 `json:"maximum-applications" valid:"rangeExcludeLeft(0|)"` // the maximum number of applications Max-Applications	MaxAmPercent               *float32 `json:"maximum-am-resource-percent"` // the maximum AM ratio	DefaultApplicationPriority *int32   `json:"default-application-priority"` // resource pool priority}type CapacityLabel struct {	Name        string   `json:"labelName"`	Capacity    *float32 `json:"capacity"`  // capacity MaxCapacity *float32 `json:"maximum-capacity"` //maximum capacity}type AclForYarnQueue struct {	User  *string `json:"user"` //username	Group *string `json:"group"`//group name}```.
         * @type {string || null}
         */
        this.Queue = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.Version = null;

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
        this.Queue = 'Queue' in params ? params.Queue : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateGroupsSTD request structure.
 * @class
 */
class CreateGroupsSTDRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster name.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Batch user group information.
         * @type {Array.<GroupInfo> || null}
         */
        this.Groups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new GroupInfo();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }

    }
}

/**
 * ConvertPreToPostCluster request structure.
 * @class
 */
class ConvertPreToPostClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Non-reentrant identifier (5-minute window). Order identifier.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

    }
}

/**
 * DescribeNodeDataDisks request structure.
 * @class
 */
class DescribeNodeDataDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the EMR cluster.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID list of node CVM instances.
         * @type {Array.<string> || null}
         */
        this.CvmInstanceIds = null;

        /**
         * Filter criteria for querying cloud disks.
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * Fuzzy search.
         * @type {string || null}
         */
        this.InnerSearch = null;

        /**
         * Number of items returned per page. Default value: 100. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Scenario value. Valid values:
ModifyDiskExtraPerformance: adjusts the additional performance of the data disk.
         * @type {string || null}
         */
        this.Scene = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.InnerSearch = 'InnerSearch' in params ? params.InnerSearch : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Scene = 'Scene' in params ? params.Scene : null;

    }
}

/**
 * Parameters used for stopping services.
 * @class
 */
class StopParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security mode: safe.
Default mode: default.
         * @type {string || null}
         */
        this.StopPolicy = null;

        /**
         * Number of threads.
         * @type {number || null}
         */
        this.ThreadCount = null;

        /**
         * Graceful stop timeout period (s).
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
        this.StopPolicy = 'StopPolicy' in params ? params.StopPolicy : null;
        this.ThreadCount = 'ThreadCount' in params ? params.ThreadCount : null;
        this.GraceDownTime = 'GraceDownTime' in params ? params.GraceDownTime : null;

    }
}

/**
 * Shared component information.
 * @class
 */
class DependService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared component name.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Shared component cluster.
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
 * Information about request resources of the container cluster Pod.
 * @class
 */
class CloudResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Component role name.</p>
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * <p>Number of Pod requests.</p>
         * @type {number || null}
         */
        this.PodNumber = null;

        /**
         * <p>Maximum number of CPU requests.</p>
         * @type {number || null}
         */
        this.LimitCpu = null;

        /**
         * <p>Maximum number of memory requests.</p>
         * @type {number || null}
         */
        this.LimitMemory = null;

        /**
         * <p>Service name, for example, HIVE.</p>
         * @type {string || null}
         */
        this.Service = null;

        /**
         * <p>Data volume directory settings.</p>
         * @type {VolumeSetting || null}
         */
        this.VolumeDir = null;

        /**
         * <p>External access settings for the component.</p>
         * @type {ExternalAccess || null}
         */
        this.ExternalAccess = null;

        /**
         * <p>Node affinity settings.</p>
         * @type {NodeAffinity || null}
         */
        this.Affinity = null;

        /**
         * <p>Selected data disk information.</p>
         * @type {Array.<Disk> || null}
         */
        this.Disks = null;

        /**
         * <p>Toleration.</p>
         * @type {Array.<Toleration> || null}
         */
        this.Tolerations = null;

        /**
         * <p>Pod affinity.</p>
         * @type {PodAffinitySpec || null}
         */
        this.PodAffinity = null;

        /**
         * <p>Pod anti-affinity.</p>
         * @type {PodAffinitySpec || null}
         */
        this.PodAntiAffinity = null;

        /**
         * <p>Topology distribution constraint.</p>
         * @type {Array.<TopologySpreadConstraint> || null}
         */
        this.TopologySpreadConstraints = null;

        /**
         * <p>Pod tag.</p>
         * @type {Array.<StringMap> || null}
         */
        this.PodLabels = null;

        /**
         * <p>Whether the default Ray cluster is created.</p>
         * @type {boolean || null}
         */
        this.EnableDefaultRayCluster = null;

        /**
         * <p>Custom image.</p>
         * @type {ImageInfoV2 || null}
         */
        this.ImageInfoV2 = null;

        /**
         * <p>Specifies the dynamic instance parameter to be created.</p>
         * @type {DynamicInstanceForm || null}
         */
        this.DynamicInstanceForm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.PodNumber = 'PodNumber' in params ? params.PodNumber : null;
        this.LimitCpu = 'LimitCpu' in params ? params.LimitCpu : null;
        this.LimitMemory = 'LimitMemory' in params ? params.LimitMemory : null;
        this.Service = 'Service' in params ? params.Service : null;

        if (params.VolumeDir) {
            let obj = new VolumeSetting();
            obj.deserialize(params.VolumeDir)
            this.VolumeDir = obj;
        }

        if (params.ExternalAccess) {
            let obj = new ExternalAccess();
            obj.deserialize(params.ExternalAccess)
            this.ExternalAccess = obj;
        }

        if (params.Affinity) {
            let obj = new NodeAffinity();
            obj.deserialize(params.Affinity)
            this.Affinity = obj;
        }

        if (params.Disks) {
            this.Disks = new Array();
            for (let z in params.Disks) {
                let obj = new Disk();
                obj.deserialize(params.Disks[z]);
                this.Disks.push(obj);
            }
        }

        if (params.Tolerations) {
            this.Tolerations = new Array();
            for (let z in params.Tolerations) {
                let obj = new Toleration();
                obj.deserialize(params.Tolerations[z]);
                this.Tolerations.push(obj);
            }
        }

        if (params.PodAffinity) {
            let obj = new PodAffinitySpec();
            obj.deserialize(params.PodAffinity)
            this.PodAffinity = obj;
        }

        if (params.PodAntiAffinity) {
            let obj = new PodAffinitySpec();
            obj.deserialize(params.PodAntiAffinity)
            this.PodAntiAffinity = obj;
        }

        if (params.TopologySpreadConstraints) {
            this.TopologySpreadConstraints = new Array();
            for (let z in params.TopologySpreadConstraints) {
                let obj = new TopologySpreadConstraint();
                obj.deserialize(params.TopologySpreadConstraints[z]);
                this.TopologySpreadConstraints.push(obj);
            }
        }

        if (params.PodLabels) {
            this.PodLabels = new Array();
            for (let z in params.PodLabels) {
                let obj = new StringMap();
                obj.deserialize(params.PodLabels[z]);
                this.PodLabels.push(obj);
            }
        }
        this.EnableDefaultRayCluster = 'EnableDefaultRayCluster' in params ? params.EnableDefaultRayCluster : null;

        if (params.ImageInfoV2) {
            let obj = new ImageInfoV2();
            obj.deserialize(params.ImageInfoV2)
            this.ImageInfoV2 = obj;
        }

        if (params.DynamicInstanceForm) {
            let obj = new DynamicInstanceForm();
            obj.deserialize(params.DynamicInstanceForm)
            this.DynamicInstanceForm = obj;
        }

    }
}

/**
 * StarRocks query information.
 * @class
 */
class StarRocksQueryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Submission IP address.
         * @type {string || null}
         */
        this.ClientIP = null;

        /**
         * Total CPU time (ns).
         * @type {number || null}
         */
        this.CPUCost = null;

        /**
         * Default database.
         * @type {string || null}
         */
        this.DefaultDB = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Execution IP address.
         * @type {string || null}
         */
        this.ExecutionIP = null;

        /**
         * Query ID.
         * @type {string || null}
         */
        this.QueryID = null;

        /**
         * Query type.
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * Total memory consumed (bytes).
         * @type {number || null}
         */
        this.MemCost = null;

        /**
         * CPU consumption in the plan phase (ns).
         * @type {number || null}
         */
        this.PlanCpuCosts = null;

        /**
         * Memory consumption in the plan phase (bytes).
         * @type {number || null}
         */
        this.PlanMemCosts = null;

        /**
         * Execution duration.
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * Resource group.
         * @type {string || null}
         */
        this.ResourceGroup = null;

        /**
         * Number of rows obtained.
         * @type {number || null}
         */
        this.ReturnRows = null;

        /**
         * Scanned data volume (bytes).
         * @type {number || null}
         */
        this.ScanBytes = null;

        /**
         * Number of scanned rows.
         * @type {number || null}
         */
        this.ScanRows = null;

        /**
         * Start time.
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * Execution status.
         * @type {string || null}
         */
        this.ExecutionState = null;

        /**
         * Execution statement.
         * @type {string || null}
         */
        this.ExecutionStatement = null;

        /**
         * User.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Error code.
         * @type {string || null}
         */
        this.ErrorCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.CPUCost = 'CPUCost' in params ? params.CPUCost : null;
        this.DefaultDB = 'DefaultDB' in params ? params.DefaultDB : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ExecutionIP = 'ExecutionIP' in params ? params.ExecutionIP : null;
        this.QueryID = 'QueryID' in params ? params.QueryID : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.MemCost = 'MemCost' in params ? params.MemCost : null;
        this.PlanCpuCosts = 'PlanCpuCosts' in params ? params.PlanCpuCosts : null;
        this.PlanMemCosts = 'PlanMemCosts' in params ? params.PlanMemCosts : null;
        this.QueryTime = 'QueryTime' in params ? params.QueryTime : null;
        this.ResourceGroup = 'ResourceGroup' in params ? params.ResourceGroup : null;
        this.ReturnRows = 'ReturnRows' in params ? params.ReturnRows : null;
        this.ScanBytes = 'ScanBytes' in params ? params.ScanBytes : null;
        this.ScanRows = 'ScanRows' in params ? params.ScanRows : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.ExecutionState = 'ExecutionState' in params ? params.ExecutionState : null;
        this.ExecutionStatement = 'ExecutionStatement' in params ? params.ExecutionStatement : null;
        this.User = 'User' in params ? params.User : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;

    }
}

/**
 * ModifyBootScript request structure.
 * @class
 */
class ModifyBootScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EMR instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Bootstrap script type. Valid values: resourceAfter, clusterAfter, and clusterBefore.
         * @type {string || null}
         */
        this.BootType = null;

        /**
         * Specific changes to the bootstrap script. If it is left empty, no bootstrap script is configured for the WhenRun timing.
         * @type {Array.<PreExecuteFileSetting> || null}
         */
        this.PreExecutedFileSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BootType = 'BootType' in params ? params.BootType : null;

        if (params.PreExecutedFileSettings) {
            this.PreExecutedFileSettings = new Array();
            for (let z in params.PreExecutedFileSettings) {
                let obj = new PreExecuteFileSetting();
                obj.deserialize(params.PreExecutedFileSettings[z]);
                this.PreExecutedFileSettings.push(obj);
            }
        }

    }
}

/**
 * Task parameter description.
 * @class
 */
class FlowParamsDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter key.
         * @type {string || null}
         */
        this.PKey = null;

        /**
         * Parameter value.
         * @type {string || null}
         */
        this.PValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PKey = 'PKey' in params ? params.PKey : null;
        this.PValue = 'PValue' in params ? params.PValue : null;

    }
}

/**
 * ModifyYarnDeploy response structure.
 * @class
 */
class ModifyYarnDeployResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * When the value is "false", both the "Apply" and "Reset" buttons are grayed out.
         * @type {boolean || null}
         */
        this.IsDraft = null;

        /**
         * Error information. This field is reserved.
         * @type {string || null}
         */
        this.ErrorMsg = null;

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
        this.IsDraft = 'IsDraft' in params ? params.IsDraft : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMetaDBInfo request structure.
 * @class
 */
class DescribeMetaDBInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Cluster ID.</p>
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
 * Brief information of users in user management.
 * @class
 */
class UserManagerUserBriefInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Username.</p>
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * <p>Group to which the user belongs.</p>
         * @type {string || null}
         */
        this.UserGroup = null;

        /**
         * <p>Manager indicates an administrator, and NormalUser indicates a regular user.</p>
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * <p>User creation time.</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Whether to download the keytab file of the corresponding user. This is only meaningful for clusters with Kerberos enabled.</p>
         * @type {boolean || null}
         */
        this.SupportDownLoadKeyTab = null;

        /**
         * <p>Download URL of the keytab file.</p>
         * @type {string || null}
         */
        this.DownLoadKeyTabUrl = null;

        /**
         * <p>User group.</p>
         * @type {Array.<string> || null}
         */
        this.Groups = null;

        /**
         * <p>Customer UIN.</p>
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * <p>User status.</p>
         * @type {number || null}
         */
        this.State = null;

        /**
         * <p>Whether to display the password update time.</p>
         * @type {boolean || null}
         */
        this.DisplayPasswdUpdateTime = null;

        /**
         * <p>Latest password update time.</p>
         * @type {string || null}
         */
        this.PasswdUpdateTime = null;

        /**
         * <p>Number of days used.</p><p>Unit: days.</p>
         * @type {number || null}
         */
        this.PasswdUsedDay = null;

        /**
         * <p>Number of hours used.</p><p>Unit: hours.</p>
         * @type {number || null}
         */
        this.PasswdUsedHour = null;

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
        this.Groups = 'Groups' in params ? params.Groups : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.State = 'State' in params ? params.State : null;
        this.DisplayPasswdUpdateTime = 'DisplayPasswdUpdateTime' in params ? params.DisplayPasswdUpdateTime : null;
        this.PasswdUpdateTime = 'PasswdUpdateTime' in params ? params.PasswdUpdateTime : null;
        this.PasswdUsedDay = 'PasswdUsedDay' in params ? params.PasswdUsedDay : null;
        this.PasswdUsedHour = 'PasswdUsedHour' in params ? params.PasswdUsedHour : null;

    }
}

/**
 * Description of cluster location information.
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ of the instance, such as ap-guangzhou-1. This parameter can also be obtained from the Zone field in the return value of [DescribeZones](https://www.tencentcloud.com/document/product/213/15707?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * ID of the project to which the instance belongs. This parameter can be obtained from the projectId field in the return value of [DescribeProject](https://www.tencentcloud.com/document/api/651/78725?from_cn_redirect=1). If not specified, the default project is used.
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
 * Deployment information of the role.
 * @class
 */
class ComponentDeployInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role name.
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * List of UUIDs of nodes to be installed.
         * @type {Array.<string> || null}
         */
        this.DeployHostUuidList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.DeployHostUuidList = 'DeployHostUuidList' in params ? params.DeployHostUuidList : null;

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
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Number of entries per page.
All records are queried by default. If the PageNo and PageSize settings are inappropriate, all records are queried.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * User list filter.
         * @type {UserManagerFilter || null}
         */
        this.UserManagerFilter = null;

        /**
         * Whether keytab file information is needed, only effective for clusters with Kerberos enabled. The default value is false.
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
 * Configuration set information in resource scheduling.
 * @class
 */
class ConfigSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration set name.
         * @type {string || null}
         */
        this.ConfigSet = null;

        /**
         * The capacity scheduler uses it to configure label-related settings. The value of key is consistent with the field returned by **DescribeYarnQueue**.
The key value information is as follows:
- labelName: label name, which is the label in label management.
- capacity: capacity. The value is a **numeric string**.
- maximum-capacity: maximum capacity. The value is a **numeric string**.
         * @type {Array.<ItemSeq> || null}
         */
        this.LabelParams = null;

        /**
         * Sets the parameters related to the configuration set. The value of key is consistent with the field returned by **DescribeYarnQueue**.
###### Fair scheduler.
The key value information is as follows:
- minResources: minimum resource amount. The value is a **JSON string of the YarnResource type** or **null**.
- maxResources: maximum resource amount. The value is a **JSON string of the YarnResource type** or **null**.
- maxChildResources: maximum resource amount that can be allocated to undeclared subqueues. The value is a **numeric string** or **null**.
- maxRunningApps: maximum number of apps that can run simultaneously. The value is a **numeric string** or **null**.
- weight: weight. The value is a **numeric string** or **null**.
- maxAMShare: maximum share of the App Master. The value is a **numeric string** or **null**, where the numeric range is [0, 1] or -1.

```
type YarnResource struct {
	Vcores *int `json:"vcores"`
	Memory *int `json:"memory"`
	Type *string `json:"type"` // The value is `percent` or `null`. When the value is `percent`, it indicates the percentage used; otherwise, it is the absolute value used. Only maxResources and maxChildResources can be set to `percent`.
}
```

###### Capacity scheduler.
The key value information is as follows:
- minimum-user-limit-percent: minimum user capacity. The value is a **JSON string of the YarnResource type** or **null**, where the numeric range is [0, 100].
- user-limit-factor: user resource factor. The value is a **JSON string of the YarnResource type** or **null**.
- maximum-applications: maximum number of applications (Max-Applications). The value is a **numeric string** or **null**, where the number is a positive integer.
- maximum-am-resource-percent: maximum AM ratio. The value is a **numeric string** or **null**, where the numeric range is [0, 1] or -1.
- default-application-priority: resource pool priority. The value is a **numeric string** or **null**, where the number is a positive integer.
         * @type {Array.<Item> || null}
         */
        this.BasicParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigSet = 'ConfigSet' in params ? params.ConfigSet : null;

        if (params.LabelParams) {
            this.LabelParams = new Array();
            for (let z in params.LabelParams) {
                let obj = new ItemSeq();
                obj.deserialize(params.LabelParams[z]);
                this.LabelParams.push(obj);
            }
        }

        if (params.BasicParams) {
            this.BasicParams = new Array();
            for (let z in params.BasicParams) {
                let obj = new Item();
                obj.deserialize(params.BasicParams[z]);
                this.BasicParams.push(obj);
            }
        }

    }
}

/**
 * DescribeNodeSpec request structure.
 * @class
 */
class DescribeNodeSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>AZ ID. For more information, see https://document.capi.woa.com/document/api/1605/76892.</p>
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * <p>0: pay-as-you-go; 1: yearly/monthly subscription; 99: pay-as-you-go and yearly/monthly subscription. Incorrect values will not display billing information.</p>
         * @type {number || null}
         */
        this.CvmPayMode = null;

        /**
         * <p>Node type. Valid values: Master, Core, Task, Router, and All.</p>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * <p>0: old billing page; 1: new billing page. If incorrectly filled, the old billing page is used by default.</p>
         * @type {number || null}
         */
        this.TradeType = null;

        /**
         * <p>Product ID. If not specified, the value is 0, indicating all product IDs. This parameter is required on the frontend.</p><p>44    EMR    V3.5.0<br>43    EMR    V3.4.0.tlinux<br>42    EMR    V2.7.0.tlinux<br>41    DRUID    V1.1.0<br>67    STARROCKS    V2.2.0<br>45    DRUID    V1.1.0.tlinux<br>40    EMRCLOUD    v3.2.0<br>47    EMR    V4.0.0<br>48    STARROCKS    V1.2.0<br>49    STARROCKS    V1.3.0<br>50    KAFKA    V2.0.0<br>51    STARROCKS    V1.4.0<br>52    EMR-TKE    V1.0.0<br>53    EMR    V3.6.0<br>54    STARROCKS    V2.0.0<br>55    EMR-TKE    V1.0.1<br>56    EMR-TKE    DLCV1.0.0<br>57    EMR    V2.8.0<br>58    EMR    V3.6.1<br>59    SERVERLESS    V1.0.0<br>60    EMR-TKE    V1.1.0<br>62    STARROCKS    V2.1.1<br>63    STARROCKS    V2.1.1.tlinux<br>64    EMR-TKE    TCCV1.0.0<br>65    EMR-TKE-AI    V1.0.0<br>66    RSS    V1.0.0<br>24    EMR    TianQiong-V1.0.0<br>3    EMR    V2.0.1.tlinux<br>4    EMR    V2.1.0<br>7    EMR    V3.0.0<br>8    EMR    V3.0.0.tlinux<br>9    EMR    V2.2.0<br>11    CLICKHOUSE    V1.0.0<br>12    CLICKHOUSE    V1.0.0.tlinux<br>16    EMR    V2.3.0<br>17    CLICKHOUSE    V1.1.0<br>18    CLICKHOUSE    V1.1.0.tlinux<br>19    EMR    V2.4.0<br>20    EMR    V2.5.0<br>21    USERCUSTOM    V1.0.0<br>22    CLICKHOUSE    V1.2.0<br>39    STARROCKS    V1.1.0<br>25    EMR    V3.1.0<br>26    DORIS    V1.0.0<br>27    KAFKA    V1.0.0<br>28    EMR    V3.2.0<br>29    EMR    V2.5.1<br>30    EMR    V2.6.0<br>32    DORIS    V1.1.0<br>33    EMR    V3.2.1<br>34    EMR    V3.3.0<br>35    DORIS    V1.2.0<br>36    STARROCKS    V1.0.0<br>37    EMR    V3.4.0<br>38    EMR    V2.7.0</p>
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * <p>Scenario name.</p>
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * <p>The type can be ComputeResource, EMR, or a default value. The default value is EMR.</p>
         * @type {string || null}
         */
        this.ResourceBaseType = null;

        /**
         * <p>Computing resource ID.</p>
         * @type {string || null}
         */
        this.ComputeResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CvmPayMode = 'CvmPayMode' in params ? params.CvmPayMode : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.TradeType = 'TradeType' in params ? params.TradeType : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.SceneName = 'SceneName' in params ? params.SceneName : null;
        this.ResourceBaseType = 'ResourceBaseType' in params ? params.ResourceBaseType : null;
        this.ComputeResourceId = 'ComputeResourceId' in params ? params.ComputeResourceId : null;

    }
}

/**
 * DescribeYarnScheduleHistory request structure.
 * @class
 */
class DescribeYarnScheduleHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Scheduler type. Valid values: ALL, Capacity Scheduler, and Fair Scheduler.
         * @type {string || null}
         */
        this.SchedulerType = null;

        /**
         * Task type. Valid values: 0 (pending execution), 1 (executing), 2 (completed), -1 (failed), and -99 (all).
         * @type {number || null}
         */
        this.TaskState = null;

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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SchedulerType = 'SchedulerType' in params ? params.SchedulerType : null;
        this.TaskState = 'TaskState' in params ? params.TaskState : null;

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
 * DescribeYarnQueue request structure.
 * @class
 */
class DescribeYarnQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Scheduler. Valid values:

1. capacity
2. fair
         * @type {string || null}
         */
        this.Scheduler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;

    }
}

/**
 * Group part in the form data submitted when creating a DynamicInstance.
 * @class
 */
class DynamicInstanceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Resource group type.</p>
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * <p>Resource group name.</p>
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * <p>Number of Pod CPU cores.</p>
         * @type {number || null}
         */
        this.PodCpu = null;

        /**
         * <p>Pod memory size (GB).</p>
         * @type {number || null}
         */
        this.PodMem = null;

        /**
         * <p>Pod GPU type.</p>
         * @type {string || null}
         */
        this.PodGpuType = null;

        /**
         * <p>Number of Pod GPUs.</p>
         * @type {number || null}
         */
        this.PodGpu = null;

        /**
         * <p>Number of Pods.</p>
         * @type {number || null}
         */
        this.PodNum = null;

        /**
         * <p>Minimum number of elastic Pods.</p>
         * @type {number || null}
         */
        this.MinPodNum = null;

        /**
         * <p>Maximum number of elastic Pods. When MaxPodNum &gt; MinPodNum, auto scaling is enabled by default and scaling is performed within the range.</p>
         * @type {number || null}
         */
        this.MaxPodNum = null;

        /**
         * <p>Whether to support storage configuration.</p>
         * @type {boolean || null}
         */
        this.SupportPV = null;

        /**
         * <p>CBS storage volume list.</p>
         * @type {Array.<CBSVolume> || null}
         */
        this.CBSVolumes = null;

        /**
         * <p>CFS storage volume list.</p>
         * @type {Array.<CFSVolume> || null}
         */
        this.CFSVolumes = null;

        /**
         * <p>COS storage volume list.</p>
         * @type {Array.<COSVolume> || null}
         */
        this.COSVolumes = null;

        /**
         * <p>Mount volume list.</p>
         * @type {Array.<VolumeMount> || null}
         */
        this.VolumeMounts = null;

        /**
         * <p>Pod label.</p>
         * @type {Array.<TkeLabel> || null}
         */
        this.Labels = null;

        /**
         * <p>Tolerations definition.</p>
         * @type {Array.<Toleration> || null}
         */
        this.Tolerations = null;

        /**
         * <p>Environment variable.</p>
         * @type {Array.<NameValue> || null}
         */
        this.Envs = null;

        /**
         * <p>Node scheduling policy.</p>
         * @type {string || null}
         */
        this.SchedulingPolicy = null;

        /**
         * <p>Resource label.</p>
         * @type {string || null}
         */
        this.ResourceLabel = null;

        /**
         * <p>GPU resource vendor key.</p>
         * @type {string || null}
         */
        this.PodGpuResourceKey = null;

        /**
         * <p>CFS Turbo mount list.</p>
         * @type {Array.<CFSTurboVolume> || null}
         */
        this.CFSTurboVolumes = null;

        /**
         * <p>GooseFS disk.</p>
         * @type {Array.<GooseFSVolume> || null}
         */
        this.GooseFSVolumes = null;

        /**
         * <p>Pre-start command.</p>
         * @type {string || null}
         */
        this.PreStartCommand = null;

        /**
         * <p>Ray pre-start command.</p>
         * @type {string || null}
         */
        this.RayStartParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.PodCpu = 'PodCpu' in params ? params.PodCpu : null;
        this.PodMem = 'PodMem' in params ? params.PodMem : null;
        this.PodGpuType = 'PodGpuType' in params ? params.PodGpuType : null;
        this.PodGpu = 'PodGpu' in params ? params.PodGpu : null;
        this.PodNum = 'PodNum' in params ? params.PodNum : null;
        this.MinPodNum = 'MinPodNum' in params ? params.MinPodNum : null;
        this.MaxPodNum = 'MaxPodNum' in params ? params.MaxPodNum : null;
        this.SupportPV = 'SupportPV' in params ? params.SupportPV : null;

        if (params.CBSVolumes) {
            this.CBSVolumes = new Array();
            for (let z in params.CBSVolumes) {
                let obj = new CBSVolume();
                obj.deserialize(params.CBSVolumes[z]);
                this.CBSVolumes.push(obj);
            }
        }

        if (params.CFSVolumes) {
            this.CFSVolumes = new Array();
            for (let z in params.CFSVolumes) {
                let obj = new CFSVolume();
                obj.deserialize(params.CFSVolumes[z]);
                this.CFSVolumes.push(obj);
            }
        }

        if (params.COSVolumes) {
            this.COSVolumes = new Array();
            for (let z in params.COSVolumes) {
                let obj = new COSVolume();
                obj.deserialize(params.COSVolumes[z]);
                this.COSVolumes.push(obj);
            }
        }

        if (params.VolumeMounts) {
            this.VolumeMounts = new Array();
            for (let z in params.VolumeMounts) {
                let obj = new VolumeMount();
                obj.deserialize(params.VolumeMounts[z]);
                this.VolumeMounts.push(obj);
            }
        }

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new TkeLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Tolerations) {
            this.Tolerations = new Array();
            for (let z in params.Tolerations) {
                let obj = new Toleration();
                obj.deserialize(params.Tolerations[z]);
                this.Tolerations.push(obj);
            }
        }

        if (params.Envs) {
            this.Envs = new Array();
            for (let z in params.Envs) {
                let obj = new NameValue();
                obj.deserialize(params.Envs[z]);
                this.Envs.push(obj);
            }
        }
        this.SchedulingPolicy = 'SchedulingPolicy' in params ? params.SchedulingPolicy : null;
        this.ResourceLabel = 'ResourceLabel' in params ? params.ResourceLabel : null;
        this.PodGpuResourceKey = 'PodGpuResourceKey' in params ? params.PodGpuResourceKey : null;

        if (params.CFSTurboVolumes) {
            this.CFSTurboVolumes = new Array();
            for (let z in params.CFSTurboVolumes) {
                let obj = new CFSTurboVolume();
                obj.deserialize(params.CFSTurboVolumes[z]);
                this.CFSTurboVolumes.push(obj);
            }
        }

        if (params.GooseFSVolumes) {
            this.GooseFSVolumes = new Array();
            for (let z in params.GooseFSVolumes) {
                let obj = new GooseFSVolume();
                obj.deserialize(params.GooseFSVolumes[z]);
                this.GooseFSVolumes.push(obj);
            }
        }
        this.PreStartCommand = 'PreStartCommand' in params ? params.PreStartCommand : null;
        this.RayStartParams = 'RayStartParams' in params ? params.RayStartParams : null;

    }
}

/**
 * ModifyAutoRenewFlag response structure.
 * @class
 */
class ModifyAutoRenewFlagResponse extends  AbstractModel {
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
 * DescribeYarnScheduleHistory response structure.
 * @class
 */
class DescribeYarnScheduleHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task details.
         * @type {Array.<SchedulerTaskInfo> || null}
         */
        this.Tasks = null;

        /**
         * Total quantity of task details.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Scheduling type filter list.
         * @type {Array.<string> || null}
         */
        this.SchedulerNameList = null;

        /**
         * Status filter list.
         * @type {Array.<number> || null}
         */
        this.StateList = null;

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
                let obj = new SchedulerTaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.SchedulerNameList = 'SchedulerNameList' in params ? params.SchedulerNameList : null;
        this.StateList = 'StateList' in params ? params.StateList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInsightList request structure.
 * @class
 */
class DescribeInsightListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time of the obtained insight result. This time is used to filter the start time of App or Hive queries.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time of the obtained insight result. This time is used to filter the start time of App or Hive queries.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number of items returned per page. Minimum value: 1. Maximum value: 100.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number for pagination queries, starting from 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Query type. Types such as HIVE, SPARK, DLC_SPARK, SPARK_SQL, SCHEDULE, MAPREDUCE, and TRINO are supported. All are queried by default.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Whether information such as specific parameter suggestions is included.
         * @type {boolean || null}
         */
        this.MustHasContext = null;

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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.MustHasContext = 'MustHasContext' in params ? params.MustHasContext : null;

    }
}

/**
 * Parameter information for each AZ.
 * @class
 */
class MultiZoneSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * "master", "standby", and "third-party".
         * @type {string || null}
         */
        this.ZoneTag = null;

        /**
         * None.
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * None.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * None.
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
 * Description of the Pod PVC storage method.
 * @class
 */
class PersistentVolumeContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disk size (GB).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Disk type. Valid values: CLOUD_PREMIUM and CLOUD_SSD.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Number of disks.
         * @type {number || null}
         */
        this.DiskNum = null;

        /**
         * Cloud disk additional performance.
         * @type {number || null}
         */
        this.ExtraPerformance = null;

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
        this.ExtraPerformance = 'ExtraPerformance' in params ? params.ExtraPerformance : null;

    }
}

/**
 * Scale-out node type and quantity.
 * @class
 */
class ScaleOutNodeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values for the scale-out node type:
  <li>MASTER</li>
  <li>TASK</li>
  <li>CORE</li>
  <li>ROUTER</li>
         * @type {string || null}
         */
        this.NodeFlag = null;

        /**
         * Number of scale-out nodes.
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
 * ModifyResourcesTags request structure.
 * @class
 */
class ModifyResourcesTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag type. Valid values: Cluster and Node.
         * @type {string || null}
         */
        this.ModifyType = null;

        /**
         * Tag information.
         * @type {Array.<ModifyResourceTags> || null}
         */
        this.ModifyResourceTagsInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModifyType = 'ModifyType' in params ? params.ModifyType : null;

        if (params.ModifyResourceTagsInfoList) {
            this.ModifyResourceTagsInfoList = new Array();
            for (let z in params.ModifyResourceTagsInfoList) {
                let obj = new ModifyResourceTags();
                obj.deserialize(params.ModifyResourceTagsInfoList[z]);
                this.ModifyResourceTagsInfoList.push(obj);
            }
        }

    }
}

/**
 * Inspection task parameter.
 * @class
 */
class TaskSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter value.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Unique parameter identifier.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Whether it is editable. Valid values: true and false.
         * @type {string || null}
         */
        this.Editable = null;

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
        this.Key = 'Key' in params ? params.Key : null;
        this.Editable = 'Editable' in params ? params.Editable : null;

    }
}

/**
 * Metric tag.
 * @class
 */
class MetricTags extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric unit.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Metric type.
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
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Type = 'Type' in params ? params.Type : null;

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
         * Scale-in flow ID.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Shared self-built component parameters.
 * @class
 */
class CustomServiceDefine extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom parameter key.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Custom parameter value.
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
 * DescribeSLInstanceList request structure.
 * @class
 */
class DescribeSLInstanceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance filtering policy. Valid values:<li>clusterList: Queries the list of instances except for those that have been terminated.</li><li>monitorManage: Queries the list of instances except for those that have been terminated, are being created, or fail to be created.</li>
         * @type {string || null}
         */
        this.DisplayStrategy = null;

        /**
         * Page number. The default value is 0, indicating the first page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items returned per page. Default value: 10. Maximum value: 100.

         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sorting field. Valid values:<li>clusterId: sort by instance ID.</li><li>addTime: sort by instance creation time.</li><li>status: sort by instance status code.</li>
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Sorts by OrderField in ascending or descending order. Valid values:<li>0: ascending order</li><li>1: descending order</li>The default value is 0.
         * @type {number || null}
         */
        this.Asc = null;

        /**
         * Custom search filters. Examples:<li>Filter instances by ClusterId: [{"Name":"ClusterId","Values":["emr-xxxxxxxx"]}]</li><li>Filter instances by clusterName: [{"Name": "ClusterName","Values": ["cluster_name"]}]</li><li>Filter instances by ClusterStatus: [{"Name": "ClusterStatus","Values": ["2"]}]</li>
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
 * DeleteGroupsSTD response structure.
 * @class
 */
class DeleteGroupsSTDResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Deletion result.</p>
         * @type {Array.<ResultItem> || null}
         */
        this.Data = null;

        /**
         * <p>Flow ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResultItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Form data submitted when updating a DynamicInstance.
 * @class
 */
class ModifyDynamicInstanceForm extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Update scope:<br>1: Add a worker group (DynamicInstance level)<br>2: Update storage configuration (DynamicInstance level)<br>3: Update tag configuration (DynamicInstance level)<br>4: Update advanced configuration (DynamicInstance level)<br>5: Update PodCpu and PodMem (DynamicInstance-group level)<br>6: Update PodNum, MinPodNum, and MaxPodNum (DynamicInstance-group level)<br>7: Update storage configuration (DynamicInstance-group level)<br>8: Update tag configuration (DynamicInstance-group level)</p>
         * @type {number || null}
         */
        this.ModifyScope = null;

        /**
         * <p>Added worker group information.</p>
         * @type {DynamicInstanceGroup || null}
         */
        this.AddDynamicInstanceGroup = null;

        /**
         * <p>Whether to support storage configuration.</p>
         * @type {boolean || null}
         */
        this.SupportPV = null;

        /**
         * <p>CBS storage volume list.</p>
         * @type {Array.<CBSVolume> || null}
         */
        this.CBSVolumes = null;

        /**
         * <p>CFS storage volume list, excluding the CFS Turbo list.</p>
         * @type {Array.<CFSVolume> || null}
         */
        this.CFSVolumes = null;

        /**
         * <p>COS storage volume list.</p>
         * @type {Array.<COSVolume> || null}
         */
        this.COSVolumes = null;

        /**
         * <p>Mount volume list.</p>
         * @type {Array.<VolumeMount> || null}
         */
        this.VolumeMounts = null;

        /**
         * <p>Pod label.</p>
         * @type {Array.<TkeLabel> || null}
         */
        this.Labels = null;

        /**
         * <p>Tolerations definition.</p>
         * @type {Array.<Toleration> || null}
         */
        this.Tolerations = null;

        /**
         * <p>Environment variable.</p>
         * @type {Array.<NameValue> || null}
         */
        this.Envs = null;

        /**
         * <p>Dependent external components.</p>
         * @type {Array.<DependService> || null}
         */
        this.DependServices = null;

        /**
         * <p>Whether to generate a new token for authentication.</p>
         * @type {boolean || null}
         */
        this.SupportNewToken = null;

        /**
         * <p>Update information at the DynamicInstance-group level.</p>
         * @type {DynamicInstanceGroup || null}
         */
        this.ModifyDynamicInstanceGroup = null;

        /**
         * <p>CFS Turbo mount list, excluding the standard edition.</p>
         * @type {Array.<CFSTurboVolume> || null}
         */
        this.CFSTurboVolumes = null;

        /**
         * <p>Custom image.</p>
         * @type {CustomImage || null}
         */
        this.CustomImage = null;

        /**
         * <p>Custom image.</p>
         * @type {ImageInfoV2 || null}
         */
        this.ImageInfoV2 = null;

        /**
         * <p>GooseFS disk.</p>
         * @type {Array.<GooseFSVolume> || null}
         */
        this.GooseFSVolumes = null;

        /**
         * <p>Whether to enable log collection.</p>
         * @type {boolean || null}
         */
        this.EnableHistoryServer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModifyScope = 'ModifyScope' in params ? params.ModifyScope : null;

        if (params.AddDynamicInstanceGroup) {
            let obj = new DynamicInstanceGroup();
            obj.deserialize(params.AddDynamicInstanceGroup)
            this.AddDynamicInstanceGroup = obj;
        }
        this.SupportPV = 'SupportPV' in params ? params.SupportPV : null;

        if (params.CBSVolumes) {
            this.CBSVolumes = new Array();
            for (let z in params.CBSVolumes) {
                let obj = new CBSVolume();
                obj.deserialize(params.CBSVolumes[z]);
                this.CBSVolumes.push(obj);
            }
        }

        if (params.CFSVolumes) {
            this.CFSVolumes = new Array();
            for (let z in params.CFSVolumes) {
                let obj = new CFSVolume();
                obj.deserialize(params.CFSVolumes[z]);
                this.CFSVolumes.push(obj);
            }
        }

        if (params.COSVolumes) {
            this.COSVolumes = new Array();
            for (let z in params.COSVolumes) {
                let obj = new COSVolume();
                obj.deserialize(params.COSVolumes[z]);
                this.COSVolumes.push(obj);
            }
        }

        if (params.VolumeMounts) {
            this.VolumeMounts = new Array();
            for (let z in params.VolumeMounts) {
                let obj = new VolumeMount();
                obj.deserialize(params.VolumeMounts[z]);
                this.VolumeMounts.push(obj);
            }
        }

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new TkeLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Tolerations) {
            this.Tolerations = new Array();
            for (let z in params.Tolerations) {
                let obj = new Toleration();
                obj.deserialize(params.Tolerations[z]);
                this.Tolerations.push(obj);
            }
        }

        if (params.Envs) {
            this.Envs = new Array();
            for (let z in params.Envs) {
                let obj = new NameValue();
                obj.deserialize(params.Envs[z]);
                this.Envs.push(obj);
            }
        }

        if (params.DependServices) {
            this.DependServices = new Array();
            for (let z in params.DependServices) {
                let obj = new DependService();
                obj.deserialize(params.DependServices[z]);
                this.DependServices.push(obj);
            }
        }
        this.SupportNewToken = 'SupportNewToken' in params ? params.SupportNewToken : null;

        if (params.ModifyDynamicInstanceGroup) {
            let obj = new DynamicInstanceGroup();
            obj.deserialize(params.ModifyDynamicInstanceGroup)
            this.ModifyDynamicInstanceGroup = obj;
        }

        if (params.CFSTurboVolumes) {
            this.CFSTurboVolumes = new Array();
            for (let z in params.CFSTurboVolumes) {
                let obj = new CFSTurboVolume();
                obj.deserialize(params.CFSTurboVolumes[z]);
                this.CFSTurboVolumes.push(obj);
            }
        }

        if (params.CustomImage) {
            let obj = new CustomImage();
            obj.deserialize(params.CustomImage)
            this.CustomImage = obj;
        }

        if (params.ImageInfoV2) {
            let obj = new ImageInfoV2();
            obj.deserialize(params.ImageInfoV2)
            this.ImageInfoV2 = obj;
        }

        if (params.GooseFSVolumes) {
            this.GooseFSVolumes = new Array();
            for (let z in params.GooseFSVolumes) {
                let obj = new GooseFSVolume();
                obj.deserialize(params.GooseFSVolumes[z]);
                this.GooseFSVolumes.push(obj);
            }
        }
        this.EnableHistoryServer = 'EnableHistoryServer' in params ? params.EnableHistoryServer : null;

    }
}

/**
 * ModifyUserGroup request structure.
 * @class
 */
class ModifyUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Cluster string ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>User information list.</p>
         * @type {Array.<string> || null}
         */
        this.Users = null;

        /**
         * <p>Primary user group. This parameter is required for CVM clusters and optional for TKE clusters.</p>
         * @type {string || null}
         */
        this.UserGroup = null;

        /**
         * <p>Secondary user group.</p>
         * @type {Array.<string> || null}
         */
        this.Groups = null;

        /**
         * <p>Remarks.</p>
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Users = 'Users' in params ? params.Users : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.Groups = 'Groups' in params ? params.Groups : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Global configuration of the capacity scheduler in resource scheduling.
 * @class
 */
class CapacityGlobalConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether label-based scheduling is enabled.
         * @type {boolean || null}
         */
        this.EnableLabel = null;

        /**
         * Path where the label information is stored if label-based scheduling is enabled.
         * @type {string || null}
         */
        this.LabelDir = null;

        /**
         * Whether to overwrite the user-specified queue. true indicates overwriting.
         * @type {boolean || null}
         */
        this.QueueMappingOverride = null;

        /**
         * Advanced settings.
         * @type {Array.<DefaultSetting> || null}
         */
        this.DefaultSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableLabel = 'EnableLabel' in params ? params.EnableLabel : null;
        this.LabelDir = 'LabelDir' in params ? params.LabelDir : null;
        this.QueueMappingOverride = 'QueueMappingOverride' in params ? params.QueueMappingOverride : null;

        if (params.DefaultSettings) {
            this.DefaultSettings = new Array();
            for (let z in params.DefaultSettings) {
                let obj = new DefaultSetting();
                obj.deserialize(params.DefaultSettings[z]);
                this.DefaultSettings.push(obj);
            }
        }

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
<li>clusterList: Queries the list of clusters except for those that have been terminated.</li>
<li>monitorManage: Queries the list of clusters except for those that have been terminated, are being created, or fail to be created.</li><li>cloudHardwareManage/componentManage: Currently these two values are reserved and temporarily have the same meaning as monitorManage.</li>
         * @type {string || null}
         */
        this.DisplayStrategy = null;

        /**
         * Query by one or more instance IDs. The instance ID is in the format of emr-xxxxxxxx. (For the specific format of this parameter, see the section Ids.N in the API [Introduction](https://www.tencentcloud.com/document/api/213/15688?from_cn_redirect=1)). If the instance ID is not specified, the list of all the instances for the APPID is returned.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items returned per page. Default value: 100. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * It is recommended to set this parameter to -1, indicating all clusters under all projects are pulled.
If not specified, the default value is 0, indicating the clusters under the default project are pulled.
ID of the project to which the instance belongs. This parameter can be obtained from the projectId field in the return value of [DescribeProjects](https://www.tencentcloud.com/document/product/651/78725?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Sorting field. Valid values:
<li>clusterId: sort by instance ID.</li>
<li>addTime: sort by instance creation time.</li>
<li>status: sort by instance status code.</li>
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Sorts by OrderField in ascending or descending order. Valid values:<li>0: descending order</li>
<li>1: ascending order</li>The default value is 0.
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
 * Description of daily repetition tasks for auto scaling.
 * @class
 */
class DayRepeatStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specific time for repetition task execution, for example, 01:02:00.
         * @type {string || null}
         */
        this.ExecuteAtTimeOfDay = null;

        /**
         * Execute every Step days.
         * @type {number || null}
         */
        this.Step = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecuteAtTimeOfDay = 'ExecuteAtTimeOfDay' in params ? params.ExecuteAtTimeOfDay : null;
        this.Step = 'Step' in params ? params.Step : null;

    }
}

/**
 * DeployYarnConf request structure.
 * @class
 */
class DeployYarnConfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * English ID of the EMR cluster.
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
 * DescribeGroupsSTD response structure.
 * @class
 */
class DescribeGroupsSTDResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group information.
         * @type {Array.<GroupInfos> || null}
         */
        this.Data = null;

        /**
         * Number of eligible user groups.
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new GroupInfos();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNodeDataDisks response structure.
 * @class
 */
class DescribeNodeDataDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Cloud disk list.
         * @type {Array.<CBSInstance> || null}
         */
        this.CBSList = null;

        /**
         * Maximum cloud disk capacity.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Maximum additional performance value of cloud disks.
         * @type {number || null}
         */
        this.MaxThroughputPerformance = null;

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

        if (params.CBSList) {
            this.CBSList = new Array();
            for (let z in params.CBSList) {
                let obj = new CBSInstance();
                obj.deserialize(params.CBSList[z]);
                this.CBSList.push(obj);
            }
        }
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MaxThroughputPerformance = 'MaxThroughputPerformance' in params ? params.MaxThroughputPerformance : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Cluster filtering policy. Valid values:<li>clusterList: Queries the list of clusters except for those that have been terminated.</li><li>monitorManage: Queries the list of clusters except for those that have been terminated, are being created, or fail to be created.</li><li>cloudHardwareManage/componentManage: Currently these two values are reserved and temporarily have the same meaning as monitorManage.</li>
         * @type {string || null}
         */
        this.DisplayStrategy = null;

        /**
         * Page number. The default value is 0, indicating the first page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items returned per page. Default value: 100. Maximum value: 100.
If both limit and offset are 0, all records will be queried.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sorting field. Valid values:<li>clusterId: sort by instance ID.</li><li>addTime: sort by instance creation time.</li><li>status: sort by instance status code.</li>
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Sorts by OrderField in ascending or descending order. Valid values:<li>0: ascending order</li><li>1: descending order</li>The default value is 0.
         * @type {number || null}
         */
        this.Asc = null;

        /**
         * Custom search filters. Examples:<li>Filter instances by ClusterId: [{"Name":"ClusterId","Values":["emr-xxxxxxxx"]}]</li><li>Filter instances by clusterName: [{"Name": "ClusterName","Values": ["cluster_name"]}]</li><li>Filter instances by ClusterStatus: [{"Name": "ClusterStatus","Values": ["2"]}]</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * Default value 0 for regular clusters and 2 for TKE clusters.
         * @type {number || null}
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
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * Scheduled scaling task policy.
 * @class
 */
class RepeatStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * The valid values DAY, DOW, DOM, and NONE respectively indicate repetition by day, repetition by week, repetition by month, and one-time execution. This parameter is required.
         * @type {string || null}
         */
        this.RepeatType = null;

        /**
         * Daily repetition rule, effective when RepeatType is set to DAY.
         * @type {DayRepeatStrategy || null}
         */
        this.DayRepeat = null;

        /**
         * Weekly repetition rule, effective when RepeatType is set to DOW.
         * @type {WeekRepeatStrategy || null}
         */
        this.WeekRepeat = null;

        /**
         * Monthly repetition rule, effective when RepeatType is set to DOM.
         * @type {MonthRepeatStrategy || null}
         */
        this.MonthRepeat = null;

        /**
         * One-time execution rule, effective when RepeatType is set to NONE.
         * @type {NotRepeatStrategy || null}
         */
        this.NotRepeat = null;

        /**
         * Rule expiration time. After this time is due, the rule will be automatically set to the suspended status. The format is 2020-07-23 00:00:00. It is required.
         * @type {string || null}
         */
        this.Expire = null;

        /**
         * Periodic rule start time.
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

        if (params.DayRepeat) {
            let obj = new DayRepeatStrategy();
            obj.deserialize(params.DayRepeat)
            this.DayRepeat = obj;
        }

        if (params.WeekRepeat) {
            let obj = new WeekRepeatStrategy();
            obj.deserialize(params.WeekRepeat)
            this.WeekRepeat = obj;
        }

        if (params.MonthRepeat) {
            let obj = new MonthRepeatStrategy();
            obj.deserialize(params.MonthRepeat)
            this.MonthRepeat = obj;
        }

        if (params.NotRepeat) {
            let obj = new NotRepeatStrategy();
            obj.deserialize(params.NotRepeat)
            this.NotRepeat = obj;
        }
        this.Expire = 'Expire' in params ? params.Expire : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * Operation scope.
 * @class
 */
class OpScope extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation scope, with information of the service to be operated.
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
 * EMR on TKE cluster component image information.
 * @class
 */
class ImageInfoV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Image type.</p><p>Enumeration values:</p><ul><li>official: official image</li><li>custom: custom image</li><li>imageUrl: image URL</li></ul>
         * @type {string || null}
         */
        this.ImageMode = null;

        /**
         * <p>Region.</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>Whether it is an existing image.</p>
         * @type {boolean || null}
         */
        this.LegacyCCR = null;

        /**
         * <p>Image URL.</p>
         * @type {string || null}
         */
        this.FullImageUrl = null;

        /**
         * <p>Version.</p>
         * @type {string || null}
         */
        this.MainVersion = null;

        /**
         * <p>Image URL domain name.</p>
         * @type {string || null}
         */
        this.RegistryUrl = null;

        /**
         * <p>Image namespace.</p>
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * <p>Image repository name.</p>
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * <p>Image version tag.</p>
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * <p>Username.</p>
         * @type {string || null}
         */
        this.Username = null;

        /**
         * <p>Password.</p>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * <p>Image pull secret.</p>
         * @type {ImagePullSecret || null}
         */
        this.ImagePullSecret = null;

        /**
         * <p>Image pull policy.</p>
         * @type {string || null}
         */
        this.ImagePullPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageMode = 'ImageMode' in params ? params.ImageMode : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.LegacyCCR = 'LegacyCCR' in params ? params.LegacyCCR : null;
        this.FullImageUrl = 'FullImageUrl' in params ? params.FullImageUrl : null;
        this.MainVersion = 'MainVersion' in params ? params.MainVersion : null;
        this.RegistryUrl = 'RegistryUrl' in params ? params.RegistryUrl : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.ImagePullSecret) {
            let obj = new ImagePullSecret();
            obj.deserialize(params.ImagePullSecret)
            this.ImagePullSecret = obj;
        }
        this.ImagePullPolicy = 'ImagePullPolicy' in params ? params.ImagePullPolicy : null;

    }
}

/**
 * VPC parameter.
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
 * ModifyInstanceBasic request structure.
 * @class
 */
class ModifyInstanceBasicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Cluster name.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Used to label computing resources that need to be modified.
         * @type {string || null}
         */
        this.ResourceBaseType = null;

        /**
         * ID of the computing resource that needs to be modified. Used together with ResourceBaseType.
         * @type {string || null}
         */
        this.ComputeResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ResourceBaseType = 'ResourceBaseType' in params ? params.ResourceBaseType : null;
        this.ComputeResourceId = 'ComputeResourceId' in params ? params.ComputeResourceId : null;

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
         * Cluster string ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * User information list.
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
 * HDFS file storage details.
 * @class
 */
class StorageSummaryDistribution extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data item.
         * @type {string || null}
         */
        this.MetricItem = null;

        /**
         * Data item description.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Sampling value.
         * @type {Array.<Dps> || null}
         */
        this.Dps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricItem = 'MetricItem' in params ? params.MetricItem : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Dps) {
            this.Dps = new Array();
            for (let z in params.Dps) {
                let obj = new Dps();
                obj.deserialize(params.Dps[z]);
                this.Dps.push(obj);
            }
        }

    }
}

/**
 * YARN application statistics information.
 * @class
 */
class ApplicationStatics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name.
         * @type {string || null}
         */
        this.Queue = null;

        /**
         * Username.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Job type.
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * Meaning of SumMemorySeconds.
         * @type {number || null}
         */
        this.SumMemorySeconds = null;

        /**
         * Meaning of SumVCoreSeconds.
         * @type {number || null}
         */
        this.SumVCoreSeconds = null;

        /**
         * SumHDFSBytesWritten (with the unit).
         * @type {string || null}
         */
        this.SumHDFSBytesWritten = null;

        /**
         * SumHDFSBytesRead (with the unit).
         * @type {string || null}
         */
        this.SumHDFSBytesRead = null;

        /**
         * Number of jobs.
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
 * TerminateInstance request structure.
 * @class
 */
class TerminateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>ID of the terminated node. This parameter is reserved and does not need to be configured.</p>
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * <p>The type can be ComputeResource, EMR, or a default value. The default value is EMR. When the type is EMR, InstanceId takes effect; when the type is ComputeResource, ComputeResourceId is used for identification.</p>
         * @type {string || null}
         */
        this.ResourceBaseType = null;

        /**
         * <p>Computing resource ID.</p>
         * @type {string || null}
         */
        this.ComputeResourceId = null;

        /**
         * <p>Retain the TKE cluster associated with the computing resource.</p>
         * @type {boolean || null}
         */
        this.RetainTkeCluster = null;

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
        this.ResourceBaseType = 'ResourceBaseType' in params ? params.ResourceBaseType : null;
        this.ComputeResourceId = 'ComputeResourceId' in params ? params.ComputeResourceId : null;
        this.RetainTkeCluster = 'RetainTkeCluster' in params ? params.RetainTkeCluster : null;

    }
}

/**
 * Pod affinity.
 * @class
 */
class PodAffinitySpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Hard affinity rule for scheduling.</p>
         * @type {Array.<PodAffinityTerm> || null}
         */
        this.RequiredDuringSchedulingIgnoredDuringExecution = null;

        /**
         * <p>Soft affinity rule for scheduling.</p>
         * @type {Array.<WeightedPodAffinityTerm> || null}
         */
        this.PreferredDuringSchedulingIgnoredDuringExecution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RequiredDuringSchedulingIgnoredDuringExecution) {
            this.RequiredDuringSchedulingIgnoredDuringExecution = new Array();
            for (let z in params.RequiredDuringSchedulingIgnoredDuringExecution) {
                let obj = new PodAffinityTerm();
                obj.deserialize(params.RequiredDuringSchedulingIgnoredDuringExecution[z]);
                this.RequiredDuringSchedulingIgnoredDuringExecution.push(obj);
            }
        }

        if (params.PreferredDuringSchedulingIgnoredDuringExecution) {
            this.PreferredDuringSchedulingIgnoredDuringExecution = new Array();
            for (let z in params.PreferredDuringSchedulingIgnoredDuringExecution) {
                let obj = new WeightedPodAffinityTerm();
                obj.deserialize(params.PreferredDuringSchedulingIgnoredDuringExecution[z]);
                this.PreferredDuringSchedulingIgnoredDuringExecution.push(obj);
            }
        }

    }
}

/**
 * Process detection information.
 * @class
 */
class ServiceProcessFunctionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Detection alarm level.
         * @type {string || null}
         */
        this.DetectAlert = null;

        /**
         * Detection feature description.
         * @type {string || null}
         */
        this.DetetcFunctionKey = null;

        /**
         * Detection feature result.
         * @type {string || null}
         */
        this.DetetcFunctionValue = null;

        /**
         * Detection result.
         * @type {string || null}
         */
        this.DetetcTime = null;

        /**
         * Detection feature description.
         * @type {string || null}
         */
        this.DetectFunctionKey = null;

        /**
         * Detection feature result.
         * @type {string || null}
         */
        this.DetectFunctionValue = null;

        /**
         * Detection result.
         * @type {string || null}
         */
        this.DetectTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectAlert = 'DetectAlert' in params ? params.DetectAlert : null;
        this.DetetcFunctionKey = 'DetetcFunctionKey' in params ? params.DetetcFunctionKey : null;
        this.DetetcFunctionValue = 'DetetcFunctionValue' in params ? params.DetetcFunctionValue : null;
        this.DetetcTime = 'DetetcTime' in params ? params.DetetcTime : null;
        this.DetectFunctionKey = 'DetectFunctionKey' in params ? params.DetectFunctionKey : null;
        this.DetectFunctionValue = 'DetectFunctionValue' in params ? params.DetectFunctionValue : null;
        this.DetectTime = 'DetectTime' in params ? params.DetectTime : null;

    }
}

/**
 * Pre-execution script configuration.
 * @class
 */
class PreExecuteFileSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Script path on COS, which has been deprecated.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Script execution parameter.
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * COS bucket name, which has been deprecated.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * COS region name, which has been deprecated.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * COS domain data, which has been deprecated.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Execution order.
         * @type {number || null}
         */
        this.RunOrder = null;

        /**
         * Whether resourceAfter or clusterAfter is used.
         * @type {string || null}
         */
        this.WhenRun = null;

        /**
         * Script file name, which has been deprecated.
         * @type {string || null}
         */
        this.CosFileName = null;

        /**
         * COS address of the script.
         * @type {string || null}
         */
        this.CosFileURI = null;

        /**
         * COS SecretId.
         * @type {string || null}
         */
        this.CosSecretId = null;

        /**
         * COS SecretKey.
         * @type {string || null}
         */
        this.CosSecretKey = null;

        /**
         * COS APPID, which has been deprecated.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Storage volume details.
 * @class
 */
class StorageVolumeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage volume name.
         * @type {string || null}
         */
        this.VolumeName = null;

        /**
         * Storage volume type.
         * @type {string || null}
         */
        this.VolumeType = null;

        /**
         * Storage volume details.
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
        this.VolumeName = 'VolumeName' in params ? params.VolumeName : null;
        this.VolumeType = 'VolumeType' in params ? params.VolumeType : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * TerminateSLInstance request structure.
 * @class
 */
class TerminateSLInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance unique identifier (string).
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
 * DescribeNodeSpec response structure.
 * @class
 */
class DescribeNodeSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Node specifications type.</p>
         * @type {Array.<DescribeNodeSpec> || null}
         */
        this.NodeSpecs = null;

        /**
         * <p>Instance type architecture information.</p>
         * @type {Array.<ArchitectureInfo> || null}
         */
        this.Architectures = null;

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

        if (params.NodeSpecs) {
            this.NodeSpecs = new Array();
            for (let z in params.NodeSpecs) {
                let obj = new DescribeNodeSpec();
                obj.deserialize(params.NodeSpecs[z]);
                this.NodeSpecs.push(obj);
            }
        }

        if (params.Architectures) {
            this.Architectures = new Array();
            for (let z in params.Architectures) {
                let obj = new ArchitectureInfo();
                obj.deserialize(params.Architectures[z]);
                this.Architectures.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStarRocksQueryInfo request structure.
 * @class
 */
class DescribeStarRocksQueryInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time for obtaining queried information (s).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time for obtaining queried information (s).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number of items returned per page. Minimum value: 1. Maximum value: 100.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number for pagination queries, starting from 1.
         * @type {number || null}
         */
        this.Page = null;

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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Page = 'Page' in params ? params.Page : null;

    }
}

/**
 * Resource details.
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Node specification description, such as CVM.SA2.</p>
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * <p>Valid values:<br>&quot;LOCAL_SSD&quot;   3     // Local SSD<br>&quot;CLOUD_SSD&quot;   4     // Cloud SSD<br>&quot;CLOUD_PREMIUM&quot;  5  // Premium Disk<br>&quot;CLOUD_HSSD&quot;   6    // Enhanced SSD<br>&quot;CLOUD_THROUGHPUT&quot; 11// Throughput-Optimized Cloud Disk<br>&quot;CLOUD_TSSD&quot;  12     // Tremendous SSD<br>&quot;CLOUD_BSSD&quot;    13   // Balanced SSD<br>&quot;CLOUD_BIGDATA&quot; 14   // Big Data Cloud Disk<br>&quot;CLOUD_HIGHIO&quot;  15   // High-IO Cloud Disk </p><p>This field is invalid. The actual system disk type is determined based on the data disk type and node type. If the node supports the selected data disk type, the system disk type is consistent with the data disk. It is recommended to use the CreateCluster API.</p>
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * <p>Data disk type. Valid values:</p><p>CLOUD_SSD: Cloud SSD</p><p>CLOUD_PREMIUM: Premium Disk</p><p>CLOUD_BASIC: Cloud Basic Disk</p><p>LOCAL_BASIC: Local Basic Disk</p><p>LOCAL_SSD: Local SSD</p><p>CLOUD_HSSD: Enhanced SSD</p><p>CLOUD_THROUGHPUT: Throughput-Optimized Cloud Disk</p><p>CLOUD_TSSD: Tremendous SSD</p><p>CLOUD_BIGDATA: Big Data Cloud Disk</p><p>CLOUD_HIGHIO: High-IO Cloud Disk</p><p>CLOUD_BSSD: Balanced SSD</p><p>REMOTE_SSD: Remote SSD Disk</p>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * <p>Memory capacity (MB).</p>
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * <p>Number of CPU cores.</p>
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * <p>Data disk capacity.</p>
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * <p>System disk capacity.</p>
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * <p>Cloud disk list. When the data disk is a single cloud disk, use the DiskType and DiskSize parameters directly. Use MultiDisks for extra disks.</p>
         * @type {Array.<MultiDisk> || null}
         */
        this.MultiDisks = null;

        /**
         * <p>List of tags to be bound.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Specifications type, such as S2.MEDIUM8.</p>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * <p>Number of local disks. This field has been deprecated.</p>
         * @type {number || null}
         */
        this.LocalDiskNum = null;

        /**
         * <p>Number of local disks, such as 2.</p>
         * @type {number || null}
         */
        this.DiskNum = null;

        /**
         * <p>GPU information.</p>
         * @type {string || null}
         */
        this.GpuDesc = null;

        /**
         * <p>Number of partitions in a placement group.</p>
         * @type {number || null}
         */
        this.PartitionNumber = null;

        /**
         * <p>High-performance cluster ID.</p>
         * @type {string || null}
         */
        this.HCCHpcClusterId = null;

        /**
         * <p>Custom hostname.</p>
         * @type {string || null}
         */
        this.CustomNodeName = null;

        /**
         * <p>GPU image driver configuration.</p>
         * @type {GpuImageDriverSpec || null}
         */
        this.GpuImageDriver = null;

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
        this.GpuDesc = 'GpuDesc' in params ? params.GpuDesc : null;
        this.PartitionNumber = 'PartitionNumber' in params ? params.PartitionNumber : null;
        this.HCCHpcClusterId = 'HCCHpcClusterId' in params ? params.HCCHpcClusterId : null;
        this.CustomNodeName = 'CustomNodeName' in params ? params.CustomNodeName : null;

        if (params.GpuImageDriver) {
            let obj = new GpuImageDriverSpec();
            obj.deserialize(params.GpuImageDriver)
            this.GpuImageDriver = obj;
        }

    }
}

/**
 * ResizeDataDisks response structure.
 * @class
 */
class ResizeDataDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RayCluster
 * @class
 */
class RayCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>RayCluster cluster name.</p>
         * @type {string || null}
         */
        this.RayClusterName = null;

        /**
         * <p>RayCluster cluster ID.</p>
         * @type {number || null}
         */
        this.RayClusterId = null;

        /**
         * <p>Number of Pods.</p>
         * @type {number || null}
         */
        this.PodCount = null;

        /**
         * <p>Cluster creation time.</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Number of Redis instances.</p>
         * @type {number || null}
         */
        this.RedisCount = null;

        /**
         * <p>Creation type.</p><p>Enumeration values:</p><ul><li>1: form creation</li><li>2: YAML creation</li></ul>
         * @type {number || null}
         */
        this.SubmitType = null;

        /**
         * <p>Head access address, which is also the dashboard address.</p>
         * @type {string || null}
         */
        this.DashboardUrl = null;

        /**
         * <p>Namespace.</p>
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * <p>Number of volumes mounted by the RayCluster.</p>
         * @type {number || null}
         */
        this.StorageCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RayClusterName = 'RayClusterName' in params ? params.RayClusterName : null;
        this.RayClusterId = 'RayClusterId' in params ? params.RayClusterId : null;
        this.PodCount = 'PodCount' in params ? params.PodCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RedisCount = 'RedisCount' in params ? params.RedisCount : null;
        this.SubmitType = 'SubmitType' in params ? params.SubmitType : null;
        this.DashboardUrl = 'DashboardUrl' in params ? params.DashboardUrl : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.StorageCount = 'StorageCount' in params ? params.StorageCount : null;

    }
}

/**
 * Key-value structure.
 * @class
 */
class Item extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key value.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value.
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
 * ModifySLInstanceBasic response structure.
 * @class
 */
class ModifySLInstanceBasicResponse extends  AbstractModel {
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
 * Queue modification information in resource scheduling.
 * @class
 */
class ConfigModifyInfoV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation type. Valid values:

0: Create a queue.
1: Edit - fully overwrite a queue.
2: Create a subqueue.
3: Delete a queue.
4: Clone a queue. This is the same as creating a subqueue. Specifically, for `fair`, a subqueue can be copied to a new queue.
6: Edit - incrementally update a queue.
         * @type {number || null}
         */
        this.OpType = null;

        /**
         * Queue name. It cannot be modified.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Create the root queue: pass "myId of root". Create a subqueue: pass "myId of the selected queue". Clone a queue: pass "parentId of the selected queue".
         * @type {string || null}
         */
        this.ParentId = null;

        /**
         * Edit or delete operations: pass "myId of the selected queue". Passing is required for cloning only when the scheduler is `fair` in order to copy a subqueue to a new queue.
         * @type {string || null}
         */
        this.MyId = null;

        /**
         * Basic configuration information. The value of key is consistent with the field returned by **DescribeYarnQueue**.
###### Fair scheduler.
The key value information is as follows:

- type: parent queue. The value is **parent** or **null**.
- aclSubmitApps: submit access control. The value is a **JSON string of the AclForYarnQueue type** or **null**.
- aclAdministerApps: administer access control. The value is a **JSON string of the AclForYarnQueue type** or **null**.
- minSharePreemptionTimeout: minimum share preemption timeout. The value is a **numeric string** or **null**.
- fairSharePreemptionTimeout: fair share preemption timeout. The value is a **numeric string** or **null**.
- fairSharePreemptionThreshold: fair share preemption threshold. The value is a **numeric string** or **null**, where the numeric range is (0, 1].
- allowPreemptionFrom: preemption mode. The value is a **boolean string** or **null**.
- schedulingPolicy: scheduling policy. The value is **drf**, **fair**, **fifo**, or **null**.

```
type AclForYarnQueue struct {
	User  *string `json:"user"` // Username
	Group *string `json:"group"`// Group name
}
```
###### Capacity scheduler.
The key value information is as follows:

- state: queue status. The value is **STOPPED** or **RUNNING**.
- default-node-label-expression: default label expression. The value is a **label** or **null**.
- acl_submit_applications: submit access control. The value is a **JSON string of the AclForYarnQueue type** or **null**.
- acl_administer_queue: administer access control. The value is a **JSON string of the AclForYarnQueue type** or **null**.
- maximum-allocation-mb: maximum memory allocated to a container. The value is a **numeric string** or **null**.
- maximum-allocation-vcores: maximum number of vCores allocated to a container. The value is a **numeric string** or **null**.
```
type AclForYarnQueue struct {
	User  *string `json:"user"` // Username
	Group *string `json:"group"`// Group name
}
```
         * @type {ItemSeq || null}
         */
        this.BasicParams = null;

        /**
         * Configuration set information. For the value, see the parameter description of this complex type. A configuration set is the representation of the plan mode in a queue, indicating different configuration values in different time periods. All queues have the same configuration set name. For a single queue, the labels and parameters in each configuration set are the same, but the parameter values differ.
         * @type {Array.<ConfigSetInfo> || null}
         */
        this.ConfigSetParams = null;

        /**
         * Specific to the capacity scheduler. It takes effect only when `OpType` is `6` and indicates which labels in this queue are to be deleted. Its priority is higher than that of LabelParams in ConfigSetParams.
         * @type {Array.<string> || null}
         */
        this.DeleteLables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpType = 'OpType' in params ? params.OpType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.MyId = 'MyId' in params ? params.MyId : null;

        if (params.BasicParams) {
            let obj = new ItemSeq();
            obj.deserialize(params.BasicParams)
            this.BasicParams = obj;
        }

        if (params.ConfigSetParams) {
            this.ConfigSetParams = new Array();
            for (let z in params.ConfigSetParams) {
                let obj = new ConfigSetInfo();
                obj.deserialize(params.ConfigSetParams[z]);
                this.ConfigSetParams.push(obj);
            }
        }
        this.DeleteLables = 'DeleteLables' in params ? params.DeleteLables : null;

    }
}

/**
 * Form data submitted when creating a DynamicInstance.
 * @class
 */
class DynamicInstanceForm extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>DynamicInstance name. The length is limited to 1–64 characters and can only contain lowercase letters.</p>
         * @type {string || null}
         */
        this.DynamicInstanceName = null;

        /**
         * <p>Namespace.</p>
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * <p>Whether high availability is supported.</p>
         * @type {boolean || null}
         */
        this.SupportHA = null;

        /**
         * <p>Custom image information.</p>
         * @type {CustomImage || null}
         */
        this.CustomImage = null;

        /**
         * <p>Resource group configuration.</p>
         * @type {Array.<DynamicInstanceGroup> || null}
         */
        this.DynamicInstanceGroups = null;

        /**
         * <p>Whether to support storage configuration.</p>
         * @type {boolean || null}
         */
        this.SupportPV = null;

        /**
         * <p>CBS storage volume list.</p>
         * @type {Array.<CBSVolume> || null}
         */
        this.CBSVolumes = null;

        /**
         * <p>CFS storage volume list, including only CFS but not CFS Turbo.</p>
         * @type {Array.<CFSVolume> || null}
         */
        this.CFSVolumes = null;

        /**
         * <p>COS storage volume list.</p>
         * @type {Array.<COSVolume> || null}
         */
        this.COSVolumes = null;

        /**
         * <p>Mount volume list.</p>
         * @type {Array.<VolumeMount> || null}
         */
        this.VolumeMounts = null;

        /**
         * <p>Pod label.</p>
         * @type {Array.<TkeLabel> || null}
         */
        this.Labels = null;

        /**
         * <p>Tolerations definition.</p>
         * @type {Array.<Toleration> || null}
         */
        this.Tolerations = null;

        /**
         * <p>Environment variable.</p>
         * @type {Array.<NameValue> || null}
         */
        this.Envs = null;

        /**
         * <p>Dependent external components.</p>
         * @type {Array.<DependService> || null}
         */
        this.DependServices = null;

        /**
         * <p>Whether to enable token authentication.</p>
         * @type {boolean || null}
         */
        this.SupportToken = null;

        /**
         * <p>CFS Turbo mount list, excluding the standard edition CFS.</p>
         * @type {Array.<CFSTurboVolume> || null}
         */
        this.CFSTurboVolumes = null;

        /**
         * <p>Custom image.</p>
         * @type {ImageInfoV2 || null}
         */
        this.ImageInfoV2 = null;

        /**
         * <p>GooseFS disk.</p>
         * @type {Array.<GooseFSVolume> || null}
         */
        this.GooseFSVolumes = null;

        /**
         * <p>Enable HistoryServer.</p>
         * @type {boolean || null}
         */
        this.EnableHistoryServer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DynamicInstanceName = 'DynamicInstanceName' in params ? params.DynamicInstanceName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;

        if (params.CustomImage) {
            let obj = new CustomImage();
            obj.deserialize(params.CustomImage)
            this.CustomImage = obj;
        }

        if (params.DynamicInstanceGroups) {
            this.DynamicInstanceGroups = new Array();
            for (let z in params.DynamicInstanceGroups) {
                let obj = new DynamicInstanceGroup();
                obj.deserialize(params.DynamicInstanceGroups[z]);
                this.DynamicInstanceGroups.push(obj);
            }
        }
        this.SupportPV = 'SupportPV' in params ? params.SupportPV : null;

        if (params.CBSVolumes) {
            this.CBSVolumes = new Array();
            for (let z in params.CBSVolumes) {
                let obj = new CBSVolume();
                obj.deserialize(params.CBSVolumes[z]);
                this.CBSVolumes.push(obj);
            }
        }

        if (params.CFSVolumes) {
            this.CFSVolumes = new Array();
            for (let z in params.CFSVolumes) {
                let obj = new CFSVolume();
                obj.deserialize(params.CFSVolumes[z]);
                this.CFSVolumes.push(obj);
            }
        }

        if (params.COSVolumes) {
            this.COSVolumes = new Array();
            for (let z in params.COSVolumes) {
                let obj = new COSVolume();
                obj.deserialize(params.COSVolumes[z]);
                this.COSVolumes.push(obj);
            }
        }

        if (params.VolumeMounts) {
            this.VolumeMounts = new Array();
            for (let z in params.VolumeMounts) {
                let obj = new VolumeMount();
                obj.deserialize(params.VolumeMounts[z]);
                this.VolumeMounts.push(obj);
            }
        }

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new TkeLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Tolerations) {
            this.Tolerations = new Array();
            for (let z in params.Tolerations) {
                let obj = new Toleration();
                obj.deserialize(params.Tolerations[z]);
                this.Tolerations.push(obj);
            }
        }

        if (params.Envs) {
            this.Envs = new Array();
            for (let z in params.Envs) {
                let obj = new NameValue();
                obj.deserialize(params.Envs[z]);
                this.Envs.push(obj);
            }
        }

        if (params.DependServices) {
            this.DependServices = new Array();
            for (let z in params.DependServices) {
                let obj = new DependService();
                obj.deserialize(params.DependServices[z]);
                this.DependServices.push(obj);
            }
        }
        this.SupportToken = 'SupportToken' in params ? params.SupportToken : null;

        if (params.CFSTurboVolumes) {
            this.CFSTurboVolumes = new Array();
            for (let z in params.CFSTurboVolumes) {
                let obj = new CFSTurboVolume();
                obj.deserialize(params.CFSTurboVolumes[z]);
                this.CFSTurboVolumes.push(obj);
            }
        }

        if (params.ImageInfoV2) {
            let obj = new ImageInfoV2();
            obj.deserialize(params.ImageInfoV2)
            this.ImageInfoV2 = obj;
        }

        if (params.GooseFSVolumes) {
            this.GooseFSVolumes = new Array();
            for (let z in params.GooseFSVolumes) {
                let obj = new GooseFSVolume();
                obj.deserialize(params.GooseFSVolumes[z]);
                this.GooseFSVolumes.push(obj);
            }
        }
        this.EnableHistoryServer = 'EnableHistoryServer' in params ? params.EnableHistoryServer : null;

    }
}

/**
 * Sort description, used for sorting.
 * @class
 */
class Order extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sorting field.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Desc or Asc.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * User group information.
 * @class
 */
class GroupInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * User name list.
         * @type {Array.<string> || null}
         */
        this.Users = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * User group type.
         * @type {number || null}
         */
        this.GroupType = null;

        /**
         * User group type description.
         * @type {string || null}
         */
        this.GroupTypeDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Users = 'Users' in params ? params.Users : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.GroupTypeDesc = 'GroupTypeDesc' in params ? params.GroupTypeDesc : null;

    }
}

/**
 * VPC parameter.
 * @class
 */
class VirtualPrivateCloud extends  AbstractModel {
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
 * ResizeDataDisks request structure.
 * @class
 */
class ResizeDataDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the EMR cluster.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Scale-out value, which should be greater than the original capacity and a multiple of 10.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * ID list of nodes to be scaled out.
         * @type {Array.<string> || null}
         */
        this.CvmInstanceIds = null;

        /**
         * ID of the cloud disks to be scaled out.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Whether to scale out all cloud disks.
         * @type {boolean || null}
         */
        this.ResizeAll = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.CvmInstanceIds = 'CvmInstanceIds' in params ? params.CvmInstanceIds : null;
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.ResizeAll = 'ResizeAll' in params ? params.ResizeAll : null;

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
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Client token.</p>
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * <p>Scale-out flow ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * <p>Used to query the flow status and additional flow information.</p>
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * <p>Order number.</p>
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * <p>Large order number.</p>
         * @type {string || null}
         */
        this.BillId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CFS Turbo storage volume.
 * @class
 */
class CFSTurboVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Storage volume name.</p>
         * @type {string || null}
         */
        this.VolumeName = null;

        /**
         * <p>File system ID.</p>
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * <p>CFSId</p>
         * @type {string || null}
         */
        this.FSId = null;

        /**
         * <p>Mount point IP address.</p>
         * @type {string || null}
         */
        this.Host = null;

        /**
         * <p>CFS subdirectory.</p>
         * @type {string || null}
         */
        this.SubPath = null;

        /**
         * <p>Lustre mount root directory. The default value is /cfs.</p>
         * @type {string || null}
         */
        this.RootDir = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumeName = 'VolumeName' in params ? params.VolumeName : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FSId = 'FSId' in params ? params.FSId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.SubPath = 'SubPath' in params ? params.SubPath : null;
        this.RootDir = 'RootDir' in params ? params.RootDir : null;

    }
}

/**
 * Auto scaling specification configuration.
 * @class
 */
class AutoScaleResourceConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Configuration ID.</p>
         * @type {number || null}
         */
        this.Id = null;

        /**
         * <p>Cluster ID.</p>
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * <p>Minimum number of reserved instances for auto scaling.</p>
         * @type {number || null}
         */
        this.ScaleLowerBound = null;

        /**
         * <p>Maximum number of instances for auto scaling.</p>
         * @type {number || null}
         */
        this.ScaleUpperBound = null;

        /**
         * <p>Scale-out rule type. Valid values: 1 (scale-out rule by load metrics) and 2 (scale-out rule by time).</p>
         * @type {number || null}
         */
        this.StrategyType = null;

        /**
         * <p>Next scale-out time.</p>
         * @type {number || null}
         */
        this.NextTimeCanScale = null;

        /**
         * <p>Graceful scale-in switch.</p>
         * @type {boolean || null}
         */
        this.GraceDownFlag = null;

        /**
         * <p>&quot;CVM&quot; indicates that all specifications use CVM-related types, and &quot;POD&quot; indicates that specifications use container-related types. The default value is &quot;CVM&quot;.</p>
         * @type {string || null}
         */
        this.HardwareType = null;

        /**
         * <p>&quot;POSTPAY&quot; indicates that only pay-as-you-go billing is used. &quot;SPOT_FIRST&quot; indicates that spot instances are preferred, which is supported only when HardwareType is &quot;HOST&quot;. &quot;POD&quot; only supports pure pay-as-you-go billing.</p>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * <p>Minimum percentage of pay-as-you-go resources in the scenario where spot instances are preferred. It is an integer.</p>
         * @type {number || null}
         */
        this.PostPayPercentMin = null;

        /**
         * <p>When the preset resource type is HOST, you can select &quot;switch to POD when resources are insufficient&quot; or clear the selection. 0 indicates that it is not selected by default (0), and 1 indicates that it is selected.</p>
         * @type {number || null}
         */
        this.ChangeToPod = null;

        /**
         * <p>Scaling group name.</p>
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * <p>Tag.</p>
         * @type {string || null}
         */
        this.YarnNodeLabel = null;

        /**
         * <p>Corresponding computing group.</p>
         * @type {string || null}
         */
        this.WarehouseName = null;

        /**
         * <p>Scaling group status.</p>
         * @type {number || null}
         */
        this.GroupStatus = null;

        /**
         * <p>Parallel scaling. Valid values: 0 (disabled) and 1 (enabled).</p>
         * @type {number || null}
         */
        this.Parallel = null;

        /**
         * <p>Whether MNode is supported.</p>
         * @type {number || null}
         */
        this.EnableMNode = null;

        /**
         * <p>More scaling group settings.</p>
         * @type {AutoScaleGroupAdvanceAttrs || null}
         */
        this.ExtraAdvanceAttrs = null;

        /**
         * <p>Custom hostname.</p>
         * @type {string || null}
         */
        this.CustomNodeName = null;

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
        this.ScaleLowerBound = 'ScaleLowerBound' in params ? params.ScaleLowerBound : null;
        this.ScaleUpperBound = 'ScaleUpperBound' in params ? params.ScaleUpperBound : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.NextTimeCanScale = 'NextTimeCanScale' in params ? params.NextTimeCanScale : null;
        this.GraceDownFlag = 'GraceDownFlag' in params ? params.GraceDownFlag : null;
        this.HardwareType = 'HardwareType' in params ? params.HardwareType : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PostPayPercentMin = 'PostPayPercentMin' in params ? params.PostPayPercentMin : null;
        this.ChangeToPod = 'ChangeToPod' in params ? params.ChangeToPod : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.YarnNodeLabel = 'YarnNodeLabel' in params ? params.YarnNodeLabel : null;
        this.WarehouseName = 'WarehouseName' in params ? params.WarehouseName : null;
        this.GroupStatus = 'GroupStatus' in params ? params.GroupStatus : null;
        this.Parallel = 'Parallel' in params ? params.Parallel : null;
        this.EnableMNode = 'EnableMNode' in params ? params.EnableMNode : null;

        if (params.ExtraAdvanceAttrs) {
            let obj = new AutoScaleGroupAdvanceAttrs();
            obj.deserialize(params.ExtraAdvanceAttrs)
            this.ExtraAdvanceAttrs = obj;
        }
        this.CustomNodeName = 'CustomNodeName' in params ? params.CustomNodeName : null;

    }
}

/**
 * DescribeGlobalConfig request structure.
 * @class
 */
class DescribeGlobalConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * English ID of the EMR cluster.
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
 * Volume directory.
 * @class
 */
class PersistentVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>CBS storage volume.</p>
         * @type {Array.<CBSVolume> || null}
         */
        this.CBSVolumes = null;

        /**
         * <p>CFS storage volume.</p>
         * @type {Array.<CFSVolume> || null}
         */
        this.CFSVolumes = null;

        /**
         * <p>COS storage volume.</p>
         * @type {Array.<COSVolume> || null}
         */
        this.COSVolumes = null;

        /**
         * <p>Storage volume name (the YAML submission has no storage volume type).</p>
         * @type {Array.<string> || null}
         */
        this.StorageVolumeName = null;

        /**
         * <p>Storage volume list.</p>
         * @type {Array.<VolumeMount> || null}
         */
        this.VolumeMounts = null;

        /**
         * <p>Storage volume details.</p>
         * @type {Array.<StorageVolumeDetail> || null}
         */
        this.StorageVolumeDetail = null;

        /**
         * <p>CFS Turbo storage volume.</p>
         * @type {Array.<CFSTurboVolume> || null}
         */
        this.CFSTurboVolumes = null;

        /**
         * <p>GooseFS volume mount information.</p>
         * @type {Array.<GooseFSVolume> || null}
         */
        this.GooseFSVolumes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CBSVolumes) {
            this.CBSVolumes = new Array();
            for (let z in params.CBSVolumes) {
                let obj = new CBSVolume();
                obj.deserialize(params.CBSVolumes[z]);
                this.CBSVolumes.push(obj);
            }
        }

        if (params.CFSVolumes) {
            this.CFSVolumes = new Array();
            for (let z in params.CFSVolumes) {
                let obj = new CFSVolume();
                obj.deserialize(params.CFSVolumes[z]);
                this.CFSVolumes.push(obj);
            }
        }

        if (params.COSVolumes) {
            this.COSVolumes = new Array();
            for (let z in params.COSVolumes) {
                let obj = new COSVolume();
                obj.deserialize(params.COSVolumes[z]);
                this.COSVolumes.push(obj);
            }
        }
        this.StorageVolumeName = 'StorageVolumeName' in params ? params.StorageVolumeName : null;

        if (params.VolumeMounts) {
            this.VolumeMounts = new Array();
            for (let z in params.VolumeMounts) {
                let obj = new VolumeMount();
                obj.deserialize(params.VolumeMounts[z]);
                this.VolumeMounts.push(obj);
            }
        }

        if (params.StorageVolumeDetail) {
            this.StorageVolumeDetail = new Array();
            for (let z in params.StorageVolumeDetail) {
                let obj = new StorageVolumeDetail();
                obj.deserialize(params.StorageVolumeDetail[z]);
                this.StorageVolumeDetail.push(obj);
            }
        }

        if (params.CFSTurboVolumes) {
            this.CFSTurboVolumes = new Array();
            for (let z in params.CFSTurboVolumes) {
                let obj = new CFSTurboVolume();
                obj.deserialize(params.CFSTurboVolumes[z]);
                this.CFSTurboVolumes.push(obj);
            }
        }

        if (params.GooseFSVolumes) {
            this.GooseFSVolumes = new Array();
            for (let z in params.GooseFSVolumes) {
                let obj = new GooseFSVolume();
                obj.deserialize(params.GooseFSVolumes[z]);
                this.GooseFSVolumes.push(obj);
            }
        }

    }
}

/**
 * Monthly repetition task policy for scheduled scaling.
 * @class
 */
class MonthRepeatStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specific time for repetition task execution, for example, 01:02:00.
         * @type {string || null}
         */
        this.ExecuteAtTimeOfDay = null;

        /**
         * Description of the day range within a month. The length must be 2. For example, [2,10] indicates from the 2nd day to the 10th day every month.
         * @type {Array.<number> || null}
         */
        this.DaysOfMonthRange = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecuteAtTimeOfDay = 'ExecuteAtTimeOfDay' in params ? params.ExecuteAtTimeOfDay : null;
        this.DaysOfMonthRange = 'DaysOfMonthRange' in params ? params.DaysOfMonthRange : null;

    }
}

/**
 * Redis instance information.
 * @class
 */
class RedisInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Redis instance ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Instance IP address.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Instance port.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeHBaseTableOverview request structure.
 * @class
 */
class DescribeHBaseTableOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Page number. Valid values: 0 (page 1) and 1 (page 2).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items returned per page. Minimum value: 1. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Table name, supporting fuzzy matching.
         * @type {string || null}
         */
        this.Table = null;

        /**
         * Sorting field. It has a default value.
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * asc: ascending; desc: descending (default).
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;

    }
}

/**
 * DescribeClusterFlowStatusDetail response structure.
 * @class
 */
class DescribeClusterFlowStatusDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task step details.
         * @type {Array.<StageInfoDetail> || null}
         */
        this.StageDetails = null;

        /**
         * Task parameters.
         * @type {Array.<FlowParamsDesc> || null}
         */
        this.FlowDesc = null;

        /**
         * Task name.
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * Overall task flow progress.
Example: 0.8.
         * @type {number || null}
         */
        this.FlowTotalProgress = null;

        /**
         * Overall flow status definition.
0: initialized
1: running
2: completed
3: completed (with skipped steps)
-1: failed
-3: blocked
         * @type {number || null}
         */
        this.FlowTotalStatus = null;

        /**
         * Additional flow information.
This parameter is returned when NeedExtraDetail is true.
         * @type {Array.<FlowExtraDetail> || null}
         */
        this.FlowExtraDetail = null;

        /**
         * Flow description.
         * @type {string || null}
         */
        this.FlowInfo = null;

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

        if (params.StageDetails) {
            this.StageDetails = new Array();
            for (let z in params.StageDetails) {
                let obj = new StageInfoDetail();
                obj.deserialize(params.StageDetails[z]);
                this.StageDetails.push(obj);
            }
        }

        if (params.FlowDesc) {
            this.FlowDesc = new Array();
            for (let z in params.FlowDesc) {
                let obj = new FlowParamsDesc();
                obj.deserialize(params.FlowDesc[z]);
                this.FlowDesc.push(obj);
            }
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.FlowTotalProgress = 'FlowTotalProgress' in params ? params.FlowTotalProgress : null;
        this.FlowTotalStatus = 'FlowTotalStatus' in params ? params.FlowTotalStatus : null;

        if (params.FlowExtraDetail) {
            this.FlowExtraDetail = new Array();
            for (let z in params.FlowExtraDetail) {
                let obj = new FlowExtraDetail();
                obj.deserialize(params.FlowExtraDetail[z]);
                this.FlowExtraDetail.push(obj);
            }
        }
        this.FlowInfo = 'FlowInfo' in params ? params.FlowInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSparkApplications request structure.
 * @class
 */
class DescribeSparkApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Querying start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Querying end time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Which page.
         * @type {number || null}
         */
        this.Page = null;

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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Page = 'Page' in params ? params.Page : null;

    }
}

/**
 * Node specifications.
 * @class
 */
class DescribeNodeSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node type.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Node type name.
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Types array.
         * @type {Array.<NodeSpecType> || null}
         */
        this.Types = null;

        /**
         * List of cloud-hosted node instance specifications.
         * @type {Array.<NodeSpecType> || null}
         */
        this.CmnTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;

        if (params.Types) {
            this.Types = new Array();
            for (let z in params.Types) {
                let obj = new NodeSpecType();
                obj.deserialize(params.Types[z]);
                this.Types.push(obj);
            }
        }

        if (params.CmnTypes) {
            this.CmnTypes = new Array();
            for (let z in params.CmnTypes) {
                let obj = new NodeSpecType();
                obj.deserialize(params.CmnTypes[z]);
                this.CmnTypes.push(obj);
            }
        }

    }
}

/**
 * DescribeExportConfs request structure.
 * @class
 */
class DescribeExportConfsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Configuration to be exported.</p>
         * @type {Array.<ExportConfContext> || null}
         */
        this.ExportConfContexts = null;

        /**
         * <p>Export type.</p><p>Enumeration values:</p><ul><li>0: all configurations</li><li>1: only custom and modified configurations</li></ul>
         * @type {number || null}
         */
        this.ExportType = null;

        /**
         * <p>Node IP address.</p>
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * <p>Configuration group name.</p>
         * @type {string || null}
         */
        this.ConfGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ExportConfContexts) {
            this.ExportConfContexts = new Array();
            for (let z in params.ExportConfContexts) {
                let obj = new ExportConfContext();
                obj.deserialize(params.ExportConfContexts[z]);
                this.ExportConfContexts.push(obj);
            }
        }
        this.ExportType = 'ExportType' in params ? params.ExportType : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ConfGroupName = 'ConfGroupName' in params ? params.ConfGroupName : null;

    }
}

/**
 * ModifyDynamicInstance request structure.
 * @class
 */
class ModifyDynamicInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>EMR cluster ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Name of the service that supports DynamicInstance.</p>
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * <p>DynamicInstance type.</p><p>Enumeration values:</p><ul><li>RayCluster: RayCluster type</li></ul>
         * @type {string || null}
         */
        this.DynamicInstanceType = null;

        /**
         * <p>DynamicInstance ID.</p>
         * @type {number || null}
         */
        this.DynamicInstanceId = null;

        /**
         * <p>Updated form configuration (the latest content must be passed for each update field, and it must be complete).</p>
         * @type {ModifyDynamicInstanceForm || null}
         */
        this.DynamicInstanceForm = null;

        /**
         * <p>Updates the YAML configuration.</p>
         * @type {string || null}
         */
        this.DynamicInstanceYaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.DynamicInstanceType = 'DynamicInstanceType' in params ? params.DynamicInstanceType : null;
        this.DynamicInstanceId = 'DynamicInstanceId' in params ? params.DynamicInstanceId : null;

        if (params.DynamicInstanceForm) {
            let obj = new ModifyDynamicInstanceForm();
            obj.deserialize(params.DynamicInstanceForm)
            this.DynamicInstanceForm = obj;
        }
        this.DynamicInstanceYaml = 'DynamicInstanceYaml' in params ? params.DynamicInstanceYaml : null;

    }
}

/**
 * Serverless HBase instance information.
 * @class
 */
class SLInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster string ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Status description.
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Health status.
         * @type {string || null}
         */
        this.HealthStatus = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Region ID.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Primary AZ ID.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Primary AZ.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * User APPID.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Primary AZ VPC ID.
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Primary AZ VPC name.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Primary AZ subnet ID.
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * Primary AZ subnet name.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * Status code.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Cluster billing type. 0 indicates pay-as-you-go. 1 indicates yearly/monthly subscription.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Multi-AZ information.
         * @type {Array.<ZoneSetting> || null}
         */
        this.ZoneSettings = null;

        /**
         * Instance tag.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Auto-renewal flag. Valid values: 0 (notify before expiration but do not auto-renew), 1 (notify before expiration and auto-renew), and 2 (do not notify before expiration and do not auto-renew). If the business does not support renewal, the value is 0.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Isolation time. For instances that are not isolated, 0000-00-00 00:00:00 is returned.
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * Expiration time. For postpaid instances, 0000-00-00 00:00:00 is returned.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Primary/standby deployment role.
         * @type {string || null}
         */
        this.DeployRole = null;

        /**
         * WebUI address.
         * @type {string || null}
         */
        this.WebUIUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.ZoneSettings) {
            this.ZoneSettings = new Array();
            for (let z in params.ZoneSettings) {
                let obj = new ZoneSetting();
                obj.deserialize(params.ZoneSettings[z]);
                this.ZoneSettings.push(obj);
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
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployRole = 'DeployRole' in params ? params.DeployRole : null;
        this.WebUIUrl = 'WebUIUrl' in params ? params.WebUIUrl : null;

    }
}

/**
 * ModifyUserManagerPwd request structure.
 * @class
 */
class ModifyUserManagerPwdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Cluster ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Username.</p>
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * <p>Password.</p>
         * @type {string || null}
         */
        this.PassWord = null;

        /**
         * <p>Whether to synchronize the password.</p>
         * @type {boolean || null}
         */
        this.SyncPwd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PassWord = 'PassWord' in params ? params.PassWord : null;
        this.SyncPwd = 'SyncPwd' in params ? params.SyncPwd : null;

    }
}

/**
 * Cluster information.
 * @class
 */
class ClusterInstancesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>ID.</p>
         * @type {number || null}
         */
        this.Id = null;

        /**
         * <p>Cluster ID.</p>
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * <p>Title.</p>
         * @type {string || null}
         */
        this.Ftitle = null;

        /**
         * <p>Cluster name.</p>
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * <p>Region ID.</p>
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * <p>Region ID.</p>
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * <p>User APPID.</p>
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * <p>User UIN.</p>
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * <p>Project ID.</p>
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * <p>Cluster VPC ID.</p>
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * <p>Subnet ID.</p>
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * <p>Status code of the instance. Valid values:</p><li>2: The cluster is running.</li><li>3: The cluster is being created.</li><li>4: The cluster is being scaled out.</li><li>5: Router nodes are being added to the cluster.</li><li>6: Components are being installed in the cluster.</li><li>7: The cluster is executing a command.</li><li>8: The service is being restarted.</li><li>9: The cluster is entering maintenance.</li><li>10: The service is being paused.</li><li>11: The cluster is exiting maintenance.</li><li>12: The cluster is exiting the pause status.</li><li>13: The configuration is being delivered.</li><li>14: The cluster is being terminated.</li><li>15: Core nodes are being terminated.</li><li>16: Task nodes are being terminated.</li><li>17: Router nodes are being terminated.</li><li>18: The webproxy password is being changed.</li><li>19: The cluster is being isolated.</li><li>20: The cluster is being reconciled.</li><li>21: The cluster is being reclaimed.</li><li>22: The configuration change is waiting.</li><li>23: The cluster has been isolated.</li><li>24: Nodes are being scaled in.</li><li>33: The cluster is waiting for a refund.</li><li>34: The cluster has been refunded.</li><li>301: Creation failed.</li><li>302: Scale-out failed.</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * <p>Addition time.</p>
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * <p>Execution duration.</p>
         * @type {string || null}
         */
        this.RunTime = null;

        /**
         * <p>Cluster product configuration information.</p>
         * @type {EmrProductConfigOutter || null}
         */
        this.Config = null;

        /**
         * <p>Public IP address of the Master node.</p>
         * @type {string || null}
         */
        this.MasterIp = null;

        /**
         * <p>EMR version.</p>
         * @type {string || null}
         */
        this.EmrVersion = null;

        /**
         * <p>Billing mode.</p>
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * <p>Transaction version.</p>
         * @type {number || null}
         */
        this.TradeVersion = null;

        /**
         * <p>Resource order ID.</p>
         * @type {number || null}
         */
        this.ResourceOrderId = null;

        /**
         * <p>Whether it is a billable cluster.</p>
         * @type {number || null}
         */
        this.IsTradeCluster = null;

        /**
         * <p>Cluster error status alarm information.</p>
         * @type {string || null}
         */
        this.AlarmInfo = null;

        /**
         * <p>Whether a new architecture is used.</p>
         * @type {number || null}
         */
        this.IsWoodpeckerCluster = null;

        /**
         * <p>Meta database information.</p>
         * @type {string || null}
         */
        this.MetaDb = null;

        /**
         * <p>Tag information.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Hive metadata information.</p>
         * @type {string || null}
         */
        this.HiveMetaDb = null;

        /**
         * <p>Cluster type. Valid values: EMR, CLICKHOUSE, and DRUID.</p>
         * @type {string || null}
         */
        this.ServiceClass = null;

        /**
         * <p>Serialization of the aliases of all nodes in the cluster.</p>
         * @type {string || null}
         */
        this.AliasInfo = null;

        /**
         * <p>Cluster version ID.</p>
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * <p>Region ID.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Scenario name.</p>
         * @type {string || null}
         */
        this.SceneName = null;

        /**
         * <p>Scenario-based cluster type.</p>
         * @type {string || null}
         */
        this.SceneServiceClass = null;

        /**
         * <p>Scenario-based EMR version.</p>
         * @type {string || null}
         */
        this.SceneEmrVersion = null;

        /**
         * <p>Scenario-based cluster type.</p>
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * <p>vpc name</p>
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * <p>subnet name</p>
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * <p>Cluster dependency.</p>
         * @type {Array.<ClusterExternalServiceInfo> || null}
         */
        this.ClusterExternalServiceInfo = null;

        /**
         * <p>Cluster VPC ID, string type.</p>
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * <p>Subnet ID, string type.</p>
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * <p>Node information.</p>
         * @type {Array.<TopologyInfo> || null}
         */
        this.TopologyInfoList = null;

        /**
         * <p>Whether it is a cross-AZ cluster.</p>
         * @type {boolean || null}
         */
        this.IsMultiZoneCluster = null;

        /**
         * <p>Whether automatic compensation for abnormal nodes is enabled.</p>
         * @type {boolean || null}
         */
        this.IsCvmReplace = null;

        /**
         * <p>Title.</p>
         * @type {string || null}
         */
        this.ClusterTitle = null;

        /**
         * <p>Cluster product configuration information.</p>
         * @type {EmrProductConfigDetail || null}
         */
        this.ConfigDetail = null;

        /**
         * <p>Number of file systems bound to the cluster.</p>
         * @type {number || null}
         */
        this.BindFileSystemNum = null;

        /**
         * <p>Binding list of the RSS cluster.</p>
         * @type {Array.<ClusterRelationMeta> || null}
         */
        this.ClusterRelationInfoList = null;

        /**
         * <p>Redis information.</p>
         * @type {string || null}
         */
        this.RedisId = null;

        /**
         * <p>Whether IO fault self-healing is enabled.</p>
         * @type {boolean || null}
         */
        this.IsIOHungSelfRecovery = null;

        /**
         * <p>Metadata information.</p>
         * @type {Array.<CustomMetaDBInfo> || null}
         */
        this.MetaDBGroupInfo = null;

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
        this.ClusterTitle = 'ClusterTitle' in params ? params.ClusterTitle : null;

        if (params.ConfigDetail) {
            let obj = new EmrProductConfigDetail();
            obj.deserialize(params.ConfigDetail)
            this.ConfigDetail = obj;
        }
        this.BindFileSystemNum = 'BindFileSystemNum' in params ? params.BindFileSystemNum : null;

        if (params.ClusterRelationInfoList) {
            this.ClusterRelationInfoList = new Array();
            for (let z in params.ClusterRelationInfoList) {
                let obj = new ClusterRelationMeta();
                obj.deserialize(params.ClusterRelationInfoList[z]);
                this.ClusterRelationInfoList.push(obj);
            }
        }
        this.RedisId = 'RedisId' in params ? params.RedisId : null;
        this.IsIOHungSelfRecovery = 'IsIOHungSelfRecovery' in params ? params.IsIOHungSelfRecovery : null;

        if (params.MetaDBGroupInfo) {
            this.MetaDBGroupInfo = new Array();
            for (let z in params.MetaDBGroupInfo) {
                let obj = new CustomMetaDBInfo();
                obj.deserialize(params.MetaDBGroupInfo[z]);
                this.MetaDBGroupInfo.push(obj);
            }
        }

    }
}

/**
 * DescribeHBaseTableOverview response structure.
 * @class
 */
class DescribeHBaseTableOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Overview data array.
         * @type {Array.<OverviewRow> || null}
         */
        this.TableMonitorList = null;

        /**
         * Overview data array length.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Table schema information.
         * @type {Array.<TableSchemaItem> || null}
         */
        this.SchemaList = null;

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

        if (params.TableMonitorList) {
            this.TableMonitorList = new Array();
            for (let z in params.TableMonitorList) {
                let obj = new OverviewRow();
                obj.deserialize(params.TableMonitorList[z]);
                this.TableMonitorList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SchemaList) {
            this.SchemaList = new Array();
            for (let z in params.SchemaList) {
                let obj = new TableSchemaItem();
                obj.deserialize(params.SchemaList[z]);
                this.SchemaList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Node specifications type.
 * @class
 */
class NodeSpecInstanceType extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Specifications.</p>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * <p>4</p>
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * <p>8, unit: GB.</p>
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * <p>Sorting order. Smaller values come first.</p>
         * @type {number || null}
         */
        this.Order = null;

        /**
         * <p>Quantity.</p>
         * @type {number || null}
         */
        this.Num = null;

        /**
         * <p>Sold-out reason.</p>
         * @type {string || null}
         */
        this.SellOutReason = null;

        /**
         * <p>System disk.</p>
         * @type {Array.<NodeSpecDisk> || null}
         */
        this.SystemDisk = null;

        /**
         * <p>Data disk.</p>
         * @type {Array.<NodeSpecDisk> || null}
         */
        this.DataDisk = null;

        /**
         * <p>Local data disk.</p>
         * @type {Array.<NodeSpecDisk> || null}
         */
        this.LocalDataDisk = null;

        /**
         * <p>Sold-out reason.</p>
         * @type {string || null}
         */
        this.SoldOutReason = null;

        /**
         * <p>Instance family.</p>
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * <p>Node name.</p>
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * <p>Node type.</p>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * <p>Category.</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Category name.</p>
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * <p>Category classification.</p>
         * @type {string || null}
         */
        this.FamilyName = null;

        /**
         * <p>CPU type.</p>
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * <p>RunOut: sold out; Less: low inventory; Enough: sufficient inventory</p>
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * <p>Original price.</p>
         * @type {number || null}
         */
        this.OriginPrice = null;

        /**
         * <p>Purchase duration supported by instance types using the committed use billing mode.</p>
         * @type {Array.<number> || null}
         */
        this.PrepaidUnderwritePeriods = null;

        /**
         * <p>GPU information.</p>
         * @type {string || null}
         */
        this.GpuDesc = null;

        /**
         * <p>Number of quotas.</p>
         * @type {number || null}
         */
        this.QuotaNum = null;

        /**
         * <p>Quota unit.</p>
         * @type {string || null}
         */
        this.QuotaUnit = null;

        /**
         * <p>Whether a high-performance computing cluster needs to be provided.</p>
         * @type {boolean || null}
         */
        this.NeedHpcClusterId = null;

        /**
         * <p>Whether it is a GPU instance type.</p>
         * @type {boolean || null}
         */
        this.IsGpuInstance = null;

        /**
         * <p>GPU resource definition in the Kubernetes scenario.</p>
         * @type {string || null}
         */
        this.GpuResourceKey = null;

        /**
         * <p>Number of GPU cards.</p>
         * @type {number || null}
         */
        this.GpuNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Num = 'Num' in params ? params.Num : null;
        this.SellOutReason = 'SellOutReason' in params ? params.SellOutReason : null;

        if (params.SystemDisk) {
            this.SystemDisk = new Array();
            for (let z in params.SystemDisk) {
                let obj = new NodeSpecDisk();
                obj.deserialize(params.SystemDisk[z]);
                this.SystemDisk.push(obj);
            }
        }

        if (params.DataDisk) {
            this.DataDisk = new Array();
            for (let z in params.DataDisk) {
                let obj = new NodeSpecDisk();
                obj.deserialize(params.DataDisk[z]);
                this.DataDisk.push(obj);
            }
        }

        if (params.LocalDataDisk) {
            this.LocalDataDisk = new Array();
            for (let z in params.LocalDataDisk) {
                let obj = new NodeSpecDisk();
                obj.deserialize(params.LocalDataDisk[z]);
                this.LocalDataDisk.push(obj);
            }
        }
        this.SoldOutReason = 'SoldOutReason' in params ? params.SoldOutReason : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.FamilyName = 'FamilyName' in params ? params.FamilyName : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.OriginPrice = 'OriginPrice' in params ? params.OriginPrice : null;
        this.PrepaidUnderwritePeriods = 'PrepaidUnderwritePeriods' in params ? params.PrepaidUnderwritePeriods : null;
        this.GpuDesc = 'GpuDesc' in params ? params.GpuDesc : null;
        this.QuotaNum = 'QuotaNum' in params ? params.QuotaNum : null;
        this.QuotaUnit = 'QuotaUnit' in params ? params.QuotaUnit : null;
        this.NeedHpcClusterId = 'NeedHpcClusterId' in params ? params.NeedHpcClusterId : null;
        this.IsGpuInstance = 'IsGpuInstance' in params ? params.IsGpuInstance : null;
        this.GpuResourceKey = 'GpuResourceKey' in params ? params.GpuResourceKey : null;
        this.GpuNum = 'GpuNum' in params ? params.GpuNum : null;

    }
}

/**
 * Resource details.
 * @class
 */
class NodeResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Specifications type, such as S2.MEDIUM8.</p>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * <p>System disk. The number of system disks does not exceed 1.</p>
         * @type {Array.<DiskSpecInfo> || null}
         */
        this.SystemDisk = null;

        /**
         * <p>List of tags to be bound.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Cloud data disk. The total number of cloud data disks does not exceed 15.</p>
         * @type {Array.<DiskSpecInfo> || null}
         */
        this.DataDisk = null;

        /**
         * <p>Local data disk.</p>
         * @type {Array.<DiskSpecInfo> || null}
         */
        this.LocalDataDisk = null;

        /**
         * <p>Node configuration information. Currently provided only for the Terraform platform to validate parameters.</p>
         * @type {Array.<ServiceDeploy> || null}
         */
        this.SoftwareConfig = null;

        /**
         * <p>Custom hostname.</p>
         * @type {string || null}
         */
        this.CustomNodeName = null;

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

        if (params.SoftwareConfig) {
            this.SoftwareConfig = new Array();
            for (let z in params.SoftwareConfig) {
                let obj = new ServiceDeploy();
                obj.deserialize(params.SoftwareConfig[z]);
                this.SoftwareConfig.push(obj);
            }
        }
        this.CustomNodeName = 'CustomNodeName' in params ? params.CustomNodeName : null;

    }
}

/**
 * Cluster node topology information.
 * @class
 */
class TopologyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * AZ information.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Subnet information.
         * @type {Array.<SubnetInfo> || null}
         */
        this.SubnetInfoList = null;

        /**
         * Node information.
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
 * Process health status.
 * @class
 */
class HealthStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Running normally.
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Running normally.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * Running normally.
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * General parameters.
 * @class
 */
class Arg extends  AbstractModel {
    constructor(){
        super();

        /**
         * key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value list.
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
 * Service process information.
 * @class
 */
class ServiceNodeDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Process node IP address.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Process type.
         * @type {number || null}
         */
        this.NodeType = null;

        /**
         * Process name.
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Service component status.
         * @type {number || null}
         */
        this.ServiceStatus = null;

        /**
         * Process monitoring status.
         * @type {number || null}
         */
        this.MonitorStatus = null;

        /**
         * Service component status.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Process port information.
         * @type {string || null}
         */
        this.PortsInfo = null;

        /**
         * Latest restart time.
         * @type {string || null}
         */
        this.LastRestartTime = null;

        /**
         * Node type.
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * Configuration group ID.
         * @type {number || null}
         */
        this.ConfGroupId = null;

        /**
         * Configuration group name.
         * @type {string || null}
         */
        this.ConfGroupName = null;

        /**
         * Whether the node needs to be restarted.
         * @type {number || null}
         */
        this.ConfStatus = null;

        /**
         * Process detection information.
         * @type {Array.<ServiceProcessFunctionInfo> || null}
         */
        this.ServiceDetectionInfo = null;

        /**
         * Node type.
         * @type {string || null}
         */
        this.NodeFlagFilter = null;

        /**
         * Process health status.
         * @type {HealthStatus || null}
         */
        this.HealthStatus = null;

        /**
         * Whether the role supports monitoring.
         * @type {boolean || null}
         */
        this.IsSupportRoleMonitor = null;

        /**
         * Suspension policy.
         * @type {Array.<RestartPolicy> || null}
         */
        this.StopPolicies = null;

        /**
         * Strong validation of the API in a test environment. This strong validation does not exist on the current network, but it does exist in the data returned by the emrcc API. If it is not applied, an error will be reported.
         * @type {string || null}
         */
        this.HAState = null;

        /**
         * NameService name.
         * @type {string || null}
         */
        this.NameService = null;

        /**
         * Whether the federation is supported.
         * @type {boolean || null}
         */
        this.IsFederation = null;

        /**
         * Whether the DataNode is in the maintenance status.
         * @type {number || null}
         */
        this.DataNodeMaintenanceState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.ServiceStatus = 'ServiceStatus' in params ? params.ServiceStatus : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PortsInfo = 'PortsInfo' in params ? params.PortsInfo : null;
        this.LastRestartTime = 'LastRestartTime' in params ? params.LastRestartTime : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.ConfGroupId = 'ConfGroupId' in params ? params.ConfGroupId : null;
        this.ConfGroupName = 'ConfGroupName' in params ? params.ConfGroupName : null;
        this.ConfStatus = 'ConfStatus' in params ? params.ConfStatus : null;

        if (params.ServiceDetectionInfo) {
            this.ServiceDetectionInfo = new Array();
            for (let z in params.ServiceDetectionInfo) {
                let obj = new ServiceProcessFunctionInfo();
                obj.deserialize(params.ServiceDetectionInfo[z]);
                this.ServiceDetectionInfo.push(obj);
            }
        }
        this.NodeFlagFilter = 'NodeFlagFilter' in params ? params.NodeFlagFilter : null;

        if (params.HealthStatus) {
            let obj = new HealthStatus();
            obj.deserialize(params.HealthStatus)
            this.HealthStatus = obj;
        }
        this.IsSupportRoleMonitor = 'IsSupportRoleMonitor' in params ? params.IsSupportRoleMonitor : null;

        if (params.StopPolicies) {
            this.StopPolicies = new Array();
            for (let z in params.StopPolicies) {
                let obj = new RestartPolicy();
                obj.deserialize(params.StopPolicies[z]);
                this.StopPolicies.push(obj);
            }
        }
        this.HAState = 'HAState' in params ? params.HAState : null;
        this.NameService = 'NameService' in params ? params.NameService : null;
        this.IsFederation = 'IsFederation' in params ? params.IsFederation : null;
        this.DataNodeMaintenanceState = 'DataNodeMaintenanceState' in params ? params.DataNodeMaintenanceState : null;

    }
}

/**
 * Scheduling task details.
 * @class
 */
class SchedulerTaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step.
         * @type {string || null}
         */
        this.Step = null;

        /**
         * Progress.
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * Failure information.
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * ID used to obtain details.
         * @type {number || null}
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
        this.Step = 'Step' in params ? params.Step : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * AddMetricScaleStrategy request structure.
 * @class
 */
class AddMetricScaleStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 1 indicates scaling by load rules. 2 indicates scaling by time rules. This parameter is required and should match the following rule policy.
         * @type {number || null}
         */
        this.StrategyType = null;

        /**
         * Load-based scale-out rules.
         * @type {LoadAutoScaleStrategy || null}
         */
        this.LoadAutoScaleStrategy = null;

        /**
         * Time-based scaling rule.
         * @type {TimeAutoScaleStrategy || null}
         */
        this.TimeAutoScaleStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;

        if (params.LoadAutoScaleStrategy) {
            let obj = new LoadAutoScaleStrategy();
            obj.deserialize(params.LoadAutoScaleStrategy)
            this.LoadAutoScaleStrategy = obj;
        }

        if (params.TimeAutoScaleStrategy) {
            let obj = new TimeAutoScaleStrategy();
            obj.deserialize(params.TimeAutoScaleStrategy)
            this.TimeAutoScaleStrategy = obj;
        }

    }
}

/**
 * Pod affinity item.
 * @class
 */
class PodAffinityTerm extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Label selector.</p>
         * @type {LabelSelector || null}
         */
        this.LabelSelector = null;

        /**
         * <p>Namespace list.</p>
         * @type {Array.<string> || null}
         */
        this.Namespaces = null;

        /**
         * <p>Topology domain key.</p>
         * @type {string || null}
         */
        this.TopologyKey = null;

        /**
         * <p>Namespace selector.</p>
         * @type {LabelSelector || null}
         */
        this.NamespaceSelector = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LabelSelector) {
            let obj = new LabelSelector();
            obj.deserialize(params.LabelSelector)
            this.LabelSelector = obj;
        }
        this.Namespaces = 'Namespaces' in params ? params.Namespaces : null;
        this.TopologyKey = 'TopologyKey' in params ? params.TopologyKey : null;

        if (params.NamespaceSelector) {
            let obj = new LabelSelector();
            obj.deserialize(params.NamespaceSelector)
            this.NamespaceSelector = obj;
        }

    }
}

/**
 * ModifyUsersOfGroupSTD response structure.
 * @class
 */
class ModifyUsersOfGroupSTDResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether the modification is successful.</p>
         * @type {boolean || null}
         */
        this.Data = null;

        /**
         * <p>Flow ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.Data = 'Data' in params ? params.Data : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetYarnConfig response structure.
 * @class
 */
class ResetYarnConfigResponse extends  AbstractModel {
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
 * FlowParam: flow parameters.
 * @class
 */
class FlowParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow parameter key.
TraceId: Query by TraceId.
FlowId: Query by FlowId.
         * @type {string || null}
         */
        this.FKey = null;

        /**
         * Parameter value.
         * @type {string || null}
         */
        this.FValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FKey = 'FKey' in params ? params.FKey : null;
        this.FValue = 'FValue' in params ? params.FValue : null;

    }
}

/**
 * Prices of node components used for the cluster creation price list.
 * @class
 */
class PartDetailPriceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type. Valid values: node (node), rootDisk (system disk), dataDisk (cloud data disk), and metaDB.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Unit price (original price).
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Unit price (discounted price).
         * @type {number || null}
         */
        this.RealCost = null;

        /**
         * Total price (discounted price).
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * Discount.
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * Quantity.
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
 * InquiryPriceRenewInstance response structure.
 * @class
 */
class InquiryPriceRenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original price (CNY).
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price (CNY).
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * Time unit for instance renewal. Valid values:
<li>m: indicates month.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Price details.
         * @type {Array.<PriceDetail> || null}
         */
        this.PriceDetail = null;

        /**
         * Node renewal inquiry details list.
         * @type {Array.<NodeRenewPriceDetail> || null}
         */
        this.NodeRenewPriceDetails = null;

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

        if (params.NodeRenewPriceDetails) {
            this.NodeRenewPriceDetails = new Array();
            for (let z in params.NodeRenewPriceDetails) {
                let obj = new NodeRenewPriceDetail();
                obj.deserialize(params.NodeRenewPriceDetails[z]);
                this.NodeRenewPriceDetails.push(obj);
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
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Operation type. Valid values:
<li>StartService: Start the service.</li>
<li>StopService: Stop the service.</li>
<li>StartMonitor: Exit maintenance.</li>
<li>StopMonitor: Enter maintenance.</li>
<li>RestartService: Restart the service. If RestartService is selected as the operation type, StrategyConfig (operation policy) is required.</li>
         * @type {string || null}
         */
        this.OpType = null;

        /**
         * Operation scope.
         * @type {OpScope || null}
         */
        this.OpScope = null;

        /**
         * Operation policy.
         * @type {StrategyConfig || null}
         */
        this.StrategyConfig = null;

        /**
         * Parameters used for suspending services.
         * @type {StopParams || null}
         */
        this.StopParams = null;

        /**
         * This parameter is available only when OpType is <li>StopMonitor</li>. true indicates that the system enters the maintenance mode but still monitors processes without starting them.
         * @type {boolean || null}
         */
        this.KeepMonitorButNotRecoverProcess = null;

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

        if (params.StopParams) {
            let obj = new StopParams();
            obj.deserialize(params.StopParams)
            this.StopParams = obj;
        }
        this.KeepMonitorButNotRecoverProcess = 'KeepMonitorButNotRecoverProcess' in params ? params.KeepMonitorButNotRecoverProcess : null;

    }
}

/**
 * Overview data.
 * @class
 */
class OverviewMetricData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * First data timestamp.
         * @type {number || null}
         */
        this.First = null;

        /**
         * Last data timestamp.
         * @type {number || null}
         */
        this.Last = null;

        /**
         * Sampling point time interval.
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Sampling point data.
         * @type {Array.<string> || null}
         */
        this.DataPoints = null;

        /**
         * Metric tags.
         * @type {MetricTags || null}
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
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.First = 'First' in params ? params.First : null;
        this.Last = 'Last' in params ? params.Last : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.DataPoints = 'DataPoints' in params ? params.DataPoints : null;

        if (params.Tags) {
            let obj = new MetricTags();
            obj.deserialize(params.Tags)
            this.Tags = obj;
        }

    }
}

/**
 * Auto scaling record.
 * @class
 */
class AutoScaleRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Scaling rule name.</p>
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * <p>&quot;SCALE_OUT&quot; and &quot;SCALE_IN&quot;, indicating scale-out and scale-in, respectively.</p>
         * @type {string || null}
         */
        this.ScaleAction = null;

        /**
         * <p>The value is &quot;SUCCESS&quot;, &quot;FAILED&quot;, &quot;PART_SUCCESS&quot;, or &quot;IN_PROCESS&quot;, indicating success, failure, partial success, and in-process, respectively.</p>
         * @type {string || null}
         */
        this.ActionStatus = null;

        /**
         * <p>Flow trigger time.</p>
         * @type {string || null}
         */
        this.ActionTime = null;

        /**
         * <p>Scaling-related description.</p>
         * @type {string || null}
         */
        this.ScaleInfo = null;

        /**
         * <p>Valid only when ScaleAction is SCALE_OUT.</p>
         * @type {number || null}
         */
        this.ExpectScaleNum = null;

        /**
         * <p>Flow end time.</p>
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * <p>Policy type. Load-based scaling or time-based scaling. 1 indicates load-based scaling, and 2 indicates time-based scaling.</p>
         * @type {number || null}
         */
        this.StrategyType = null;

        /**
         * <p>Specifications information used during scale-out.</p>
         * @type {string || null}
         */
        this.SpecInfo = null;

        /**
         * <p>Compensatory scale-out. Valid values: 0 (disable) and 1 (enable).</p>
         * @type {number || null}
         */
        this.CompensateFlag = null;

        /**
         * <p>Number of compensations.</p>
         * @type {number || null}
         */
        this.CompensateCount = null;

        /**
         * <p>Number of retries.</p>
         * @type {number || null}
         */
        this.RetryCount = null;

        /**
         * <p>Retry information.</p>
         * @type {string || null}
         */
        this.RetryInfo = null;

        /**
         * <p>Retry description in English.</p>
         * @type {string || null}
         */
        this.RetryEnReason = null;

        /**
         * <p>Retry description.</p>
         * @type {string || null}
         */
        this.RetryReason = null;

        /**
         * <p>Missing category.</p>
         * @type {number || null}
         */
        this.ShortageClass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.ScaleAction = 'ScaleAction' in params ? params.ScaleAction : null;
        this.ActionStatus = 'ActionStatus' in params ? params.ActionStatus : null;
        this.ActionTime = 'ActionTime' in params ? params.ActionTime : null;
        this.ScaleInfo = 'ScaleInfo' in params ? params.ScaleInfo : null;
        this.ExpectScaleNum = 'ExpectScaleNum' in params ? params.ExpectScaleNum : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.SpecInfo = 'SpecInfo' in params ? params.SpecInfo : null;
        this.CompensateFlag = 'CompensateFlag' in params ? params.CompensateFlag : null;
        this.CompensateCount = 'CompensateCount' in params ? params.CompensateCount : null;
        this.RetryCount = 'RetryCount' in params ? params.RetryCount : null;
        this.RetryInfo = 'RetryInfo' in params ? params.RetryInfo : null;
        this.RetryEnReason = 'RetryEnReason' in params ? params.RetryEnReason : null;
        this.RetryReason = 'RetryReason' in params ? params.RetryReason : null;
        this.ShortageClass = 'ShortageClass' in params ? params.ShortageClass : null;

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
         * English ID of the EMR cluster.
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
 * COS storage volume.
 * @class
 */
class COSVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage volume name.
         * @type {string || null}
         */
        this.VolumeName = null;

        /**
         * Secret name.
         * @type {string || null}
         */
        this.Secret = null;

        /**
         * Region where the COS bucket is located.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Bucket name.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * COS subdirectory.
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
        this.VolumeName = 'VolumeName' in params ? params.VolumeName : null;
        this.Secret = 'Secret' in params ? params.Secret : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.SubPath = 'SubPath' in params ? params.SubPath : null;

    }
}

/**
 * DeleteNodeResourceConfig response structure.
 * @class
 */
class DeleteNodeResourceConfigResponse extends  AbstractModel {
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
 * ConvertPreToPostCluster response structure.
 * @class
 */
class ConvertPreToPostClusterResponse extends  AbstractModel {
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
 * Pod custom permission and parameter.
 * @class
 */
class PodNewParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * TKE or EKS cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Custom permission.
Example:
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
         * Custom parameter.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.Parameter = 'Parameter' in params ? params.Parameter : null;

    }
}

/**
 * ModifyResourcesTags response structure.
 * @class
 */
class ModifyResourcesTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of successful resource IDs.
         * @type {Array.<string> || null}
         */
        this.SuccessList = null;

        /**
         * List of failed resource IDs.
         * @type {Array.<string> || null}
         */
        this.FailList = null;

        /**
         * List of partially successful resource IDs.
         * @type {Array.<string> || null}
         */
        this.PartSuccessList = null;

        /**
         * Mapping list of cluster IDs and flow IDs.
         * @type {Array.<ClusterIDToFlowID> || null}
         */
        this.ClusterToFlowIdList = null;

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
        this.SuccessList = 'SuccessList' in params ? params.SuccessList : null;
        this.FailList = 'FailList' in params ? params.FailList : null;
        this.PartSuccessList = 'PartSuccessList' in params ? params.PartSuccessList : null;

        if (params.ClusterToFlowIdList) {
            this.ClusterToFlowIdList = new Array();
            for (let z in params.ClusterToFlowIdList) {
                let obj = new ClusterIDToFlowID();
                obj.deserialize(params.ClusterToFlowIdList[z]);
                this.ClusterToFlowIdList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration group specified for scale-out.
 * @class
 */
class ScaleOutServiceConfGroupsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Component version name, for example, HDFS-2.8.5.
         * @type {string || null}
         */
        this.ServiceComponentName = null;

        /**
         * Configuration group name, such as hdfs-core-defaultGroup. The ConfGroupName parameter is passed in to represent the configuration group dimension.
                                                             If the ConfGroupName parameter is not passed, the cluster dimension is used.
         * @type {string || null}
         */
        this.ConfGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceComponentName = 'ServiceComponentName' in params ? params.ServiceComponentName : null;
        this.ConfGroupName = 'ConfGroupName' in params ? params.ConfGroupName : null;

    }
}

/**
 * SetNodeResourceConfigDefault request structure.
 * @class
 */
class SetNodeResourceConfigDefaultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Configuration ID.
         * @type {number || null}
         */
        this.ResourceConfigId = null;

        /**
         * Specification node type. Valid values: CORE, TASK, and ROUTER.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Type. Valid values: ComputeResource and EMR. Default value: EMR.
         * @type {string || null}
         */
        this.ResourceBaseType = null;

        /**
         * Computing resource ID.
         * @type {string || null}
         */
        this.ComputeResourceId = null;

        /**
         * Hardware type.
         * @type {string || null}
         */
        this.HardwareResourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceConfigId = 'ResourceConfigId' in params ? params.ResourceConfigId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceBaseType = 'ResourceBaseType' in params ? params.ResourceBaseType : null;
        this.ComputeResourceId = 'ComputeResourceId' in params ? params.ComputeResourceId : null;
        this.HardwareResourceType = 'HardwareResourceType' in params ? params.HardwareResourceType : null;

    }
}

/**
 * DescribeDAGInfo request structure.
 * @class
 */
class DescribeDAGInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * DAG type. Only STARROCKS is supported currently.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Query ID list. The maximum length is 1.
         * @type {Array.<string> || null}
         */
        this.IDList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.IDList = 'IDList' in params ? params.IDList : null;

    }
}

/**
 * DescribeAutoScaleGroupGlobalConf response structure.
 * @class
 */
class DescribeAutoScaleGroupGlobalConfResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Global information of all scaling groups in the cluster.
         * @type {Array.<GroupGlobalConfs> || null}
         */
        this.GroupGlobalConfs = null;

        /**
         * Total number.
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

        if (params.GroupGlobalConfs) {
            this.GroupGlobalConfs = new Array();
            for (let z in params.GroupGlobalConfs) {
                let obj = new GroupGlobalConfs();
                obj.deserialize(params.GroupGlobalConfs[z]);
                this.GroupGlobalConfs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * Original price (CNY).
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price (CNY).
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * Time unit for the configuration change. Valid values:
<li>s: indicates second.</li>
<li>m: indicates month.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Price details.
         * @type {Array.<PriceDetail> || null}
         */
        this.PriceDetail = null;

        /**
         * Price of the new configuration.
         * @type {PriceResult || null}
         */
        this.NewConfigPrice = null;

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

        if (params.NewConfigPrice) {
            let obj = new PriceResult();
            obj.deserialize(params.NewConfigPrice)
            this.NewConfigPrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Resource description.
 * @class
 */
class NewResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Description of Master node resources.
         * @type {Resource || null}
         */
        this.MasterResourceSpec = null;

        /**
         * Description of Core node resources.
         * @type {Resource || null}
         */
        this.CoreResourceSpec = null;

        /**
         * Description of Task node resources.
         * @type {Resource || null}
         */
        this.TaskResourceSpec = null;

        /**
         * Number of Master nodes.
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * Number of Core nodes.
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * Number of Task nodes.
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * Description of Common node resources.
         * @type {Resource || null}
         */
        this.CommonResourceSpec = null;

        /**
         * Number of Common nodes.
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
 * ModifyYarnQueueV2 response structure.
 * @class
 */
class ModifyYarnQueueV2Response extends  AbstractModel {
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
 * ModifyInspectionSettings request structure.
 * @class
 */
class ModifyInspectionSettingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Inspection type. Valid values: FixedTime and RealTime.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Task configuration.
         * @type {Array.<InspectionTaskSettings> || null}
         */
        this.Settings = null;

        /**
         * Start timestamp.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End timestamp.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Inspection cycle, such as EveryDay, EveryWeek or EveryMonth.
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * Start time of each day.
         * @type {string || null}
         */
        this.Clock = null;

        /**
         * Day of the week.
         * @type {string || null}
         */
        this.DayOfWeek = null;

        /**
         * Day of the month.
         * @type {string || null}
         */
        this.DayOfMonth = null;

        /**
         * Inspection job ID.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Settings) {
            this.Settings = new Array();
            for (let z in params.Settings) {
                let obj = new InspectionTaskSettings();
                obj.deserialize(params.Settings[z]);
                this.Settings.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Clock = 'Clock' in params ? params.Clock : null;
        this.DayOfWeek = 'DayOfWeek' in params ? params.DayOfWeek : null;
        this.DayOfMonth = 'DayOfMonth' in params ? params.DayOfMonth : null;
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * Node renewal inquiry details.
 * @class
 */
class NodeRenewPriceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing mode. Valid values: 1 (monthly subscription) and 3 (committed use).
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * EMR resource ID.
         * @type {string || null}
         */
        this.EmrResourceId = null;

        /**
         * Node type.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Node private network IP address.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Current expiration time.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Original price.
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price.
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * Node sub-item renewal inquiry details list.
         * @type {Array.<RenewPriceDetail> || null}
         */
        this.RenewPriceDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.EmrResourceId = 'EmrResourceId' in params ? params.EmrResourceId : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;

        if (params.RenewPriceDetails) {
            this.RenewPriceDetails = new Array();
            for (let z in params.RenewPriceDetails) {
                let obj = new RenewPriceDetail();
                obj.deserialize(params.RenewPriceDetails[z]);
                this.RenewPriceDetails.push(obj);
            }
        }

    }
}

/**
 * Rule trigger condition.
 * @class
 */
class TriggerCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Condition comparison method. Valid values: 1 for greater than, 2 for less than, 3 for greater than or equal to, and 4 for less than or equal to.
         * @type {number || null}
         */
        this.CompareMethod = null;

        /**
         * Condition threshold.
         * @type {number || null}
         */
        this.Threshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompareMethod = 'CompareMethod' in params ? params.CompareMethod : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;

    }
}

/**
 * Node sub-item renewal inquiry details.
 * @class
 */
class RenewPriceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billable item name.
         * @type {string || null}
         */
        this.BillingName = null;

        /**
         * Discount.
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * Quantity.
         * @type {number || null}
         */
        this.Quantity = null;

        /**
         * Original price.
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price.
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
        this.BillingName = 'BillingName' in params ? params.BillingName : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;

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
         * English ID of the EMR cluster.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Old scheduler: fair.
         * @type {string || null}
         */
        this.OldValue = null;

        /**
         * New scheduler: capacity.
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
 * Login settings.
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance login password, with 8 to 16 characters, including uppercase letters, lowercase letters, digits, and special characters. Special characters only support !@%^*. The password cannot start with a special character.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Key ID. After a key is associated, the instance can be accessed with the corresponding private key; PublicKeyId can be obtained through the API [DescribeKeyPairs](https://www.tencentcloud.com/document/api/213/15699?from_cn_redirect=1).
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
 * Inquiry resources.
 * @class
 */
class PriceResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Required specifications.
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * Hard disk type.
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * Hard disk type.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * System disk size.
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * Memory size.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Hard disk size.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Cloud disk list.
         * @type {Array.<MultiDisk> || null}
         */
        this.MultiDisks = null;

        /**
         * Number of disks.
         * @type {number || null}
         */
        this.DiskCnt = null;

        /**
         * Specifications.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Tag.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Number of disks.
         * @type {number || null}
         */
        this.DiskNum = null;

        /**
         * Number of local disks.
         * @type {number || null}
         */
        this.LocalDiskNum = null;

        /**
         * GPU information.
         * @type {string || null}
         */
        this.GpuDesc = null;

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
        this.GpuDesc = 'GpuDesc' in params ? params.GpuDesc : null;

    }
}

/**
 * ModifySLInstance request structure.
 * @class
 */
class ModifySLInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance unique identifier (string).</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Name of the region to be changed.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Target number of nodes in this region after the configuration change. The total number of nodes in all regions should be greater than or equal to 3 and less than or equal to 50.</p>
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * <p>Unique random identifier with a time-to-live of 5 minutes, which needs to be specified by the caller to prevent the client from repeatedly creating resources, for example, a9a90aa6-<strong><strong>-</strong></strong>-****-fae360632808.</p>
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * <p>Storage space size. It must be a multiple of 100 and cannot be smaller than the current storage space (only scale-out is allowed).</p><p>Unit: GB.</p>
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * Additional container configuration.
 * @class
 */
class ContainerExtraConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Proxy access type for computing jobs, such as Spark jobs and the RayCluster UI. If not specified, Internal is used by default.</p><p>Enumeration values:</p><ul><li>Internal: access through the private network LB proxy.</li><li>Public: access through the public network LB proxy.</li><li>None: No LB proxy access is created.</li></ul>
         * @type {string || null}
         */
        this.JobAccessProxyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobAccessProxyType = 'JobAccessProxyType' in params ? params.JobAccessProxyType : null;

    }
}

/**
 * Resource details.
 * @class
 */
class ResourceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifications.
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * Specifications name.
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * Hard disk type.
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * Hard disk type.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * System disk size.
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * Memory size.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Hard disk size.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Specifications.
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
 * ModifyYarnQueueV2 request structure.
 * @class
 */
class ModifyYarnQueueV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Scheduler type. Valid values:

1. capacity
2. fair
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Resource pool data.
         * @type {Array.<ConfigModifyInfoV2> || null}
         */
        this.ConfigModifyInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;

        if (params.ConfigModifyInfoList) {
            this.ConfigModifyInfoList = new Array();
            for (let z in params.ConfigModifyInfoList) {
                let obj = new ConfigModifyInfoV2();
                obj.deserialize(params.ConfigModifyInfoList[z]);
                this.ConfigModifyInfoList.push(obj);
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
         * Cluster ID, such as emr-xxxxxxxx.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node identifier. Valid values:
<li>all: indicates retrieving all types of nodes, except CDB information.</li>
<li>master: indicates retrieving Master node information.</li>
<li>core: indicates retrieving Core node information.</li>
<li>task: indicates retrieving Task node information.</li>
<li>common: indicates retrieving Common node information.</li>
<li>router: indicates retrieving Router node information.</li>
<li>db: indicates retrieving CDB information in the normal status.</li>
<li>recyle: indicates retrieving information of nodes isolated in the recycle bin, including CDB information.</li>
<li>renew: indicates retrieving information of all nodes pending renewal, including CDB information. Auto-renewed nodes will not be returned.</li>
Note: Only the values above are supported currently. Entering other values will result in an error.
         * @type {string || null}
         */
        this.NodeFlag = null;

        /**
         * Whether to carry CDB information when all node information is exported in CSV format.
         * @type {boolean || null}
         */
        this.ExportDb = null;

        /**
         * Page number. The default value is 0, indicating the first page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items returned per page. Default value: 100. Maximum value: 100.
If both offset and limit are not set, or both are set to 0, all data will be returned.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Resource type. Valid values: all (default), host, and pod.
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * Searchable fields.
         * @type {Array.<SearchItem> || null}
         */
        this.SearchFields = null;

        /**
         * Sorting field.
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Whether to sort data in ascending order. Valid values: 1 (yes) and 0 (no).
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
        this.ExportDb = 'ExportDb' in params ? params.ExportDb : null;
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
 * Changed resource specifications.
 * @class
 */
class UpdateInstanceSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Memory capacity, in GB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.CPUCores = null;

        /**
         * Machine resource ID (EMR resource identifier).
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Changed machine specifications.
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
 * DescribeEmrOverviewMetrics response structure.
 * @class
 */
class DescribeEmrOverviewMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric data details.
         * @type {Array.<OverviewMetricData> || null}
         */
        this.Result = null;

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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new OverviewMetricData();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Binding usage information between clusters.
 * @class
 */
class ClusterRelationMeta extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster type.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * List of cluster IDs.
         * @type {Array.<string> || null}
         */
        this.ClusterIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterIdList = 'ClusterIdList' in params ? params.ClusterIdList : null;

    }
}

/**
 * Data volume directory settings.
 * @class
 */
class VolumeSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data volume type.
<li>HOST_PATH indicates support for the local path.</li>
<li>NEW_PVC indicates creating a PVC.</li>
For the data volume types supported by component roles, see the EMR on TKE cluster deployment instructions: [Deployment Instructions](https://www.tencentcloud.com/document/product/589/94254?from_cn_redirect=1).
         * @type {string || null}
         */
        this.VolumeType = null;

        /**
         * Host path information.
         * @type {HostPathVolumeSource || null}
         */
        this.HostPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumeType = 'VolumeType' in params ? params.VolumeType : null;

        if (params.HostPath) {
            let obj = new HostPathVolumeSource();
            obj.deserialize(params.HostPath)
            this.HostPath = obj;
        }

    }
}

/**
 * TerminateSLInstance response structure.
 * @class
 */
class TerminateSLInstanceResponse extends  AbstractModel {
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
 * Other account information.
 * @class
 */
class OtherAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of another account.
         * @type {string || null}
         */
        this.OtherUin = null;

        /**
         * Authorized role name of another account.
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OtherUin = 'OtherUin' in params ? params.OtherUin : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * DescribeAutoScaleStrategies request structure.
 * @class
 */
class DescribeAutoScaleStrategiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Scaling group ID.
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * Node disk type.
 * @class
 */
class NodeSpecDiskV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Disk type.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Specified disk size.
         * @type {number || null}
         */
        this.DefaultDiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DefaultDiskSize = 'DefaultDiskSize' in params ? params.DefaultDiskSize : null;

    }
}

/**
 * DeployYarnConf response structure.
 * @class
 */
class DeployYarnConfResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID after the flow is started. You can use the API [DescribeClusterFlowStatusDetail](https://www.tencentcloud.com/document/product/589/107224?from_cn_redirect=1) to obtain the flow status.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Additional flow information.
 * @class
 */
class FlowExtraDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Title of additional information.
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Additional information.
         * @type {Array.<FlowParamsDesc> || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new FlowParamsDesc();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

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
         * Duration of instance renewal. It is used together with TimeUnit. 1 indicates renewal for one month.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Instance billing mode. Only the value 1 is supported, indicating yearly/monthly subscription.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Resource ID list for nodes pending renewal. Resource ID format: emr-vm-xxxxxxxx. You can query valid resource IDs by logging in to the [console](https://console.cloud.tencent.com/emr).
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * Time unit for instance renewal. Valid values:
<li>m: indicates month.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Currency type. Valid values:
<li>CNY: RMB</li>
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Whether to convert from pay-as-you-go to yearly/monthly subscription. Valid values: 0 (no) and 1 (yes).
         * @type {number || null}
         */
        this.ModifyPayMode = null;

        /**
         * Whether to return the renewal price for each node.
         * @type {boolean || null}
         */
        this.NeedDetail = null;

        /**
         * Cluster ID. Specify this parameter if you need renewal information for all yearly/monthly subscription nodes in the cluster.
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
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Currency = 'Currency' in params ? params.Currency : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.ModifyPayMode = 'ModifyPayMode' in params ? params.ModifyPayMode : null;
        this.NeedDetail = 'NeedDetail' in params ? params.NeedDetail : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DynamicInstanceGroupSpec
 * @class
 */
class DynamicInstanceGroupSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Group name.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Number of Pods.</p>
         * @type {number || null}
         */
        this.PodCount = null;

        /**
         * <p>Minimum number of nodes.</p>
         * @type {number || null}
         */
        this.MinNodes = null;

        /**
         * <p>Maximum number of nodes.</p>
         * @type {number || null}
         */
        this.MaxNodes = null;

        /**
         * <p>Whether to enable storage configuration.</p>
         * @type {boolean || null}
         */
        this.StorageConfigEnabled = null;

        /**
         * <p>headGroup:head;<br>workerGroup:worker</p>
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * <p>Number of CPU cores.</p>
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * <p>Memory (GB).</p>
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * <p>GPU type.</p>
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * <p>Number of GPU cores.</p>
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * <p>Resource label.</p>
         * @type {string || null}
         */
        this.ResourceLabels = null;

        /**
         * <p>Environment variable.</p>
         * @type {Array.<NameValue> || null}
         */
        this.Env = null;

        /**
         * <p>Tag.</p>
         * @type {Array.<NameValue> || null}
         */
        this.Labels = null;

        /**
         * <p>Tolerations.</p>
         * @type {Array.<Toleration> || null}
         */
        this.Tolerations = null;

        /**
         * <p>Scheduling policy.</p>
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * <p>Volume directory.</p>
         * @type {PersistentVolume || null}
         */
        this.PersistentVolume = null;

        /**
         * <p>Pre-start command.</p>
         * @type {string || null}
         */
        this.PreStartCommand = null;

        /**
         * <p>RayStart startup parameters.</p>
         * @type {string || null}
         */
        this.RayStartParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.PodCount = 'PodCount' in params ? params.PodCount : null;
        this.MinNodes = 'MinNodes' in params ? params.MinNodes : null;
        this.MaxNodes = 'MaxNodes' in params ? params.MaxNodes : null;
        this.StorageConfigEnabled = 'StorageConfigEnabled' in params ? params.StorageConfigEnabled : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.ResourceLabels = 'ResourceLabels' in params ? params.ResourceLabels : null;

        if (params.Env) {
            this.Env = new Array();
            for (let z in params.Env) {
                let obj = new NameValue();
                obj.deserialize(params.Env[z]);
                this.Env.push(obj);
            }
        }

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new NameValue();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Tolerations) {
            this.Tolerations = new Array();
            for (let z in params.Tolerations) {
                let obj = new Toleration();
                obj.deserialize(params.Tolerations[z]);
                this.Tolerations.push(obj);
            }
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;

        if (params.PersistentVolume) {
            let obj = new PersistentVolume();
            obj.deserialize(params.PersistentVolume)
            this.PersistentVolume = obj;
        }
        this.PreStartCommand = 'PreStartCommand' in params ? params.PreStartCommand : null;
        this.RayStartParams = 'RayStartParams' in params ? params.RayStartParams : null;

    }
}

/**
 * Node tag information.
 * @class
 */
class NodeMark extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node type. Valid values: master, core, task, and router.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Node tag information: currently only used for the Terraform platform. It serves as an input parameter to differentiate information of nodes of the same type.
         * @type {Array.<string> || null}
         */
        this.NodeNames = null;

        /**
         * AZ name.
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeNames = 'NodeNames' in params ? params.NodeNames : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * Multi-cloud disk parameter.
 * @class
 */
class MultiDiskMC extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of cloud disks of this type.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Disk type.
1: Local Basic Disk
2: Cloud Basic Disk
3: Local SSD
4: Cloud SSD
5: Premium Disk
6: Enhanced SSD
11: Throughput-Optimized Cloud Disk
12: Tremendous SSD
13: Balanced SSD
14: Big Data Cloud Disk
15: High-IO Cloud Disk
16: Remote SSD Disk
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Disk size.
         * @type {string || null}
         */
        this.Size = null;

        /**
         * Cloud disk size (bytes).
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
        this.Size = 'Size' in params ? params.Size : null;
        this.Volume = 'Volume' in params ? params.Volume : null;

    }
}

/**
 * User-built Hive-MetaDB information.
 * @class
 */
class CustomMetaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom MetaDB JDBC connection, which starts with jdbc:mysql://.
         * @type {string || null}
         */
        this.MetaDataJdbcUrl = null;

        /**
         * Custom MetaDB username.
         * @type {string || null}
         */
        this.MetaDataUser = null;

        /**
         * Custom MetaDB password.
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
 * DeleteGroupsSTD request structure.
 * @class
 */
class DeleteGroupsSTDRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Cluster name.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Array of user group names.</p>
         * @type {Array.<string> || null}
         */
        this.GroupNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupNames = 'GroupNames' in params ? params.GroupNames : null;

    }
}

/**
 * CBS instance information.
 * @class
 */
class CBSInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk ID.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Cloud disk type.
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Cloud disk name.
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * Cloud disk size.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Cloud disk media type.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Whether to delete it with the instance.
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * Cloud disk billing mode.
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * Cloud disk running status.
         * @type {string || null}
         */
        this.DiskState = null;

        /**
         * Whether to perform auto-renewal.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Expiration time.
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * Whether the cloud disk is mounted on the CVM.
         * @type {boolean || null}
         */
        this.Attached = null;

        /**
         * Days remaining until disk expiration.
         * @type {number || null}
         */
        this.DifferDaysOfDeadline = null;

        /**
         * ID of the CVM instance to which this cloud disk is currently mounted.
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * ID of the CVM to which the cloud disk is mounted.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether the cloud disk is a shared cloud disk.
         * @type {boolean || null}
         */
        this.Shareable = null;

        /**
         * EMR node ID.
         * @type {string || null}
         */
        this.EmrResourceId = null;

        /**
         * Committed use expiration time.
         * @type {string || null}
         */
        this.UnderwriteExpiredTime = null;

        /**
         * Tag.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Cloud disk additional performance value. Unit: MB/s.
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
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.DiskName = 'DiskName' in params ? params.DiskName : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;
        this.DiskState = 'DiskState' in params ? params.DiskState : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.Attached = 'Attached' in params ? params.Attached : null;
        this.DifferDaysOfDeadline = 'DifferDaysOfDeadline' in params ? params.DifferDaysOfDeadline : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Shareable = 'Shareable' in params ? params.Shareable : null;
        this.EmrResourceId = 'EmrResourceId' in params ? params.EmrResourceId : null;
        this.UnderwriteExpiredTime = 'UnderwriteExpiredTime' in params ? params.UnderwriteExpiredTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ThroughputPerformance = 'ThroughputPerformance' in params ? params.ThroughputPerformance : null;

    }
}

/**
 * DescribeAutoScaleStrategies response structure.
 * @class
 */
class DescribeAutoScaleStrategiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Load-based scaling rule.
         * @type {Array.<LoadAutoScaleStrategy> || null}
         */
        this.LoadAutoScaleStrategies = null;

        /**
         * Time-based scaling rule.
         * @type {Array.<TimeAutoScaleStrategy> || null}
         */
        this.TimeBasedAutoScaleStrategies = null;

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

        if (params.LoadAutoScaleStrategies) {
            this.LoadAutoScaleStrategies = new Array();
            for (let z in params.LoadAutoScaleStrategies) {
                let obj = new LoadAutoScaleStrategy();
                obj.deserialize(params.LoadAutoScaleStrategies[z]);
                this.LoadAutoScaleStrategies.push(obj);
            }
        }

        if (params.TimeBasedAutoScaleStrategies) {
            this.TimeBasedAutoScaleStrategies = new Array();
            for (let z in params.TimeBasedAutoScaleStrategies) {
                let obj = new TimeAutoScaleStrategy();
                obj.deserialize(params.TimeBasedAutoScaleStrategies[z]);
                this.TimeBasedAutoScaleStrategies.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Shared component information.
 * @class
 */
class ExternalService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared component type. Valid values: EMR and CUSTOM.
         * @type {string || null}
         */
        this.ShareType = null;

        /**
         * Shared component name.
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Shared component cluster.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Custom parameter collection.
         * @type {Array.<CustomServiceDefine> || null}
         */
        this.CustomServiceDefineList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShareType = 'ShareType' in params ? params.ShareType : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.CustomServiceDefineList) {
            this.CustomServiceDefineList = new Array();
            for (let z in params.CustomServiceDefineList) {
                let obj = new CustomServiceDefine();
                obj.deserialize(params.CustomServiceDefineList[z]);
                this.CustomServiceDefineList.push(obj);
            }
        }

    }
}

/**
 * CreateDynamicInstance response structure.
 * @class
 */
class CreateDynamicInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Asynchronous flow ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoScaleStrategy response structure.
 * @class
 */
class ModifyAutoScaleStrategyResponse extends  AbstractModel {
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
 * InquiryPriceScaleOutInstance request structure.
 * @class
 */
class InquiryPriceScaleOutInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Time unit for the scale-out. Valid values:</p><li>s: indicates seconds. When PayMode is set to 0, TimeUnit can only be set to s.</li><li>m: indicates months. When PayMode is set to 1, TimeUnit can only be set to m.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * <p>Scale-out duration, which is used together with TimeUnit.</p><li>When TimeUnit is set to s, this parameter can only be set to 3600, indicating a pay-as-you-go instance.</li><li>When TimeUnit is set to m, the value set for this parameter indicates the subscription duration of the instance. For example, 1 indicates a one-month subscription.</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * <p>ID of the AZ to which the instance belongs, for example, 100003. This parameter can be obtained from the ZoneId field in the response of <a href="https://www.tencentcloud.com/document/api/213/15707?from_cn_redirect=1">DescribeZones</a>.</p>
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * <p>Instance billing mode. Valid values:</p><li>0: pay-as-you-go</li><li>1: yearly/monthly subscription</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Number of Core nodes to be scaled out.</p>
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * <p>Number of Task nodes to be scaled out.</p>
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * <p>Currency type. Valid values:</p><li>CNY: RMB</li>
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * <p>Number of Router nodes to be scaled out.</p>
         * @type {number || null}
         */
        this.RouterCount = null;

        /**
         * <p>Number of Master nodes to be scaled out.</p>
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * <p>The type can be ComputeResource, EMR, or a default value. The default value is EMR.</p>
         * @type {string || null}
         */
        this.ResourceBaseType = null;

        /**
         * <p>Computing resource ID.</p>
         * @type {string || null}
         */
        this.ComputeResourceId = null;

        /**
         * <p>Scale-out resource type.</p>
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * <p>Node group ID.</p>
         * @type {string || null}
         */
        this.NodeGroupId = null;

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
        this.ResourceBaseType = 'ResourceBaseType' in params ? params.ResourceBaseType : null;
        this.ComputeResourceId = 'ComputeResourceId' in params ? params.ComputeResourceId : null;
        this.HardwareResourceType = 'HardwareResourceType' in params ? params.HardwareResourceType : null;
        this.NodeGroupId = 'NodeGroupId' in params ? params.NodeGroupId : null;

    }
}

/**
 * Load metric.
 * @class
 */
class LoadMetricsConditions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule trigger condition.
         * @type {Array.<LoadMetricsCondition> || null}
         */
        this.LoadMetrics = null;

        /**
         * 0: All conditions are met.
1: Any one of the conditions is met.
         * @type {number || null}
         */
        this.Match = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoadMetrics) {
            this.LoadMetrics = new Array();
            for (let z in params.LoadMetrics) {
                let obj = new LoadMetricsCondition();
                obj.deserialize(params.LoadMetrics[z]);
                this.LoadMetrics.push(obj);
            }
        }
        this.Match = 'Match' in params ? params.Match : null;

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
         * Job statistics information.
         * @type {Array.<ApplicationStatics> || null}
         */
        this.Statics = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Available queue names.
         * @type {Array.<string> || null}
         */
        this.Queues = null;

        /**
         * Available usernames.
         * @type {Array.<string> || null}
         */
        this.Users = null;

        /**
         * Available job types.
         * @type {Array.<string> || null}
         */
        this.ApplicationTypes = null;

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
 * Node instance type.
 * @class
 */
class NodeSpecType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type series.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Instance type series name.
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * Sorting order.
         * @type {number || null}
         */
        this.Order = null;

        /**
         * Array of instance families.
         * @type {Array.<NodeSpecFamily> || null}
         */
        this.InstanceFamilies = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.Order = 'Order' in params ? params.Order : null;

        if (params.InstanceFamilies) {
            this.InstanceFamilies = new Array();
            for (let z in params.InstanceFamilies) {
                let obj = new NodeSpecFamily();
                obj.deserialize(params.InstanceFamilies[z]);
                this.InstanceFamilies.push(obj);
            }
        }

    }
}

/**
 * Spark task list.
 * @class
 */
class SparkApplicationsList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Application name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * User.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Duration.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Status.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Type.
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * Number of cores multiplied by seconds.
         * @type {number || null}
         */
        this.CoreSeconds = null;

        /**
         * Memory MB multiplied by seconds.
         * @type {string || null}
         */
        this.MemorySeconds = null;

        /**
         * Insight result.
         * @type {string || null}
         */
        this.Insight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.User = 'User' in params ? params.User : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.State = 'State' in params ? params.State : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.CoreSeconds = 'CoreSeconds' in params ? params.CoreSeconds : null;
        this.MemorySeconds = 'MemorySeconds' in params ? params.MemorySeconds : null;
        this.Insight = 'Insight' in params ? params.Insight : null;

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
         * <p>Original price (CNY).</p>
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * <p>Discounted price (CNY).</p>
         * @type {string || null}
         */
        this.DiscountCost = null;

        /**
         * <p>Time unit for the scale-out. Valid values:</p><li>s: indicates second.</li><li>m: indicates month.</li>
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * <p>Node specifications for price inquiry.</p>
         * @type {PriceResource || null}
         */
        this.PriceSpec = null;

        /**
         * <p>Price inquiry results for multiple specifications in the input parameter MultipleResources. Other output parameters return the inquiry result of the first specifications.</p>
         * @type {Array.<EmrPrice> || null}
         */
        this.MultipleEmrPrice = null;

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
 * Pod node selector requirement.
 * @class
 */
class NodeSelectorRequirement extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key of the node selector requirement.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Operator value of the node selector requirement. Supported operators: In, NotIn, Exists, DoesNotExist, Gt, and Lt.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Values of the node selector requirement.
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeExportConfs response structure.
 * @class
 */
class DescribeExportConfsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Exports configuration parameters.</p>
         * @type {Array.<ExportConfMeta> || null}
         */
        this.ExportConfParamList = null;

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

        if (params.ExportConfParamList) {
            this.ExportConfParamList = new Array();
            for (let z in params.ExportConfParamList) {
                let obj = new ExportConfMeta();
                obj.deserialize(params.ExportConfParamList[z]);
                this.ExportConfParamList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EMR inquiry description.
 * @class
 */
class EmrPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * List price.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price.
         * @type {string || null}
         */
        this.DiscountCost = null;

        /**
         * Unit.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Price inquiry configuration.
         * @type {PriceResource || null}
         */
        this.PriceSpec = null;

        /**
         * Whether spot instances are supported.
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
 * Node hardware information.
 * @class
 */
class NodeHardwareInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>User APPID.</p>
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * <p>Serial number.</p>
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * <p>Machine instance ID.</p>
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * <p>Public IP address bound to the Master node.</p>
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * <p>Node type. Valid values: 0 (Common node), 1 (Master node)<br>2 (Core node) and 3 (Task node).</p>
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * <p>Node specifications.</p>
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * <p>Number of node cores.</p>
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * <p>Node memory (bytes).</p>
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * <p>Node memory description (GB).</p>
         * @type {string || null}
         */
        this.MemDesc = null;

        /**
         * <p>Region where the node is located.</p>
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * <p>Zone where the node is located.</p>
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * <p>Application time.</p>
         * @type {string || null}
         */
        this.ApplyTime = null;

        /**
         * <p>Release time.</p>
         * @type {string || null}
         */
        this.FreeTime = null;

        /**
         * <p>Hard disk size.</p>
         * @type {string || null}
         */
        this.DiskSize = null;

        /**
         * <p>Node description.</p>
         * @type {string || null}
         */
        this.NameTag = null;

        /**
         * <p>Services deployed on the node.</p>
         * @type {string || null}
         */
        this.Services = null;

        /**
         * <p>Disk type. Valid values: 1 (Local Basic Disk), 2 (Cloud Basic Disk), 3 (Local SSD), 4 (Cloud SSD), 5 (Premium Disk), 6 (Enhanced SSD), 11 (Throughput-Optimized Cloud Disk), 12 (Tremendous SSD), 13 (Balanced SSD), 14 (Big Data Cloud Disk), 15 (High-IO Cloud Disk), and 16 (Remote SSD Disk).</p>
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * <p>System disk size (GB).</p>
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * <p>Payment type. Valid values: 0 (pay-as-you-go) and 1 (yearly/monthly subscription).</p>
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * <p>Database IP address.</p>
         * @type {string || null}
         */
        this.CdbIp = null;

        /**
         * <p>Database port.</p>
         * @type {number || null}
         */
        this.CdbPort = null;

        /**
         * <p>Hard disk capacity (bytes).</p>
         * @type {number || null}
         */
        this.HwDiskSize = null;

        /**
         * <p>Hard disk capacity description.</p>
         * @type {string || null}
         */
        this.HwDiskSizeDesc = null;

        /**
         * <p>Memory capacity (bytes).</p>
         * @type {number || null}
         */
        this.HwMemSize = null;

        /**
         * <p>Memory capacity description.</p>
         * @type {string || null}
         */
        this.HwMemSizeDesc = null;

        /**
         * <p>Expiration time.</p>
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * <p>Node resource ID.</p>
         * @type {string || null}
         */
        this.EmrResourceId = null;

        /**
         * <p>Renewal flag.</p>
         * @type {number || null}
         */
        this.IsAutoRenew = null;

        /**
         * <p>Device identifier.</p>
         * @type {string || null}
         */
        this.DeviceClass = null;

        /**
         * <p>Supports configuration change.</p>
         * @type {number || null}
         */
        this.Mutable = null;

        /**
         * <p>Multi-cloud disk.</p>
         * @type {Array.<MultiDiskMC> || null}
         */
        this.MCMultiDisk = null;

        /**
         * <p>Database information.</p>
         * @type {CdbInfo || null}
         */
        this.CdbNodeInfo = null;

        /**
         * <p>Private IP address.</p>
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * <p>Whether this node can be terminated. Valid values: 1 (yes) and 0 (no).</p>
         * @type {number || null}
         */
        this.Destroyable = null;

        /**
         * <p>Tag bound to the node.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Whether it is an auto scaling node. Valid values: 0 (regular node) and 1 (auto scaling node).</p>
         * @type {number || null}
         */
        this.AutoFlag = null;

        /**
         * <p>Resource type. Valid values: host and pod.</p>
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * <p>Whether it is a floating specification. Valid values: 1 (yes) and 0 (no).</p>
         * @type {number || null}
         */
        this.IsDynamicSpec = null;

        /**
         * <p>JSON string of the floating specification value.</p>
         * @type {string || null}
         */
        this.DynamicPodSpec = null;

        /**
         * <p>Whether changing the billing mode is supported. Valid values: 1 (yes) and 0 (no).</p>
         * @type {number || null}
         */
        this.SupportModifyPayMode = null;

        /**
         * <p>System disk type. Valid values: 1 (Local Basic Disk), 2 (Cloud Basic Disk), 3 (Local SSD), 4 (Cloud SSD), 5 (Premium Disk), 6 (Enhanced SSD), 11 (Throughput-Optimized Cloud Disk), 12 (Tremendous SSD), 13 (Balanced SSD), 14 (Big Data Cloud Disk), 15 (High-IO Cloud Disk), and 16 (Remote SSD Disk).</p>
         * @type {number || null}
         */
        this.RootStorageType = null;

        /**
         * <p>AZ information.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Subnet.</p>
         * @type {SubnetInfo || null}
         */
        this.SubnetInfo = null;

        /**
         * <p>Client.</p>
         * @type {string || null}
         */
        this.Clients = null;

        /**
         * <p>Current system time.</p>
         * @type {string || null}
         */
        this.CurrentTime = null;

        /**
         * <p>Whether it is used for federation. Valid values: 1 (yes) and 0 (no).</p>
         * @type {number || null}
         */
        this.IsFederation = null;

        /**
         * <p>Device name.</p>
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * <p>Service.</p>
         * @type {string || null}
         */
        this.ServiceClient = null;

        /**
         * <p>Whether instance protection is enabled for this instance. Valid values: true (enabled) and false (disabled).</p>
         * @type {boolean || null}
         */
        this.DisableApiTermination = null;

        /**
         * <p>0 indicates the old billing mode, and 1 indicates the new billing mode.</p>
         * @type {number || null}
         */
        this.TradeVersion = null;

        /**
         * <p>Status of each component. ZooKeeper: STARTED; ResourceManager: STARTED. STARTED means started, and STOPPED means stopped.</p>
         * @type {string || null}
         */
        this.ServicesStatus = null;

        /**
         * <p>Remarks.</p>
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * <p>Shared cluster ID.</p>
         * @type {string || null}
         */
        this.SharedClusterId = null;

        /**
         * <p>Description of the shared cluster ID.</p>
         * @type {string || null}
         */
        this.SharedClusterIdDesc = null;

        /**
         * <p>Whether it is a scheduled termination resource.</p>
         * @type {boolean || null}
         */
        this.TimingResource = null;

        /**
         * <p>TKE cluster ID when the resource type (HardwareResourceType) is pod.</p>
         * @type {string || null}
         */
        this.TkeClusterId = null;

        /**
         * <p>Name list of services that can be configured when a new disk is mounted.</p>
         * @type {Array.<string> || null}
         */
        this.ConfigurableServices = null;

        /**
         * <p>Node annotation information, which is currently only provided for the Terraform platform.</p>
         * @type {string || null}
         */
        this.NodeMark = null;

        /**
         * <p>Whether the committed use resource supports setting auto-renewal.</p>
         * @type {boolean || null}
         */
        this.UnderwriteSetAutoRenew = null;

        /**
         * <p>GPU information.</p>
         * @type {string || null}
         */
        this.GpuDesc = null;

        /**
         * <p>Disk issue description.</p>
         * @type {Array.<DiskHealthIssue> || null}
         */
        this.DiskHealthIssues = null;

        /**
         * <p>ID of the node group where the node resides.</p>
         * @type {string || null}
         */
        this.NodeGroupId = null;

        /**
         * <p>Name of the node group where the node resides.</p>
         * @type {string || null}
         */
        this.NodeGroupName = null;

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
        this.ServicesStatus = 'ServicesStatus' in params ? params.ServicesStatus : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.SharedClusterId = 'SharedClusterId' in params ? params.SharedClusterId : null;
        this.SharedClusterIdDesc = 'SharedClusterIdDesc' in params ? params.SharedClusterIdDesc : null;
        this.TimingResource = 'TimingResource' in params ? params.TimingResource : null;
        this.TkeClusterId = 'TkeClusterId' in params ? params.TkeClusterId : null;
        this.ConfigurableServices = 'ConfigurableServices' in params ? params.ConfigurableServices : null;
        this.NodeMark = 'NodeMark' in params ? params.NodeMark : null;
        this.UnderwriteSetAutoRenew = 'UnderwriteSetAutoRenew' in params ? params.UnderwriteSetAutoRenew : null;
        this.GpuDesc = 'GpuDesc' in params ? params.GpuDesc : null;

        if (params.DiskHealthIssues) {
            this.DiskHealthIssues = new Array();
            for (let z in params.DiskHealthIssues) {
                let obj = new DiskHealthIssue();
                obj.deserialize(params.DiskHealthIssues[z]);
                this.DiskHealthIssues.push(obj);
            }
        }
        this.NodeGroupId = 'NodeGroupId' in params ? params.NodeGroupId : null;
        this.NodeGroupName = 'NodeGroupName' in params ? params.NodeGroupName : null;

    }
}

/**
 * Scope of service operations.
 * @class
 */
class ServiceBasicRestartInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service name, required. Example: HDFS.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * If not provided, it indicates all processes.
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
 * TerminateClusterNodes request structure.
 * @class
 */
class TerminateClusterNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of terminated resources.
         * @type {Array.<string> || null}
         */
        this.CvmInstanceIds = null;

        /**
         * Valid values of the node type to be terminated:
  <li>MASTER</li>
  <li>TASK</li>
  <li>CORE</li>
  <li>ROUTER</li>
         * @type {string || null}
         */
        this.NodeFlag = null;

        /**
         * Graceful scale-in switch.
  <li>true: enable</li>
  <li>false: disable</li>
         * @type {boolean || null}
         */
        this.GraceDownFlag = null;

        /**
         * Graceful scale-in waiting time. Value range: 60–1800, in seconds.
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
 * Custom query filter for instances in the EMR cluster list.
 * @class
 */
class Filters extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter field value.
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
 * ModifyServiceParamsByExportConfs response structure.
 * @class
 */
class ModifyServiceParamsByExportConfsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 
         * @type {Array.<ConfSubContext> || null}
         */
        this.WaitModifyConfList = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.WaitModifyConfList) {
            this.WaitModifyConfList = new Array();
            for (let z in params.WaitModifyConfList) {
                let obj = new ConfSubContext();
                obj.deserialize(params.WaitModifyConfList[z]);
                this.WaitModifyConfList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance prepayment parameter. This parameter is valid only when the payment type is PREPAID.
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Yearly/monthly subscription duration. Default value: 1. Unit: month.Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, and 60.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether to enable auto-renewal, which defaults to no.
<li>true: yes</li>
<li>false: no</li>
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

/**
 * Node affinity settings.
 * @class
 */
class NodeAffinity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node affinity - forced scheduling settings.
         * @type {NodeSelector || null}
         */
        this.RequiredDuringSchedulingIgnoredDuringExecution = null;

        /**
         * Node affinity - tolerance scheduling.
         * @type {Array.<PreferredSchedulingTerm> || null}
         */
        this.PreferredDuringSchedulingIgnoredDuringExecution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RequiredDuringSchedulingIgnoredDuringExecution) {
            let obj = new NodeSelector();
            obj.deserialize(params.RequiredDuringSchedulingIgnoredDuringExecution)
            this.RequiredDuringSchedulingIgnoredDuringExecution = obj;
        }

        if (params.PreferredDuringSchedulingIgnoredDuringExecution) {
            this.PreferredDuringSchedulingIgnoredDuringExecution = new Array();
            for (let z in params.PreferredDuringSchedulingIgnoredDuringExecution) {
                let obj = new PreferredSchedulingTerm();
                obj.deserialize(params.PreferredDuringSchedulingIgnoredDuringExecution[z]);
                this.PreferredDuringSchedulingIgnoredDuringExecution.push(obj);
            }
        }

    }
}

/**
 * Weighted Pod affinity item.
 * @class
 */
class WeightedPodAffinityTerm extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Weight.</p>
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * <p>Pod affinity condition.</p>
         * @type {PodAffinityTerm || null}
         */
        this.PodAffinityTerm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Weight = 'Weight' in params ? params.Weight : null;

        if (params.PodAffinityTerm) {
            let obj = new PodAffinityTerm();
            obj.deserialize(params.PodAffinityTerm)
            this.PodAffinityTerm = obj;
        }

    }
}

module.exports = {
    AddNodeResourceConfigRequest: AddNodeResourceConfigRequest,
    SchedulerTaskInfo: SchedulerTaskInfo,
    TerminateTasksRequest: TerminateTasksRequest,
    DescribeEMREventListResponse: DescribeEMREventListResponse,
    DiskSpecInfo: DiskSpecInfo,
    NodeSpecFamily: NodeSpecFamily,
    KeyValue: KeyValue,
    DescribeEMREventListRequest: DescribeEMREventListRequest,
    DescribeTrinoQueryInfoResponse: DescribeTrinoQueryInfoResponse,
    SparkQuery: SparkQuery,
    DynamicPodSpec: DynamicPodSpec,
    CustomImage: CustomImage,
    DescribeDynamicInstanceDetailResponse: DescribeDynamicInstanceDetailResponse,
    GpuImageDriverSpec: GpuImageDriverSpec,
    ResetYarnConfigRequest: ResetYarnConfigRequest,
    ComputeResourceAdvanceParams: ComputeResourceAdvanceParams,
    ServiceDeployInfo: ServiceDeployInfo,
    DescribeServiceNodeInfosResponse: DescribeServiceNodeInfosResponse,
    AttachDisksRequest: AttachDisksRequest,
    Tag: Tag,
    ClusterIDToFlowID: ClusterIDToFlowID,
    AddUsersForUserManagerResponse: AddUsersForUserManagerResponse,
    DeleteNodeResourceConfigRequest: DeleteNodeResourceConfigRequest,
    DiffHeader: DiffHeader,
    TerminateTasksResponse: TerminateTasksResponse,
    DescribeSparkQueriesResponse: DescribeSparkQueriesResponse,
    InstallSoftwareRequest: InstallSoftwareRequest,
    CFSVolume: CFSVolume,
    DescribeInspectionTaskResultRequest: DescribeInspectionTaskResultRequest,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    DescribeHDFSStorageInfoRequest: DescribeHDFSStorageInfoRequest,
    LoadAutoScaleStrategy: LoadAutoScaleStrategy,
    DescribeMetaDBInfoResponse: DescribeMetaDBInfoResponse,
    WebUIInfo: WebUIInfo,
    PrePaySetting: PrePaySetting,
    DescribeGlobalConfigResponse: DescribeGlobalConfigResponse,
    PodParameter: PodParameter,
    AllNodeResourceSpec: AllNodeResourceSpec,
    Taint: Taint,
    StrategyConfig: StrategyConfig,
    ModifyResourceRequest: ModifyResourceRequest,
    ImagePullSecret: ImagePullSecret,
    DescribeBootScriptResponse: DescribeBootScriptResponse,
    PodVolume: PodVolume,
    MultiDisk: MultiDisk,
    DescribeHBaseTableRequestMetricRequest: DescribeHBaseTableRequestMetricRequest,
    NodeSpecDisk: NodeSpecDisk,
    ModifyInspectionSettingsResponse: ModifyInspectionSettingsResponse,
    ScaleOutClusterRequest: ScaleOutClusterRequest,
    ServiceDeploy: ServiceDeploy,
    DescribeHiveQueriesRequest: DescribeHiveQueriesRequest,
    ResultItem: ResultItem,
    CreateClusterResponse: CreateClusterResponse,
    DAGInfo: DAGInfo,
    AddMetricScaleStrategyResponse: AddMetricScaleStrategyResponse,
    DescribeNodeResourceConfigFastRequest: DescribeNodeResourceConfigFastRequest,
    NodeResource: NodeResource,
    InsightResult: InsightResult,
    DescribeSLInstanceListResponse: DescribeSLInstanceListResponse,
    ModifyDynamicInstanceResponse: ModifyDynamicInstanceResponse,
    DescribeServiceConfGroupInfosRequest: DescribeServiceConfGroupInfosRequest,
    InquiryPriceUpdateInstanceRequest: InquiryPriceUpdateInstanceRequest,
    DescribeDynamicInstanceDetailRequest: DescribeDynamicInstanceDetailRequest,
    AttachDisksResponse: AttachDisksResponse,
    WeekRepeatStrategy: WeekRepeatStrategy,
    CLBSetting: CLBSetting,
    DescribeSparkQueriesRequest: DescribeSparkQueriesRequest,
    Period: Period,
    DescribeEmrApplicationStaticsRequest: DescribeEmrApplicationStaticsRequest,
    DescribeUsersForUserManagerResponse: DescribeUsersForUserManagerResponse,
    DescribeResourceScheduleDiffDetailRequest: DescribeResourceScheduleDiffDetailRequest,
    CdbInfo: CdbInfo,
    PriceDetail: PriceDetail,
    DescribeSLInstanceRequest: DescribeSLInstanceRequest,
    ModifyAutoRenewFlagRequest: ModifyAutoRenewFlagRequest,
    AddNodeResourceConfigResponse: AddNodeResourceConfigResponse,
    ModifyResourceScheduleConfigRequest: ModifyResourceScheduleConfigRequest,
    UserInfoForUserManager: UserInfoForUserManager,
    LabelSelector: LabelSelector,
    DeleteAutoScaleStrategyResponse: DeleteAutoScaleStrategyResponse,
    RestartPolicy: RestartPolicy,
    ClusterExternalServiceInfo: ClusterExternalServiceInfo,
    SoftDependInfo: SoftDependInfo,
    NodeSelector: NodeSelector,
    CustomMetaDBInfo: CustomMetaDBInfo,
    DescribeStarRocksQueryInfoResponse: DescribeStarRocksQueryInfoResponse,
    StageInfoDetail: StageInfoDetail,
    ModifyResourceSchedulerResponse: ModifyResourceSchedulerResponse,
    SceneSoftwareConfig: SceneSoftwareConfig,
    ShortNodeInfo: ShortNodeInfo,
    NameValue: NameValue,
    DescribeAutoScaleRecordsRequest: DescribeAutoScaleRecordsRequest,
    DescribeHBaseTableRequestMetricResponse: DescribeHBaseTableRequestMetricResponse,
    Toleration: Toleration,
    DescribeEmrOverviewMetricsRequest: DescribeEmrOverviewMetricsRequest,
    ModifyResourceResponse: ModifyResourceResponse,
    PodSpecInfo: PodSpecInfo,
    ModifyUserGroupResponse: ModifyUserGroupResponse,
    DescribeHDFSStorageInfoResponse: DescribeHDFSStorageInfoResponse,
    ModifyGlobalConfigResponse: ModifyGlobalConfigResponse,
    CreateGroupsSTDResponse: CreateGroupsSTDResponse,
    HostVolumeContext: HostVolumeContext,
    HiveQuery: HiveQuery,
    FairGlobalConfig: FairGlobalConfig,
    PodNewSpec: PodNewSpec,
    EmrProductConfigDetail: EmrProductConfigDetail,
    ExternalAccess: ExternalAccess,
    VolumeMount: VolumeMount,
    ZoneSetting: ZoneSetting,
    TrinoQueryInfo: TrinoQueryInfo,
    Dps: Dps,
    OverviewRow: OverviewRow,
    ModifySLInstanceBasicRequest: ModifySLInstanceBasicRequest,
    DefaultSetting: DefaultSetting,
    COSSettings: COSSettings,
    CreateSLInstanceRequest: CreateSLInstanceRequest,
    ScaleOutInstanceRequest: ScaleOutInstanceRequest,
    KyuubiQueryInfo: KyuubiQueryInfo,
    ModifyAutoScaleStrategyRequest: ModifyAutoScaleStrategyRequest,
    ConfSubContext: ConfSubContext,
    DescribeGroupsSTDRequest: DescribeGroupsSTDRequest,
    DescribeKyuubiQueryInfoResponse: DescribeKyuubiQueryInfoResponse,
    DiffDetail: DiffDetail,
    Disk: Disk,
    TimeAutoScaleStrategy: TimeAutoScaleStrategy,
    DescribeBootScriptRequest: DescribeBootScriptRequest,
    EmrProductConfigOutter: EmrProductConfigOutter,
    HostPathVolumeSource: HostPathVolumeSource,
    OperationLog: OperationLog,
    DescribeServiceConfGroupInfosResponse: DescribeServiceConfGroupInfosResponse,
    PodSpec: PodSpec,
    DescribeInstanceOplogRequest: DescribeInstanceOplogRequest,
    InspectionTaskSettings: InspectionTaskSettings,
    GroupInfo: GroupInfo,
    ModifyYarnDeployRequest: ModifyYarnDeployRequest,
    DescribeClusterFlowStatusDetailRequest: DescribeClusterFlowStatusDetailRequest,
    SubnetInfo: SubnetInfo,
    DescribeDAGInfoResponse: DescribeDAGInfoResponse,
    DescribeHiveQueriesResponse: DescribeHiveQueriesResponse,
    CreateDynamicInstanceRequest: CreateDynamicInstanceRequest,
    SearchItem: SearchItem,
    DiskHealthIssue: DiskHealthIssue,
    StringMap: StringMap,
    CreateClusterRequest: CreateClusterRequest,
    CreateSLInstanceResponse: CreateSLInstanceResponse,
    ImageInfo: ImageInfo,
    SLInstance: SLInstance,
    DescribeClusterNodesResponse: DescribeClusterNodesResponse,
    TerminateInstanceResponse: TerminateInstanceResponse,
    ModifyBootScriptResponse: ModifyBootScriptResponse,
    ModifyResourceTags: ModifyResourceTags,
    DescribeResourceScheduleResponse: DescribeResourceScheduleResponse,
    ModifyServiceParamsByExportConfsRequest: ModifyServiceParamsByExportConfsRequest,
    EMREventListItem: EMREventListItem,
    LabelSelectorRequirement: LabelSelectorRequirement,
    DescribeKyuubiQueryInfoRequest: DescribeKyuubiQueryInfoRequest,
    GooseFSVolume: GooseFSVolume,
    DescribeNodeResourceConfigFastResponse: DescribeNodeResourceConfigFastResponse,
    DescribeInsightListResponse: DescribeInsightListResponse,
    DescribeAutoScaleRecordsResponse: DescribeAutoScaleRecordsResponse,
    TkeLabel: TkeLabel,
    GroupGlobalConfs: GroupGlobalConfs,
    DescribeInspectionTaskResultResponse: DescribeInspectionTaskResultResponse,
    ComponentBasicRestartInfo: ComponentBasicRestartInfo,
    CreateInstanceRequest: CreateInstanceRequest,
    DiffDetailItem: DiffDetailItem,
    AutoScaleGroupAdvanceAttrs: AutoScaleGroupAdvanceAttrs,
    ScriptBootstrapActionConfig: ScriptBootstrapActionConfig,
    InstallSoftwareResponse: InstallSoftwareResponse,
    NodeSelectorTerm: NodeSelectorTerm,
    ModifyUsersOfGroupSTDRequest: ModifyUsersOfGroupSTDRequest,
    ItemSeq: ItemSeq,
    OutterResource: OutterResource,
    PreferredSchedulingTerm: PreferredSchedulingTerm,
    DeleteAutoScaleStrategyRequest: DeleteAutoScaleStrategyRequest,
    DescribeInstancesListResponse: DescribeInstancesListResponse,
    ExportConfMeta: ExportConfMeta,
    ZoneResourceConfiguration: ZoneResourceConfiguration,
    NotRepeatStrategy: NotRepeatStrategy,
    ConfigurationItem: ConfigurationItem,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    DescribeSLInstanceResponse: DescribeSLInstanceResponse,
    CBSVolume: CBSVolume,
    TagInfo: TagInfo,
    DescribeBootScriptRsp: DescribeBootScriptRsp,
    ModifySLInstanceResponse: ModifySLInstanceResponse,
    ModifyGlobalConfigRequest: ModifyGlobalConfigRequest,
    DescribeHBaseTableStoreSizeMetricResponse: DescribeHBaseTableStoreSizeMetricResponse,
    HBaseMetricData: HBaseMetricData,
    LoadMetricsCondition: LoadMetricsCondition,
    SetNodeResourceConfigDefaultResponse: SetNodeResourceConfigDefaultResponse,
    TableSchemaItem: TableSchemaItem,
    DescribeDynamicInstanceListRequest: DescribeDynamicInstanceListRequest,
    ModifyInstanceBasicResponse: ModifyInstanceBasicResponse,
    Filter: Filter,
    ArchitectureInfo: ArchitectureInfo,
    DescribeTrinoQueryInfoRequest: DescribeTrinoQueryInfoRequest,
    DescribeResourceConfig: DescribeResourceConfig,
    DescribeSparkApplicationsResponse: DescribeSparkApplicationsResponse,
    TopologySpreadConstraint: TopologySpreadConstraint,
    ScaleOutInstanceResponse: ScaleOutInstanceResponse,
    ModifyUserManagerPwdResponse: ModifyUserManagerPwdResponse,
    TerminateDynamicInstancesRequest: TerminateDynamicInstancesRequest,
    CreateInstanceResponse: CreateInstanceResponse,
    DescribeServiceNodeInfosRequest: DescribeServiceNodeInfosRequest,
    DescribeHBaseTableStoreSizeMetricRequest: DescribeHBaseTableStoreSizeMetricRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    PriceResult: PriceResult,
    TerminateDynamicInstancesResponse: TerminateDynamicInstancesResponse,
    UserManagerFilter: UserManagerFilter,
    ExportConfContext: ExportConfContext,
    DescribeInstanceOplogResponse: DescribeInstanceOplogResponse,
    ZoneDetailPriceResult: ZoneDetailPriceResult,
    DescribeAutoScaleGroupGlobalConfRequest: DescribeAutoScaleGroupGlobalConfRequest,
    PreExecuteFileSetting: PreExecuteFileSetting,
    ModifyResourceScheduleConfigResponse: ModifyResourceScheduleConfigResponse,
    NodeDetailPriceResult: NodeDetailPriceResult,
    DescribeDynamicInstanceListResponse: DescribeDynamicInstanceListResponse,
    EmrListInstance: EmrListInstance,
    DescribeResourceScheduleDiffDetailResponse: DescribeResourceScheduleDiffDetailResponse,
    DescribeYarnQueueResponse: DescribeYarnQueueResponse,
    CreateGroupsSTDRequest: CreateGroupsSTDRequest,
    ConvertPreToPostClusterRequest: ConvertPreToPostClusterRequest,
    DescribeNodeDataDisksRequest: DescribeNodeDataDisksRequest,
    StopParams: StopParams,
    DependService: DependService,
    CloudResource: CloudResource,
    StarRocksQueryInfo: StarRocksQueryInfo,
    ModifyBootScriptRequest: ModifyBootScriptRequest,
    FlowParamsDesc: FlowParamsDesc,
    ModifyYarnDeployResponse: ModifyYarnDeployResponse,
    DescribeMetaDBInfoRequest: DescribeMetaDBInfoRequest,
    UserManagerUserBriefInfo: UserManagerUserBriefInfo,
    Placement: Placement,
    ComponentDeployInfo: ComponentDeployInfo,
    DescribeUsersForUserManagerRequest: DescribeUsersForUserManagerRequest,
    ConfigSetInfo: ConfigSetInfo,
    DescribeNodeSpecRequest: DescribeNodeSpecRequest,
    DescribeYarnScheduleHistoryRequest: DescribeYarnScheduleHistoryRequest,
    StartStopServiceOrMonitorResponse: StartStopServiceOrMonitorResponse,
    DescribeYarnQueueRequest: DescribeYarnQueueRequest,
    DynamicInstanceGroup: DynamicInstanceGroup,
    ModifyAutoRenewFlagResponse: ModifyAutoRenewFlagResponse,
    DescribeYarnScheduleHistoryResponse: DescribeYarnScheduleHistoryResponse,
    DescribeInsightListRequest: DescribeInsightListRequest,
    MultiZoneSetting: MultiZoneSetting,
    PersistentVolumeContext: PersistentVolumeContext,
    ScaleOutNodeConfig: ScaleOutNodeConfig,
    ModifyResourcesTagsRequest: ModifyResourcesTagsRequest,
    TaskSettings: TaskSettings,
    MetricTags: MetricTags,
    TerminateClusterNodesResponse: TerminateClusterNodesResponse,
    CustomServiceDefine: CustomServiceDefine,
    DescribeSLInstanceListRequest: DescribeSLInstanceListRequest,
    DeleteGroupsSTDResponse: DeleteGroupsSTDResponse,
    ModifyDynamicInstanceForm: ModifyDynamicInstanceForm,
    ModifyUserGroupRequest: ModifyUserGroupRequest,
    CapacityGlobalConfig: CapacityGlobalConfig,
    DescribeInstancesRequest: DescribeInstancesRequest,
    DayRepeatStrategy: DayRepeatStrategy,
    DeployYarnConfRequest: DeployYarnConfRequest,
    DescribeGroupsSTDResponse: DescribeGroupsSTDResponse,
    DescribeNodeDataDisksResponse: DescribeNodeDataDisksResponse,
    DescribeInstancesListRequest: DescribeInstancesListRequest,
    RepeatStrategy: RepeatStrategy,
    OpScope: OpScope,
    ImageInfoV2: ImageInfoV2,
    VPCSettings: VPCSettings,
    ModifyInstanceBasicRequest: ModifyInstanceBasicRequest,
    AddUsersForUserManagerRequest: AddUsersForUserManagerRequest,
    StorageSummaryDistribution: StorageSummaryDistribution,
    ApplicationStatics: ApplicationStatics,
    TerminateInstanceRequest: TerminateInstanceRequest,
    PodAffinitySpec: PodAffinitySpec,
    ServiceProcessFunctionInfo: ServiceProcessFunctionInfo,
    PreExecuteFileSettings: PreExecuteFileSettings,
    StorageVolumeDetail: StorageVolumeDetail,
    TerminateSLInstanceRequest: TerminateSLInstanceRequest,
    DescribeNodeSpecResponse: DescribeNodeSpecResponse,
    DescribeStarRocksQueryInfoRequest: DescribeStarRocksQueryInfoRequest,
    Resource: Resource,
    ResizeDataDisksResponse: ResizeDataDisksResponse,
    RayCluster: RayCluster,
    Item: Item,
    ModifySLInstanceBasicResponse: ModifySLInstanceBasicResponse,
    ConfigModifyInfoV2: ConfigModifyInfoV2,
    DynamicInstanceForm: DynamicInstanceForm,
    Order: Order,
    GroupInfos: GroupInfos,
    VirtualPrivateCloud: VirtualPrivateCloud,
    ResizeDataDisksRequest: ResizeDataDisksRequest,
    ScaleOutClusterResponse: ScaleOutClusterResponse,
    CFSTurboVolume: CFSTurboVolume,
    AutoScaleResourceConf: AutoScaleResourceConf,
    DescribeGlobalConfigRequest: DescribeGlobalConfigRequest,
    PersistentVolume: PersistentVolume,
    MonthRepeatStrategy: MonthRepeatStrategy,
    RedisInstance: RedisInstance,
    DescribeHBaseTableOverviewRequest: DescribeHBaseTableOverviewRequest,
    DescribeClusterFlowStatusDetailResponse: DescribeClusterFlowStatusDetailResponse,
    DescribeSparkApplicationsRequest: DescribeSparkApplicationsRequest,
    DescribeNodeSpec: DescribeNodeSpec,
    DescribeExportConfsRequest: DescribeExportConfsRequest,
    ModifyDynamicInstanceRequest: ModifyDynamicInstanceRequest,
    SLInstanceInfo: SLInstanceInfo,
    ModifyUserManagerPwdRequest: ModifyUserManagerPwdRequest,
    ClusterInstancesInfo: ClusterInstancesInfo,
    DescribeHBaseTableOverviewResponse: DescribeHBaseTableOverviewResponse,
    NodeSpecInstanceType: NodeSpecInstanceType,
    NodeResourceSpec: NodeResourceSpec,
    TopologyInfo: TopologyInfo,
    HealthStatus: HealthStatus,
    Arg: Arg,
    ServiceNodeDetailInfo: ServiceNodeDetailInfo,
    SchedulerTaskDetail: SchedulerTaskDetail,
    AddMetricScaleStrategyRequest: AddMetricScaleStrategyRequest,
    PodAffinityTerm: PodAffinityTerm,
    ModifyUsersOfGroupSTDResponse: ModifyUsersOfGroupSTDResponse,
    ResetYarnConfigResponse: ResetYarnConfigResponse,
    FlowParam: FlowParam,
    PartDetailPriceItem: PartDetailPriceItem,
    InquiryPriceRenewInstanceResponse: InquiryPriceRenewInstanceResponse,
    StartStopServiceOrMonitorRequest: StartStopServiceOrMonitorRequest,
    OverviewMetricData: OverviewMetricData,
    AutoScaleRecord: AutoScaleRecord,
    DescribeResourceScheduleRequest: DescribeResourceScheduleRequest,
    COSVolume: COSVolume,
    DeleteNodeResourceConfigResponse: DeleteNodeResourceConfigResponse,
    ConvertPreToPostClusterResponse: ConvertPreToPostClusterResponse,
    PodNewParameter: PodNewParameter,
    ModifyResourcesTagsResponse: ModifyResourcesTagsResponse,
    ScaleOutServiceConfGroupsInfo: ScaleOutServiceConfGroupsInfo,
    SetNodeResourceConfigDefaultRequest: SetNodeResourceConfigDefaultRequest,
    DescribeDAGInfoRequest: DescribeDAGInfoRequest,
    DescribeAutoScaleGroupGlobalConfResponse: DescribeAutoScaleGroupGlobalConfResponse,
    InquiryPriceUpdateInstanceResponse: InquiryPriceUpdateInstanceResponse,
    NewResourceSpec: NewResourceSpec,
    ModifyYarnQueueV2Response: ModifyYarnQueueV2Response,
    ModifyInspectionSettingsRequest: ModifyInspectionSettingsRequest,
    NodeRenewPriceDetail: NodeRenewPriceDetail,
    TriggerCondition: TriggerCondition,
    RenewPriceDetail: RenewPriceDetail,
    ModifyResourceSchedulerRequest: ModifyResourceSchedulerRequest,
    LoginSettings: LoginSettings,
    PriceResource: PriceResource,
    ModifySLInstanceRequest: ModifySLInstanceRequest,
    ContainerExtraConf: ContainerExtraConf,
    ResourceDetail: ResourceDetail,
    ModifyYarnQueueV2Request: ModifyYarnQueueV2Request,
    DescribeClusterNodesRequest: DescribeClusterNodesRequest,
    UpdateInstanceSettings: UpdateInstanceSettings,
    DescribeEmrOverviewMetricsResponse: DescribeEmrOverviewMetricsResponse,
    ClusterRelationMeta: ClusterRelationMeta,
    VolumeSetting: VolumeSetting,
    TerminateSLInstanceResponse: TerminateSLInstanceResponse,
    OtherAccountInfo: OtherAccountInfo,
    DescribeAutoScaleStrategiesRequest: DescribeAutoScaleStrategiesRequest,
    NodeSpecDiskV2: NodeSpecDiskV2,
    DeployYarnConfResponse: DeployYarnConfResponse,
    FlowExtraDetail: FlowExtraDetail,
    InquiryPriceRenewInstanceRequest: InquiryPriceRenewInstanceRequest,
    DynamicInstanceGroupSpec: DynamicInstanceGroupSpec,
    NodeMark: NodeMark,
    MultiDiskMC: MultiDiskMC,
    CustomMetaInfo: CustomMetaInfo,
    DeleteGroupsSTDRequest: DeleteGroupsSTDRequest,
    CBSInstance: CBSInstance,
    DescribeAutoScaleStrategiesResponse: DescribeAutoScaleStrategiesResponse,
    ExternalService: ExternalService,
    CreateDynamicInstanceResponse: CreateDynamicInstanceResponse,
    ModifyAutoScaleStrategyResponse: ModifyAutoScaleStrategyResponse,
    InquiryPriceScaleOutInstanceRequest: InquiryPriceScaleOutInstanceRequest,
    LoadMetricsConditions: LoadMetricsConditions,
    DescribeEmrApplicationStaticsResponse: DescribeEmrApplicationStaticsResponse,
    NodeSpecType: NodeSpecType,
    SparkApplicationsList: SparkApplicationsList,
    InquiryPriceScaleOutInstanceResponse: InquiryPriceScaleOutInstanceResponse,
    NodeSelectorRequirement: NodeSelectorRequirement,
    DescribeExportConfsResponse: DescribeExportConfsResponse,
    EmrPrice: EmrPrice,
    NodeHardwareInfo: NodeHardwareInfo,
    ServiceBasicRestartInfo: ServiceBasicRestartInfo,
    TerminateClusterNodesRequest: TerminateClusterNodesRequest,
    Filters: Filters,
    ModifyServiceParamsByExportConfsResponse: ModifyServiceParamsByExportConfsResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    NodeAffinity: NodeAffinity,
    WeightedPodAffinityTerm: WeightedPodAffinityTerm,

}
