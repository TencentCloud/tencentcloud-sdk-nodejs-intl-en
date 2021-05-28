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
 * ResetDBInstancePassword response structure.
 * @class
 */
class ResetDBInstancePasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async request ID, which is used to query the running status of the process.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSpecInfo request structure.
 * @class
 */
class DescribeSpecInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ to be queried
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
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * CreateDBInstance request structure.
 * @class
 */
class CreateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of nodes in each replica set. Currently, the number of nodes per replica set is fixed at 3, while the number of secondary nodes per shard is customizable. For more information, please see the parameter returned by the `DescribeSpecInfo` API.
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Instance memory size in GB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in GB.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Version number. For the specific purchasable versions supported, please see the return result of the `DescribeSpecInfo` API. The correspondences between parameters and versions are as follows: MONGO_3_WT: MongoDB 3.2 WiredTiger Edition; MONGO_3_ROCKS: MongoDB 3.2 RocksDB Edition; MONGO_36_WT: MongoDB 3.6 WiredTiger Edition; MONGO_40_WT: MongoDB 4.0 WiredTiger Edition.
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * Number of instances. Minimum value: 1. Maximum value: 10.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Instance region name in the format of ap-guangzhou-2.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance validity period in months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Server type. Valid values: HIO (high IO), HIO10G (10-gigabit high IO), STDS5 (standard).
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * Instance type. Valid values: REPLSET (replica set), SHARD (sharded cluster), STANDALONE (single-node).
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Number of replica sets. To create a replica set instance, set this parameter to 1; to create a shard instance, see the parameters returned by the `DescribeSpecInfo` API; to create a single-node instance, set this parameter to 0.
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * Project ID. If this parameter is not set, the default project will be used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID. If this parameter is not set, the classic network will be used. Please use the `DescribeVpcs` API to query the VPC list.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID. If `UniqVpcId` is set, then `UniqSubnetId` will be required. Please use the `DescribeSubnets` API to query the subnet list.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance password, which must contain 8 to 16 characters and comprise at least two of the following types: letters, digits, and symbols (!@#%^*()). If it is left empty, the password is in the format of "instance ID+@+root account UIN". For example, if the instance ID is "cmgo-higv73ed" and the root account UIN "100000001", the instance password will be "cmgo-higv73ed@100000001".
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Instance tag information.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Auto-renewal flag. Valid values: 0 (auto-renewal not enabled), 1 (auto-renewal enabled). Default value: 0.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Whether to automatically use a voucher. Valid values: 1 (yes), 0 (no). Default value: 0.
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Valid values: 1 (regular instance), 2 (temp instance), 3 (read-only instance), 4 (disaster recovery instance).
         * @type {number || null}
         */
        this.Clone = null;

        /**
         * Primary instance ID. It is required for read-only and disaster recovery instances.
         * @type {string || null}
         */
        this.Father = null;

        /**
         * Security group.
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.Clone = 'Clone' in params ? params.Clone : null;
        this.Father = 'Father' in params ? params.Father : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

    }
}

/**
 * DescribeSecurityGroup response structure.
 * @class
 */
class DescribeSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security groups associated with the instance
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateDBInstance request structure.
 * @class
 */
class IsolateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed on the TencentDB Console page
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
 * IsolateDBInstance response structure.
 * @class
 */
class IsolateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The result of the created backup download task
 * @class
 */
class BackupDownloadTaskStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shard name
         * @type {string || null}
         */
        this.ReplicaSetId = null;

        /**
         * Task status. Valid values: `0` (waiting for execution), `1` (downloading), `2` (downloaded), `3` (download failed), `4` (waiting for retry)
         * @type {number || null}
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
        this.ReplicaSetId = 'ReplicaSetId' in params ? params.ReplicaSetId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateBackupDBInstance response structure.
 * @class
 */
class CreateBackupDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The status of the queried backup process.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance price
 * @class
 */
class DBInstancePrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unit price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Original price.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discounted price.
         * @type {number || null}
         */
        this.DiscountPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * DescribeBackupAccess response structure.
 * @class
 */
class DescribeBackupAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The bucket where a backup file is located
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Storage information of a backup file
         * @type {Array.<BackupFile> || null}
         */
        this.Files = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new BackupFile();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePriceCreateDBInstances request structure.
 * @class
 */
class InquirePriceCreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance region name in the format of ap-guangzhou-2.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Number of nodes in each replica set. Currently, the number of nodes per replica set is fixed at 3, while the number of secondary nodes per shard is customizable. For more information, please see the parameter returned by the `DescribeSpecInfo` API.
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Instance memory size in GB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in GB.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Version number. For the specific purchasable versions supported, please see the return result of the `DescribeSpecInfo` API. The correspondences between parameters and versions are as follows: MONGO_3_WT: MongoDB 3.2 WiredTiger Edition; MONGO_3_ROCKS: MongoDB 3.2 RocksDB Edition; MONGO_36_WT: MongoDB 3.6 WiredTiger Edition; MONGO_40_WT: MongoDB 4.0 WiredTiger Edition.
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * Server type. Valid values: HIO (high IO), HIO10G (10-gigabit high IO), STDS5 (standard).
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * Number of instances. Minimum value: 1. Maximum value: 10.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Instance validity period in months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Instance type. Valid values: REPLSET (replica set), SHARD (sharded cluster), STANDALONE (single-node).
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Number of replica sets. To create a replica set instance, set this parameter to 1; to create a shard instance, see the parameters returned by the `DescribeSpecInfo` API; to create a single-node instance, set this parameter to 0.
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;

    }
}

