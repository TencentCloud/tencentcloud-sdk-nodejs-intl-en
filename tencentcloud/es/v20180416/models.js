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
 * ES cluster log details
 * @class
 */
class InstanceLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log time
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Cluster node IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Log content
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Local disk information of node
 * @class
 */
class LocalDiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Local disk type <li>LOCAL_SATA: big data </li><li>NVME_SSD: high IO</li>
         * @type {string || null}
         */
        this.LocalDiskType = null;

        /**
         * Size of a single local disk
         * @type {number || null}
         */
        this.LocalDiskSize = null;

        /**
         * Number of local disks
         * @type {number || null}
         */
        this.LocalDiskCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalDiskType = 'LocalDiskType' in params ? params.LocalDiskType : null;
        this.LocalDiskSize = 'LocalDiskSize' in params ? params.LocalDiskSize : null;
        this.LocalDiskCount = 'LocalDiskCount' in params ? params.LocalDiskCount : null;

    }
}

/**
 * Information of workflow task in instance operation history
 * @class
 */
class TaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Task progress
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Task completion time
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Subtask
         * @type {Array.<SubTaskDetail> || null}
         */
        this.SubTasks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

        if (params.SubTasks) {
            this.SubTasks = new Array();
            for (let z in params.SubTasks) {
                let obj = new SubTaskDetail();
                obj.deserialize(params.SubTasks[z]);
                this.SubTasks.push(obj);
            }
        }

    }
}

/**
 * Specification information of a node type in the cluster (such as hot data node, warm data node, or dedicated primary node), including node type, number of nodes, node specification, disk type, and disk size. If `Type` is not specified, it will be a hot data node by default; if the node is a primary node, then the `DiskType` and `DiskSize` parameters will be ignored (as a primary node has no data disks)
 * @class
 */
class NodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of nodes
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Node specification <li>ES.S1.SMALL2: 1-core 2 GB </li><li>ES.S1.MEDIUM4: 2-core 4 GB </li><li>ES.S1.MEDIUM8: 2-core 8 GB </li><li>ES.S1.LARGE16: 4-core 16 GB </li><li>ES.S1.2XLARGE32: 8-core 32 GB </li><li>ES.S1.4XLARGE32: 16-core 32 GB </li><li>ES.S1.4XLARGE64: 16-core 64 GB </li>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Node type <li>hotData: hot data node</li>
<li>warmData: warm data node</li>
<li>dedicatedMaster: dedicated primary node</li>
Default value: hotData
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Node disk type <li>CLOUD_SSD: SSD cloud storage </li><li>CLOUD_PREMIUM: Premium cloud disk </li>Default value: CLOUD_SSD
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Node disk size in GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Local disk information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {LocalDiskInfo || null}
         */
        this.LocalDiskInfo = null;

        /**
         * Number of node disks
         * @type {number || null}
         */
        this.DiskCount = null;

        /**
         * Whether to encrypt node disk. 0: no (default); 1: yes.
         * @type {number || null}
         */
        this.DiskEncrypt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

        if (params.LocalDiskInfo) {
            let obj = new LocalDiskInfo();
            obj.deserialize(params.LocalDiskInfo)
            this.LocalDiskInfo = obj;
        }
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;
        this.DiskEncrypt = 'DiskEncrypt' in params ? params.DiskEncrypt : null;

    }
}

/**
 * DescribeInstanceOperations request structure.
 * @class
 */
class DescribeInstanceOperationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time, such as "2019-03-07 16:30:39"
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as "2019-03-30 20:18:03"
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Pagination start value
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Operation details
 * @class
 */
class OperationDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original instance configuration information
         * @type {Array.<KeyValue> || null}
         */
        this.OldInfo = null;

        /**
         * Updated instance configuration information
         * @type {Array.<KeyValue> || null}
         */
        this.NewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OldInfo) {
            this.OldInfo = new Array();
            for (let z in params.OldInfo) {
                let obj = new KeyValue();
                obj.deserialize(params.OldInfo[z]);
                this.OldInfo.push(obj);
            }
        }

        if (params.NewInfo) {
            this.NewInfo = new Array();
            for (let z in params.NewInfo) {
                let obj = new KeyValue();
                obj.deserialize(params.NewInfo[z]);
                this.NewInfo.push(obj);
            }
        }

    }
}

