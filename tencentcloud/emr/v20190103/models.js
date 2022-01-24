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
         * Password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Public Key
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
 * Resource queried for price
 * @class
 */
class PriceResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target specification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Spec = null;

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
         * Number of cores
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
         * List of cloud disks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MultiDisk> || null}
         */
        this.MultiDisks = null;

        /**
         * Number of disks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskCnt = null;

        /**
         * Specification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Tag
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Number of disks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskNum = null;

        /**
         * Number of local disks
Note: this field may return null, indicating that no valid values can be obtained.
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
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * Client token.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Scaling workflow ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Big order number.
Note: this field may return null, indicating that no valid values can be obtained.
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
         * Node specification queried for price.
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

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

        if (params.ResourceSpec) {
            let obj = new NewResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.Software = 'Software' in params ? params.Software : null;

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
 * Pod storage device description.
 * @class
 */
class PodVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage type. Valid values: "pvc", "hostpath".
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VolumeType = null;

        /**
         * This field will take effect if `VolumeType` is `pvc`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PersistentVolumeContext || null}
         */
        this.PVCVolume = null;

        /**
         * This field will take effect if `VolumeType` is `hostpath`.
Note: this field may return null, indicating that no valid values can be obtained.
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
 * Resource description for container resource expansion
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
         * Purpose of the resource, i.e., node type, which currently can only be "TASK".
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size in GB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Mount point of resources for the host. The specified mount point corresponds to the host path and is used as the data storage directory in the pod. (This parameter has been disused)
         * @type {Array.<string> || null}
         */
        this.DataVolumes = null;

        /**
         * EKS cluster - CPU type. Valid values: "intel", "amd"
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * Pod node data directory mounting information.
         * @type {Array.<PodVolume> || null}
         */
        this.PodVolumes = null;

        /**
         * Whether floating specification is used. `1`: yes; `0`: no
         * @type {number || null}
         */
        this.IsDynamicSpec = null;

        /**
         * Floating specification
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {DynamicPodSpec || null}
         */
        this.DynamicPodSpec = null;

        /**
         * Unique VPC ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Unique VPC subnet ID
Note: this field may return `null`, indicating that no valid values can be obtained.
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
 * Pod `HostPath` mounting method description
 * @class
 */
class HostVolumeContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * Directory in the pod for mounting the host, which is the mount point of resources for the host. The specified mount point corresponds to the host path and is used as the data storage directory in the pod.
Note: this field may return null, indicating that no valid values can be obtained.
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
 * CreateInstance request structure.
 * @class
 */
class CreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID. Different product IDs represent different EMR product versions. Valid values:
<li>1: EMR v1.3.1</li>
<li>2: EMR v2.0.1</li>
<li>4: EMR v2.1.0</li>
<li>7: EMR v3.0.0</li>
<li>9: EMR v2.2.0</li>
<li>11: ClickHouse v1.0.0</li>
<li>13: Druid v1.0.0</li>
<li>15: EMR v2.2.1</li>
<li>16: EMR v2.3.0</li>
<li>17: ClickHouse v1.1.0</li>
<li>19: EMR v2.4.0</li>
<li>20: EMR v2.5.0</li>
<li>22: ClickHouse v1.2.0</li>
<li>24: EMR TianQiong v1.0.0</li>
<li>25: EMR v3.1.0</li>
<li>26: Doris v1.0.0</li>
<li>27: Kafka v1.0.0</li>
<li>28: EMR v3.2.0</li>
<li>29: EMR v2.5.1</li>
<li>30: EMR v2.6.0</li>
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * Configuration information of VPC. This parameter is used to specify the VPC ID, subnet ID, etc.
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * List of deployed components. The list of component options varies by EMR product ID (i.e., `ProductId`; for specific meanings, please see the `ProductId` input parameter). For more information, please see [Component Version](https://intl.cloud.tencent.com/document/product/589/20279?from_cn_redirect=1).
Enter an instance value: `hive` or `flink`.
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * Node resource specification.
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

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
         * Instance location. This parameter is used to specify the AZ, project, and other attributes of the instance.
         * @type {Placement || null}
         */
        this.Placement = null;

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
         * Parameter required for enabling COS access.
         * @type {COSSettings || null}
         */
        this.COSSettings = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }
        this.Software = 'Software' in params ? params.Software : null;

        if (params.ResourceSpec) {
            let obj = new NewResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.COSSettings) {
            let obj = new COSSettings();
            obj.deserialize(params.COSSettings)
            this.COSSettings = obj;
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
 * InquiryPriceScaleOutInstance request structure.
 * @class
 */
class InquiryPriceScaleOutInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time unit of scale-out. Valid values:
<li>s: seconds. When `PayMode` is 0, `TimeUnit` can only be `s`.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Duration of scale-out, which needs to be used together with `TimeUnit`.
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
         * Instance billing mode. Valid values:
<li>0: pay-as-you-go.</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of core nodes added.
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * Number of task nodes added.
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * Currency.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Number of router nodes added.
         * @type {number || null}
         */
        this.RouterCount = null;

        /**
         * Number of master nodes to add
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
 * Location information of cluster instance
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the project to which the instance belongs. This parameter can be obtained from the `projectId` field in the return value of the `DescribeProject` API. If 0 is entered, the default project will be used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * AZ where the instance resides, such as ap-guangzhou-1. You can call the `DescribeZones` API and see the `Zone` field to get the value of this parameter.
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

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
         * Minimum number of CPU cores
         * @type {number || null}
         */
        this.RequestCpu = null;

        /**
         * Maximum number of CPU cores
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
 * Custom pod permission and parameter
 * @class
 */
class PodParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * TKE or EKS cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Custom permission
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
         * Custom parameter
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
 * InquiryPriceScaleOutInstance response structure.
 * @class
 */
class InquiryPriceScaleOutInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * Discounted price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiscountCost = null;

        /**
         * Time unit of scale-out. Valid values:
<li>s: seconds.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Node specification queried for price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PriceResource || null}
         */
        this.PriceSpec = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Pod `PVC` storage method description
 * @class
 */
class PersistentVolumeContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disk size in GB
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Disk type. Valid values: CLOUD_PREMIUM, CLOUD_SSD
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Number of disks
Note: this field may return null, indicating that no valid values can be obtained.
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
 * ScaleOutInstance request structure.
 * @class
 */
class ScaleOutInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time unit of scale-out. Valid values:
<li>s: seconds. When `PayMode` is 0, `TimeUnit` can only be `s`.</li>
<li>m: month. When `PayMode` is 1, `TimeUnit` can only be `m`.</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Duration of scale-out, which needs to be used together with `TimeUnit`.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance billing mode. Valid values:
<li>0: pay-as-you-go.</li>
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
         * Number of task nodes added.
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * Number of core nodes added.
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * Process not required during scale-out.
         * @type {Array.<number> || null}
         */
        this.UnNecessaryNodeList = null;

        /**
         * Number of router nodes added.
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
         * Resource type selected for scaling. Valid values: `host` (general CVM resource), `pod` (resource provided by TKE or EKS cluster)
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * Specified information such as pod specification and source for expansion with pod resources
         * @type {PodSpec || null}
         */
        this.PodSpec = null;

        /**
         * Machine group name selected for ClickHouse cluster scaling-out
         * @type {string || null}
         */
        this.ClickHouseClusterName = null;

        /**
         * Machine group type selected for ClickHouse cluster scaling-out. new: creates a group; old: selects an existing group
         * @type {string || null}
         */
        this.ClickHouseClusterType = null;

        /**
         * YARN node label specified for rule-based scaling-out
         * @type {string || null}
         */
        this.YarnNodeLabel = null;

        /**
         * Custom pod permission and parameter
         * @type {PodParameter || null}
         */
        this.PodParameter = null;

        /**
         * Number of master nodes to be added
When a ClickHouse cluster is scaled, this parameter does not take effect.
When a Kafka cluster is scaled, this parameter does not take effect.
When `HardwareResourceType` is `pod`, this parameter does not take effect.
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * Whether to start the service after scaling. `true`: yes; `false`: no
         * @type {string || null}
         */
        this.StartServiceAfterScaleOut = null;

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

    }
}