/**
 * DescribeSlowLogPatterns response structure.
 * @class
 */
class DescribeSlowLogPatternsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of slow logs
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Slow log statistics
         * @type {Array.<SlowLogPattern> || null}
         */
        this.SlowLogPatterns = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.SlowLogPatterns) {
            this.SlowLogPatterns = new Array();
            for (let z in params.SlowLogPatterns) {
                let obj = new SlowLogPattern();
                obj.deserialize(params.SlowLogPatterns[z]);
                this.SlowLogPatterns.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Shard information
 * @class
 */
class ReplicaSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shard name
         * @type {string || null}
         */
        this.ReplicaSetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicaSetId = 'ReplicaSetId' in params ? params.ReplicaSetId : null;

    }
}

/**
 * CreateDBInstanceHour request structure.
 * @class
 */
class CreateDBInstanceHourRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Number of replica sets. When a replica set instance is created, this parameter must be set to 1. When a sharding instance is created, please see the parameters returned by the DescribeSpecInfo API
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * Number of nodes in each replica set. Currently, the number of nodes in a replica set is fixed at 3, while the number of shards is customizable. For more information, please see the parameter returned by the DescribeSpecInfo API
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Version number. For the specific purchasable versions supported, please see the return result of the DescribeSpecInfo API. The correspondences between parameters and versions are as follows: MONGO_3_WT: MongoDB 3.2 WiredTiger Edition; MONGO_3_ROCKS: MongoDB 3.2 RocksDB Edition; MONGO_36_WT: MongoDB 3.6 WiredTiger Edition
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * Server type. HIO: high IO; HIO10G: 10-Gigabit high IO
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * Number of instances. Minimum value: 1. Maximum value: 10
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * AZ information in the format of ap-guangzhou-2
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance type. REPLSET: replica set; SHARD: sharding cluster
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * VPC ID. If this parameter is not set, the basic network will be selected by default
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID. If VpcId is set, then SubnetId will be required
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance password, which must contain 8 to 16 characters and comprise at least two of the following types: letters, digits, and symbols (!@#%^*()). If it is left empty, the password is in the format of "instance ID+@+root account UIN". For example, if the instance ID is "cmgo-higv73ed" and the root account UIN "100000001", the instance password will be "cmgo-higv73ed@100000001".
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Project ID. If this parameter is not set, the default project will be used
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance tag information
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Valid values: 1 (regular instance), 2 (temp instance), 3 (read-only instance), 4 (disaster recovery instance).
         * @type {number || null}
         */
        this.Clone = null;

        /**
         * Parent instance ID. It is required if the `Clone` is 3 or 4.
         * @type {string || null}
         */
        this.Father = null;

        /**
         * Security group.
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Clone = 'Clone' in params ? params.Clone : null;
        this.Father = 'Father' in params ? params.Father : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

    }
}

/**
 * AssignProject request structure.
 * @class
 */
class AssignProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed on the TencentDB Console page
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Project ID
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * Security group rule
 * @class
 */
class SecurityGroupBound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution rule. Valid values: `ACCEPT`, `DROP`
         * @type {string || null}
         */
        this.Action = null;

        /**
         * IP range
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Port range
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * Transport layer protocol. Valid values: `tcp`, `udp`, `ALL`
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * 
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * 
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
        this.Action = 'Action' in params ? params.Action : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * CreateBackupDownloadTask response structure.
 * @class
 */
class CreateBackupDownloadTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download task status
         * @type {Array.<BackupDownloadTaskStatus> || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new BackupDownloadTaskStatus();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Client connection information, including client IP and number of connections
 * @class
 */
class ClientConnection extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client IP of a connection
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Number of connections corresponding to a client IP
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
        this.IP = 'IP' in params ? params.IP : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * InquirePriceModifyDBInstanceSpec request structure.
 * @class
 */
class InquirePriceModifyDBInstanceSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed in the TencentDB Console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance memory size in GB after specification adjustment.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in GB after specification adjustment.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;

    }
}

/**
 * Backup information
 * @class
 */
class BackupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup mode. 0: automatic backup; 1: manual backup
         * @type {number || null}
         */
        this.BackupType = null;

        /**
         * Backup name
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * Backup remarks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupDesc = null;

        /**
         * Backup file size in KB
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BackupSize = null;

        /**
         * Backup start time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Backup end time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Backup status. 1: backing up; 2: backed up successful
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Backup method. 0: logical backup; 1: physical backup
         * @type {number || null}
         */
        this.BackupMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.BackupDesc = 'BackupDesc' in params ? params.BackupDesc : null;
        this.BackupSize = 'BackupSize' in params ? params.BackupSize : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;

    }
}