/**
 * Public network ACL information of ES
 * @class
 */
class EsPublicAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access blocklist
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * Access allowlist
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;

    }
}

/**
 * Information of the IK plugin dictionary
 * @class
 */
class DictInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dictionary key value
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Dictionary name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Dictionary size in B
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * RestartInstance response structure.
 * @class
 */
class RestartInstanceResponse extends  AbstractModel {
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
 * DescribeInstanceLogs request structure.
 * @class
 */
class DescribeInstanceLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Log type. Default value: 1
<li>1: primary log</li>
<li>2: search slow log</li>
<li>3: index slow log</li>
<li>4: GC log</li>
         * @type {number || null}
         */
        this.LogType = null;

        /**
         * Search keyword, which supports LUCENE syntax, such as `level:WARN`, `ip:1.1.1.1`, and `message:test-index`
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Log start time in the format of YYYY-MM-DD HH:MM:SS, such as 2019-01-22 20:15:53
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Log end time in the format of YYYY-MM-DD HH:MM:SS, such as 2019-01-22 20:15:53
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Pagination start value. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Default value: 100. Maximum value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Time sorting order. Default value: 0
<li>0: descending</li>
<li>1: ascending</li>
         * @type {number || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * UpgradeLicense request structure.
 * @class
 */
class UpgradeLicenseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * License type <li>oss: Open Source Edition </li><li>basic: Basic Edition </li><li>platinum: Platinum Edition </li>Default value: Platinum
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * Whether to automatically use vouchers <li>0: No </li><li>1: Yes </li>Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * List of voucher IDs (only one voucher can be specified at a time currently)
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * Whether to enable X-Pack security authentication in Basic Edition 6.8 (and above) <li>1: disabled </li><li>2: enabled</li>
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * Whether to force restart <li>true: yes </li><li>false: no </li>Default value: false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * Auto-backup to COS for ES
 * @class
 */
class CosBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable auto-backup to COS
         * @type {boolean || null}
         */
        this.IsAutoBackup = null;

        /**
         * Auto-backup time (accurate down to the hour), such as "22:00"
         * @type {string || null}
         */
        this.BackupTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsAutoBackup = 'IsAutoBackup' in params ? params.IsAutoBackup : null;
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;

    }
}

/**
 * Instance tag information
 * @class
 */