module.exports = {
    MultiDiskMC: MultiDiskMC,
    EmrProductConfigOutter: EmrProductConfigOutter,
    LoginSettings: LoginSettings,
    VPCSettings: VPCSettings,
    PriceResource: PriceResource,
    ScaleOutInstanceResponse: ScaleOutInstanceResponse,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    CustomServiceDefine: CustomServiceDefine,
    Resource: Resource,
    TerminateInstanceRequest: TerminateInstanceRequest,
    PodVolume: PodVolume,
    TerminateInstanceResponse: TerminateInstanceResponse,
    CreateInstanceResponse: CreateInstanceResponse,
    PodSpec: PodSpec,
    InquiryPriceRenewInstanceResponse: InquiryPriceRenewInstanceResponse,
    TerminateTasksRequest: TerminateTasksRequest,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    HostVolumeContext: HostVolumeContext,
    ExternalService: ExternalService,
    DescribeClusterNodesRequest: DescribeClusterNodesRequest,
    PreExecuteFileSettings: PreExecuteFileSettings,
    CreateInstanceRequest: CreateInstanceRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    InquiryPriceScaleOutInstanceRequest: InquiryPriceScaleOutInstanceRequest,
    Tag: Tag,
    Placement: Placement,
    DynamicPodSpec: DynamicPodSpec,
    DescribeInstancesRequest: DescribeInstancesRequest,
    CustomMetaInfo: CustomMetaInfo,
    PodParameter: PodParameter,
    InquiryPriceUpdateInstanceRequest: InquiryPriceUpdateInstanceRequest,
    COSSettings: COSSettings,
    ClusterInstancesInfo: ClusterInstancesInfo,
    MultiDisk: MultiDisk,
    SearchItem: SearchItem,
    InquiryPriceScaleOutInstanceResponse: InquiryPriceScaleOutInstanceResponse,
    OutterResource: OutterResource,
    UpdateInstanceSettings: UpdateInstanceSettings,
    TerminateTasksResponse: TerminateTasksResponse,
    DescribeClusterNodesResponse: DescribeClusterNodesResponse,
    NodeHardwareInfo: NodeHardwareInfo,
    InquiryPriceUpdateInstanceResponse: InquiryPriceUpdateInstanceResponse,
    NewResourceSpec: NewResourceSpec,
    PersistentVolumeContext: PersistentVolumeContext,
    InquiryPriceRenewInstanceRequest: InquiryPriceRenewInstanceRequest,
    CdbInfo: CdbInfo,
    ScaleOutInstanceRequest: ScaleOutInstanceRequest,

}