/**
 * InquirePriceRenewDBInstances request structure.
 * @class
 */
class InquirePriceRenewDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed in the TencentDB Console. This API supports operations on up to 5 instances at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * The parameter setting for the prepaid mode (monthly subscription mode). This parameter can specify the renewal period, whether to set automatic renewal, and other attributes of the monthly subscription instance.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * DescribeAsyncRequestInfo request structure.
 * @class
 */
class DescribeAsyncRequestInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID, which is returned by APIs related to async tasks, such as `CreateBackupDBInstance`.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * Instance specification information
 * @class
 */
class SpecificationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region information
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ information
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Purchasable specification information
         * @type {Array.<SpecItem> || null}
         */
        this.SpecItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SpecItems) {
            this.SpecItems = new Array();
            for (let z in params.SpecItems) {
                let obj = new SpecItem();
                obj.deserialize(params.SpecItems[z]);
                this.SpecItems.push(obj);
            }
        }

    }
}

/**
 * CreateBackupDownloadTask request structure.
 * @class
 */
class CreateBackupDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of "cmgo-p8vnipr5", which is the same as the instance ID displayed in the TencentDB console
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The name of the backup file to be downloaded, which can be obtained by the `DescribeDBBackups` API
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * The list of shards with backups to be downloaded
         * @type {Array.<ReplicaSetInfo> || null}
         */
        this.BackupSets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

        if (params.BackupSets) {
            this.BackupSets = new Array();
            for (let z in params.BackupSets) {
                let obj = new ReplicaSetInfo();
                obj.deserialize(params.BackupSets[z]);
                this.BackupSets.push(obj);
            }
        }

    }
}

/**
 * DescribeSlowLogPatterns request structure.
 * @class
 */
class DescribeSlowLogPatternsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of `cmgo-p8vnipr5`, which is the same as the instance ID displayed on the TencentDB Console page
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time of slow log in the format of `yyyy-mm-dd hh:mm:ss`, such as 2019-06-01 10:00:00. The query time range cannot exceed 24 hours. Only slow logs for the last 7 days can be queried.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of slow log in the format of `yyyy-mm-dd hh:mm:ss`, such as 2019-06-02 12:00:00. The query time range cannot exceed 24 hours. Only slow logs for the last 7 days can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Threshold of slow log execution time in milliseconds. Minimum value: 100. Slow logs whose execution time exceeds the threshold will be returned.
         * @type {number || null}
         */
        this.SlowMS = null;

        /**
         * Offset. Minimum value: 0. Maximum value: 10000. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Minimum value: 1. Maximum value: 100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Slow log format, which can be JSON. If this parameter is left empty, the slow log will be returned in its native format.
         * @type {string || null}
         */
        this.Format = null;

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
        this.SlowMS = 'SlowMS' in params ? params.SlowMS : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * DescribeSlowLogs response structure.
 * @class
 */
class DescribeSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of slow logs
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Slow log details
         * @type {Array.<string> || null}
         */
        this.SlowLogs = null;

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
        this.Count = 'Count' in params ? params.Count : null;
        this.SlowLogs = 'SlowLogs' in params ? params.SlowLogs : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FlushInstanceRouterConfig response structure.
 * @class
 */