class TagInfo extends  AbstractModel {
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
 * `OperationDetail` uses an array of this structure to describe the old and new configuration information
 * @class
 */
class KeyValue extends  AbstractModel {
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
 * CreateInstance request structure.
 * @class
 */
class CreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Availability Zone
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance version ("5.6.4", "6.4.3", "6.8.2", or "7.5.1")
         * @type {string || null}
         */
        this.EsVersion = null;

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
         * Access password, which must contain 8 to 16 characters, and include at least two of the following three types of characters: [a-z,A-Z], [0-9] and [-!@#$%&^*+=_:;,.?]
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Instance name, which can contain 1 to 50 English letters, Chinese characters, digits, dashes (-), or underscores (_)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Number of nodes (2-50)
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Billing mode <li>POSTPAID_BY_HOUR: Pay-as-you-go hourly </li>Default value: POSTPAID_BY_HOUR
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * This parameter is not used on the global website
         * @type {number || null}
         */
        this.ChargePeriod = null;

        /**
         * This parameter is not used on the global website
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Node specification <li>ES.S1.SMALL2: 1-core 2 GB </li><li>ES.S1.MEDIUM4: 2-core 4 GB </li><li>ES.S1.MEDIUM8: 2-core 8 GB </li><li>ES.S1.LARGE16: 4-core 16 GB </li><li>ES.S1.2XLARGE32: 8-core 32 GB </li><li>ES.S1.4XLARGE32: 16-core 32 GB </li><li>ES.S1.4XLARGE64: 16-core 64 GB </li>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Node storage type <li>CLOUD_SSD: SSD cloud storage </li><li>CLOUD_PREMIUM: premium cloud storage </li>Default value: CLOUD_SSD
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Node disk size in GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * This parameter is not used on the global website
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Whether to automatically use vouchers <li>0: No </li><li>1: Yes </li>Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * List of voucher IDs (only one voucher can be specified at a time currently)
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Whether to create a dedicated primary node <li>true: yes </li><li>false: no </li>Default value: false
         * @type {boolean || null}
         */
        this.EnableDedicatedMaster = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Number of dedicated primary nodes (only 3 and 5 are supported. This value must be passed in if `EnableDedicatedMaster` is `true`)
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Dedicated primary node type, which must be passed in if `EnableDedicatedMaster` is `true` <li>ES.S1.SMALL2: 1-core 2 GB</li><li>ES.S1.MEDIUM4: 2-core 4 GB</li><li>ES.S1.MEDIUM8: 2-core 8 GB</li><li>ES.S1.LARGE16: 4-core 16 GB</li><li>ES.S1.2XLARGE32: 8-core 32 GB</li><li>ES.S1.4XLARGE32: 16-core 32 GB</li><li>ES.S1.4XLARGE64: 16-core 64 GB</li>
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Dedicated primary node disk size in GB, which is optional. If passed in, it can only be 50 and cannot be customized currently
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * ClusterName in the cluster configuration file, which is the instance ID by default and currently cannot be customized
         * @type {string || null}
         */
        this.ClusterNameInConf = null;

        /**
         * Cluster deployment mode <li>0: single-AZ deployment </li><li>1: multi-AZ deployment </li>Default value: 0
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * Details of AZs in multi-AZ deployment mode (which is required when DeployMode is 1)
         * @type {Array.<ZoneDetail> || null}
         */
        this.MultiZoneInfo = null;

        /**
         * License type <li>oss: Open Source Edition </li><li>basic: Basic Edition </li><li>platinum: Platinum Edition </li>Default value: Platinum
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * Node information list, which is used to describe the specification information of various types of nodes in the cluster, such as node type, node quantity, node specification, disk type, and disk size
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfoList = null;

        /**
         * Node tag information list
         * @type {Array.<TagInfo> || null}
         */
        this.TagList = null;

        /**
         * Whether to enable X-Pack security authentication in Basic Edition 6.8 (and above) <li>1: disabled </li><li>2: enabled</li>
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * Scenario template type. 0: not enabled; 1: general; 2: log; 3: search
         * @type {number || null}
         */
        this.SceneType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargePeriod = 'ChargePeriod' in params ? params.ChargePeriod : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.EnableDedicatedMaster = 'EnableDedicatedMaster' in params ? params.EnableDedicatedMaster : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.ClusterNameInConf = 'ClusterNameInConf' in params ? params.ClusterNameInConf : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;

        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;

        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;

    }
}

/**
 * Instance details
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Availability Zone
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * User ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * User UIN
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * UID of the VPC where the instance resides
         * @type {string || null}
         */
        this.VpcUid = null;

        /**
         * UID of the subnet where the instance resides
         * @type {string || null}
         */
        this.SubnetUid = null;

        /**
         * Instance status. 0: processing; 1: normal; -1: stopped; -2: terminating; -3: terminated
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance billing method. Valid values: POSTPAID_BY_HOUR (pay-as-you-go hourly); CDHPAID (billed based on CDH, i.e., only CDH is billed but not the instances on CDH)
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * This parameter is not used on the global website
         * @type {number || null}
         */
        this.ChargePeriod = null;

        /**
         * This parameter is not used on the global website
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Node specification <li>ES.S1.SMALL2: 1-core 2 GB </li><li>ES.S1.MEDIUM4: 2-core 4 GB </li><li>ES.S1.MEDIUM8: 2-core 8 GB </li><li>ES.S1.LARGE16: 4-core 16 GB </li><li>ES.S1.2XLARGE32: 8-core 32 GB </li><li>ES.S1.4XLARGE32: 16-core 32 GB </li><li>ES.S1.4XLARGE64: 16-core 64 GB </li>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Number of nodes
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Number of CPU cores of the node
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * Node memory size in GB
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Node disk type
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Node disk size in GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * ES domain name
         * @type {string || null}
         */
        this.EsDomain = null;

        /**
         * ES VIP
         * @type {string || null}
         */
        this.EsVip = null;

        /**
         * ES port
         * @type {number || null}
         */
        this.EsPort = null;