class FlushInstanceRouterConfigResponse extends  AbstractModel {
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
 * InquirePriceModifyDBInstanceSpec response structure.
 * @class
 */
class InquirePriceModifyDBInstanceSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price.
         * @type {DBInstancePrice || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Specifications of purchasable MongoDB instances
 * @class
 */
class SpecItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification information identifier
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Specification purchasable flag. Valid values: 0 (not purchasable), 1 (purchasable)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Computing resource specification in terms of CPU core
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Default disk size in MB
         * @type {number || null}
         */
        this.DefaultStorage = null;

        /**
         * Maximum disk size in MB
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * Minimum disk size in MB
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * Maximum QPS
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Maximum number of connections
         * @type {number || null}
         */
        this.Conns = null;

        /**
         * MongoDB version information of an instance
         * @type {string || null}
         */
        this.MongoVersionCode = null;

        /**
         * MongoDB version number of an instance
         * @type {number || null}
         */
        this.MongoVersionValue = null;

        /**
         * MongoDB version number of an instance (short)
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Storage engine
         * @type {string || null}
         */
        this.EngineName = null;

        /**
         * Cluster type. Valid values: 1 (sharding cluster), 0 (replica set cluster)
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * Minimum number of secondary nodes in a replica set
         * @type {number || null}
         */
        this.MinNodeNum = null;

        /**
         * Maximum number of secondary nodes in a replica set
         * @type {number || null}
         */
        this.MaxNodeNum = null;

        /**
         * Minimum number of shards
         * @type {number || null}
         */
        this.MinReplicateSetNum = null;

        /**
         * Maximum number of shards
         * @type {number || null}
         */
        this.MaxReplicateSetNum = null;

        /**
         * Minimum number of secondary nodes in a shard
         * @type {number || null}
         */
        this.MinReplicateSetNodeNum = null;

        /**
         * Maximum number of secondary nodes in a shard
         * @type {number || null}
         */
        this.MaxReplicateSetNodeNum = null;

        /**
         * Server type. Valid values: 0 (HIO), 4 (HIO10G)
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
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DefaultStorage = 'DefaultStorage' in params ? params.DefaultStorage : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Conns = 'Conns' in params ? params.Conns : null;
        this.MongoVersionCode = 'MongoVersionCode' in params ? params.MongoVersionCode : null;
        this.MongoVersionValue = 'MongoVersionValue' in params ? params.MongoVersionValue : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.EngineName = 'EngineName' in params ? params.EngineName : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.MinNodeNum = 'MinNodeNum' in params ? params.MinNodeNum : null;
        this.MaxNodeNum = 'MaxNodeNum' in params ? params.MaxNodeNum : null;
        this.MinReplicateSetNum = 'MinReplicateSetNum' in params ? params.MinReplicateSetNum : null;
        this.MaxReplicateSetNum = 'MaxReplicateSetNum' in params ? params.MaxReplicateSetNum : null;
        this.MinReplicateSetNodeNum = 'MinReplicateSetNodeNum' in params ? params.MinReplicateSetNodeNum : null;
        this.MaxReplicateSetNodeNum = 'MaxReplicateSetNodeNum' in params ? params.MaxReplicateSetNodeNum : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

    }
}

/**
 * DescribeSpecInfo response structure.
 * @class
 */
class DescribeSpecInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of purchasable instance specifications
         * @type {Array.<SpecificationInfo> || null}
         */
        this.SpecInfoList = null;

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

        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecificationInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePriceRenewDBInstances response structure.
 * @class
 */
class InquirePriceRenewDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price.
         * @type {DBInstancePrice || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetDBInstancePassword request structure.
 * @class
 */
class ResetDBInstancePasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance account name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * New password
         * @type {string || null}
         */
        this.Password = null;

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
        this.Password = 'Password' in params ? params.Password : null;

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
 * DescribeDBInstances response structure.
 * @class
 */
class DescribeDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance details
         * @type {Array.<InstanceDetail> || null}
         */
        this.InstanceDetails = null;

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

        if (params.InstanceDetails) {
            this.InstanceDetails = new Array();
            for (let z in params.InstanceDetails) {
                let obj = new InstanceDetail();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OfflineIsolatedDBInstance request structure.
 * @class
 */
class OfflineIsolatedDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed on the TencentDB Console page
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
 * DescribeDBInstanceDeal request structure.
 * @class
 */
class DescribeDBInstanceDealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID. It is returned by the `CreateDBInstance` and other APIs.
         * @type {string || null}
         */
        this.DealId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;

    }
}

/**
 * DescribeDBInstances request structure.
 * @class
 */
class DescribeDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed on the TencentDB Console page
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Instance type. Valid values: 0 (all instances), 1 (promoted), 2 (temp), 3 (read-only), -1 (promoted + read-only + disaster recovery)
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Cluster type. Valid values: 0 (replica set instance), 1 (sharding instance), -1 (all instances)
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * Instance status. Valid values: `0` (to be initialized), `1` (executing task), `2` (running), `-2` (isolated monthly-subscribed instance), `-3` (isolated pay-as-you-go instance)
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * VPC ID. This parameter can be left empty for the basic network
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID of VPC. This parameter can be left empty for the basic network. If it is passed in as an input parameter, the corresponding VpcId must be set
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Billing type. Valid value: 0 (pay-as-you-go)
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Number of results to be returned for a single request. Valid values: 1-100. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sort by field of the returned result set. Currently, supported values include "ProjectId", "InstanceName", and "CreateTime". The return results are sorted in ascending order by default.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting method of the return result set. Currently, "ASC" or "DESC" is supported
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Project ID
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Search keyword, which can be instance ID, instance name, or complete IP
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Tag information
         * @type {TagInfo || null}
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

        if (params.Tags) {
            let obj = new TagInfo();
            obj.deserialize(params.Tags)
            this.Tags = obj;
        }

    }
}

/**
 * DescribeAsyncRequestInfo response structure.
 * @class
 */
class DescribeAsyncRequestInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstance response structure.
 * @class
 */
class CreateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID.
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * List of IDs of created instances.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignProject response structure.
 * @class
 */
class AssignProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the returned async task IDs
         * @type {Array.<number> || null}
         */
        this.FlowIds = null;

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
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Backup download task information
 * @class
 */
class BackupDownloadTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Backup name
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * Shard name
         * @type {string || null}
         */
        this.ReplicaSetId = null;

        /**
         * Backup size in bytes
         * @type {number || null}
         */
        this.BackupSize = null;

        /**
         * Task status. Valid values: `0` (waiting for execution), `1` (downloading), `2` (downloaded), `3` (download failed), `4` (waiting for retry)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task progress in percentage
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Task duration in seconds
         * @type {number || null}
         */
        this.TimeSpend = null;