        /**
         * Kibana access URL
         * @type {string || null}
         */
        this.KibanaUrl = null;

        /**
         * ES version number
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * ES configuration item
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * Kibana access control configuration
         * @type {EsAcl || null}
         */
        this.EsAcl = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of the instance
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * This parameter is not used on the global website
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * Instance type (instance type identifier, which can be only 1 or 2 currently)
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * IK analyzer configuration
         * @type {EsDictionaryInfo || null}
         */
        this.IkConfig = null;

        /**
         * Dedicated primary node configuration
         * @type {MasterNodeInfo || null}
         */
        this.MasterNodeInfo = null;

        /**
         * Auto-backup to COS configuration
         * @type {CosBackup || null}
         */
        this.CosBackup = null;

        /**
         * Whether to allow auto-backup to COS
         * @type {boolean || null}
         */
        this.AllowCosBackup = null;

        /**
         * List of tags owned by the instance
         * @type {Array.<TagInfo> || null}
         */
        this.TagList = null;

        /**
         * License type <li>oss: Open Source Edition </li><li>basic: Basic Edition </li><li>platinum: Platinum Edition </li>Default value: Platinum
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * Whether it is a hot/warm cluster <li>true: yes </li><li>false: no</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.EnableHotWarmMode = null;

        /**
         * Warm node specification <li>ES.S1.SMALL2: 1-core 2 GB </li><li>ES.S1.MEDIUM4: 2-core 4 GB </li><li>ES.S1.MEDIUM8: 2-core 8 GB </li><li>ES.S1.LARGE16: 4-core 16 GB </li><li>ES.S1.2XLARGE32: 8-core 32 GB </li><li>ES.S1.4XLARGE32: 16-core 32 GB </li><li>ES.S1.4XLARGE64: 16-core 64 GB </li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WarmNodeType = null;

        /**
         * Number of warm nodes
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WarmNodeNum = null;

        /**
         * Number of warm node CPU cores
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WarmCpuNum = null;

        /**
         * Warm node memory size in GB
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WarmMemSize = null;

        /**
         * Warm node disk type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WarmDiskType = null;

        /**
         * Warm node disk size in GB
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WarmDiskSize = null;

        /**
         * Cluster node information list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfoList = null;

        /**
         * ES public IP address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EsPublicUrl = null;

        /**
         * Multi-AZ network information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ZoneDetail> || null}
         */
        this.MultiZoneInfo = null;

        /**
         * Deployment mode <li>0: single-AZ </li><li>1: multi-AZ</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * ES public access status <li>OPEN: enabled </li><li>CLOSE: disabled
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicAccess = null;

        /**
         * ES public access control configuration
         * @type {EsAcl || null}
         */
        this.EsPublicAcl = null;

        /**
         * Kibana private IP address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KibanaPrivateUrl = null;

        /**
         * Kibana public access status <li>OPEN: enabled </li><li>CLOSE: disabled
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KibanaPublicAccess = null;

        /**
         * Kibana private access status <li>OPEN: enabled </li><li>CLOSE: disabled
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KibanaPrivateAccess = null;

        /**
         * Whether to enable X-Pack security authentication in Basic Edition 6.8 (and above) <li>1: disabled </li><li>2: enabled</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * Scenario template type. 0: not enabled; 1: general scenario; 2: log scenario; 3: search scenario
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SceneType = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.VpcUid = 'VpcUid' in params ? params.VpcUid : null;
        this.SubnetUid = 'SubnetUid' in params ? params.SubnetUid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargePeriod = 'ChargePeriod' in params ? params.ChargePeriod : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.EsDomain = 'EsDomain' in params ? params.EsDomain : null;
        this.EsVip = 'EsVip' in params ? params.EsVip : null;
        this.EsPort = 'EsPort' in params ? params.EsPort : null;
        this.KibanaUrl = 'KibanaUrl' in params ? params.KibanaUrl : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;

        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl)
            this.EsAcl = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.IkConfig) {
            let obj = new EsDictionaryInfo();
            obj.deserialize(params.IkConfig)
            this.IkConfig = obj;
        }

        if (params.MasterNodeInfo) {
            let obj = new MasterNodeInfo();
            obj.deserialize(params.MasterNodeInfo)
            this.MasterNodeInfo = obj;
        }

        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup)
            this.CosBackup = obj;
        }
        this.AllowCosBackup = 'AllowCosBackup' in params ? params.AllowCosBackup : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.EnableHotWarmMode = 'EnableHotWarmMode' in params ? params.EnableHotWarmMode : null;
        this.WarmNodeType = 'WarmNodeType' in params ? params.WarmNodeType : null;
        this.WarmNodeNum = 'WarmNodeNum' in params ? params.WarmNodeNum : null;
        this.WarmCpuNum = 'WarmCpuNum' in params ? params.WarmCpuNum : null;
        this.WarmMemSize = 'WarmMemSize' in params ? params.WarmMemSize : null;
        this.WarmDiskType = 'WarmDiskType' in params ? params.WarmDiskType : null;
        this.WarmDiskSize = 'WarmDiskSize' in params ? params.WarmDiskSize : null;

        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }
        this.EsPublicUrl = 'EsPublicUrl' in params ? params.EsPublicUrl : null;

        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.PublicAccess = 'PublicAccess' in params ? params.PublicAccess : null;

        if (params.EsPublicAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsPublicAcl)
            this.EsPublicAcl = obj;
        }
        this.KibanaPrivateUrl = 'KibanaPrivateUrl' in params ? params.KibanaPrivateUrl : null;
        this.KibanaPublicAccess = 'KibanaPublicAccess' in params ? params.KibanaPublicAccess : null;
        this.KibanaPrivateAccess = 'KibanaPrivateAccess' in params ? params.KibanaPrivateAccess : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;

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
 * DescribeInstances response structure.
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance details
         * @type {Array.<InstanceInfo> || null}
         */
        this.InstanceList = null;

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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceInfo();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLogs response structure.
 * @class
 */
class DescribeInstanceLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned logs
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Log details list
         * @type {Array.<InstanceLog> || null}
         */
        this.InstanceLogList = null;

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