        /**
         * Backup download address
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.ReplicaSetId = 'ReplicaSetId' in params ? params.ReplicaSetId : null;
        this.BackupSize = 'BackupSize' in params ? params.BackupSize : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.TimeSpend = 'TimeSpend' in params ? params.TimeSpend : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeDBBackups request structure.
 * @class
 */
class DescribeDBBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed on the TencentDB Console page
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup mode. Valid values: `0` (logical backup), `1` (physical backup), `2` (both modes). Default value: `0`.
         * @type {number || null}
         */
        this.BackupMethod = null;

        /**
         * Number of entries per page. Maximum value: `100`. If this parameter is left empty, all entries will be returned.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, starting from `0`. Default value: `0`.
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
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeClientConnections request structure.
 * @class
 */
class DescribeClientConnectionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed on the TencentDB Console page
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The number of records that will be returned. Default value: 10,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeDBInstanceDeal response structure.
 * @class
 */
class DescribeDBInstanceDealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order status. Valid values: 1 (unpaid), 2 (paid), 3 (delivering), 4 (delivered), 5 (delivery failed), 6 (refunded), 7 (order closed), 8 (order closed because it failed to be paid within timeout period).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Original price of the order.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discounted price of the order.
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Operation performed by the order. Valid values: purchase, renew, upgrade, downgrade, refund.
         * @type {string || null}
         */
        this.Action = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceSpec response structure.
 * @class
 */
class ModifyDBInstanceSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security group information
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Inbound rule
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Inbound = null;

        /**
         * Outbound rule
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Outbound = null;

        /**
         * Security group ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group name
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * Security group remarks
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new SecurityGroupBound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new SecurityGroupBound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

    }
}

/**
 * OfflineIsolatedDBInstance response structure.
 * @class
 */
class OfflineIsolatedDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupDownloadTask request structure.
 * @class
 */
class DescribeBackupDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of "cmgo-p8vnipr5", which is the same as the instance ID displayed in the TencentDB console
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The name of a backup file with download tasks to be queried
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * The start time of the query period. Tasks whose start time and end time fall within the query period will be queried. If it is left empty, the start time can be any time earlier than the end time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time of the query period. Tasks whose start time and end time fall within the query period will be queried. If it is left empty, the end time can be any time later than the start time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The maximum number of results returned per page. Value range: 1-100. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset for pagination. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The field used to sort the results. Valid values: `createTime` (default), `finishTime`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sort order. Valid values: `asc`, `desc` (default).
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * The status of the tasks to be queried. Valid values: `0` (waiting for execution), `1` (downloading), `2` (downloaded), `3` (download failed), `4` (waiting for retry). If it is left empty, tasks in any status will be returned.
         * @type {Array.<number> || null}
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
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeBackupAccess request structure.
 * @class
 */
class DescribeBackupAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed on the TencentDB Console page
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Name of the backup file for which to get the download permission
         * @type {string || null}
         */
        this.BackupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * RenameInstance request structure.
 * @class
 */
class RenameInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed on the TencentDB Console page
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.NewName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NewName = 'NewName' in params ? params.NewName : null;

    }
}

/**
 * DescribeSecurityGroup request structure.
 * @class
 */
class DescribeSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of "cmgo-p8vnipr5"
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
 * RenewDBInstances response structure.
 * @class
 */