        if (params.InstanceLogList) {
            this.InstanceLogList = new Array();
            for (let z in params.InstanceLogList) {
                let obj = new InstanceLog();
                obj.deserialize(params.InstanceLogList[z]);
                this.InstanceLogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdatePlugins response structure.
 * @class
 */
class UpdatePluginsResponse extends  AbstractModel {
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
 * RestartInstance request structure.
 * @class
 */
class RestartInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether to force restart <li>true: Yes </li><li>false: No </li>Default value: false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * Details of AZs in multi-AZ deployment mode
 * @class
 */
class ZoneDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

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
         * AZ of the cluster instance. If this is not passed in, all AZs are used by default
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * List of cluster instance IDs
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * List of cluster instance names
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * Pagination start value. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sort by field <li>1: instance ID </li><li>2: instance name </li><li>3: AZ </li><li>4: creation time </li>If `orderKey` is not passed in, sort by creation time in descending order
         * @type {number || null}
         */
        this.OrderByKey = null;

        /**
         * Sorting order <li>0: ascending </li><li>1: descending </li>If orderByKey is passed in but orderByType is not, ascending order is used by default
         * @type {number || null}
         */
        this.OrderByType = null;

        /**
         * Node tag information list
         * @type {Array.<TagInfo> || null}
         */
        this.TagList = null;

        /**
         * VPC VIP list
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByKey = 'OrderByKey' in params ? params.OrderByKey : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * UpdateInstance request structure.
 * @class
 */
class UpdateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name, which can contain 1 to 50 English letters, Chinese characters, digits, dashes (-), or underscores (_)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Number of nodes (2-50)
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Configuration item (JSON string)
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * Password of the default user 'elastic', which must contain 8 to 16 characters, including at least two of the following three types of characters: [a-z,A-Z], [0-9] and [-!@#$%&^*+=_:;,.?]
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Access control list
         * @type {EsAcl || null}
         */
        this.EsAcl = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Disk size in GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Node specification <li>ES.S1.SMALL2: 1-core 2 GB </li><li>ES.S1.MEDIUM4: 2-core 4 GB </li><li>ES.S1.MEDIUM8: 2-core 8 GB </li><li>ES.S1.LARGE16: 4-core 16 GB </li><li>ES.S1.2XLARGE32: 8-core 32 GB </li><li>ES.S1.4XLARGE32: 16-core 32 GB </li><li>ES.S1.4XLARGE64: 16-core 64 GB </li>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Number of dedicated primary nodes (only 3 and 5 are supported)
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Dedicated primary node specification <li>ES.S1.SMALL2: 1-core 2 GB</li><li>ES.S1.MEDIUM4: 2-core 4 GB</li><li>ES.S1.MEDIUM8: 2-core 8 GB</li><li>ES.S1.LARGE16: 4-core 16 GB</li><li>ES.S1.2XLARGE32: 8-core 32 GB</li><li>ES.S1.4XLARGE32: 16-core 32 GB</li><li>ES.S1.4XLARGE64: 16-core 64 GB</li>
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * This parameter has been disused. Please use `NodeInfoList`
Dedicated primary node disk size in GB. This is 50 GB by default and currently cannot be customized
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * Whether to force restart during configuration update <li>true: Yes </li><li>false: No </li>This needs to be set only for EsConfig. Default value: false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

        /**
         * Auto-backup to COS
         * @type {CosBackup || null}
         */
        this.CosBackup = null;

        /**
         * Node information list. You can pass in only the nodes to be updated and their corresponding specification information. Supported operations include: <li>modifying the number of nodes in the same type </li><li>modifying the specification and disk size of nodes in the same type </li><li>adding a node type (you must also specify the node type, quantity, specification, disk, etc.) </li>The above operations can only be performed one at a time, and the disk type cannot be modified
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfoList = null;

        /**
         * Public network access status
         * @type {string || null}
         */
        this.PublicAccess = null;

        /**
         * Public network ACL
         * @type {EsPublicAcl || null}
         */
        this.EsPublicAcl = null;

        /**
         * Public network access status of Kibana
         * @type {string || null}
         */
        this.KibanaPublicAccess = null;

        /**
         * Private network access status of Kibana
         * @type {string || null}
         */
        this.KibanaPrivateAccess = null;

        /**
         * Enables or disables user authentication for ES Basic Edition v6.8 and above
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * Kibana private port
         * @type {number || null}
         */
        this.KibanaPrivatePort = null;

        /**
         * 0: scaling in blue/green deployment mode without cluster restart (default); 1: scaling by unmounting disk with rolling cluster restart
         * @type {number || null}
         */
        this.ScaleType = null;

        /**
         * Multi-AZ deployment
         * @type {Array.<ZoneDetail> || null}
         */
        this.MultiZoneInfo = null;

        /**
         * Scenario template type. -1: not enabled; 1: general; 2: log; 3: search
         * @type {number || null}
         */
        this.SceneType = null;

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
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl)
            this.EsAcl = obj;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup)
            this.CosBackup = obj;
        }

        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }
        this.PublicAccess = 'PublicAccess' in params ? params.PublicAccess : null;

        if (params.EsPublicAcl) {
            let obj = new EsPublicAcl();
            obj.deserialize(params.EsPublicAcl)
            this.EsPublicAcl = obj;
        }
        this.KibanaPublicAccess = 'KibanaPublicAccess' in params ? params.KibanaPublicAccess : null;
        this.KibanaPrivateAccess = 'KibanaPrivateAccess' in params ? params.KibanaPrivateAccess : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.KibanaPrivatePort = 'KibanaPrivatePort' in params ? params.KibanaPrivatePort : null;
        this.ScaleType = 'ScaleType' in params ? params.ScaleType : null;

        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.SceneType = 'SceneType' in params ? params.SceneType : null;

    }
}

/**
 * ES dictionary information
 * @class
 */
class EsDictionaryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of non-stop words
         * @type {Array.<DictInfo> || null}
         */
        this.MainDict = null;

        /**
         * List of stop words
         * @type {Array.<DictInfo> || null}
         */
        this.Stopwords = null;

        /**
         * QQ dictionary list
         * @type {Array.<DictInfo> || null}
         */
        this.QQDict = null;

        /**
         * Synonym dictionary list
         * @type {Array.<DictInfo> || null}
         */
        this.Synonym = null;

        /**
         * Update dictionary type
         * @type {string || null}
         */
        this.UpdateType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MainDict) {
            this.MainDict = new Array();
            for (let z in params.MainDict) {
                let obj = new DictInfo();
                obj.deserialize(params.MainDict[z]);
                this.MainDict.push(obj);
            }
        }

        if (params.Stopwords) {
            this.Stopwords = new Array();
            for (let z in params.Stopwords) {
                let obj = new DictInfo();
                obj.deserialize(params.Stopwords[z]);
                this.Stopwords.push(obj);
            }
        }

        if (params.QQDict) {
            this.QQDict = new Array();
            for (let z in params.QQDict) {
                let obj = new DictInfo();
                obj.deserialize(params.QQDict[z]);
                this.QQDict.push(obj);
            }
        }

        if (params.Synonym) {
            this.Synonym = new Array();
            for (let z in params.Synonym) {
                let obj = new DictInfo();
                obj.deserialize(params.Synonym[z]);
                this.Synonym.push(obj);
            }
        }
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;

    }
}

/**
 * DescribeInstanceOperations response structure.
 * @class
 */
class DescribeInstanceOperationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of operation records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Operation history
         * @type {Array.<Operation> || null}
         */
        this.Operations = null;

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

        if (params.Operations) {
            this.Operations = new Array();
            for (let z in params.Operations) {
                let obj = new Operation();
                obj.deserialize(params.Operations[z]);
                this.Operations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartNodes request structure.
 * @class
 */
class RestartNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node name list
         * @type {Array.<string> || null}
         */
        this.NodeNames = null;

        /**
         * Whether to force restart
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NodeNames = 'NodeNames' in params ? params.NodeNames : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * UpdatePlugins request structure.
 * @class
 */
class UpdatePluginsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of names of the plugins to be installed
         * @type {Array.<string> || null}
         */
        this.InstallPluginList = null;

        /**
         * List of names of the plugins to be uninstalled
         * @type {Array.<string> || null}
         */
        this.RemovePluginList = null;

        /**
         * Whether to force restart
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstallPluginList = 'InstallPluginList' in params ? params.InstallPluginList : null;
        this.RemovePluginList = 'RemovePluginList' in params ? params.RemovePluginList : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * UpgradeLicense response structure.
 * @class
 */
class UpgradeLicenseResponse extends  AbstractModel {
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
 * ES cluster configuration item
 * @class
 */
class EsAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kibana access blocklist
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * Kibana access allowlist
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;

    }
}

/**
 * Information of the dedicated primary node in an instance
 * @class
 */
class MasterNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the dedicated primary node
         * @type {boolean || null}
         */
        this.EnableDedicatedMaster = null;

        /**
         * Dedicated primary node specification <li>ES.S1.SMALL2: 1-core 2 GB</li><li>ES.S1.MEDIUM4: 2-core 4 GB</li><li>ES.S1.MEDIUM8: 2-core 8 GB</li><li>ES.S1.LARGE16: 4-core 16 GB</li><li>ES.S1.2XLARGE32: 8-core 32 GB</li><li>ES.S1.4XLARGE32: 16-core 32 GB</li><li>ES.S1.4XLARGE64: 16-core 64 GB</li>
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * Number of dedicated primary nodes
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * Number of CPU cores of the dedicated primary node
         * @type {number || null}
         */
        this.MasterNodeCpuNum = null;

        /**
         * Memory size of the dedicated primary node in GB
         * @type {number || null}
         */
        this.MasterNodeMemSize = null;

        /**
         * Disk size of the dedicated primary node in GB
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * Disk type of the dedicated primary node
         * @type {string || null}
         */
        this.MasterNodeDiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableDedicatedMaster = 'EnableDedicatedMaster' in params ? params.EnableDedicatedMaster : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeCpuNum = 'MasterNodeCpuNum' in params ? params.MasterNodeCpuNum : null;
        this.MasterNodeMemSize = 'MasterNodeMemSize' in params ? params.MasterNodeMemSize : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.MasterNodeDiskType = 'MasterNodeDiskType' in params ? params.MasterNodeDiskType : null;

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
 * Information of subtask in workflow task in the instance operation history (such as each check item in a upgrade check task)
 * @class
 */
class SubTaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subtask name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subtask result
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * Subtask error message
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * Subtask type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Subtask status. 0: processing, 1: succeeded, -1: failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Name of the index for which the check for upgrade failed
         * @type {Array.<string> || null}
         */
        this.FailedIndices = null;

        /**
         * Subtask end time
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Subtask level. 1: warning, 2: failed
         * @type {number || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailedIndices = 'FailedIndices' in params ? params.FailedIndices : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * RestartNodes response structure.
 * @class
 */
class RestartNodesResponse extends  AbstractModel {
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
 * UpgradeInstance response structure.
 * @class
 */
class UpgradeInstanceResponse extends  AbstractModel {
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
 * UpdateInstance response structure.
 * @class
 */
class UpdateInstanceResponse extends  AbstractModel {
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
 * UpgradeInstance request structure.
 * @class
 */
class UpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Target ES version. Valid values: 6.4.3, 6.8.2, 7.5.1
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * Whether to check for upgrade only. Default value: false
         * @type {boolean || null}
         */
        this.CheckOnly = null;

        /**
         * Target X-Pack edition: <li>OSS: Open-source Edition </li><li>basic: Basic Edition </li>Currently only used for v5.6.4 to v6.x upgrade. Default value: basic
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * Whether to enable X-Pack security authentication in Basic Edition 6.8 (and above) <li>1: disabled </li><li>2: enabled</li>
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * Upgrade mode. <li>scale: blue/green deployment</li><li>restart: rolling restart</li>Default value: scale
         * @type {string || null}
         */
        this.UpgradeMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.CheckOnly = 'CheckOnly' in params ? params.CheckOnly : null;
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.UpgradeMode = 'UpgradeMode' in params ? params.UpgradeMode : null;

    }
}

/**
 * ES cluster operation details
 * @class
 */
class Operation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique operation ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Operation start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Operation type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Operation details
         * @type {OperationDetail || null}
         */
        this.Detail = null;

        /**
         * Operation result
         * @type {string || null}
         */
        this.Result = null;

        /**
         * Workflow task information
         * @type {Array.<TaskDetail> || null}
         */
        this.Tasks = null;

        /**
         * Operation progress
         * @type {number || null}
         */
        this.Progress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Detail) {
            let obj = new OperationDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.Result = 'Result' in params ? params.Result : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskDetail();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Progress = 'Progress' in params ? params.Progress : null;

    }
}

module.exports = {
    InstanceLog: InstanceLog,
    LocalDiskInfo: LocalDiskInfo,
    TaskDetail: TaskDetail,
    NodeInfo: NodeInfo,
    DescribeInstanceOperationsRequest: DescribeInstanceOperationsRequest,
    OperationDetail: OperationDetail,
    EsPublicAcl: EsPublicAcl,
    DictInfo: DictInfo,
    RestartInstanceResponse: RestartInstanceResponse,
    CreateInstanceResponse: CreateInstanceResponse,
    DescribeInstanceLogsRequest: DescribeInstanceLogsRequest,
    UpgradeLicenseRequest: UpgradeLicenseRequest,
    CosBackup: CosBackup,
    TagInfo: TagInfo,
    KeyValue: KeyValue,
    CreateInstanceRequest: CreateInstanceRequest,
    InstanceInfo: InstanceInfo,
    DeleteInstanceResponse: DeleteInstanceResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeInstanceLogsResponse: DescribeInstanceLogsResponse,
    UpdatePluginsResponse: UpdatePluginsResponse,
    RestartInstanceRequest: RestartInstanceRequest,
    ZoneDetail: ZoneDetail,
    DescribeInstancesRequest: DescribeInstancesRequest,
    UpdateInstanceRequest: UpdateInstanceRequest,
    EsDictionaryInfo: EsDictionaryInfo,
    DescribeInstanceOperationsResponse: DescribeInstanceOperationsResponse,
    RestartNodesRequest: RestartNodesRequest,
    UpdatePluginsRequest: UpdatePluginsRequest,
    UpgradeLicenseResponse: UpgradeLicenseResponse,
    EsAcl: EsAcl,
    MasterNodeInfo: MasterNodeInfo,
    DeleteInstanceRequest: DeleteInstanceRequest,
    SubTaskDetail: SubTaskDetail,
    RestartNodesResponse: RestartNodesResponse,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    UpdateInstanceResponse: UpdateInstanceResponse,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    Operation: Operation,

}