class RenewDBInstancesResponse extends  AbstractModel {
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
 * DescribeBackupDownloadTask response structure.
 * @class
 */
class DescribeBackupDownloadTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of download tasks
         * @type {Array.<BackupDownloadTask> || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new BackupDownloadTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenameInstance response structure.
 * @class
 */
class RenameInstanceResponse extends  AbstractModel {
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
 * DescribeClientConnections response structure.
 * @class
 */
class DescribeClientConnectionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client connection information, including client IP and number of connections
         * @type {Array.<ClientConnection> || null}
         */
        this.Clients = null;

        /**
         * The total number of records that meet the query condition, which can be used for paginated queries.
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

        if (params.Clients) {
            this.Clients = new Array();
            for (let z in params.Clients) {
                let obj = new ClientConnection();
                obj.deserialize(params.Clients[z]);
                this.Clients.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FlushInstanceRouterConfig request structure.
 * @class
 */
class FlushInstanceRouterConfigRequest extends  AbstractModel {
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
 * Instance information
 * @class
 */
class DBInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Region information
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DescribeSlowLogs request structure.
 * @class
 */
class DescribeSlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of `cmgo-p8vnipr5`, which is the same as the instance ID displayed on the TencentDB Console page
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time of slow log in the format of `yyyy-mm-dd hh:mm:ss`, such as 2019-06-01 10:00:00. The query time range cannot exceed 24 hours. Only slow logs for the last 7 days can be queried.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of slow log in the format of `yyyy-mm-dd hh:mm:ss`, such as 2019-06-02 12:00:00. The query time range cannot exceed 24 hours. Only slow logs for the last 7 days can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Threshold of slow log execution time in milliseconds. Minimum value: 100. Slow logs whose execution time exceeds the threshold will be returned.
         * @type {number || null}
         */
        this.SlowMS = null;

        /**
         * Offset. Minimum value: 0. Maximum value: 10000. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Minimum value: 1. Maximum value: 100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Slow log format, which can be JSON. If this parameter is left empty, the slow log will be returned in its native format.
         * @type {string || null}
         */
        this.Format = null;

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
        this.SlowMS = 'SlowMS' in params ? params.SlowMS : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * Storage information of a backup file
 * @class
 */
class BackupFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the replica set/shard to which a backup file belongs
         * @type {string || null}
         */
        this.ReplicateSetId = null;

        /**
         * Path to a backup file
         * @type {string || null}
         */
        this.File = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicateSetId = 'ReplicateSetId' in params ? params.ReplicateSetId : null;
        this.File = 'File' in params ? params.File : null;

    }
}

/**
 * DescribeDBBackups response structure.
 * @class
 */
class DescribeDBBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup list
         * @type {Array.<BackupInfo> || null}
         */
        this.BackupList = null;

        /**
         * Total number of backups
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

        if (params.BackupList) {
            this.BackupList = new Array();
            for (let z in params.BackupList) {
                let obj = new BackupInfo();
                obj.deserialize(params.BackupList[z]);
                this.BackupList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance details
 * @class
 */
class InstanceDetail extends  AbstractModel {
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
         * Billing type. Valid value: 0 (pay-as-you-go)
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Cluster type. Valid values: 0 (replica set instance), 1 (sharding instance),
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * Region information
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ information
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Network type. Valid values: 0 (basic network), 1 (VPC)
         * @type {number || null}
         */
        this.NetType = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID of VPC
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance status. Valid values: 0 (to be initialized), 1 (in process), 2 (running), -2 (expired)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Port number
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance expiration time
         * @type {string || null}
         */
        this.DeadLine = null;

        /**
         * Instance version information
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * Instance memory size in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in MB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Number of CPU cores of an instance
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * Instance machine type
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * Number of secondary nodes of an instance
         * @type {number || null}
         */
        this.SecondaryNum = null;

        /**
         * Number of instance shards
         * @type {number || null}
         */
        this.ReplicationSetNum = null;

        /**
         * Instance auto-renewal flag. Valid values: 0 (manual renewal), 1 (auto-renewal), 2 (no renewal upon expiration)
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Used capacity in MB
         * @type {number || null}
         */
        this.UsedVolume = null;

        /**
         * Start time of the maintenance time window
         * @type {string || null}
         */
        this.MaintenanceStart = null;

        /**
         * End time of the maintenance time window
         * @type {string || null}
         */
        this.MaintenanceEnd = null;

        /**
         * Shard information
         * @type {Array.<ShardInfo> || null}
         */
        this.ReplicaSets = null;

        /**
         * Information of read-only instances
         * @type {Array.<DBInstanceInfo> || null}
         */
        this.ReadonlyInstances = null;

        /**
         * Information of disaster recovery instances
         * @type {Array.<DBInstanceInfo> || null}
         */
        this.StandbyInstances = null;

        /**
         * Information of temp instances
         * @type {Array.<DBInstanceInfo> || null}
         */
        this.CloneInstances = null;

        /**
         * Information of associated instances. For a promoted instance, this field represents information of its temp instance; for a temp instance, this field represents information of its promoted instance; and for a read-only/disaster recovery instance, this field represents information of its primary instance
         * @type {DBInstanceInfo || null}
         */
        this.RelatedInstance = null;

        /**
         * Instance tag information set
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Instance version tag
         * @type {number || null}
         */
        this.InstanceVer = null;

        /**
         * Instance version tag
         * @type {number || null}
         */
        this.ClusterVer = null;

        /**
         * Protocol information. Valid values: 1 (mongodb), 2 (dynamodb)
         * @type {number || null}
         */
        this.Protocol = null;

        /**
         * Instance type. Valid values: 1 (promoted instance), 2 (temp instance), 3 (read-only instance), 4 (disaster recovery instance)
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Instance status description
         * @type {string || null}
         */
        this.InstanceStatusDesc = null;

        /**
         * Physical instance ID. For an instance that has been rolled back and replaced, its InstanceId and RealInstanceId are different. The physical instance ID is needed in such scenarios as getting monitoring data from Barad
         * @type {string || null}
         */
        this.RealInstanceId = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DeadLine = 'DeadLine' in params ? params.DeadLine : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.SecondaryNum = 'SecondaryNum' in params ? params.SecondaryNum : null;
        this.ReplicationSetNum = 'ReplicationSetNum' in params ? params.ReplicationSetNum : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.UsedVolume = 'UsedVolume' in params ? params.UsedVolume : null;
        this.MaintenanceStart = 'MaintenanceStart' in params ? params.MaintenanceStart : null;
        this.MaintenanceEnd = 'MaintenanceEnd' in params ? params.MaintenanceEnd : null;

        if (params.ReplicaSets) {
            this.ReplicaSets = new Array();
            for (let z in params.ReplicaSets) {
                let obj = new ShardInfo();
                obj.deserialize(params.ReplicaSets[z]);
                this.ReplicaSets.push(obj);
            }
        }

        if (params.ReadonlyInstances) {
            this.ReadonlyInstances = new Array();
            for (let z in params.ReadonlyInstances) {
                let obj = new DBInstanceInfo();
                obj.deserialize(params.ReadonlyInstances[z]);
                this.ReadonlyInstances.push(obj);
            }
        }

        if (params.StandbyInstances) {
            this.StandbyInstances = new Array();
            for (let z in params.StandbyInstances) {
                let obj = new DBInstanceInfo();
                obj.deserialize(params.StandbyInstances[z]);
                this.StandbyInstances.push(obj);
            }
        }

        if (params.CloneInstances) {
            this.CloneInstances = new Array();
            for (let z in params.CloneInstances) {
                let obj = new DBInstanceInfo();
                obj.deserialize(params.CloneInstances[z]);
                this.CloneInstances.push(obj);
            }
        }

        if (params.RelatedInstance) {
            let obj = new DBInstanceInfo();
            obj.deserialize(params.RelatedInstance)
            this.RelatedInstance = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceVer = 'InstanceVer' in params ? params.InstanceVer : null;
        this.ClusterVer = 'ClusterVer' in params ? params.ClusterVer : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceStatusDesc = 'InstanceStatusDesc' in params ? params.InstanceStatusDesc : null;
        this.RealInstanceId = 'RealInstanceId' in params ? params.RealInstanceId : null;

    }
}

/**
 * ModifyDBInstanceSpec request structure.
 * @class
 */
class ModifyDBInstanceSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cmgo-p8vnipr5. It is the same as the instance ID displayed on the TencentDB Console page
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Memory size after instance configuration change in GB. Memory and disk must be upgraded or degraded simultaneously
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Disk size after instance configuration change in GB. Memory and disk must be upgraded or degraded simultaneously. For degradation, the new disk capacity must be greater than 1.2 times the used disk capacity
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Oplog size after instance configuration change in GB, which ranges from 10% to 90% of the disk capacity and is 10% of the disk capacity by default
         * @type {number || null}
         */
        this.OplogSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.OplogSize = 'OplogSize' in params ? params.OplogSize : null;

    }
}

/**
 * Slow log statistics of MongoDB database
 * @class
 */
class SlowLogPattern extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow log pattern
         * @type {string || null}
         */
        this.Pattern = null;

        /**
         * Maximum execution time
         * @type {number || null}
         */
        this.MaxTime = null;

        /**
         * Average execution time
         * @type {number || null}
         */
        this.AverageTime = null;

        /**
         * Number of slow logs in this pattern
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
        this.Pattern = 'Pattern' in params ? params.Pattern : null;
        this.MaxTime = 'MaxTime' in params ? params.MaxTime : null;
        this.AverageTime = 'AverageTime' in params ? params.AverageTime : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * CreateDBInstanceHour response structure.
 * @class
 */
class CreateDBInstanceHourResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * List of IDs of created instances
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBackupDBInstance request structure.
 * @class
 */
class CreateBackupDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Valid values: 0 (logical backup), 1 (physical backup)
         * @type {number || null}
         */
        this.BackupMethod = null;

        /**
         * Backup remarks
         * @type {string || null}
         */
        this.BackupRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupRemark = 'BackupRemark' in params ? params.BackupRemark : null;

    }
}

/**
 * Description on the billing mode of an instance
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchased usage period (in month). Valid values: `1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36`. Default value: `1`.
(This parameter is required in `InquirePriceRenewDBInstances` and `RenewDBInstances` APIs.)
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Auto-renewal flag. Valid values:
`NOTIFY_AND_AUTO_RENEW`: notify expiration and renew automatically
`NOTIFY_AND_MANUAL_RENEW`: notify expiration but not renew automatically
`DISABLE_NOTIFY_AND_MANUAL_RENEW`: neither notify expiration nor renew automatically

Default value: `NOTIFY_AND_MANUAL_RENEW`. If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the instance will be automatically renewed on a monthly basis when the account balance is sufficient.
(This parameter is required in `InquirePriceRenewDBInstances` and `RenewDBInstances` APIs.)
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
 * InquirePriceCreateDBInstances response structure.
 * @class
 */
class InquirePriceCreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price.
         * @type {DBInstancePrice || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewDBInstances request structure.
 * @class
 */
class RenewDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of one or more instances to be operated. The value can be obtained from the `InstanceId` parameter returned by the `DescribeInstances` API. Up to 100 instances can be requested at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * The parameter setting for the prepaid mode (monthly subscription mode). This parameter can specify the renewal period, whether to set automatic renewal, and other attributes of the monthly subscription instance. This parameter is mandatory in monthly subscription.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * Details of an instance shard
 * @class
 */
class ShardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Used shard capacity
         * @type {number || null}
         */
        this.UsedVolume = null;

        /**
         * Shard ID
         * @type {string || null}
         */
        this.ReplicaSetId = null;

        /**
         * Shard name
         * @type {string || null}
         */
        this.ReplicaSetName = null;

        /**
         * Shard memory size in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Shard disk size in MB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Shard oplog size in MB
         * @type {number || null}
         */
        this.OplogSize = null;

        /**
         * Number of secondary nodes of a shard
         * @type {number || null}
         */
        this.SecondaryNum = null;

        /**
         * Shard physical ID
         * @type {string || null}
         */
        this.RealReplicaSetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsedVolume = 'UsedVolume' in params ? params.UsedVolume : null;
        this.ReplicaSetId = 'ReplicaSetId' in params ? params.ReplicaSetId : null;
        this.ReplicaSetName = 'ReplicaSetName' in params ? params.ReplicaSetName : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.OplogSize = 'OplogSize' in params ? params.OplogSize : null;
        this.SecondaryNum = 'SecondaryNum' in params ? params.SecondaryNum : null;
        this.RealReplicaSetId = 'RealReplicaSetId' in params ? params.RealReplicaSetId : null;

    }
}

module.exports = {
    ResetDBInstancePasswordResponse: ResetDBInstancePasswordResponse,
    DescribeSpecInfoRequest: DescribeSpecInfoRequest,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    DescribeSecurityGroupResponse: DescribeSecurityGroupResponse,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    BackupDownloadTaskStatus: BackupDownloadTaskStatus,
    CreateBackupDBInstanceResponse: CreateBackupDBInstanceResponse,
    DBInstancePrice: DBInstancePrice,
    DescribeBackupAccessResponse: DescribeBackupAccessResponse,
    InquirePriceCreateDBInstancesRequest: InquirePriceCreateDBInstancesRequest,
    DescribeSlowLogPatternsResponse: DescribeSlowLogPatternsResponse,
    ReplicaSetInfo: ReplicaSetInfo,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    AssignProjectRequest: AssignProjectRequest,
    SecurityGroupBound: SecurityGroupBound,
    CreateBackupDownloadTaskResponse: CreateBackupDownloadTaskResponse,
    ClientConnection: ClientConnection,
    InquirePriceModifyDBInstanceSpecRequest: InquirePriceModifyDBInstanceSpecRequest,
    BackupInfo: BackupInfo,
    InquirePriceRenewDBInstancesRequest: InquirePriceRenewDBInstancesRequest,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    SpecificationInfo: SpecificationInfo,
    CreateBackupDownloadTaskRequest: CreateBackupDownloadTaskRequest,
    DescribeSlowLogPatternsRequest: DescribeSlowLogPatternsRequest,
    DescribeSlowLogsResponse: DescribeSlowLogsResponse,
    FlushInstanceRouterConfigResponse: FlushInstanceRouterConfigResponse,
    InquirePriceModifyDBInstanceSpecResponse: InquirePriceModifyDBInstanceSpecResponse,
    SpecItem: SpecItem,
    DescribeSpecInfoResponse: DescribeSpecInfoResponse,
    InquirePriceRenewDBInstancesResponse: InquirePriceRenewDBInstancesResponse,
    ResetDBInstancePasswordRequest: ResetDBInstancePasswordRequest,
    TagInfo: TagInfo,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    OfflineIsolatedDBInstanceRequest: OfflineIsolatedDBInstanceRequest,
    DescribeDBInstanceDealRequest: DescribeDBInstanceDealRequest,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    AssignProjectResponse: AssignProjectResponse,
    BackupDownloadTask: BackupDownloadTask,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    DescribeClientConnectionsRequest: DescribeClientConnectionsRequest,
    DescribeDBInstanceDealResponse: DescribeDBInstanceDealResponse,
    ModifyDBInstanceSpecResponse: ModifyDBInstanceSpecResponse,
    SecurityGroup: SecurityGroup,
    OfflineIsolatedDBInstanceResponse: OfflineIsolatedDBInstanceResponse,
    DescribeBackupDownloadTaskRequest: DescribeBackupDownloadTaskRequest,
    DescribeBackupAccessRequest: DescribeBackupAccessRequest,
    RenameInstanceRequest: RenameInstanceRequest,
    DescribeSecurityGroupRequest: DescribeSecurityGroupRequest,
    RenewDBInstancesResponse: RenewDBInstancesResponse,
    DescribeBackupDownloadTaskResponse: DescribeBackupDownloadTaskResponse,
    RenameInstanceResponse: RenameInstanceResponse,
    DescribeClientConnectionsResponse: DescribeClientConnectionsResponse,
    FlushInstanceRouterConfigRequest: FlushInstanceRouterConfigRequest,
    DBInstanceInfo: DBInstanceInfo,
    DescribeSlowLogsRequest: DescribeSlowLogsRequest,
    BackupFile: BackupFile,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    InstanceDetail: InstanceDetail,
    ModifyDBInstanceSpecRequest: ModifyDBInstanceSpecRequest,
    SlowLogPattern: SlowLogPattern,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    CreateBackupDBInstanceRequest: CreateBackupDBInstanceRequest,
    InstanceChargePrepaid: InstanceChargePrepaid,
    InquirePriceCreateDBInstancesResponse: InquirePriceCreateDBInstancesResponse,
    RenewDBInstancesRequest: RenewDBInstancesRequest,
    ShardInfo: ShardInfo,

}
